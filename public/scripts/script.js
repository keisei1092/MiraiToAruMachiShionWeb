function no_scroll(){
  var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  $(document).on(scroll_event,function(e){e.preventDefault();});
  $(document).on('touchmove.noScroll', function(e) {e.preventDefault();});
}

function return_scroll(){
  var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  $(document).off(scroll_event);
  $(document).off('.noScroll');
}
