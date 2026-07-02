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
    // headline rendered as two lines; `accent: true` marks the cyan line
    headline: [
      { text: 'Complexity is inevitable.' },
      { text: 'Confusion isn’t.', accent: true },
    ],
    lead:
      'Nobody should need a manual for the tools they use every day. ' +
      'I design so they don\u2019t.',
  },

  /* ---------- What I Do ---------- */
  whatIDo: {
    label: 'What I Do',
    statement:
      'For teams at MoxiWorks, lululemon, and SAP Concur, I\u2019ve designed ' +
      'through three recurring kinds of complexity.',
    emphasize: ['MoxiWorks', 'lululemon', 'SAP Concur'],
    kinds: [
      { number: '01', title: 'Organizational', description: 'Systems too big for any one person to hold in their head.' },
      { number: '02', title: 'Behavioral', description: 'Asking people to trust something unfamiliar.' },
      { number: '03', title: 'Interaction', description: 'Dense interfaces where every detail competes for attention.' },
    ],
    closing: 'The case studies below take one each.',
  },

  /* ---------- Featured Case Studies (CaseStudyCard ×3, rendered from this array) ---------- */
  caseStudies: {
    label: 'Case Studies',
    meta: 'Three projects',
    items: [
      {
        number: '01',
        client: 'MoxiWorks',
        theme: 'Organizational Complexity',
        title: 'Designing Brand Governance for Enterprise Scale',
        question:
          'How do you help thousands of agents stay on brand without relying on manual processes?',
        description:
          'Designed the self-service platform that lets thousands of agents ' +
          'brand their own materials correctly — reusable Style Kits instead ' +
          'of one-off requests to a design team.',
        capabilities: [
          'Product Strategy', 'Enterprise SaaS', 'Systems Thinking', 'Information Architecture',
        ],
        href: 'case-brand-governance.html',
        image: { src: 'images/case-studies/brand-gov-style-kits.png', alt: 'Brand Governance Style Kit editor — color and typography tokens with share permissions', caption: 'Brand Governance — RISE platform' },
      },
      {
        number: '02',
        client: 'lululemon',
        theme: 'Behavioral Complexity',
        title: 'Designing a Passwordless Authentication Experience',
        question:
          'How do you convince people to trust a sign-in method they’ve never used before?',
        description:
          'Designed lululemon\u2019s passkey sign-in end to end — the moment of ' +
          'first encounter, the fallbacks when a device says no, and the ' +
          'language that makes a new standard feel safe enough to try.',
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
          'Led design of SAP Concur\u2019s rail seat map — making a screen with ' +
          'hundreds of touch targets work for keyboards, screen readers, and ' +
          'phones without losing the booking.',
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
      'Good software doesn’t become simpler by removing complexity. ' +
      'It becomes better by organizing complexity into systems people can understand.',
    principles: [
      { number: '01', title: 'Systems thinking', description: 'Organizing complexity into structures people can understand, not hiding it.' },
      { number: '02', title: 'Close collaboration', description: 'Working in lockstep with Product and Engineering from problem to ship.' },
      { number: '03', title: 'Rapid exploration', description: 'More directions, earlier — prototyping in hours what used to take days, then throwing most of it away on purpose.' },
      { number: '04', title: 'Continuous validation', description: 'Testing decisions with real customers and iterating on what they reveal.' },
    ],
    closing: 'The result is software people trust on the first try and rely on every day after.',
  },

  /* ---------- About ---------- */
  about: {
    label: 'About',
    statement:
      'I’m Tad Natsuhara, a Senior Product Designer based in Vancouver. I enjoy ' +
      'solving the kinds of product problems that don’t have obvious answers.',
    body:
      'I work closest to the hard middle of products — where the system design, ' +
      'the interaction details, and the business logic all have to agree. Most ' +
      'days that means whiteboards with engineers and calls with customers.',
    credential: 'Also shipped work at Microsoft, Electronic Arts, and SAP Jam.',
    name: 'Tad Natsuhara — Vancouver, BC',
    portrait: { src: 'images/portrait.jpg', alt: 'Tad Natsuhara' },
  },

  /* ---------- Contact footer ---------- */
  contact: {
    eyebrow: 'Let’s work together',
    cta: 'Say hello',
    email: '1tadashi8@gmail.com',
    phone: '+1 778 846 6994',
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tad-natsuhara-design' },
    copyright: '© 2026 Tad Natsuhara',
  },
};
