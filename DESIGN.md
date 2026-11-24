---
name: Mohamed Nfonka — Portfolio
description: A backend engineer's portfolio built as a wall of pasted posters.
colors:
  board: "#c9c2b2"
  board-deep: "#b3ab99"
  board-dark: "#9a9181"
  chalk: "#ede7d8"
  chalk-2: "#e0d8c7"
  ink: "#1a1a18"
  ink-soft: "#3a362e"
  ink-faint: "#4e4a3e"
  red: "#b02e20"
  red-deep: "#8e2418"
  blue: "#2c4c6b"
  blue-deep: "#203a53"
  tape: "rgba(232, 222, 192, 0.74)"
typography:
  display:
    fontFamily: "Archivo Black, Arial Black, sans-serif"
    fontSize: "clamp(2rem, 4.8vw, 4rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  display-hero:
    fontFamily: "Archivo Black, Arial Black, sans-serif"
    fontSize: "clamp(3.5rem, 11.8vw, 9.2rem)"
    fontWeight: 400
    lineHeight: 0.76
    letterSpacing: "-0.04em"
  display-sheet:
    fontFamily: "Archivo Black, Arial Black, sans-serif"
    fontSize: "clamp(2.1rem, 4.8vw, 3.9rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.035em"
  display-flyer:
    fontFamily: "Archivo Black, Arial Black, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  display-contact:
    fontFamily: "Archivo Black, Arial Black, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  condensed:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "0.13em"
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0em"
  label:
    fontFamily: "Courier Prime, ui-monospace, monospace"
    fontSize: "9px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0.14em"
  step-8:
    fontSize: "8px"
  step-10:
    fontSize: "10px"
  step-11:
    fontSize: "11px"
  step-12:
    fontSize: "12px"
  step-13:
    fontSize: "13px"
  step-16:
    fontSize: "16px"
  step-17:
    fontSize: "17px"
  step-19:
    fontSize: "19px"
  step-21:
    fontSize: "21px"
  step-22:
    fontSize: "22px"
  step-23:
    fontSize: "23px"
  step-24:
    fontSize: "24px"
  step-26:
    fontSize: "26px"
  step-34:
    fontSize: "34px"
  step-50:
    fontSize: "50px"
  step-1-7rem:
    fontSize: "1.7rem"
  step-2-1rem:
    fontSize: "2.1rem"
  step-2-4rem:
    fontSize: "2.4rem"
  step-2-5rem:
    fontSize: "2.5rem"
  step-3-5rem:
    fontSize: "3.5rem"
  step-3-8rem:
    fontSize: "3.8rem"
  step-3-9rem:
    fontSize: "3.9rem"
  step-4-2rem:
    fontSize: "4.2rem"
  step-4-8rem:
    fontSize: "4.8rem"
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  nav-link-active:
    backgroundColor: "{colors.red}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  nav-link:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  sheet:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 20px 36px"
  sticker-daily:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  sticker-known:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
---

# Design System: Mohamed Nfonka — Portfolio

## Overview

**Creative North Star: "The Torn Hoarding"**

The site is a hoarding on a Douala street: posters pasted over older posters, edges torn back by hand, tape still on them. Nothing is framed or mounted; everything is stuck to a wall. The wall is warm grey board, the paper is chalk, the ink is near-black, and two signal colours — a printer's red and a deep blue — do the shouting.

Depth means history, not elevation. A newer sheet sits on top of an older one and hides part of it. The reader should feel that earlier versions of the same wall exist underneath, which is the whole argument of the page: a career is layered, and the person you hire is the top sheet, not the only one.

The voice is first person, short sentences, no adjectives about the author. The layout keeps that honesty: facts sit in Courier Prime like a stamped record, statements sit in Archivo Black like a headline pasted up by hand, and the reading text stays in a quiet Public Sans so the posters can be loud.

**Key Characteristics:**

- Pasted sheets with hand-torn bottom edges, never rounded cards
- Four typefaces in fixed roles: display, condensed facts, stamped labels, reading text
- Flat colour fields that change abruptly at a torn seam
- Red and blue used as poster ink, not as UI accent
- Motion only where paper would move: the hero overprint settling, a folded corner, a menu dropping in

