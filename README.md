# Dr. Disha Jain Dental Clinic: landing page

Static, animated single-page site for Google Ads. No build step. Edit `config.js` for contact details, hero variants (`?t=rct|pain|whitening|crown|dentures|implants`) and prices (`showPrices`). Swap placeholders in `assets/` with real photos (same filenames or update `index.html`).

## Before launch
1. Confirm phone/WhatsApp number in `config.js` (Practo lists two different numbers).
2. Confirm address and hours with the clinic.
3. Replace placeholder testimonials with real, approved ones; add real clinic photos.
4. Add Google Ads tag (`gtag.js`) in `<head>`; `call_click` and `lead_submit` events are already fired when `gtag` exists.
5. Add a privacy/disclaimer page (Google Ads health policy).

## Hosting
Any static host works. GitHub Pages: Settings → Pages → deploy from `main` / root.

See `docs/` for business research, competitor analysis and the layout sketch.

## Config flags (`config.js`)
- `showPrices` + `prices`: show "From ₹X" on treatment cards.
- `showBeforeAfter`: before/after slider. Currently ON with example images and an "Example image" badge. Replace `assets/before.svg` / `assets/after.svg` with real, consented cases, or set to `false`, before ads go live (dental advertising rules may restrict before/after).
- `gaId`: Google tag ID for call / WhatsApp / form conversion events.

## Launch checklist
1. Real photos in `assets/` (doctor, clinic x3, logo) and real reviews.
2. Confirm phone, address and hours; confirm "13+ years", "Open Sundays", "₹400".
3. Decide on before/after (see above).
4. Add `gaId`; check Dental Council / Google Ads healthcare policies.
