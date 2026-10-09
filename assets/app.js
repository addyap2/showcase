(function () {
  var cats = window.CATEGORIES || [];
  var projects = window.PROJECTS || [];
  var catLabel = {};
  cats.forEach(function (c) { catLabel[c.id] = c.label; });

  // ---------- UI strings (French default) ----------
  var STRINGS = {
    fr: {
      "doc.title": "Antony Addy — Sites web & outils, conçus et développés avec l'IA",
      "skip": "Aller au contenu",
      "brand.sub": "Sites web & outils",
      "nav.work": "Réalisations",
      "nav.about": "À propos",
      "nav.services": "Services",
      "nav.faq": "FAQ",
      "nav.video": "Vidéo",
      "nav.cta": "Démarrer un projet",
      "nav.menu": "Menu",
      "nav.lang": "Langue",
      "hero.kicker": "Conçus et développés avec l'IA",
      "hero.h1": "Des sites et des outils soignés, <em>pensés pour votre activité</em>.",
      "hero.lead": "Des sites web multilingues et des outils sur mesure. Un design soigné, un interlocuteur, de l’idée à la mise en ligne.",
      "hero.cta1": "Voir les réalisations",
      "hero.cta2": "Démarrer un projet",
      "stat1.n": "20", "stat1.l": "Projets présentés",
      "stat2.n": "Multilingue", "stat2.l": "Dans la langue de votre public",
      "video.eyebrow": "En vidéo · 1 min",
      "video.h2": "De l'idée au lancement, en une minute.",
      "video.p": "Une courte vidéo pour comprendre ma façon de travailler : ce qui coince habituellement avec le web, et comment, l'IA dans la boucle, je passe de votre idée à un produit en ligne — soigné et bilingue — en quelques jours.",
      "video.pt1": "De l'idée au site en ligne en quelques jours, pas en plusieurs mois.",
      "video.pt2": "Des sites et outils entièrement bilingues (FR / EN), finis dans les moindres détails.",
      "video.pt3": "En option, un forfait mensuel sur mesure pour les mises à jour et évolutions — ajusté à vos besoins réels.",
      "video.cta": "Démarrer un projet",
      "video.cta2": "Voir les réalisations",
      "video.sound": "Activer le son",
      "video.sound_on": "Couper le son",
      "video.aria": "Vidéo : sites web sur mesure, développés en quelques jours",
      "work.eyebrow": "Réalisations choisies",
      "work.h2": "Un portfolio de produits réels, en ligne.",
      "work.p": "Des restaurants aux applis d’apprentissage : explorez les projets par domaine et découvrez les sites en ligne.",
      "filter.all": "Tout",
      "work.count": "projets",
      "hero.preview": "Aperçu des réalisations",
      "hero.pause": "Mettre l’animation en pause",
      "hero.resume": "Reprendre l’animation",
            "group.local": "Créations locales",
      "group.learning": "Éducation & formation",
      "card.visit": "Voir le site",
      "card.progress": "En cours",
      "card.soon": "Bientôt en ligne",
      "testi.sample": "Exemple de témoignage",
      "about.eyebrow": "À propos",
      "about.h2": "Un concepteur de sites et d'outils, avec l'œil d'un formateur.",
      "about.p1": "Je m'appelle Antony Addy. Je conçois et développe des sites web et des outils sur mesure, en anglais comme en français, depuis le Sud de la France. Formateur bilingue certifié à l'origine, j'ai commencé par créer les outils dont mes propres apprenants avaient besoin ; aujourd'hui, je les conçois pour des restaurants, des commerces, des associations et des entreprises.",
      "about.p2": "Avec l'IA dans la boucle, je passe d'une idée à un site soigné et déployé remarquablement vite — sans rien perdre du soin apporté. Un design épuré, un langage clair dans la langue de votre public, et des produits vraiment agréables à utiliser. Restauration, commerces, sport, services professionnels, formation : chacun reçoit un site qui lui ressemble.",
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
      "faq.eyebrow": "Questions fréquentes",
      "faq.h2": "Ce qu'on me demande souvent.",
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
      "skip": "Skip to content",
      "brand.sub": "Websites & tools",
      "nav.work": "Work",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.faq": "FAQ",
      "nav.video": "Video",
      "nav.cta": "Start a project",
      "nav.menu": "Menu",
      "nav.lang": "Language",
      "hero.kicker": "Designed & built with AI",
      "hero.h1": "Websites and tools, <em>crafted to fit</em> your business.",
      "hero.lead": "Multilingual websites and custom tools. Thoughtful design and one person to guide your project, from first idea to launch.",
      "hero.cta1": "See the work",
      "hero.cta2": "Start a project",
      "stat1.n": "20", "stat1.l": "Projects showcased",
      "stat2.n": "Multilingual", "stat2.l": "In your audience’s language",
      "video.eyebrow": "Watch · 1 min",
      "video.h2": "From idea to launch, in one minute.",
      "video.p": "A short video on how I work: what usually makes the web slow and painful, and how — with AI in the loop — I turn your idea into a polished, bilingual, live product in a matter of days.",
      "video.pt1": "From idea to a live site in days, not months.",
      "video.pt2": "Fully bilingual (EN / FR) sites and tools, finished down to the details.",
      "video.pt3": "Optional custom monthly plan for updates and upgrades — sized to your real needs.",
      "video.cta": "Start a project",
      "video.cta2": "See the work",
      "video.sound": "Turn on sound",
      "video.sound_on": "Mute",
      "video.aria": "Video: custom websites, built in a few days",
      "work.eyebrow": "Selected work",
      "work.h2": "A portfolio of live, working products.",
      "work.p": "From restaurants to learning apps: explore the projects by field and visit the live sites.",
      "filter.all": "All work",
      "work.count": "projects",
      "hero.preview": "Work previews",
      "hero.pause": "Pause animation",
      "hero.resume": "Resume animation",
            "group.local": "Local creations",
      "group.learning": "Learning & training",
      "card.visit": "Visit site",
      "card.progress": "In progress",
      "card.soon": "Coming soon",
      "testi.sample": "Sample testimonial",
      "about.eyebrow": "About",
      "about.h2": "A builder of websites and tools, with a trainer's eye.",
      "about.p1": "I'm Antony Addy. I design and build custom websites and tools — in English and French — from the South of France. A certified bilingual trainer by background, I started by building the tools my own learners needed; today I build them for restaurants, local businesses, community clubs and companies too.",
      "about.p2": "Using AI in the loop, I move from a rough idea to a polished, deployed site remarkably fast — without losing the craft. Clean design, clear language in the tongue your audience thinks in, and products that are genuinely nice to use. Hospitality, local business, sport, professional services, teaching: each one gets a site that fits it.",
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
      "faq.eyebrow": "Frequently asked",
      "faq.h2": "What people usually ask.",
      "contact.eyebrow": "Start a project",
      "contact.h2": "Have something you'd like built?",
      "contact.p": "Tell me what you have in mind — a learning app, a site for your business, a tool to save you time. I'll tell you honestly what's possible and how fast.",
      "contact.btn1": "Email me",
      "contact.whatsapp": "WhatsApp",
      "contact.btn2": "Browse the work",
      "mail.subject": "Project enquiry",
      "wa.text": "Hi Antony, I'd like to discuss a project.",
      "footer.sub": "Websites & tools, built with AI"
    },
    es: {
      "doc.title": "Antony Addy — Sitios web y herramientas, diseñados y creados con IA",
      "skip": "Saltar al contenido",
      "brand.sub": "Sitios web y herramientas",
      "nav.work": "Proyectos", "nav.about": "Acerca de", "nav.services": "Servicios", "nav.faq": "FAQ", "nav.video": "Vídeo", "nav.cta": "Iniciar un proyecto", "nav.menu": "Menú", "nav.lang": "Idioma",
      "hero.kicker": "Diseñados y creados con IA",
      "hero.h1": "Sitios y herramientas cuidados, <em>pensados para tu actividad</em>.",
      "hero.lead": "Sitios web multilingües y herramientas a medida. Diseño cuidado y una sola persona para guiar tu proyecto, de la idea al lanzamiento.",
      "hero.cta1": "Ver los proyectos", "hero.cta2": "Iniciar un proyecto",
      "stat1.n": "20", "stat1.l": "Proyectos presentados",
      "stat2.n": "Multilingüe", "stat2.l": "En el idioma de tu público",
      "video.eyebrow": "En vídeo · 1 min",
      "video.h2": "De la idea al lanzamiento, en un minuto.",
      "video.p": "Un breve vídeo sobre mi forma de trabajar: lo que suele hacer la web lenta y complicada, y cómo —con la IA en el proceso— convierto tu idea en un producto en línea, cuidado y bilingüe, en cuestión de días.",
      "video.pt1": "De la idea a un sitio en línea en días, no en meses.",
      "video.pt2": "Sitios y herramientas totalmente bilingües (EN / FR), cuidados hasta el detalle.",
      "video.pt3": "Opcional: un plan mensual a medida para actualizaciones y mejoras — ajustado a tus necesidades reales.",
      "video.cta": "Iniciar un proyecto", "video.cta2": "Ver los proyectos",
      "video.sound": "Activar el sonido", "video.sound_on": "Silenciar",
      "video.aria": "Vídeo: sitios web a medida, creados en pocos días",
      "work.eyebrow": "Proyectos seleccionados",
      "work.h2": "Un portafolio de productos reales, en línea.",
      "work.p": "De restaurantes a apps de aprendizaje: explora los proyectos por ámbito y visita los sitios en línea.",
      "filter.all": "Todo", "work.count": "proyectos",
      "hero.preview": "Vista previa de los proyectos", "hero.pause": "Pausar la animación", "hero.resume": "Reanudar la animación",
      "group.local": "Creaciones locales", "group.learning": "Educación y formación",
      "card.visit": "Ver el sitio", "card.progress": "En curso", "card.soon": "Próximamente",
      "testi.sample": "Testimonio de ejemplo",
      "about.eyebrow": "Acerca de",
      "about.h2": "Un creador de sitios y herramientas, con la mirada de un formador.",
      "about.p1": "Soy Antony Addy. Diseño y creo sitios web y herramientas a medida —en inglés y en francés— desde el sur de Francia. Formador bilingüe certificado de origen, empecé construyendo las herramientas que necesitaban mis propios alumnos; hoy las creo también para restaurantes, comercios, asociaciones y empresas.",
      "about.p2": "Con la IA en el proceso, paso de una idea a un sitio cuidado y publicado con una rapidez notable — sin perder el oficio. Diseño limpio, lenguaje claro en el idioma en el que piensa tu público y productos realmente agradables de usar. Hostelería, comercio local, deporte, servicios profesionales, formación: cada uno recibe un sitio a su medida.",
      "about.p3": "Si puedes describirlo, es muy probable que pueda crearlo — y ponerlo en línea antes de lo que imaginas.",
      "fact.k1": "Ubicación", "fact.v1": "Sur de Francia · Var y Alpes Marítimos",
      "fact.k2": "Idiomas", "fact.v2": "Inglés y francés, totalmente bilingüe",
      "fact.k3": "Trayectoria", "fact.v3": "Formador profesional certificado (FPA)",
      "fact.k4": "Crea", "fact.v4": "Sitios · apps de aprendizaje · paneles · herramientas",
      "fact.k5": "Enfoque", "fact.v5": "Asistido por IA, rematado por humanos",
      "svc.eyebrow": "Lo que creo", "svc.h2": "Cuatro tipos de proyecto, un mismo nivel de acabado.",
      "svc1.h": "Plataformas de aprendizaje",
      "svc1.p": "Apps interactivas para idiomas y competencias — ejercicios, feedback con IA, audio y seguimiento del progreso, pensadas para enseñar.",
      "svc2.h": "Sitios de negocios y locales",
      "svc2.p": "Restaurantes, profesionales y servicios — multilingües, con reservas y pensados para atraer clientes.",
      "svc3.h": "Profesional y formación",
      "svc3.p": "Sitios de servicios y plataformas de cursos que presentan tu experiencia con claridad y convierten visitantes en contactos.",
      "svc4.h": "Herramientas y paneles",
      "svc4.p": "Espacios de trabajo privados, seguimientos y herramientas internas — seguros, ordenados y a la medida de tu flujo de trabajo.",
      "faq.eyebrow": "Preguntas frecuentes", "faq.h2": "Lo que suelen preguntarme.",
      "contact.eyebrow": "Iniciar un proyecto", "contact.h2": "¿Tienes algo que te gustaría crear?",
      "contact.p": "Cuéntame qué tienes en mente — una app de aprendizaje, un sitio para tu actividad, una herramienta para ahorrar tiempo. Te diré con honestidad qué es posible y con qué rapidez.",
      "contact.btn1": "Escríbeme", "contact.whatsapp": "WhatsApp", "contact.btn2": "Ver los proyectos",
      "mail.subject": "Consulta de proyecto", "wa.text": "Hola Antony, me gustaría hablar de un proyecto.",
      "footer.sub": "Sitios web y herramientas, creados con IA"
    },
    it: {
      "doc.title": "Antony Addy — Siti web e strumenti, progettati e realizzati con l'IA",
      "skip": "Vai al contenuto",
      "brand.sub": "Siti web e strumenti",
      "nav.work": "Progetti", "nav.about": "Chi sono", "nav.services": "Servizi", "nav.faq": "FAQ", "nav.video": "Video", "nav.cta": "Avviare un progetto", "nav.menu": "Menu", "nav.lang": "Lingua",
      "hero.kicker": "Progettati e realizzati con l'IA",
      "hero.h1": "Siti e strumenti curati, <em>pensati per la tua attività</em>.",
      "hero.lead": "Siti web multilingue e strumenti su misura. Design curato e un unico interlocutore per guidare il tuo progetto, dall'idea al lancio.",
      "hero.cta1": "Vedi i progetti", "hero.cta2": "Avviare un progetto",
      "stat1.n": "20", "stat1.l": "Progetti presentati",
      "stat2.n": "Multilingue", "stat2.l": "Nella lingua del tuo pubblico",
      "video.eyebrow": "Video · 1 min",
      "video.h2": "Dall'idea al lancio, in un minuto.",
      "video.p": "Un breve video sul mio modo di lavorare: ciò che di solito rende il web lento e complicato, e come — con l'IA nel processo — trasformo la tua idea in un prodotto online, curato e bilingue, in pochi giorni.",
      "video.pt1": "Dall'idea a un sito online in giorni, non in mesi.",
      "video.pt2": "Siti e strumenti completamente bilingui (EN / FR), rifiniti nei minimi dettagli.",
      "video.pt3": "In opzione, un piano mensile su misura per aggiornamenti ed evoluzioni — calibrato sulle tue esigenze reali.",
      "video.cta": "Avviare un progetto", "video.cta2": "Vedi i progetti",
      "video.sound": "Attiva l'audio", "video.sound_on": "Disattiva l'audio",
      "video.aria": "Video: siti web su misura, realizzati in pochi giorni",
      "work.eyebrow": "Progetti selezionati",
      "work.h2": "Un portfolio di prodotti reali, online.",
      "work.p": "Dai ristoranti alle app di apprendimento: esplora i progetti per ambito e visita i siti online.",
      "filter.all": "Tutti", "work.count": "progetti",
      "hero.preview": "Anteprima dei progetti", "hero.pause": "Metti in pausa l'animazione", "hero.resume": "Riprendi l'animazione",
      "group.local": "Creazioni locali", "group.learning": "Istruzione e formazione",
      "card.visit": "Vedi il sito", "card.progress": "In corso", "card.soon": "Presto online",
      "testi.sample": "Testimonianza di esempio",
      "about.eyebrow": "Chi sono",
      "about.h2": "Un creatore di siti e strumenti, con l'occhio di un formatore.",
      "about.p1": "Sono Antony Addy. Progetto e realizzo siti web e strumenti su misura — in inglese e in francese — dal Sud della Francia. Formatore bilingue certificato di formazione, ho iniziato creando gli strumenti di cui avevano bisogno i miei studenti; oggi li realizzo anche per ristoranti, attività locali, associazioni e aziende.",
      "about.p2": "Con l'IA nel processo, passo da un'idea a un sito curato e pubblicato con una rapidità notevole — senza perdere la cura artigianale. Design pulito, linguaggio chiaro nella lingua in cui pensa il tuo pubblico e prodotti davvero piacevoli da usare. Ristorazione, attività locali, sport, servizi professionali, formazione: ognuno riceve un sito su misura.",
      "about.p3": "Se riesci a descriverlo, con ogni probabilità posso realizzarlo — e metterlo online prima di quanto pensi.",
      "fact.k1": "Sede", "fact.v1": "Sud della Francia · Var e Alpi Marittime",
      "fact.k2": "Lingue", "fact.v2": "Inglese e francese, perfettamente bilingue",
      "fact.k3": "Percorso", "fact.v3": "Formatore professionale certificato (FPA)",
      "fact.k4": "Realizza", "fact.v4": "Siti · app di apprendimento · dashboard · strumenti",
      "fact.k5": "Approccio", "fact.v5": "Assistito dall'IA, rifinito dall'uomo",
      "svc.eyebrow": "Cosa realizzo", "svc.h2": "Quattro tipi di progetto, un solo livello di finitura.",
      "svc1.h": "Piattaforme di apprendimento",
      "svc1.p": "App interattive per lingue e competenze — esercizi, feedback con IA, audio e monitoraggio dei progressi, pensate per insegnare.",
      "svc2.h": "Siti per attività e locali",
      "svc2.p": "Ristoranti, professionisti e servizi — multilingue, prenotabili e pensati per far entrare i clienti.",
      "svc3.h": "Professionale e formazione",
      "svc3.p": "Siti di servizi e piattaforme di corsi che presentano con chiarezza la tua competenza e trasformano i visitatori in contatti.",
      "svc4.h": "Strumenti e dashboard",
      "svc4.p": "Spazi di lavoro privati, monitoraggi e strumenti interni — sicuri, ordinati e su misura per il tuo flusso di lavoro.",
      "faq.eyebrow": "Domande frequenti", "faq.h2": "Quello che mi chiedono spesso.",
      "contact.eyebrow": "Avviare un progetto", "contact.h2": "Hai un'idea da concretizzare?",
      "contact.p": "Dimmi cosa hai in mente — un'app di apprendimento, un sito per la tua attività, uno strumento per far risparmiare tempo. Ti dirò onestamente cosa è possibile e in quanto tempo.",
      "contact.btn1": "Scrivimi", "contact.whatsapp": "WhatsApp", "contact.btn2": "Vedi i progetti",
      "mail.subject": "Richiesta di progetto", "wa.text": "Ciao Antony, vorrei parlare di un progetto.",
      "footer.sub": "Siti web e strumenti, realizzati con l'IA"
    },
    de: {
      "doc.title": "Antony Addy — Websites & Tools, entworfen und gebaut mit KI",
      "skip": "Zum Inhalt springen",
      "brand.sub": "Websites & Tools",
      "nav.work": "Projekte", "nav.about": "Über mich", "nav.services": "Leistungen", "nav.faq": "FAQ", "nav.video": "Video", "nav.cta": "Projekt starten", "nav.menu": "Menü", "nav.lang": "Sprache",
      "hero.kicker": "Entworfen und gebaut mit KI",
      "hero.h1": "Websites und Tools, <em>maßgeschneidert für Ihr Geschäft</em>.",
      "hero.lead": "Mehrsprachige Websites und maßgeschneiderte Tools. Durchdachtes Design und ein Ansprechpartner, der Ihr Projekt begleitet — von der Idee bis zum Launch.",
      "hero.cta1": "Projekte ansehen", "hero.cta2": "Projekt starten",
      "stat1.n": "20", "stat1.l": "Vorgestellte Projekte",
      "stat2.n": "Mehrsprachig", "stat2.l": "In der Sprache Ihres Publikums",
      "video.eyebrow": "Video ansehen · 1 Min.",
      "video.h2": "Von der Idee zum Launch, in einer Minute.",
      "video.p": "Ein kurzes Video darüber, wie ich arbeite: was das Web meist langsam und mühsam macht, und wie ich — mit KI im Prozess — Ihre Idee in wenigen Tagen in ein gepflegtes, zweisprachiges, live geschaltetes Produkt verwandle.",
      "video.pt1": "Von der Idee zur Live-Website in Tagen, nicht Monaten.",
      "video.pt2": "Vollständig zweisprachige (EN / FR) Websites und Tools, bis ins Detail ausgearbeitet.",
      "video.pt3": "Optional ein maßgeschneiderter Monatsplan für Updates und Weiterentwicklungen — auf Ihren tatsächlichen Bedarf zugeschnitten.",
      "video.cta": "Projekt starten", "video.cta2": "Projekte ansehen",
      "video.sound": "Ton einschalten", "video.sound_on": "Stummschalten",
      "video.aria": "Video: maßgeschneiderte Websites, in wenigen Tagen gebaut",
      "work.eyebrow": "Ausgewählte Projekte",
      "work.h2": "Ein Portfolio echter, live geschalteter Produkte.",
      "work.p": "Von Restaurants bis zu Lern-Apps: Entdecken Sie die Projekte nach Bereich und besuchen Sie die Live-Websites.",
      "filter.all": "Alle", "work.count": "Projekte",
      "hero.preview": "Projektvorschau", "hero.pause": "Animation pausieren", "hero.resume": "Animation fortsetzen",
      "group.local": "Lokale Projekte", "group.learning": "Bildung & Weiterbildung",
      "card.visit": "Website ansehen", "card.progress": "In Arbeit", "card.soon": "Bald verfügbar",
      "testi.sample": "Beispiel-Testimonial",
      "about.eyebrow": "Über mich",
      "about.h2": "Ein Entwickler von Websites und Tools — mit dem Blick eines Trainers.",
      "about.p1": "Ich bin Antony Addy. Ich entwerfe und baue maßgeschneiderte Websites und Tools — auf Englisch und Französisch — aus Südfrankreich. Ursprünglich zertifizierter zweisprachiger Trainer, begann ich mit den Tools, die meine eigenen Lernenden brauchten; heute baue ich sie auch für Restaurants, lokale Unternehmen, Vereine und Firmen.",
      "about.p2": "Mit KI im Prozess komme ich bemerkenswert schnell von einer Idee zu einer gepflegten, veröffentlichten Website — ohne das Handwerk zu verlieren. Klares Design, klare Sprache in der Sprache, in der Ihr Publikum denkt, und Produkte, die wirklich Freude machen. Gastronomie, lokales Gewerbe, Sport, professionelle Dienstleistungen, Lehre: Jedes bekommt eine Website, die zu ihm passt.",
      "about.p3": "Wenn Sie es beschreiben können, kann ich es wahrscheinlich bauen — und schneller live stellen, als Sie denken.",
      "fact.k1": "Standort", "fact.v1": "Südfrankreich · Var & Alpes-Maritimes",
      "fact.k2": "Sprachen", "fact.v2": "Englisch & Französisch, vollständig zweisprachig",
      "fact.k3": "Hintergrund", "fact.v3": "Zertifizierter Berufstrainer (FPA)",
      "fact.k4": "Baut", "fact.v4": "Websites · Lern-Apps · Dashboards · Tools",
      "fact.k5": "Ansatz", "fact.v5": "KI-gestützt, von Hand vollendet",
      "svc.eyebrow": "Was ich baue", "svc.h2": "Vier Projektarten, ein Anspruch an die Verarbeitung.",
      "svc1.h": "Lernplattformen",
      "svc1.p": "Interaktive Apps für Sprachen und Kompetenzen — Übungen, KI-Feedback, Audio und Fortschrittsverfolgung, zum Lehren gebaut.",
      "svc2.h": "Business- & lokale Websites",
      "svc2.p": "Restaurants, Praxen und Dienstleistungen — mehrsprachig, buchbar und darauf ausgelegt, Kunden zu gewinnen.",
      "svc3.h": "Beruf & Weiterbildung",
      "svc3.p": "Service-Websites und Kursplattformen, die Ihre Expertise klar zeigen und Besucher in Anfragen verwandeln.",
      "svc4.h": "Tools & Dashboards",
      "svc4.p": "Private Arbeitsbereiche, Tracker und interne Tools — sicher, aufgeräumt und genau auf Ihren Ablauf zugeschnitten.",
      "faq.eyebrow": "Häufige Fragen", "faq.h2": "Was man mich oft fragt.",
      "contact.eyebrow": "Projekt starten", "contact.h2": "Haben Sie etwas, das gebaut werden soll?",
      "contact.p": "Sagen Sie mir, was Ihnen vorschwebt — eine Lern-App, eine Website für Ihr Geschäft, ein Tool, das Zeit spart. Ich sage Ihnen ehrlich, was möglich ist und wie schnell.",
      "contact.btn1": "Schreiben Sie mir", "contact.whatsapp": "WhatsApp", "contact.btn2": "Projekte ansehen",
      "mail.subject": "Projektanfrage", "wa.text": "Hallo Antony, ich würde gerne über ein Projekt sprechen.",
      "footer.sub": "Websites & Tools, gebaut mit KI"
    },
    pt: {
      "doc.title": "Antony Addy — Sites e ferramentas, concebidos e criados com IA",
      "skip": "Saltar para o conteúdo",
      "brand.sub": "Sites e ferramentas",
      "nav.work": "Projetos", "nav.about": "Sobre", "nav.services": "Serviços", "nav.faq": "FAQ", "nav.video": "Vídeo", "nav.cta": "Iniciar um projeto", "nav.menu": "Menu", "nav.lang": "Idioma",
      "hero.kicker": "Concebidos e criados com IA",
      "hero.h1": "Sites e ferramentas cuidados, <em>pensados para a sua atividade</em>.",
      "hero.lead": "Sites multilingues e ferramentas à medida. Design cuidado e uma só pessoa para orientar o seu projeto, da ideia ao lançamento.",
      "hero.cta1": "Ver os projetos", "hero.cta2": "Iniciar um projeto",
      "stat1.n": "20", "stat1.l": "Projetos apresentados",
      "stat2.n": "Multilingue", "stat2.l": "No idioma do seu público",
      "video.eyebrow": "Em vídeo · 1 min",
      "video.h2": "Da ideia ao lançamento, num minuto.",
      "video.p": "Um breve vídeo sobre a minha forma de trabalhar: o que costuma tornar a web lenta e complicada, e como — com a IA no processo — transformo a sua ideia num produto online, cuidado e bilingue, em poucos dias.",
      "video.pt1": "Da ideia a um site online em dias, não em meses.",
      "video.pt2": "Sites e ferramentas totalmente bilingues (EN / FR), acabados ao detalhe.",
      "video.pt3": "Opcional: um plano mensal à medida para atualizações e evoluções — ajustado às suas necessidades reais.",
      "video.cta": "Iniciar um projeto", "video.cta2": "Ver os projetos",
      "video.sound": "Ativar o som", "video.sound_on": "Silenciar",
      "video.aria": "Vídeo: sites à medida, criados em poucos dias",
      "work.eyebrow": "Projetos selecionados",
      "work.h2": "Um portfólio de produtos reais, online.",
      "work.p": "De restaurantes a apps de aprendizagem: explore os projetos por área e visite os sites online.",
      "filter.all": "Tudo", "work.count": "projetos",
      "hero.preview": "Pré-visualização dos projetos", "hero.pause": "Pausar a animação", "hero.resume": "Retomar a animação",
      "group.local": "Criações locais", "group.learning": "Educação e formação",
      "card.visit": "Ver o site", "card.progress": "Em curso", "card.soon": "Em breve",
      "testi.sample": "Testemunho de exemplo",
      "about.eyebrow": "Sobre",
      "about.h2": "Um criador de sites e ferramentas, com o olhar de um formador.",
      "about.p1": "Sou o Antony Addy. Concebo e crio sites e ferramentas à medida — em inglês e em francês — a partir do Sul de França. Formador bilingue certificado de origem, comecei por criar as ferramentas de que os meus próprios alunos precisavam; hoje crio-as também para restaurantes, comércios, associações e empresas.",
      "about.p2": "Com a IA no processo, passo de uma ideia a um site cuidado e publicado com uma rapidez notável — sem perder o rigor. Design limpo, linguagem clara no idioma em que o seu público pensa e produtos realmente agradáveis de usar. Restauração, comércio local, desporto, serviços profissionais, formação: cada um recebe um site à sua medida.",
      "about.p3": "Se o consegue descrever, há boas hipóteses de eu o conseguir criar — e colocá-lo online mais depressa do que imagina.",
      "fact.k1": "Localização", "fact.v1": "Sul de França · Var e Alpes Marítimos",
      "fact.k2": "Idiomas", "fact.v2": "Inglês e francês, totalmente bilingue",
      "fact.k3": "Percurso", "fact.v3": "Formador profissional certificado (FPA)",
      "fact.k4": "Cria", "fact.v4": "Sites · apps de aprendizagem · painéis · ferramentas",
      "fact.k5": "Abordagem", "fact.v5": "Assistido por IA, rematado por humanos",
      "svc.eyebrow": "O que eu crio", "svc.h2": "Quatro tipos de projeto, um mesmo nível de acabamento.",
      "svc1.h": "Plataformas de aprendizagem",
      "svc1.p": "Apps interativas para idiomas e competências — exercícios, feedback com IA, áudio e acompanhamento do progresso, feitas para ensinar.",
      "svc2.h": "Sites de negócios e locais",
      "svc2.p": "Restaurantes, profissionais e serviços — multilingues, com reservas e pensados para trazer clientes.",
      "svc3.h": "Profissional e formação",
      "svc3.p": "Sites de serviços e plataformas de cursos que apresentam a sua experiência com clareza e transformam visitantes em contactos.",
      "svc4.h": "Ferramentas e painéis",
      "svc4.p": "Espaços de trabalho privados, acompanhamentos e ferramentas internas — seguros, organizados e à medida do seu fluxo de trabalho.",
      "faq.eyebrow": "Perguntas frequentes", "faq.h2": "O que me perguntam com frequência.",
      "contact.eyebrow": "Iniciar um projeto", "contact.h2": "Tem algo que gostaria de criar?",
      "contact.p": "Diga-me o que tem em mente — uma app de aprendizagem, um site para a sua atividade, uma ferramenta para poupar tempo. Direi com honestidade o que é possível e com que rapidez.",
      "contact.btn1": "Escreva-me", "contact.whatsapp": "WhatsApp", "contact.btn2": "Ver os projetos",
      "mail.subject": "Pedido de projeto", "wa.text": "Olá Antony, gostaria de falar sobre um projeto.",
      "footer.sub": "Sites e ferramentas, criados com IA"
    },
    nl: {
      "doc.title": "Antony Addy — Websites en tools, ontworpen en gebouwd met AI",
      "skip": "Naar de inhoud",
      "brand.sub": "Websites en tools",
      "nav.work": "Projecten", "nav.about": "Over mij", "nav.services": "Diensten", "nav.faq": "FAQ", "nav.video": "Video", "nav.cta": "Project starten", "nav.menu": "Menu", "nav.lang": "Taal",
      "hero.kicker": "Ontworpen en gebouwd met AI",
      "hero.h1": "Websites en tools, <em>op maat van je bedrijf</em>.",
      "hero.lead": "Meertalige websites en tools op maat. Doordacht ontwerp en één aanspreekpunt om je project te begeleiden, van eerste idee tot lancering.",
      "hero.cta1": "Bekijk het werk", "hero.cta2": "Project starten",
      "stat1.n": "20", "stat1.l": "Getoonde projecten",
      "stat2.n": "Meertalig", "stat2.l": "In de taal van je publiek",
      "video.eyebrow": "In video · 1 min",
      "video.h2": "Van idee tot lancering, in één minuut.",
      "video.p": "Een korte video over hoe ik werk: wat het web meestal traag en ingewikkeld maakt, en hoe ik — met AI in het proces — je idee in enkele dagen omzet in een verzorgd, tweetalig product dat live staat.",
      "video.pt1": "Van idee tot een live website in dagen, niet in maanden.",
      "video.pt2": "Volledig tweetalige (EN / FR) sites en tools, tot in de details afgewerkt.",
      "video.pt3": "Optioneel: een maandplan op maat voor updates en uitbreidingen — afgestemd op je werkelijke behoeften.",
      "video.cta": "Project starten", "video.cta2": "Bekijk het werk",
      "video.sound": "Geluid aan", "video.sound_on": "Dempen",
      "video.aria": "Video: websites op maat, in enkele dagen gebouwd",
      "work.eyebrow": "Geselecteerd werk",
      "work.h2": "Een portfolio van live, werkende producten.",
      "work.p": "Van restaurants tot leer-apps: verken de projecten per vakgebied en bezoek de live sites.",
      "filter.all": "Alles", "work.count": "projecten",
      "hero.preview": "Voorbeelden van werk", "hero.pause": "Animatie pauzeren", "hero.resume": "Animatie hervatten",
      "group.local": "Lokale creaties", "group.learning": "Onderwijs en training",
      "card.visit": "Bekijk de site", "card.progress": "In ontwikkeling", "card.soon": "Binnenkort",
      "testi.sample": "Voorbeeldgetuigenis",
      "about.eyebrow": "Over mij",
      "about.h2": "Een bouwer van websites en tools, met de blik van een trainer.",
      "about.p1": "Ik ben Antony Addy. Ik ontwerp en bouw websites en tools op maat — in het Engels en het Frans — vanuit het zuiden van Frankrijk. Van oorsprong een gecertificeerd tweetalig trainer, begon ik met het bouwen van de tools die mijn eigen cursisten nodig hadden; vandaag bouw ik ze ook voor restaurants, lokale ondernemingen, verenigingen en bedrijven.",
      "about.p2": "Met AI in het proces ga ik opmerkelijk snel van een ruw idee naar een verzorgde, gepubliceerde site — zonder aan vakmanschap in te boeten. Strak ontwerp, heldere taal in de taal waarin je publiek denkt, en producten die echt prettig zijn in gebruik. Horeca, lokale handel, sport, professionele diensten, onderwijs: elk krijgt een site die bij hem past.",
      "about.p3": "Als je het kunt beschrijven, is de kans groot dat ik het kan bouwen — en sneller online heb dan je verwacht.",
      "fact.k1": "Gevestigd in", "fact.v1": "Zuid-Frankrijk · Var & Alpes-Maritimes",
      "fact.k2": "Talen", "fact.v2": "Engels & Frans, volledig tweetalig",
      "fact.k3": "Achtergrond", "fact.v3": "Gecertificeerd professioneel trainer (FPA)",
      "fact.k4": "Bouwt", "fact.v4": "Sites · leer-apps · dashboards · tools",
      "fact.k5": "Aanpak", "fact.v5": "AI-ondersteund, door mensen afgewerkt",
      "svc.eyebrow": "Wat ik bouw", "svc.h2": "Vier soorten projecten, één niveau van afwerking.",
      "svc1.h": "Leerplatformen",
      "svc1.p": "Interactieve apps voor talen en vaardigheden — oefeningen, AI-feedback, audio en voortgangsregistratie, gemaakt om te onderwijzen.",
      "svc2.h": "Zakelijke & lokale sites",
      "svc2.p": "Restaurants, praktijken en diensten — meertalig, reserveerbaar en gemaakt om klanten binnen te halen.",
      "svc3.h": "Professioneel & opleiding",
      "svc3.p": "Dienstensites en cursusplatformen die je expertise helder presenteren en bezoekers omzetten in aanvragen.",
      "svc4.h": "Tools & dashboards",
      "svc4.p": "Privéwerkruimtes, trackers en interne tools — veilig, overzichtelijk en precies op jouw workflow afgestemd.",
      "faq.eyebrow": "Veelgestelde vragen", "faq.h2": "Wat men mij vaak vraagt.",
      "contact.eyebrow": "Project starten", "contact.h2": "Heb je iets dat je wilt laten bouwen?",
      "contact.p": "Vertel me wat je in gedachten hebt — een leer-app, een site voor je bedrijf, een tool om tijd te besparen. Ik zeg je eerlijk wat mogelijk is en hoe snel.",
      "contact.btn1": "Mail me", "contact.whatsapp": "WhatsApp", "contact.btn2": "Bekijk het werk",
      "mail.subject": "Projectaanvraag", "wa.text": "Hallo Antony, ik wil graag een project bespreken.",
      "footer.sub": "Websites en tools, gebouwd met AI"
    }
  };

  var LANGS = ["fr", "en", "es", "it", "de", "pt", "nl"];
  var LANG_NAMES = { fr: "Français", en: "English", es: "Español", it: "Italiano", de: "Deutsch", pt: "Português", nl: "Nederlands" };
  var lang = "fr";
  try {
    var saved = localStorage.getItem("lang");
    if (saved && LANGS.indexOf(saved) !== -1) lang = saved;
  } catch (e) {}

  function t(key) { return (STRINGS[lang] && STRINGS[lang][key]) || (STRINGS.en[key]) || ""; }
  // Vercel Web Analytics custom event (no-op if analytics isn't loaded / on Hobby)
  function track(name, data) {
    try { if (window.va) window.va("event", data ? { name: name, data: data } : { name: name }); } catch (e) {}
  }
  window.track = track;
  function host(url) {
    try { return new URL(url).hostname.replace(/^www\./, ""); }
    catch (e) { return url; }
  }

  var grid = document.getElementById("grid");
  var filterBar = document.getElementById("filters");
  var currentFilter = "all";

  var FAQS = [
    { q: { fr: "En combien de temps livrez-vous un site ?", en: "How fast can you deliver a site?", es: "¿En cuánto tiempo entregas un sitio?", it: "In quanto tempo consegni un sito?", de: "Wie schnell liefern Sie eine Website?", pt: "Em quanto tempo entrega um site?", nl: "Hoe snel kun je een site opleveren?" },
      a: { fr: "Un site vitrine en quelques jours, une plateforme plus complète en une à deux semaines. Je vous donne un délai clair dès le départ.", en: "A brochure site in a few days, a fuller platform in one to two weeks. I give you a clear timeline up front.", es: "Un sitio vitrina en pocos días, una plataforma más completa en una o dos semanas. Te doy un plazo claro desde el principio.", it: "Un sito vetrina in pochi giorni, una piattaforma più completa in una o due settimane. Ti do una tempistica chiara fin dall'inizio.", de: "Eine Visitenkarten-Website in wenigen Tagen, eine umfangreichere Plattform in ein bis zwei Wochen. Ich gebe Ihnen von Anfang an einen klaren Zeitplan.", pt: "Um site vitrine em poucos dias, uma plataforma mais completa em uma a duas semanas. Dou-lhe um prazo claro desde o início.", nl: "Een etalagesite in enkele dagen, een uitgebreider platform in één tot twee weken. Ik geef je vooraf een duidelijke planning." } },
    { q: { fr: "Travaillez-vous en français et en anglais ?", en: "Do you work in French and English?", es: "¿Trabajas en francés y en inglés?", it: "Lavori in francese e in inglese?", de: "Arbeiten Sie auf Französisch und Englisch?", pt: "Trabalha em francês e em inglês?", nl: "Werk je in het Frans en het Engels?" },
      a: { fr: "Oui, entièrement bilingue — les échanges, le contenu et les sites eux-mêmes, souvent multilingues.", en: "Yes, fully bilingual — the conversation, the content and the sites themselves, often multilingual.", es: "Sí, totalmente bilingüe — la conversación, el contenido y los propios sitios, a menudo multilingües.", it: "Sì, completamente bilingue — gli scambi, i contenuti e i siti stessi, spesso multilingue.", de: "Ja, vollständig zweisprachig — die Kommunikation, die Inhalte und die Websites selbst, oft mehrsprachig.", pt: "Sim, totalmente bilingue — a conversa, os conteúdos e os próprios sites, muitas vezes multilingues.", nl: "Ja, volledig tweetalig — de communicatie, de inhoud en de sites zelf, vaak meertalig." } },
    { q: { fr: "Combien coûte un projet ?", en: "How much does a project cost?", es: "¿Cuánto cuesta un proyecto?", it: "Quanto costa un progetto?", de: "Was kostet ein Projekt?", pt: "Quanto custa um projeto?", nl: "Wat kost een project?" },
      a: { fr: "Cela dépend du périmètre. Après un premier échange, je propose un devis clair et fixe — sans surprise.", en: "It depends on scope. After a short chat I give a clear, fixed quote — no surprises.", es: "Depende del alcance. Tras una breve conversación, te doy un presupuesto claro y cerrado — sin sorpresas.", it: "Dipende dal perimetro. Dopo un primo confronto, fornisco un preventivo chiaro e fisso — senza sorprese.", de: "Das hängt vom Umfang ab. Nach einem kurzen Gespräch gebe ich ein klares Festpreisangebot — ohne Überraschungen.", pt: "Depende do âmbito. Após uma breve conversa, apresento um orçamento claro e fixo — sem surpresas.", nl: "Dat hangt af van de omvang. Na een kort gesprek geef ik een duidelijke, vaste offerte — zonder verrassingen." } },
    { q: { fr: "Puis-je mettre à jour le site moi-même ensuite ?", en: "Can I update the site myself afterwards?", es: "¿Puedo actualizar el sitio yo mismo después?", it: "Posso aggiornare il sito da solo in seguito?", de: "Kann ich die Website später selbst aktualisieren?", pt: "Posso atualizar o site eu mesmo depois?", nl: "Kan ik de site later zelf bijwerken?" },
      a: { fr: "Oui. Je conçois le site pour que le contenu soit simple à modifier, et je peux vous former ou assurer la maintenance. Pour les mises à jour et évolutions régulières, je propose aussi, en option, un forfait mensuel sur mesure — ajusté à vos besoins réels.", en: "Yes. I build it so the content is easy to edit, and I can train you or handle maintenance. For regular updates and upgrades, I also offer an optional custom monthly plan — sized to your real needs.", es: "Sí. Lo construyo para que el contenido sea fácil de editar, y puedo formarte o encargarme del mantenimiento. Para actualizaciones y mejoras periódicas, ofrezco además, de forma opcional, un plan mensual a medida — ajustado a tus necesidades reales.", it: "Sì. Realizzo il sito in modo che i contenuti siano semplici da modificare e posso formarti o occuparmi della manutenzione. Per aggiornamenti ed evoluzioni regolari offro anche, in opzione, un piano mensile su misura — calibrato sulle tue esigenze reali.", de: "Ja. Ich baue sie so, dass die Inhalte leicht zu bearbeiten sind, und ich kann Sie einarbeiten oder die Wartung übernehmen. Für regelmäßige Updates und Weiterentwicklungen biete ich zudem optional einen maßgeschneiderten Monatsplan an — auf Ihren tatsächlichen Bedarf zugeschnitten.", pt: "Sim. Construo o site para que o conteúdo seja fácil de editar e posso formá-lo ou tratar da manutenção. Para atualizações e evoluções regulares, ofereço ainda, de forma opcional, um plano mensal à medida — ajustado às suas necessidades reais.", nl: "Ja. Ik bouw hem zo dat de inhoud eenvoudig aan te passen is, en ik kan je opleiden of het onderhoud verzorgen. Voor regelmatige updates en uitbreidingen bied ik ook, optioneel, een maandplan op maat — afgestemd op je werkelijke behoeften." } },
    { q: { fr: "Gérez-vous l'hébergement et le nom de domaine ?", en: "Do you handle hosting and the domain?", es: "¿Te encargas del alojamiento y del dominio?", it: "Ti occupi dell'hosting e del nome di dominio?", de: "Kümmern Sie sich um Hosting und Domain?", pt: "Trata do alojamento e do nome de domínio?", nl: "Regel je de hosting en de domeinnaam?" },
      a: { fr: "Oui, je déploie sur un hébergement rapide et fiable et je connecte votre nom de domaine.", en: "Yes, I deploy to fast, reliable hosting and connect your custom domain.", es: "Sí, publico en un alojamiento rápido y fiable y conecto tu dominio.", it: "Sì, pubblico su un hosting veloce e affidabile e collego il tuo nome di dominio.", de: "Ja, ich veröffentliche auf schnellem, zuverlässigem Hosting und binde Ihre eigene Domain an.", pt: "Sim, publico num alojamento rápido e fiável e ligo o seu nome de domínio.", nl: "Ja, ik publiceer op snelle, betrouwbare hosting en koppel je eigen domeinnaam." } },
    { q: { fr: "De quoi avez-vous besoin pour démarrer ?", en: "What do you need from me to start?", es: "¿Qué necesitas de mí para empezar?", it: "Di cosa hai bisogno per iniziare?", de: "Was brauchen Sie von mir, um zu starten?", pt: "Do que precisa de mim para começar?", nl: "Wat heb je van mij nodig om te starten?" },
      a: { fr: "Une idée, même approximative, et le contenu dont vous disposez. Je m'occupe du reste et je vous guide.", en: "A rough idea and whatever content you have. I take care of the rest and guide you through it.", es: "Una idea, aunque sea aproximada, y el contenido que tengas. Yo me ocupo del resto y te guío.", it: "Un'idea, anche sommaria, e i contenuti che hai. Penso io al resto e ti guido.", de: "Eine grobe Idee und welche Inhalte Sie haben. Um den Rest kümmere ich mich und führe Sie durch den Prozess.", pt: "Uma ideia, mesmo que aproximada, e os conteúdos que tiver. Eu trato do resto e oriento-o.", nl: "Een idee, al is het ruw, en de inhoud die je hebt. Ik regel de rest en begeleid je erdoorheen." } }
  ];

  // The original animated wall of work, with opposing desktop columns.
  function renderHero() {
    var wall = document.querySelector(".hero-wall");
    if (!wall || wall.querySelector(".wall-stage")) return;
    var colA = ["ristorante-lola", "wall-street", "so-good-diner", "grammatica", "filton-athletic-fc", "toeic-success-hub", "tandoor-global"];
    var colB = ["stephanie", "planb-global-connect", "filton-social-club", "addys-english-pro", "speakup", "listening-english"];
    function col(list, cls) {
      return '<div class="wall-col ' + cls + '"><div class="wall-track">' + list.concat(list).map(function (slug, i) {
        return '<figure class="thumb"><img src="screenshots/' + slug + '.jpg" alt="" width="1200" height="750" decoding="async"' + (i > 1 ? ' loading="lazy"' : '') + '></figure>';
      }).join("") + '</div></div>';
    }
    wall.innerHTML = '<div class="wall-stage">' + col(colA, "col-a") + col(colB, "col-b") + '</div>';
  }

  // ---------- static text ----------
  function applyStatic() {
    document.documentElement.lang = lang;
    document.title = t("doc.title");
    renderHero();
    var motionToggle = document.querySelector(".hero-motion-toggle");
    if (motionToggle) {
      motionToggle.dataset.labelPause = t("hero.pause");
      motionToggle.dataset.labelResume = t("hero.resume");
      motionToggle.textContent = t(motionToggle.getAttribute("aria-pressed") === "true" ? "hero.resume" : "hero.pause");
    }
    document.querySelector(".filters").setAttribute("aria-label", t("work.eyebrow"));
    var navToggle = document.querySelector(".nav-toggle");
    if (navToggle) navToggle.setAttribute("aria-label", t("nav.menu"));
    var langSelAria = document.getElementById("lang-select");
    if (langSelAria) langSelAria.setAttribute("aria-label", t("nav.lang"));
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.textContent = key === "stat1.n" ? String(projects.length) : t(key);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    var mail = document.getElementById("mail-link");
    if (mail) mail.href = "mailto:antony@antonyaddy.com?subject=" + encodeURIComponent(t("mail.subject"));
    var waHref = "https://wa.me/33649829826?text=" + encodeURIComponent(t("wa.text"));
    document.querySelectorAll(".js-wa").forEach(function (a) { a.href = waHref; });
    // video: label follows language (audio is spoken content)
    var vid = document.getElementById("pitch-video");
    if (vid) vid.setAttribute("aria-label", t("video.aria"));
    var sb = document.getElementById("video-sound");
    if (sb) {
      sb.setAttribute("data-label-off", t("video.sound"));
      sb.setAttribute("data-label-on", t("video.sound_on"));
      var soundOn = sb.getAttribute("aria-pressed") === "true";
      var soundLabel = soundOn ? t("video.sound_on") : t("video.sound");
      sb.setAttribute("aria-label", soundLabel);
      sb.querySelector("span").textContent = soundLabel;
    }
    // language picker: keep the select in sync with the active language
    var langSel = document.getElementById("lang-select");
    if (langSel && langSel.value !== lang) langSel.value = lang;
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
      b.type = "button";
      b.setAttribute("aria-pressed", String(id === currentFilter));
      b.dataset.filter = id;
      b.innerHTML = label + '<span class="c">' + counts[id] + "</span>";
      b.addEventListener("click", function () {
        currentFilter = id;
        document.querySelectorAll(".pill").forEach(function (p) { p.classList.remove("active"); p.setAttribute("aria-pressed", "false"); });
        b.classList.add("active");
        b.setAttribute("aria-pressed", "true");
        applyFilter(id, true);
        track("filter", { category: id });
      });
      return b;
    }
    filterBar.appendChild(pill("all", t("filter.all")));
    cats.forEach(function (c) { filterBar.appendChild(pill(c.id, c.label[lang])); });
  }

  // Two super-groups: local client work vs. educational platforms & tools.
  function groupOf(cat) { return (cat === "business" || cat === "community") ? "local" : "learning"; }

  // ---------- cards ----------
  function renderCards() {
    grid.innerHTML = "";
    var lastGroup = null;
    projects.forEach(function (p, i) {
      var grp = groupOf(p.category);
      if (grp !== lastGroup) {
        var head = document.createElement("div");
        head.className = "grid-group reveal";
        head.dataset.group = grp;
        head.innerHTML = '<span class="grid-group-label">' + t("group." + grp) + "</span>";
        grid.appendChild(head);
        lastGroup = grp;
      }
      var card = document.createElement("article");
      card.className = "card reveal";
      card.dataset.category = p.category;
      card.dataset.group = grp;
      var tags = (p.tags[lang] || []).map(function (x) { return "<span>" + x + "</span>"; }).join("");
      // In-progress projects aren't live yet: show the card but don't link out.
      var inProgress = p.status === "progress";
      if (inProgress) card.className += " is-progress";
      var heading = p.title;
      var coverHtml = inProgress ? "" :
        '<a class="cover" href="' + p.url + '" target="_blank" rel="noopener" aria-label="' + p.title + '"></a>';
      var footHtml = inProgress
        ? '<span class="soon">' + t("card.soon") + "</span>"
        : '<span class="visit">' + t("card.visit") + ' <span class="arr">↗</span></span>';
      // Only publish actual client testimonials.
      var testiHtml = p.testimonial && !p.testimonial.placeholder
        ? '<figure class="testi">' +
            "<blockquote>" + p.testimonial.quote[lang] + "</blockquote>" +
            '<figcaption><span class="testi-name">' + p.testimonial.name + "</span>" +
            (p.testimonial.role ? '<span class="testi-role"> · ' + p.testimonial.role[lang] + "</span>" : "") +
            "</figcaption>" +
          "</figure>"
        : "";
      card.innerHTML =
        coverHtml +
        '<div class="shot">' +
          (inProgress ? '<span class="status-tag">' + t("card.progress") + "</span>" : "") +
          '<img loading="lazy" decoding="async" width="1200" height="750" src="screenshots/' + p.slug + '.jpg" alt="' + p.title + '">' +
        "</div>" +
        '<div class="card-body">' +
          '<div class="card-meta"><span class="card-category">' + (catLabel[p.category][lang] || "") + '</span><span class="project-number">' + String(i + 1).padStart(2, "0") + "</span></div>" +
          '<h3 class="card-link">' + heading + "</h3>" +
          "<p>" + p.blurb[lang] + "</p>" +
          '<div class="tags">' + tags + "</div>" +
          testiHtml +
          '<div class="card-foot"><span class="project-domain">' + (inProgress ? "" : host(p.url)) + "</span>" + footHtml + "</div>" +
        "</div>";
      var cover = card.querySelector("a.cover");
      if (cover) cover.addEventListener("click", function () {
        track("project_visit", { slug: p.slug, category: p.category });
      });
      grid.appendChild(card);
    });
    applyFilter(currentFilter);
    if (window.motion) window.motion.refresh();
  }

  function renderFaq() {
    var el = document.getElementById("faq-list");
    if (!el) return;
    el.innerHTML = FAQS.map(function (f) {
      return '<details class="faq-item">' +
        '<summary><span class="faq-q">' + f.q[lang] + "</span>" +
        '<svg class="faq-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>' +
        '<div class="faq-a"><p>' + f.a[lang] + "</p></div>" +
        "</details>";
    }).join("");
    injectFaqSchema();
  }

  // FAQPage structured data for rich results (updates with language)
  function injectFaqSchema() {
    var data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "inLanguage": lang,
      "mainEntity": FAQS.map(function (f) {
        return { "@type": "Question", "name": f.q[lang], "acceptedAnswer": { "@type": "Answer", "text": f.a[lang] } };
      })
    };
    var s = document.getElementById("faq-schema");
    if (!s) { s = document.createElement("script"); s.type = "application/ld+json"; s.id = "faq-schema"; document.head.appendChild(s); }
    s.textContent = JSON.stringify(data);
  }

  function applyFilter(id, animate) {
    var count = projects.filter(function (p) { return id === "all" || p.category === id; }).length;
    document.getElementById("work-count").textContent = count + " " + t("work.count");
    // group headings only make sense on the combined "all" view
    document.querySelectorAll(".grid-group").forEach(function (h) {
      h.style.display = id === "all" ? "" : "none";
    });
    document.querySelectorAll(".card").forEach(function (card) {
      var show = id === "all" || card.dataset.category === id;
      card.style.display = show ? "" : "none";
      if (show && animate) {
        card.classList.remove("filter-in");
        void card.offsetWidth;            // restart the animation
        card.classList.add("filter-in");
      }
    });
  }

  // ---------- language toggle ----------
  function setLang(next) {
    lang = next;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    applyStatic();
    renderFilters();
    renderCards();
    renderFaq();
  }
  (function setupLangSelect() {
    var sel = document.getElementById("lang-select");
    if (!sel) return;
    sel.innerHTML = LANGS.map(function (l) {
      return '<option value="' + l + '">' + (LANG_NAMES[l] || l.toUpperCase()) + "</option>";
    }).join("");
    sel.value = lang;
    sel.addEventListener("change", function () { track("lang_switch", { lang: sel.value }); setLang(sel.value); });
  })();

  // ---------- contact conversions ----------
  var mailLink = document.getElementById("mail-link");
  if (mailLink) mailLink.addEventListener("click", function () { track("email_click"); });
  document.querySelectorAll(".js-wa").forEach(function (a) {
    a.addEventListener("click", function () { track("whatsapp_click"); });
  });

  // ---------- init ----------
  applyStatic();
  renderFilters();
  renderCards();
  renderFaq();

  // Reveal new content after a language or filter update.
  if (window.motion) window.motion.refresh();

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
