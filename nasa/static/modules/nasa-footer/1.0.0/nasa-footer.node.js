module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@americanexpress/one-app-bundler/webpack/loaders/ssr-css-loader/css-base.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@americanexpress/one-app-bundler/webpack/loaders/ssr-css-loader/css-base.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright 2019 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable prefer-arrow-callback, object-shorthand --
uglifyjs expects ES5, disable newer syntax/features */

const styleList = [];

// css-loader gets an array of [module.id, style string]
function push(s) {
  styleList.push(s);
}
function getFullSheet() {
  return styleList.map(function stylesEntry(s) {
    return s[1];
  }).join('\n');
}
module.exports = function getCssBase( /* useSourceMap */
) {
  return {
    push: push,
    getFullSheet: getFullSheet
  };
};

/* eslint-enable prefer-arrow-callback, object-shorthand -- disables require enables */

/***/ }),

/***/ "./node_modules/react-intl/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-intl/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

try {
  module.exports = global.getTenantRootModule().appConfig.providedExternals['react-intl'].module;
} catch (error) {
  const errorGettingExternal = new Error('Failed to get external react-intl from root module');
  errorGettingExternal.shouldBlockModuleReload = false;
  throw errorGettingExternal;
}

/***/ }),

/***/ "./src/components/NasaFooter.jsx":
/*!***************************************!*\
  !*** ./src/components/NasaFooter.jsx ***!
  \***************************************/
/*! exports provided: NasaFooter, mapDispatchToProps, mapStateToProps, loadModuleData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NasaFooter", function() { return NasaFooter; });
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






const NasaFooter = _ref => {
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
    }, "Footer");
  }
  return null;
};
NasaFooter.propTypes = {
  languageData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired,
  localeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
const mapDispatchToProps = dispatch => ({
  switchLanguage: async _ref2 => {
    let {
      target
    } = _ref2;
    await dispatch(Object(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__["updateLocale"])(target.value));
    await dispatch(Object(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__["loadLanguagePack"])('nasa-footer', {
      fallbackLocale: 'en-US'
    }));
  }
});
const mapStateToProps = state => {
  const localeName = state.getIn(['intl', 'activeLocale']);
  const languagePack = state.getIn(['intl', 'languagePacks', localeName, 'nasa-footer'], Object(immutable__WEBPACK_IMPORTED_MODULE_5__["fromJS"])({})).toJS();
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
  return dispatch(Object(_americanexpress_one_app_ducks__WEBPACK_IMPORTED_MODULE_2__["loadLanguagePack"])('nasa-footer', {
    fallbackLocale: 'en-US'
  }));
};
NasaFooter.holocron = {
  name: 'nasa-footer',
  loadModuleData
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(NasaFooter));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NasaFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/NasaFooter */ "./src/components/NasaFooter.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_components_NasaFooter__WEBPACK_IMPORTED_MODULE_0__["default"]);
;
if (true) {
  _components_NasaFooter__WEBPACK_IMPORTED_MODULE_0__["default"].appConfig = Object.assign({}, _components_NasaFooter__WEBPACK_IMPORTED_MODULE_0__["default"].appConfig, {
    appCompatibility: "^5.0.0"
  });
}
;
if (true) {
  _components_NasaFooter__WEBPACK_IMPORTED_MODULE_0__["default"].appConfig = Object.assign({}, _components_NasaFooter__WEBPACK_IMPORTED_MODULE_0__["default"].appConfig, {
    requiredExternals: {
      'react-intl': '^5.10.6'
    }
  });
}
;
_components_NasaFooter__WEBPACK_IMPORTED_MODULE_0__["default"].__holocron_module_meta_data__ = {
  version: '1.0.0'
};
__webpack_exports__.default.ssrStyles = __webpack_require__(/*! ./node_modules/@americanexpress/one-app-bundler/webpack/loaders/ssr-css-loader/css-base.js */ "./node_modules/@americanexpress/one-app-bundler/webpack/loaders/ssr-css-loader/css-base.js")();

/***/ }),

/***/ "@americanexpress/one-app-ducks":
/*!***********************************************************************************!*\
  !*** external {"var":"OneAppDucks","commonjs2":"@americanexpress/one-app-ducks"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@americanexpress/one-app-ducks");

/***/ }),

/***/ "immutable":
/*!************************************************************!*\
  !*** external {"var":"Immutable","commonjs2":"immutable"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "prop-types":
/*!*************************************************************!*\
  !*** external {"var":"PropTypes","commonjs2":"prop-types"} ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!****************************************************!*\
  !*** external {"var":"React","commonjs2":"react"} ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!***************************************************************!*\
  !*** external {"var":"ReactRedux","commonjs2":"react-redux"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ })["default"];
//# sourceMappingURL=nasa-footer.node.js.map