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
      project: 'Self-service brand governance platform across the RISE ecosystem',
      role: 'Lead Product Designer — strategy, IA, interaction design, customer validation',
      outcome: 'A governed branding capability, consumed by multiple products',
      capabilities: ['Product Strategy', 'Enterprise SaaS', 'Systems Thinking', 'Information Architecture', 'AI-assisted Design', 'Customer Validation'],
      outcomes: [
        'Centralized brand management into a single source of truth.',
        'Introduced reusable Style Kits consumed across RISE products.',
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
          image: { alt: 'Hierarchy & inheritance model', caption: 'Hierarchy & inheritance model' },
        },
        {
          number: 2,
          headline: 'Packaging brand into something agents can apply',
          body: 'Agents needed brand-correct assets without becoming designers. Defining brand once had to produce consistent outputs everywhere it was consumed.',
          options: 'Options considered · per-asset templates; a raw token system; packaged Style Kits.',
          decision: 'Reusable Style Kits that bundle logos, color, type, and rules into a single applied unit — the source of truth other products read from.',
          image: { alt: 'Style Kit system', caption: 'Style Kit system' },
        },
        {
          number: 3,
          headline: 'Defining what admins control versus what agents control',
          body: 'Too much admin control creates friction for agents. Too little creates brand drift. The line needed to be explicit, not emergent.',
          options: 'Options considered · full admin lock; full agent freedom; explicit lock/unlock per element.',
          decision: 'A permission layer where admins lock the elements that matter and unlock the rest — making control visible and intentional.',
          image: { alt: 'Permission model', caption: 'Permission model' },
        },
        {
          number: 4,
          headline: 'Architecting for the platform, not the page',
          body: 'Whatever shipped had to be consumed by many RISE products, not just one screen. The model needed to hold up as the ecosystem grew.',
          options: 'Options considered · a standalone branding tool; a branding service and Style Kit pattern other products subscribe to instead of rebuilding.',
          decision: 'A platform capability — branding as a shared service the ecosystem reads from, not a per-product feature that gets rebuilt.',
          image: { alt: 'Platform architecture diagram', caption: 'Platform architecture diagram' },
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
      image: { alt: 'Customer validation sessions / before-after iteration', caption: 'Customer validation sessions / before–after iteration' },
    },

    outcome: {
      number: '06',
      label: 'Outcome',
      headline: 'A foundation the ecosystem builds on',
      body: 'The work established branding as a governed platform capability rather than a per-product feature — setting the direction for how RISE products consume brand going forward.',
      impacts: [
        { label: 'Brand infrastructure', desc: 'Reframed from "something we check" to "infrastructure we inherit," changing how Product and leadership scoped the work.' },
        { label: 'Style Kit adoption', desc: 'Style Kits became the pattern other products subscribe to instead of rebuilding their own branding solutions.' },
        { label: 'Platform scalability', desc: 'A governed branding service other products read from rather than rebuild — a structure the whole ecosystem now shares.' },
      ],
    },

    reflection: {
      number: '07',
      label: 'Reflection',
      headline: 'What this project taught me',
      body: [
        'The hardest part wasn’t designing the UI — it was convincing the team that branding was an infrastructure problem, not a content problem. Once the framing shifted, every design decision became easier to defend.',
        'The biggest shift was organizational: helping the team see brand not as a thing you check, but as infrastructure you inherit. Once that framing landed, the right product decisions became much easier to make.',
      ],
    },

    caseFooter: {
      email: '1tadashi8@gmail.com',
      linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      copyright: '© 2026 Tad Natsuhara',
    },
  },

  /* ------------------------------------------------------------------ */

  'passkeys': {
    meta: { client: 'lululemon', slug: 'passkeys' },
    nav: ['Summary', 'Context', 'Challenges', 'Exploration', 'Validation', 'Outcome', 'Reflection'],
    next: { label: 'Accessible Rail Booking', href: 'case-rail-booking.html' },

    summary: {
      number: '02',
      client: 'lululemon',
      theme: 'Behavioral Complexity',
      title: 'Designing a Passwordless Authentication Experience',
      question: 'How do you convince people to trust a sign-in method they’ve never used before?',
      project: 'End-to-end passkey experience across app, web, and in-store',
      role: 'Lead Product Designer — UX strategy, interaction design, accessibility, design systems',
      outcome: 'A trusted, accessible passkey flow adopted across all sign-in surfaces',
      capabilities: ['Trust Design', 'Cross-platform UX', 'Accessibility', 'Design Systems', 'Product Collaboration'],
      outcomes: [
        'Delivered passkey sign-in across app, web, and in-store.',
        'Established a reusable pattern for introducing unfamiliar features.',
        'Reduced friction at the exact moment customers wanted to engage.',
      ],
    },

    context: {
      number: '02',
      label: 'Context',
      headline: 'Why this project existed',
      body: [
        'Members sign in across the app, web, and in-store experiences. Passwords were the single biggest source of failed logins, abandoned carts, and support contacts — every reset was friction at the exact moment someone wanted to engage with the brand.',
        'Passkeys promised to remove that friction entirely while improving security. The challenge wasn’t technical — it was behavioral. Asking someone to trust a sign-in method they’d never seen before required more than a feature launch.',
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
          image: { src: 'images/case-studies/passkeys-introduction.png', alt: 'lululemon sign-in screen with a "Use a Passkey" option and Face ID prompt', caption: 'Passkey introduction flow' },
        },
        {
          number: 2,
          headline: 'Designing for people who don’t fully understand biometrics',
          body: 'Face ID and Touch ID are familiar, but their relationship to account security isn’t. Many customers assumed biometrics replaced their password — not that they were the key.',
          options: 'Options considered · technical explanation; metaphor-first framing; show-don’t-tell interaction.',
          decision: 'A progressive disclosure pattern that shows the mechanism in action before explaining it — letting the experience teach rather than the copy.',
          image: { src: 'images/case-studies/passkeys-biometric-education.png', alt: '"What is a Passkey?" education modal explaining Face ID and Touch ID security', caption: 'Biometric trust model' },
        },
        {
          number: 3,
          headline: 'Keeping the fallback from becoming the default',
          body: 'If the passkey flow felt uncertain, customers would retreat to passwords. The fallback had to exist without advertising itself as the safer choice.',
          options: 'Options considered · hide the fallback; deprioritize it visually; make it available but secondary.',
          decision: 'A visually secondary fallback that is discoverable but doesn’t compete — making passkeys feel like the obvious path without removing the escape hatch.',
          image: { src: 'images/case-studies/passkeys-management-security.png', alt: 'Account security settings showing passkeys alongside password manager fallback options', caption: 'Fallback flow design' },
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
      image: { alt: 'Usability test sessions', caption: 'Usability test sessions' },
    },

    outcome: {
      number: '06',
      label: 'Outcome',
      headline: 'Confidence without complexity',
      body: 'Passkeys shipped across app, web, and in-store. The pattern established for this feature became the foundation for introducing other unfamiliar capabilities to a consumer audience.',
      impacts: [
        { label: 'Cross-surface delivery', desc: 'Passkey sign-in delivered across app, web, and in-store with a consistent pattern.' },
        { label: 'Reusable introduction model', desc: 'Established a pattern for introducing unfamiliar features that the team applied to subsequent work.' },
        { label: 'Trust by design', desc: 'Reframed authentication from a security checkbox into a trust-building moment, measured on confidence as well as completion rate.' },
      ],
    },

    reflection: {
      number: '07',
      label: 'Reflection',
      headline: 'What this project taught me',
      body: [
        'Authentication design is really trust design. The challenge wasn’t getting the interaction right — it was understanding what made people feel safe enough to try something new at the moment they were most likely to abandon.',
        'I came in expecting to design a faster login. I left having designed confidence — and a reusable way to introduce anything unfamiliar to people who have every reason to be cautious.',
      ],
    },

    caseFooter: {
      email: '1tadashi8@gmail.com',
      linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      copyright: '© 2026 Tad Natsuhara',
    },
  },

  /* ------------------------------------------------------------------ */

  'rail-booking': {
    meta: { client: 'SAP Concur', slug: 'rail-booking' },
    nav: ['Summary', 'Context', 'Challenges', 'Exploration', 'Validation', 'Outcome', 'Reflection'],
    next: null,

    summary: {
      number: '03',
      client: 'SAP Concur',
      theme: 'Interaction Complexity',
      title: 'Designing an Accessible Rail Booking Experience',
      question: 'How do you simplify one of the most information-dense experiences in travel?',
      project: 'Interactive seat selection for rail booking across responsive web',
      role: 'Lead Product Designer — interaction design, accessibility, responsive UX',
      outcome: 'An accessible, responsive seat selection experience that balanced traveler confidence with business constraints',
      capabilities: ['Complex Interaction Design', 'Accessibility', 'Responsive UX', 'Enterprise Product Design'],
      outcomes: [
        'Delivered accessible seat selection across responsive breakpoints.',
        'Balanced traveler confidence with corporate travel policy constraints.',
        'Simplified the most information-dense step in the booking flow.',
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
          image: { src: 'images/case-studies/rail-seatmap-iteration.png', alt: 'Seat-map design iterations across web and mobile, showing coach layout and seat-attribute detail', caption: 'Seat map spatial layout' },
        },
        {
          number: 2,
          headline: 'Designing for accessibility without removing capability',
          body: 'A visual seat map is inaccessible to screen reader users by default. But replacing it with a list loses the spatial understanding that helps travelers choose confidently.',
          options: 'Options considered · visual-only map; list alternative with no map; parallel accessible map with ARIA region labelling.',
          decision: 'A dual-mode design: a visual map with full ARIA semantics, plus a structured list mode that keyboard and screen reader users can switch to — same data, appropriate for each mode.',
          image: { src: 'images/case-studies/rail-a11y-documentation.png', alt: 'Keyboard navigation order and tab-flow documentation for the seat map', caption: 'Accessibility dual-mode design' },
        },
        {
          number: 3,
          headline: 'Handling policy constraints without punishing the traveler',
          body: 'Corporate travel policies restricted certain seat classes, fare types, and booking windows. Surfacing policy violations after selection — the existing behaviour — was the primary source of rebooking.',
          options: 'Options considered · hide restricted seats; grey them with a tooltip; pre-filter to policy-compliant options with an override path.',
          decision: 'Pre-filter to compliant options by default, with a clear path to view all seats for travelers with a legitimate reason to override — policy-forward without policy-punishing.',
          image: { src: 'images/case-studies/rail-early-concepts.png', alt: 'Early seat-selection concept screens used to test layout and seat-attribute clarity', caption: 'Policy constraint flow' },
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
      ],
      image: { src: 'images/case-studies/rail-usability-study.png', alt: 'Unmoderated usability study report with participant notes, affinity mapping, and findings', caption: 'Usability validation sessions' },
    },

    outcome: {
      number: '06',
      label: 'Outcome',
      headline: 'Clarity inside complexity',
      body: 'The seat selection experience shipped across responsive breakpoints. Accessibility compliance was validated against WCAG 2.1 AA. The data model held across all rail operators in the initial launch set.',
      impacts: [
        { label: 'Accessible across modes', desc: 'Full WCAG 2.1 AA compliance with a dual-mode design that preserved capability for all users.' },
        { label: 'Policy-forward booking', desc: 'Pre-filtering to policy-compliant options reduced rebooking caused by after-selection policy violations.' },
        { label: 'Operator-agnostic model', desc: 'A seat data representation that worked across all operators without operator-specific design decisions.' },
      ],
    },

    reflection: {
      number: '07',
      label: 'Reflection',
      headline: 'What this project taught me',
      body: [
        'Enterprise travel design is really constraint design. Every stakeholder — traveler, admin, policy team, rail operator — had legitimate requirements that pulled in different directions. The design work was finding the arrangement that honored all of them without asking anyone to compromise more than they had to.',
        'Accessibility forced better design decisions across the board. The structured list mode I built for screen reader users turned out to be what keyboard-only users preferred too — and it revealed information hierarchy problems in the visual map that I’d missed.',
      ],
    },

    caseFooter: {
      email: '1tadashi8@gmail.com',
      linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      copyright: '© 2026 Tad Natsuhara',
    },
  },
};
