var page = 0;

function nextInfo(direction) {
  if (page == $info.length - 1) {
    return;
  }
  page++;
  repaint(direction);
}

function previousInfo(direction) {
  if (page == 0) {
    return;
  }
  page--;
  repaint(direction);
}

function repaint(direction) {
  canScroll = false;

  var transitionBefore;
  var transisionAfter;

  if (direction == "up") {
    console.log('up');
    transitionBefore = {
      'margin-top': '50px',
      'opacity': 0
    };
    transitionAfter = {
      'margin-top': '0',
      'opacity': 1
    };
  } else {
    console.log('down');
    transitionBefore = {
      'padding-bottom': '100px',
      'opacity': 0
    };
    transitionAfter = {
      'padding-bottom': '0',
      'opacity': 1
    };
  }

  $('#main').animate(transitionBefore, {
    'duration': 600,
    'complete': function() {
      if (direction == "up") {
        $('#main').css('margin-top', '-50px');
      } else {
        $('#main').css('padding-bottom', '100px');
      }
      $('#main').html($info[page]);
      $('#main').animate(transitionAfter);
      canScroll = true;
    }
  });
}

$(document).on('ready', function() {
  console.log('ready');
  $('#main').html($info[page]);
});
