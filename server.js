// load dependencies
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const daily = require('./daily');

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
	daily.updateDaily(req.body);

	res.contentType('json');
	res.send({
		status: 'success',
		message: 'Daily practice session data received'
	});
});

app.get('/song-names', (req, res) => {
	const names = songs.map(song => song.name);
	res.send(names);
});

app.get('/exercise-names', (req, res) => {
	const names = exercises.map(exercise => exercise.name);
	res.send(names);
});