# Structural audit: clovedental.in (competitor reference)

Audit date: 2026-11-07. Structure, topics and short factual labels only. No marketing copy or images were copied. About 25 page fetches plus sitemap files. Platform: WordPress with Yoast SEO and W3 Total Cache.

## 1. Page count by type and URL conventions

Sitemaps: `robots.txt` lists `sitemap_index.xml` and a custom `doc_clinic-sitemaps.xml`. The index holds 5 child sitemaps.

| Type | Count | URL pattern |
|---|---|---|
| Clinic pages | 690 | `/dentist-near-me/{city}/{locality}` |
| Blog posts | 562 | `/blog/{category}/{slug}` |
| Generic pages | 82 | `/{slug}` (about, press, awards, CSR, careers, testimonials, journal, and so on) |
| Treatment pages | 15 | `/specialties/{slug}` (one nested: `/specialties/aligners/whistle-aligners`) |
| Blog category hubs | 13 | `/blog/{category}/` |
| Membership plans | 2 | `/membership/{plan-slug}` |
| Specialist-type pages | about 5 | `/specialist/{type}` |
| Doctor profiles | many (not in the sitemap I read) | `/clove-dental-doctors/{doctor-slug}` |
| City hubs | about 34 | `/dentist-near-me/{city}` |

Total is about 1,370 URLs from the sitemaps.

Clinics per city (top): Bengaluru 126, New Delhi 122, Hyderabad 73, Chennai 61, Pune 43, Gurgaon 43, Ahmedabad 29, Mumbai 22, Noida 20. There are 34 city and area values in total.

Conventions:
- Lowercase, hyphenated slugs.
- Clinic URLs are a flat three levels: `/dentist-near-me/gurgaon/sec-56`.
- Blog URLs are category then slug. Slugs are long and keyword-style (`cost-of-tooth-extraction-in-india`).
- Treatment URLs have no city variant. The location is carried by the clinic and city pages.
- `/teeth-whitening` redirects to `/specialties/preventive-dentistry`. There is no standalone whitening page.
- `/dentist-near-me` is the finder hub.
- Utility pages: `/appointments`, `/pay-online`, `/contact-us`, `/thank-you-2`, `/success`.
- The sitemap includes junk and test pages (`csr-dummy`, `volume-3`, `thank-you-2`, `dentist-near-me-gmb`).
- The About page contains injected gaming-related headings ("Premium Gaming Platforms for Indian Players", "Responsible Gaming Support"). This looks like spam or a compromise. Do not copy it, and it shows how large WordPress estates degrade.

## 2. Navigation tree

### Header

Top strip: a Get Instant Callback modal (name, phone, city dropdown of 34 cities, consent checkbox). Social icons: Instagram, Facebook, X, YouTube, LinkedIn. Phones: North India, South India and a toll-free number. A Book Appointment button sits in the bar. The mobile and desktop headers repeat the call numbers.

Main menu (labels and paths):

- **Treatments** (mega-menu, 16 items)
  - Invisalign Aligners `/invisalign-aligners/`
  - Laser Dentistry `/specialties/laser-dentistry`
  - Dental Fillings `/specialties/dental-fillings`
  - Root Canal Treatment `/specialties/root-canal-treatment`
  - Wisdom Teeth Extraction `/specialties/wisdom-teeth-removal-extraction`
  - Dental Braces `/specialties/teeth-braces`
  - Aligners `/specialties/aligners`
  - Whistle Aligners `/specialties/aligners/whistle-aligners`
  - Dental Implant `/specialties/dental-implant`
  - Dentures `/specialties/dentures`
  - Dental Crowns `/specialties/dental-crowns`
  - Dental Bridges `/specialties/dental-bridges`
  - Kids Dentistry `/specialties/kids-dentistry`
  - Mouth Ulcers `/specialties/mouth-ulcers`
  - Preventive Dentistry `/specialties/preventive-dentistry`
  - Advanced Gum Treatment `/specialties/gum-diseases-treatment`
  - The "Treatments" label itself links to `/specialties`.
