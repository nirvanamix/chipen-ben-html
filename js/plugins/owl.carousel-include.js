jQuery(document).ready(function($) {
	$('.owl-work').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1
	});

	$('.owl-reviews').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3,
				slideBy: 3,
			}
		}
	});

	$('.owl-video').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3,
			}
		}
	});

	









});