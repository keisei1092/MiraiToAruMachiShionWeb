var canScroll = true;

$(document).on('ready', function() {
  var indicator = new WheelIndicator({
    elem: document.querySelector('body'),
    callback: function(e){
      if (!canScroll) {
        return;
      }
      if (e.direction == "up") {
        previousInfo();
      } else if (e.direction == "down") {
        nextInfo();
      }
    }
  });

  indicator.getOption('preventMouse');
});

$(document).keydown(function(e) {
  switch(e.which) {
    case 38:
      previousInfo();
      break;
    case 40:
      nextInfo();
      break;
    default: return;
  }
  e.preventDefault();
});
