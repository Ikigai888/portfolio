---
name: Tad Natsuhara Portfolio
description: A cool editorial portfolio for a senior product designer — dark by default (Black Bean ground) with a Pantone paper-light sibling theme, a high-contrast serif carrying every headline, lit by one accent in both themes, Sea Jet.
theme-model: "dark default (<html data-theme=\"dark\">, set before paint), light sibling (:root tokens, data-theme=\"light\")"
colors:
  # Light theme (the sibling: a visitor opts in with the toggle)
  bg: "#EEF6F5"
  bg-footer: "#D5E8E7"
  bg-card: "#FAFDFC"
  bg-inset: "#D5E8E7"
  surface-stage: "#EEF6F5"      # screens carousel stage; NOT overridden in dark
  text-primary: "#2D3240"
  text-bright: "#2C2628"
  text-secondary: "#2D3240"
  text-tertiary: "#3F4553"
  text-muted: "#54553A"
  text-faint: "#7C9B9A"
  text-faint-2: "#54553A"
  accent: "#52AEBD"             # Sea Jet, both themes
  accent-text: "#2A7381"         # small accent type on paper (4.95:1); dark uses Sea Jet itself
  on-accent: "#2C2628"           # ink on an accent fill (5.8:1)
  # Soft Aqua band: Outcome band + contact footer, same in both themes
  band-bg: "#9AC6C5"
  band-text: "#2C2628"
  band-card: "rgba(44, 38, 40, 0.90)"
  band-card-text: "#EEF6F5"
  band-hairline: "rgba(44, 38, 40, 0.22)"
  # Dark sibling surfaces and ink
  bg-dark: "#2C2628"            # Black Bean
  bg-footer-dark: "#231E20"
  bg-card-dark: "#2D3240"       # Anthracite
  bg-inset-dark: "#54553A"      # Olive Brown
  text-primary-dark: "#E8F2F1"
  text-muted-dark: "#9AC6C5"    # Soft Aqua
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(min(3.25rem, 14.5vw), 8vw, 5.25rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  statement:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.8vw, 2.375rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.014em"
  coda:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.2
  lead:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.6vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  eyebrow:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
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
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  chip:
    backgroundColor: "{colors.bg-inset}"
    textColor: "{colors.band-text}"
    rounded: "{rounded.pill}"
    padding: "7px 13px"
  case-card:
    backgroundColor: "{colors.bg-card}"
    rounded: "{rounded.feature}"
  short-card:
    backgroundColor: "{colors.bg-card}"
    rounded: "{rounded.card}"
  screens-carousel:
    backgroundColor: "{colors.bg-card}"
    rounded: "{rounded.feature}"
  screens-carousel-stage:
    backgroundColor: "{colors.surface-stage}"
---

# Design System: Tad Natsuhara Portfolio

## 1. Overview

**Creative North Star: "Editorial Restraint"**

Cool paper (`#EEF6F5`) holds the page; a high-contrast serif carries every headline like a magazine feature; one Sea Jet accent (`#52AEBD`) is the only saturated color allowed to speak. Everything else — body copy, chips, borders — recedes into a tight Anthracite ink ramp. The system reads like a senior designer's editorial spread: generous whitespace, serif display doing the expressive work (with its italics carrying the emphasis), a single confident hue, and no decoration that doesn't serve hierarchy.

This is the *editorial* iteration (adopted Jul 2026 from the "Editorial Homepage" redesign). In Sept–Oct 2026 the A3 dark / A4 light refresh moved it onto the Pantone set below with Newsreader + Public Sans, replacing the earlier olive/mint, warm-paper, Fraunces/Inter version. The content and information architecture are unchanged; the visual language is new.

This system explicitly rejects the generic AI-template look: no purple gradients, no glassmorphism, no interchangeable hero sections, no cream-with-blue SaaS palette. Character is carried by the cool paper ground, the serif, and the single Sea Jet accent — never by gradients or decoration.

**Key Characteristics:**
- **Dark by default, light as sibling.** Every first visit is dark regardless of OS preference (`<html data-theme="dark">` plus a pre-paint script that reads the saved choice, else dark). `:root` still holds the light (paper) tokens and `[data-theme="dark"]` overrides them — same type, same layouts, the same single accent on a Black Bean ground. A visitor's explicit toggle is remembered.
- **One accent, both themes** — Sea Jet (`#52AEBD`). Each screen carries a single saturated hue; never two.
- **Serif display / sans body on a real contrast axis** — Newsreader (warm humanist serif with expressive italics) for every headline, statement, numeral, and the footer CTA; Public Sans (warm neo-grotesque) for body, nav, and labels. Both chosen deliberately off the reflex-reject list — not Fraunces/Playfair, not Inter/DM.
- **Italics as emphasis**, the editorial way — the hero's accent line, inline company names, statement key-phrases, and codas are set in Newsreader italic rather than bolded.
- **Hero wireframe motif, both themes.** A generative fern/wireframe illustration anchors the bottom of the hero (`#top`), faded into `--bg` toward the top so headline and lead sit on clean canvas. Each theme renders its own asset (`hero-bg.jpg` dark, `hero-bg-light.avif` light) rather than filtering one image, since the motif's tones need to invert, not just shift hue.
- Flat-by-default surfaces with tonal layering + soft ambient shadows; hover brightens a border, not a fill.
- Progressive enhancement: content is JS-rendered but pre-built into static HTML, reveals gate on `html.js`, a real `<noscript>` fallback ships, and all motion respects `prefers-reduced-motion`.

## 2. Colors

One cool surface ramp, one Anthracite text ramp, and exactly one accent hue, Sea Jet, shared by both themes. Nothing else competes with the accent. `css/tokens.css` is the source of truth; the values below are its exact hex conversions.

### The Accent: Sea Jet, both themes
- **Sea Jet** `#52AEBD` for solid fills, the large italic display accent, the status dot ring, arrows, focus ring, selection, and the pill; ink on top of it is **Black Bean** `#2C2628` (`--on-accent`, 5.8:1).
- **Deep Sea Jet** `#2A7381` (`--accent-text`, 4.95:1 on paper) for *small* accent type on the light theme: "View 6 screens", eyebrow numerals, inline links. Sea Jet itself is only ~2.3:1 on paper, so it never carries small type there. On the dark theme `--accent-text` is Sea Jet itself (5.8:1 on Black Bean).
- **Marker highlight** (`--highlight`): a soft aqua underline stroke under italic emphasis (`linear-gradient(transparent 71.5%, var(--highlight) 71.5%)`), `rgba(154, 198, 197, 0.6)` light / `rgba(82, 174, 189, 0.35)` dark.

### Surfaces & Ink: Light (sibling)
- **Cool Paper** (`#EEF6F5`): page background.
- **Aqua Mist** (`#D5E8E7`): the deepest surface and the inset fill: image slots, theme-toggle track, the footer ground.
- **Card Paper** (`#FAFDFC`): case-study and short-read cards, lifted toward white and carried by a soft shadow.
- **Ink ramp** (on paper): primary `#2D3240` (Anthracite) body & headings · bright `#2C2628` (Black Bean) wordmark & display · secondary `#2D3240` leads · tertiary `#3F4553` · muted `#54553A` (Olive Brown, 7.0:1) eyebrows/nav/support · faint `#7C9B9A` decorative only · faint-2 `#54553A` copyright.
- **Lines** are anthracite alpha: border `rgba(45, 50, 64, 0.16)`, bright `0.32`, hairline `0.10`, strong rule `0.20`.

### Surfaces & Ink: Dark (default)
- **Surfaces**: bg `#2C2628` (Black Bean) · footer `#231E20` · card `#2D3240` (Anthracite) · inset `#54553A` (Olive Brown, chips and toggle track).
- **Ink ramp** (on dark): primary `#E8F2F1` (12:1) · bright `#F4FAF9` · tertiary `#CFE3E2` · muted `#9AC6C5` Soft Aqua (8:1) · faint `#7FA6A8`.
- **Lines** are aqua alpha: border `rgba(154, 198, 197, 0.18)`, bright `0.40`, hairline `0.12`.

### Inverted Band (case-study "Outcome" section and the contact footer)
A self-contained surface in **Soft Aqua** `#9AC6C5` with **Band Ink** `#2C2628` (7.96:1), identical in both themes: no per-theme override.
- **Band Card** `rgba(44, 38, 40, 0.90)`: impact cards sit *on* the band as dark ink surfaces carrying paper text, a second polarity flip so the metrics read as inset panels. Their text uses **polarity-fixed** tokens (`--band-card-text` `#EEF6F5`, `--band-card-text-2` `#CFE3E2`), never theme-varying, since the card is a dark surface in both themes.
- **Band Hairline** `rgba(44, 38, 40, 0.22)`: dividers between impact cards.
- **Committed surface** (`--surface-committed`): a mix of inset and band (`color-mix(in oklch, inset 46%, band 54%)` light, 5% / 95% dark) used for chips so they read as part of the same accent-committed system.

### Viewer Stage
- **Viewer Stage** (`--surface-stage`, `#EEF6F5`): the background of the screens carousel. Deliberately **not** overridden in the dark theme: the screens it shows are light product UI, so a fixed light stage keeps them looking like the product instead of re-tinting them with the page. The carousel's backdrop (`--lightbox-backdrop`, `rgba(10, 8, 6, 0.92)`) and its round arrow controls (`--media-control-bg` / `--media-control-fg`) are likewise fixed across themes.

### Named Rules
**The One Accent Rule.** Exactly one saturated color on any screen: Sea Jet, in both themes. Never a second hue. If a new UI need calls for "another color," the answer is a neutral from the ramp.
**The Fixed-Stage Rule.** A surface that frames someone else's UI (the screens carousel stage, the case-study image mat) keeps its own constant color in both themes rather than following the page theme.

## 3. Typography

**Display Font:** Newsreader (optical-size editorial serif, roman + italic; Georgia fallback)
**Body Font:** Public Sans (system-ui, sans-serif fallback)

**Character:** A serif/sans pairing on a real contrast axis. Newsreader carries every expressive role — hero, section headlines, statements, serif numerals, the footer CTA — at weight **500**, its own moderate thick/thin contrast reading as warm and considered rather than dramatic-Didone. Public Sans carries body, nav, and labels across weights 400–700. Emphasis is done with **Newsreader italic**, not bolding. (The wordmark is the hand-lettered PNG, not a font.)

### Hierarchy
- **Display** (Newsreader, 500, `--fs-display` `clamp(min(3.25rem, 14.5vw), 8vw, 5.25rem)`, line-height 0.98, letter-spacing -0.02em): hero headline, in a single 920px-max column with no eyebrow above it, so it keeps its longest line whole across the fluid range. The accent line is Newsreader **italic** in the theme accent.
- **Section** (Newsreader, 500, `clamp(1.875rem, 4vw, 3.25rem)`, line-height 1.08): case-study section headlines, the case page H1, the footer "Say hello" CTA.
- **Statement** (Newsreader, 500, `--fs-statement-sm` `clamp(1.5rem, 2.8vw, 2.375rem)`, line-height 1.2): declarative statement blocks (What I Do, How I Work, About). Inline emphasis (company names, key phrases) is italic, same ink.
- **Coda** (Newsreader, 500 **italic**, `--fs-coda`): the closing line under How I Work.
- **Serif numerals** (Newsreader, 500, accent `--accent-text`): the 01/02/03 markers in numbered lists.
- **Lead** (Public Sans, 400, `clamp(1.0625rem, 1.6vw, 1.3125rem)`, line-height 1.6): lead paragraphs; capped ≈46–65ch.
- **Body** (Public Sans, 400, 16px, line-height 1.6): running copy.
- **Eyebrow** (Public Sans, 600–700, 12px, letter-spacing 0.14em, uppercase): nav links (muted), case-card and short-card tags.
- **Card title** (Newsreader, 500, 1.8rem, line-height 1.1): short-read card titles; the screens carousel title is the same voice at 1.6rem.

### Named Rules
**The Serif-For-Scale Rule.** Newsreader appears at display/section/statement scale, as serif numerals, and as the footer CTA. Body, UI, labels, and nav stay Public Sans. The two never trade roles.
**The Display-Weight Rule.** Big serif type stays at weight ~500 — Newsreader's built-in contrast carries the elegance; don't bump display to 700/800 (that flattens it into a generic bold serif).
**The Italic-Emphasis Rule.** Lift a phrase with Newsreader italic in the same ink, not with bold or color (the accent line is the one exception — italic *and* the accent hue).

## 4. Elevation

Flat-by-default with tonal layering: depth comes from stepping the surface ramp and from a soft ambient shadow on card-level surfaces, deepening slightly on hover. Never a hard drop shadow.

### Shadow Vocabulary
- **Ambient Rest** — light: `0 4px 24px rgba(45, 50, 64, 0.10)` · dark: `0 4px 24px rgba(0, 0, 0, 0.35)`. Default under case-study and short-read cards.
- **Ambient Hover** — light: `0 10px 34px rgba(45, 50, 64, 0.16)` · dark: `0 10px 34px rgba(0, 0, 0, 0.45)`. Paired with border-brightening on hover; also the resting shadow of the screens carousel panel.
- **Status Ring** (`--dot-glow`) — the About live-status dot: a soft Sea Jet ring `0 0 0 4px rgba(82, 174, 189, 0.25)`, the same in both themes (a true glow disappears on paper, so a ring is used throughout).
- **Screen Drop** — `filter: drop-shadow(0 6px 18px rgba(45, 50, 64, 0.18))` on screenshots in the carousel. Source screens are cropped to their opaque window with no baked-in shadow, and the shadow is drawn here so it follows the window edge and stays clean.
- **Header scrim** (`--scrim` page-tint at ~0.85 + 12px `backdrop-filter: blur`): the sticky header floats a translucent scrim over content — depth by atmosphere, not edges.

### Named Rules
**The Diffuse-Not-Dark Rule.** Shadows stay low-opacity, large-radius. A visible hard edge means the radius is too small and the opacity too high.

## 5. Components

### Buttons / CTAs
- **No boxed buttons.** The primary CTA is the footer's oversized `Say hello ↗` in Newsreader at `clamp(2.75rem, 8vw, 7rem)` — the CTA *is* display type; the arrow nudges up-right on hover.
- **The drenched closer (signature moment).** The contact footer is the one place the page commits the accent to a full surface: after a whole page of warm-paper restraint, the final fold is a solid Soft Aqua field (`#9AC6C5`, both themes) with near-black band ink for every element. It reuses the Outcome-band tokens (`--band-bg` / `--band-text` / `--band-hairline`), so the homepage closer rhymes with the case-study Outcome bands and adds no new primitives. This is a deliberate *Committed* color moment (per the brand register) that breaks the monochromatic-restraint read; keep it to this one fold — the accent stays rare everywhere else. Focus rings inside it switch to band ink (the accent ring would vanish on a field this close to it). The oversized CTA runs straight into the giant `Say hello ↗` with no eyebrow label above it — the label was redundant next to type that size and was one of six repeating uppercase-tracked labels down the page; dropped in the same polish pass as the hero's.
- **Hero CTA** (`View selected work ↗`): an uppercase Public Sans link with a bottom hairline that brightens to Sea Jet on hover, the arrow nudging up-right.
- **Case-card CTA**: inline `View case study →`, muted, brightening with a 4px arrow nudge on card hover.
- **Only real `<button>`s** are the mobile nav toggle and the theme toggle. Everything else that acts is an `<a>`.
- **Focus:** 2px `accent` outline, 3px offset, 4px corners.

### Chips / Pills
- **Pill:** solid `--accent` fill, `--on-accent` ink, 700, full pill radius. Highest-status single label.
- **Chip:** the committed surface (`--surface-committed`), band-ink text, 500, 13px. Secondary metadata — quieter than the Pill.

### Cards / Containers
- **Corners:** feature 20px, summary 18px, general 14px.
- **Background:** Card Paper (light) / Card (dark) at rest.
- **Hover:** border `border` → `border-bright` + Ambient Rest → Ambient Hover, together.
- **Case-card padding:** 48/50px body.

### Navigation
- **Wordmark:** the hand-lettered **TN wordmark PNG** (`images/TN_Port_Logo.png`, 32px tall) — a single-hue mint asset. The **light** theme darkens it to a deep teal ink with `filter: brightness(0.35)`; the **dark** theme shows it unfiltered, as drawn. Its `alt` is the full name.
- **Style:** sticky header over the `--scrim` tint + 12px blur, 1px bottom hairline.
- **Links:** uppercase eyebrow treatment (12px, 700, 0.14em), muted → primary on hover, 44px tap boxes.
- **Theme toggle:** icon-only sliding switch — both icons sit in a pill track, **dark first (left), light second (right)**, and a solid accent capsule slides behind whichever one is active, keyed on `[data-theme]`. No visible text label; position + icon color are the state cues (`aria-label`/`aria-pressed` carry it for assistive tech). 32px real hit area per icon (see `--toggle-size` in `components.css` for why real box growth, not padding, was used to keep it tappable). Gated on `html.js`. Persists to `localStorage`; the OS setting is not consulted. Third iteration (impeccable live, Jul 2026) after a single "switch to X" button and a labeled pair both read as cluttered next to the eyebrow nav.
- **Mobile (≤600px):** nav links collapse behind a 44×44 hamburger; the theme toggle stays inline.

### Hero (signature layout)
A single column, max-width 920px: a short accent rule → serif headline (with the italic accent line) → lead → CTA. No eyebrow line above the headline (dropped in a polish pass — the headline carries the section on its own, and it was one of six near-identical uppercase-tracked labels repeating down the page). The **portrait** lives in the About section instead, as a small circular avatar beside the contributor byline, not in the hero.

### Case Study Card (signature component)
A two-column `<a>` (≈1.05fr / 0.95fr): a compact text body (accent-text serif number · client · theme eyebrow, Newsreader `<h3>` title, italic driving question, `View case study →`) against a real screenshot. Kept as a **card** (a deliberate divergence from the mockup's open-row layout) so the work list stays scannable. Ambient Rest shadow at rest; border + shadow deepen together on hover.
- **Media fit:** the thumbnail always uses `object-fit: contain`, centered, on a fixed **white** mat (`.case-card__media`, `#fff` regardless of theme) — never `cover`. These are device-mockup screenshots with their own baked-in background (white or transparent); the whole artifact must be visible, and matching the mat to the screenshots' own background makes the letterboxing read as one continuous surface instead of a frame. A `cover`-crop with per-card `--case-img-pos` focal points was tried and reverted (Aug 2026): it framed one signature detail per card but cut the rest of the screen away. If a new thumbnail ships with a *non-white* opaque background, re-cut the asset (flood-fill the background to transparent, crop tight to the device cluster) rather than special-casing the mat color per card. Since the fit is `contain`, an asset cropped tight to its own content letterboxes least and reads largest.
- **No seam scrim.** The thumbnail meets the text column at a clean edge. A `--bg-card` gradient used to fade the inner edge (vertical on desktop, horizontal once stacked); it was removed in Aug 2026 because it read as a haze washing over the screenshot rather than as a seam, and it dulled the very UI detail the crop exists to show. Don't reintroduce an edge fade here.

### Short Card (Also shipped)
A compact card for work that earns a short read rather than a case study. Four parts, stacked: a **landscape screen** (3:2, 2:1 when the grid collapses to one column), the **title** in Newsreader 1.8rem, **one sentence**, and **one line of results** in accent-text, bold, joined by a middle dot. Same surface language as the case card at card scale: Card Paper, 1px border, `--r-card` (14px) corners, Ambient Rest shadow. Two across at desktop, one column at ≤900px.
- **The screen is real product UI**, cropped from the actual design (`object-fit: cover`, `object-position: top`, on the inset fill), never an illustration or stock art. It is chosen to show the one frame that explains the work: the header with the open Get Help menu; two app screens side by side (the Community home and an event page), their tops showing and their bottoms bleeding off the frame, on the inset fill.
- **One cue, on the image.** A pill (`--bg-card` fill, 13px bold, Ambient Rest shadow) at the image's bottom-right reads "6 screens". There is no tag, no chip row and no text link.
- **One hit target.** The title is a `<button>` whose `::after` stretches over the card (`position: absolute; inset: 0`), so there is one tab stop and a click anywhere opens the carousel. Its accessible name is "Title: view N screens". Focus is drawn on the *card* (`:has(.short-card__open:focus-visible)`, 2px accent outline, 3px offset). Hover brightens the border, deepens the shadow to Ambient Hover, and underlines the title with a 2px accent rule.
- **Copy is held to the evidence.** The sentence says what changed, in about a dozen words. Results repeat only figures the project's own write-up supports, in the source's wording; the supporting detail (the 40% footer finding, the starting point) lives in the carousel captions.

### Surprise Me (Off the résumé)
A small strip in a band of its own, below Archive and above the contact footer (64px section padding, max 720px wide, left-aligned to the content column). A card whose **surface is tilted** `-1deg` (a `::before` layer: Card Paper, `--r-card` corners, Ambient Rest shadow) while its content stays level: an eyebrow ("Off the résumé · Tag", accent-text) over the fact in Newsreader 1.3rem (1.125rem on phones), and a **compact dome push button** on the right.
- **The button is a physical object**, built from three round layers: a base plate (`--bg-inset` with an inset highlight and soft drop), a darker wall (`--accent` mixed 60% with black), and a Sea Jet dome carrying **SURPRISE ME** in Public Sans 800, 12px, uppercase with 0.08em tracking (a control, not a headline). 112px across (96px on phones). Hover lifts the dome 2px; press sinks it 5px and releases over 0.5s. No hard offset shadow: the wall is a shape, not a shadow.
- **The new fact drops in** with an 8px rise and a -1deg tilt (0.42s on the reveal ease); that is the one authored moment. Motion is off under `prefers-reduced-motion`.
- **No counter.** Facts cycle in a shuffled order and every fact is shown once per pass before any repeats; a new pass never opens on the fact on screen.
- **No repeats with the page.** A fact that About already says (hockey, simulation theory) is not in the deck.

### Screens Carousel
A native `<dialog>` (`showModal()`, so focus trap, Escape, inert background and top-layer stacking come free) shared by every short card. A panel on the card surface (`--r-feature` corners, Ambient Hover shadow) under a fixed near-black backdrop: a head with the project title in Newsreader 1.6rem and a 44px round close button on the inset fill; a **fixed light stage** (`--surface-stage`) holding one screen at a time, contained, with a Screen Drop shadow; 44px round arrow controls on the stage edges (bottom corners on phones); a foot with a one-sentence caption and a tabular "n of N" counter.
- **Interaction:** arrow buttons, Left/Right keys, wrap-around, touch swipe (horizontal drag past 40px), click outside or Escape to close, focus returns to the card. Neighbours are preloaded; the screen fades in over 0.2s; the panel enters over 0.28s on the reveal ease. All motion is off under `prefers-reduced-motion`.
- **Order:** the solution first, then the research trail that led to it. Captions state what the screen shows and, where a feature is planned rather than shipped, say so.
- **Images** are cropped to their opaque window (no baked-in shadow), kept as PNG with hard alpha, and loaded only when the carousel opens.

### Split-Media (case-study single-image sections)
Shared layout for any case-study narrative section — Context, Exploration, Validation — once it's down to **exactly one** supporting image: a plain two-column grid (`.cs-split-media`, 1fr/1fr), text block (eyebrow + `h2` + copy, all in one column) beside the image, no letterbox card, `align-items: start` (the image doesn't stretch to match a longer text column). Implemented once as `SplitMedia()` in `case-template.js`, called by `ContextSection` / `AiSection` / `ValidationSection` — don't reimplement per section. Falls back to the full-width `FullImages` treatment (stacked or 2-up grid) when a section has zero or 2+ images. Collapses to a single stacked column ≤900px.
- **Alternates sides, every occurrence, down the page** — the same non-negotiable rhythm as the Challenge blocks below, and for the same reason: a page where every image pins to one side (usually the right) reads as a template default, not an authored layout. Current fixed assignment for the three call sites: Context = image right (`reverse: false`), Exploration = image left (`reverse: true`), Validation = image right (`reverse: false`). If a fourth split-media section is ever added, continue the alternation (next = left) rather than repeating a side.
- **Mechanism:** `reverse` param on `SplitMedia()` toggles the `.cs-split-media--reverse` modifier — the identical `direction: rtl` flip (with children reset to `ltr`) that `.cs-challenge__inner--right` already uses. Reuse this trick for any future left/right alternation; don't reorder the markup or introduce a second technique. Resets to `direction: ltr` at the ≤900px stacked breakpoint like its Challenge counterpart.

### Challenge Media — two-image pairs pick stack vs. grid by aspect ratio
A Challenge item with exactly two images chooses its own arrangement in `ChallengeBlock()` (`case-template.js`) by checking `img.h > img.w` on both: **portrait pairs go side by side** (`.cs-challenge__media--grid`, breakpoint-free `repeat(auto-fit, minmax(200px, 1fr))`, same technique as `.cs-full-image-grid`); **landscape pairs stay stacked** (`.cs-challenge__media--stack`, the original vertical treatment). Two tall portrait screenshots stacked compound their own height and run far taller than the text column beside them; splitting them side by side roughly halves the total height and reads as two states of one screen instead of a long scroll. Splitting a landscape pair instead would squeeze each image too narrow to read — don't apply the portrait fix universally. Both variants collapse to one column on narrow viewports (`--grid` via its own auto-fit; `--stack` is already single-column).

### Homepage order and the retired sections
The homepage runs **Hero → Case studies → About → Archive → Contact** (with the Surprise Me strip between Archive and Contact), and the nav follows the page: Work, About, Archive, Contact. Each section has one job: the claim, the proof, the person, the earlier work, the way to reach out.
- **What I Do was merged into the case studies** (Oct 2026). Its three kinds of complexity already label the three cards, so a single serif intro line under the "Case studies" opener names the clients and the idea ("For lululemon, SAP Concur, and MoxiWorks. Three projects, three kinds of complexity.") and the cards carry the rest. Don't reintroduce a separate taxonomy section above the work.
- **How I Work was retired** (Oct 2026). Its thesis moved into the hero lead ("…organize the complexity behind them into something people can understand"), and its process claims are shown, with evidence, inside the case studies. It had been saying the hero's idea a third time.
- **About is personal, not a second pitch**: a short statement, then two paragraphs about how Tad came to design, where he lives and what he does outside work, his current role, and what teammates count on him for. No work claims, no method recap, no credentials line (the Archive and the facts deck carry those).

### Process stepper — retained, not rendered
The "See it in practice" five-step stepper (`Process()` in `js/app.js`, `.stepper*` in `css/components.css`) was removed from the homepage in Oct 2026 by dropping its call from the How I Work section. The component, its data (`D.process`) and its styles are kept; re-add the call to bring it back.

## 6. Do's and Don'ts

### Do:
- **Do** keep exactly one accent — Sea Jet `#52AEBD` in both themes (small text on paper uses Deep Sea Jet `#2A7381`); everything else stays in the paper/ink ramp.
- **Do** carry every headline in Newsreader at weight ~500 (its built-in contrast is the elegance); emphasize phrases with Newsreader *italic*, not bold.
- **Do** treat dark as the default theme and keep the light sibling a faithful counterpart — same type, layouts and accent; surfaces, ink and shadows invert.
- **Do** step through the surface ramp (paper → card → inset) to convey depth before reaching for another color.
- **Do** use the Ambient Rest / Ambient Hover pair for new card-level surfaces, paired with border-brightening.
- **Do** write copy the way a senior designer talks to a peer — specific and confident, not marketing-voice — and keep every claim at the resolution of its evidence.
- **Do** show real product screens for work previews, cropped to the window, with the shadow drawn in CSS (Screen Drop).
- **Do** vary the section-opening device rather than repeating the tracked eyebrow label on every section. What I Do / How I Work / About keep it as a real sticky-rail orientation cue (`Split()`); Hero and Contact intentionally skip it — a design critique flagged six identical repeats as the AI-editorial "kicker on every section" tell.

### Don't:
- **Don't** introduce a second saturated accent (no purple, magenta, gradient) — breaks the One Accent Rule.
- **Don't** re-tint the screens carousel stage per theme — `--surface-stage` is a fixed light surface because the screens are light product UI.
- **Don't** bake shadows into screenshots or use illustrations as work thumbnails; they read as stock and the soft shadow shows as grain on a light stage.
- **Don't** bump display type to 700/800 to make it "pop" — that flattens Newsreader into a generic bold serif. Keep it ~500 and larger.
- **Don't** use purple gradients, glassmorphism, cream-with-blue SaaS palettes, or stock-photo heroes — explicit anti-references.
- **Don't** use hard, small-radius drop shadows (the "2014 app" look).
- **Don't** add a third type family. Newsreader + Public Sans are the committed pair.
- **Don't** let muted/faint text fall below 4.5:1. `--text-faint` is decorative-only; never body copy.
- **Don't** commit the local live-mode `<script src="localhost:8400/live.js">` injection or leave `?v=` cache tokens un-bumped when JS/CSS changes (see CLAUDE.md).

## Update log

- **Sept 2026: Pantone set + Newsreader / Public Sans.** One accent, Sea Jet `#52AEBD`, for both themes. Light: bg `#EEF6F5`, card `#FAFDFC`, inset `#D5E8E7`, text `#2D3240` / `#2C2628`, muted `#54553A`, small accent text `#2A7381`, band `#9AC6C5`. Dark: bg `#2C2628` (Black Bean), card `#2D3240` (Anthracite), chips `#54553A`, text `#E8F2F1`, muted `#9AC6C5`. Tokens added then: `--on-accent` and `--highlight`.
- **Oct 2026: Dark by default.** Dark is now the theme every first visit sees, the toggle lists dark first, and the OS preference is ignored; a saved choice still wins.
- **Oct 2026: Homepage narrative.** What I Do merged into the case studies, How I Work retired, About rewritten as personal and moved above Archive, nav reduced to Work / About / Archive / Contact. The Surprise Me card became a compact strip in a band of its own below Archive (it briefly lived inside the footer) with an uppercase dome button, a tilted surface, and a no-repeat shuffle with the counter removed. The Also shipped section is hidden for now (code retained).
- **Oct 2026: Also shipped gallery.** Short cards now use real screens as thumbnails and open the Screens Carousel; new token `--surface-stage`; short cards were simplified to a screen, title, one sentence and one results line (tag, chips and text link removed; Self-Service shows its header menu, Community Hub two app screens side by side); the homepage process stepper is retained but not rendered; How I Work copy tightened.
