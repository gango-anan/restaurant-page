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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAboutUsContent\": () => (/* binding */ createAboutUsContent)\n/* harmony export */ });\nconst createAboutUsContent = (mainContentElement) => {\r\n  const tempAboutUs = document.createDocumentFragment();\r\n\r\n  const aboutUsDiv = document.createElement('div');\r\n  tempAboutUs.appendChild(aboutUsDiv);\r\n  aboutUsDiv.setAttribute('class' , 'aboutus-contact');\r\n\r\n  const slogan1 = aboutUsDiv.appendChild(document.createElement('p'));\r\n  slogan1.appendChild(document.createTextNode(\"'Eat Fresh, Stay Healthy and Productive.'\"));\r\n\r\n  const slogan2 = aboutUsDiv.appendChild(document.createElement('p'));\r\n  slogan2.appendChild(document.createTextNode(\"Life is too short for boring food.\"));\r\n\r\n  mainContentElement.appendChild(tempAboutUs);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutus.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContactContent\": () => (/* binding */ createContactContent)\n/* harmony export */ });\nconst createContactContent = (mainContentElement) => {\r\n  const tempContact = document.createDocumentFragment();\r\n\r\n  const contactDiv = document.createElement('div');\r\n  tempContact.appendChild(contactDiv);\r\n  contactDiv.setAttribute('class' , 'aboutus-contact');\r\n\r\n  const contactUs = contactDiv.appendChild(document.createElement('h2'));\r\n  contactUs.appendChild(document.createTextNode('CONTACT US'));\r\n\r\n  const contactDetails = contactDiv.appendChild(document.createElement('p'));\r\n  contactDetails.appendChild(document.createTextNode('You can contact us by email or phone for more info.'));\r\n\r\n  const email = contactDiv.appendChild(document.createElement('p'));\r\n  email.appendChild(document.createTextNode('Email: info@galisoft.com'));\r\n\r\n  const tel = contactDiv.appendChild(document.createElement('p'));\r\n  tel.appendChild(document.createTextNode('Tel: +256 000-000-000'));\r\n\r\n  mainContentElement.appendChild(tempContact);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onpageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onpageload */ \"./src/onpageload.js\");\n/* harmony import */ var _aboutus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus */ \"./src/aboutus.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\n\r\nconst mainContentElement = document.getElementById('content');\r\nwindow.onload = (0,_onpageload__WEBPACK_IMPORTED_MODULE_0__.onPageLoad)(mainContentElement);\r\n\r\n// Utility functions.\r\nfunction wipeExistingContents(parentContainer) {\r\n  let index = parentContainer.childNodes.length - 1\r\n  while(parentContainer.childNodes.length){\r\n    if(parentContainer.childNodes[index].nodeName === 'UL') {\r\n      break;\r\n    }\r\n    else {\r\n      parentContainer.removeChild(parentContainer.lastChild);\r\n    }\r\n    index--;\r\n  }\r\n}\r\n\r\n// Event Listeners.\r\nmainContentElement.addEventListener('click', (e) => {\r\n  const body = document.querySelector('body');\r\n  console.log(body);\r\n  if (e.target && e.target.matches('li#menu-item1')) {\r\n    wipeExistingContents(mainContentElement);\r\n    body.classList.remove('bg-dark');\r\n    body.classList.add('bg');\r\n    (0,_aboutus__WEBPACK_IMPORTED_MODULE_1__.createAboutUsContent)(mainContentElement);\r\n  }\r\n  else if (e.target && e.target.matches('li#menu-item2')) {\r\n    wipeExistingContents(mainContentElement);\r\n    body.classList.remove('bg');\r\n    body.classList.add('bg-dark');\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenuContent)(mainContentElement);\r\n  }\r\n  else if (e.target && e.target.matches('li#menu-item3')) {\r\n    wipeExistingContents(mainContentElement);\r\n    body.classList.remove('bg-dark');\r\n    body.classList.add('bg');\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContactContent)(mainContentElement);\r\n  }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuContent\": () => (/* binding */ createMenuContent)\n/* harmony export */ });\nconst createMenuContent = (mainContentElement) => {\r\n  const tempMenu = document.createDocumentFragment();\r\n\r\n  const menuDiv = document.createElement('div');\r\n  tempMenu.appendChild(menuDiv);\r\n  menuDiv.setAttribute('class' , 'menu-content');\r\n  createMenuList(menuDiv);\r\n\r\n  mainContentElement.appendChild(tempMenu);\r\n}\r\n\r\nfunction createMenuList(parentElement) {\r\n  const menuList = ['Beef Steak', 'Chicken Katsu', \"G'Special Burger\", \"Smoky Salmon\"];\r\n  for (let index = 0; index < menuList.length; index++) {\r\n    const item = document.createElement('div');\r\n    item.setAttribute('class' , 'list-item');\r\n    item.setAttribute('id' , `list-item${index + 1}`);\r\n\r\n    const p = document.createElement('p');\r\n    p.appendChild(document.createTextNode(menuList[index]));\r\n\r\n    item.appendChild(p);\r\n    parentElement.appendChild(item);\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/onpageload.js":
/*!***************************!*\
  !*** ./src/onpageload.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onPageLoad\": () => (/* binding */ onPageLoad)\n/* harmony export */ });\nconst onPageLoad = (mainContentElement) => {\r\n  const body = document.querySelector('body');\r\n  body.setAttribute('class' , 'bg');\r\n  mainContentElement.setAttribute('class' , 'content');\r\n\r\n  const tempContainer = document.createDocumentFragment();\r\n\r\n  const restaurantName = tempContainer.appendChild(document.createElement('h1'));\r\n  restaurantName.appendChild(document.createTextNode('G`Food Garage'));\r\n\r\n  const navigation = tempContainer.appendChild(document.createElement('ul'));\r\n  navigation.setAttribute('id', 'menu-bar');\r\n  navigation.setAttribute('class', 'menu-bar');\r\n  createNavBarLinks(navigation);\r\n\r\n  mainContentElement.appendChild(tempContainer);\r\n};\r\n\r\nfunction createNavBarLinks(parentElement) {\r\n  const navBarLinks = ['About', 'Menu', 'Contact'];\r\n  for (let index = 0; index < navBarLinks.length; index++) {\r\n    const menu = document.createElement('li');\r\n    menu.setAttribute('class' , 'menu-item');\r\n    menu.setAttribute('id' , `menu-item${index + 1}`);\r\n    menu.appendChild(document.createTextNode(navBarLinks[index]));\r\n    parentElement.appendChild(menu);\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/onpageload.js?");

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