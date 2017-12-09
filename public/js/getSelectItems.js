$(document).ready(() => {

$.getJSON("/song-names", (names) => {
	const $songSelect = $("#song-select");
	names.forEach((name) => {
		$songSelect.append(`<option>${name}</option>`);
	});
});

$.getJSON("/exercise-names", (names) => {
	const $exerciseSelect = $("#exercise-select");
	names.forEach((name) => {
		$exerciseSelect.append(`<option>${name}</option>`);
	});
});

});
