/* Main interaction JS */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Scroll reveal ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

  /* ── Counter animation ── */
  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(ease * target).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(step);
  }
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-target]').forEach(animateCount);
        countIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.stats, .stats-section').forEach(el => countIO.observe(el));

  /* ── Stat underline animation ── */
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); statIO.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat').forEach(el => statIO.observe(el));

  /* ── Product filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const prodItems  = document.querySelectorAll('.prod-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      prodItems.forEach(item => {
        item.classList.toggle('hidden', cat !== 'all' && item.dataset.cat !== cat);
      });
    });
  });

  /* ── Contact form success message ── */
  const params = new URLSearchParams(location.search);
  if (params.get('sent') === 'true') {
    const box = document.getElementById('form-success');
    if (box) { box.style.display = 'flex'; setTimeout(() => box.style.opacity = '1', 50); }
  }
});
