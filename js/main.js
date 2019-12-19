$(function () {

	$('.descr-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,  
		responsive: [
		{
			breakpoint: 670,
			settings: {
				slidesToShow: 2,
			}
		},
		]
	});

	$('.btn__menu').on('click', function(){
		$('.menu__list').slideToggle();
	});

});