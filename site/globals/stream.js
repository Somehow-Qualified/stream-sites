const axios = require('axios');

module.exports = function(){

	let url = `https://api.twitch.tv/helix/streams?user_login=m2creates`;

	return axios({
		method: 'get',
		url: url,
		headers: {
			'Client-ID': 'qnr7smyysc5g98yx6y5lgejqknbs9m'
		}
	}).then(function(response) {
		return response.data.data[0]
	});

}
