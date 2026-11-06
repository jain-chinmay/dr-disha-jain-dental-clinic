#!/usr/bin/env node
// Static site generator: `node build.js` writes every inner page next to index.html and refreshes the shared header/footer in index.html.
// No dependencies. Content lives in data/treatments.js; page copy for info pages is below.
const fs = require("fs"), path = require("path");
const T = require("./data/treatments.js").concat(require("./data/treatments-extra.js"));
const POSTS = require("./data/posts.js");
const SITE = "https://jain-chinmay.github.io/dr-disha-jain-dental-clinic/";
const NAME = "Dr. Disha Jain Dental Clinic";
const PHONE_TXT = "+91 96506 47352";
const sufx = "-in-palam-vihar";
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const urlOf = t => t.slug + sufx + "/";
const byGroup = g => T.filter(t => t.group === g);
const GROUPS = [
  ["restorative", "Restorative"], ["cosmetic", "Cosmetic"], ["implants", "Implants"], ["gum", "Gum care"], ["kids", "Kids"], ["ortho", "Braces and aligners"]
];

// ---------- icons ----------
const ICON = {
  tooth: '<path d="M14 8c-5 0-8 4-8 9 0 6 3 8 3 15 0 5 2 8 4 8s3-5 4-9c1-3 2-3 3-3s2 0 3 3c1 4 2 9 4 9s4-3 4-8c0-7 3-9 3-15 0-5-3-9-8-9-3 0-5 2-7 2s-4-2-8-2z"/>',
  crown: '<path d="M8 34l-2-20 11 8 7-12 7 12 11-8-2 20z"/><path d="M10 40h28"/>',
  spark: '<path d="M24 6l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/><path d="M38 30l1.5 4.5L44 36l-4.5 1.5L38 42l-1.5-4.5L32 36l4.5-1.5z"/>',
  veneer: '<rect x="12" y="6" width="24" height="36" rx="12"/><path d="M18 18h12"/>',
  implant: '<path d="M14 8h20v10H14z"/><path d="M18 18v6M30 18v6M20 24h8l-1 6h-6zM22 30v4M26 30v4M21 36h6M22 40h4"/>',
  circle: '<circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="6"/>',
  arrow: '<path d="M10 38l28-28M30 10h8v8"/>',
  denture: '<path d="M6 22c4 14 32 14 36 0-6 4-30 4-36 0z"/><path d="M14 26v4M20 28v4M28 28v4M34 26v4"/>',
  bridge: '<path d="M6 34V20c0-4 4-6 8-6h20c4 0 8 2 8 6v14"/><path d="M16 34V24M24 34V24M32 34V24"/>'
};
const icon = k => `<svg viewBox="0 0 48 48" aria-hidden="true">${ICON[k] || ICON.tooth}</svg>`;

// ---------- shared partials (b = relative path back to site root) ----------
const link = (b, t) => `<a href="${b}${urlOf(t)}">${esc(t.name)}</a>`;

function header(b) {
  const mega = GROUPS.map(([g, label]) => `<div><h4>${label}</h4>${byGroup(g).map(t => link(b, t)).join("")}</div>`).join("");
  return `<!--HEADER-->
<div class="topbar"><div class="wrap">
  <span>📍 Palam Vihar, Gurugram</span>
  <span>Mon to Sat 10 am to 2 pm, 5 pm to 8 pm · Sun 10 am to 2 pm</span>
  <span class="tb-links"><a data-call href="tel:+919650647352">${PHONE_TXT}</a><a data-wa href="#">WhatsApp</a></span>
</div></div>
<header class="top" id="top">
  <div class="wrap bar">
    <a class="brand" href="${b || "./"}"><img src="${b}assets/logo.svg" width="40" height="40" alt=""><span>Dr. Disha Jain <em>Dental Clinic</em></span></a>
    <nav class="nav" id="nav" aria-label="Primary">
      <div class="has-mega"><a href="${b}treatments/">Treatments</a><div class="mega"><div class="wrap mega-in">${mega}<div class="mega-all"><a href="${b}treatments/">View all treatments →</a></div></div></div></div>
      <a href="${b}about/">Our doctor</a><a href="${b}reviews/">Reviews</a><a href="${b}blog/">Blog</a><a href="${b}clinic/">The clinic</a><a href="${b}faq/">FAQ</a><a href="${b}contact/">Contact</a>
    </nav>
    <a class="btn btn-sm bar-book" href="#lead">Book appointment</a>
    <a class="btn btn-sm bar-call" data-call href="tel:+919650647352">Call</a>
    <button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="Menu"><i></i><i></i><i></i></button>
  </div>
</header>
<!--/HEADER-->`;
}

