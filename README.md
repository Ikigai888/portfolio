# Tad Natsuhara — Portfolio

Static portfolio site (plain HTML/CSS/JS, no framework). Copy and case-study
content live as data in `js/content.js` and `js/case-content.js`; component
functions in `js/components.js` render that data into markup, assembled by
`js/app.js` (homepage) and `js/case-template.js` (case study pages). See
`CLAUDE.md` for the full architecture notes.

## Build step (pre-rendered HTML)

The four HTML files (`index.html` + three `case-*.html`) ship with their full
content already baked into the markup, so crawlers, link-preview bots, and
anyone with JavaScript disabled see complete text and images — not an empty
shell. This is done by a small Node build script, `scripts/build.mjs`, which
runs the same `content.js` / `case-content.js` / `components.js` files through
the page templates and writes the resulting HTML between
`<!-- BUILD:START -->` / `<!-- BUILD:END -->` markers inside each page's
`<div id="app">`.

JavaScript still runs in the browser exactly as before — `js/app.js` and
`js/case-template.js` re-render the page on load to wire up scroll-reveal,
the hero headline animation, and nav interactions. The build step only
changes what's in the raw HTML *before* JS runs.

**Run the build after editing any content or component file, and always
before pushing:**

```bash
npm run build
```

This requires Node.js (any reasonably recent version — developed against
Node 24). No other dependencies are installed; the script uses only Node's
built-ins.

### Where this fits in your workflow (GitHub Desktop)

You work directly on `main`, so the sequence is:

1. **Pull** the latest changes in GitHub Desktop (in case anything changed
   remotely).
2. **Edit** `js/content.js`, `js/case-content.js`, or any other source file
   as usual.
3. **Build** — open a terminal in the project folder and run `npm run build`.
   This rewrites the generated sections of `index.html` and the three
   `case-*.html` files to match your edits.
4. Review the diff in GitHub Desktop — you should see your content changes
   reflected inside the `<!-- BUILD:START -->…<!-- BUILD:END -->` block of
   the affected HTML file(s), alongside any source file changes.
5. **Commit and push.** The GitHub Pages workflow deploys whatever HTML is
   committed, so the build must happen *before* you push — there is no build
   step on the server.

If you forget to run the build before pushing, the live site will keep
showing the previously-generated HTML for search engines/crawlers, while
JS-enabled visitors still see your latest content (since `js/app.js` re-renders
from the updated data on load either way).

### Verifying it worked

Open a generated file raw (e.g. `case-passkeys.html`) in a text editor, or:

```bash
grep -o "Passwordless Authentication" case-passkeys.html
```

You should see the case study's headings and body copy as plain text inside
`<div id="app">`, not just an empty div.
