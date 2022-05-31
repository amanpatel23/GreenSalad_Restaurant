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
