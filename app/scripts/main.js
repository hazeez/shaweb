$(".desktop-list").hide()
$(".laptop-list").hide()
$(document).ready(function(){
    $(".computer").hover(function(){
        $(".desktop-list").toggle(300);
    });
    $(".laptop").hover(function(){
        $(".laptop-list").toggle(300);
    });
});