function footer(b) {
  return `<!--FOOTER-->
<footer class="foot">
  <div class="wrap foot-grid">
    <div class="foot-brand">
      <a class="brand" href="${b || "./"}"><img src="${b}assets/logo.svg" width="44" height="44" alt=""><span>Dr. Disha Jain <em>Dental Clinic</em></span></a>
      <p>Gentle, clearly explained dental care in Palam Vihar, Gurugram, with Dr. Disha Jain, BDS.</p>
      <div class="cta-row"><a class="btn btn-sm" data-call href="tel:+919650647352">Call now</a><a class="btn btn-sm btn-ghost" data-wa href="#">WhatsApp</a></div>
    </div>
    <nav aria-label="Treatments"><h4>Treatments</h4><ul>${T.slice(0, 8).map(t => `<li>${link(b, t)}</li>`).join("")}<li><a href="${b}treatments/">All treatments →</a></li></ul></nav>
    <nav aria-label="Clinic"><h4>Clinic</h4><ul><li><a href="${b}about/">Our doctor</a></li><li><a href="${b}clinic/">The clinic</a></li><li><a href="${b}reviews/">Patient reviews</a></li><li><a href="${b}faq/">FAQ</a></li><li><a href="${b}blog/">Blog</a></li><li><a href="${b}dentist-in-palam-vihar/">Dentist in Palam Vihar</a></li><li><a href="${b}contact/">Contact and booking</a></li><li><a href="${b}privacy/">Privacy</a></li></ul></nav>
    <div><h4>Contact</h4>
      <address>C-73, First Floor, Gate No. 2,<br>Palam Vyapar Kendra, Palam Vihar,<br>Gurugram, Haryana</address>
      <p><a data-call href="tel:+919650647352">${PHONE_TXT}</a></p>
      <p><b>Mon to Sat</b><br>10 am to 2 pm, 5 pm to 8 pm<br><b>Sunday</b> 10 am to 2 pm</p>
      <p><a data-map href="#">Get directions on Google Maps</a></p>
    </div>
  </div>
  <div class="foot-bar"><div class="wrap">
    <p>© <span id="yr"></span> ${NAME}, Palam Vihar, Gurugram. All rights reserved.</p>
    <p>Results vary from patient to patient. This website gives general information and does not replace a clinical examination.</p>
  </div></div>
</footer>
<!--/FOOTER-->`;
}

const sticky = `<div class="sticky" id="sticky">
  <a class="btn" data-call href="tel:+919650647352">Call</a>
  <a class="btn btn-ghost" data-wa href="#">WhatsApp</a>
  <a class="btn btn-ghost" data-map href="#">Map</a>
</div>`;

function bookBand(issue) {
  const opts = ["Tooth pain", "Root canal", "Cleaning / check-up", "Teeth whitening", "Crown / bridge / veneers", "Dental implant", "Filling / extraction", "Dentures", "Something else"];
  return `<section class="band book-band"><div class="wrap two">
  <div class="reveal"><p class="eyebrow">Book a visit</p><h2>Ready when you are.</h2><p>Send your details on WhatsApp and we will reply with a time during clinic hours. In severe pain, please call us directly.</p>
  <div class="cta-row"><a class="btn" data-call href="tel:+919650647352">Call ${PHONE_TXT}</a><a class="btn btn-ghost" data-wa href="#">WhatsApp us</a></div></div>
  <form class="form card reveal" id="lead" novalidate>
    <h3>Request an appointment</h3>
    <label for="name">Your name</label><input id="name" name="name" autocomplete="name" required>
    <label for="phone">Mobile number</label><input id="phone" name="phone" type="tel" inputmode="numeric" autocomplete="tel" required>
    <label for="issue">What do you need?</label>
    <select id="issue" name="issue">${opts.map(o => `<option${o === issue ? " selected" : ""}>${o}</option>`).join("")}</select>
    <button class="btn" type="submit">Send on WhatsApp</button>
    <p class="note" id="formnote">Opens WhatsApp with your details filled in. For severe pain, please call.</p>
  </form></div></section>`;
}

