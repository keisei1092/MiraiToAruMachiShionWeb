var page = 0;
var type = 'default';

function $currentType() {
  if (type == 'default') {
    return $info;
  } else if (type == 'news') {
    return $news;
  } else if (type == 'thoughts') {
    return $thoughts;
  }
}

function changeType(type) {
  if (type == 'news') {
    type = type == 'news' ? 'default' : 'news';
  } else if (type == 'thoughts') {
    type = type == 'thoughts' ? 'default' : 'thoughts';
  }
  page = 0;
  repaint('down');
}

function nextInfo() {
  if (page == $currentType().length - 1) {
    return;
  }
  page++;
  repaint('down');
}

function previousInfo() {
  if (page == 0) {
    return;
  }
  page--;
  repaint('up');
}

function repaint(direction) {
  canScroll = false;

  var transitionBefore;
  var transisionAfter;

  if (direction == 'up') {
    transitionBefore = {
      'margin-top': '50px',
      'opacity': 0
    };
    transitionAfter = {
      'margin-top': '0',
      'opacity': 1
    };
  } else {
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
    'duration': 750,
    'easing': 'swing',
    'complete': function() {
      if (direction == 'up') {
        $('#main').css('margin-top', '-50px');
      }
      $('#main').html($currentType()[page]);
      $('#main').animate(transitionAfter, {
        'duration': 750,
        'easing': 'swing'
      });
      canScroll = true;
    }
  });
}

$(document).on('ready', function() {
  $('body').hide(0).delay(500).fadeIn(500, function() {
    $('#main').hide();
    $('#main').html($currentType()[page]);
    $('#main').hide(0).delay(500).fadeIn(1000);
  });
});
