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
    // headline rendered as lines; `accent: true` marks the italic accent line
    headline: [
      { text: 'Complexity is inevitable.' },
      { text: 'Confusion isn’t.', accent: true },
    ],
    lead:
      'Nobody should need a manual for the tools they use every day. ' +
      'I design so they don\u2019t, making even the most complicated products feel obvious.',
    cta: { label: 'View selected work', href: '#work' },
    portrait: { src: 'images/portrait.jpg', w: 1230, h: 1600, alt: 'Tad Natsuhara' },
  },

  /* ---------- What I Do ---------- */
  whatIDo: {
    label: 'What I Do',
    statement:
      'For teams at lululemon, SAP, and MoxiWorks, I\u2019ve designed ' +
      'through three recurring kinds of complexity.',
    emphasize: ['lululemon', 'SAP', 'MoxiWorks'],
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
        href: 'case-brand-governance.html',
        image: { src: 'images/case-studies/brand-gov-multiple-style-kits.png', w: 1400, h: 1000, alt: 'Agent-facing CMA in the Presentation Builder with the Style Kit switcher open, offering Primary, Luxury, and Commercial kits', caption: 'Brand Governance · Style Kits, applied' },
      },
      {
        number: '02',
        client: 'lululemon',
        theme: 'Behavioral Complexity',
        title: 'Designing a Passwordless Authentication Experience',
        question:
          'How do you convince people to trust a sign-in method they’ve never used before?',
        href: 'case-passkeys.html',
        image: { src: 'images/case-studies/passkeys-thumb.png', w: 1360, h: 824, alt: 'lululemon passkey sign-in flow shown on desktop and mobile', caption: 'Passkeys · authentication flow' },
      },
      {
        number: '03',
        client: 'SAP Concur',
        theme: 'Interaction Complexity',
        title: 'Designing an Accessible Rail Booking Experience',
        question:
          'How do you simplify one of the most information-dense experiences in travel?',
        href: 'case-rail-booking.html',
        image: { src: 'images/case-studies/rail-booking-thumb-cropped.png', w: 1343, h: 832, alt: 'SAP Concur rail seat selection across desktop, tablet, and mobile', caption: 'Rail Booking · seat selection' },
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
    emphasize: ['organizing complexity'],
    // `icon` names a line-art glyph from the icon map in components.js; it
    // echoes the hero's thin-stroke wireframe motif and draws itself in as
    // the section reveals. How I Work's principles carry icons; What I Do's
    // kinds stay numeral-led (01/02/03), so the two sections read distinctly.
    principles: [
      { icon: 'systems', title: 'Systems thinking', description: 'Organizing complexity into structures people can understand, not hiding it.' },
      { icon: 'collaboration', title: 'Close collaboration', description: 'Working in lockstep with Product and Engineering from problem to ship.' },
      { icon: 'exploration', title: 'Rapid exploration', description: 'More directions, earlier: prototyping in hours what used to take days, then throwing most of it away on purpose.' },
      { icon: 'validation', title: 'Continuous validation', description: 'Testing decisions with real customers and iterating on what they reveal.' },
    ],
    closing: 'The result is software people trust on the first try and rely on every day after.',
  },

  /* ---------- About ----------
     Statement leads with point of view only; the identity (name, role,
     location) lives once, in the contributor byline below the prose, so
     nothing is said twice. The section's sticky rail now carries just the
     'About' label, matching What I Do / How I Work. */
  about: {
    label: 'About',
    statement:
      'I enjoy solving the kinds of product problems that don’t have obvious answers.',
    emphasize: ['don’t have obvious answers'],
    body:
      'I work closest to the hard middle of products, where the system design, ' +
      'the interaction details, and the business logic all have to agree. Most ' +
      'days that means whiteboards with engineers and calls with customers.',
    credential: {
      before: 'Also shipped work at ',
      link: { label: 'Microsoft (6 inventor patents)', href: 'https://patents.justia.com/inventor/tad-natsuhara' },
      after: ', Electronic Arts, and SAP Jam.',
    },
    byline: {
      name: 'Tad Natsuhara',
      role: 'Senior Product Designer',
      location: 'Vancouver, BC',
    },
  },

  /* ---------- Contact footer ---------- */
  contact: {
    cta: 'Say hello',
    email: '1tadashi8@gmail.com',
    phone: '+1 778 846 6994',
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tad-natsuhara-design' },
    copyrightName: 'Tad Natsuhara',
  },
};
