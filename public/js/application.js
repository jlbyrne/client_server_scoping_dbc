$(document).ready(function() {
  $('.awesomeness_teller').on('click', function(e) {
  	$('h2#awesomeness_holder').html($(this).attr('data-heading'));
  });

  $('.meal_teller').on('click', function(e) {
  	$('h2#meal_holder').css('display', 'inherit')
  });

  $('.skill_teller').on('click', function(e) {
  	$('h2#skill_holder').html(window.location.pathname.split('/').pop());
  });

  // What other events do you need to bind to make the other pages work?
});
