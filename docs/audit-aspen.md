# Structural audit: aspendentals.com (Gurgaon)

Scope: structure, topics and short factual labels only. No marketing copy or images were copied. Audited 2026-11-07 from the sitemap plus about 17 page fetches (server-rendered HTML, so structure was extracted from headings and schema).

## 1. Page count by type and URL conventions

Sitemap: `/sitemap.xml`, one flat urlset with `lastmod` and priority. robots.txt is `Allow: /` plus the sitemap link. **108 URLs**.

| Type | Count | Pattern / examples |
|---|---|---|
| Homepage | 1 | `/` |
| Treatment / service pages | 31 | `/<treatment>-in-gurgaon` (flat, root level) |
| Treatment hubs | 3 (kids, adult, ortho) | `/kids-dentistry-in-gurgaon`, `/adult-dentistry-in-gurgaon`, `/orthodontics-in-gurgaon` |
| Blog posts | 35 | `/blog/<slug>`; index at `/blogs` |
| Doctor profiles | 4 in sitemap (+2 "best-X" pages); nav lists 9 names | `/dentist/dr-<name>`, `/best-orthodontist-in-gurgaon`, `/best-periodontist-in-gurgaon`; roster at `/dentist-near-me` |
| Clinic location pages | 3 | `/dental-clinic/sector-53-gurgaon-gurugram` (also 54, 65) |
| Neighbourhood landing pages | 10 | `/dentist-in-golf-course-road`, `/dentist-in-dlf-phase-1`, `/dentist-in-dlf-phase-2`, `/dentist-in-sushant-lok`, `/dentist-in-sector-83-gurgaon`, plus `/blog/dentist-in-new-gurgaon`, `/blog/dentist-in-dlf-phase-3-gurgaon`, etc. |
| Results (before/after) | 1 index + 8 detail | `/results`, `/result/<case-slug>` |
| Videos | 1 index + 5 detail | `/videos`, `/video/<topic>` |
| Testimonials | 3 | `/written-testimonials`, `/video-testimonials` (plus reviews block) |
| Trust / about | 5 | `/about-clinic`, `/awards-and-accreditations`, `/clinic-tour`, `/sterilization-and-safety`, `/our-team` |
| Conversion / utility | 2 | `/book-an-appointment`, `/contact-us` |
| Legal | 2 | `/privacy-policy`, `/terms-conditions` |

Conventions:
- Every treatment slug ends in `-in-gurgaon`, with the keyword up front and no category folder. There are two near-duplicate pairs (`dental-bond-in-gurgaon` and `dental-bonding-in-gurgaon`) and one slug typo (`veneers-in-in-gurgaon`).
- Namespaces are `/blog/`, `/dentist/`, `/dental-clinic/`, `/result/` and `/video/`. Everything else is flat.
- Local landing pages use `dentist-in-<area>`.
- Blog slugs are keyword-first, mostly cost, procedure and "in gurgaon" queries.

## 2. Navigation tree

Header is a fixed top bar. The mobile version is a drawer with "Back" arrows, and a CTA button "Book Appointment" is always present. A thin top info bar sits above it. The sticky mobile bottom bar has Call, Appointment and Chat.

- **About Us**: Who We Are (`/about-clinic`), Our Team (`/our-team`), Awards & Accreditations, Clinic Tour
- **Services** (mega-menu with 3 columns)
  - Kids Dentistry (`/kids-dentistry-in-gurgaon`): Pulpectomy, Dental Fillings, Extractions, Fluoride, Sealants, Space Maintainer, Preventive
  - Orthodontics (`/orthodontics-in-gurgaon`): Metal Braces, Ceramic Braces, Damon Self-Ligating Fast Braces, Invisible Braces (Invisalign), Lingual Braces
  - Adults Dentistry (`/adult-dentistry-in-gurgaon`), with three sub-groups:
    - Cosmetic: Veneers, Teeth Whitening, Dental Bonding, Gum Contouring, Dental Implants
    - Restorative: Dental Crown, Dental Bridge, Denture, Root Canal Treatment
    - Periodontal: Oral Prophylaxis, Root Planing, Periodontal Surgery, plus Dental Filling and Extractions
