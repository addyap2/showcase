// Edit this file to add, remove or reorder projects. Each project renders one card.
// category must match one of the CATEGORIES ids below.
window.CATEGORIES = [
  { id: "learning",   label: "Language Learning Apps" },
  { id: "training",   label: "Training & Teaching" },
  { id: "business",   label: "Business & Hospitality" },
  { id: "community",  label: "Community & Sport" }
];

window.PROJECTS = [
  // ---- Language Learning Apps ----
  {
    slug: "grammatica",
    title: "Grammatica",
    url: "https://grammatica.antonyaddy.com",
    category: "learning",
    blurb: "English grammar explained in eight languages, with self-correcting exercises — so learners study each rule in the language they actually think in.",
    tags: ["8 languages", "Self-marking"]
  },
  {
    slug: "speakup",
    title: "SpeakUp AI",
    url: "https://speakup-ai-english-trainer-api-serv.vercel.app",
    category: "learning",
    blurb: "An AI English coach for real conversations — interviews, travel and business across 38 scenarios, with instant CEFR feedback in 12 interface languages.",
    tags: ["AI coach", "CEFR feedback"]
  },
  {
    slug: "toeic-success-hub",
    title: "ToeicPath",
    url: "https://toeic-success-hub.vercel.app",
    category: "learning",
    blurb: "Complete, guided TOEIC preparation across all four skills and every Listening & Reading part — with mock tests and adaptive practice, no account required.",
    tags: ["TOEIC", "Adaptive"]
  },
  {
    slug: "cloe-prep-path",
    title: "CLOE Prep",
    url: "https://cloe-prep-path.vercel.app",
    category: "learning",
    blurb: "Workplace-focused preparation for the CLOE English certification — the four skills plus speaking, built around the English people really use at work.",
    tags: ["Certification", "Business English"]
  },
  {
    slug: "listening-english",
    title: "ListenUp",
    url: "https://listening-english-antonyaddy.vercel.app",
    category: "learning",
    blurb: "English listening practice with AI audio, word-by-word karaoke highlighting, comprehension quizzes and instant translations in ten-plus languages.",
    tags: ["AI audio", "Karaoke text"]
  },
  {
    slug: "adventure-books",
    title: "English Reading Adventures",
    url: "https://adventure-books-five.vercel.app",
    category: "learning",
    blurb: "Interactive branching stories where the learner is the hero — read at your own level, with meaning available in eight languages.",
    tags: ["Branching stories", "Graded reading"]
  },
  {
    slug: "anglais-a-distance",
    title: "Anglais à Distance",
    url: "https://anglais-a-distance-learn.vercel.app",
    category: "learning",
    blurb: "Free online English for French-speaking adults — grammar, phrasal verbs, audio dialogues and vocabulary quizzes in one place.",
    tags: ["For francophones", "Free"]
  },
  {
    slug: "biz-fluent-coach",
    title: "TP English Pro",
    url: "https://ad-ruddy.vercel.app",
    category: "learning",
    blurb: "A free professional-English platform for France's TP Assistant de Direction qualification — interactive exercises, an exam simulator and administrative vocabulary.",
    tags: ["Exam sim", "Professional"]
  },

  // ---- Training & Teaching ----
  {
    slug: "addys-english-pro",
    title: "Addy's English Pro",
    url: "https://addys-english-pro.vercel.app",
    category: "training",
    blurb: "The professional-English coaching site for a certified British trainer — for companies, executives and individuals across the Var, Alpes-Maritimes and online.",
    tags: ["Service site", "EN / FR"]
  },
  {
    slug: "addy-genai-training",
    title: "Formation IA Générative",
    url: "https://addy-genai-training.vercel.app",
    category: "training",
    blurb: "A service site for hands-on generative-AI training — ChatGPT, Claude and Copilot for companies and freelancers, delivered in French or English.",
    tags: ["GenAI", "Corporate"]
  },
  {
    slug: "addy-sap-connect",
    title: "SAP MM Training",
    url: "https://addy-sap-connect.vercel.app",
    category: "training",
    blurb: "A training site for SAP Materials Management — practical, hands-on procurement, inventory and master-data training from a bilingual EN/FR trainer.",
    tags: ["SAP", "Hands-on"]
  },
  {
    slug: "student-mark-tracker",
    title: "Student Mark Tracker",
    url: "https://student-mark-tracker.vercel.app",
    category: "training",
    blurb: "A private, secure workspace for a training business — documents, marks and individual student progress, kept clean and separate behind sign-in.",
    tags: ["Dashboard", "Auth"]
  },

  // ---- Business & Hospitality ----
  {
    slug: "ristorante-lola",
    title: "Ristorante da Lola",
    url: "https://ristorante-lola.vercel.app",
    category: "business",
    blurb: "A warm, four-language site for a family Marche-region restaurant in Fermignano — menu, gallery and booking, with an unmistakable sense of place.",
    tags: ["Restaurant", "4 languages"]
  },
  {
    slug: "tandoor-global",
    title: "Mr. Tandoors",
    url: "https://tandoor-global.vercel.app",
    category: "business",
    blurb: "An ordering-focused site for a 100% halal Indian tandoor restaurant in Fréjus — menu, story and click-to-order takeaway.",
    tags: ["Restaurant", "Order online"]
  },
  {
    slug: "essentia-myriam",
    title: "Essentia",
    url: "https://essentia-myriam.vercel.app",
    category: "business",
    blurb: "A calm, multilingual brand site for a coach and psychotherapist — coaching, psychotherapy and HR consulting in one considered identity.",
    tags: ["Wellbeing", "Multilingual"]
  },
  {
    slug: "stephanie",
    title: "SR Bien-être",
    url: "https://stephanie-plum.vercel.app",
    category: "business",
    blurb: "A wellbeing practitioner's site in Saint-Raphaël — sophrology, energy healing, lymphatic drainage and children's yoga, with online booking.",
    tags: ["Wellbeing", "Online booking"]
  },
  {
    slug: "lumbacure-france",
    title: "LumbaCure France",
    url: "https://lumbacure-france.vercel.app",
    category: "business",
    blurb: "A product site for an innovative lumbo-pelvic mobility device, presenting the science and the technology to a French medical audience.",
    tags: ["Product", "Medical"]
  },
  {
    slug: "planb-global-connect",
    title: "Plan B Concept",
    url: "https://planb-global-connect.vercel.app",
    category: "business",
    blurb: "A bilingual project-management site for the Côte d'Azur — 30+ years of build experience, from first sketch to final handover.",
    tags: ["Project mgmt", "EN / FR"]
  },

  // ---- Community & Sport ----
  {
    slug: "filton-athletic-fc",
    title: "Filton Athletic FC",
    url: "https://filton-athletic-fc.vercel.app",
    category: "community",
    blurb: "A football club site for north Bristol — fixtures, results, league tables, matchday programmes and clear ways to get involved.",
    tags: ["Football", "Fixtures & results"]
  },
  {
    slug: "filton-social-club",
    title: "Filton & District Social Club",
    url: "https://filton-social-club.vercel.app",
    category: "community",
    blurb: "A community site for the Filton & District Social Club — events, facilities and membership, presented simply and clearly.",
    tags: ["Community", "Events"]
  }
];
