# Hand-off notes (real assets added)

**Done:** real logo, doctor photos (DSC00533/00534), clinic photos (00486, 00489, 00487, 00493, 00497, 00503) are in `assets/`. Two gallery photos show a child patient: get the parent's consent before launch. `og:image` is a relative path, so make it an absolute URL once the domain is known. Logo is now a self-made tooth badge (`assets/logo.svg`); swap in the original if Dr. Jain has one.

Source folder (do not modify): `E:\Misc\Personal\Moti Clinic`  (logos, clinic photos, doctor photos)

1. Clone this repo into a NEW working folder, e.g. `E:\Misc\Personal\dr-disha-jain-dental-clinic`.
2. Read the whole source folder; pick the best logo, 1-2 doctor portraits, 3+ clinic photos.
3. Copy into `assets/`, optimised: WebP/JPEG, doctor ~800px wide, clinic ~900px, each < ~150 KB, strip EXIF/GPS. Logo as SVG/PNG plus a favicon.
4. Update `index.html`: header logo, hero circle (`.doc-circle`), doctor section, gallery, favicon, add `og:image`. Keep `width`/`height`. Remove "(placeholder)" labels. Keep the before/after example until real consented cases exist.
5. Screenshot at 390px and 1280px, keep total page under ~1 MB, commit and push to `main`.

## Pending (do after real images are in)
- P1 Design rework similar to dentalgurgaon.com/treatments-futela and aspendentals.com/dentures-in-gurgaon (audit, propose, approve in rounds, then build; do not copy their text or images).
- P2 Treatment-specific landing pages / `?t=` variants (dentures, RCT, whitening, crowns, implants).
- P3 Confirm facts with Dr. Jain (address, hours, 13+ years, Sundays, Rs 400); real approved reviews; decide on before/after.
- P4 Google Ads tag (`gaId`), privacy page, Dental Council / Google Ads compliance check.

## Multi-page site (built 2026-11)
- `node build.js` regenerates all inner pages, the shared header/footer (also inside `index.html` between the HEADER/FOOTER markers), `sitemap.xml` and `robots.txt`. Treatment content is in `data/treatments.js`; info pages are in `build.js`.
- 15 treatment pages + 3 hubs + about, clinic, reviews, faq, contact, privacy. No prices shown until confirmed.
- Added after confirmation: kids dentistry, braces, clear aligners, dentist-in-palam-vihar, dentist-in-gurugram, 6 blog posts (`data/posts.js`, rendered by `build-extra.js`). `node check-links.js` verifies internal links.
- Still pending: results page (needs consented before/after photos; the example slider was removed from the homepage), more area pages, price ranges, real review quotes, doctor registration number, "Leave a review" link.
- Polish round 1 done: photo heroes, at-a-glance bar, on-this-page menu, timeline steps, collapsible aftercare and cost, doctor card, desktop floating contact pill, fake reviews removed.
- Polish round 2 done: WebP images with phone sizes (`tools/optimize-images.js`, originals in `assets/src/`), self-hosted fonts, 404 page, per-page share images, distinct icons, print styles, skip link, richer business schema. Lighthouse (mobile, local): home 94 perf, 100 a11y, 100 best-practices, 100 SEO.
- Minimal pass done: no top strip, 4 header links + compact Treatments dropdown, single-column treatment pages with one-line summary and folds, homepage decorative strips removed, plain hub/area banners, full-screen mobile menu sheet.
- Level 3 done: calm grey and white surfaces, flat bordered cards without icons, red only on buttons and small accents, light three-column footer, consistent spacing and type scale.
- Theme is white and red with a liquid-glass header that collapses to a floating pill on scroll (`.top.compact` in `style.css`, toggled in `main.js`).
