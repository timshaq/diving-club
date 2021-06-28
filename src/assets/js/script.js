"use strict";

import sliders from './sliders.js';
import menu from './menu.js';
import yamaps from './yamaps.js';
import adaptiveSliders from './adaptiveSliders.js';
import serviceTabs from './serviceTabs.js';
import indexTabs from './indexTabs.js';

document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');

	sliders();
	menu();
	yamaps();
	adaptiveSliders();
	serviceTabs();
	indexTabs();

});