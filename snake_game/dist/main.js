/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_ops/create_title.js":
/*!*************************************!*\
  !*** ./src/dom_ops/create_title.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTitleH1\": () => (/* binding */ createTitleH1)\n/* harmony export */ });\n\nfunction createTitleH1(strTitle) {\n  let titleDivContain = document.createElement('div');\n  let h1 = document.createElement('h1');\n  h1.textContent = strTitle;\n  titleDivContain.appendChild(h1);\n  titleDivContain.classList.add('main-title-page');\n  return titleDivContain;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tX29wcy9jcmVhdGVfdGl0bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNzQjtBQUd0QixTQUFTQSxhQUFhQSxDQUFDQyxRQUFRLEVBQUU7RUFDN0IsSUFBSUMsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkQsSUFBSUMsRUFBRSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDckNDLEVBQUUsQ0FBQ0MsV0FBVyxHQUFHTCxRQUFRO0VBQ3pCQyxlQUFlLENBQUNLLFdBQVcsQ0FBQ0YsRUFBRSxDQUFDO0VBQy9CSCxlQUFlLENBQUNNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBRWhELE9BQU9QLGVBQWU7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL2RvbV9vcHMvY3JlYXRlX3RpdGxlLmpzPzRjNGIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCB7IGNyZWF0ZVRpdGxlSDEgfVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlSDEoc3RyVGl0bGUpIHtcclxuICAgIGxldCB0aXRsZURpdkNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoMS50ZXh0Q29udGVudCA9IHN0clRpdGxlO1xyXG4gICAgdGl0bGVEaXZDb250YWluLmFwcGVuZENoaWxkKGgxKTtcclxuICAgIHRpdGxlRGl2Q29udGFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLXRpdGxlLXBhZ2UnKTtcclxuXHJcbiAgICByZXR1cm4gdGl0bGVEaXZDb250YWluO1xyXG59Il0sIm5hbWVzIjpbImNyZWF0ZVRpdGxlSDEiLCJzdHJUaXRsZSIsInRpdGxlRGl2Q29udGFpbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImgxIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/dom_ops/create_title.js\n");

/***/ }),

