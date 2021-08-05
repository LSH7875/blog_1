(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducer */ "./store/reducer.jsx");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\Users\\pc-007\\Documents\\react\\blog\\front\\pages\\_app.jsx";







const App = ({
  Component
}) => {
  const globalContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default);
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer, globalContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;500;900&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default.Provider, {
      value: {
        state,
        dispatch
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__.default.withRedux(App));

/***/ }),

/***/ "./reducers/category.js":
/*!******************************!*\
  !*** ./reducers/category.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  menu: [{
    id: '1',
    category: 'HTML',
    url: '/posts/HTML'
  }, {
    id: '2',
    category: '대분류메뉴2',
    url: '/posts/2'
  }, {
    id: '3',
    category: '대분류메뉴3',
    url: '/posts/3'
  }, {
    id: '4',
    category: '대분류메뉴4',
    url: '/posts/4'
  }, {
    id: '5',
    category: '대분류메뉴5',
    url: '/posts/5'
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./reducers/category.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const reducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__.default,
  category: _category__WEBPACK_IMPORTED_MODULE_3__.default
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLogin_REQUEST": function() { return /* binding */ UserLogin_REQUEST; },
/* harmony export */   "UserLogin_SUCCESS": function() { return /* binding */ UserLogin_SUCCESS; },
/* harmony export */   "UserLogin_ERROR": function() { return /* binding */ UserLogin_ERROR; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loadding: false,
  IsLogin: false
};
const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
const USER_LOGOUT = "USER_LOGOUT";
const UserLoginAction = data => {
  return async dispatch => {
    dispatch(UserLogin_REQUEST());

    try {
      //fetch 성공적인부분
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(_objectSpread({}, data))
      });
      const result = await response.json(); // {
      //     result:'OK',
      //     msg:'로그인에 성공했습니다.'
      // }

      result.result === 'OK' ? dispatch(UserLogin_SUCCESS(result)) : dispatch(UserLogin_ERROR());
    } catch (e) {
      //error
      dispatch(UserLogin_ERROR());
    }
  };
};
const UserLogin_REQUEST = data => {
  return {
    type: USER_LOGIN_REQUEST
  };
};
const UserLogin_SUCCESS = () => {
  return {
    type: USER_LOGIN_SUCCESS
  };
};
const UserLogin_ERROR = () => {
  return {
    type: USER_LOGIN_ERROR
  };
};
const UserLogoutAction = () => {
  return {
    type: USER_LOGOUT
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true,
        loadding: false
      });

    case USER_LOGIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: false
      });

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);




 // npm install redux-thunk

const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  // console.log(action,dispatch,getState)
  console.log(action);
  return next(action);
}; // redux middleware 사용할수있는 설정까지하고 그리고 devtools사용까지. 


const configureStore = () => {
  const middlewares = [loggerMiddleware, (redux_thunk__WEBPACK_IMPORTED_MODULE_4___default())];
  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares)); // const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

  const Store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default, enhancer);
  return Store;
}; // createStore (reducer) === createContext (상태초기값) 초기값을 상태를 가지고
//              reducer안에 상태초기값을 가지고있어요   
// 첫번째 redux의 
// Store => const Store = createContext(initialState) 
// 두번째


const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true
}); // createWrapper ?  configureStore Store를 가지고있는 함수표현식에대한 함수

/* harmony default export */ __webpack_exports__["default"] = (wrapper); // wrapper ?

/***/ }),

