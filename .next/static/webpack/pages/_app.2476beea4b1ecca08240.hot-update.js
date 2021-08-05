self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLogin_REQUEST": function() { return /* binding */ UserLogin_REQUEST; },
/* harmony export */   "UserLogin_SUCCESS": function() { return /* binding */ UserLogin_SUCCESS; },
/* harmony export */   "UserLogin_ERROR": function() { return /* binding */ UserLogin_ERROR; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
/* harmony import */ var C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  loadding: false,
  IsLogin: false
};
var USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
var USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
var USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
var USER_LOGOUT = "USER_LOGOUT";
var UserLoginAction = function UserLoginAction(data) {
  return /*#__PURE__*/function () {
    var _ref = (0,C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var response, result;
      return C_Users_pc_007_Documents_react_blog_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(UserLogin_REQUEST());
              _context.prev = 1;
              _context.next = 4;
              return fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                  "Content-type": "application/json"
                },
                body: JSON.stringify(_objectSpread({}, data))
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              result = _context.sent;
              dispatch(UserLogin_SUCCESS(result));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              //error
              dispatch(UserLogin_ERROR());

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
_c = UserLoginAction;
var UserLogin_REQUEST = function UserLogin_REQUEST(data) {
  return {
    type: USER_LOGIN_REQUEST,
    data: data
  };
};
_c2 = UserLogin_REQUEST;
var UserLogin_SUCCESS = function UserLogin_SUCCESS() {
  return {
    type: USER_LOGIN_SUCCESS
  };
};
_c3 = UserLogin_SUCCESS;
var UserLogin_ERROR = function UserLogin_ERROR() {
  return {
    type: USER_LOGIN_ERROR
  };
};
_c4 = UserLogin_ERROR;
var UserLogoutAction = function UserLogoutAction() {
  return {
    type: USER_LOGOUT
  };
};
_c5 = UserLogoutAction;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true
      });

    case USER_LOGIN_ERROR:
      return _objectSpread({}, state);

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "UserLoginAction");
$RefreshReg$(_c2, "UserLogin_REQUEST");
$RefreshReg$(_c3, "UserLogin_SUCCESS");
$RefreshReg$(_c4, "UserLogin_ERROR");
$RefreshReg$(_c5, "UserLogoutAction");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJVc2VyTG9naW5fUkVRVUVTVCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiVXNlckxvZ2luX1NVQ0NFU1MiLCJVc2VyTG9naW5fRVJST1IiLCJ0eXBlIiwiVXNlckxvZ291dEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUMsS0FEUTtBQUVqQkMsU0FBTyxFQUFDO0FBRlMsQ0FBckI7QUFLQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxJQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFFTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLElBQUksRUFBSTtBQUNwQztBQUFBLHFTQUFPLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNIQSxzQkFBUSxDQUFDQyxpQkFBaUIsRUFBbEIsQ0FBUjtBQURHO0FBQUE7QUFBQSxxQkFJcUJDLEtBQUssQ0FBQyxpQ0FBRCxFQUFtQztBQUMzREMsc0JBQU0sRUFBQyxNQURvRDtBQUUzREMsdUJBQU8sRUFBQztBQUNKLGtDQUFlO0FBRFgsaUJBRm1EO0FBSzNEQyxvQkFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsbUJBQW1CUixJQUFuQjtBQUxzRCxlQUFuQyxDQUoxQjs7QUFBQTtBQUlJUyxzQkFKSjtBQUFBO0FBQUEscUJBV21CQSxRQUFRLENBQUNDLElBQVQsRUFYbkI7O0FBQUE7QUFXSUMsb0JBWEo7QUFZRlYsc0JBQVEsQ0FBQ1csaUJBQWlCLENBQUNELE1BQUQsQ0FBbEIsQ0FBUjtBQVpFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBY0Y7QUFDQVYsc0JBQVEsQ0FBQ1ksZUFBZSxFQUFoQixDQUFSOztBQWZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQkYsQ0FuQk07S0FBTWQsZTtBQXFCTixJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFGLElBQUksRUFBSTtBQUNyQyxTQUFPO0FBQ0hjLFFBQUksRUFBQ25CLGtCQURGO0FBRUhLLFFBQUksRUFBSkE7QUFGRyxHQUFQO0FBSUgsQ0FMTTtNQUFNRSxpQjtBQU1OLElBQU1VLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQyxTQUFPO0FBQ0hFLFFBQUksRUFBQ2xCO0FBREYsR0FBUDtBQUdILENBSk07TUFBTWdCLGlCO0FBS04sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ2pDLFNBQU87QUFDSEMsUUFBSSxFQUFDakI7QUFERixHQUFQO0FBR0gsQ0FKTTtNQUFNZ0IsZTtBQU1OLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUNsQyxTQUFPO0FBQ0hELFFBQUksRUFBQ2hCO0FBREYsR0FBUDtBQUdILENBSk07TUFBTWlCLGdCOztBQU1iLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQStCO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF4QnpCLFlBQXdCO0FBQUEsTUFBWDBCLE1BQVc7O0FBQzNDLFVBQU9BLE1BQU0sQ0FBQ0osSUFBZDtBQUNJLFNBQUtuQixrQkFBTDtBQUNJLDZDQUNPc0IsS0FEUDtBQUVJeEIsZ0JBQVEsRUFBQztBQUZiOztBQUlKLFNBQUtHLGtCQUFMO0FBQ0ksNkNBQ09xQixLQURQO0FBRUl2QixlQUFPLEVBQUM7QUFGWjs7QUFJSixTQUFLRyxnQkFBTDtBQUNJLCtCQUNPb0IsS0FEUDs7QUFHSixTQUFLbkIsV0FBTDtBQUNJLDZDQUNPbUIsS0FEUDtBQUVJdkIsZUFBTyxFQUFDO0FBRlo7O0FBSUo7QUFDSSxhQUFPdUIsS0FBUDtBQXJCUjtBQXVCSCxDQXhCRDs7QUEwQkEsK0RBQWVELE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yNDc2YmVlYTRiMWVjY2EwODI0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9hZGRpbmc6ZmFsc2UsXHJcbiAgICBJc0xvZ2luOmZhbHNlLFxyXG59XHJcblxyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSBcIlVTRVJfTE9HSU5fUkVRVUVTVFwiXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9IFwiVVNFUl9MT0dJTl9TVUNDRVNTXCJcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9IFwiVVNFUl9MT0dJTl9FUlJPUlwiXHJcblxyXG5jb25zdCBVU0VSX0xPR09VVCA9IFwiVVNFUl9MT0dPVVRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IGRhdGEgPT4ge1xyXG4gICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKT0+e1xyXG4gICAgICAgZGlzcGF0Y2goVXNlckxvZ2luX1JFUVVFU1QoKSlcclxuICAgICAgIHRyeXtcclxuICAgICAgICAvL2ZldGNoIOyEseqzteyggeyduOu2gOu2hFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHsuLi5kYXRhfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9TVUNDRVNTKHJlc3VsdCkpXHJcbiAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy9lcnJvclxyXG4gICAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbl9FUlJPUigpKVxyXG4gICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fUkVRVUVTVCA9IGRhdGEgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOlVTRVJfTE9HSU5fUkVRVUVTVCxcclxuICAgICAgICBkYXRhXHJcbiAgICB9XHJcbn0gXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5fU1VDQ0VTUyA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR0lOX1NVQ0NFU1MsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbl9FUlJPUiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR0lOX0VSUk9SLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTpVU0VSX0xPR09VVFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRkaW5nOnRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBJc0xvZ2luOnRydWUgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVU0VSX0xPR09VVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgSXNMb2dpbjpmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==