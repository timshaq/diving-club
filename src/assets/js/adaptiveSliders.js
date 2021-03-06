export default function () {

	function setAdaptiveSlider(el, match, config) {

		const sliderEl = el;
		if(!sliderEl) return

		const breakpointMob = window.matchMedia(`(min-width:${match}px)`)

		let slider;

		const enableSlider = function() {
			slider = new Swiper(sliderEl, config)
		}

		const breakpointChecker = function() {
			if(breakpointMob.matches === true) {
				if(slider !== undefined) slider.destroy(true,true);
				return;
			} else if (breakpointMob.matches === false) {
				return enableSlider();
			}
		}
		breakpointMob.addListener(breakpointChecker);
		breakpointChecker();
	}

	const servicesPlacesSlidersElementsNL = document.querySelectorAll('.services-places .services-places__content-box .swiper-container')
	const servicesPlacesSlidersElements = Array.prototype.slice.call(servicesPlacesSlidersElementsNL)

	if(servicesPlacesSlidersElements.length > 0) {
		servicesPlacesSlidersElements.forEach(el => {
			setAdaptiveSlider(el, 768, {
					breakpoints: {
						0: {
							slidesPerView: 1.23,
							spaceBetween: 10,
						},
						576: {
							slidesPerView: 2,
							spaceBetween: 10,
						}
					}
				})
		})
	}

	const indexPriceSlidersElementsNL = document.querySelectorAll('.index-price .index-price__content-box .swiper-container')
	const indexPriceSlidersElements = Array.prototype.slice.call(indexPriceSlidersElementsNL)

	if(indexPriceSlidersElements.length > 0) {
		indexPriceSlidersElements.forEach(el => {
			setAdaptiveSlider(el, 768, {
					breakpoints: {
						0: {
							slidesPerView: 1.23,
							spaceBetween: 10,
						},
						576: {
							slidesPerView: 2,
							spaceBetween: 10,
						}
					}
				})
		})
	}


	const articleAsideSlider = document.getElementById('articleAsideSlider');
	if(articleAsideSlider) {
		setAdaptiveSlider(articleAsideSlider, 1200, {
			breakpoints: {
				0: {
					slidesPerView: 1.23,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			}
			})
	}

	const aboutCertificatesMobSlider = document.getElementById('aboutCertificatesMobSlider')

	if(aboutCertificatesMobSlider) {
		setAdaptiveSlider(aboutCertificatesMobSlider, 768, {
			pagination: {
				el: '#aboutCertificatesMobSliderPagination',
				type: 'bullets',
			},
				slidesPerView: 1,
				spaceBetween: 10,
			})
	}

}