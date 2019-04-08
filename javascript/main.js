// Config
// Selectors
// store selectors for reference so we only call them once
var $body = document.querySelector('body');
var $header = document.getElementById('#header');
var $nav = document.getElementById('#nav');
var $footer = document.getElementById('#footer');
// Helpers
var
/**
 * @description Test if the body id is something
 * @param  		{string}
 * @return 		{bool}
 *
 */
page = function page(name) {
  if (!name) {
    return $body.getAttribute('id');
  }

  return $body.getAttribute('id') == name;
};

if (!page('blog')) {
  document.querySelector('.content > p').classList.add('intro');
}
// Twitch Live
// Adapted from Freecodecamp

/*
  Params:
  game            data.stream.channel.game
  stream title    data.stream.channel.status
  make a link     buttonLink.href = "https://www.twitch.tv/" + data;
  broadcaster     data.stream.channel.display_name
  avatar          data.stream.channel.logo
  preview img     data.stream.preview.large
  call            "https://wind-bow.glitch.me/twitch-api/streams/" + value;
*/
(function () {
  var data;
  var request = new XMLHttpRequest();
  request.open('GET', "https://wind-bow.glitch.me/twitch-api/streams/" + twitchName, true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // Stream is online
      // TODO: add option to display a button to trigger modal Twitch viewer on desktop
      var resp = request.responseText;
      console.log(resp);
      data = JSON.parse(resp);
      document.getElementById('liveAlertLink').setAttribute('href', data.stream.channel.url);
      document.getElementById('liveAlertText').innerHTML = 'Now playing ' + data.stream.channel.game + ' with ' + data.stream.viewers + ' viewers!';
      document.getElementById('liveAlert').classList.remove('hidden');
    } else {
      // Stream is offline or Stream Data not available
      // TODO: Add option here to hide a button cta
      console.log('Stream is not available.');
    }
  };

  request.onerror = function () {// There was a connection error of some sort
  };

  request.send();
})();