- **Dentist**: 9 doctor names (Dr. Abhinav Kathuria, Ravneet Kaur, Shefali Kaul, Sameena Raza, Srishti Sinha, Ritika, Supreet Kaur, Gaurav Kapoor, Nishtha, Anika Kulshrestha)
- **Aspen's Best** (the top 5 money pages): Pediatric, Invisalign, Dental Implants, Veneers, Teeth Whitening, Fast Braces
- **Results**: Before & After, Written Testimonials, Video Testimonials, Videos, Offers
- **Blogs**
- **Contact Us**
- **Book Appointment** (button)

Footer (4 columns plus address strip):
- Contact strip: phone, email, WhatsApp, then 3 clinic cards (name, address, hours, all Mon-Sun 10:30-7)
- Brand tagline plus one-line positioning
- **Top Services**: Dental Implants, Invisalign, Braces, Kids Dentists, Cosmetic, Restorative
- **Patient Resources**: About, Best Orthodontist, Best Periodontist, Blogs, Clinic Tour, Sterilization & Safety, Videos, Contact
- **Quick Links**: Dentist, Results, Reviews, Book Appointment, Written Testimonials, Video Testimonials
- Medical disclaimer paragraph, then Privacy Policy and Terms, then copyright with a location line

## 3. Treatment / service pages (31)

Hubs: `/kids-dentistry-in-gurgaon`, `/adult-dentistry-in-gurgaon`, `/orthodontics-in-gurgaon`

Kids:
- `/pulpectomy-in-gurgaon`
- `/pediatric-dental-fillings-in-gurgaon`
- `/pediatric-tooth-extraction-in-gurgaon`
- `/pediatric-fluoride-treatment-in-gurgaon`
- `/pit-and-fissure-sealants-in-gurgaon`
- `/space-maintainer-in-gurgaon`
- `/preventive-pediatric-dentistry-in-gurgaon`

Ortho:
- `/braces-treatment-gurgaon`
- `/traditional-metal-braces-in-gurgaon`
- `/ceramic-braces-in-gurgaon`
- `/damon-self-ligating-braces-in-gurgaon`
- `/invisalign-in-gurgaon`
- `/lingual-braces-in-gurgaon`

Cosmetic:
- `/veneers-in-in-gurgaon` (typo in slug)
- `/teeth-whitening-in-gurgaon`
- `/dental-bonding-in-gurgaon` and `/dental-bond-in-gurgaon`
- `/gum-contouring-in-gurgaon`
- `/dental-implants-in-gurgaon`

Restorative:
- `/dental-crowns-in-gurgaon`
- `/dental-bridge-in-gurgaon`
- `/dentures-in-gurgaon`
- `/root-canal-treatment-in-gurgaon`
- `/dental-fillings-in-gurgaon`
- `/tooth-extractions-in-gurgaon`

Periodontal:
- `/oral-prophylaxis-scaling-and-polishing-in-gurgaon`
- `/root-planing-deep-cleaning-in-gurgaon`
- `/gum-surgery-in-gurgaon`

## 4. Treatment page template anatomy

Headings extracted from dentures, root canal, implants, whitening and Invisalign. All share one template. Length is **1,400 to 2,550 words** (including about 400 words of nav and footer boilerplate), and there is **one content image** per page.

