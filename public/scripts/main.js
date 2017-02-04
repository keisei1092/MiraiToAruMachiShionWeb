var page = 0;

function nextInfo() {
  if (page == $info.length - 1) {
    return;
  }
  page++;
  repaint();
}

function previousInfo() {
  if (page == 0) {
    return;
  }
  page--;
  repaint();
}

function repaint() {
  console.log('repaint');
  console.log(page);
  console.log($('#main')[0], $info[page]);
  $('#main')[0] = $info[page];
}

$(document).on('ready', function() {
  console.log('ready');
  $('#main').html($info[page]);
});