- **Membership Plans**
  - Super Speciality Dental Health Plan `/membership/dental-health-plan-super-speciality`
  - Premium Dental Health Plan `/membership/dental-health-plan-premium`
- **Patient Safety**
  - Patient Friendly `/patient-friendly`
  - Gold Standard `/gold-standard`
  - Advance Technology `/advance-technology`
  - World Class Clinical Doctors `/world-class-clinical-doctors`
  - Highest Quality Standards `/highest-quality-standards`
- **Our Doctors** `/clove-dental-doctors/`
- **Find a Clinic** `/dentist-near-me`
- Instant Callback (modal trigger)

### Footer

Four groups plus a bottom bar:

1. **Corporate / media:**
   - Register Your Company with us `/corporate`
   - Educational Videos `/dental-education-videos`
   - CSR `/outreach-program`
   - News & Media `/news-media`
   - Rewards `/awards-and-recognition`
   - Career `/openings`
   - Toll-free number
2. **About:**
   - About Us `/about-us`
   - Vision & Mission `/vision-mission`
   - Clove Promise `/clove-promise`
   - Outreach Programs
   - Board of Directors `/board-of-directors`
   - Awards and Recognition
   - Gallery `/gallery`
   - Contact Us `/contact-us`
   - Appointments `/appointments`
   - Blogs `/blog`
   - Openings
   - News & Media
3. **Resources:**
   - Dental Education Videos
   - Clove's Scientific Journal `/dental-health-research-journal`
   - Dental Problems, Symptoms & Treatments `/dental-problems-symptoms-treatments`
   - Clinics Near Me `/dentist-near-me`
   - Patient Testimonials `/patient-testimonials`
   - Online Payments `/pay-online`
4. **Specialists:**
   - Endodontist, Pedodontist, Implantologist, Orthodontist, Periodontist
   - Each links to `/specialist/{type}`.
5. **Bottom bar:**
   - Privacy Policy `/privacy-policy`
   - Terms of Service `/terms-of-use`
   - Parent-company credit (Unbundl)
   - A Find Clinics link
   - A Dental Health Plan link

Also on the homepage: a "latest blogs" block with 4 posts for each of 7 categories, each with an "Explore More Blogs" link. Partner/sister brand links are also present (an oral-care brand and the aligner brand Whistle).

## 3. Treatments/services pages (15 canonical)

- `/specialties/root-canal-treatment`
- `/specialties/dental-implant`
- `/specialties/dental-crowns`
- `/specialties/dental-bridges`
- `/specialties/dentures`
- `/specialties/dental-fillings`
- `/specialties/teeth-braces`
- `/specialties/aligners`
- `/specialties/aligners/whistle-aligners`
- `/invisalign-aligners/` (outside the `/specialties/` path)
- `/specialties/wisdom-teeth-removal-extraction`
- `/specialties/gum-diseases-treatment`
- `/specialties/laser-dentistry`
- `/specialties/kids-dentistry`
- `/specialties/preventive-dentistry`, which also hosts cleaning and whitening
- `/specialties/mouth-ulcers`

No standalone pages for whitening, smile design or veneers, cleaning, bad breath, or sensitivity. Those topics are handled in blogs or on the preventive page.

Supporting topic pages:
- `/specialist/endodontist`, `/specialist/implantologist`, `/specialist/orthodontist`, `/specialist/periodontist`, `/specialist/pediatric-dentists`
- `/dental-problems-symptoms-treatments`

## 4. Treatment page template anatomy

Page length is about 2,300 to 3,300 words including the header, footer and city dropdowns. Real body copy is roughly 1,200 to 1,800 words.

Common ordered sections (root canal, implant, braces, aligners and dentures all follow a variant of this):

