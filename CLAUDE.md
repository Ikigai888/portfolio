# Portfolio — project notes

Portfolio site (plain HTML/CSS/JS, no framework/bundler). Pages render from
data: `js/content.js` (homepage copy) and `js/case-content.js` (case studies)
feed component functions in `js/components.js`, assembled by `js/app.js`
(homepage) and `js/case-template.js` (case pages). Edit copy in the
`*-content.js` data files, not the HTML.

## Reference docs (local only — never publish)

`reference/` holds the original internal PRDs behind the brand-governance
case study (gitignored via `*.pdf`, along with anything else in the folder).
When editing that case study's copy, sanity-check claims against these docs —
they are the factual source of truth (hierarchy levels, feature scope, named
risks, personas). They contain internal names and must never be committed,
published, or quoted verbatim on the site.

## Before committing — run the build

`npm run build` (see [README.md](README.md)) pre-renders `js/content.js` /
`js/case-content.js` into complete static HTML inside each page's
`<!-- BUILD:START -->…<!-- BUILD:END -->` block, so crawlers and no-JS
clients see full content. Run it after any content/component edit and before
every push — the generated HTML files are committed, there's no server-side
build.

## Before committing — strip live-mode injection

`/impeccable live` injects this block into every HTML file so the browser
picker can load:

```html
<!-- impeccable-live-start -->
<script src="http://localhost:8400/live.js"></script>
<!-- impeccable-live-end -->
```

It is **local-dev only** and must never be committed — it 404s for real
visitors on every page. It has slipped into production commits twice.

**Guard:** before any `git commit`, run the live-server stop (it strips the
inject via its own removal logic):

```bash
node .claude/skills/impeccable/scripts/live-server.mjs stop
```

Then confirm nothing remains:

```bash
grep -rl "localhost:8400\|impeccable-live" *.html   # should print nothing
```

## Cache-busting

Script/style tags carry a `?v=N` query param (currently `?v=56`). Bump `N` on
**every** tag across all four HTML files whenever any `js/` or `css/` file
changes, so browsers don't serve stale cached assets. The browser HTTP cache is
aggressive here — a plain reload can show old content even when the source on
disk is current.

## Git

- Remote: `git@github.com:Ikigai888/portfolio.git` (SSH; this Mac's key is
  registered). Pushes to `main` trigger the GitHub Pages deploy workflow.
- `.DS_Store`, `.impeccable/live/sessions/`, `.impeccable/live/server.json`,
  and `.claude/settings.local.json` are gitignored.
