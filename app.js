$(document).ready(function() {

for (var i = 0; i <= 100; i++) {
	$('<div>').addClass('debris').appendTo('#jeu');
	$('#jeu').append('<div class="debris">').css();
}

function pointsAléatoires(min, max) {
	return Math.random() * (max - min) + min;
	console.log(pointsAléatoires(0, 100));
}










});