/***/ "./store/context.jsx":
/*!***************************!*\
  !*** ./store/context.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initalState": function() { return /* binding */ initalState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  IsLogin: true
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initalState); // 결과값 Store 컴포넌트이다.

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./store/reducer.jsx":
/*!***************************!*\
  !*** ./store/reducer.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return state;

    case "LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });
  }
};

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3N0b3JlL2NvbnRleHQuanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvcmVkdWNlci5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJnbG9iYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIlN0b3JlIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwid3JhcHBlciIsImluaXRpYWxTdGF0ZSIsIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiYWN0aW9uIiwidHlwZSIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwibG9hZGRpbmciLCJJc0xvZ2luIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiZGF0YSIsIlVzZXJMb2dpbl9SRVFVRVNUIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJVc2VyTG9naW5fU1VDQ0VTUyIsIlVzZXJMb2dpbl9FUlJPUiIsImUiLCJVc2VyTG9nb3V0QWN0aW9uIiwibG9nZ2VyTWlkZGxld2FyZSIsImdldFN0YXRlIiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWd1cmVTdG9yZSIsIm1pZGRsZXdhcmVzIiwidGh1bmtNaWRkbGV3YXJlIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiaW5pdGFsU3RhdGUiLCJjcmVhdGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFpQjtBQUN6QixRQUFNQyxhQUFhLEdBQUdDLGlEQUFVLENBQUNDLG1EQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQW1CQyxpREFBVSxDQUFDQyxtREFBRCxFQUFTTixhQUFULENBQW5DO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDhCQUNJO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQywyQkFBNUI7QUFBd0QsbUJBQVcsRUFBQztBQUFwRTtBQUFBO0FBQUE7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QyxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLE9BQUw7QUFDSSxhQUFPWCxLQUFQOztBQUNKLFNBQUssUUFBTDtBQUNJLDZDQUNPQSxLQURQO0FBRUlrQixlQUFPLEVBQUM7QUFGWjtBQUpSO0FBU0gsQ0FWTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUCxnRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9pbmRleC5jc3MnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFN0b3JlLHtpbml0YWxTdGF0ZX0gZnJvbSAnLi4vc3RvcmUvY29udGV4dCdcclxuaW1wb3J0IHt1c2VSZWR1Y2VyLHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3JlZHVjZXJ9IGZyb20gJy4uL3N0b3JlL3JlZHVjZXInXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xyXG5cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoe0NvbXBvbmVudH0pID0+IHtcclxuICAgIGNvbnN0IGdsb2JhbENvbnRleHQgPSB1c2VDb250ZXh0KFN0b3JlKVxyXG4gICAgY29uc3QgW3N0YXRlLGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcixnbG9iYWxDb250ZXh0KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDEwMDs1MDA7OTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLGRpc3BhdGNofX0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IC8+IHsvKiDsmrDrpqzqsIDrp4zrk6Ag7YyM7J2865Ok7J20IOyXrOq4sOyXkCDsnITsuZjtlbTsmpQuICovfVxyXG4gICAgICAgICAgICA8L1N0b3JlLlByb3ZpZGVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKSIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1lbnU6W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6JzEnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTonSFRNTCcsXHJcbiAgICAgICAgICAgIHVybDonL3Bvc3RzL0hUTUwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOicyJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gICAgICAgICAgICB1cmw6Jy9wb3N0cy8yJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDonMycsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQzJyxcclxuICAgICAgICAgICAgdXJsOicvcG9zdHMvMydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6JzQnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NCcsXHJcbiAgICAgICAgICAgIHVybDonL3Bvc3RzLzQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOic1JyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gICAgICAgICAgICB1cmw6Jy9wb3N0cy81J1xyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCJcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCJcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IGNhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnknXHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGU9e30sYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBjYXRlZ29yeSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkZGluZzpmYWxzZSxcclxuICAgIElzTG9naW46ZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVCA9IFwiVVNFUl9MT0dJTl9SRVFVRVNUXCJcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gXCJVU0VSX0xPR0lOX1NVQ0NFU1NcIlxyXG5jb25zdCBVU0VSX0xPR0lOX0VSUk9SID0gXCJVU0VSX0xPR0lOX0VSUk9SXCJcclxuXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gXCJVU0VSX0xPR09VVFwiXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gZGF0YSA9PiB7XHJcbiAgIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpPT57XHJcbiAgICAgICBkaXNwYXRjaChVc2VyTG9naW5fUkVRVUVTVCgpKVxyXG4gICAgICAgdHJ5e1xyXG4gICAgICAgIC8vZmV0Y2gg7ISx6rO17KCB7J2467aA67aEXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9sb2dpbicse1xyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoey4uLmRhdGF9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgcmVzdWx0OidPSycsXHJcbiAgICAgICAgLy8gICAgIG1zZzon66Gc6re47J247JeQIOyEseqzte2WiOyKteuLiOuLpC4nXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJlc3VsdC5yZXN1bHQgPT09ICdPSycgXHJcbiAgICAgICAgPyBkaXNwYXRjaChVc2VyTG9naW5fU1VDQ0VTUyhyZXN1bHQpKVxyXG4gICAgICAgIDogZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpXHJcbiAgICAgICAgXHJcbiAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy9lcnJvclxyXG4gICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9FUlJPUigpKVxyXG4gICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fUkVRVUVTVCA9IGRhdGEgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5fUkVRVUVTVCxcclxuICAgIH1cclxufSBcclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9TVUNDRVNTID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5fU1VDQ0VTUyxcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX0VSUk9SID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5fRVJST1IsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOlVTRVJfTE9HT1VUXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGRpbmc6dHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOnRydWUsICAgXHJcbiAgICAgICAgICAgICAgICBsb2FkZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVTRVJfTE9HT1VUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOmZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5cclxuLy8gbnBtIGluc3RhbGwgcmVkdXgtdGh1bmtcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbixkaXNwYXRjaCxnZXRTdGF0ZSlcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbilcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbilcclxufVxyXG5cclxuLy8gcmVkdXggbWlkZGxld2FyZSDsgqzsmqntlaDsiJjsnojripQg7ISk7KCV6rmM7KeA7ZWY6rOgIOq3uOumrOqzoCBkZXZ0b29sc+yCrOyaqeq5jOyngC4gXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW2xvZ2dlck1pZGRsZXdhcmUsdGh1bmtNaWRkbGV3YXJlXVxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgLy8gY29uc3QgZW5oYW5jZXIgPSBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICBjb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsZW5oYW5jZXIpICAgIFxyXG4gICAgcmV0dXJuIFN0b3JlXHJcbn0gLy8gY3JlYXRlU3RvcmUgKHJlZHVjZXIpID09PSBjcmVhdGVDb250ZXh0ICjsg4Htg5zstIjquLDqsJIpIOy0iOq4sOqwkuydhCDsg4Htg5zrpbwg6rCA7KeA6rOgXHJcbiAgLy8gICAgICAgICAgICAgIHJlZHVjZXLslYjsl5Ag7IOB7YOc7LSI6riw6rCS7J2EIOqwgOyngOqzoOyeiOyWtOyalCAgIFxyXG5cclxuLy8g7LKr67KI7Ke4IHJlZHV47J2YIFxyXG4vLyBTdG9yZSA9PiBjb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKSBcclxuLy8g65GQ67KI7Ke4XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLHtcclxuICAgIGRlYnVnOnByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbn0pIC8vIGNyZWF0ZVdyYXBwZXIgPyAgY29uZmlndXJlU3RvcmUgU3RvcmXrpbwg6rCA7KeA6rOg7J6I64qUIO2VqOyImO2RnO2YhOyLneyXkOuMgO2VnCDtlajsiJhcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIgLy8gd3JhcHBlciA/ICIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGFsU3RhdGUgPSB7XHJcbiAgICBJc0xvZ2luOnRydWUsXHJcbn1cclxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRhbFN0YXRlKSAvLyDqsrDqs7zqsJIgU3RvcmUg7Lu07Y+s64SM7Yq47J2064ukLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmUiLCJleHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBcIkxPR0lOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgIGNhc2UgXCJMT0dPVVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgSXNMb2dpbjpmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9