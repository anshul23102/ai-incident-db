#!/usr/bin/env python3
"""
classify_incidents.py
---------------------
Reads all incidents from state.js, sends each to Claude API for semantic
classification on 6 axes, then writes the .cls field back into state.js.

Usage:
    export ANTHROPIC_API_KEY="sk-ant-..."
    python3 classify_incidents.py

Cost note: uses prompt caching — the system prompt is cached after the
first call, so ~127 incidents costs roughly the same as ~13 without caching.
"""

import anthropic
import json
import re
import sys
import time

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

MODEL = "claude-haiku-4-5"   # cheapest model — classification is a simple task
MAX_TOKENS = 300
SLEEP_BETWEEN_CALLS = 0.25   # seconds — avoids rate-limit bursts

SYSTEM_PROMPT = """\
You are an AI incident classifier for an Indian AI incident database.

Given an incident's title, summary, and/or description, classify it on exactly 6 axes.
Return ONLY a valid JSON object — no markdown fences, no extra text, just the JSON.

The JSON must have these exact keys:

{
  "harmType": one of:
    "deepfake-blackmail" | "investment-fraud" | "political-electoral" |
    "voice-cloning" | "digital-arrest" | "surveillance" |
    "communal-disinformation" | "identity-theft" | "other",

  "victimProfile": one of:
    "individual" | "business" | "public-figure" |
    "government" | "community" | "other",

  "severity": one of:
    "critical" | "major" | "notable",

  "aiTechnology": one of:
    "deepfake-video" | "voice-cloning" | "ai-generated-image" |
    "fake-app-platform" | "chatbot-llm" | "facial-recognition" |
    "algorithmic-amplification" | "other-ai",

  "response": one of:
    "arrested-convicted" | "court-fir" | "advisory-only" | "no-response",

  "lifecycle": one of:
    "deployment" | "data-collection" | "model-training" |
    "integration" | "monitoring" | "other"
}

Severity guidelines:
- critical: loss > ₹10 lakh, mass violence risk, large-scale electoral manipulation
- major: loss ₹1–10 lakh, significant harm to a named victim, court involvement
- notable: loss < ₹1 lakh, advisory/policy concern, preventive action

Base your classification on careful reading of the full incident context.
"""

# ---------------------------------------------------------------------------
# Parse state.js — extract the raw JS object literal as a string
# ---------------------------------------------------------------------------

def load_statejs(path: str) -> str:
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def extract_incidents_block(source: str) -> tuple[str, int, int]:
    """
    Find `const incidentsData = { ... };` and return
    (block_text, start_index, end_index) where end_index points just after '}'.
    """
    m = re.search(r"const\s+incidentsData\s*=\s*\{", source)
    if not m:
        raise ValueError("Could not find `const incidentsData = {` in state.js")
    start = m.end() - 1  # position of the opening '{'
    depth = 0
    i = start
    in_str = False
    str_char = None
    in_template = 0  # nesting depth for template literals
    while i < len(source):
        ch = source[i]
        # Handle template literals (backtick strings)
        if not in_str and ch == "`":
            in_str = True
            str_char = "`"
            i += 1
            continue
        if in_str and str_char == "`":
            if ch == "\\" :
                i += 2
                continue
            if ch == "`":
                in_str = False
                str_char = None
            i += 1
            continue
        # Handle regular strings
        if not in_str and ch in ('"', "'"):
            in_str = True
            str_char = ch
            i += 1
            continue
        if in_str:
            if ch == "\\" :
                i += 2
                continue
            if ch == str_char:
                in_str = False
                str_char = None
            i += 1
            continue
        # Track brace depth
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return source[start : i + 1], start, i + 1
        i += 1
    raise ValueError("Unmatched braces in incidentsData block")


# ---------------------------------------------------------------------------
# Convert JS object literal → Python dict (via eval in a controlled way)
# ---------------------------------------------------------------------------

def js_to_python(js_block: str) -> dict:
    """
    Converts the JS object literal for incidentsData into a Python dict.
    Uses Node.js to evaluate the JS literal — the only reliable approach
    for JS with template literals, bare keys, and trailing commas.
    """
    import subprocess

    script = f"process.stdout.write(JSON.stringify({js_block}))"
    try:
        result = subprocess.run(
            ["node", "-e", script],
            capture_output=True,
            text=True,
            check=True,
            timeout=30,
        )
        return json.loads(result.stdout)
    except subprocess.CalledProcessError as e:
        raise ValueError(f"Node.js failed to parse incidentsData:\n{e.stderr}") from e


# ---------------------------------------------------------------------------
# Flatten all incidents into a list, keeping state info
# ---------------------------------------------------------------------------

def flatten_incidents(data: dict) -> list[dict]:
    """Returns list of {state, index_in_state, incident_obj}"""
    flat = []
    for state, incidents in data.items():
        for idx, inc in enumerate(incidents):
            flat.append({"state": state, "idx": idx, "inc": inc})
    return flat


