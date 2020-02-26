const axios = require('axios');
const twitch = require('./twitch.json');

module.exports = function(){

	let url = `https://api.twitch.tv/helix/streams?user_login=` + twitch.handle;

	return axios({
		method: 'get',
		url: url,
		headers: {
			'Client-ID': twitch.client
		}
	}).then(function(response) {
		return response.data.data[0]
		console.log(response.data.data[0]);
	});

}
