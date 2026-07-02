/* ============================================================
   Case Study Content — all three case study pages as data.
   Editing words here never touches the template markup.
   ============================================================ */

window.CaseContent = {

  'brand-governance': {
    meta: { client: 'MoxiWorks', slug: 'brand-governance' },
    nav: ['Summary', 'Context', 'Challenges', 'AI Exploration', 'Validation', 'Outcome', 'Reflection'],
    next: { label: 'Passwordless Authentication', href: 'case-passkeys.html' },

    summary: {
      number: '01',
      client: 'MoxiWorks',
      theme: 'Organizational Complexity',
      title: 'Designing Brand Governance for Enterprise Scale',
      question: 'How do you help thousands of agents stay on brand without relying on manual processes?',
      role: 'Senior Product Designer — strategy, IA, interaction design, customer validation',
      capabilities: ['Product Strategy', 'Enterprise SaaS', 'Systems Thinking', 'Information Architecture', 'AI-assisted Design', 'Customer Validation'],
      outcomes: [
        'Centralized brand management for thousands of agents into a single source of truth.',
        'Introduced reusable Style Kits consumed across multiple RISE products.',
        'Replaced manual brand policing with a scalable, governed system.',
      ],
    },

    context: {
      number: '02',
      label: 'Context',
      headline: 'Why this project existed',
      body: [
        'MoxiWorks serves real-estate brokerages whose brands live across hundreds of offices and thousands of agents. As the RISE product ecosystem grew, each product solved branding its own way — no shared system, no consistency, no governance.',
        'The result was brand drift at scale. Admins spent hours manually reviewing assets. Agents worked around controls. New products duplicated the problem rather than inheriting a solution.',
      ],
    },

    challenges: {
      number: '03',
      label: 'Challenges',
      intro: 'Four problems that defined the work',
      body: 'Rather than walk through a timeline, the story is organized around the decisions that mattered — the problem, the options, and the reasoning behind each one.',
      items: [
        {
          number: 1,
          headline: 'Making the organizational hierarchy understandable',
          body: 'Brands cascade through broker → office → team → agent, each level needing to inherit or override. Exposed naively, that hierarchy overwhelmed admins.',
          options: 'Options considered · a flat list of all brands; an explicit org tree; an inheritance model with visible overrides.',
          decision: 'An inheritance model that shows what is inherited and what can be overridden — presenting the hierarchy rather than hiding it.',
        },
        {
          number: 2,
          headline: 'Packaging brand into something agents can apply',
          body: 'Agents needed brand-correct assets without becoming designers. Defining brand once had to produce consistent outputs everywhere it was consumed.',
          options: 'Options considered · per-asset templates; a raw token system; packaged Style Kits.',
          decision: 'Reusable Style Kits that bundle logos, color, type, and rules into a single applied unit — the source of truth other products read from.',
          image: { src: 'images/case-studies/brand-gov-style-kits.png', w: 1440, h: 1266, alt: 'Style Kit editor — color tokens, typography tokens, and logo assets bundled into a shareable kit', caption: 'Style Kits — color, type, and logo bundled into one applied unit' },
        },
        {
          number: 3,
          headline: 'Defining what admins control versus what agents control',
          body: 'Too much admin control creates friction for agents. Too little creates brand drift. The line needed to be explicit, not emergent.',
          options: 'Options considered · full admin lock; full agent freedom; explicit lock/unlock per element.',
          decision: 'A permission layer where admins lock the elements that matter and unlock the rest — making control visible and intentional.',
          image: { src: 'images/case-studies/brand-gov-color-permissions.png', w: 1440, h: 1012, alt: 'Brand Library color editing panel with a locked primary color — admin-controlled elements made visible', caption: 'Locked brand elements — admin control made visible' },
        },
        {
          number: 4,
          headline: 'Architecting for the platform, not the page',
          body: 'Whatever shipped had to be consumed by many RISE products, not just one screen. The model needed to hold up as the ecosystem grew.',
          options: 'Options considered · a standalone branding tool; a branding service and Style Kit pattern other products subscribe to instead of rebuilding.',
          decision: 'A platform capability — branding as a shared service the ecosystem reads from, not a per-product feature that gets rebuilt.',
          image: { src: 'images/case-studies/brand-gov-text-styles.png', w: 1440, h: 1010, alt: 'Brand Library screen managing governed text styles — name, family, fallback font, and tags', caption: 'Brand Library — the shared source products read from' },
        },
      ],
    },

    aiExploration: {
      number: '04',
      label: 'AI Exploration',
      headline: 'Wider exploration, faster alignment',
      body: [
        'I used Figma Make to rapidly generate multiple organizational models for how brands could inherit settings across the hierarchy — broker, office, team, agent. Generating working variations in hours rather than days let me compare structures side by side and bring stakeholders into the tradeoffs with something concrete to react to.',
        'AI increased the breadth of exploration; it didn’t replace the design thinking. The judgment about which model held up under governance constraints, and which would confuse admins, stayed firmly a design decision.',
      ],
    },

    validation: {
      number: '05',
      label: 'Validation',
      headline: 'Testing with real admins and agents',
      body: [
        'I ran structured sessions with brokers, office admins, and agents at different points in the process — once with rough concepts to pressure-test the inheritance model, and again with a higher-fidelity prototype to validate the Style Kit application flow.',
        'The sessions surfaced two things that changed the design: admins wanted to see which agents had applied a kit before publishing changes, and agents needed a clearer preview of what a kit would look like on their actual materials before committing.',
      ],
    },

    outcome: {
      number: '06',
      label: 'Outcome',
      headline: 'A foundation the ecosystem builds on',
      body: 'The work established branding as a governed platform capability rather than a per-product feature — setting the direction for how RISE products consume brand going forward.',
      impacts: [
        { label: 'Fewer manual brand reviews', desc: 'Reframed from "something we check" to "infrastructure we inherit," changing how Product and leadership scoped the work.' },
        { label: 'Style Kits adopted across multiple RISE products', desc: 'Style Kits became the pattern other products subscribe to instead of rebuilding their own branding solutions.' },
        { label: 'One hierarchy for thousands of agents', desc: 'Brand settings cascade broker → office → team → agent with visible overrides — one hierarchy the whole ecosystem shares.' },
      ],
    },

    reflection: {
      number: '07',
      label: 'Reflection',
      headline: 'What this project taught me',
      body: [
        'The hardest part wasn’t designing the UI — it was convincing the team that branding was an infrastructure problem, not a content problem. Once the framing shifted, every design decision became easier to defend.',
        'What carried forward: name the system before designing the screens. Every project since has started with the nouns — what inherits, what overrides, what owns the source of truth — and the interface questions get easier once those are right.',
      ],
    },

    caseFooter: {
      email: '1tadashi8@gmail.com',
      linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tad-natsuhara-design' },
      copyright: '© 2026 Tad Natsuhara',
    },
  },

  /* ------------------------------------------------------------------ */

  'passkeys': {
    meta: { client: 'lululemon', slug: 'passkeys' },
    nav: ['Summary', 'Context', 'Challenges', 'Exploration', 'Validation', 'Outcome', 'Reflection'],
    next: { label: 'Accessible Rail Booking', href: 'case-rail-booking.html' },

    summary: {
      number: '01',
      client: 'lululemon',
      theme: 'Behavioral Complexity',
      title: 'Designing a Passwordless Authentication Experience',
      question: 'How do you convince people to trust a sign-in method they’ve never used before?',
      role: 'Senior Product Designer — UX strategy, interaction design, accessibility, design systems',
      capabilities: ['Trust Design', 'Cross-platform UX', 'Accessibility', 'Design Systems', 'Product Collaboration'],
      outcomes: [
        '90% fewer password resets after passkey rollout.',
        'Delivered passkey sign-in across app, web, and in-store.',
        'Zero security breaches via phishing since launch.',
      ],
    },

    context: {
      number: '02',
      label: 'Context',
      headline: 'Why this project existed',
      body: [
        'Members sign in across the app, web, and in-store experiences. Passwords were the single biggest source of failed logins, abandoned carts, and support contacts — every reset was friction at the exact moment someone wanted to engage with the brand.',
        'Passkeys promised to remove that friction entirely while improving security. But nobody adopts an unfamiliar sign-in method just because it shipped — people had to be convinced it was safe, at the exact moment they were least patient.',
      ],
      images: [
        { src: 'images/case-studies/passkeys-personas.png', w: 1286, h: 490, alt: 'Three member personas — Sentiment & Efficiency, Product Education & Confidence, and Confidence — summarizing research going into the passkey rollout', caption: 'Member research — three primary personas' },
      ],
    },

    challenges: {
      number: '03',
      label: 'Challenges',
      intro: 'Three questions that shaped the design',
      body: 'The design problems weren’t about screens — they were about trust, timing, and clarity at moments of friction.',
      items: [
        {
          number: 1,
          headline: 'Introducing something unfamiliar without creating anxiety',
          body: 'Passkeys are safer and faster than passwords, but most people had never heard of them. Introducing a new mechanism at login — the highest-stakes moment in the experience — risked abandonment.',
          options: 'Options considered · silent rollout; opt-in prompt; explained introduction with progressive disclosure.',
          decision: 'A contextual introduction that explains what’s happening and why before asking anything — earning trust before requesting action.',
          image: { src: 'images/case-studies/passkeys-introduction.png', w: 1439, h: 1081, alt: 'lululemon sign-in screen with a "Use a Passkey" option and Face ID prompt', caption: 'Passkey introduction flow' },
        },
        {
          number: 2,
          headline: 'Designing for people who don’t fully understand biometrics',
          body: 'Face ID and Touch ID are familiar, but their relationship to account security isn’t. Many customers assumed biometrics replaced their password — not that they were the key.',
          options: 'Options considered · technical explanation; metaphor-first framing; show-don’t-tell interaction.',
          decision: 'A progressive disclosure pattern that shows the mechanism in action before explaining it — letting the experience teach rather than the copy.',
          image: { src: 'images/case-studies/passkeys-biometric-education.png', w: 1188, h: 819, alt: '"What is a Passkey?" education modal explaining Face ID and Touch ID security', caption: 'Biometric trust model' },
        },
        {
          number: 3,
          headline: 'Keeping the fallback from becoming the default',
          body: 'If the passkey flow felt uncertain, customers would retreat to passwords. The fallback had to exist without advertising itself as the safer choice.',
          options: 'Options considered · hide the fallback; deprioritize it visually; make it available but secondary.',
          decision: 'A visually secondary fallback that is discoverable but doesn’t compete — making passkeys feel like the obvious path without removing the escape hatch.',
          image: { src: 'images/case-studies/passkeys-management-security.png', w: 1168, h: 1034, alt: 'Account security settings showing passkeys alongside password manager fallback options', caption: 'Fallback flow design' },
          impact: 'The management and security controls weren’t on the roadmap. I surfaced the need through research and conversations with the dev team, built the case for it, and got cross-functional and leadership buy-in to ship create, remove, and manage controls.',
        },
      ],
    },

    aiExploration: {
      number: '04',
      label: 'Exploration',
      headline: 'Mapping the trust curve',
      body: [
        'I mapped the emotional journey from first encounter to confident use — identifying every moment where trust could be gained or lost. This let me prioritize which screens needed the most design attention and where copy was carrying more weight than the interaction.',
        'Rapid prototyping let me test the introduction flow with the team before investing in high fidelity. The early rounds surfaced that the animation sequence mattered as much as the copy — people understood passkeys better when they saw the device interaction before reading about it.',
      ],
    },

    validation: {
      number: '05',
      label: 'Validation',
      headline: 'Testing the trust model',
      body: [
        'I ran usability sessions focused on the moments of highest uncertainty: the initial introduction, the first-time setup, and recovery when something went wrong. Participants ranged from tech-comfortable to tech-avoidant.',
        'The sessions confirmed the progressive disclosure approach — participants who saw the interaction before the explanation consistently rated their confidence higher. They also surfaced a gap: customers needed reassurance that their old password still worked as a backup.',
      ],
      images: [
        { src: 'images/case-studies/passkeys-signin-hero.png', w: 1680, h: 1243, alt: 'lululemon x Peloton co-branded sign-in and create-account screen used in usability sessions', caption: 'Create-account screen used in testing' },
        { src: 'images/case-studies/passkeys-onboard-animation.gif', w: 1524, h: 1328, alt: 'Animated walkthrough of the passkey onboarding prompt on desktop and mobile', caption: 'Onboarding prompt — full flow' },
        { src: 'images/case-studies/passkeys-faceid-animation.gif', w: 1150, h: 1246, alt: 'Animated walkthrough of the Face ID setup and passkey confirmation screens', caption: 'Face ID setup — full flow' },
        { src: 'images/case-studies/passkeys-login-movie.mp4', poster: 'images/case-studies/passkeys-login-movie-poster.jpg', w: 960, h: 540, alt: 'Screen recording of the passkey login flow end to end', caption: 'Passkey login — full flow' },
      ],
      quote: { text: 'Sometimes it will forget what my password is, I have to type in my e-mail and send a link which I don’t like because then I have to exit and wait for the e-mail.', attribution: '— usability session participant' },
    },

    outcome: {
      number: '06',
      label: 'Outcome',
      headline: 'Confidence without complexity',
      body: 'Passkeys shipped across app, web, and in-store. The pattern established for this feature became the foundation for introducing other unfamiliar capabilities to a consumer audience.',
      impacts: [
        { label: '90% fewer password resets', desc: 'Removed the single biggest source of failed logins and support contacts, reframing authentication from a security checkbox into a trust-building moment.' },
        { label: 'Zero security breaches via phishing', desc: 'Passkeys removed the credential-phishing attack surface entirely — a security outcome, not just a UX one.' },
        { label: 'Cross-surface delivery', desc: 'Passkey sign-in delivered across app, web, and in-store with a consistent, reusable pattern the team applied to subsequent work.' },
      ],
    },

    reflection: {
      number: '07',
      label: 'Reflection',
      headline: 'What this project taught me',
      body: [
        'Authentication design is really trust design. The challenge wasn’t getting the interaction right — it was understanding what made people feel safe enough to try something new at the moment they were most likely to abandon.',
        'I came in expecting to design a faster login. What shipped was closer to a method: a repeatable way to introduce something unfamiliar to people who have every reason to be cautious.',
      ],
    },

    caseFooter: {
      email: '1tadashi8@gmail.com',
      linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tad-natsuhara-design' },
      copyright: '© 2026 Tad Natsuhara',
    },
  },

  /* ------------------------------------------------------------------ */

  'rail-booking': {
    meta: { client: 'SAP Concur', slug: 'rail-booking' },
    nav: ['Summary', 'Context', 'Challenges', 'Exploration', 'Validation', 'Outcome', 'Reflection'],
    next: null,

    summary: {
      number: '01',
      client: 'SAP Concur',
      theme: 'Interaction Complexity',
      title: 'Designing an Accessible Rail Booking Experience',
      question: 'How do you simplify one of the most information-dense experiences in travel?',
      role: 'Senior Product Designer — interaction design, accessibility, responsive UX',
      capabilities: ['Complex Interaction Design', 'Accessibility', 'Responsive UX', 'Enterprise Product Design'],
      outcomes: [
        '20% increase in completed bookings.',
        '35% reduction in seat selection errors.',
        'Components subsequently adopted by the Air seat map team.',
      ],
    },

    context: {
      number: '02',
      label: 'Context',
      headline: 'Why this project existed',
      body: [
        'SAP Concur’s rail booking experience handled complex routing, multi-leg journeys, and seat availability across dozens of rail operators — each with different data formats, seating models, and booking rules.',
        'The existing seat selection experience collapsed under that complexity. Business travelers — already navigating policy rules, approval workflows, and tight itineraries — hit an interface that required expertise they didn’t have to use.',
      ],
    },

    challenges: {
      number: '03',
      label: 'Challenges',
      intro: 'Three constraints that defined the design',
      body: 'Rail is the most information-dense booking surface in travel. Every design decision had to hold up under the data load.',
      items: [
        {
          number: 1,
          headline: 'Making seat data scannable, not just displayable',
          body: 'Seat selection data includes car type, seat class, direction of travel, table vs. window, reservation status, and accessibility needs — all variable by operator. Displaying it all created cognitive overload; hiding it caused misbookings.',
          options: 'Options considered · progressive disclosure by seat type; a filter-first approach; spatial representation with summary on selection.',
          decision: 'A spatial seat map with progressive detail — the map shows position, selection reveals the relevant attributes for that seat.',
          image: { src: 'images/case-studies/rail-seatmap-iteration.png', w: 1732, h: 742, alt: 'Seat-map design iterations across web and mobile, showing coach layout and seat-attribute detail', caption: 'Seat map spatial layout' },
        },
        {
          number: 2,
          headline: 'Designing for accessibility without removing capability',
          body: 'A visual seat map is inaccessible to screen reader users by default. But replacing it with a list loses the spatial understanding that helps travelers choose confidently.',
          options: 'Options considered · visual-only map; list alternative with no map; parallel accessible map with ARIA region labelling.',
          decision: 'A dual-mode design: a visual map with full ARIA semantics, plus a structured list mode that keyboard and screen reader users can switch to — same data, appropriate for each mode.',
          image: { src: 'images/case-studies/rail-a11y-documentation.png', w: 921, h: 1070, alt: 'Keyboard navigation order and tab-flow documentation for the seat map', caption: 'Accessibility dual-mode design' },
        },
        {
          number: 3,
          headline: 'Handling policy constraints without punishing the traveler',
          body: 'Corporate travel policies restricted certain seat classes, fare types, and booking windows. Surfacing policy violations after selection — the existing behaviour — was the primary source of rebooking.',
          options: 'Options considered · hide restricted seats; grey them with a tooltip; pre-filter to policy-compliant options with an override path.',
          decision: 'Pre-filter to compliant options by default, with a clear path to view all seats for travelers with a legitimate reason to override — policy-forward without policy-punishing.',
          image: { src: 'images/case-studies/rail-early-concepts.png', w: 1232, h: 903, alt: 'Early seat-selection concept screens used to test layout and seat-attribute clarity', caption: 'Policy constraint flow' },
        },
      ],
    },

    aiExploration: {
      number: '04',
      label: 'Exploration',
      headline: 'Mapping seat complexity',
      body: [
        'The seat data model varied significantly across rail operators. I mapped the full matrix of variables — car type, class, direction, reservation status, accessibility attributes — to find the minimum viable representation that worked across all operators without requiring operator-specific design.',
        'Rapid prototyping of the spatial layout let me test legibility at different data densities before committing to the ARIA implementation — a significant engineering investment that needed to be right before build began.',
      ],
    },

    validation: {
      number: '05',
      label: 'Validation',
      headline: 'Testing with business travelers',
      body: [
        'I ran sessions with frequent business rail travelers — people booking multi-leg journeys under policy constraints with limited time to make decisions. The sessions focused on seat selection time, confidence in the choice, and successful navigation by screen reader users.',
        'The dual-mode accessibility approach was validated in the first round — screen reader participants navigated the structured list without needing the map. The sessions also surfaced that travelers wanted to see their previously selected seats when returning from a policy override — a gap we closed before launch.',
        'Stakeholders pushed back on the accessibility investment early — "Does everything need to be tabbed? Can we skip some items?" Rather than debate it in a conference room, I interviewed visually impaired travelers directly.',
        'One finding reset our assumptions: guide dog owners consistently preferred table seats for the extra space on long journeys. That changed the screen-reader priority order and told us exactly which components were safe to skip. My documentation of the findings became the reference engineering built the implementation from.',
      ],
      image: { src: 'images/case-studies/rail-usability-study.png', w: 1198, h: 1137, alt: 'Unmoderated usability study report with participant notes, affinity mapping, and findings', caption: 'Usability validation sessions' },
      quote: { text: 'It was a bit hard to tell what each seat offers. I want to see options like power outlets or extra space right away, not guess.', attribution: '— usability session participant' },
    },

    outcome: {
      number: '06',
      label: 'Outcome',
      headline: 'Clarity inside complexity',
      body: 'The seat selection experience shipped across responsive breakpoints. Accessibility compliance was validated against WCAG 2.1 AA. The data model held across all rail operators in the initial launch set.',
      impacts: [
        { label: '20% increase in completed bookings', desc: 'Simplifying the most information-dense step in the flow reduced abandonment at seat selection.' },
        { label: '35% reduction in seat selection errors', desc: 'Pre-filtering to policy-compliant options and clarifying seat attributes reduced mis-selections and the rebooking they caused.' },
        { label: 'Adopted by the Air seat map team', desc: 'The spatial seat map and dual-mode accessibility pattern were subsequently reused outside rail — validation the model generalized beyond its original scope.' },
      ],
    },

    reflection: {
      number: '07',
      label: 'Reflection',
      headline: 'What this project taught me',
      body: [
        'Four stakeholders pulled this design in four directions — traveler, admin, policy team, rail operator — and each had a legitimate case. The work was finding the arrangement that honored all of them without asking anyone to compromise more than they had to.',
        'Accessibility forced better design decisions across the board. The structured list mode I built for screen reader users turned out to be what keyboard-only users preferred too — and it revealed information hierarchy problems in the visual map that I’d missed.',
      ],
    },

    caseFooter: {
      email: '1tadashi8@gmail.com',
      linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tad-natsuhara-design' },
      copyright: '© 2026 Tad Natsuhara',
    },
  },
};
