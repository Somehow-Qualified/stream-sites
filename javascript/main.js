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
// add a class of 'intro' to the first paragraph
// do this on every page apart from the blog page
if (!page('blog')) {
  document.querySelector('.content > p').classList.add('intro');
}

// Twitch Live
// Adapt from Freecodecamp to display

// game > data.stream.channel.game
// stream title > data.stream.channel.status
// make a link > buttonLink.href = "https://www.twitch.tv/" + data;
// broadcaster > data.stream.channel.display_name
// avatar > data.stream.channel.logo
// preview img > data.stream.preview.large
// "https://wind-bow.glitch.me/twitch-api/streams/" + value + "?callback=?";

(function() {
  var data;
  var request = new XMLHttpRequest();
  request.open('GET', "https://wind-bow.glitch.me/twitch-api/streams/" + twitchName, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Stream is online
      var resp = request.responseText;
      console.log(resp);
      data = JSON.parse(resp);
      document.getElementById('liveAlertLink').setAttribute('href', data.stream.channel.url);
      document.getElementById('liveAlertText').innerHTML = 'Now playing ' + data.stream.channel.game + ' with ' + data.stream.viewers + ' viewers!';
      document.getElementById('liveAlert').classList.remove('hidden');
    } else {
      // Stream is offline or Stream Data not available
      console.log('Streamer is not available.')
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
})();
