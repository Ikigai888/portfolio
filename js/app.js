/* ============================================================
   App entry — assembles the page from content + components and
   wires the scroll-reveal utility (build-spec §1).
   Each section is one builder that maps content (js/content.js)
   through components (js/components.js). No copy or layout here.
   ============================================================ */

(function () {
  var C = window.Components;
  var D = window.Content;

  /* ---------- Section builders ---------- */

  function Hero(d) {
    var headline = d.headline.map(function (line) {
      return '<span class="hero__line' + (line.accent ? ' hero__line--accent' : '') + '">' +
        C.esc(line.text) + '</span>';
    }).join('');

    var content =
      '<div class="hero__badge">' +
        C.Pill(d.pill) +
        '<span class="hero__meta">' + C.esc(d.meta) + '</span>' +
      '</div>' +
      '<h1 class="hero__headline">' + headline + '</h1>' +
      '<div class="hero__subtext">' +
        '<p class="hero__lead">' + C.esc(d.lead) + '</p>' +
      '</div>';

    return C.Section({ id: 'top', content: content });
  }

  function WhatIDo(d) {
    var right =
      '<p class="statement">' + C.emphasizeNames(d.statement, d.emphasize) + '</p>' +
      '<div class="kind-list">' + d.kinds.map(C.PrincipleItem).join('') + '</div>' +
      '<p class="whatido__closing">' + C.esc(d.closing) + '</p>';
    return C.Section({
      content: C.Split({ label: d.label, content: right, modifier: 'split--what' }),
    });
  }

  function CaseStudies(d) {
    var head =
      '<div class="section-opener">' +
        '<h2 class="section-opener__label">' + C.esc(d.label) + '</h2>' +
        '<span class="section-opener__meta">' + C.esc(d.meta) + '</span>' +
      '</div>';
    var cards =
      '<div class="case-stack">' +
        d.items.map(function (item) {
          return C.CaseStudyCard(Object.assign({ cta: d.cta }, item));
        }).join('') +
      '</div>';
    return C.Section({ id: 'work', content: head + cards, reveal: false });
  }

  function HowIWork(d) {
    var principles =
      '<div class="principle-grid">' +
        d.principles.map(C.PrincipleItem).join('') +
      '</div>';
    var right =
      '<p class="statement">' + C.esc(d.statement) + '</p>' +
      principles +
      '<p class="statement__closing">' + C.esc(d.closing) + '</p>';
    return C.Section({
      id: 'approach',
      content: C.Split({ label: d.label, content: right, modifier: 'split--approach' }),
    });
  }

  function About(d) {
    // About reuses the .split layout primitive, but its left column is a
    // sticky portrait (not an eyebrow), so the markup is composed directly.
    var content =
      '<div class="split split--about">' +
        '<div class="split__label about__media">' +
          C.PortraitSlot(d.portrait) +
          '<p class="about__name"><span class="about__dot" aria-hidden="true"></span>' +
            C.esc(d.name) + '</p>' +
        '</div>' +
        '<div class="split__content">' +
          C.SectionHeading(d.label) +
          '<p class="statement about__statement">' + C.esc(d.statement) + '</p>' +
          '<p class="statement__body">' + C.esc(d.body) + '</p>' +
          '<p class="about__credential">' + C.esc(d.credential) + '</p>' +
        '</div>' +
      '</div>';
    return C.Section({ id: 'about', content: content });
  }

  /* ---------- Mobile nav toggle: shows/hides .site-header__nav below 600px ---------- */
  function initNavToggle() {
    var toggle = document.querySelector('.site-header__toggle');
    var nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });
  }

  /* ---------- Scroll-reveal: add .is-visible once on enter. Reduced-motion aware. ---------- */
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Assemble ---------- */
  function render() {
    var page =
      '<a class="skip-link" href="#content">Skip to content</a>' +
      C.SiteHeader(D.header) +
      '<main id="content">' +
        Hero(D.hero) +
        WhatIDo(D.whatIDo) +
        CaseStudies(D.caseStudies) +
        HowIWork(D.howIWork) +
        About(D.about) +
      '</main>' +
      C.SiteFooter(D.contact);

    document.getElementById('app').innerHTML = page;
    initReveal();
    initNavToggle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
