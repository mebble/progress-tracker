$(document).ready(() => {

setDefaultDate();
setDefaultBpmInc();
$(".default[name='minutes']").val(50);

});

function setDefaultDate() {
	const current = new Date();

	let date = current.getDate().toString();
	let month = (current.getMonth() + 1).toString();
	let year = current.getFullYear();

	$(".default[name='day']").val(fixZero(date));
	$(".default[name='month']").val(fixZero(month));
	$(".default[name='year']").val(year);
}

function setDefaultBpmInc() {
	$(".default[name='scaleIncbpm']").val(5);
	$(".default[name='exerciseIncbpm']").val(5);
	$(".default[name='scaleIncbar']").val(8);
	$(".default[name='exerciseIncbar']").val(8);
}
