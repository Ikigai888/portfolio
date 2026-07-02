#!/usr/bin/env node
/* ============================================================
   Build — pre-renders index.html + all case-*.html pages to
   complete static markup so crawlers/link previews/no-JS clients
   see full content, not an empty <div id="app">.

   How it works: this loads the SAME js/content.js, js/case-content.js,
   and js/components.js data/component files the browser uses, plus the
   `buildPage` function each page script (js/app.js, js/case-template.js)
   already exposes for exactly this purpose. It runs them in a sandboxed
   Node context (see runInSandbox below) to get the identical HTML string
   the browser would produce, then writes it between the
   <!-- BUILD:START --> / <!-- BUILD:END --> markers inside <div id="app">.

   The browser-side scripts are untouched at runtime: js/app.js and
   js/case-template.js still re-render on load to wire up scroll-reveal,
   the hero animation, and nav interactions. This script only affects
   what ships in the raw HTML before JS runs.

   Run with `npm run build` before every push (see README).
   ============================================================ */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const path = (...p) => join(root, ...p);

/* Run a set of browser-global script files (window.X = ...) in an
   isolated sandbox and return the sandbox's `window` object. These
   files never touch `document` except behind `typeof document !==
   'undefined'` guards, so leaving `document` undefined here is safe. */
function runInSandbox(files) {
  const window = {};
  const context = vm.createContext({ window, console });
  for (const file of files) {
    const code = readFileSync(path(file), 'utf8');
    vm.runInContext(code, context, { filename: file });
  }
  return window;
}

/* Guard against the escaping helper in js/components.js regressing:
   after stripping every well-formed attr="value" pair (value containing no
   quote), no literal `"` should remain — one left over means some
   interpolated string broke out of its attribute or leaked into text
   content unescaped. */
function assertNoUnescapedQuotes(html, label) {
  const stripped = html.replace(/\s[a-zA-Z_:][-\w:.]*="[^"]*"/g, '');
  const idx = stripped.indexOf('"');
  if (idx !== -1) {
    const context = stripped.slice(Math.max(0, idx - 40), idx + 40);
    throw new Error(
      `${label}: unescaped double-quote found in generated markup near: ...${context}...`
    );
  }
}

function injectBuild(htmlPath, html) {
  const before = readFileSync(htmlPath, 'utf8');
  const marker = /<!-- BUILD:START -->[\s\S]*?<!-- BUILD:END -->/;
  if (!marker.test(before)) {
    throw new Error(`${htmlPath}: BUILD:START/BUILD:END markers not found`);
  }
  const after = before.replace(marker, `<!-- BUILD:START -->${html}<!-- BUILD:END -->`);
  writeFileSync(htmlPath, after);
  console.log(`  wrote ${htmlPath.replace(root + '/', '')}`);
}

/* ---------- Homepage ---------- */
console.log('Pre-rendering index.html...');
{
  const sandbox = runInSandbox(['js/content.js', 'js/components.js', 'js/app.js']);
  const html = sandbox.App.buildPage();
  assertNoUnescapedQuotes(html, 'index.html');
  injectBuild(path('index.html'), html);
}

/* ---------- Case studies ---------- */
const cases = [
  { slug: 'brand-governance', file: 'case-brand-governance.html' },
  { slug: 'passkeys', file: 'case-passkeys.html' },
  { slug: 'rail-booking', file: 'case-rail-booking.html' },
];

console.log('Pre-rendering case studies...');
{
  const sandbox = runInSandbox(['js/components.js', 'js/case-content.js', 'js/case-template.js']);
  for (const { slug, file } of cases) {
    const html = sandbox.CaseTemplate.buildPage(slug);
    assertNoUnescapedQuotes(html, file);
    injectBuild(path(file), html);
  }
}

console.log('Done.');
