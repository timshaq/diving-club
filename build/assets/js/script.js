/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/assets/js/menu.js":
  /*!*******************************!*\
    !*** ./src/assets/js/menu.js ***!
    \*******************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\nconst menu = document.getElementById('menu');\r\n\r\nconst burgerBtn = document.getElementById('burgerBtn');\r\nconst menuCloseBtn = document.getElementById('menuCloseBtn');\r\n\r\nfunction disableScroll() {\r\n\thtml.style.overflowX = 'hidden';\r\n\thtml.style.overflowY = 'hidden';\r\n};\r\n\r\nfunction enableScroll() {\r\n\thtml.style.overflowX = 'hidden';\r\n\thtml.style.overflowY = 'scroll';\r\n};\r\n\r\nfunction closeEl(el) {\r\n\tel.classList.remove('open');\r\n\tenableScroll();\r\n}\r\n\r\nfunction openEl(el) {\r\n\tel.classList.add('open');\r\n\tdisableScroll();\r\n}\r\n\r\nburgerBtn.addEventListener('click', function() {\r\n\topenEl(menu)\r\n})\r\n\r\nmenuCloseBtn.addEventListener('click', function() {\r\n\tcloseEl(menu)\r\n})\r\n\r\nmenu.addEventListener('click', function(ev) {\r\n\tconsole.log('menuBox click')\r\n\tconst vw = document.documentElement.offsetWidth;\r\n\tconsole.log('vw = ', vw)\r\n\tif(ev.target === this && vw > 767) {\r\n\t\tcloseEl(menu);\r\n\t\tconsole.log('true')\r\n\t}\r\n})\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/menu.js?");
    /***/
  },

  /***/
  "./src/assets/js/script.js":
  /*!*********************************!*\
    !*** ./src/assets/js/script.js ***!
    \*********************************/

  /*! no exports provided */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders.js */ \"./src/assets/js/sliders.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/assets/js/menu.js\");\n/* harmony import */ var _yamaps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yamaps.js */ \"./src/assets/js/yamaps.js\");\n/* harmony import */ var _serviceSliders_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceSliders.js */ \"./src/assets/js/serviceSliders.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n\tvar header = document.getElementById('header');\r\n\r\n\tObject(_sliders_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tObject(_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\tObject(_yamaps_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\tObject(_serviceSliders_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/script.js?");
    /***/
  },

  /***/
  "./src/assets/js/serviceSliders.js":
  /*!*****************************************!*\
    !*** ./src/assets/js/serviceSliders.js ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tfunction setAdaptiveSlider(el, match, config) {\r\n\r\n\t\tconst sliderEl = el;\r\n\t\tif(!sliderEl) return\r\n\r\n\t\tconst breakpointMob = window.matchMedia(`(min-width:${match}px)`)\r\n\r\n\t\tlet slider;\r\n\r\n\t\tconst enableSlider = function() {\r\n\t\t\tslider = new Swiper(sliderEl, config)\r\n\t\t}\r\n\r\n\t\tconst breakpointChecker = function() {\r\n\t\t\tif(breakpointMob.matches === true) {\r\n\t\t\t\tif(slider !== undefined) slider.destroy(true,true);\r\n\t\t\t\treturn;\r\n\t\t\t} else if (breakpointMob.matches === false) {\r\n\t\t\t\treturn enableSlider();\r\n\t\t\t}\r\n\t\t}\r\n\t\tbreakpointMob.addListener(breakpointChecker);\r\n\t\tbreakpointChecker();\r\n\t}\r\n\r\n\tconst servicesPlacesSlidersElementsNL = document.querySelectorAll('.services-places .services-places__content-box .swiper-container')\r\n\tconst servicesPlacesSlidersElements = Array.prototype.slice.call(servicesPlacesSlidersElementsNL)\r\n\r\n\tif(servicesPlacesSlidersElements.length > 0) {\r\n\t\tservicesPlacesSlidersElements.forEach(el => {\r\n\t\t\tsetAdaptiveSlider(el, 768, {\r\n\t\t\t\t\tslidesPerView: 1.23,\r\n\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t})\r\n\t\t})\r\n\t}\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/serviceSliders.js?");
    /***/
  },

  /***/
  "./src/assets/js/sliders.js":
  /*!**********************************!*\
    !*** ./src/assets/js/sliders.js ***!
    \**********************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\n\tconst indexHeroSlider = new Swiper('#indexHeroSlider', {\r\n\t\t\tnavigation: {\r\n\t\t\t\tnextEl: '#indexHeroSliderNextBtn',\r\n\t\t\t\tprevEl: '#indexHeroSliderPrevBtn',\r\n\t\t\t},\r\n\t\t\tpagination: {\r\n\t\t\t\tel: '#indexHeroSliderPagination',\r\n\t\t\t\ttype: 'fraction',\r\n\t\t\t},\r\n\t\t\tslidesPerView: 1,\r\n\t\t\tspaceBetween: 10,\r\n\r\n\t\t})\r\n\r\n\tconst servicesTripSlider = new Swiper('#servicesTripSlider', {\r\n\t\t\tpagination: {\r\n\t\t\t\tel: '#servicesTripSliderPagination',\r\n\t\t\t\ttype: 'bullets',\r\n\t\t\t},\r\n\t\t\twatchOverflow: true,\r\n\t\t\tbreakpoints: {\r\n\t\t\t\t0: {\r\n\t\t\t\t\tslidesPerView: 1.23,\r\n\t\t\t\t\tspaceBetween: 10,\r\n\t\t\t\t},\r\n\t\t\t\t768: {\r\n\t\t\t\t\tslidesPerView: 2,\r\n\t\t\t\t\tspaceBetween: 30,\r\n\t\t\t\t},\r\n\t\t\t\t1200: {\r\n\t\t\t\t\tslidesPerView: 3,\r\n\t\t\t\t\tspaceBetween: 30,\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t})\r\n\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/sliders.js?");
    /***/
  },

  /***/
  "./src/assets/js/yamaps.js":
  /*!*********************************!*\
    !*** ./src/assets/js/yamaps.js ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\r\n\r\nconst ourGeo = [44.561012, 38.077115]\r\n\r\nconst mapEl = document.getElementById('contactsMap');\r\nif(!mapEl) return\r\n    ymaps.ready(init);\r\n    function init(){\r\n        var myMap = new ymaps.Map(\"contactsMap\", {\r\n            center: ourGeo,\r\n            zoom: 17\r\n        });\r\n\t\t// var myGeoObject = new ymaps.GeoObject({\r\n\t\t//     geometry: {\r\n\t\t//         type: \"Point\", // тип геометрии - точка\r\n\t\t//         coordinates: ourGeo // координаты точки\r\n\t\t//     }\r\n\t\t// });\r\n\r\n\t\t// myMap.geoObjects.add(myGeoObject);\r\n\t\tvar myPlacemark = new ymaps.Placemark(ourGeo, {}, {\r\n\t\t    iconLayout: 'default#image',\r\n\t\t    iconImageHref: 'assets/img/yamap-tag.png',\r\n\t\t    iconImageSize: [28, 36],\r\n\t\t    iconImageOffset: [-36, -36]\r\n\t\t});\r\n\t\tmyMap.geoObjects.add(myPlacemark);\r\n\r\n    }\r\nconst contactsMapList = document.getElementById('contactsMapList');\r\nconst contactsMapBox = document.getElementById('contactsMapBox');\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/yamaps.js?");
    /***/
  },

  /***/
  0:
  /*!******************************************************************************************************************************************************!*\
    !*** multi ./src/assets/js/menu.js ./src/assets/js/script.js ./src/assets/js/serviceSliders.js ./src/assets/js/sliders.js ./src/assets/js/yamaps.js ***!
    \******************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    eval("__webpack_require__(/*! C:\\Users\\timur\\Desktop\\diving-club\\src\\assets\\js\\menu.js */\"./src/assets/js/menu.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\diving-club\\src\\assets\\js\\script.js */\"./src/assets/js/script.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\diving-club\\src\\assets\\js\\serviceSliders.js */\"./src/assets/js/serviceSliders.js\");\n__webpack_require__(/*! C:\\Users\\timur\\Desktop\\diving-club\\src\\assets\\js\\sliders.js */\"./src/assets/js/sliders.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\timur\\Desktop\\diving-club\\src\\assets\\js\\yamaps.js */\"./src/assets/js/yamaps.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/menu.js_./src/assets/js/script.js_./src/assets/js/serviceSliders.js_./src/assets/js/sliders.js_./src/assets/js/yamaps.js?");
    /***/
  }
  /******/

});