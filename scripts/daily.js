const sessions = require('../data/sessions.json');
const fs = require('fs');

function updateDaily(session) {
	sessions.push(session);

	fs.writeFile('./data/sessions.json', JSON.stringify(sessions, null, '\t'), (err) => {
		if (err) throw err;
		console.log('Write successful!');
	});
}

module.exports = {
	updateDaily
};
