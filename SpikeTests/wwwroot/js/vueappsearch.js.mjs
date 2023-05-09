import { defineComponent as h, openBlock as o, createElementBlock as i, Fragment as d, renderList as m, createElementVNode as t, toDisplayString as c, createTextVNode as y, resolveComponent as f, withModifiers as v, withDirectives as b, vModelText as S, createCommentVNode as _, createBlock as P, createApp as $ } from "vue";
const k = h({
  name: "SearchResults",
  props: { response: Array },
  data() {
    return {
      offset: Number,
      currentPage: 1,
      itemsPerPage: 7,
      pageOfItems: this.response.slice(0, 7)
    };
  },
  methods: {
    async onPageChange(e) {
      e != 1 && (this.currentPage = e), this.offset = (e - 1) * this.itemsPerPage + 1 - 1, this.pageOfItems = await this.response.slice(this.offset, this.offset + this.itemsPerPage);
    },
    *range(e, s, r = 1) {
      for (let a = e; a <= s; a += r)
        yield a;
    }
  },
  computed: {
    pageQuantity() {
      return Math.ceil(this.response.length / this.itemsPerPage);
    },
    previousPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.pageQuantity ? this.currentPage + 1 : this.pageQuantity();
    },
    starterPageRange() {
      let e;
      return (this.currentPage = 1) && (e = 1), e;
    },
    endPageRange() {
      let e;
      return this.currentPage <= this.pageQuantity && (e = this.currentPage + 20), e;
    }
  }
});
const u = (e, s) => {
  const r = e.__vccOpts || e;
  for (const [a, p] of s)
    r[a] = p;
  return r;
}, R = { class: "text-start" }, w = { class: "d-flex text-body-secondary pt-3" }, C = /* @__PURE__ */ t("svg", {
  class: "bd-placeholder-img flex-shrink-0 me-2 rounded",
  width: "32",
  height: "32",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-label": "Placeholder: 32x32",
  preserveAspectRatio: "xMidYMid slice",
  focusable: "false"
}, [
  /* @__PURE__ */ t("title", null, "Placeholder"),
  /* @__PURE__ */ t("rect", {
    width: "100%",
    height: "100%",
    fill: "#007bff"
  }),
  /* @__PURE__ */ t("text", {
    x: "50%",
    y: "50%",
    fill: "#007bff",
    dy: ".3em"
  }, "32x32")
], -1), x = { class: "pb-3 mb-0 small lh-sm border-bottom" }, A = { class: "d-block text-gray-dark" }, O = { class: "d-block text-gray-dark" }, F = { "aria-label": "Page navigation example" }, N = { class: "pagination justify-content-center" }, M = { class: "page-item disabled" }, Q = { class: "page-item" }, T = ["onClick"], V = { class: "page-item" };
function j(e, s, r, a, p, g) {
  return o(), i("div", null, [
    (o(!0), i(d, null, m(e.pageOfItems, (n, l) => (o(), i("div", R, [
      t("div", w, [
        C,
        t("p", x, [
          t("p", null, c(n.url), 1),
          t("strong", A, c(n.date), 1),
          t("strong", O, c(n.summary), 1),
          y(" " + c(n.description), 1)
        ])
      ])
    ]))), 256)),
    t("nav", F, [
      t("ul", N, [
        t("li", M, [
          t("a", {
            class: "page-link",
            onClick: s[0] || (s[0] = (n) => e.onPageChange(e.previousPage))
          }, "Previous")
        ]),
        (o(!0), i(d, null, m(e.range(e.starterPageRange, e.endPageRange), (n) => (o(), i("li", Q, [
          t("a", {
            class: "page-link",
            onClick: (l) => e.onPageChange(n)
          }, c(n), 9, T)
        ]))), 256)),
        t("li", V, [
          t("a", {
            class: "page-link",
            onClick: s[1] || (s[1] = (n) => e.onPageChange(e.nextPage))
          }, "Next")
        ])
      ])
    ])
  ]);
}
const B = /* @__PURE__ */ u(k, [["render", j]]), I = h({
  name: "SearchForm",
  components: { SearchResults: B },
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
      const s = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e)
      };
      return console.log(prompt), fetch("https://localhost:44354/Search", s).then((r) => r.json()).then((r) => (this.dataResponse = r, this.showSearch = !1));
    }
  },
  computed: {
    showResults() {
      return !this.showSearch;
    }
  }
});
const q = {
  key: 0,
  class: "container-fluid mt-5"
}, D = /* @__PURE__ */ t("div", { class: "pt-5 pb-5" }, null, -1), E = /* @__PURE__ */ t("div", {
  class: "mt-5",
  id: "logo"
}, [
  /* @__PURE__ */ t("img", { src: "/img/lucene-net-color.png" })
], -1), J = { class: "input-group pt-5 mb-3" }, L = /* @__PURE__ */ t("button", {
  type: "submit",
  class: "btn btn-lg btn-dark col-md-4"
}, "Search", -1);
function U(e, s, r, a, p, g) {
  const n = f("SearchResults");
  return o(), i(d, null, [
    e.showSearch ? (o(), i("div", q, [
      D,
      E,
      t("form", {
        onSubmit: s[1] || (s[1] = v((...l) => e.sendSearch && e.sendSearch(...l), ["prevent"]))
      }, [
        t("div", J, [
          b(t("input", {
            type: "text",
            class: "form-control",
            id: "search",
            name: "search",
            placeholder: "",
            "aria-label": "",
            "aria-describedby": "",
            "onUpdate:modelValue": s[0] || (s[0] = (l) => e.prompt = l),
            required: ""
          }, null, 512), [
            [S, e.prompt]
          ])
        ]),
        L
      ], 32)
    ])) : _("", !0),
    e.showResults ? (o(), P(n, {
      key: 1,
      response: e.dataResponse
    }, null, 8, ["response"])) : _("", !0)
  ], 64);
}
const Y = /* @__PURE__ */ u(I, [["render", U]]), z = h({
  name: "App",
  components: {
    SearchForm: Y
  }
});
function G(e, s, r, a, p, g) {
  const n = f("SearchForm");
  return o(), P(n);
}
const H = /* @__PURE__ */ u(z, [["render", G]]);
$(H).mount("#mainAppSearch");
