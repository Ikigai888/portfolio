# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences read this site, in this order of weight:

1. **Hiring managers and recruiters** across industries (enterprise SaaS, e-commerce, consumer tech, travel) evaluating Tad Natsuhara for Senior / Lead / Staff product design roles. They scan quickly, compare against other candidates, and look for evidence he can simplify complex systems regardless of domain, whether that is a multi-stakeholder enterprise workflow (MoxiWorks, SAP Concur) or a consumer trust moment (lululemon passkeys). Job to be done: assess credibility fast, then decide whether to reach out.
2. **Prospective consulting and fractional clients** evaluating whether to engage him on a scoped engagement. They are judging fit and risk rather than running a hiring loop, so what counts as proof differs.
3. **People assessing him as someone who ships his own products**, not only client work.

Breadth across company types is a strength to signal, not narrow away. Peers and the design community are not a target audience; process depth serves the three above rather than a craft readership.

## Product Purpose

A personal portfolio site presenting Tad's case studies, approach, and background as a product designer. The site itself is a design artifact: its own craft is evidence of his ability. Success looks like a reader finishing the homepage, trusting his judgment, and clicking through to a case study or the contact section.

## Positioning

He establishes patterns where none existed, rather than improving flows that already work. The load-bearing example is documented in the rail case: no interactive seat map existed at SAP Concur for rail or air, so there was no pattern to inherit and the project had to define one, and those patterns later shaped the Air team's work. The claim a neighboring portfolio cannot truthfully copy is not "shipped a better version of X" but "defined the primitive that others then inherited."

## Operating Context

- A single static site at <https://tadnatsuhara.com>, deployed to GitHub Pages on every push to `main`.
- The path is homepage, then one of three case studies, then contact. Readers commonly arrive from a link (LinkedIn, an application, a referral) rather than search, and often mid-comparison against other candidates.
- Case studies are long-form and structured for two reading depths: a summary card carrying role and outcomes up front, then seven navigable sections (Summary, Context, Challenges, Exploration, Validation, Outcome, Reflection) behind a sticky subnav.
- Light theme is canonical with a dark sibling; first visit follows OS preference.

## Capabilities and Constraints

- Plain HTML, CSS, and JS. No framework, no bundler, no server-side runtime.
- Content is data, not markup: `js/content.js` (homepage) and `js/case-content.js` (case studies) feed component functions in `js/components.js`, assembled by `js/app.js` and `js/case-template.js`. Copy is edited in the `*-content.js` files, never in the HTML.
- `npm run build` pre-renders that data into complete static HTML inside each page's `BUILD:START`/`BUILD:END` block, so crawlers and no-JS clients see full content. The generated HTML is committed; there is no server-side build.
- Script and style tags carry a `?v=N` cache-busting param that must be bumped across all five HTML files whenever anything in `js/` or `css/` changes.
- Three case studies exist today: `rail-booking` (SAP Concur), `passkeys` (lululemon), `brand-governance` (MoxiWorks).

## Brand Commitments

- **Name and mark:** Tad Natsuhara; the hand-lettered TN wordmark (`images/TN_Port_Logo.png`) is the identity asset.
- **Personality:** confident and understated, warm and approachable. Quiet authority, where the work and the writing carry the weight rather than visual gimmicks or aggressive self-promotion. Friendly enough that a recruiter does not feel marketed at, precise enough to read as senior-level craft.
- **Voice:** write the way a senior designer talks to a peer. Clear, specific, no jargon padding.
- **No em-dashes in visible site copy.** Use a period, comma, colon, or parentheses, or rewrite the sentence. En-dashes in numeric ranges are fine. This is binding on all published copy.
- **Anti-references:** the generic AI-template and cookie-cutter SaaS-landing look. No purple gradients, interchangeable hero sections, generic stock photography, or trend-chasing glassmorphism. Nothing that reads as templated rather than authored.
- The committed visual world is "Editorial Restraint." Its specifics (palette, type pairing, tokens, components) are owned by DESIGN.md, not this file.

## Evidence on Hand

**Real and usable:**
- Three case studies drawn from actual employed work, with process artifacts: product screenshots, annotated keyboard tab-order documentation, and a usability-testing walkthrough video (`images/case-studies/`). Content lives in `js/case-content.js`.
- Portrait (`images/portrait.jpg`) and the TN wordmark (`images/TN_Port_Logo.png`).

**Constrained:**
- **Outcome metrics are directional.** Figures such as the 20% increase in completed bookings and 35% reduction in seat selection errors are real but estimated or internal. Future work must keep the existing phrasing and must never sharpen them into harder claims, add decimal precision, or restate them as audited or third-party-verified results.
- **The source PRDs behind the brand-governance case are unpublished.** They live in `reference/` (gitignored), are the factual source of truth for that case's claims about hierarchy levels, feature scope, named risks, and personas, and must never be committed, published, or quoted verbatim.

**Absent, and never to be fabricated:**
- No testimonials, client quotes, endorsements, press coverage, awards, or speaking credits exist. Future work must not invent them, and must not use client logos in a way that implies endorsement, to fill a proof gap.

## Product Principles

1. **The site is the primary work sample.** Its own craft is the argument, so shipped quality is a product requirement rather than optional polish. A visible defect costs more here than on an ordinary marketing page.
2. **Every section must make a reader trust the work faster**, not merely look nicer. A section that does not move that needle is a candidate for cutting.
3. **Claims stay at the resolution of their evidence.** Directional stays directional, absences are stated rather than filled, and no proof is manufactured to strengthen a page.
4. **Breadth across company types and domains is signal.** Resist narrowing the story to one industry to make it tidier.
5. **Serve the scanner and the deep reader with one artifact.** Outcomes are legible in seconds; the full reasoning is available to anyone who keeps going. Neither audience is asked to work for the other.

## Accessibility & Inclusion

Standard baseline: WCAG 2.1 AA contrast (4.5:1 body text, 3:1 large text), keyboard-navigable, respects `prefers-reduced-motion`. No additional unusual requirements specified.
