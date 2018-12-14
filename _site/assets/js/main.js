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
});

$(".navbar ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});


//burger
$( "#menuFive" ).click(function() {
  $("#navbar-nav").slideToggle();
});