## Colors

Warm grey board and chalk paper carry the page; red and blue are printing inks applied in whole fields.

### Primary

- **Press Red** (#b02e20): the hero field, the contact field, the Suku sheet, active nav tabs, stamps and rules. Never used as small text on board.
- **Press Red Deep** (#8e2418): reserved for shading inside the red field and for pressed states.

### Secondary

- **Hoarding Blue** (#2c4c6b): the teaching field and the ExpoPrepa sheet — a full field that reads as a second ink run.
- **Hoarding Blue Deep** (#203a53): the edge shade inside the blue field.

### Neutral

- **Board** (#c9c2b2): the wall itself. Default page background, and the field behind the work, stack and experience sections.
- **Board Deep** (#b3ab99): the concept sheet and tonal separation on the wall.
- **Board Dark** (#9a9181): outline strokes and scrollbar.
- **Chalk** (#ede7d8): every sheet, the hero's thesis bar text, all text on red and blue.
- **Chalk 2** (#e0d8c7): the second-paper tone — the hero's contact slip and the intern role sheet.
- **Ink** (#1a1a18): body text, the thesis bar, the footer field.
- **Ink Soft** (#3a362e): long reading text inside sheets.
- **Ink Faint** (#4e4a3e): stamped labels, captions, metadata.
- **Tape** (rgba(232, 222, 192, 0.74)): the translucent ochre strip holding every sheet to the wall.

### Named Rules

**The Ink-On-Board Rule.** Red and blue never carry small text on board. On board, small text is ink or ink-faint; red is a rule, a stamp border, or a fill large enough to hold chalk.

**The Two-Ink Rule.** Red and blue never share a field. A section is board, chalk, red, blue or ink — one ground, one ink.

## Typography

**Display Font:** Archivo Black (with Arial Black, sans-serif)
**Body Font:** Public Sans (with system-ui, sans-serif)
**Condensed Font:** Archivo Narrow (with Arial Narrow, sans-serif)
**Label Font:** Courier Prime (with ui-monospace, monospace)

**Character:** A poster headline over a stamped record over quiet reading text. Archivo Black is the paste-up voice; Archivo Narrow sets facts tight and tall; Courier Prime is the typewriter label under a photo; Public Sans disappears into reading. Technical terms stay in English in both languages — Java, Spring Boot, REST, Docker.

### Hierarchy

- **Display** (400, clamp 2rem–4rem, 0.94, −0.035em): section statements and the name. Always sentence case with a full stop, never all caps.
- **Condensed** (500, 15px, 1.15, 0.13em, uppercase): role lines, poster titles inside sheets, pull quotes at 19–22px.
- **Body** (400, 14.5px, 1.7): paragraphs, max 58–64ch. Never justified.
- **Label** (400, 9px, 1.8, 0.14em, uppercase): stamps, metadata, sheet headers, legend text. Never below 8px.

The small sizes are a poster ladder rather than a modular scale: 8, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 23, 24, 26, 34, 50px. Half steps are allowed inside a step, so 10.5 and 13.5 stay inside 10 and 13. A new size joins the ladder only when a stamp or a caption genuinely cannot hold its weight on an existing step.

### Named Rules

**The One Voice Rule.** A heading is a statement, not a category. No eyebrow or kicker above a heading; the label sits under the thing it names.

## Layout

A single 1400px container with 16px gutters on mobile and 24px from `sm`, section rhythm of 56–80px vertical padding. Fields change colour at a torn seam; the seam is the only divider the page needs, so there are no section numbers, no divider rules between sections, and no cards inside cards.

Sheets are placed, not aligned: project sheets, role sheets and teaching flyers carry small rotations (±0.3–1.2deg), uneven widths (82–92%), and deliberate overlaps of 10–16px so one sheet covers the previous one's corner. Overlaps never cover a label: the sheet underneath gains 28–32px of top padding to clear the tear above it.

The work section is a stack of four sheets, first one open. The experience section is three overlapping role sheets, newest on top. The stack section is a wall of stickers grouped by tier, with a legend that explains the two tiers in words rather than percentages.

## Elevation & Depth

No elevation language: depth is physical layering. A sheet casts a soft, diffuse shadow that follows its torn contour (`filter: drop-shadow`), which reads as paper lifted off a wall, and a second, tighter contact shadow underneath. Shadows are always soft and always downward; there are no hard offset shadows, no glows, and no floating cards.

Overlap does the rest. A sheet on top of another is closer to the reader; a sheet partly hidden is older. The corner of a project sheet folds back to reveal role and stack, which is the one place depth becomes interactive.

## Shapes

Zero radius everywhere. No rounded corners on buttons, chips, sheets, fields or inputs — the world is cut paper and printer's rules, and a rounded corner breaks it.

The recurring silhouette is a rectangle with a straight top edge and a hand-torn bottom edge, generated deterministically per sheet so the tear is stable across renders and identical for a given seed. Tearing only happens at the bottom of a sheet and at a field change, never on both edges of the same element. Tape is a translucent ochre rectangle, rotated 1–3 degrees, sitting on the wrapper rather than inside the clipped sheet.

Stamps and chips are 1px rectangles, often rotated a degree or two, with uppercase Courier text. Rules are 1px ink at 20–35% opacity; section headers use a 2px ink rule.

## Components

### Buttons

- **Shape:** square (0 radius), no border unless ghost.
- **Primary:** chalk fill, ink text, condensed uppercase at 13–15px with 0.14em tracking, 10–12px vertical padding. Hover lifts 2px.
- **Ghost:** 1px chalk border at 70% on red or blue, chalk text; hover inverts to chalk fill with ink text.
- **Focus:** 2px outline in currentColor with 3px offset, never removed.

### Chips

- **Style:** 1px border, transparent fill, uppercase Courier at 8.5–9.5px, 0.12–0.14em tracking, rotated −2 to −3 degrees.
- **Status:** red border and red text on chalk ("En ligne", "Réalisé"), chalk border and chalk text on blue and red, ink border and ink text on board-deep.
- **Never** a pill. Never a filled chip inside a coloured sheet.

### Sheets

- **Corner Style:** square, torn bottom edge.
- **Background:** chalk, chalk-2, red, blue, or board-deep.
- **Shadow Strategy:** soft drop shadow following the tear; see Elevation.
- **Border:** none. Separation comes from the field change, not a stroke.
- **Internal Padding:** 20px mobile, 28px desktop, with 32–36px below the last element to survive the tear.

### Navigation

Fixed board strip, 64px tall, with a torn bottom edge hanging 20px over the hero. The name sits in a chalk label rotated −2 degrees. Section links are pasted tabs in condensed uppercase, each with its own rotation, and the current section's tab snaps straight and turns red with chalk text. The language switch is a two-cell FR/EN group with the active cell in ink; it is visible at every breakpoint, no flags. Below 1024px the tabs collapse into a hamburger that opens a full-board menu of chalk sheets.

### Stickers

The stack is a wall of stickers: ink fill with chalk text for daily tools, board fill with an ink border for working knowledge. Hover, focus or tap snaps a sticker straight, lifts it 3px, and draws its connections to other stickers while a Courier readout names them. Stickers never dim — the unconnected ones stay at full contrast.

## Do's and Don'ts

### Do:

- **Do** tear the bottom edge of a sheet and leave the top edge straight.
- **Do** put small text on board in ink or ink-faint, and reserve red for fills, rules and stamps.
- **Do** keep technical terms in English in both languages.
- **Do** let one sheet overlap the next, and pad the sheet underneath so no label is covered.
- **Do** keep the tear deterministic with a fixed seed per sheet.

### Don't:

- **Don't** round a corner, add a pill, or nest a card inside a sheet.
- **Don't** put a kicker above a heading, number a section, or add a divider rule between fields.
- **Don't** use red or blue small text on board, and don't put ink text on red.
- **Don't** animate section entrances; motion belongs to paper only — the hero overprint, the folded corner, the mobile menu.
- **Don't** use gradient text, coloured border-left callouts, hard offset shadows, or glows.
- **Don't** invent a metric, a percentage, a duration or a logo to fill space.
