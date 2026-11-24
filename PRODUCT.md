# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — hiring managers and recruiters** evaluating backend engineers, local (Douala / Cameroon) and remote. They arrive from a CV, LinkedIn or a referral, scan for evidence in under two minutes, and decide whether to interview. Secondary: clients and collaborators considering contract work; peers in the local developer scene. Success is an interview or a started conversation, not a longer visit.

## Product Purpose

The personal portfolio of Njoupouandom Nfonka Mohamed Jemil Dilan ("Mohamed"), a Java / Spring Boot backend developer in Bonaberi, Douala, Cameroon. It exists so a stranger can verify, quickly and without inflated claims, that he is early-career but already shipping real systems, already mentoring, and already working across French and English.

## Positioning

A francophone Cameroonian backend developer who builds systems for the people around him — students preparing for French and English certification exams, blood donors, transport operators — and who teaches what he learns as he learns it. The proof is structural, not rhetorical: two concurrent professional roles, a product taken from mid-build to launch, an unfinished degree held alongside full-time work, and internal technical sessions he runs himself.

## Operating Context

- Read on mobile data in Cameroon, on mid-range Android, as often as on desktop.
- Default language French, detected from the browser, overridable and persisted; English is a full peer, not a translation layer.
- The reader compares this site against a CV; every date and role must agree with it.
- Contact happens by email, phone, LinkedIn, GitHub; a CV download is expected.
- The site is a single page with anchored sections; it is not an app and has no accounts.

## Capabilities and Constraints

**Accuracy contract (non-negotiable):** every claim traces to a stated fact in the source brief. No invented years, user counts, revenue, uptime, latency, clients, awards, certifications, team sizes, funding, testimonials, or technologies.

- No statistics and no animated counters anywhere.
- Never write a duration in words. State start dates (November 2024, March 2025, January 2026) or compute elapsed time from a date at render time.
- Redis, Kubernetes, AWS, GraphQL, Terraform, Elasticsearch and RabbitMQ must not appear anywhere, including decorative diagrams.
- PHP and Kafka appear only in the "working knowledge" tier, never on a project card or role bullet.
- Suku is "developed" the platform but "refactored and tested" the quiz/payout APIs — keep the distinction.
- Lifekora's search-efficiency claim stays qualitative; no percentage.
- ExpoPrepa: he is a developer at Logiaspace, joined pre-launch, contributed through to release. Never "launched it", never author of product features not named in the brief.
- Movia is a design concept, labelled as such above the fold of its card, with no clickable link while its prototype shows invented figures.
- Work order: ExpoPrepa · Lifekora · Suku · Movia.
- The hero diagram uses a Lifekora endpoint, never an ExpoPrepa one.

**Content facts:** four projects; three roles (Lao Sarl intern Nov 2024 – Feb 2025, Lao Sarl junior Mar 2025 – present, Logiaspace Jan 2026 – present, remote, concurrent); two education entries; four internal talk topics (Clean Code, Git, Docker, Agile); stack inventory and its two tiers exactly as listed in the brief.

**Open / undecided:** no CV PDF exists in the repository and no screenshot or image asset exists yet. Any CV button must be removed or the file supplied before launch; do not ship a dead link.

## Brand Commitments

- Name: Mohamed Nfonka. Logo mark: **MNJD**.
- Voice: first person, direct, short sentences, no marketing adjectives ("passionate", "results-driven", "leveraging"). Written French, not translated French.
- Bilingual FR / EN is a positioning claim, not a feature: the toggle must be visible in the nav on every breakpoint, labelled for screen readers, and must never use flag icons.
- Technical terms stay in English inside both languages (REST API, microservices, Spring Boot, code review).
- The word "freelance" must not appear; Logiaspace is employment.

## Evidence on Hand

- `src/imports/portfolio-prompt-v3.md` — the verified source brief: roles, dates, stack inventory, project scopes, links, and the accuracy contract.
- `src/data/i18n.ts` — complete FR/EN copy for every section, already checked against the brief.
- Live links: expoprepa.com, life-kora.com, linkedin.com/in/njoupouandom-nfonka-mohamed-jemil-dilan-a5204a3a2, github.com/jemil-dilan.
- Contact: nfonkmohamed@gmail.com, +237 671 01 83 02, Bonaberi, Douala.
- **Absent and must not be fabricated:** screenshots of any product, a CV file, testimonials, metrics, client names, awards, certifications, profile photography.

## Product Principles

1. **Truth is the aesthetic.** Every visible claim must survive an interviewer asking "tell me about this." Restraint in claims buys freedom in form.
2. **Show the system, not the résumé.** Domain models, request paths and data rules are the evidence; adjectives are not.
3. **The teaching is the differentiator.** Mentoring and internal sessions are a headline, never a bullet.
4. **Two languages, one voice.** French is the original, English is its equal, and neither is machine output.
5. **Early career, stated once.** Say it plainly, then let the work carry the rest.

## Accessibility & Inclusion

WCAG AA contrast on every text/background pair; visible keyboard focus; semantic landmarks; alt text for every diagram in both languages; `prefers-reduced-motion` leaves every diagram complete and legible; layouts verified at 375px in French (which runs 15–20% longer than English).
