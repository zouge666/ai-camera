document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("floating-cta");
  var target = document.getElementById("contact");
  if (!btn || !target) return;

  btn.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      var nav = document.querySelector("nav");
      var offset = 0;
      if (nav) {
        var styles = window.getComputedStyle(nav);
        var h = nav.offsetHeight || 0;
        var pos = styles.position;
        if (pos === "sticky" || pos === "fixed") offset = h;
      }
      var top =
        target.getBoundingClientRect().top + window.pageYOffset - offset - 8;
      var reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      window.scrollTo({
        top: top < 0 ? 0 : top,
        behavior: reduce ? "auto" : "smooth",
      });
      if (location.hash !== "#contact")
        history.replaceState(null, "", "#contact");
    },
    { passive: false }
  );
});

var toggle = document.querySelector(".menu-toggle");
var nav = document.querySelector("nav");
var links = document.querySelectorAll("#mobile-menu a");
if (toggle && nav) {
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}
links.forEach(function (a) {
  a.addEventListener("click", function () {
    if (nav.classList.contains("menu-open")) {
      nav.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && nav.classList.contains("menu-open")) {
    nav.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});
