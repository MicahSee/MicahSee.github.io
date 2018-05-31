$(function() {
  $('.expansion-tab').hide();
  $('.expansion-link').click(function() {
    var target = $(this).attr('exp-targ');
    $(target).slideToggle()
  })
})
