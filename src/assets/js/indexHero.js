export default function () {

const parallax = document.getElementById('indexHeroParallax');
if(parallax) {

	const diver = document.getElementById('indexHeroDiver');
	const fishLeft = document.getElementById('indexHeroFishLeft');
	const fishRight = document.getElementById('indexHeroFishRight');

	const kDiver = 10;
	const kFishLeft = 25;
	const kFishRight = 15;

	const speed = 0.05;

	let positionX = 0, positionY = 0;
	let coordXpercent = 0, coordYpercent = 0;

	function setMouseParallaxStyle() {
		const distX = coordXpercent - positionX;
		const distY = coordYpercent - positionY;

		positionX = positionX + (distX * speed);
		positionY = positionY + (distY * speed);

		diver.style.cssText = `transform: translate(${-50 + (positionX / kDiver)}%,${-50 + (positionY / kDiver)}%)`;
		fishLeft.style.cssText = `transform: translate(${-positionX / kFishLeft}%,${-positionY / kFishLeft}%)`;
		fishRight.style.cssText = `transform: translate(${-positionX / kFishRight}%,${-positionY / kFishRight}%)`;

		requestAnimationFrame(setMouseParallaxStyle);
	}

	setMouseParallaxStyle();

	parallax.addEventListener('mousemove', function(ev) {
		const parallaxWidth = parallax.offsetWidth;
		const parallaxHeight = parallax.offsetHeight;

		const coordX = ev.pageX - parallaxWidth / 2;
		const coordY = ev.pageY - parallaxHeight / 2;

		coordXpercent = coordX / parallaxWidth * 100;
		coordYpercent = coordY / parallaxHeight * 100;
	})

}

}