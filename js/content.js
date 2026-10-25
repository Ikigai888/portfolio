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
      { label: 'About', href: '#about' },
      { label: 'Archive', href: '#archive' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  /* ---------- Hero ---------- */
  hero: {
    // headline rendered as lines; `accent: true` marks the italic accent line
    headline: [
      { text: 'I make complicated software' },
      { text: 'feel obvious.', accent: true },
    ],
    lead:
      'Nobody should need a manual for the tools they use every day. ' +
      'My job is to organize the complexity behind them into something people can understand.',
    cta: { label: 'View selected work', href: '#work' },
    portrait: { src: 'images/portrait.jpg', w: 1230, h: 1600, alt: 'Tad Natsuhara' },
  },

  /* ---------- Featured Case Studies (CaseStudyCard ×3, rendered from this array) ---------- */
  caseStudies: {
    label: 'Case Studies',
    intro: 'For lululemon, SAP Concur, and MoxiWorks. Three projects, three kinds of complexity.',
    emphasize: ['lululemon', 'SAP Concur', 'MoxiWorks'],
    items: [
      {
        client: 'MoxiWorks',
        theme: 'Organizational Complexity',
        title: 'Designing Brand Governance for Enterprise Scale',
        question:
          'How do you help thousands of agents stay on brand without relying on manual processes?',
        href: 'case-brand-governance.html',
        image: { src: 'images/case-studies/brand-gov-multiple-style-kits.png', w: 1400, h: 1000, alt: 'Agent-facing CMA in the Presentation Builder with the Style Kit switcher open, offering Primary, Luxury, and Commercial kits', caption: 'Brand Governance · Style Kits, applied' },
      },
      {
        client: 'lululemon',
        theme: 'Behavioral Complexity',
        title: 'Designing a Passwordless Authentication Experience',
        question:
          'How do you convince people to trust a sign-in method they’ve never used before?',
        href: 'case-passkeys.html',
        image: { src: 'images/case-studies/passkeys-thumb.png', w: 1360, h: 824, alt: 'lululemon passkey sign-in flow shown on desktop and mobile', caption: 'Passkeys · authentication flow' },
      },
      {
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

  /* ---------- Also shipped (short reads beneath the case studies) ---------- */
  alsoShipped: {
    title: 'Also shipped at',
    titleEm: 'lululemon',
    items: [
      {
        title: 'Self-Service',
        body: 'Moved hard-to-find support links from the footer into a Get Help menu in the header.',
        results: ['$1.6M cost savings', '5% fewer support interactions'],
        image: {
          src: 'images/work/also/selfservice-thumb-wide.jpg', w: 800, h: 533,
          alt: 'The Get Help menu in the lululemon header, listing Start a Return, Track my Order, Check Return Status, and Help & Support',
        },
        gallery: [
          { src: 'images/work/also/selfservice-1-header-menu.png', w: 856, h: 769,
            alt: 'lululemon website header with the Get Help menu open: Start a Return, Track my Order, Check Return Status, Help & Support',
            caption: 'The solution: a Get Help menu in the header puts returns, order tracking, and support where people already look.' },
          { src: 'images/work/also/selfservice-2-footer-analytics.png', w: 1200, h: 1007,
            alt: 'The lululemon footer above an analytics report of footer link visits, led by returns and live chat',
            caption: 'Support links drew 40% of footer engagement, with returns and live chat ranked first and second, yet they were hard to find.' },
          { src: 'images/work/also/selfservice-3-card-sort.png', w: 1200, h: 363,
            alt: 'Footer engagement analytics, a card sort dendrogram, and a spreadsheet mapping both to support groupings',
            caption: 'A card sort of the footer links, mapped against the analytics, pointed to one core support grouping to test in the header.' },
          { src: 'images/work/also/selfservice-4-guest-feedback.png', w: 770, h: 677,
            alt: 'Voice-of-guest findings: service and resolution at 59% negative sentiment, with a call for more self-service options',
            caption: 'Guest feedback ranked support as the fourth-biggest e-commerce pain point, with missing self-service options called out as a theme.' },
          { src: 'images/work/also/selfservice-5-heat-map.png', w: 849, h: 849,
            alt: 'Click heat map over the original lululemon homepage, with hot spots in the top-right header and the footer support links',
            caption: 'A heat map of the original page showed clicks gathering around the header corner and the footer support links.' },
          { src: 'images/work/also/selfservice-6-collaboration.png', w: 841, h: 835,
            alt: 'Per-interaction support costs for live chat and phone, above the Start a Return page',
            caption: 'I worked with the call centre team on the cost case, and with the post-purchase team, who were updating Help Centre content at the same time.' },
        ],
      },
      {
        title: 'Community Hub',
        body: 'An in-app hub to find and register for events and classes that lived on third-party sites.',
        results: ['65K registrations in 2025', '40% better discoverability'],
        image: {
          src: 'images/work/also/community-thumb-pair.png', w: 900, h: 600,
          alt: 'Two screens from the lululemon app: the Community tab with a Try a Peloton Class carousel, and an event page with ticket availability',
        },
        gallery: [
          { src: 'images/work/also/community-1-home.png', w: 825, h: 1112,
            alt: 'Community tab home with a Peloton class carousel, event cards, featured events, and community FAQs',
            caption: 'Hub home: Peloton classes, upcoming events, featured campaigns, and an FAQ that cuts down support requests.' },
          { src: 'images/work/also/community-2-events.png', w: 823, h: 1111,
            alt: 'Events list with filters for location, date, and type, and a Your Events row of registered-event tickets',
            caption: 'The events list gained filtering for easier discovery. Registered-event cards and distance filters are planned next.' },
          { src: 'images/work/also/community-3-event-details.png', w: 825, h: 1112,
            alt: 'Event details with ticket availability, description, an interactive map, similar events, and an EventBrite registration button',
            caption: 'Event details: ticket availability, an interactive map, sharing, and registration, which still runs through EventBrite.' },
          { src: 'images/work/also/community-4-starting-point.png', w: 830, h: 756,
            alt: 'The lululemon app Peloton classes page beside an EventBrite event page in a mobile browser',
            caption: 'The starting point: Peloton classes in the app, and event sign-up on third-party pages such as EventBrite.' },
        ],
      },
    ],
  },

  /* ---------- Process stepper (inside How I Work) ---------- */
  process: {
    eyebrow: 'See it in practice',
    title: 'One project, five real artifacts',
    intro: 'Step through how the SAP Concur rail seat map went from a competitive audit to a shipped, accessible component.',
    didLabel: 'What I did',
    changedLabel: 'What it changed',
    stages: [
      { verb: 'Look around', artifact: 'Competitive analysis', img: 'images/work/rail-comp.jpg', alt: 'Competitive analysis of rail and airline seat maps',
        did: 'Audited rail and airline seat selection to find the patterns travellers already trust.',
        changed: 'Seat attributes and coach availability had to be visible up front.' },
      { verb: 'Sketch wide', artifact: 'Early concepts', img: 'images/work/rail-concepts.jpg', alt: 'Early seat map concepts on desktop and mobile',
        did: 'Explored layouts that put seat clarity and coach availability first, across desktop and mobile.',
        changed: 'Narrowed to a coach-by-coach map with a persistent legend.' },
      { verb: 'Test & break', artifact: 'Usability testing', img: 'images/work/rail-iter1.jpg', alt: 'Seat map iteration tested with users',
        did: 'Ran unmoderated usability tests and synthesis workshops with the UX research team.',
        changed: '\u201CI want to see options like power outlets or extra space right away, not guess.\u201D' },
      { verb: 'Include everyone', artifact: 'Accessibility', img: 'images/work/rail-a11y.jpg', alt: 'Remote accessibility interview with the seat map prototype',
        did: 'Tested with visually impaired users and documented keyboard and screen-reader behaviour.',
        changed: 'Full WCAG compliance, and components later adopted for the air seat map.' },
      { verb: 'Ship & measure', artifact: 'Final design', img: 'images/work/rail-final.jpg', alt: 'Final rail seat map across breakpoints',
        did: 'Delivered detailed specs across responsive breakpoints for the development teams.',
        changed: '+20% completed bookings and 35% fewer seat-selection errors.' },
    ],
  },

  /* ---------- Archive (earlier work, list + live preview) ---------- */
  archive: {
    label: 'Archive',
    statement: 'Before the case studies, a decade of shipping, from the 10-foot screen to enterprise messaging.',
    emphasize: ['the 10-foot screen'],
    note: 'Shorter write-ups of earlier work. Pick one to preview.',
    items: [
      { co: 'Microsoft', title: 'NFL on Xbox', tags: 'Interface design \u00B7 second screen \u00B7 live data', year: '2014\u201315',
        img: 'images/work/xbox.jpg', alt: 'NFL on Xbox game feed with a fantasy alert', bg: '#0B0F1A', fit: 'cover',
        blurb: 'Live games, real-time stats, fantasy football and highlights in one app on Xbox, with tablet and mobile companions for second-screen viewing.' },
      { co: 'SAP Jam', title: 'Messages', tags: 'Enterprise collaboration \u00B7 messaging', year: '2015\u201319',
        img: 'images/work/sapjam.jpg', alt: 'SAP Jam group messages list', bg: '#FFFFFF', fit: 'contain',
        blurb: 'Group and direct messaging for SAP\u2019s enterprise collaboration platform.' },
      { co: 'lululemon', title: 'People\u2019s Network icons', tags: 'Iconography \u00B7 brand system', year: '2021\u201325',
        img: 'images/work/pn-icons.jpg', alt: 'Icon set for lululemon People\u2019s Networks', bg: '#FFFFFF', fit: 'contain',
        blurb: 'An icon family giving each employee-led network its own identity while staying true to the lululemon brand.' },
      { co: 'EA SPORTS', title: 'FIFA 16 menus', tags: 'Short contract \u00B7 game UI', year: 'c. 2015',
        img: 'images/work/fifa.jpg', alt: 'FIFA 16 Online Friendlies hub screen', bg: '#0B0F1A', fit: 'cover',
        blurb: 'A short stint designing the Online Friendlies and FUT Hub screens.' },
      { co: 'FGL Sports', title: 'Sport Chek gift cards', tags: 'Print \u00B7 packaging', year: 'Early career',
        img: 'images/work/sportchek.jpg', alt: 'Sport Chek gift cards fanned out', bg: '#1A1A1A', fit: 'cover',
        blurb: 'Where it started: retail print and packaging that had to work at arm\u2019s length in a busy store.' },
    ],
  },

  /* ---------- Surprise me (About) ---------- */
  facts: {
    eyebrow: 'Off the r\u00E9sum\u00E9',
    button: 'Surprise me',
    items: [
      { tag: 'Paper trail', text: 'I hold six granted Microsoft patents.' },
      { tag: 'Screen sizes', text: 'I\u2019ve designed for a 10-foot TV, a phone in your hand, and just about everything in between.' },
      { tag: 'Off the clock', text: 'I train jiu-jitsu, the one place I\u2019m happy to hear \u201Clet\u2019s try that again.\u201D' },
      { tag: 'Big screen', text: 'I helped put live NFL games, stats, fantasy and highlights into one app on Xbox.' },
      { tag: 'Recognition', text: 'Baymard Institute ranked our team\u2019s e-commerce work in the top 1% in 2024.' },
      { tag: 'Career route', text: 'Xbox \u2192 enterprise travel \u2192 athleisure \u2192 real estate tech \u2192 pet food. Different products, same job.' },
      { tag: 'Recognition', text: 'My SAP team won a Product Excellence Award in 2018.' },
      { tag: 'Security', text: 'Zero security breaches since my passkey experience launched at lululemon.' },
    ],
  },

  /* ---------- About ----------
     Statement leads with point of view only; the identity (name, role,
     location) lives once, in the contributor byline below the prose, so
     nothing is said twice. The section's sticky rail now carries just the
     'About' label, matching What I Do / How I Work. */
  about: {
    label: 'About',
    statement: 'I like problems that don\u2019t have an answer yet.',
    emphasize: ['don\u2019t have an answer yet'],
    body: [
      'I came to product design through games and TV, and I\u2019ve stayed for the moment a confusing thing finally clicks for someone. ' +
      'I live in Vancouver, play hockey, and will happily lose an evening to simulation theory.',
      'Since I was a kid I\u2019ve been curious about where technology and design meet. Now I\u2019m a senior product designer, ' +
      'and the thing teammates mention most is my passion, followed closely by a refusal to accept \u2018that\u2019s how we\u2019ve always done it.\u2019',
    ],
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
