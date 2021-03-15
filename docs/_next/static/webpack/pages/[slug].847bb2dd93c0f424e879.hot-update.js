webpackHotUpdate_N_E("pages/[slug]",{

/***/ "./pages/[slug].tsx":
/*!**************************!*\
  !*** ./pages/[slug].tsx ***!
  \**************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-mdx-remote/hydrate */ \"./node_modules/next-mdx-remote/hydrate.js\");\n/* harmony import */ var next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_MDXComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MDXComponents */ \"./components/MDXComponents.ts\");\n/* harmony import */ var components_BackButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/BackButton */ \"./components/BackButton.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/parthkabra/Documents/Code/3TPT/emtrac2-guide/pages/[slug].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Guide = function Guide(_ref) {\n  _s();\n\n  var title = _ref.title,\n      unhydratedContent = _ref.unhydratedContent,\n      auth = _ref.auth;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(true),\n      showContent = _useState[0],\n      setShowContent = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      wrongPasswordEntered = _useState2[0],\n      setWrongPasswordEntered = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    if (auth) {\n      setShowContent(false);\n      var password = prompt(\"Enter the secret key:\");\n\n      if (password === \"secret\") {\n        setShowContent(true);\n      } else {\n        setWrongPasswordEntered(true);\n      }\n\n      console.log('the password entered was', password);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_BackButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      href: \"/\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"mt-xs\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"prose \".concat(!showContent && \"hidden\"),\n      children: next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_2___default()(unhydratedContent, {\n        components: components_MDXComponents__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), wrongPasswordEntered && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-red-500 font-bold\",\n      children: \"You entered the wrong password. Please reload the page and try again. Contact your Hub Admin if you do not know the password\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Guide, \"k9Q8OX0DMiG1yaglRW/aCCBgHTk=\");\n\n_c = Guide;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Guide);\n\nvar _c;\n\n$RefreshReg$(_c, \"Guide\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLnRzeD83OGJkIl0sIm5hbWVzIjpbIkd1aWRlIiwidGl0bGUiLCJ1bmh5ZHJhdGVkQ29udGVudCIsImF1dGgiLCJ1c2VTdGF0ZSIsInNob3dDb250ZW50Iiwic2V0U2hvd0NvbnRlbnQiLCJ3cm9uZ1Bhc3N3b3JkRW50ZXJlZCIsInNldFdyb25nUGFzc3dvcmRFbnRlcmVkIiwidXNlRWZmZWN0IiwicGFzc3dvcmQiLCJwcm9tcHQiLCJjb25zb2xlIiwibG9nIiwiaHlkcmF0ZSIsImNvbXBvbmVudHMiLCJNRFhDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF3QztBQUFBOztBQUFBLE1BQXJDQyxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QkMsaUJBQThCLFFBQTlCQSxpQkFBOEI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ2RDLHNEQUFRLENBQUMsSUFBRCxDQURNO0FBQUEsTUFDN0NDLFdBRDZDO0FBQUEsTUFDaENDLGNBRGdDOztBQUFBLG1CQUVJRixzREFBUSxDQUFDLEtBQUQsQ0FGWjtBQUFBLE1BRTdDRyxvQkFGNkM7QUFBQSxNQUV2QkMsdUJBRnVCOztBQUlwREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSU4sSUFBSixFQUFVO0FBQ1JHLG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0EsVUFBTUksUUFBUSxHQUFHQyxNQUFNLENBQUMsdUJBQUQsQ0FBdkI7O0FBQ0EsVUFBSUQsUUFBUSxLQUFLLFFBQWpCLEVBQTJCO0FBQ3pCSixzQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELE9BRkQsTUFFTztBQUNMRSwrQkFBdUIsQ0FBQyxJQUFELENBQXZCO0FBQ0Q7O0FBQ0RJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaLEVBQXdDSCxRQUF4QztBQUNEO0FBQ0YsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFRVDtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSxxRUFBQyw2REFBRDtBQUFZLFVBQUksRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRTtBQUFJLGVBQVMsRUFBQyxPQUFkO0FBQUEsZ0JBQXVCQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFRRTtBQUFLLGVBQVMsa0JBQVcsQ0FBQ0ksV0FBRCxJQUFnQixRQUEzQixDQUFkO0FBQUEsZ0JBQ0dTLDhEQUFPLENBQUNaLGlCQUFELEVBQW9CO0FBQUVhLGtCQUFVLEVBQUVDLGdFQUFhQTtBQUEzQixPQUFwQjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixFQVdHVCxvQkFBb0IsaUJBQ25CO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQSxrQkFERjtBQW9CRCxDQXJDRDs7R0FBTVAsSzs7S0FBQUEsSzs7QUE2RFNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBoeWRyYXRlIGZyb20gXCJuZXh0LW1keC1yZW1vdGUvaHlkcmF0ZVwiO1xuaW1wb3J0IHsgZ2V0TUQgfSBmcm9tIFwibGliL21keFwiO1xuXG5pbXBvcnQgTURYQ29tcG9uZW50cyBmcm9tIFwiY29tcG9uZW50cy9NRFhDb21wb25lbnRzXCI7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9CYWNrQnV0dG9uXCI7XG5pbXBvcnQgeyBzbHVncyB9IGZyb20gXCJjb250ZW50L21ldGFcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgR3VpZGUgPSAoeyB0aXRsZSwgdW5oeWRyYXRlZENvbnRlbnQsIGF1dGggfSkgPT4ge1xuICBjb25zdCBbc2hvd0NvbnRlbnQsIHNldFNob3dDb250ZW50XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbd3JvbmdQYXNzd29yZEVudGVyZWQsIHNldFdyb25nUGFzc3dvcmRFbnRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhdXRoKSB7XG4gICAgICBzZXRTaG93Q29udGVudChmYWxzZSk7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IHByb21wdChcIkVudGVyIHRoZSBzZWNyZXQga2V5OlwiKTtcbiAgICAgIGlmIChwYXNzd29yZCA9PT0gXCJzZWNyZXRcIikge1xuICAgICAgICBzZXRTaG93Q29udGVudCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFdyb25nUGFzc3dvcmRFbnRlcmVkKHRydWUpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3RoZSBwYXNzd29yZCBlbnRlcmVkIHdhcycsIHBhc3N3b3JkKVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxCYWNrQnV0dG9uIGhyZWY9XCIvXCI+PC9CYWNrQnV0dG9uPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LXhzXCI+e3RpdGxlfTwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvc2UgJHshc2hvd0NvbnRlbnQgJiYgXCJoaWRkZW5cIn1gfT5cbiAgICAgICAge2h5ZHJhdGUodW5oeWRyYXRlZENvbnRlbnQsIHsgY29tcG9uZW50czogTURYQ29tcG9uZW50cyB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge3dyb25nUGFzc3dvcmRFbnRlcmVkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZm9udC1ib2xkXCI+XG4gICAgICAgICAgWW91IGVudGVyZWQgdGhlIHdyb25nIHBhc3N3b3JkLiBQbGVhc2UgcmVsb2FkIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uXG4gICAgICAgICAgQ29udGFjdCB5b3VyIEh1YiBBZG1pbiBpZiB5b3UgZG8gbm90IGtub3cgdGhlIHBhc3N3b3JkXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocyhjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHNsdWdzLm1hcCgoc2x1ZykgPT4gKHtcbiAgICAgIHBhcmFtczogeyBzbHVnIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5wYXJhbXM7XG5cbiAgY29uc3QgeyB0aXRsZSwgdW5oeWRyYXRlZENvbnRlbnQsIGF1dGggfSA9IGF3YWl0IGdldE1EKHNsdWcpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRpdGxlLFxuICAgICAgdW5oeWRyYXRlZENvbnRlbnQsXG4gICAgICBhdXRoLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEd1aWRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[slug].tsx\n");

/***/ })

})