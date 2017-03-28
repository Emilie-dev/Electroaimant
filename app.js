for (var i = 0; i <= 50; i++) {
	$('<div>').addClass('debris').appendTo('#jeu');
	$('#jeu').append('<div class="debris">');
}

function pointsAléatoires(min, max) {
	return Math.random() * (max - min) + min;
}

