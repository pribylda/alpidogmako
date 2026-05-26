function toggleMenu(el) {
  el.classList.toggle("active");
  document.querySelector(".mobile-nav").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
  document.body.classList.toggle("menu-open");
}

function closeMenu() {
  document.querySelector(".hamburger").classList.remove("active");
  document.querySelector(".mobile-nav").classList.remove("active");
  document.querySelector(".overlay").classList.remove("active");
  document.body.classList.remove("menu-open");
}