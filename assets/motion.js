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

  // ---- hero H1: word rise that preserves the <em> accent + shimmer ----
  function splitHeroH1() {
    var h1 = document.querySelector(".h1-anim");
    if (!h1) return;
    if (h1.querySelector(".w")) return;             // already split for current text
    if (reduce) { h1.classList.add("words-in"); return; }
    var i = 0;
    function wrapInto(target, text, isEm) {
      var tokens = text.match(/\S+|\s+/g) || [];
      tokens.forEach(function (tok) {
        if (/^\s+$/.test(tok)) { target.appendChild(document.createTextNode(tok)); return; }
        var w = document.createElement("span"); w.className = "w";
        var inner = document.createElement("i"); inner.textContent = tok;
        inner.style.setProperty("--wi", i++);
        if (isEm) inner.className = "sh";
        w.appendChild(inner);
        target.appendChild(w);
      });
    }
    var frag = document.createDocumentFragment();
    Array.prototype.forEach.call(h1.childNodes, function (node) {
      if (node.nodeType === 3) { wrapInto(frag, node.textContent, false); }
      else if (node.nodeType === 1 && node.tagName === "EM") {
        var em = document.createElement("em");
        wrapInto(em, node.textContent, true);
        frag.appendChild(em);
      } else { frag.appendChild(node.cloneNode(true)); }
    });
    h1.innerHTML = "";
    h1.appendChild(frag);
    requestAnimationFrame(function () { requestAnimationFrame(function () { h1.classList.add("words-in"); }); });
  }

  // ---- count-up for numeric stats ----
  function countUp() {
    document.querySelectorAll(".stat .n").forEach(function (el) {
      if (el.__c) return;
      var m = el.textContent.trim().match(/^(\d+)$/);
      if (!m) return;
      el.__c = true;
      if (reduce) return;                            // leave the final value in place
      var target = parseInt(m[1], 10), start = null, dur = 1100;
      el.textContent = "0";
      requestAnimationFrame(function step(ts) {
        if (!start) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        el.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) requestAnimationFrame(step); else el.textContent = String(target);
      });
    });
  }


  function refresh() {
    splitHeroH1();
    countUp();
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
