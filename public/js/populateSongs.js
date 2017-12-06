$.getJSON("/get-songs", (songs) => {
	const $songSelect = $("#song-select");
	songs.forEach((song) => {
		$songSelect.append(`<option>${song.name}</option>`);
	});
});