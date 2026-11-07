// Single place for clinic details, treatments and prices. Confirm contact details with Dr. Jain before launch.
window.CLINIC = {
  name: "Dr. Disha Jain Dental Clinic",
  phone: "919650647352",
  whatsapp: "919650647352",
  // Opens Google Maps with directions to the clinic (map + route). Do not use a Business Profile share link here: it opens the listing instead of the map.
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Dr.+Disha+Jain+Dental+Clinic%2C+C-73+Palam+Vyapar+Kendra%2C+Palam+Vihar%2C+Gurugram",
  showBeforeAfter: true,      // set false (or replace assets/before.svg + after.svg with real, consented cases) before ads go live
  gaId: "",                   // Google Analytics 4 ID, e.g. "G-XXXXXXXXXX" (optional)
  adsId: "",                  // Google Ads ID, e.g. "AW-1234567890"; leave empty until the Ads account is ready
  adsConversions: {           // conversion labels from Google Ads > Goals > Conversions (the part after the slash in send_to)
    call_click: "",           // taps on any Call button
    whatsapp_click: "",       // taps on any WhatsApp button
    lead_submit: ""           // appointment form sent
  },

  // Flip to true to show "From ₹X" on the treatment cards once prices are agreed.
  showPrices: false,
  prices: {                   // rupees; only shown when showPrices is true
    rct: null, crown: null, whitening: null, veneers: null,
    filling: null, extraction: null, dentures: null, implants: null, cleaning: null
  },

  // Ad-group variants: ads link to /?t=rct etc. and the hero copy swaps to match the search.
  variants: {
    default:   { eyebrow: "Palam Vihar, Gurugram", h1: "Gentle dentistry, explained before it begins.", sub: "Dr. Disha Jain has 13+ years of experience treating everything from toothache to smile makeovers, in a calm, unhurried clinic." },
    rct:       { eyebrow: "Root canal in Palam Vihar", h1: "Tooth pain? Get comfortable relief today.", sub: "Gentle root canal treatment with Dr. Disha Jain. We explain every step, so there are no surprises." },
    pain:      { eyebrow: "Toothache in Palam Vihar", h1: "Toothache can't wait. We can see you soon.", sub: "Call or WhatsApp us now. Dr. Disha Jain finds the cause, explains your options and treats you gently." },
    whitening: { eyebrow: "Teeth whitening in Palam Vihar", h1: "A brighter smile, done safely.", sub: "Professional whitening with a dentist who checks your teeth and gums first." },
    crown:     { eyebrow: "Crowns, bridges and veneers", h1: "Repair it. Reshape it. Smile freely.", sub: "Natural-looking crowns, bridges and veneers, planned around your face and bite." },
    dentures:  { eyebrow: "Dentures in Palam Vihar", h1: "Eat, speak and smile with confidence.", sub: "Comfortable, well-fitted dentures made with patience, and adjusted until they feel right." },
    implants:  { eyebrow: "Dental implants", h1: "Replace a missing tooth permanently.", sub: "Talk to Dr. Disha Jain about whether implants are right for you. Honest advice, clear options." }
  }
};
