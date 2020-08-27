$(function(){
  var btn = $('#btn-scroll-top');

  btn.on('click', function() {
    $('html, body').animate({scrollTop:0}, '600');
  });
});

$(function(){
	$(".faq__question").on('click', function(e){
		$(this).toggleClass("active");
		$(this).next(".faq__answer").stop( true, true ).slideToggle();
		return false;
	});
});
$(function(){
	initMap();
});
function initMap(){
			var element = document.getElementsByClassName('map');
			if ($(element).length){
				var options = {
					zoom: 17,
					center:{lat: 46.472769, lng: 30.719417},
					disableDefaultUI: true
				}

				var musMap = new google.maps.Map(element[0], options);

				var marker = new google.maps.Marker({
					position: {lat: 46.472769, lng: 30.719447},
					map: musMap
				});
			}
		}
$(function(){
  var hamb = $('.menu-toggle');

  hamb.on('click', function() {
    $("html, body").toggleClass("menu-opened");
    if($("body").hasClass("menu-opened")){
    	$(".mini").stop( true, true ).fadeIn(300);
    }else{
    	$(".mini").stop( true, true ).fadeOut(300);
    }
  });


});

$(function(){
	$(".footer__menu-item>a").on("click", function(){
		if ($(window).width() <= '660'){
				$(this).next('ul').stop( true, true ).slideToggle();
				$(this).toggleClass("open-list");
				return false;
		}
	});
	$(".mini__menu-item>a").on("click", function(){
			$(this).next('ul').stop( true, true ).slideToggle();
			$(this).toggleClass("open-list");
			return false;
	});
});
$(function(){
	$('.achievements__right-slider').on('init', function(event, slick, direction){
		setTimeout(function() {
			$('.info-scroll').each(function(){
			  new SimpleBar($(this).get(0), {
			    autoHide: false,
				scrollbarMinSize: 10
			  });
			});
		}, 10);
	});


	$('.mini__menu-scroll').each(function(){
	  new SimpleBar($(this).get(0), {
	    autoHide: false,
		scrollbarMinSize: 10
	  });
	});
});
$(function(){
	$(".search").on("click", function(e){
		$(".search-b").slideDown(400);
		$(".search-b").addClass("open");
		e.stopPropagation();
	});
	$('body').click(function() {
		if($(".search-b").hasClass("open")){
			$(".search-b").slideUp();
	    	$('.search-b').removeClass("open");
		}
	});
	
	$('.search-b').on("click", function(e){
	    e.stopPropagation();
	});
});
$(function(){
      $('.pre-main__slider').slick({
        slidesToShow: 1,
    		slidesToScroll: 1,
    		appendArrows:'.pre-main .slider-arrows',
    		prevArrow:'<span class="slider-arrows__left"></span>',
    		nextArrow:'<span class="slider-arrows__right"></span>'
      });

      $(".pre-main__slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
      		if(currentSlide >= 9){
            $(".pre-main__numb-slide").text(currentSlide + 1);
          }
      		else{
            $(".pre-main__numb-slide").text("0" + (currentSlide + 1));
          }
      });

      $('.about-classes__slider').slick({
        slidesToShow: 4,
  		  slidesToScroll: 1,
  		  appendArrows:'.about-classes .slider-arrows',
  		  prevArrow:'<span class="slider-arrows__left"></span>',
  		  nextArrow:'<span class="slider-arrows__right"></span>',
        responsive: [
          {
            breakpoint: 1870,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              variableWidth: true
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $(".about-classes__slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
          if(currentSlide >= 9){
            $(".about-classes__numb-slide").text(currentSlide + 1);
          }
          else{
            $(".about-classes__numb-slide").text("0" + (currentSlide + 1));
          }
      });

      $('.achievements__right-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
      appendArrows:'.achievements .slider-arrows',
      prevArrow:'<span class="slider-arrows__left"></span>',
      nextArrow:'<span class="slider-arrows__right"></span>'
      });

      $('.achievements__left-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        draggable: false,
        speed: 500,
        fade: true,
        });

      $(".achievements__right-slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
          if(currentSlide >= 9){
            $(".achievements__numb-slide").text(currentSlide + 1);
          }
          else{
            $(".achievements__numb-slide").text("0" + (currentSlide + 1));
          }
          $('.achievements__left-slider').slick('slickGoTo', (currentSlide));
      });

    });