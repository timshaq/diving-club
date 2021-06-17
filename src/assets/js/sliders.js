export default function () {

	const indexHeroSlider = new Swiper('#indexHeroSlider', {
			navigation: {
				nextEl: '#indexHeroSliderNextBtn',
				prevEl: '#indexHeroSliderPrevBtn',
			},
			pagination: {
				el: '#indexHeroSliderPagination',
				type: 'fraction',
			},
			slidesPerView: 1,
			spaceBetween: 10,

		})

}