(function() {
var holocronModule_nasa_header =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = __CLIENT_HOLOCRON_MODULE_MAP__.modules['nasa-header'].baseUrl;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-intl/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-intl/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {try {
  module.exports = global.getTenantRootModule().appConfig.providedExternals['react-intl'].module;
} catch (error) {
  const errorGettingExternal = new Error('Failed to get external react-intl from root module');
  errorGettingExternal.shouldBlockModuleReload = false;
  throw errorGettingExternal;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./src/components/NasaHeader.jsx":
/*!***************************************!*\
  !*** ./src/components/NasaHeader.jsx ***!
  \***************************************/
/*! exports provided: NasaHeader, mapDispatchToProps, mapStateToProps, loadModuleData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NasaHeader", function() { return NasaHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDispatchToProps", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModuleData", function() { return loadModuleData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @americanexpress/one-app-ducks */ "@americanexpress/one-app-ducks");
/* harmony import */ var _americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);






const NasaHeader = _ref => {
  let {
    languageData,
    localeName
  } = _ref;
  // Read about loading async data:
  // https://github.com/americanexpress/one-app/blob/main/docs/api/modules/Loading-Data.md
  // quick and dirty solution - implement based on your use case
  if (languageData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["IntlProvider"], {
      locale: localeName,
      messages: languageData
    }, "Header");
  }
  return null;
};
NasaHeader.propTypes = {
  languageData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired,
  localeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
const mapDispatchToProps = dispatch => ({
  switchLanguage: async _ref2 => {
    let {
      target
    } = _ref2;
    await dispatch(Object(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__["updateLocale"])(target.value));
    await dispatch(Object(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__["loadLanguagePack"])('nasa-header', {
      fallbackLocale: 'en-US'
    }));
  }
});
const mapStateToProps = state => {
  const localeName = state.getIn(['intl', 'activeLocale']);
  const languagePack = state.getIn(['intl', 'languagePacks', localeName, 'nasa-header'], Object(immutable__WEBPACK_IMPORTED_MODULE_5__["fromJS"])({})).toJS();
  return {
    languageData: languagePack && languagePack.data ? languagePack.data : {},
    localeName
  };
};
const loadModuleData = _ref3 => {
  let {
    store: {
      dispatch
    }
  } = _ref3;
  return dispatch(Object(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__["loadLanguagePack"])('nasa-header', {
    fallbackLocale: 'en-US'
  }));
};
NasaHeader.holocron = {
  name: 'nasa-header',
  loadModuleData
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(NasaHeader));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NasaHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NasaHeader */ "./src/components/NasaHeader.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_components_NasaHeader__WEBPACK_IMPORTED_MODULE_0__["default"]);
;
if (false) {}
;
if (false) {}

/***/ }),

/***/ "@americanexpress/one-app-ducks":
/*!***********************************************************************************!*\
  !*** external {"var":"OneAppDucks","commonjs2":"@americanexpress/one-app-ducks"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = OneAppDucks;

/***/ }),

/***/ "immutable":
/*!************************************************************!*\
  !*** external {"var":"Immutable","commonjs2":"immutable"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Immutable;

/***/ }),

/***/ "prop-types":
/*!*************************************************************!*\
  !*** external {"var":"PropTypes","commonjs2":"prop-types"} ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!****************************************************!*\
  !*** external {"var":"React","commonjs2":"react"} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-redux":
/*!***************************************************************!*\
  !*** external {"var":"ReactRedux","commonjs2":"react-redux"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ })

/******/ })["default"];
Holocron.registerModule("nasa-header", holocronModule_nasa_header);})();
//# sourceMappingURL=nasa-header.browser.js.map