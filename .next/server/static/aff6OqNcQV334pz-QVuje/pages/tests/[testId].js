module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/0+H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__("cDcd"));

const amp_context_1 = __webpack_require__("lwAK");

function isInAmpMode({
  ampFirst = false,
  hybrid = false,
  hasQuery = false
} = {}) {
  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("8Kt/"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};
/**
* `Error` component used for handling errors.
*/

class Error extends _react.default.Component {
  static getInitialProps(_ref) {
    var {
      res,
      err
    } = _ref;
    var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
    return {
      statusCode
    };
  }

  render() {
    var {
      statusCode
    } = this.props;
    var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return _react.default.createElement("div", {
      style: styles.error
    }, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, statusCode, ": ", title)), _react.default.createElement("div", null, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? _react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, _react.default.createElement("div", {
      style: styles.desc
    }, _react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "1yJj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



const FSAT_API = (baseURL = "https://aptitude-api.forwardschool.co/v1") => {
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

/* harmony default export */ __webpack_exports__["a"] = (FSAT_API);

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Nebt");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4W9V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getErrorMessage; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lCf4");
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

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5UMH":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/forward-school-logo-white-f606bcdbcf751cbc0c376b9cd92e5980.png";

/***/ }),

/***/ "8Kt/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Set = __webpack_require__("ttDY");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__("cDcd"));

const side_effect_1 = __importDefault(__webpack_require__("Xuae"));

const amp_context_1 = __webpack_require__("lwAK");

const head_manager_context_1 = __webpack_require__("FYa8");

const amp_1 = __webpack_require__("/0+H");

function defaultHead(inAmpMode = false) {
  const head = [react_1.default.createElement("meta", {
    key: "charSet",
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1.default.createElement("meta", {
      key: "viewport",
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new _Set();
  const tags = new _Set();
  const metaTypes = new _Set();
  const metaCategories = {};
  return h => {
    if (h.key && typeof h.key !== 'number' && h.key.indexOf('.$') === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
      return true;
    } // If custom meta tag has been added the key will be prepended with `.$`, we can
    // check for this and dedupe in favor of the custom one, so the default
    // is not rendered as well


    if (keys.has(`.$${h.key}`)) return false; // eslint-disable-next-line default-case

    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new _Set();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;
    return react_1.default.cloneElement(c, {
      key
    });
  });
}

const Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head({
  children
}) {
  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, ampState => react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, updateHead => react_1.default.createElement(Effect, {
    reduceComponentsToState: reduceComponents,
    handleStateChange: updateHead,
    inAmpMode: amp_1.isInAmpMode(ampState)
  }, children)));
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FYa8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Nebt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Cg2A");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("eomm");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("efsx");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("oF3+");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("nd8x");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("xJD9");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_sentry_browser__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("oCNv");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("4W9V");
/* harmony import */ var _components_ResponsiveImage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("NkvE");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("1yJj");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }















const Centered = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
`;
const Main = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(Centered)`
  min-height: calc(100vh - 220px);
  margin: 140px 0 80px;
  padding: 20px 10px;

  background ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].breakpoints.down('md')} {
    min-height: calc(100vh - 170px);
    margin: 105px 0 65px;
    padding: 15px 10px;
  }

  ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].breakpoints.down('sm')} {
    min-height: calc(100vh - 120px);
    margin: 75px 0 45px;
    padding: 20px 10px;
  }
`;
const Question = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div`
  font-weight: 600;
  font-size: 1rem;
  text-align: left;

  background ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].breakpoints.down('md')} {
    font-size: 0.95rem;
  }

  ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].breakpoints.down('sm')} {
    font-size: 0.9rem;
  }
`;
const Bar = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(Centered)`
  position: fixed;
  height: 80px;
  padding: 15px;
  background-color: ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].palette.primary.main};

  ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].breakpoints.down('md')} {
    height: 65px;
    padding: 12px;
  }

  ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].breakpoints.down('sm')} {
    height: 45px;
    padding: 8px;
  }
`;
const TopBar = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(Bar)`
  top: 0;
  left: 0;
`;
const QuestionStepperBar = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(Bar)`
  top: 80px;
  left: 0;
  height: 60px;
  padding: 15px 0 0 0;
  background-color: ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].palette.grey[100]};

  ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].breakpoints.down('md')} {
    top: 65px;
    height: 50px;
    padding: 15px 0 0 0;
  }

  ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].breakpoints.down('sm')} {
    top: 45px;
    height: 30px;
    padding: 10px;
  }
`;
const BottomBar = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(Bar)`
  bottom: 0;
  left: 0;
`;
const TimerCountdown = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"])`
  color: ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].palette.common.white};
  font-weight: bold;
