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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: api_prod, api_dev, default */
/***/ (function(module) {

eval("module.exports = {\"api_prod\":\"https://blog-demo-api.herokuapp.com\",\"api_dev\":\"http://localhost:5000\"};\n\n//# sourceURL=webpack:///./config.json?");

/***/ }),

/***/ "./src/browser/config/axios.js":
/*!*************************************!*\
  !*** ./src/browser/config/axios.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _config = __webpack_require__(/*! ../../../config.json */ \"./config.json\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  baseURL:  true ? _config2.default.api_dev : undefined\n});\n\ninstance.defaults.withCredentials = true;\n\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/browser/config/axios.js?");

/***/ }),

/***/ "./src/browser/containers/App.jsx":
/*!****************************************!*\
  !*** ./src/browser/containers/App.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar React = _interopRequireWildcard(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _user = __webpack_require__(/*! ../modules/user */ \"./src/browser/modules/user.js\");\n\nvar _App = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../components/App'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AppContainer = function (_React$PureComponent) {\n  _inherits(AppContainer, _React$PureComponent);\n\n  function AppContainer() {\n    _classCallCheck(this, AppContainer);\n\n    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));\n  }\n\n  _createClass(AppContainer, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchSessionRequest();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(_App2.default, this.props);\n    }\n  }]);\n\n  return AppContainer;\n}(React.PureComponent);\n\nexports.default = (0, _reactRedux.connect)(null, {\n  fetchSessionRequest: _user.fetchSessionRequest\n})(AppContainer);\n\n//# sourceURL=webpack:///./src/browser/containers/App.jsx?");

/***/ }),

/***/ "./src/browser/modules/app.js":
/*!************************************!*\
  !*** ./src/browser/modules/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getIsFetching = exports.getAction = exports.getIsModalOpen = exports.getModalType = exports.getCurrentTheme = exports.switchTheme = exports.closeModal = exports.openModal = exports.confirm = exports.SWITCH_THEME = exports.AGREE_CONFIRM_MODAL = exports.CLOSE_CONFIRM_MODAL = exports.OPEN_CONFIRM_MODAL = exports.CLOSE_MODAL = exports.OPEN_MODAL = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = reducer;\nexports.switchThemeSaga = switchThemeSaga;\n\nvar _user = __webpack_require__(/*! ./user */ \"./src/browser/modules/user.js\");\n\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(switchThemeSaga);\n\n// Actions\nvar OPEN_MODAL = exports.OPEN_MODAL = 'blog/ui/modal/OPEN';\nvar CLOSE_MODAL = exports.CLOSE_MODAL = 'blog/ui/modal/CLOSE';\nvar OPEN_CONFIRM_MODAL = exports.OPEN_CONFIRM_MODAL = 'blog/ui/confirm-modal/OPEN';\nvar CLOSE_CONFIRM_MODAL = exports.CLOSE_CONFIRM_MODAL = 'blog/ui/confirm-modal/CLOSE';\nvar AGREE_CONFIRM_MODAL = exports.AGREE_CONFIRM_MODAL = 'blog/ui/confirm-modal/AGREE';\nvar SWITCH_THEME = exports.SWITCH_THEME = 'blog/ui/theme/SWITCH';\n\n// Reducer\nvar initialState = { theme: undefined, isFetching: false, isModalOpen: false };\n\nfunction reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case SWITCH_THEME:\n      return _extends({}, state, { theme: action.payload });\n    case OPEN_MODAL:\n      return _extends({}, state, {\n        isModalOpen: true,\n        modalType: action.payload\n      });\n    case CLOSE_MODAL:\n      return _extends({}, state, { isModalOpen: false });\n    case _user.FETCH_SESSION_REQUEST:\n      return _extends({}, state, { isFetching: true });\n    case _user.FETCH_SESSION_SUCCESS:\n    case _user.FETCH_SESSION_FAILURE:\n      return _extends({}, state, { isFetching: false });\n    default:\n      return state;\n  }\n}\n\n// Action Creators\nvar confirm = exports.confirm = function confirm(action) {\n  return {\n    type: AGREE_CONFIRM_MODAL,\n    payload: action\n  };\n};\n\nvar openModal = exports.openModal = function openModal(type) {\n  return {\n    type: OPEN_MODAL,\n    payload: type\n  };\n};\n\nvar closeModal = exports.closeModal = function closeModal() {\n  return {\n    type: CLOSE_MODAL\n  };\n};\n\nvar switchTheme = exports.switchTheme = function switchTheme(theme) {\n  return {\n    type: SWITCH_THEME,\n    payload: theme\n  };\n};\n\n// Sagas\nfunction switchThemeSaga(action) {\n  return regeneratorRuntime.wrap(function switchThemeSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return localStorage.setItem('theme', action.payload);\n\n        case 2:\n        case 'end':\n          return _context.stop();\n      }\n    }\n  }, _marked, this);\n}\n\n//Selectors\nvar getCurrentTheme = exports.getCurrentTheme = function getCurrentTheme(state) {\n  return state.app.theme;\n};\nvar getModalType = exports.getModalType = function getModalType(state) {\n  return state.app.modalType;\n};\nvar getIsModalOpen = exports.getIsModalOpen = function getIsModalOpen(state) {\n  return state.app.isModalOpen;\n};\nvar getAction = exports.getAction = function getAction(state) {\n  return state.app.performAction;\n};\nvar getIsFetching = exports.getIsFetching = function getIsFetching(state) {\n  return state.app.isFetching;\n};\n\n//# sourceURL=webpack:///./src/browser/modules/app.js?");

