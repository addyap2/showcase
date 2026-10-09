// Edit this file to add, remove or reorder projects. Each project renders one card.
// Every text field carries all six languages: { fr, en, es, it, de, pt }.
// category must match one of the CATEGORIES ids below.
// Optional: add  status: "progress"  to show an "In progress" badge on a card.
//
// Order matters: local client work (business + community) is featured first,
// then the educational platforms & tools. app.js groups these two blocks under
// labelled headings in the grid.
window.CATEGORIES = [
  { id: "business",  label: { fr: "Commerces & restauration", en: "Business & Hospitality", es: "Negocios y hostelería", it: "Attività e ristorazione", de: "Business & Gastronomie", pt: "Negócios e restauração" } },
  { id: "community", label: { fr: "Associations & sport", en: "Community & Sport", es: "Asociaciones y deporte", it: "Associazioni e sport", de: "Vereine & Sport", pt: "Associações e desporto" } },
  { id: "learning",  label: { fr: "Applis d'apprentissage", en: "Language Learning Apps", es: "Apps de aprendizaje", it: "App per l'apprendimento", de: "Lern-Apps", pt: "Apps de aprendizagem" } },
  { id: "training",  label: { fr: "Formation & enseignement", en: "Training & Teaching", es: "Formación y enseñanza", it: "Formazione e insegnamento", de: "Training & Lehre", pt: "Formação e ensino" } }
];

