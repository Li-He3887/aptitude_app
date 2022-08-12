module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./public/forward-school-logo-blue.png":
/*!*********************************************!*\
  !*** ./public/forward-school-logo-blue.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/forward-school-logo-blue-c1b32e31d9d635676208b33f392d5e30.png";

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const FSAT_API = (baseURL = "") => {
  const api = axios__WEBPACK_IMPORTED_MODULE_7___default.a.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  }); // Create test

  const createTest = ({
    name,
    email,
    testCode,
    organisation,
    phone = null
  }) => api.post('/tests', _objectSpread({
    name,
    email,
    testCode,
    organisation
  }, phone && {
    phone
  })); // Get test


  const getTest = ({
    testId
  }) => api.get(`/tests/${testId}`); // Start test


  const startTest = ({
    testId
  }) => api.post(`/tests/${testId}/start`); // Answer question


  const answerQuestion = ({
    testId,
    questionNumber,
    answer
  }) => api.post(`/tests/${testId}/questions/${questionNumber}`, {
    answer
  }); // Get test results


  const getTestResults = ({
    testId
  }) => api.get(`/tests/${testId}/results`);

  return {
    createTest,
    getTest,
    startTest,
    answerQuestion,
    getTestResults
  };
};

/* harmony default export */ __webpack_exports__["default"] = (FSAT_API);

/***/ }),

/***/ "./src/components/ResponsiveImage.js":
/*!*******************************************!*\
  !*** ./src/components/ResponsiveImage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FSResponsiveImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
`;

const ResponsiveImage = props => {
  return __jsx(FSResponsiveImage, props);
};

ResponsiveImage.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
ResponsiveImage.defaultProps = {
  width: '100%',
  height: 'auto',
  padding: '0',
  margin: '0',
  borderRadius: '0'
};
/* harmony default export */ __webpack_exports__["default"] = (ResponsiveImage);

/***/ }),

/***/ "./src/config/theme.js":
/*!*****************************!*\
  !*** ./src/config/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
 // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#0054a6'
    },
    secondary: {
      main: '#2da44a'
    },
    background: {
      default: '#fff'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(theme));

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var awesome_phonenumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! awesome-phonenumber */ "awesome-phonenumber");
/* harmony import */ var awesome_phonenumber__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(awesome_phonenumber__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sentry/browser */ "@sentry/browser");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sentry_browser__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../config/theme */ "./src/config/theme.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/error */ "./src/utils/error.js");
/* harmony import */ var _components_ResponsiveImage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/ResponsiveImage */ "./src/components/ResponsiveImage.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../api */ "./src/api.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }














const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_8__["createGlobalStyle"]`
  body {
    background: ${props => props.dark ? _config_theme__WEBPACK_IMPORTED_MODULE_16__["default"].palette.primary.main : _config_theme__WEBPACK_IMPORTED_MODULE_16__["default"].palette.common.white};
  }
`;
const FormSubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"])({
  marginTop: '1rem'
});
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"])({
  fontWeight: 'bold',
  color: `${_config_theme__WEBPACK_IMPORTED_MODULE_16__["default"].palette.primary.main}`
});

