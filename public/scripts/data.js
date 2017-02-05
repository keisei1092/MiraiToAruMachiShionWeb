var $cdTitle = $('<div></div>');

$cdTitle.append($('<p></p>').text('ミライトアルマチ詩恩'));
$cdTitle.append($('<p></p>').text('keisei feat. 初音ミク'));

var $tracks = $('<div></div>');

$tracks.append($('<li class="song pointer blink" data-sound-source="yumeupload"></li>').text('ゆめアップロード'));
$tracks.append($('<li class="song pointer" data-sound-source="birthday"></li>').text('birthday'));
$tracks.append($('<li class="song pointer" data-sound-source="sakulife"></li>').text('saku*life (shion mix)'));
$tracks.append($('<li class="song pointer" data-sound-source="outline"></li>').text('#cityelectronic - OUTLINE'));
$tracks.append($('<li class="song pointer" data-sound-source="alice"></li>').text('アリスインフューチャーシティ'));
$tracks.append($('<li class="song pointer" data-sound-source="superexpress"></li>').text('superexpress'));
$tracks.append($('<li class="song pointer" data-sound-source="inaka"></li>').text('#cityelectronic - inaka'));
$tracks.append($('<li class="song pointer" data-sound-source="highwaylamp"></li>').text('highway_lamp'));
$tracks.append($('<li class="song pointer" data-sound-source="findscape"></li>').text('findscape'));
$tracks.append($('<li></li>').text('君にあえたこと'));

var $events = $('<div></div>');

$events.append($('<p></p>').text('M3-2017春'));
$events.append($('<p></p>').text('（第一展示場 O-20b）'));
$events.append($('<p></p>').text('THE VOC@LOiD 超 M@STER 37'));

var $thanks = $('<div></div>');

$thanks.append($('<p></p>').text('MikuMikuDance by Higuchi M'));
$thanks.append($('<p></p>').text('AutoLuminous4 by Soboro'));
$thanks.append($('<p></p>').text('Hatsune Miku 1052 C-Re Model by Hakutory'));

var $info = [$cdTitle, $tracks, $events, $thanks];
