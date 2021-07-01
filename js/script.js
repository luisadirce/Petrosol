window.onload = function(){
  let owl = $(".owl-carousel").owlCarousel({
      autoplay: true,
      autoplayTimeout: 5000,
      dots: true,
      dotsData:true,
      loop: true,
      nav: true,
      navText: ["","<img src='/media/img/right-arrow.png' class='carouselNavImg'>"],
      items: 1,
      rewind: true,
      rewindSpeed: 1000,
  });

  $('.owl-dot').click(function() {
      owl.trigger('to.owl.carousel', [$(this).index(), 1000]);
  })
  
  $('.menuToggle').click(function(){
     $(".nav").toggleClass("mobileNav");
     $(this).toggleClass("isActive");
  });
};