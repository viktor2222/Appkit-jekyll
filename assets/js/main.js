$(".nav .nav-link").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#nav-menu a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav-menu a').removeClass("active");
            currLink.addClass("active")
        } else {
            currLink.removeClass("active")
        }
    })
};


$(document).ready(function() {
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function() {
            $(this).removeClass('active')
        })
        $(this).addClass('active');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll)
        })
    })
});



//
// $(window).on('load', function() {
//     setTimeout(function() {
//         if ($('.js-overlay-campaign').hasClass('disabled')) {
//             return !1
//         } else {
//             $(".js-overlay-campaign").fadeIn()
//         }
//     })
// });
// $('.js-close-campaign').click(function() {
//     $('.js-overlay-campaign').fadeOut()
// });
// $(document).mouseup(function(e) {
//     var popup = $('.js-popup-campaign');
//     if (e.target != popup[0] && popup.has(e.target).length === 0) {
//         $('.js-overlay-campaign').fadeOut()
//     }
// })
