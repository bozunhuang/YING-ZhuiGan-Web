// import { gsap } from "gsap/dist/gsap";

// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.to(".group-from-to .box", {
  rotation: 360,
  duration: 5,
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip);

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


//smoother

let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2, 
    effects: true,
})

gsap.to(".group-smoother-spd .box-c", {
    rotate: 360,
    scrollTrigger: {
        trigger: ".group-smoother-spd .box-c", 
        start: 'center center',
        markers: true,
        scrub: true,
    }
})

gsap.to(".group-smoother-lag .box-c", {
    pin: '.group-smoother-lag .box-c',
    start: 'top center',
    end: '+=200px',
    markers: true
})

let button1 = document.querySelector(".btn-1");

button1.addEventListener("click", (e) => {
    smoother.scrollTo("#section-splitText", true, "top center")
});

let button2 = document.querySelector(".btn-2");

button2.addEventListener("click", (e) => {
    gsap.to(smoother, {
        scrollTop: smoother.offset("#section-splitText", "center center"),
        duration: 2, 
        ease: 'back.out'
    })
});

smoother.effects(".group-smoother-lag .box", {
    speed: 0.5, 
    lag: (i) => i * 1
});

let box1 = document.querySelector(".box-1");
let buttonFlip = document.querySelector(".btn-flip");

buttonFlip.addEventListener("click", (e) => {
    const state = Flip.getState(box1);
    Flip.fit(".box-1", ".box-2", {
        scale: true,
        duration: 2, 
        ease: "power1.inOut",
    });
});