$(document).ready(function () {
	$('.toggle__nav').click(function(e){
		e.preventDefault();

		$(this).toggleClass('menu--active');
		$('.menu').toggleClass('menu--active');


	});

   $('.wrapper__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots:true
    });

   $('.team').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    });

  

	 
});
