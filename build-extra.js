// Area pages and blog. Called from build.js with the shared helpers.
module.exports = function ({ T, POSTS, page, urls, crumbs, crumbLD, faqLD, faqHTML, card, heroCTA, chips, bookBand, NAME, esc, urlOf, heroSplit }) {
  function area(slug, place, lead, faqs, extra) {
    urls.push(slug + "/");
    page({
      file: slug + "/index.html", depth: 1, title: `Dentist in ${place} | ${NAME}`,
      desc: `Looking for a dentist in ${place}? Dr. Disha Jain offers root canal, crowns, implants, whitening, braces and more at Palam Vyapar Kendra, Palam Vihar. Call or WhatsApp to book.`,
      schema: [crumbLD([["Dentist in " + place, slug + "/"]]), faqLD(faqs)],
      body: b => `
<section class="page-hero page-hero-sm"><div class="wrap">${crumbs(b, [["Dentist in " + place, null]])}<p class="eyebrow">Local dentist</p><h1>Dentist in ${place}</h1><p class="lead">${lead}</p></div></section>
<section class="wrap section"><div class="prose narrow"><h2>Care for the whole family</h2>${extra.map(p => `<p>${p}</p>`).join("")}</div></section>
<section class="wrap section hub-group"><h2 class="reveal">Treatments we offer</h2><div class="cards">${T.map(t => card(b, t)).join("")}</div></section>
<section class="band"><div class="wrap two"><div class="reveal prose"><h2>Find the clinic</h2><address>${NAME}<br>C-73, First Floor, Gate No. 2,<br>Palam Vyapar Kendra, Palam Vihar,<br>Gurugram, Haryana</address><p><b>Mon to Sat</b> 10 am to 2 pm, 5 pm to 8 pm<br><b>Sunday</b> 10 am to 2 pm</p><div class="cta-row"><a class="btn" data-map href="#">Get directions</a><a class="btn btn-ghost" data-call href="tel:+919650647352">Call us</a></div></div>
<div class="reveal"><h2>Common questions</h2><div class="faq-list">${faqHTML(faqs)}</div></div></div></section>
${bookBand()}`
    });
  }
  const AREA_FAQ = [
    ["Where is the clinic?", "C-73, First Floor, Gate No. 2, Palam Vyapar Kendra, Palam Vihar, Gurugram, Haryana."],
    ["How much is a consultation?", "₹400. If treatment is needed, we explain the options and cost before we start."],
    ["Do I need an appointment?", "Booking is best so you do not wait. In pain? Call us and we will try to fit you in."]
  ];
  area("dentist-in-palam-vihar", "Palam Vihar, Gurugram", "A calm, friendly clinic in Palam Vyapar Kendra for toothache, check-ups and smile care, with Dr. Disha Jain, BDS.", AREA_FAQ,
    ["Dr. Jain's clinic is on the first floor of Palam Vyapar Kendra in Palam Vihar, so families nearby can get dental care without a long trip. She sees adults and children and treats everything from a sudden toothache to planned work like crowns, implants and braces.",
     "Every visit starts with an examination and a clear explanation in plain words. You see the options and cost first, and we treat only what you actually need."]);
  area("dentist-in-gurugram", "Gurugram", "Dr. Disha Jain's clinic is in Palam Vihar, Gurugram, offering gentle, clearly explained dental care with 13+ years of experience.",
    AREA_FAQ.concat([["Which part of Gurugram is the clinic in?", "We are in Palam Vihar, at Palam Vyapar Kendra, Gate No. 2, first floor. Use the directions button to open the location in Google Maps."]]),
    ["If you are looking for a dentist in Gurugram, Dr. Jain offers a full range of treatment in one clinic: fillings, root canal, crowns, bridges, dentures, implants, whitening, veneers, braces, aligners and gum care.",
     "She trained as a resident in Delhi government hospitals and has 13+ years of experience. Patients tell us she explains things patiently, and you will always know the plan and the cost before treatment begins."]);

  const fmtDate = d => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  urls.push("blog/");
  page({
    file: "blog/index.html", depth: 1, title: `Dental Health Blog | ${NAME}`, desc: "Plain-language dental advice from Dr. Disha Jain: toothache, aftercare, gum health, whitening and more.",
    schema: [crumbLD([["Blog", "blog/"]])],
    body: b => `
<section class="page-hero"><div class="wrap">${crumbs(b, [["Blog", null]])}<p class="eyebrow">Blog</p><h1>Dental advice in plain words</h1><p class="lead">Short, practical guides from the clinic on common dental questions.</p></div></section>
<section class="wrap section"><div class="cards">${POSTS.map(p => `<a class="card tcard reveal" href="${b}blog/${p.slug}/"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><span class="more">Read article →</span></a>`).join("")}</div></section>
${bookBand()}`
  });
  POSTS.forEach(p => {
    const rel = T.find(t => t.slug === p.related);
    urls.push("blog/" + p.slug + "/");
    page({
      file: "blog/" + p.slug + "/index.html", depth: 2, title: `${p.title} | ${NAME}`, desc: p.desc,
      schema: [crumbLD([["Blog", "blog/"], [p.title, "blog/" + p.slug + "/"]]), { "@context": "https://schema.org", "@type": "Article", headline: p.title, datePublished: p.date, author: { "@type": "Person", name: "Dr. Disha Jain" }, publisher: { "@type": "Organization", name: NAME } }],
      body: b => `
<section class="page-hero"><div class="wrap">${crumbs(b, [["Blog", "blog/"], [p.title, null]])}<p class="eyebrow">${fmtDate(p.date)}</p><h1>${esc(p.title)}</h1><p class="lead">${esc(p.desc)}</p></div></section>
<section class="wrap section"><article class="prose narrow">${p.sections.map(([h, ps]) => `<h2>${esc(h)}</h2>${ps.map(x => `<p>${esc(x)}</p>`).join("")}`).join("")}
${rel ? `<div class="side-card" style="margin-top:2em"><h3>Related: ${esc(rel.name)}</h3><p>${esc(rel.short)}</p><a class="btn" href="${b}${urlOf(rel)}">Learn more</a></div>` : ""}
<p class="note" style="margin-top:2em">This article is general information and does not replace a clinical examination.</p></article></section>
${bookBand()}`
    });
  });
};
