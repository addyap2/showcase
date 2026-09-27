(function () {
  var cats = window.CATEGORIES || [];
  var projects = window.PROJECTS || [];
  var catLabel = {};
  cats.forEach(function (c) { catLabel[c.id] = c.label; });

  function host(url) {
    try { return new URL(url).hostname.replace(/^www\./, ""); }
    catch (e) { return url; }
  }

  // ---- filter pills ----
  var filterBar = document.getElementById("filters");
  var counts = { all: projects.length };
  cats.forEach(function (c) {
    counts[c.id] = projects.filter(function (p) { return p.category === c.id; }).length;
  });

  function pill(id, label) {
    var b = document.createElement("button");
    b.className = "pill" + (id === "all" ? " active" : "");
    b.dataset.filter = id;
    b.innerHTML = label + '<span class="c">' + counts[id] + "</span>";
    b.addEventListener("click", function () {
      document.querySelectorAll(".pill").forEach(function (p) { p.classList.remove("active"); });
      b.classList.add("active");
      applyFilter(id);
    });
    return b;
  }
  filterBar.appendChild(pill("all", "All work"));
  cats.forEach(function (c) { filterBar.appendChild(pill(c.id, c.label)); });

  // ---- cards ----
  var grid = document.getElementById("grid");
  projects.forEach(function (p) {
    var card = document.createElement("article");
    card.className = "card reveal";
    card.dataset.category = p.category;
    var tags = (p.tags || []).map(function (t) { return "<span>" + t + "</span>"; }).join("");
    card.innerHTML =
      '<a class="cover" href="' + p.url + '" target="_blank" rel="noopener" aria-label="Visit ' + p.title + '"></a>' +
      '<div class="shot">' +
        '<span class="cat-tag">' + (catLabel[p.category] || "") + "</span>" +
        '<img loading="lazy" src="screenshots/' + p.slug + '.jpg" alt="Screenshot of ' + p.title + '">' +
      "</div>" +
      '<div class="card-body">' +
        "<h3>" + p.title + "</h3>" +
        "<p>" + p.blurb + "</p>" +
        '<div class="tags">' + tags + "</div>" +
        '<div class="card-foot">' +
          '<span class="host">' + host(p.url) + "</span>" +
          '<span class="visit">Visit site <span class="arr">↗</span></span>' +
        "</div>" +
      "</div>";
    grid.appendChild(card);
  });

  function applyFilter(id) {
    document.querySelectorAll(".card").forEach(function (card) {
      var show = id === "all" || card.dataset.category === id;
      card.style.display = show ? "" : "none";
    });
  }

  // ---- scroll reveal ----
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // ---- year ----
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
