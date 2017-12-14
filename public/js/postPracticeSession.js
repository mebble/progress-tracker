$(document).ready(() => {

$("#daily-session-form").submit((e) => {
	const sessionData = {
		day: $("[name='day']").val(),
		month: $("[name='month']").val(),
		year: $("[name='year']").val(),

		song: $("[name='song']").val(),
		songMaxbpm: $("[name='songMaxbpm']").val(),

		scale: $("[name='scale']").val(),
		mode: $("[name='mode']").val(),
		shape: $("[name='shape']").val(),
		scaleMinbpm: $("[name='scaleMinbpm']").val(),
		scaleMaxbpm: $("[name='scaleMaxbpm']").val(),
		scaleIncbpm: $("[name='scaleIncbpm']").val(),
		scaleIncbar: $("[name='scaleIncbar']").val(),

		exercise: $("[name='exercise']").val(),
		exerciseMinbpm: $("[name='exerciseMinbpm']").val(),
		exerciseMaxbpm: $("[name='exerciseMaxbpm']").val(),
		exerciseIncbpm: $("[name='exerciseIncbpm']").val(),
		exerciseIncbar: $("[name='exerciseIncbar']").val(),

		chords: $("#chord-group input").map((i, input) => $(input).val()).toArray(),

		videoDay: $("[name='videoDay']").is(":checked"),
		minutes: $("[name='minutes']").val()
	};

	$.post("/add/daily-session", sessionData, (res) => {
		console.log(res);
	}, "json");
	e.preventDefault();
});

});
