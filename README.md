# Amanblaze Website

Professional React (Vite) website for Amanblaze — a software development community that
builds and publishes its own Android apps. Includes light/dark theme, Home / About / Privacy /
Terms / Refund pages, and SEO files (robots.txt, sitemap.xml, llms.txt).

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```
Output goes to `dist/` — upload that folder to any static host (Vercel, Netlify, GitHub Pages,
Cloudflare Pages, your own server).

## ⚠️ Before going live, customize:

1. **`src/data/apps.json`** — replace the sample app with your real apps (name, package name,
   category, description, icon URL, install link, version). See auto-update option below.
2. **Domain** — replace every `https://amanblaze.in` reference in `index.html`,
   `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt` with your real domain.
3. **Support email** — replace `support@amanblaze.in` in the About/Privacy/Terms/Refund pages
   with your real contact address.
4. **Legal pages** — the Privacy, Terms, and Refund pages are solid starting templates but are
   **not legal advice**. Have them reviewed against your actual data practices (especially if any
   app collects location, contacts, camera, etc.) and, ideally, by a lawyer before publishing —
   Google Play checks that your Privacy Policy accurately reflects each app's real behavior.

## Auto-updating the app catalog

This sandbox has no internet access, so the app list can't be fetched live from Google Play here.
Two ways to keep it current once you're set up on your own machine/repo:

**Manual:** edit `src/data/apps.json` directly whenever you publish a new app.

**Automatic:** run the included script (needs internet):
```bash
npm install google-play-scraper
npm run fetch-apps
```
This pulls every app from your developer page (`devId: 8663227897723109688`) and rewrites
`apps.json` with name, package name, category, description, icon, install link, and version.

A ready-made GitHub Actions workflow (`.github/workflows/sync-apps.yml`) runs this script daily
and auto-commits changes — so once this repo is on GitHub, new Play Store releases appear on the
site without any manual step.

## Theme

Light/dark mode is a manual toggle (top-right, persisted in localStorage) plus respects the
visitor's OS preference on first visit. All colors are CSS variables in `src/index.css` — no
neon colors, deep navy/brass professional palette.

## Google indexing checklist

- Update the domain in `index.html`, `robots.txt`, `sitemap.xml`, `llms.txt` (see above).
- Submit `sitemap.xml` in Google Search Console after deploying.
- Keep page titles/descriptions in `index.html` accurate as the catalog grows.