/***/ }),

/***/ "./src/browser/modules/user.js":
/*!*************************************!*\
  !*** ./src/browser/modules/user.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getUserId = exports.getUserName = exports.getErrors = exports.getSignInError = exports.getSignUpError = exports.createUserError = exports.createUserValidationError = exports.createUserSuccess = exports.createUserRequest = exports.fetchLogoutSuccess = exports.fetchLogoutRequest = exports.fetchLoginError = exports.fetchLoginSuccess = exports.fetchLoginRequest = exports.fetchSessionError = exports.fetchSessionSuccess = exports.fetchSessionRequest = exports.FETCH_SESSION_FAILURE = exports.FETCH_SESSION_SUCCESS = exports.FETCH_SESSION_REQUEST = exports.FETCH_LOGOUT_SUCCESS = exports.FETCH_LOGOUT_REQUEST = exports.FETCH_LOGIN_FAILURE = exports.FETCH_LOGIN_SUCCESS = exports.FETCH_LOGIN_REQUEST = exports.CREATE_USER_FAILURE = exports.CREATE_USER_VALIDATION_FAILURE = exports.CREATE_USER_SUCCESS = exports.CREATE_USER_REQUEST = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = reducer;\nexports.fetchLogin = fetchLogin;\nexports.createUser = createUser;\nexports.fetchLogout = fetchLogout;\nexports.fetchSession = fetchSession;\nexports.updateUser = updateUser;\nexports.fetchLoginSaga = fetchLoginSaga;\nexports.fetchLogoutSaga = fetchLogoutSaga;\nexports.fetchSessionSaga = fetchSessionSaga;\nexports.createUserSaga = createUserSaga;\n\nvar _axios = __webpack_require__(/*! ../config/axios */ \"./src/browser/config/axios.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _effects = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n\nvar _app = __webpack_require__(/*! ./app */ \"./src/browser/modules/app.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchLoginSaga),\n    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(fetchLogoutSaga),\n    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(fetchSessionSaga),\n    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(createUserSaga);\n\n// Actions\nvar CREATE_USER_REQUEST = exports.CREATE_USER_REQUEST = 'blog/user/create/REQUEST';\nvar CREATE_USER_SUCCESS = exports.CREATE_USER_SUCCESS = 'blog/user/create/SUCCESS';\nvar CREATE_USER_VALIDATION_FAILURE = exports.CREATE_USER_VALIDATION_FAILURE = 'blog/user/create/validation/FAILURE';\nvar CREATE_USER_FAILURE = exports.CREATE_USER_FAILURE = 'blog/user/create/FAILURE';\n\nvar FETCH_LOGIN_REQUEST = exports.FETCH_LOGIN_REQUEST = 'blog/user/login/REQUEST';\nvar FETCH_LOGIN_SUCCESS = exports.FETCH_LOGIN_SUCCESS = 'blog/user/login/SUCCESS';\nvar FETCH_LOGIN_FAILURE = exports.FETCH_LOGIN_FAILURE = 'blog/user/login/FAILURE';\n\nvar FETCH_LOGOUT_REQUEST = exports.FETCH_LOGOUT_REQUEST = 'blog/user/logout/REQUEST';\nvar FETCH_LOGOUT_SUCCESS = exports.FETCH_LOGOUT_SUCCESS = 'blog/user/logout/SUCCESS';\n\nvar FETCH_SESSION_REQUEST = exports.FETCH_SESSION_REQUEST = 'blog/user/session/REQUEST';\nvar FETCH_SESSION_SUCCESS = exports.FETCH_SESSION_SUCCESS = 'blog/user/session/SUCCESS';\nvar FETCH_SESSION_FAILURE = exports.FETCH_SESSION_FAILURE = 'blog/user/session/FAILURE';\n\n// Reducer\nvar initialState = { isFetching: false, errors: [] };\n\nfunction reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case FETCH_LOGIN_REQUEST:\n    case CREATE_USER_REQUEST:\n      return _extends({}, state, { isFetching: true, signInError: null, signUpError: null });\n    case FETCH_LOGIN_SUCCESS:\n    case CREATE_USER_SUCCESS:\n      return _extends({}, state, { isFetching: false, email: action.payload.email });\n    case FETCH_LOGIN_FAILURE:\n      return _extends({}, state, { isFetching: false, signInError: action.payload });\n    case CREATE_USER_VALIDATION_FAILURE:\n      return _extends({}, state, { isFetching: false, errors: action.payload });\n    case CREATE_USER_FAILURE:\n      return _extends({}, state, { isFetching: false, signUpError: action.payload });\n    case FETCH_LOGOUT_REQUEST:\n      return _extends({}, state, { isFetching: false, email: null });\n    case FETCH_SESSION_REQUEST:\n      return _extends({}, state);\n    case FETCH_SESSION_SUCCESS:\n      return _extends({}, state, { isFetching: false, email: action.payload });\n    default:\n      return state;\n  }\n}\n\n// Action Creators\nvar fetchSessionRequest = exports.fetchSessionRequest = function fetchSessionRequest() {\n  return {\n    type: FETCH_SESSION_REQUEST\n  };\n};\n\nvar fetchSessionSuccess = exports.fetchSessionSuccess = function fetchSessionSuccess(data) {\n  return {\n    type: FETCH_SESSION_SUCCESS,\n    payload: data\n  };\n};\n\nvar fetchSessionError = exports.fetchSessionError = function fetchSessionError() {\n  return {\n    type: FETCH_SESSION_FAILURE\n  };\n};\n\nvar fetchLoginRequest = exports.fetchLoginRequest = function fetchLoginRequest(data) {\n  return {\n    type: FETCH_LOGIN_REQUEST,\n    payload: data\n  };\n};\n\nvar fetchLoginSuccess = exports.fetchLoginSuccess = function fetchLoginSuccess(data) {\n  return {\n    type: FETCH_LOGIN_SUCCESS,\n    payload: data\n  };\n};\n\nvar fetchLoginError = exports.fetchLoginError = function fetchLoginError(error) {\n  return {\n    type: FETCH_LOGIN_FAILURE,\n    payload: error\n  };\n};\n\nvar fetchLogoutRequest = exports.fetchLogoutRequest = function fetchLogoutRequest() {\n  return {\n    type: FETCH_LOGOUT_REQUEST\n  };\n};\n\nvar fetchLogoutSuccess = exports.fetchLogoutSuccess = function fetchLogoutSuccess() {\n  return {\n    type: FETCH_LOGOUT_SUCCESS\n  };\n};\n\nvar createUserRequest = exports.createUserRequest = function createUserRequest(data) {\n  return {\n    type: CREATE_USER_REQUEST,\n    payload: data\n  };\n};\n\nvar createUserSuccess = exports.createUserSuccess = function createUserSuccess(data) {\n  return {\n    type: CREATE_USER_SUCCESS,\n    payload: data\n  };\n};\n\nvar createUserValidationError = exports.createUserValidationError = function createUserValidationError(errors) {\n  return {\n    type: CREATE_USER_VALIDATION_FAILURE,\n    payload: errors\n  };\n};\n\nvar createUserError = exports.createUserError = function createUserError(error) {\n  return {\n    type: CREATE_USER_FAILURE,\n    payload: error\n  };\n};\n\n// Side effects\nfunction fetchLogin(data) {\n  return _axios2.default.put('/users', data);\n}\n\nfunction createUser(data) {\n  return _axios2.default.post('/users', data);\n}\n\nfunction fetchLogout() {\n  return _axios2.default.get('/logout');\n}\n\nfunction fetchSession() {\n  return _axios2.default.get('/session');\n}\n\nfunction updateUser(userId, data) {\n  return _axios2.default.patch('/users/' + userId, data);\n}\n\n// Sagas\nfunction fetchLoginSaga(action) {\n  var login;\n  return regeneratorRuntime.wrap(function fetchLoginSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return (0, _effects.call)(fetchLogin, action.payload);\n\n        case 3:\n          login = _context.sent;\n          _context.next = 6;\n          return (0, _effects.put)(fetchLoginSuccess(login.data));\n\n        case 6:\n          _context.next = 8;\n          return (0, _effects.put)((0, _app.closeModal)());\n\n        case 8:\n          _context.next = 14;\n          break;\n\n        case 10:\n          _context.prev = 10;\n          _context.t0 = _context['catch'](0);\n          _context.next = 14;\n          return (0, _effects.put)(fetchLoginError(_context.t0.response ? _context.t0.response.data.message : _context.t0.message));\n\n        case 14:\n        case 'end':\n          return _context.stop();\n      }\n    }\n  }, _marked, this, [[0, 10]]);\n}\n\nfunction fetchLogoutSaga() {\n  return regeneratorRuntime.wrap(function fetchLogoutSaga$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return (0, _effects.call)(fetchLogout);\n\n        case 2:\n          _context2.next = 4;\n          return (0, _effects.put)(fetchLogoutSuccess());\n\n        case 4:\n        case 'end':\n          return _context2.stop();\n      }\n    }\n  }, _marked2, this);\n}\n\nfunction fetchSessionSaga() {\n  var session;\n  return regeneratorRuntime.wrap(function fetchSessionSaga$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          _context3.next = 3;\n          return (0, _effects.call)(fetchSession);\n\n        case 3:\n          session = _context3.sent;\n          _context3.next = 6;\n          return (0, _effects.put)(fetchSessionSuccess(session.data.email));\n\n        case 6:\n          _context3.next = 12;\n          break;\n\n        case 8:\n          _context3.prev = 8;\n          _context3.t0 = _context3['catch'](0);\n          _context3.next = 12;\n          return (0, _effects.put)(fetchSessionError(_context3.t0.message));\n\n        case 12:\n        case 'end':\n          return _context3.stop();\n      }\n    }\n  }, _marked3, this, [[0, 8]]);\n}\n\nfunction createUserSaga(action) {\n  var user;\n  return regeneratorRuntime.wrap(function createUserSaga$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.prev = 0;\n          _context4.next = 3;\n          return (0, _effects.call)(createUser, action.payload);\n\n        case 3:\n          user = _context4.sent;\n          _context4.next = 6;\n          return (0, _effects.put)(createUserSuccess(user.data));\n\n        case 6:\n          _context4.next = 8;\n          return (0, _effects.put)((0, _app.closeModal)());\n\n        case 8:\n          _context4.next = 24;\n          break;\n\n        case 10:\n          _context4.prev = 10;\n          _context4.t0 = _context4['catch'](0);\n\n          if (!_context4.t0.response) {\n            _context4.next = 22;\n            break;\n          }\n\n          if (!_context4.t0.response.data.errors) {\n            _context4.next = 18;\n            break;\n          }\n\n          _context4.next = 16;\n          return (0, _effects.put)(createUserValidationError(_context4.t0.response.data.errors));\n\n        case 16:\n          _context4.next = 20;\n          break;\n\n        case 18:\n          _context4.next = 20;\n          return (0, _effects.put)(createUserError(_context4.t0.response.data));\n\n        case 20:\n          _context4.next = 24;\n          break;\n\n        case 22:\n          _context4.next = 24;\n          return (0, _effects.put)(createUserError(_context4.t0.message));\n\n        case 24:\n        case 'end':\n          return _context4.stop();\n      }\n    }\n  }, _marked4, this, [[0, 10]]);\n}\n\n//Selectors\nvar getSignUpError = exports.getSignUpError = function getSignUpError(state) {\n  return state.user.signUpError;\n};\nvar getSignInError = exports.getSignInError = function getSignInError(state) {\n  return state.user.signInError;\n};\nvar getErrors = exports.getErrors = function getErrors(state) {\n  return state.user.errors;\n};\nvar getUserName = exports.getUserName = function getUserName(state) {\n  return state.user.email;\n};\nvar getUserId = exports.getUserId = function getUserId(state) {\n  return state.user.id;\n};\n\n//# sourceURL=webpack:///./src/browser/modules/user.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _App = __webpack_require__(/*! ../browser/containers/App.jsx */ \"./src/browser/containers/App.jsx\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import cors from 'cors';\nvar app = (0, _express2.default)();\n\n// app.use(cors());\n\n// We're going to serve up the public\n// folder since that's where our\n// client bundle.js file will end up.\n// app.use(express.static('public'));\n\napp.get('*', function (req, res /*next*/) {\n  var context = {};\n  var markup = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRouterDom.StaticRouter,\n    { location: req.url, context: context },\n    _react2.default.createElement(_App2.default, null)\n  ));\n\n  app.use(_express2.default.static(_path2.default.resolve(__dirname, '/public')));\n\n  // const indexFile = path.resolve(__dirname, 'public', 'index.html');\n  _fs2.default.readFile('public/index.html', 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"app-root\"></div>', '<div id=\"app-root\">' + markup + '</div>'));\n  });\n});\n\napp.listen(3000, function () {\n  console.log('Server is listening on port: 3000');\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ })

/******/ });