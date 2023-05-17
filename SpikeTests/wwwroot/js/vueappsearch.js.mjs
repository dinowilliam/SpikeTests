var v = Object.defineProperty;
var S = (e, t, n) => t in e ? v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var u = (e, t, n) => (S(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as d, openBlock as r, createElementBlock as o, Fragment as g, renderList as P, createElementVNode as s, toDisplayString as p, createTextVNode as $, normalizeClass as h, resolveComponent as y, withModifiers as w, withDirectives as R, vModelText as k, createCommentVNode as f, createBlock as b, createApp as N } from "vue";
class C {
  constructor() {
    u(this, "pageNumber");
    u(this, "isActive");
  }
}
const A = d({
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
      pageOfItems: this.response.slice(0, 6),
      isPreviousDisabled: !0,
      isNextDisabled: !1
    };
  },
  mounted() {
    this.currentPage = 1, this.mountPages();
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
      let e = this.currentPage <= 21 ? 1 : this.currentPage - 20;
      e = e + 41 >= this.pageQuantity ? this.pageQuantity - 39 : e;
      let t = e + 41 >= this.pageQuantity ? this.pageQuantity : e + 39;
      for (let n = e; n <= t; n += 1) {
        let i = new C();
        i.pageNumber = n, i.isActive = this.currentPage == n, this.pagesPagination.push(i);
      }
      this.isPreviousDisabled = this.currentPage == 1, this.isNextDisabled = this.currentPage == this.pageQuantity;
    }
  },
  computed: {
    rows() {
      return this.response.length;
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
  }
});
const m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, l] of t)
    n[i] = l;
  return n;
}, Q = { class: "text-start" }, D = { class: "d-flex text-body-secondary pt-3" }, O = /* @__PURE__ */ s("span", { class: "me-1" }, [
  /* @__PURE__ */ s("img", {
    src: " https://www.dinowilliam.com/lib/assets/logo.png",
    height: "16",
    width: "72",
    loading: "lazy"
  })
], -1), F = { class: "pb-3 mb-0 small lh-sm border-bottom" }, x = { class: "h6" }, T = ["href"], V = { "aria-label": "Page navigation example" }, j = { class: "pagination justify-content-center" }, q = { class: "page-item" }, B = ["onClick"], I = { class: "page-item" };
function M(e, t, n, i, l, _) {
  return r(), o("div", null, [
    (r(!0), o(g, null, P(e.pageOfItems, (a, c) => (r(), o("div", Q, [
      s("div", D, [
        O,
        s("p", F, [
          s("p", x, p(a.url), 1),
          s("p", null, [
            s("a", {
              class: "h4",
              href: a.url
            }, p(a.title), 9, T)
          ]),
          $(" " + p(a.description), 1)
        ])
      ])
    ]))), 256)),
    s("nav", V, [
      s("ul", j, [
        s("li", q, [
          s("a", {
            class: h(["page-link", { disabled: e.isPreviousDisabled }]),
            onClick: t[0] || (t[0] = (a) => e.onPageChange(e.previousPage))
          }, "Previous", 2)
        ]),
        (r(!0), o(g, null, P(e.pagesPagination, (a) => (r(), o("li", {
          class: h(["page-item", { active: a.isActive }])
        }, [
          s("a", {
            class: "page-link",
            onClick: (c) => e.onPageChange(a.pageNumber)
          }, p(a.pageNumber), 9, B)
        ], 2))), 256)),
        s("li", I, [
          s("a", {
            class: h(["page-link", { disabled: e.isNextDisabled }]),
            onClick: t[1] || (t[1] = (a) => e.onPageChange(e.nextPage))
          }, "Next", 2)
        ])
      ])
    ])
  ]);
}
const z = /* @__PURE__ */ m(A, [["render", M]]), E = d({
  name: "SearchForm",
  components: { SearchResults: z },
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
function K(e, t, n, i, l, _) {
  const a = y("SearchResults");
  return r(), o(g, null, [
    e.showSearch ? (r(), o("div", J, [
      L,
      U,
      s("form", {
        onSubmit: t[1] || (t[1] = w((...c) => e.sendSearch && e.sendSearch(...c), ["prevent"]))
      }, [
        s("div", G, [
          R(s("input", {
            type: "text",
            class: "form-control",
            id: "search",
            name: "search",
            placeholder: "",
            "aria-label": "",
            "aria-describedby": "",
            "onUpdate:modelValue": t[0] || (t[0] = (c) => e.prompt = c),
            required: ""
          }, null, 512), [
            [k, e.prompt]
          ])
        ]),
        H
      ], 32)
    ])) : f("", !0),
    e.showResults ? (r(), b(a, {
      key: 1,
      response: e.dataResponse
    }, null, 8, ["response"])) : f("", !0)
  ], 64);
}
const W = /* @__PURE__ */ m(E, [["render", K]]), X = d({
  name: "App",
  components: {
    SearchForm: W
  }
});
function Y(e, t, n, i, l, _) {
  const a = y("SearchForm");
  return r(), b(a);
}
const Z = /* @__PURE__ */ m(X, [["render", Y]]);
N(Z).mount("#mainAppSearch");
//# sourceMappingURL=vueappsearch.js.mjs.map
