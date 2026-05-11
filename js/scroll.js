const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el      = entry.target;
    const siblings = el.parentElement.querySelectorAll('.animate-on-scroll');
    let index = 0;

    siblings.forEach((sibling, i) => {
      if (sibling === el) index = i;
    });

    el.style.transitionDelay = `${index * 0.08}s`;
    el.classList.add('is-visible');
    scrollObserver.unobserve(el);
  });
}, {
  threshold:  0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  scrollObserver.observe(el);
});
