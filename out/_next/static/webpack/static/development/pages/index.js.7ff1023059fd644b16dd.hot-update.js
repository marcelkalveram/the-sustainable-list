webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/data/index.json");
var _data__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data */ "./src/data/index.json", 1);
/* harmony import */ var _config_criteriaMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/criteriaMap */ "./src/config/criteriaMap.js");
/* harmony import */ var _helpers_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/filter */ "./src/helpers/filter.js");
/* harmony import */ var _helpers_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/sort */ "./src/helpers/sort.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store/index.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/Layout */ "./src/components/Layout/Layout.js");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Main/Main */ "./src/components/Main/Main.js");
/* harmony import */ var _components_Sort_Sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Sort/Sort */ "./src/components/Sort/Sort.js");
/* harmony import */ var _components_Brands_Brands__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Brands/Brands */ "./src/components/Brands/Brands.js");
/* harmony import */ var _components_Filters_Filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Filters/Filters */ "./src/components/Filters/Filters.js");
var _jsxFileName = "/Users/marcelkalveram/dev/projects/the-sustainable-list-next/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // data





 // UI






function Index() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_store__WEBPACK_IMPORTED_MODULE_5__["reducer"], _store__WEBPACK_IMPORTED_MODULE_5__["initialState"]),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // filter


  var brands = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return _data__WEBPACK_IMPORTED_MODULE_1__.brands.filter(function (brands) {
      return Object(_helpers_filter__WEBPACK_IMPORTED_MODULE_3__["filterBrands"])(brands, state.selected);
    });
  }, [state.selected]); // search for filter

  if (state.searchFor !== '') {
    brands = brands.filter(function (brand) {
      return brand.fields.title.toLowerCase().includes(state.searchFor.toLowerCase());
    });
  } // sort by price


  if (state.sortBy.price !== null) {
    brands.sort(function (a, b) {
      return Object(_helpers_sort__WEBPACK_IMPORTED_MODULE_4__["sortByPrice"])(state, a, b);
    });
  } // sort by az


  if (state.sortBy.az !== null) {
    brands.sort(function (a, b) {
      return Object(_helpers_sort__WEBPACK_IMPORTED_MODULE_4__["sortByAz"])(state, a, b);
    });
  }

  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    fixed: state.showFilters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_Filters_Filters__WEBPACK_IMPORTED_MODULE_10__["Filters"], {
    criteriaMap: _config_criteriaMap__WEBPACK_IMPORTED_MODULE_2__["criteriaMap"],
    filters: state.filters,
    selected: state.selected,
    setSelected: function setSelected(selected) {
      return dispatch({
        type: _store__WEBPACK_IMPORTED_MODULE_5__["actions"].SET_SELECTED,
        payload: selected
      });
    },
    showFilters: state.showFilters,
    setShowFilters: function setShowFilters(show) {
      return dispatch({
        type: _store__WEBPACK_IMPORTED_MODULE_5__["actions"].SET_SHOW_FILTERS,
        payload: show
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_Main_Main__WEBPACK_IMPORTED_MODULE_7__["Main"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_components_Sort_Sort__WEBPACK_IMPORTED_MODULE_8__["Sort"], {
    searchFor: state.searchFor,
    setSearchFor: function setSearchFor(searchTerm) {
      return dispatch({
        type: _store__WEBPACK_IMPORTED_MODULE_5__["actions"].SET_SEARCH_FOR,
        payload: searchTerm
      });
    },
    totalCount: state.brandsCount,
    count: state.brands.length,
    sortBy: state.sortBy,
    setSortBy: function setSortBy(sortBy) {
      return dispatch({
        type: _store__WEBPACK_IMPORTED_MODULE_5__["actions"].SET_SORT_BY,
        payload: sortBy
      });
    },
    setShowFilters: function setShowFilters(show) {
      return dispatch({
        type: _store__WEBPACK_IMPORTED_MODULE_5__["actions"].SET_SHOW_FILTERS,
        payload: show
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_components_Brands_Brands__WEBPACK_IMPORTED_MODULE_9__["Brands"], {
    criteriaMap: _config_criteriaMap__WEBPACK_IMPORTED_MODULE_2__["criteriaMap"],
    brands: brands,
    selected: state.selected,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.7ff1023059fd644b16dd.hot-update.js.map