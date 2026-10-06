---
target: Tad Natsuhara Asana Deck (Tad_Natsuhara_Asana_Deck.html)
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-08-17T03-55-16Z
slug: tad-natsuhara-asana-deck-html
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | "X / 16" counter is accurate but small/peripheral and not `aria-live` |
| 2 | Match System / Real World | 3/4 | Real screenshots ground abstract claims; minor unexplained jargon ("RISE products") |
| 3 | User Control and Freedom | 3/4 | Prev/Next work; wrap-around nav (slide 1 → 16) has no boundary signal; no deep-linking |
| 4 | Consistency and Standards | 3/4 | Strong template reuse; olive color double-duty as generic accent *and* "chosen option" marker |
| 5 | Error Prevention | 3/4 | Whole-stage click-to-advance can misfire when a viewer is trying to click into text |
| 6 | Recognition Rather Than Recall | 2/4 | "Chosen option" in comparisons relies on a subtle color-only cue; no overview/progress map |
| 7 | Flexibility and Efficiency | n/a | Fixed-order narrative pitch; not a workflow tool |
| 8 | Aesthetic and Minimalist Design | 4/4 | Genuine high point — restrained, consistent, no clutter |
| 9 | Error Recovery | 1/4 | The scaling bug (see P0) has zero detection/messaging; no `<noscript>` fallback |
| 10 | Help and Documentation | n/a | Linear 16-slide deck; inline hint bar is adequate |
| **Total** | | **22/32** | **Good (69%)** |

#### Design Specificity Verdict

**LLM assessment**: Passes decisively. Seven embedded screenshots are genuine product UI (MoxiWorks admin panel, Concur seat map, an actual keyboard tab-order artifact, lululemon/Peloton passkey screens). An "edge" metaphor is threaded deliberately across slides 2, 12, and 16. Every "Decision" slide names what was *rejected* and why. The two case studies are structurally rhymed on purpose (matching scale-block cadence, matching outcome-card layout). The hidden speaker-notes layer is written for a named interviewer ("Erica") with live-presentation timing cues. The close ("What I would bring to billing owners") is reframed around the specific target role, not a generic sign-off. This could not be repurposed for another designer without a full rewrite.

**Deterministic scan**: The CLI static scanner (`detect.mjs --no-design-system`) returned 1 finding: `dark-glow` (colored shadow flagged as an "AI slop" pattern) on the `.shot` screenshot-card wrapper. On inspection this is very likely a **false positive**: the shadow has a real 6px vertical offset (the rule targets zero-offset glows), and the card it's applied to sits on a light background inside a light slide — the "dark page" the rule cites is the outer `<body>` letterbox color, never the element's actual local context.

The live in-browser detector (`detect.js`, a broader ruleset than the CLI scanner) found 6 rule categories / 27 total instances across the full 16-slide DOM: `hero-eyebrow-chip` (1×), `call-caps-body` (4×), `gpt-thin-border-wide-shadow` (7×), `kicker-above-heading` (12×), `skipped-heading` (2×), `dark-glow` (1×, same false positive as above). Source-level verification of each:
- `hero-eyebrow-chip`, `call-caps-body`, and `kicker-above-heading` are three different rule IDs all triggered by the same design decision: a small tracked-uppercase label above each heading (`.kick`). The "chip" framing doesn't match the CSS (no background/border/padding — plain text, not a pill), and "body text" framing doesn't match either (these are short section kickers, not paragraph copy). This looks like redundant/mislabeled detection of one intentional, consistently-applied design element rather than three separate defects.
- `gpt-thin-border-wide-shadow` (7×, exactly the 7 `.shot` screenshot cards) is a real, worth-noting pattern: a 1px border + soft wide shadow is a recognizable generic/AI-template UI signature. Ironic placement — it's the visual treatment wrapping the deck's most specific, hand-picked evidence (the real product screenshots).
- `skipped-heading` (2×, `<h1>` → `<h3>` with no `<h2>`) is accurate and independently corroborated by the design review — a minor semantic-HTML gap, unlikely to affect real users but a standard lint flag.

