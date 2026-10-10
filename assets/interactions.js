/* Navigation and video controls — see INTERACTIONS.md. */
(function () {
  // ---------- scroll-spy nav (all devices) ----------
  (function spy() {
    var links = {};
    document.querySelectorAll(".nav-link").forEach(function (a) {
      var id = a.getAttribute("href");
      if (id && id.charAt(0) === "#") links[id.slice(1)] = a;
    });
    var sections = ["work", "lab", "video", "about", "services", "faq", "contact"]
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

    var playButton = document.getElementById("video-play");
    var error = document.getElementById("video-error");
    frame.classList.add("manual");
    function play() {
      if (error) error.hidden = true;
      var attempt = v.play();
      if (attempt && attempt.catch) attempt.catch(function () { if (error) error.hidden = false; });
    }
    if (playButton) {
      playButton.hidden = false;
      playButton.addEventListener("click", play);
      v.addEventListener("play", function () { playButton.hidden = true; });
      v.addEventListener("pause", function () { playButton.hidden = false; });
    }
    v.addEventListener("error", function () { if (error) error.hidden = false; });
    // Playback is intentional and stops when the film or tab is no longer visible.
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) v.pause();
      }, { threshold: 0.1 }).observe(frame);
    }
    document.addEventListener("visibilitychange", function () { if (document.hidden) v.pause(); });

    if (soundBtn) {
      soundBtn.addEventListener("click", function () {
        if (v.paused) play();
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

  // ---------- animated hero (desktop tilt + accessible pause) ----------
  (function animatedHero() {
    var hero = document.querySelector(".hero");
    var stage = document.querySelector(".wall-stage");
    var button = document.querySelector(".hero-motion-toggle");
    if (!hero || !stage || !button) return;
    var preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    var pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    var frame = null;
    function updatePreference() {
      button.hidden = preference.matches;
      if (preference.matches) stage.style.transform = "";
    }
    updatePreference();
    preference.addEventListener("change", updatePreference);
    button.addEventListener("click", function () {
      var paused = hero.classList.toggle("motion-paused");
      button.setAttribute("aria-pressed", String(paused));
      button.textContent = paused ? button.dataset.labelResume : button.dataset.labelPause;
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        hero.classList.toggle("hero-offscreen", !entries[0].isIntersecting);
      }).observe(hero);
    }
    document.addEventListener("visibilitychange", function () {
      hero.classList.toggle("hero-tab-hidden", document.hidden);
    });
    hero.addEventListener("pointermove", function (event) {
      if (preference.matches || !pointer.matches || window.innerWidth <= 980 || hero.classList.contains("motion-paused")) return;
      if (frame !== null) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(function () {
        var rect = hero.getBoundingClientRect();
        var px = (event.clientX - rect.left) / rect.width - 0.5;
        var py = (event.clientY - rect.top) / rect.height - 0.5;
        // Mirror the resting tilt in right-to-left layouts (wall sits on the left).
        var flip = document.documentElement.dir === "rtl" ? -1 : 1;
        stage.style.transform = "rotateY(" + (-9 * flip + px * 6).toFixed(2) + "deg) rotateX(" + (4 - py * 6).toFixed(2) + "deg) rotate(" + flip + "deg)";
        frame = null;
      });
    }, { passive: true });
    function resetTilt() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      stage.style.transform = "";
    }
    hero.addEventListener("pointerleave", resetTilt);
    window.addEventListener("resize", resetTilt, { passive: true });
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
    window.addEventListener("resize", function () { if (window.innerWidth > 1100) set(false); }, { passive: true });
  })();

})();
