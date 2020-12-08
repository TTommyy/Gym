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
tl.from(".lp-left-slope", {x: "-55%", duration: 0.8, opacity: 0})
tl.from(".lp-content h4, .lp-content h1, .lp-text-d, .lp-button", {y: "50%", duration: 1, opacity: 0, stagger: 0.2}, "-=0.2");
tl.from(".socials", {x: "30%", duration: 1, opacity: 0}, "-=0.5")

const lpButton = document.querySelector(".lp-button");

lpButton.addEventListener("mouseover", () => {
   lpButton.style.transform = "translateY(-4px)";
   lpButton.style.transition = "ease 500ms";
});

lpButton.addEventListener("mouseout", () => {
   lpButton.style.transform = "translateY(4px)";
   lpButton.style.transition = "ease 500ms";
});

// What we offer section
let wwo = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-3",
      start: "center bottom"
   }
});

wwo.from(".wwo-slope", {x: "-100%", opacity: 0, duration: 1});
wwo.from(".wwo-content", {x: "50%", opacity: 0, duration: 1}, "-=1");
wwo.from(".wwo-slope-d", {y: "65%", opacity: 0, duration: 1.25});
wwo.from(".wwo-text1, .wwo-text2", {y: "-65%", opacity: 0, duration: 1, stagger: 0.25}, "-=1");