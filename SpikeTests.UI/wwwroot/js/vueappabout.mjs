import u, { defineComponent as i, openBlock as p, createElementBlock as m, createElementVNode as o, createTextVNode as a, toDisplayString as c, resolveComponent as _, createBlock as g, createApp as v } from "vue";
const $ = i({
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
}), d = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [s, r] of e)
    t[s] = r;
  return t;
}, b = { class: "card bg-dark rounded shadow-lg h-100" }, V = { class: "card-body" }, y = { class: "mt-2 text-justify ind-2" };
function A(n, e, t, s, r, l) {
  return p(), m("div", b, [
    o("div", V, [
      e[1] || (e[1] = o("span", { class: "color-cyanet" }, [
        o("i", { class: "fab fa-6x fa-vuejs" })
      ], -1)),
      o("p", y, [
        a(c(n.msgAbove) + " ", 1),
        e[0] || (e[0] = o("br", null, null, -1)),
        a(" " + c(n.msgUnder), 1)
      ])
    ])
  ]);
}
const k = /* @__PURE__ */ d($, [["render", A]]), w = i({
  name: "App",
  components: {
    Info: k
  }
});
function h(n, e, t, s, r, l) {
  const f = _("Info");
  return p(), g(f);
}
const x = /* @__PURE__ */ d(w, [["render", h]]);
v(x).mount("#mainAppAbout");
//# sourceMappingURL=vueappabout.mjs.map
