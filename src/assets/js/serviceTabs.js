export default function () {

	const servicesPlaces = document.getElementById('servicesPlaces');

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