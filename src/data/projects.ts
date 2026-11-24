export type Localized = { fr: string; en: string }

export interface PathNode {
  label: string
  sub: Localized
}

export interface Project {
  id: string
  num: string
  name: string
  category: Localized
  problem: Localized
  role: Localized
  roleLead?: boolean
  body: Localized
  extra?: Localized
  stack: string[]
  stackNote?: Localized
  link?: string
  linkLabel?: 'viewLive' | 'viewSite'
  status: Localized
  tone: 'blue' | 'chalk' | 'red' | 'board'
  concept?: boolean
  path?: PathNode[]
}

export const projects: Project[] = [
  {
    id: 'expoprepa',
    num: '01',
    name: 'ExpoPrepa',
    category: { fr: 'EdTech · Évaluation linguistique', en: 'EdTech · Language assessment' },
    problem: {
      fr: 'Rendre abordable et numérique la préparation aux certifications TCF, TEF et IELTS.',
      en: 'Making TCF, TEF and IELTS certification prep affordable and digital.',
    },
    role: {
      fr: "Développeur chez Logiaspace, l'équipe derrière ExpoPrepa. J'ai rejoint alors que le produit était encore en pré-lancement, j'ai travaillé sur différentes parties de la stack, et il est maintenant en ligne.",
      en: "Developer at Logiaspace, the team behind ExpoPrepa. I joined while it was still pre-launch, worked across the stack, and it's now live.",
    },
    roleLead: true,
    body: {
      fr: "Le TCF, le TEF et l'IELTS sont les examens d'entrée pour les étudiants francophones qui souhaitent étudier ou travailler à l'étranger. La préparation est coûteuse et se fait principalement hors ligne. ExpoPrepa en fait un logiciel — examens simulés, entraînement à l'écoute et à la lecture, évaluation assistée, progression suivie selon les niveaux CECR.",
      en: 'TCF, TEF and IELTS are the gateway exams for francophone students who want to study or work abroad. Preparation is expensive and mostly offline. ExpoPrepa turns it into software — simulated exams, listening and reading practice, assisted evaluation, progress tracked against CEFR levels.',
    },
    extra: {
      fr: "La partie intéressante n'était pas de démarrer quelque chose. C'était d'arriver quelque part à moitié construit et de comprendre comment ça s'assemble — lire les décisions d'autres personnes, respecter les conventions déjà là, et y ajouter sans casser ce qui fonctionnait. C'était en pré-lancement quand j'ai rejoint. C'est en ligne maintenant.",
      en: "The interesting part wasn't starting something. It was arriving somewhere half-built and working out how it fits together — reading other people's decisions, matching conventions that were already there, and adding to it without breaking what worked. It was pre-launch when I joined. It's live now.",
    },
    stack: [],
    stackNote: {
      fr: 'Contribution full-stack. La stack de production n\'est pas détaillée ici.',
      en: 'Full-stack contribution. The production stack is not detailed here.',
    },
    link: 'https://expoprepa.com/',
    linkLabel: 'viewLive',
    status: { fr: 'En ligne', en: 'Live' },
    tone: 'blue',
  },
  {
    id: 'lifekora',
    num: '02',
    name: 'Lifekora',
    category: { fr: 'Santé · Microservices', en: 'Healthcare · Microservices' },
    problem: {
      fr: 'Connecter les donneurs de sang et les receveurs de manière fiable.',
      en: 'Connecting blood donors and recipients, reliably.',
    },
    role: { fr: "Je l'ai conçu et développé.", en: 'I designed and built this.' },
    body: {
      fr: "Une plateforme basée sur des microservices Spring Boot connectant donneurs et receveurs. J'ai développé des APIs RESTful pour la gestion des donneurs, des collecteurs et des rendez-vous avec Spring Data JPA et PostgreSQL. Le domaine a de vraies contraintes — compatibilité sanguine, fenêtres d'éligibilité des donneurs, planification des rendez-vous — et la modéliser correctement était le vrai travail.",
      en: 'A Spring Boot microservice-based platform connecting blood donors and recipients. I developed RESTful APIs for donor, collector and appointment management using Spring Data JPA and PostgreSQL. The domain has real rules — blood-type compatibility, donor eligibility windows, appointment scheduling — and modelling it correctly was the actual work.',
    },
    stack: ['Spring Boot', 'REST APIs', 'Spring Data JPA', 'PostgreSQL', 'Microservices'],
    link: 'https://life-kora.com/',
    linkLabel: 'viewSite',
    status: { fr: 'En ligne', en: 'Live' },
    tone: 'chalk',
    path: [
      { label: 'POST /api/appointments', sub: { fr: 'entrée', en: 'entry' } },
      { label: 'Spring Security', sub: { fr: 'authentifier', en: 'authenticate' } },
      { label: 'AppointmentController', sub: { fr: 'valider', en: 'validate' } },
      { label: 'DonorMatchingService', sub: { fr: 'compatibilité · éligibilité', en: 'compatibility · eligibility' } },
      { label: 'Spring Data JPA', sub: { fr: 'requêtes', en: 'queries' } },
      { label: 'PostgreSQL', sub: { fr: 'persistance', en: 'persist' } },
    ],
  },
  {
    id: 'suku',
    num: '03',
    name: 'Suku',
    category: { fr: 'Éducation · Évaluation · Backend', en: 'Education · Assessment · Backend' },
    problem: {
      fr: "Systèmes d'évaluation et de suivi des performances pour la préparation aux examens d'entrée.",
      en: 'Assessment and performance-tracking systems for entrance exam prep.',
    },
    role: {
      fr: "J'ai refactorisé et testé les APIs existantes, et développé de nouvelles fonctionnalités.",
      en: 'I refactored and tested existing APIs, and developed new features.',
    },
    body: {
      fr: "J'ai développé une plateforme d'évaluation et d'éducation des étudiants en Java, Spring Boot et MySQL pour la préparation aux examens d'entrée. J'ai refactorisé et testé des APIs REST pour la gestion des quiz, le suivi des performances et les paiements des enseignants en temps réel, en gérant les versions avec Git. Travailler sur un logiciel éducatif m'a appris que la logique backend n'est pas invisible pour les utilisateurs. Si la notation est incorrecte ou lente, un étudiant le ressent immédiatement.",
      en: "I developed a student assessment and evaluation platform using Java, Spring Boot and MySQL for entrance exam preparation, and refactored and tested REST APIs for quiz management, performance tracking and real-time teacher payouts, managing versioning with Git. Working on education software taught me that backend logic isn't invisible to users. If scoring is wrong or slow, a student feels it immediately.",
    },
    stack: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Git'],
    status: { fr: 'Réalisé', en: 'Built' },
    tone: 'red',
  },
  {
    id: 'movia',
    num: '04',
    name: 'Movia',
    category: { fr: 'Transport · Concept', en: 'Transport · Concept' },
    problem: {
      fr: "Qu'est-ce qu'un opérateur de transport a réellement besoin d'un logiciel pour suivre\u00a0?",
      en: 'What does a transport business actually need software to track?',
    },
    role: { fr: "J'ai conçu ce concept.", en: 'I designed this concept.' },
    body: {
      fr: "Un concept pour les opérateurs de transport — routes, trajets, réservations, sièges, billets. Je l'ai conçu pour réfléchir à ce qu'une entreprise de transport a réellement besoin que le logiciel gère.",
      en: 'A concept for transport operators — routes, trips, bookings, seats, tickets. I designed it to think through what a transport business actually needs software to track.',
    },
    stack: ['Spring Boot', 'REST APIs', 'PostgreSQL'],
    stackNote: { fr: 'Conçu, pas déployé.', en: 'Designed, not deployed.' },
    status: { fr: 'Concept', en: 'Concept' },
    tone: 'board',
    concept: true,
  },
]
