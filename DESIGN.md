---
name: Tad Natsuhara Portfolio
description: A warm near-black portfolio for a senior product designer, lit by a single mint accent.
colors:
  bg: "#15120D"
  bg-footer: "#0F0D09"
  bg-card: "#1A1610"
  bg-inset: "#26211A"
  text-primary: "#F1EBDF"
  text-bright: "#E7DFD2"
  text-secondary: "#D8CFC0"
  text-tertiary: "#C9BCA6"
  text-muted: "#A1957F"
  text-faint: "#736959"
  text-faint-2: "#8A8070"
  accent: "oklch(0.81 0.084 179)"
  accent-text: "oklch(0.91 0.097 179)"
  band-bg: "oklch(0.62 0.09 179)"
  band-text: "#0E1416"
  band-card: "rgba(14, 20, 22, 0.85)"
  band-hairline: "rgba(14, 20, 22, 0.2)"
  scrim: "rgba(21, 18, 13, 0.82)"
  border: "rgba(241, 235, 223, 0.12)"
  border-bright: "rgba(241, 235, 223, 0.26)"
  hairline: "rgba(241, 235, 223, 0.08)"
  hairline-2: "rgba(241, 235, 223, 0.16)"
  rule-strong: "#F1EBDF"
typography:
  display:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(40px, 8.4vw, 112px)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.012em"
  section:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(30px, 4vw, 54px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(24px, 3.1vw, 44px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.6vw, 21px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  eyebrow:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.10em"
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
  case-card-hover:
    backgroundColor: "{colors.bg-card}"
---

# Design System: Tad Natsuhara Portfolio

## 1. Overview

**Creative North Star: "The Quiet Confidence"**

A warm near-black canvas (#15120D) holds the page; one mint accent (oklch(0.81 0.084 179)) is the only thing allowed to call attention to itself. Everything else — type, chips, borders — recedes into a tight ramp of warm off-white to deep brown. The system speaks once, says something precise, and lets the case studies carry the rest of the argument. It is the visual register of a senior designer presenting to other senior people: no flourish, no second accent fighting for attention, no decoration that doesn't serve hierarchy.

This system explicitly rejects the generic AI-template look: no purple gradients, no glassmorphism, no interchangeable hero sections, no stock-photo sheen. Where a typical SaaS landing page reaches for a gradient to feel "modern," this system reaches for restraint and a single confident hue instead.

**Key Characteristics:**
- One accent color (signature mint), used sparingly, never diluted with a second hue
- Warm near-black base instead of true black or cool gray
- A serif/grotesque type pairing on a real contrast axis — Alegreya (calligraphic serif, echoing the hand-lettered wordmark) for display, Bricolage Grotesque for body and UI
- Flat-by-default surfaces with tonal layering, accented by soft ambient shadows for depth
- Display type goes large and tight (low line-height) while body copy stays generous and readable
- Borders + soft shadow do the "this is interactive" signaling on hover, not color shifts
- Progressive enhancement: content is JS-rendered but reveals are gated on `html.js` so the page paints without JS, a real-content `<noscript>` fallback ships, and all motion respects `prefers-reduced-motion`

## 2. Colors

The palette is built from one warm-neutral surface ramp, one warm-neutral text ramp, and exactly one accent hue (mint). Nothing else competes with the accent.

### Primary
- **Signature Mint** (`oklch(0.81 0.084 179)` / `#83D4C3`): The single accent, keyed to the TN_Port_Logo wordmark. Used for the senior-title pill fill, accent headline lines, link/number emphasis, and focus glow. Appears on a small minority of any given screen — its rarity is what makes it land.
- **Signature Mint, Text Variant** (`oklch(0.91 0.097 179)` / `#97F8E4`): Brighter sibling (the wordmark file color) used specifically for accent text on dark backgrounds (hero accent line, case-card numerals) where the solid-fill version would be too dim to read.

### Neutral
- **Warm Pitch** (`#15120D`): Page background. Warm near-black, not true black — keeps the page from feeling cold or clinical.
- **Deepest Brown** (`#0F0D09`): Footer / contact section background, the deepest surface in the ramp, used to signal "you've reached the end."
- **Card Brown** (`#1A1610`): Card and case-study container background, one tonal step above page background.
- **Inset Brown** (`#26211A`): Image placeholder slots and capability chips — the lightest neutral surface, used for content that should read as "inset" or "contained."
- **Warm Paper** (`#F1EBDF`): Primary text and most headings; also the 2px section-opener rule color at full opacity.
- **Bright Paper** (`#E7DFD2`): Emphasized inline names and proper nouns within body copy.
- **Secondary Paper** (`#D8CFC0`): Lead paragraph text — one step down in emphasis from headings.
- **Tertiary Paper** (`#C9BCA6`): Supporting descriptive copy (case-card descriptions).
- **Muted Paper** (`#A1957F`): Eyebrows, nav links, supporting copy at rest.
- **Faint Paper** (`#736959`): Faint labels, the dimmest text that still needs to be legible.
- **Faint Paper, Variant** (`#8A8070`): The dimmest text token in the system — copyright line and footer credits. (A near-black "Copyright Brown" tone was tried here but failed WCAG AA contrast against the footer background; this is the darkest tone that still clears 4.5:1.)

### Inverted Band (case-study "Outcome" section)
- **Outcome Mint** (`oklch(0.62 0.09 179)` / `#3D9887`): Background for the inverted "Outcome" band — the accent's own hue at mid lightness. A deliberate polarity flip (dark ink on a saturated field) that marks "this is the result," distinct from the surrounding dark sections. Headline and body use **Outcome Ink** (`#0E1416`) directly on this field (5.3:1, clears AA for large text).
- **Band Card** (`rgba(14, 20, 22, 0.85)`): Impact cards sit *on* the band as dark ink-tinted surfaces carrying paper text (12.9:1) — a second polarity flip back to light-on-dark, so the metrics read as inset panels rather than more band.
- **Band Hairline** (`rgba(14, 20, 22, 0.2)`): 1px dividers between impact cards, painted as grid gaps over the band.

### Named Rules
**The One Accent Rule.** The signature mint is the only saturated color in the system. If a new UI need calls for "another color," the answer is a neutral tone from the existing ramp, not a second hue.

## 3. Typography

**Display Font:** Alegreya (calligraphic serif, with Georgia fallback) — paired to the signature wordmark
**Body Font:** Bricolage Grotesque (with system-ui, sans-serif fallback)

**Character:** A serif/grotesque pairing on a real contrast axis: Alegreya (drawn with calligraphic pen logic, echoing the signature wordmark) carries display roles — hero, statements, titles, the footer CTA — while Bricolage Grotesque carries body, UI, and labels across five weights. Serif roles use the looser --ls-serif tracking.

### Hierarchy
- **Display** (Alegreya, 800, `clamp(40px, 8.4vw, 112px)`, line-height 0.94, letter-spacing -0.012em / `--ls-serif`): Hero headline, big statements, statement codas, and the footer CTA — the serif carries every oversized moment. Tight leading makes large type feel compressed and intentional rather than sprawling.
- **Section** (Bricolage, 700, `clamp(30px, 4vw, 54px)`, line-height 1.1, letter-spacing -0.03em): Case-card and case-study section headlines.
- **Statement** (Bricolage, 600, `clamp(24px, 3.1vw, 44px)`, line-height 1.1–1.18): Mid-weight declarative statements. Note: the hero/footer "statement" moments render in Alegreya; the in-flow statement blocks use Bricolage.
- **Lead** (Bricolage, 400, `clamp(17px, 1.6vw, 21px)`, line-height 1.6): Lead paragraphs directly under a headline; capped ≈62ch.
- **Body** (Bricolage, 400, 16px, line-height 1.6): Default running copy.
- **Eyebrow** (Bricolage, 600–700, 12px, letter-spacing 0.10em, uppercase): Section labels (as real `<h2>`s), nav links, case-card metadata.

### Named Rules
**The Display Ceiling Rule.** Hero display type caps at **112px** (`7rem`), *not* 118px: at 118px the longest headline line ("Complexity is inevitable.") renders ~1183px and overflows the 1180px container by 3px, wrapping to two lines. 112px leaves ~57px of headroom. Paired with an `8.4vw` fluid term, the line stays single from ~500px up; phones wrap to 3 lines, which is intended. If the headline copy changes, re-derive both the cap and the vw term.
**The Serif-For-Scale Rule.** Alegreya appears only at display scale (hero, statements, footer CTA). Body, UI, labels, and anything ≤ section size stay Bricolage. The two never trade roles.

## 4. Elevation

The system is flat-by-default with tonal layering: depth is primarily conveyed by stepping through the neutral background ramp (Warm Pitch → Card Brown → Inset Brown) rather than by shadows, and interactive hover states brighten a border rather than lifting a shadow. On top of that base, a soft ambient shadow is used sparingly on card-level surfaces to add quiet depth at rest, deepening slightly on hover — never a hard drop-shadow, always a diffuse, low-contrast glow consistent with the system's restraint.

### Shadow Vocabulary
- **Ambient Rest** (`box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25)`): Default soft shadow under case-study cards and other card-level containers, anchoring them gently above the page background.
- **Ambient Hover** (`box-shadow: 0 8px 32px rgba(0, 0, 0, 0.32)`): Slightly deeper, larger-radius shadow on hover, paired with the existing border-brightening transition — the two effects move together, not separately.
- **Accent Glow** (`box-shadow: 0 0 10px oklch(0.81 0.084 179)`): Reserved for the live-status dot in the About section; the only shadow that carries color (signature mint), and only because it represents an active/live signal.
- **Header scrim** (`--scrim: rgba(21, 18, 13, 0.82)` + 12px `backdrop-filter: blur`): the sticky header floats a translucent page-tinted scrim over content as it scrolls beneath. Not a shadow, but the same "depth by atmosphere, not hard edges" logic.

### Named Rules
**The Diffuse-Not-Dark Rule.** Shadows stay low-opacity and large-radius (soft ambient glow), never small-radius/high-opacity "2014 app" drop shadows. If a shadow has a visible hard edge, the blur radius is too small and the opacity is too high.

## 5. Components

### Buttons / CTAs
- **No boxed buttons.** The system has none. The primary call to action is the footer's oversized mailto link ("Say hello ↗") set in Alegreya at `clamp(2.5rem, 8.5vw, 8rem)` — the CTA *is* display type. On hover only the arrow shifts from `accent-text` to `accent`; the words don't change color.
- **Case-card CTA** is inline text ("View case study →"), muted at rest, brightening to primary with a 4px arrow nudge on card hover.
- **Only real `<button>`** is the mobile nav toggle (below). Everything else that acts is an `<a>`.
- **Focus:** all links/buttons get a 2px `accent` outline at 3px offset, `--r-focus` (4px) corners.

### Chips / Pills
- **Pill:** Solid accent fill (`--accent`), `band-text` (near-black) text, 700 weight, 7px/14px padding, full pill radius. Used for the single highest-status label per context (e.g. "Senior Product Designer").
- **Chip:** Inset-brown background, tertiary-paper text, 500 weight, 7px/13px padding, full pill radius. Used for secondary metadata (capability tags, case-study tech chips) — visually quieter than the Pill so the two never compete.

### Cards / Containers
- **Corner Style:** Feature cards (case studies) use 20px radius; summary cards 18px; general cards 14px.
- **Background:** Card Brown (`#1A1610`) at rest.
- **Shadow Strategy:** Ambient Rest shadow at rest (see Elevation), deepening to Ambient Hover on hover, paired with border-color brightening from `border` to `border-bright`.
- **Border:** 1px solid `border` at rest, brightening to `border-bright` on hover — the two-property hover effect (border + shadow) reinforces interactivity without changing layout.
- **Internal Padding:** 48px vertical / 50px horizontal for case-card bodies.

### Navigation
- **Logo:** the hand-lettered **TN wordmark** (`images/TN_Port_Logo.png`, 32px tall) — a script mark that anchors the serif/calligraphic identity. It is an image, not text; its `alt` is the full name.
- **Style:** sticky header over the `--scrim` translucent tint + 12px backdrop blur, 1px bottom hairline.
- **Links:** uppercase eyebrow treatment (12px, 700, `0.10em` tracking) — muted at rest, brightening to primary on hover. Each link is padded to a 44px tap box (`padding-block: 15px; margin-block: -15px`).
- **Mobile (≤600px):** the four links collapse behind a 44×44 hamburger toggle (`.site-header__toggle`, the system's only `<button>`) with `aria-expanded` / `aria-controls`; open state drops a full-width panel below the header.

### Case Study Card (signature component)
A two-column grid (≈1.05fr / 0.95fr) pairing a compact text body against a real screenshot (or a labelled `image-slot` placeholder when no asset exists yet). **Distilled** (impeccable live, Jul 2026) down to four elements: an eyebrow row (accent-text number · bright-paper client · faint dot · theme), the `<h3>` title, an italic driving question, and the "View case study →" CTA — no description paragraph, no capability chips. The whole card is one `<a>`; at rest it carries the Ambient Rest shadow, on hover the border brightens and the shadow deepens together.

## 6. Do's and Don'ts

### Do:
- **Do** keep mint (`oklch(0.81 0.084 179)`, text variant `oklch(0.91 0.097 179)`) as the only saturated accent on any screen; everything else stays within the warm-neutral ramp.
- **Do** use the Ambient Rest / Ambient Hover shadow pair (`0 4px 24px rgba(0,0,0,0.25)` → `0 8px 32px rgba(0,0,0,0.32)`) for any new card-level surface, paired with the existing border-brightening hover.
- **Do** step through the neutral surface ramp (Warm Pitch → Card Brown → Inset Brown) to convey containment/depth before reaching for a new color.
- **Do** cap hero display type at 112px (`7rem`) and keep its line-height tight (0.94) so large type reads as composed, not sprawling. Don't raise the cap — at 118px the longest line overflows the 1180px container.
- **Do** keep the type system to the two committed families — Alegreya (calligraphic serif; display, statements, footer CTA) and Bricolage Grotesque (body, UI, labels). They pair on a real contrast axis (serif vs. grotesque).
- **Do** write copy the way a senior designer talks to a peer — specific and confident, not marketing-voice.

### Don't:
- **Don't** introduce a second saturated accent color (no purple, no magenta, no multi-color gradient) — this breaks the One Accent Rule and reads as generic AI-template styling.
- **Don't** use purple gradients, glassmorphism, interchangeable stock-photo hero sections, or any other generic SaaS-landing-page clichés — these are explicit anti-references from PRODUCT.md.
- **Don't** use hard, small-radius drop shadows (the "2014 app" look). If a shadow has a visible hard edge, the blur radius is too small and the opacity is too high.
- **Don't** add a third type family, and don't swap the display serif for a reflex default (Fraunces, Playfair, Cormorant, Recoleta). Alegreya is the committed, deliberate choice.
- **Don't** let muted/faint text fall below the 4.5:1 contrast ratio against its background. `--text-faint` (#736959) is decorative-only (separator dots, placeholder icons) — it's below AA as text; never use it for readable copy. On lighter surfaces (`--bg-inset`) use `--text-muted`.
- **Don't** commit the local live-mode `<script src="localhost:8400/live.js">` injection or leave hard-coded `?v=` cache tokens un-bumped when JS/CSS changes (see CLAUDE.md).