function page({ file, title, desc, body, schema = [], depth, ogImage = "assets/clinic-chair.jpg" }) {
  const b = "../".repeat(depth);
  const canon = SITE + (file === "index.html" ? "" : file.replace(/index\.html$/, ""));
  const ld = schema.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n");
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canon}">
<meta name="theme-color" content="#b3182b">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap">
<link rel="icon" href="${b}assets/logo.svg" type="image/svg+xml">
<link rel="icon" href="${b}assets/favicon.png" type="image/png" sizes="64x64">
<link rel="apple-touch-icon" href="${b}assets/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}${ogImage}">
<link rel="stylesheet" href="${b}style.css">
${ld}
</head>
<body>
<div class="progress" id="progress" aria-hidden="true"></div>
${header(b)}
<main>
${body(b)}
</main>
${footer(b)}
${sticky}
<script src="${b}config.js"></script>
<script src="${b}main.js"></script>
</body>
</html>
`;
  const out = path.join(__dirname, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  return canon;
}

const crumbs = (b, items) => `<nav class="crumbs" aria-label="Breadcrumb"><a href="${b || "./"}">Home</a>${items.map(([l, h]) => ` <span>/</span> ${h ? `<a href="${b}${h}">${esc(l)}</a>` : `<span aria-current="page">${esc(l)}</span>`}`).join("")}</nav>`;
const crumbLD = items => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [["Home", ""]].concat(items).map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it[0], item: SITE + (it[1] || "") })) });
const faqLD = faqs => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
const faqHTML = faqs => faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");
const card = (b, t) => `<a class="card tcard reveal" href="${b}${urlOf(t)}">${icon(t.icon)}<h3>${esc(t.name)}</h3><p>${esc(t.short)}</p><span class="more">Read more →</span></a>`;
const heroCTA = `<div class="cta-row"><a class="btn" data-call href="tel:+919650647352">Call to book</a><a class="btn btn-ghost" data-wa href="#">WhatsApp us</a></div>`;
const chips = `<ul class="chips"><li>BDS dentist</li><li>13+ years</li><li>₹400 consultation</li><li>Open Sunday mornings</li></ul>`;

// ---------- hero photo, glance data, page sections ----------
const PHOTOS = [["clinic-chair", "Treatment chair with overhead light and monitor"], ["clinic-treatment", "Dr. Disha Jain treating a young patient"], ["clinic-desk", "Consultation desk"], ["clinic-chair-2", "Dental chair and equipment"], ["clinic-cabinets", "Instrument and storage cabinets"], ["clinic-treatment-2", "Dr. Disha Jain at the chair during a check-up"]];
const heroPhoto = (b, i) => { const [f, a] = PHOTOS[i % PHOTOS.length]; return `<div class="hero-photo"><img src="${b}assets/${f}.jpg" width="900" height="600" alt="${a}" fetchpriority="high"><div class="hp-badge"><img src="${b}assets/doctor-1.jpg" width="40" height="50" alt=""><span><b>Dr. Disha Jain, BDS</b>13+ years of experience</span></div></div>`; };
const heroSplit = (b, text, i) => `<section class="page-hero"><div class="wrap hero-split"><div class="hero-text">${text}</div>${heroPhoto(b, i)}</div></section>`;
const GLANCE = {
  "root-canal-treatment": ["1 to 3 visits", "Local anaesthesia", "Keeps your own tooth"], "dental-fillings": ["Usually 1 visit", "Numbing if needed", "Stops decay spreading"],
  "dental-crowns": ["Usually 2 visits", "Numbed for preparation", "Protects a weak tooth"], "dental-bridges": ["2 to 3 visits", "Numbed for preparation", "Fixed, no surgery"],
  "dentures": ["Several fitting visits", "No numbing for fitting", "Removable teeth"], "tooth-extraction": ["Usually 1 visit", "Local anaesthesia", "Relieves pain and infection"],
  "wisdom-tooth-removal": ["Usually 1 visit", "Local anaesthesia", "Ends repeated swelling"], "teeth-whitening": ["Often 1 visit", "No numbing needed", "Brighter natural teeth"],
  "dental-veneers": ["2 to 3 visits", "Numbing if needed", "Fixes chips, gaps, stains"], "dental-bonding": ["Often 1 visit", "Usually no numbing", "Repairs small chips and gaps"],
  "smile-design": ["Planned in stages", "Depends on treatment", "A personalised plan"], "dental-implants": ["Several months, in stages", "Local anaesthesia", "Replaces a tooth from the root"],
  "scaling-and-polishing": ["Usually 1 visit", "Usually no numbing", "Healthier gums"], "deep-cleaning": ["1 to several visits", "Local anaesthesia", "Treats early gum disease"],
  "gum-treatment": ["Several visits", "Numbing for deep cleaning", "Controls gum disease"], "kids-dentistry": ["Short, gentle visits", "Child-friendly approach", "Prevention first"],
  "braces": ["Often 1 to 2 years", "Adjustments every few weeks", "Straighter, healthier bite"], "clear-aligners": ["Several months to a year or more", "Removable trays", "Discreet straightening"]
};
const SECTIONS = [["what", "What is it?"], ["who", "Who is it for?"], ["steps", "Step by step"], ["benefits", "Benefits"], ["aftercare", "Aftercare"], ["cost", "Cost"], ["why", "Your dentist"], ["faq", "FAQs"]];
const tocLinks = () => SECTIONS.map(([id, l]) => `<li><a href="#${id}">${l}</a></li>`).join("");

// ---------- treatment pages ----------
const GROUPLABEL = { restorative: "Restorative dentistry", cosmetic: "Cosmetic dentistry", implants: "Dental implants", gum: "Gum care", kids: "Kids' dentistry", ortho: "Braces and aligners" };
const GROUPHUB = { restorative: "restorative-dentistry/", cosmetic: "cosmetic-dentistry/" };
const urls = [""];

T.forEach(t => {
  const file = urlOf(t) + "index.html";
  const rel = t.related.map(s => T.find(x => x.slug === s)).filter(Boolean);
  const hub = GROUPHUB[t.group];
  const crumbItems = [["Treatments", "treatments/"]].concat(hub ? [[GROUPLABEL[t.group], hub]] : [], [[t.name, null]]);
  const crumbLDItems = [["Treatments", "treatments/"], [t.name, urlOf(t)]];
  urls.push(urlOf(t));
  page({
    file, depth: 1,
    title: `${t.name} in Palam Vihar, Gurugram | ${NAME}`,
    desc: `${t.name} in Palam Vihar, Gurugram with Dr. Disha Jain. ${t.short} Call or WhatsApp to book.`,
    schema: [crumbLD(crumbLDItems), faqLD(t.faqs), { "@context": "https://schema.org", "@type": "MedicalWebPage", name: `${t.name} in Palam Vihar, Gurugram`, about: { "@type": "MedicalProcedure", name: t.name, description: t.short } }],
    body: b => `
