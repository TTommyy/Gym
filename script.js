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
wwo.from(".wwo-text1, .wwo-text2", {y: "-65%", opacity: 0, duration: 0.85, stagger: 0.25}, "-=1");

// Why us section
let whyUs = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-4",
      start: "center bottom"
   }
});

whyUs.from(".whyus-content h1, .whyus-text-d, .whyus-button", {y: "50%", opacity: 0, duration: 1, stagger: 0.25});
whyUs.from(".whyus-seperator", {x: "-50%", duration: 0.8, opacity: 0}, "-=1");
whyUs.from(".whyus-img", {x: "50%", duration: 1, opacity: 0}, "-=0.90")

const whyButton = document.querySelector(".whyus-button");

whyButton.addEventListener("mouseover", () => {
   whyButton.style.transform = "translateY(-4px)";
   whyButton.style.transition = "ease 500ms";
});

whyButton.addEventListener("mouseout", () => {
   whyButton.style.transform = "translateY(4px)";
   whyButton.style.transition = "ease 500ms";
});

// Healthy section
let health = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-5",
      start: "center bottom"
   }
});

health.from(".healty-slope, .healthy-content", {y: "50%", duration: 1, opacity: 0, stagger: 0.25})
health.from(".healthy-title-d, .healthy-text1, .healthy-text2", {opacity: 0, duration: 1.5, stagger: 0.20})

// Hire a trainer section
let trainer = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-6",
      start: "center bottom"
   }
});

trainer.from(".trainer h1, .trainer-text-d, .trainer-button", {y: "50%", duration: 1, opacity: 0, stagger: 0.30});
trainer.from(".trainer-seperator", {x: "-50%", duration: 0.8, opacity: 0}, "-=1");
trainer.from(".trainer-img", {x: "50%", duration: 1, opacity: 0}, "-=1");

const trainerButton = document.querySelector(".trainer-button");

trainerButton.addEventListener("mouseover", () => {
   trainerButton.style.transform = "translateY(-4px)";
   trainerButton.style.transition = "ease 500ms";
});

trainerButton.addEventListener("mouseout", () => {
   trainerButton.style.transform = "translateY(4px)";
   trainerButton.style.transition = "ease 500ms";
});

// Pricing section
let pricing = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-7",
      start: "center bottom"
   }
});

pricing.from(".pricing-slope", {y: "50%", duration: 1, opacity: 0, stagger: 0.40});

// Testimonial section
let test = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-8",
      start: "center bottom"
   }
});

test.from(".test-content h1, .test-content h2, .test-text-d, .test-button", {y: "50%", duration: 1, opacity: 0, stagger: 0.25})
test.from(".test-seperator", {y: "100%", duration: 1, opacity: 0, stagger: 0.25}, "-=1")

const testButton = document.querySelector(".test-button");

testButton.addEventListener("mouseover", () => {
   testButton.style.transform = "translateY(-4px)";
   testButton.style.transition = "ease 500ms";
});

testButton.addEventListener("mouseout", () => {
   testButton.style.transform = "translateY(4px)";
   testButton.style.transition = "ease 500ms";
});

// Contact section
let contact = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-9",
      start: "center bottom"
   }
});

contact.from(".contact-info", {x: "-50%", duration: 1, opacity: 0});
contact.from(".contact-input", {x: "50%", duration: 1, opacity: 0}, "-=1");
contact.from(".envelope, .c-address, .c-phone, .c-email, .c-time", {y: "50%", duration: 1, opacity: 0, stagger: 0.25});
contact.from(".i-name, .i-email, .i-msg, .i-button, .contact-input h1", {y: "50%", duration: 1, opacity: 0, stagger: 0.25}, "-=0.5");

// Footer
let footer = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-10",
      start: "center bottom"
   }
});

footer.from(".footer h1", {y: "75%" ,opacity: 0, duration: 1, stagger: 0.25});