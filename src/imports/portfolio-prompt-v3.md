# Build the personal portfolio of Njoupouandom Nfonka Mohamed Jemil Dilan

You are a senior UI/UX designer, creative developer and personal-brand strategist.

Build a portfolio website that could only belong to one person. Not a template with his name in it — a site that reflects a specific developer, in a specific place, building specific things, at a specific point in his career.

---

## 0. READ THIS FIRST — THE ACCURACY CONTRACT

Everything on this site must be traceable to a fact in this brief. This is non-negotiable and overrides every other instruction.

**Never invent:** years of experience, user counts, revenue, uptime, latency numbers, request volumes, client names, awards, certifications, team sizes, funding, testimonials, or technologies not listed in §2.

**Never imply authorship of work he didn't do.** If his role on a project was partial, the site says so plainly.

**No statistics of any kind.** There are no numeric achievement metrics in this brief, and none may be created. No "99.9% uptime," no "10k+ users," no "4 projects shipped." **No animated counters anywhere on this site** — there is nothing to count.

**Never state a duration in words.** Do not write "a year and a half," "18 months," "nearly two years," or any equivalent. Durations go stale the moment the site ships. Always write the start date — **November 2024** — and let the reader do the arithmetic. If a duration must be displayed, compute it in code from `2024-11-01` at render time.

**Redis, Kubernetes, AWS, GraphQL, Terraform, Elasticsearch and RabbitMQ must not appear anywhere on this site.** He has not used them. This includes decorative diagram nodes and background logo grids.

**Third-party content is not exempt.** Screenshots, embedded frames and linked artifacts must obey this contract too. See §8 for the specific rules on ExpoPrepa screenshots and the Movia prototype — both live artifacts contain placeholder statistics that must not be imported into this site.

If you are ever unsure whether a claim is supported, leave it out. A shorter honest site beats a longer inflated one.

---

## 0b. BUILD FLAGS — set these before you start

Two facts about external artifacts are not yet settled. Each has a safe default. Build with the default unless told otherwise.

```
MOVIA_LINK_MODE = "stills"     // "stills" | "linked"
MOVIA_BRAND     = "Movia"      // must match whatever the prototype's own header says
EXPOPREPA_SCOPE = "role-only"  // "role-only" | "specified"
```

- **`MOVIA_LINK_MODE = "stills"`** — the prototype is shown as captioned still images with **no clickable link** to it. Use this default because the live prototype currently displays invented statistics that would contradict §0 the moment a visitor clicked through. Switch to `"linked"` only once those figures have been removed from the prototype itself.
- **`MOVIA_BRAND`** — the prototype is currently branded **JEMIL** in its header, on its vehicles and in its footer. The portfolio and the artifact must agree. If the prototype has been renamed to Movia, keep this value. If it has not, either rename the prototype or set this flag to `"JEMIL"`. **Never ship a card named Movia that links to a site named JEMIL.**
- **`EXPOPREPA_SCOPE = "role-only"`** — if the ⚠️ box in §8 has not been filled in, write only the role line and no feature detail whatsoever.

---

## 1. WHO THIS PERSON ACTUALLY IS

**Njoupouandom Nfonka Mohamed Jemil Dilan** — goes by **Mohamed**. Backend developer, Java and Spring Boot.

Based in **Bonaberi, Douala, Cameroon**. **Native French speaker, proficient in English.** He builds in a francophone African market and works in both languages daily.

He has been working professionally **since November 2024** — first as a backend intern at Lao Sarl, then promoted to Junior Backend Developer in **March 2025**. The employment is continuous. (Per §0: state the dates, never the elapsed duration.)

He is **still completing his Bachelor of Technology in Computer Engineering at the University of Buea** (2021 – present) while working full time.

Before computer engineering, he studied **Electrical Power Systems** (Ceti Bilingue Ngueuga, 2019–2021). He switched fields.

**The detail that matters most:** as a junior, he already **mentors interns and new developers through onboarding**, and **organizes internal technical presentations** on Clean Code, Git, Docker and Agile methodology. Very few developers at his level do this. It should be treated as a headline fact, not a résumé bullet.

**And since January 2026, concurrently**, he is a **full-time remote developer at Logiaspace**, the startup that builds **ExpoPrepa**. He joined while the product was partly built and pre-launch, and worked across the stack through to release. ExpoPrepa is now live.

So: two concurrent roles, an unfinished degree, and a product taken to launch. Let that stack of facts speak for itself — state them and move on. No paragraph about hustle or dedication.

> **Both roles are current and they overlap.** Lao Sarl since March 2025, Logiaspace since January 2026, both ongoing. The site must present this as deliberate, not accidental — see §11. Never obscure one to make the timeline look linear.

### The identity the site must express

Not "junior backend engineer & product builder" — that describes fifty thousand people. The identity is narrower:

