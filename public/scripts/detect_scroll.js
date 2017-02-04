var canScroll = true;

$(document).on('ready', function() {
  var indicator = new WheelIndicator({
    elem: document.querySelector('#main'),
    callback: function(e){
      if (!canScroll) {
        return;
      }
      if (e.direction == "up") {
        previousInfo(e.direction);
      } else if (e.direction == "down") {
        nextInfo(e.direction);
      }
    }
  });

  indicator.getOption('preventMouse');
});
