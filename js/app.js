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

  /* ---------- Hero parallax (homepage only) ----------
     Drifts the hero motif at a fraction of scroll by setting --hero-parallax
     on #top; the CSS ::before layer reads it as a GPU-composited translate.
     rAF-throttled, passive listener, reduced-motion aware. If this never runs,
     --hero-parallax stays unset (0px) and the background is simply static. */
  function initHeroParallax() {
    var hero = document.getElementById('top');
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var ticking = false;
    function update() {
      var y = Math.min(window.pageYOffset * 0.2, 70); /* slight: 0.2× scroll, capped at 70px (< 100px bleed) */
      hero.style.setProperty('--hero-parallax', y.toFixed(1) + 'px');
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
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
        About(D.about) +
      '</main>' +
      C.SiteFooter(D.contact)
    );
  }

  function render() {
    document.getElementById('app').innerHTML = buildPage();
    initReveal();
    initNavToggle();
    initThesisSettle();
    initHeroParallax();
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