const Index = () => {
  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_14__["useSnackbar"])();
  const {
    0: formState,
    1: setFormState
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    isValid: false,
    isSubmitting: false,
    values: {},
    touched: {},
    errors: {}
  });
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    const errors = {};
    const {
      name,
      email,
      phone,
      organisation,
      testCode
    } = formState.values;
    const query = new URLSearchParams(window.location.search);
    const org = query.get('org') || '';

    if (org.toLowerCase() === 'experior') {
      formState.values.organisation = 'experior';
    } else if (org.toLowerCase() === 'dhibizap') {
      formState.values.organisation = 'dhibizap';
    } else if (org.toLowerCase() === 'dell') {
      formState.values.organisation = 'dell';
    } else {
      formState.values.organisation = 'forward';
    }

    if (!name) {
      errors.name = 'Name is required.';
    }

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!validator__WEBPACK_IMPORTED_MODULE_10___default.a.isEmail(email)) {
      errors.email = 'Email is invalid.';
    }

    if (!organisation) {
      errors.organisation = 'Organisation is required.';
    }

    if (!testCode) {
      errors.testCode = 'Test code is required.';
    }

    if (phone) {
      const parsedPhone = new awesome_phonenumber__WEBPACK_IMPORTED_MODULE_12___default.a(phone.startsWith('+') ? phone : `+${phone}`);

      if (!parsedPhone.isValid()) {
        errors.phone = 'Phone number is invalid. Make sure to use international phone number format.';
      }
    }

    setFormState(formState => _objectSpread({}, formState, {
      isValid: lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(errors),
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleInputChange = event => {
    event.persist();
    setFormState(formState => _objectSpread({}, formState, {
      values: _objectSpread({}, formState.values, {
        [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      }),
      touched: _objectSpread({}, formState.touched, {
        [event.target.name]: true
      })
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const fsatApi = Object(_api__WEBPACK_IMPORTED_MODULE_19__["default"])();
    const {
      name,
      email,
      phone,
      organisation,
      testCode
    } = formState.values;
    setFormState(formState => _objectSpread({}, formState, {
      isSubmitting: true
    }));
    fsatApi.createTest(_objectSpread({
      name,
      email,
      organisation,
      testCode
    }, phone && {
      phone: `+${phone}`
    })).then(response => {
      if (response.data.ended) {
        next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push(`/tests/${response.data.id}/report`);
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push(`/tests/${response.data.id}`);
      }

      return null;
    }).catch(error => {
      _sentry_browser__WEBPACK_IMPORTED_MODULE_15__["captureException"](error);
      const errorMessage = Object(_utils_error__WEBPACK_IMPORTED_MODULE_17__["getErrorMessage"])(error);
      enqueueSnackbar(errorMessage.message, {
        variant: errorMessage.type,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        }
      });
      setFormState(formState => _objectSpread({}, formState, {
        isSubmitting: false
      }));
    });
  };

  const hasError = field => !!(formState.touched[field] && formState.errors[field]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(GlobalStyle, null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Container"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    spacing: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    container: true,
    xs: 12
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 6,
    sm: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Box"], {
    my: "2rem"
  }, __jsx(_components_ResponsiveImage__WEBPACK_IMPORTED_MODULE_18__["default"], {
    width: "130px",
    alt: "Forward School",
    src: __webpack_require__(/*! ../../public/forward-school-logo-blue.png */ "./public/forward-school-logo-blue.png")
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    sm: 7
  }, __jsx(Heading, {
    variant: "h2",
    component: "h1",
    gutterBottom: true
  }, "Forward School Aptitude Test"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    style: {
      marginBottom: '20px'
    }
  }, "This aptitude test is designed to assess your aptitude for computer programming. It involves four key skill areas:"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    gutterBottom: true
  }, __jsx("b", null, "Logical thinking and problem solving"), __jsx("br", null), "Numerical problem solving is analogous to the troubleshooting required in programming."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    gutterBottom: true
  }, __jsx("b", null, "Pattern and syntax recognition"), __jsx("br", null), "Involve recognising similarities and differences in strings of characters and numbers, understanding graphical representations of procedures and symbols, finding which element does not match the corresponding elements and information checking and attention to detail."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    gutterBottom: true
  }, __jsx("b", null, "Ability to follow complex procedures"), __jsx("br", null), "Involves following coded instructions and rules, sequencing events into a logical order, sorting and manipulating lists of items according to specific instructions, deciding how one set of instructions affects another and interpreting flow diagrams."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    gutterBottom: true
  }, __jsx("b", null, "Being resourceful"), __jsx("br", null), "Able to use and leverage any tools or medium at your disposal to solve problems.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    sm: 5
  }, __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    fullWidth: true,
    required: true,
    label: "Name",
    name: "name",
    placeholder: "Your Full Name",
    error: hasError('name'),
    helperText: hasError('name') ? formState.errors.name : null,
    value: formState.values.name || '',
    onChange: handleInputChange,
    type: "text",
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    fullWidth: true,
    required: true,
    label: "Email",
    name: "email",
    placeholder: "your@email.com",
    error: hasError('email'),
    helperText: hasError('email') ? formState.errors.email : null,
    value: formState.values.email || '',
    onChange: handleInputChange,
    type: "email",
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    fullWidth: true,
    label: "Phone Number",
    name: "phone",
    placeholder: "60164848888",
    error: hasError('phone'),
    helperText: hasError('phone') ? formState.errors.phone : 'International phone number format with country code.',
    value: formState.values.phone || '',
    onChange: handleInputChange,
    type: "tel",
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    fullWidth: true,
    required: true,
    label: "Organisation",
    name: "organisation",
    onChange: handleInputChange,
    value: formState.values.organisation || 'forward',
    error: hasError('organisation'),
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    select: true
  }, formState.values.organisation === 'forward' && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: "forward"
  }, "Forward School"), formState.values.organisation === 'experior' && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: "experior"
  }, "Experior"), formState.values.organisation === 'dhibizap' && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: "dhibizap"
  }, "DHI BizAP"), formState.values.organisation === 'dell' && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: "dell"
  }, "Dell")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    fullWidth: true,
    required: true,
    label: "Test Code",
    name: "testCode",
    placeholder: "Test Code",
    error: hasError('testCode'),
    helperText: hasError('testCode') ? formState.errors.testCode : null,
    value: formState.values.testCode || '',
    onChange: handleInputChange,
    type: "text",
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    }
  }), __jsx(FormSubmitButton, {
    fullWidth: true,
    color: "primary",
    size: "large",
    variant: "contained",
    margin: "normal",
    type: "submit",
    disabled: !formState.isValid || formState.isSubmitting,
    endIcon: formState.isSubmitting ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CircularProgress"], {
      color: "inherit",
      size: 20
    }) : null
  }, "Start Test"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/utils/error.js":
/*!****************************!*\
  !*** ./src/utils/error.js ***!
  \****************************/
/*! exports provided: getErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);

const getErrorMessage = error => {
  if (error.response) {
    const messageKey = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(error.response, 'data.message');

    switch (messageKey) {
      case 'INVALID_EMAIL':
        return {
          type: 'error',
          message: 'Email address is invalid.'
        };

      case 'INVALID_PHONE_NUMBER':
        return {
          type: 'error',
          message: 'Phone number is invalid.'
        };

      case 'INVALID_TEST_CODE':
        return {
          type: 'error',
          message: 'Test code is invalid.'
        };

      default:
        return {
          type: 'default',
          message: 'Something went wrong! Please try again later.'
        };
    }
  } else {
    return {
      type: 'default',
      message: 'Something went wrong! Please try again later.'
    };
  }
};

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/forwardschool/aptitude-web/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@sentry/browser":
/*!**********************************!*\
  !*** external "@sentry/browser" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sentry/browser");

/***/ }),

/***/ "awesome-phonenumber":
/*!**************************************!*\
  !*** external "awesome-phonenumber" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("awesome-phonenumber");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("notistack");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map