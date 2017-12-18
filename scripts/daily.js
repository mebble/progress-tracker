const sessions = require('../data/sessions.json');
const fs = require('fs');

function update(session, destPath) {
	sessions.push(session);

	fs.writeFileSync(destPath, JSON.stringify(sessions, null, '\t'));
}

module.exports = {
	update
};
