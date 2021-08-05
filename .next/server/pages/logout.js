(function() {
var exports = {};
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./pages/logout.jsx":
/*!**************************!*\
  !*** ./pages/logout.jsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");







const logout = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_4__.UserLogoutAction)());
    setTimeout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default().back();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "logout...."
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (logout);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/logout.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL2xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsibG9nb3V0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsIlVzZXJMb2dvdXRBY3Rpb24iLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwiaW5pdGlhbFN0YXRlIiwibG9hZGRpbmciLCJJc0xvZ2luIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiZGF0YSIsIlVzZXJMb2dpbl9SRVFVRVNUIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJVc2VyTG9naW5fU1VDQ0VTUyIsIlVzZXJMb2dpbl9FUlJPUiIsImUiLCJ0eXBlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakIsUUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QjtBQUNBQyxrREFBUyxDQUFDLE1BQUk7QUFFVkYsWUFBUSxDQUFDRyxnRUFBZ0IsRUFBakIsQ0FBUjtBQUNBQyxjQUFVLENBQUMsTUFBSTtBQUNYQyw2REFBQTtBQUNILEtBRlMsRUFFUixJQUZRLENBQVY7QUFHSCxHQU5RLEVBTVAsRUFOTyxDQUFUO0FBUUEsc0JBQ0k7QUFBQTtBQUFBLG1CQURKO0FBS0gsQ0FmRDs7QUFpQkEsK0RBQWVOLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxNQUFNTyxZQUFZLEdBQUc7QUFDakJDLFVBQVEsRUFBQyxLQURRO0FBRWpCQyxTQUFPLEVBQUM7QUFGUyxDQUFyQjtBQUtBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVPLE1BQU1DLGVBQWUsR0FBR0MsSUFBSSxJQUFJO0FBQ3BDLFNBQU8sTUFBT2QsUUFBUCxJQUFrQjtBQUNyQkEsWUFBUSxDQUFDZSxpQkFBaUIsRUFBbEIsQ0FBUjs7QUFDQSxRQUFHO0FBQ0Y7QUFDQSxZQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGlDQUFELEVBQW1DO0FBQzNEQyxjQUFNLEVBQUMsTUFEb0Q7QUFFM0RDLGVBQU8sRUFBQztBQUNKLDBCQUFlO0FBRFgsU0FGbUQ7QUFLM0RDLFlBQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLG1CQUFtQlIsSUFBbkI7QUFMc0QsT0FBbkMsQ0FBNUI7QUFPQSxZQUFNUyxNQUFNLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxJQUFULEVBQXJCLENBVEUsQ0FXRjtBQUNBO0FBQ0E7QUFDQTs7QUFDQUQsWUFBTSxDQUFDQSxNQUFQLEtBQWtCLElBQWxCLEdBQ0V2QixRQUFRLENBQUN5QixpQkFBaUIsQ0FBQ0YsTUFBRCxDQUFsQixDQURWLEdBRUV2QixRQUFRLENBQUMwQixlQUFlLEVBQWhCLENBRlY7QUFJQSxLQW5CRCxDQW1CRSxPQUFPQyxDQUFQLEVBQVU7QUFDWDtBQUNBM0IsY0FBUSxDQUFDMEIsZUFBZSxFQUFoQixDQUFSO0FBQ0E7QUFDSixHQXpCRDtBQTBCRixDQTNCTTtBQTZCQSxNQUFNWCxpQkFBaUIsR0FBR0QsSUFBSSxJQUFJO0FBQ3JDLFNBQU87QUFDSGMsUUFBSSxFQUFDbkI7QUFERixHQUFQO0FBR0gsQ0FKTTtBQUtBLE1BQU1nQixpQkFBaUIsR0FBRyxNQUFNO0FBQ25DLFNBQU87QUFDSEcsUUFBSSxFQUFDbEI7QUFERixHQUFQO0FBR0gsQ0FKTTtBQUtBLE1BQU1nQixlQUFlLEdBQUcsTUFBTTtBQUNqQyxTQUFPO0FBQ0hFLFFBQUksRUFBQ2pCO0FBREYsR0FBUDtBQUdILENBSk07QUFNQSxNQUFNUixnQkFBZ0IsR0FBRyxNQUFNO0FBQ2xDLFNBQU87QUFDSHlCLFFBQUksRUFBQ2hCO0FBREYsR0FBUDtBQUdILENBSk07O0FBTVAsTUFBTWlCLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUN4QixZQUFQLEVBQW9CeUIsTUFBcEIsS0FBK0I7QUFDM0MsVUFBT0EsTUFBTSxDQUFDSCxJQUFkO0FBQ0ksU0FBS25CLGtCQUFMO0FBQ0ksNkNBQ09xQixLQURQO0FBRUl2QixnQkFBUSxFQUFDO0FBRmI7O0FBSUosU0FBS0csa0JBQUw7QUFDSSw2Q0FDT29CLEtBRFA7QUFFSXRCLGVBQU8sRUFBQyxJQUZaO0FBR0lELGdCQUFRLEVBQUM7QUFIYjs7QUFLSixTQUFLSSxnQkFBTDtBQUNJLDZDQUNPbUIsS0FEUDtBQUVJdkIsZ0JBQVEsRUFBQztBQUZiOztBQUlKLFNBQUtLLFdBQUw7QUFDSSw2Q0FDT2tCLEtBRFA7QUFFSXRCLGVBQU8sRUFBQztBQUZaOztBQUlKO0FBQ0ksYUFBT3NCLEtBQVA7QUF2QlI7QUF5QkgsQ0ExQkQ7O0FBNEJBLCtEQUFlRCxPQUFmLEU7Ozs7Ozs7Ozs7O0FDMUZBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2xvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBVc2VyTG9nb3V0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcbmNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICBcclxuICAgICAgICBkaXNwYXRjaChVc2VyTG9nb3V0QWN0aW9uKCkpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBSb3V0ZXIuYmFjaygpXHJcbiAgICAgICAgfSwxMDAwKSBcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICBsb2dvdXQuLi4uXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ291dCIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvYWRkaW5nOmZhbHNlLFxyXG4gICAgSXNMb2dpbjpmYWxzZSxcclxufVxyXG5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gXCJVU0VSX0xPR0lOX1JFUVVFU1RcIlxyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1MgPSBcIlVTRVJfTE9HSU5fU1VDQ0VTU1wiXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1IgPSBcIlVTRVJfTE9HSU5fRVJST1JcIlxyXG5cclxuY29uc3QgVVNFUl9MT0dPVVQgPSBcIlVTRVJfTE9HT1VUXCJcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSBkYXRhID0+IHtcclxuICAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCk9PntcclxuICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9SRVFVRVNUKCkpXHJcbiAgICAgICB0cnl7XHJcbiAgICAgICAgLy9mZXRjaCDshLHqs7XsoIHsnbjrtoDrtoRcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyx7XHJcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7Li4uZGF0YX0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICByZXN1bHQ6J09LJyxcclxuICAgICAgICAvLyAgICAgbXNnOifroZzqt7jsnbjsl5Ag7ISx6rO17ZaI7Iq164uI64ukLidcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmVzdWx0LnJlc3VsdCA9PT0gJ09LJyBcclxuICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpbl9TVUNDRVNTKHJlc3VsdCkpXHJcbiAgICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5fRVJST1IoKSlcclxuICAgICAgICBcclxuICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvL2Vycm9yXHJcbiAgICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX0VSUk9SKCkpXHJcbiAgICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9SRVFVRVNUID0gZGF0YSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9SRVFVRVNULFxyXG4gICAgfVxyXG59IFxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luX1NVQ0NFU1MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9TVUNDRVNTLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fRVJST1IgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dJTl9FUlJPUixcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6VVNFUl9MT0dPVVRcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkZGluZzp0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIElzTG9naW46dHJ1ZSwgICBcclxuICAgICAgICAgICAgICAgIGxvYWRkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIElzTG9naW46ZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==