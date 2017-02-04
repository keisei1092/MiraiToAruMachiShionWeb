var $div = $('<div></div>');
var $p = $('<p></p>');
var $li = $('<li></li>');
var $br = $('<br/>');

var $cdTitle = $div;
$cdTitle.append($p.text('ミライトアルマチ詩恩'));
$cdTitle.append($p.text('keisei feat. 初音ミク'));

var $tracks = $div;
$tracks.append($li.text('ゆめアップロード'));
$tracks.append($li.text('birthday'));
$tracks.append($li.text('saku*life (shion mix)'));
$tracks.append($li.text('#cityelectronic - OUTLINE'));
$tracks.append($li.text('アリスインフューチャーシティ'));
$tracks.append($li.text('superexpress'));
$tracks.append($li.text('#cityelectronic - inaka'));
$tracks.append($li.text('highway_lamp'));
$tracks.append($li.text('findscape'));
$tracks.append($li.text('君にあえたこと'));

var $events = $div;
$events.append($p.text('M3-2017春'));
$events.append($p.text('THE VOC@LOiD 超 M@STER 37'));

var $thanks = $div;
$thanks.append($p.text('MikuMikuDance by Higuchi M'));
$thanks.append($p.text('AutoLuminous4 by Soboro'));
$thanks.append($p.text('Hatsune Miku 1052 C-Re Model by Hakutory'));

var $info = [$cdTitle, $tracks, $events, $thanks];
