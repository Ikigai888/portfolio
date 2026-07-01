/* ============================================================
   Content — Tad Natsuhara portfolio
   ALL page copy lives here as data. Editing words here never
   touches component markup or layout. Components render from this.
   ============================================================ */

window.Content = {
  meta: {
    name: 'Tad Natsuhara',
    role: 'Senior Product Designer',
  },

  /* ---------- Sticky header ---------- */
  header: {
    name: 'Tad Natsuhara',
    nav: [
      { label: 'Work', href: '#work' },
      { label: 'Approach', href: '#approach' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  /* ---------- Hero ---------- */
  hero: {
    pill: 'Senior Product Designer',
    meta: 'Vancouver, BC · Open to Senior / Lead / Staff roles',
    // headline rendered as three lines; `accent: true` marks the cyan line
    headline: [
      { text: 'Complexity is' },
      { text: 'inevitable.' },
      { text: 'Confusion isn’t.', accent: true },
    ],
    lead:
      'I design enterprise products that simplify complex systems, helping ' +
      'people accomplish their goals with confidence.',
    // support paragraph; `emphasize` names are wrapped in --text-bright/600
    support:
      'Over the past decade I’ve partnered with companies including ' +
      'Microsoft, SAP Concur, lululemon, Electronic Arts, and MoxiWorks to ' +
      'transform complex workflows into intuitive product experiences.',
    emphasize: ['Microsoft', 'SAP Concur', 'lululemon', 'Electronic Arts', 'MoxiWorks'],
    cue: { label: 'Selected Work', href: '#work' },
  },

  /* ---------- What I Do ---------- */
  whatIDo: {
    label: 'What I Do',
    statement:
      'The products I enjoy designing are rarely simple. They’re the products ' +
      'with deep organizational structures, complex booking flows, evolving ' +
      'authentication standards, or enterprise workflows that have grown over time.',
    body:
      'I specialize in making those experiences feel intuitive without sacrificing ' +
      'capability. Whether I’m designing a governance platform, rethinking ' +
      'authentication, or simplifying travel booking, my goal is always the same:',
    punch: 'Create clarity where complexity already exists.',
  },

  /* ---------- Featured Case Studies (CaseStudyCard ×3, rendered from this array) ---------- */
  caseStudies: {
    label: 'Featured Case Studies',
    meta: '03 — Flagship projects',
    items: [
      {
        number: '01',
        client: 'MoxiWorks',
        theme: 'Organizational Complexity',
        title: 'Designing Brand Governance for Enterprise Scale',
        question:
          'How do you help thousands of agents stay on brand without relying on manual processes?',
        description:
          'Designed a self-service enterprise platform that centralized brand ' +
          'management, introduced reusable Style Kits, and established a single ' +
          'source of truth for branding across the RISE ecosystem.',
        capabilities: [
          'Product Strategy', 'Enterprise SaaS', 'Systems Thinking', 'Information Architecture',
        ],
        href: 'case-brand-governance.html',
        image: { src: '', alt: 'Brand Governance platform', caption: 'Brand Governance — RISE platform' },
      },
      {
        number: '02',
        client: 'lululemon',
        theme: 'Behavioral Complexity',
        title: 'Designing a Passwordless Authentication Experience',
        question:
          'How do you convince people to trust a sign-in method they’ve never used before?',
        description:
          'Designed an end-to-end passkey experience that balanced usability, ' +
          'security, accessibility, and customer confidence while supporting ' +
          'adoption of emerging authentication standards.',
        capabilities: [
          'Trust Design', 'Cross-platform UX', 'Accessibility', 'Design Systems',
        ],
        href: 'case-passkeys.html',
        image: { src: 'images/case-studies/passkeys-thumb.png', alt: 'lululemon passkey sign-in flow shown on desktop and mobile', caption: 'Passkeys — authentication flow' },
      },
      {
        number: '03',
        client: 'SAP Concur',
        theme: 'Interaction Complexity',
        title: 'Designing an Accessible Rail Booking Experience',
        question:
          'How do you simplify one of the most information-dense experiences in travel?',
        description:
          'Led the design of an interactive seat selection experience that ' +
          'balanced accessibility, responsive design, business goals, and ' +
          'traveler confidence.',
        capabilities: [
          'Complex Interaction Design', 'Accessibility',
          'Responsive UX', 'Enterprise Product Design',
        ],
        href: 'case-rail-booking.html',
        image: { src: 'images/case-studies/rail-booking-thumb.png', alt: 'SAP Concur rail seat selection across desktop, tablet, and mobile', caption: 'Rail Booking — seat selection' },
      },
    ],
    cta: 'View case study',
  },

  /* ---------- How I Work (PrincipleItem ×4) ---------- */
  howIWork: {
    label: 'How I Work',
    statement:
      'Good enterprise software doesn’t become simpler by removing complexity. ' +
      'It becomes better by organizing complexity into systems people can understand.',
    principles: [
      { number: '01', title: 'Systems thinking', description: 'Organizing complexity into structures people can understand, not hiding it.' },
      { number: '02', title: 'Close collaboration', description: 'Working in lockstep with Product and Engineering from problem to ship.' },
      { number: '03', title: 'Rapid exploration', description: 'AI-assisted tools to widen the option space — increasing exploration, not replacing thinking.' },
      { number: '04', title: 'Continuous validation', description: 'Testing decisions with real customers and iterating on what they reveal.' },
    ],
    closing: 'The result is software people trust on the first try and rely on every day after.',
  },

  /* ---------- Additional Work (WorkCell ×4) ---------- */
  additionalWork: {
    label: 'Additional Work',
    meta: '2014 — 2021',
    intro: 'A selection of projects that shaped how I think about product design.',
    items: [
      { client: 'Microsoft', title: 'Sports Companion App' },
      { client: 'Electronic Arts', title: 'Player Experience' },
      { client: 'SAP Jam', title: 'Enterprise Collaboration' },
      { client: 'MoxiWorks', title: 'Dynamic Property Search' },
    ],
    closing:
      'Additional interaction design, platform strategy, design systems, and ' +
      'workflow improvements across enterprise software.',
  },

  /* ---------- About ---------- */
  about: {
    label: 'About',
    statement:
      'I’m Tad Natsuhara, a Senior Product Designer based in Vancouver. I enjoy ' +
      'solving the kinds of product problems that don’t have obvious answers.',
    body:
      'My work sits at the intersection of systems thinking, interaction design, ' +
      'and product strategy — partnering closely with Product, Engineering, and ' +
      'customers to transform complexity into clarity.',
    name: 'Tad Natsuhara — Vancouver, BC',
    portrait: { src: '', alt: 'Tad Natsuhara' },
  },

  /* ---------- Contact footer ---------- */
  contact: {
    eyebrow: 'Let’s work together',
    cta: 'Start a project',
    email: '1tadashi8@gmail.com',
    phone: '+1 778 846 6994',
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    copyright: '© 2026 Tad Natsuhara',
  },
};
