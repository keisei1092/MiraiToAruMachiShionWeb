function stopBlink() {
  $('.blink').removeClass('blink');
}

function togglePlay($element) {
  stopBlink();

  var $player = $('#player')[0];

  var prefix = '/songs/';
  var suffix = '.mp3';
  var filename = $element.getAttribute('data-sound-source');

  var location = prefix + filename + suffix;

  $player.setAttribute('src', location);
  $player.play();

  $element.className += ' blink';
}

$(document).on('click', '.song', function(e) {
  togglePlay(this);
});
