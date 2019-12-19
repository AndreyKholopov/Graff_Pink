$(function () {

	$('.descr-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,  
		responsive: [
		// {
		// 	breakpoint: 1036,
		// 	settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 	}
		// },
		]
	});
});