1. Hero: H1 with a keyword plus benefit, a one-line subtitle, a "Book a free Consultation" CTA, and a stat strip (730+ clinics, 1700+ dentists, 30L+ patients, ortho cases, smiles corrected).
2. Breadcrumb: Home > Specialties > {treatment}.
3. Intro and reassurance: a short pain, fear or empathy hook (about 60 words). Example: "Worried it's painful?"
4. What is {treatment}: 2 to 3 short paragraphs.
5. Symptoms or "who can benefit": icon cards (about 3 to 6). Present on root canal (symptoms) and implants (personas).
6. How it works: 1 to 3 short paragraphs plus a callout note.
7. Benefits or "Why choose {treatment}": 5 to 6 icon cards with a one-line description each.
8. Cost box: a price range per unit (root canal Rs 5,500 to 12,500; implant Rs 33,000 to 64,000; braces from Rs 30,000; aligners from Rs 60,000), with a disclaimer, EMI and transparency bullets.
9. Comparison: a table (implants vs dentures vs bridges; braces vs aligners; aligners vs DIY kits) or a text comparison (filling vs root canal vs extraction).
10. Lead-form band 1: "Talk to a {specialist}" with 3 to 4 trust bullets, a form (name, phone, city, consent) and a toll-free number.
11. "Why choose Clove" block: 5 repeated cards (10x safety protocols, certified specialists, technology, consistency across 730+ clinics, accessibility in 26+ cities). Only the middle wording changes per page.
12. Step-by-step procedure: 5 to 6 numbered steps with a title and a sentence or two each.
13. Types or variants: 6 to 10 cards (RCT types, implant types, braces types, denture types).
14. Lead-form band 2 (same form again).
15. FAQ accordion: about 9 to 10 questions, each with a 1 to 3 sentence answer.
16. Patient Speaks: 4 Google-style review cards with treatment tags.
17. "Medically reviewed" footer line: reviewed by the clinical team plus date, "written by Dr. Shreya BDS, PGDCC".
18. Aftercare tips, on braces and aligners only (retainers, hygiene, stain avoidance, check-ups).
19. "Find a Clove Clinic Near You": a city selector, then "Searching for {treatment} near me?" with links into city pages.

Repeats across all treatment pages: hero stat strip, "Why choose Clove" cards, lead form (twice), FAQ, patient reviews, reviewed-by line, city selector, and the footer. A named doctor box with a photo does not appear on treatment pages. The authority line is a generic "Clinical Team" byline.

Not present: a related-treatments block, a before/after gallery on most pages (aligners has a "Real Smiles" section), a symptom checker.

Clinic page anatomy (`/dentist-near-me/{city}/{area}`):
1. H1 "Best Dental clinic in {area}, {city}".
2. Clinic name, address and map, with an in-page anchor nav (Overview, Dental Solutions, Dental Plans, About Dentist, Reviews, FAQ, Consultation).
3. 12-treatment grid.
4. Two membership plan cards.
5. Team stats (75+ orthodontists, 70% women, 65% MDS) with 2 doctor cards.
6. Google reviews widget (4.9 average, "3 Lakh+ verified ratings", 6 reviews).
7. About 14 localized FAQs.
8. Closing tagline and CTA.

City hub page anatomy (`/dentist-near-me/gurgaon`):
1. H1 "Find a Dentist in {city}".
2. Why choose Clove in the city.
3. Timings (Tuesday to Sunday, 10:00 to 20:00).
4. 12-treatment grid.
5. Doctor specialties paragraph.
6. Price table of starting prices for 10 treatments, with a "content last updated" date.
7. 10 localized FAQs.
8. Links to the other 33 cities.
9. A list of the clinics in the city.

## 5. Homepage section order and trust elements

