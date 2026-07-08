/* ============================================================
   Components — Tad Natsuhara portfolio
   Each component is a pure function: (props) -> HTML string.
   Pages are assembled by mapping data (js/content.js) over these.
   A pattern is defined exactly ONCE here and reused everywhere.
   No inline styles — components emit classes styled in components.css.
   ============================================================ */

window.Components = (function () {
  /* Escape interpolated text so copy can't break markup. */
  const esc = (s) =>
    String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  /* --- Layout primitive: Container (max-width column, defined in tokens.css) --- */
  const Container = (inner) => `<div class="container">${inner}</div>`;

  /* --- Layout primitive: Section ---
     opts: { id, content, modifier, reveal }
     A sticky-label split is composed by passing split markup as `content`. */
  const Section = ({ id = '', content = '', modifier = '', reveal = true } = {}) => `
    <section class="section${modifier ? ' ' + modifier : ''}"${id ? ` id="${esc(id)}"` : ''}>
      ${Container(reveal ? `<div data-reveal>${content}</div>` : content)}
    </section>`;

  /* --- Sticky-label split (What I Do, How I Work, About) ---
     opts: { label, content, modifier }
     `modifier` selects a column-ratio class defined in components.css,
     e.g. 'split--what' / 'split--about' — so ratios stay in CSS, never inline. */
  const Split = ({ label = '', content = '', modifier = '' } = {}) => `
    <div class="split${modifier ? ' ' + modifier : ''}">
      <div class="split__label">${SectionHeading(label)}</div>
      <div class="split__content">${content}</div>
    </div>`;

  /* --- Text primitives --- */
  const Eyebrow = (text) => `<span class="eyebrow">${esc(text)}</span>`;
  /* SectionHeading: same visual treatment as Eyebrow, but a real <h2> so
     the document outline reads h1 (hero) > h2 (each page section) >
     h3 (case-card titles) instead of skipping straight to h3. */
  const SectionHeading = (text) => `<h2 class="eyebrow">${esc(text)}</h2>`;
  const Pill = (text) => `<span class="pill">${esc(text)}</span>`;
  const Chip = (text) => `<span class="chip">${esc(text)}</span>`;

  /* Wrap given names in <strong class="emph"> for inline emphasis. */
  const emphasizeNames = (text, names) => {
    var out = esc(text);
    (names || []).forEach(function (n) {
      out = out.replace(esc(n), '<strong class="emph">' + esc(n) + '</strong>');
    });
    return out;
  };

  /* --- ThemeToggle: icon + eyebrow-style label, header chrome ---
     Same 44px-tall tap target as the mobile nav toggle, auto width.
     Icon and label both show the theme you'd switch TO (sun/"Light" in
     dark mode, moon/"Dark" in light) via CSS keyed on html[data-theme].
     Hidden without JS (html.js gate) since it can't act. Wired up by
     initThemeToggle, called from app.js / case-template.js.
     (impeccable live, Jul 2026 — chosen over an icon-only toggle and a
     segmented dual-icon toggle so it reads as part of the nav.) */
  const ThemeToggle = () => `
    <button class="theme-toggle" type="button" aria-label="Toggle color theme">
      <svg class="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8"/></svg>
      <svg class="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.4 14.2A8.3 8.3 0 0 1 9.8 3.6a8.3 8.3 0 1 0 10.6 10.6Z"/></svg>
      <span class="theme-toggle__label theme-toggle__label--to-light">Light</span>
      <span class="theme-toggle__label theme-toggle__label--to-dark">Dark</span>
    </button>
  `;

  /* Runtime wiring for every .theme-toggle on the page. Persists the
     choice; while no explicit choice exists, follows the OS setting
     live. Safe to define in the Node build sandbox (only touches
     document when called, which happens in-browser only). */
  function initThemeToggle() {
    var root = document.documentElement;
    var buttons = document.querySelectorAll('.theme-toggle');
    if (!buttons.length) return;

    function stored() {
      try { return localStorage.getItem('theme'); } catch (e) { return null; }
    }
    function relabel() {
      var light = root.getAttribute('data-theme') === 'light';
      buttons.forEach(function (btn) {
        btn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
      });
    }
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
        relabel();
      });
    });
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: light)');
      var follow = function (e) {
        if (stored()) return; /* explicit choice wins */
        root.setAttribute('data-theme', e.matches ? 'light' : 'dark');
        relabel();
      };
      if (mq.addEventListener) mq.addEventListener('change', follow);
      else if (mq.addListener) mq.addListener(follow);
    }
    relabel();
  }

  /* --- SiteHeader: sticky translucent chrome (build-spec §2) ---
     Includes a mobile nav toggle (hidden on desktop via CSS) so the
     four nav links never have to wrap or crowd the name at narrow
     widths. Wired up by app.js. */
  const SiteHeader = ({ name, nav }) => `
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="site-header__name" href="#top"><img class="site-header__logo" src="images/TN_Port_Logo.png" alt="${esc(name)}" width="201" height="45" /></a>
        <div class="site-header__cluster">
          <nav class="site-header__nav" id="primary-nav" aria-label="Primary">
            ${(nav || []).map(function (i) {
              return '<a class="site-header__link" href="' + esc(i.href) + '">' + esc(i.label) + '</a>';
            }).join('')}
          </nav>
          ${ThemeToggle()}
          <button class="site-header__toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation menu">
            <span class="site-header__toggle-bar"></span>
            <span class="site-header__toggle-bar"></span>
          </button>
        </div>
      </div>
    </header>`;

  /* --- CaseStudyCard: ONE component, mapped over the data array (build-spec §3c) ---
     Distilled (impeccable live, Jul 2026): eyebrow, title, question, CTA.
     props: number, client, theme, title, question, href, image{src,alt,caption}, cta */
  const CaseStudyCard = ({
    number, client, theme, title, question,
    href, image = {}, cta = 'View case study',
  }) => `
    <a class="case-card" href="${esc(href)}" data-reveal>
      <div class="case-card__body">
        <div class="case-card__eyebrow">
          <span class="case-card__num">${esc(number)}</span>
          <span class="case-card__client">${esc(client)}</span>
          <span class="case-card__dot" aria-hidden="true">·</span>
          <span class="case-card__theme">${esc(theme)}</span>
        </div>
        <h3 class="case-card__title">${esc(title)}</h3>
        <p class="case-card__question">${esc(question)}</p>
        <span class="case-card__cta">${esc(cta)} <span class="case-card__arrow" aria-hidden="true">&rarr;</span></span>
      </div>
      <div class="case-card__media">
        ${ImageSlot({ src: image.src, alt: image.alt, w: image.w, h: image.h, poster: image.poster, frame: image.frame })}
      </div>
    </a>`;

  /* --- ImageSlot: placeholder until a real screenshot is supplied ---
     If image.src is set, render a responsive <img> (or <video> for .mp4/.webm
     sources); else a labelled slot. */
  const ImageSlot = ({ src, alt, caption, w, h, poster, frame } = {}) => {
    if (!src) {
      return `<div class="image-slot" role="img" aria-label="${esc(alt || caption)}">
           <span class="image-slot__icon" aria-hidden="true">&#9633;</span>
           <span class="image-slot__caption">${esc(caption)}</span>
           <span class="image-slot__hint">image slot</span>
         </div>`;
    }
    const dims = w && h ? ` width="${w}" height="${h}"` : '';
    const posterAttr = poster ? ` poster="${esc(poster)}"` : '';
    /* autoplay is gated client-side (data-autoplay, see initAutoplayVideos in
       case-template.js) rather than the static attribute, so a
       prefers-reduced-motion visitor lands on the poster frame and never sees
       the clip start moving. */
    const media = /\.(mp4|webm)$/i.test(src)
      ? `<video class="image-slot__img" src="${esc(src)}"${dims}${posterAttr} preload="metadata" data-autoplay muted loop playsinline aria-label="${esc(alt)}"></video>`
      : `<img class="image-slot__img" src="${esc(src)}" alt="${esc(alt)}"${dims} loading="lazy" />`;
    /* frame: true wraps light-background artifacts (diagrams, exports from
       external tools) in a white card so they read as a held artifact rather
       than a raw screenshot bleeding onto the dark page. frame: 'dark' mats a
       light-mode product screenshot in the system's own dark surface instead,
       so off-brand UI colors (e.g. blue accents) read as windowed evidence
       rather than a second accent competing with the mint. */
    const framed = frame === 'dark'
      ? `<div class="image-slot__frame image-slot__frame--dark">${media}</div>`
      : frame ? `<div class="image-slot__frame">${media}</div>` : media;
    /* caption was previously write-only data on real images (only the empty
       placeholder rendered it); every image in case-content.js carries one,
       so surface it as a real figcaption instead of silently dropping it. */
    if (!caption) return framed;
    return `<figure class="image-slot__figure">${framed}<figcaption class="image-slot__figcaption">${esc(caption)}</figcaption></figure>`;
  };

  /* --- Quote: leading-glyph callout for a participant/session quote --- */
  const Quote = ({ text, attribution } = {}) => `
    <blockquote class="cs-quote">
      <p class="cs-quote__text">${esc(text)}</p>
      ${attribution ? `<footer class="cs-quote__attribution">${esc(attribution)}</footer>` : ''}
    </blockquote>`;

  /* --- PrincipleItem: optionally-numbered principle (build-spec §3d).
     "What I Do" numbers its kinds (a fixed taxonomy the case studies below
     map onto 1:1); "How I Work" principles are parallel, not sequential, so
     they render without a numeral — avoids reusing the same 01-0N device
     twice in three sections. */
  const PrincipleItem = ({ number, title, description }) => `
    <div class="principle${number ? '' : ' principle--unnumbered'}">
      ${number ? `<span class="principle__num">${esc(number)}</span>` : ''}
      <div class="principle__text">
        <h3 class="principle__title">${esc(title)}</h3>
        <p class="principle__desc">${esc(description)}</p>
      </div>
    </div>`;

  /* --- PortraitSlot: About portrait (4/5), real <img> when src is set --- */
  const PortraitSlot = ({ src, alt, w, h } = {}) =>
    src
      ? `<img class="portrait__img" src="${esc(src)}" alt="${esc(alt)}"${w && h ? ` width="${w}" height="${h}"` : ''} loading="lazy" />`
      : `<div class="portrait" role="img" aria-label="${esc(alt || 'Portrait')}">
           <span class="portrait__icon" aria-hidden="true">&#9633;</span>
           <span class="portrait__caption">Drop your photo</span>
           <span class="portrait__hint">portrait slot</span>
         </div>`;

  /* --- SiteFooter: giant mailto + contact columns (build-spec §3g) --- */
  const SiteFooter = (d) => `
    <footer class="site-footer section--footer" id="contact">
      <div class="container" data-reveal>
        ${SectionHeading(d.eyebrow)}
        <a class="site-footer__cta" href="mailto:${esc(d.email)}">${esc(d.cta)}
          <span class="site-footer__arrow" aria-hidden="true">&#8599;</span>
        </a>
        <div class="site-footer__details">
          <div class="site-footer__col">
            ${Eyebrow('Email')}
            <a class="site-footer__link" href="mailto:${esc(d.email)}">${esc(d.email)}</a>
          </div>
          <div class="site-footer__col">
            ${Eyebrow('Phone')}
            <a class="site-footer__link" href="tel:${esc(d.phone.replace(/\s+/g, ''))}">${esc(d.phone)}</a>
          </div>
          <div class="site-footer__col">
            ${Eyebrow('Social')}
            <a class="site-footer__link" href="${esc(d.linkedin.href)}" target="_blank" rel="noopener">
              ${esc(d.linkedin.label)} <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
        <p class="site-footer__copyright">${esc(d.copyright)}</p>
      </div>
    </footer>`;

  return {
    esc, Container, Section, Split, Eyebrow, SectionHeading, Pill, Chip,
    emphasizeNames, SiteHeader, CaseStudyCard, ImageSlot, Quote,
    PrincipleItem, PortraitSlot, SiteFooter, ThemeToggle, initThemeToggle,
  };
})();
