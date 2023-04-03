const hamburgerContainer = document.querySelector("#header_main-nav");
const hamburger = document.querySelector(".header_main-nav-hamburger");
const links = document.querySelectorAll(".header_main-nav--links li");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("click");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
