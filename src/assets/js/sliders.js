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

	const servicesTripSlider = new Swiper('#servicesTripSlider', {
			pagination: {
				el: '#servicesTripSliderPagination',
				type: 'bullets',
			},
			watchOverflow: true,
			breakpoints: {
				0: {
					slidesPerView: 1.23,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 30,
				}
			}

		})



}