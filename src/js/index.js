$(document).ready(function () {
	$('.toggle__nav').click(function(e){
		e.preventDefault();

		$(this).toggleClass('menu--active');
		$('.menu').toggleClass('menu--active');


	});

   $('.wrapper--brand').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots:true
    });

  

	 
});
