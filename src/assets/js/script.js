"use strict";

import sliders from './sliders.js';
import menu from './menu.js';
import yamaps from './yamaps.js';
import serviceSliders from './serviceSliders.js';
import serviceTabs from './serviceTabs.js';

document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');

	sliders();
	menu();
	yamaps();
	serviceSliders();
	serviceTabs();

});