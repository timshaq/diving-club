export default function () {

	const indexPrice = document.getElementById('indexPrice');
	if(indexPrice) {
		const servicesPlacesTabsNL = indexPrice.querySelectorAll('.tabs-box .tab');
		const servicesPlacesTabs = Array.prototype.slice.call(servicesPlacesTabsNL);
		
		const servicesPlacesContentsNL = indexPrice.querySelectorAll('.services-places__content');
		const servicesPlacesContents = Array.prototype.slice.call(servicesPlacesContentsNL);

		servicesPlacesTabs.forEach((tab, index) => {
			tab.addEventListener('click', function() {
				servicesPlacesTabs.forEach(el => el.classList.remove('tab-active'))
				tab.classList.add('tab-active')

				servicesPlacesContents.forEach(el => el.classList.remove('active'))
				servicesPlacesContents[index].classList.add('active')
			})
		})
	}

	const indexTeamLeadToggler = document.getElementById('indexTeamLeadToggler');
	if(indexTeamLeadToggler) {
		const indexTeamLeadText = document.getElementById('indexTeamLeadText')
		indexTeamLeadToggler.addEventListener('click', function() {
			if( indexTeamLeadText.classList.contains('open') ) {
				indexTeamLeadText.classList.remove('open')
				indexTeamLeadToggler.textContent = "Подробнее"
			} else {
				indexTeamLeadText.classList.add('open')
				indexTeamLeadToggler.textContent = "Скрыть"
			}
		})
	}


	const indexTeamListSliderEl = document.getElementById('indexTeamListSlider');
	if(indexTeamListSliderEl) {
		const indexTeamListSlider = new Swiper(indexTeamListSliderEl, {
			watchOverflow: true,
			pagination: {
				el: '#indexTeamListSliderPagination',
				type: 'bullets',
			},
			breakpoints: {
				0: {
					slidesPerView: 1.23,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			}
		})
	}


	const indexPlacesSlider = document.getElementById('indexPlacesSlider');
	if(indexPlacesSlider) {
		const indexTeamListSlider = new Swiper(indexPlacesSlider, {
			watchOverflow: true,
			pagination: {
				el: '#indexPlacesSliderPagination',
				type: 'bullets',
			},
			navigation: {
				prevEl: '#indexPlacesSliderPrevBtn',
				nextEl: '#indexPlacesSliderNextBtn',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					centeredSlides: true,
					loop: true,
					slidesPerView: 1.53,
					spaceBetween: 30,
				},
				1370: {
					centeredSlides: true,
					loop: true,
					slidesPerView: 2.3,
					spaceBetween: 30,
				},
			}
		})
	}

	const indexTrain = document.getElementById('indexTrain');
	if(indexTrain) {
		const indexTrainTabsNL = indexTrain.querySelectorAll('.tabs-box .tab');
		const indexTrainTabs = Array.prototype.slice.call(indexTrainTabsNL);
		
		const indexTrainContentsNL = indexTrain.querySelectorAll('.index-train__content');
		const indexTrainContents = Array.prototype.slice.call(indexTrainContentsNL);

		indexTrainTabs.forEach((tab, index) => {
			tab.addEventListener('click', function() {
				indexTrainTabs.forEach(el => el.classList.remove('tab-active'))
				tab.classList.add('tab-active')

				indexTrainContents.forEach(el => el.classList.remove('active'))
				indexTrainContents[index].classList.add('active')
			})
		})
	}

	const indexTrainSlidersElementsNL = document.querySelectorAll('.index-train .index-train__content-box .swiper-container')
	const indexTrainSlidersElements = Array.prototype.slice.call(indexTrainSlidersElementsNL)

	if(indexTrainSlidersElements.length > 0) {
		indexTrainSlidersElements.forEach(el => {
			const pagination = el.querySelector('.swiper-pagination')
			const slider = new Swiper(el, {
				watchOverflow: true,
				pagination: {
					el: pagination,
					type: 'bullets',
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}
			})
		})
	}


	const indexPopupSliderEl = document.getElementById('indexPopupSlider');
	if(indexPopupSliderEl) {
		const indexPopupSlider = new Swiper(indexPopupSliderEl, {
			watchOverflow: true,
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: '#indexPopupSliderPagination',
				type: 'bullets',
			},
			navigation: {
				prevEl: '#indexPopupSliderPaginationPrev',
				nextEl: '#indexPopupSliderPaginationNext',
			},
		})
	}

}