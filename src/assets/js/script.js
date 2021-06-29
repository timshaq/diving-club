"use strict";

import sliders from './sliders.js';
import menu from './menu.js';
import yamaps from './yamaps.js';
import adaptiveSliders from './adaptiveSliders.js';
import serviceTabs from './serviceTabs.js';
import indexTabs from './indexTabs.js';
import headerFix from './headerFix.js';
import indexHero from './indexHero.js';

document.addEventListener("DOMContentLoaded", function () {

	sliders();
	menu();
	yamaps();
	adaptiveSliders();
	serviceTabs();
	indexTabs();
	headerFix();
	indexHero();
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});