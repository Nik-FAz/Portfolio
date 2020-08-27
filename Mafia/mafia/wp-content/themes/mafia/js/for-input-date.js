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