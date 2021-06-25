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

	const indexBlogSlider = new Swiper('#indexBlogSlider', {
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

	const indexReviewsSlider = new Swiper('#indexReviewsSlider', {
			pagination: {
				el: '#indexReviewsSliderPagination',
				type: 'bullets',
			},
			watchOverflow: true,
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 30,
				}
			}

		})

	const servicesTrainBtnsSlidersElementsNL = document.querySelectorAll('.services-train .services-train__content-box .services-train__offers-list .swiper-container')
	const servicesTrainBtnsSlidersElements = Array.prototype.slice.call(servicesTrainBtnsSlidersElementsNL)

	servicesTrainBtnsSlidersElements.forEach(el => {
		console.log(el)
		const slider = new Swiper(el, {
			mousewheel: true,
			speed: 1000,
			autoplay: {
				delay: 3000,
			},
			disableOnInteraction: false,
			waitForTransition: true,
			breakpoints: {
				0: {
					slidesPerView: 1.145,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2.326,
					spaceBetween: 20,
				},
				1200: {
					direction: 'vertical',
					slidesPerGroup: 5,
					slidesPerView: 5,
					spaceBetween: 20,
				}
			}
		})
	})


}