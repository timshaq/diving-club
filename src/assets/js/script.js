"use strict";

import sliders from './sliders.js';
import menu from './menu.js';
import yamaps from './yamaps.js';

document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');

	sliders();
	menu();
	yamaps();

});