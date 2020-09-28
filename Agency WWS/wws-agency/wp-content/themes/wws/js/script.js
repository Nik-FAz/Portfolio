window.bar = Scrollbar.init(document.querySelector('#scroll'), {
		alwaysShowTracks: true
	});
$(function(){
	var body = $('body');


	var Scrollbar = window.Scrollbar;
	Scrollbar.initAll();
	var scrlbar_pop_form = Scrollbar.init(document.querySelector('#scroll-pop-form'));



		
	if ($(".run-stroke").length){
		$(".run-stroke").ticker({
			item:'div',
			pauseOnHover:false,
			speed: 60
		});
	}
	if ($(".slick-slider").length){
		$('.slick-slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  pauseOnHover: false,
		  autoplaySpeed: 8000,
		  variableWidth: true,
		  adaptiveHeight: true,
		  prevArrow: $('.main-slider__arrow.prev'),
		  nextArrow: $('.main-slider__arrow.next')
		});
	}
	

	var slider_timeout;
	function slider_inactive() {
		if(slider_timeout) clearTimeout(slider_timeout);
		$('.slick-slider').slick("slickPause");
		slider_timeout = setTimeout(function(){$('.slick-slider').slick("slickPlay")}, 15000);
	}

	$('.slick-slider').on('swipe', function(){
  		slider_inactive();
	});
	$('.main-slider__arrow').on('click', function(){
  		slider_inactive();
	});

	$(".cookie__ok").on("click", function(){
		$(".cookie").removeClass("animate__infinite").addClass("animate__hinge");
	});

	$(".open-show-pop").hover(function(){
		$(this).closest(".show-js").find(".open-show-pop").addClass("show-hov");
	}, function(){
		$(this).closest(".show-js").find(".open-show-pop").removeClass("show-hov");
	});

	$(function(){
		var fixhead = $('.header');
		var lastScrollTop = 0;
		bar.addListener(function() {
			bar_pos = $(this).scrollTop();
			if($(this).scrollTop() > 10){
				fixhead.addClass("header-shadow");
			}else {
			    fixhead.removeClass("header-shadow");
			}
			if($(this).scrollTop() > 150){
				var st = $(this).scrollTop();
					if (st > lastScrollTop){
						fixhead.addClass("is-hidden");
					} else {
						fixhead.removeClass("is-hidden");
					}
				lastScrollTop = st;
			}
		});
		
	});

	var mas_menu = $(".menu-opened .menu-item");
	
	$(function(){
		$(".top-menu").on('click', function(){
			body.addClass("menu-opened overflow-hid");
			$(".menu-open").removeClass("animate__fadeOutUpBig").addClass("animate__fadeInDownBig").css('display','block');
			$(".menu-open .menu-item").each(function(index){
				var elem = $(this);
				setTimeout(function(){
					elem.removeClass("animate__fadeOutUp").addClass("animate__fadeInDown").css('display', 'block');
				}, (400 + (index*100)));
			});
			$(".header").css({'transition':'opacity 0s','opacity':'0'});
			setTimeout(function(){$(".header").css({'transition':'opacity 0.5s','opacity':'1'})}, 400);

		});
		$(".top-menu__close").on('click', function(){
			$(".menu-open .menu-item").each(function(index){
				var elem = $(this);
				setTimeout(function(){
					elem.removeClass("animate__fadeInDown").addClass("animate__fadeOutUp").css('display', 'block');
				}, (index*100));
			});
			setTimeout(function(){
				body.removeClass("menu-opened overflow-hid");
				$(".menu-open").removeClass("animate__fadeInDownBig").addClass("animate__fadeOutUpBig");
				$(".header").css({'transition':'opacity 0s','opacity':'0'});
				setTimeout(function(){$(".header").css({'transition':'.3s','opacity':'1'})}, 600);
			}, 900);
		});
	});

	$(".open-pop").on('click', function(){
		body.addClass("poppup-open overflow-hid");
		$(".pop-form").addClass("opacity_on");
		setTimeout(function(){$(".pop-form__container").css("display", "flex").removeClass("animate__fadeOutUpBig").addClass("animate__fadeInDownBig")}, 600);
	});
	$(".js-form-close").on('click', function(){
		$(".pop-form__container").removeClass("animate__fadeInDownBig").addClass("animate__fadeOutUpBig");
		setTimeout(function(){
			$(".pop-form").removeClass("opacity_on");
			body.removeClass("overflow-hid");
			setTimeout(function(){body.removeClass("poppup-open");}, 500);
		}, 400);
	});

	$(".open-show-pop").on('click', function(){
		body.addClass("show-open overflow-hid");
		$(".header").css({'transition':'opacity 0s','opacity':'0'});
		setTimeout(function(){$(".header").css({'transition':'opacity 0.5s','opacity':'1'})}, 400);
		if ($(window).width() <= '768'){
			$(".show-pop__left").removeClass("animate__fadeOutUp").addClass("animate__fadeInDown");
			$(".show-pop__close").removeClass("animate__fadeOutUp").addClass("animate__fadeInDown");
		} else{
			$(".show-pop__left").removeClass("animate__fadeOutLeft").addClass("animate__fadeInLeft");
			$(".show-pop__close").removeClass("animate__fadeOutDownBig").addClass("animate__fadeInUpBig");
		}		
		$(".show-pop__right").removeClass("animate__fadeOutDownBig").addClass("animate__fadeInUpBig");
	});

	$(".show-pop__close").on('click', function(){
		body.removeClass("overflow-hid");
		if ($(window).width() <= '768'){
			$(".show-pop__left").removeClass("animate__fadeInDown").addClass("animate__fadeOutUp");
			$(".show-pop__close").removeClass("animate__fadeInDown").addClass("animate__fadeOutUp");
		} else{
			$(".show-pop__left").removeClass("animate__fadeInLeft").addClass("animate__fadeOutLeft");;
			$(".show-pop__close").removeClass("animate__fadeInUpBig").addClass("animate__fadeOutDownBig");
		}
		$(".show-pop__right").removeClass("animate__fadeInUpBig").addClass("animate__fadeOutDownBig");
		$(".header").css({'transition':'opacity 0s','opacity':'0'});
		setTimeout(function(){
			body.removeClass("show-open");
			$(".header").css({'transition':'.3s','opacity':'1'})
		}, 500);
	});

	if ($(".main-svg").length){
		var scene = $('.main-svg').get(0);
		var parallaxInstance = new Parallax(scene);
		if($(".main-svg").length > 1){
			var scene2 = $('.main-svg').get(1);
			var parallaxInstance2 = new Parallax(scene2);
		}
	}

});