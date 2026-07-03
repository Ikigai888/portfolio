/* ============================================================
   Case Study Template — ONE renderer, three pages.
   Reads from window.CaseContent[slug] and window.Components.
   ============================================================ */

(function () {
  var C = window.Components;

  /* ---- helpers ---- */
  function esc(s) { return C.esc(s); }
  function Eyebrow(t) { return C.Eyebrow(t); }
  function Chip(t) { return C.Chip(t); }
  /* Single source of truth for section-id slugs, shared by the subnav
     links (CaseHeader) and the section anchors themselves, so the two
     can never drift out of sync. */
  function slugify(label) { return label.toLowerCase().replace(/\s+/g, '-'); }

  function sectionNum(n, label) {
    return '<span class="cs-section-num">' + esc(n) + ' &middot; ' + esc(label.toUpperCase()) + '</span>';
  }

  /* Arrow bullet used in summary outcomes and impact cards */
  function Arrow() { return '<span class="cs-arrow" aria-hidden="true">&#x2192;</span>'; }

  /* Renders one or more full-width supporting images/GIFs. Single item stays
     full-bleed (existing behavior); 2+ lay out as a responsive gallery. */
  function FullImages(images) {
    if (!images || !images.length) return '';
    if (images.length === 1) {
      return '<div class="cs-full-image" data-reveal>' + C.ImageSlot(images[0]) + '</div>';
    }
    return '<div class="cs-full-image-grid" data-reveal>' +
      images.map(function (img) {
        return '<div class="cs-full-image cs-full-image--grid">' + C.ImageSlot(img) + '</div>';
      }).join('') +
    '</div>';
  }

  /* ---- Section builders ---- */

  function CaseHeader(d) {
    var navLinks = d.nav.map(function (label, i) {
      return '<a class="case-header__nav-link" href="#cs-' + slugify(label) + '">' + esc(label) + '</a>';
    }).join('');
    return (
      '<header class="case-header">' +
        '<div class="container case-header__top">' +
          '<a class="case-header__back" href="index.html">' +
            '<span aria-hidden="true">&larr;</span> Tad Natsuhara' +
          '</a>' +
          '<span class="case-header__tag">' + Eyebrow('Case Study') + ' &middot; ' +
            '<span class="case-header__client">' + esc(d.meta.client) + '</span>' +
          '</span>' +
        '</div>' +
        '<nav class="case-header__subnav" aria-label="Case study sections">' +
          '<div class="container case-header__subnav-inner">' + navLinks + '</div>' +
        '</nav>' +
      '</header>'
    );
  }

  function SummarySection(s) {
    var chips = s.capabilities.slice(0, 3).map(Chip).join(''); // distilled: top three
    var bullets = s.outcomes.map(function (o) {
      return '<li class="cs-summary__outcome">' + Arrow() + '<span>' + esc(o) + '</span></li>';
    }).join('');

    return (
      '<section class="section cs-summary" id="cs-summary" data-reveal>' +
        '<div class="container">' +
          '<div class="cs-summary__card">' +
            '<div class="cs-summary__left">' +
              '<div class="cs-summary__eyebrow">' +
                '<span class="cs-summary__num">' + esc(s.number) + '</span>' +
                '<span class="cs-summary__client">' + esc(s.client) + '</span>' +
                '<span class="cs-summary__theme"><span class="cs-summary__sep" aria-hidden="true">&middot;&nbsp;</span>' + esc(s.theme) + '</span>' +
              '</div>' +
              '<h1 class="cs-summary__title">' + esc(s.title) + '</h1>' +
              '<p class="cs-summary__question">' + esc(s.question) + '</p>' +
              '<div class="cs-summary__meta">' +
                '<div class="cs-summary__meta-row">' +
                  Eyebrow('Role') +
                  '<p class="cs-summary__meta-val">' + esc(s.role) + '</p>' +
                '</div>' +
              '</div>' +
              '<div class="cs-summary__caps">' +
                Eyebrow('Key Capabilities') +
                '<div class="cs-summary__chips">' + chips + '</div>' +
              '</div>' +
            '</div>' +
            '<div class="cs-summary__right">' +
              '<ul class="cs-summary__outcomes">' + bullets + '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  function ContextSection(ctx) {
    var paras = ctx.body.map(function (p) {
      return '<p class="cs-body">' + esc(p) + '</p>';
    }).join('');
    return (
      '<section class="section cs-split-section" id="cs-context" data-reveal>' +
        '<div class="container">' +
          '<div class="cs-split">' +
            '<div class="cs-split__left">' +
              sectionNum(ctx.number, ctx.label) +
              '<h2 class="cs-section-headline">' + esc(ctx.headline) + '</h2>' +
            '</div>' +
            '<div class="cs-split__right">' + paras + '</div>' +
          '</div>' +
          FullImages(ctx.images) +
        '</div>' +
      '</section>'
    );
  }

  function ChallengeBlock(item, idx) {
    var isEven = idx % 2 === 0;
    var hasImage = item.image && item.image.src;
    var media = hasImage
      ? '<div class="cs-challenge__media">' + C.ImageSlot(item.image) + '</div>'
      : '';
    var impact = item.impact
      ? '<p class="cs-decision"><strong class="cs-decision__label">Impact · </strong>' + esc(item.impact) + '</p>'
      : '';
    return (
      '<div class="cs-challenge" data-reveal>' +
        '<div class="cs-challenge__inner' + (hasImage ? ' cs-challenge__inner--' + (isEven ? 'left' : 'right') : ' cs-challenge__inner--solo') + '">' +
          '<div class="cs-challenge__text">' +
            '<span class="cs-challenge__label">' + esc('Challenge ' + item.number) + '</span>' +
            '<h3 class="cs-challenge__headline">' + esc(item.headline) + '</h3>' +
            '<p class="cs-body">' + esc(item.body) + '</p>' +
            '<p class="cs-options">' + esc(item.options) + '</p>' +
            '<p class="cs-decision"><strong class="cs-decision__label">Decision · </strong>' + esc(item.decision) + '</p>' +
            impact +
          '</div>' +
          media +
        '</div>' +
      '</div>'
    );
  }

  function ChallengesSection(ch) {
    var blocks = ch.items.map(function (item, i) { return ChallengeBlock(item, i); }).join('');
    return (
      '<section class="section cs-challenges" id="cs-challenges" data-reveal>' +
        '<div class="container">' +
          '<div class="cs-split">' +
            '<div class="cs-split__left">' +
              sectionNum(ch.number, ch.label) +
              '<h2 class="cs-section-headline">' + esc(ch.intro) + '</h2>' +
            '</div>' +
            '<div class="cs-split__right">' +
              '<p class="cs-body cs-body--lead">' + esc(ch.body) + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container cs-challenge-list">' + blocks + '</div>' +
      '</section>'
    );
  }

  function AiSection(ai) {
    var paras = ai.body.map(function (p) {
      return '<p class="cs-body">' + esc(p) + '</p>';
    }).join('');
    return (
      '<section class="section cs-split-section" id="cs-' + slugify(ai.label) + '" data-reveal>' +
        '<div class="container">' +
          '<div class="cs-split">' +
            '<div class="cs-split__left">' +
              sectionNum(ai.number, ai.label) +
              '<h2 class="cs-section-headline">' + esc(ai.headline) + '</h2>' +
            '</div>' +
            '<div class="cs-split__right">' + paras + '</div>' +
          '</div>' +
          FullImages(ai.images || (ai.image && ai.image.src ? [ai.image] : [])) +
        '</div>' +
      '</section>'
    );
  }

  function ValidationSection(v) {
    var paras = v.body.map(function (p) {
      return '<p class="cs-body">' + esc(p) + '</p>';
    }).join('');
    var cue = v.cue ? '<p class="cs-body cs-val-cue">' + esc(v.cue) + '</p>' : '';
    var findings = v.findings
      ? '<ul class="cs-val-list">' + v.findings.map(function (f) {
          return '<li class="cs-val-item">' + esc(f) + '</li>';
        }).join('') + '</ul>'
      : '';
    var quote = v.quote ? C.Quote(v.quote) : '';
    return (
      '<section class="section cs-split-section" id="cs-validation" data-reveal>' +
        '<div class="container">' +
          '<div class="cs-split">' +
            '<div class="cs-split__left">' +
              sectionNum(v.number, v.label) +
              '<h2 class="cs-section-headline">' + esc(v.headline) + '</h2>' +
            '</div>' +
            '<div class="cs-split__right">' + paras + cue + findings + quote + '</div>' +
          '</div>' +
          FullImages(v.images || (v.image && v.image.src ? [v.image] : [])) +
        '</div>' +
      '</section>'
    );
  }

  function OutcomeSection(o) {
    var impacts = o.impacts.map(function (imp) {
      return (
        '<div class="cs-impact">' +
          '<p class="cs-impact__label">' + esc(imp.label) + '</p>' +
          '<p class="cs-impact__desc">' + esc(imp.desc) + '</p>' +
        '</div>'
      );
    }).join('');
    return (
      '<section class="cs-outcome" id="cs-outcome" data-reveal>' +
        '<div class="container">' +
          sectionNum(o.number, o.label) +
          '<h2 class="cs-outcome__headline">' + esc(o.headline) + '</h2>' +
          '<p class="cs-outcome__body">' + esc(o.body) + '</p>' +
          '<div class="cs-impact-grid">' + impacts + '</div>' +
        '</div>' +
      '</section>'
    );
  }

  function ReflectionSection(r, nextCase) {
    var paras = r.body.map(function (p) {
      return '<p class="cs-body">' + esc(p) + '</p>';
    }).join('');
    var nextLink = nextCase
      ? '<div class="cs-next">' +
          '<span class="cs-next__label">' + Eyebrow('Next Case Study') + '</span>' +
          '<a class="cs-next__link" href="' + esc(nextCase.href) + '">' +
            esc(nextCase.label) +
            ' <span class="cs-next__arrow" aria-hidden="true">&rarr;</span>' +
          '</a>' +
        '</div>'
      : '<div class="cs-next">' +
          '<span class="cs-next__label">' + Eyebrow('All Work') + '</span>' +
          '<a class="cs-next__link" href="index.html#work">' +
            'Back to homepage <span class="cs-next__arrow" aria-hidden="true">&rarr;</span>' +
          '</a>' +
        '</div>';
    return (
      '<section class="section cs-split-section" id="cs-reflection" data-reveal>' +
        '<div class="container">' +
          '<div class="cs-split">' +
            '<div class="cs-split__left">' +
              sectionNum(r.number, r.label) +
              '<h2 class="cs-section-headline">' + esc(r.headline) + '</h2>' +
            '</div>' +
            '<div class="cs-split__right">' + paras + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' + nextLink + '</div>' +
      '</section>'
    );
  }

  function CaseFooter(f) {
    return (
      '<footer class="cs-footer">' +
        '<div class="container cs-footer__inner">' +
          '<a class="cs-footer__back" href="index.html">&larr; All work</a>' +
          '<a class="cs-footer__link" href="mailto:' + esc(f.email) + '">' + esc(f.email) + '</a>' +
          '<a class="cs-footer__link" href="' + esc(f.linkedin.href) + '" target="_blank" rel="noopener">' +
            esc(f.linkedin.label) + ' <span aria-hidden="true">&#8599;</span>' +
          '</a>' +
          '<span class="cs-footer__copy">' + esc(f.copyright) + '</span>' +
        '</div>' +
      '</footer>'
    );
  }

  /* ---- Reveal utility (same as homepage) ---- */
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
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Subnav: overflow fade + scrollspy (aria-current) ---- */
  function initSubnav() {
    var subnav = document.querySelector('.case-header__subnav');
    var scroller = document.querySelector('.case-header__subnav-inner');
    if (!subnav || !scroller) return;

    function updateFade() {
      var more = scroller.scrollWidth - scroller.clientWidth - scroller.scrollLeft > 8;
      subnav.classList.toggle('has-more', more);
    }
    scroller.addEventListener('scroll', updateFade, { passive: true });
    window.addEventListener('resize', updateFade);
    updateFade();

    if (!('IntersectionObserver' in window)) return;
    var linkFor = {};
    scroller.querySelectorAll('.case-header__nav-link').forEach(function (a) {
      linkFor[a.getAttribute('href').slice(1)] = a;
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
        // keep the active link visible inside the scroller (instant, no motion)
        if (active.offsetLeft < scroller.scrollLeft ||
            active.offsetLeft + active.offsetWidth > scroller.scrollLeft + scroller.clientWidth) {
          scroller.scrollLeft = Math.max(0, active.offsetLeft - 24);
        }
        updateFade();
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(linkFor).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) spy.observe(sec);
    });
  }

  /* ---- Entry point ----
     buildPage is pure (slug -> HTML string) so it can also run in Node
     at build time (see scripts/build.mjs) to pre-render each case page. */
  function buildPage(slug) {
    var d = window.CaseContent[slug];
    if (!d) { return '<p style="color:#F1EBDF;padding:40px">Case study not found: ' + esc(slug) + '</p>'; }

    return (
      '<a class="skip-link" href="#content">Skip to content</a>' +
      CaseHeader(d) +
      '<main id="content">' +
        SummarySection(d.summary) +
        ContextSection(d.context) +
        ChallengesSection(d.challenges) +
        AiSection(d.aiExploration) +
        ValidationSection(d.validation) +
        OutcomeSection(d.outcome) +
        ReflectionSection(d.reflection, d.next) +
      '</main>' +
      CaseFooter(d.caseFooter)
    );
  }

  function render(slug) {
    document.getElementById('app').innerHTML = buildPage(slug);
    initReveal();
    initSubnav();
  }

  window.CaseTemplate = { render: render, buildPage: buildPage };
})();
