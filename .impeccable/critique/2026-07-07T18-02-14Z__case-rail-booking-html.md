---
target: SAP Concur case study (case-rail-booking.html)
total_score: 24
p0_count: 0
p1_count: 2
timestamp: 2026-07-07T18-02-14Z
slug: case-rail-booking-html
---
# Critique — SAP Concur Rail Booking case study (`case-rail-booking.html`)

Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Scrollspy subnav (`aria-current` + underline), back-to-top with band-aware color swap. Solid. |
| 2 | Match System / Real World | 3 | Plain traveler language, but "policy-forward without policy-punishing" trades clarity for cleverness. |
| 3 | User Control and Freedom | 4 | Sticky subnav, back-to-top, skip-link, back-to-home all present. |
| 4 | Consistency and Standards | 3 | Consistent — but *too* rigidly identical 01–07 template across three differently-shaped case studies. |
| 5 | Error Prevention | n/a | Static content page, no user input. |
| 6 | Recognition Rather Than Recall | 4 | Sticky subnav means reader never has to remember location. |
| 7 | Flexibility and Efficiency | 2 | No fast path to metrics beyond subnav; mobile subnav clips mid-word (see P3). |
| 8 | Aesthetic and Minimalist Design | 4 | One accent held in both themes, no boxed buttons, soft ambient shadows, generous whitespace. |
| 9 | Error Recovery | n/a | No forms / destructive actions. |
| 10 | Help and Documentation | n/a | Not applicable to a static case-study page. |
| **Total** | | **24/28 scored** | **Good — 3 heuristics n/a** |

## Anti-Patterns Verdict

**LLM assessment:** The prose does *not* read as AI boilerplate — specific numbers, real quotes, named tradeoffs. The real tell is structural: the **01–07 numbered section markers run through every section and are identical across all three case studies** (confirmed in `case-content.js`). Removing the numbers loses no information — the sequence isn't load-bearing. This is exactly the "numbered section markers as default scaffolding" pattern the project's own design system prohibits. Secondary tell: the "Decision · / Options considered ·" block repeats with mechanically identical shape (always exactly 3 rejected alternatives, semicolon list, no elaboration) across all three challenges — reads as a rubric being filled in by challenge 2.

**Deterministic scan** (`detect.mjs`, exit 2, 3 findings):
- `numbered-section-markers` (advisory): sequence 01–06 — **agrees** with the review's central finding.
- `em-dash-overuse` (warning): 24 em-dashes — **agrees** with a stylistic tic the reviewer independently flagged across the whole site.
- `single-font` (warning): **FALSE POSITIVE.** Static scanner missed `Spectral` (applied via CSS class, not inline). Browser-computed styles confirm two families: Spectral serif for headings, Hanken Grotesk for body. Dismissed.

**Browser overlay** (injected detector, 5 findings): confirmed `repeated-section-kickers` (9 occurrences), `hero-eyebrow-chip`, `tight-leading` on the exploration statement (line-height 1.20 vs. 1.3 target — borderline; 1.2 is the intended `statement` style), and **two `low-contrast` findings on the Outcome band (1.0:1)** — see reconciliation below.

**Contrast conflict — reconciled:** Detector B reported outcome-band text `#0e1416` on `#15120d` = **1.0:1 (invisible)**. Review A measured the same band at **~5.3:1 (clears AA)**. The detector sampled the wrong background — the page bg `#15120d` — instead of the section's actual mint band `oklch(0.62 0.09 179)` ≈ `#3D9887` (it couldn't resolve the oklch-painted section background). Text `#0e1416` on `#3D9887` computes to ~5.1–5.3:1, clearing AA. **Verdict: likely false positive.** Given the page is literally about accessibility, a 30-second manual confirm in dark theme is worth it — but the code appears correct.

## Overall Impression

