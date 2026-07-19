# Wetcoast Studio — landing page starter

A standalone, e-commerce-ready landing page for a fictional Vancouver latex
fashion label ("Wetcoast Studio"). Plain HTML/CSS/JS, no framework or build
step — self-contained in this folder, separate from the rest of this
repository's portfolio site and build pipeline.

Open `index.html` directly in a browser, or serve the folder with any static
file server (e.g. `python3 -m http.server` from inside `wetcoast-latex/`).

## What's here

- **Hero, trust bar, featured product grid, brand story, process, testimonials,
  FAQ, newsletter signup, footer** — the standard high-converting sections for
  a fashion e-commerce landing page (see sources below for the research this
  followed).
- **Mock cart**: `js/script.js` implements add/remove/quantity with a
  `localStorage`-backed cart and a slide-out drawer, so the shopping flow is
  demoable end-to-end. The "Checkout" button is a placeholder.
- **Product swatches are CSS-generated**, not photos — there's no real
  photography to source. Swap `.swatch-*` backgrounds in `css/style.css` for
  real `<img>` product photography before launch.
- SEO basics: meta description, Open Graph/Twitter tags, and `ClothingStore`
  JSON-LD structured data. Note: `images/og-cover.svg` is an SVG placeholder —
  Facebook/LinkedIn/Twitter card previews generally require a raster image
  (PNG/JPG), so export a PNG version before relying on link previews.
- Accessible: skip link, semantic landmarks, labelled icon buttons, visible
  focus states, `prefers-reduced-motion` support.

## Wiring up real e-commerce

This is a landing page, not a checkout system. To go live, pick one:

- **Shopify** — fastest path; replace the product grid/cart with Shopify's
  Buy Button or Storefront API, or rebuild the theme directly in Shopify.
- **Snipcart / Swell** — keep this static HTML/CSS as-is and drop in their
  JS snippet + data attributes for cart + checkout.
- **Stripe Checkout** — lightest touch; point the existing "Checkout" button
  at a Stripe Checkout Session created by a small backend/serverless function.

Also needed before launch: real product photography, a payment processor
account, a shipping/tax configuration, and a privacy policy + terms page
(the footer links are currently placeholders, `href="#"`).

## Sources consulted

- [Shopify — 10 Best Ecommerce Landing Page Examples](https://www.shopify.com/blog/ecommerce-landing-page-examples)
- [BigCommerce — Ecommerce Landing Pages: Tips + Examples](https://www.bigcommerce.com/articles/ecommerce/ecommerce-landing-pages/)
- [WebFX — Ecommerce Landing Pages: Examples & Best Practices](https://www.webfx.com/web-design/ecommerce/effective-landing-pages/)
- [Colorlib — Best Clothing Brand Website Examples](https://colorlib.com/wp/clothing-brand-website-examples/)
