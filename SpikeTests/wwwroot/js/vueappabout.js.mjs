import u, { defineComponent as _, openBlock as i, createElementBlock as f, createElementVNode as n, createTextVNode as r, toDisplayString as a, resolveComponent as m, createBlock as g, createApp as v } from "vue";
const y = _({
  name: "Info",
  props: {
    msgAbove: {
      type: String,
      default: "Vue.js is an open-source MVVM (Model-View-ViewModel) JavaScript framework for building user interfaces and single-page applications."
    },
    msgUnder: {
      type: String,
      default: "This website is running Vue " + u.version + "."
    }
  }
});
const p = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, c] of t)
    s[o] = c;
  return s;
}, h = { class: "card bg-dark rounded shadow-lg h-100" }, $ = { class: "card-body" }, b = /* @__PURE__ */ n("span", { class: "color-cyanet" }, [
  /* @__PURE__ */ n("i", { class: "fab fa-6x fa-vuejs" })
], -1), V = { class: "mt-2 text-justify ind-2" }, A = /* @__PURE__ */ n("br", null, null, -1);
function k(e, t, s, o, c, d) {
  return i(), f("div", h, [
    n("div", $, [
      b,
      n("p", V, [
        r(a(e.msgAbove) + " ", 1),
        A,
        r(" " + a(e.msgUnder), 1)
      ])
    ])
  ]);
}
const x = /* @__PURE__ */ p(y, [["render", k]]), w = _({
  name: "App",
  components: {
    Info: x
  }
});
function I(e, t, s, o, c, d) {
  const l = m("Info");
  return i(), g(l);
}
const M = /* @__PURE__ */ p(w, [["render", I]]);
v(M).mount("#mainAppAbout");
