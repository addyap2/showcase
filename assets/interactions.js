/* Interaction system — see INTERACTIONS.md.
   Desktop enhancement only; touch + reduced-motion get simpler feedback. */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var rich = fine && !reduce;

  // ---------- scroll-spy nav (all devices) ----------
  (function spy() {
    var links = {};
    document.querySelectorAll(".nav-link").forEach(function (a) {
      var id = a.getAttribute("href");
      if (id && id.charAt(0) === "#") links[id.slice(1)] = a;
    });
    var sections = ["work", "about", "services", "faq", "contact"]
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!("IntersectionObserver" in window) || !sections.length) return;
    var ids = sections.map(function (s) { return s.id; });
    var ticking = false;
    function update() {
      ticking = false;
      var ref = window.pageYOffset + window.innerHeight * 0.35; // reference line
      var current = null;
      sections.forEach(function (s) { if (s.offsetTop <= ref) current = s.id; }); // last one passed
      // at the very bottom, snap to the final section (it can't reach the line)
      if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.documentElement.scrollHeight - 2)
        current = ids[ids.length - 1];
      Object.keys(links).forEach(function (k) { links[k].classList.toggle("active", k === current); });
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  })();

  if (!rich) return; // everything below is desktop-only richness

  // ---------- custom cursor ----------
  var ring = document.querySelector(".cursor-ring");
  var dot = document.querySelector(".cursor-dot");
  if (ring && dot) {
    var tx = window.innerWidth / 2, ty = window.innerHeight / 2; // targets
    var rx = tx, ry = ty; // eased ring pos
    var active = false;

    window.addEventListener("pointermove", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      tx = e.clientX; ty = e.clientY;
      dot.style.transform = "translate3d(" + tx + "px," + ty + "px,0)";
      if (!active) { active = true; document.body.classList.add("cursor-active"); }
    }, { passive: true });

    window.addEventListener("pointerdown", function () { document.body.classList.add("cursor-down"); });
    window.addEventListener("pointerup", function () { document.body.classList.remove("cursor-down"); });
    document.addEventListener("mouseleave", function () { document.body.classList.remove("cursor-active"); active = false; });
    document.addEventListener("mouseenter", function () { if (active) document.body.classList.add("cursor-active"); });

    // hover lock-on for interactive elements
    var HOVER = "a, button, .card, .pill, [data-magnetic]";
    document.addEventListener("pointerover", function (e) {
      if (e.target.closest && e.target.closest(HOVER)) document.body.classList.add("cursor-hover");
    });
    document.addEventListener("pointerout", function (e) {
      if (e.target.closest && e.target.closest(HOVER) &&
          !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(HOVER)))
        document.body.classList.remove("cursor-hover");
    });

    (function loop() {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)";
      requestAnimationFrame(loop);
    })();
  }

  // ---------- hero wall: subtle pointer tilt ----------
  (function heroTilt() {
    var hero = document.querySelector(".hero");
    var stage = document.querySelector(".wall-stage");
    if (!hero || !stage) return;
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      stage.style.transform =
        "rotateY(" + (-9 + px * 6).toFixed(2) + "deg) rotateX(" +
        (4 - py * 6).toFixed(2) + "deg) rotate(1deg)";
    });
    hero.addEventListener("pointerleave", function () { stage.style.transform = ""; });
  })();

  // ---------- magnetic buttons ----------
  var STRENGTH = 0.32, CAP = 10;
  document.querySelectorAll("[data-magnetic]").forEach(function (el) {
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      var dx = e.clientX - (r.left + r.width / 2);
      var dy = e.clientY - (r.top + r.height / 2);
      var mx = Math.max(-CAP, Math.min(CAP, dx * STRENGTH));
      var my = Math.max(-CAP, Math.min(CAP, dy * STRENGTH));
      el.style.transform = "translate3d(" + mx.toFixed(1) + "px," + my.toFixed(1) + "px,0)";
    });
    el.addEventListener("pointerleave", function () { el.style.transform = ""; });
  });
})();