**Visual overlays**: Browser injection succeeded (confirmed via a real DOM mutation test, not just a read-only check). The detector overlay rendered directly on the live page — visible confirmation included a highlighted box around the slide-1 "PORTFOLIO DEEP DIVE · ASANA" kicker, the slide-3 kicker, and a slide-6 `.shot` card border/shadow. A scrolling findings ticker also confirmed the detector scans the full DOM regardless of which slide is currently visible. The Browser pane tab is left open on the deck now (detector script has already run and finished; no server dependency remains, since the temporary overlay server was stopped after evidence was captured).

#### Overall Impression

This is a genuinely well-authored, specific, and disciplined piece of work — the strongest thing about it is that it could not be mistaken for anyone else's deck. But it ships with one real, verifiable, and fairly serious technical bug: the slide-fitting math scales twice, so the deck renders wrong at almost every screen size except one exact resolution, and catastrophically wrong on mobile. For an artifact whose entire job is to demonstrate craft to a hiring team, a bug this basic — on a laptop, not even an edge case — is the single biggest risk in the whole deck.

#### What's Working

1. **The "considered alternatives" transparency device.** Decision slides explicitly name what was rejected and why (e.g., "Considered: keep the service managed model, expose raw settings to admins, or a structured library with locks."). This is rare in portfolio decks and shows reasoning, not just outcome.
2. **Structural rhyming between the two case studies.** Problem slides use an identical scale-block cadence ending in "One X."; outcome slides both lead with hard numbers in accent cards. This repetition reads as deliberate authorship, not two pasted-together case studies.
3. **Restrained, disciplined visual system.** Every color/spacing/type value is defined once and reused consistently across all 16 slides — confirmed only one class (`.split`) is dead CSS; everything else is load-bearing. Nielsen heuristic #8 (Aesthetic/Minimalist) scores a full 4/4.

#### Priority Issues

**[P0] The stage-fitting function double-scales the deck, breaking layout at nearly every real screen size.**
- **Why it matters**: `fit()` sets `stage.style.width/height` to `1280*s`/`720*s`, then applies `transform:scale(s)` on top of that already-shrunk box — compounding to an effective `s²`, not `s`. Verified independently against the source (line 230–231) and by measurement at three sizes: at 1440×900 the stage overflows by 84px and gets silently clipped; at 1366×768 it under-fills by ~13%; at 375×812 (mobile) it renders at roughly **6% of its already-shrunk intended size** — an illegible postage-stamp deck requiring pinch-zoom on every slide. Only one exact viewport (1336×816, where s=1) avoids the bug. This is a job-application artifact judged partly on craft; a hiring-team member opening it on an ordinary laptop or phone gets a visibly broken layout.
- **Fix**: Remove the redundant `stage.style.width/height` assignment and let `transform:scale(s)` alone handle visual sizing (with `transform-origin` and a compensating position/translate for centering), or derive layout size and transform scale from independent, non-multiplying values.
- **Suggested command**: `/impeccable optimize` or a direct fix (this is a one-line arithmetic bug, not a design-judgment call).

**[P1] Speaker-notes panel visually overlaps the case-study screenshots on 5 of 7 image slides.**
- **Why it matters**: When notes are toggled on, the fixed-position notes panel overlaps the top-right of the embedded screenshot on slides 6, 7, 12, 13, and 15. Slide 6 is the one the speaker notes themselves flag as "the most important slide in the deck," instructing the presenter to "point at the Default, Inherited and Overridden chips" in the image — exactly the region the notes panel covers. In a live interview, opening notes to prep and covering the evidence you're about to point at is a real, avoidable failure mode.
- **Fix**: Cap the notes-panel height or reposition it (e.g., bottom-left) so it never overlaps the image column.
- **Suggested command**: `/impeccable layout`

**[P1] All 7 embedded screenshots have empty alt text; 3 have no caption either.**
- **Why it matters**: Verified in source — all 7 `<img>` tags carry `alt=""`; slides 5, 7, and 15 additionally have no caption paragraph. Roughly half the deck's substantive persuasive content is delivered through these screenshots, so a screen-reader user is left with a near-total content gap on exactly the slides meant to prove the work. One of the two case studies is *about* accessibility (WCAG 2.1 AA, guide-dog research) — shipping inaccessible image evidence is a pointed irony a design-focused hiring team could reasonably notice.
- **Fix**: Add descriptive alt text to all 7 images; at minimum ensure every screenshot has a visible caption (already an established pattern in the deck).
- **Suggested command**: `/impeccable harden` or `/impeccable audit`

