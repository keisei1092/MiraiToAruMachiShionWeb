var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
$(document).on(mousewheelevent, function(e) {
    e.preventDefault();
    var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
    if (delta < 0) {
        handleScrollDown();
    } else {
        handleScrollUp();
    }
});
