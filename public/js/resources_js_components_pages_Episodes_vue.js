"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Episodes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/HeaderComponent.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/HeaderComponent.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'HeaderComponent',
  setup: function setup(__props) {
    return {
      __sfc: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Episodes.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Episodes.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_HeaderComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/HeaderComponent.vue */ "./resources/js/components/layouts/HeaderComponent.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    HeaderComponent: _layouts_HeaderComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      ani_url: ani_url,
      animeInfo: null,
      nameAnime: this.$route.params.name
    };
  },
  mounted: function mounted() {
    var _this = this;
    axios.get("/api/anime/".concat(this.nameAnime, "/episodes")).then(function (response) {
      _this.animeInfo = response.data;
      // console.log(response.data);
    })["catch"](function (error) {
      // console.log(error)
    });
  },
  methods: {
    formatTime: function formatTime(seconds) {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;
      return "".concat(String(minutes).padStart(2, '0'), ":").concat(String(remainingSeconds).padStart(2, '0'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/HeaderComponent.vue?vue&type=template&id=6832e7cf":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/HeaderComponent.vue?vue&type=template&id=6832e7cf ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("header", [_c("router-link", {
    staticClass: "logo",
    attrs: {
      to: {
        name: "welcome.show"
      }
    }
  }, [_c("span", [_vm._v("My")]), _vm._v("Anime")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("router-link", {
    staticClass: "user",
    attrs: {
      to: {
        name: "welcome.show"
      }
    }
  }, [_vm._v("M")])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "search"
  }, [_c("img", {
    attrs: {
      src: "/images/icons/search.svg"
    }
  }), _vm._v(" "), _c("input", {
    attrs: {
      type: "text",
      placeholder: "Поиск..."
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Episodes.vue?vue&type=template&id=2a32596e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Episodes.vue?vue&type=template&id=2a32596e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "episodes"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("header-component"), _vm._v(" "), _c("div", {
    staticClass: "episodes__episode"
  }, [_vm.animeInfo ? _c("div", {
    staticClass: "episodes__episode-title"
  }, [_vm.animeInfo.age_rating ? _c("div", {
    staticClass: "rating"
  }, [_vm._v(_vm._s(_vm.animeInfo.age_rating.label))]) : _vm._e(), _vm._v(" "), _vm.animeInfo ? _c("img", {
    staticClass: "image",
    attrs: {
      src: _vm.ani_url + _vm.animeInfo.poster.src
    }
  }) : _vm._e(), _vm._v(" "), _c("router-link", {
    staticClass: "button",
    attrs: {
      to: _vm.animeInfo ? {
        name: "anime.episode",
        params: {
          id: _vm.animeInfo.episodes[0].id
        }
      } : {
        name: "welcome.show"
      }
    }
  }, [_c("img", {
    attrs: {
      src: "/images/icons/play.svg"
    }
  }), _vm._v("\n                    первый эпизод\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("div", [_c("div", {
    staticClass: "content__name"
  }, [_vm._v(_vm._s(_vm.animeInfo.name.main))]), _vm._v(" "), _c("div", {
    staticClass: "content__name en"
  }, [_vm._v(_vm._s(_vm.animeInfo.name.english))])]), _vm._v(" "), _c("div", {
    staticClass: "all-text"
  }, [_c("div", {
    staticClass: "content__text"
  }, [_vm._v("Дата выхода: "), _c("span", [_vm._v(_vm._s(_vm.animeInfo.year))])]), _vm._v(" "), _c("div", {
    staticClass: "content__text"
  }, [_vm._v("Сезон: "), _c("span", [_vm._v(_vm._s(_vm.animeInfo.season.description))])]), _vm._v(" "), _vm.animeInfo.type.description ? _c("div", {
    staticClass: "content__text"
  }, [_vm._v("Тип:\n                            "), _c("span", [_vm._v(_vm._s(_vm.animeInfo.type.description))])]) : _vm._e()])])], 1) : _vm._e(), _vm._v(" "), _vm.animeInfo ? _c("div", {
    staticClass: "episodes__episode-description"
  }, [_vm._v(_vm._s(_vm.animeInfo.description))]) : _vm._e()]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm.animeInfo ? _c("div", {
    staticClass: "episodes__episodes"
  }, _vm._l(_vm.animeInfo.episodes, function (episode) {
    return _c("div", {
      staticClass: "episodes__episodes-episode"
    }, [_c("img", {
      staticClass: "bg",
      attrs: {
        src: _vm.ani_url + episode.preview.src
      }
    }), _vm._v(" "), _c("router-link", {
      attrs: {
        to: {
          name: "anime.episode",
          params: {
            id: episode.id
          }
        }
      }
    }, [_c("div", {
      staticClass: "content"
    }, [_c("div", {
      staticClass: "content__title"
    }, [_c("div", {
      staticClass: "content__title-name"
    }, [_vm._v(_vm._s(episode.name))]), _vm._v(" "), _c("div", {
      staticClass: "content__title-num"
    }, [_vm._v(_vm._s(episode.ordinal) + " эпизод")])]), _vm._v(" "), _c("div", {
      staticClass: "content__time"
    }, [_vm._v(_vm._s(_vm.formatTime(episode.duration)))])])])], 1);
  }), 0) : _vm._e()], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "episodes__filters"
  }, [_c("div", {
    staticClass: "episodes__filters-filter"
  }, [_c("img", {
    attrs: {
      src: "/images/filters/filter-ascending.svg"
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/layouts/HeaderComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/layouts/HeaderComponent.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeaderComponent_vue_vue_type_template_id_6832e7cf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=template&id=6832e7cf */ "./resources/js/components/layouts/HeaderComponent.vue?vue&type=template&id=6832e7cf");
/* harmony import */ var _HeaderComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/layouts/HeaderComponent.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeaderComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderComponent_vue_vue_type_template_id_6832e7cf__WEBPACK_IMPORTED_MODULE_0__.render,
  _HeaderComponent_vue_vue_type_template_id_6832e7cf__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/HeaderComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Episodes.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/Episodes.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Episodes_vue_vue_type_template_id_2a32596e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Episodes.vue?vue&type=template&id=2a32596e */ "./resources/js/components/pages/Episodes.vue?vue&type=template&id=2a32596e");
/* harmony import */ var _Episodes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Episodes.vue?vue&type=script&lang=js */ "./resources/js/components/pages/Episodes.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Episodes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Episodes_vue_vue_type_template_id_2a32596e__WEBPACK_IMPORTED_MODULE_0__.render,
  _Episodes_vue_vue_type_template_id_2a32596e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Episodes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/HeaderComponent.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/layouts/HeaderComponent.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderComponent.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/HeaderComponent.vue?vue&type=script&setup=true&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Episodes.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pages/Episodes.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Episodes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Episodes.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Episodes.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Episodes_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/HeaderComponent.vue?vue&type=template&id=6832e7cf":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/layouts/HeaderComponent.vue?vue&type=template&id=6832e7cf ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_6832e7cf__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_6832e7cf__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderComponent_vue_vue_type_template_id_6832e7cf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeaderComponent.vue?vue&type=template&id=6832e7cf */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layouts/HeaderComponent.vue?vue&type=template&id=6832e7cf");


/***/ }),

/***/ "./resources/js/components/pages/Episodes.vue?vue&type=template&id=2a32596e":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/Episodes.vue?vue&type=template&id=2a32596e ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Episodes_vue_vue_type_template_id_2a32596e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Episodes_vue_vue_type_template_id_2a32596e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Episodes_vue_vue_type_template_id_2a32596e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Episodes.vue?vue&type=template&id=2a32596e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Episodes.vue?vue&type=template&id=2a32596e");


/***/ })

}]);