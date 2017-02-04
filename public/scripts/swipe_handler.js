// http://qiita.com/Wataru/items/a9548015e00683e142e4

$(function() {
  $('#wrapper').on('touchstart', onTouchStart); //指が触れたか検知
  $('#wrapper').on('touchmove', onTouchMove); //指が動いたか検知
  $('#wrapper').on('touchend', onTouchEnd); //指が離れたか検知
  var direction, position;

  //スワイプ開始時の横方向の座標を格納
  function onTouchStart(event) {
    position = getPosition(event);
    direction = ''; //一度リセットする
  }

  //スワイプの方向（left／right）を取得
  function onTouchMove(event) {
    if (position - getPosition(event) > 70) { // 70px以上移動しなければスワイプと判断しない
      direction = 'down';
    } else if (position - getPosition(event) < -70){  // 70px以上移動しなければスワイプと判断しない
      direction = 'up';
    }
  }

  function onTouchEnd(event) {
    if (direction == 'up'){
      previousInfo();
    } else if (direction == 'down'){
       nextInfo();
    }
  }

  //横方向の座標を取得
  function getPosition(event) {
    return event.originalEvent.touches[0].pageY;
  }
});
