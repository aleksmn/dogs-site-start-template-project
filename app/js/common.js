$(function() {


	// Документация по mmenu http://mmenu.frebsite.nl/documentation/extensions/effects.html

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'fx-menu-slide', 'pagedim-black', "position-right"],
		navbar: {
			title: '<img src="img/logo.png" alt="Сайт о собаках">'
		},
	});

	var API = $('#my-menu').data('mmenu');
	API.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	})
	
	.bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			},

		}
	});

});
