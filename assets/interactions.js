/* Navigation and video controls — see INTERACTIONS.md. */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- scroll-spy nav (all devices) ----------
  (function spy() {
    var links = {};
    document.querySelectorAll(".nav-link").forEach(function (a) {
      var id = a.getAttribute("href");
      if (id && id.charAt(0) === "#") links[id.slice(1)] = a;
    });
    var sections = ["work", "video", "about", "services", "faq", "contact"]
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
      Object.keys(links).forEach(function (k) {
        links[k].classList.toggle("active", k === current);
        if (k === current) links[k].setAttribute("aria-current", "location");
        else links[k].removeAttribute("aria-current");
      });
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  })();

  // ---------- video pitch (all devices) ----------
  (function pitchVideo() {
    var frame = document.querySelector(".video-frame");
    var v = document.getElementById("pitch-video");
    var soundBtn = document.getElementById("video-sound");
    if (!frame || !v) return;

    var conn = navigator.connection || navigator.webkitConnection || {};
    var saveData = !!conn.saveData;
    // Autoplay only on larger screens: keeps mobile data + battery untouched
    // (on phones the poster shows and the button plays it on tap).
    var canAuto = !reduce && !saveData && window.innerWidth >= 768;
    // Muted autoplay while the section is in view (captions carry the message).
    if (canAuto && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var p = v.play(); if (p && p.catch) p.catch(function () {});
          } else if (!v.ended) {
            v.pause();
          }
        });
      }, { threshold: 0.45 });
      io.observe(frame);
    } else {
      frame.classList.add("manual");
    }

    if (soundBtn) {
      soundBtn.addEventListener("click", function () {
        if (v.paused) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        v.muted = !v.muted;
        var on = !v.muted;
        frame.classList.toggle("sound-on", on);
        soundBtn.setAttribute("aria-pressed", String(on));
        var label = soundBtn.getAttribute(on ? "data-label-on" : "data-label-off");
        if (label) {
          soundBtn.setAttribute("aria-label", label);
          soundBtn.querySelector("span").textContent = label;
        }
        if (on && window.track) window.track("video_sound_on");
      });
    }
  })();

  // ---------- mobile menu (all devices) ----------
  (function mobileMenu() {
    var btn = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!btn || !nav) return;
    function set(open) {
      nav.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
    }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      set(!nav.classList.contains("open"));
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { set(false); btn.focus(); } });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("open") && !nav.contains(e.target) && !btn.contains(e.target)) set(false);
    });
    window.addEventListener("resize", function () { if (window.innerWidth > 900) set(false); }, { passive: true });
  })();

})();