Typical order:
1. Fixed header, then a hero band with the H1 ("X in Gurgaon"), a 2-paragraph intro, and a "Request A CallBack" form (name, mobile, consent, captcha) beside it.
2. **What is X?**
3. **Why choose / why you need it**, or **Who can get it** (indications and symptoms).
4. **Types** (sub-H3s; implants, whitening and braces only).
5. **Procedure**, as numbered H3 steps (4 to 7 steps).
6. **Benefits** (bullets).
7. **Aftercare tips** (bullets).
8. **Cost in Gurgaon**: a price-range sentence, an "what affects the price" bullet list, and a link to the longer cost blog. There is no table; the prices are stated in the text and in the meta description.
9. **Why Aspen Dentals, Gurgaon?**: 5 to 6 bold-lead bullets (specialist, technology, materials, hygiene, and so on). The named doctor appears in the FAQ or this block rather than in a separate box (a `Physician` schema is present on implants and Invisalign).
10. **FAQs**: 5 to 12 questions in an accordion. Many pages have a second "Frequently Asked Questions" block with 1 to 8 extra question-and-answer pairs aimed at keyword queries (cost, "near me", EMI).
11. Repeated site-wide blocks (see section 5): Real Results, reviews carousel, "Ready for Your 5-Star Smile?" CTA, 3 clinic cards, footer.

Variants:
- **Hub pages** (kids): an H4 card grid of sub-treatments with indicative prices, differences between terms, "why parents choose us", a doctor row, a clinic-by-sector section, "when to visit", and 12 FAQs.
- **Doctor pages**: About, MDS vs BDS explainer, Education & Training, Treatments provided, Common issues, FAQs, "Also Explore", a doctor-specific booking CTA, Results, reviews.
- **Location pages**: clinic gallery, local intro, "why choose" bullets, service cards grid (mirrors the nav), specialist team, awards, nearby areas, map.
- **Blog posts**: H1, H2 per cost or topic sub-question, a benefits H3, an FAQ block and the closing CTA. About 1,300 words.

## 5. Homepage section order and trust elements

1. Fixed header and mega-menu; hero H1 "Best Dental Clinic & Dentist in Gurgaon"
2. Google rating badge: 4.9 stars with 456 Google reviews, beside the hero text
3. Hero lead form ("Request A CallBack") with WhatsApp/call/email consent line
4. "Every Smile Has a Story": 4 patient transformation tiles (video or photo)
5. "Featured In" press logo strip
6. "Our Tri-Specialty Services": 3 cards (Kids, Adults, Orthodontics)
7. Diamond Invisalign Provider block
8. "A Journey of Smiles, Trust and Transformation": a stats or story block
9. Our Affiliations (logo strip)
10. Influencer patients (4 named, with role labels)
11. "Awarded Best Dental Clinic in India": a long SEO text block plus awards group photo
12. International patients: a reel grid of about 12 tiles (flag, country, treatment)
13. "Meet the Smile-Makers": doctor cards (name, qualification, years of experience)
14. Real Results: before/after switcher (8 cases)
15. Google reviews carousel (12 reviews, 5 stars each, with disclaimer "results may vary")
16. "Ready for Your 5-Star Smile?" CTA (iTero scan, under-60-seconds booking)
17. Contact info, 3 clinic cards, WhatsApp, footer

Trust elements in use:
- Google 4.9 rating with a review count
- Press ("Featured In") and awards
- Diamond Invisalign provider
- MDS qualifications with years of experience
- Influencer endorsements
- International patients
- Before/after gallery
- Video testimonials
- Sterilization & safety page
- 3 clinics with hours
- iTero 3D scan offer
- EMI mention on Invisalign pages
- AI chat assistant widget (an iframe)
- Floating WhatsApp button; a sticky bottom bar on mobile with Call, Appointment and Chat
- Callback form on nearly every page

## 6. Image usage pattern per page type

- **Treatment page**: one hero image of a person smiling or of the treatment, plus UI icons. The pages are text-heavy, with no diagrams or before/after images on them. The ~39 `<img>` tags are mostly nav and footer chrome.
- **Homepage**: about 135 images, all lazy-loaded WebP with fixed width and height. Types: patient transformation photos, press and affiliation logos, doctor portraits, an awards group photo, international patient portraits with country flags, and before/after pairs.
- **Location page**: clinic interior gallery plus exterior shots and a Google Map embed.
- **Doctor page**: portrait, certification images, treatment icons.
- **Results**: before/after pairs in a gallery with titles, each with its own detail URL.
- **Blog**: one feature image per post.

