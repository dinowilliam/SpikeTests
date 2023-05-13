var b = Object.defineProperty;
var v = (e, t, n) => t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var m = (e, t, n) => (v(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as u, openBlock as o, createElementBlock as a, Fragment as h, renderList as _, createElementVNode as s, toDisplayString as p, createTextVNode as S, resolveComponent as P, withModifiers as $, withDirectives as w, vModelText as R, createCommentVNode as f, createBlock as y, createApp as k } from "vue";
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
      offset: Number,
      currentPage: Number,
      itemsPerPage: 6,
      pageOfItems: this.response.slice(0, 6)
    };
  },
  methods: {
    async onPageChange(e) {
      this.currentPage = e, this.offset = (e - 1) * this.itemsPerPage + 1 - 1, this.pageOfItems = await this.response.slice(
        this.offset,
        this.offset + this.itemsPerPage
      ), console.log("Internal Page: " + e), console.log("Current Page: " + this.currentPage);
    }
  },
  computed: {
    rows() {
      return this.response.length;
    },
    pages() {
      let e;
      e = new Array();
      for (let t = this.startPageRange; t <= this.endPageRange; t += 1) {
        let n = new C();
        n.pageNumber = t, e.push(n);
      }
      return e;
    },
    pageQuantity() {
      return Math.ceil(this.response.length / this.itemsPerPage);
    },
    previousPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.pageQuantity ? this.currentPage + 1 : this.pageQuantity();
    },
    startPageRange: function() {
      let e;
      return (this.currentPage = 1) && (e = 1), this.currentPage > 1 && (e = this.currentPage + 1), e;
    },
    endPageRange: function() {
      return this.startPageRange + 40;
    }
  }
});
const d = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [c, l] of t)
    n[c] = l;
  return n;
}, A = { class: "text-start" }, O = { class: "d-flex text-body-secondary pt-3" }, F = /* @__PURE__ */ s("span", { class: "me-1" }, [
  /* @__PURE__ */ s("img", {
    src: " https://www.dinowilliam.com/lib/assets/logo.png",
    height: "16",
    width: "72",
    loading: "lazy"
  })
], -1), x = { class: "pb-3 mb-0 small lh-sm border-bottom" }, I = { class: "h6" }, T = ["href"], V = { "aria-label": "Page navigation example" }, j = { class: "pagination justify-content-center" }, q = { class: "page-item disabled" }, B = { class: "page-item" }, M = ["onClick"], Q = { class: "page-item" };
function D(e, t, n, c, l, g) {
  return o(), a("div", null, [
    (o(!0), a(h, null, _(e.pageOfItems, (r, i) => (o(), a("div", A, [
      s("div", O, [
        F,
        s("p", x, [
          s("p", I, p(r.url), 1),
          s("p", null, [
            s("a", {
              class: "h4",
              href: r.url
            }, p(r.title), 9, T)
          ]),
          S(" " + p(r.description), 1)
        ])
      ])
    ]))), 256)),
    s("nav", V, [
      s("ul", j, [
        s("li", q, [
          s("a", {
            class: "page-link",
            onClick: t[0] || (t[0] = (r) => e.onPageChange(e.previousPage))
          }, "Previous")
        ]),
        (o(!0), a(h, null, _(e.pages, (r) => (o(), a("li", B, [
          s("a", {
            class: "page-link",
            onClick: (i) => e.onPageChange(r.pageNumber)
          }, p(r.pageNumber), 9, M)
        ]))), 256)),
        s("li", Q, [
          s("a", {
            class: "page-link",
            onClick: t[1] || (t[1] = (r) => e.onPageChange(e.nextPage))
          }, "Next")
        ])
      ])
    ])
  ]);
}
const E = /* @__PURE__ */ d(N, [["render", D]]), z = u({
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
function K(e, t, n, c, l, g) {
  const r = P("SearchResults");
  return o(), a(h, null, [
    e.showSearch ? (o(), a("div", J, [
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
    ])) : f("", !0),
    e.showResults ? (o(), y(r, {
      key: 1,
      response: e.dataResponse
    }, null, 8, ["response"])) : f("", !0)
  ], 64);
}
const W = /* @__PURE__ */ d(z, [["render", K]]), X = u({
  name: "App",
  components: {
    SearchForm: W
  }
});
function Y(e, t, n, c, l, g) {
  const r = P("SearchForm");
  return o(), y(r);
}
const Z = /* @__PURE__ */ d(X, [["render", Y]]);
k(Z).mount("#mainAppSearch");
//# sourceMappingURL=vueappsearch.js.mjs.map