> A francophone Cameroonian backend developer who builds systems for the people around him — students preparing for French and English language certifications, blood donors, transport businesses — and who teaches what he learns as he learns it.

Douala and the French language are **not SEO keywords**. They are the reason the projects look the way they do. ExpoPrepa exists because TCF and TEF are French certification exams that thousands of francophone students take to study or emigrate abroad. That context belongs on the page, in prose, near the top.

### Tone rules for all copy

- First person. Direct. No "passionate," no "results-driven," no "leveraging cutting-edge."
- Short sentences. He is not a marketing department.
- Being early-career is stated once, plainly, without apology and without a paragraph of justification. Then the work carries the rest.
- Write copy that sounds like a smart engineer explaining his own work to a colleague over coffee.

---

## 2. THE COMPLETE, VERIFIED TECHNICAL INVENTORY

This is the whole list. Nothing else exists on this site.

**Core:** Java (8, 11, 17, 21) · Spring Boot (2.x–3.x) · Spring Web · Spring Data JPA · Spring Security · Spring Cloud

**Databases:** MySQL · PostgreSQL · MongoDB · Liquibase

**Messaging:** Kafka

**Build & version control:** Maven · Gradle · Git · GitHub · GitLab · Docker

**Documentation & workflow:** Swagger / OpenAPI · Postman · Jira · Confluence

**Architecture:** REST APIs · Microservices · Object-Oriented Programming

**Secondary / frontend:** JavaScript · Node.js / Express.js · React.js · HTML5 · CSS3 · PHP

**Languages:** French (native) · English (proficient)

Note the Java version range and the Spring Boot range — display them. "Java 8, 11, 17, 21" tells an engineer something real about legacy and modern work that a bare "Java" does not.

> **Note on PHP and Kafka.** Neither appears in a professional role or project in this brief — PHP comes from personal work, Kafka from study. Both are therefore restricted to the **Working knowledge** tier in §10 and may not be attached to any project card or experience bullet. If either is ever elevated to the Daily tier, it must first be added to the CV so the two documents agree.

---

## 3. VISUAL DIRECTION — READ THE WARNING

The default portfolio look right now is: near-black background, indigo-to-violet gradient accent, Inter plus JetBrains Mono, floating translucent navbar with backdrop blur, subtle grid texture. It is competent and it is everywhere. Do not produce it.

Pick **one** of these directions and commit fully. Do not blend them.

### Direction A — Technical Paper *(use this one)*

Off-white / warm paper background (`#FAF9F6` range), near-black ink text, one restrained accent. Feels like an engineering notebook or a well-set technical publication. Diagrams read as schematics drawn in ink, not as glowing sci-fi HUDs. Almost no backend developer does light mode — that alone makes it memorable, and it signals product sensibility rather than hacker cosplay.

### Direction B — Deep Ink *(avoid — see warning)*

Very dark, single warm accent — amber, terracotta or deep green — against near-black.

> ⚠️ **Warning.** Warm amber/terracotta on near-black is exactly the palette of the Movia prototype this site links to and shows screenshots of. Choosing B would make the concept prototype visually indistinguishable from Mohamed's personal brand, and the screenshots would disappear into the page. Direction A keeps the two clearly separate. Only choose B if Movia is dropped from the site entirely.

### Direction C — Editorial

Light, generous whitespace, magazine-grade typography, projects presented as long-form articles with pull quotes and figure captions. Leans hardest into the "I think about products, not just endpoints" positioning. Acceptable alternative to A.

### Typography

Body and UI in a workhorse sans (Inter, Manrope or similar is fine here).

**Display type must have character.** Choose a headline face with real personality — an editorial serif, a distinctive grotesk, or a well-drawn mono. This is the single highest-leverage decision for making the site feel authored rather than generated.

Monospace for technical labels, endpoint names, code and stack tags only. Not for body copy.

Whatever you choose must include **full Latin-1 coverage with correct diacritics** — `é`, `è`, `ç`, `à`, `ô` — because half this site is in French (§3b). Test the French strings specifically. Subset the fonts to Latin + Latin-1 Supplement only; do not ship Cyrillic or Greek ranges.

### Rules

- Accent color appears on fewer than 10% of visible elements.
- No neon. No glassmorphism. No Matrix rain. No floating 3D shapes. No generated illustrations. No stock photography.
- Every animation must communicate something. If it's decorative, cut it.

---

## 3b. BILINGUAL — FR / EN

**The site ships in French and English.** This is not optional and it is not a nice-to-have.

The brief claims a francophone identity as the central positioning, targets `développeur backend Douala` as a search term, and has him telling visitors "I work in French and English." A monolingual English site quietly contradicts all three. A working language toggle *demonstrates* the claim instead of asserting it, and it is the cheapest differentiator available in a market where nearly every portfolio is monolingual.

**Requirements:**

