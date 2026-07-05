---
target: lululemon case study (case-passkeys.html)
total_score: 24
p0_count: 0
p1_count: 2
timestamp: 2026-07-05T05-55-16Z
slug: case-passkeys-html
---
Method: dual-agent (A: design review · B: detector + browser evidence)
Target: case-passkeys.html — "Passwordless Authentication — lululemon"

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Scrollspy + back-to-top work; no video load/progress state |
| 2 | Match System / Real World | 4 | Plain, user-real language throughout |
| 3 | User Control and Freedom | 3 | Prev/next + back-to-top present; no jump-to beyond subnav |
| 4 | Consistency and Standards | 3 | Footer got the band-contrast fix; back-to-top didn't |
| 5 | Error Prevention | n/a | Static content page — no forms/transactions |
| 6 | Recognition Rather Than Recall | 4 | Sticky numbered subnav = zero wayfinding memory load |
| 7 | Flexibility and Efficiency | 3 | Subnav jump-links; mobile subnav is scroll-only |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely restrained; strongest heuristic here |
| 9 | Error Recovery | n/a | No error states on a static page |
| 10 | Help and Documentation | n/a | Linear reading experience — none needed |
| **Total** | | **24/28 applicable** | **Good** (3 heuristics n/a for a static case study) |

## Anti-Patterns Verdict

**Not AI slop — executed with real craft.** Real product screenshots (not stock), copy that names rejected alternatives ("silent rollout; opt-in prompt; explained introduction"), an unsanitized usability quote, and editorial curation baked into the code (`capabilities.slice(0,3)`, "distilled: top three"). None of the banned patterns present: no purple gradients, no glassmorphism (header blur is restrained), no cream-with-blue SaaS palette, no gradient text, no boxed buttons, no hard drop shadows, serif stays at weight 500.

**Deterministic scan (CLI detect.mjs, exit 2, 3 findings):**
- `single-font` (warning) — **FALSE POSITIVE.** Network evidence shows both Hanken Grotesk AND Spectral woff2 files fetched; headings visibly serif. Detector's heuristic missed the `--font-display` token.
- `em-dash-overuse` (warning) — 18 em-dashes in body. Real; a light copy-edit pass could vary punctuation.
- `numbered-section-markers` (advisory) — 01–07. **Justified in context:** the page genuinely IS a numbered narrative sequence, consistent across all sections. Deliberate voice, not reflexive scaffolding.

**Browser-injected overlay (11 findings across 2 elements):** `hero-eyebrow-chip`, `repeated-section-kickers ×9` (the 01–07 markers + Challenge 1/2/3 sublabels), `cream-palette ×1` (paper bg `rgb(244,240,232)`). All three are the detector re-flagging the deliberate Editorial-Restraint system: the numbered sequence and warm-paper ground are the committed brand identity, and measured contrast is excellent (see below), so `cream-palette` is a false positive against this specific brief.

**Contrast spot-check (measured):** Dark body 12.1:1, dark title 15.7:1, light body 10.7:1, light title 14.6:1 — all clear AA and AAA comfortably. No body-text contrast concerns in either theme. (The one contrast failure is a UI control, not body text — see P1 below.)

**Assets:** all 7 case-study images + fonts load 200, no 404s, no console errors. Video uses `preload="metadata"` (not broken).

## Overall Impression

This is a strong, senior-level case study that reads as authored, not templated. The bones are excellent: a real design-process arc, honest tradeoff writing, and disciplined restraint. The problems are not structural — they're a handful of finishing cracks where the design system's own rules were applied inconsistently. The single biggest opportunity: extend the band-contrast fix (already solved once for the footer) to the two elements that still break it, and gate the autoplaying media on reduced-motion so "quiet authority" holds even for users who asked for quiet.

## What's Working

1. **"Options considered → Decision → Impact" in Challenges** — showing rejected alternatives is exactly what separates a staff-level portfolio from a junior one. It proves tradeoff reasoning, not just finished screens.
2. **The unsanitized usability quote** — left grammatically rough ("I have to type in my e-mail and send a link which I don't like") reads as a real transcript, building more trust than a polished testimonial would.
3. **Editorial curation in the code** — `capabilities.slice(0,3)` shows the cognitive-load discipline enforced structurally: the data holds 5 tags, the design deliberately shows 3.

## Priority Issues

**[P1] Back-to-top control fails contrast over the Outcome band**
- Why it matters: `.cs-back-to-top` uses `color: var(--text-muted)` unconditionally (css/case.css:464). Measured over the band: 1.57:1 / 1.30:1 (light) and 1.18:1 / 2.02:1 (dark) — far below the 3:1 AA minimum for UI components. This exact bug was already caught and fixed for `.site-footer a:focus-visible` (components.css:529) but never extended to back-to-top, the one element guaranteed to overlap the band on every scroll.
- Fix: toggle a body class via the IntersectionObserver already watching `.cs-outcome`, swapping the control's color to `var(--band-text)` while the band is in view (mirror the footer pattern).
- Suggested command: /impeccable polish

