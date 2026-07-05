---
target: case-passkeys.html
total_score: 36
p0_count: 0
p1_count: 1
timestamp: 2026-07-05T18-55-55Z
slug: case-passkeys-html
---
Method: dual-agent (Assessment A: design review · Assessment B: detector + browser evidence), run as two isolated parallel sub-agents, synthesized with one correction verified independently below.

## Correction applied during synthesis

Assessment A reported a P0 ("Context GIF still opaque black") and a P1 ("Face ID GIF still opaque black") claiming the recent transparent-background fix on `passkeys-onboard-animation.gif` and `passkeys-faceid-animation.gif` hadn't taken. Before accepting that, it was checked directly:

- Re-sampled all four corners of both files on disk with PIL: `rgba(0,0,0,0)` at every corner, on both files, matching the exact byte size and mtime from when the fix was saved.
- Assessment B (isolated, running in parallel, no visibility into Assessment A's findings) independently screenshotted both GIFs in both themes and explicitly reported "no visible box edge or seam artifact... directly confirms the fix is working as intended for both themes."

Conclusion: Assessment A's P0/P1 are **false positives**, almost certainly caused by the shared preview browser tab serving a stale cached copy of the GIF bytes — the same caching quirk hit and worked around earlier in this build session (images aren't covered by the site's `?v=` cache-busting scheme, only JS/CSS are). The two heuristic scores Assessment A explicitly docked for this reason (#4 Consistency, #8 Aesthetic/Minimalist) are corrected +1 each below, with the reasoning shown transparently rather than silently overwritten.

A second, unprompted change landed between the two assessments finishing and this synthesis: Challenge 3 (the two stacked screenshots) was moved from a full-width "text-above, images-below" layout to the same left-text/right-media split used by Challenges 1 and 2. This incidentally resolves the line-length finding both assessments flagged for Challenge 3 specifically (its text column is now ~415px / ~49ch, matching Challenges 1–2, down from ~688px / ~95-105ch) — verified live via `preview_inspect` after the change. It does not touch Context's or Challenge 1/2's line lengths, which both assessments separately measured at ~105-119 chars/line via the detector's own line-length rule — that finding stands.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Scrollspy `aria-current`, back-to-top, subnav fade-scrim all work; no loading states needed on a static page. |
| 2 | Match System / Real World | 4 | Copy is candid and specific ("nobody adopts an unfamiliar sign-in method just because it shipped"); screenshots are real product UI. |
| 3 | User Control and Freedom | 3 | Back-to-top + sticky back-link + subnav jump-links; no way to jump between sections other than the subnav (minor, appropriate for a linear read). |
| 4 | Consistency and Standards | **4** *(was 3; the cited deduction — GIF transparency — is a false positive, see above)* | Component reuse (`cs-body`, `cs-split`, `ImageSlot`) is disciplined; Challenge 3 now matches Challenges 1–2's pattern after the layout fix. |
| 5 | Error Prevention | 4 | Static content, no forms/inputs to err on. |
| 6 | Recognition Rather Than Recall | 4 | Subnav always visible while scrolling; sticky header keeps client/case identity in view. |
| 7 | Flexibility and Efficiency | 3 | Subnav jump-links serve returning readers; no keyboard shortcuts, appropriate for this content type. |
| 8 | Aesthetic and Minimalist Design | **4** *(was 3; same false-positive correction)* | Outcome band is the one deliberate "committed color" moment; rest of the page holds editorial restraint. |
| 9 | Error Recovery | 4 | No user-facing errors possible on a static read-only page. |
| 10 | Help and Documentation | 3 | The case study is self-documenting — Decision/Impact/Options-considered labels teach the reader how to parse it, without ever stating that framework explicitly. |
| **Total** | | **36/40** | **Good — solid foundation, address the remaining line-length and mobile-legibility items below.** |

## Anti-Patterns Verdict

**LLM assessment (Assessment A):** Clean. No side-stripe borders, gradient text, glassmorphism, hero-metric template, identical card grids, reflexive eyebrow spam, or text overflow at any breakpoint (375/768/1005px tested). The numbered section markers ("02 · CONTEXT," "Challenge 1/2/3") are earned, not reflexive — a genuine sequential narrative with functional scrollspy anchors, exactly the brand register's stated exception.

**Deterministic scan (Assessment B):** `detect.mjs --json case-passkeys.html` → exit 2, 2 findings:
- `single-font` (warning) — **false positive**: live network log confirms two font families load and render (Hanken Grotesk + Spectral); the CLI's static check appears to miss the second `@import`/`<link>`.
- `numbered-section-markers` (advisory) — matches the LLM's own read: intentional, consistent, case-study-wide editorial convention, not AI scaffolding.

Live overlay injection (via a temporary DOM-only script tag, no file ever touched — verified with `git diff` before/after, and a final `grep -rl "localhost:8400|impeccable-live" *.html` came back empty) surfaced 4 additional tagged findings, none contradicting the above:
- `hero-eyebrow-chip` — the "01 · lululemon · Behavioral Complexity" summary chip. Matches the intentional-marker reasoning above.
- `line-length` (×4 elements) — `p.cs-body` ~105 chars/line, `p.cs-decision` ~112 (×2), `p.cs-options` ~119. This is real and is Priority Issue #1 below.
- `repeated-section-kickers` — same pattern/reasoning as `numbered-section-markers`.
- `cream-palette` — the page's warm paper background (`#F4F0E8`). DESIGN.md documents this as a deliberate, contrast-checked brand choice (not the generic "AI beige" tell it's usually flagging) — false positive for this project specifically.