/***/ "./src/navigator.js":
/*!**************************!*\
  !*** ./src/navigator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navigator\": () => (/* binding */ Navigator)\n/* harmony export */ });\n/* harmony import */ var _pages_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home_page */ \"./src/pages/home_page.js\");\n/* harmony import */ var _pages_play_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/play_page */ \"./src/pages/play_page.js\");\n\n\n\nclass Navigator {\n  // {Класс: {\"имя экземпляра класса\": [\"название заголовка раздела\", [\"id элем. списка строчного меню\"]]}}\n  static detailsInstances = {\n    HomePage: {\n      'homePage': ['Главная страница', 'ico_home']\n    },\n    PlayPage: {\n      'playPage': ['Начать игру', 'ico_play']\n    }\n  };\n  static classes = {\n    HomePage: _pages_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,\n    PlayPage: _pages_play_page__WEBPACK_IMPORTED_MODULE_1__.PlayPage\n  };\n  constructor(idContainer) {\n    this.container = document.getElementById(idContainer);\n  }\n  init() {\n    for (let [cls, details] of Object.entries(Navigator.detailsInstances)) {\n      let [nameInstance, detailTitle] = Object.entries(details)[0];\n      let instancePage = new Navigator.classes[cls](detailTitle[0]); // Это не пайтон!\n      instancePage.container = this.container;\n      let clickPageIco = document.getElementById(detailTitle[1]);\n      clickPageIco.addEventListener('click', instancePage.makeContent.bind(instancePage)); // связать с this\n      this[nameInstance] = instancePage;\n    }\n    this.homePage.makeContent();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbmF2aWdhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM2QztBQUNBO0FBQ3ZCO0FBRXRCLE1BQU1FLFNBQVMsQ0FBQztFQUVaO0VBQ0EsT0FBT0MsZ0JBQWdCLEdBQUc7SUFDdEJILFFBQVEsRUFBRTtNQUFDLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFVBQVU7SUFBQyxDQUFDO0lBQ3hEQyxRQUFRLEVBQUU7TUFBQyxVQUFVLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVTtJQUFDO0VBQ3RELENBQUM7RUFFRCxPQUFPRyxPQUFPLEdBQUc7SUFDYkosUUFBUSxFQUFFQSxzREFBUTtJQUNsQkMsUUFBUSxFQUFFQSxzREFBUUE7RUFDdEIsQ0FBQztFQUVESSxXQUFXQSxDQUFDQyxXQUFXLEVBQUU7SUFDckIsSUFBSSxDQUFDQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDSCxXQUFXLENBQUM7RUFDekQ7RUFFQUksSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsS0FBSyxJQUFJLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxDQUFDLElBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDWixTQUFTLENBQUNDLGdCQUFnQixDQUFDLEVBQUU7TUFDbkUsSUFBSSxDQUFDWSxZQUFZLEVBQUVDLFdBQVcsQ0FBQyxHQUFHSCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BRTVELElBQUlLLFlBQVksR0FBRyxJQUFJZixTQUFTLENBQUNFLE9BQU8sQ0FBQ08sR0FBRyxDQUFDLENBQUNLLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDL0RDLFlBQVksQ0FBQ1YsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUztNQUN2QyxJQUFJVyxZQUFZLEdBQUdWLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDTyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDMURFLFlBQVksQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFRixZQUFZLENBQUNHLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDSixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUU7TUFDdEYsSUFBSSxDQUFDRixZQUFZLENBQUMsR0FBR0UsWUFBWTtJQUNyQztJQUVBLElBQUksQ0FBQ0ssUUFBUSxDQUFDRixXQUFXLENBQUMsQ0FBQztFQUMvQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9uYXZpZ2F0b3IuanM/MzI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9ob21lX3BhZ2VcIjtcclxuaW1wb3J0IHsgUGxheVBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9wbGF5X3BhZ2VcIjtcclxuZXhwb3J0ICB7IE5hdmlnYXRvciB9O1xyXG5cclxuY2xhc3MgTmF2aWdhdG9yIHtcclxuXHJcbiAgICAvLyB70JrQu9Cw0YHRgToge1wi0LjQvNGPINGN0LrQt9C10LzQv9C70Y/RgNCwINC60LvQsNGB0YHQsFwiOiBbXCLQvdCw0LfQstCw0L3QuNC1INC30LDQs9C+0LvQvtCy0LrQsCDRgNCw0LfQtNC10LvQsFwiLCBbXCJpZCDRjdC70LXQvC4g0YHQv9C40YHQutCwINGB0YLRgNC+0YfQvdC+0LPQviDQvNC10L3RjlwiXV19fVxyXG4gICAgc3RhdGljIGRldGFpbHNJbnN0YW5jZXMgPSB7XHJcbiAgICAgICAgSG9tZVBhZ2U6IHsnaG9tZVBhZ2UnOiBbJ9CT0LvQsNCy0L3QsNGPINGB0YLRgNCw0L3QuNGG0LAnLCAnaWNvX2hvbWUnXX0sXHJcbiAgICAgICAgUGxheVBhZ2U6IHsncGxheVBhZ2UnOiBbJ9Cd0LDRh9Cw0YLRjCDQuNCz0YDRgycsICdpY29fcGxheSddfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGFzc2VzID0ge1xyXG4gICAgICAgIEhvbWVQYWdlOiBIb21lUGFnZSxcclxuICAgICAgICBQbGF5UGFnZTogUGxheVBhZ2VcclxuICAgIH07ICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkQ29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZENvbnRhaW5lcik7ICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IFtjbHMsIGRldGFpbHNdIG9mIE9iamVjdC5lbnRyaWVzKE5hdmlnYXRvci5kZXRhaWxzSW5zdGFuY2VzKSkge1xyXG4gICAgICAgICAgICBsZXQgW25hbWVJbnN0YW5jZSwgZGV0YWlsVGl0bGVdID0gT2JqZWN0LmVudHJpZXMoZGV0YWlscylbMF07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgaW5zdGFuY2VQYWdlID0gbmV3IE5hdmlnYXRvci5jbGFzc2VzW2Nsc10oZGV0YWlsVGl0bGVbMF0pOyAvLyDQrdGC0L4g0L3QtSDQv9Cw0LnRgtC+0L0hXHJcbiAgICAgICAgICAgIGluc3RhbmNlUGFnZS5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcclxuICAgICAgICAgICAgbGV0IGNsaWNrUGFnZUljbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRldGFpbFRpdGxlWzFdKTtcclxuICAgICAgICAgICAgY2xpY2tQYWdlSWNvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5zdGFuY2VQYWdlLm1ha2VDb250ZW50LmJpbmQoaW5zdGFuY2VQYWdlKSk7ICAvLyDRgdCy0Y/Qt9Cw0YLRjCDRgSB0aGlzXHJcbiAgICAgICAgICAgIHRoaXNbbmFtZUluc3RhbmNlXSA9IGluc3RhbmNlUGFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ob21lUGFnZS5tYWtlQ29udGVudCgpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiUGxheVBhZ2UiLCJOYXZpZ2F0b3IiLCJkZXRhaWxzSW5zdGFuY2VzIiwiY2xhc3NlcyIsImNvbnN0cnVjdG9yIiwiaWRDb250YWluZXIiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdCIsImNscyIsImRldGFpbHMiLCJPYmplY3QiLCJlbnRyaWVzIiwibmFtZUluc3RhbmNlIiwiZGV0YWlsVGl0bGUiLCJpbnN0YW5jZVBhZ2UiLCJjbGlja1BhZ2VJY28iLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZUNvbnRlbnQiLCJiaW5kIiwiaG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/navigator.js\n");

