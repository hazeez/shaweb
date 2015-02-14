
// hide all the list items before page load
$(".desktop-list").hide()
$(".laptop-list").hide()
$(".mobile-list").hide()
$(".tablet-list").hide()
$(".servers-list").hide()
$(".cctv-list").hide()

// when the page gets ready
$(document).ready(function(){
// on hover show the list div items
    $(".category-desktop").hover(function(){
        $(".desktop-list").toggle(300);
    });

    $(".category-laptop").hover(function(){
        $(".laptop-list").toggle(300);
    });

    $(".category-mobiles").hover(function(){
        $(".mobile-list").toggle(300);
    });

    $(".category-tablet").hover(function(){
        $(".tablet-list").toggle(300);
    });

    $(".category-servers").hover(function(){
        $(".servers-list").toggle(300);
    });

    $(".category-cctv").hover(function(){
        $(".cctv-list").toggle(300);
    });
});