1. Top strip: callback modal, phone numbers (North, South, toll-free) and social icons.
2. Sticky mega-menu header.
3. Hero: "Largest Dental Chain of India", plus a stats row (30L+ patients, 1700+ dentists, 730+ clinics, 7 days open, 1L+ implants, 12.4K+ dentures, 5L+ crowns), "Rated 4.9/5 - 3 Lakh+ reviews, Verified", and a city selector with a Find a Clinic button.
4. "1700+ Expert Doctors" strip.
5. Intent picker: "How can we help you today?" with 8 chips (Regular Check-up, Dental Implants, Kids, Braces & Aligners, Follow Appointment, Tooth Pain, Tooth Cleaning, Emergency).
6. Campaign carousel: about 11 slides with a celebrity ambassador, each with a Book Now button.
7. "Why Trust Clove Dental" with 4 pillars (World Class Treatment, Doctor-Led Care, 15 Years Experience, Unmatched Safety) and bullet proof points.
8. Appointment form (name, phone, city, consent).
9. Treatments grid (12 tiles).
10. Patient Speaks (6 video/testimonial cards with city and treatment).
11. Dental Health Plans (2 priced cards: Rs 650 and Rs 750 offers).
12. Team of experts (stats plus 2 doctor cards with years of experience).
13. Partner/sister brand logos.
14. Blog insights (7 categories, 4 posts each).
15. Footer.

Trust elements: aggregate rating (4.9, 3 lakh+); patient and clinic counts; celebrity ambassador; named experience milestones (3 lakh+ RCTs, 50k+ implants); safety branding ("10x protocols", "4-step sterilisation"); doctor stats (women-led, MDS share); video testimonials; Google reviews widget on clinic pages; a "medically reviewed" line; a membership paywall; an interest-free EMI mention; scheduled-callback forms. Sticky elements: header and a floating callback button (the code has about 13 "sticky" class hits). The forms are lead-capture only: name, phone, city, consent.

## 6. Image usage by page type (types only)

- Homepage: hero photo/video banners, campaign banners, treatment icons or thumbnails, doctor portraits, patient testimonial videos, partner logos, blog thumbnails.
- Treatment pages: a hero banner, icon sets for benefit cards, procedure step illustrations or icons, an embedded video, and review avatars (about 75 img tags per page, most being chrome or icons). Aligners adds a "real smiles" before/after style gallery.
- City and clinic pages: clinic exterior or interior photos, a map embed, treatment tiles, doctor portraits.
- Doctor profile: one portrait plus credential badges.
- Blog: a featured image plus an inline image or two, an author avatar, related-post thumbnails.
- Membership pages: plan cards and testimonial thumbnails.

Hard-coded heavy use of icons rather than diagrams. No instructional diagrams or X-rays are visible in the text structure.

## 7. SEO patterns

- Title formula for treatments: `{Treatment}: {Descriptor / Price / Specialist} | Clove Dental`. Examples: "Root Canal Treatment (RCT) for Tooth Pain & Infection | Clove Dental"; "Dental Implants: Procedure, Price & Periodontist Care | Clove Dental".
- Title formula for cities: `Best Dentists in {City} | Clove Dental Clinics | Open on Weekends`.
- Title formula for clinics: `Best Dental Clinic in {Area}, {City} | Open on Weekends | Expert in Root Canal, Braces, Implant, Teeth Whitening & More`.
- H1: `{Treatment} to {benefit}` for treatments; `Best Dental clinic in {Area}, {City}` for clinics; `Find a Dentist in {City} for Routine and Specialized Care` for cities.
- Meta description: a one-sentence definition of the treatment plus a time or price hook ("1-2 sittings", "start at Rs 30,000"). The homepage uses check-mark emoji with chain stats ("730+ Clinics, 1700+ Doctors, 28+ Cities").
- Schema:
  - Treatment pages: `MedicalWebPage`, `MedicalProcedure` (or `MedicalTherapy` for braces), `MedicalAudience`, `FAQPage`, `BreadcrumbList`, `Person` (reviewer), `Organization`, `ImageObject`, `WebSite` with `SearchAction`.
  - Clinic pages: `LocalBusiness`, `PostalAddress`, `GeoCoordinates`, `AggregateRating` (4.6 to 5), `Review`, `FAQPage`, `MedicalOrganization`.
  - City pages: `FAQPage`, `MedicalOrganization`, `Brand`.
  - Blog: `Article`, `FAQPage`, `MedicalWebPage`, `BreadcrumbList`.
  - Doctor profile: `Person`.
  - Homepage: `FAQPage`, `Organization`, `MedicalOrganization`, `WebSite`.