`;
const NextButton = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"])`
  color: ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].palette.common.white};
  font-weight: bold;

  &:disabled {
    color: ${_config_theme__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"].palette.grey[400]};
  }
`;

const Test = ({
  data,
  error
}) => {
  if (error) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_12___default.a, {
      statusCode: error.statusCode
    });
  }

  const {
    enqueueSnackbar
  } = Object(notistack__WEBPACK_IMPORTED_MODULE_14__["useSnackbar"])();
  const {
    0: testState,
    1: setTestState
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(_objectSpread({}, data, {
    answer: null,
    loading: false
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    if (!testState.ended && testState.timeTaken > 0) {
      setInterval(() => {
        setTestState(testState => _objectSpread({}, testState, {
          timeTaken: (_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default()() - Date.parse(testState.start)) / 1000
        }));
      }, 1000);
    }
  }, [null]);

  const formatTime = timeInSeconds => {
    const format = val => `0${Math.floor(val)}`.slice(-2);

    const minutes = timeInSeconds % 3600 / 60;
    return [minutes, timeInSeconds % 60].map(format).join(':');
  };

  const renderContent = () => {
    // Test ended
    if (testState.ended || testState.timeTaken > testState.duration) {
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push(`/tests/${testState.id}/report`);
    }

    if (testState.loading) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CircularProgress"], null);
    } // Test not yet started


    if (!testState.ended && testState.timeTaken === 0) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        container: true,
        spacing: 3,
        justify: "center"
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 12,
        sm: 8,
        md: 6
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
        style: {
          fontWeight: 'bold'
        },
        variant: "h4",
        component: "p",
        gutterBottom: true
      }, "Instructions"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        textAlign: "left",
        fontSize: "h6.fontSize"
      }, __jsx("ol", null, __jsx("li", null, "You must attempt all of the questions in this test."), __jsx("li", null, "You have 30 minutes to complete 20 questions, and once a question is answered it cannot be changed."), __jsx("li", null, "This is a timed test, so make sure you have a 30-minute block of uninterrupted time."), __jsx("li", null, "Coding knowledge is not required; the questions are simply testing your natural aptitude as a developer."), __jsx("li", null, "After completing the test, look for an email with your test report and next steps."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        variant: "contained",
        color: "primary",
        size: "large",
        onClick: () => {
          const fsatApi = Object(_api__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"])();
          setTestState(testState => _objectSpread({}, testState, {
            loading: true
          }));
          fsatApi.startTest({
            testId: testState.id
          }).then(response => {
            setTestState(testState => _objectSpread({}, testState, {}, response.data, {
              timeTaken: (_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default()() - Date.parse(response.data.start)) / 1000,
              loading: false
            }));
            setInterval(() => {
              setTestState(testState => _objectSpread({}, testState, {
                timeTaken: (_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default()() - Date.parse(response.data.start)) / 1000
              }));
            }, 1000);
            return null;
          }).catch(error => {
            _sentry_browser__WEBPACK_IMPORTED_MODULE_17__["captureException"](error);
            const errorMessage = Object(_utils_error__WEBPACK_IMPORTED_MODULE_19__[/* getErrorMessage */ "a"])(error);
            setTestState(testState => _objectSpread({}, testState, {
              loading: false
            }));
            enqueueSnackbar(errorMessage.message, {
              variant: errorMessage.type,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
              }
            });
          });
        }
      }, "Start")));
    }

    if (testState.question) {
      const {
        description,
        image,
        answerChoices
      } = testState.question;
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        container: true,
        spacing: 3,
        justify: "center"
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 12,
        sm: 8,
        md: 6
      }, image.data && __jsx(_components_ResponsiveImage__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
        src: `data:${image.contentType};base64,${image.data}`
      }), __jsx(Question, {
        dangerouslySetInnerHTML: {
          __html: description
        }
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["RadioGroup"], {
        "aria-label": "answer",
        name: "answer",
        value: testState.answer || '',
        onChange: e => {
          e.persist();
          setTestState(testState => _objectSpread({}, testState, {
            answer: e.target.value
          }));
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        container: true,
        spacing: 0,
        justify: "flex-start",
        alignItems: "flex-start"
      }, answerChoices.slice(0, 3).map((value, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 6,
        key: index
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
        style: {
          float: 'left'
        },
        value: value,
        control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Radio"], {
          color: "primary"
        }),
        label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
          style: {
            fontWeight: '600'
          }
        }, value)
      }))), answerChoices.slice(3, 5).map((value, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 6,
        key: index
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["FormControlLabel"], {
        style: {
          float: 'left'
        },
        value: value,
        control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Radio"], {
          color: "primary"
        }),
        label: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
          style: {
            fontWeight: '600'
          }
        }, value)
      })))))));
    }
  };

  const questionNumber = Object(lodash__WEBPACK_IMPORTED_MODULE_15__["get"])(testState.question, 'number') ? Object(lodash__WEBPACK_IMPORTED_MODULE_15__["get"])(testState.question, 'number') : null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_13__["NextSeo"], {
    noindex: true
  }), __jsx(TopBar, null, __jsx(_components_ResponsiveImage__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
    width: "auto",
    height: "100%",
    alt: "Forward School",
    src: __webpack_require__("5UMH")
  })), __jsx(QuestionStepperBar, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Hidden"], {
    mdUp: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["MobileStepper"], {
    steps: testState.totalQuestions,
    position: "static",
    variant: "dots",
    activeStep: questionNumber ? questionNumber - 1 : null,
    style: {
      background: 'transparent'
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    container: true,
    spacing: 0
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    xs: 12
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Hidden"], {
    smDown: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Stepper"], {
    alternativeLabel: true,
    activeStep: questionNumber ? questionNumber - 1 : null,
    style: {
      background: 'transparent'
    }
  }, [...Array(testState.totalQuestions).keys()].map((value, index) => {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Step"], {
      key: value + 1
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["StepLabel"], null));
  }))))))), __jsx(Main, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], null, renderContent())), __jsx(BottomBar, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Container"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    container: true,
    justify: "space-between",
    alignItems: "center",
    spacing: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    xs: 4
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
    variant: "button",
    style: {
      fontWeight: 'bold',
      color: 'white'
    }
  }, questionNumber !== null ? `QUESTION ${questionNumber}` : '')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    xs: 4
  }, __jsx(TimerCountdown, {
    variant: "h4"
  }, testState.timeTaken >= testState.duration ? '00:00' : formatTime(testState.duration - testState.timeTaken))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    xs: 4
  }, __jsx(NextButton, {
    disabled: !testState.answer || testState.loading || testState.timeTaken > testState.duration,
    size: "large",
    endIcon: __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16___default.a, null),
    onClick: () => {
      const fsatApi = Object(_api__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"])();
      setTestState(testState => _objectSpread({}, testState, {
        loading: true
      }));
      fsatApi.answerQuestion({
        testId: testState.id,
        questionNumber,
        answer: testState.answer
      }).then(response => {
        setTestState(testState => _objectSpread({}, testState, {}, response.data, {
          answer: null,
          loading: false
        }));
        return null;
      }).catch(error => {
        _sentry_browser__WEBPACK_IMPORTED_MODULE_17__["captureException"](error);
        const errorMessage = Object(_utils_error__WEBPACK_IMPORTED_MODULE_19__[/* getErrorMessage */ "a"])(error);
        setTestState(testState => _objectSpread({}, testState, {
          loading: false
        }));
        enqueueSnackbar(errorMessage.message, {
          variant: errorMessage.type,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          }
        });
      });
    }
  }, questionNumber === testState.totalQuestions ? 'Finish' : 'Next'))))));
};

Test.getInitialProps = async ({
  req,
  res,
  query
}) => {
  const fsatApi = Object(_api__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"])();
  const {
    testId
  } = query;

  if (req) {
    try {
      const response = await fsatApi.getTest({
        testId
      });

      if (response.data.ended) {
        res.writeHead(302, {
          Location: `/tests/${testId}/report`
        });
        res.end();
      }

      return {
        data: response.data,
        error: null
      };
    } catch (error) {
      res.statusCode = 404;
      return {
        data: null,
        error: error.response.data
      };
    }
  }

  return {
    data: null,
    error: null
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "NkvE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FSResponsiveImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
`;

const ResponsiveImage = props => {
  return __jsx(FSResponsiveImage, props);
};

ResponsiveImage.defaultProps = {
  width: '100%',
  height: 'auto',
  padding: '0',
  margin: '0',
  borderRadius: '0'
};
/* harmony default export */ __webpack_exports__["a"] = (ResponsiveImage);

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Xuae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Set = __webpack_require__("ttDY");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __webpack_require__("cDcd");

const isServer = true;

exports.default = () => {
  const mountedInstances = new _Set();
  let state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState([...mountedInstances], component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return class extends react_1.Component {
    // Used when server rendering
    static rewind() {
      const recordedState = state;
      state = undefined;
      mountedInstances.clear();
      return recordedState;
    }

    constructor(props) {
      super(props);

      if (isServer) {
        mountedInstances.add(this);
        emitChange(this);
      }
    }

    componentDidMount() {
      mountedInstances.add(this);
      emitChange(this);
    }

    componentDidUpdate() {
      emitChange(this);
    }

    componentWillUnmount() {
      mountedInstances.delete(this);
      emitChange(this);
    }

    render() {
      return null;
    }

  };
};

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lCf4":
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "lwAK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "nd8x":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ "oCNv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
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
/* harmony default export */ __webpack_exports__["a"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["responsiveFontSizes"])(theme));

/***/ }),

/***/ "oF3+":
/***/ (function(module, exports) {

module.exports = require("notistack");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "ttDY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zQQD");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "xJD9":
/***/ (function(module, exports) {

module.exports = require("@sentry/browser");

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "zQQD":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
//# sourceMappingURL=[testId].js.map