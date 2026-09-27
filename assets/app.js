(function () {
  var cats = window.CATEGORIES || [];
  var projects = window.PROJECTS || [];
  var catLabel = {};
  cats.forEach(function (c) { catLabel[c.id] = c.label; });

  // ---------- UI strings (French default) ----------
  var STRINGS = {
    fr: {
      "doc.title": "Antony Addy — Sites web & outils, conçus et développés avec l'IA",
      "brand.sub": "Sites web & outils",
      "nav.work": "Réalisations",
      "nav.about": "À propos",
      "nav.services": "Services",
      "nav.cta": "Démarrer un projet",
      "hero.kicker": "Conçus et développés avec l'IA",
      "hero.h1": "Des sites et des outils <em>livrés en quelques jours</em>, pas en plusieurs mois.",
      "hero.lead": "Je conçois et développe des sites web et des plateformes d'apprentissage rapides et bilingues — des applis pour apprendre les langues aux sites de restaurants, en passant par les projets associatifs et les outils sur mesure. De vrais produits, en ligne, développés avec l'IA et l'œil d'un formateur pour ceux qui les utilisent.",
      "hero.cta1": "Voir les réalisations",
      "hero.cta2": "Démarrer un projet",
      "stat1.n": "20+", "stat1.l": "Projets en ligne livrés",
      "stat2.n": "FR / EN", "stat2.l": "Livraison entièrement bilingue",
      "stat3.n": "Jours", "stat3.l": "De l'idée au site en ligne",
      "stat4.n": "4", "stat4.l": "Domaines, de la formation à la restauration",
      "work.eyebrow": "Réalisations choisies",
      "work.h2": "Un portfolio de produits réels, en ligne.",
      "work.p": "Chaque projet ci-dessous est en ligne. Filtrez par domaine, puis cliquez sur une carte pour ouvrir le site.",
      "filter.all": "Tout",
      "card.visit": "Voir le site",
      "about.eyebrow": "À propos",
      "about.h2": "Un formateur qui développe — avec l'IA comme atelier.",
      "about.p1": "Je m'appelle Antony Addy, formateur bilingue (anglais / français) certifié, basé dans le Sud de la France. Pendant des années, j'ai développé les outils dont mes propres apprenants avaient besoin ; aujourd'hui, je les conçois aussi pour d'autres.",
      "about.p2": "Avec l'IA dans la boucle, je passe d'une idée à un site soigné et déployé remarquablement vite — sans rien perdre du soin apporté. Un design épuré, un langage clair dans la langue de votre public, et des produits vraiment agréables à utiliser. Formation, restauration, sport, services professionnels : chacun reçoit un site qui lui ressemble.",
      "about.p3": "Si vous pouvez le décrire, il y a de fortes chances que je puisse le développer — et le mettre en ligne plus vite que vous ne l'imaginez.",
      "fact.k1": "Localisation", "fact.v1": "Sud de la France · Var & Alpes-Maritimes",
      "fact.k2": "Langues", "fact.v2": "Anglais & français, parfaitement bilingue",
      "fact.k3": "Parcours", "fact.v3": "Formateur professionnel certifié (FPA)",
      "fact.k4": "Réalise", "fact.v4": "Sites · applis d'apprentissage · tableaux de bord · outils",
      "fact.k5": "Approche", "fact.v5": "Assisté par l'IA, finalisé par l'humain",
      "svc.eyebrow": "Ce que je développe",
      "svc.h2": "Quatre types de projets, un même niveau de finition.",
      "svc1.h": "Plateformes d'apprentissage",
      "svc1.p": "Des applis interactives pour les langues et les compétences — exercices, retours par IA, audio et suivi de progression, pensées pour enseigner.",
      "svc2.h": "Sites de commerces & locaux",
      "svc2.p": "Restaurants, praticiens et services — multilingues, réservables, conçus pour faire venir les clients.",
      "svc3.h": "Professionnel & formation",
      "svc3.p": "Sites de services et plateformes de cours qui présentent clairement votre expertise et transforment les visiteurs en demandes.",
      "svc4.h": "Outils & tableaux de bord",
      "svc4.p": "Espaces de travail privés, suivis et outils internes — sécurisés, ordonnés, taillés exactement pour votre organisation.",
      "contact.eyebrow": "Démarrer un projet",
      "contact.h2": "Un projet à concrétiser ?",
      "contact.p": "Dites-moi ce que vous avez en tête — une appli d'apprentissage, un site pour votre activité, un outil pour gagner du temps. Je vous dirai honnêtement ce qui est possible et à quelle vitesse.",
      "contact.btn1": "Écrivez-moi",
      "contact.whatsapp": "WhatsApp",
      "contact.btn2": "Voir les réalisations",
      "mail.subject": "Demande de projet",
      "wa.text": "Bonjour Antony, j'aimerais discuter d'un projet.",
      "footer.sub": "Sites web & outils, développés avec l'IA"
    },
    en: {
      "doc.title": "Antony Addy — Websites & tools, designed and built with AI",
      "brand.sub": "Websites & tools",
      "nav.work": "Work",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.cta": "Start a project",
      "hero.kicker": "Designed & built with AI",
      "hero.h1": "Websites and tools that <em>ship in days</em>, not months.",
      "hero.lead": "I design and build fast, bilingual websites and learning platforms — from language-learning apps and restaurant sites to community projects and custom tools. Real, live products, built with AI in the loop and a trainer's eye for the people who use them.",
      "hero.cta1": "See the work",
      "hero.cta2": "Start a project",
      "stat1.n": "20+", "stat1.l": "Live projects shipped",
      "stat2.n": "EN / FR", "stat2.l": "Fully bilingual delivery",
      "stat3.n": "Days", "stat3.l": "From idea to live site",
      "stat4.n": "4", "stat4.l": "Fields, from teaching to hospitality",
      "work.eyebrow": "Selected work",
      "work.h2": "A portfolio of live, working products.",
      "work.p": "Every project below is deployed and online. Filter by field, then click any card to open the real site.",
      "filter.all": "All work",
      "card.visit": "Visit site",
      "about.eyebrow": "About",
      "about.h2": "A trainer who builds — with AI as the workshop.",
      "about.p1": "I'm Antony Addy, a certified bilingual (English / French) trainer based in the South of France. For years I've built the tools my own learners needed; today I design and build them for others too.",
      "about.p2": "Using AI in the loop, I move from a rough idea to a polished, deployed site remarkably fast — without losing the craft. Clean design, clear language in the tongue your audience thinks in, and products that are genuinely nice to use. Teaching, hospitality, sport, professional services: each one gets a site that fits it.",
      "about.p3": "If you can describe it, there's a good chance I can build it — and have it live sooner than you'd expect.",
      "fact.k1": "Based in", "fact.v1": "South of France · Var & Alpes-Maritimes",
      "fact.k2": "Languages", "fact.v2": "English & French, fully bilingual",
      "fact.k3": "Background", "fact.v3": "Certified professional trainer (FPA)",
      "fact.k4": "Builds", "fact.v4": "Sites · learning apps · dashboards · tools",
      "fact.k5": "Approach", "fact.v5": "AI-assisted, human-finished",
      "svc.eyebrow": "What I build",
      "svc.h2": "Four kinds of project, one standard of finish.",
      "svc1.h": "Learning platforms",
      "svc1.p": "Interactive apps for language and skills — exercises, AI feedback, audio and progress tracking, built to teach.",
      "svc2.h": "Business & local sites",
      "svc2.p": "Restaurants, practitioners and services — multilingual, bookable, and made to bring customers through the door.",
      "svc3.h": "Professional & training",
      "svc3.p": "Service sites and course platforms that present your expertise clearly and turn visitors into enquiries.",
      "svc4.h": "Tools & dashboards",
      "svc4.p": "Private workspaces, trackers and internal tools — secure, tidy, and shaped exactly to your workflow.",
      "contact.eyebrow": "Start a project",
      "contact.h2": "Have something you'd like built?",
      "contact.p": "Tell me what you have in mind — a learning app, a site for your business, a tool to save you time. I'll tell you honestly what's possible and how fast.",
      "contact.btn1": "Email me",
      "contact.whatsapp": "WhatsApp",
      "contact.btn2": "Browse the work",
      "mail.subject": "Project enquiry",
      "wa.text": "Hi Antony, I'd like to discuss a project.",
      "footer.sub": "Websites & tools, built with AI"
    }
  };

  var LANGS = ["fr", "en"];
  var lang = "fr";
  try {
    var saved = localStorage.getItem("lang");
    if (saved && LANGS.indexOf(saved) !== -1) lang = saved;
  } catch (e) {}

  function t(key) { return (STRINGS[lang] && STRINGS[lang][key]) || (STRINGS.en[key]) || ""; }
  function host(url) {
    try { return new URL(url).hostname.replace(/^www\./, ""); }
    catch (e) { return url; }
  }

  var grid = document.getElementById("grid");
  var filterBar = document.getElementById("filters");
  var currentFilter = "all";

  // ---------- static text ----------
  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t("doc.title");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    var mail = document.getElementById("mail-link");
    if (mail) mail.href = "mailto:antony@antonyaddy.com?subject=" + encodeURIComponent(t("mail.subject"));
    var wa = document.getElementById("wa-link");
    if (wa) wa.href = "https://wa.me/33649829826?text=" + encodeURIComponent(t("wa.text"));
  }

  // ---------- filters ----------
  function renderFilters() {
    filterBar.innerHTML = "";
    var counts = { all: projects.length };
    cats.forEach(function (c) {
      counts[c.id] = projects.filter(function (p) { return p.category === c.id; }).length;
    });
    function pill(id, label) {
      var b = document.createElement("button");
      b.className = "pill" + (id === currentFilter ? " active" : "");
      b.dataset.filter = id;
      b.innerHTML = label + '<span class="c">' + counts[id] + "</span>";
      b.addEventListener("click", function () {
        currentFilter = id;
        document.querySelectorAll(".pill").forEach(function (p) { p.classList.remove("active"); });
        b.classList.add("active");
        applyFilter(id);
      });
      return b;
    }
    filterBar.appendChild(pill("all", t("filter.all")));
    cats.forEach(function (c) { filterBar.appendChild(pill(c.id, c.label[lang])); });
  }

  // ---------- cards ----------
  function renderCards() {
    grid.innerHTML = "";
    projects.forEach(function (p, i) {
      var card = document.createElement("article");
      card.className = "card reveal";
      card.style.setProperty("--d", (i % 3) * 90 + "ms");
      card.dataset.category = p.category;
      var tags = (p.tags[lang] || []).map(function (x) { return "<span>" + x + "</span>"; }).join("");
      card.innerHTML =
        '<a class="cover" href="' + p.url + '" target="_blank" rel="noopener" aria-label="' + p.title + '"></a>' +
        '<div class="shot">' +
          '<span class="cat-tag">' + (catLabel[p.category][lang] || "") + "</span>" +
          '<img loading="lazy" src="screenshots/' + p.slug + '.jpg" alt="' + p.title + '">' +
        "</div>" +
        '<div class="card-body">' +
          "<h3>" + p.title + "</h3>" +
          "<p>" + p.blurb[lang] + "</p>" +
          '<div class="tags">' + tags + "</div>" +
          '<div class="card-foot">' +
            '<span class="host">' + host(p.url) + "</span>" +
            '<span class="visit">' + t("card.visit") + ' <span class="arr">↗</span></span>' +
          "</div>" +
        "</div>";
      grid.appendChild(card);
    });
    applyFilter(currentFilter);
    if (window.motion) window.motion.refresh();
  }

  function applyFilter(id) {
    document.querySelectorAll(".card").forEach(function (card) {
      var show = id === "all" || card.dataset.category === id;
      card.style.display = show ? "" : "none";
    });
  }

  // ---------- language toggle ----------
  function setLang(next) {
    lang = next;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    applyStatic();
    renderFilters();
    renderCards();
  }
  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  // ---------- init ----------
  applyStatic();
  renderFilters();
  renderCards();
  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  // scroll reveals, image blur-up and card tilt are handled by motion.js
  if (window.motion) window.motion.refresh();

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
