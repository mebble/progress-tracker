$(document).ready(() => {

$("#daily-session-form").submit((e) => {
	const day = fixZero($("[name='day']").val());
	const month = fixZero($("[name='month']").val());
	const year = $("[name='year']").val();

	const scale = $("[name='scale']").val();
	const mode = $("[name='mode']").val();

	const sessionData = {
		date: `${year}-${month}-${day}`,
		songs: [
			{
				name: $("[name='song']").val(),
				maxbpm: Number($("[name='songMaxbpm']").val())
			}
		],
		scales: [
			{
				mode: `${scale}-${mode}`,
				shape: $("[name='shape']").val(),
				minbpm: Number($("[name='scaleMinbpm']").val()),
				maxbpm: Number($("[name='scaleMaxbpm']").val()),
				incbpm: Number($("[name='scaleIncbpm']").val()),
				incbar: Number($("[name='scaleIncbar']").val())
			}
		],
		exercises: [
			{
				name: $("[name='exercise']").val(),
				minbpm: Number($("[name='exerciseMinbpm']").val()),
				maxbpm: Number($("[name='exerciseMaxbpm']").val()),
				incbpm: Number($("[name='exerciseIncbpm']").val()),
				incbar: Number($("[name='exerciseIncbar']").val())
			}
		],
		chords: $("#chord-group input").map((i, input) => $(input).val()).toArray(),
		minutes: Number($("[name='minutes']").val()),
		videoDay: JSON.parse($("[name='videoDay']").is(":checked"))
	}

	$.ajax({
		url: "/add/daily-session",
		method: "POST",
		data: JSON.stringify(sessionData),
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: res => putStatusMsg(res)
	});
	e.preventDefault();
});

});

function putStatusMsg(res) {
	let buttonType;
	if (res.status === "success") {
		buttonType = "success";
	} else {
		buttonType = "danger";
	}

	$("#status-group").append(`<button type="button" class="btn btn-${buttonType}" disabled>${res.message}</button>`);
	console.log(res);
}