- A **FR / EN toggle** in the nav, not buried in the footer. Two characters, no flag icons (flags mean countries, not languages).
- **Default language: French**, with detection from `navigator.language`, overridable, and the choice persisted.
- Every string in `data/` is a `{ fr, en }` pair. No hardcoded copy in components.
- **Diagram labels are translated too.** An SVG with English-only node labels sitting inside a French page is worse than no toggle at all.
- Technical terms stay in English inside both versions — *REST API*, *microservices*, *Spring Boot*, *code review*. Francophone developers write it that way; translating them reads as machine output.
- `<html lang>` updates on switch. Add reciprocal `hreflang` tags for `fr` and `en`.
- The French copy is **written**, not translated word-for-word. Same voice, same brevity. It should read as though he wrote it first in French — which, for his native language, is the honest framing.

The URL structure may be `/` and `/en`, or a query parameter — pick one and be consistent. Do not build a second site.

---

## 4. STRUCTURE

Eleven sections. This is a deliberate reduction — with four projects and a short professional history, more sections means padding, and padding reads as insecurity.

```
1  Hero
2  Credibility strip
3  Introduction
4  Featured work  (ExpoPrepa · Lifekora · Suku · Movia)
5  How I work     (idea → shipped)
6  Stack
7  Experience
8  Teaching & mentoring
9  Education
10 Contact
11 Footer
```

Navigation: **Work · Stack · Experience · About · Contact** — plus a "Let's talk" CTA and the FR/EN toggle. Logo: **MNJD**.

Floating nav that condenses on scroll with an active-section indicator. On mobile, a clean full-screen menu. Nothing exotic.

---

## 5. HERO

**Eyebrow:** `JAVA · SPRING BOOT · DOUALA, CAMEROON`

**Headline** — pick one, or write something better in the same spirit:

> I build backend systems for the people around me.

> Backend engineer in Douala. I build the systems behind products people actually use.

**Supporting paragraph:**

> I'm Mohamed — a Java and Spring Boot developer in Douala. I build REST APIs and microservices at Lao Sarl, and I work remotely at Logiaspace on ExpoPrepa, a language-certification platform we took from pre-launch to live. I've also built for blood donation, student assessment and transport. I'm still finishing my degree at the University of Buea.

**CTAs:** `See the work →` and `Get in touch`

**Status:** `● Open to opportunities`

### Hero visual

An animated request path — a *specific* one, labelled with a real endpoint from a project **he personally built**.

> **This diagram must come from Lifekora, not ExpoPrepa.** An ExpoPrepa endpoint as the signature visual of the entire site is the strongest possible implicit claim of authorship over a codebase he joined rather than created — which §8 explicitly forbids. Lifekora is his own work per §8, and its domain rules are more interesting anyway.

```
POST /api/appointments
        │
   Spring Security          ← authenticate, authorize
        │
   Appointment Controller
        │
   Donor Matching Service   ← blood-type compatibility, eligibility window
        │
   Spring Data JPA
        │
    PostgreSQL              ← persist appointment
```

Nodes appear in sequence on load; the connecting lines draw themselves; a single point of light travels the path once, then rests. Hovering a node shows one plain sentence about what happens there.

**No Redis in this diagram.** No unlabeled decorative nodes. No invented latency figures on the edges.

Static and legible with reduced motion enabled, and legible at **375px width** — test that specific viewport.

---

## 6. CREDIBILITY STRIP

Four facts. All four are text. **None of them animate as counters** — there is no number here to count, and §0 forbids inventing one.

| | |
|---|---|
| **Building professionally since** | **Nov 2024** |
| **Primary stack** | **Java · Spring Boot** |
| **Currently** | **Junior Backend Developer, Lao Sarl** |
| **Also** | **Developer, Logiaspace — the team behind ExpoPrepa** |

Do not round up, embellish, or add a fifth metric. **Do not use "projects shipped: 4"** — he contributed to ExpoPrepa rather than shipping it, and a count would flatten that distinction.

---

## 7. INTRODUCTION

**Heading:**

> I'm early in my career. I'm not new to building.

**Copy — roughly this, in his voice:**

> I started at Lao Sarl as a backend intern in November 2024 and became a junior developer in March 2025. Since then I've written RESTful microservices in Java and Spring Boot, designed MySQL schemas, reviewed other people's code and had mine reviewed, written unit and system tests, and spent time explaining things to interns who joined after me.
>
> I switched into computer engineering from electrical power systems, and I'm still finishing that degree at Buea while working. That combination — studying and shipping at the same time — has shaped how I work more than anything else.
>
> Since January 2026 I've also been working remotely as a developer at Logiaspace, the startup behind ExpoPrepa — a platform for language-certification prep. I joined while it was still pre-launch and worked across the stack through to release. Coming into a codebase someone else had started taught me more than beginning from scratch would have.
>
> Most of what I've worked on has been for people near me: students preparing for French and English certification exams, blood donation networks, transport operators. Backend is where I'm strongest. What keeps pulling me forward is the question of whether the system actually solves the problem someone had.

