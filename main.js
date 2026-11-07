(function () {
  var c = window.CLINIC, d = document;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var small = window.matchMedia("(max-width: 820px)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  d.documentElement.classList.add("js");

  // Google tag: loads only when a GA4 id and/or Google Ads id is configured in config.js
  var tagIds = [c.gaId, c.adsId].filter(Boolean);
  if (tagIds.length) {
    var s = d.createElement("script"); s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + tagIds[0]; d.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date());
    tagIds.forEach(function (id) { gtag("config", id); });
  }
  // Record an event, and a Google Ads conversion when a label is set for it
  function track(name) {
    if (!window.gtag) return;
    gtag("event", name);
    var label = c.adsConversions && c.adsConversions[name];
    if (c.adsId && label) gtag("event", "conversion", { send_to: c.adsId + "/" + label });
  }

  // Contact links
  function wa(text) { return "https://wa.me/" + c.whatsapp + "?text=" + encodeURIComponent(text); }
  d.querySelectorAll("[data-call]").forEach(function (a) {
    a.href = "tel:+" + c.phone;
    a.addEventListener("click", function () { track("call_click"); });
  });
  d.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = wa("Hi, I'd like to book an appointment at " + c.name + ".");
    a.target = "_blank"; a.rel = "noopener";
    a.addEventListener("click", function () { track("whatsapp_click"); });
  });

  var mapUrl = c.mapsUrl || "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(c.name + ", C-73 Palam Vyapar Kendra, Palam Vihar, Gurugram");
  d.querySelectorAll("[data-map]").forEach(function (a) {
    a.href = mapUrl; a.target = "_blank"; a.rel = "noopener";
    a.addEventListener("click", function () { track("map_click"); });
  });

  // Ad-group variant: /?t=rct swaps the hero copy and highlights the matching card
  var t = new URLSearchParams(location.search).get("t");
  var v = c.variants[t] || c.variants["default"];
  var h1 = d.getElementById("h-title");
  if (h1) {
  d.getElementById("h-eyebrow").textContent = v.eyebrow;
  d.getElementById("h-sub").textContent = v.sub;
  h1.textContent = v.h1;
  var hl = d.querySelector('.card[data-t="' + (t === "pain" ? "rct" : t) + '"]');
  if (hl) { hl.classList.add("hl"); hl.parentNode.insertBefore(hl, hl.parentNode.firstChild); }

  // Word-by-word headline reveal (the h1 keeps its plain text for screen readers)
  if (!reduce) {
    h1.setAttribute("aria-label", v.h1);
    h1.innerHTML = v.h1.split(" ").map(function (w, i) {
      return '<span class="w" aria-hidden="true" style="animation-delay:' + (0.1 + i * 0.07).toFixed(2) + 's">' + w.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</span>";
    }).join(" ");
  }
  }

  // Prices (hidden until showPrices is true and a price is set)
  if (c.showPrices) {
    d.querySelectorAll("[data-price]").forEach(function (el) {
      var p = c.prices[el.getAttribute("data-price")];
      if (p) el.textContent = "From ₹" + Number(p).toLocaleString("en-IN");
    });
  }

  // Before/after: remove the section when switched off in config.js
  if (c.showBeforeAfter === false) {
    d.querySelectorAll('[data-flag="ba"], .wave-sage').forEach(function (el) { el.remove(); });
  }
  var ba = d.getElementById("ba"), range = d.getElementById("ba-range");
  if (ba && range) {
    var setPos = function () { ba.style.setProperty("--pos", range.value + "%"); };
    range.addEventListener("input", setPos); setPos();
  }

  // Lead form -> WhatsApp
  var form = d.getElementById("lead");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var n = form.name.value.trim(), p = form.phone.value.replace(/\D/g, "");
    if (!n || p.length < 10) {
      d.getElementById("formnote").textContent = "Please enter your name and a 10-digit mobile number.";
      return;
    }
    track("lead_submit");
    window.open(wa("Hi, I'm " + n + " (" + p + "). I need: " + form.issue.value + ". Please share an appointment slot."), "_blank", "noopener");
  });
  var yr = d.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();

  // Desktop mega-menu: open on hover with a short close delay
  var hm = d.querySelector('.has-mega');
  if (hm) {
    var closeT;
    hm.addEventListener('mouseenter', function () { clearTimeout(closeT); hm.classList.add('open'); });
    hm.addEventListener('mouseleave', function () { closeT = setTimeout(function () { hm.classList.remove('open'); }, 300); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') hm.classList.remove('open'); });
  }

  // On-this-page highlighting
  var tocLinks = d.querySelectorAll(".toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { tocLinks.forEach(function (l) { l.classList.remove("on"); }); var l = map[e.target.id]; if (l) l.classList.add("on"); }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Object.keys(map).forEach(function (id) { var el = d.getElementById(id); if (el) spy.observe(el); });
  }

  // Mobile: Treatments row expands in place instead of navigating
  var hmLink = hm && hm.querySelector(":scope > a");
  if (hmLink) {
    hmLink.setAttribute("aria-expanded", "false");
    hmLink.addEventListener("click", function (e) {
      if (!window.matchMedia("(max-width: 820px)").matches) return;
      e.preventDefault();
      hmLink.setAttribute("aria-expanded", hm.classList.toggle("sub-open"));
    });
  }

  // Mobile menu
  var mb = d.getElementById("menu-btn"), hd = d.querySelector(".top");
  if (mb) {
    mb.addEventListener("click", function () { var o = hd.classList.toggle("open"); mb.setAttribute("aria-expanded", o); d.documentElement.classList.toggle("menu-open", o); });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape" && hd.classList.contains("open")) { hd.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); d.documentElement.classList.remove("menu-open"); } });
    d.querySelectorAll("#nav a").forEach(function (a) { a.addEventListener("click", function () { if (a.parentNode === hm) return; hd.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); d.documentElement.classList.remove("menu-open"); }); });
  }

  // Scroll reveal (fade only when reduced motion is on; CSS drops the movement)
  var items = d.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    items.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add("in"); }); }

  // Count-up numbers
  d.querySelectorAll("[data-count]").forEach(function (el) {
    var end = +el.dataset.count, suf = el.dataset.suffix || "";
    if (reduce || !("IntersectionObserver" in window)) return;
    var io2 = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return; io2.disconnect();
      var t0 = performance.now();
      (function tick(now) {
        var k = Math.min(1, (now - t0) / 1200);
        el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    }); io2.observe(el);
  });

  // Card tilt + spotlight (mouse devices only)
  if (fine && !reduce) {
    d.querySelectorAll(".cards .card").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        card.style.setProperty("--ry", ((x - 0.5) * 8).toFixed(1) + "deg");
        card.style.setProperty("--rx", ((0.5 - y) * 8).toFixed(1) + "deg");
        card.style.setProperty("--sx", (x * 100).toFixed(0) + "%");
        card.style.setProperty("--sy", (y * 100).toFixed(0) + "%");
      });
      card.addEventListener("pointerleave", function () { card.style.setProperty("--rx", "0deg"); card.style.setProperty("--ry", "0deg"); });
    });
  }

  // Hero art: pointer drift on desktop; depth per layer
  var art = d.getElementById("art");
  d.querySelectorAll("[data-depth]").forEach(function (el) { el.style.setProperty("--d", el.dataset.depth); });
  if (art && fine && !reduce) {
    d.querySelector(".hero").addEventListener("pointermove", function (e) {
      var r = art.getBoundingClientRect();
      art.style.setProperty("--mx", ((e.clientX - (r.left + r.width / 2)) / r.width).toFixed(3));
      art.style.setProperty("--my", ((e.clientY - (r.top + r.height / 2)) / r.height).toFixed(3));
    });
  }

  // Scroll loop: header, sticky bar, progress, parallax (transform only), step line, big type
  var top = d.querySelector(".top"), sticky = d.getElementById("sticky"), hero = d.querySelector(".hero");
  var prog = d.getElementById("progress"), steps = d.querySelector(".steps"), big = d.querySelector("[data-hx]");
  // Fewer parallax layers on phones
  var par = Array.prototype.slice.call(d.querySelectorAll("[data-speed]")).filter(function (el) { return !small || el.hasAttribute("data-mobile"); });
  var ticking = false;
  function frame() {
    var y = window.scrollY, h = window.innerHeight, max = d.documentElement.scrollHeight - h;
    top.classList.toggle("scrolled", y > 8);
    top.classList.toggle("compact", y > 90);
    sticky.classList.toggle("show", y > (hero ? hero.offsetHeight * 0.6 : 200));
    if (!reduce) {
      if (y < h * 1.5) par.forEach(function (el) { el.style.transform = "translate3d(0," + (y * el.dataset.speed).toFixed(1) + "px,0)"; });
      if (big) { var br = big.getBoundingClientRect(); big.style.transform = "translate3d(" + (((br.top + br.height / 2) - h / 2) * -0.25).toFixed(1) + "px,0,0)"; }
    }
    if (steps) {
      var r = steps.getBoundingClientRect();
      steps.style.setProperty("--p", reduce ? 1 : Math.max(0, Math.min(1, (h * 0.75 - r.top) / r.height)).toFixed(3));
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
  frame();
})();
