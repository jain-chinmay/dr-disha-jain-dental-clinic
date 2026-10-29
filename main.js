(function () {
  var c = window.CLINIC;
  document.querySelectorAll("[data-call]").forEach(function (a) {
    a.href = "tel:+" + c.phone;
    a.addEventListener("click", function () {
      if (window.gtag) gtag("event", "call_click");
    });
  });
  function wa(text) {
    return "https://wa.me/" + c.whatsapp + "?text=" + encodeURIComponent(text);
  }
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = wa("Hi, I'd like to book an appointment at " + c.name + ".");
    a.target = "_blank";
    a.rel = "noopener";
  });
  var form = document.getElementById("lead");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var n = form.name.value.trim(), p = form.phone.value.replace(/\D/g, "");
    if (!n || p.length < 10) {
      document.getElementById("formnote").textContent = "Please enter your name and a 10-digit mobile number.";
      return;
    }
    if (window.gtag) gtag("event", "lead_submit");
    var msg = "Hi, I'm " + n + " (" + p + "). I need: " + form.issue.value + ". Please share an appointment slot.";
    window.open(wa(msg), "_blank", "noopener");
  });
  document.getElementById("yr").textContent = new Date().getFullYear();
})();
