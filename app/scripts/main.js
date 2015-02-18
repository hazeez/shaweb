
// hide all the list items before page load
$(".desktop-list").hide()
$(".laptop-list").hide()
$(".mobile-list").hide()
$(".tablet-list").hide()
$(".servers-list").hide()
$(".cctv-list").hide()

// when the page gets ready
$(document).ready(function(){
// on click show the list div items
    $(".category-desktop").click(function(){
        $(".desktop-list").toggle(300);
    });

    $(".category-laptop").click(function(){
        $(".laptop-list").toggle(300);
    });

    $(".category-mobiles").click(function(){
        $(".mobile-list").toggle(300);
    });

    $(".category-tablet").click(function(){
        $(".tablet-list").toggle(300);
    });

    $(".category-servers").click(function(){
        $(".servers-list").toggle(300);
    });

    $(".category-cctv").click(function(){
        $(".cctv-list").toggle(300);
    });
});
