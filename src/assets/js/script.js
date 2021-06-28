"use strict";

import sliders from './sliders.js';
import menu from './menu.js';
import yamaps from './yamaps.js';
import adaptiveSliders from './adaptiveSliders.js';
import serviceTabs from './serviceTabs.js';
import indexTabs from './indexTabs.js';
import headerFix from './headerFix.js';

document.addEventListener("DOMContentLoaded", function () {

	sliders();
	menu();
	yamaps();
	adaptiveSliders();
	serviceTabs();
	indexTabs();
	headerFix();

});