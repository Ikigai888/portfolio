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

  /* --- SiteHeader: sticky translucent chrome (build-spec §2) ---
     Includes a mobile nav toggle (hidden on desktop via CSS) so the
     four nav links never have to wrap or crowd the name at narrow
     widths. Wired up by app.js. */
  const SiteHeader = ({ name, nav }) => `
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="site-header__name" href="#top"><img class="site-header__logo" src="images/TN_Port_Logo.png" alt="${esc(name)}" width="201" height="45" /></a>
        <button class="site-header__toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation menu">
          <span class="site-header__toggle-bar"></span>
          <span class="site-header__toggle-bar"></span>
        </button>
        <nav class="site-header__nav" id="primary-nav" aria-label="Primary">
          ${(nav || []).map(function (i) {
            return '<a class="site-header__link" href="' + esc(i.href) + '">' + esc(i.label) + '</a>';
          }).join('')}
        </nav>
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
        ${ImageSlot(image)}
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
    return /\.(mp4|webm)$/i.test(src)
      ? `<video class="image-slot__img" src="${esc(src)}"${dims}${posterAttr} preload="metadata" autoplay muted loop playsinline aria-label="${esc(alt)}"></video>`
      : `<img class="image-slot__img" src="${esc(src)}" alt="${esc(alt)}"${dims} loading="lazy" />`;
  };

  /* --- Quote: accent-bordered callout for a participant/session quote --- */
  const Quote = ({ text, attribution } = {}) => `
    <blockquote class="cs-quote">
      <p class="cs-quote__text">&ldquo;${esc(text)}&rdquo;</p>
      ${attribution ? `<footer class="cs-quote__attribution">${esc(attribution)}</footer>` : ''}
    </blockquote>`;

  /* --- PrincipleItem: numbered principle (build-spec §3d) --- */
  const PrincipleItem = ({ number, title, description }) => `
    <div class="principle">
      <span class="principle__num">${esc(number)}</span>
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
    PrincipleItem, PortraitSlot, SiteFooter,
  };
})();
