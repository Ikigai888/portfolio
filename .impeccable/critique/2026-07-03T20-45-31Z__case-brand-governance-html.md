---
target: case-brand-governance.html
total_score: 34
p0_count: 1
p1_count: 2
timestamp: 2026-07-03T20-45-31Z
slug: case-brand-governance-html
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Scrollspy underlines the active subnav section correctly on scroll. |
| 2 | Match Between System & Real World | 4 | "Options considered → Decision" framing mirrors how a real design review runs. |
| 3 | User Control and Freedom | 3 | No mid-page escape hatch on a long scroll — only header/footer links. |
| 4 | Consistency and Standards | 3 | Embedded product screenshots break the system's own one-accent rule. |
| 5 | Error Prevention | 4 (n/a) | Static content, nothing to prevent. |
| 6 | Recognition Rather Than Recall | 3 | No progress marker beyond the subnav underline across 7 sections. |
| 7 | Flexibility and Efficiency of Use | 3 | Subnav supports fast scanning, but no skip-to-Outcome CTA for impatient reviewers. |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained everywhere except the challenge screenshots, which are visually loud. |
| 9 | Error Recovery | 4 (n/a) | No error states on a static page. |
| 10 | Help and Documentation | 3 (n/a-leaning) | "Options considered" text substitutes for inline rationale appropriately. |
| **Total** | | **34/40** | **Good** |

## Anti-Patterns Verdict

**LLM assessment**: Not AI slop. Bespoke layout, an authored voice, and a genuinely polished scrollspy subnav. The one seam: the three embedded product screenshots (Challenges 1, 2, 4) show light-mode UI with blue accent chips sitting inside warm-dark cards, the only place a second saturated hue appears anywhere on the page.

**Deterministic scan**: 3 CLI findings on case-brand-governance.html (exit 2): single-font, em-dash-overuse (18 instances), numbered-section-markers (advisory). single-font is a false positive (HTML-only scanner missed --font-sans: Bricolage Grotesque wired through a CSS custom property). numbered-section-markers is a deliberate walked narrative sequence, not scaffolding (tool scored it "advisory," lowest tier). em-dash-overuse is real and unexcused - independently re-confirms a finding already known and deliberately left alone as established authorial voice across all three case studies.

**Browser overlay**: Injection succeeded, server cleanly stopped after. Re-surfaced the numbering pattern as repeated-section-kickers (same false-positive reasoning) and flagged a low-contrast reading on .cs-outcome__headline/.cs-outcome__body at 1.0:1. Independently verified via live computed styles: headline renders rgb(14,20,22) on the section's actual background oklch(0.62 0.09 179) (#3D9887), which computes to ~5.3:1, matching DESIGN.md's documented figure exactly. Detector-tooling artifact, not a real defect.

## Overall Impression

Well-crafted, doesn't read as AI-generated. Strongest asset: "Options considered → Decision" pattern. Two fixable gaps: no keyboard focus states anywhere, and product screenshots breaking the one-accent rule.

## What's Working

- "Options considered → Decision" pattern across all four challenges — shows process, not just outcome.
- Outcome band color-block — the one moment the mint accent goes bold, reserved for the payoff section.
- Scrollspy subnav — aria-current + underline + auto-scroll-into-view, genuinely polished engineering.

## Priority Issues

**[P0] Mobile hero eyebrow line-wraps and orphans the middot.** .cs-summary__eyebrow (css/case.css, flex-wrap: wrap) breaks "01 · MOXIWORKS · ORGANIZATIONAL COMPLEXITY" across two lines at 375px, stranding a lone "·" on its own line.
Why it matters: Undercuts "quiet authority" positioning before a single line of copy is read.
Fix: flex-wrap: nowrap with graceful truncation, or restructure into two intentional stacked lines.
Suggested command: /impeccable polish

**[P1] No visible keyboard focus state anywhere on the page.** .case-header__nav-link:focus has outline: none, no box-shadow, no fallback. Every link is keyboard-invisible.
Why it matters: Real WCAG 2.4.7 failure.
Fix: Global :focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
Suggested command: /impeccable harden

**[P1] Product screenshots break the One Accent Rule.** brand-gov-text-styles.png, brand-gov-style-kits-2.png, brand-gov-agent-style-switcher.png show light-mode UI with blue chips/buttons, the only second saturated hue on the entire page.
Why it matters: It's the site's own stated defect condition, on its own case study.
Fix: A dark treatment frame/mat around each screenshot, or tighter crops to reduce blue surface area.
Suggested command: /impeccable colorize or /impeccable polish

**[P2] Challenge 3 assumes retained context.** Leans on Challenge 2's "Style Kit" term without restating it.
Fix: One clause reminder ("the moment Style Kits cascaded automatically").
Suggested command: /impeccable clarify

**[P3] No back-to-top / quick-exit affordance across 7 sections.**
Suggested command: /impeccable layout

## Persona Red Flags

**Riley (stress tester)**: Tabs through keyboard-only, hits the P1 focus failure immediately, abandons keyboard navigation within a few tabs.
**Casey (mobile)**: Sees the broken eyebrow line within 2 seconds of landing, before reading a word of copy.
**Jordan (first-timer)**: "RISE product ecosystem" is never defined, has to infer it purely from repetition.

## Minor Observations

- Footer copyright text computes to ~4.7:1, passes AA but sits right at the edge.
- The "Options considered" middot-run-on sentence structure repeats identically across all 4 challenges.
- cs-challenge__inner--solo exists in the CSS but isn't exercised anywhere in this case study.

## Questions to Consider

1. Should the product screenshots be reframed so they read as "evidence inside the story" rather than "pasted-in dashboard"?
2. Would the case study feel more confident if one other moment also broke the split-column pattern, or does restraint elsewhere make the Outcome band's payoff bigger by contrast?
3. Is 7 full sections the right depth, or would a one-line TL;DR pinned near the hero shave time-to-credibility-assessment further?
