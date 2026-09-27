/* Motion system — see MOTION.md. transform/opacity only, rAF-throttled,
   IntersectionObserver reveals, and a hard off-switch for reduced motion. */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // ---- scroll reveal (once) ----
  var revealIO = null;
  if (!reduce && "IntersectionObserver" in window) {
    revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  }
  function observeReveals(root) {
    var els = (root || document).querySelectorAll(".reveal:not(.in)");
    els.forEach(function (el) {
      if (reduce || !revealIO) { el.classList.add("in"); return; }
      if (el.__obs) return;
      el.__obs = true;
      revealIO.observe(el);
    });
  }

  // ---- image blur-up ----
  function watchImages(root) {
    (root || document).querySelectorAll(".shot img").forEach(function (img) {
      if (img.__w) return; img.__w = true;
      if (img.complete && img.naturalWidth > 0) { img.classList.add("loaded"); }
      else { img.addEventListener("load", function () { img.classList.add("loaded"); }, { once: true });
             img.addEventListener("error", function () { img.classList.add("loaded"); }, { once: true }); }
    });
  }

  // ---- card 3D tilt (fine pointer only) ----
  var MAX = 4; // degrees
  function bindTilt(root) {
    if (reduce || !finePointer) { watchImages(root); return; }
    (root || document).querySelectorAll(".card").forEach(function (card) {
      if (card.__tilt) return; card.__tilt = true;
      card.addEventListener("pointermove", function (ev) {
        var r = card.getBoundingClientRect();
        var px = (ev.clientX - r.left) / r.width - 0.5;
        var py = (ev.clientY - r.top) / r.height - 0.5;
        card.classList.add("is-tilt");
        card.style.willChange = "transform";
        card.style.transform =
          "perspective(1000px) rotateX(" + (-py * MAX).toFixed(2) + "deg) rotateY(" +
          (px * MAX).toFixed(2) + "deg) translateY(-6px)";
      });
      card.addEventListener("pointerleave", function () {
        card.classList.remove("is-tilt");
        card.style.transform = "";
        card.style.willChange = "";
      });
    });
  }

  // ---- public refresh (called after cards re-render) ----
  window.motion = {
    refresh: function () {
      observeReveals(document);
      watchImages(document);
      bindTilt(document);
    }
  };

  // ---- scroll-driven: progress bar, header state, hero parallax ----
  var bar = document.querySelector(".scroll-progress span");
  var header = document.querySelector(".site-header");
  var glow = document.querySelector(".hero-glow");
  var wall = document.querySelector(".hero-wall");
  var parallaxOn = !reduce && finePointer && window.innerWidth > 820;
  var ticking = false;

  function onScrollFrame() {
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? Math.min(1, y / h) : 0;
      bar.style.transform = "scaleX(" + p + ")";
    }
    if (header) header.classList.toggle("scrolled", y > 10);
    if (parallaxOn && glow) glow.style.transform = "translate3d(0," + (y * 0.15).toFixed(1) + "px,0)";
    if (parallaxOn && wall && y < window.innerHeight) wall.style.transform = "translate3d(0," + (y * -0.06).toFixed(1) + "px,0)";
    ticking = false;
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(onScrollFrame); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () {
    parallaxOn = !reduce && finePointer && window.innerWidth > 820;
    onScroll();
  }, { passive: true });

  // ---- init ----
  observeReveals(document);
  watchImages(document);
  bindTilt(document);
  onScrollFrame();
})();
