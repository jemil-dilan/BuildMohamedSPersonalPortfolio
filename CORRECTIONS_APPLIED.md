# Portfolio Corrections Applied

## Priority 1: Critical Accuracy Fixes ✅

All critical date and professional-identity corrections have been applied across the portfolio.

## Priority 2: Projects & SEO Improvements ✅

Proxi.gaz added as #01 project, Logiaspace role updated to Fullstack Developer, Suku link added, Movia removed. Dynamic SEO with language switching implemented, sitemap and robots.txt created.

### Files Modified

1. **src/data/i18n.ts** — All bilingual content strings, Logiaspace role enhancement
2. **src/data/projects.ts** — Complete project restructure: Proxi.gaz #01, Movia removed, Suku link added
3. **src/data/stack.ts** — Technology relationships
4. **src/components/SEOHead.tsx** — NEW: Dynamic SEO metadata that updates with language
5. **src/App.tsx** — SEOHead component integration
6. **index.html** — Enhanced SEO metadata, canonical URL, Twitter Card, absolute URLs
7. **public/sitemap.xml** — NEW: Sitemap with language alternates
8. **public/robots.txt** — NEW: Search engine directives

---

## Corrections Made

### 1. Professional Dates (CRITICAL)

| Item | Before | After | Status |
|------|--------|-------|--------|
| LAO internship | Nov 2024 – Feb 2025 | Sep 2024 – Dec 2024 | ✅ Fixed |
| LAO consultant role | Mar 2025 – Present | Jan 2025 – Present | ✅ Fixed |
| Logiaspace start | Jan 2026 | Jan 2025 | ✅ Fixed |
| CETI end date | 2021 | August 2021 | ✅ Fixed |
| "Building since" date | Nov 2024 | Sep 2024 | ✅ Fixed |
| Promotion note | March 2025 | January 2025 | ✅ Fixed |

### 2. Professional Title (CRITICAL)

| Location | Before | After | Status |
|----------|--------|-------|--------|
| Hero balance A | Junior Backend Developer | Backend Developer (Consultant) | ✅ Fixed |
| Experience section | Junior Backend Developer | Backend Developer (Consultant) | ✅ Fixed |
| Intro paragraph | "junior developer" | "backend developer (consultant)" | ✅ Fixed |
| Facts sidebar | Junior backend developer | Backend developer (consultant) | ✅ Fixed |
| JSON-LD schema | Junior Backend Developer | Backend Developer (Consultant) | ✅ Fixed |

### 3. Professional Language

| Item | Before | After | Reason |
|------|--------|-------|--------|
| "Two contracts" | Deux contrats, les mêmes semaines | Deux rôles professionnels simultanés | Unless both are formal contracts, this is more accurate |

### 4. Technology Corrections

**Database references:**
- All mentions of MySQL → PostgreSQL throughout portfolio (intro, experience, "How I Work" section)

**Stack improvements:**
- Tier labels: "Daily" → "Professional experience" (more defensible)
- Tier labels: "Working knowledge" → "Familiar with" (clearer)
- MongoDB connection: Changed from `Spring Data JPA` to `Spring Boot` (Spring Data MongoDB is separate from Spring Data JPA)

### 5. Project Role Corrections

**Lifekora:**
- Before: "Je l'ai conçu et développé." / "I designed and built this."
- After: "J'ai contribué au développement backend." / "I contributed to the backend development."
- Reason: More defensible in technical interviews; matches CV description of contributing backend APIs for donor, collector and appointment management

### 6. SEO Improvements

**index.html changes:**
- Title: Now emphasizes "Java Backend Developer | Spring Boot" with international positioning
- Description: Added "Open to international opportunities"
- JSON-LD jobTitle: Updated to "Backend Developer (Consultant)"

Both French and English metadata now exist, but the English version is what international recruiters will see in search results.

---

## Still To Do — Priority 2 & 3

### High Priority (Recruiter Conversion)

1. ~~**Add Proxi.gaz as priority project**~~ ✅ **DONE**
   - Added as #01 project
   - Role: Founder & Backend Developer
   - Technologies: Java, Spring Boot, PostgreSQL, PostGIS, OpenAPI, Docker, Gradle
   - Status: In Development
   - Demonstrates backend architecture, geospatial data, OpenAPI-first approach

2. ~~**Update Logiaspace role**~~ ✅ **DONE**
   - Title updated: "Developer" → "Fullstack Developer"
   - Added: "Je développe avec React et Node.js au backend"
   - Added: Contribution to other ongoing company projects