**[P1] Autoplaying video + 2 GIFs ignore `prefers-reduced-motion`**
- Why it matters: js/components.js:174 renders `<video autoplay muted loop>` unconditionally, plus two looping GIFs in the same Validation grid — three simultaneous animations, no pause control, no reduced-motion gate. `initReveal()` correctly respects the preference for scroll animations, but not for the media itself (WCAG 2.2.2). Three loops firing at once is the opposite of "quiet authority."
- Fix: gate `autoplay` on `!matchMedia('(prefers-reduced-motion: reduce)').matches`; consider a hairline "Pause" affordance consistent with the no-boxed-buttons system. For GIFs, swap to a poster-frame still under reduced motion.
- Suggested command: /impeccable animate

**[P2] Exploration section is a text-only dead zone between two image-rich sections**
- Why it matters: `aiExploration` (js/case-content.js:202-210) has no images array. Unlike Reflection (the intentional wind-down), it sits between the image-heavy Challenges and Validation sections, so a skimming recruiter hits a sudden all-text block mid-scroll — exactly where visual rhythm was carrying them through. The section talks about "rapid prototyping" and "the animation sequence" yet shows neither.
- Fix: add one supporting artifact (a prototype frame or storyboard thumbnail), or make the text-only beat clearly deliberate.
- Suggested command: /impeccable layout

**[P2] Persona research screenshot introduces 2nd/3rd saturated colors**
- Why it matters: `passkeys-personas.png` (Context) contains mint-green and rose/pink blocks. As a real research artifact it earns a raw-asset exception, but it's the loudest violation of the one-accent rule on the page — and in dark mode its mint coincidentally echoes the theme's own mint accent, creating a false association between an old artifact and the live palette.
- Fix: recolor the chart to monochrome/terracotta before use, or crop/reduce its visual weight so it reads as "captured artifact," not "part of the system."
- Suggested command: /impeccable colorize

**[P3] Mobile subnav scroll position doesn't resync on manual scroll-to-top**
- Why it matters: at 390px the subnav scrolls horizontally (scrollWidth 598 vs 390). After scrollspy auto-scrolls to a later tab, manually scrolling the page to the top doesn't reset the subnav's scrollLeft, so "Summary" can stay clipped out of view while its section is on screen. Small state-consistency gap.
- Fix: resync subnav scrollLeft when the top section re-enters the viewport.
- Suggested command: /impeccable polish

## Persona Red Flags

**Jordan (busy recruiter skimming):** The image→text→image rhythm breaks at the text-only Exploration section (P2) — the most likely bail point. And "Options considered" — some of the strongest senior-level signal on the page — is styled as the *least* prominent text in each block (0.9375rem, `--text-muted`), so a fast skimmer skips the best evidence.

**Sam (reduced-motion / keyboard user):** Has `prefers-reduced-motion` set system-wide, yet gets three looping animations anyway (P1). Tabbing to back-to-top over the band, the `:focus-visible` ring uses `--accent`, which is close in hue to `--band-bg` (mint-on-mint in dark) — the focus ring compounds the P1 contrast failure for keyboard users specifically.

**Casey (one-handed mobile):** The 7-tab subnav needs horizontal scroll with only a subtle 56px fade hint — easy to miss. Reaching the Outcome band and instinctively looking for a way up, the "TOP" control has all but disappeared (P1) precisely when it's most wanted.

## Minor Observations

- Header wraps to two lines at 390px ("Tad Natsuhara" breaks after "Tad"), nudging the subnav down on first paint.
- The Validation quote is about password-reset email friction — only tangentially about the trust model the section header promises. Effective color, imperfect fit.
- `capabilities` holds 5 items, renders 3 (intentional) — confirm the unused 2 (`Design Systems`, `Product Collaboration`) aren't stale data.
- Per-page section numbers (01–07) — confirm this is consistent with sibling case studies (e.g. case-rail-booking.html).
- 18 em-dashes in body copy — a light edit could vary the punctuation rhythm.

## Questions to Consider

1. If "Options considered" is the strongest evidence of senior thinking, why is it the least visually prominent text in each block — deliberate "reward the careful reader," or an oversight worth correcting?
2. Is a page-global floating back-to-top (which by definition overlaps every section, including the "one deliberate drenched moment") actually compatible with a system built around a single intentional exception?
3. Is text-only Exploration a deliberate breather in the pacing, or a placeholder that got skipped when the asset list was assembled?
