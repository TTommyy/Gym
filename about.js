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