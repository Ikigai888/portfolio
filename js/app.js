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
        '<h1 class="hero__headline">' + headline + '</h1>' +
        '<p class="hero__lead">' + C.esc(d.lead) + '</p>' +
        '<a class="hero__cta" href="' + C.esc(d.cta.href) + '">' + C.esc(d.cta.label) +
          ' <span class="hero__cta-arrow" aria-hidden="true">&#8599;</span></a>' +
      '</div>';

    return C.Section({ id: 'top', content: content });
  }

  function WhatIDo(d) {
    var right =
      '<p class="statement">' + C.emphasizeNames(d.statement, d.emphasize, true) + '</p>' +
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
    return C.Section({ id: 'work', content: head + cards + AlsoShipped(D.alsoShipped), reveal: false });
  }

  function HowIWork(d) {
    var prose = d.body.map(function (p) {
      return '<p class="statement__body">' + C.esc(p) + '</p>';
    }).join('');
    var right =
      '<p class="statement">' + C.emphasizeNames(d.statement, d.emphasize || []) + '</p>' +
      prose +
      '<p class="statement__closing">' + C.esc(d.closing) + '</p>';
    return C.Section({
      id: 'approach',
      content: C.Split({ label: d.label, content: right, modifier: 'split--approach' }) + Process(D.process),
    });
  }

  function About(d) {
    // About uses the same sticky-label split as What I Do / How I Work: the
    // rail holds only the section label, so the three sections share one
    // rhythm. The identity (portrait + name + role + location) lives once,
    // as a contributor byline closing the content column.
    var p = d.portrait || {};
    var b = d.byline || {};
    // alt="" (decorative): the visible byline name sits right beside the
    // photo, so a named alt would make screen readers announce "Tad
    // Natsuhara" twice in a row.
    var avatar = p.src
      ? '<span class="about__avatar"><img src="' + C.esc(p.src) + '" alt="" loading="lazy" /></span>'
      : '';
    var meta = [b.role, b.location].filter(Boolean).map(C.esc).join(' &middot; ');

    var byline =
      '<div class="about__byline">' +
        avatar +
        '<div class="about__byline-text">' +
          '<span class="about__byline-name">' + C.esc(b.name) + '</span>' +
          (meta ? '<span class="about__byline-meta">' + meta + '</span>' : '') +
        '</div>' +
      '</div>';

    var right =
      '<p class="statement about__statement">' + C.emphasizeNames(d.statement, d.emphasize || []) + '</p>' +
      '<p class="statement__body">' + C.esc(d.body) + '</p>' +
      '<p class="about__credential">' + C.esc(d.credential.before) +
        '<a href="' + C.esc(d.credential.link.href) + '" target="_blank" rel="noopener">' +
          C.esc(d.credential.link.label) + '</a>' +
        C.esc(d.credential.after) + '</p>' +
      byline +
      Facts(D.facts);

    return C.Section({
      id: 'about',
      content: C.Split({ label: d.label, content: right, modifier: 'split--about' }),
    });
  }


  /* ---------- New sections (A3/A4 refresh) ---------- */

  function AlsoShipped(d) {
    return '<div class="also-shipped">' +
      '<div class="also-shipped__head">' +
        '<h3 class="also-shipped__title">' + C.esc(d.title) + ' <em>' + C.esc(d.titleEm) + '</em></h3>' +
        '<span class="also-shipped__meta">' + C.esc(d.meta) + '</span>' +
      '</div>' +
      '<div class="also-shipped__grid">' + d.items.map(C.ShortReadCard).join('') + '</div>' +
    '</div>';
  }

  var ARROW_L = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
  var ARROW_R = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  function pad2(i) { return (i < 9 ? '0' : '') + (i + 1); }

  function Process(d) {
    var tabs = d.stages.map(function (s, i) {
      return '<button type="button" class="stepper__tab" role="tab" data-step="' + i + '" aria-selected="' + (i === 0) + '" aria-controls="stepper-panel">' +
        '<span class="stepper__num">' + pad2(i) + '</span>' +
        '<span class="stepper__label"><span class="stepper__verb">' + C.esc(s.verb) + '</span>' +
        '<span class="stepper__artifact">' + C.esc(s.artifact) + '</span></span></button>';
    }).join('');
    var s0 = d.stages[0];
    return '<div class="stepper" data-stepper>' +
      '<div class="stepper__head">' +
        '<div><span class="eyebrow">' + C.esc(d.eyebrow) + '</span>' +
        '<h3 class="stepper__title">' + C.esc(d.title) + '</h3></div>' +
        '<p class="stepper__intro">' + C.esc(d.intro) + '</p>' +
      '</div>' +
      '<div class="stepper__tabs" role="tablist" aria-label="Project steps">' + tabs + '</div>' +
      '<div class="stepper__panel" id="stepper-panel" role="tabpanel">' +
        '<div class="stepper__media"><img data-step-img src="' + C.esc(s0.img) + '" alt="' + C.esc(s0.alt) + '" loading="lazy" /></div>' +
        '<div class="stepper__copy">' +
          '<div><span class="stepper__k">' + C.esc(d.didLabel) + '</span><p class="stepper__did" data-step-did>' + C.esc(s0.did) + '</p></div>' +
          '<div class="stepper__result"><span class="stepper__k stepper__k--accent">' + C.esc(d.changedLabel) + '</span><p class="stepper__changed" data-step-changed>' + C.esc(s0.changed) + '</p></div>' +
          '<div class="stepper__nav">' +
            '<button type="button" class="round-btn" data-step-prev aria-label="Previous step">' + ARROW_L + '</button>' +
            '<button type="button" class="round-btn round-btn--solid" data-step-next aria-label="Next step">' + ARROW_R + '</button>' +
            '<span class="stepper__count" aria-live="polite">Step <span data-step-num>01</span> of ' + pad2(d.stages.length - 1) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function Archive(d) {
    var rows = d.items.map(function (r, i) {
      return '<button type="button" class="archive__row" data-arch="' + i + '" aria-pressed="' + (i === 0) + '">' +
        '<span class="archive__co">' + C.esc(r.co) + '</span>' +
        '<span class="archive__main"><span class="archive__title">' + C.esc(r.title) + '</span>' +
        '<span class="archive__tags">' + C.esc(r.tags) + '</span></span>' +
        '<span class="archive__year">' + C.esc(r.year) + '</span></button>';
    }).join('');
    var p = d.items[0];
    var right =
      '<p class="statement">' + C.emphasizeNames(d.statement, d.emphasize || []) + '</p>' +
      '<p class="statement__body">' + C.esc(d.note) + '</p>';
    return C.Section({
      id: 'archive',
      content:
        C.Split({ label: d.label, content: right, modifier: 'split--about' }) +
        '<div class="archive" data-archive>' +
          '<div class="archive__list">' + rows + '</div>' +
          '<div class="archive__preview" aria-live="polite">' +
            '<div class="archive__img" data-arch-imgbox style="background:' + C.esc(p.bg) + '"><img data-arch-img src="' + C.esc(p.img) + '" alt="' + C.esc(p.alt) + '" style="object-fit:' + C.esc(p.fit) + '" loading="lazy" /></div>' +
            '<div class="archive__meta">' +
              '<span class="archive__kicker"><b data-arch-co>' + C.esc(p.co) + '</b> &middot; <span data-arch-year>' + C.esc(p.year) + '</span></span>' +
              '<h3 class="archive__ptitle" data-arch-title>' + C.esc(p.title) + '</h3>' +
              '<p class="archive__blurb" data-arch-blurb>' + C.esc(p.blurb) + '</p>' +
            '</div>' +
          '</div>' +
        '</div>',
    });
  }

  function Facts(d) {
    var f = d.items[0];
    return '<div class="facts" data-facts>' +
      '<div class="facts__top"><span class="eyebrow">' + C.esc(d.eyebrow) + ' &middot; <span data-fact-tag>' + C.esc(f.tag) + '</span></span>' +
      '<span class="facts__count"><span data-fact-seen>1</span> of ' + d.items.length + ' found</span></div>' +
      '<p class="facts__text" data-fact-text aria-live="polite">' + C.esc(f.text) + '</p>' +
      '<button type="button" class="btn-pill" data-fact-btn>' +
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>' +
        C.esc(d.button) + '</button>' +
    '</div>';
  }

  /* Interactions (browser only) */
  function initStepper() {
    var root = document.querySelector('[data-stepper]');
    if (!root) return;
    var stages = D.process.stages;
    var tabs = root.querySelectorAll('.stepper__tab');
    var cur = 0;
    function show(i) {
      cur = (i + stages.length) % stages.length;
      var s = stages[cur];
      var img = root.querySelector('[data-step-img]');
      img.src = s.img; img.alt = s.alt;
      root.querySelector('[data-step-did]').textContent = s.did;
      root.querySelector('[data-step-changed]').textContent = s.changed;
      root.querySelector('[data-step-num]').textContent = pad2(cur);
      tabs.forEach(function (t, j) { t.setAttribute('aria-selected', j === cur ? 'true' : 'false'); });
    }
    tabs.forEach(function (t, j) { t.addEventListener('click', function () { show(j); }); });
    root.querySelector('[data-step-prev]').addEventListener('click', function () { show(cur - 1); });
    root.querySelector('[data-step-next]').addEventListener('click', function () { show(cur + 1); });
  }

  function initArchive() {
    var root = document.querySelector('[data-archive]');
    if (!root) return;
    var items = D.archive.items;
    var rows = root.querySelectorAll('.archive__row');
    var cur = 0;
    function pick(i) {
      if (i === cur) return;
      cur = i;
      var r = items[i];
      var img = root.querySelector('[data-arch-img]');
      img.src = r.img; img.alt = r.alt; img.style.objectFit = r.fit;
      root.querySelector('[data-arch-imgbox]').style.background = r.bg;
      root.querySelector('[data-arch-co]').textContent = r.co;
      root.querySelector('[data-arch-year]').textContent = r.year;
      root.querySelector('[data-arch-title]').textContent = r.title;
      root.querySelector('[data-arch-blurb]').textContent = r.blurb;
      rows.forEach(function (b, j) { b.setAttribute('aria-pressed', j === i ? 'true' : 'false'); });
    }
    rows.forEach(function (b, j) {
      b.addEventListener('click', function () { pick(j); });
      b.addEventListener('mouseenter', function () { pick(j); });
      b.addEventListener('focus', function () { pick(j); });
    });
  }

  function initFacts() {
    var root = document.querySelector('[data-facts]');
    if (!root) return;
    var items = D.facts.items;
    var cur = 0, seen = [0];
    root.querySelector('[data-fact-btn]').addEventListener('click', function () {
      var n = cur;
      while (n === cur) n = Math.floor(Math.random() * items.length);
      cur = n;
      if (seen.indexOf(n) === -1) seen.push(n);
      root.querySelector('[data-fact-tag]').textContent = items[n].tag;
      root.querySelector('[data-fact-text]').textContent = items[n].text;
      root.querySelector('[data-fact-seen]').textContent = seen.length;
    });
  }

  /* ---------- Mobile nav toggle: shows/hides .site-header__nav below 600px ----------
     Closes on link click (was already handled), plus two real-world paths a
     visitor expects to work: pressing Escape, and tapping/clicking anywhere
     outside the open dropdown. Neither is optional — a menu that only closes
     by re-tapping the same icon reads as stuck. */
  function initNavToggle() {
    var toggle = document.querySelector('.site-header__toggle');
    var nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    function isOpen() { return nav.classList.contains('is-open'); }
    function close() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    function open() {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }
    toggle.addEventListener('click', function () {
      if (isOpen()) close(); else open();
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || !isOpen()) return;
      close();
      toggle.focus(); // return keyboard focus to the control that opened it
    });
    document.addEventListener('click', function (e) {
      if (!isOpen() || nav.contains(e.target) || toggle.contains(e.target)) return;
      close();
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
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    if (!els.length) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function show(el) {
      el.classList.add('is-visible');
      el.removeAttribute('data-reveal-armed');
    }

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(show);
      return;
    }

    // Arm only here, once the observer is known-good: an unarmed [data-reveal]
    // paints at full opacity (see tokens.css), so nothing above this line can
    // leave a section invisible.
    els.forEach(function (el) { el.setAttribute('data-reveal-armed', ''); });

    // threshold 0, never a fraction — see the matching note in case-template.js.
    // For an element taller than the viewport the largest reachable ratio is
    // (root height / element height); at the old 0.12 a full-height section
    // could never reach it on a short window, and the section stayed blank
    // while still holding its layout. rootMargin alone sets the trigger point.
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { show(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });

    // Backstop for anything the observer misses (deep-link landings, restored
    // scroll positions, a tab that renders while hidden). Same -8% bottom edge
    // as the observer so the trigger point doesn't shift.
    function sweep() {
      var vh = window.innerHeight || 0;
      els.forEach(function (el) {
        if (!el.hasAttribute('data-reveal-armed')) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) { show(el); io.unobserve(el); }
      });
      var pending = els.some(function (el) { return el.hasAttribute('data-reveal-armed'); });
      if (!pending) detach();
    }
    // See the matching note in case-template.js: a hidden document never fires
    // IntersectionObserver, so a headless renderer or a background tab that
    // scrolls programmatically would leave everything past the first fold armed
    // and invisible. The throttle is time-based because requestAnimationFrame is
    // parked while hidden too. Both listeners detach once nothing is left armed.
    var lastSweep = 0;
    function onScroll() {
      var now = Date.now();
      if (now - lastSweep < 100) return;
      lastSweep = now;
      sweep();
    }
    function onVisibility() { if (!document.hidden) sweep(); }
    function detach() {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    if (document.readyState === 'complete') sweep();
    else window.addEventListener('load', sweep);
    setTimeout(sweep, 1200);
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
     on #top; the CSS ::before layer (components.css) reads it as a
     GPU-composited translate. rAF-throttled, passive listener,
     reduced-motion aware. If this never runs, --hero-parallax stays unset
     (0px) and the background is simply static. */
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
        Archive(D.archive) +
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
    initHeroParallax();
    initStepper();
    initArchive();
    initFacts();
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
