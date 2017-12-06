$.getJSON("/song-names", (names) => {
	const $songSelect = $("#song-select");
	names.forEach((name) => {
		$songSelect.append(`<option>${name}</option>`);
	});
});