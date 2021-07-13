export default function () {

const callback = document.getElementById('callback-popup');
if(!callback) return;

const close = callback.querySelector('.popup-review__close')

function disableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'hidden';
}

function enableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'scroll';
}

function closeEl(el) {
	el.classList.remove('open');
	enableScroll();
}

function openEl(el) {
	el.classList.add('open');
	disableScroll();
}


const btnsNL = document.querySelectorAll('.callback-btn');
const btns = Array.prototype.slice.call(btnsNL);

btns.forEach(el => {
	el.addEventListener('click', function() {
		openEl(callback)
	})
})

close.addEventListener('click', function() {
	closeEl(callback)
})

callback.addEventListener('click', function(ev) {
	if(ev.target === this) closeEl(callback);
})


}