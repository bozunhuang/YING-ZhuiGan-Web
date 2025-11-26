// import { gsap } from "gsap/dist/gsap";
    
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.to(".group-from-to .box", {
    rotation: 360,
    duration: 5
})

gsap.registerPlugin(ScrollTrigger);


gsap.to(".box-d", {
    scrollTrigger:".box-d",
    x: 400,
    rotation: 360, 
    duration: 2
})

gsap.to("#box-toggle-action", {
    scrollTrigger: {
        trigger: "#box-toggle-action",
        toggleActions: "restart pause resume none", 
        start: "top center",
        markers: true,
    },
    x: 400,
    rotation: 360, 
    duration: 2
})