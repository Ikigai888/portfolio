---
name: Tad Natsuhara Portfolio
description: A warm near-black portfolio for a senior product designer, lit by a single cyan accent.
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
  border: "rgba(241, 235, 223, 0.12)"
  border-bright: "rgba(241, 235, 223, 0.26)"
  hairline: "rgba(241, 235, 223, 0.08)"
  hairline-2: "rgba(241, 235, 223, 0.16)"
  rule-strong: "#F1EBDF"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(40px, 9vw, 118px)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.04em"
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

A warm near-black canvas (#15120D) holds the page; one cool cyan accent (oklch(0.80 0.10 210)) is the only thing allowed to call attention to itself. Everything else — type, chips, borders — recedes into a tight ramp of warm off-white to deep brown. The system speaks once, says something precise, and lets the case studies carry the rest of the argument. It is the visual register of a senior designer presenting to other senior people: no flourish, no second accent fighting for attention, no decoration that doesn't serve hierarchy.

This system explicitly rejects the generic AI-template look: no purple gradients, no glassmorphism, no interchangeable hero sections, no stock-photo sheen. Where a typical SaaS landing page reaches for a gradient to feel "modern," this system reaches for restraint and a single confident hue instead.

**Key Characteristics:**
- One accent color, used sparingly, never diluted with a second hue
- Warm near-black base instead of true black or cool gray
- Flat-by-default surfaces with tonal layering, accented by soft ambient shadows for depth
- Display type goes large and tight (negative letter-spacing, low line-height) while body copy stays generous and readable
- Borders, not shadows, do most of the "this is interactive" signaling on hover

## 2. Colors

The palette is built from one warm-neutral surface ramp, one warm-neutral text ramp, and exactly one accent hue (cyan). Nothing else competes with the accent.

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

### Inverted Band
- **Outcome Mint** (`oklch(0.62 0.09 179)` / `#3D9887`): Background for the inverted "Outcome" band, same hue as the accent inside case studies — a deliberate polarity flip (dark text on a mid-tone teal field) that visually marks "this is the result," distinct from the surrounding dark sections.
- **Outcome Ink** (`#0E1416`): Text color on the Outcome Teal band.

### Named Rules
**The One Accent Rule.** The signature mint is the only saturated color in the system. If a new UI need calls for "another color," the answer is a neutral tone from the existing ramp, not a second hue.

## 3. Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif fallback)
**Body Font:** Bricolage Grotesque (with system-ui, sans-serif fallback)

**Character:** A single grotesque sans family carries the entire system across five weights (400–800), so contrast comes from scale and weight rather than from pairing two typefaces — a confident, unfussy choice that matches the brand's understated register.

### Hierarchy
- **Display** (800, `clamp(40px, 9vw, 118px)`, line-height 0.94, letter-spacing -0.04em): Hero headline only. Tight leading makes large type feel compressed and intentional rather than sprawling.
- **Section** (700, `clamp(30px, 4vw, 54px)`, line-height 1.1, letter-spacing -0.03em): Section headlines ("Selected Work," "How I Work," etc.).
- **Statement** (600, `clamp(24px, 3.1vw, 44px)`, line-height 1.1, letter-spacing -0.025em): Mid-weight declarative statements reused across "What I Do" and "How I Work."
- **Lead** (400, `clamp(17px, 1.6vw, 21px)`, line-height 1.6): Lead paragraphs directly under a headline.
- **Body** (400, 16px, line-height 1.6): Default running copy, capped at a comfortable reading measure.
- **Eyebrow** (600, 12px, letter-spacing 0.10em, uppercase): Labels above headlines, nav-adjacent micro-copy, case-card metadata.

### Named Rules
**The Display Ceiling Rule.** Hero display type tops out at 118px even at ultra-wide viewports — the largest size at which the longest headline line still fits the 1180px container on one line. If the headline copy changes, re-derive this cap.

## 4. Elevation

The system is flat-by-default with tonal layering: depth is primarily conveyed by stepping through the neutral background ramp (Warm Pitch → Card Brown → Inset Brown) rather than by shadows, and interactive hover states brighten a border rather than lifting a shadow. On top of that base, a soft ambient shadow is used sparingly on card-level surfaces to add quiet depth at rest, deepening slightly on hover — never a hard drop-shadow, always a diffuse, low-contrast glow consistent with the system's restraint.

### Shadow Vocabulary
- **Ambient Rest** (`box-shadow: 0 4px 24px rgba(0, 0, 0, 0.25)`): Default soft shadow under case-study cards and other card-level containers, anchoring them gently above the page background.
- **Ambient Hover** (`box-shadow: 0 8px 32px rgba(0, 0, 0, 0.32)`): Slightly deeper, larger-radius shadow on hover, paired with the existing border-brightening transition — the two effects move together, not separately.
- **Accent Glow** (`box-shadow: 0 0 10px oklch(0.80 0.10 210)`): Reserved for the live-status dot in the About section; the only shadow that carries color, and only because it represents an active/live signal.

### Named Rules
**The Diffuse-Not-Dark Rule.** Shadows stay low-opacity and large-radius (soft ambient glow), never small-radius/high-opacity "2014 app" drop shadows. If a shadow has a visible hard edge, the blur radius is too small and the opacity is too high.

## 5. Components

### Buttons / CTAs
- **Shape:** No boxed button in the current system — primary calls to action (hero scroll cue) use a circular icon button instead.
- **Hero Cue Button:** 38×38px circle, 1px border (`border-bright`), `pill` radius (100px), icon centered. On hover, border brightens to `text-primary` and the button translates down 3px — a literal "follow this" gesture.
- **Hover / Focus:** Border-color and transform transitions only (0.4s for border, 0.3s for color); no fill change, no shadow on hover for this element specifically.

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
- **Style:** Sticky header, translucent dark background (`rgba(21, 18, 13, 0.82)`) with a 12px backdrop blur, 1px bottom hairline border.
- **Typography:** Nav links 13px / 600 weight, muted-paper color at rest, brightening to `text-primary` on hover (0.3s color transition). Logo/name stays static weight 700 at 16px, primary-paper color, never an interactive hover state.

### Case Study Card (signature component)
A two-column grid (≈1.05fr / 0.95fr) pairing a text body against an image-slot media panel. The eyebrow row sequences a bold accent-text number, a bright-paper client name, and a faint-paper separator dot — a deliberately small, structured piece of metadata that reads like a catalog entry. The CTA row ("View case study →") sits in muted text at rest and brightens with an arrow nudge on hover, keeping the affordance subtle until the user is already engaged.

## 6. Do's and Don'ts

### Do:
- **Do** keep cyan (`oklch(0.80 0.10 210)`) as the only saturated accent on any screen; everything else stays within the warm-neutral ramp.
- **Do** use the Ambient Rest / Ambient Hover shadow pair (`0 4px 24px rgba(0,0,0,0.25)` → `0 8px 32px rgba(0,0,0,0.32)`) for any new card-level surface, paired with the existing border-brightening hover.
- **Do** step through the neutral surface ramp (Warm Pitch → Card Brown → Inset Brown) to convey containment/depth before reaching for a new color.
- **Do** cap hero display type at 118px and keep its line-height tight (0.94) so large type reads as composed, not sprawling.
- **Do** write copy the way a senior designer talks to a peer — specific and confident, not marketing-voice.

### Don't:
- **Don't** introduce a second saturated accent color (no purple, no magenta, no multi-color gradient) — this breaks the One Accent Rule and reads as generic AI-template styling.
- **Don't** use purple gradients, glassmorphism, interchangeable stock-photo hero sections, or any other generic SaaS-landing-page clichés — these are explicit anti-references from PRODUCT.md.
- **Don't** use hard, small-radius drop shadows (the "2014 app" look). If a shadow has a visible hard edge, the blur radius is too small and the opacity is too high.
- **Don't** pair Bricolage Grotesque with a second typeface; contrast comes from weight and scale within the one family, not from font pairing.
- **Don't** let muted/faint text fall below the 4.5:1 contrast ratio against its background. `--text-faint` is safe on the page background but fails on lighter surfaces (`--bg-inset`); use `--text-muted` there instead. A near-black "faintest" tone was removed from the system entirely after failing AA everywhere it was used — don't reintroduce it.
