/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var _Users_manny_Desktop_event_aggregator_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/manny/Desktop/event-aggregator/client/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_manny_Desktop_event_aggregator_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)(null);\n\nfunction GlobalStateProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),\n      eventLocations = _useState[0],\n      setEventLocations = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      selectedCity = _useState2[0],\n      setSelectedCity = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      selectedCoordinates = _useState3[0],\n      setSelectedCoordinates = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      filteredEvents = _useState4[0],\n      setFilteredEvents = _useState4[1];\n\n  var initialState = {\n    eventLocations: eventLocations,\n    setEventLocations: setEventLocations,\n    selectedCity: selectedCity,\n    setSelectedCity: setSelectedCity,\n    selectedCoordinates: selectedCoordinates,\n    setSelectedCoordinates: setSelectedCoordinates,\n    filteredEvents: filteredEvents,\n    setFilteredEvents: setFilteredEvents\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Context.Provider, {\n    value: initialState,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 12\n  }, this);\n}\n\n_s(GlobalStateProvider, \"mO0Su3umsAOogYzMELhQj6rzUgs=\");\n\n_c = GlobalStateProvider;\n\nfunction MyApp(_ref2) {\n  var Component = _ref2.Component,\n      pageProps = _ref2.pageProps;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlobalStateProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}\n\n_c2 = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"GlobalStateProvider\");\n$RefreshReg$(_c2, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsU3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJldmVudExvY2F0aW9ucyIsInNldEV2ZW50TG9jYXRpb25zIiwic2VsZWN0ZWRDaXR5Iiwic2V0U2VsZWN0ZWRDaXR5Iiwic2VsZWN0ZWRDb29yZGluYXRlcyIsInNldFNlbGVjdGVkQ29vcmRpbmF0ZXMiLCJmaWx0ZXJlZEV2ZW50cyIsInNldEZpbHRlcmVkRXZlbnRzIiwiaW5pdGlhbFN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxnQkFBR0Msb0RBQWEsQ0FBQyxJQUFELENBQTdCOztBQUVQLFNBQVNDLG1CQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUFBLGtCQUVPQywrQ0FBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRTlCQyxjQUY4QjtBQUFBLE1BRWRDLGlCQUZjOztBQUFBLG1CQUdHRiwrQ0FBUSxDQUFDLEVBQUQsQ0FIWDtBQUFBLE1BRzlCRyxZQUg4QjtBQUFBLE1BR2hCQyxlQUhnQjs7QUFBQSxtQkFJaUJKLCtDQUFRLENBQUMsRUFBRCxDQUp6QjtBQUFBLE1BSTlCSyxtQkFKOEI7QUFBQSxNQUlUQyxzQkFKUzs7QUFBQSxtQkFLT04sK0NBQVEsQ0FBQyxFQUFELENBTGY7QUFBQSxNQUs5Qk8sY0FMOEI7QUFBQSxNQUtkQyxpQkFMYzs7QUFPckMsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCUixrQkFBYyxFQUFkQSxjQURpQjtBQUVqQkMscUJBQWlCLEVBQWpCQSxpQkFGaUI7QUFHakJDLGdCQUFZLEVBQVpBLFlBSGlCO0FBSWpCQyxtQkFBZSxFQUFmQSxlQUppQjtBQUtqQkMsdUJBQW1CLEVBQW5CQSxtQkFMaUI7QUFNakJDLDBCQUFzQixFQUF0QkEsc0JBTmlCO0FBT2pCQyxrQkFBYyxFQUFkQSxjQVBpQjtBQVFqQkMscUJBQWlCLEVBQWpCQTtBQVJpQixHQUFyQjtBQVdBLHNCQUFPLDhEQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQWtCLFNBQUssRUFBRUMsWUFBekI7QUFBQSxjQUF3Q1Y7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0dBbkJRRCxtQjs7S0FBQUEsbUI7O0FBcUJULFNBQVNZLEtBQVQsUUFBdUM7QUFBQSxNQUF2QkMsU0FBdUIsU0FBdkJBLFNBQXVCO0FBQUEsTUFBWkMsU0FBWSxTQUFaQSxTQUFZO0FBRW5DLHNCQUNJLDhEQUFDLG1CQUFEO0FBQUEsMkJBQ0ksOERBQUMsNERBQUQ7QUFBQSw2QkFDSSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O01BVFFGLEs7QUFXVCwrREFBZUEsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7Q2hha3JhUHJvdmlkZXJ9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKVxuXG5mdW5jdGlvbiBHbG9iYWxTdGF0ZVByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcblxuICAgIGNvbnN0IFtldmVudExvY2F0aW9ucywgc2V0RXZlbnRMb2NhdGlvbnNdID0gdXNlU3RhdGUoe30pXG4gICAgY29uc3QgW3NlbGVjdGVkQ2l0eSwgc2V0U2VsZWN0ZWRDaXR5XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzZWxlY3RlZENvb3JkaW5hdGVzLCBzZXRTZWxlY3RlZENvb3JkaW5hdGVzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtmaWx0ZXJlZEV2ZW50cywgc2V0RmlsdGVyZWRFdmVudHNdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIGV2ZW50TG9jYXRpb25zLFxuICAgICAgICBzZXRFdmVudExvY2F0aW9ucyxcbiAgICAgICAgc2VsZWN0ZWRDaXR5LFxuICAgICAgICBzZXRTZWxlY3RlZENpdHksXG4gICAgICAgIHNlbGVjdGVkQ29vcmRpbmF0ZXMsXG4gICAgICAgIHNldFNlbGVjdGVkQ29vcmRpbmF0ZXMsXG4gICAgICAgIGZpbHRlcmVkRXZlbnRzLFxuICAgICAgICBzZXRGaWx0ZXJlZEV2ZW50cyxcbiAgICB9XG5cbiAgICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2luaXRpYWxTdGF0ZX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdsb2JhbFN0YXRlUHJvdmlkZXI+XG4gICAgICAgICAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICAgICAgPC9HbG9iYWxTdGF0ZVByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});