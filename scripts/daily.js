const sessions = require('../data/sessions.json');
const fs = require('fs');
const path = require('path');

function update(session) {
	sessions.push(session);
	fs.writeFileSync(path.resolve(__dirname, '../data/sessions.json'), JSON.stringify(sessions, null, '\t'));
}

module.exports = {
	update
};