A strong, senior-level case study — genuinely restrained, one accent held cleanly per theme, clean heading hierarchy, and a real story at its center. It clears the bar. The biggest opportunity isn't visual: it's that **the rewrite peaks in the middle and fades**, and in tightening the prose it **quietly deleted the exact seniority/collaboration signals a Staff-level recruiter scans for** — signals the older Tilda version still carries.

## What's Working

1. **Decision / Options-considered framing.** "Here's what I decided, here's what I rejected" is a genuinely senior move — it shows judgment, not just output. The single best structural choice on the page, and new versus the old version.
2. **The Validation section has a real turn.** Stakeholder pushback ("Does everything need to be tabbed?") → going around the conference-room debate to interview real users → the surprising guide-dog/table-seat finding → that finding reorders engineering priority. That's a story. It's the intellectual and emotional peak.
3. **Restraint is executed, not just claimed.** One accent per theme verified in both light (terracotta) and dark (mint) with no bleed; body/heading contrast measured 8–12:1; no boxed buttons; soft ambient shadows per the token system.

## Priority Issues

**[P1] The rewrite deleted the seniority/collaboration signals — and created a scope inconsistency with your live Tilda case study.**
- *What:* The old version explicitly claims (a) partnering with a **UX research team** in analysis workshops, (b) **mentoring and delegating to a junior designer** with feedback, and (c) shipping **"Concur's first interactive rail seat selection map."** The new copy presents everything as solo ("I ran…", "I interviewed…", "My documentation…") and drops the "first" claim entirely.
- *Why it matters:* "Led research alongside a research org" and "mentored a junior designer" are precisely the leadership signals a Senior/Lead/Staff recruiter hunts for — and the tighter rewrite removed both. Worse, it's a *live inconsistency*: a recruiter cross-referencing your Tilda site or LinkedIn sees a team-and-mentorship story there and a solo story here. Scope mismatches erode interview trust faster than anything.
- *Fix:* Reintroduce one research-collaboration beat and one mentorship beat (Validation or Reflection), in the new confident voice. Restore the "first interactive rail seat map at Concur" framing somewhere — it's a strong, specific ownership claim.

**[P1] The Reflection is generic — a weak landing after a strong peak.**
- *What:* "Four stakeholders pulled this design in four directions… finding the arrangement that honored all of them" is abstract platitude, and "accessibility forced better design decisions" is near-cliché in accessibility case studies.
- *Why it matters:* Peak-end rule — the last thing a hiring manager reads is the Reflection, and right now the page peaks at Validation and tapers. The specific, human guide-dog insight that made Validation memorable is abandoned by the close.
- *Fix:* Land the ending on the specific lesson — what the guide-dog finding taught you about not trusting accessibility assumptions — not the generic "stakeholders wanted different things."

**[P2] WCAG 2.1 AA is asserted, not demonstrated — ironic on an accessibility case study.**
- *What:* Outcome says "validated against WCAG 2.1 AA" with zero technique trail. The old Tilda version listed concrete receipts (4.5:1 contrast, tab read order, semantic headings, ARIA usage, 200% zoom, minimum font size).
- *Why it matters:* Your brand principle is "craft is demonstrated, not narrated." Sam — the accessibility-dependent persona, and the one most likely to read this page skeptically — wants the receipts, and they're the exact receipts the rewrite dropped. A pasted "AA compliant" claim is what every candidate writes.
- *Fix:* Cash in the evidence already on the page — the Challenge 2 image *is* tab-flow documentation; reference it in body copy. Or cite one concrete technique. Or soften the claim.

