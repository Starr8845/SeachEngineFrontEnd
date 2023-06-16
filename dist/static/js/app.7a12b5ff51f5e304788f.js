webpackJsonp([1],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo-2.66f30bb.png";

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_searchEngine__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_searchEngine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_searchEngine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_searchResult__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_searchResult___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_searchResult__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'searchEngine',
    component: __WEBPACK_IMPORTED_MODULE_2__components_searchEngine___default.a
  }, {
    path: '/result',
    name: 'searchResult',
    component: __WEBPACK_IMPORTED_MODULE_3__components_searchResult___default.a
  }]
}));

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(84),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data() {
    return {
      query: ''
    };
  },
  methods: {
    showResult: function (data) {
      //alert('hello')
      this.query = data;
      console.log(this.query);
      this.$router.replace({ path: '/result' });
    }
  }
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'searchEngine',
  data() {
    return {
      query: '',
      SearchType: 'rank'

    };
  },
  methods: {

    submit: function () {
      this.$emit('childChange', { query: this.query, "SearchType": this.SearchType });
      // location.reload()
    }
  }
});

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'searchResult',
	props: ['parentQuery'],
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			query: this.parentQuery.query,
			SearchType: this.parentQuery.SearchType,
			page_select: 1,
			tips: '请输入要搜索的内容',
			show_button: false,
			response: {},
			summary: [],
			tips_summary: '',
			qa: { doc: "" },
			tips_qa: '',
			tips_time: '',
			ranksearch: []
		};
	},
	computed: {
		length: function () {
			var len = 0;
			for (let item in this.ranksearch) {
				len++;
			}
			return len;
		},
		part_response: function () {
			var part = [];
			for (let start = (this.page_select - 1) * 10; start < this.page_select * 10; start++) {
				if (start < this.length) {
					part.push(this.ranksearch[start]);
				}
			}
			// console.log(part)
			return part;
		}
	},
	methods: {
		highLightFun: function (text, begin, end) {
			// console.log(begin)
			// console.log(end)
			let str1 = text.slice(0, begin);
			let str2 = text.slice(begin, end);
			let str3 = text.slice(end);
			let result = str1 + '<b>' + str2 + '</b>' + str3;
			// console.log(result)
			return result;
		},
		submit: function () {

			this.tips = '正在查询...';
			this.ranksearch = [];
			this.qa = { doc: "" }, this.tips_qa = "";
			this.tips_summary = "";
			this.summary = {};
			this.tips_time = '';
			var qs = __webpack_require__(74);
			let url = '';
			if (this.SearchType == 'rank') {
				url = "http://111.186.2.142:25565/db/100/" + this.query;
			} else {
				url = "http://111.186.2.142:25565/db/1000/" + this.query;
			}
			// console.log("查询的url为:");
			// console.log(url);
			// console.log(this.SearchType)
			this.$axios({
				method: "get",
				params: {},
				url: url
			}).then(response => {

				// console.log(response);
				this.show_button = true;
				this.response = response.data;
				this.ranksearch = this.response.result;
				this.tips_time = '共耗时' + this.response.time.toFixed(3) + 's.';
				this.tips = this.SearchType + ' 检索到前' + this.length + '个内容';

				if (this.SearchType == 'rank') {
					this.qa = response.data.answer;
					this.qa = {
						'ans': response.data.answer.ans,
						'text': this.highLightFun(response.data.answer.context.text, response.data.answer.context.start, response.data.answer.context.end),
						'doc': this.ranksearch[response.data.answer.doc_id],
						'doc_id': 'rank:' + response.data.answer.doc_id
					};

					this.tips_qa = '智能问答生效, 结果如下';
					this.summary = [];
					// console.log(response.data.summary)
					// console.log(response.data.summary['summaries'])
					// console.log(response.data.summary['summaries'].length)
					let len = response.data.summary['summaries'].length;
					for (let i = 0; i < len; ++i) {
						// console.log(i)
						this.summary.push({
							"text": response.data.summary['summaries'][i],
							"doc_ids": response.data.summary['classes'][i]
						});
					}
					// this.summary = response.data.summary
					this.tips_summary = '搜索到' + this.summary.length + '条相关事件,摘要如下';
				}
			}).catch(error => {
				this.tips = '快速查询失败, 请检查网络连接';
				if (this.SearchType == 'rank') {
					this.tips_qa = '生成智能问答失败, 请检查网络连接';
					this.tips_summary = '生成摘要失败, 请检查网络连接';
				}

				// console.log(error)
			});
		}
	},
	mounted() {
		if (this.query == "" || this.query == null || this.query == undefined) {
			return;
		}
		this.submit();
	}
});

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_bootstrap_min_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_bootstrap_min_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







