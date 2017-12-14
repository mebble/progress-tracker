const dailyPractice = require('../data/daily-practice.json');
const fs = require('fs');

function updateDaily(session) {
	const dailyItem = {
		date: `${session.year}-${session.month}-${session.day}`,
		songs: [
			{
				name: session.song,
				maxbpm: Number(session.songMaxbpm)
			}
		],
		scales: [
			{
				mode: `${session.scale}-${session.mode}`,
				shape: session.shape,
				minbpm: Number(session.scaleMinbpm),
				maxbpm: Number(session.scaleMaxbpm),
				incbpm: Number(session.scaleIncbpm),
				incbar: Number(session.scaleIncbar)
			}
		],
		exercises: [
			{
				name: session.exercise,
				minbpm: Number(session.exerciseMinbpm),
				maxbpm: Number(session.exerciseMaxbpm),
				incbpm: Number(session.exerciseIncbpm),
				incbar: Number(session.exerciseIncbar)
			}
		],
		chords: session.chords,
		minutes: Number(session.minutes),
		videoDay: JSON.parse(session.videoDay)
	};
	dailyPractice.push(dailyItem);

	fs.writeFile('./data/daily-practice.json', JSON.stringify(dailyPractice, null, '\t'), (err) => {
		if (err) throw err;
		console.log('Write successful!');
	});
}

module.exports = {
	updateDaily
};
