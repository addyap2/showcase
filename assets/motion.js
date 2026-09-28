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

  // ---- staggered word reveal for headings (.reveal-text) ----
  var textIO = null;
  if (!reduce && "IntersectionObserver" in window) {
    textIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("words-in"); textIO.unobserve(e.target); }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
  }
  function splitText(root) {
    (root || document).querySelectorAll(".reveal-text").forEach(function (el) {
      if (el.querySelector(".w")) return;           // already split for current text
      var text = el.textContent.replace(/\s+/g, " ").trim();
      if (!text) return;
      var words = text.split(" ");
      el.textContent = "";
      words.forEach(function (word, i) {
        var w = document.createElement("span"); w.className = "w";
        var inner = document.createElement("i"); inner.textContent = word;
        inner.style.setProperty("--wi", i);
        w.appendChild(inner);
        el.appendChild(w);
        if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
      });
      if (reduce || !textIO) { el.classList.add("words-in"); return; }
      el.classList.remove("words-in");
      textIO.observe(el);
    });
  }

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
      splitText(document);
      splitHeroH1();
      countUp();
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
  splitText(document);
  splitHeroH1();
  countUp();
  watchImages(document);
  bindTilt(document);
  onScrollFrame();
})();
