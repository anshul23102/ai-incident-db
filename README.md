# AI Incident Database – India

A state-wise interactive database documenting AI-related harm incidents across India from 2021 to 2025. Built as part of a B.Tech Project at IIIT Delhi, Department of Social Science and Humanities.

🔗 **Live Site:** [https://anshul23102.github.io/ai-incident-db](https://anshul23102.github.io/ai-incident-db)

---

## About the Project

Artificial Intelligence misuse is no longer a future risk in India — it is an ongoing reality. This project documents and analyses state-wise incidents of AI-related harm including deepfakes, financial fraud, voice cloning scams, electoral manipulation, and algorithm-amplified communal conflict.

The database covers **28 Indian states** across a **2021–2025** timeline and categorises incidents into 6 primary harm types. It also documents governance responses at both the state and central government level.

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home page — browse all states with search and filter |
| `state.html` | Per-state view with two tabs: **Incidents** and **Governance** |
| `overall.html` | Interactive D3 map of India showing harm categories by state |
| `governance.html` | Central Government regulations, laws, and policy responses |

---

## Features

- **Interactive India Map** — D3.js powered map with clickable state dots, colour-coded by harm category, filterable legend
- **State-wise Incidents** — Documented cases with dates, summaries, and source links
- **Governance Tab** — State-level legal actions, court orders, police advisories, and platform responses for each state
- **Central Governance Page** — National laws and regulations including IT Rules 2021, DPDPA 2023, MeitY deepfake advisory, Election Commission AI guidelines, BNS cybercrime provisions, and more
- **Search & Filter** — Search states by name or filter by dropdown on the home page
- **Fully Responsive** — Works on mobile and desktop

---

## Harm Categories Covered

| Category | Description |
|----------|-------------|
| Political & Electoral Misinformation | Deepfake videos/audio of political figures to influence elections |
| Personal Deepfake Blackmail & Extortion | AI-generated explicit content used for harassment and sextortion |
| AI Voice Cloning Emergency Scams | Cloned voices of family members used to demand ransom |
| Deepfake Investment Fraud | Fake celebrity/public figure videos promoting fraudulent schemes |
| Deepfake Political Impersonation | Fabricated speeches and appearances of leaders |
| Digital Arrest & Impersonation | Scammers posing as CBI/police via deepfake video calls |
| AI Surveillance & Governance Risks | Facial recognition deployments with insufficient oversight |
| AI Identity Theft & Social Harm | Fabricated personas causing reputational and social damage |
| Algorithm-Amplified Communal Conflict | Platform algorithms boosting divisive content during tensions |

---

## Tech Stack

- Pure HTML, CSS, JavaScript — no frameworks, no backend
- [D3.js](https://d3js.org/) — interactive India map on the analysis page
- [TopoJSON](https://github.com/topojson/topojson) — geographic data for map rendering
- [Syne + DM Sans](https://fonts.google.com/) — typography
- Hosted on GitHub Pages

---

## Project Structure

```
ai-incident-db/
├── index.html          # Home — state list with search
├── state.html          # State detail — incidents + governance tabs
├── overall.html        # Interactive geographic analysis map
├── governance.html     # Central government regulations
├── styles.css          # All styling
├── script.js           # Search/filter + drawer logic
├── state.js            # All incident and governance data + render logic
└── Overall_analysis.png # Static map image (legacy reference)
```

---

## Data Sources

All incidents are sourced from verified, publicly available sources including:
- Times of India, Hindustan Times, The Hindu, Indian Express
- NDTV, Deccan Herald, New Indian Express
- Al Jazeera, Boomlive (fact-checking)
- Official government and court records
- Right-leaning, left-leaning, and centrist sources consulted for each incident to ensure balanced documentation

---

## Team

**B.Tech Project — IIIT Delhi**  
Department of Social Science and Humanities

- Anshul Jain (2023102)
- Dhruv Kantroo (2022167)
- Sukhmani Kaur 
- Siddhant Gautam (2021100)


**Supervisors:** Suriya Krishna B S · Deepshikha Manohar

---

## Running Locally

No installation needed. Just open with a local server:

**Using VS Code Live Server:**
1. Install the Live Server extension
2. Right-click `index.html` → Open with Live Server

**Using Python:**
```bash
python -m http.server 8000
# Open http://localhost:8000
```

---

## License

This project is for academic purposes. All incident data is sourced from publicly available news reports and official documents.
