$(document).ready( function() {
    var ua = window.navigator.userAgent.toLowerCase(),
    is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
    if(is_ie == true){
        $("#for-ie").addClass("ie");
    }
});​