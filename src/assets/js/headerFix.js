export default function () {

	const header = document.getElementById('header');

	function setHeaderActiveClass() {
		const scrollTop = document.documentElement.scrollTop;
		if (scrollTop > 98) header.classList.add('active')
		if (scrollTop < 98) header.classList.remove('active')
	}

	document.addEventListener('scroll', function() {
		setHeaderActiveClass()
	})

	setHeaderActiveClass()

}