// import { gsap } from "gsap/dist/gsap";

// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.to(".group-from-to .box", {
  rotation: 360,
  duration: 5,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box-d", {
  scrollTrigger: ".box-d",
  x: 400,
  rotation: 360,
  duration: 2,
});

gsap.to("#box-toggle-action", {
  scrollTrigger: {
    trigger: "#box-toggle-action",
    toggleActions: "restart pause resume none",
    start: "top center",
    markers: true,
  },
  x: 400,
  rotation: 360,
  duration: 2,
});

gsap.registerPlugin(SplitText);

let split = SplitText.create(".text-split", {
  type: "chars, words, lines",
  wordsClass: "word++",
  onSplit: (self) => {
    gsap.from(self.chars, {
      yPercent: "random([-100, 100])",
      rotation: "random(-30, 30)",
      autoAlpha: 0,
      smartWrap: true,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1,
        from: "random",
      },
    });
  },
});

let float = SplitText.create(".text-float", {
  type: "lines",
  autoSplit: true,
  smartWrap: true,
  onSplit: (self) => {
    return gsap.from(self.lines, {
      stagger: 0.05,
      opacity: 0,
      yPercent: 60,
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  },
});

let masking = SplitText.create(".text-masked", {
  type: "lines, words",
  autoSplit: true,
  smartWrap: true,
  mask: "lines",
  onSplit: (self) => {
    return gsap.from(self.lines, {
        stagger: 0.25, 
        yPercent: 100,
        duration: 0.5,
        repeat: -1,
        repeatDelay: 1.5,
        yoyo: true,
    });
  },
  onComplete: (self) => {
    split.revert()
  },
});
