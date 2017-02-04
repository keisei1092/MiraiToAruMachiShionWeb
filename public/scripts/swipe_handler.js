$('#wrapper').swipe({
  swipeUp:function(event, direction, distance, duration) {
    previousInfo();
  },
  swipeDown:function(event, direction, distance, duration) {
    nextInfo();
  }
});
