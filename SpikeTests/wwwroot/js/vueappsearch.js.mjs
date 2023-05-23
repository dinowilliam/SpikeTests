var Sr = Object.defineProperty;
var kr = (e, t, s) => t in e ? Sr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var Bt = (e, t, s) => (kr(e, typeof t != "symbol" ? t + "" : t, s), s);
import { defineComponent as ct, resolveComponent as Mr, openBlock as Te, createBlock as Dr, shallowRef as Or, unref as et, computed as ne, reactive as mn, nextTick as Yr, inject as at, h as pn, provide as Zt, ref as Pr, watch as br, createElementBlock as Ae, createElementVNode as I, withModifiers as Rr, withDirectives as Tr, vModelText as xr, createCommentVNode as Er, Fragment as Gs, renderList as $s, createTextVNode as js, toDisplayString as Qe, normalizeClass as qt, createApp as Nr } from "vue";
const Cr = ct({
  name: "App"
});
const ds = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
};
function Wr(e, t, s, n, r, a) {
  const i = Mr("router-view");
  return Te(), Dr(i);
}
const Ar = /* @__PURE__ */ ds(Cr, [["render", Wr]]);
/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Fe = typeof window < "u";
function Fr(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const E = Object.assign;
function Qt(e, t) {
  const s = {};
  for (const n in t) {
    const r = t[n];
    s[n] = ae(r) ? r.map(e) : e(r);
  }
  return s;
}
const tt = () => {
}, ae = Array.isArray, Lr = /\/$/, Ir = (e) => e.replace(Lr, "");
function Kt(e, t, s = "/") {
  let n, r = {}, a = "", i = "";
  const u = t.indexOf("#");
  let o = t.indexOf("?");
  return u < o && u >= 0 && (o = -1), o > -1 && (n = t.slice(0, o), a = t.slice(o + 1, u > -1 ? u : t.length), r = e(a)), u > -1 && (n = n || t.slice(0, u), i = t.slice(u, t.length)), n = Gr(n != null ? n : t, s), {
    fullPath: n + (a && "?") + a + i,
    path: n,
    query: r,
    hash: i
  };
}
function Ur(e, t) {
  const s = t.query ? e(t.query) : "";
  return t.path + (s && "?") + s + (t.hash || "");
}
function zs(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Hr(e, t, s) {
  const n = t.matched.length - 1, r = s.matched.length - 1;
  return n > -1 && n === r && Ge(t.matched[n], s.matched[r]) && _n(t.params, s.params) && e(t.query) === e(s.query) && t.hash === s.hash;
}
function Ge(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function _n(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const s in e)
    if (!Vr(e[s], t[s]))
      return !1;
  return !0;
}
function Vr(e, t) {
  return ae(e) ? Bs(e, t) : ae(t) ? Bs(t, e) : e === t;
}
function Bs(e, t) {
  return ae(t) ? e.length === t.length && e.every((s, n) => s === t[n]) : e.length === 1 && e[0] === t;
}
function Gr(e, t) {
  if (e.startsWith("/"))
    return e;
  if (!e)
    return t;
  const s = t.split("/"), n = e.split("/"), r = n[n.length - 1];
  (r === ".." || r === ".") && n.push("");
  let a = s.length - 1, i, u;
  for (i = 0; i < n.length; i++)
    if (u = n[i], u !== ".")
      if (u === "..")
        a > 1 && a--;
      else
        break;
  return s.slice(0, a).join("/") + "/" + n.slice(i - (i === n.length ? 1 : 0)).join("/");
}
var it;
(function(e) {
  e.pop = "pop", e.push = "push";
})(it || (it = {}));
var st;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(st || (st = {}));
function $r(e) {
  if (!e)
    if (Fe) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ir(e);
}
const jr = /^[^#]+#/;
function zr(e, t) {
  return e.replace(jr, "#") + t;
}
function Br(e, t) {
  const s = document.documentElement.getBoundingClientRect(), n = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: n.left - s.left - (t.left || 0),
    top: n.top - s.top - (t.top || 0)
  };
}
const Rt = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function Zr(e) {
  let t;
  if ("el" in e) {
    const s = e.el, n = typeof s == "string" && s.startsWith("#"), r = typeof s == "string" ? n ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
    if (!r)
      return;
    t = Br(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Zs(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ns = /* @__PURE__ */ new Map();
function qr(e, t) {
  ns.set(e, t);
}
function Qr(e) {
  const t = ns.get(e);
  return ns.delete(e), t;
}
let Kr = () => location.protocol + "//" + location.host;
function yn(e, t) {
  const { pathname: s, search: n, hash: r } = t, a = e.indexOf("#");
  if (a > -1) {
    let u = r.includes(e.slice(a)) ? e.slice(a).length : 1, o = r.slice(u);
    return o[0] !== "/" && (o = "/" + o), zs(o, "");
  }
  return zs(s, e) + n + r;
}
function Jr(e, t, s, n) {
  let r = [], a = [], i = null;
  const u = ({ state: m }) => {
    const w = yn(e, location), O = s.value, H = t.value;
    let L = 0;
    if (m) {
      if (s.value = w, t.value = m, i && i === O) {
        i = null;
        return;
      }
      L = H ? m.position - H.position : 0;
    } else
      n(w);
    r.forEach((Y) => {
      Y(s.value, O, {
        delta: L,
        type: it.pop,
        direction: L ? L > 0 ? st.forward : st.back : st.unknown
      });
    });
  };
  function o() {
    i = s.value;
  }
  function c(m) {
    r.push(m);
    const w = () => {
      const O = r.indexOf(m);
      O > -1 && r.splice(O, 1);
    };
    return a.push(w), w;
  }
  function l() {
    const { history: m } = window;
    !m.state || m.replaceState(E({}, m.state, { scroll: Rt() }), "");
  }
  function h() {
    for (const m of a)
      m();
    a = [], window.removeEventListener("popstate", u), window.removeEventListener("beforeunload", l);
  }
  return window.addEventListener("popstate", u), window.addEventListener("beforeunload", l, {
    passive: !0
  }), {
    pauseListeners: o,
    listen: c,
    destroy: h
  };
}
function qs(e, t, s, n = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: s,
    replaced: n,
    position: window.history.length,
    scroll: r ? Rt() : null
  };
}
function Xr(e) {
  const { history: t, location: s } = window, n = {
    value: yn(e, s)
  }, r = { value: t.state };
  r.value || a(n.value, {
    back: null,
    current: n.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function a(o, c, l) {
    const h = e.indexOf("#"), m = h > -1 ? (s.host && document.querySelector("base") ? e : e.slice(h)) + o : Kr() + e + o;
    try {
      t[l ? "replaceState" : "pushState"](c, "", m), r.value = c;
    } catch (w) {
      console.error(w), s[l ? "replace" : "assign"](m);
    }
  }
  function i(o, c) {
    const l = E({}, t.state, qs(
      r.value.back,
      o,
      r.value.forward,
      !0
    ), c, { position: r.value.position });
    a(o, l, !0), n.value = o;
  }
  function u(o, c) {
    const l = E(
      {},
      r.value,
      t.state,
      {
        forward: o,
        scroll: Rt()
      }
    );
    a(l.current, l, !0);
    const h = E({}, qs(n.value, o, null), { position: l.position + 1 }, c);
    a(o, h, !1), n.value = o;
  }
  return {
    location: n,
    state: r,
    push: u,
    replace: i
  };
}
function ea(e) {
  e = $r(e);
  const t = Xr(e), s = Jr(e, t.state, t.location, t.replace);
  function n(a, i = !0) {
    i || s.pauseListeners(), history.go(a);
  }
  const r = E({
    location: "",
    base: e,
    go: n,
    createHref: zr.bind(null, e)
  }, t, s);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function ta(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function gn(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Me = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, vn = Symbol("");
var Qs;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Qs || (Qs = {}));
function $e(e, t) {
  return E(new Error(), {
    type: e,
    [vn]: !0
  }, t);
}
function me(e, t) {
  return e instanceof Error && vn in e && (t == null || !!(e.type & t));
}
const Ks = "[^/]+?", sa = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, na = /[.+*?^${}()[\]/\\]/g;
function ra(e, t) {
  const s = E({}, sa, t), n = [];
  let r = s.start ? "^" : "";
  const a = [];
  for (const c of e) {
    const l = c.length ? [] : [90];
    s.strict && !c.length && (r += "/");
    for (let h = 0; h < c.length; h++) {
      const m = c[h];
      let w = 40 + (s.sensitive ? 0.25 : 0);
      if (m.type === 0)
        h || (r += "/"), r += m.value.replace(na, "\\$&"), w += 40;
      else if (m.type === 1) {
        const { value: O, repeatable: H, optional: L, regexp: Y } = m;
        a.push({
          name: O,
          repeatable: H,
          optional: L
        });
        const R = Y || Ks;
        if (R !== Ks) {
          w += 10;
          try {
            new RegExp(`(${R})`);
          } catch (se) {
            throw new Error(`Invalid custom RegExp for param "${O}" (${R}): ` + se.message);
          }
        }
        let Z = H ? `((?:${R})(?:/(?:${R}))*)` : `(${R})`;
        h || (Z = L && c.length < 2 ? `(?:/${Z})` : "/" + Z), L && (Z += "?"), r += Z, w += 20, L && (w += -8), H && (w += -20), R === ".*" && (w += -50);
      }
      l.push(w);
    }
    n.push(l);
  }
  if (s.strict && s.end) {
    const c = n.length - 1;
    n[c][n[c].length - 1] += 0.7000000000000001;
  }
  s.strict || (r += "/?"), s.end ? r += "$" : s.strict && (r += "(?:/|$)");
  const i = new RegExp(r, s.sensitive ? "" : "i");
  function u(c) {
    const l = c.match(i), h = {};
    if (!l)
      return null;
    for (let m = 1; m < l.length; m++) {
      const w = l[m] || "", O = a[m - 1];
      h[O.name] = w && O.repeatable ? w.split("/") : w;
    }
    return h;
  }
  function o(c) {
    let l = "", h = !1;
    for (const m of e) {
      (!h || !l.endsWith("/")) && (l += "/"), h = !1;
      for (const w of m)
        if (w.type === 0)
          l += w.value;
        else if (w.type === 1) {
          const { value: O, repeatable: H, optional: L } = w, Y = O in c ? c[O] : "";
          if (ae(Y) && !H)
            throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);
          const R = ae(Y) ? Y.join("/") : Y;
          if (!R)
            if (L)
              m.length < 2 && (l.endsWith("/") ? l = l.slice(0, -1) : h = !0);
            else
              throw new Error(`Missing required param "${O}"`);
          l += R;
        }
    }
    return l || "/";
  }
  return {
    re: i,
    score: n,
    keys: a,
    parse: u,
    stringify: o
  };
}
function aa(e, t) {
  let s = 0;
  for (; s < e.length && s < t.length; ) {
    const n = t[s] - e[s];
    if (n)
      return n;
    s++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function ia(e, t) {
  let s = 0;
  const n = e.score, r = t.score;
  for (; s < n.length && s < r.length; ) {
    const a = aa(n[s], r[s]);
    if (a)
      return a;
    s++;
  }
  if (Math.abs(r.length - n.length) === 1) {
    if (Js(n))
      return 1;
    if (Js(r))
      return -1;
  }
  return r.length - n.length;
}
function Js(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const oa = {
  type: 0,
  value: ""
}, la = /[a-zA-Z0-9_]/;
function ua(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[oa]];
  if (!e.startsWith("/"))
    throw new Error(`Invalid path "${e}"`);
  function t(w) {
    throw new Error(`ERR (${s})/"${c}": ${w}`);
  }
  let s = 0, n = s;
  const r = [];
  let a;
  function i() {
    a && r.push(a), a = [];
  }
  let u = 0, o, c = "", l = "";
  function h() {
    !c || (s === 0 ? a.push({
      type: 0,
      value: c
    }) : s === 1 || s === 2 || s === 3 ? (a.length > 1 && (o === "*" || o === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: c,
      regexp: l,
      repeatable: o === "*" || o === "+",
      optional: o === "*" || o === "?"
    })) : t("Invalid state to consume buffer"), c = "");
  }
  function m() {
    c += o;
  }
  for (; u < e.length; ) {
    if (o = e[u++], o === "\\" && s !== 2) {
      n = s, s = 4;
      continue;
    }
    switch (s) {
      case 0:
        o === "/" ? (c && h(), i()) : o === ":" ? (h(), s = 1) : m();
        break;
      case 4:
        m(), s = n;
        break;
      case 1:
        o === "(" ? s = 2 : la.test(o) ? m() : (h(), s = 0, o !== "*" && o !== "?" && o !== "+" && u--);
        break;
      case 2:
        o === ")" ? l[l.length - 1] == "\\" ? l = l.slice(0, -1) + o : s = 3 : l += o;
        break;
      case 3:
        h(), s = 0, o !== "*" && o !== "?" && o !== "+" && u--, l = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return s === 2 && t(`Unfinished custom RegExp for param "${c}"`), h(), i(), r;
}
function ca(e, t, s) {
  const n = ra(ua(e.path), s), r = E(n, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function fa(e, t) {
  const s = [], n = /* @__PURE__ */ new Map();
  t = tn({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(l) {
    return n.get(l);
  }
  function a(l, h, m) {
    const w = !m, O = ha(l);
    O.aliasOf = m && m.record;
    const H = tn(t, l), L = [
      O
    ];
    if ("alias" in l) {
      const Z = typeof l.alias == "string" ? [l.alias] : l.alias;
      for (const se of Z)
        L.push(E({}, O, {
          components: m ? m.record.components : O.components,
          path: se,
          aliasOf: m ? m.record : O
        }));
    }
    let Y, R;
    for (const Z of L) {
      const { path: se } = Z;
      if (h && se[0] !== "/") {
        const be = h.record.path, de = be[be.length - 1] === "/" ? "" : "/";
        Z.path = h.record.path + (se && de + se);
      }
      if (Y = ca(Z, h, H), m ? m.alias.push(Y) : (R = R || Y, R !== Y && R.alias.push(Y), w && l.name && !en(Y) && i(l.name)), O.children) {
        const be = O.children;
        for (let de = 0; de < be.length; de++)
          a(be[de], Y, m && m.children[de]);
      }
      m = m || Y, (Y.record.components && Object.keys(Y.record.components).length || Y.record.name || Y.record.redirect) && o(Y);
    }
    return R ? () => {
      i(R);
    } : tt;
  }
  function i(l) {
    if (gn(l)) {
      const h = n.get(l);
      h && (n.delete(l), s.splice(s.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i));
    } else {
      const h = s.indexOf(l);
      h > -1 && (s.splice(h, 1), l.record.name && n.delete(l.record.name), l.children.forEach(i), l.alias.forEach(i));
    }
  }
  function u() {
    return s;
  }
  function o(l) {
    let h = 0;
    for (; h < s.length && ia(l, s[h]) >= 0 && (l.record.path !== s[h].record.path || !wn(l, s[h])); )
      h++;
    s.splice(h, 0, l), l.record.name && !en(l) && n.set(l.record.name, l);
  }
  function c(l, h) {
    let m, w = {}, O, H;
    if ("name" in l && l.name) {
      if (m = n.get(l.name), !m)
        throw $e(1, {
          location: l
        });
      H = m.record.name, w = E(
        Xs(
          h.params,
          m.keys.filter((R) => !R.optional).map((R) => R.name)
        ),
        l.params && Xs(l.params, m.keys.map((R) => R.name))
      ), O = m.stringify(w);
    } else if ("path" in l)
      O = l.path, m = s.find((R) => R.re.test(O)), m && (w = m.parse(O), H = m.record.name);
    else {
      if (m = h.name ? n.get(h.name) : s.find((R) => R.re.test(h.path)), !m)
        throw $e(1, {
          location: l,
          currentLocation: h
        });
      H = m.record.name, w = E({}, h.params, l.params), O = m.stringify(w);
    }
    const L = [];
    let Y = m;
    for (; Y; )
      L.unshift(Y.record), Y = Y.parent;
    return {
      name: H,
      path: O,
      params: w,
      matched: L,
      meta: ma(L)
    };
  }
  return e.forEach((l) => a(l)), { addRoute: a, resolve: c, removeRoute: i, getRoutes: u, getRecordMatcher: r };
}
function Xs(e, t) {
  const s = {};
  for (const n of t)
    n in e && (s[n] = e[n]);
  return s;
}
function ha(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: da(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function da(e) {
  const t = {}, s = e.props || !1;
  if ("component" in e)
    t.default = s;
  else
    for (const n in e.components)
      t[n] = typeof s == "boolean" ? s : s[n];
  return t;
}
function en(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function ma(e) {
  return e.reduce((t, s) => E(t, s.meta), {});
}
function tn(e, t) {
  const s = {};
  for (const n in e)
    s[n] = n in t ? t[n] : e[n];
  return s;
}
function wn(e, t) {
  return t.children.some((s) => s === e || wn(e, s));
}
const Sn = /#/g, pa = /&/g, _a = /\//g, ya = /=/g, ga = /\?/g, kn = /\+/g, va = /%5B/g, wa = /%5D/g, Mn = /%5E/g, Sa = /%60/g, Dn = /%7B/g, ka = /%7C/g, On = /%7D/g, Ma = /%20/g;
function ms(e) {
  return encodeURI("" + e).replace(ka, "|").replace(va, "[").replace(wa, "]");
}
function Da(e) {
  return ms(e).replace(Dn, "{").replace(On, "}").replace(Mn, "^");
}
function rs(e) {
  return ms(e).replace(kn, "%2B").replace(Ma, "+").replace(Sn, "%23").replace(pa, "%26").replace(Sa, "`").replace(Dn, "{").replace(On, "}").replace(Mn, "^");
}
function Oa(e) {
  return rs(e).replace(ya, "%3D");
}
function Ya(e) {
  return ms(e).replace(Sn, "%23").replace(ga, "%3F");
}
function Pa(e) {
  return e == null ? "" : Ya(e).replace(_a, "%2F");
}
function kt(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
function ba(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const a = n[r].replace(kn, " "), i = a.indexOf("="), u = kt(i < 0 ? a : a.slice(0, i)), o = i < 0 ? null : kt(a.slice(i + 1));
    if (u in t) {
      let c = t[u];
      ae(c) || (c = t[u] = [c]), c.push(o);
    } else
      t[u] = o;
  }
  return t;
}
function sn(e) {
  let t = "";
  for (let s in e) {
    const n = e[s];
    if (s = Oa(s), n == null) {
      n !== void 0 && (t += (t.length ? "&" : "") + s);
      continue;
    }
    (ae(n) ? n.map((a) => a && rs(a)) : [n && rs(n)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + s, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Ra(e) {
  const t = {};
  for (const s in e) {
    const n = e[s];
    n !== void 0 && (t[s] = ae(n) ? n.map((r) => r == null ? null : "" + r) : n == null ? n : "" + n);
  }
  return t;
}
const Ta = Symbol(""), nn = Symbol(""), ps = Symbol(""), Yn = Symbol(""), as = Symbol("");
function Ke() {
  let e = [];
  function t(n) {
    return e.push(n), () => {
      const r = e.indexOf(n);
      r > -1 && e.splice(r, 1);
    };
  }
  function s() {
    e = [];
  }
  return {
    add: t,
    list: () => e,
    reset: s
  };
}
function De(e, t, s, n, r) {
  const a = n && (n.enterCallbacks[r] = n.enterCallbacks[r] || []);
  return () => new Promise((i, u) => {
    const o = (h) => {
      h === !1 ? u($e(4, {
        from: s,
        to: t
      })) : h instanceof Error ? u(h) : ta(h) ? u($e(2, {
        from: t,
        to: h
      })) : (a && n.enterCallbacks[r] === a && typeof h == "function" && a.push(h), i());
    }, c = e.call(n && n.instances[r], t, s, o);
    let l = Promise.resolve(c);
    e.length < 3 && (l = l.then(o)), l.catch((h) => u(h));
  });
}
function Jt(e, t, s, n) {
  const r = [];
  for (const a of e)
    for (const i in a.components) {
      let u = a.components[i];
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (xa(u)) {
          const c = (u.__vccOpts || u)[t];
          c && r.push(De(c, s, n, a, i));
        } else {
          let o = u();
          r.push(() => o.then((c) => {
            if (!c)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const l = Fr(c) ? c.default : c;
            a.components[i] = l;
            const m = (l.__vccOpts || l)[t];
            return m && De(m, s, n, a, i)();
          }));
        }
    }
  return r;
}
function xa(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function rn(e) {
  const t = at(ps), s = at(Yn), n = ne(() => t.resolve(et(e.to))), r = ne(() => {
    const { matched: o } = n.value, { length: c } = o, l = o[c - 1], h = s.matched;
    if (!l || !h.length)
      return -1;
    const m = h.findIndex(Ge.bind(null, l));
    if (m > -1)
      return m;
    const w = an(o[c - 2]);
    return c > 1 && an(l) === w && h[h.length - 1].path !== w ? h.findIndex(Ge.bind(null, o[c - 2])) : m;
  }), a = ne(() => r.value > -1 && Wa(s.params, n.value.params)), i = ne(() => r.value > -1 && r.value === s.matched.length - 1 && _n(s.params, n.value.params));
  function u(o = {}) {
    return Ca(o) ? t[et(e.replace) ? "replace" : "push"](
      et(e.to)
    ).catch(tt) : Promise.resolve();
  }
  return {
    route: n,
    href: ne(() => n.value.href),
    isActive: a,
    isExactActive: i,
    navigate: u
  };
}
const Ea = /* @__PURE__ */ ct({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: rn,
  setup(e, { slots: t }) {
    const s = mn(rn(e)), { options: n } = at(ps), r = ne(() => ({
      [on(e.activeClass, n.linkActiveClass, "router-link-active")]: s.isActive,
      [on(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
    }));
    return () => {
      const a = t.default && t.default(s);
      return e.custom ? a : pn("a", {
        "aria-current": s.isExactActive ? e.ariaCurrentValue : null,
        href: s.href,
        onClick: s.navigate,
        class: r.value
      }, a);
    };
  }
}), Na = Ea;
function Ca(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Wa(e, t) {
  for (const s in t) {
    const n = t[s], r = e[s];
    if (typeof n == "string") {
      if (n !== r)
        return !1;
    } else if (!ae(r) || r.length !== n.length || n.some((a, i) => a !== r[i]))
      return !1;
  }
  return !0;
}
function an(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const on = (e, t, s) => e != null ? e : t != null ? t : s, Aa = /* @__PURE__ */ ct({
  name: "RouterView",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: s }) {
    const n = at(as), r = ne(() => e.route || n.value), a = at(nn, 0), i = ne(() => {
      let c = et(a);
      const { matched: l } = r.value;
      let h;
      for (; (h = l[c]) && !h.components; )
        c++;
      return c;
    }), u = ne(() => r.value.matched[i.value]);
    Zt(nn, ne(() => i.value + 1)), Zt(Ta, u), Zt(as, r);
    const o = Pr();
    return br(() => [o.value, u.value, e.name], ([c, l, h], [m, w, O]) => {
      l && (l.instances[h] = c, w && w !== l && c && c === m && (l.leaveGuards.size || (l.leaveGuards = w.leaveGuards), l.updateGuards.size || (l.updateGuards = w.updateGuards))), c && l && (!w || !Ge(l, w) || !m) && (l.enterCallbacks[h] || []).forEach((H) => H(c));
    }, { flush: "post" }), () => {
      const c = r.value, l = e.name, h = u.value, m = h && h.components[l];
      if (!m)
        return ln(s.default, { Component: m, route: c });
      const w = h.props[l], O = w ? w === !0 ? c.params : typeof w == "function" ? w(c) : w : null, L = pn(m, E({}, O, t, {
        onVnodeUnmounted: (Y) => {
          Y.component.isUnmounted && (h.instances[l] = null);
        },
        ref: o
      }));
      return ln(s.default, { Component: L, route: c }) || L;
    };
  }
});
function ln(e, t) {
  if (!e)
    return null;
  const s = e(t);
  return s.length === 1 ? s[0] : s;
}
const Fa = Aa;
function La(e) {
  const t = fa(e.routes, e), s = e.parseQuery || ba, n = e.stringifyQuery || sn, r = e.history, a = Ke(), i = Ke(), u = Ke(), o = Or(Me);
  let c = Me;
  Fe && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const l = Qt.bind(null, (f) => "" + f), h = Qt.bind(null, Pa), m = Qt.bind(null, kt);
  function w(f, g) {
    let _, S;
    return gn(f) ? (_ = t.getRecordMatcher(f), S = g) : S = f, t.addRoute(S, _);
  }
  function O(f) {
    const g = t.getRecordMatcher(f);
    g && t.removeRoute(g);
  }
  function H() {
    return t.getRoutes().map((f) => f.record);
  }
  function L(f) {
    return !!t.getRecordMatcher(f);
  }
  function Y(f, g) {
    if (g = E({}, g || o.value), typeof f == "string") {
      const M = Kt(s, f, g.path), G = t.resolve({ path: M.path }, g), qe = r.createHref(M.fullPath);
      return E(M, G, {
        params: m(G.params),
        hash: kt(M.hash),
        redirectedFrom: void 0,
        href: qe
      });
    }
    let _;
    if ("path" in f)
      _ = E({}, f, {
        path: Kt(s, f.path, g.path).path
      });
    else {
      const M = E({}, f.params);
      for (const G in M)
        M[G] == null && delete M[G];
      _ = E({}, f, {
        params: h(M)
      }), g.params = h(g.params);
    }
    const S = t.resolve(_, g), C = f.hash || "";
    S.params = l(m(S.params));
    const V = Ur(n, E({}, f, {
      hash: Da(C),
      path: S.path
    })), P = r.createHref(V);
    return E({
      fullPath: V,
      hash: C,
      query: n === sn ? Ra(f.query) : f.query || {}
    }, S, {
      redirectedFrom: void 0,
      href: P
    });
  }
  function R(f) {
    return typeof f == "string" ? Kt(s, f, o.value.path) : E({}, f);
  }
  function Z(f, g) {
    if (c !== f)
      return $e(8, {
        from: g,
        to: f
      });
  }
  function se(f) {
    return Be(f);
  }
  function be(f) {
    return se(E(R(f), { replace: !0 }));
  }
  function de(f) {
    const g = f.matched[f.matched.length - 1];
    if (g && g.redirect) {
      const { redirect: _ } = g;
      let S = typeof _ == "function" ? _(f) : _;
      return typeof S == "string" && (S = S.includes("?") || S.includes("#") ? S = R(S) : { path: S }, S.params = {}), E({
        query: f.query,
        hash: f.hash,
        params: "path" in S ? {} : f.params
      }, S);
    }
  }
  function Be(f, g) {
    const _ = c = Y(f), S = o.value, C = f.state, V = f.force, P = f.replace === !0, M = de(_);
    if (M)
      return Be(
        E(R(M), {
          state: typeof M == "object" ? E({}, C, M.state) : C,
          force: V,
          replace: P
        }),
        g || _
      );
    const G = _;
    G.redirectedFrom = g;
    let qe;
    return !V && Hr(n, S, _) && (qe = $e(16, { to: G, from: S }), Hs(
      S,
      S,
      !0,
      !1
    )), (qe ? Promise.resolve(qe) : Fs(G, S)).catch((q) => me(q) ? me(q, 2) ? q : $t(q) : Gt(q, G, S)).then((q) => {
      if (q) {
        if (me(q, 2))
          return Be(
            E({
              replace: P
            }, R(q.to), {
              state: typeof q.to == "object" ? E({}, C, q.to.state) : C,
              force: V
            }),
            g || G
          );
      } else
        q = Is(G, S, !0, P, C);
      return Ls(G, S, q), q;
    });
  }
  function gr(f, g) {
    const _ = Z(f, g);
    return _ ? Promise.reject(_) : Promise.resolve();
  }
  function As(f) {
    const g = _t.values().next().value;
    return g && typeof g.runWithContext == "function" ? g.runWithContext(f) : f();
  }
  function Fs(f, g) {
    let _;
    const [S, C, V] = Ia(f, g);
    _ = Jt(S.reverse(), "beforeRouteLeave", f, g);
    for (const M of S)
      M.leaveGuards.forEach((G) => {
        _.push(De(G, f, g));
      });
    const P = gr.bind(null, f, g);
    return _.push(P), Ce(_).then(() => {
      _ = [];
      for (const M of a.list())
        _.push(De(M, f, g));
      return _.push(P), Ce(_);
    }).then(() => {
      _ = Jt(C, "beforeRouteUpdate", f, g);
      for (const M of C)
        M.updateGuards.forEach((G) => {
          _.push(De(G, f, g));
        });
      return _.push(P), Ce(_);
    }).then(() => {
      _ = [];
      for (const M of f.matched)
        if (M.beforeEnter && !g.matched.includes(M))
          if (ae(M.beforeEnter))
            for (const G of M.beforeEnter)
              _.push(De(G, f, g));
          else
            _.push(De(M.beforeEnter, f, g));
      return _.push(P), Ce(_);
    }).then(() => (f.matched.forEach((M) => M.enterCallbacks = {}), _ = Jt(V, "beforeRouteEnter", f, g), _.push(P), Ce(_))).then(() => {
      _ = [];
      for (const M of i.list())
        _.push(De(M, f, g));
      return _.push(P), Ce(_);
    }).catch((M) => me(M, 8) ? M : Promise.reject(M));
  }
  function Ls(f, g, _) {
    for (const S of u.list())
      As(() => S(f, g, _));
  }
  function Is(f, g, _, S, C) {
    const V = Z(f, g);
    if (V)
      return V;
    const P = g === Me, M = Fe ? history.state : {};
    _ && (S || P ? r.replace(f.fullPath, E({
      scroll: P && M && M.scroll
    }, C)) : r.push(f.fullPath, C)), o.value = f, Hs(f, g, _, P), $t();
  }
  let Ze;
  function vr() {
    Ze || (Ze = r.listen((f, g, _) => {
      if (!Vs.listening)
        return;
      const S = Y(f), C = de(S);
      if (C) {
        Be(E(C, { replace: !0 }), S).catch(tt);
        return;
      }
      c = S;
      const V = o.value;
      Fe && qr(Zs(V.fullPath, _.delta), Rt()), Fs(S, V).catch((P) => me(P, 12) ? P : me(P, 2) ? (Be(
        P.to,
        S
      ).then((M) => {
        me(M, 20) && !_.delta && _.type === it.pop && r.go(-1, !1);
      }).catch(tt), Promise.reject()) : (_.delta && r.go(-_.delta, !1), Gt(P, S, V))).then((P) => {
        P = P || Is(
          S,
          V,
          !1
        ), P && (_.delta && !me(P, 8) ? r.go(-_.delta, !1) : _.type === it.pop && me(P, 20) && r.go(-1, !1)), Ls(S, V, P);
      }).catch(tt);
    }));
  }
  let Vt = Ke(), Us = Ke(), pt;
  function Gt(f, g, _) {
    $t(f);
    const S = Us.list();
    return S.length ? S.forEach((C) => C(f, g, _)) : console.error(f), Promise.reject(f);
  }
  function wr() {
    return pt && o.value !== Me ? Promise.resolve() : new Promise((f, g) => {
      Vt.add([f, g]);
    });
  }
  function $t(f) {
    return pt || (pt = !f, vr(), Vt.list().forEach(([g, _]) => f ? _(f) : g()), Vt.reset()), f;
  }
  function Hs(f, g, _, S) {
    const { scrollBehavior: C } = e;
    if (!Fe || !C)
      return Promise.resolve();
    const V = !_ && Qr(Zs(f.fullPath, 0)) || (S || !_) && history.state && history.state.scroll || null;
    return Yr().then(() => C(f, g, V)).then((P) => P && Zr(P)).catch((P) => Gt(P, f, g));
  }
  const jt = (f) => r.go(f);
  let zt;
  const _t = /* @__PURE__ */ new Set(), Vs = {
    currentRoute: o,
    listening: !0,
    addRoute: w,
    removeRoute: O,
    hasRoute: L,
    getRoutes: H,
    resolve: Y,
    options: e,
    push: se,
    replace: be,
    go: jt,
    back: () => jt(-1),
    forward: () => jt(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: u.add,
    onError: Us.add,
    isReady: wr,
    install(f) {
      const g = this;
      f.component("RouterLink", Na), f.component("RouterView", Fa), f.config.globalProperties.$router = g, Object.defineProperty(f.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => et(o)
      }), Fe && !zt && o.value === Me && (zt = !0, se(r.location).catch((C) => {
      }));
      const _ = {};
      for (const C in Me)
        _[C] = ne(() => o.value[C]);
      f.provide(ps, g), f.provide(Yn, mn(_)), f.provide(as, o);
      const S = f.unmount;
      _t.add(f), f.unmount = function() {
        _t.delete(f), _t.size < 1 && (c = Me, Ze && Ze(), Ze = null, o.value = Me, zt = !1, pt = !1), S();
      };
    }
  };
  function Ce(f) {
    return f.reduce((g, _) => g.then(() => As(_)), Promise.resolve());
  }
  return Vs;
}
function Ia(e, t) {
  const s = [], n = [], r = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const u = t.matched[i];
    u && (e.matched.find((c) => Ge(c, u)) ? n.push(u) : s.push(u));
    const o = e.matched[i];
    o && (t.matched.find((c) => Ge(c, o)) || r.push(o));
  }
  return [s, n, r];
}
const Ua = ct({
  name: "SearchForm",
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
      return console.log(prompt), fetch("https://localhost:44354/Search", t).then((s) => s.json()).then((s) => this.dataResponse = s), this.$router.push({ name: "SearchResults", params: { response: JSON.stringify([this.dataResponse]) } });
    }
  },
  computed: {
    showResults() {
      return !this.showSearch;
    }
  }
});
const Ha = {
  key: 0,
  class: "container-fluid mt-5"
}, Va = /* @__PURE__ */ I("div", { class: "pt-5 pb-5" }, null, -1), Ga = /* @__PURE__ */ I("div", {
  class: "mt-5",
  id: "logo"
}, [
  /* @__PURE__ */ I("img", { src: "/img/lucene-net-color.png" })
], -1), $a = { class: "input-group pt-5 mb-3" }, ja = /* @__PURE__ */ I("button", {
  type: "submit",
  class: "btn btn-lg btn-dark col-md-4"
}, "Search", -1);
function za(e, t, s, n, r, a) {
  return e.showSearch ? (Te(), Ae("div", Ha, [
    Va,
    Ga,
    I("form", {
      onSubmit: t[1] || (t[1] = Rr((...i) => e.sendSearch && e.sendSearch(...i), ["prevent"]))
    }, [
      I("div", $a, [
        Tr(I("input", {
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
          [xr, e.prompt]
        ])
      ]),
      ja
    ], 32)
  ])) : Er("", !0);
}
const Ba = /* @__PURE__ */ ds(Ua, [["render", za]]);
class Za {
  constructor() {
    Bt(this, "pageNumber");
    Bt(this, "isActive");
  }
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Pn;
function p() {
  return Pn.apply(null, arguments);
}
function qa(e) {
  Pn = e;
}
function ie(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ee(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function T(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function _s(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (T(e, t))
      return !1;
  return !0;
}
function Q(e) {
  return e === void 0;
}
function we(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ft(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function bn(e, t) {
  var s = [], n, r = e.length;
  for (n = 0; n < r; ++n)
    s.push(t(e[n], n));
  return s;
}
function Oe(e, t) {
  for (var s in t)
    T(t, s) && (e[s] = t[s]);
  return T(t, "toString") && (e.toString = t.toString), T(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function fe(e, t, s, n) {
  return Jn(e, t, s, n, !0).utc();
}
function Qa() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function k(e) {
  return e._pf == null && (e._pf = Qa()), e._pf;
}
var is;
Array.prototype.some ? is = Array.prototype.some : is = function(e) {
  var t = Object(this), s = t.length >>> 0, n;
  for (n = 0; n < s; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function ys(e) {
  if (e._isValid == null) {
    var t = k(e), s = is.call(t.parsedDateParts, function(r) {
      return r != null;
    }), n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
    if (e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
  }
  return e._isValid;
}
function Tt(e) {
  var t = fe(NaN);
  return e != null ? Oe(k(t), e) : k(t).userInvalidated = !0, t;
}
var un = p.momentProperties = [], Xt = !1;
function gs(e, t) {
  var s, n, r, a = un.length;
  if (Q(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Q(t._i) || (e._i = t._i), Q(t._f) || (e._f = t._f), Q(t._l) || (e._l = t._l), Q(t._strict) || (e._strict = t._strict), Q(t._tzm) || (e._tzm = t._tzm), Q(t._isUTC) || (e._isUTC = t._isUTC), Q(t._offset) || (e._offset = t._offset), Q(t._pf) || (e._pf = k(t)), Q(t._locale) || (e._locale = t._locale), a > 0)
    for (s = 0; s < a; s++)
      n = un[s], r = t[n], Q(r) || (e[n] = r);
  return e;
}
function ht(e) {
  gs(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Xt === !1 && (Xt = !0, p.updateOffset(this), Xt = !1);
}
function oe(e) {
  return e instanceof ht || e != null && e._isAMomentObject != null;
}
function Rn(e) {
  p.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function ee(e, t) {
  var s = !0;
  return Oe(function() {
    if (p.deprecationHandler != null && p.deprecationHandler(null, e), s) {
      var n = [], r, a, i, u = arguments.length;
      for (a = 0; a < u; a++) {
        if (r = "", typeof arguments[a] == "object") {
          r += `
[` + a + "] ";
          for (i in arguments[0])
            T(arguments[0], i) && (r += i + ": " + arguments[0][i] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[a];
        n.push(r);
      }
      Rn(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var cn = {};
function Tn(e, t) {
  p.deprecationHandler != null && p.deprecationHandler(e, t), cn[e] || (Rn(t), cn[e] = !0);
}
p.suppressDeprecationWarnings = !1;
p.deprecationHandler = null;
function he(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Ka(e) {
  var t, s;
  for (s in e)
    T(e, s) && (t = e[s], he(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function os(e, t) {
  var s = Oe({}, e), n;
  for (n in t)
    T(t, n) && (Ee(e[n]) && Ee(t[n]) ? (s[n] = {}, Oe(s[n], e[n]), Oe(s[n], t[n])) : t[n] != null ? s[n] = t[n] : delete s[n]);
  for (n in e)
    T(e, n) && !T(t, n) && Ee(e[n]) && (s[n] = Oe({}, s[n]));
  return s;
}
function vs(e) {
  e != null && this.set(e);
}
var ls;
Object.keys ? ls = Object.keys : ls = function(e) {
  var t, s = [];
  for (t in e)
    T(e, t) && s.push(t);
  return s;
};
var Ja = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Xa(e, t, s) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return he(n) ? n.call(t, s) : n;
}
function ce(e, t, s) {
  var n = "" + Math.abs(e), r = t - n.length, a = e >= 0;
  return (a ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n;
}
var ws = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, yt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, es = {}, Ue = {};
function v(e, t, s, n) {
  var r = n;
  typeof n == "string" && (r = function() {
    return this[n]();
  }), e && (Ue[e] = r), t && (Ue[t[0]] = function() {
    return ce(r.apply(this, arguments), t[1], t[2]);
  }), s && (Ue[s] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function ei(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ti(e) {
  var t = e.match(ws), s, n;
  for (s = 0, n = t.length; s < n; s++)
    Ue[t[s]] ? t[s] = Ue[t[s]] : t[s] = ei(t[s]);
  return function(r) {
    var a = "", i;
    for (i = 0; i < n; i++)
      a += he(t[i]) ? t[i].call(r, e) : t[i];
    return a;
  };
}
function vt(e, t) {
  return e.isValid() ? (t = xn(t, e.localeData()), es[t] = es[t] || ti(t), es[t](e)) : e.localeData().invalidDate();
}
function xn(e, t) {
  var s = 5;
  function n(r) {
    return t.longDateFormat(r) || r;
  }
  for (yt.lastIndex = 0; s >= 0 && yt.test(e); )
    e = e.replace(
      yt,
      n
    ), yt.lastIndex = 0, s -= 1;
  return e;
}
var si = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function ni(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(ws).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var ri = "Invalid date";
function ai() {
  return this._invalidDate;
}
var ii = "%d", oi = /\d{1,2}/;
function li(e) {
  return this._ordinal.replace("%d", e);
}
var ui = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function ci(e, t, s, n) {
  var r = this._relativeTime[s];
  return he(r) ? r(e, t, s, n) : r.replace(/%d/i, e);
}
function fi(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return he(s) ? s(t) : s.replace(/%s/i, t);
}
var nt = {};
function z(e, t) {
  var s = e.toLowerCase();
  nt[s] = nt[s + "s"] = nt[t] = e;
}
function te(e) {
  return typeof e == "string" ? nt[e] || nt[e.toLowerCase()] : void 0;
}
function Ss(e) {
  var t = {}, s, n;
  for (n in e)
    T(e, n) && (s = te(n), s && (t[s] = e[n]));
  return t;
}
var En = {};
function B(e, t) {
  En[e] = t;
}
function hi(e) {
  var t = [], s;
  for (s in e)
    T(e, s) && t.push({ unit: s, priority: En[s] });
  return t.sort(function(n, r) {
    return n.priority - r.priority;
  }), t;
}
function xt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function X(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function D(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = X(t)), s;
}
function je(e, t) {
  return function(s) {
    return s != null ? (Nn(this, e, s), p.updateOffset(this, t), this) : Mt(this, e);
  };
}
function Mt(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Nn(e, t, s) {
  e.isValid() && !isNaN(s) && (t === "FullYear" && xt(e.year()) && e.month() === 1 && e.date() === 29 ? (s = D(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    s,
    e.month(),
    Ft(s, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function di(e) {
  return e = te(e), he(this[e]) ? this[e]() : this;
}
function mi(e, t) {
  if (typeof e == "object") {
    e = Ss(e);
    var s = hi(e), n, r = s.length;
    for (n = 0; n < r; n++)
      this[s[n].unit](e[s[n].unit]);
  } else if (e = te(e), he(this[e]))
    return this[e](t);
  return this;
}
var Cn = /\d/, J = /\d\d/, Wn = /\d{3}/, ks = /\d{4}/, Et = /[+-]?\d{6}/, A = /\d\d?/, An = /\d\d\d\d?/, Fn = /\d\d\d\d\d\d?/, Nt = /\d{1,3}/, Ms = /\d{1,4}/, Ct = /[+-]?\d{1,6}/, ze = /\d+/, Wt = /[+-]?\d+/, pi = /Z|[+-]\d\d:?\d\d/gi, At = /Z|[+-]\d\d(?::?\d\d)?/gi, _i = /[+-]?\d+(\.\d{1,3})?/, dt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Dt;
Dt = {};
function y(e, t, s) {
  Dt[e] = he(t) ? t : function(n, r) {
    return n && s ? s : t;
  };
}
function yi(e, t) {
  return T(Dt, e) ? Dt[e](t._strict, t._locale) : new RegExp(gi(e));
}
function gi(e) {
  return K(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, n, r, a) {
        return s || n || r || a;
      }
    )
  );
}
function K(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var us = {};
function N(e, t) {
  var s, n = t, r;
  for (typeof e == "string" && (e = [e]), we(t) && (n = function(a, i) {
    i[t] = D(a);
  }), r = e.length, s = 0; s < r; s++)
    us[e[s]] = n;
}
function mt(e, t) {
  N(e, function(s, n, r, a) {
    r._w = r._w || {}, t(s, r._w, r, a);
  });
}
function vi(e, t, s) {
  t != null && T(us, e) && us[e](t, s._a, s, e);
}
var j = 0, ye = 1, ue = 2, $ = 3, re = 4, ge = 5, xe = 6, wi = 7, Si = 8;
function ki(e, t) {
  return (e % t + t) % t;
}
var U;
Array.prototype.indexOf ? U = Array.prototype.indexOf : U = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ft(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = ki(t, 12);
  return e += (t - s) / 12, s === 1 ? xt(e) ? 29 : 28 : 31 - s % 7 % 2;
}
v("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
v("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
v("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
z("month", "M");
B("month", 8);
y("M", A);
y("MM", A, J);
y("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
y("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
N(["M", "MM"], function(e, t) {
  t[ye] = D(e) - 1;
});
N(["MMM", "MMMM"], function(e, t, s, n) {
  var r = s._locale.monthsParse(e, n, s._strict);
  r != null ? t[ye] = r : k(s).invalidMonth = e;
});
var Mi = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ln = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), In = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Di = dt, Oi = dt;
function Yi(e, t) {
  return e ? ie(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || In).test(t) ? "format" : "standalone"][e.month()] : ie(this._months) ? this._months : this._months.standalone;
}
function Pi(e, t) {
  return e ? ie(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[In.test(t) ? "format" : "standalone"][e.month()] : ie(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function bi(e, t, s) {
  var n, r, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = fe([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (r = U.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = U.call(this._longMonthsParse, i), r !== -1 ? r : null) : t === "MMM" ? (r = U.call(this._shortMonthsParse, i), r !== -1 ? r : (r = U.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = U.call(this._longMonthsParse, i), r !== -1 ? r : (r = U.call(this._shortMonthsParse, i), r !== -1 ? r : null));
}
function Ri(e, t, s) {
  var n, r, a;
  if (this._monthsParseExact)
    return bi.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (r = fe([2e3, n]), s && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(r, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(r, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[n] && (a = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(a.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (s && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!s && this._monthsParse[n].test(e))
      return n;
  }
}
function Un(e, t) {
  var s;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = D(t);
    else if (t = e.localeData().monthsParse(t), !we(t))
      return e;
  }
  return s = Math.min(e.date(), Ft(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e;
}
function Hn(e) {
  return e != null ? (Un(this, e), p.updateOffset(this, !0), this) : Mt(this, "Month");
}
function Ti() {
  return Ft(this.year(), this.month());
}
function xi(e) {
  return this._monthsParseExact ? (T(this, "_monthsRegex") || Vn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (T(this, "_monthsShortRegex") || (this._monthsShortRegex = Di), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Ei(e) {
  return this._monthsParseExact ? (T(this, "_monthsRegex") || Vn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (T(this, "_monthsRegex") || (this._monthsRegex = Oi), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Vn() {
  function e(i, u) {
    return u.length - i.length;
  }
  var t = [], s = [], n = [], r, a;
  for (r = 0; r < 12; r++)
    a = fe([2e3, r]), t.push(this.monthsShort(a, "")), s.push(this.months(a, "")), n.push(this.months(a, "")), n.push(this.monthsShort(a, ""));
  for (t.sort(e), s.sort(e), n.sort(e), r = 0; r < 12; r++)
    t[r] = K(t[r]), s[r] = K(s[r]);
  for (r = 0; r < 24; r++)
    n[r] = K(n[r]);
  this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
v("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ce(e, 4) : "+" + e;
});
v(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
v(0, ["YYYY", 4], 0, "year");
v(0, ["YYYYY", 5], 0, "year");
v(0, ["YYYYYY", 6, !0], 0, "year");
z("year", "y");
B("year", 1);
y("Y", Wt);
y("YY", A, J);
y("YYYY", Ms, ks);
y("YYYYY", Ct, Et);
y("YYYYYY", Ct, Et);
N(["YYYYY", "YYYYYY"], j);
N("YYYY", function(e, t) {
  t[j] = e.length === 2 ? p.parseTwoDigitYear(e) : D(e);
});
N("YY", function(e, t) {
  t[j] = p.parseTwoDigitYear(e);
});
N("Y", function(e, t) {
  t[j] = parseInt(e, 10);
});
function rt(e) {
  return xt(e) ? 366 : 365;
}
p.parseTwoDigitYear = function(e) {
  return D(e) + (D(e) > 68 ? 1900 : 2e3);
};
var Gn = je("FullYear", !0);
function Ni() {
  return xt(this.year());
}
function Ci(e, t, s, n, r, a, i) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, s, n, r, a, i), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, s, n, r, a, i), u;
}
function ot(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ot(e, t, s) {
  var n = 7 + t - s, r = (7 + ot(e, 0, n).getUTCDay() - t) % 7;
  return -r + n - 1;
}
function $n(e, t, s, n, r) {
  var a = (7 + s - n) % 7, i = Ot(e, n, r), u = 1 + 7 * (t - 1) + a + i, o, c;
  return u <= 0 ? (o = e - 1, c = rt(o) + u) : u > rt(e) ? (o = e + 1, c = u - rt(e)) : (o = e, c = u), {
    year: o,
    dayOfYear: c
  };
}
function lt(e, t, s) {
  var n = Ot(e.year(), t, s), r = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, i;
  return r < 1 ? (i = e.year() - 1, a = r + ve(i, t, s)) : r > ve(e.year(), t, s) ? (a = r - ve(e.year(), t, s), i = e.year() + 1) : (i = e.year(), a = r), {
    week: a,
    year: i
  };
}
function ve(e, t, s) {
  var n = Ot(e, t, s), r = Ot(e + 1, t, s);
  return (rt(e) - n + r) / 7;
}
v("w", ["ww", 2], "wo", "week");
v("W", ["WW", 2], "Wo", "isoWeek");
z("week", "w");
z("isoWeek", "W");
B("week", 5);
B("isoWeek", 5);
y("w", A);
y("ww", A, J);
y("W", A);
y("WW", A, J);
mt(
  ["w", "ww", "W", "WW"],
  function(e, t, s, n) {
    t[n.substr(0, 1)] = D(e);
  }
);
function Wi(e) {
  return lt(e, this._week.dow, this._week.doy).week;
}
var Ai = {
  dow: 0,
  doy: 6
};
function Fi() {
  return this._week.dow;
}
function Li() {
  return this._week.doy;
}
function Ii(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Ui(e) {
  var t = lt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
v("d", 0, "do", "day");
v("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
v("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
v("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
v("e", 0, 0, "weekday");
v("E", 0, 0, "isoWeekday");
z("day", "d");
z("weekday", "e");
z("isoWeekday", "E");
B("day", 11);
B("weekday", 11);
B("isoWeekday", 11);
y("d", A);
y("e", A);
y("E", A);
y("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
y("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
y("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
mt(["dd", "ddd", "dddd"], function(e, t, s, n) {
  var r = s._locale.weekdaysParse(e, n, s._strict);
  r != null ? t.d = r : k(s).invalidWeekday = e;
});
mt(["d", "e", "E"], function(e, t, s, n) {
  t[n] = D(e);
});
function Hi(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Vi(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Ds(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Gi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), jn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), $i = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ji = dt, zi = dt, Bi = dt;
function Zi(e, t) {
  var s = ie(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Ds(s, this._week.dow) : e ? s[e.day()] : s;
}
function qi(e) {
  return e === !0 ? Ds(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Qi(e) {
  return e === !0 ? Ds(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Ki(e, t, s) {
  var n, r, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = fe([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (r = U.call(this._weekdaysParse, i), r !== -1 ? r : null) : t === "ddd" ? (r = U.call(this._shortWeekdaysParse, i), r !== -1 ? r : null) : (r = U.call(this._minWeekdaysParse, i), r !== -1 ? r : null) : t === "dddd" ? (r = U.call(this._weekdaysParse, i), r !== -1 || (r = U.call(this._shortWeekdaysParse, i), r !== -1) ? r : (r = U.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : t === "ddd" ? (r = U.call(this._shortWeekdaysParse, i), r !== -1 || (r = U.call(this._weekdaysParse, i), r !== -1) ? r : (r = U.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : (r = U.call(this._minWeekdaysParse, i), r !== -1 || (r = U.call(this._weekdaysParse, i), r !== -1) ? r : (r = U.call(this._shortWeekdaysParse, i), r !== -1 ? r : null));
}
function Ji(e, t, s) {
  var n, r, a;
  if (this._weekdaysParseExact)
    return Ki.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (r = fe([2e3, 1]).day(n), s && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (a = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (s && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (s && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!s && this._weekdaysParse[n].test(e))
      return n;
  }
}
function Xi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Hi(e, this.localeData()), this.add(e - t, "d")) : t;
}
function eo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function to(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Vi(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function so(e) {
  return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || Os.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (T(this, "_weekdaysRegex") || (this._weekdaysRegex = ji), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function no(e) {
  return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || Os.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (T(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = zi), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function ro(e) {
  return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || Os.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (T(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Bi), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Os() {
  function e(l, h) {
    return h.length - l.length;
  }
  var t = [], s = [], n = [], r = [], a, i, u, o, c;
  for (a = 0; a < 7; a++)
    i = fe([2e3, 1]).day(a), u = K(this.weekdaysMin(i, "")), o = K(this.weekdaysShort(i, "")), c = K(this.weekdays(i, "")), t.push(u), s.push(o), n.push(c), r.push(u), r.push(o), r.push(c);
  t.sort(e), s.sort(e), n.sort(e), r.sort(e), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Ys() {
  return this.hours() % 12 || 12;
}
function ao() {
  return this.hours() || 24;
}
v("H", ["HH", 2], 0, "hour");
v("h", ["hh", 2], 0, Ys);
v("k", ["kk", 2], 0, ao);
v("hmm", 0, 0, function() {
  return "" + Ys.apply(this) + ce(this.minutes(), 2);
});
v("hmmss", 0, 0, function() {
  return "" + Ys.apply(this) + ce(this.minutes(), 2) + ce(this.seconds(), 2);
});
v("Hmm", 0, 0, function() {
  return "" + this.hours() + ce(this.minutes(), 2);
});
v("Hmmss", 0, 0, function() {
  return "" + this.hours() + ce(this.minutes(), 2) + ce(this.seconds(), 2);
});
function zn(e, t) {
  v(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
zn("a", !0);
zn("A", !1);
z("hour", "h");
B("hour", 13);
function Bn(e, t) {
  return t._meridiemParse;
}
y("a", Bn);
y("A", Bn);
y("H", A);
y("h", A);
y("k", A);
y("HH", A, J);
y("hh", A, J);
y("kk", A, J);
y("hmm", An);
y("hmmss", Fn);
y("Hmm", An);
y("Hmmss", Fn);
N(["H", "HH"], $);
N(["k", "kk"], function(e, t, s) {
  var n = D(e);
  t[$] = n === 24 ? 0 : n;
});
N(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
N(["h", "hh"], function(e, t, s) {
  t[$] = D(e), k(s).bigHour = !0;
});
N("hmm", function(e, t, s) {
  var n = e.length - 2;
  t[$] = D(e.substr(0, n)), t[re] = D(e.substr(n)), k(s).bigHour = !0;
});
N("hmmss", function(e, t, s) {
  var n = e.length - 4, r = e.length - 2;
  t[$] = D(e.substr(0, n)), t[re] = D(e.substr(n, 2)), t[ge] = D(e.substr(r)), k(s).bigHour = !0;
});
N("Hmm", function(e, t, s) {
  var n = e.length - 2;
  t[$] = D(e.substr(0, n)), t[re] = D(e.substr(n));
});
N("Hmmss", function(e, t, s) {
  var n = e.length - 4, r = e.length - 2;
  t[$] = D(e.substr(0, n)), t[re] = D(e.substr(n, 2)), t[ge] = D(e.substr(r));
});
function io(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var oo = /[ap]\.?m?\.?/i, lo = je("Hours", !0);
function uo(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Zn = {
  calendar: Ja,
  longDateFormat: si,
  invalidDate: ri,
  ordinal: ii,
  dayOfMonthOrdinalParse: oi,
  relativeTime: ui,
  months: Mi,
  monthsShort: Ln,
  week: Ai,
  weekdays: Gi,
  weekdaysMin: $i,
  weekdaysShort: jn,
  meridiemParse: oo
}, F = {}, Je = {}, ut;
function co(e, t) {
  var s, n = Math.min(e.length, t.length);
  for (s = 0; s < n; s += 1)
    if (e[s] !== t[s])
      return s;
  return n;
}
function fn(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function fo(e) {
  for (var t = 0, s, n, r, a; t < e.length; ) {
    for (a = fn(e[t]).split("-"), s = a.length, n = fn(e[t + 1]), n = n ? n.split("-") : null; s > 0; ) {
      if (r = Lt(a.slice(0, s).join("-")), r)
        return r;
      if (n && n.length >= s && co(a, n) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return ut;
}
function ho(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Lt(e) {
  var t = null, s;
  if (F[e] === void 0 && typeof module < "u" && module && module.exports && ho(e))
    try {
      t = ut._abbr, s = require, s("./locale/" + e), Pe(t);
    } catch {
      F[e] = null;
    }
  return F[e];
}
function Pe(e, t) {
  var s;
  return e && (Q(t) ? s = Se(e) : s = Ps(e, t), s ? ut = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ut._abbr;
}
function Ps(e, t) {
  if (t !== null) {
    var s, n = Zn;
    if (t.abbr = e, F[e] != null)
      Tn(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = F[e]._config;
    else if (t.parentLocale != null)
      if (F[t.parentLocale] != null)
        n = F[t.parentLocale]._config;
      else if (s = Lt(t.parentLocale), s != null)
        n = s._config;
      else
        return Je[t.parentLocale] || (Je[t.parentLocale] = []), Je[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return F[e] = new vs(os(n, t)), Je[e] && Je[e].forEach(function(r) {
      Ps(r.name, r.config);
    }), Pe(e), F[e];
  } else
    return delete F[e], null;
}
function mo(e, t) {
  if (t != null) {
    var s, n, r = Zn;
    F[e] != null && F[e].parentLocale != null ? F[e].set(os(F[e]._config, t)) : (n = Lt(e), n != null && (r = n._config), t = os(r, t), n == null && (t.abbr = e), s = new vs(t), s.parentLocale = F[e], F[e] = s), Pe(e);
  } else
    F[e] != null && (F[e].parentLocale != null ? (F[e] = F[e].parentLocale, e === Pe() && Pe(e)) : F[e] != null && delete F[e]);
  return F[e];
}
function Se(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ut;
  if (!ie(e)) {
    if (t = Lt(e), t)
      return t;
    e = [e];
  }
  return fo(e);
}
function po() {
  return ls(F);
}
function bs(e) {
  var t, s = e._a;
  return s && k(e).overflow === -2 && (t = s[ye] < 0 || s[ye] > 11 ? ye : s[ue] < 1 || s[ue] > Ft(s[j], s[ye]) ? ue : s[$] < 0 || s[$] > 24 || s[$] === 24 && (s[re] !== 0 || s[ge] !== 0 || s[xe] !== 0) ? $ : s[re] < 0 || s[re] > 59 ? re : s[ge] < 0 || s[ge] > 59 ? ge : s[xe] < 0 || s[xe] > 999 ? xe : -1, k(e)._overflowDayOfYear && (t < j || t > ue) && (t = ue), k(e)._overflowWeeks && t === -1 && (t = wi), k(e)._overflowWeekday && t === -1 && (t = Si), k(e).overflow = t), e;
}
var _o = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, yo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, go = /Z|[+-]\d\d(?::?\d\d)?/, gt = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], ts = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], vo = /^\/?Date\((-?\d+)/i, wo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, So = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function qn(e) {
  var t, s, n = e._i, r = _o.exec(n) || yo.exec(n), a, i, u, o, c = gt.length, l = ts.length;
  if (r) {
    for (k(e).iso = !0, t = 0, s = c; t < s; t++)
      if (gt[t][1].exec(r[1])) {
        i = gt[t][0], a = gt[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, s = l; t < s; t++)
        if (ts[t][1].exec(r[3])) {
          u = (r[2] || " ") + ts[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && u != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (go.exec(r[4]))
        o = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (u || "") + (o || ""), Ts(e);
  } else
    e._isValid = !1;
}
function ko(e, t, s, n, r, a) {
  var i = [
    Mo(e),
    Ln.indexOf(t),
    parseInt(s, 10),
    parseInt(n, 10),
    parseInt(r, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function Mo(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Do(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Oo(e, t, s) {
  if (e) {
    var n = jn.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== r)
      return k(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Yo(e, t, s) {
  if (e)
    return So[e];
  if (t)
    return 0;
  var n = parseInt(s, 10), r = n % 100, a = (n - r) / 100;
  return a * 60 + r;
}
function Qn(e) {
  var t = wo.exec(Do(e._i)), s;
  if (t) {
    if (s = ko(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Oo(t[1], s, e))
      return;
    e._a = s, e._tzm = Yo(t[8], t[9], t[10]), e._d = ot.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), k(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Po(e) {
  var t = vo.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (qn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Qn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : p.createFromInputFallback(e);
}
p.createFromInputFallback = ee(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Le(e, t, s) {
  return e != null ? e : t != null ? t : s;
}
function bo(e) {
  var t = new Date(p.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Rs(e) {
  var t, s, n = [], r, a, i;
  if (!e._d) {
    for (r = bo(e), e._w && e._a[ue] == null && e._a[ye] == null && Ro(e), e._dayOfYear != null && (i = Le(e._a[j], r[j]), (e._dayOfYear > rt(i) || e._dayOfYear === 0) && (k(e)._overflowDayOfYear = !0), s = ot(i, 0, e._dayOfYear), e._a[ye] = s.getUTCMonth(), e._a[ue] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[$] === 24 && e._a[re] === 0 && e._a[ge] === 0 && e._a[xe] === 0 && (e._nextDay = !0, e._a[$] = 0), e._d = (e._useUTC ? ot : Ci).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[$] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (k(e).weekdayMismatch = !0);
  }
}
function Ro(e) {
  var t, s, n, r, a, i, u, o, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, s = Le(
    t.GG,
    e._a[j],
    lt(W(), 1, 4).year
  ), n = Le(t.W, 1), r = Le(t.E, 1), (r < 1 || r > 7) && (o = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, c = lt(W(), a, i), s = Le(t.gg, e._a[j], c.year), n = Le(t.w, c.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (o = !0)) : t.e != null ? (r = t.e + a, (t.e < 0 || t.e > 6) && (o = !0)) : r = a), n < 1 || n > ve(s, a, i) ? k(e)._overflowWeeks = !0 : o != null ? k(e)._overflowWeekday = !0 : (u = $n(s, n, r, a, i), e._a[j] = u.year, e._dayOfYear = u.dayOfYear);
}
p.ISO_8601 = function() {
};
p.RFC_2822 = function() {
};
function Ts(e) {
  if (e._f === p.ISO_8601) {
    qn(e);
    return;
  }
  if (e._f === p.RFC_2822) {
    Qn(e);
    return;
  }
  e._a = [], k(e).empty = !0;
  var t = "" + e._i, s, n, r, a, i, u = t.length, o = 0, c, l;
  for (r = xn(e._f, e._locale).match(ws) || [], l = r.length, s = 0; s < l; s++)
    a = r[s], n = (t.match(yi(a, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && k(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), o += n.length), Ue[a] ? (n ? k(e).empty = !1 : k(e).unusedTokens.push(a), vi(a, n, e)) : e._strict && !n && k(e).unusedTokens.push(a);
  k(e).charsLeftOver = u - o, t.length > 0 && k(e).unusedInput.push(t), e._a[$] <= 12 && k(e).bigHour === !0 && e._a[$] > 0 && (k(e).bigHour = void 0), k(e).parsedDateParts = e._a.slice(0), k(e).meridiem = e._meridiem, e._a[$] = To(
    e._locale,
    e._a[$],
    e._meridiem
  ), c = k(e).era, c !== null && (e._a[j] = e._locale.erasConvertYear(c, e._a[j])), Rs(e), bs(e);
}
function To(e, t, s) {
  var n;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (n = e.isPM(s), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function xo(e) {
  var t, s, n, r, a, i, u = !1, o = e._f.length;
  if (o === 0) {
    k(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (r = 0; r < o; r++)
    a = 0, i = !1, t = gs({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], Ts(t), ys(t) && (i = !0), a += k(t).charsLeftOver, a += k(t).unusedTokens.length * 10, k(t).score = a, u ? a < n && (n = a, s = t) : (n == null || a < n || i) && (n = a, s = t, i && (u = !0));
  Oe(e, s || t);
}
function Eo(e) {
  if (!e._d) {
    var t = Ss(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = bn(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Rs(e);
  }
}
function No(e) {
  var t = new ht(bs(Kn(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Kn(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || Se(e._l), t === null || s === void 0 && t === "" ? Tt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), oe(t) ? new ht(bs(t)) : (ft(t) ? e._d = t : ie(s) ? xo(e) : s ? Ts(e) : Co(e), ys(e) || (e._d = null), e));
}
function Co(e) {
  var t = e._i;
  Q(t) ? e._d = new Date(p.now()) : ft(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Po(e) : ie(t) ? (e._a = bn(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Rs(e)) : Ee(t) ? Eo(e) : we(t) ? e._d = new Date(t) : p.createFromInputFallback(e);
}
function Jn(e, t, s, n, r) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (s === !0 || s === !1) && (n = s, s = void 0), (Ee(e) && _s(e) || ie(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = s, a._i = e, a._f = t, a._strict = n, No(a);
}
function W(e, t, s, n) {
  return Jn(e, t, s, n, !1);
}
var Wo = ee(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = W.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Tt();
  }
), Ao = ee(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = W.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Tt();
  }
);
function Xn(e, t) {
  var s, n;
  if (t.length === 1 && ie(t[0]) && (t = t[0]), !t.length)
    return W();
  for (s = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](s)) && (s = t[n]);
  return s;
}
function Fo() {
  var e = [].slice.call(arguments, 0);
  return Xn("isBefore", e);
}
function Lo() {
  var e = [].slice.call(arguments, 0);
  return Xn("isAfter", e);
}
var Io = function() {
  return Date.now ? Date.now() : +new Date();
}, Xe = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Uo(e) {
  var t, s = !1, n, r = Xe.length;
  for (t in e)
    if (T(e, t) && !(U.call(Xe, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < r; ++n)
    if (e[Xe[n]]) {
      if (s)
        return !1;
      parseFloat(e[Xe[n]]) !== D(e[Xe[n]]) && (s = !0);
    }
  return !0;
}
function Ho() {
  return this._isValid;
}
function Vo() {
  return le(NaN);
}
function It(e) {
  var t = Ss(e), s = t.year || 0, n = t.quarter || 0, r = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, u = t.hour || 0, o = t.minute || 0, c = t.second || 0, l = t.millisecond || 0;
  this._isValid = Uo(t), this._milliseconds = +l + c * 1e3 + o * 6e4 + u * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +r + n * 3 + s * 12, this._data = {}, this._locale = Se(), this._bubble();
}
function wt(e) {
  return e instanceof It;
}
function cs(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Go(e, t, s) {
  var n = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < n; i++)
    (s && e[i] !== t[i] || !s && D(e[i]) !== D(t[i])) && a++;
  return a + r;
}
function er(e, t) {
  v(e, 0, 0, function() {
    var s = this.utcOffset(), n = "+";
    return s < 0 && (s = -s, n = "-"), n + ce(~~(s / 60), 2) + t + ce(~~s % 60, 2);
  });
}
er("Z", ":");
er("ZZ", "");
y("Z", At);
y("ZZ", At);
N(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = xs(At, e);
});
var $o = /([\+\-]|\d\d)/gi;
function xs(e, t) {
  var s = (t || "").match(e), n, r, a;
  return s === null ? null : (n = s[s.length - 1] || [], r = (n + "").match($o) || ["-", 0, 0], a = +(r[1] * 60) + D(r[2]), a === 0 ? 0 : r[0] === "+" ? a : -a);
}
function Es(e, t) {
  var s, n;
  return t._isUTC ? (s = t.clone(), n = (oe(e) || ft(e) ? e.valueOf() : W(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + n), p.updateOffset(s, !1), s) : W(e).local();
}
function fs(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
p.updateOffset = function() {
};
function jo(e, t, s) {
  var n = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = xs(At, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (r = fs(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), n !== e && (!t || this._changeInProgress ? nr(
      this,
      le(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, p.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : fs(this);
}
function zo(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Bo(e) {
  return this.utcOffset(0, e);
}
function Zo(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(fs(this), "m")), this;
}
function qo() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = xs(pi, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Qo(e) {
  return this.isValid() ? (e = e ? W(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Ko() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Jo() {
  if (!Q(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return gs(e, this), e = Kn(e), e._a ? (t = e._isUTC ? fe(e._a) : W(e._a), this._isDSTShifted = this.isValid() && Go(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Xo() {
  return this.isValid() ? !this._isUTC : !1;
}
function el() {
  return this.isValid() ? this._isUTC : !1;
}
function tr() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var tl = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, sl = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function le(e, t) {
  var s = e, n = null, r, a, i;
  return wt(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : we(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (n = tl.exec(e)) ? (r = n[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: D(n[ue]) * r,
    h: D(n[$]) * r,
    m: D(n[re]) * r,
    s: D(n[ge]) * r,
    ms: D(cs(n[xe] * 1e3)) * r
  }) : (n = sl.exec(e)) ? (r = n[1] === "-" ? -1 : 1, s = {
    y: Re(n[2], r),
    M: Re(n[3], r),
    w: Re(n[4], r),
    d: Re(n[5], r),
    h: Re(n[6], r),
    m: Re(n[7], r),
    s: Re(n[8], r)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = nl(
    W(s.from),
    W(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), a = new It(s), wt(e) && T(e, "_locale") && (a._locale = e._locale), wt(e) && T(e, "_isValid") && (a._isValid = e._isValid), a;
}
le.fn = It.prototype;
le.invalid = Vo;
function Re(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function hn(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function nl(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Es(t, e), e.isBefore(t) ? s = hn(e, t) : (s = hn(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function sr(e, t) {
  return function(s, n) {
    var r, a;
    return n !== null && !isNaN(+n) && (Tn(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = s, s = n, n = a), r = le(s, n), nr(this, r, e), this;
  };
}
function nr(e, t, s, n) {
  var r = t._milliseconds, a = cs(t._days), i = cs(t._months);
  !e.isValid() || (n = n == null ? !0 : n, i && Un(e, Mt(e, "Month") + i * s), a && Nn(e, "Date", Mt(e, "Date") + a * s), r && e._d.setTime(e._d.valueOf() + r * s), n && p.updateOffset(e, a || i));
}
var rl = sr(1, "add"), al = sr(-1, "subtract");
function rr(e) {
  return typeof e == "string" || e instanceof String;
}
function il(e) {
  return oe(e) || ft(e) || rr(e) || we(e) || ll(e) || ol(e) || e === null || e === void 0;
}
function ol(e) {
  var t = Ee(e) && !_s(e), s = !1, n = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], r, a, i = n.length;
  for (r = 0; r < i; r += 1)
    a = n[r], s = s || T(e, a);
  return t && s;
}
function ll(e) {
  var t = ie(e), s = !1;
  return t && (s = e.filter(function(n) {
    return !we(n) && rr(e);
  }).length === 0), t && s;
}
function ul(e) {
  var t = Ee(e) && !_s(e), s = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, a;
  for (r = 0; r < n.length; r += 1)
    a = n[r], s = s || T(e, a);
  return t && s;
}
function cl(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function fl(e, t) {
  arguments.length === 1 && (arguments[0] ? il(arguments[0]) ? (e = arguments[0], t = void 0) : ul(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || W(), n = Es(s, this).startOf("day"), r = p.calendarFormat(this, n) || "sameElse", a = t && (he(t[r]) ? t[r].call(this, s) : t[r]);
  return this.format(
    a || this.localeData().calendar(r, this, W(s))
  );
}
function hl() {
  return new ht(this);
}
function dl(e, t) {
  var s = oe(e) ? e : W(e);
  return this.isValid() && s.isValid() ? (t = te(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function ml(e, t) {
  var s = oe(e) ? e : W(e);
  return this.isValid() && s.isValid() ? (t = te(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function pl(e, t, s, n) {
  var r = oe(e) ? e : W(e), a = oe(t) ? t : W(t);
  return this.isValid() && r.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(r, s) : !this.isBefore(r, s)) && (n[1] === ")" ? this.isBefore(a, s) : !this.isAfter(a, s))) : !1;
}
function _l(e, t) {
  var s = oe(e) ? e : W(e), n;
  return this.isValid() && s.isValid() ? (t = te(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function yl(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function gl(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function vl(e, t, s) {
  var n, r, a;
  if (!this.isValid())
    return NaN;
  if (n = Es(e, this), !n.isValid())
    return NaN;
  switch (r = (n.utcOffset() - this.utcOffset()) * 6e4, t = te(t), t) {
    case "year":
      a = St(this, n) / 12;
      break;
    case "month":
      a = St(this, n);
      break;
    case "quarter":
      a = St(this, n) / 3;
      break;
    case "second":
      a = (this - n) / 1e3;
      break;
    case "minute":
      a = (this - n) / 6e4;
      break;
    case "hour":
      a = (this - n) / 36e5;
      break;
    case "day":
      a = (this - n - r) / 864e5;
      break;
    case "week":
      a = (this - n - r) / 6048e5;
      break;
    default:
      a = this - n;
  }
  return s ? a : X(a);
}
function St(e, t) {
  if (e.date() < t.date())
    return -St(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(s, "months"), r, a;
  return t - n < 0 ? (r = e.clone().add(s - 1, "months"), a = (t - n) / (n - r)) : (r = e.clone().add(s + 1, "months"), a = (t - n) / (r - n)), -(s + a) || 0;
}
p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function wl() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Sl(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? vt(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : he(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", vt(s, "Z")) : vt(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function kl() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, n, r, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(s + n + r + a);
}
function Ml(e) {
  e || (e = this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
  var t = vt(this, e);
  return this.localeData().postformat(t);
}
function Dl(e, t) {
  return this.isValid() && (oe(e) && e.isValid() || W(e).isValid()) ? le({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Ol(e) {
  return this.from(W(), e);
}
function Yl(e, t) {
  return this.isValid() && (oe(e) && e.isValid() || W(e).isValid()) ? le({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Pl(e) {
  return this.to(W(), e);
}
function ar(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Se(e), t != null && (this._locale = t), this);
}
var ir = ee(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function or() {
  return this._locale;
}
var Yt = 1e3, He = 60 * Yt, Pt = 60 * He, lr = (365 * 400 + 97) * 24 * Pt;
function Ve(e, t) {
  return (e % t + t) % t;
}
function ur(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - lr : new Date(e, t, s).valueOf();
}
function cr(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - lr : Date.UTC(e, t, s);
}
function bl(e) {
  var t, s;
  if (e = te(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? cr : ur, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Ve(
        t + (this._isUTC ? 0 : this.utcOffset() * He),
        Pt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ve(t, He);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ve(t, Yt);
      break;
  }
  return this._d.setTime(t), p.updateOffset(this, !0), this;
}
function Rl(e) {
  var t, s;
  if (e = te(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? cr : ur, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Pt - Ve(
        t + (this._isUTC ? 0 : this.utcOffset() * He),
        Pt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += He - Ve(t, He) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Yt - Ve(t, Yt) - 1;
      break;
  }
  return this._d.setTime(t), p.updateOffset(this, !0), this;
}
function Tl() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function xl() {
  return Math.floor(this.valueOf() / 1e3);
}
function El() {
  return new Date(this.valueOf());
}
function Nl() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Cl() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Wl() {
  return this.isValid() ? this.toISOString() : null;
}
function Al() {
  return ys(this);
}
function Fl() {
  return Oe({}, k(this));
}
function Ll() {
  return k(this).overflow;
}
function Il() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
v("N", 0, 0, "eraAbbr");
v("NN", 0, 0, "eraAbbr");
v("NNN", 0, 0, "eraAbbr");
v("NNNN", 0, 0, "eraName");
v("NNNNN", 0, 0, "eraNarrow");
v("y", ["y", 1], "yo", "eraYear");
v("y", ["yy", 2], 0, "eraYear");
v("y", ["yyy", 3], 0, "eraYear");
v("y", ["yyyy", 4], 0, "eraYear");
y("N", Ns);
y("NN", Ns);
y("NNN", Ns);
y("NNNN", Ql);
y("NNNNN", Kl);
N(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, n) {
    var r = s._locale.erasParse(e, n, s._strict);
    r ? k(s).era = r : k(s).invalidEra = e;
  }
);
y("y", ze);
y("yy", ze);
y("yyy", ze);
y("yyyy", ze);
y("yo", Jl);
N(["y", "yy", "yyy", "yyyy"], j);
N(["yo"], function(e, t, s, n) {
  var r;
  s._locale._eraYearOrdinalRegex && (r = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[j] = s._locale.eraYearOrdinalParse(e, r) : t[j] = parseInt(e, 10);
});
function Ul(e, t) {
  var s, n, r, a = this._eras || Se("en")._eras;
  for (s = 0, n = a.length; s < n; ++s) {
    switch (typeof a[s].since) {
      case "string":
        r = p(a[s].since).startOf("day"), a[s].since = r.valueOf();
        break;
    }
    switch (typeof a[s].until) {
      case "undefined":
        a[s].until = 1 / 0;
        break;
      case "string":
        r = p(a[s].until).startOf("day").valueOf(), a[s].until = r.valueOf();
        break;
    }
  }
  return a;
}
function Hl(e, t, s) {
  var n, r, a = this.eras(), i, u, o;
  for (e = e.toUpperCase(), n = 0, r = a.length; n < r; ++n)
    if (i = a[n].name.toUpperCase(), u = a[n].abbr.toUpperCase(), o = a[n].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return a[n];
          break;
        case "NNNN":
          if (i === e)
            return a[n];
          break;
        case "NNNNN":
          if (o === e)
            return a[n];
          break;
      }
    else if ([i, u, o].indexOf(e) >= 0)
      return a[n];
}
function Vl(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? p(e.since).year() : p(e.since).year() + (t - e.offset) * s;
}
function Gl() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].name;
  return "";
}
function $l() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].narrow;
  return "";
}
function jl() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].abbr;
  return "";
}
function zl() {
  var e, t, s, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = r[e].since <= r[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return (this.year() - p(r[e].since).year()) * s + r[e].offset;
  return this.year();
}
function Bl(e) {
  return T(this, "_erasNameRegex") || Cs.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Zl(e) {
  return T(this, "_erasAbbrRegex") || Cs.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function ql(e) {
  return T(this, "_erasNarrowRegex") || Cs.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Ns(e, t) {
  return t.erasAbbrRegex(e);
}
function Ql(e, t) {
  return t.erasNameRegex(e);
}
function Kl(e, t) {
  return t.erasNarrowRegex(e);
}
function Jl(e, t) {
  return t._eraYearOrdinalRegex || ze;
}
function Cs() {
  var e = [], t = [], s = [], n = [], r, a, i = this.eras();
  for (r = 0, a = i.length; r < a; ++r)
    t.push(K(i[r].name)), e.push(K(i[r].abbr)), s.push(K(i[r].narrow)), n.push(K(i[r].name)), n.push(K(i[r].abbr)), n.push(K(i[r].narrow));
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
v(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
v(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ut(e, t) {
  v(0, [e, e.length], 0, t);
}
Ut("gggg", "weekYear");
Ut("ggggg", "weekYear");
Ut("GGGG", "isoWeekYear");
Ut("GGGGG", "isoWeekYear");
z("weekYear", "gg");
z("isoWeekYear", "GG");
B("weekYear", 1);
B("isoWeekYear", 1);
y("G", Wt);
y("g", Wt);
y("GG", A, J);
y("gg", A, J);
y("GGGG", Ms, ks);
y("gggg", Ms, ks);
y("GGGGG", Ct, Et);
y("ggggg", Ct, Et);
mt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, n) {
    t[n.substr(0, 2)] = D(e);
  }
);
mt(["gg", "GG"], function(e, t, s, n) {
  t[n] = p.parseTwoDigitYear(e);
});
function Xl(e) {
  return fr.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function eu(e) {
  return fr.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function tu() {
  return ve(this.year(), 1, 4);
}
function su() {
  return ve(this.isoWeekYear(), 1, 4);
}
function nu() {
  var e = this.localeData()._week;
  return ve(this.year(), e.dow, e.doy);
}
function ru() {
  var e = this.localeData()._week;
  return ve(this.weekYear(), e.dow, e.doy);
}
function fr(e, t, s, n, r) {
  var a;
  return e == null ? lt(this, n, r).year : (a = ve(e, n, r), t > a && (t = a), au.call(this, e, t, s, n, r));
}
function au(e, t, s, n, r) {
  var a = $n(e, t, s, n, r), i = ot(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
v("Q", 0, "Qo", "quarter");
z("quarter", "Q");
B("quarter", 7);
y("Q", Cn);
N("Q", function(e, t) {
  t[ye] = (D(e) - 1) * 3;
});
function iu(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
v("D", ["DD", 2], "Do", "date");
z("date", "D");
B("date", 9);
y("D", A);
y("DD", A, J);
y("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
N(["D", "DD"], ue);
N("Do", function(e, t) {
  t[ue] = D(e.match(A)[0]);
});
var hr = je("Date", !0);
v("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
z("dayOfYear", "DDD");
B("dayOfYear", 4);
y("DDD", Nt);
y("DDDD", Wn);
N(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = D(e);
});
function ou(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
v("m", ["mm", 2], 0, "minute");
z("minute", "m");
B("minute", 14);
y("m", A);
y("mm", A, J);
N(["m", "mm"], re);
var lu = je("Minutes", !1);
v("s", ["ss", 2], 0, "second");
z("second", "s");
B("second", 15);
y("s", A);
y("ss", A, J);
N(["s", "ss"], ge);
var uu = je("Seconds", !1);
v("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
v(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
v(0, ["SSS", 3], 0, "millisecond");
v(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
v(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
v(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
v(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
v(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
v(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
z("millisecond", "ms");
B("millisecond", 16);
y("S", Nt, Cn);
y("SS", Nt, J);
y("SSS", Nt, Wn);
var Ye, dr;
for (Ye = "SSSS"; Ye.length <= 9; Ye += "S")
  y(Ye, ze);
function cu(e, t) {
  t[xe] = D(("0." + e) * 1e3);
}
for (Ye = "S"; Ye.length <= 9; Ye += "S")
  N(Ye, cu);
dr = je("Milliseconds", !1);
v("z", 0, 0, "zoneAbbr");
v("zz", 0, 0, "zoneName");
function fu() {
  return this._isUTC ? "UTC" : "";
}
function hu() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var d = ht.prototype;
d.add = rl;
d.calendar = fl;
d.clone = hl;
d.diff = vl;
d.endOf = Rl;
d.format = Ml;
d.from = Dl;
d.fromNow = Ol;
d.to = Yl;
d.toNow = Pl;
d.get = di;
d.invalidAt = Ll;
d.isAfter = dl;
d.isBefore = ml;
d.isBetween = pl;
d.isSame = _l;
d.isSameOrAfter = yl;
d.isSameOrBefore = gl;
d.isValid = Al;
d.lang = ir;
d.locale = ar;
d.localeData = or;
d.max = Ao;
d.min = Wo;
d.parsingFlags = Fl;
d.set = mi;
d.startOf = bl;
d.subtract = al;
d.toArray = Nl;
d.toObject = Cl;
d.toDate = El;
d.toISOString = Sl;
d.inspect = kl;
typeof Symbol < "u" && Symbol.for != null && (d[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
d.toJSON = Wl;
d.toString = wl;
d.unix = xl;
d.valueOf = Tl;
d.creationData = Il;
d.eraName = Gl;
d.eraNarrow = $l;
d.eraAbbr = jl;
d.eraYear = zl;
d.year = Gn;
d.isLeapYear = Ni;
d.weekYear = Xl;
d.isoWeekYear = eu;
d.quarter = d.quarters = iu;
d.month = Hn;
d.daysInMonth = Ti;
d.week = d.weeks = Ii;
d.isoWeek = d.isoWeeks = Ui;
d.weeksInYear = nu;
d.weeksInWeekYear = ru;
d.isoWeeksInYear = tu;
d.isoWeeksInISOWeekYear = su;
d.date = hr;
d.day = d.days = Xi;
d.weekday = eo;
d.isoWeekday = to;
d.dayOfYear = ou;
d.hour = d.hours = lo;
d.minute = d.minutes = lu;
d.second = d.seconds = uu;
d.millisecond = d.milliseconds = dr;
d.utcOffset = jo;
d.utc = Bo;
d.local = Zo;
d.parseZone = qo;
d.hasAlignedHourOffset = Qo;
d.isDST = Ko;
d.isLocal = Xo;
d.isUtcOffset = el;
d.isUtc = tr;
d.isUTC = tr;
d.zoneAbbr = fu;
d.zoneName = hu;
d.dates = ee(
  "dates accessor is deprecated. Use date instead.",
  hr
);
d.months = ee(
  "months accessor is deprecated. Use month instead",
  Hn
);
d.years = ee(
  "years accessor is deprecated. Use year instead",
  Gn
);
d.zone = ee(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  zo
);
d.isDSTShifted = ee(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Jo
);
function du(e) {
  return W(e * 1e3);
}
function mu() {
  return W.apply(null, arguments).parseZone();
}
function mr(e) {
  return e;
}
var x = vs.prototype;
x.calendar = Xa;
x.longDateFormat = ni;
x.invalidDate = ai;
x.ordinal = li;
x.preparse = mr;
x.postformat = mr;
x.relativeTime = ci;
x.pastFuture = fi;
x.set = Ka;
x.eras = Ul;
x.erasParse = Hl;
x.erasConvertYear = Vl;
x.erasAbbrRegex = Zl;
x.erasNameRegex = Bl;
x.erasNarrowRegex = ql;
x.months = Yi;
x.monthsShort = Pi;
x.monthsParse = Ri;
x.monthsRegex = Ei;
x.monthsShortRegex = xi;
x.week = Wi;
x.firstDayOfYear = Li;
x.firstDayOfWeek = Fi;
x.weekdays = Zi;
x.weekdaysMin = Qi;
x.weekdaysShort = qi;
x.weekdaysParse = Ji;
x.weekdaysRegex = so;
x.weekdaysShortRegex = no;
x.weekdaysMinRegex = ro;
x.isPM = io;
x.meridiem = uo;
function bt(e, t, s, n) {
  var r = Se(), a = fe().set(n, t);
  return r[s](a, e);
}
function pr(e, t, s) {
  if (we(e) && (t = e, e = void 0), e = e || "", t != null)
    return bt(e, t, s, "month");
  var n, r = [];
  for (n = 0; n < 12; n++)
    r[n] = bt(e, n, s, "month");
  return r;
}
function Ws(e, t, s, n) {
  typeof e == "boolean" ? (we(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, we(t) && (s = t, t = void 0), t = t || "");
  var r = Se(), a = e ? r._week.dow : 0, i, u = [];
  if (s != null)
    return bt(t, (s + a) % 7, n, "day");
  for (i = 0; i < 7; i++)
    u[i] = bt(t, (i + a) % 7, n, "day");
  return u;
}
function pu(e, t) {
  return pr(e, t, "months");
}
function _u(e, t) {
  return pr(e, t, "monthsShort");
}
function yu(e, t, s) {
  return Ws(e, t, s, "weekdays");
}
function gu(e, t, s) {
  return Ws(e, t, s, "weekdaysShort");
}
function vu(e, t, s) {
  return Ws(e, t, s, "weekdaysMin");
}
Pe("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = D(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
p.lang = ee(
  "moment.lang is deprecated. Use moment.locale instead.",
  Pe
);
p.langData = ee(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Se
);
var pe = Math.abs;
function wu() {
  var e = this._data;
  return this._milliseconds = pe(this._milliseconds), this._days = pe(this._days), this._months = pe(this._months), e.milliseconds = pe(e.milliseconds), e.seconds = pe(e.seconds), e.minutes = pe(e.minutes), e.hours = pe(e.hours), e.months = pe(e.months), e.years = pe(e.years), this;
}
function _r(e, t, s, n) {
  var r = le(t, s);
  return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble();
}
function Su(e, t) {
  return _r(this, e, t, 1);
}
function ku(e, t) {
  return _r(this, e, t, -1);
}
function dn(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Mu() {
  var e = this._milliseconds, t = this._days, s = this._months, n = this._data, r, a, i, u, o;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += dn(hs(s) + t) * 864e5, t = 0, s = 0), n.milliseconds = e % 1e3, r = X(e / 1e3), n.seconds = r % 60, a = X(r / 60), n.minutes = a % 60, i = X(a / 60), n.hours = i % 24, t += X(i / 24), o = X(yr(t)), s += o, t -= dn(hs(o)), u = X(s / 12), s %= 12, n.days = t, n.months = s, n.years = u, this;
}
function yr(e) {
  return e * 4800 / 146097;
}
function hs(e) {
  return e * 146097 / 4800;
}
function Du(e) {
  if (!this.isValid())
    return NaN;
  var t, s, n = this._milliseconds;
  if (e = te(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, s = this._months + yr(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(hs(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Ou() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + D(this._months / 12) * 31536e6 : NaN;
}
function ke(e) {
  return function() {
    return this.as(e);
  };
}
var Yu = ke("ms"), Pu = ke("s"), bu = ke("m"), Ru = ke("h"), Tu = ke("d"), xu = ke("w"), Eu = ke("M"), Nu = ke("Q"), Cu = ke("y");
function Wu() {
  return le(this);
}
function Au(e) {
  return e = te(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ne(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Fu = Ne("milliseconds"), Lu = Ne("seconds"), Iu = Ne("minutes"), Uu = Ne("hours"), Hu = Ne("days"), Vu = Ne("months"), Gu = Ne("years");
function $u() {
  return X(this.days() / 7);
}
var _e = Math.round, Ie = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function ju(e, t, s, n, r) {
  return r.relativeTime(t || 1, !!s, e, n);
}
function zu(e, t, s, n) {
  var r = le(e).abs(), a = _e(r.as("s")), i = _e(r.as("m")), u = _e(r.as("h")), o = _e(r.as("d")), c = _e(r.as("M")), l = _e(r.as("w")), h = _e(r.as("y")), m = a <= s.ss && ["s", a] || a < s.s && ["ss", a] || i <= 1 && ["m"] || i < s.m && ["mm", i] || u <= 1 && ["h"] || u < s.h && ["hh", u] || o <= 1 && ["d"] || o < s.d && ["dd", o];
  return s.w != null && (m = m || l <= 1 && ["w"] || l < s.w && ["ww", l]), m = m || c <= 1 && ["M"] || c < s.M && ["MM", c] || h <= 1 && ["y"] || ["yy", h], m[2] = t, m[3] = +e > 0, m[4] = n, ju.apply(null, m);
}
function Bu(e) {
  return e === void 0 ? _e : typeof e == "function" ? (_e = e, !0) : !1;
}
function Zu(e, t) {
  return Ie[e] === void 0 ? !1 : t === void 0 ? Ie[e] : (Ie[e] = t, e === "s" && (Ie.ss = t - 1), !0);
}
function qu(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, n = Ie, r, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (n = Object.assign({}, Ie, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), r = this.localeData(), a = zu(this, !s, n, r), s && (a = r.pastFuture(+this, a)), r.postformat(a);
}
var ss = Math.abs;
function We(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ht() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = ss(this._milliseconds) / 1e3, t = ss(this._days), s = ss(this._months), n, r, a, i, u = this.asSeconds(), o, c, l, h;
  return u ? (n = X(e / 60), r = X(n / 60), e %= 60, n %= 60, a = X(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = u < 0 ? "-" : "", c = We(this._months) !== We(u) ? "-" : "", l = We(this._days) !== We(u) ? "-" : "", h = We(this._milliseconds) !== We(u) ? "-" : "", o + "P" + (a ? c + a + "Y" : "") + (s ? c + s + "M" : "") + (t ? l + t + "D" : "") + (r || n || e ? "T" : "") + (r ? h + r + "H" : "") + (n ? h + n + "M" : "") + (e ? h + i + "S" : "")) : "P0D";
}
var b = It.prototype;
b.isValid = Ho;
b.abs = wu;
b.add = Su;
b.subtract = ku;
b.as = Du;
b.asMilliseconds = Yu;
b.asSeconds = Pu;
b.asMinutes = bu;
b.asHours = Ru;
b.asDays = Tu;
b.asWeeks = xu;
b.asMonths = Eu;
b.asQuarters = Nu;
b.asYears = Cu;
b.valueOf = Ou;
b._bubble = Mu;
b.clone = Wu;
b.get = Au;
b.milliseconds = Fu;
b.seconds = Lu;
b.minutes = Iu;
b.hours = Uu;
b.days = Hu;
b.weeks = $u;
b.months = Vu;
b.years = Gu;
b.humanize = qu;
b.toISOString = Ht;
b.toString = Ht;
b.toJSON = Ht;
b.locale = ar;
b.localeData = or;
b.toIsoString = ee(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ht
);
b.lang = ir;
v("X", 0, 0, "unix");
v("x", 0, 0, "valueOf");
y("x", Wt);
y("X", _i);
N("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
N("x", function(e, t, s) {
  s._d = new Date(D(e));
});
//! moment.js
p.version = "2.29.4";
qa(W);
p.fn = d;
p.min = Fo;
p.max = Lo;
p.now = Io;
p.utc = fe;
p.unix = du;
p.months = pu;
p.isDate = ft;
p.locale = Pe;
p.invalid = Tt;
p.duration = le;
p.isMoment = oe;
p.weekdays = yu;
p.parseZone = mu;
p.localeData = Se;
p.isDuration = wt;
p.monthsShort = _u;
p.weekdaysMin = vu;
p.defineLocale = Ps;
p.updateLocale = mo;
p.locales = po;
p.weekdaysShort = gu;
p.normalizeUnits = te;
p.relativeTimeRounding = Bu;
p.relativeTimeThreshold = Zu;
p.calendarFormat = cl;
p.prototype = d;
p.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM"
};
const Qu = ct({
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
      itemsPerPage: 5,
      pagesPagination: Array,
      pageOfItems: this.response.slice(0, 5),
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
      for (let s = e; s <= t; s += 1) {
        let n = new Za();
        n.pageNumber = s, n.isActive = this.currentPage == s, this.pagesPagination.push(n);
      }
      this.isPreviousDisabled = this.currentPage == 1, this.isNextDisabled = this.currentPage == this.pageQuantity;
    },
    redirect(e) {
      window.location.href = e;
    },
    formatDate(e) {
      return p(e).format("YYYY-MM-DD hh:mm:ss");
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
const Ku = { class: "text-start" }, Ju = { class: "d-flex text-body-secondary pt-3" }, Xu = /* @__PURE__ */ I("span", { class: "me-1" }, [
  /* @__PURE__ */ I("img", {
    src: " https://www.dinowilliam.com/lib/assets/logo.png",
    height: "16",
    width: "72",
    loading: "lazy"
  })
], -1), ec = { class: "pb-3 mb-0 small lh-sm" }, tc = { class: "h6" }, sc = { class: "badge rounded-pill text-bg-secondary" }, nc = ["href"], rc = {
  class: "pt-5",
  "aria-label": "Search Page navigation"
}, ac = { class: "pagination justify-content-center" }, ic = { class: "page-item" }, oc = ["onClick"], lc = { class: "page-item" };
function uc(e, t, s, n, r, a) {
  return Te(), Ae("div", null, [
    (Te(!0), Ae(Gs, null, $s(e.pageOfItems, (i, u) => (Te(), Ae("div", Ku, [
      I("div", Ju, [
        Xu,
        I("p", ec, [
          I("p", tc, [
            js(Qe(i.url) + " ", 1),
            I("span", sc, Qe(e.formatDate(i.date)), 1)
          ]),
          I("p", null, [
            I("a", {
              class: "h4",
              href: i.url
            }, Qe(i.title), 9, nc)
          ]),
          js(" " + Qe(i.description), 1)
        ])
      ])
    ]))), 256)),
    I("nav", rc, [
      I("ul", ac, [
        I("li", ic, [
          I("a", {
            class: qt(["page-link", { disabled: e.isPreviousDisabled }]),
            onClick: t[0] || (t[0] = (i) => e.onPageChange(e.previousPage))
          }, "Previous", 2)
        ]),
        (Te(!0), Ae(Gs, null, $s(e.pagesPagination, (i) => (Te(), Ae("li", {
          class: qt(["page-item", { active: i.isActive }])
        }, [
          I("a", {
            class: "page-link",
            onClick: (u) => e.onPageChange(i.pageNumber)
          }, Qe(i.pageNumber), 9, oc)
        ], 2))), 256)),
        I("li", lc, [
          I("a", {
            class: qt(["page-link", { disabled: e.isNextDisabled }]),
            onClick: t[1] || (t[1] = (i) => e.onPageChange(e.nextPage))
          }, "Next", 2)
        ])
      ])
    ])
  ]);
}
const cc = /* @__PURE__ */ ds(Qu, [["render", uc]]), fc = [
  {
    path: "/Search",
    name: "SearchForm",
    component: Ba
  },
  {
    path: "/SearchResults",
    name: "SearchResults",
    component: cc,
    props: { response: Array }
  }
], hc = La({
  mode: "history",
  history: ea(),
  routes: fc
});
Nr(Ar).use(hc).mount("#mainAppSearch");
//# sourceMappingURL=vueappsearch.js.mjs.map
