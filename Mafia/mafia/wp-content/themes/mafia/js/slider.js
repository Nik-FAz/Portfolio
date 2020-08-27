$(document).ready(function(){
			  $('.slider').slick({
			  	dots: true,
			  	prevArrow:'<button class="prev-arrow"></button>',
			  	nextArrow:'<button class="next-arrow"></button>',
			  	adaptiveHeight: true,
			  	customPaging : function(slider, i) {
        return '<img src="img/slick/dote-off.png" /><img src="img/slick/dote-on.png" />';
    },
			  });
			});