var to_top_btn = $('#to_top_button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    to_top_btn.addClass('show');
  } else {
    to_top_btn.removeClass('show');
  }
});

to_top_btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});