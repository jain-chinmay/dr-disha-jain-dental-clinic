(function () {
  var c = window.CLINIC, d = document;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  d.documentElement.classList.add("js");

  // Google tag (only when an ID is configured)
  if (c.gaId) {
    var s = d.createElement("script"); s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + c.gaId; d.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date()); gtag("config", c.gaId);
  }
  function track(name) { if (window.gtag) gtag("event", name); }

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

  // Ad-group variant: /?t=rct swaps the hero copy and highlights the matching card
  var t = new URLSearchParams(location.search).get("t");
  var v = c.variants[t] || c.variants["default"];
  d.getElementById("h-eyebrow").textContent = v.eyebrow;
  d.getElementById("h-title").textContent = v.h1;
  d.getElementById("h-sub").textContent = v.sub;
  var hl = d.querySelector('.card[data-t="' + (t === "pain" ? "rct" : t) + '"]');
  if (hl) { hl.classList.add("hl"); hl.parentNode.insertBefore(hl, hl.parentNode.firstChild); }

  // Prices (hidden until showPrices is true and a price is set)
  if (c.showPrices) {
    d.querySelectorAll("[data-price]").forEach(function (el) {
      var p = c.prices[el.getAttribute("data-price")];
      if (p) el.textContent = "From ₹" + Number(p).toLocaleString("en-IN");
    });
  }

  // Lead form -> WhatsApp
  var form = d.getElementById("lead");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var n = form.name.value.trim(), p = form.phone.value.replace(/\D/g, "");
    if (!n || p.length < 10) {
      d.getElementById("formnote").textContent = "Please enter your name and a 10-digit mobile number.";
      return;
    }
    track("lead_submit");
    window.open(wa("Hi, I'm " + n + " (" + p + "). I need: " + form.issue.value + ". Please share an appointment slot."), "_blank", "noopener");
  });
  d.getElementById("yr").textContent = new Date().getFullYear();

  // Header border + sticky mobile bar after the hero
  var top = d.querySelector(".top"), sticky = d.getElementById("sticky"), hero = d.querySelector(".hero");

  // Scroll reveal
  var items = d.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
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

  // Parallax (transform only) + scroll-driven step line
  var par = Array.prototype.slice.call(d.querySelectorAll("[data-speed]"));
  var steps = d.querySelector(".steps"), ticking = false;
  function frame() {
    var y = window.scrollY, h = window.innerHeight;
    top.classList.toggle("scrolled", y > 8);
    sticky.classList.toggle("show", y > hero.offsetHeight * 0.6);
    if (!reduce && y < h * 1.5) par.forEach(function (el) { el.style.transform = "translate3d(0," + (y * el.dataset.speed).toFixed(1) + "px,0)"; });
    if (steps && !reduce) {
      var r = steps.getBoundingClientRect();
      steps.style.setProperty("--p", Math.max(0, Math.min(1, (h * 0.75 - r.top) / r.height)).toFixed(3));
    } else if (steps) { steps.style.setProperty("--p", 1); }
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
  frame();
})();