**[P2] The template tell: 01–07 scaffolding + the identical "Options considered" formula.**
- *What:* Numbered section markers on every section, identical across three case studies; the three challenges each end with an exactly-3-item rejected-options list in identical format. Detector, browser overlay, and design review all independently flagged this.
- *Why it matters:* Jordan (recruiter skimming multiple tabs) clocks the sameness faster than a single-page reader. Formula reads as "process performed for the case study," not "process that happened" — and it violates your own design system's ban on numbered-section scaffolding.
- *Fix:* Drop the top-level 01–07 (keep Challenge 1/2/3 — that's a genuine enumerated list). Vary the options-considered depth: let one challenge add a clause on *why* an alternative was rejected, breaking the rhythm.

**[P3] Mobile subnav clips mid-word; and the most novel work is never shown.**
- *What:* At 375px the subnav tab strip clips — "Validation" is cut to "Valida" — with only a subtle fade+chevron signalling horizontal scroll (browser evidence). Separately, Challenge 2's differentiating claim (a dual-mode map *and* accessible list) is described but the image shows tab-flow docs, not the list-mode UI. (Browser also observed a possible back-to-top label overlapping paragraph text at mobile — low confidence, worth a manual check.)
- *Why it matters:* Casey (mobile) may not discover the strip scrolls; and the single most impressive artifact on the page — the accessible list mode — is asserted but never visualized on a portfolio whose whole pitch is "the work speaks."
- *Fix:* Strengthen the horizontal-scroll affordance (or wrap/shrink the strip) at ≤400px; swap in a screenshot of the shipped list-mode UI if one exists.

## Persona Red Flags

**Jordan (recruiter skimming ~20s):** Summary card front-loads role + capabilities + 3 outcomes — works well. But skimming *headers alone* gives zero differentiation (every case study has identical 01–07 headers), and the best proof point (guide-dog finding) is buried in paragraph 4 of the densest section, not surfaced in a callout or the Summary card.

**Sam (accessibility-dependent — maximally relevant):** Clean h1→h2→h3, strong descriptive alt text, skip-link correctly implemented. But Sam is the exact reader who wants the AA *receipts* the page dropped — the compliance claim is asserted, not argued (see P2).

**Casey (mobile):** Summary/chips/outcomes stack cleanly, no page overflow. But the subnav clips mid-word with a weak scroll affordance, and the mobile header drops the "Case Study" label (relying on the back-arrow breadcrumb alone).

## Cognitive Load

Strong overall: single focus per section, chunking consistently ≤4 (3 challenges, 3 metrics, 3 chips), clean visual hierarchy, sticky subnav removes working-memory load, good progressive disclosure in the challenge cards. **One soft spot:** Validation is four consecutive body paragraphs + pull quote + full-width image — the densest, least-chunked section on a page that's otherwise disciplined.

## Emotional Journey

Confident hook → methodical rising tension through Challenges → **peak at Validation** (the guide-dog story) → then a **dead spot at the Outcome→Reflection transition**: metrics recited with no bridge sentence connecting the guide-dog insight to the 35% error drop, then a generic Reflection. The page peaks in the middle and fades rather than building to a quieter second payoff at the end.

## Minor Observations

- Em-dash parenthetical construction repeats across sections and all three case studies — a single-voice tic worth varying (detector: 24 em-dashes).
- Quote attribution is bare "— usability session participant"; a light profile ("frequent business traveler") would make the human validation more concrete.
- "The data model held across all rail operators in the initial launch set" — "initial launch set" reads slightly hedgy; invites an interview follow-up.
- `tight-leading` on the exploration statement (line-height 1.20) is borderline vs. the 1.3 target, but it's the intended `statement` type style — low priority.
- Metrics are **consistent** across both portfolio versions (20% bookings, 35% error reduction, Air-team adoption) — good; no numeric discrepancy.

## Questions to Consider

1. If all three case studies use identical 01–07 scaffolding, what is the numbering doing for the reader that a well-designed layout wouldn't — is the story a sequence, or was it just easier to template?
2. Why does the page peak in the middle (guide-dog finding) and taper through Outcome/Reflection instead of building toward that story as the ending?
3. The Tilda version claims a research-team partnership and mentoring a junior designer; the rewrite reads as solo. Was that cut for tightness, or does it now *understate* the exact seniority signal a Staff hiring manager is looking for?
4. If accessibility is the headline expertise here, why is the proof (contrast, tab order, zoom) thinner than the version you already have live?
