/* Short, once-only reveals. Content is visible by default. */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var observer = !reduce && "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 })
    : null;

  function refresh() {
    if (!observer) return;
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) {
      if (el.dataset.observed) return;
      el.dataset.observed = "true";
      // Never hide elements already in view, including cards revealed by filtering.
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("in");
      } else {
        el.classList.add("will-reveal");
        observer.observe(el);
      }
    });
  }
  window.motion = { refresh: refresh };
  refresh();

  var bar = document.querySelector(".scroll-progress span");
  var header = document.querySelector(".site-header");
  var ticking = false;
  function update() {
    var y = window.scrollY;
    var height = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = "scaleX(" + (height > 0 ? Math.min(1, y / height) : 0) + ")";
    if (header) header.classList.toggle("scrolled", y > 10);
    ticking = false;
  }
  function schedule() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  update();
})();
