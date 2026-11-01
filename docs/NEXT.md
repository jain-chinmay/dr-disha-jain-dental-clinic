# Hand-off: add real assets (run in a LOCAL session)

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
