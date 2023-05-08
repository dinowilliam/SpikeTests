import { defineComponent as p, openBlock as a, createElementBlock as l, createElementVNode as n, withModifiers as m, withDirectives as _, vModelText as u, resolveComponent as h, createBlock as f, createApp as S } from "vue";
const v = p({
  name: "SearchForm",
  data() {
    return {
      prompt: "",
      returnIsSucceed: !1
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
      console.log(prompt), fetch("/Search/GetSearchResults", t).then((o) => o.json()).then((o) => this.returnIsSucceed = o.result);
    }
  }
});
const i = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, c] of t)
    o[s] = c;
  return o;
}, b = { class: "container-fluid mt-5" }, g = /* @__PURE__ */ n("div", { class: "pt-5 pb-5" }, null, -1), y = /* @__PURE__ */ n("div", {
  class: "mt-5",
  id: "logo"
}, [
  /* @__PURE__ */ n("img", { src: "/img/lucene-net-color.png" })
], -1), $ = { class: "input-group pt-5 mb-3" }, k = /* @__PURE__ */ n("button", {
  type: "submit",
  class: "btn btn-lg btn-dark col-md-4"
}, "Search", -1);
function A(e, t, o, s, c, d) {
  return a(), l("div", b, [
    g,
    y,
    n("form", {
      onSubmit: t[1] || (t[1] = m((...r) => e.sendSearch && e.sendSearch(...r), ["prevent"]))
    }, [
      n("div", $, [
        _(n("input", {
          type: "text",
          class: "form-control",
          id: "search",
          name: "search",
          placeholder: "",
          "aria-label": "",
          "aria-describedby": "",
          "onUpdate:modelValue": t[0] || (t[0] = (r) => e.prompt = r),
          required: ""
        }, null, 512), [
          [u, e.prompt]
        ])
      ]),
      k
    ], 32)
  ]);
}
const F = /* @__PURE__ */ i(v, [["render", A]]), O = p({
  name: "App",
  components: {
    SearchForm: F
  }
});
function x(e, t, o, s, c, d) {
  const r = h("SearchForm");
  return a(), f(r);
}
const B = /* @__PURE__ */ i(O, [["render", x]]);
S(B).mount("#mainAppSearch");
