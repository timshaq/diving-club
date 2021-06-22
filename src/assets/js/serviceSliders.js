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
					slidesPerView: 1.23,
					spaceBetween: 10,
				})
		})
	}

	const servicesTrainBtnsSlidersElementsNL = document.querySelectorAll('.services-train .services-train__content-box .services-train__offers-list .swiper-container')
	const servicesTrainBtnsSlidersElements = Array.prototype.slice.call(servicesTrainBtnsSlidersElementsNL)

	servicesTrainBtnsSlidersElements.forEach(el => {
		console.log(el)
		const slider = new Swiper(el, {
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
					slidesPerView: 6,
					spaceBetween: 20,
				}
			}
		})
	})


}