const tabBtns   = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

function activateTab(tabName) {
  tabBtns.forEach(btn => {
    const isActive = btn.dataset.tab === tabName;
    btn.classList.toggle('tab-btn--active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });

  tabPanels.forEach(panel => {
    const isActive = panel.id === `panel-${tabName}`;
    panel.classList.toggle('tab-panel--active', isActive);

    if (isActive) {
      // Re-trigger scroll animations for elements in this panel
      panel.querySelectorAll('.animate-on-scroll:not(.is-visible)').forEach(el => {
        if (typeof scrollObserver !== 'undefined') {
          scrollObserver.observe(el);
        }
      });
    }
  });

  history.replaceState(null, '', `#${tabName}`);
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => activateTab(btn.dataset.tab));
});

// Deep-link: activate correct tab from URL hash on page load
(function initTabs() {
  const validTabs = ['lehre', 'forschung', 'kooperation'];
  const hash = window.location.hash.slice(1);
  if (validTabs.includes(hash)) {
    activateTab(hash);
  }
})();
