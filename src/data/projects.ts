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
  linkLabel?: "viewLive" | "viewSite"
  status: Localized
  tone: "blue" | "chalk" | "red" | "board"
  concept?: boolean
  path?: PathNode[]
}

export const projects: Project[] = [
  {
    id: "proxigaz",
    num: "01",
    name: "Proxi.gaz",
    category: {
      fr: "Livraison · Géospatial · Backend",
      en: "Delivery · Geospatial · Backend",
    },
    problem: {
      fr: "Simplifier l'accès au gaz domestique en connectant les ménages aux fournisseurs proches.",
      en: "Simplifying access to domestic gas by connecting households with nearby suppliers.",
    },
    role: {
      fr: "Fondateur & Développeur backend. Je conçois et construis la plateforme.",
      en: "Founder & Backend Developer. I design and build the platform.",
    },
    roleLead: true,
    body: {
      fr: "Une plateforme conçue pour simplifier l'accès au gaz domestique en connectant les ménages avec les fournisseurs de gaz à proximité et en permettant les commandes à domicile. Je conçois l'architecture backend avec Java et Spring Boot, développe les contrats d'API REST avec une approche OpenAPI-first, modélise les données relationnelles avec PostgreSQL et PostGIS, structure la découverte géospatiale des fournisseurs et les requêtes basées sur la localisation, et établis le déploiement conteneurisé avec validation automatique des spécifications API.",
      en: "A platform designed to simplify access to domestic gas by connecting households with nearby gas suppliers and enabling home-delivery orders. I design the backend architecture using Java and Spring Boot, develop REST API contracts using an OpenAPI-first approach, model relational data with PostgreSQL and PostGIS, structure geospatial supplier discovery and location-based queries, and establish containerized deployment with automated API specification validation.",
    },
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "PostGIS",
      "OpenAPI",
      "Docker",
      "Gradle",
    ],
    status: { fr: "En développement", en: "In Development" },
    tone: "red",
  },
  {
    id: "expoprepa",
    num: "02",
    name: "ExpoPrepa",
    category: {
      fr: "EdTech · Préparation aux examens",
      en: "EdTech · Examination Preparation",
    },
    problem: {
      fr: "Aider les étudiants et professionnels à se préparer aux tests de compétence linguistique.",
      en: "Helping students and professionals prepare for language proficiency tests.",
    },
    role: {
      fr: "Développeur logiciel chez Logiaspace.",
      en: "Software Developer — Logiaspace",
    },
    roleLead: false,
    body: {
      fr: "ExpoPrepa est une plateforme de préparation aux examens en ligne conçue pour aider les étudiants et professionnels à se préparer aux tests de compétence linguistique comme TCF, TEF et IELTS. Elle fournit un environnement numérique pour pratiquer les exercices d'examen, évaluer les compétences linguistiques et suivre les progrès de préparation via des simulations de tests structurées. Je contribue au développement et à l'évolution de l'application web, travaille avec React pour développer et maintenir les composants de l'application frontend, développe et intègre des fonctionnalités backend avec Node.js et Express.js, travaille avec MongoDB pour la persistance des données de l'application, supporte la communication entre les composants frontend et les services backend via des APIs REST, et utilise Docker pour supporter le développement et le déploiement de l'application conteneurisée.",
      en: "ExpoPrepa is an online examination preparation platform designed to help students and professionals prepare for language proficiency tests such as TCF, TEF, and IELTS. It provides a digital environment for practicing examination exercises, evaluating language skills, and tracking preparation progress through structured test simulations. I contribute to the development and evolution of the web application, work with React to develop and maintain frontend application components, develop and integrate backend functionality using Node.js and Express.js, work with MongoDB for application data persistence, support communication between frontend components and backend services through REST APIs, and use Docker to support containerized application development and deployment.",
    },
    extra: {
      fr: "La partie intéressante n'était pas de démarrer quelque chose. C'était d'arriver quelque part à moitié construit et de comprendre comment ça s'assemble — lire les décisions d'autres personnes, respecter les conventions déjà là, et y ajouter sans casser ce qui fonctionnait.",
      en: "The interesting part wasn't starting something. It was arriving somewhere half-built and working out how it fits together — reading other people's decisions, matching conventions that were already there, and adding to it without breaking what worked.",
    },
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Docker"],
    link: "https://expoprepa.com/",
    linkLabel: "viewLive",
    status: { fr: "En développement", en: "Product Development" },
    tone: "blue",
  },
  {
    id: "lifekora",
    num: "03",
    name: "LifeKora",
    category: {
      fr: "Santé · Gestion de dons de sang",
      en: "Healthcare · Blood Donation Management",
    },
    problem: {
      fr: "Faciliter les activités de don de sang en connectant les donneurs aux responsables de la coordination.",
      en: "Facilitating blood donation activities by connecting donors with coordinators.",
    },
    role: {
      fr: "Développeur backend chez LAO SARL.",
      en: "Backend Developer — LAO SARL",
    },
    body: {
      fr: "LifeKora est une plateforme numérique conçue pour faciliter les activités de don de sang en connectant les donneurs avec les responsables de la coordination de la collecte de sang. Elle fournit un système centralisé pour gérer les informations des donneurs, les collecteurs de sang et les rendez-vous de don, aidant à organiser et rationaliser le processus de don de sang. Je développe des APIs REST pour la gestion des informations des donneurs, implémente des fonctionnalités backend pour la gestion des collecteurs de sang, construis des endpoints de gestion des rendez-vous pour soutenir les workflows de planification des dons, structure les services backend pour supporter les opérations métier principales de la plateforme, expose des endpoints d'API documentés pour l'intégration frontend, et contribue à l'intégration entre les services backend et le frontend Vue.js.",
      en: "LifeKora is a digital platform designed to facilitate blood donation activities by connecting donors with the people responsible for coordinating blood collection. It provides a centralized system for managing donor information, blood collectors, and donation appointments, helping organize and streamline the blood donation process. I develop REST APIs for donor information management, implement backend functionality for blood collector management, build appointment management endpoints to support donation scheduling workflows, structure backend services to support the platform's core business operations, expose documented API endpoints for frontend integration, and contribute to the integration between backend services and the Vue.js frontend.",
    },
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "OpenAPI",
      "Docker",
      "Gradle",
      "Vue.js",
    ],
    link: "https://life-kora.com/",
    linkLabel: "viewSite",
    status: { fr: "En développement", en: "Product Development" },
    tone: "chalk",
  },
  {
    id: "suku",
    num: "04",
    name: "SUKU",
    category: {
      fr: "Éducation · Évaluation et apprentissage",
      en: "Education · Assessment and Learning",
    },
    problem: {
      fr: "Aider les apprenants à pratiquer, évaluer leurs connaissances et suivre leurs performances.",
      en: "Helping learners practice, evaluate their knowledge, and monitor their performance.",
    },
    role: {
      fr: "Développeur backend chez LAO SARL.",
      en: "Backend Developer — LAO SARL",
    },
    body: {
      fr: "SUKU est une plateforme d'évaluation et d'apprentissage en ligne conçue pour aider les apprenants à pratiquer, évaluer leurs connaissances et suivre leurs performances académiques. Elle offre des expériences d'évaluation via des quiz et exercices, permettant aux utilisateurs de tester leur compréhension tout en aidant les enseignants à gérer les activités d'apprentissage. Je développe des APIs backend pour la gestion des quiz et les workflows d'évaluation, implémente des fonctionnalités pour le suivi et la récupération des performances des apprenants, construis des fonctionnalités backend supportant la gestion des paiements des enseignants, structure des endpoints REST pour supporter les opérations d'évaluation et d'apprentissage de la plateforme, documente les contrats d'API avec OpenAPI pour l'intégration frontend, et contribue à l'intégration backend/frontend avec l'application Vue.js.",
      en: "SUKU is an online assessment and learning platform designed to help learners practice, evaluate their knowledge, and monitor their academic performance. It provides assessment experiences through quizzes and exercises, enabling users to test their understanding while supporting teachers in managing learning activities. I develop backend APIs for quiz management and assessment workflows, implement functionality for tracking and retrieving learner performance, build backend features supporting teacher payout management, structure REST endpoints to support the platform's assessment and learning operations, document API contracts using OpenAPI for frontend integration, and contribute to backend/frontend integration with the Vue.js application.",
    },
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "OpenAPI",
      "Docker",
      "Gradle",
      "Vue.js",
    ],
    link: "https://suku.cm/",
    linkLabel: "viewLive",
    status: { fr: "En développement", en: "Product Development" },
    tone: "board",
  },
]
