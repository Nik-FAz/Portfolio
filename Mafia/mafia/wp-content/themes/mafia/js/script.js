$(function(){
    $('a[href^="#"]').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
       return false;
    });
 });
$('.main__institution-btn').on('click', function() {
  			$('.main__institution-btn').toggleClass('btn-active');
  			$('.main__institution-text-full').toggleClass('text-active');
  			if($('.main__institution-text-full').hasClass('text-active')){
  				$('.main__institution-text-full').slideDown(0);
  			}
  			else{
  				$('.main__institution-text-full').slideUp(0);
  			}
  			return false;
});
$(document).ready( function() {
    var ua = window.navigator.userAgent.toLowerCase(),
    is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
    if(is_ie == true){
        $("#for-ie").addClass("ie");
    }
});​
$(document).ready( function() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var name_input = document.getElementById('user-date');
    if(Math.floor(month/10) == 0){
    	month = "0" + month;
    }
    if(Math.floor(day/10) == 0){
    	day = "0" + day;
    }
    name_input.value = year + "-" + month + "-" + day;
    name_input.min = year + "-" + month + "-" + day;
});​
var btn = $('#btn-scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});
function initMap(){
			var element = document.getElementsByClassName('map__content');
			var options = {
				zoom: 18,
				center:{lat: 46.476884, lng: 30.741742},
				streetViewControl: false,
				panControl: false,
				zoomControl: false,
    			mapTypeControl: false,
    			fullscreenControl: false,
    			scrollwheel: false
			}

			var mafiaMap = new google.maps.Map(element[0], options);

			var marker = new google.maps.Marker({
				position: {lat: 46.476884, lng: 30.741742},
				map: mafiaMap,
				icon: {
					url: "../img/marker.png",
					scaledSize: new google.maps.Size(61, 80)
				}
			})
		}
$('.hamburg').on('click', function() {
  			$('.fixed-mini-menu').slideDown();
});
$('.close').on('click', function() {
  			$('.fixed-mini-menu').slideUp();
});
$('.fixed-mini-menu__link').on('click', function() {
  			$('.fixed-mini-menu').slideUp();
});
$(document).ready(function(){
			  $('.slider').slick({
			  	dots: true,
			  	prevArrow:'<button class="prev-arrow"></button>',
			  	nextArrow:'<button class="next-arrow"></button>',
			  	adaptiveHeight: true,
			  	customPaging : function(slider, i) {
        return '<img src="../img/slick/dote-off.png" /><img src="../img/slick/dote-on.png" />';
    },
			  });
			});
function initializeTimer() {
	var endDate = new Date(date_timer);
 
	var currentDate = new Date();
	var seconds = (endDate-currentDate) / 1000;
	if (seconds > 0) {
		var minutes = seconds/60; 
		var hours = minutes/60;
		var days = hours / 24;
		minutes = (hours - Math.floor(hours)) * 60; 
		days = Math.floor(days);
		hours =  Math.floor(hours)- days * 24; 
 
		seconds = Math.floor((minutes - Math.floor(minutes)) * 60); 
		minutes = Math.floor(minutes); 
 
		setTimePage(days, hours,minutes,seconds); 
 
		function secOut() {
		  if (seconds == 0) { 
			  if (minutes == 0) { 
				  if (hours == 0) { 
				  	   if(days == 0){
				  			showMessage(timerId); 
				  	    }
				  		else{
				  			days--; 
				  			hours = 24; 
						    minutes = 59; 
						    seconds = 59; 
				  		}
				  }
				  else {
					  hours--; 
					  minutes = 59; 
					  seconds = 59; 
				  }
			  }
			  else {
				  minutes--; 
				  seconds = 59; 
			  }
		  }
		  else {
			  seconds--; 
		  }
		  setTimePage(days, hours,minutes,seconds); 
		}
		timerId = setInterval(secOut, 1000) 
	}
}
window.onload = function()
{
     initializeTimer();
}
function setTimePage(d,h,m,s) {

	var days_block = document.getElementById("days-block");
	var days_dots = document.getElementById("days-dots");
	var main__discount_timer = document.getElementsByClassName("main__discount-timer");
	var main__discount_border_top_right = document.getElementsByClassName("main__discount-border-top-right");

	if(((d%10) == 0) && ((d/10) == 0)){
		days_block.style.display = "none";
		days_dots.style.display = "none";
		if($(window).width() <= 800){
			main__discount_timer[0].style.width = "80%";
		}
		else{
			main__discount_timer[0].style.width = "490px";
		}
	}
	else{
		days_block.style.display = "block";
		days_dots.style.display = "block";
		if($(window).width() <= 800){
			main__discount_timer[0].style.width = "100%";
		}
		else{
			main__discount_timer[0].style.width = "636px";
		}
		
	}
	var days1 = document.getElementById("days1");
	var days2 = document.getElementById("days2");
	var hours1 = document.getElementById("hours1");
	var hours2 = document.getElementById("hours2");
	var minutes1 = document.getElementById("minutes1");
	var minutes2 = document.getElementById("minutes2");
	var seconds1 = document.getElementById("seconds1");
	var seconds2 = document.getElementById("seconds2");
 
	days1.innerHTML = Math.floor(d/10);
	days2.innerHTML = Math.floor(d%10);
	hours1.innerHTML = Math.floor(h/10);
	hours2.innerHTML = Math.floor(h%10);
	minutes1.innerHTML = Math.floor(m/10);
	minutes2.innerHTML = Math.floor(m%10);
	seconds1.innerHTML = Math.floor(s/10);
	seconds2.innerHTML = Math.floor(s%10);
	
}