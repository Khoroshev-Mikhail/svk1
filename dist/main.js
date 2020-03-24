/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/Yosemite.jpg":
/*!**************************!*\
  !*** ./img/Yosemite.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f1af9abeb974b1db1cc9dc238d6bb77a.jpg\");\n\n//# sourceURL=webpack:///./img/Yosemite.jpg?");

/***/ }),

/***/ "./img/sunset.jpg":
/*!************************!*\
  !*** ./img/sunset.jpg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2967c00dc9ad4c9bf2d1270309c07821.jpg\");\n\n//# sourceURL=webpack:///./img/sunset.jpg?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_Yosemite_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Yosemite.jpg */ \"./img/Yosemite.jpg\");\n/* harmony import */ var _img_sunset_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/sunset.jpg */ \"./img/sunset.jpg\");\n\n\n //Task 3\n//При прокрутке, шапка страницы должна фиксироваться вверху окна, при этом высота шапки должна плавно уменьшиться до 70 пикселей, \n//логотип должен пропорционально масштабироваться.\n\nfunction changeHead() {\n  if (document.documentElement.clientWidth >= 768) {\n    var scroll = window.pageYOffset; //Расстояние от верхнего пикселя экрана до верха страницы\n\n    var hg = 160 - scroll; // Задаем в переменную hg высоту шапки, которая плавно уменьшается с 160 до 70 (получается эффект сплющивания)\n\n    var header = document.querySelector('header');\n    header.style.top = scroll + 'px'; //Фиксируем шапку в верхней части экрана\n\n    header.style.height = hg + 'px'; //Присваиваем высоту шапки их меременной hg\n\n    if (scroll >= 90 && hg <= 70) {\n      //70 - минимальная высота шапки\n      header.style.height = 70 + 'px';\n    }\n\n    var logo = document.querySelector('svg'); //Присваиваем переменной logo - dom элемент svg(логотип)\n\n    var logoHg = header.offsetHeight / 160 * 120; //Получаем высоту шапки в реальном моменте, сравниваем полученное значение с изначальной высотой шапки, получаем пропорции. Пропорции умножаем на начальную высоту логотипа.\n\n    logo.style.height = logoHg + 'px'; //Присваиваем значение высоты логотипу относительно высоты шапки сайта\n    //На случай если ширина поменяется без перезагрузки странцы\n\n    header.style.paddingTop = 20 + 'px';\n    header.style.paddingBottom = 20 + 'px';\n  } else {\n    var _scroll = window.pageYOffset; //Расстояние от верхнего пикселя экрана до верха страницы\n\n    var padding = _scroll / 2; // Величина на которую будут уменьшаться паддинги\n\n    var _header = document.querySelector('header');\n\n    _header.style.top = _scroll + 'px'; //Фиксируем шапку в верхней части экрана\n    //Сейчас высота шапки получается 84px\n    //Уменьшим до 70 за счёт padding-bottom и padding-top которые сейчас по 20px \n\n    _header.style.paddingTop = 20 - padding + 'px';\n    _header.style.paddingBottom = 20 - padding + 'px';\n\n    if (_scroll >= 14) {\n      //Если скррол больше 14 значит с каждого паддинга отняли по 7 и высота шапки становится 70 - минимальная высота шапки\n      _header.style.paddingTop = 13 + 'px';\n      _header.style.paddingBottom = 13 + 'px';\n    } // header.style.height = 70 + 'px'; нужно допилить, при ресайзе криво встаёт!\n\n  }\n}\n\nwindow.addEventListener('scroll', changeHead);\nwindow.addEventListener('resize', changeHead); // Если поменяется ширина экрана без перезагруки\n//End of Task3\n//Task 4\n//Task 4-1 При ширине экрана менее 768 пикселей, табы должны превращаться в выпадающий список\n//Task 4-2 Заголовок активного таба должен отображаться в качестве выбранного пункта списка\n//Task 4-3 Желательно придумать красивую анимацию разворачивания списка\n\nvar list = document.querySelectorAll('.js-tab-header'); //Получаем все элементы списка\n\nfor (var i = 0; i < list.length; i++) {\n  list[i].onclick = listShow; //На каждый элемент вешаем функцию\n}\n\nfunction listShow() {\n  var id = this.getAttribute('data'); //В атрибуте \"data\" лежит значение = id элемента который нужно отобразить\n\n  for (var _i = 0; _i < list.length; _i++) {\n    if (list[_i].classList.contains('active')) {\n      //Если у какого-либо элемента есть класс active\n      list[_i].classList.remove('active'); //Удаляем его\n\n    }\n  }\n\n  this.classList.add('active'); //На элемент по которому произвоели клик вешаем active\n\n  var content = document.querySelectorAll('.js-tab-content'); //Получаем \"блоки\" которые нужно отобразить\n\n  for (var _i2 = 0; _i2 < content.length; _i2++) {\n    if (content[_i2].classList.contains('active')) {\n      //Если у какого-либо элемента есть класс active\n      content[_i2].classList.remove('active'); //Удаляем его\n\n    }\n  }\n\n  document.querySelector(\"#\".concat(id)).classList.add('active'); //Присваиваем класс active элементу с соответствующим id (который хранится в атрибуте data у элементов в навигации)\n} //End of Task4\n//Task 5\n//Добавить таб с блоком, внутри которого должно находиться изображение (любое, на ваше усмотрение), превышающее этот блок по размерам.\n//У блока должен быть установлен overflow: hidden\n//Нужен механизм перетаскивания изображения мышью в пределах блока, чтобы увидеть скрытые части картинки.\n\n\nvar inner = document.querySelector('.inner');\nvar over = document.querySelector('.over');\ninner.onclick = moveImg;\nvar click = 0;\n\nfunction moveImg(e) {\n  click = 0;\n  var x = e.x;\n  var y = e.y;\n  var leftOut = inner.offsetLeft;\n  var topOut = inner.offsetTop;\n  inner.style.cursor = 'move';\n\n  inner.onmousemove = function (e) {\n    if (click == 1) {\n      click = 0;\n\n      inner.onmousemove = function () {}; // Очистим событие \n\n    }\n\n    var left = e.clientX - x;\n    var top = e.clientY - y;\n\n    if (left + leftOut >= over.offsetWidth - inner.offsetWidth && left + leftOut <= 0) {\n      inner.style.left = left + leftOut + 'px';\n    }\n\n    if (top + topOut >= over.offsetHeight - inner.offsetHeight && top + topOut <= 0) {\n      inner.style.top = top + topOut + 'px';\n    }\n  }; //При клике по изображению отключаем функцию перемещения\n\n\n  inner.onclick = function () {\n    click = 1;\n    inner.onclick = moveImg;\n    inner.style.cursor = 'pointer';\n  }; //При выходе мышкой за пределы изображения так же выключаем функцию перемещения\n\n\n  inner.onmouseout = function () {\n    click = 1;\n    inner.onclick = moveImg;\n    inner.style.cursor = 'pointer';\n  };\n} //Task 6\n//Добавить ещё один таб с блоком, внутри которого должно находиться изображение (любое, на ваше усмотрение), превышающее этот блок по размерам.\n//У блока должен быть установлен overflow: hidden\n//Нужен механизм плавного перемещения изображения по наведению мышкой в пределах блока, чтобы увидеть скрытые части картинки \n//(Навели в правую часть контейнера - увидели правую часть изображения).\n\n\nvar over2 = document.querySelector('.over2');\nvar inner2 = document.querySelector('.inner2');\nvar inter; //Чтобы очищать clearInterval вывожу его в глобальную область видимости\n\nvar enter = 0; //Вводим переменную - счётчик, что бы не запускать функцию несколько раз (без нее дергается изображение)\n//Функция перемещения картинки. Принимает два параметра \n//whereto - left(лево), `any`(вверх) и \n//plus - 'plus' (увеличиваем величину), `any` (уменьшаем величину)\n\nfunction moveImg2(whereto, plus) {\n  var count = 0;\n\n  if (whereto == 'left') {\n    count = inner2.offsetLeft;\n  } else {\n    count = inner2.offsetTop;\n  }\n\n  inter = setInterval(function () {\n    if (plus == 'plus') {\n      count += 1;\n    } else {\n      count -= 1;\n    } //Движение изображение проиходит пока край перемещаемого изображения не поравняется с краем родительского блока (а то улетит далеко далеко, у меня так было один раз)\n\n\n    if (whereto == 'left') {\n      //указзываем это правило для горизонталей\n      if (count >= over2.offsetWidth - inner2.offsetWidth && count <= 0) {\n        inner2.style.left = count + 'px';\n      }\n    } else {\n      //указываем для вертикалей\n      if (count >= over2.offsetHeight - inner2.offsetHeight && count <= 0) {\n        inner2.style.top = count + 'px';\n      }\n    }\n  }, 5);\n  enter = 1;\n  inner2.style.cursor = 'pointer';\n}\n\nover2.onmousemove = function (e) {\n  //Перечисляем при наведении на какие области родителького блока будем запускать функцию moveImg2 в указанными параметрами\n  if (e.pageX >= over2.offsetWidth + over2.offsetLeft - 80 && enter == 0) {\n    moveImg2('left', 'minus');\n  } else if (e.pageX <= over2.offsetLeft + 80 && enter == 0) {\n    moveImg2('left', 'plus');\n  } else if (e.pageY <= over2.offsetTop + 80 && enter == 0) {\n    moveImg2('top', 'plus');\n  } else if (e.pageY >= over2.offsetTop + over2.offsetHeight - 80 && enter == 0) {\n    moveImg2('top', 'minus'); //Указываем области родительского блока, при наведении на которые функция moveImg2 остановится\n  } else if (e.pageX > over2.offsetLeft + 80 && e.pageX < over2.offsetWidth + over2.offsetLeft - 80 && e.pageY >= over2.offsetTop + 80 && e.pageY <= over2.offsetTop + over2.offsetHeight - 80) {\n    clearInterval(inter);\n    enter = 0;\n    inner2.style.cursor = 'default';\n  }\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./index.js?");

/***/ })

/******/ });