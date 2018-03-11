// load dependencies
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const daily = require('./scripts/daily');

// load json data
const songs = require('./data/songs.json');
const exercises = require('./data/exercises.json');

const app = express();
const port = 3000;
const server = app.listen(port, () => {
	console.log(`Server listening at port ${port}`);
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies
app.use(express.static('public'));

app.post('/add/daily-session', (req, res) => {
	console.log('Request body:\n' + JSON.stringify(req.body, null, 4));

	try {
		daily.update(req.body);

		console.log('Write successful!');
		res.contentType('json');
		res.send({
			status: 'success',
			message: 'Data successfully received'
		});
	} catch (err) {
		console.log('Write failed!');
		res.contentType('json');
		res.send({
			status: 'failure',
			message: 'Sorry, but a server error occurred'
		});
	}
});

app.get('/song-names', (req, res) => {
	const names = songs.map(song => song.name);
	res.send(names);
});

app.get('/exercise-names', (req, res) => {
	const names = exercises.map(exercise => exercise.name);
	res.send(names);
});
