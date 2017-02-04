$(document).on('ready', function() {
  $('i.fa').mouseenter(function() {
    $(this).addClass('fa-spin');
  }).mouseleave(function() {
    $(this).removeClass('fa-spin');
  });
});
