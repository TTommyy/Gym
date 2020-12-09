// Animations about
let timeL = gsap.timeline({defaults: {ease: "power1.out"}});

// Navbar
timeL.from(".nav", {y: "-100%", duration: 1, opacity: 0})

// Landing page
timeL.from(".a-lp-direction", {x: "-75%", duration: 0.7, opacity: 0});
timeL.from(".a-lp-slope", {y: "-75%", duration: 0.7, opacity: 0}, "-=0.4");
timeL.from(".a-lp-about, .a-lp-seperator, .a-lp-name", {duration: 1, opacity: 0, stagger: 0.25});
timeL.from(".a-lp-direction-1, .a-lp-direction-2, .arrow", {duration: 1, opacity: 0, stagger: 0.25}, "-=0.3");
timeL.from(".a-socials", {x: "50%", duration: 1, opacity: 0});

// Pippins section
let pip = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-3",
      start: "center bottom"
   }
});

pip.from(".pip-text1-d, .pip-text2-d, .pip-seperator, .pip-rect h1", {y: "60%", duration: 1, opacity: 0, stagger: 0.25});
pip.from(".pip-img", {x: "50%", duration: 1, opacity: 0});

// Staff section
let staff = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-4",
      start: "center bottom"
   }
});

staff.from(".staff-1", {y: "75%", duration: 1, opacity: 0, stagger: 0.30});
staff.from(".staff-info", {y: "75%", duration: 1, opacity: 0, stagger: 0.30}, "-=0.5");
staff.from(".staff-2", {y: "75%", duration: 1, opacity: 0, stagger: 0.30}, "-=2");
staff.from(".staff-3", {y: "75%", duration: 1, opacity: 0, stagger: 0.30}, "-=2");

// Access section
let access = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-5",
      start: "center bottom"
   }
});

access.from(".access-rect", {x: "-50%", duration: 1, opacity: 0});
access.from(".access-img", {x: "50%", duration: 1, opacity: 0});
access.from(".access-title, .access-address, .access-open, .access-tel", {y: "50%", duration: 1, opacity: 0, stagger: 0.25});

// Contact us section
let contact = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-6",
      start: "center bottom"
   }
});

contact.from(".contact-info", {x: "-50%", duration: 1, opacity: 0});
contact.from(".contact-input", {x: "50%", duration: 1, opacity: 0}, "-=1");
contact.from(".envelope, .c-address, .c-phone, .c-email, .c-time", {y: "50%", duration: 1, opacity: 0, stagger: 0.20});
contact.from(".i-name, .i-email, .i-msg, .i-button, .contact-input h1", {y: "50%", duration: 1, opacity: 0, stagger: 0.20}, "-=0.5");

// Footer
let footer = gsap.timeline({
   scrollTrigger: {
      trigger: ".section-7",
      start: "center bottom"
   }
});

footer.from(".footer h1", {y: "75%", opacity: 0, duration: 1, stagger: 0.25});