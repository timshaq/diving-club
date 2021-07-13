export default function () {

	const servicesPlaces = document.getElementById('servicesPlaces');
	if(servicesPlaces) {
		const servicesPlacesTabsNL = servicesPlaces.querySelectorAll('.tabs-box .tab');
		const servicesPlacesTabs = Array.prototype.slice.call(servicesPlacesTabsNL);
		
		const servicesPlacesContentsNL = servicesPlaces.querySelectorAll('.services-places__content');
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

	const servicesTrain = document.getElementById('servicesTrain');
	if(servicesTrain) {
		const servicesTrainTabsNL = servicesTrain.querySelectorAll('.tabs-box .tab');
		const servicesTrainTabs = Array.prototype.slice.call(servicesTrainTabsNL);
		
		const servicesTrainContentsNL = servicesTrain.querySelectorAll('.services-train__content-box');
		const servicesTrainContents = Array.prototype.slice.call(servicesTrainContentsNL);

		servicesTrainTabs.forEach((tab, index) => {
			tab.addEventListener('click', function() {
				servicesTrainTabs.forEach(el => el.classList.remove('tab-active'))
				tab.classList.add('tab-active')

				servicesTrainContents.forEach(el => el.classList.remove('active'))
				servicesTrainContents[index].classList.add('active')
			})
		})




		const contentTab1 = document.querySelector('.services-train__content-box[data-tab="1"]')
		const contentTab2 = document.querySelector('.services-train__content-box[data-tab="2"]')


		function startContentToggler(contentTab) {
			const offersNL = contentTab.querySelectorAll('.services-train__offers-btn')
			const offers = Array.prototype.slice.call(offersNL);

			const contentNL = contentTab.querySelectorAll('.services-train-content')
			const content = Array.prototype.slice.call(contentNL);

			offers.forEach(offer => {
				const id = offer.getAttribute('data-content-id')
				offer.addEventListener('click', function() {
					const find = contentTab.querySelector(`.services-train-content[data-content-id="${id}"]`)
					content.forEach(el => el.classList.remove('active'))
					offers.forEach(el => el.classList.remove('active'))
					find.classList.add('active')
					offer.classList.add('active')
				})
			})
		}
		startContentToggler(contentTab1)
		startContentToggler(contentTab2)

	}


}