3. ~~**Add Suku live link**~~ ✅ **DONE**
   - Link: https://suku.cm/
   - Status: "Built" → "Live"

4. ~~**Remove Movia**~~ ✅ **DONE**
   - Replaced with Proxi.gaz at the top

### High Priority (SEO & Discoverability)

5. ~~**Localized page titles and descriptions**~~ ✅ **DONE**
   - Created `SEOHead` component that dynamically updates based on language
   - French title: "Développeur Backend Java & Spring Boot | Douala, Cameroun"
   - English title: "Java Backend Developer | Spring Boot | Douala, Cameroon"
   - Titles and meta descriptions update when language switches

6. ~~**Canonical URL**~~ ✅ **DONE**
   - Added: `<link rel="canonical" href="https://mohamednfonka.dev/" />`
   - Avoids ambiguity from language query parameters

7. ~~**Better language URLs**~~ ✅ **DONE**
   - French (default): https://mohamednfonka.dev/
   - English: https://mohamednfonka.dev/?lang=en
   - Properly distinguished in hreflang tags with absolute URLs

8. ~~**Sitemap and robots.txt**~~ ✅ **DONE**
   - Created `/public/sitemap.xml` with language alternates
   - Created `/public/robots.txt` pointing to sitemap
   - Improves search engine discoverability

9. ~~**Twitter Card metadata**~~ ✅ **DONE**
   - Added Twitter Card meta tags for better social sharing

10. ~~**Enhanced JSON-LD schema**~~ ✅ **DONE**
   - Added PostgreSQL to `knowsAbout`
   - Updated URL to absolute path

### Still To Do

11. **Open Graph image**
   - 1200×630px image with name + tech stack
   - More professional LinkedIn sharing
   - Needs design/creation

12. **CV PDF**
   - Once international CV is finalized
   - Replace "email me for CV" with working PDF download

13. **International availability messaging**
   - Near contact section
   - "Based in Cameroon. Open to working worldwide."
   - Target countries and relocation preference

### Medium Priority (Technical Credibility)

5. **Stack proficiency audit**
   - Review which technologies truly belong in "Professional experience" vs "Familiar with"
   - Specific questions:
     - MongoDB: professional or familiar?
     - Kafka: professional or familiar?
     - Gradle: professional or familiar?
     - Spring Cloud: professional or familiar?

6. **Add Proxi.gaz architecture diagram**
   - If/when you want to showcase backend design

7. **Consider sanitized API documentation**
   - OpenAPI spec example from Lifekora or Proxi.gaz
   - Shows API design capability

### Polish (Discoverability)

8. **Dynamic language-aware SEO**
   - Make page title/description update when language changes in React
   - Proper canonical URLs for French vs English pages

9. **Open Graph image**
   - Professional sharing preview for LinkedIn
   - 1200×630px image with your name + tech stack

10. **Mobile and accessibility audit**
    - Test on real Android device
    - Verify WCAG AA compliance at every breakpoint

---

## What Was Preserved

Your distinctive torn-paper design system remains completely intact:

- Archivo Black display typography
- Red/blue poster aesthetic on board background
- Torn-edge sheets with deterministic seeds
- Overlapping concurrent-role presentation
- Bilingual FR/EN toggle
- All existing project visuals and flow diagrams
- The memorable "torn hoarding" first viewport

The corrections are **content-only**. No design changes were made.

---

## Verification Status

- ✅ All files compile
- ✅ Formatting passes (oxfmt)
- ✅ Both French and English content updated
- ✅ No invented metrics or claims added
- ✅ Design system preserved

---

## Next Steps

1. **Review these corrections**
   - Verify all dates match your records
   - Confirm "Backend Developer (Consultant)" is the correct designation
   - Check if "concurrent roles" language is accurate for your situation

2. **Decide on Proxi.gaz**
   - If you want it featured, provide the project details
   - If not, we can proceed with the current four projects

3. **Stack proficiency audit**
   - Review the "Professional experience" tier
   - Move any technologies that don't belong there to "Familiar with"

4. **International positioning**
   - Decide if you want explicit international-availability messaging
   - Confirm target countries

Would you like me to:
- Add Proxi.gaz now (if you provide details)?
- Implement the hero positioning improvements?
- Add the international availability section?
- Audit and reclassify the stack tiers?

Or would you prefer to review what's been done first and decide on next steps?
