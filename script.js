// ── Drawer (mobile nav) ──────────────────────────────────
const hamburger = document.getElementById('hamburger');
const drawer    = document.getElementById('drawer');
const overlay   = document.getElementById('drawerOverlay');
const closeBtn  = document.getElementById('drawerClose');

function openDrawer()  { drawer.classList.add('open');    overlay.classList.add('active'); }
function closeDrawer() { drawer.classList.remove('open'); overlay.classList.remove('active'); }

if (hamburger) hamburger.addEventListener('click', openDrawer);
if (closeBtn)  closeBtn.addEventListener('click', closeDrawer);
if (overlay)   overlay.addEventListener('click', closeDrawer);

// ── State filtering ──────────────────────────────────────
const searchInput    = document.getElementById('searchInput');
const stateSelect    = document.getElementById('stateSelect');
const stateListItems = document.querySelectorAll('#stateList li');
const noResults      = document.getElementById('noResults');

function filterStates(query) {
  const q = query.trim().toLowerCase();
  let visible = 0;
  stateListItems.forEach(li => {
    const name = li.dataset.state.toLowerCase();
    const show = !q || name.includes(q);
    li.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    if (stateSelect) stateSelect.value = '';
    filterStates(searchInput.value);
  });
}

if (stateSelect) {
  stateSelect.addEventListener('change', () => {
    const val = stateSelect.value;
    if (searchInput) searchInput.value = val;
    filterStates(val);
  });
}
