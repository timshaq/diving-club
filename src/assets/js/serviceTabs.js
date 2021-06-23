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
	}


}