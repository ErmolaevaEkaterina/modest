$(document).ready(function () {
	$('.toggle__nav').click(function(e){
		e.preventDefault();

		$(this).toggleClass('menu--active');
		$('.menu').toggleClass('menu--active');


	});

  if ($(window).width() < 1125) {
    $('.work__block-inf').addClass('show');
  } else {
    $('.work__block-inf').removeClass('show');
  }

  $(".work__link").on('click', function(event){
    event.preventDefault();

    $(this).html("Show me more");
    $(".work").toggleClass("work--active");
    $(".wrapper--back").toggleClass('wrapper--back-active');
    if ($(".work").hasClass('work--active')) {
      $(this).html("Hide");
    }

  });


  $(".work__block-image").click(function(){    
    var img = $(this).find('img');    
    console.log(img);
    var src = img.attr('src'); 

    $("body").append("<div class='popup'>"+ "<div class='popup_bg'></div>"+ "<img src='"+ src +"' class='popup_img' />"+ "</div>");

    $(".popup").fadeIn(800); 

    $(".popup_bg").click(function(){       

      $(".popup").fadeOut(800);    

      setTimeout(function() {    

        $(".popup").remove(); 

      }, 800);

    });

  });

   $('.wrapper__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots:true
    });



  var slider = $('.team');
  var sld = function() {
    slider.slick({
                autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        infinite:true,
        responsive: [
    {
      breakpoint: 1125,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite:true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
    });

    if ($(window).width() > 1125) {
      slider.slick("unslick");
    }
  };

  sld();

  $(window).resize(sld);


  var work = $('.work');
  var sli = function() {
    work.slick({
                autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        infinite:true,
        responsive: [
    {
      breakpoint: 1125,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite:true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
    });

    if ($(window).width() > 1125) {
      work.slick("unslick");
    }
  };

  sli();

  $(window).resize(sli);




  

	 
});
