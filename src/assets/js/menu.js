export default function () {

const menu = document.getElementById('menu');

const burgerBtn = document.getElementById('burgerBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');

function disableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'hidden';
};

function enableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'scroll';
};

function closeEl(el) {
	el.classList.remove('open');
	enableScroll();
}

function openEl(el) {
	el.classList.add('open');
	disableScroll();
}

burgerBtn.addEventListener('click', function() {
	openEl(menu)
})

menuCloseBtn.addEventListener('click', function() {
	closeEl(menu)
})

menu.addEventListener('click', function(ev) {
	console.log('menuBox click')
	const vw = document.documentElement.offsetWidth;
	console.log('vw = ', vw)
	if(ev.target === this && vw > 767) {
		closeEl(menu);
		console.log('true')
	}
})

}