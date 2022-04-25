  gsap.registerPlugin(ScrollTrigger);

pink = document.getElementById("pink");

gsap.to(pink, {
  morphSVG: "#green", 
   duration: 1,
  x:1,

scrollTrigger: {
trigger: "#v-spacer-1",
start: "top top",
  // markers:true,
 scrub:true,
  // for the scroll  on time 
 // goes digonal 
}
}, "+=1")

gsap.fromTo(pink, {
  morphSVG: "#green"
}, {
    morphSVG: "#yellow", 
    duration: 1,
  x:0,
  
    immediateRender: false,
    scrollTrigger:{
      trigger:"#v-spacer-2",
      // markers:true,
      scrub:true,
      start:"top top",
    
    }
  }, "+=1")
