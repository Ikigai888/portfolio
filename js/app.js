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
      '<div class="hero">' +
        '<hr class="hero__rule" />' +
        '<p class="eyebrow hero__eyebrow">' + C.esc(d.eyebrow) + '</p>' +
        '<h1 class="hero__headline">' + headline + '</h1>' +
        '<p class="hero__lead">' + C.esc(d.lead) + '</p>' +
        '<a class="hero__cta" href="' + C.esc(d.cta.href) + '">' + C.esc(d.cta.label) +
          ' <span class="hero__cta-arrow" aria-hidden="true">&#8599;</span></a>' +
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
      '<p class="statement">' + C.emphasizeNames(d.statement, d.emphasize || []) + '</p>' +
      principles +
      '<p class="statement__closing">' + C.esc(d.closing) + '</p>';
    return C.Section({
      id: 'approach',
      content: C.Split({ label: d.label, content: right, modifier: 'split--approach' }),
    });
  }

  function About(d) {
    // About reuses the sticky-label split: eyebrow + status-dot name in the
    // left column, the serif statement + prose in the right. A small
    // circular portrait sits above the name as a byline photo.
    var p = d.portrait || {};
    var avatar = p.src
      ? '<span class="about__avatar"><img src="' + C.esc(p.src) + '" alt="' + C.esc(p.alt) + '" loading="lazy" /></span>'
      : '';

    var content =
      '<div class="split split--about">' +
        '<div class="split__label about__meta">' +
          avatar +
          C.SectionHeading(d.label) +
          '<p class="about__name"><span class="about__dot" aria-hidden="true"></span>' +
            C.esc(d.name) + '</p>' +
        '</div>' +
        '<div class="split__content">' +
          '<p class="statement about__statement">' + C.emphasizeNames(d.statement, d.emphasize || []) + '</p>' +
          '<p class="statement__body">' + C.esc(d.body) + '</p>' +
          '<p class="about__credential">' + C.esc(d.credential.before) +
            '<a href="' + C.esc(d.credential.link.href) + '" target="_blank" rel="noopener">' +
              C.esc(d.credential.link.label) + '</a>' +
            C.esc(d.credential.after) + '</p>' +
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

  /* ---------- Nav scrollspy: aria-current on the section in view ----------
     Same technique as the case-study subnav's scrollspy (case-template.js
     initSubnav) — gives the sticky nav a "you are here" cue that was
     previously missing on the homepage. */
  function initNavScrollSpy() {
    var links = document.querySelectorAll('.site-header__link');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var linkFor = {};
    links.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      if (id) linkFor[id] = a;
    });
    var active = null;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var link = linkFor[entry.target.id];
        if (!link || link === active) return;
        if (active) active.removeAttribute('aria-current');
        active = link;
        active.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(linkFor).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) spy.observe(sec);
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

  /* ---------- Thesis settle (hero headline, homepage only) ----------
     The headline enacts its own argument: glyphs load slightly scattered
     and blurred (complexity), then spring crisply into place; the accent
     line settles last. Runs once per load; afterwards the DOM is restored
     to the plain static headline so kerning, text-wrap: balance, and
     screen-reader output are exactly what a no-motion visitor gets. */
  function initThesisSettle() {
    var headline = document.querySelector('.hero__headline');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!headline || reduce || !('animate' in Element.prototype)) return;

    var lines = Array.prototype.slice.call(headline.querySelectorAll('.hero__line'));
    var originals = lines.map(function (l) { return l.textContent; });
    headline.setAttribute('aria-label', originals.join(' '));

    var glyphs = [];
    lines.forEach(function (line, li) {
      var words = line.textContent.split(' ');
      line.textContent = '';
      line.setAttribute('aria-hidden', 'true');
      words.forEach(function (word, wi) {
        var w = document.createElement('span');
        w.className = 'hero__word';
        for (var i = 0; i < word.length; i++) {
          var g = document.createElement('span');
          g.className = 'hero__glyph';
          g.textContent = word[i];
          w.appendChild(g);
          glyphs.push({ el: g, line: li });
        }
        line.appendChild(w);
        if (wi < words.length - 1) line.appendChild(document.createTextNode(' '));
      });
    });

    // Deterministic scatter so every load settles the same way
    var seed = 7;
    function rand() { seed = (seed * 16807) % 2147483647; return seed / 2147483647 - 0.5; }

    var anims = glyphs.map(function (item, idx) {
      var lineDelay = item.line === 0 ? 0 : 460;
      var delay = lineDelay + idx * 9 + Math.abs(rand()) * 70;
      var dx = rand() * 14, dy = rand() * 12, rot = rand() * 5;
      return item.el.animate([
        { opacity: 0.12, transform: 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px) rotate(' + rot.toFixed(1) + 'deg)', filter: 'blur(5px)' },
        { opacity: 1, transform: 'none', filter: 'blur(0px)' }
      ], {
        duration: item.line === 0 ? 760 : 600,
        delay: delay,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)', /* ease-out-quint */
        fill: 'backwards'
      });
    });

    Promise.all(anims.map(function (a) { return a.finished; })).then(function () {
      lines.forEach(function (line, i) {
        line.textContent = originals[i];
        line.removeAttribute('aria-hidden');
      });
      headline.removeAttribute('aria-label');
    }).catch(function () { /* interrupted (e.g. nav away) — leave as-is */ });
  }

  /* ---------- Assemble ----------
     buildPage is pure (data -> HTML string) so it can also run in Node
     at build time (see scripts/build.mjs) to pre-render index.html. */
  function buildPage() {
    return (
      '<a class="skip-link" href="#content">Skip to content</a>' +
      C.SiteHeader(D.header) +
      '<main id="content">' +
        Hero(D.hero) +
        WhatIDo(D.whatIDo) +
        CaseStudies(D.caseStudies) +
        HowIWork(D.howIWork) +
        About(Object.assign({ portrait: D.hero.portrait }, D.about)) +
      '</main>' +
      C.SiteFooter(D.contact)
    );
  }

  function render() {
    document.getElementById('app').innerHTML = buildPage();
    initReveal();
    initNavToggle();
    initNavScrollSpy();
    initThesisSettle();
    C.initThemeToggle();
  }

  window.App = { render: render, buildPage: buildPage };

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', render);
    } else {
      render();
    }
  }
})();
