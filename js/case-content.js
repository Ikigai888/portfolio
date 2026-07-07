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
      label: 'Context',
      headline: 'Why this project existed',
      body: [
        'MoxiWorks serves real-estate brokerages whose brands live across hundreds of offices and thousands of agents. Branding existed, but it lived in a legacy service that wasn\'t self-serve — changes went through a service team, and admins had no way to see or manage their own brand system.',
        'The result was guesswork and brand drift at scale. Admins couldn\'t verify what was set where. Agents worked around controls. And as the RISE product ecosystem grew, every new product needed brand — without a governed system to inherit it from.',
      ],
    },

    challenges: {
      label: 'Challenges',
      intro: 'Four decisions, built in the order they actually happen',
      body: 'This is the real sequence: define the brand once, package it, make it cascade under control, and prove it scales beyond one screen — the problem, the options, and the reasoning behind each one.',
      items: [
        {
          number: 1,
          headline: 'Turning scattered brand assets into a single library',
          body: 'Colors, fonts, logos, and legal disclaimers already existed in a legacy branding service — but managing them required the service team, not the brand\'s own admins. Making governance self-serve meant restructuring those assets so a system could read, tag, and enforce them.',
          options: 'keep improving the service-managed model; expose raw asset settings to admins; a structured Brand Library with named, taggable, lockable assets.',
          decision: 'A self-serve Brand Library where every asset is named, tagged, and explicitly locked or open — the raw material everything else in this flow is built from.',
          image: { src: 'images/case-studies/brand-gov-text-styles.png', w: 1440, h: 1010, frame: 'dark', alt: 'Brand Library screen adding a governed text style — name, font family, weight, and tags', caption: 'Brand Library — defining the foundational assets' },
        },
        {
          number: 2,
          headline: 'Packaging brand into something agents can apply',
          body: 'Agents needed brand-correct assets without becoming designers. Defining brand once had to produce consistent outputs everywhere it was consumed.',
          options: 'per-asset templates; a raw token system; packaged Style Kits.',
          decision: 'Reusable Style Kits that bundle logos, color, type, and rules into a single applied unit — the source of truth other products read from.',
          image: { src: 'images/case-studies/brand-gov-style-kits-2.png', w: 1440, h: 1451, frame: 'dark', alt: 'Style Kit editor — color tokens, typography tokens, and logo assets bundled into a shareable kit', caption: 'Style Kits — bundling the library into one applied unit' },
        },
        {
          number: 3,
          headline: 'Making the hierarchy cascade — under control',
          body: 'Brand still had to reach thousands of agents through hundreds of offices, cascading brand → office → team → agent, each level inheriting or overriding. Exposed naively, that hierarchy overwhelmed admins. And the moment Style Kits cascaded automatically, a second question opened: how much could an agent still change locally? Too much admin control creates friction; too little invites brand drift.',
          options: 'a flat list of all brands or an explicit org tree; full admin lock or full agent freedom; an inheritance model with visible overrides plus explicit lock/unlock per element.',
          decision: 'An inheritance model that shows what\'s inherited and what can be overridden, paired with a permission layer where admins lock the elements that matter and unlock the rest — the hierarchy stays visible and control stays intentional.',
          image: { src: 'images/case-studies/brand-gov-hierarchy-flow.png', w: 1700, h: 3600, alt: 'High-level brand governance flow — brand settings cascade from admin through the Brand Library and Style Kits down to agents, with inheritance, overrides, and permissions at each level', caption: 'How brand cascades and stays governed — admin to agent' },
        },
        {
          number: 4,
          headline: 'Architecting for the platform, not the page',
          body: 'None of this mattered if it only worked for one screen. Whatever shipped had to be consumed by many RISE products, not just one — and hold up as the ecosystem grew.',
          options: 'a standalone branding tool; a branding service and Style Kit pattern other products subscribe to instead of rebuilding.',
          decision: 'A platform capability — branding as a shared service the ecosystem reads from, not a per-product feature that gets rebuilt.',
          image: { src: 'images/case-studies/brand-gov-agent-style-switcher.png', w: 1400, h: 1000, frame: 'dark', alt: 'Agent-facing CMA presentation with a Style Kit switcher offering Primary, Luxury, Commercial, Team, and Office kits', caption: 'One branding service, many kits — consumed inside Presentations, not rebuilt per product' },
        },
      ],
    },

    aiExploration: {
      label: 'AI Exploration',
      headline: 'Wider exploration, faster alignment',
      body: [
        'I used Figma Make to rapidly generate multiple organizational models for how brands could inherit settings across the hierarchy — brand, office, team, agent. Generating working variations in hours rather than days let me compare structures side by side and bring stakeholders into the tradeoffs with something concrete to react to.',
        'AI increased the breadth of exploration; it didn’t replace the design thinking. The judgment about which model held up under governance constraints, and which would confuse admins, stayed firmly a design decision.',
      ],
      image: { src: 'images/case-studies/brand-gov-org-governance.png', w: 1371, h: 737, alt: 'Organization Governance screen showing brand inheritance across a company hierarchy, with default, inherited, and overridden values', caption: 'One of the organizational models explored with AI' },
    },

    validation: {
      label: 'Validation',
      headline: 'Testing with real admins and agents',
      body: [
        'I ran structured sessions with brokers, office admins, and agents at different points in the process: first with rough concepts to pressure-test the inheritance model, then with a higher-fidelity prototype to validate the Style Kit application flow.',
      ],
      cue: 'Two things changed the design:',
      findings: [
        'Admins wanted to see which agents had applied a kit before publishing changes.',
        'Agents needed a clearer preview of what a kit would look like on their own materials before committing.',
      ],
    },

    outcome: {
      label: 'Outcome',
      headline: 'A foundation the ecosystem builds on',
      body: 'The work established branding as a governed platform capability rather than a per-product feature — setting the direction for how RISE products consume brand going forward.',
      impacts: [
        { label: 'Fewer manual brand reviews', desc: 'Reframed from "something we check" to "infrastructure we inherit," changing how Product and leadership scoped the work.' },
        { label: 'Style Kits adopted across multiple RISE products', desc: 'Style Kits became the pattern other products subscribe to instead of rebuilding their own branding solutions.' },
        { label: 'One hierarchy for thousands of agents', desc: 'Brand settings cascade brand → office → team → agent with visible overrides — one hierarchy the whole ecosystem shares.' },
      ],
    },

    reflection: {
      label: 'Reflection',
      headline: 'What this project taught me',
      body: [
        'The hardest part was designing for both ends of the scale at once. The same system had to govern a brand spanning hundreds of offices and multiple levels of hierarchy — and still make sense to a small company with one admin and no appetite for "governance." Complexity overwhelming smaller organizations was the risk we named first, and it pressed on every design decision.',
        'What carried forward: make the defaults do the governing. Inheritance meant most admins never had to configure anything — the brand cascaded correctly on its own, and the deeper controls surfaced only when an organization\'s structure actually demanded them. Progressive disclosure isn\'t a UI trick; it\'s how a complex system earns the right to feel simple.',
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
      label: 'Context',
      headline: 'Why this project existed',
      body: [
        'Members sign in across the app, web, and in-store experiences. Passwords were the single biggest source of failed logins, abandoned carts, and support contacts. Every reset was friction at the exact moment someone wanted to engage with the brand.',
        'Passkeys promised to remove that friction entirely while improving security. But nobody adopts an unfamiliar sign-in method just because it shipped. People had to be convinced it was safe, at the exact moment they were least patient.',
      ],
      images: [
        { src: 'images/case-studies/passkeys-onboard-animation.gif', w: 1524, h: 1328, alt: 'Passkey onboarding prompt on desktop and mobile, reading “The fastest, most secure way to sign in,” with Create a passkey now and Maybe later options', caption: 'The passkey introduction — desktop and mobile' },
      ],
    },

    challenges: {
      label: 'Challenges',
      intro: 'Three questions that shaped the design',
      body: 'The design problems weren’t about screens; they were about trust, timing, and clarity at moments of friction.',
      items: [
        {
          number: 1,
          headline: 'Introducing something unfamiliar without creating anxiety',
          body: 'Passkeys are safer and faster than passwords, but most people had never heard of them. Login is the highest-stakes moment in the experience, so introducing a new mechanism there risked abandonment.',
          options: 'silent rollout; opt-in prompt; explained introduction with progressive disclosure.',
          decision: 'A contextual introduction that explains what’s happening and why before asking anything, so trust is earned before any action is requested.',
          image: { src: 'images/case-studies/passkeys-introduction.png', w: 1439, h: 1081, alt: 'lululemon sign-in screen with a "Use a Passkey" option and Face ID prompt', caption: 'Passkey introduction flow' },
        },
        {
          number: 2,
          headline: 'Designing for people who don’t fully understand biometrics',
          body: 'Face ID and Touch ID are familiar, but their relationship to account security isn’t. Many customers assumed biometrics replaced their password, when in fact biometrics were the key itself.',
          options: 'technical explanation; metaphor-first framing; show-don’t-tell interaction.',
          decision: 'A progressive disclosure pattern that shows the mechanism in action before explaining it, so the experience teaches rather than the copy.',
          image: { src: 'images/case-studies/passkeys-faceid-animation.gif', w: 1150, h: 1246, alt: 'Face ID passkey setup showing the “Use Face ID to sign in?” system prompt, followed by a “passkey created” confirmation', caption: 'Face ID setup — the mechanism in action' },
        },
        {
          number: 3,
          headline: 'Keeping the fallback from becoming the default',
          body: 'If the passkey flow felt uncertain, customers would retreat to passwords. The fallback had to exist without advertising itself as the safer choice.',
          options: 'hide the fallback; deprioritize it visually; make it available but secondary.',
          decision: 'A visually secondary fallback that is discoverable but doesn’t compete, so passkeys feel like the obvious path without removing the escape hatch.',
          impact: 'The management and security controls weren’t on the roadmap. I surfaced the need through research and conversations with the dev team, built the case for it, and got cross-functional and leadership buy-in to ship create, remove, and manage controls.',
          images: [
            { src: 'images/case-studies/passkeys-login-options.png', w: 1515, h: 1060, alt: 'Sign-in screen offering Sign in with Password, Use a Passkey, and Send One-Time Code as equal fallback options, shown on tablet and mobile', caption: 'Sign-in — the fallback stays available, not competing' },
            { src: 'images/case-studies/passkeys-login-settings.png', w: 1627, h: 1021, alt: 'Account security settings on desktop and mobile showing the Passkeys section with Add a Passkey and Revoke controls', caption: 'Manage controls — create, remove, and fall back' },
          ],
        },
      ],
    },

    aiExploration: {
      label: 'Exploration',
      headline: 'Mapping the trust curve',
      body: [
        'I mapped the emotional journey from first encounter to confident use, identifying every moment where trust could be gained or lost. This let me prioritize which screens needed the most design attention and where copy was carrying more weight than the interaction.',
        'Rapid prototyping let me test the introduction flow with the team before investing in high fidelity. The early rounds surfaced that the animation sequence mattered as much as the copy: people understood passkeys better when they saw the device interaction before reading about it.',
      ],
      images: [
        { src: 'images/case-studies/passkeys-personas.png', w: 1286, h: 460, bare: true, alt: 'Three member personas (Sentiment & Efficiency, Product Education & Confidence, and Confidence) summarizing the research that shaped who we tested with', caption: 'Member research — who we tested with' },
      ],
    },

    validation: {
      label: 'Validation',
      headline: 'Testing the trust model',
      body: [
        'I ran usability sessions focused on the moments of highest uncertainty: the initial introduction, the first-time setup, and recovery when something went wrong. Participants ranged from tech-comfortable to tech-avoidant.',
        'The sessions confirmed the progressive disclosure approach. Participants who saw the interaction before the explanation consistently rated their confidence higher. They also surfaced a gap: customers needed reassurance that their old password still worked as a backup.',
      ],
      images: [
        { src: 'images/case-studies/passkeys-login-movie.mp4', poster: 'images/case-studies/passkeys-login-movie-poster.jpg', w: 960, h: 540, alt: 'Screen recording of the passkey login flow end to end', caption: 'Passkey login — full flow' },
      ],
      quote: { text: 'Sometimes it will forget what my password is, I have to type in my e-mail and send a link which I don’t like because then I have to exit and wait for the e-mail.', attribution: '— usability session participant' },
    },

    outcome: {
      label: 'Outcome',
      headline: 'Confidence without complexity',
      body: 'Passkeys shipped across app, web, and in-store. The pattern established for this feature became the foundation for introducing other unfamiliar capabilities to a consumer audience.',
      impacts: [
        { label: '90% fewer password resets', desc: 'Removed the single biggest source of failed logins and support contacts, reframing authentication from a security checkbox into a trust-building moment.' },
        { label: 'Zero security breaches via phishing', desc: 'Passkeys removed the credential-phishing attack surface entirely, a security outcome as much as a UX one.' },
        { label: 'Cross-surface delivery', desc: 'Passkey sign-in delivered across app, web, and in-store with a consistent, reusable pattern the team applied to subsequent work.' },
      ],
    },

    reflection: {
      label: 'Reflection',
      headline: 'What this project taught me',
      body: [
        'Authentication design is really trust design. The real challenge was understanding what made people feel safe enough to try something new at the moment they were most likely to abandon, not simply getting the interaction right.',
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
      client: 'SAP Concur',
      theme: 'Interaction Complexity',
      title: 'Designing an Accessible Rail Booking Experience',
      question: 'How do you simplify one of the most information-dense experiences in travel?',
      role: 'Senior Product Designer — interaction design, accessibility, responsive UX',
      capabilities: ['Complex Interaction Design', 'Accessibility', 'Responsive UX', 'Enterprise Product Design'],
      outcomes: [
        '20% increase in completed bookings.',
        '35% reduction in seat selection errors.',
        'Concur’s first interactive seat map; its patterns later shaped the Air team’s.',
      ],
    },

    context: {
      label: 'Context',
      headline: 'Why this project existed',
      body: [
        'SAP Concur’s rail booking experience handled complex routing, multi-leg journeys, and seat availability across dozens of rail operators, each with its own data formats, seating models, and booking rules.',
        'The existing seat selection experience collapsed under that complexity. Business travelers, already navigating policy rules, approval workflows, and tight itineraries, hit an interface that required expertise they didn’t have to use.',
        'No interactive seat map existed at Concur, rail or air. There was no pattern to inherit; this project had to establish one.',
      ],
      images: [{ src: 'images/case-studies/rail-checkout-review-and-book.png', w: 1200, h: 1515, alt: 'The existing Review and Book screen for a round-trip journey, with a plain "Select Seat" button and no seat map yet in view', caption: 'Where seat selection had to fit: the booking flow before this project' }],
    },

    challenges: {
      label: 'Challenges',
      intro: 'Three constraints that defined the design',
      body: 'Rail is the most information-dense booking surface in travel. Every design decision had to hold up under the data load.',
      items: [
        {
          number: 1,
          headline: 'Making seat data scannable, not just displayable',
          body: 'Seat selection data includes car type, seat class, direction of travel, table vs. window, reservation status, and accessibility needs, all variable by operator. Displaying it all created cognitive overload; hiding it caused misbookings.',
          options: 'progressive disclosure by seat type; a filter-first approach; spatial representation with summary on selection.',
          decision: 'A spatial seat map with progressive detail: the map shows position, selection reveals the relevant attributes for that seat.',
          images: [
            { src: 'images/case-studies/rail-seatmap-default.png', w: 1200, h: 1647, alt: 'The shipped seat map showing coach layout, an available/unavailable/wheelchair legend, and the selected seat’s amenities', caption: 'The spatial map: position first' },
            { src: 'images/case-studies/rail-seatmap-tooltips.png', w: 1200, h: 1647, alt: 'A seat tooltip revealing rear-facing, reclining, and free wifi attributes on hover or focus', caption: 'Selection reveals the attributes' },
          ],
        },
        {
          number: 2,
          headline: 'Designing for accessibility without removing capability',
          body: 'A visual seat map is inaccessible to screen reader users by default. But replacing it with a list loses the spatial understanding that helps travelers choose confidently.',
          options: 'a visual-only map, which failed screen reader users outright; a list-only alternative, which threw away the spatial sense sighted travelers relied on; or a parallel accessible map with ARIA region labelling.',
          decision: 'A dual-mode design: a visual map with full ARIA semantics, plus a structured list mode that keyboard and screen reader users can switch to (same data, appropriate for each mode).',
          image: { src: 'images/case-studies/rail-keyboard-tab-order.png', w: 1200, h: 1647, alt: 'Annotated keyboard tab order for the seat map: left-to-right, top-to-bottom seat traversal, next/previous coach hotkeys, and disabled seats excluded from the tab sequence', caption: 'The tab order documentation engineering built from' },
        },
        {
          number: 3,
          headline: 'Handling policy constraints without punishing the traveler',
          body: 'Corporate travel policies restricted certain seat classes, fare types, and booking windows. The existing flow surfaced policy violations only after selection, which was the primary source of rebooking.',
          options: 'hide restricted seats; grey them with a tooltip; pre-filter to policy-compliant options with an override path.',
          decision: 'Pre-filter to compliant options by default, with a clear path to view all seats for travelers with a legitimate reason to override: policy-forward without policy-punishing.',
          image: { src: 'images/case-studies/rail-seatmap-final-opt.webp', w: 1100, h: 1022, alt: 'The finished seat map on desktop and mobile, with an amenity tooltip surfaced on selection', caption: 'The shipped seat map, web and mobile' },
        },
      ],
    },

    aiExploration: {
      label: 'Exploration',
      headline: 'Mapping seat complexity',
      body: [
        'The seat data model varied significantly across rail operators. I mapped the full matrix of variables (car type, class, direction, reservation status, accessibility attributes) to find the minimum viable representation that worked across all operators without requiring operator-specific design.',
        'Rapid prototyping of the spatial layout let me test legibility at different data densities before committing to the ARIA implementation, a significant engineering investment that needed to be right before build began.',
        'As production ramped up, I delegated defined pieces of the work to a junior designer, directing the effort and giving feedback so we could move faster without losing consistency.',
      ],
      image: { src: 'images/case-studies/rail-usability-testing-opt.webp', w: 1100, h: 835, alt: 'Animated walkthrough of the usability test flow: the prototype task map, participant survey questions, and mobile testing screens', caption: 'The test flow — prototype, tasks, and participant survey' },
    },

    validation: {
      label: 'Validation',
      headline: 'Testing with business travelers',
      body: [
        'I owned the research end to end: writing the brief, crafting the questions, building the prototype, and moderating sessions with frequent business rail travelers booking multi-leg journeys under policy constraints. I partnered with the UX research team in synthesis workshops to make sense of what we heard. The sessions focused on seat selection time, confidence in the choice, and successful navigation by screen reader users.',
        'The dual-mode accessibility approach was validated in the first round: screen reader participants navigated the structured list without needing the map. The sessions also surfaced that travelers wanted to see their previously selected seats when returning from a policy override, a gap we closed before launch.',
        'Stakeholders pushed back on the accessibility investment early — "Does everything need to be tabbed? Can we skip some items?" Rather than debate it in a conference room, I interviewed visually impaired travelers directly.',
        'One finding reset our assumptions: guide dog owners consistently preferred table seats for the extra space on long journeys. That changed the screen-reader priority order and told us exactly which components were safe to skip. My documentation of the findings became the reference engineering built the implementation from.',
      ],
      images: [
        { src: 'images/case-studies/rail-usability-study.png', w: 1198, h: 1137, alt: 'Unmoderated usability study report with participant notes, affinity mapping, and findings', caption: 'Usability validation sessions' },
      ],
      quote: { text: 'It was a bit hard to tell what each seat offers. I want to see options like power outlets or extra space right away, not guess.', attribution: '— usability session participant' },
    },

    outcome: {
      label: 'Outcome',
      headline: 'Clarity inside complexity',
      body: 'The seat selection experience shipped across responsive breakpoints. Accessibility compliance was validated against WCAG 2.1 AA: 4.5:1 contrast, a documented tab order, semantic heading structure, and ARIA labelling throughout, tested up to 200% zoom. The data model held across all rail operators in the initial launch set.',
      impacts: [
        { label: '20% increase in completed bookings', desc: 'Simplifying the most information-dense step in the flow reduced abandonment at seat selection.' },
        { label: '35% reduction in seat selection errors', desc: 'Pre-filtering to policy-compliant options and clarifying seat attributes reduced mis-selections and the rebooking they caused.' },
        { label: 'Set the pattern for seat selection at Concur', desc: 'No interactive seat map existed before this, rail or air. The spatial map and dual-mode accessibility pattern became the reference the Air team designed against.' },
      ],
    },

    reflection: {
      label: 'Reflection',
      headline: 'What this project taught me',
      body: [
        'Four stakeholders pulled this design in four directions (traveler, admin, policy team, rail operator), and each had a legitimate case. The work was finding the arrangement that honored all of them without asking anyone to compromise more than they had to.',
        'The guide dog finding is the one I still think about. I would have designed a defensible screen-reader priority order without ever talking to a visually impaired traveler, and gotten it wrong in a way no amount of internal debate would have caught. Now I treat "we’ve reasoned our way to the right order" as a hypothesis to test, not a decision to ship, especially in accessibility work where the wrong assumption is invisible until a real user hits it.',
      ],
    },

    caseFooter: {
      email: '1tadashi8@gmail.com',
      linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tad-natsuhara-design' },
      copyright: '© 2026 Tad Natsuhara',
    },
  },
};
