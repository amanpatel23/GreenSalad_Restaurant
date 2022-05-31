$(document).ready(function(){
    $("#carousel3").owlCarousel();
  });

  var owl = $('#carousel3');
  owl.owlCarousel({
    animateOut: 'slideOutLeft',
      items:1,
      loop:true,
      //margin:10,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      //stagePadding:30,
      smartSpeed:600

  });