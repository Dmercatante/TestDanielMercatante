/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Event = /*#__PURE__*/function () {\n  function Event() {\n    _classCallCheck(this, Event);\n  }\n\n  _createClass(Event, [{\n    key: \"create\",\n    value: function create(seconds, type_event, message) {\n      this.seconds = seconds;\n      this.type_event = type_event;\n      this.message = message;\n    }\n  }, {\n    key: \"printEvent\",\n    value: function printEvent() {\n      console.log(\"At second %o: type: %o, message: %o\", this.seconds, this.type_event, this.message);\n    }\n  }]);\n\n  return Event;\n}();\n\nexports.default = Event;\n;\n\n//# sourceURL=webpack://sun-media-test-js/./src/Event.js?");

/***/ }),

/***/ "./src/EventManager.js":
/*!*****************************!*\
  !*** ./src/EventManager.js ***!
  \*****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventManager = /*#__PURE__*/function () {\n  function EventManager(events) {\n    _classCallCheck(this, EventManager);\n\n    this.events = events;\n  }\n\n  _createClass(EventManager, [{\n    key: \"run\",\n    value: function run() {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        var _loop = function _loop() {\n          var event = _step.value;\n          setTimeout(function () {\n            event.printEvent();\n          }, event.seconds);\n        };\n\n        for (var _iterator = this.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          _loop();\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }]);\n\n  return EventManager;\n}();\n\nexports.default = EventManager;\n;\n\n//# sourceURL=webpack://sun-media-test-js/./src/EventManager.js?");

/***/ }),

/***/ "./src/EventManagerFactory.js":
/*!************************************!*\
  !*** ./src/EventManagerFactory.js ***!
  \************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = void 0;\n\nvar _EventManager = _interopRequireDefault(__webpack_require__(/*! ./EventManager */ \"./src/EventManager.js\"));\n\nvar _Event = _interopRequireDefault(__webpack_require__(/*! ./Event */ \"./src/Event.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventManagerFactory = /*#__PURE__*/function () {\n  function EventManagerFactory() {\n    _classCallCheck(this, EventManagerFactory);\n  }\n\n  _createClass(EventManagerFactory, null, [{\n    key: \"create\",\n    value: function create(events, types) {\n      var events_list = [];\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var type = _step.value;\n          var _iteratorNormalCompletion2 = true;\n          var _didIteratorError2 = false;\n          var _iteratorError2 = undefined;\n\n          try {\n            for (var _iterator2 = events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n              var e = _step2.value;\n\n              if (e.type == type) {\n                var event = new _Event.default();\n                event.create(e.second, e.type, e.message);\n                events_list.push(event);\n              }\n            }\n          } catch (err) {\n            _didIteratorError2 = true;\n            _iteratorError2 = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n                _iterator2.return();\n              }\n            } finally {\n              if (_didIteratorError2) {\n                throw _iteratorError2;\n              }\n            }\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return new _EventManager.default(events_list);\n    }\n  }]);\n\n  return EventManagerFactory;\n}();\n\nexports.default = EventManagerFactory;\n;\n\n//# sourceURL=webpack://sun-media-test-js/./src/EventManagerFactory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("\n\nvar _EventManagerFactory = _interopRequireDefault(__webpack_require__(/*! ./EventManagerFactory */ \"./src/EventManagerFactory.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar xhttp = new XMLHttpRequest();\n\nvar onReadyStateChange = function onReadyStateChange(onSuccess) {\n  return function () {\n    if (this.readyState === 4 && this.status === 200) {\n      var response = JSON.parse(xhttp.responseText);\n      onSuccess(response);\n    }\n  };\n};\n\nvar onSuccess = function onSuccess(response) {\n  var eventManager = _EventManagerFactory.default.create(response.events, response.types);\n\n  eventManager.run();\n};\n\nxhttp.onreadystatechange = onReadyStateChange(onSuccess);\nxhttp.open(\"GET\", \"https://gist.githubusercontent.com/sunmedia-tv/60036547f107d748386d46f7afb498c0/raw/3b6722589df7cbbff02fd827beca3c05de3d41a6/test.json\", true);\nxhttp.send();\n\n//# sourceURL=webpack://sun-media-test-js/./src/app.js?");
})();

/******/ })()
;