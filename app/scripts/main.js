
// $(".contact-bar").hide()
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
    // $(".contact-menu").click(function(){
    //     $(".contact-bar").toggle();
    // });

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

    // for page scorlling animation
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });

});
