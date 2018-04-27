$(function() {


	// Документация по mmenu http://mmenu.frebsite.nl/documentation/extensions/effects.html

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'fx-menu-slide', 'pagedim-black', "position-right"],
		navbar: {
			title: '<img src="img/logo.png" alt="Сайт о собаках" width="28">'
		},
	});

	var API = $('#my-menu').data('mmenu');
	API.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	})
	
	
	.bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});




});
