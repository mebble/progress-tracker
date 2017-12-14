const dailyPractice = require('../data/daily-practice.json');
const fs = require('fs');

function updateDaily(session) {
	dailyPractice.push(session);

	fs.writeFile('./data/daily-practice.json', JSON.stringify(dailyPractice, null, '\t'), (err) => {
		if (err) throw err;
		console.log('Write successful!');
	});
}

module.exports = {
	updateDaily
};