No console errors, no failed asset requests, across both themes and all three breakpoints tested (one `net::ERR_ABORTED` on the Validation video was a normal progressive-range-request abort followed immediately by a successful one — not a defect).

## Overall Impression

This is a well-executed, disciplined case study that mostly practices what it preaches — a page about earning trust at high-stakes moments that itself reads calmly and confidently. The one real, page-wide issue is line length: body copy runs 30-50% past the system's own documented 46-65ch comfortable measure in several places, most severely in `.cs-options` (~119 chars/line). The single biggest opportunity is tightening that measure, which would make an already-strong page notably easier to read without touching anything structural.

## What's Working

1. **The Outcome band is the design system operating exactly as intended** — terracotta-in-light / mint-in-dark, dark-ink cards over the saturated field, deployed exactly once as the page's one "committed color" moment. Reads as confident, not gaudy.
2. **Challenges 1 and 2's device-frame mockups (tablet/phone bezels) survive every breakpoint tested.** The bezel gives the eye a "held object" cue even when the UI text inside shrinks — this is why they don't suffer the legibility problem Challenge 3's flatter screenshots do at mobile width.
3. **Decision / Impact / Options-considered as a repeating pattern is quietly excellent information architecture** — it teaches the reader how to parse a design decision (what happened, why, what else was on the table) without ever stating the framework explicitly.

## Priority Issues

**[P1] Body copy runs well past the system's own documented line-length standard.**
- **Why it matters:** DESIGN.md specifies Lead copy capped "≈46–65ch." The detector measured live-DOM `.cs-body` at ~105 chars/line, `.cs-decision` at ~112, `.cs-options` at ~119 — all roughly double the system's own target, in Context and Challenges 1–2's text columns specifically (Challenge 3 no longer applies, see correction note above). Longer lines force the eye to work harder tracking back to the line start, adding reading fatigue exactly where the case study is trying to land its strongest claims.
- **Fix:** Add a `max-width` (~65ch) to `.cs-body`, `.cs-decision`, and `.cs-options` inside `.cs-split__right` / `.cs-challenge__text`, without touching the media columns.
- **Suggested command:** `/impeccable typeset` or `/impeccable layout`

**[P2] Challenge 3's second stacked screenshot is likely too small to read at real mobile width.**
- **What:** At 375px viewport, `.cs-challenge__media--stack` (now the right-hand media column, collapsing to full width on mobile) renders `passkeys-login-settings.png` — a dense-UI screenshot (Profile/Security/Passkeys/"iCloud Keychain, Last used"/Revoke) — at roughly 5.5x smaller than its native 1627×1001px resolution.
- **Why it matters:** The PRODUCT.md persona (hiring managers "scanning quickly," plausibly on a phone) is exactly the reader least likely to pinch-zoom a screenshot to read its fine print — the visual evidence for the "management and security controls" impact claim loses its legibility for the reader in the most hurry.
- **Fix:** Crop the source screenshot tighter to the Security section the caption calls out, before compositing it into the laptop+phone mockup, so the relevant text stays legible at a smaller render size.
- **Suggested command:** `/impeccable adapt`

