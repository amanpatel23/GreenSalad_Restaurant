
// //New era begins here.
// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li');
// let carouselSlide = document.querySelector('.slide');
// let images = document.querySelectorAll('.slide img');
// let content = document.querySelector('.content');

// li.forEach(el => {
//     el.addEventListener('click', function(){
//         document.querySelector('.active').classList.remove('active');
//         el.classList.add('active');
//     })
// })
// const size = images[0].clientWidth;
// //console.log(size);
// var counter = 0;
// aCarousel();
// function aCarousel(){
//     if(images[counter].id === 'firstClone'){
//         counter = 0;
//         carouselSlide.classList.add('zoom');
//         carouselSlide.style.transition = 'none';
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        
//     }else{
//     counter++;
//     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     carouselSlide.style.transition = 'transform 1.2s ease-in-out';
//     carouselSlide.classList.remove('zoom');
    
//     //console.log(counter);
//     }
//     setTimeout(aCarousel, 2000);
// }

// let testimonial1 = document.querySelector('.testimonial1');
// let rectangle2 = document.querySelector('.rectangle2');
// let tContent = document.querySelectorAll('.testimonial-content');
// let prevBtn = document.querySelector('#prevBtn');
// let nextBtn = document.querySelector('#nextBtn');
// let counterT = 0;


// prevBtn.addEventListener('click', ()=>{
    
//     //prevBtn.style.opacity = 'inherit'
//     nextBtn.style.opacity = 'inherit'
    
    
//     counterT--;
    
//     if(counterT < 0){
//         prevBtn.style.opacity = '0.3';
//         counterT++;
        

//     }
    
//     document.querySelector('.activeT').classList.remove('activeT');
//     tContent[counterT].classList.add('activeT');
//     //console.log("Hey");

    
    
// })

// nextBtn.addEventListener('click', ()=>{
//     prevBtn.style.opacity = 'inherit'
//     counterT++;
//     //console.log(counterT);
//     if(counterT >= tContent.length){
//         nextBtn.style.opacity = '0.3';
//         counterT--;
        
//     }
    
    
//     document.querySelector('.activeT').classList.remove('activeT');
//     tContent[counterT].classList.add('activeT');
    
// })
$(document).ready(function(){
    $("#carousel1").owlCarousel();
  });

  var owl = $('#carousel1');
  owl.owlCarousel({
    animateOut: 'slideOutLeft',
    //animateIn: 'swing',
      items:1,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      //stagePadding:30,
      smartSpeed:600

  });

  $(document).ready(function(){
    $("#carousel2").owlCarousel();
  });

  $('#carousel2').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    center: true,
    items:1,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:1
        }
    }

});


//   $('.play').on('click',function(){
//       owl.trigger('play.owl.autoplay',[1000])
//   })
//   $('.stop').on('click',function(){
//       owl.trigger('stop.owl.autoplay')
//   })

