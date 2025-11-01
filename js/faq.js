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