Use exactly one pull quote here. Not three.

---

## 8. FEATURED WORK

**Heading:** `Things I've actually built.`

Four projects, **in this order**:

1. **ExpoPrepa** — hero project. Live, in use, but his role is contributor.
2. **Lifekora** — the strongest "I built this" claim *with* a live URL.
3. **Suku** — real work, honestly scoped.
4. **Movia** — a design concept. It goes last because it is the weakest artifact and the only one that isn't running code.

> **Why this order changed.** Lifekora is the only project where he can say *"I designed and implemented"* **and** point at something running. That combination is more persuasive to a hiring manager than a concept prototype, so it sits second and Movia moves to the end.

Each project gets: title, one-line problem statement, his **explicitly stated role**, what he built, the stack (from §2 only), and a link where one exists. No fabricated metrics.

---

### PROJECT 01 — ExpoPrepa *(hero project)*

**Live:** https://expoprepa.com/
**Category:** EdTech · Language assessment

#### THE ROLE — state this plainly and early on the card

Mohamed is a **developer at Logiaspace**, the startup that builds ExpoPrepa. He joined in **January 2026**, while the product was **partly built and still pre-launch**, and worked across the stack through to release. **He did not start the product and is not its sole author.** The site must never imply otherwise.

The card leads with a role line, before any feature list:

> **Developer at Logiaspace, the team behind ExpoPrepa.** I joined while it was still pre-launch, worked across the stack, and it's now live.

Two things make this the strongest work fact on the site after the mentoring, and the copy should carry both:

1. **He arrived mid-build.** Reading someone else's decisions, matching conventions he didn't choose, and shipping without breaking what worked is what the job actually is. That is not a weaker position than "I built it" — for a hiring manager it's a more directly relevant one.
2. **He was there through launch.** Taking a pre-launch product to a live one is a specific and checkable experience, and most candidates at his level have never done it. Say it plainly: *pre-launch when I joined, live now.*

**Do not stretch either point.** "I helped launch it" is true. "I launched it" is not.

**Do not list the platform's full feature set as his work.** The live product includes AI correction, live simulation sessions, subscriptions and community features. **Unless a feature is named in the block below, it is described as part of the product, never as something he built.**

> ⚠️ **[MOHAMED — ONE LINE, THEN DELETE THIS BOX]**
>
> Name the actual areas you've worked on. One sentence is enough. Examples of the right shape:
>
> - *"I work on the pricing and subscription surface — including currency formatting and reconciling the plan displays."*
> - *"I've worked on the exam interface and the endpoints behind question delivery and answer submission."*
> - *"I work on the dashboard, progress tracking and the APIs that feed them."*
> - *"I've built features across the exam flow and fixed bugs throughout the codebase."*
>
> If you genuinely can't be more specific than the last example, use the last example. Vague-but-true beats specific-but-invented. **If this box is still here when you run the prompt, set `EXPOPREPA_SCOPE = "role-only"` and write the role line and nothing else.**

**Framing — why this product matters (safe to use as written):**

> TCF, TEF and IELTS are the gateway exams for francophone students who want to study or work abroad. Preparation is expensive and mostly offline. ExpoPrepa turns it into software — simulated exams, listening and reading practice, assisted evaluation, progress tracked against CEFR levels.

This is where the Douala/francophone context becomes explicit. It's what separates "an EdTech project" from "a project this particular person would end up working on."

**The angle worth writing about — arriving mid-build, and shipping:**

> The interesting part of ExpoPrepa for me wasn't starting something. It was arriving somewhere half-built and working out how it fits together — reading other people's decisions, matching conventions that were already there, and adding to it without breaking what worked. It was pre-launch when I joined. It's live now.

That paragraph is more useful to a hiring manager than a feature list would be, and every clause of it is checkable.

#### Screenshot rules — read carefully

A browser mockup cycling two or three screens of the live product, captioned: *"ExpoPrepa — live product. Interface shown for illustration."*

**Screenshot the exam and practice interface only.**

- ❌ **Never screenshot the testimonials section.** It names individuals with specific certification scores. Those are almost certainly placeholders, and putting them in this portfolio imports someone else's unverified claims into a site whose entire premise is that every claim is true.
- ❌ **Never screenshot either pricing section.** The live product currently renders prices two different ways in two different places, including unrounded values that look like raw currency-conversion output. Reproducing that on a portfolio makes his own attention to detail the thing under review.
- ❌ No screenshot containing a user count, a score, a rating or a percentage.

If no clean screen is available, use a captioned wireframe abstraction instead of a real screenshot. An honest diagram beats a screenshot full of placeholder data.

#### Engineering angle

