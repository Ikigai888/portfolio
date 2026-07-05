---
name: Tad Natsuhara Portfolio
description: A warm editorial portfolio for a senior product designer — paper-light by default with a dark sibling theme, a high-contrast serif carrying every headline, lit by one accent per theme — terracotta in light, signature mint in dark.
theme-model: "light default (:root), dark sibling ([data-theme=\"dark\"])"
colors:
  # Light theme (canonical / default)
  bg: "#F4F0E8"
  bg-footer: "#EDE7DE"
  bg-card: "#FBF8F1"
  bg-inset: "#E9E1D2"
  text-primary: "#241E13"
  text-bright: "#17110A"
  text-secondary: "#3D3524"
  text-tertiary: "#554A33"
  text-muted: "#6E6249"
  text-faint: "#A79A80"
  text-faint-2: "#675B42"
  accent: "oklch(0.559 0.135 41.1)"       # #B4542E terracotta (light)
  accent-text: "oklch(0.515 0.137 40.8)"  # #A6461F
  # Dark sibling accent — signature mint
  accent-dark: "oklch(0.81 0.084 179)"       # #83D4C3
  accent-text-dark: "oklch(0.91 0.097 179)"  # #97F8E4
  # Outcome band — terracotta in light, mint in dark
  band-bg: "oklch(0.621 0.13 45.2)"       # #C56A3E (light) / dark: oklch(0.62 0.09 179) #3D9887
  band-text: "#2A140A"
  band-card: "rgba(26, 13, 6, 0.86)"
  band-card-text: "#F6EFE4"
  band-hairline: "rgba(26, 13, 6, 0.2)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(44px, 6vw, 88px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(30px, 4vw, 52px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  statement:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(26px, 3.1vw, 44px)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.014em"
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.6vw, 21px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  eyebrow:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  card: "14px"
  feature: "20px"
  summary: "18px"
  portrait: "16px"
  pill: "100px"
  focus: "4px"
spacing:
  gutter: "40px"
  section-pad: "110px"
  gap-stack: "24px"
  gap-split: "64px"
components:
  pill:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.band-text}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  chip:
    backgroundColor: "{colors.bg-inset}"
    textColor: "{colors.text-tertiary}"
    rounded: "{rounded.pill}"
    padding: "7px 13px"
  case-card:
    backgroundColor: "{colors.bg-card}"
    rounded: "{rounded.feature}"
---

# Design System: Tad Natsuhara Portfolio

## 1. Overview

**Creative North Star: "Editorial Restraint"**

Warm paper (`#F4F0E8`) holds the page; a high-contrast serif carries every headline like a magazine feature; one terracotta accent is the only saturated color allowed to speak. Everything else — body copy, chips, borders — recedes into a tight warm-ink ramp. The system reads like a senior designer's editorial spread: generous whitespace, serif display doing the expressive work (with its italics carrying the emphasis), a single confident hue, and no decoration that doesn't serve hierarchy.

This is the *editorial* iteration (adopted Jul 2026 from the "Editorial Homepage" redesign). It replaces the earlier dark-default, mint/copper, Alegreya-Bricolage system. The content and information architecture are unchanged; the visual language is new.

This system explicitly rejects the generic AI-template look: no purple gradients, no glassmorphism, no interchangeable hero sections, no cream-with-blue SaaS palette. Warmth is carried by the paper ground, the serif, and the terracotta — never by a tinted-near-white body that reads as "AI beige."

**Key Characteristics:**
- **Light by default, dark as sibling.** `:root` holds the canonical light (paper) theme; `[data-theme="dark"]` is its dark counterpart — same type, same layouts, same single accent lifted for the dark ground. First visit follows OS preference, else light.
- **One accent per theme** — terracotta in light, the original signature mint in dark. Each theme carries a single saturated hue; never two on one screen.
- **Serif display / sans body on a real contrast axis** — Fraunces (variable, high-contrast display serif; optical sizing drives its thick/thin) for every headline, statement, numeral, and the footer CTA; Inter for body, nav, labels, and the wordmark.
- **Italics as emphasis**, the editorial way — the hero's accent line, inline company names, statement key-phrases, and codas are set in Fraunces italic rather than bolded.
- Flat-by-default surfaces with tonal layering + soft ambient shadows; hover brightens a border, not a fill.
- Progressive enhancement: content is JS-rendered but pre-built into static HTML, reveals gate on `html.js`, a real `<noscript>` fallback ships, and all motion respects `prefers-reduced-motion`.

