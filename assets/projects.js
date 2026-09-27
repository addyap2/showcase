// Edit this file to add, remove or reorder projects. Each project renders one card.
// Every text field has { fr, en } — French is the default language.
// category must match one of the CATEGORIES ids below.
window.CATEGORIES = [
  { id: "learning",  label: { fr: "Applis d'apprentissage", en: "Language Learning Apps" } },
  { id: "training",  label: { fr: "Formation & enseignement", en: "Training & Teaching" } },
  { id: "business",  label: { fr: "Commerces & restauration", en: "Business & Hospitality" } },
  { id: "community", label: { fr: "Associations & sport", en: "Community & Sport" } }
];

window.PROJECTS = [
  // ---- Applis d'apprentissage ----
  {
    slug: "grammatica",
    title: "Grammatica",
    url: "https://grammatica.antonyaddy.com",
    category: "learning",
    blurb: {
      fr: "La grammaire anglaise expliquée en huit langues, avec des exercices auto-corrigés — pour étudier chaque règle dans la langue où l'on pense vraiment.",
      en: "English grammar explained in eight languages, with self-correcting exercises — so learners study each rule in the language they actually think in."
    },
    tags: { fr: ["8 langues", "Auto-correction"], en: ["8 languages", "Self-marking"] }
  },
  {
    slug: "speakup",
    title: "SpeakUp AI",
    url: "https://speakup-ai-english-trainer-api-serv.vercel.app",
    category: "learning",
    blurb: {
      fr: "Un coach d'anglais IA pour de vraies conversations — entretiens, voyages et affaires à travers 38 scénarios, avec un retour CECR instantané en 12 langues d'interface.",
      en: "An AI English coach for real conversations — interviews, travel and business across 38 scenarios, with instant CEFR feedback in 12 interface languages."
    },
    tags: { fr: ["Coach IA", "Retour CECR"], en: ["AI coach", "CEFR feedback"] }
  },
  {
    slug: "toeic-success-hub",
    title: "ToeicPath",
    url: "https://toeic-success-hub.vercel.app",
    category: "learning",
    blurb: {
      fr: "Une préparation au TOEIC complète et guidée, sur les quatre compétences et toutes les parties Listening & Reading — avec examens blancs et entraînement adaptatif, sans compte.",
      en: "Complete, guided TOEIC preparation across all four skills and every Listening & Reading part — with mock tests and adaptive practice, no account required."
    },
    tags: { fr: ["TOEIC", "Adaptatif"], en: ["TOEIC", "Adaptive"] }
  },
  {
    slug: "cloe-prep-path",
    title: "CLOE Prep",
    url: "https://cloe-prep-path.vercel.app",
    category: "learning",
    blurb: {
      fr: "Une préparation à la certification d'anglais CLOE orientée entreprise — les quatre compétences plus l'oral, autour de l'anglais réellement utilisé au travail.",
      en: "Workplace-focused preparation for the CLOE English certification — the four skills plus speaking, built around the English people really use at work."
    },
    tags: { fr: ["Certification", "Anglais pro"], en: ["Certification", "Business English"] }
  },
  {
    slug: "listening-english",
    title: "ListenUp",
    url: "https://listening-english-antonyaddy.vercel.app",
    category: "learning",
    blurb: {
      fr: "De la compréhension orale en anglais avec audio IA, surlignage karaoké mot à mot, quiz de compréhension et traductions instantanées en plus de dix langues.",
      en: "English listening practice with AI audio, word-by-word karaoke highlighting, comprehension quizzes and instant translations in ten-plus languages."
    },
    tags: { fr: ["Audio IA", "Texte karaoké"], en: ["AI audio", "Karaoke text"] }
  },
  {
    slug: "adventure-books",
    title: "English Reading Adventures",
    url: "https://adventure-books-five.vercel.app",
    category: "learning",
    blurb: {
      fr: "Des histoires interactives à embranchements où l'apprenant est le héros — à lire à son niveau, avec le sens disponible en huit langues.",
      en: "Interactive branching stories where the learner is the hero — read at your own level, with meaning available in eight languages."
    },
    tags: { fr: ["Histoires à choix", "Lecture graduée"], en: ["Branching stories", "Graded reading"] }
  },
  {
    slug: "anglais-a-distance",
    title: "Anglais à Distance",
    url: "https://anglais-a-distance-learn.vercel.app",
    category: "learning",
    blurb: {
      fr: "De l'anglais en ligne gratuit pour adultes francophones — grammaire, phrasal verbs, dialogues audio et quiz de vocabulaire, réunis au même endroit.",
      en: "Free online English for French-speaking adults — grammar, phrasal verbs, audio dialogues and vocabulary quizzes in one place."
    },
    tags: { fr: ["Pour francophones", "Gratuit"], en: ["For francophones", "Free"] }
  },
  {
    slug: "biz-fluent-coach",
    title: "TP English Pro",
    url: "https://ad-ruddy.vercel.app",
    category: "learning",
    blurb: {
      fr: "Une plateforme gratuite d'anglais professionnel pour le TP Assistant de Direction — exercices interactifs, simulateur d'examen et vocabulaire administratif.",
      en: "A free professional-English platform for France's TP Assistant de Direction qualification — interactive exercises, an exam simulator and administrative vocabulary."
    },
    tags: { fr: ["Simu. examen", "Professionnel"], en: ["Exam sim", "Professional"] }
  },

  // ---- Formation & enseignement ----
  {
    slug: "addys-english-pro",
    title: "Addy's English Pro",
    url: "https://addys-english-pro.vercel.app",
    category: "training",
    blurb: {
      fr: "Le site de coaching en anglais professionnel d'un formateur britannique certifié — pour entreprises, cadres et particuliers, dans le Var, les Alpes-Maritimes et à distance.",
      en: "The professional-English coaching site for a certified British trainer — for companies, executives and individuals across the Var, Alpes-Maritimes and online."
    },
    tags: { fr: ["Site vitrine", "EN / FR"], en: ["Service site", "EN / FR"] }
  },
  {
    slug: "addy-genai-training",
    title: "Formation IA Générative",
    url: "https://addy-genai-training.vercel.app",
    category: "training",
    blurb: {
      fr: "Un site de services pour des formations pratiques en IA générative — ChatGPT, Claude et Copilot pour entreprises et indépendants, en français ou en anglais.",
      en: "A service site for hands-on generative-AI training — ChatGPT, Claude and Copilot for companies and freelancers, delivered in French or English."
    },
    tags: { fr: ["IA générative", "Entreprises"], en: ["GenAI", "Corporate"] }
  },
  {
    slug: "addy-sap-connect",
    title: "SAP MM Training",
    url: "https://addy-sap-connect.vercel.app",
    category: "training",
    blurb: {
      fr: "Un site de formation SAP Materials Management — achats, gestion des stocks et données de base, en pratique, par un formateur bilingue EN/FR.",
      en: "A training site for SAP Materials Management — practical, hands-on procurement, inventory and master-data training from a bilingual EN/FR trainer."
    },
    tags: { fr: ["SAP", "Pratique"], en: ["SAP", "Hands-on"] }
  },
  {
    slug: "student-mark-tracker",
    title: "Student Mark Tracker",
    url: "https://student-mark-tracker.vercel.app",
    category: "training",
    blurb: {
      fr: "Un espace de travail privé et sécurisé pour un organisme de formation — documents, notes et progression de chaque apprenant, au propre et protégés par connexion.",
      en: "A private, secure workspace for a training business — documents, marks and individual student progress, kept clean and separate behind sign-in."
    },
    tags: { fr: ["Tableau de bord", "Connexion"], en: ["Dashboard", "Auth"] }
  },

  // ---- Commerces & restauration ----
  {
    slug: "ristorante-lola",
    title: "Ristorante da Lola",
    url: "https://ristorante-lola.vercel.app",
    category: "business",
    blurb: {
      fr: "Un site chaleureux en quatre langues pour un restaurant familial des Marches à Fermignano — menu, galerie et réservation, avec une vraie identité de lieu.",
      en: "A warm, four-language site for a family Marche-region restaurant in Fermignano — menu, gallery and booking, with an unmistakable sense of place."
    },
    tags: { fr: ["Restaurant", "4 langues"], en: ["Restaurant", "4 languages"] }
  },
  {
    slug: "tandoor-global",
    title: "Mr. Tandoors",
    url: "https://tandoor-global.vercel.app",
    category: "business",
    blurb: {
      fr: "Un site orienté commande pour un restaurant indien tandoor 100% halal à Fréjus — menu, histoire et commande à emporter en un clic.",
      en: "An ordering-focused site for a 100% halal Indian tandoor restaurant in Fréjus — menu, story and click-to-order takeaway."
    },
    tags: { fr: ["Restaurant", "Commande en ligne"], en: ["Restaurant", "Order online"] }
  },
  {
    slug: "essentia-myriam",
    title: "Essentia",
    url: "https://essentia-myriam.vercel.app",
    category: "business",
    blurb: {
      fr: "Un site de marque apaisant et multilingue pour une coach et psychothérapeute — coaching, psychothérapie et conseil RH réunis dans une identité soignée.",
      en: "A calm, multilingual brand site for a coach and psychotherapist — coaching, psychotherapy and HR consulting in one considered identity."
    },
    tags: { fr: ["Bien-être", "Multilingue"], en: ["Wellbeing", "Multilingual"] }
  },
  {
    slug: "stephanie",
    title: "SR Bien-être",
    url: "https://stephanie-plum.vercel.app",
    category: "business",
    blurb: {
      fr: "Le site d'une praticienne du bien-être à Saint-Raphaël — sophrologie, soins énergétiques, drainage lymphatique et yoga enfants, avec réservation en ligne.",
      en: "A wellbeing practitioner's site in Saint-Raphaël — sophrology, energy healing, lymphatic drainage and children's yoga, with online booking."
    },
    tags: { fr: ["Bien-être", "Réservation en ligne"], en: ["Wellbeing", "Online booking"] }
  },
  {
    slug: "lumbacure-france",
    title: "LumbaCure France",
    url: "https://lumbacure-france.vercel.app",
    category: "business",
    blurb: {
      fr: "Un site produit pour un dispositif innovant de mobilité lombo-pelvienne, présentant la science et la technologie à un public médical français.",
      en: "A product site for an innovative lumbo-pelvic mobility device, presenting the science and the technology to a French medical audience."
    },
    tags: { fr: ["Produit", "Médical"], en: ["Product", "Medical"] }
  },
  {
    slug: "planb-global-connect",
    title: "Plan B Concept",
    url: "https://planb-global-connect.vercel.app",
    category: "business",
    blurb: {
      fr: "Un site bilingue de gestion de projet pour la Côte d'Azur — plus de 30 ans d'expérience du bâtiment, du premier croquis à la livraison finale.",
      en: "A bilingual project-management site for the Côte d'Azur — 30+ years of build experience, from first sketch to final handover."
    },
    tags: { fr: ["Gestion de projet", "EN / FR"], en: ["Project mgmt", "EN / FR"] }
  },

  // ---- Associations & sport ----
  {
    slug: "filton-athletic-fc",
    title: "Filton Athletic FC",
    url: "https://filton-athletic-fc.vercel.app",
    category: "community",
    blurb: {
      fr: "Le site d'un club de football du nord de Bristol — calendrier, résultats, classements, programmes de match et moyens simples de s'impliquer.",
      en: "A football club site for north Bristol — fixtures, results, league tables, matchday programmes and clear ways to get involved."
    },
    tags: { fr: ["Football", "Calendrier & résultats"], en: ["Football", "Fixtures & results"] }
  },
  {
    slug: "filton-social-club",
    title: "Filton & District Social Club",
    url: "https://filton-social-club.vercel.app",
    category: "community",
    blurb: {
      fr: "Le site associatif du Filton & District Social Club — événements, installations et adhésion, présentés simplement et clairement.",
      en: "A community site for the Filton & District Social Club — events, facilities and membership, presented simply and clearly."
    },
    tags: { fr: ["Communauté", "Événements"], en: ["Community", "Events"] }
  }
];