Show the domain flow — authentication → exam session → question delivery → answer capture → scoring → progress — labelled explicitly as *how the product works*, not *what he personally built*. A short caption does this: *"How the platform is structured. I work across parts of this flow."*

**Stack:** only what's confirmed. If unsure of the production stack, describe his contribution in general full-stack terms rather than naming frameworks the project may not use.

**CTA:** `View live product →`

---

### PROJECT 02 — Lifekora

**Live:** https://life-kora.com/
**Category:** Healthcare · Microservices

**From the CV:** a Spring Boot microservice-based platform connecting blood donors and recipients, improving search efficiency. He developed RESTful APIs for donor, collector and appointment management using Spring Data JPA and PostgreSQL.

"Improving search efficiency" is the CV's own claim — keep the phrasing qualitative. **Do not attach a percentage to it.**

**Why it leads the non-ExpoPrepa work:** it is a live deployment, the role is unambiguously his own, and the domain has real rules — blood-type compatibility, donor eligibility windows, appointment scheduling. It shows he can model a domain that has actual constraints, not just CRUD.

**Visual:** the domain model, drawn as an ink schematic.

```
Donor → Eligibility → Match → Appointment → Collector
```
```
Spring Boot services → REST APIs → Spring Data JPA → PostgreSQL
```

This is also the project the hero diagram is drawn from (§5). Reference that connection lightly — one line, e.g. *"That request at the top of this page is this service."* — and do not repeat the animated motif here.

**CTA:** `View live site →`

> ⚠️ **[MOHAMED — CONFIRM BEFORE LAUNCH]** life-kora.com resolves and is live, but it renders entirely client-side, so nothing can be verified from the outside. Confirm it is a deployment you're happy for a stranger to land on — reachable, not half-broken, no test data visible on the landing screen. If it isn't, drop the link and keep the card. A dead or broken link costs more than no link.

---

### PROJECT 03 — Suku

**Category:** Education · Assessment · Backend

**Exact CV wording — do not upgrade it:** he *developed* a student assessment and evaluation platform using Java, Spring Boot and MySQL for entrance exam preparation, and he *refactored and tested* REST APIs for quiz management, performance tracking and real-time teacher payouts, managing versioning with Git.

The distinction between "built" and "refactored and tested" matters. Keep it. Refactoring and testing payment-adjacent APIs is respectable work and doesn't need inflating.

**Visual:** a plain, well-drawn domain diagram.

```
Student → Quiz → Submission → Evaluation → Performance
```
```
Spring Boot → REST API → MySQL
```

**Narrative:**

> Working on education software taught me that backend logic isn't invisible to users. If scoring is wrong or slow, a student feels it immediately.

---

### PROJECT 04 — Movia *(concept — read §0b first)*

**Prototype:** https://site-web-avec-design-3d-592.created.app/
**Category:** Transport · Concept

**Name:** use the value of `MOVIA_BRAND`. The card and the artifact must agree — see §0b.

**Label it honestly and prominently as a design concept / prototype, not a production system.** It is hosted on an AI site builder; anyone who checks will see that. Owning it as "a concept I designed to think through transport operations" is credible. Presenting it as shipped SaaS is not, and it would undermine everything else on the page.

**Description:**

> A concept for transport operators — routes, trips, bookings, seats, tickets. I designed it to think through what a transport business actually needs software to track.

#### The link problem — this is the important part

The prototype currently displays a wall of invented figures: a live bus count, daily departures, agency partners, monthly travellers, satisfaction and on-time percentages, and a named testimonial from a fictional customer. **Every one of those violates §0.** A visitor who clicks through sees precisely what the rest of this site promised did not exist.

**With `MOVIA_LINK_MODE = "stills"` (default):** show two or three captioned still images. **No clickable link to the prototype.** Caption: *"Interface concept — illustrative data, not a live service."* Crop or omit any frame containing a statistic.

**With `MOVIA_LINK_MODE = "linked"`:** only permitted once the figures have been removed from the prototype. Even then, the CTA carries an explicit qualifier: `View concept prototype →` with the line *"A design concept, not a live service."* directly beneath it.

> ⚠️ **[MOHAMED — FIX THE PROTOTYPE OR LEAVE IT UNLINKED]** Besides the invented figures, the prototype has visible defects: the diaspora statistic card prints "HAPPY FAMILIES" as both of its labels and shows no trips figure; a testimonial renders with a doubled em dash; the footer social icons are placeholder emoji boxes; and at desktop widths the header shows two language switchers and a hamburger menu at the same time, so the breakpoints are broken. Any of these is worse for you than not linking at all.

