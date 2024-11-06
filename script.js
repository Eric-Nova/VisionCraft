const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
function loadingAnimation(){
    gsap.from("#page1 h1",{
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger:0.2
    })
    gsap.from(".videoBox video",{
        opacity: 0,
        delay: 1,
        duration: 0.5,
        stagger:0.2
    })
}

gsap.from("#navbar h2, #navbar img",{
    opacity:0,
    y:-20,
    duration:.5,
    stagger:0.2
})


loadingAnimation()

let detail1=document.querySelector("#elem1 .details");
detail1.addEventListener("mouseenter",function(){
    gsap.to(".bgDets",{
        opacity:1,
        duration:.2
    })
})

// var details1=document.querySelector("#elem1 .details");
detail1.addEventListener("mouseleave",function(){
    gsap.to(".bgDets",{
        opacity:0,
        duration:.2
    })
})


let details2=document.querySelector("#elem2 .details");
details2.addEventListener("mouseenter",function(){
    gsap.to(".bgDets",{
        opacity:1,
        duration:.2
    })
})

// var details2=document.querySelector("#elem2 .details");
details2.addEventListener("mouseleave",function(){
    gsap.to(".bgDets",{
        opacity:0,
        duration:.2
    })
})

let det3=document.querySelector("#elem3 .details");
det3.addEventListener("mouseenter",function(){
    gsap.to(".bgDets",{
        opacity:1,
        duration:.2
    })
})

// var details3=document.querySelector("#elem3 .details");
det3.addEventListener("mouseleave",function(){
    gsap.to(".bgDets",{
        opacity:0,
        duration:.2
    })
})

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        console.log(dets)
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();
  
