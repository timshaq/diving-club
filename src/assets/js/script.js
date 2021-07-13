"use strict";

import sliders from './sliders.js';
import menu from './menu.js';
import yamaps from './yamaps.js';
import adaptiveSliders from './adaptiveSliders.js';
import serviceTabs from './serviceTabs.js';
import indexTabs from './indexTabs.js';
import headerFix from './headerFix.js';
import indexHero from './indexHero.js';
import callback from './callback.js';

document.addEventListener("DOMContentLoaded", function () {

	sliders();
	menu();
	yamaps();
	adaptiveSliders();
	serviceTabs();
	indexTabs();
	headerFix();
	indexHero();
	callback();
	let headerHeight = document.getElementById('header').offsetHeight;
	document.documentElement.style.setProperty('--header-vh', `${headerHeight}px`);
});