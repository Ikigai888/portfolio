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

  /* --- ThemeToggle: icon-only sliding switch, header chrome ---
     A pill track holds both icons; a solid accent capsule sits behind
     whichever one is active and slides between them on click. No text
     labels — the position of the capsule (and each icon's own color) is
     the only state cue needed. Hidden without JS (html.js gate) since it
     can't act. Wired up by initThemeToggle, called from app.js /
     case-template.js. (impeccable live, Jul 2026 — third iteration: the
     original single "switch to X" button, then a two-option fading-label
     pair, then this icon-only sliding switch per direct feedback that the
     labeled pair read as cluttered next to the eyebrow nav.) */
  const ThemeToggle = () => `
    <div class="theme-toggle" role="group" aria-label="Color theme">
      <button type="button" class="theme-toggle__item" data-theme-btn="light" aria-pressed="false" aria-label="Light theme"><svg class="theme-toggle__icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8"/></svg></button>
      <button type="button" class="theme-toggle__item" data-theme-btn="dark" aria-pressed="false" aria-label="Dark theme"><svg class="theme-toggle__icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.4 14.2A8.3 8.3 0 0 1 9.8 3.6a8.3 8.3 0 1 0 10.6 10.6Z"/></svg></button>
      <span class="theme-toggle__thumb" aria-hidden="true"></span>
    </div>
  `;

  /* Runtime wiring for every .theme-toggle group on the page. Persists the
     choice; while no explicit choice exists, follows the OS setting live.
     Safe to define in the Node build sandbox (only touches document when
     called, which happens in-browser only). */
  function initThemeToggle() {
    var root = document.documentElement;
    var buttons = document.querySelectorAll('.theme-toggle__item');
    if (!buttons.length) return;

    function stored() {
      try { return localStorage.getItem('theme'); } catch (e) { return null; }
    }
    function sync() {
      var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      buttons.forEach(function (btn) {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-theme-btn') === current ? 'true' : 'false');
      });
    }
    function set(next) {
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    }
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () { set(btn.getAttribute('data-theme-btn')); });
    });
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: light)');
      var follow = function (e) {
        if (stored()) return; /* explicit choice wins */
        root.setAttribute('data-theme', e.matches ? 'light' : 'dark');
        sync();
      };
      if (mq.addEventListener) mq.addEventListener('change', follow);
      else if (mq.addListener) mq.addListener(follow);
    }
    sync();
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
    <a class="case-card" id="${esc(href.replace(/\.html$/, ''))}" href="${esc(href)}" data-reveal>
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
  const ImageSlot = ({ src, alt, caption, w, h, poster } = {}) => {
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
    /* caption was previously write-only data on real images (only the empty
       placeholder rendered it); every image in case-content.js carries one,
       so surface it as a real figcaption instead of silently dropping it. */
    if (!caption) return media;
    return `<figure class="image-slot__figure">${media}<figcaption class="image-slot__figcaption">${esc(caption)}</figcaption></figure>`;
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
        <p class="site-footer__copyright">&copy; ${new Date().getFullYear()} ${esc(d.copyrightName)}</p>
      </div>
    </footer>`;

  return {
    esc, Container, Section, Split, Eyebrow, SectionHeading, Pill, Chip,
    emphasizeNames, SiteHeader, CaseStudyCard, ImageSlot, Quote,
    PrincipleItem, PortraitSlot, SiteFooter, ThemeToggle, initThemeToggle,
  };
})();
