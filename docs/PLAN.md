# Website plan v2 (modern, animated, ads-ready)

Status: PLAN ONLY. v1 (plain) is already in the repo and will be replaced.

## 1. Goal
One page, one job: turn a Google Ads click into a call or WhatsApp message within 10 seconds on a mobile phone. Traffic will be ~90% mobile, local (Palam Vihar, Sectors 2-7, Dwarka, Sector 22-23, Manesar side).

## 2. What independent clinic sites do (from search results only; sites could not be opened)
- South Delhi / Gurgaon independents (Smile Dental Care Centre, Dr. Khullar's, The Dental Cure, Dr. Gupta's, Artistree): lead with one specialist doctor, Google rating and review count, "Digital Smile Design" / "painless single-sitting RCT", and a few show starting prices (e.g. RCT from Rs 3,000).
- Mumbai/Pune/Bangalore independents (Dazzle, Bespoke, Bangalore Dental Care): lead with anxiety-free / painless positioning, sedation options, transparent pricing and EMI.
- Closest local independent: Healing Touch Dental (Sector 45 and Palam Vihar), generic services + cosmetic.
- Gap: almost all look the same (blue/white, stock smiles, long service lists). Almost none feel calm, premium and personal, and few use real motion. That is our opening.

## 3. Positioning
"The dentist who explains first and never rushes you." Calm, gentle, expert, local. One doctor, one relationship.

## 4. Visual direction
- Mood: soft clinical luxury, like a boutique skincare brand, not a hospital.
- Palette: warm ivory background, deep teal ink, soft sage tint, one warm coral/amber accent for CTAs only.
- Type: elegant serif display (Fraunces) for headlines, clean humanist sans (DM Sans) for body.
- Imagery: real clinic and doctor photos (priority). Fallback: custom SVG tooth/smile line illustrations. No stock grins.
- Dark mode: not needed.

## 5. Motion system (all vanilla CSS/JS, no heavy libraries)
- Hero: headline words rise in, soft floating shapes behind; photo has slow parallax (translate on scroll, via requestAnimationFrame + transform only).
- Scroll reveals: sections fade/slide in via IntersectionObserver.
- Treatment cards: hover/tap lift, icon draw-in (SVG stroke animation).
- Stats row: count-up numbers (13+ years, rating).
- "How a visit works" 4-step line that draws itself as you scroll.
- Sticky bottom Call/WhatsApp bar on mobile that appears after hero.
- Before/after style slider ONLY if clinic has permitted real cases and compliance allows.
- Rules: animate transform/opacity only, respect prefers-reduced-motion, content visible without JS, no layout shift.

## 6. Page structure
1. Header (logo, Call button)
2. Hero: headline, subline, Call + WhatsApp, mini form, trust chips
3. Trust strip: BDS, 13+ yrs, rating, Sun open
4. Treatments (6-8 cards, tap to expand with plain-language detail)
5. Why us / approach (explain first, upfront cost, gentle)
6. Doctor profile with photo
7. How a visit works (4 steps)
8. Patient reviews (real, approved)
9. Clinic gallery
10. FAQ (RCT pain, cost, kids, emergency)
11. Visit us: map link, hours, address, sticky actions
12. Footer disclaimer

## 7. Ads-specific features
- Treatment variants by URL: `?t=rct|whitening|pain|crown|dentures` swaps headline, hero copy, first card (match ad group = better Quality Score).
- Click-to-call and WhatsApp and form events sent to Google Ads/GA4 (gtag placeholders ready).
- Thank-you state for conversion tracking.
- Speed budget: LCP under 2.5s on 4G, page under 1 MB, images WebP with width/height, fonts preloaded, no third-party scripts except gtag.
- Local SEO basics: LocalBusiness + Dentist JSON-LD, title/meta, sitemap.

## 8. Compliance risks to check before launch
- Dental Council of India ethics rules restrict dentist advertising (superlatives, solicitation, some testimonials/before-after). Confirm with Haryana State Dental Council rules and keep copy factual.
- Google Ads healthcare policy: no misleading claims, no "painless guarantee". Use "gentle", "comfortable".
- Only real reviews with permission; no invented stats.

## 9. Build steps
1. Lock design + copy (this plan, approval)
2. Collect assets (photos, logo, numbers, reviews)
3. Build static site, mobile first
4. Test on phone widths, Lighthouse, reduced-motion
5. Deploy on GitHub Pages (custom domain optional)
6. Add Ads tag, launch

## 10. Open questions
- Photos of Dr. Jain and clinic available? Logo?
- Final phone/WhatsApp, address, hours (online listings conflict).
- Treatments to push first? Any she does NOT offer (implants, aligners, braces, kids)?
- Willing to show starting prices?
- Domain name (e.g. drdishajaindental.com)?
- Any sedation / kids / emergency service?