- Internal linking:
  - The mega-menu links all 16 treatments from every page.
  - Treatment pages end with a city selector that links to city and clinic pages.
  - City pages link to the other 33 cities.
  - City pages list their own clinics.
  - The footer carries the specialist pages.
  - Blogs are grouped in 13 category hubs and surfaced on the homepage and specialist pages. Specialist pages also embed a blog hub.
- Location strategy: the chain has about 690 near-me pages (city plus locality), with a localized FAQ on each. Pricing tables are replicated per city with a visible "last updated" date. Treatment pages are not duplicated per city.
- Content freshness: "Last reviewed" dates (Mar to Sep 2026) on treatment and specialist pages.
- Cost transparency: price ranges are stated on the treatment pages, with a disclaimer. This is a conversion lever and an SEO lever, as blog posts like "cost of ... in India" also feed it.
- Blog cadence: 562 posts across 13 categories, with titles built around questions and "cost in India".
- Noted weaknesses: the generic "Clinical Team" byline; a mostly identical "Why choose" block; some pages have a missing meta description (`undefined` on About and Membership); a duplicate Invisalign page outside `/specialties/`; stray debug headings ("cache", "oembed") on a specialist page.

## 8. Takeaways

What makes it feel like a big brand:
- Large live numbers (730+ clinics, 1700+ doctors, 30L+ patients) repeated in every hero and footer.
- A 4.9 aggregate rating shown on the homepage and every clinic page.
- A celebrity ambassador and a campaign carousel.
- A consistent template, so every page feels engineered.
- Named safety branding ("10x protocols", "4-step sterilisation").
- Published price ranges and membership plans.
- 24/7 phone numbers by region and a toll-free number.
- Specialist-type pages (endodontist, implantologist, and so on).
- A clinical reviewer byline and a "last reviewed" date for medical authority.

Cheap for a single-doctor clinic to replicate:
- Consistent page template for 10 to 15 treatment pages (what is it, symptoms, steps, benefits, cost range, 8 to 10 FAQs, review cards, lead form).
- Price ranges with a disclaimer and an updated-on date.
- FAQPage, MedicalProcedure, LocalBusiness and BreadcrumbList schema.
- A "Why choose us" block that is specific and truthful.
- Real Google reviews (a screenshot or a copy-paste widget) and a visible rating.
- Doctor credentials and photo, with a reviewed-by line naming the actual doctor.
- Sticky call/WhatsApp/map CTAs and a short lead form.
- Comparison tables (implant vs bridge vs denture; braces vs aligners; filling vs RCT vs extraction).
- A step list and a types-of-treatment grid.
- A single clinic page with address, timings, map and localized FAQs.
- An intent picker ("How can we help you today?") on the homepage.

Expensive or not worth replicating:
- 690 clinic and 34 city pages, plus a store locator.
- A celebrity ambassador and TV-style campaign content.
- 562 blog posts. A realistic target is 20 to 40 well-written, locally relevant posts.
- Membership plans with billing and redemption.
- Aggregate stats from the real network (30L patients and so on). Use the clinic's own true numbers instead.
- Specialist-type pages for 5 specialties (a single doctor cannot honestly claim them).
- Video testimonial library, press and awards pages, a scientific journal, a CSR section, and corporate/careers pages.
- A multi-region phone system.
- A pre-chosen team of named doctors per clinic.

Opportunity: they have no whitening, smile design, veneers, cleaning or bad-breath pages, no related-treatments block, and no named-doctor box on treatment pages. A single-doctor clinic can win on a named-doctor byline, a local dental-area page, and a few treatment pages the chain lacks.