__WEBPACK_IMPORTED_MODULE_3_axios__["a" /* default */].defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.$axios = __WEBPACK_IMPORTED_MODULE_3_axios__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/laptop2.bde7ab7.png";

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(62)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  "data-v-0b8e3a3e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(64)

var Component = __webpack_require__(11)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  "data-v-fb636988",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('section', {
    staticClass: "banner two"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-lg-10 wow fadeInUp",
    attrs: {
      "data-wow-delay": "0.3s"
    }
  }, [_c('div', {
    staticClass: "banner-content text-center"
  }, [_c('h1', {
    staticClass: "head"
  }, [_vm._v("\n                            The Modern Search Engine by CS7316 Project\n                        ")]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("\n                            Welcome to the modern search engine by CS7316 project, by 邓佳乐, 胡腾, 刘纯宇, 张泽熙\n                        ")]), _vm._v(" "), _c('form', [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group",
    staticStyle: {
      "left": "35%"
    }
  }, [_c('label', [_vm._v("Rank Search"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.SearchType),
      expression: "SearchType"
    }],
    attrs: {
      "type": "radio",
      "value": "rank"
    },
    domProps: {
      "checked": _vm._q(_vm.SearchType, "rank")
    },
    on: {
      "change": function($event) {
        _vm.SearchType = "rank"
      }
    }
  })]), _vm._v(" "), _c('label', [_vm._v("Boolen Search"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.SearchType),
      expression: "SearchType"
    }],
    attrs: {
      "type": "radio",
      "value": "boolen"
    },
    domProps: {
      "checked": _vm._q(_vm.SearchType, "boolen")
    },
    on: {
      "change": function($event) {
        _vm.SearchType = "boolen"
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query),
      expression: "query"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "input query"
    },
    domProps: {
      "value": (_vm.query)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("Search")])])])])])]), _vm._v(" "), _vm._m(1)])])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "header-two sticky-header"
  }, [_c('div', {
    staticClass: "header-navigation"
  }, [_c('div', {
    staticClass: "container-fluid d-flex align-items-center justify-content-between container-1470"
  }, [_c('div', {
    staticClass: "header-left"
  }, [_c('div', {
    staticClass: "site-logo"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(24),
      "alt": "Markpro"
    }
  })])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": __webpack_require__(80),
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer-area two"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-between"
  }, [_c('div', {
    staticClass: "col-lg-2 col-md-6 wow fadeInUp",
    attrs: {
      "data-wow-delay": "0.3s"
    }
  }, [_c('div', {
    staticClass: "footer-box two"
  }, [_c('h4', {
    staticClass: "lasthead"
  }, [_vm._v("Quick Search")]), _vm._v(" "), _c('div', {
    staticClass: "footer-list"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-2 col-md-6 wow fadeInUp",
    attrs: {
      "data-wow-delay": "0.4s"
    }
  }, [_c('div', {
    staticClass: "footer-box three"
  }, [_c('h4', {
    staticClass: "lasthead"
  }, [_vm._v("Multi-News Summarization")]), _vm._v(" "), _c('div', {
    staticClass: "footer-list"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-2 col-md-6 wow fadeInUp",
    attrs: {
      "data-wow-delay": "0.5s"
    }
  }, [_c('div', {
    staticClass: "footer-box none"
  }, [_c('h4', {
    staticClass: "lasthead"
  }, [_vm._v("Machine QA")]), _vm._v(" "), _c('div', {
    staticClass: "footer-list"
  })])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "back-to-top"
  }, [_c('a', {
    attrs: {
      "href": "#0"
    }
  }, [_c('i', {
    staticClass: "fas fa-arrow-up"
  })])])
}]}

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view', {
    attrs: {
      "parent-query": _vm.query
    },
    on: {
      "childChange": _vm.showResult
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "searchResult"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group",
    staticStyle: {
      "left": "15%",
      "top": "20px"
    }
  }, [_c('label', [_vm._v("Rank Search"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.SearchType),
      expression: "SearchType"
    }],
    attrs: {
      "type": "radio",
      "value": "rank"
    },
    domProps: {
      "checked": _vm._q(_vm.SearchType, "rank")
    },
    on: {
      "change": function($event) {
        _vm.SearchType = "rank"
      }
    }
  })]), _vm._v(" "), _c('label', [_vm._v("Boolen Search"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.SearchType),
      expression: "SearchType"
    }],
    attrs: {
      "type": "radio",
      "value": "boolen"
    },
    domProps: {
      "checked": _vm._q(_vm.SearchType, "boolen")
    },
    on: {
      "change": function($event) {
        _vm.SearchType = "boolen"
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "input-group",
    staticStyle: {
      "width": "40%",
      "left": "15%",
      "top": "20px"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query),
      expression: "query"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "input query"
    },
    domProps: {
      "value": (_vm.query)
    },
    on: {
      "keyup": function($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.submit.apply(null, arguments)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("Search")])])])]), _vm._v(" "), _c('div', {
    staticClass: "qadiv"
  }, [_c('p', {
    staticClass: "result_number"
  }, [_vm._v(_vm._s(_vm.tips_qa))]), _vm._v(" "), _c('p', {
    staticClass: "item_description"
  }, [_c('b', [_vm._v(_vm._s(_vm.qa.ans))])]), _vm._v(" "), _c('p', {
    staticClass: "item_description",
    domProps: {
      "innerHTML": _vm._s(_vm.qa.text)
    }
  }), _vm._v(" "), _c('li', {
    attrs: {
      "id": "small_url_content"
    }
  }, [_c('a', {
    attrs: {
      "href": _vm.qa.doc.url,
      "id": "small_url",
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.qa.doc_id) + " " + _vm._s(_vm.qa.doc.url))])]), _vm._v(" "), _c('li', {
    attrs: {
      "id": "date"
    }
  }, [_vm._v(" " + _vm._s(_vm.qa.doc.timestamp))])]), _vm._v(" "), _c('div', {
    staticClass: "leftdiv"
  }, [_c('div', {
    staticClass: "result"
  }, [_c('p', {
    staticClass: "result_number"
  }, [_vm._v(_vm._s(_vm.tips_time))]), _vm._v(" "), _c('p', {
    staticClass: "result_number"
  }, [_vm._v(_vm._s(_vm.tips_summary))]), _vm._v(" "), _vm._l((_vm.summary), function(item) {
    return _c('div', [_c('p', {
      staticClass: "item_description"
    }, [_vm._v(_vm._s(item.text))]), _vm._v(" "), _vm._l((item.doc_ids), function(doc) {
      return _c('p', [_c('a', {
        staticStyle: {
          "font-size": "2px"
        },
        attrs: {
          "target": "_blank",
          "href": _vm.ranksearch[doc].url
        }
      }, [_vm._v(" rank:" + _vm._s(doc) + ", " + _vm._s(_vm.ranksearch[doc].url))])])
    })], 2)
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "result"
  }, [_c('p', {
    staticClass: "result_number"
  }, [_vm._v(_vm._s(_vm.tips))]), _vm._v(" "), _vm._l((_vm.part_response), function(item) {
    return _c('div', [_c('li', {
      attrs: {
        "id": "small_url_content"
      }
    }, [_c('a', {
      attrs: {
        "href": item.url,
        "id": "small_url",
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(item.url))])]), _vm._v(" "), _c('li', {
      attrs: {
        "id": "date"
      }
    }, [_vm._v(" " + _vm._s(item.timestamp))]), _vm._v(" "), _c('p', {
      staticClass: "item_description"
    }, [_vm._v(_vm._s(item.text.slice(0, 500) + '...'))]), _vm._v(" "), _c('p', [_vm._v("   ")])])
  })], 2), _vm._v(" "), _c('div', {
    attrs: {
      "id": "footer"
    }
  }, _vm._l((parseInt(_vm.length / 10) + 1), function(n) {
    return (_vm.show_button) ? _c('button', {
      on: {
        "click": function($event) {
          _vm.page_select = n
        }
      }
    }, [_vm._v(_vm._s(n))]) : _vm._e()
  }), 0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "header-two sticky-header"
  }, [_c('div', {
    staticClass: "header-navigation"
  }, [_c('div', {
    staticClass: "container-fluid d-flex align-items-center justify-content-between container-1470"
  }, [_c('div', {
    staticClass: "header-left"
  }, [_c('div', {
    staticClass: "site-logo"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(24),
      "alt": "Markpro"
    }
  })])])])])])])
}]}

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[57]);
//# sourceMappingURL=app.7a12b5ff51f5e304788f.js.map