/***/ }),

/***/ "./src/pages/abstract_page_cls.js":
/*!****************************************!*\
  !*** ./src/pages/abstract_page_cls.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ABCContentPage\": () => (/* binding */ ABCContentPage)\n/* harmony export */ });\nclass ABCContentPage {\n  constructor() {\n    if (new.target === ABCContentPage) {\n      throw new TypeError(\"Cannot construct AbstractClass instances directly\");\n    }\n  }\n  makeContent(event) {\n    throw new Error(\"You must implement the abstractMethod\");\n  }\n  deleteContent() {\n    throw new Error(\"You must implement the abstractMethod\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJzdHJhY3RfcGFnZV9jbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLGNBQWMsQ0FBQztFQUN4QkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSUMsR0FBRyxDQUFDQyxNQUFNLEtBQUtILGNBQWMsRUFBRTtNQUMvQixNQUFNLElBQUlJLFNBQVMsQ0FBQyxtREFBbUQsQ0FBQztJQUM1RTtFQUNKO0VBRUFDLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNmLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDO0VBQzVEO0VBRUFDLGFBQWFBLENBQUEsRUFBRztJQUNaLE1BQU0sSUFBSUQsS0FBSyxDQUFDLHVDQUF1QyxDQUFDO0VBQzVEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmFrZV9nYW1lLy4vc3JjL3BhZ2VzL2Fic3RyYWN0X3BhZ2VfY2xzLmpzPzc0MDciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgY2xhc3MgQUJDQ29udGVudFBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKG5ldy50YXJnZXQgPT09IEFCQ0NvbnRlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY29uc3RydWN0IEFic3RyYWN0Q2xhc3MgaW5zdGFuY2VzIGRpcmVjdGx5XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlQ29udGVudChldmVudCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGltcGxlbWVudCB0aGUgYWJzdHJhY3RNZXRob2RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ29udGVudCgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBpbXBsZW1lbnQgdGhlIGFic3RyYWN0TWV0aG9kXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJBQkNDb250ZW50UGFnZSIsImNvbnN0cnVjdG9yIiwibmV3IiwidGFyZ2V0IiwiVHlwZUVycm9yIiwibWFrZUNvbnRlbnQiLCJldmVudCIsIkVycm9yIiwiZGVsZXRlQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/abstract_page_cls.js\n");

/***/ }),

/***/ "./src/pages/content_page.js":
/*!***********************************!*\
  !*** ./src/pages/content_page.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContentPage\": () => (/* binding */ ContentPage),\n/* harmony export */   \"delDecorator\": () => (/* binding */ delDecorator)\n/* harmony export */ });\n/* harmony import */ var _abstract_page_cls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract_page_cls */ \"./src/pages/abstract_page_cls.js\");\n\nclass ContentPage extends _abstract_page_cls__WEBPACK_IMPORTED_MODULE_0__.ABCContentPage {\n  constructor(titleStr) {\n    super();\n    this.container = null;\n    this.title = titleStr;\n  }\n  makeContent(event) {}\n  deleteContent() {\n    for (let domElem of Array.from(this.container.children)) {\n      this.container.removeChild(domElem);\n    }\n  }\n}\n\n// -------------------- Decorator ----------------------------------\n\nfunction delDecorator(makeMethod) {\n  return function (evn) {\n    this.deleteContent();\n    makeMethod.call(this, evn); // c контекстом\n  };\n}\n\n// -----------------------------------------------------------------//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29udGVudF9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxRDtBQUU5QyxNQUFNQyxXQUFXLFNBQVNELDhEQUFjLENBQUM7RUFDNUNFLFdBQVdBLENBQUNDLFFBQVEsRUFBRTtJQUNsQixLQUFLLENBQUMsQ0FBQztJQUNQLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUk7SUFDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUdGLFFBQVE7RUFDekI7RUFFQUcsV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7RUFFcEJDLGFBQWFBLENBQUEsRUFBRztJQUNaLEtBQUssSUFBSUMsT0FBTyxJQUFJQyxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNQLFNBQVMsQ0FBQ1EsUUFBUSxDQUFDLEVBQUU7TUFDckQsSUFBSSxDQUFDUixTQUFTLENBQUNTLFdBQVcsQ0FBQ0osT0FBTyxDQUFDO0lBQ3ZDO0VBQ0o7QUFFSjs7QUFFQTs7QUFFTyxTQUFTSyxZQUFZQSxDQUFDQyxVQUFVLEVBQUU7RUFDckMsT0FBTyxVQUFTQyxHQUFHLEVBQUU7SUFDakIsSUFBSSxDQUFDUixhQUFhLENBQUMsQ0FBQztJQUNwQk8sVUFBVSxDQUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFRCxHQUFHLENBQUMsQ0FBQyxDQUFFO0VBQ2pDLENBQUM7QUFDTDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NuYWtlX2dhbWUvLi9zcmMvcGFnZXMvY29udGVudF9wYWdlLmpzPzkxNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJDQ29udGVudFBhZ2UgfSBmcm9tIFwiLi9hYnN0cmFjdF9wYWdlX2Nsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlIGV4dGVuZHMgQUJDQ29udGVudFBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGVTdHIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVTdHI7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZUNvbnRlbnQoZXZlbnQpIHt9XHJcblxyXG4gICAgZGVsZXRlQ29udGVudCgpIHtcclxuICAgICAgICBmb3IgKGxldCBkb21FbGVtIG9mIEFycmF5LmZyb20odGhpcy5jb250YWluZXIuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKGRvbUVsZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIERlY29yYXRvciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsRGVjb3JhdG9yKG1ha2VNZXRob2QpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihldm4pIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZUNvbnRlbnQoKTtcclxuICAgICAgICBtYWtlTWV0aG9kLmNhbGwodGhpcywgZXZuKTsgIC8vIGMg0LrQvtC90YLQtdC60YHRgtC+0LxcclxuICAgIH07XHJcbn0gXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSJdLCJuYW1lcyI6WyJBQkNDb250ZW50UGFnZSIsIkNvbnRlbnRQYWdlIiwiY29uc3RydWN0b3IiLCJ0aXRsZVN0ciIsImNvbnRhaW5lciIsInRpdGxlIiwibWFrZUNvbnRlbnQiLCJldmVudCIsImRlbGV0ZUNvbnRlbnQiLCJkb21FbGVtIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJyZW1vdmVDaGlsZCIsImRlbERlY29yYXRvciIsIm1ha2VNZXRob2QiLCJldm4iLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/content_page.js\n");

