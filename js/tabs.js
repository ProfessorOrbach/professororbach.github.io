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

// Intercept nav/CTA link clicks that target tab hashes — scroll to section + activate tab
const validTabs = ['lehre', 'forschung', 'kooperation'];
document.querySelectorAll('a[href="#lehre"], a[href="#forschung"], a[href="#kooperation"]').forEach(link => {
  link.addEventListener('click', e => {
    const hash = link.getAttribute('href').slice(1);
    e.preventDefault();
    const section = document.querySelector('.tabs-section');
    section.scrollIntoView({ behavior: 'smooth' });
    activateTab(hash);
  });
});

// Deep-link: activate correct tab from URL hash on page load
(function initTabs() {
  const hash = window.location.hash.slice(1);
  if (validTabs.includes(hash)) {
    activateTab(hash);
  }
})();
