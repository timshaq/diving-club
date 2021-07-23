export default function () {

	const galleryEl = document.getElementById('lightgallery');

	if(!galleryEl) return;

	lightGallery(galleryEl, {
		download: false,
		thumbnail: true,
		speed: 400,
		mousewheel: true,
	})

}