const sessions = require('../data/sessions.json');
const fs = require('fs');

function update(session, destPath) {
	sessions.push(session);

	fs.writeFile(destPath, JSON.stringify(sessions, null, '\t'), (err) => {
		if (err) throw err;
		console.log('Write successful!');
	});
}

module.exports = {
	update
};