## 2. Colors

One warm surface ramp, one warm-ink text ramp, and exactly one accent hue *per theme* — terracotta in light, signature mint in dark. Nothing else competes with the accent.

### The Accent — one hue per theme
Each theme owns a single saturated hue; they are genuinely different hues, not one hue at two lightnesses.
- **Light — Terracotta** (sampled from the redesign mockup): accent `oklch(0.559 0.135 41.1)` / `#B4542E` for solid fills, the large italic display accent, status dot, arrows, focus ring, skip-link; accent-text `oklch(0.515 0.137 40.8)` / `#A6461F` (5.25:1 on paper) for *small* accent type — eyebrows, serif numerals, inline links.
- **Dark — Signature Mint** (keyed to the TN_Port_Logo wordmark's native color): accent `oklch(0.81 0.084 179)` / `#83D4C3` (11.9:1 on the dark `--bg`); accent-text `oklch(0.91 0.097 179)` / `#97F8E4` (15:1) for accent type on dark.

Because the hues differ, every accent-hued token (Outcome band, selection, status glow) has a mint override in the dark theme. The wordmark PNG is drawn in the mint, so the *light* theme retargets it to terracotta with a CSS filter (see §5); dark uses it unfiltered.

### Surfaces & Ink — Light (default)
- **Warm Paper** (`#F4F0E8`): page background. Warm, not a tinted near-white; the warmth is real, not "AI beige."
- **Deeper Paper** (`#EDE7DE`): contact band / footer — the deepest surface, signalling "you've reached the end."
- **Card Paper** (`#FBF8F1`): case-study cards, lifted toward white and carried by a soft shadow.
- **Inset Paper** (`#E9E1D2`): image slots, chips, the summary card's evidence panel.
- **Ink ramp** (on paper): primary `#241E13` (13.9:1) body & headings · bright `#17110A` wordmark & inline emphasis · secondary `#3D3524` (9.1:1) leads · tertiary `#554A33` · muted `#6E6249` (5.2:1) eyebrows/nav/support · faint `#A79A80` decorative only · faint-2 `#675B42` (4.6:1 on footer) copyright.

### Surfaces & Ink — Dark (sibling)
- **Surfaces**: bg `#15120D` · footer `#100D08` · card `#1B1710` · inset `#26211A` — warm near-black, stepped by tonal lift.
- **Paper ramp** (on dark): primary `#F1EBDF` (14.8:1) · bright `#FBF6EC` · secondary `#D8CFC0` · tertiary `#C9BCA6` · muted `#A1957F` (5.9:1) · faint `#736959` decorative · faint-2 `#8A8070`.

### Inverted Band (case-study "Outcome" section)
The Outcome band is a self-contained saturated surface that tracks each theme's own accent hue: **terracotta** `oklch(0.621 0.13 45.2)` / `#C56A3E` in light, **mint** `oklch(0.62 0.09 179)` / `#3D9887` in dark (defined in `:root`, overridden under `[data-theme="dark"]`).
- Headline and body sit directly on it in **Band Ink** (`#2A140A` light / `#0E1416` dark — each a near-black in that theme's accent hue family; ≥4.58:1, clears AA for the large serif headline and body).
- **Band Card** `rgba(26, 13, 6, 0.86)`: impact cards sit *on* the band as dark ink surfaces carrying paper text — a second polarity flip so the metrics read as inset panels. Their text uses **polarity-fixed** tokens (`--band-card-text` `#F6EFE4`, `--band-card-text-2` `#DCD2C2`), never theme-varying, since the card is a dark surface in both themes.
- **Band Hairline** `rgba(26, 13, 6, 0.2)`: dividers between impact cards.

### Named Rules
**The One Accent Rule.** Exactly one saturated color on any screen — terracotta in the light theme, signature mint in the dark. Never both at once, never a third hue. If a new UI need calls for "another color," the answer is a neutral from the ramp.

## 3. Typography

**Display Font:** Fraunces (variable high-contrast serif; opsz 9–144, wght 400–600, roman + italic; Georgia fallback)
**Body Font:** Inter (system-ui, sans-serif fallback)

**Character:** A serif/sans pairing on a real contrast axis. Fraunces carries every expressive role — hero, section headlines, statements, serif numerals, the footer CTA — with `font-optical-sizing: auto` driving its dramatic thick/thin contrast at large sizes (so display weight stays a light-ish **500** and the contrast comes from optical size, not heft). Inter carries body, nav, labels, and the wordmark across weights 400–700. Emphasis is done with **Fraunces italic**, not bolding.

### Hierarchy
- **Display** (Fraunces, 500, `clamp(44px, 6vw, 88px)`, line-height 0.98, letter-spacing -0.02em): hero headline. Now sits in the *left column* of a two-column hero (portrait right), so it wraps to 2–3 lines by design. The accent line is Fraunces **italic** in terracotta.
- **Section** (Fraunces, 500, `clamp(30px, 4vw, 52px)`, line-height 1.08): case-study section headlines, the case page H1, the footer "Say hello" CTA.
- **Statement** (Fraunces, 500, `clamp(26px, 3.1vw, 44px)`, line-height 1.2): declarative statement blocks (What I Do, How I Work, About). Inline emphasis (company names, key phrases) is italic, same ink.
- **Coda** (Fraunces, 500 **italic**, `--fs-coda`): the closing line under How I Work.
- **Serif numerals** (Fraunces, 500, terracotta `--accent-text`): the 01/02/03 markers in numbered lists.
- **Lead** (Inter, 400, `clamp(17px, 1.6vw, 21px)`, line-height 1.6): lead paragraphs; capped ≈46–65ch.
- **Body** (Inter, 400, 16px, line-height 1.6): running copy.
- **Eyebrow** (Inter, 700, 12px, letter-spacing 0.14em, uppercase): terracotta section labels, nav links (muted), case-card metadata.

### Named Rules
**The Serif-For-Scale Rule.** Fraunces appears at display/section/statement scale, as serif numerals, and as the footer CTA. Body, UI, labels, nav, and the wordmark stay Inter. The two never trade roles.
**The Optical-Contrast Rule.** Big serif type gets its drama from optical sizing at weight ~500, not from bumping weight to 700/800. Keep display weights light; let `font-optical-sizing: auto` do the work.
**The Italic-Emphasis Rule.** Lift a phrase with Fraunces italic in the same ink, not with bold or color (the accent line is the one exception — italic *and* terracotta).

## 4. Elevation

Flat-by-default with tonal layering: depth comes from stepping the surface ramp and from a soft ambient shadow on card-level surfaces, deepening slightly on hover. Never a hard drop shadow.

### Shadow Vocabulary
- **Ambient Rest** — light: `0 4px 24px rgba(36, 30, 19, 0.10)` · dark: `0 4px 24px rgba(0, 0, 0, 0.25)`. Default under case-study cards.
- **Ambient Hover** — light: `0 10px 34px rgba(36, 30, 19, 0.16)` · dark: `0 10px 34px rgba(0, 0, 0, 0.34)`. Paired with border-brightening on hover.
- **Status Ring / Glow** — the About live-status dot. On paper a real glow disappears, so light uses a soft terracotta ring `0 0 0 4px rgba(180, 84, 46, 0.16)`; dark uses a true mint glow `0 0 10px oklch(0.81 0.084 179)`.
- **Header scrim** (`--scrim` page-tint at ~0.85 + 12px `backdrop-filter: blur`): the sticky header floats a translucent scrim over content — depth by atmosphere, not edges.

### Named Rules
**The Diffuse-Not-Dark Rule.** Shadows stay low-opacity, large-radius. A visible hard edge means the radius is too small and the opacity too high.

## 5. Components

### Buttons / CTAs
- **No boxed buttons.** The primary CTA is the footer's oversized `Say hello ↗` in Fraunces at `clamp(2.75rem, 8vw, 7rem)` — the CTA *is* display type; only the arrow shifts color on hover.
- **Hero CTA** (`View selected work ↗`): an uppercase Inter link with a bottom hairline that brightens to terracotta on hover, the arrow nudging up-right.
- **Case-card CTA**: inline `View case study →`, muted, brightening with a 4px arrow nudge on card hover.
- **Only real `<button>`s** are the mobile nav toggle and the theme toggle. Everything else that acts is an `<a>`.
- **Focus:** 2px `accent` outline, 3px offset, 4px corners.

### Chips / Pills
- **Pill:** solid `--accent` fill, `--band-text` ink, 700, full pill radius. Highest-status single label.
- **Chip:** inset background, tertiary-ink text, 500. Secondary metadata — quieter than the Pill.

### Cards / Containers
- **Corners:** feature 20px, summary 18px, general 14px.
- **Background:** Card Paper (light) / Card (dark) at rest.
- **Hover:** border `border` → `border-bright` + Ambient Rest → Ambient Hover, together.
- **Case-card padding:** 48/50px body.

### Navigation
- **Wordmark:** the hand-lettered **TN wordmark PNG** (`images/TN_Port_Logo.png`, 32px tall) — a single-hue mint asset. The **light** theme retargets it to terracotta with a tuned `hue-rotate(198deg) saturate(10) brightness(0.7)` filter (derived by sampling the rendered pixels against `#B4542E`); the **dark** theme shows it unfiltered, since its own accent is that native mint. Its `alt` is the full name.
- **Style:** sticky header over the `--scrim` tint + 12px blur, 1px bottom hairline.
- **Links:** uppercase eyebrow treatment (12px, 700, 0.14em), muted → primary on hover, 44px tap boxes.
- **Theme toggle:** icon + eyebrow-style label naming the theme you'd switch *to* (moon/"Dark" while light, sun/"Light" while dark), keyed on `[data-theme]`. Gated on `html.js`. Persists to `localStorage`; follows OS preference live until an explicit choice is stored.
- **Mobile (≤600px):** nav links collapse behind a 44×44 hamburger; the theme toggle stays inline.

### Hero (signature layout)
A two-column grid (≈1.12fr / 0.88fr): left column is eyebrow → serif headline (with the italic terracotta accent line) → lead → CTA; right column is the **portrait** on a soft color block (the portrait moved here from About in the editorial redesign). Collapses to a single column (text then portrait, portrait capped at 420px) ≤900px.

### Case Study Card (signature component)
A two-column `<a>` (≈1.05fr / 0.95fr): a compact text body (terracotta serif number · client · theme eyebrow, Fraunces `<h3>` title, italic driving question, `View case study →`) against a real screenshot. Kept as a **card** (a deliberate divergence from the mockup's open-row layout) so the work list stays scannable. Ambient Rest shadow at rest; border + shadow deepen together on hover.

### What I Do — ledger rows
The three "kinds of complexity" render as editorial ledger rows: Fraunces terracotta numeral | bold title | muted description, split by hairlines (not the stacked principle-grid used by How I Work). Collapses to stacked title/description ≤600px.

## 6. Do's and Don'ts

### Do:
- **Do** keep exactly one accent per theme — terracotta in light (`#B4542E` / text `#A6461F`), signature mint in dark (`#83D4C3` / text `#97F8E4`); everything else stays in the warm-neutral ramp, and the two hues never share a screen.
- **Do** carry every headline in Fraunces at weight ~500 and let `font-optical-sizing: auto` supply the contrast; emphasize phrases with Fraunces *italic*, not bold.
- **Do** treat light as the canonical theme and keep the dark sibling a faithful counterpart — same type and layouts; surfaces/ink/shadows invert and the accent shifts to its own theme's hue (mint).
- **Do** step through the surface ramp (paper → card → inset) to convey depth before reaching for another color.
- **Do** use the Ambient Rest / Ambient Hover pair for new card-level surfaces, paired with border-brightening.
- **Do** write copy the way a senior designer talks to a peer — specific and confident, not marketing-voice.

### Don't:
- **Don't** introduce a second saturated accent (no purple, magenta, gradient) — breaks the One Accent Rule.
- **Don't** let a theme show the other theme's accent — light is terracotta only, dark is mint only. When the two themes' accent-hued tokens (band, selection, glow, wordmark filter) diverge, keep them overridden per theme rather than shared.
- **Don't** bump display type to 700/800 to make it "pop" — that flattens Fraunces' optical contrast. Keep it ~500 and larger.
- **Don't** use purple gradients, glassmorphism, cream-with-blue SaaS palettes, or stock-photo heroes — explicit anti-references.
- **Don't** use hard, small-radius drop shadows (the "2014 app" look).
- **Don't** add a third type family. Fraunces + Inter are the committed pair.
- **Don't** let muted/faint text fall below 4.5:1. `--text-faint` is decorative-only; never body copy.
- **Don't** commit the local live-mode `<script src="localhost:8400/live.js">` injection or leave `?v=` cache tokens un-bumped when JS/CSS changes (see CLAUDE.md).