**[P3] The Validation section's autoplaying video has an intermittent blank-white mid-clip frame.**
- **What:** `passkeys-login-movie.mp4`'s poster frame (t=0) is clean, but a specific mid-playback frame shows a blank white void on the right half of the composite. Baked into the source video, not a template/CSS bug.
- **Why it matters:** Easy to miss since the clip loops past it, but a stress-tester or an unlucky screenshot moment would catch it.
- **Fix:** Re-export the source clip past that frame, or trim/re-encode.
- **Suggested command:** `/impeccable harden`

**[P3] Mobile subnav tab strip clips at the right edge.**
- **What:** At 375px width, the section tab strip ("Summary Context Challenges Exploration Validation Outcome Reflection") overflows its row and visibly clips the last item ("Valida…").
- **Why it matters:** Reads as a layout break at a glance, even if the strip is intentionally horizontally scrollable — there's no visible affordance (arrow, fade edge) signaling "more tabs this way" at this width.
- **Fix:** Confirm the strip scrolls; if so, add a clearer scroll affordance (edge fade or chevron) at narrow widths.
- **Suggested command:** `/impeccable adapt`

**[P3] "Impact ·" paragraph in Challenge 3 has no extra visual separation from "Decision ·" above it.**
- **What:** Both share the plain `.cs-decision` paragraph spacing, so Impact — the challenge with the case study's strongest "I created scope and got leadership buy-in" claim — reads as a continuation of Decision rather than its own beat.
- **Why it matters:** Slightly undersells the one moment in the page with the most compelling behind-the-scenes story.
- **Fix:** Add 8–12px `margin-top` where an Impact line follows a Decision line, matching the breathing room already given to `.cs-options`.
- **Suggested command:** `/impeccable layout`

## Persona Red Flags

**PRODUCT.md's actual persona (hiring manager/recruiter, scanning fast, plausibly on a phone, comparing candidates):**
- If evaluating on a phone, Challenge 3's second stacked screenshot is illegible at native render size (P2 above) — the least-patient reader loses the visual evidence for exactly the claim that shows the most initiative (surfacing unscoped work, winning leadership buy-in).
- The page's own line-length runs long throughout (P1) — a reader "scanning quickly" is the reader least tolerant of extra reading friction.

**Riley (Deliberate Stress Tester — narrow viewports, edge cases):**
- Would hit the mobile subnav clipping (P3) immediately, since testing exactly these edge widths is Riley's whole method — and would likely try tabbing/swiping to check whether it's genuinely scrollable, which isn't visually signaled either way.

## Minor Observations

- No console errors or broken asset requests anywhere on the page, either theme, all three breakpoints tested.
- Heading structure is clean: single H1, logically nested H2/H3, no skipped levels.
- `:focus-visible` is implemented correctly (2px accent outline, 3px offset) — only activates on real keyboard navigation, not programmatic `.focus()` calls, which is correct spec behavior, not a bug.
- One swapped Challenge-3 screenshot (`passkeys-login-settings.png`) contains a placeholder-text typo baked into the screenshot itself ("loreum ipsum" instead of "lorem ipsum") — trivial, inside a product screenshot rather than this designer's own copy; worth a note only if that asset gets touched again.

## Questions to Consider

1. Given the detector's own line-length rule and DESIGN.md's documented 46–65ch target agree almost exactly on the same problem, is the current uncapped measure on `.cs-body`/`.cs-decision`/`.cs-options` a deliberate choice anywhere, or just an oversight that should be fixed site-wide (it likely affects the other two case studies too, not just this one)?
2. Now that Challenge 3 matches Challenges 1–2's side-by-side pattern, is there a house-style worth writing down — e.g., "always use a device-frame mockup, never a flat dense-UI crop" — given how much more legible the bezeled screenshots are at every breakpoint compared to the flatter ones?