/***/ }),

/***/ "./src/pages/home_page.js":
/*!********************************!*\
  !*** ./src/pages/home_page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomePage\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var _content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content_page */ \"./src/pages/content_page.js\");\n/* harmony import */ var _dom_ops_create_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom_ops/create_title */ \"./src/dom_ops/create_title.js\");\n\n\nclass HomePage extends _content_page__WEBPACK_IMPORTED_MODULE_0__.ContentPage {\n  constructor(title) {\n    super(title);\n    this.makeContent = (0,_content_page__WEBPACK_IMPORTED_MODULE_0__.delDecorator)(this.makeContent);\n  }\n  makeContent(event) {\n    let titleObj = _dom_ops_create_title__WEBPACK_IMPORTED_MODULE_1__.createTitleH1.call(this, this.title);\n    this.container.appendChild(titleObj);\n  }\n  deleteContent() {\n    super.deleteContent();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZV9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUNIO0FBRWpELE1BQU1HLFFBQVEsU0FBU0gsc0RBQVcsQ0FBQztFQUV0Q0ksV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFO0lBQ2YsS0FBSyxDQUFDQSxLQUFLLENBQUM7SUFDWixJQUFJLENBQUNDLFdBQVcsR0FBR0wsMkRBQVksQ0FBQyxJQUFJLENBQUNLLFdBQVcsQ0FBQztFQUNyRDtFQUVBQSxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7SUFDZixJQUFJQyxRQUFRLEdBQUdOLHFFQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUNHLEtBQUssQ0FBQztJQUNuRCxJQUFJLENBQUNLLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDSCxRQUFRLENBQUM7RUFDeEM7RUFFQUksYUFBYUEsQ0FBQSxFQUFHO0lBQ1osS0FBSyxDQUFDQSxhQUFhLENBQUMsQ0FBQztFQUN6QjtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9wYWdlcy9ob21lX3BhZ2UuanM/ODkzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZW50UGFnZSwgZGVsRGVjb3JhdG9yIH0gZnJvbSBcIi4vY29udGVudF9wYWdlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRpdGxlSDEgfSBmcm9tIFwiLi4vZG9tX29wcy9jcmVhdGVfdGl0bGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIENvbnRlbnRQYWdlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHN1cGVyKHRpdGxlKTtcclxuICAgICAgICB0aGlzLm1ha2VDb250ZW50ID0gZGVsRGVjb3JhdG9yKHRoaXMubWFrZUNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VDb250ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRpdGxlT2JqID0gY3JlYXRlVGl0bGVIMS5jYWxsKHRoaXMsIHRoaXMudGl0bGUpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDb250ZW50KCkge1xyXG4gICAgICAgIHN1cGVyLmRlbGV0ZUNvbnRlbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sIm5hbWVzIjpbIkNvbnRlbnRQYWdlIiwiZGVsRGVjb3JhdG9yIiwiY3JlYXRlVGl0bGVIMSIsIkhvbWVQYWdlIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsIm1ha2VDb250ZW50IiwiZXZlbnQiLCJ0aXRsZU9iaiIsImNhbGwiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImRlbGV0ZUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home_page.js\n");

