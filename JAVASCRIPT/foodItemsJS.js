let cta = document.querySelector('#btn1');

var tl = gsap.timeline({paused: true, reversed: true});


tl.to("#btn1", {duration: .3, transform: "scale(1.8)", ease: "power2"});
tl.to("#btn1", {duration: .3, transform: "scale(1)", ease: "power2"})
tl.to(".expand-bg1", {duration: .3, height: "auto", ease: "power1"});
tl.to(".item1", {display: "flex", stagger: .1, ease: "power2"});

cta.addEventListener('click', ()=>{
   
    console.log(123);
   if(tl.paused()){
      tl.paused(false);
      tl.reversed(!tl.reversed());
      
   }else{
    tl.reversed(!tl.reversed());
   }
   
})

let cta2 = document.querySelector('#btn2');

var tl_2 = gsap.timeline({paused: true, reversed: true});


tl_2.to("#btn2", {duration: .3, transform: "scale(1.8)", ease: "power2"});
tl_2.to("#btn2", {duration: .3, transform: "scale(1)", ease: "power2"})
tl_2.to(".expand-bg2", {duration: .3, height: "auto", ease: "power1"});
tl_2.to(".item2", {display: "flex", stagger: .1, ease: "power2"});

cta2.addEventListener('click', ()=>{
   
    
   if(tl_2.paused()){
      tl_2.paused(false);
      tl_2.reversed(!tl_2.reversed());
      
   }else{
    tl_2.reversed(!tl_2.reversed());
   }
   
})


let hamburger = document.querySelector('.menu');
let hamburgerI = document.querySelector('.fa-bars');
let mobileNav = document.querySelector('.mobile-nav-bg');

var tl2 = gsap.timeline({paused: true, reversed: true});
tl2.to('.fa-bars', {duration: 0.3, transform: 'scale(1.5)', ease: "power2"})
tl2.to('.fa-bars', {duration: 0.3, transform: 'scale(1)', ease: "power2"})
tl2.to('.mobile-nav-bg', {duration: 0.8, height: "100px", ease: "power2"})
tl2.to('.mobile-nav ul li', {stagger: 0.3, display: "block", ease: "power3"}, "<")


hamburgerI.addEventListener('click', ()=>{
    if(tl2.paused()){
        tl2.paused(false);
        tl2.reversed(!tl2.reversed());
        
     }else{
      tl2.reversed(!tl2.reversed());
     }
})

