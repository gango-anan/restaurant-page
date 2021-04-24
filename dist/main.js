/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutus.js":
/*!************************!*\
  !*** ./src/aboutus.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAboutUsContent)\n/* harmony export */ });\nconst createAboutUsContent = (mainContentElement) => {\n  const tempAboutUs = document.createDocumentFragment();\n\n  const aboutUsDiv = document.createElement('div');\n  tempAboutUs.appendChild(aboutUsDiv);\n  aboutUsDiv.setAttribute('class', 'aboutus-contact');\n\n  const slogan1 = aboutUsDiv.appendChild(document.createElement('p'));\n  slogan1.appendChild(document.createTextNode(\"'Eat Fresh, Stay Healthy and Productive.'\"));\n\n  const slogan2 = aboutUsDiv.appendChild(document.createElement('p'));\n  slogan2.appendChild(document.createTextNode('Life is too short for boring food.'));\n\n  mainContentElement.appendChild(tempAboutUs);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutus.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContactContent)\n/* harmony export */ });\nconst createContactContent = (mainContentElement) => {\n  const tempContact = document.createDocumentFragment();\n\n  const contactDiv = document.createElement('div');\n  tempContact.appendChild(contactDiv);\n  contactDiv.setAttribute('class', 'aboutus-contact');\n\n  const contactUs = contactDiv.appendChild(document.createElement('h2'));\n  contactUs.appendChild(document.createTextNode('CONTACT US'));\n\n  const contactDetails = contactDiv.appendChild(document.createElement('p'));\n  contactDetails.appendChild(document.createTextNode('You can contact us by email or phone for more info.'));\n\n  const email = contactDiv.appendChild(document.createElement('p'));\n  email.appendChild(document.createTextNode('Email: info@galisoft.com'));\n\n  const tel = contactDiv.appendChild(document.createElement('p'));\n  tel.appendChild(document.createTextNode('Tel: +256 000-000-000'));\n\n  mainContentElement.appendChild(tempContact);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onpageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onpageload */ \"./src/onpageload.js\");\n/* harmony import */ var _aboutus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus */ \"./src/aboutus.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\nconst mainContentElement = document.getElementById('content');\nwindow.onload = (0,_onpageload__WEBPACK_IMPORTED_MODULE_0__.default)(mainContentElement);\n\n// Utility functions.\nfunction wipeExistingContents(parentContainer) {\n  let index = parentContainer.childNodes.length - 1;\n  while (parentContainer.childNodes.length) {\n    if (parentContainer.childNodes[index].nodeName === 'UL') {\n      break;\n    } else {\n      parentContainer.removeChild(parentContainer.lastChild);\n    }\n    index -= 1;\n  }\n}\n\n// Event Listeners.\nmainContentElement.addEventListener('click', (e) => {\n  const body = document.querySelector('body');\n  if (e.target && e.target.matches('li#menu-item1')) {\n    wipeExistingContents(mainContentElement);\n    body.classList.remove('bg-dark');\n    body.classList.add('bg');\n    (0,_aboutus__WEBPACK_IMPORTED_MODULE_1__.default)(mainContentElement);\n  } else if (e.target && e.target.matches('li#menu-item2')) {\n    wipeExistingContents(mainContentElement);\n    body.classList.remove('bg');\n    body.classList.add('bg-dark');\n    (0,_menu__WEBPACK_IMPORTED_MODULE_3__.default)(mainContentElement);\n  } else if (e.target && e.target.matches('li#menu-item3')) {\n    wipeExistingContents(mainContentElement);\n    body.classList.remove('bg-dark');\n    body.classList.add('bg');\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)(mainContentElement);\n  }\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenuContent)\n/* harmony export */ });\nfunction createMenuList(parentElement) {\n  const menuList = ['Beef Steak', 'Chicken Katsu', \"G'Special Burger\", 'Smoky Salmon'];\n  for (let index = 0; index < menuList.length; index += 1) {\n    const item = document.createElement('div');\n    item.setAttribute('class', 'list-item');\n    item.setAttribute('id', `list-item${index + 1}`);\n\n    const p = document.createElement('p');\n    p.appendChild(document.createTextNode(menuList[index]));\n\n    item.appendChild(p);\n    parentElement.appendChild(item);\n  }\n}\n\nconst createMenuContent = (mainContentElement) => {\n  const tempMenu = document.createDocumentFragment();\n\n  const menuDiv = document.createElement('div');\n  tempMenu.appendChild(menuDiv);\n  menuDiv.setAttribute('class', 'menu-content');\n  createMenuList(menuDiv);\n\n  mainContentElement.appendChild(tempMenu);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/onpageload.js":
/*!***************************!*\
  !*** ./src/onpageload.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onPageLoad)\n/* harmony export */ });\nfunction createNavBarLinks(parentElement) {\n  const navBarLinks = ['About', 'Menu', 'Contact'];\n  for (let index = 0; index < navBarLinks.length; index += 1) {\n    const menu = document.createElement('li');\n    menu.setAttribute('class', 'menu-item');\n    menu.setAttribute('id', `menu-item${index + 1}`);\n    menu.appendChild(document.createTextNode(navBarLinks[index]));\n    parentElement.appendChild(menu);\n  }\n}\n\nconst onPageLoad = (mainContentElement) => {\n  const body = document.querySelector('body');\n  body.setAttribute('class', 'bg');\n  mainContentElement.setAttribute('class', 'content');\n\n  const tempContainer = document.createDocumentFragment();\n\n  const restaurantName = tempContainer.appendChild(document.createElement('h1'));\n  restaurantName.appendChild(document.createTextNode('G`Food Garage'));\n\n  const navigation = tempContainer.appendChild(document.createElement('ul'));\n  navigation.setAttribute('id', 'menu-bar');\n  navigation.setAttribute('class', 'menu-bar');\n  createNavBarLinks(navigation);\n\n  mainContentElement.appendChild(tempContainer);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/onpageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;