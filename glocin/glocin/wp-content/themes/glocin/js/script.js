$(function(){
  var btn = $('#btn-scroll-top');

  btn.on('click', function() {
    $('html, body').animate({scrollTop:0}, '600');
  });
});

$(function(){
	var fixhead = $('body');
	$(window).scroll(function(){
		if($(window).scrollTop() > 10){
			fixhead.addClass("dis-b");
		}else {
		    fixhead.removeClass("dis-b");
		}
		if ($(window).scrollTop() > 60) {
		    fixhead.addClass("fx");
		  } else {
		    fixhead.removeClass("fx");
		}
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
			center:{lat: 49.67713432729666, lng: 18.34139060234244},
			disableDefaultUI: true
		}

		var glocinMap = new google.maps.Map(element[0], options);

		var marker = new google.maps.Marker({
			position: {lat: 49.67713432729666, lng: 18.34139060234244},
			map: glocinMap,
			icon: {
				url: "../img/map-marker.png",
				scaledSize: new google.maps.Size(88, 94)
			}
		});
		marker.addListener('click', function() {
		    infowindow.open(glocinMap, marker);
		});
	}
}
$(function(){
  var hamb = $('.menu-toggle');

  hamb.on('click', function() {
    $("html, body").toggleClass("menu-opened");
    if($("body").hasClass("menu-opened")){
    	$(".mini-menu").fadeIn(300);
    }else{
    	$(".mini-menu").fadeOut(300);
    }
  });


});

$(function(){

	$('.btn1').click(function(e) {
	    $('.nap1').addClass("opened");
	    e.stopPropagation();
	  });

	$('body').click(function() {
	    $('.nap1').removeClass("opened");
	});
	$('.btn2').click(function() {
	    $('.nap1').removeClass("opened");
	});
	$('.btn3').click(function() {
	    $('.nap3').removeClass("opened");
	});

	$('.nap1').click(function(e){
	    e.stopPropagation();
	});



	$('.btn2').click(function(e) {
	    $('.nap2').addClass("opened");
	    e.stopPropagation();
	  });

	$('body').click(function() {
	    $('.nap2').removeClass("opened");
	});

	$('.btn1').click(function() {
	    $('.nap2').removeClass("opened");
	});
	$('.btn3').click(function() {
	    $('.nap3').removeClass("opened");
	});

	$('.nap2').click(function(e){
	    e.stopPropagation();
	});



	$('.btn3').click(function(e) {
	    $('.nap3').addClass("opened");
	    e.stopPropagation();
	  });

	$('body').click(function() {
	    $('.nap3').removeClass("opened");
	});
	$('.btn1').click(function() {
	    $('.nap3').removeClass("opened");
	});
	$('.btn2').click(function() {
	    $('.nap3').removeClass("opened");
	});

	$('.nap3').click(function(e){
	    e.stopPropagation();
	});
	
});
$(function(){
  if ( $('#partic-header').length ){
    particlesJS.load('partic-header', '../js/libs/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

  if ( $('#partic-trochu').length ){
  	particlesJS.load('partic-trochu', '../js/libs/particles.json', function() {
  	  console.log('callback - particles.js config loaded');
  	});
  }

  if ( $('#partic-footer').length ){
  	particlesJS.load('partic-footer', '../js/libs/particles.json', function() {
  	  console.log('callback - particles.js config loaded');
  	});
  }
}); 
$(function(){
    $('.js-select').select2();
});