/***/ }),

/***/ "./src/pages/play_page.js":
/*!********************************!*\
  !*** ./src/pages/play_page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayPage\": () => (/* binding */ PlayPage)\n/* harmony export */ });\n/* harmony import */ var _content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content_page */ \"./src/pages/content_page.js\");\n/* harmony import */ var _dom_ops_create_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom_ops/create_title */ \"./src/dom_ops/create_title.js\");\n\n\nclass PlayPage extends _content_page__WEBPACK_IMPORTED_MODULE_0__.ContentPage {\n  constructor(title) {\n    super(title);\n    this.makeContent = (0,_content_page__WEBPACK_IMPORTED_MODULE_0__.delDecorator)(this.makeContent);\n  }\n  makeContent(event) {\n    let titleObj = _dom_ops_create_title__WEBPACK_IMPORTED_MODULE_1__.createTitleH1.call(this, this.title);\n    this.container.appendChild(titleObj);\n  }\n  deleteContent() {\n    super.deleteContent();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxheV9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUNIO0FBRWpELE1BQU1HLFFBQVEsU0FBU0gsc0RBQVcsQ0FBQztFQUV0Q0ksV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFO0lBQ2YsS0FBSyxDQUFDQSxLQUFLLENBQUM7SUFDWixJQUFJLENBQUNDLFdBQVcsR0FBR0wsMkRBQVksQ0FBQyxJQUFJLENBQUNLLFdBQVcsQ0FBQztFQUNyRDtFQUVBQSxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7SUFDZixJQUFJQyxRQUFRLEdBQUdOLHFFQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUNHLEtBQUssQ0FBQztJQUNuRCxJQUFJLENBQUNLLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDSCxRQUFRLENBQUM7RUFDeEM7RUFFQUksYUFBYUEsQ0FBQSxFQUFHO0lBQ1osS0FBSyxDQUFDQSxhQUFhLENBQUMsQ0FBQztFQUN6QjtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9wYWdlcy9wbGF5X3BhZ2UuanM/Y2FjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZW50UGFnZSwgZGVsRGVjb3JhdG9yIH0gZnJvbSBcIi4vY29udGVudF9wYWdlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRpdGxlSDEgfSBmcm9tIFwiLi4vZG9tX29wcy9jcmVhdGVfdGl0bGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5UGFnZSBleHRlbmRzIENvbnRlbnRQYWdlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHN1cGVyKHRpdGxlKTtcclxuICAgICAgICB0aGlzLm1ha2VDb250ZW50ID0gZGVsRGVjb3JhdG9yKHRoaXMubWFrZUNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VDb250ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRpdGxlT2JqID0gY3JlYXRlVGl0bGVIMS5jYWxsKHRoaXMsIHRoaXMudGl0bGUpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDb250ZW50KCkge1xyXG4gICAgICAgIHN1cGVyLmRlbGV0ZUNvbnRlbnQoKTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sIm5hbWVzIjpbIkNvbnRlbnRQYWdlIiwiZGVsRGVjb3JhdG9yIiwiY3JlYXRlVGl0bGVIMSIsIlBsYXlQYWdlIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsIm1ha2VDb250ZW50IiwiZXZlbnQiLCJ0aXRsZU9iaiIsImNhbGwiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImRlbGV0ZUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/play_page.js\n");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigator */ \"./src/navigator.js\");\n\nconst navigation = new _navigator__WEBPACK_IMPORTED_MODULE_0__.Navigator(\"content\");\nnavigation.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc25ha2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBd0M7QUFFeEMsTUFBTUMsVUFBVSxHQUFHLElBQUlELGlEQUFTLENBQUMsU0FBUyxDQUFDO0FBQzNDQyxVQUFVLENBQUNDLElBQUksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25ha2VfZ2FtZS8uL3NyYy9zbmFrZS5qcz9mMDg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gXCIuL25hdmlnYXRvclwiO1xyXG5cclxuY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0b3IoXCJjb250ZW50XCIpO1xyXG5uYXZpZ2F0aW9uLmluaXQoKTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIk5hdmlnYXRvciIsIm5hdmlnYXRpb24iLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/snake.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/snake.js");
/******/ 	
/******/ })()
;