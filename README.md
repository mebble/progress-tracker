# Progress Tracker

Log music practice sessions and visualise the data for feedback.

## The Why

When working on any skill, you would want to have a way of measuring how good you currently are at that skill. This will allow you to see if you're improving over time. Otherwise, you might end up stuck on a plateau, not knowing what to do next to improve. This simple app helps you out based on some common metrics that most aspiring musicians focus on.

## Getting Started

### Prerequisites

You must have [node.js](https://nodejs.org/en/) installed on your computer. You'll also need either a Linux or MacOS operating system if you're gonna follow the instructions exactly as they are given below, because things are a little different in Windows. But please go ahead if you know how to get around that.

### Installation

In the terminal, clone this repository to the directory you want it in:
```
$ cd <dir-of-your-choice>
$ git clone https://github.com/mebble/progress-tracker.git
$ cd progress-tracker
```
Install dependencies:
```
$ npm install
```
### Configuration

You'll need to initialise the files that will store your music practice data. The first step is to create the files with a template in them by running
```
$ npm run init_data
```
You'll now notice that a directory `data` has been created, with various `.json` files in it. On opening these files, you'll see empty fields marked by `"..."` such as in the file `songs.json`:
```
[
	{
		"name": "...",
		"artist": "...",
		"type": "..."
	}
]
```
If you're familiar with [JSON](https://www.json.org/), you'll know that the `songs.json` file stores an array of objects (here, songs), which each have various attributes. Your (only) job is to manually fill up these empty fields with the thing you're working on. You'll also have to manually type in your own songs as of now. The only files you'll need to mess with are `songs.json` and `exercises.json`. They should look something like this:
```
// songs.json
[
	{
		"name": "Blackbird",
		"artist": "The Beatles",
		"type": "fingerstyle"
	},
	{
		"name": "Dust In The Wind",
		"artist": "Kansas",
		"type": "fingerstyle"
	},
	{
		"name": "Sweet Child O' Mine",
		"artist": "Guns N' Roses",
		"type": "lead"
	}
]
```
```
// exercises.json
[
	{
		"name": "<finger-exercise-name>",
		"teacher": "<youtube channel/blogger/etc>",
		"source": "<url of the article/site/etc from where you found this>",
		"type": "fingerstyle/lead/etc",
		"difficulty": "beginner/intermediate/advanced"
	}
]
```
**This manual configuration is needed only for now. An `add song/etc` feature will be included in later releases.**

Once you've done this, you're ready to start using it!

## Running the app

In the terminal, run
```
$ node server
```
From your browser, go to `localhost:3000`. You'll now see the app running on your browser.

## Using the app

For every practice session, fill in the details of that session in the form. On submission, you'll see that the practice session has been recorded in the `data/sessions.json` file.

If you want to back up your data, run
```
$ npm run create_backup
```
while in the app's main directory. This will create a `data.backup` directory with all your data files that won't be overwritten until the next time you run `./create_backup.sh`.

## To dos:

- [ ] Allow adding new data elements through a gui
- [ ] Visualise the data with d3 js
