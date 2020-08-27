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