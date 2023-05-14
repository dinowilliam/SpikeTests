var b = Object.defineProperty;
var v = (e, t, n) => t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var m = (e, t, n) => (v(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as u, openBlock as r, createElementBlock as o, Fragment as h, renderList as _, createElementVNode as s, toDisplayString as l, createTextVNode as S, resolveComponent as f, withModifiers as $, withDirectives as w, vModelText as R, createCommentVNode as P, createBlock as y, createApp as k } from "vue";
class C {
  constructor() {
    m(this, "pageNumber");
  }
}
const N = u({
  name: "SearchResults",
  props: {
    response: {
      type: Array,
      required: !0
    }
  },
  data() {
    return {
      currentPage: Number,
      offset: Number,
      itemsPerPage: 6,
      pagesPagination: Array,
      pageOfItems: this.response.slice(0, 6)
    };
  },
  methods: {
    async onPageChange(e) {
      this.currentPage = e * 1, this.offset = (e - 1) * this.itemsPerPage + 1 - 1, this.pageOfItems = await this.response.slice(
        this.offset,
        this.offset + this.itemsPerPage
      ), this.mountPages();
    },
    mountPages() {
      this.pagesPagination = new Array();
      for (let e = this.startPageRange; e <= this.endPageRange; e += 1) {
        let t = new C();
        t.pageNumber = e, this.pagesPagination.push(t);
      }
    }
  },
  computed: {
    rows() {
      return this.response.length;
    },
    pages() {
      return this.mountPages(), this.pagesPagination;
    },
    pageQuantity() {
      return Math.ceil(this.response.length / this.itemsPerPage);
    },
    previousPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.pageQuantity ? this.currentPage + 1 : this.pageQuantity;
    },
    startPageRange: function() {
      let e;
      return e = this.currentPage <= 21 ? 1 : this.currentPage - 20, e;
    },
    endPageRange: function() {
      let e;
      return e = this.currentPage + 21 >= this.pageQuantity ? this.pageQuantity : this.currentPage + 20, e;
    }
  },
  mounted() {
    this.currentPage = 1;
  }
});
const g = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [c, p] of t)
    n[c] = p;
  return n;
}, A = { class: "text-start" }, O = { class: "d-flex text-body-secondary pt-3" }, F = /* @__PURE__ */ s("span", { class: "me-1" }, [
  /* @__PURE__ */ s("img", {
    src: " https://www.dinowilliam.com/lib/assets/logo.png",
    height: "16",
    width: "72",
    loading: "lazy"
  })
], -1), Q = { class: "pb-3 mb-0 small lh-sm border-bottom" }, x = { class: "h6" }, T = ["href"], V = { "aria-label": "Page navigation example" }, j = { class: "pagination justify-content-center" }, q = { class: "page-item disabled" }, B = { class: "page-item" }, I = ["onClick"], M = { class: "page-item" };
function D(e, t, n, c, p, d) {
  return r(), o("div", null, [
    (r(!0), o(h, null, _(e.pageOfItems, (a, i) => (r(), o("div", A, [
      s("div", O, [
        F,
        s("p", Q, [
          s("p", x, l(a.url), 1),
          s("p", null, [
            s("a", {
              class: "h4",
              href: a.url
            }, l(a.title), 9, T)
          ]),
          S(" " + l(a.description), 1)
        ])
      ])
    ]))), 256)),
    s("nav", V, [
      s("ul", j, [
        s("li", q, [
          s("a", {
            class: "page-link",
            onClick: t[0] || (t[0] = (a) => e.onPageChange(e.previousPage))
          }, "Previous")
        ]),
        (r(!0), o(h, null, _(e.pagesPagination, (a) => (r(), o("li", B, [
          s("a", {
            class: "page-link",
            onClick: (i) => e.onPageChange(a.pageNumber)
          }, l(a.pageNumber), 9, I)
        ]))), 256)),
        s("li", M, [
          s("a", {
            class: "page-link",
            onClick: t[1] || (t[1] = (a) => e.onPageChange(e.nextPage))
          }, "Next")
        ])
      ])
    ])
  ]);
}
const E = /* @__PURE__ */ g(N, [["render", D]]), z = u({
  name: "SearchForm",
  components: { SearchResults: E },
  data() {
    return {
      prompt: "",
      dataResponse: Array,
      showSearch: !0
    };
  },
  methods: {
    sendSearch() {
      var e = {
        Prompt: this.prompt
      };
      const t = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e)
      };
      return console.log(prompt), fetch("https://localhost:44354/Search", t).then((n) => n.json()).then((n) => (this.dataResponse = n, this.showSearch = !1));
    }
  },
  computed: {
    showResults() {
      return !this.showSearch;
    }
  }
});
const J = {
  key: 0,
  class: "container-fluid mt-5"
}, L = /* @__PURE__ */ s("div", { class: "pt-5 pb-5" }, null, -1), U = /* @__PURE__ */ s("div", {
  class: "mt-5",
  id: "logo"
}, [
  /* @__PURE__ */ s("img", { src: "/img/lucene-net-color.png" })
], -1), G = { class: "input-group pt-5 mb-3" }, H = /* @__PURE__ */ s("button", {
  type: "submit",
  class: "btn btn-lg btn-dark col-md-4"
}, "Search", -1);
function K(e, t, n, c, p, d) {
  const a = f("SearchResults");
  return r(), o(h, null, [
    e.showSearch ? (r(), o("div", J, [
      L,
      U,
      s("form", {
        onSubmit: t[1] || (t[1] = $((...i) => e.sendSearch && e.sendSearch(...i), ["prevent"]))
      }, [
        s("div", G, [
          w(s("input", {
            type: "text",
            class: "form-control",
            id: "search",
            name: "search",
            placeholder: "",
            "aria-label": "",
            "aria-describedby": "",
            "onUpdate:modelValue": t[0] || (t[0] = (i) => e.prompt = i),
            required: ""
          }, null, 512), [
            [R, e.prompt]
          ])
        ]),
        H
      ], 32)
    ])) : P("", !0),
    e.showResults ? (r(), y(a, {
      key: 1,
      response: e.dataResponse
    }, null, 8, ["response"])) : P("", !0)
  ], 64);
}
const W = /* @__PURE__ */ g(z, [["render", K]]), X = u({
  name: "App",
  components: {
    SearchForm: W
  }
});
function Y(e, t, n, c, p, d) {
  const a = f("SearchForm");
  return r(), y(a);
}
const Z = /* @__PURE__ */ g(X, [["render", Y]]);
k(Z).mount("#mainAppSearch");
//# sourceMappingURL=vueappsearch.js.mjs.map
