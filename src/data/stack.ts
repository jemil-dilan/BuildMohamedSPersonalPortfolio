export type StackTier = "daily" | "working"

export interface StackItem {
  name: string
  tier: StackTier
  group: string
  connects: string[]
}

export const stackItems: StackItem[] = [
  // Core — Daily
  {
    name: "Java 8/11/17/21",
    tier: "daily",
    group: "Core",
    connects: [
      "Spring Boot",
      "Spring Web",
      "Spring Data JPA",
      "Spring Security",
      "Maven",
      "Gradle",
    ],
  },
  {
    name: "Spring Boot",
    tier: "daily",
    group: "Core",
    connects: [
      "Java 8/11/17/21",
      "Spring Web",
      "Spring Data JPA",
      "Spring Security",
      "Spring Cloud",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    name: "Spring Web",
    tier: "daily",
    group: "Core",
    connects: ["Spring Boot", "REST APIs", "Swagger/OpenAPI"],
  },
  {
    name: "Spring Data JPA",
    tier: "daily",
    group: "Core",
    connects: ["Spring Boot", "MySQL", "PostgreSQL", "Liquibase"],
  },
  {
    name: "Spring Security",
    tier: "daily",
    group: "Core",
    connects: ["Spring Boot", "REST APIs"],
  },

  // Databases — Daily
  {
    name: "MySQL",
    tier: "daily",
    group: "Databases",
    connects: ["Spring Data JPA", "Liquibase"],
  },
  {
    name: "PostgreSQL",
    tier: "daily",
    group: "Databases",
    connects: ["Spring Data JPA", "Liquibase"],
  },

  // Build & VCS — Daily
  {
    name: "Maven",
    tier: "daily",
    group: "Build & VCS",
    connects: ["Java 8/11/17/21", "Spring Boot"],
  },
  {
    name: "Git",
    tier: "daily",
    group: "Build & VCS",
    connects: ["GitHub", "GitLab"],
  },
  { name: "GitHub", tier: "daily", group: "Build & VCS", connects: ["Git"] },
  {
    name: "Docker",
    tier: "daily",
    group: "Build & VCS",
    connects: ["Spring Boot"],
  },

  // Workflow — Daily
  {
    name: "Swagger/OpenAPI",
    tier: "daily",
    group: "Workflow",
    connects: ["Spring Web", "REST APIs", "Postman"],
  },
  {
    name: "Postman",
    tier: "daily",
    group: "Workflow",
    connects: ["REST APIs", "Swagger/OpenAPI"],
  },
  { name: "Jira", tier: "daily", group: "Workflow", connects: ["Confluence"] },

  // Architecture — Daily
  {
    name: "REST APIs",
    tier: "daily",
    group: "Architecture",
    connects: [
      "Spring Web",
      "Spring Boot",
      "Swagger/OpenAPI",
      "Postman",
      "Microservices",
    ],
  },
  {
    name: "Microservices",
    tier: "daily",
    group: "Architecture",
    connects: ["Spring Boot", "REST APIs", "Spring Cloud"],
  },

  // Core — Working
  {
    name: "Spring Cloud",
    tier: "working",
    group: "Core",
    connects: ["Spring Boot", "Microservices"],
  },
  {
    name: "MongoDB",
    tier: "working",
    group: "Databases",
    connects: ["Spring Boot"],
  },
  {
    name: "Kafka",
    tier: "working",
    group: "Messaging",
    connects: ["Spring Boot"],
  },
  {
    name: "Liquibase",
    tier: "working",
    group: "Databases",
    connects: ["MySQL", "PostgreSQL", "Spring Data JPA"],
  },
  {
    name: "Gradle",
    tier: "working",
    group: "Build & VCS",
    connects: ["Java 8/11/17/21"],
  },
  { name: "GitLab", tier: "working", group: "Build & VCS", connects: ["Git"] },
  {
    name: "Confluence",
    tier: "working",
    group: "Workflow",
    connects: ["Jira"],
  },
  {
    name: "React.js",
    tier: "working",
    group: "Frontend",
    connects: ["JavaScript", "Node.js/Express.js"],
  },
  {
    name: "Node.js/Express.js",
    tier: "working",
    group: "Frontend",
    connects: ["JavaScript", "React.js"],
  },
  {
    name: "JavaScript",
    tier: "working",
    group: "Frontend",
    connects: ["React.js", "Node.js/Express.js"],
  },
  {
    name: "HTML5/CSS3",
    tier: "working",
    group: "Frontend",
    connects: ["JavaScript"],
  },
  { name: "PHP", tier: "working", group: "Frontend", connects: [] },
]

export const stackGroups = [
  "Core",
  "Databases",
  "Messaging",
  "Build & VCS",
  "Architecture",
  "Workflow",
  "Frontend",
]