**[P2] No JavaScript fallback; a script failure renders a completely blank page.**
- **Why it matters**: The title slide has no `.on` class in static markup, and `.slide{display:none}` is the default — every slide only becomes visible after `show(0)` runs at the end of an inline script. There's no `<noscript>` tag anywhere. If any corporate security policy or browser extension blocks the inline script, the viewer sees a fully blank page — not even the title.
- **Fix**: Mark the first slide `on` in static markup by default, or add a `<noscript>` message.
- **Suggested command**: `/impeccable harden`

**[P3] Comparison-list "chosen option" relies on a subtle, overloaded color cue.**
- **Why it matters**: On slides 12 and 15, the selected approach in a 3-item comparison is distinguished only by an olive-vs-near-black text-color shift, with no icon, weight, or background change — and olive is already the deck's general-purpose accent color everywhere else (kickers, arrows, stat numbers). A skimming reader has to notice and remember a subtle recolor to know which option was chosen.
- **Fix**: Add a small distinct marker (checkmark, dot, background tint) to the chosen row.
- **Suggested command**: `/impeccable clarify`

#### Persona Red Flags

**Alex (impatient, skimming recruiter/hiring manager)**: Opens the deck on whatever laptop is at hand — unless it's exactly 1336×816, gets a clipped or visibly undersized deck on first impression (the P0 bug). The deck's single strongest role-specific line — the direct tie between slide 6's work and the target role's payment-systems scope — lives *only* in the hidden speaker notes, which requires discovering the small 'N' hint at the very bottom of the screen; Alex may never see the deck's best-tailored pitch line. No way to jump straight to outcome slides — must click through sequentially or guess that End jumps to the close.

**Sam (accessibility-dependent, screen-reader/keyboard-only)**: All 7 screenshots are invisible to a screen reader (`alt=""`), 3 with no caption fallback — a near-total content gap on exactly the case-study evidence the pitch rests on, in a deck where one case study is *about* accessibility work. Slide navigation toggles `display` with no `aria-live` region and focus staying on the Next button, so a screen-reader user gets no confirmation a slide even changed. The notes panel similarly has no `role`/`aria-label`.

**Casey (distracted mobile user)**: Confirmed by direct measurement at 375×812 — the entire deck renders as a ~94×53 CSS-pixel block in a sea of empty dark space (the P0 bug's worst-case expression), requiring active pinch-zoom to read anything, on every single slide. There's no touch equivalent for the 'N' speaker-notes shortcut, so notes are permanently unreachable on touch-only devices.

#### Minor Observations

- `.split` (applied to 11 slides) has zero corresponding CSS rule anywhere — dead/vestigial class; actual two-column layout comes entirely from `.cols`. Harmless, but worth a cleanup pass.
- Typography depends on a live fetch to `fonts.googleapis.com` — the file embeds all images as base64 but isn't fully self-contained. Fallback fonts are defined so degradation is graceful, but the Spectral/Hanken Grotesk identity would silently disappear for anyone with Google Fonts blocked.
- "20%" vs. "20 percent" used inconsistently between visible slide copy and speaker notes.
- `<h1>` → `<h3>` heading skip (no `<h2>`) on card titles within grids — a standard a11y lint flag, unlikely to affect real users.
- Quote blocks use `<div class="quote"><p>` rather than semantic `<blockquote>` — no functional impact, missed semantic-correctness opportunity.
- Wrap-around navigation (Prev on slide 1 → slide 16, Next on slide 16 → slide 1) has no boundary signal; a stray click could disorient a first-time viewer.
- Whole-stage click-to-advance fires on any click anywhere in the slide, which can misfire when a viewer tries to click into text.

#### Questions to Consider

- Who is this file actually for — a named interviewer live in a room, or a hiring committee reading it async? The speaker notes assume the former; the shareable URL and "portfolio deep dive" framing suggest the latter. Right now it tries to be both, and the best material (explicit role-tailoring) is stranded in the harder-to-discover mode.
- If the deck breaks on an ordinary laptop and is nearly unusable on a phone, what would it take to catch that before shipping a high-stakes personal artifact — testing against 3-4 real device sizes as a standard last step?
- Is 16 slides the right shape, given the speaker notes themselves call slide 15 (lululemon) a "release valve" to cut under time pressure — right before the emotional close? What would it feel like to let slide 13 (the strongest emotional beat) flow straight into the close instead?
