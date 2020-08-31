window.addEventListener('DOMContentLoaded', function() {
	'use strict';
	let 
		form 		= document.querySelector('form'),
		btnForm 	= document.querySelectorAll('.button-form');

	// Используем slick 
	$('.carusel').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	btnForm[1].addEventListener('click', function() {
		form.reset()
	});
});