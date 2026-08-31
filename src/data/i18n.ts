export const strings = {
  nav: {
    work:    { fr: 'Travaux',     en: 'Work' },
    stack:   { fr: 'Stack',       en: 'Stack' },
    exp:     { fr: 'Expérience',  en: 'Experience' },
    about:   { fr: 'À propos',    en: 'About' },
    contact: { fr: 'Contact',     en: 'Contact' },
    cta:     { fr: 'Discutons',   en: "Let's talk" },
    langLabel: { fr: 'Passer en anglais', en: 'Passer en français' },
  },

  hero: {
    eyebrow: { fr: 'JAVA · SPRING BOOT · DOUALA, CAMEROUN', en: 'JAVA · SPRING BOOT · DOUALA, CAMEROON' },
    headline: {
      fr: 'Je construis des systèmes backend pour les gens qui m\'entourent.',
      en: 'I build backend systems for the people around me.',
    },
    body: {
      fr: 'Je suis Mohamed — développeur Java et Spring Boot à Douala. Je construis des APIs REST et des microservices chez Lao Sarl, et je travaille à distance chez Logiaspace sur ExpoPrepa, une plateforme de préparation aux certifications linguistiques que nous avons accompagnée jusqu\'au lancement. J\'ai aussi construit des systèmes pour le don de sang, l\'évaluation des étudiants et le transport. Je termine encore mon diplôme à l\'Université de Buea.',
      en: "I'm Mohamed — a Java and Spring Boot developer in Douala. I build REST APIs and microservices at Lao Sarl, and I work remotely at Logiaspace on ExpoPrepa, a language-certification platform we took from pre-launch to live. I've also built for blood donation, student assessment and transport. I'm still finishing my degree at the University of Buea.",
    },
    ctaWork:    { fr: 'Voir les projets →',  en: 'See the work →' },
    ctaContact: { fr: 'Me contacter',        en: 'Get in touch' },
    status:     { fr: '● Disponible pour des opportunités', en: '● Open to opportunities' },
    diagramCaption: {
      fr: 'Lifekora — flux de requête réel, endpoint /api/appointments',
      en: 'Lifekora — live request path, /api/appointments endpoint',
    },
    nodeTooltips: {
      entry:     { fr: 'Le client envoie la requête HTTP POST avec les détails du rendez-vous.', en: 'The client sends an HTTP POST request with appointment details.' },
      security:  { fr: 'Spring Security authentifie le donneur et vérifie ses autorisations.', en: 'Spring Security authenticates the donor and checks authorization.' },
      controller:{ fr: 'L\'AppointmentController valide les données entrantes et orchestre la logique.', en: 'AppointmentController validates incoming data and orchestrates logic.' },
      matching:  { fr: 'Le service de matching vérifie la compatibilité sanguine et la fenêtre d\'éligibilité du donneur.', en: 'Matching service checks blood-type compatibility and the donor\'s eligibility window.' },
      jpa:       { fr: 'Spring Data JPA traduit la logique domaine en requêtes SQL.', en: 'Spring Data JPA translates domain logic into SQL queries.' },
      postgres:  { fr: 'PostgreSQL persiste le rendez-vous confirmé.', en: 'PostgreSQL persists the confirmed appointment.' },
    },
  },

  credibility: {
    since:     { fr: 'En activité professionnelle depuis', en: 'Building professionally since' },
    sinceVal:  { fr: 'Nov. 2024', en: 'Nov 2024' },
    stack:     { fr: 'Stack principal', en: 'Primary stack' },
    stackVal:  { fr: 'Java · Spring Boot', en: 'Java · Spring Boot' },
    current:   { fr: 'Actuellement', en: 'Currently' },
    currentVal:{ fr: 'Développeur Backend Junior, Lao Sarl', en: 'Junior Backend Developer, Lao Sarl' },
    also:      { fr: 'Aussi', en: 'Also' },
    alsoVal:   { fr: 'Développeur, Logiaspace — l\'équipe derrière ExpoPrepa', en: 'Developer, Logiaspace — the team behind ExpoPrepa' },
  },

  intro: {
    heading: {
      fr: 'Je suis en début de carrière. Mais je construis depuis un moment.',
      en: "I'm early in my career. I'm not new to building.",
    },
    p1: {
      fr: 'J\'ai commencé chez Lao Sarl comme stagiaire backend en novembre 2024 et je suis devenu développeur junior en mars 2025. Depuis, j\'ai écrit des microservices RESTful en Java et Spring Boot, conçu des schémas MySQL, revu le code d\'autres personnes et fait réviser le mien, écrit des tests unitaires et système, et passé du temps à expliquer des choses aux stagiaires qui m\'ont rejoint après moi.',
      en: 'I started at Lao Sarl as a backend intern in November 2024 and became a junior developer in March 2025. Since then I\'ve written RESTful microservices in Java and Spring Boot, designed MySQL schemas, reviewed other people\'s code and had mine reviewed, written unit and system tests, and spent time explaining things to interns who joined after me.',
    },
    p2: {
      fr: 'Je suis passé de l\'électrotechnique à l\'informatique, et je termine encore ce diplôme à Buea tout en travaillant. Cette combinaison — étudier et livrer en même temps — a façonné ma façon de travailler plus que n\'importe quoi d\'autre.',
      en: "I switched into computer engineering from electrical power systems, and I'm still finishing that degree at Buea while working. That combination — studying and shipping at the same time — has shaped how I work more than anything else.",
    },
    p3: {
      fr: 'Depuis janvier 2026, je travaille aussi à distance comme développeur chez Logiaspace, la startup derrière ExpoPrepa — une plateforme de préparation aux certifications linguistiques. J\'ai rejoint alors que le produit était encore en pré-lancement et j\'ai travaillé sur différentes parties de la stack jusqu\'au lancement. Arriver dans un code commencé par quelqu\'un d\'autre m\'a appris plus que partir de zéro ne l\'aurait fait.',
      en: "Since January 2026 I've also been working remotely as a developer at Logiaspace, the startup behind ExpoPrepa — a platform for language-certification prep. I joined while it was still pre-launch and worked across the stack through to release. Coming into a codebase someone else had started taught me more than beginning from scratch would have.",
    },
    p4: {
      fr: 'La plupart de ce sur quoi j\'ai travaillé concernait des personnes proches de moi : des étudiants qui préparent les examens de certification en français et en anglais, des réseaux de don de sang, des opérateurs de transport. Le backend est là où je suis le plus à l\'aise. Ce qui continue de me tirer vers l\'avant, c\'est la question de savoir si le système résout réellement le problème que quelqu\'un avait.',
      en: "Most of what I've worked on has been for people near me: students preparing for French and English certification exams, blood donation networks, transport operators. Backend is where I'm strongest. What keeps pulling me forward is the question of whether the system actually solves the problem someone had.",
    },
    pullQuote: {
      fr: 'Le backend est là où je suis le plus à l\'aise. Ce qui continue de me tirer vers l\'avant, c\'est la question de savoir si le système résout réellement le problème que quelqu\'un avait.',
      en: "Backend is where I'm strongest. What keeps pulling me forward is the question of whether the system actually solves the problem someone had.",
    },
  },

  work: {
    heading: { fr: 'Ce que j\'ai réellement construit.', en: "Things I've actually built." },
    viewLive: { fr: 'Voir le produit →', en: 'View live product →' },
    viewSite: { fr: 'Voir le site →', en: 'View live site →' },
    viewConcept: { fr: 'Concept de design', en: 'Design concept' },
    conceptNote: { fr: 'Concept de design, pas un service en production.', en: 'A design concept, not a live service.' },
    screenshotCaption: { fr: 'ExpoPrepa — produit en ligne. Interface présentée à titre illustratif.', en: 'ExpoPrepa — live product. Interface shown for illustration.' },
    moviaCaptionStills: { fr: 'Concept d\'interface — données illustratives, pas un service actif.', en: 'Interface concept — illustrative data, not a live service.' },
    lifekora: {
      label: { fr: 'Santé · Microservices', en: 'Healthcare · Microservices' },
      problem: { fr: 'Connecter les donneurs de sang et les receveurs de manière fiable.', en: 'Connecting blood donors and recipients, reliably.' },
      role: { fr: 'Je l\'ai conçu et développé.', en: 'I designed and built this.' },
      body: {
        fr: 'Une plateforme basée sur des microservices Spring Boot connectant donneurs et receveurs. J\'ai développé des APIs RESTful pour la gestion des donneurs, des collecteurs et des rendez-vous avec Spring Data JPA et PostgreSQL. Le domaine a de vraies contraintes — compatibilité sanguine, fenêtres d\'éligibilité des donneurs, planification des rendez-vous — et la modéliser correctement était le vrai travail.',
        en: "A Spring Boot microservice-based platform connecting blood donors and recipients. I developed RESTful APIs for donor, collector and appointment management using Spring Data JPA and PostgreSQL. The domain has real rules — blood-type compatibility, donor eligibility windows, appointment scheduling — and modelling it correctly was the actual work.",
      },
      diagramCaption: { fr: 'Modèle de domaine — également à la source du diagramme en haut de cette page.', en: "Domain model — also the source of the diagram at the top of this page." },
      heroRef: { fr: 'Cette requête en haut de la page, c\'est ce service.', en: 'That request at the top of this page is this service.' },
    },
    suku: {
      label: { fr: 'Éducation · Évaluation · Backend', en: 'Education · Assessment · Backend' },
      problem: { fr: 'Systèmes d\'évaluation et de suivi des performances pour la préparation aux examens.', en: 'Assessment and performance-tracking systems for entrance exam prep.' },
      role: { fr: 'J\'ai refactorisé et testé les APIs existantes, et développé de nouvelles fonctionnalités.', en: 'I refactored and tested existing APIs, and developed new features.' },
      body: {
        fr: 'J\'ai développé une plateforme d\'évaluation et d\'éducation des étudiants en Java, Spring Boot et MySQL pour la préparation aux examens d\'entrée. J\'ai refactorisé et testé des APIs REST pour la gestion des quiz, le suivi des performances et les paiements des enseignants en temps réel, en gérant les versions avec Git. Travailler sur un logiciel éducatif m\'a appris que la logique backend n\'est pas invisible pour les utilisateurs. Si la notation est incorrecte ou lente, un étudiant le ressent immédiatement.',
        en: "I developed a student assessment and evaluation platform using Java, Spring Boot and MySQL for entrance exam preparation, and refactored and tested REST APIs for quiz management, performance tracking and real-time teacher payouts, managing versioning with Git. Working on education software taught me that backend logic isn't invisible to users. If scoring is wrong or slow, a student feels it immediately.",
      },
    },
    expoprepa: {
      label: { fr: 'EdTech · Évaluation linguistique', en: 'EdTech · Language assessment' },
      problem: { fr: 'Rendre abordable et numérique la préparation aux certifications TCF, TEF et IELTS.', en: 'Making TCF, TEF and IELTS certification prep affordable and digital.' },
      roleHeadline: {
        fr: 'Développeur chez Logiaspace, l\'équipe derrière ExpoPrepa. J\'ai rejoint alors que le produit était encore en pré-lancement, travaillé sur différentes parties de la stack, et il est maintenant en ligne.',
        en: 'Developer at Logiaspace, the team behind ExpoPrepa. I joined while it was still pre-launch, worked across the stack, and it\'s now live.',
      },
      context: {
        fr: 'Le TCF, le TEF et l\'IELTS sont les examens d\'entrée pour les étudiants francophones qui souhaitent étudier ou travailler à l\'étranger. La préparation est coûteuse et se fait principalement hors ligne. ExpoPrepa en fait un logiciel — examens simulés, entraînement à l\'écoute et à la lecture, évaluation assistée, progression suivie selon les niveaux CECR.',
        en: 'TCF, TEF and IELTS are the gateway exams for francophone students who want to study or work abroad. Preparation is expensive and mostly offline. ExpoPrepa turns it into software — simulated exams, listening and reading practice, assisted evaluation, progress tracked against CEFR levels.',
      },
      journey: {
        fr: 'La partie intéressante d\'ExpoPrepa pour moi n\'était pas de démarrer quelque chose. C\'était d\'arriver quelque part à moitié construit et de comprendre comment ça s\'assemble — lire les décisions d\'autres personnes, respecter les conventions qui étaient déjà là, et y ajouter sans casser ce qui fonctionnait. C\'était en pré-lancement quand j\'ai rejoint. C\'est en ligne maintenant.',
        en: "The interesting part of ExpoPrepa for me wasn't starting something. It was arriving somewhere half-built and working out how it fits together — reading other people's decisions, matching conventions that were already there, and adding to it without breaking what worked. It was pre-launch when I joined. It's live now.",
      },
      flowCaption: {
        fr: 'Comment la plateforme est structurée. Je travaille sur des parties de ce flux.',
        en: 'How the platform is structured. I work across parts of this flow.',
      },
    },
    movia: {
      label: { fr: 'Transport · Concept', en: 'Transport · Concept' },
      conceptBadge: { fr: 'Concept de design', en: 'Design concept' },
      problem: { fr: 'Qu\'est-ce qu\'un opérateur de transport a réellement besoin d\'un logiciel pour suivre ?', en: 'What does a transport business actually need software to track?' },
      role: { fr: 'J\'ai conçu ce concept.', en: 'I designed this concept.' },
      body: {
        fr: 'Un concept pour les opérateurs de transport — routes, trajets, réservations, sièges, billets. Je l\'ai conçu pour réfléchir à ce qu\'une entreprise de transport a réellement besoin que le logiciel gère.',
        en: 'A concept for transport operators — routes, trips, bookings, seats, tickets. I designed it to think through what a transport business actually needs software to track.',
      },
      designNote: {
        fr: 'Conçu autour de Spring Boot, des APIs REST et de PostgreSQL.',
        en: 'Designed around Spring Boot, REST APIs and PostgreSQL.',
      },
    },
  },

  howIWork: {
    heading: { fr: 'J\'aime comprendre l\'ensemble du tableau.', en: 'I like understanding the whole picture.' },
    stages: {
      problem:  { fr: 'Problème',     en: 'Problem' },
      domain:   { fr: 'Modèle domaine', en: 'Domain model' },
      api:      { fr: 'API design',   en: 'API design' },
      data:     { fr: 'Données',      en: 'Data' },
      tests:    { fr: 'Tests',        en: 'Tests' },
      review:   { fr: 'Revue',        en: 'Review' },
      docs:     { fr: 'Docs',         en: 'Docs' },
      ship:     { fr: 'Livraison',    en: 'Ship' },
    },
    descriptions: {
      problem:  { fr: 'Comprendre ce que quelqu\'un essaie réellement de faire.', en: "Understand what someone actually needs to do." },
      domain:   { fr: 'Modéliser les entités et les règles métier avant d\'écrire du code.', en: 'Model the entities and business rules before writing code.' },
      api:      { fr: 'Concevoir les contrats REST — endpoints, charges, codes de statut.', en: 'Design the REST contracts — endpoints, payloads, status codes.' },
      data:     { fr: 'Concevoir le schéma MySQL et les relations JPA.', en: 'Design the MySQL schema and JPA relationships.' },
      tests:    { fr: 'Tests unitaires et système écrits au cours du développement, pas après.', en: 'Unit and system tests written during development, not after.' },
      review:   { fr: 'Revues de code — donner et recevoir des retours constructifs.', en: 'Code reviews — giving and receiving constructive feedback.' },
      docs:     { fr: 'Swagger/OpenAPI pour les APIs, Jira pour le suivi.', en: 'Swagger/OpenAPI for APIs, Jira for tracking.' },
      ship:     { fr: 'Déployer, vérifier les logs, s\'assurer que ça fonctionne vraiment.', en: 'Deploy, check the logs, confirm it actually works.' },
    },
    closing: {
      fr: 'Le travail backend m\'a appris à construire quelque chose de fiable. Travailler près d\'utilisateurs réels m\'a appris à vérifier si c\'était la bonne chose à construire.',
      en: 'Backend work taught me how to build something reliable. Working close to real users taught me to check whether it was the right thing to build.',
    },
  },

  stack: {
    heading: { fr: 'Ce avec quoi je travaille.', en: 'What I work with.' },
    daily:   { fr: 'Quotidien', en: 'Daily' },
    working: { fr: 'Connaissance opérationnelle', en: 'Working knowledge' },
    dailyNote: { fr: 'Technologies que j\'utilise chaque jour dans mon travail professionnel.', en: 'Technologies I use every day in professional work.' },
    workingNote: { fr: 'Technologies que je connais et que j\'utilise régulièrement, mais pas quotidiennement.', en: 'Technologies I know and use regularly, but not every day.' },
  },

  experience: {
    heading: { fr: 'Parcours professionnel.', en: 'Professional history.' },
    present: { fr: 'Présent', en: 'Present' },
    concurrent: { fr: 'Rôles simultanés', en: 'Concurrent roles' },
    remote: { fr: 'À distance', en: 'Remote' },
    promotion: { fr: 'Promotion interne · 4 mois', en: 'Internal promotion · 4 months' },
    laoJunior: {
      title: { fr: 'Développeur Backend Junior', en: 'Junior Backend Developer' },
      bullets: {
        fr: [
          'Développe des microservices RESTful en Java 11 et Spring Boot pour des projets clients et internes',
          'Conçoit et maintient des bases de données MySQL supportant ces services',
          'Conduit des revues de code et propose des améliorations pour la qualité et la maintenabilité',
          'Rédige des tests unitaires et effectue des tests système',
          'Collabore avec des équipes transversales pour identifier, prioriser et implémenter des fonctionnalités',
          'Encadre les stagiaires et les nouveaux développeurs lors de l\'onboarding',
          'Organise des présentations techniques internes : Clean Code, Git, Docker, Agilité',
        ],
        en: [
          'Develops RESTful microservices in Java 11 and Spring Boot for client and internal projects',
          'Designs and maintains MySQL databases supporting those services',
          'Conducts code reviews and proposes improvements for quality and maintainability',
          'Writes unit tests and performs system testing',
          'Collaborates with cross-functional teams to identify, prioritize and implement features',
          'Mentors interns and new developers through onboarding',
          'Organizes internal technical presentations: Clean Code, Git, Docker, Agile',
        ],
      },
    },
    laoIntern: {
      title: { fr: 'Stagiaire Backend', en: 'Backend Intern' },
      bullets: {
        fr: [
          'Construit des APIs RESTful avec Spring Web ; a documenté les endpoints avec Swagger',
          'A rédigé et exécuté des tests unitaires ; a effectué des tests système',
          'A résolu des défauts en production',
          'A documenté les apprentissages techniques sur Jira pour l\'équipe',
          'A contribué à l\'amélioration des processus de développement et des pratiques',
        ],
        en: [
          'Built RESTful APIs with Spring Web; documented endpoints with Swagger',
          'Wrote and executed unit tests; performed system testing',
          'Troubleshot and resolved defects in production',
          'Documented technical learnings on Jira for the team',
          'Contributed to improving development processes and practices',
        ],
      },
    },
    logiaspace: {
      title: { fr: 'Développeur', en: 'Developer' },
      bullets: {
        fr: [
          'Travaille sur différentes parties de la stack sur ExpoPrepa, une plateforme de préparation aux certifications linguistiques',
          'A rejoint avant le lancement et a contribué jusqu\'à la mise en ligne du produit',
        ],
        en: [
          'Works across the stack on ExpoPrepa, a language-certification preparation platform',
          'Joined pre-launch and contributed through to release',
        ],
      },
    },
  },

  teaching: {
    heading: { fr: 'J\'explique les choses pendant que je les apprends encore.', en: "I explain things while I'm still learning them." },
    body: {
      fr: 'Peu de temps après avoir rejoint Lao Sarl, j\'ai commencé à aider les nouveaux stagiaires à s\'installer, puis à animer des sessions internes pour l\'équipe — Clean Code, Git, Docker, Agilité. Préparer un exposé est la façon la plus rapide que j\'aie trouvée de découvrir ce que je ne comprends pas encore vraiment. C\'est aussi comment je suis devenu à l\'aise pour travailler en français et en anglais en même temps.',
      en: "Not long after I joined Lao Sarl I started helping new interns get set up, and then running internal sessions for the team — Clean Code, Git, Docker, Agile. Preparing a talk is the fastest way I've found to discover what I don't actually understand yet. It's also how I got comfortable working in French and English at the same time.",
    },
    topics: {
      cleanCode: { fr: 'Clean Code', en: 'Clean Code' },
      git:       { fr: 'Git',        en: 'Git' },
      docker:    { fr: 'Docker',     en: 'Docker' },
      agile:     { fr: 'Agilité',    en: 'Agile' },
    },
  },

  education: {
    heading: { fr: 'Formation.', en: 'Education.' },
    ubea: {
      degree:  { fr: 'Licence de Technologie, Génie Informatique', en: 'B.Tech, Computer Engineering' },
      school:  { fr: 'Université de Buea', en: 'University of Buea' },
      period:  { fr: '2021 – Présent', en: '2021 – Present' },
      note:    { fr: 'En cours, tout en travaillant à temps plein.', en: 'Ongoing, while working full time.' },
    },
    ceti: {
      degree:  { fr: 'Brevet de Technicien Supérieur, Électrotechnique', en: 'Advanced Technical Certificate, Electrical Power Systems' },
      school:  { fr: 'Ceti Bilingue Ngueuga', en: 'Ceti Bilingue Ngueuga' },
      period:  { fr: '2019 – 2021', en: '2019 – 2021' },
    },
    switchNote: {
      fr: 'Je suis passé des systèmes d\'énergie électrique à l\'informatique — un changement délibéré, pas un accident.',
      en: 'I moved from electrical power systems into computer engineering — a deliberate switch, not an accident.',
    },
    languages: { fr: 'Français (natif) · Anglais (courant)', en: 'French (native) · English (proficient)' },
  },

  contact: {
    heading:  { fr: 'Construisons quelque chose d\'utile.', en: "Let's build something useful." },
    body:     { fr: 'Si vous recrutez un développeur backend, si vous construisez un produit, ou si vous voulez juste discuter d\'une idée — je serais ravi de vous entendre. Je travaille en français et en anglais.', en: "If you're hiring a backend engineer, building a product, or just want to talk through an idea — I'd be glad to hear from you. I work in French and English." },
    email:    { fr: 'E-mail', en: 'Email' },
    phone:    { fr: 'Téléphone', en: 'Phone' },
    location: { fr: 'Localisation', en: 'Location' },
    locationVal: { fr: 'Bonaberi, Douala, Cameroun', en: 'Bonaberi, Douala, Cameroon' },
    downloadCV: { fr: 'Télécharger le CV', en: 'Download CV' },
  },

  footer: {
    closing:  { fr: 'Les bons produits commencent par de bons problèmes.', en: 'Good products start with good problems.' },
    cta:      { fr: 'Vous en avez un ? Discutons →', en: "Have one? Let's talk →" },
    location: { fr: 'Douala, Cameroun', en: 'Douala, Cameroon' },
    languages: { fr: 'Français · Anglais', en: 'French · English' },
  },
}