window.PROJECTS = [
  // ==== Local creations — commerces, services & associations ====

  // ---- Commerces & restauration ----
  {
    slug: "ristorante-lola", title: "Ristorante da Lola", url: "https://www.ristorantedalola.it", category: "business",
    blurb: {
      fr: "Un site chaleureux en quatre langues pour un restaurant familial des Marches à Fermignano — menu, galerie et réservation, avec une vraie identité de lieu.",
      en: "A warm, four-language site for a family Marche-region restaurant in Fermignano — menu, gallery and booking, with an unmistakable sense of place.",
      es: "Un sitio acogedor en cuatro idiomas para un restaurante familiar de las Marcas en Fermignano — menú, galería y reservas, con una identidad de lugar inconfundible.",
      it: "Un sito caloroso in quattro lingue per un ristorante familiare marchigiano a Fermignano — menù, galleria e prenotazioni, con una forte identità del luogo.",
      de: "Eine herzliche, viersprachige Website für ein Familienrestaurant aus den Marken in Fermignano — Speisekarte, Galerie und Reservierung, mit unverwechselbarem Lokalkolorit.",
      pt: "Um site acolhedor em quatro idiomas para um restaurante familiar das Marcas em Fermignano — menu, galeria e reservas, com uma identidade de lugar inconfundível."
    },
    tags: { fr: ["Restaurant", "4 langues"], en: ["Restaurant", "4 languages"], es: ["Restaurante", "4 idiomas"], it: ["Ristorante", "4 lingue"], de: ["Restaurant", "4 Sprachen"], pt: ["Restaurante", "4 idiomas"] },
    testimonial: {
      placeholder: true,
      quote: {
        fr: "Notre site reflète enfin l'ambiance du restaurant — et les réservations ont suivi.",
        en: "Our site finally captures the restaurant's atmosphere — and the bookings followed.",
        es: "Nuestro sitio por fin refleja el ambiente del restaurante — y las reservas llegaron después.",
        it: "Il nostro sito riflette finalmente l'atmosfera del ristorante — e le prenotazioni sono arrivate.",
        de: "Unsere Website fängt endlich die Atmosphäre des Restaurants ein — und die Reservierungen folgten.",
        pt: "O nosso site reflete finalmente o ambiente do restaurante — e as reservas vieram a seguir."
      },
      name: "Nom du client",
      role: { fr: "Restaurant · Fermignano", en: "Restaurant · Fermignano", es: "Restaurante · Fermignano", it: "Ristorante · Fermignano", de: "Restaurant · Fermignano", pt: "Restaurante · Fermignano" }
    }
  },
  {
    slug: "wall-street", title: "Wall Street Fréjus", url: "https://www.wallstreetfrejus.fr", category: "business",
    blurb: {
      fr: "Un pub-restaurant à Fréjus — concerts live, matchs sur écran géant et cuisine généreuse faite maison, avec menu de la semaine et réservation en ligne.",
      en: "A pub and restaurant in Fréjus — live music, big-screen match days and generous homemade food, with a weekly menu and online booking.",
      es: "Un pub-restaurante en Fréjus — música en directo, partidos en pantalla gigante y cocina casera generosa, con menú de la semana y reserva en línea.",
      it: "Un pub-ristorante a Fréjus — musica dal vivo, partite su maxischermo e cucina casalinga generosa, con menù della settimana e prenotazione online.",
      de: "Ein Pub-Restaurant in Fréjus — Live-Musik, Spiele auf Großleinwand und großzügige hausgemachte Küche, mit Wochenkarte und Online-Reservierung.",
      pt: "Um pub-restaurante em Fréjus — música ao vivo, jogos em ecrã gigante e comida caseira generosa, com menu da semana e reserva online."
    },
    tags: { fr: ["Pub & resto", "Matchs & concerts"], en: ["Pub & food", "Sport & live music"], es: ["Pub y resto", "Partidos y conciertos"], it: ["Pub & cucina", "Sport & musica live"], de: ["Pub & Küche", "Sport & Live-Musik"], pt: ["Pub & comida", "Jogos & concertos"] },
    testimonial: {
      placeholder: true,
      quote: {
        fr: "Un site vraiment à notre image : les clients trouvent le menu et les matchs en un clin d'œil.",
        en: "A site that's truly us — customers find the menu and the match days in seconds.",
        es: "Un sitio que de verdad nos representa: los clientes encuentran el menú y los partidos en segundos.",
        it: "Un sito che ci rappresenta davvero: i clienti trovano il menù e le partite in pochi secondi.",
        de: "Eine Website, die wirklich zu uns passt — Gäste finden die Karte und die Spieltage in Sekunden.",
        pt: "Um site que é mesmo a nossa cara: os clientes encontram o menu e os jogos em segundos."
      },
      name: "Nom du client",
      role: { fr: "Pub-restaurant · Fréjus", en: "Pub & restaurant · Fréjus", es: "Pub-restaurante · Fréjus", it: "Pub-ristorante · Fréjus", de: "Pub-Restaurant · Fréjus", pt: "Pub-restaurante · Fréjus" }
    }
  },
  {
    slug: "so-good-diner", title: "So Good Diner", url: "https://so-good-diner.vercel.app", category: "business",
    blurb: {
      fr: "Un diner gourmet à Fréjus — burgers maison et kumpir généreux, pain du boulanger et viande du boucher, préparés sous vos yeux. Menu, avis et itinéraire.",
      en: "A gourmet diner in Fréjus — homemade burgers and generous kumpir, baker's bread and butcher's meat, prepared before your eyes. Menu, reviews and directions.",
      es: "Un diner gourmet en Fréjus — hamburguesas caseras y kumpir generosos, pan del panadero y carne del carnicero, preparados ante tus ojos. Menú, reseñas e itinerario.",
      it: "Un diner gourmet a Fréjus — burger fatti in casa e kumpir abbondanti, pane del fornaio e carne del macellaio, preparati davanti a te. Menù, recensioni e indicazioni.",
      de: "Ein Gourmet-Diner in Fréjus — hausgemachte Burger und großzügige Kumpir, Brot vom Bäcker und Fleisch vom Metzger, vor Ihren Augen zubereitet. Speisekarte, Bewertungen und Anfahrt.",
      pt: "Um diner gourmet em Fréjus — hambúrgueres caseiros e kumpir generosos, pão do padeiro e carne do talhante, preparados à sua frente. Menu, avaliações e itinerário."
    },
    tags: { fr: ["Burgers & kumpir", "Fait maison"], en: ["Burgers & kumpir", "Homemade"], es: ["Hamburguesas y kumpir", "Casero"], it: ["Burger & kumpir", "Fatto in casa"], de: ["Burger & Kumpir", "Hausgemacht"], pt: ["Hambúrgueres & kumpir", "Caseiro"] },
    testimonial: {
      placeholder: true,
      quote: {
        fr: "Rapide, clair et appétissant — exactement ce qu'il fallait pour le diner.",
        en: "Fast, clear and appetising — exactly right for the diner.",
        es: "Rápido, claro y apetitoso — justo lo que necesitaba el diner.",
        it: "Veloce, chiaro e appetitoso — esattamente ciò che serviva al diner.",
        de: "Schnell, klar und appetitlich — genau das Richtige für den Diner.",
        pt: "Rápido, claro e apetitoso — exatamente o que o diner precisava."
      },
      name: "Nom du client",
      role: { fr: "Diner · Fréjus", en: "Diner · Fréjus", es: "Diner · Fréjus", it: "Diner · Fréjus", de: "Diner · Fréjus", pt: "Diner · Fréjus" }
    }
  },
  {
    slug: "tandoor-global", title: "Mr. Tandoors", url: "https://tandoor-global.vercel.app", category: "business", status: "progress",
    blurb: {
      fr: "Un site orienté commande pour un restaurant indien tandoor 100% halal à Fréjus — menu, histoire et commande à emporter en un clic.",
      en: "An ordering-focused site for a 100% halal Indian tandoor restaurant in Fréjus — menu, story and click-to-order takeaway.",
      es: "Un sitio orientado al pedido para un restaurante indio tandoor 100% halal en Fréjus — menú, historia y pedido para llevar con un clic.",
      it: "Un sito orientato all'ordine per un ristorante indiano tandoor 100% halal a Fréjus — menù, storia e ordine da asporto con un clic.",
      de: "Eine bestellorientierte Website für ein 100% halal indisches Tandoor-Restaurant in Fréjus — Speisekarte, Geschichte und Take-away per Klick.",
      pt: "Um site orientado para encomendas de um restaurante indiano tandoor 100% halal em Fréjus — menu, história e take-away com um clique."
    },
    tags: { fr: ["Restaurant", "Commande en ligne"], en: ["Restaurant", "Order online"], es: ["Restaurante", "Pedido online"], it: ["Ristorante", "Ordine online"], de: ["Restaurant", "Online bestellen"], pt: ["Restaurante", "Encomenda online"] },
    testimonial: {
      placeholder: true,
      quote: {
        fr: "La commande à emporter est devenue simple, et le site donne faim dès la page d'accueil.",
        en: "Takeaway ordering is simple now, and the site makes you hungry from the homepage.",
        es: "Pedir para llevar ahora es fácil, y el sitio abre el apetito desde la página de inicio.",
        it: "Ordinare da asporto ora è semplice e il sito mette fame già dalla home.",
        de: "Take-away bestellen ist jetzt einfach, und die Website macht schon auf der Startseite Appetit.",
        pt: "Encomendar para levar ficou simples, e o site abre o apetite logo na página inicial."
      },
      name: "Nom du client",
      role: { fr: "Restaurant · Fréjus", en: "Restaurant · Fréjus", es: "Restaurante · Fréjus", it: "Ristorante · Fréjus", de: "Restaurant · Fréjus", pt: "Restaurante · Fréjus" }
    }
  },
  {
    slug: "stephanie", title: "SR Bien-être", url: "https://www.srbienetre.fr", category: "business",
    blurb: {
      fr: "Le site d'une praticienne du bien-être à Saint-Raphaël — sophrologie, soins énergétiques, drainage lymphatique et yoga enfants, avec réservation en ligne.",
      en: "A wellbeing practitioner's site in Saint-Raphaël — sophrology, energy healing, lymphatic drainage and children's yoga, with online booking.",
      es: "El sitio de una profesional del bienestar en Saint-Raphaël — sofrología, terapias energéticas, drenaje linfático y yoga infantil, con reserva en línea.",
      it: "Il sito di una professionista del benessere a Saint-Raphaël — sofrologia, trattamenti energetici, drenaggio linfatico e yoga per bambini, con prenotazione online.",
      de: "Die Website einer Wellness-Praktikerin in Saint-Raphaël — Sophrologie, Energiearbeit, Lymphdrainage und Kinderyoga, mit Online-Buchung.",
      pt: "O site de uma profissional do bem-estar em Saint-Raphaël — sofrologia, terapias energéticas, drenagem linfática e ioga infantil, com reserva online."
    },
    tags: { fr: ["Bien-être", "Réservation en ligne"], en: ["Wellbeing", "Online booking"], es: ["Bienestar", "Reserva online"], it: ["Benessere", "Prenotazione online"], de: ["Wohlbefinden", "Online-Buchung"], pt: ["Bem-estar", "Reserva online"] },
    testimonial: {
      placeholder: true,
      quote: {
        fr: "Un site apaisant et professionnel ; mes clientes réservent désormais en ligne sans effort.",
        en: "A calm, professional site; my clients now book online effortlessly.",
        es: "Un sitio sereno y profesional; mis clientas ahora reservan en línea sin esfuerzo.",
        it: "Un sito sereno e professionale; le mie clienti ora prenotano online senza sforzo.",
        de: "Eine ruhige, professionelle Website; meine Kundinnen buchen jetzt mühelos online.",
        pt: "Um site sereno e profissional; as minhas clientes reservam agora online sem esforço."
      },
      name: "Nom du client",
      role: { fr: "Bien-être · Saint-Raphaël", en: "Wellbeing · Saint-Raphaël", es: "Bienestar · Saint-Raphaël", it: "Benessere · Saint-Raphaël", de: "Wohlbefinden · Saint-Raphaël", pt: "Bem-estar · Saint-Raphaël" }
    }
  },
  {
    slug: "planb-global-connect", title: "Plan B Concept", url: "https://www.planb-concept.com", category: "business",
    blurb: {
      fr: "Un site bilingue de gestion de projet pour la Côte d'Azur — plus de 30 ans d'expérience du bâtiment, du premier croquis à la livraison finale.",
      en: "A bilingual project-management site for the Côte d'Azur — 30+ years of build experience, from first sketch to final handover.",
      es: "Un sitio bilingüe de gestión de proyectos para la Costa Azul — más de 30 años de experiencia en construcción, del primer boceto a la entrega final.",
      it: "Un sito bilingue di project management per la Costa Azzurra — oltre 30 anni di esperienza nell'edilizia, dal primo schizzo alla consegna finale.",
      de: "Eine zweisprachige Projektmanagement-Website für die Côte d'Azur — über 30 Jahre Bauerfahrung, von der ersten Skizze bis zur finalen Übergabe.",
      pt: "Um site bilingue de gestão de projetos para a Côte d'Azur — mais de 30 anos de experiência em construção, do primeiro esboço à entrega final."
    },
    tags: { fr: ["Gestion de projet", "EN / FR"], en: ["Project mgmt", "EN / FR"], es: ["Gestión de proyectos", "EN / FR"], it: ["Project management", "EN / FR"], de: ["Projektmanagement", "EN / FR"], pt: ["Gestão de projetos", "EN / FR"] },
    testimonial: {
      placeholder: true,
      quote: {
        fr: "Bilingue et élégant, il inspire confiance dès la première visite.",
        en: "Bilingual and elegant — it earns trust from the very first visit.",
        es: "Bilingüe y elegante, inspira confianza desde la primera visita.",
        it: "Bilingue ed elegante, ispira fiducia dalla prima visita.",
        de: "Zweisprachig und elegant — schafft Vertrauen vom ersten Besuch an.",
        pt: "Bilingue e elegante, inspira confiança desde a primeira visita."
      },
      name: "Nom du client",
      role: { fr: "Gestion de projet · Côte d'Azur", en: "Project management · Côte d'Azur", es: "Gestión de proyectos · Côte d'Azur", it: "Project management · Côte d'Azur", de: "Projektmanagement · Côte d'Azur", pt: "Gestão de projetos · Côte d'Azur" }
    }
  },

  // ---- Associations & sport ----
  {
    slug: "filton-athletic-fc", title: "Filton Athletic FC", url: "https://filtonathletic.co.uk", category: "community",
    blurb: {
      fr: "Le site d'un club de football du nord de Bristol — calendrier, résultats, classements, programmes de match et moyens simples de s'impliquer.",
      en: "A football club site for north Bristol — fixtures, results, league tables, matchday programmes and clear ways to get involved.",
      es: "El sitio de un club de fútbol del norte de Bristol — calendario, resultados, clasificaciones, programas de partido y formas sencillas de participar.",
      it: "Il sito di un club calcistico del nord di Bristol — calendario, risultati, classifiche, programmi delle partite e modi semplici per partecipare.",
      de: "Die Website eines Fußballvereins im Norden von Bristol — Spielplan, Ergebnisse, Tabellen, Matchday-Programme und einfache Wege mitzumachen.",
      pt: "O site de um clube de futebol do norte de Bristol — calendário, resultados, classificações, programas de jogo e formas simples de participar."
    },
    tags: { fr: ["Football", "Calendrier & résultats"], en: ["Football", "Fixtures & results"], es: ["Fútbol", "Calendario y resultados"], it: ["Calcio", "Calendario e risultati"], de: ["Fußball", "Spielplan & Ergebnisse"], pt: ["Futebol", "Calendário e resultados"] }
  },
  {
    slug: "filton-social-club", title: "Filton & District Social Club", url: "https://www.filtonsocialclub.co.uk", category: "community",
    blurb: {
      fr: "Le site associatif du Filton & District Social Club — événements, installations et adhésion, présentés simplement et clairement.",
      en: "A community site for the Filton & District Social Club — events, facilities and membership, presented simply and clearly.",
      es: "El sitio comunitario del Filton & District Social Club — eventos, instalaciones y afiliación, presentados de forma simple y clara.",
      it: "Il sito associativo del Filton & District Social Club — eventi, strutture e iscrizione, presentati in modo semplice e chiaro.",
      de: "Die Vereins-Website des Filton & District Social Club — Veranstaltungen, Einrichtungen und Mitgliedschaft, einfach und klar präsentiert.",
      pt: "O site associativo do Filton & District Social Club — eventos, instalações e adesão, apresentados de forma simples e clara."
    },
    tags: { fr: ["Communauté", "Événements"], en: ["Community", "Events"], es: ["Comunidad", "Eventos"], it: ["Comunità", "Eventi"], de: ["Gemeinschaft", "Events"], pt: ["Comunidade", "Eventos"] }
  },

  // ==== Educational — learning platforms & teaching tools ====

  // ---- Applis d'apprentissage ----
  {
    slug: "grammatica", title: "Grammatica", url: "https://grammatica.antonyaddy.com", category: "learning",
    blurb: {
      fr: "La grammaire anglaise expliquée en huit langues, avec des exercices auto-corrigés — pour étudier chaque règle dans la langue où l'on pense vraiment.",
      en: "English grammar explained in eight languages, with self-correcting exercises — so learners study each rule in the language they actually think in.",
      es: "La gramática inglesa explicada en ocho idiomas, con ejercicios autocorregidos — para estudiar cada regla en el idioma en el que realmente piensas.",
      it: "La grammatica inglese spiegata in otto lingue, con esercizi autocorretti — per studiare ogni regola nella lingua in cui pensi davvero.",
      de: "Englische Grammatik in acht Sprachen erklärt, mit selbstkorrigierenden Übungen — damit man jede Regel in der Sprache lernt, in der man wirklich denkt.",
      pt: "A gramática inglesa explicada em oito idiomas, com exercícios autocorrigidos — para estudar cada regra no idioma em que realmente pensa."
    },
    tags: { fr: ["8 langues", "Auto-correction"], en: ["8 languages", "Self-marking"], es: ["8 idiomas", "Autocorrección"], it: ["8 lingue", "Autocorrezione"], de: ["8 Sprachen", "Selbstkontrolle"], pt: ["8 idiomas", "Autocorreção"] }
  },
  {
    slug: "speakup", title: "SpeakUp AI", url: "https://speak.antonyaddy.com", category: "learning",
    blurb: {
      fr: "Un coach d'anglais IA pour de vraies conversations — entretiens, voyages et affaires à travers 38 scénarios, avec un retour CECR instantané en 12 langues d'interface.",
      en: "An AI English coach for real conversations — interviews, travel and business across 38 scenarios, with instant CEFR feedback in 12 interface languages.",
      es: "Un coach de inglés con IA para conversaciones reales — entrevistas, viajes y negocios en 38 escenarios, con feedback MCER instantáneo en 12 idiomas de interfaz.",
      it: "Un coach di inglese con IA per conversazioni reali — colloqui, viaggi e affari in 38 scenari, con feedback QCER istantaneo in 12 lingue d'interfaccia.",
      de: "Ein KI-Englischcoach für echte Gespräche — Vorstellungsgespräche, Reisen und Business in 38 Szenarien, mit sofortigem GER-Feedback in 12 Oberflächensprachen.",
      pt: "Um coach de inglês com IA para conversas reais — entrevistas, viagens e negócios em 38 cenários, com feedback QECR instantâneo em 12 idiomas de interface."
    },
    tags: { fr: ["Coach IA", "Retour CECR"], en: ["AI coach", "CEFR feedback"], es: ["Coach IA", "Feedback MCER"], it: ["Coach IA", "Feedback QCER"], de: ["KI-Coach", "GER-Feedback"], pt: ["Coach IA", "Feedback QECR"] }
  },
  {
    slug: "toeic-success-hub", title: "ToeicPath", url: "https://toeic.antonyaddy.com", category: "learning",
    blurb: {
      fr: "Une préparation au TOEIC complète et guidée, sur les quatre compétences et toutes les parties Listening & Reading — avec examens blancs et entraînement adaptatif, sans compte.",
      en: "Complete, guided TOEIC preparation across all four skills and every Listening & Reading part — with mock tests and adaptive practice, no account required.",
      es: "Preparación completa y guiada para el TOEIC en las cuatro destrezas y todas las partes de Listening & Reading — con simulacros y práctica adaptativa, sin cuenta.",
      it: "Una preparazione al TOEIC completa e guidata su tutte e quattro le abilità e ogni parte di Listening & Reading — con simulazioni e pratica adattiva, senza account.",
      de: "Vollständige, geführte TOEIC-Vorbereitung über alle vier Fertigkeiten und jeden Listening-&-Reading-Teil — mit Probetests und adaptivem Üben, ohne Konto.",
      pt: "Preparação completa e guiada para o TOEIC nas quatro competências e em todas as partes de Listening & Reading — com simulações e prática adaptativa, sem conta."
    },
    tags: { fr: ["TOEIC", "Adaptatif"], en: ["TOEIC", "Adaptive"], es: ["TOEIC", "Adaptativo"], it: ["TOEIC", "Adattivo"], de: ["TOEIC", "Adaptiv"], pt: ["TOEIC", "Adaptativo"] }
  },
  {
    slug: "cloe-prep-path", title: "CLOE Prep", url: "https://cloe.antonyaddy.com", category: "learning",
    blurb: {
      fr: "Une préparation à la certification d'anglais CLOE orientée entreprise — les quatre compétences plus l'oral, autour de l'anglais réellement utilisé au travail.",
      en: "Workplace-focused preparation for the CLOE English certification — the four skills plus speaking, built around the English people really use at work.",
      es: "Preparación para la certificación de inglés CLOE orientada al trabajo — las cuatro destrezas más expresión oral, en torno al inglés que se usa de verdad en la empresa.",
      it: "Preparazione alla certificazione d'inglese CLOE orientata al lavoro — le quattro abilità più il parlato, attorno all'inglese realmente usato in azienda.",
      de: "Berufsorientierte Vorbereitung auf das CLOE-Englischzertifikat — die vier Fertigkeiten plus Sprechen, rund um das Englisch, das man im Job wirklich braucht.",
      pt: "Preparação para a certificação de inglês CLOE orientada para o trabalho — as quatro competências mais a oralidade, em torno do inglês realmente usado na empresa."
    },
    tags: { fr: ["Certification", "Anglais pro"], en: ["Certification", "Business English"], es: ["Certificación", "Inglés de negocios"], it: ["Certificazione", "Inglese business"], de: ["Zertifizierung", "Business-Englisch"], pt: ["Certificação", "Inglês de negócios"] }
  },
  {
    slug: "listening-english", title: "ListenUp", url: "https://listening.antonyaddy.com", category: "learning",
    blurb: {
      fr: "De la compréhension orale en anglais avec audio IA, surlignage karaoké mot à mot, quiz de compréhension et traductions instantanées en plus de dix langues.",
      en: "English listening practice with AI audio, word-by-word karaoke highlighting, comprehension quizzes and instant translations in ten-plus languages.",
      es: "Práctica de comprensión oral en inglés con audio de IA, resaltado karaoke palabra por palabra, cuestionarios y traducciones instantáneas en más de diez idiomas.",
      it: "Ascolto in inglese con audio IA, evidenziazione karaoke parola per parola, quiz di comprensione e traduzioni istantanee in più di dieci lingue.",
      de: "Englisches Hörtraining mit KI-Audio, Wort-für-Wort-Karaoke-Hervorhebung, Verständnis-Quiz und Sofortübersetzungen in über zehn Sprachen.",
      pt: "Treino de compreensão oral em inglês com áudio de IA, destaque karaoke palavra a palavra, questionários e traduções instantâneas em mais de dez idiomas."
    },
    tags: { fr: ["Audio IA", "Texte karaoké"], en: ["AI audio", "Karaoke text"], es: ["Audio IA", "Texto karaoke"], it: ["Audio IA", "Testo karaoke"], de: ["KI-Audio", "Karaoke-Text"], pt: ["Áudio IA", "Texto karaoke"] }
  },
  {
    slug: "adventure-books", title: "English Reading Adventures", url: "https://books.antonyaddy.com", category: "learning",
    blurb: {
      fr: "Des histoires interactives à embranchements où l'apprenant est le héros — à lire à son niveau, avec le sens disponible en huit langues.",
      en: "Interactive branching stories where the learner is the hero — read at your own level, with meaning available in eight languages.",
      es: "Historias interactivas ramificadas donde el alumno es el héroe — se leen a tu nivel, con el significado disponible en ocho idiomas.",
      it: "Storie interattive a bivi in cui lo studente è l'eroe — da leggere al proprio livello, con il significato disponibile in otto lingue.",
      de: "Interaktive Verzweigungsgeschichten, in denen die lernende Person die Heldin ist — auf dem eigenen Niveau lesen, mit Bedeutung in acht Sprachen.",
      pt: "Histórias interativas ramificadas em que o aluno é o herói — para ler ao seu nível, com o significado disponível em oito idiomas."
    },
    tags: { fr: ["Histoires à choix", "Lecture graduée"], en: ["Branching stories", "Graded reading"], es: ["Historias ramificadas", "Lectura graduada"], it: ["Storie a bivi", "Lettura graduata"], de: ["Verzweigungsgeschichten", "Gestuftes Lesen"], pt: ["Histórias ramificadas", "Leitura graduada"] }
  },
  {
    slug: "anglais-a-distance", title: "Anglais à Distance", url: "https://www.anglaisadistance.fr", category: "learning",
    blurb: {
      fr: "De l'anglais en ligne gratuit pour adultes francophones — grammaire, phrasal verbs, dialogues audio et quiz de vocabulaire, réunis au même endroit.",
      en: "Free online English for French-speaking adults — grammar, phrasal verbs, audio dialogues and vocabulary quizzes in one place.",
      es: "Inglés en línea gratuito para adultos francófonos — gramática, phrasal verbs, diálogos en audio y cuestionarios de vocabulario, todo en un solo lugar.",
      it: "Inglese online gratuito per adulti francofoni — grammatica, phrasal verbs, dialoghi audio e quiz di vocabolario, tutto in un unico posto.",
      de: "Kostenloses Online-Englisch für französischsprachige Erwachsene — Grammatik, Phrasal Verbs, Audio-Dialoge und Vokabel-Quiz an einem Ort.",
      pt: "Inglês online gratuito para adultos francófonos — gramática, phrasal verbs, diálogos em áudio e questionários de vocabulário, tudo num só lugar."
    },
    tags: { fr: ["Pour francophones", "Gratuit"], en: ["For francophones", "Free"], es: ["Para francófonos", "Gratis"], it: ["Per francofoni", "Gratuito"], de: ["Für Frankophone", "Kostenlos"], pt: ["Para francófonos", "Gratuito"] }
  },
  {
    slug: "biz-fluent-coach", title: "TP English Pro", url: "https://ad.antonyaddy.com", category: "learning",
    blurb: {
      fr: "Une plateforme gratuite d'anglais professionnel pour le TP Assistant de Direction — exercices interactifs, simulateur d'examen et vocabulaire administratif.",
      en: "A free professional-English platform for France's TP Assistant de Direction qualification — interactive exercises, an exam simulator and administrative vocabulary.",
      es: "Una plataforma gratuita de inglés profesional para el título francés «TP Assistant de Direction» — ejercicios interactivos, simulador de examen y vocabulario administrativo.",
      it: "Una piattaforma gratuita di inglese professionale per il titolo francese «TP Assistant de Direction» — esercizi interattivi, simulatore d'esame e lessico amministrativo.",
      de: "Eine kostenlose Plattform für Berufsenglisch für die französische Qualifikation «TP Assistant de Direction» — interaktive Übungen, Prüfungssimulator und Verwaltungsvokabular.",
      pt: "Uma plataforma gratuita de inglês profissional para a qualificação francesa «TP Assistant de Direction» — exercícios interativos, simulador de exame e vocabulário administrativo."
    },
    tags: { fr: ["Simu. examen", "Professionnel"], en: ["Exam sim", "Professional"], es: ["Simulador de examen", "Profesional"], it: ["Simulatore d'esame", "Professionale"], de: ["Prüfungssimulator", "Beruflich"], pt: ["Simulador de exame", "Profissional"] }
  },

  // ---- Formation & enseignement ----
  {
    slug: "addys-english-pro", title: "Addy's English Pro", url: "https://www.antonyaddy.com", category: "training",
    blurb: {
      fr: "Le site de coaching en anglais professionnel d'un formateur britannique certifié — pour entreprises, cadres et particuliers, dans le Var, les Alpes-Maritimes et à distance.",
      en: "The professional-English coaching site for a certified British trainer — for companies, executives and individuals across the Var, Alpes-Maritimes and online.",
      es: "El sitio de coaching de inglés profesional de un formador británico certificado — para empresas, directivos y particulares en el Var, los Alpes Marítimos y en línea.",
      it: "Il sito di coaching d'inglese professionale di un formatore britannico certificato — per aziende, dirigenti e privati nel Var, nelle Alpi Marittime e online.",
      de: "Die Website für Business-Englisch-Coaching eines zertifizierten britischen Trainers — für Unternehmen, Führungskräfte und Privatpersonen im Var, in den Alpes-Maritimes und online.",
      pt: "O site de coaching de inglês profissional de um formador britânico certificado — para empresas, quadros e particulares no Var, nos Alpes Marítimos e online."
    },
    tags: { fr: ["Site vitrine", "EN / FR"], en: ["Service site", "EN / FR"], es: ["Sitio de servicios", "EN / FR"], it: ["Sito vetrina", "EN / FR"], de: ["Service-Website", "EN / FR"], pt: ["Site de serviços", "EN / FR"] }
  },
  {
    slug: "addy-genai-training", title: "Formation IA Générative", url: "https://ia.antonyaddy.com", category: "training",
    blurb: {
      fr: "Un site de services pour des formations pratiques en IA générative — ChatGPT, Claude et Copilot pour entreprises et indépendants, en français ou en anglais.",
      en: "A service site for hands-on generative-AI training — ChatGPT, Claude and Copilot for companies and freelancers, delivered in French or English.",
      es: "Un sitio de servicios para formaciones prácticas en IA generativa — ChatGPT, Claude y Copilot para empresas y autónomos, en francés o en inglés.",
      it: "Un sito di servizi per formazioni pratiche sull'IA generativa — ChatGPT, Claude e Copilot per aziende e liberi professionisti, in francese o in inglese.",
      de: "Eine Service-Website für praxisnahe Schulungen zu generativer KI — ChatGPT, Claude und Copilot für Unternehmen und Freiberufler, auf Französisch oder Englisch.",
      pt: "Um site de serviços para formações práticas em IA generativa — ChatGPT, Claude e Copilot para empresas e freelancers, em francês ou em inglês."
    },
    tags: { fr: ["IA générative", "Entreprises"], en: ["GenAI", "Corporate"], es: ["IA generativa", "Empresas"], it: ["IA generativa", "Aziende"], de: ["Generative KI", "Unternehmen"], pt: ["IA generativa", "Empresas"] }
  },
  {
    slug: "addy-sap-connect", title: "SAP MM Training", url: "https://sap.antonyaddy.com", category: "training",
    blurb: {
      fr: "Un site de formation SAP Materials Management — achats, gestion des stocks et données de base, en pratique, par un formateur bilingue EN/FR.",
      en: "A training site for SAP Materials Management — practical, hands-on procurement, inventory and master-data training from a bilingual EN/FR trainer.",
      es: "Un sitio de formación en SAP Materials Management — compras, gestión de inventario y datos maestros, en la práctica, con un formador bilingüe EN/FR.",
      it: "Un sito di formazione su SAP Materials Management — acquisti, gestione delle scorte e dati anagrafici, nella pratica, con un formatore bilingue EN/FR.",
      de: "Eine Schulungs-Website für SAP Materials Management — Beschaffung, Bestandsführung und Stammdaten, praxisnah, von einem zweisprachigen EN/FR-Trainer.",
      pt: "Um site de formação em SAP Materials Management — compras, gestão de stocks e dados mestre, na prática, por um formador bilingue EN/FR."
    },
    tags: { fr: ["SAP", "Pratique"], en: ["SAP", "Hands-on"], es: ["SAP", "Práctico"], it: ["SAP", "Pratico"], de: ["SAP", "Praxisnah"], pt: ["SAP", "Prático"] }
  },
  {
    slug: "student-mark-tracker", title: "Student Mark Tracker", url: "https://student-mark-tracker.vercel.app", category: "training", status: "progress",
    blurb: {
      fr: "Un espace de travail privé et sécurisé pour un organisme de formation — documents, notes et progression de chaque apprenant, au propre et protégés par connexion.",
      en: "A private, secure workspace for a training business — documents, marks and individual student progress, kept clean and separate behind sign-in.",
      es: "Un espacio de trabajo privado y seguro para un centro de formación — documentos, notas y progreso de cada alumno, ordenados y protegidos tras inicio de sesión.",
      it: "Uno spazio di lavoro privato e sicuro per un ente di formazione — documenti, voti e progressi di ogni studente, in ordine e protetti da login.",
      de: "Ein privater, sicherer Arbeitsbereich für einen Bildungsanbieter — Dokumente, Noten und Fortschritt jedes Lernenden, aufgeräumt und per Login geschützt.",
      pt: "Um espaço de trabalho privado e seguro para um centro de formação — documentos, notas e progresso de cada aluno, organizados e protegidos por login."
    },
    tags: { fr: ["Tableau de bord", "Connexion"], en: ["Dashboard", "Auth"], es: ["Panel", "Acceso"], it: ["Dashboard", "Login"], de: ["Dashboard", "Login"], pt: ["Painel", "Login"] }
  }
];
