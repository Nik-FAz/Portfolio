$(function(){
    $('a[href^="#"]').click(function(){
       var target = $(this).attr('href');
       if($(target).length){
       		$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
       }
       else{
       		window.location.href = "/" + target;
       }
       return false;
    });
 });
$(function(){
	var fixhead = $('body');
	$(window).scroll(function(){
		if ($(window).scrollTop() > 300) {
		    fixhead.addClass("fx");
		  } else {
		    fixhead.removeClass("fx");
		}
	});
	
});
var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function loadPlayer() {
    player = new YT.Player('video', {
      height: '100%',
      width: '100%',
      videoId: 'X3MsjVHHR68',
      playerVars: { 'modestbranding': 1, 'rel': 0, 'fs' : 0, 'playlist': '', 'playsinline': 0, 'showinfo': 0}
    });

    $('body').on("click", "#yt", function(){
      $('#js-yt-btn').css('display', 'none');
      $('#js-yt-prev').css('display', 'none');
      player.playVideo(); 
      return false;
    })
  }
  function onYouTubePlayerAPIReady() {
    try {
      loadPlayer();
    } catch (e) {
      setTimeout(function() {
        loadPlayer();
      }, 500);
    }
  }