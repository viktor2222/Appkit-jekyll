$(".nav .nav-link").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});
$(window).on('load', function() {
  setTimeout(function() {
      if ($('.js-overlay-campaign').hasClass('disabled')) {
          return !1
      } else {
          $(".js-overlay-campaign").fadeIn()
      }
  })
});
$('.js-close-campaign').click(function() {
    $('.js-overlay-campaign').fadeOut()
});
$(document).mouseup(function(e) {
    var popup = $('.js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign').fadeOut()
    }
})
