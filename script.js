// Hamburger for mobile and tablet
const burger = document.querySelector(".burger");
const burgerM = document.querySelector(".menu-burger");

burger.addEventListener("click", () => {
   burger.classList.toggle("open");
   burgerM.classList.toggle("openM");
});

// Animation for home - desktop
const tl = gsap.timeline({defaults: {ease: "power1.out"}});

// Navbar
tl.from(".nav", {y: "-100%", duration: 1, opacity: 0})

// Landing page
tl.from(".lp-left-slope", {x: "-75%", duration: 1.2, opacity: 0})
tl.from(".lp-content", {x: "25%", duration: 1.2, opacity: 0})
tl.from(".socials", {x: "75%", duration: 1, opacity: 0, delay: 0.2})