## 7. SEO patterns

- **Title formula**: `<Treatment> in Gurgaon | <Price hook or Cost, Procedure> | Aspen Dentals`. Prices are placed in titles and metas on money pages ("from Rs X"). Home: `Best Dentist in Gurgaon - Aspen Dentals Clinic in Gurgaon`.
- **H1**: `<Treatment> in Gurgaon`, exactly one per page.
- **Meta description**: an answer-first sentence, then a price range, then a service qualifier and "Book today" (under 160 characters). The first sentence repeats the keyword.
- **Schema** (JSON-LD):
  - Home: `Dentist`, `AggregateRating`, `WebSite` with `SearchAction`
  - Treatments: `MedicalProcedure`, `FAQPage` (Question/Answer), `BreadcrumbList`, with `Offer` and `Physician` on the main pages
  - Locations: `Dentist`, `GeoCoordinates`, `OpeningHoursSpecification`, `AggregateRating`
  - Doctors: `EducationalOccupationalCredential`, `FAQPage`
  - Blog: `BlogPosting`, `Blog`, `CollectionPage`
  - Results: `ImageGallery`
  - Contact: `ContactPoint`
- **Internal linking**: the mega-menu links to every treatment from every page. Treatment pages link cost sections to cost blogs, and blogs link back to treatment pages. Location pages link to treatments and "nearby areas", and the doctor roster feeds doctor pages. Canonical URLs are used throughout.
- **Local SEO**: three clinic pages plus about 10 neighbourhood pages (some live under `/blog/` slugs). FAQ questions are written as "near me" and "in Gurgaon" queries.
- **Weaknesses**: duplicate bonding pages, a slug typo, and "Offers" and `/our-team` appear in the nav but not in the sitemap.

## 8. Takeaways

What makes it feel like a big brand:
- Breadth: about 31 service pages with a clear 3-specialty taxonomy and a mega-menu.
- Repeated social proof on every page: the 4.9 star Google badge, a review carousel, a Real Results block and a closing CTA.
- Named specialists with MDS credentials, doctor pages and a roster.
- Awards, press, "Diamond Invisalign Provider" and influencer content.
- Several branches with an address strip, map and hours.
- Always-visible conversion: floating WhatsApp, call, a callback form on every page, and an AI chat widget.
- Price transparency in titles and body (a major SEO and trust lever).

Cheap to replicate for a single-doctor clinic:
- One template for treatment pages (What is it, Why, Procedure steps, Benefits, Aftercare, Cost, Why us, FAQ, CTA) with FAQPage + MedicalProcedure + BreadcrumbList schema.
- Price ranges in titles and metas, with honest "from" prices and "what affects cost".
- Header with Services mega-menu, a sticky Call / WhatsApp / Book bar, and a callback form.
- Review carousel and a rating badge (real Google numbers only), with a "results may vary" disclaimer.
- One doctor page with credentials, a "why choose" block, and a clinic page with Dentist schema, hours and map.
- 10 to 15 treatment pages first, then cost-oriented blog posts, then area pages (`dentist-in-<area>`).

Expensive or not worth copying:
- Press, influencer, awards and international patient content (needs real assets and relationships).
- 100+ page volume and 35 blog posts, multiple branches, and 9-doctor rosters.
- Before/after gallery with consent (needs patient photos and consent; start with a few cases).
- Video testimonials and a clinic video library.
- AI chat assistant.
- Diamond-style certifications.

Suggested lean scope: homepage, 10 to 14 treatment pages, 1 doctor page, 1 clinic or contact page, 3 to 5 cost-focused blogs, 2 to 3 local area pages, results and reviews pages, privacy and terms.
