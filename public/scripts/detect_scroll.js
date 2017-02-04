var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';

var isScrolling = false;

var timestampSave  = 0;
var timestampClock = 0;

function isMacTrackpadScrollRemaining(e) {
  timestampClock = e.timeStamp - timestampSave;
  timestampSave = e.timeStamp;
  console.log('isMacTrackpadScrollRemaining: ' + timestampClock < 50);
  return timestampClock < 50;
}

$(document).on(mousewheelevent, function(e) {
    e.preventDefault();

    if (isScrolling) {
      console.log('scrolling :[');
      return;
    }

    isScrolling = true;

    if (isMacTrackpadScrollRemaining(e)) {
      console.log('Mac trackpad is scrolling :[');
      return;
    }

    var orig = e.originalEvent;
    var delta = orig.deltaY ? -(orig.deltaY) : orig.wheelDelta ? orig.wheelDelta : -(orig.detail);

    if (delta < 0) {
        handleScrollDown(function(e) {
          console.log('handleScrollDown finished!');
          isScrolling = false;
        });
    } else {
        handleScrollUp(function(e) {
          console.log('handleScrollUp finished!');
          isScrolling = false;
        });
    }
});
