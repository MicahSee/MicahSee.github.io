$(function() {
  $('.navbar-burger').click(function() {
    var menu = $('.navbar-menu');
    $(this).toggleClass('is-active');
    menu.toggleClass('is-active')
  })
})
