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