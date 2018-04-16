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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "OpenSans-Bold.ttf";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "OpenSans-Regular.ttf";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/johndatserakis/Documents/Code/chrome-ribbon-reminder/node_modules/css-loader/lib/css-base.js'");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__.p + "fontawesome.js";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/johndatserakis/Documents/Code/chrome-ribbon-reminder/node_modules/chrome-extension-async/chrome-extension-async.js'");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ribbon.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "manifest.json";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(18)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./app.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(23)
}
var Component = __webpack_require__(21)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(22),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f1cf47d0",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/johndatserakis/Documents/Code/chrome-ribbon-reminder/src/js/components/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f1cf47d0", Component.options)
  } else {
    hotAPI.reload("data-v-f1cf47d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/johndatserakis/Documents/Code/chrome-ribbon-reminder/node_modules/vue/dist/vue.runtime.esm.js'");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(12);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Require manifest.json
__webpack_require__(9);

// Program icons
__webpack_require__(8);

// Fonts
__webpack_require__(2);
__webpack_require__(1);
__webpack_require__(6);

// App scss
__webpack_require__(10);

// Really nice chrome async plugin
__webpack_require__(7);

// Main vue instance


// Components


new _vue2.default({
    el: '#app',
    render: function render(h) {
        return h(_App2.default);
    }
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    name: 'app',
    data: function data() {
        return {
            ribbons: [],
            newRibbonFormData: {
                text: '',
                timestamp: '',
                status: true
            }
        };
    },

    computed: {},
    methods: {
        getRibbons: async function getRibbons() {
            try {
                var result = await chrome.storage.sync.get({ ribbons: [] });
                return result.ribbons;
            } catch (error) {
                console.log(error);
            }
        },
        deleteAllRibbons: async function deleteAllRibbons() {
            if (!confirm('Are you sure?')) {
                return;
            }

            try {
                await chrome.storage.sync.remove('ribbons');
                this.ribbons = await this.getRibbons();
            } catch (error) {
                console.log(error);
            }
        },
        saveRibbon: async function saveRibbon() {
            // Make sure they have some text set
            if (!this.newRibbonFormData.text) {
                alert('Ribbon text is required.');
                return;
            }

            // Add timestamp to ribbon
            this.newRibbonFormData.timestamp = Date.now();

            // Add new ribbon to
            this.ribbons.unshift(this.newRibbonFormData);

            // Reset form data
            this.newRibbonFormData = {
                text: '',
                timestamp: '',
                status: true
            };
        },
        deleteRibbon: function deleteRibbon(index) {
            if (!confirm('Are you sure?')) {
                return;
            }

            this.ribbons.splice(index, 1);
        },
        toggleStatus: function toggleStatus(index) {
            this.ribbons[index].status = !this.ribbons[index].status;
        },
        setBadgeText: function setBadgeText() {
            var count = 0;
            for (var x = 0; x < this.ribbons.length; x++) {
                if (this.ribbons[x].status) {
                    count++;
                }
            }

            if (!count) {
                chrome.browserAction.setBadgeText({ text: '' });
                return;
            }

            chrome.browserAction.setBadgeText({ text: String(count) });
            chrome.browserAction.setBadgeBackgroundColor({ color: '#347693' });
        }
    },
    mounted: async function mounted() {
        this.ribbons = await this.getRibbons();
    },
    created: function created() {},

    watch: {
        ribbons: {
            handler: async function handler(val) {
                // Make sure to store the new array of ribbons in sync
                try {
                    await chrome.storage.sync.set({ 'ribbons': val });
                    this.setBadgeText();
                } catch (error) {
                    console.log(error);
                }
            },

            deep: true
        }
    },
    validations: {}
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

throw new Error("Module build failed: \n@import '../../node_modules/bootstrap/scss/bootstrap';\n^\n      File to import not found or unreadable: /Users/johndatserakis/Documents/Code/chrome-ribbon-reminder/node_modules/bootstrap/scss/bootstrap.scss.\n      in /Users/johndatserakis/Documents/Code/chrome-ribbon-reminder/src/css/app.scss (line 3, column 1)");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.header[data-v-f1cf47d0] {\n  padding: 14px 0 18px;\n}\n.header-wrapper[data-v-f1cf47d0] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-wrapper__header-text[data-v-f1cf47d0] {\n    color: #F14B4E;\n    font-size: 1.4rem;\n}\n.enter-form[data-v-f1cf47d0] {\n  padding: 10px 0 10px;\n}\n.ribbon-list[data-v-f1cf47d0] {\n  padding: 10px 0;\n}\n.ribbon-list-item[data-v-f1cf47d0] {\n  border: 1px solid #e0e0e0;\n  background: whitesmoke;\n  margin-bottom: 20px;\n  padding: 10px;\n  border-radius: 6px;\n  box-shadow: 0 0 4px 0 rgba(64, 76, 71, 0.08);\n}\n.ribbon-list-item__ribbon-list-text-wrapper[data-v-f1cf47d0] {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n}\n.ribbon-list-item__ribbon-list-text-wrapper__text[data-v-f1cf47d0] {\n      margin-bottom: 3px;\n      font-size: 1.1rem;\n}\n.ribbon-list-item__ribbon-list-text-wrapper__date[data-v-f1cf47d0] {\n      color: #7b9087;\n      font-size: 0.8rem;\n}\n.ribbon-list-item__ribbon-list-button-wrapper[data-v-f1cf47d0] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.ribbon-list-item__ribbon-list-button-wrapper__button[data-v-f1cf47d0] {\n      width: 48%;\n}\n.delete-all[data-v-f1cf47d0] {\n  padding: 10px 0;\n  margin-top: 60px;\n}\n", ""]);

// exports


/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/johndatserakis/Documents/Code/chrome-ribbon-reminder/node_modules/style-loader/lib/addStyles.js'");

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/johndatserakis/Documents/Code/chrome-ribbon-reminder/node_modules/vue-loader/lib/component-normalizer.js'");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('section', {
    staticClass: "enter-form"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-9"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newRibbonFormData.text),
      expression: "newRibbonFormData.text"
    }],
    staticClass: "form-control",
    attrs: {
      "placeholder": "Ribbon Text"
    },
    domProps: {
      "value": (_vm.newRibbonFormData.text)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.newRibbonFormData, "text", $event.target.value)
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-3"
  }, [_c('button', {
    staticClass: "btn btn-blue btn-sm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.saveRibbon
    }
  }, [_c('i', {
    staticClass: "fa fa-plus fa-fw"
  }), _vm._v(" Add\n                    ")])])])])]), _vm._v(" "), _c('section', {
    staticClass: "ribbon-list"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._l((_vm.ribbons), function(ribbon, index) {
    return (_vm.ribbons.length) ? _c('div', {
      staticClass: "col-12"
    }, [_c('div', {
      staticClass: "ribbon-list-item"
    }, [_c('div', {
      staticClass: "ribbon-list-item__ribbon-list-text-wrapper"
    }, [_c('div', {
      staticClass: "ribbon-list-item__ribbon-list-text-wrapper__text"
    }, [_vm._v("\n                                " + _vm._s(ribbon.text) + "\n                            ")]), _vm._v(" "), _c('div', {
      staticClass: "ribbon-list-item__ribbon-list-text-wrapper__date"
    }, [_vm._v("\n                                " + _vm._s(ribbon.timestamp) + "\n                            ")])]), _vm._v(" "), _c('div', {
      staticClass: "ribbon-list-item__ribbon-list-button-wrapper"
    }, [(ribbon.status) ? _c('button', {
      staticClass: "btn btn-blue btn-sm ribbon-list-item__ribbon-list-button-wrapper__button",
      on: {
        "click": function($event) {
          _vm.toggleStatus(index)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-eye fa-fw"
    }), _vm._v(" Untie Ribbon\n                            ")]) : _vm._e(), _vm._v(" "), (!ribbon.status) ? _c('button', {
      staticClass: "btn btn-light-blue btn-sm ribbon-list-item__ribbon-list-button-wrapper__button",
      on: {
        "click": function($event) {
          _vm.toggleStatus(index)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-eye-slash fa-fw"
    }), _vm._v(" Tie Ribbon\n                            ")]) : _vm._e(), _vm._v(" "), _c('button', {
      staticClass: "btn btn-red btn-sm ribbon-list-item__ribbon-list-button-wrapper__button",
      on: {
        "click": function($event) {
          _vm.deleteRibbon(index)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-times fa-fw"
    }), _vm._v(" Delete\n                            ")])])])]) : _vm._e()
  }), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [(!_vm.ribbons.length) ? _c('div', {
    staticClass: "text-muted"
  }, [_c('i', {
    staticClass: "fa fa-smile-o fa-fw"
  }), _vm._v(" Use the form above to add a ribbon.\n                    ")]) : _vm._e()])], 2)])]), _vm._v(" "), (_vm.ribbons.length) ? _c('section', {
    staticClass: "delete-all"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('button', {
    staticClass: "btn btn-red btn-sm btn-block",
    on: {
      "click": _vm.deleteAllRibbons
    }
  }, [_c('i', {
    staticClass: "fa fa-trash fa-fw"
  }), _vm._v(" Delete All Ribbons\n                    ")])])])])]) : _vm._e()])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "header-wrapper"
  }, [_c('div', {
    staticClass: "header-wrapper__header-text"
  }, [_vm._v("Ribbon Reminder")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f1cf47d0", module.exports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("5ab2a22c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f1cf47d0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f1cf47d0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/johndatserakis/Documents/Code/chrome-ribbon-reminder/node_modules/vue-style-loader/lib/addStylesClient.js'");

/***/ })
/******/ ]);