**Domain model** (this is the interesting part, and it's honest — a data model is a design artifact, not a production claim):

```
Customer → Booking → Trip → Seat → Ticket → Validation
```

**Stack:** describe as *"designed around Spring Boot, REST APIs and PostgreSQL"* — designed, not deployed. **No Redis.**

---

### GitHub links

> ⚠️ **[MOHAMED — ACTION REQUIRED]** Your public GitHub profile currently shows a PHP boat-motor e-commerce site and a backend-learning repo as your pinned items. Suku and Lifekora are not pinned, and you have no bio or profile README.
>
> **Before this site goes live:** pin Suku and Lifekora, add a one-line bio, and write a profile README. A "View code" button that lands on an unmaintained profile costs you more than having no button.
>
> Once fixed, link **each project card to its specific repository** rather than to the profile. Until then, link only the projects whose repos are presentable.

---

## 9. HOW I WORK

**Heading:** `I like understanding the whole picture.`

One horizontal flow, animated on scroll:

```
Problem → Domain model → API design → Data → Tests → Review → Docs → Ship
```

Each stage gets one short line grounded in what he actually does at Lao Sarl. *Review* references real code reviews. *Docs* references Swagger/OpenAPI and Jira. *Tests* references unit and system testing. Nothing aspirational.

**Closing line:**

> Backend work taught me how to build something reliable. Working close to real users taught me to check whether it was the right thing to build.

This section replaces the old "From idea to product," "Architecture," "Engineering principles" and "Currently building" sections — they overlapped heavily and there isn't enough material to fill four of them. **Do not reintroduce them.**

---

## 10. STACK

Not a logo grid, not an orbiting constellation with Mohamed as the sun (that reads as ego and is hard to use on mobile).

Instead: a **grouped, interactive stack map** using the §2 groupings, where hovering a technology highlights the ones it genuinely connects to — Spring Data JPA lights up Java, Spring Boot, MySQL, PostgreSQL and Liquibase, because that's a real working relationship, not a decorative line.

Two levels of visual weight:

- **Daily** — Java, Spring Boot, Spring Web, Spring Data JPA, Spring Security, MySQL, PostgreSQL, REST, Git, Swagger/OpenAPI, Maven, Docker, Postman, Jira
- **Working knowledge** — Spring Cloud, MongoDB, Kafka, Liquibase, Gradle, GitLab, Confluence, React, Node.js/Express, JavaScript, HTML/CSS, PHP

Being honest about the split is more persuasive than presenting twenty-six technologies as equal mastery. Any engineer reading the site will trust it more.

Label the two tiers in the UI. Don't make the distinction visual-only — a visitor who can't tell which tier is which gets no benefit from the honesty.

On mobile: a clean grouped list. Do not attempt orbital physics on a phone.

---

## 11. EXPERIENCE

A restrained vertical timeline. Animated nodes, no confetti.

### Handling the overlap — read before laying this out

Two roles are current and they run in parallel: **Lao Sarl since March 2025** and **Logiaspace since January 2026**. A single vertical line with items stacked by date will make this look like a mistake.

Instead, **make the concurrency visible by design**: two parallel tracks from January 2026 onward, or a single track where both current roles are marked `Present` and visually paired under a small label such as `Concurrent`. A visitor should be able to see in one glance that this is two things at once and not a data-entry error.

Say it once, in four words or fewer — `Concurrent roles` or `Both current`. Do not write a paragraph explaining or justifying it.

### Logiaspace — Developer · Jan 2026 – Present · *Remote*
- Works across the stack on ExpoPrepa, a language-certification preparation platform
- Joined pre-launch and contributed through to release
- Further scope per §8 and the `EXPOPREPA_SCOPE` flag — role line only unless the ⚠️ box was filled in

Mark it **Remote** — the company has no office at present. Remote experience is a fact worth surfacing for anyone hiring across borders, and it costs one word.

### Lao Sarl — Junior Backend Developer · Mar 2025 – Present
- Develops RESTful microservices in Java 11 and Spring Boot for client and internal projects
- Designs and maintains MySQL databases supporting those services
- Conducts code reviews and proposes improvements for quality and maintainability
- Writes unit tests and performs system testing
- Collaborates with cross-functional teams to identify, prioritize and implement features
- Mentors interns and new developers through onboarding
- Organizes internal technical presentations: Clean Code, Git, Docker, Agile

### Lao Sarl — Backend Intern · Nov 2024 – Feb 2025
- Built RESTful APIs with Spring Web; documented endpoints with Swagger
- Wrote and executed unit tests; performed system testing
- Troubleshot and resolved defects in production
- Documented technical learnings on Jira for the team
- Contributed to improving development processes and practices

Show the intern → junior progression clearly. Internal promotion inside four months is a fact worth letting the visitor notice on their own — mark it visually, don't write a paragraph about it.

---

## 12. TEACHING & MENTORING

**A dedicated section. This is the strongest differentiator on the entire CV and it must not be buried in a timeline bullet.**

**Heading:** `I explain things while I'm still learning them.`

**Copy:**

> Not long after I joined Lao Sarl I started helping new interns get set up, and then running internal sessions for the team — Clean Code, Git, Docker, Agile. Preparing a talk is the fastest way I've found to discover what I don't actually understand yet. It's also how I got comfortable working in French and English at the same time.

Present the four talk topics as small, clean cards or tags — **not** as fabricated event listings with dates, attendee counts or venues.

This section also does the work the old "Beyond the code" personality section did (curious / builder / collaborative), so **do not add that section** — this shows the same traits with evidence instead of adjectives.

---

## 13. EDUCATION

Visually secondary. Two entries.

**University of Buea** — B.Tech, Computer Engineering — *2021 – Present*
**Ceti Bilingue Ngueuga** — Advanced Technical Certificate, Electrical Power System — *2019 – 2021*

One short line is worth adding beneath: he moved from electrical power systems into computer engineering. A deliberate switch is more interesting than a straight line, and it costs one sentence.

Also surface **French (native) · English (proficient)** here or in the footer.

---

## 14. CONTACT

**Heading:** `Let's build something useful.`

> If you're hiring a backend engineer, building a product, or just want to talk through an idea — I'd be glad to hear from you. I work in French and English.

| | |
|---|---|
| Email | nfonkmohamed@gmail.com |
| Phone | +237 671 01 83 02 |
| LinkedIn | https://www.linkedin.com/in/njoupouandom-nfonka-mohamed-jemil-dilan-a5204a3a2 |
| GitHub | https://github.com/jemil-dilan |
| Location | Bonaberi, Douala, Cameroon |

Plus a `Download CV` button.

Render the email from parts in JS rather than as a literal `mailto:` string in the HTML source, so scrapers don't lift it; the visible text may still read normally. Make the phone number `tel:`-linked on mobile.

**CV download:** serve one static PDF from `/public`. If a French and an English CV both exist, the download follows the active site language. The link must be verified before launch — a 404 on the CV button is the worst possible failure on this page.

---

## 15. FOOTER

Large closing line:

> Good products start with good problems.

Then: `Have one? Let's talk →`

Small print: name, Douala, current year (computed, not hardcoded), and the languages he works in.

---

## 16. MOTION

Library: **`motion`** (the current package; `framer-motion` is the legacy name — install `motion` and import from `motion/react`).

Character: fast, precise, quiet. Durations 200–400ms. Ease-out. Nothing bounces.

**Permitted:**
- Staggered text reveals on section entry (once, not on every scroll pass)
- SVG line-drawing for the hero and domain diagrams
- Scroll-triggered reveals for the timeline and the "How I work" flow
- Subtle card lift on hover

**Forbidden:**
- **Animated counters of any kind.** There are no numbers on this site to count. If you find yourself building a counter, you have invented a statistic — stop and re-read §0.
- Parallax on more than one element
- Custom cursors
- Perpetual motion of any kind
- Rotating/floating 3D objects
- Anything that delays reading or navigation

### The request-flow motif

A single glowing point travelling a request path is the signature idea, and it is good. **Use it in exactly two places: the hero (Lifekora endpoint, §5), and the ExpoPrepa domain-flow diagram (§8).** Repeated seven times across the site it stops being a signature and becomes wallpaper. Restraint is what makes a motif read as intentional.

`prefers-reduced-motion` must be fully respected — every diagram legible and complete in a static state.

---

## 17. MOBILE

Designed, not stacked.

- Diagrams get **simplified mobile-specific versions**, not scaled-down desktop SVGs
- Project cards become a swipeable horizontal set
- Stack map becomes a grouped list
- Typography carries the design; effects reduce sharply
- No custom cursor; contact CTA always reachable
- The FR/EN toggle stays reachable in the mobile nav — not hidden behind the menu
- Test the hero diagram at 375px width specifically
- Test the French strings at 375px too: French runs roughly 15–20% longer than English and will break layouts English didn't

---

## 18. TECHNICAL BUILD

**React · TypeScript · Vite · Tailwind CSS · motion**

```
components/
 ├── Nav                    ← includes LanguageToggle
 ├── Hero
 ├── RequestFlow            ← the signature motif, used twice
 ├── CredibilityStrip
 ├── Intro
 ├── Work/
 │    ├── ProjectCard
 │    └── CaseStudy
 ├── HowIWork
 ├── StackMap
 ├── Experience
 ├── Teaching
 ├── Education
 ├── Contact
 └── Footer

data/
 ├── projects.ts
 ├── experience.ts
 ├── stack.ts
 ├── personal.ts
 └── i18n.ts                ← every string as { fr, en }
```

All copy and content in `data/` files so it can be updated without touching components. Type everything. **No string literals in components** — that is what breaks the bilingual build.

### Performance — these are hard numbers, not aspirations

A meaningful share of this audience is on mobile data in Cameroon, on mid-range Android. Treat the budget as a requirement, not a target.

- **LCP under 2.5s on simulated Slow 4G / 3G**
- **Initial payload under 400KB** (HTML + CSS + JS + fonts + above-fold images, compressed)
- **Total page weight under 1.2MB**
- All screenshots as **AVIF with WebP fallback**, max 1200px wide, `loading="lazy"`, explicit `width`/`height` to prevent layout shift
- **No screenshot in the LCP path.** The hero is type and SVG only
- Self-host fonts, subset to Latin + Latin-1 Supplement, `font-display: swap`, preload only the display weight used above the fold
- Below-fold diagrams and the motion library are code-split and lazy-loaded. **Do not ship an animation library for a single fade**
- **CLS under 0.1**

Verify with Lighthouse mobile throttling before calling it done. If the budget is missed, cut screenshots before cutting content.

### Accessibility

Semantic HTML, keyboard-navigable, visible focus states, alt text on every diagram in **both languages**, WCAG AA contrast. Verify contrast especially carefully with the light Direction A palette — warm off-white backgrounds fail AA more often than people expect. The language toggle needs an accessible label, not just two letters.

---

## 19. SEO

**EN title:** Mohamed Nfonka — Java & Spring Boot Backend Developer, Douala
**EN description:** Java and Spring Boot backend developer in Douala, Cameroon. REST APIs, microservices and the systems behind real products.

**FR title:** Mohamed Nfonka — Développeur Backend Java & Spring Boot, Douala
**FR description:** Développeur backend Java et Spring Boot à Douala, Cameroun. APIs REST, microservices et les systèmes derrière des produits réels.

Natural keywords: Java developer, Spring Boot developer, backend developer Cameroon, développeur backend Douala, développeur Java Cameroun, REST API, microservices. **No stuffing.**

Add `Person` JSON-LD schema with `knowsLanguage: ["fr", "en"]`. Add reciprocal `hreflang` for `fr` and `en` plus `x-default`. Add a proper OG image — typographic, not a screenshot, and localized if that's cheap.

---

## 20. FINAL CHECK

Before you call this done, confirm:

**Accuracy**
- [ ] Every claim traces to a stated fact in §1, §2, §5, §7, §8, §9, §11, §12, §13 or §14
- [ ] **Redis appears nowhere**
- [ ] No invented metric, percentage, user count or rating anywhere
- [ ] **No animated counter anywhere on the site**
- [ ] **No duration written in words** — only "November 2024" and "March 2025"
- [ ] PHP and Kafka appear only in the Working-knowledge tier, on no project card
- [ ] Suku says "refactored and tested," not "built"
- [ ] Lifekora's efficiency claim carries no percentage

**External artifacts**
- [ ] No ExpoPrepa screenshot shows testimonials, pricing, scores or user counts
- [ ] `MOVIA_LINK_MODE` respected — if `"stills"`, there is **no clickable link** to the prototype
- [ ] The Movia card's name matches what the prototype's own header says
- [ ] Movia is unmistakably labelled a concept, above the fold of its card
- [ ] The Lifekora link resolves and the landing screen is presentable
- [ ] The `Download CV` link resolves in both languages
- [ ] Every project GitHub link points at a specific repo, or doesn't exist

**Positioning**
- [ ] ExpoPrepa card leads with "developer at Logiaspace, joined pre-launch, now live"
- [ ] The word "freelance" appears nowhere — Logiaspace is employment
- [ ] The Lao Sarl / Logiaspace overlap is presented as deliberate, with a concurrency marker
- [ ] Logiaspace is marked Remote
- [ ] "Helped launch" never becomes "launched"
- [ ] No ExpoPrepa feature is described as his work unless explicitly named in §8
- [ ] AI correction, live sessions, subscriptions and community are described as product features, never as his builds
- [ ] Hero and nav say **backend developer** — the full-stack work is scoped to ExpoPrepa only
- [ ] The hero diagram uses a **Lifekora** endpoint, not an ExpoPrepa one
- [ ] Work order is ExpoPrepa · Lifekora · Suku · Movia
- [ ] Teaching and mentoring has its own section

**Bilingual**
- [ ] FR and EN both complete — including diagram labels, alt text and meta tags
- [ ] No hardcoded strings in components
- [ ] French layout tested at 375px
- [ ] Diacritics render correctly in the display font

**Craft**
- [ ] The site does not look like Linear, Vercel or Stripe
- [ ] Direction A or C chosen — not B, unless Movia was dropped
- [ ] The request-flow motif appears exactly twice
- [ ] The hero diagram is legible at 375px
- [ ] Reduced motion leaves every diagram readable
- [ ] Lighthouse mobile: LCP < 2.5s, CLS < 0.1, initial payload < 400KB
- [ ] Nothing on the page would embarrass him in an interview where someone asks "tell me about this"

**The visitor should leave thinking:**

> He's early, but he's already shipped real things, he already teaches, he works in two languages, and every word on that site was true.