# ---------------------------------------------------------------------------
# Claude API call
# ---------------------------------------------------------------------------

def classify_incident(client: anthropic.Anthropic, inc: dict) -> dict:
    parts = []
    if inc.get("title"):
        parts.append(f"Title: {inc['title']}")
    if inc.get("summary"):
        parts.append(f"Summary: {inc['summary']}")
    if inc.get("description"):
        parts.append(f"Description: {inc['description']}")
    user_text = "\n".join(parts) or "(no content)"

    response = client.messages.create(
        model=MODEL,
        max_tokens=MAX_TOKENS,
        system=[
            {
                "type": "text",
                "text": SYSTEM_PROMPT,
                "cache_control": {"type": "ephemeral"},  # cached after first call
            }
        ],
        messages=[{"role": "user", "content": user_text}],
    )

    raw = response.content[0].text.strip()
    # Strip markdown code fences if Claude adds them despite instructions
    raw = re.sub(r"^```[a-z]*\n?", "", raw)
    raw = re.sub(r"\n?```$", "", raw)
    return json.loads(raw)


# ---------------------------------------------------------------------------
# Write .cls fields back into the raw JS source
# ---------------------------------------------------------------------------

def inject_cls_into_source(source: str, data: dict) -> str:
    """
    For each incident that now has a .cls field, inject
      cls: { ... },
    right after its `title:` line (or any other field) if not already present.

    Strategy: rebuild the incidentsData block from the Python dict,
    then splice it back into source.
    """
    block_text, blk_start, blk_end = extract_incidents_block(source)

    # Build a new JS object string from the updated Python dict
    new_block = build_js_block(data)

    return source[:blk_start] + new_block + source[blk_end:]


def py_to_js_string(value) -> str:
    """Recursively convert a Python value to a JS literal string."""
    if value is None:
        return "null"
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return str(value)
    if isinstance(value, str):
        # Use backtick for multiline, double-quote otherwise
        if "\n" in value or '"' in value:
            escaped = value.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
            return f"`{escaped}`"
        return json.dumps(value)
    if isinstance(value, list):
        items = ",\n    ".join(py_to_js_string(v) for v in value)
        return f"[\n    {items}\n  ]"
    if isinstance(value, dict):
        lines = []
        for k, v in value.items():
            lines.append(f"      {k}: {py_to_js_string(v)}")
        return "{\n" + ",\n".join(lines) + "\n    }"
    return json.dumps(value)


def build_js_block(data: dict) -> str:
    """Produce the full `{ "State": [...], ... }` block."""
    state_blocks = []
    for state, incidents in data.items():
        inc_lines = []
        for inc in incidents:
            fields = []
            for key, val in inc.items():
                if key == "cls" and isinstance(val, dict):
                    # Inline cls object
                    cls_fields = ", ".join(f'{k}: "{v}"' for k, v in val.items())
                    fields.append(f"      cls: {{ {cls_fields} }}")
                else:
                    fields.append(f"      {key}: {py_to_js_string(val)}")
            inc_lines.append("    {\n" + ",\n".join(fields) + "\n    }")
        state_js = json.dumps(state)
        inc_block = ",\n".join(inc_lines)
        state_blocks.append(f"  {state_js}: [\n{inc_block}\n  ]")
    return "{\n" + ",\n".join(state_blocks) + "\n\n}"


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    statejs_path = "state.js"

    print("Loading state.js …")
    source = load_statejs(statejs_path)

    print("Parsing incidentsData …")
    block_text, _, _ = extract_incidents_block(source)
    data = js_to_python(block_text)

    flat = flatten_incidents(data)
    total = len(flat)
    print(f"Found {total} incidents across {len(data)} states.\n")

    client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY env var

    classified = 0
    skipped = 0
    errors = 0

    for i, item in enumerate(flat):
        state = item["state"]
        idx = item["idx"]
        inc = item["inc"]

        # Skip if already classified
        if "cls" in inc and inc["cls"]:
            skipped += 1
            continue

        title = inc.get("title", "(no title)")
        print(f"[{i+1}/{total}] {state} — {title[:60]}")

        try:
            cls = classify_incident(client, inc)
            inc["cls"] = cls
            data[state][idx] = inc
            classified += 1
            print(f"       → {cls}")
        except Exception as e:
            errors += 1
            print(f"       ✗ ERROR: {e}", file=sys.stderr)

        if SLEEP_BETWEEN_CALLS > 0:
            time.sleep(SLEEP_BETWEEN_CALLS)

    print(f"\nDone. classified={classified}, skipped(already had cls)={skipped}, errors={errors}")

    if classified > 0:
        print("\nWriting updated state.js …")
        new_source = inject_cls_into_source(source, data)
        with open(statejs_path, "w", encoding="utf-8") as f:
            f.write(new_source)
        print("state.js updated successfully.")
    else:
        print("No new classifications — state.js unchanged.")


if __name__ == "__main__":
    main()