${heroSplit(b, `${crumbs(b, crumbItems)}<p class="eyebrow">${GROUPLABEL[t.group]}</p><h1>${esc(t.name)} in Palam Vihar, Gurugram</h1><p class="lead">${esc(t.summary)}</p>${heroCTA}`, T.indexOf(t))}
<div class="wrap"><ul class="glance">
  <li><i>Visits</i><b>${GLANCE[t.slug][0]}</b></li><li><i>Comfort</i><b>${GLANCE[t.slug][1]}</b></li><li><i>Best for</i><b>${GLANCE[t.slug][2]}</b></li><li><i>Consultation</i><b>₹400</b></li>
</ul></div>
<div class="wrap article-grid">
  <article class="prose">
    <details class="toc-m"><summary>On this page</summary><ul>${tocLinks()}</ul></details>
    <h2 id="what">What is ${esc(t.name.toLowerCase())}?</h2>
    ${t.what.map(p => `<p>${esc(p)}</p>`).join("")}
    <h2 id="who">Who is it for?</h2>
    <ul class="ticks">${t.who.map(w => `<li>${esc(w)}</li>`).join("")}</ul>
    <h2 id="steps">What happens, step by step</h2>
    <ol class="numlist">${t.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
    <h2 id="benefits">Benefits</h2>
    <div class="mini-cards">${t.benefits.map(([h, d]) => `<div><h3>${esc(h)}</h3><p>${esc(d)}</p></div>`).join("")}</div>
    <details class="fold" id="aftercare"><summary><h2>Aftercare</h2></summary>
    <ul class="ticks">${t.aftercare.map(w => `<li>${esc(w)}</li>`).join("")}</ul></details>
    <details class="fold" id="cost" open><summary><h2>Cost of ${esc(t.name.toLowerCase())} in Gurugram</h2></summary>
    <p>The cost depends on your mouth, so we give you a clear figure only after examining you. What usually affects it:</p>
    <ul class="ticks">${t.cost.map(w => `<li>${esc(w)}</li>`).join("")}</ul>
    <p>Consultation is ₹400. If treatment is needed, we explain the options and the cost before we start, so there are no surprises.</p></details>
    <div class="doc-card" id="why"><img src="${b}assets/doctor-1.jpg" width="800" height="1000" alt="Dr. Disha Jain" loading="lazy"><div><p class="eyebrow">Your dentist</p><h2>Dr. Disha Jain, BDS</h2>
      <p>13+ years of experience. Trained as a resident in Delhi government hospitals, where she treated a wide range of dental problems. Patients mention how patiently she explains things, so you understand your treatment before you agree to it.</p>
      <p><a class="btn btn-sm btn-ghost" href="${b}about/">Meet Dr. Jain</a></p></div></div>
    <h2 id="faq">Frequently asked questions</h2>
    <div class="faq-list">${faqHTML(t.faqs)}</div>
  </article>
  <aside class="side">
    <div class="side-card">
      <h3>Book ${esc(t.name.toLowerCase())}</h3>
      <p>Consultation ₹400. We explain every option and cost first.</p>
      <a class="btn" data-call href="tel:+919650647352">Call ${PHONE_TXT}</a>
      <a class="btn btn-ghost" data-wa href="#">WhatsApp us</a>
      <p class="note">Mon to Sat 10-2, 5-8 · Sun 10-2</p>
    </div>
    <nav class="side-card toc" aria-label="On this page"><h3>On this page</h3><ul class="side-links">${tocLinks()}</ul></nav>
  </aside>
</div>
<section class="wrap section hub-group related"><h2 class="reveal">Related treatments</h2><div class="cards">${rel.map(r => card(b, r)).join("")}</div><p class="all-link"><a class="btn btn-ghost" href="${b}treatments/">All treatments</a></p></section>
${bookBand(t.name.includes("Root") ? "Root canal" : t.slug.includes("whitening") ? "Teeth whitening" : t.slug.includes("implant") ? "Dental implant" : t.slug.includes("denture") ? "Dentures" : t.group === "gum" ? "Cleaning / check-up" : t.group === "cosmetic" ? "Crown / bridge / veneers" : "Filling / extraction")}`
  });
});

// ---------- hubs ----------
let hubIdx = 3;
function hub({ file, title, h1, desc, lead, groups, eyebrow, crumbLabel }) {
  urls.push(file.replace("index.html", ""));
  page({
    file, depth: 1, title: `${title} | ${NAME}`, desc,
    schema: [crumbLD([[crumbLabel, file.replace("index.html", "")]])],
    body: b => `
${heroSplit(b, `${crumbs(b, [[crumbLabel, null]])}<p class="eyebrow">${eyebrow}</p><h1>${h1}</h1><p class="lead">${lead}</p>${heroCTA}${chips}`, hubIdx++)}
${groups.map(([label, items]) => `<section class="wrap section hub-group"><h2 class="reveal">${label}</h2><div class="cards">${items.map(t => card(b, t)).join("")}</div></section>`).join("")}
${bookBand()}`
  });
}
hub({ file: "treatments/index.html", title: "Dental Treatments in Palam Vihar, Gurugram", h1: "All dental treatments", eyebrow: "Treatments", crumbLabel: "Treatments",
  desc: "Root canal, crowns, implants, whitening, veneers, dentures, fillings, extractions and gum care in Palam Vihar, Gurugram with Dr. Disha Jain.",
  lead: "From a toothache to a smile makeover, everything is done by one dentist who explains your options and cost before treatment.",
  groups: GROUPS.map(([g, l]) => [l, byGroup(g)]) });
hub({ file: "restorative-dentistry/index.html", title: "Restorative Dentistry in Palam Vihar, Gurugram", h1: "Restorative dentistry", eyebrow: "Treatments", crumbLabel: "Restorative dentistry",
  desc: "Root canal, fillings, crowns, bridges, dentures and extractions in Palam Vihar, Gurugram. Gentle, clearly explained care.",
  lead: "Repair damaged teeth, replace missing ones and relieve pain, with treatment explained before it begins.",
  groups: [["Restorative treatments", byGroup("restorative")]] });
hub({ file: "cosmetic-dentistry/index.html", title: "Cosmetic Dentistry in Palam Vihar, Gurugram", h1: "Cosmetic dentistry", eyebrow: "Treatments", crumbLabel: "Cosmetic dentistry",
  desc: "Teeth whitening, veneers, bonding and smile design in Palam Vihar, Gurugram, planned for a natural-looking result.",
  lead: "Brighter, more even smiles planned around your face, with honest advice about what you actually need.",
  groups: [["Cosmetic treatments", byGroup("cosmetic")]] });

// ---------- info pages ----------
const GENERAL_FAQ = [
  ["How much is a consultation?", "₹400. If treatment is needed, we explain the options and cost before we start."],
  ["Do I need an appointment?", "Booking is best so you do not wait. In pain? Call us and we will try to fit you in."],
  ["What are your clinic hours?", "Monday to Saturday 10 am to 2 pm and 5 pm to 8 pm. Sunday 10 am to 2 pm."],
  ["Where is the clinic?", "C-73, First Floor, Gate No. 2, Palam Vyapar Kendra, Palam Vihar, Gurugram, Haryana."],
  ["Is root canal treatment painful?", "The tooth is numbed first, so it is usually similar to having a filling. Most people feel relief from the original pain afterwards."],
  ["Do you place dental implants?", "Please call to discuss. Dr. Jain will advise whether an implant is right for you."],
  ["Will you explain the cost before treatment?", "Yes. You will see the options and the cost before any treatment starts."],
  ["How often should I get my teeth cleaned?", "Most people benefit from a check-up and cleaning every six to twelve months. We will advise what suits you."]
];
const info = (file, title, desc, bodyFn, schema = [], eyebrow = "") => { urls.push(file.replace("index.html", "")); page({ file, depth: 1, title: `${title} | ${NAME}`, desc, body: bodyFn, schema }); };

info("about/index.html", "Dr. Disha Jain, BDS | Dentist in Palam Vihar, Gurugram", "Meet Dr. Disha Jain, a BDS dentist with 13+ years of experience and training in Delhi government hospitals, practising in Palam Vihar, Gurugram.", b => `
<section class="page-hero"><div class="wrap">${crumbs(b, [["Our doctor", null]])}<p class="eyebrow">Your dentist</p><h1>Dr. Disha Jain, BDS</h1><p class="lead">A calm, patient dentist who believes you should understand your treatment before you agree to it.</p>${heroCTA}</div></section>
<div class="wrap section two doctor">
  <div class="photo-frame tall reveal"><img src="${b}assets/doctor-2.jpg" width="800" height="1000" alt="Dr. Disha Jain" loading="lazy"></div>
  <div class="reveal prose">
    <h2>About Dr. Jain</h2>
    <p>Dr. Jain has 13+ years of experience. She trained as a resident in Delhi government hospitals, where she treated a very wide range of dental problems, from emergency toothache to complex restorative work. She now runs her own clinic in Palam Vihar.</p>
    <p>Patients mention how patiently she explains things. She believes in showing you what is wrong, explaining the options and their cost, and treating only what you actually need.</p>
    <h2>What she treats</h2>
    <ul class="ticks">${GROUPS.map(([g, l]) => `<li><b>${l}:</b> ${byGroup(g).map(t => `<a href="${b}${urlOf(t)}">${esc(t.name)}</a>`).join(", ")}</li>`).join("")}</ul>
    <h2>How she works</h2>
    <ul class="ticks"><li>Plain-words explanation of what is wrong</li><li>Every option and its cost shown first</li><li>Gentle technique, patient with nervous patients</li><li>Only the treatment you actually need</li></ul>
  </div>
</div>
${bookBand()}`);

info("clinic/index.html", "Our Clinic in Palam Vihar, Gurugram", "A calm, clean dental clinic in Palam Vyapar Kendra, Palam Vihar, Gurugram. See the treatment room, equipment and how to find us.", b => `
<section class="page-hero"><div class="wrap">${crumbs(b, [["The clinic", null]])}<p class="eyebrow">The clinic</p><h1>A calm place to get your teeth fixed</h1><p class="lead">A comfortable, well-equipped clinic on the first floor of Palam Vyapar Kendra, with a quiet treatment room and an unhurried approach.</p>${heroCTA}</div></section>
<section class="wrap section"><div class="gallery">
  ${[["clinic-chair", "Treatment chair with overhead light and monitor"], ["clinic-treatment", "Dr. Disha Jain treating a young patient"], ["clinic-desk", "Consultation desk"], ["clinic-chair-2", "Dental chair and equipment"], ["clinic-cabinets", "Instrument and storage cabinets"], ["clinic-treatment-2", "Dr. Disha Jain at the chair during a check-up"]].map(([f, a]) => `<img class="reveal" src="${b}assets/${f}.jpg" width="900" height="600" alt="${a}" loading="lazy">`).join("")}
</div></section>
<section class="band"><div class="wrap two"><div class="reveal prose"><h2>Find us</h2><address>${NAME}<br>C-73, First Floor, Gate No. 2,<br>Palam Vyapar Kendra, Palam Vihar,<br>Gurugram, Haryana</address><p><b>Mon to Sat</b> 10 am to 2 pm, 5 pm to 8 pm<br><b>Sunday</b> 10 am to 2 pm</p><div class="cta-row"><a class="btn" data-map href="#">Get directions</a><a class="btn btn-ghost" data-call href="tel:+919650647352">Call us</a></div></div>
<div class="reveal prose"><h2>Look out for</h2><p>Gate No. 2 of Palam Vyapar Kendra, C-73 on the first floor. The lit clinic signboard is at the entrance on the ground floor.</p></div></div></section>
${bookBand()}`);

info("reviews/index.html", "Patient Reviews", "Read what patients say about Dr. Disha Jain Dental Clinic in Palam Vihar, Gurugram, on Google.", b => `
<section class="page-hero"><div class="wrap">${crumbs(b, [["Reviews", null]])}<p class="eyebrow">Patient words</p><h1>What patients say</h1><p class="lead">Our patients' words are the best guide. All our reviews are on our Google listing, where anyone can read them.</p><div class="cta-row"><a class="btn" data-map href="#">Read our Google reviews</a><a class="btn btn-ghost" data-call href="tel:+919650647352">Call to book</a></div></div></section>
<section class="wrap section"><div class="prose narrow"><h2>Read the reviews on Google</h2><p>We do not edit or select reviews here. Open our Google listing to read what patients have written in their own words, including how they found the care, the explanations and the cost.</p><p>Visited us? A short review helps other families in Palam Vihar choose a dentist, and we read every one.</p></div></section>
${bookBand()}`);

info("faq/index.html", "Dental FAQs", "Answers to common questions about dental visits, cost, timings, root canal and implants at Dr. Disha Jain Dental Clinic, Palam Vihar, Gurugram.", b => `
<section class="page-hero"><div class="wrap">${crumbs(b, [["FAQ", null]])}<p class="eyebrow">Questions</p><h1>Common questions</h1><p class="lead">Quick answers about visits, cost and treatment. For anything else, call or WhatsApp us.</p>${heroCTA}</div></section>
<section class="wrap section"><div class="narrow faq-list">${faqHTML(GENERAL_FAQ)}</div><div class="narrow"><h2 style="margin-top:2em">Questions by treatment</h2><ul class="ticks">${T.map(t => `<li><a href="${b}${urlOf(t)}#faq">${esc(t.name)} FAQs</a></li>`).join("")}</ul></div></section>
${bookBand()}`, [faqLD(GENERAL_FAQ)]);

info("contact/index.html", "Contact and Book an Appointment", "Call, WhatsApp or visit Dr. Disha Jain Dental Clinic, C-73, First Floor, Gate No. 2, Palam Vyapar Kendra, Palam Vihar, Gurugram.", b => `
<section class="page-hero"><div class="wrap">${crumbs(b, [["Contact", null]])}<p class="eyebrow">Contact</p><h1>Book an appointment</h1><p class="lead">Call, WhatsApp or send your details below. We reply during clinic hours.</p>${heroCTA}</div></section>
<section class="wrap section two"><div class="reveal prose"><h2>Visit</h2><address>${NAME}<br>C-73, First Floor, Gate No. 2,<br>Palam Vyapar Kendra, Palam Vihar,<br>Gurugram, Haryana</address><p><b>Phone and WhatsApp:</b> <a data-call href="tel:+919650647352">${PHONE_TXT}</a></p><p><b>Mon to Sat</b> 10 am to 2 pm, 5 pm to 8 pm<br><b>Sunday</b> 10 am to 2 pm</p><div class="cta-row"><a class="btn" data-map href="#">Open in Google Maps</a></div></div><div class="reveal prose"><h2>In pain?</h2><p>Call us rather than messaging. We will try to fit you in the same day. Consultation is ₹400.</p></div></section>
${bookBand()}`, [{ "@context": "https://schema.org", "@type": "Dentist", name: NAME, telephone: "+919650647352", address: { "@type": "PostalAddress", streetAddress: "C-73, First Floor, Gate No. 2, Palam Vyapar Kendra, Palam Vihar", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" } }]);

info("privacy/index.html", "Privacy", "How this website handles your information.", b => `
<section class="page-hero"><div class="wrap">${crumbs(b, [["Privacy", null]])}<h1>Privacy</h1></div></section>
<section class="wrap section"><div class="prose narrow">
<p>This website does not store your details. When you use the appointment form, your name, mobile number and request open in WhatsApp so you can send them to the clinic yourself.</p>
<p>If analytics are enabled on this site, they record anonymous usage such as pages viewed and button clicks, to help us improve the site. No personal health information is collected through the website.</p>
<p>Messages you send us on WhatsApp or phone are used only to arrange and carry out your care. Questions about your information? Call us on ${PHONE_TXT}.</p>
<p class="note">General dental information on this site is not a substitute for a clinical examination.</p></div></section>`);

require("./build-extra.js")({ T, POSTS, page, urls, crumbs, crumbLD, faqLD, faqHTML, card, heroCTA, chips, bookBand, NAME, esc, urlOf, heroSplit });

// ---------- refresh index.html header/footer ----------
let idx = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const hRe = /<!--HEADER-->[\s\S]*?<!--\/HEADER-->|<div class="topbar">[\s\S]*?<\/header>/;
const fRe = /<!--FOOTER-->[\s\S]*?<!--\/FOOTER-->|<footer class="foot">[\s\S]*?<\/footer>/;
idx = idx.replace(hRe, () => header("")).replace(fRe, () => footer(""));
fs.writeFileSync(path.join(__dirname, "index.html"), idx);

// ---------- sitemap + robots ----------
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(__dirname, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(__dirname, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}sitemap.xml\n`);
console.log(`Built ${urls.length} pages (${T.length} treatments).`);
