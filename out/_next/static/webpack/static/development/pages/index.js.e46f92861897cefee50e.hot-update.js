webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Brands/Brand/BrandImage/BrandImage.js":
/*!**************************************************************!*\
  !*** ./src/components/Brands/Brand/BrandImage/BrandImage.js ***!
  \**************************************************************/
/*! exports provided: BrandImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandImage", function() { return BrandImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
var _jsxFileName = "/Users/marcelkalveram/dev/projects/the-sustainable-list-next/src/components/Brands/Brand/BrandImage/BrandImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var DEFAULT_IMAGE = '//images.ctfassets.net/hfvaxsztohci/5F8GCHPzqNPyyFyRBt8Z34/7639bd473a33e5e8515dc27dbc53f241/70911900_243466726561461_1687436012864667648_o.jpg';
var BrandImage = function BrandImage(_ref) {
  var children = _ref.children,
      image = _ref.image;
  var imageUrl = image ? image.fields.file.url : DEFAULT_IMAGE;
  return __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
    width: "100%",
    height: "200px",
    overflow: "hidden",
    position: "relative",
    zIndex: "-1",
    borderRadius: Object(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["minorScale"])(3),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    src: imageUrl,
    alt: "Brand: TODO",
    style: {
      position: 'absolute',
      width: '100%',
      top: '0',
      left: '0',
      maxWidth: '100%',
      maxHeight: '200px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), children);
};

/***/ })

})
//# sourceMappingURL=index.js.e46f92861897cefee50e.hot-update.js.map