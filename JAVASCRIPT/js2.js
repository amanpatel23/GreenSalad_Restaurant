let hamburger = document.querySelector('.menu');
let hamburgerI = document.querySelector('.fa-bars');
let mobileNav = document.querySelector('.mobile-nav-bg');

var tl = gsap.timeline({paused: true, reversed: true});
tl.to('.fa-bars', {duration: 0.3, transform: 'scale(1.5)', ease: "power2"})
tl.to('.fa-bars', {duration: 0.3, transform: 'scale(1)', ease: "power2"})
tl.to('.mobile-nav-bg', {duration: 0.8, height: "100px", ease: "power2"})
tl.to('.mobile-nav ul li', {stagger: 0.3, display: "block", ease: "power3"}, "<")

hamburgerI.addEventListener('click', ()=>{
    if(tl.paused()){
        tl.paused(false);
        tl.reversed(!tl.reversed());
        
     }else{
      tl.reversed(!tl.reversed());
     }
})


let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

 li.forEach(el => {
     el.addEventListener('click', function(){
         document.querySelector('.active').classList.remove('active');
         el.classList.add('active');
     })
 })

 li.forEach(el => {
    el.addEventListener('click', function(){
        document.querySelector('.active1').classList.remove('active1');
        el.classList.add('active1');
    })
})