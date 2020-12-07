// Hamburger for mobile
const burger = document.querySelector(".burger");
const burgerM = document.querySelector(".menu-burger");

burger.addEventListener("click", () => {
   burger.classList.toggle(".open-burger");
   burgerM.classList.toggle(".open-menu");
});