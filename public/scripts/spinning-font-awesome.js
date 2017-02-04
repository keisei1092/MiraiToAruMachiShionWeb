$(document).on('ready', function() {
  $('i.fa.spin').mouseenter(function() {
    $(this).addClass('fa-spin');
  }).mouseleave(function() {
    $(this).removeClass('fa-spin');
  });
});
