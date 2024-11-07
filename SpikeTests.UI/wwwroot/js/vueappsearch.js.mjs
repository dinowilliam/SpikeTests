import { shallowRef as Rr, unref as Xe, shallowReactive as br, nextTick as Pr, defineComponent as ct, reactive as Tr, inject as nt, computed as ie, h as vn, provide as jt, ref as xr, watch as Nr, openBlock as Pe, createElementBlock as We, createElementVNode as H, withModifiers as Cr, withDirectives as Er, vModelText as Wr, Fragment as zs, renderList as Bs, createTextVNode as qs, toDisplayString as Ze, normalizeClass as zt, resolveComponent as Ir, createBlock as Ar, createApp as Fr } from "vue";
function Lr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var es = { exports: {} }, ds = {}, hs = {};
Object.defineProperty(hs, "__esModule", {
  value: !0
});
hs.default = {
  /**
   * Property to check that cookie polyfill was used
   */
  type: "cookie",
  keysCache: null,
  getItem: function(t) {
    return t && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function(t, s, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "/", a = arguments[4], i = arguments[5];
    if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t))
      return !1;
    var l = "";
    if (n)
      switch (n.constructor) {
        case Number:
          l = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
          break;
        case String:
          l = "; expires=" + n;
          break;
        case Date:
          l = "; expires=" + n.toUTCString();
          break;
      }
    return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(s) + l + (a ? "; domain=" + a : "") + (r ? "; path=" + r : "") + (i ? "; secure" : ""), this.keysCache = null, !0;
  },
  removeItem: function(t, s, n) {
    return this.hasItem(t) ? (document.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (s ? "; path=" + s : ""), this.keysCache = null, !0) : !1;
  },
  hasItem: function(t) {
    return !t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t) ? !1 : new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
  },
  keys: function() {
    for (var t = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), s = t.length, n = 0; n < s; n++)
      t[n] = decodeURIComponent(t[n]);
    return this.keysCache = t, t;
  },
  /**
   * Get length. For compatability with localStorage
   */
  get length() {
    return this.keys().length;
  },
  key: function(t) {
    return this.keysCache === null && (this.keysCache = this.keys()), this.keysCache[t];
  }
};
Object.defineProperty(ds, "__esModule", {
  value: !0
});
var Ur = hs, Hr = Vr(Ur);
function Vr(e) {
  return e && e.__esModule ? e : { default: e };
}
var ts = void 0, $r = function() {
  try {
    var t = "testvuels";
    return window.localStorage.setItem(t, "1"), window.localStorage.removeItem(t), !0;
  } catch {
    return !1;
  }
};
$r() ? ts = window.localStorage : ts = Hr.default;
ds.default = ts;
(function(e, t) {
  var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
    return typeof u;
  } : function(u) {
    return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
  }, n = /* @__PURE__ */ function() {
    function u(h, c) {
      for (var d = 0; d < c.length; d++) {
        var m = c[d];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(h, m.key, m);
      }
    }
    return function(h, c, d) {
      return c && u(h.prototype, c), d && u(h, d), h;
    };
  }(), r = ds, a = i(r);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function l(u, h) {
    if (!(u instanceof h))
      throw new TypeError("Cannot call a class as a function");
  }
  var o = function() {
    function u() {
      l(this, u), this.storage = a.default, this.clear();
    }
    return n(u, [{
      key: "install",
      value: function(c) {
        c.localStorage = c.prototype.$localStorage = this;
      }
    }, {
      key: "set",
      value: function(c, d) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, R = "vuels__" + c, T = JSON.stringify({ value: d, expire: m > 0 ? (/* @__PURE__ */ new Date()).getTime() + m : m });
        typeof this.storage.type < "u" && this.storage.type === "cookie" ? this.storage.setItem(R, T, m) : this.storage.setItem(R, T);
      }
    }, {
      key: "get",
      value: function(c) {
        var d = this.storage.getItem("vuels__" + c);
        return d !== null ? JSON.parse(d).value : null;
      }
    }, {
      key: "remove",
      value: function(c) {
        return this.storage.removeItem("vuels__" + c);
      }
    }, {
      key: "key",
      value: function(c) {
        return this.storage.key(c);
      }
      /**
       * Removes expired items
       */
    }, {
      key: "clear",
      value: function() {
        if (this.length !== 0)
          for (var c = 0; c < this.length; c++) {
            var d = this.storage.key(c);
            if (/vuels__/i.test(d) !== !1) {
              var m = JSON.parse(this.storage.getItem(d));
              m.expire > 0 && m.expire < (/* @__PURE__ */ new Date()).getTime() && this.storage.removeItem(d);
            }
          }
      }
    }, {
      key: "length",
      get: function() {
        return this.storage.length;
      }
    }]), u;
  }();
  s(t) === "object" ? e.exports = new o() : window && window.Vue && window.Vue.use(new o());
})(es, es.exports);
var Gr = es.exports;
const jr = /* @__PURE__ */ Lr(Gr), Ie = typeof document < "u";
function wn(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function zr(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && wn(e.default);
}
const N = Object.assign;
function Bt(e, t) {
  const s = {};
  for (const n in t) {
    const r = t[n];
    s[n] = se(r) ? r.map(e) : e(r);
  }
  return s;
}
const et = () => {
}, se = Array.isArray, kn = /#/g, Br = /&/g, qr = /\//g, Zr = /=/g, Qr = /\?/g, Sn = /\+/g, Jr = /%5B/g, Kr = /%5D/g, Mn = /%5E/g, Xr = /%60/g, Dn = /%7B/g, ea = /%7C/g, On = /%7D/g, ta = /%20/g;
function ms(e) {
  return encodeURI("" + e).replace(ea, "|").replace(Jr, "[").replace(Kr, "]");
}
function sa(e) {
  return ms(e).replace(Dn, "{").replace(On, "}").replace(Mn, "^");
}
function ss(e) {
  return ms(e).replace(Sn, "%2B").replace(ta, "+").replace(kn, "%23").replace(Br, "%26").replace(Xr, "`").replace(Dn, "{").replace(On, "}").replace(Mn, "^");
}
function na(e) {
  return ss(e).replace(Zr, "%3D");
}
function ra(e) {
  return ms(e).replace(kn, "%23").replace(Qr, "%3F");
}
function aa(e) {
  return e == null ? "" : ra(e).replace(qr, "%2F");
}
function rt(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const ia = /\/$/, oa = (e) => e.replace(ia, "");
function qt(e, t, s = "/") {
  let n, r = {}, a = "", i = "";
  const l = t.indexOf("#");
  let o = t.indexOf("?");
  return l < o && l >= 0 && (o = -1), o > -1 && (n = t.slice(0, o), a = t.slice(o + 1, l > -1 ? l : t.length), r = e(a)), l > -1 && (n = n || t.slice(0, l), i = t.slice(l, t.length)), n = fa(n ?? t, s), {
    fullPath: n + (a && "?") + a + i,
    path: n,
    query: r,
    hash: rt(i)
  };
}
function la(e, t) {
  const s = t.query ? e(t.query) : "";
  return t.path + (s && "?") + s + (t.hash || "");
}
function Zs(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function ua(e, t, s) {
  const n = t.matched.length - 1, r = s.matched.length - 1;
  return n > -1 && n === r && Ve(t.matched[n], s.matched[r]) && Yn(t.params, s.params) && e(t.query) === e(s.query) && t.hash === s.hash;
}
function Ve(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Yn(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const s in e)
    if (!ca(e[s], t[s]))
      return !1;
  return !0;
}
function ca(e, t) {
  return se(e) ? Qs(e, t) : se(t) ? Qs(t, e) : e === t;
}
function Qs(e, t) {
  return se(t) ? e.length === t.length && e.every((s, n) => s === t[n]) : e.length === 1 && e[0] === t;
}
function fa(e, t) {
  if (e.startsWith("/"))
    return e;
  if (!e)
    return t;
  const s = t.split("/"), n = e.split("/"), r = n[n.length - 1];
  (r === ".." || r === ".") && n.push("");
  let a = s.length - 1, i, l;
  for (i = 0; i < n.length; i++)
    if (l = n[i], l !== ".")
      if (l === "..")
        a > 1 && a--;
      else
        break;
  return s.slice(0, a).join("/") + "/" + n.slice(i).join("/");
}
const Se = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var at;
(function(e) {
  e.pop = "pop", e.push = "push";
})(at || (at = {}));
var tt;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(tt || (tt = {}));
function da(e) {
  if (!e)
    if (Ie) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), oa(e);
}
const ha = /^[^#]+#/;
function ma(e, t) {
  return e.replace(ha, "#") + t;
}
function pa(e, t) {
  const s = document.documentElement.getBoundingClientRect(), n = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: n.left - s.left - (t.left || 0),
    top: n.top - s.top - (t.top || 0)
  };
}
const Rt = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function ya(e) {
  let t;
  if ("el" in e) {
    const s = e.el, n = typeof s == "string" && s.startsWith("#"), r = typeof s == "string" ? n ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
    if (!r)
      return;
    t = pa(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Js(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ns = /* @__PURE__ */ new Map();
function ga(e, t) {
  ns.set(e, t);
}
function _a(e) {
  const t = ns.get(e);
  return ns.delete(e), t;
}
let va = () => location.protocol + "//" + location.host;
function Rn(e, t) {
  const { pathname: s, search: n, hash: r } = t, a = e.indexOf("#");
  if (a > -1) {
    let l = r.includes(e.slice(a)) ? e.slice(a).length : 1, o = r.slice(l);
    return o[0] !== "/" && (o = "/" + o), Zs(o, "");
  }
  return Zs(s, e) + n + r;
}
function wa(e, t, s, n) {
  let r = [], a = [], i = null;
  const l = ({ state: d }) => {
    const m = Rn(e, location), R = s.value, T = t.value;
    let L = 0;
    if (d) {
      if (s.value = m, t.value = d, i && i === R) {
        i = null;
        return;
      }
      L = T ? d.position - T.position : 0;
    } else
      n(m);
    r.forEach((U) => {
      U(s.value, R, {
        delta: L,
        type: at.pop,
        direction: L ? L > 0 ? tt.forward : tt.back : tt.unknown
      });
    });
  };
  function o() {
    i = s.value;
  }
  function u(d) {
    r.push(d);
    const m = () => {
      const R = r.indexOf(d);
      R > -1 && r.splice(R, 1);
    };
    return a.push(m), m;
  }
  function h() {
    const { history: d } = window;
    d.state && d.replaceState(N({}, d.state, { scroll: Rt() }), "");
  }
  function c() {
    for (const d of a)
      d();
    a = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", h);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", h, {
    passive: !0
  }), {
    pauseListeners: o,
    listen: u,
    destroy: c
  };
}
function Ks(e, t, s, n = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: s,
    replaced: n,
    position: window.history.length,
    scroll: r ? Rt() : null
  };
}
function ka(e) {
  const { history: t, location: s } = window, n = {
    value: Rn(e, s)
  }, r = { value: t.state };
  r.value || a(n.value, {
    back: null,
    current: n.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function a(o, u, h) {
    const c = e.indexOf("#"), d = c > -1 ? (s.host && document.querySelector("base") ? e : e.slice(c)) + o : va() + e + o;
    try {
      t[h ? "replaceState" : "pushState"](u, "", d), r.value = u;
    } catch (m) {
      console.error(m), s[h ? "replace" : "assign"](d);
    }
  }
  function i(o, u) {
    const h = N({}, t.state, Ks(
      r.value.back,
      // keep back and forward entries but override current position
      o,
      r.value.forward,
      !0
    ), u, { position: r.value.position });
    a(o, h, !0), n.value = o;
  }
  function l(o, u) {
    const h = N(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      r.value,
      t.state,
      {
        forward: o,
        scroll: Rt()
      }
    );
    a(h.current, h, !0);
    const c = N({}, Ks(n.value, o, null), { position: h.position + 1 }, u);
    a(o, c, !1), n.value = o;
  }
  return {
    location: n,
    state: r,
    push: l,
    replace: i
  };
}
function Sa(e) {
  e = da(e);
  const t = ka(e), s = wa(e, t.state, t.location, t.replace);
  function n(a, i = !0) {
    i || s.pauseListeners(), history.go(a);
  }
  const r = N({
    // it's overridden right after
    location: "",
    base: e,
    go: n,
    createHref: ma.bind(null, e)
  }, t, s);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function Ma(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function bn(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Pn = Symbol("");
var Xs;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Xs || (Xs = {}));
function $e(e, t) {
  return N(new Error(), {
    type: e,
    [Pn]: !0
  }, t);
}
function fe(e, t) {
  return e instanceof Error && Pn in e && (t == null || !!(e.type & t));
}
const en = "[^/]+?", Da = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Oa = /[.+*?^${}()[\]/\\]/g;
function Ya(e, t) {
  const s = N({}, Da, t), n = [];
  let r = s.start ? "^" : "";
  const a = [];
  for (const u of e) {
    const h = u.length ? [] : [
      90
      /* PathScore.Root */
    ];
    s.strict && !u.length && (r += "/");
    for (let c = 0; c < u.length; c++) {
      const d = u[c];
      let m = 40 + (s.sensitive ? 0.25 : 0);
      if (d.type === 0)
        c || (r += "/"), r += d.value.replace(Oa, "\\$&"), m += 40;
      else if (d.type === 1) {
        const { value: R, repeatable: T, optional: L, regexp: U } = d;
        a.push({
          name: R,
          repeatable: T,
          optional: L
        });
        const x = U || en;
        if (x !== en) {
          m += 10;
          try {
            new RegExp(`(${x})`);
          } catch (ee) {
            throw new Error(`Invalid custom RegExp for param "${R}" (${x}): ` + ee.message);
          }
        }
        let E = T ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
        c || (E = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        L && u.length < 2 ? `(?:/${E})` : "/" + E), L && (E += "?"), r += E, m += 20, L && (m += -8), T && (m += -20), x === ".*" && (m += -50);
      }
      h.push(m);
    }
    n.push(h);
  }
  if (s.strict && s.end) {
    const u = n.length - 1;
    n[u][n[u].length - 1] += 0.7000000000000001;
  }
  s.strict || (r += "/?"), s.end ? r += "$" : s.strict && (r += "(?:/|$)");
  const i = new RegExp(r, s.sensitive ? "" : "i");
  function l(u) {
    const h = u.match(i), c = {};
    if (!h)
      return null;
    for (let d = 1; d < h.length; d++) {
      const m = h[d] || "", R = a[d - 1];
      c[R.name] = m && R.repeatable ? m.split("/") : m;
    }
    return c;
  }
  function o(u) {
    let h = "", c = !1;
    for (const d of e) {
      (!c || !h.endsWith("/")) && (h += "/"), c = !1;
      for (const m of d)
        if (m.type === 0)
          h += m.value;
        else if (m.type === 1) {
          const { value: R, repeatable: T, optional: L } = m, U = R in u ? u[R] : "";
          if (se(U) && !T)
            throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);
          const x = se(U) ? U.join("/") : U;
          if (!x)
            if (L)
              d.length < 2 && (h.endsWith("/") ? h = h.slice(0, -1) : c = !0);
            else
              throw new Error(`Missing required param "${R}"`);
          h += x;
        }
    }
    return h || "/";
  }
  return {
    re: i,
    score: n,
    keys: a,
    parse: l,
    stringify: o
  };
}
function Ra(e, t) {
  let s = 0;
  for (; s < e.length && s < t.length; ) {
    const n = t[s] - e[s];
    if (n)
      return n;
    s++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Tn(e, t) {
  let s = 0;
  const n = e.score, r = t.score;
  for (; s < n.length && s < r.length; ) {
    const a = Ra(n[s], r[s]);
    if (a)
      return a;
    s++;
  }
  if (Math.abs(r.length - n.length) === 1) {
    if (tn(n))
      return 1;
    if (tn(r))
      return -1;
  }
  return r.length - n.length;
}
function tn(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const ba = {
  type: 0,
  value: ""
}, Pa = /[a-zA-Z0-9_]/;
function Ta(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[ba]];
  if (!e.startsWith("/"))
    throw new Error(`Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${s})/"${u}": ${m}`);
  }
  let s = 0, n = s;
  const r = [];
  let a;
  function i() {
    a && r.push(a), a = [];
  }
  let l = 0, o, u = "", h = "";
  function c() {
    u && (s === 0 ? a.push({
      type: 0,
      value: u
    }) : s === 1 || s === 2 || s === 3 ? (a.length > 1 && (o === "*" || o === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: u,
      regexp: h,
      repeatable: o === "*" || o === "+",
      optional: o === "*" || o === "?"
    })) : t("Invalid state to consume buffer"), u = "");
  }
  function d() {
    u += o;
  }
  for (; l < e.length; ) {
    if (o = e[l++], o === "\\" && s !== 2) {
      n = s, s = 4;
      continue;
    }
    switch (s) {
      case 0:
        o === "/" ? (u && c(), i()) : o === ":" ? (c(), s = 1) : d();
        break;
      case 4:
        d(), s = n;
        break;
      case 1:
        o === "(" ? s = 2 : Pa.test(o) ? d() : (c(), s = 0, o !== "*" && o !== "?" && o !== "+" && l--);
        break;
      case 2:
        o === ")" ? h[h.length - 1] == "\\" ? h = h.slice(0, -1) + o : s = 3 : h += o;
        break;
      case 3:
        c(), s = 0, o !== "*" && o !== "?" && o !== "+" && l--, h = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return s === 2 && t(`Unfinished custom RegExp for param "${u}"`), c(), i(), r;
}
function xa(e, t, s) {
  const n = Ya(Ta(e.path), s), r = N(n, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Na(e, t) {
  const s = [], n = /* @__PURE__ */ new Map();
  t = an({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(c) {
    return n.get(c);
  }
  function a(c, d, m) {
    const R = !m, T = nn(c);
    T.aliasOf = m && m.record;
    const L = an(t, c), U = [T];
    if ("alias" in c) {
      const ee = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const Re of ee)
        U.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          nn(N({}, T, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: m ? m.record.components : T.components,
            path: Re,
            // we might be the child of an alias
            aliasOf: m ? m.record : T
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let x, E;
    for (const ee of U) {
      const { path: Re } = ee;
      if (d && Re[0] !== "/") {
        const ke = d.record.path, Q = ke[ke.length - 1] === "/" ? "" : "/";
        ee.path = d.record.path + (Re && Q + Re);
      }
      if (x = xa(ee, d, L), m ? m.alias.push(x) : (E = E || x, E !== x && E.alias.push(x), R && c.name && !rn(x) && i(c.name)), xn(x) && o(x), T.children) {
        const ke = T.children;
        for (let Q = 0; Q < ke.length; Q++)
          a(ke[Q], x, m && m.children[Q]);
      }
      m = m || x;
    }
    return E ? () => {
      i(E);
    } : et;
  }
  function i(c) {
    if (bn(c)) {
      const d = n.get(c);
      d && (n.delete(c), s.splice(s.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
    } else {
      const d = s.indexOf(c);
      d > -1 && (s.splice(d, 1), c.record.name && n.delete(c.record.name), c.children.forEach(i), c.alias.forEach(i));
    }
  }
  function l() {
    return s;
  }
  function o(c) {
    const d = Wa(c, s);
    s.splice(d, 0, c), c.record.name && !rn(c) && n.set(c.record.name, c);
  }
  function u(c, d) {
    let m, R = {}, T, L;
    if ("name" in c && c.name) {
      if (m = n.get(c.name), !m)
        throw $e(1, {
          location: c
        });
      L = m.record.name, R = N(
        // paramsFromLocation is a new object
        sn(
          d.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          m.keys.filter((E) => !E.optional).concat(m.parent ? m.parent.keys.filter((E) => E.optional) : []).map((E) => E.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        c.params && sn(c.params, m.keys.map((E) => E.name))
      ), T = m.stringify(R);
    } else if (c.path != null)
      T = c.path, m = s.find((E) => E.re.test(T)), m && (R = m.parse(T), L = m.record.name);
    else {
      if (m = d.name ? n.get(d.name) : s.find((E) => E.re.test(d.path)), !m)
        throw $e(1, {
          location: c,
          currentLocation: d
        });
      L = m.record.name, R = N({}, d.params, c.params), T = m.stringify(R);
    }
    const U = [];
    let x = m;
    for (; x; )
      U.unshift(x.record), x = x.parent;
    return {
      name: L,
      path: T,
      params: R,
      matched: U,
      meta: Ea(U)
    };
  }
  e.forEach((c) => a(c));
  function h() {
    s.length = 0, n.clear();
  }
  return {
    addRoute: a,
    resolve: u,
    removeRoute: i,
    clearRoutes: h,
    getRoutes: l,
    getRecordMatcher: r
  };
}
function sn(e, t) {
  const s = {};
  for (const n of t)
    n in e && (s[n] = e[n]);
  return s;
}
function nn(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: Ca(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", {
    value: {}
  }), t;
}
function Ca(e) {
  const t = {}, s = e.props || !1;
  if ("component" in e)
    t.default = s;
  else
    for (const n in e.components)
      t[n] = typeof s == "object" ? s[n] : s;
  return t;
}
function rn(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Ea(e) {
  return e.reduce((t, s) => N(t, s.meta), {});
}
function an(e, t) {
  const s = {};
  for (const n in e)
    s[n] = n in t ? t[n] : e[n];
  return s;
}
function Wa(e, t) {
  let s = 0, n = t.length;
  for (; s !== n; ) {
    const a = s + n >> 1;
    Tn(e, t[a]) < 0 ? n = a : s = a + 1;
  }
  const r = Ia(e);
  return r && (n = t.lastIndexOf(r, n - 1)), n;
}
function Ia(e) {
  let t = e;
  for (; t = t.parent; )
    if (xn(t) && Tn(e, t) === 0)
      return t;
}
function xn({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Aa(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const a = n[r].replace(Sn, " "), i = a.indexOf("="), l = rt(i < 0 ? a : a.slice(0, i)), o = i < 0 ? null : rt(a.slice(i + 1));
    if (l in t) {
      let u = t[l];
      se(u) || (u = t[l] = [u]), u.push(o);
    } else
      t[l] = o;
  }
  return t;
}
function on(e) {
  let t = "";
  for (let s in e) {
    const n = e[s];
    if (s = na(s), n == null) {
      n !== void 0 && (t += (t.length ? "&" : "") + s);
      continue;
    }
    (se(n) ? n.map((a) => a && ss(a)) : [n && ss(n)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + s, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Fa(e) {
  const t = {};
  for (const s in e) {
    const n = e[s];
    n !== void 0 && (t[s] = se(n) ? n.map((r) => r == null ? null : "" + r) : n == null ? n : "" + n);
  }
  return t;
}
const La = Symbol(""), ln = Symbol(""), ps = Symbol(""), Nn = Symbol(""), rs = Symbol("");
function Qe() {
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
    list: () => e.slice(),
    reset: s
  };
}
function Me(e, t, s, n, r, a = (i) => i()) {
  const i = n && // name is defined if record is because of the function overload
  (n.enterCallbacks[r] = n.enterCallbacks[r] || []);
  return () => new Promise((l, o) => {
    const u = (d) => {
      d === !1 ? o($e(4, {
        from: s,
        to: t
      })) : d instanceof Error ? o(d) : Ma(d) ? o($e(2, {
        from: t,
        to: d
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      n.enterCallbacks[r] === i && typeof d == "function" && i.push(d), l());
    }, h = a(() => e.call(n && n.instances[r], t, s, u));
    let c = Promise.resolve(h);
    e.length < 3 && (c = c.then(u)), c.catch((d) => o(d));
  });
}
function Zt(e, t, s, n, r = (a) => a()) {
  const a = [];
  for (const i of e)
    for (const l in i.components) {
      let o = i.components[l];
      if (!(t !== "beforeRouteEnter" && !i.instances[l]))
        if (wn(o)) {
          const h = (o.__vccOpts || o)[t];
          h && a.push(Me(h, s, n, i, l, r));
        } else {
          let u = o();
          a.push(() => u.then((h) => {
            if (!h)
              throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
            const c = zr(h) ? h.default : h;
            i.mods[l] = h, i.components[l] = c;
            const m = (c.__vccOpts || c)[t];
            return m && Me(m, s, n, i, l, r)();
          }));
        }
    }
  return a;
}
function un(e) {
  const t = nt(ps), s = nt(Nn), n = ie(() => {
    const o = Xe(e.to);
    return t.resolve(o);
  }), r = ie(() => {
    const { matched: o } = n.value, { length: u } = o, h = o[u - 1], c = s.matched;
    if (!h || !c.length)
      return -1;
    const d = c.findIndex(Ve.bind(null, h));
    if (d > -1)
      return d;
    const m = cn(o[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      cn(h) === m && // avoid comparing the child with its parent
      c[c.length - 1].path !== m ? c.findIndex(Ve.bind(null, o[u - 2])) : d
    );
  }), a = ie(() => r.value > -1 && $a(s.params, n.value.params)), i = ie(() => r.value > -1 && r.value === s.matched.length - 1 && Yn(s.params, n.value.params));
  function l(o = {}) {
    return Va(o) ? t[Xe(e.replace) ? "replace" : "push"](
      Xe(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(et) : Promise.resolve();
  }
  return {
    route: n,
    href: ie(() => n.value.href),
    isActive: a,
    isExactActive: i,
    navigate: l
  };
}
const Ua = /* @__PURE__ */ ct({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: un,
  setup(e, { slots: t }) {
    const s = Tr(un(e)), { options: n } = nt(ps), r = ie(() => ({
      [fn(e.activeClass, n.linkActiveClass, "router-link-active")]: s.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [fn(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
    }));
    return () => {
      const a = t.default && t.default(s);
      return e.custom ? a : vn("a", {
        "aria-current": s.isExactActive ? e.ariaCurrentValue : null,
        href: s.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: s.navigate,
        class: r.value
      }, a);
    };
  }
}), Ha = Ua;
function Va(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function $a(e, t) {
  for (const s in t) {
    const n = t[s], r = e[s];
    if (typeof n == "string") {
      if (n !== r)
        return !1;
    } else if (!se(r) || r.length !== n.length || n.some((a, i) => a !== r[i]))
      return !1;
  }
  return !0;
}
function cn(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const fn = (e, t, s) => e ?? t ?? s, Ga = /* @__PURE__ */ ct({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: s }) {
    const n = nt(rs), r = ie(() => e.route || n.value), a = nt(ln, 0), i = ie(() => {
      let u = Xe(a);
      const { matched: h } = r.value;
      let c;
      for (; (c = h[u]) && !c.components; )
        u++;
      return u;
    }), l = ie(() => r.value.matched[i.value]);
    jt(ln, ie(() => i.value + 1)), jt(La, l), jt(rs, r);
    const o = xr();
    return Nr(() => [o.value, l.value, e.name], ([u, h, c], [d, m, R]) => {
      h && (h.instances[c] = u, m && m !== h && u && u === d && (h.leaveGuards.size || (h.leaveGuards = m.leaveGuards), h.updateGuards.size || (h.updateGuards = m.updateGuards))), u && h && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !Ve(h, m) || !d) && (h.enterCallbacks[c] || []).forEach((T) => T(u));
    }, { flush: "post" }), () => {
      const u = r.value, h = e.name, c = l.value, d = c && c.components[h];
      if (!d)
        return dn(s.default, { Component: d, route: u });
      const m = c.props[h], R = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null, L = vn(d, N({}, R, t, {
        onVnodeUnmounted: (U) => {
          U.component.isUnmounted && (c.instances[h] = null);
        },
        ref: o
      }));
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        dn(s.default, { Component: L, route: u }) || L
      );
    };
  }
});
function dn(e, t) {
  if (!e)
    return null;
  const s = e(t);
  return s.length === 1 ? s[0] : s;
}
const ja = Ga;
function za(e) {
  const t = Na(e.routes, e), s = e.parseQuery || Aa, n = e.stringifyQuery || on, r = e.history, a = Qe(), i = Qe(), l = Qe(), o = Rr(Se);
  let u = Se;
  Ie && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const h = Bt.bind(null, (f) => "" + f), c = Bt.bind(null, aa), d = (
    // @ts-expect-error: intentionally avoid the type check
    Bt.bind(null, rt)
  );
  function m(f, v) {
    let g, k;
    return bn(f) ? (g = t.getRecordMatcher(f), k = v) : k = f, t.addRoute(k, g);
  }
  function R(f) {
    const v = t.getRecordMatcher(f);
    v && t.removeRoute(v);
  }
  function T() {
    return t.getRoutes().map((f) => f.record);
  }
  function L(f) {
    return !!t.getRecordMatcher(f);
  }
  function U(f, v) {
    if (v = N({}, v || o.value), typeof f == "string") {
      const M = qt(s, f, v.path), G = t.resolve({ path: M.path }, v), qe = r.createHref(M.fullPath);
      return N(M, G, {
        params: d(G.params),
        hash: rt(M.hash),
        redirectedFrom: void 0,
        href: qe
      });
    }
    let g;
    if (f.path != null)
      g = N({}, f, {
        path: qt(s, f.path, v.path).path
      });
    else {
      const M = N({}, f.params);
      for (const G in M)
        M[G] == null && delete M[G];
      g = N({}, f, {
        params: c(M)
      }), v.params = c(v.params);
    }
    const k = t.resolve(g, v), W = f.hash || "";
    k.params = h(d(k.params));
    const $ = la(n, N({}, f, {
      hash: sa(W),
      path: k.path
    })), O = r.createHref($);
    return N({
      fullPath: $,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: W,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        n === on ? Fa(f.query) : f.query || {}
      )
    }, k, {
      redirectedFrom: void 0,
      href: O
    });
  }
  function x(f) {
    return typeof f == "string" ? qt(s, f, o.value.path) : N({}, f);
  }
  function E(f, v) {
    if (u !== f)
      return $e(8, {
        from: v,
        to: f
      });
  }
  function ee(f) {
    return Q(f);
  }
  function Re(f) {
    return ee(N(x(f), { replace: !0 }));
  }
  function ke(f) {
    const v = f.matched[f.matched.length - 1];
    if (v && v.redirect) {
      const { redirect: g } = v;
      let k = typeof g == "function" ? g(f) : g;
      return typeof k == "string" && (k = k.includes("?") || k.includes("#") ? k = x(k) : (
        // force empty params
        { path: k }
      ), k.params = {}), N({
        query: f.query,
        hash: f.hash,
        // avoid transferring params if the redirect has a path
        params: k.path != null ? {} : f.params
      }, k);
    }
  }
  function Q(f, v) {
    const g = u = U(f), k = o.value, W = f.state, $ = f.force, O = f.replace === !0, M = ke(g);
    if (M)
      return Q(
        N(x(M), {
          state: typeof M == "object" ? N({}, W, M.state) : W,
          force: $,
          replace: O
        }),
        // keep original redirectedFrom if it exists
        v || g
      );
    const G = g;
    G.redirectedFrom = v;
    let qe;
    return !$ && ua(n, k, g) && (qe = $e(16, { to: G, from: k }), Gs(
      k,
      k,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (qe ? Promise.resolve(qe) : Us(G, k)).catch((B) => fe(B) ? (
      // navigation redirects still mark the router as ready
      fe(
        B,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? B : Vt(B)
    ) : (
      // reject any unknown error
      Ht(B, G, k)
    )).then((B) => {
      if (B) {
        if (fe(
          B,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return Q(
            // keep options
            N({
              // preserve an existing replacement but allow the redirect to override it
              replace: O
            }, x(B.to), {
              state: typeof B.to == "object" ? N({}, W, B.to.state) : W,
              force: $
            }),
            // preserve the original redirectedFrom if any
            v || G
          );
      } else
        B = Vs(G, k, !0, O, W);
      return Hs(G, k, B), B;
    });
  }
  function Dr(f, v) {
    const g = E(f, v);
    return g ? Promise.reject(g) : Promise.resolve();
  }
  function Lt(f) {
    const v = yt.values().next().value;
    return v && typeof v.runWithContext == "function" ? v.runWithContext(f) : f();
  }
  function Us(f, v) {
    let g;
    const [k, W, $] = Ba(f, v);
    g = Zt(k.reverse(), "beforeRouteLeave", f, v);
    for (const M of k)
      M.leaveGuards.forEach((G) => {
        g.push(Me(G, f, v));
      });
    const O = Dr.bind(null, f, v);
    return g.push(O), Ce(g).then(() => {
      g = [];
      for (const M of a.list())
        g.push(Me(M, f, v));
      return g.push(O), Ce(g);
    }).then(() => {
      g = Zt(W, "beforeRouteUpdate", f, v);
      for (const M of W)
        M.updateGuards.forEach((G) => {
          g.push(Me(G, f, v));
        });
      return g.push(O), Ce(g);
    }).then(() => {
      g = [];
      for (const M of $)
        if (M.beforeEnter)
          if (se(M.beforeEnter))
            for (const G of M.beforeEnter)
              g.push(Me(G, f, v));
          else
            g.push(Me(M.beforeEnter, f, v));
      return g.push(O), Ce(g);
    }).then(() => (f.matched.forEach((M) => M.enterCallbacks = {}), g = Zt($, "beforeRouteEnter", f, v, Lt), g.push(O), Ce(g))).then(() => {
      g = [];
      for (const M of i.list())
        g.push(Me(M, f, v));
      return g.push(O), Ce(g);
    }).catch((M) => fe(
      M,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? M : Promise.reject(M));
  }
  function Hs(f, v, g) {
    l.list().forEach((k) => Lt(() => k(f, v, g)));
  }
  function Vs(f, v, g, k, W) {
    const $ = E(f, v);
    if ($)
      return $;
    const O = v === Se, M = Ie ? history.state : {};
    g && (k || O ? r.replace(f.fullPath, N({
      scroll: O && M && M.scroll
    }, W)) : r.push(f.fullPath, W)), o.value = f, Gs(f, v, g, O), Vt();
  }
  let Be;
  function Or() {
    Be || (Be = r.listen((f, v, g) => {
      if (!js.listening)
        return;
      const k = U(f), W = ke(k);
      if (W) {
        Q(N(W, { replace: !0 }), k).catch(et);
        return;
      }
      u = k;
      const $ = o.value;
      Ie && ga(Js($.fullPath, g.delta), Rt()), Us(k, $).catch((O) => fe(
        O,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? O : fe(
        O,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (Q(
        O.to,
        k
        // avoid an uncaught rejection, let push call triggerError
      ).then((M) => {
        fe(
          M,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !g.delta && g.type === at.pop && r.go(-1, !1);
      }).catch(et), Promise.reject()) : (g.delta && r.go(-g.delta, !1), Ht(O, k, $))).then((O) => {
        O = O || Vs(
          // after navigation, all matched components are resolved
          k,
          $,
          !1
        ), O && (g.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !fe(
          O,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? r.go(-g.delta, !1) : g.type === at.pop && fe(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && r.go(-1, !1)), Hs(k, $, O);
      }).catch(et);
    }));
  }
  let Ut = Qe(), $s = Qe(), pt;
  function Ht(f, v, g) {
    Vt(f);
    const k = $s.list();
    return k.length ? k.forEach((W) => W(f, v, g)) : console.error(f), Promise.reject(f);
  }
  function Yr() {
    return pt && o.value !== Se ? Promise.resolve() : new Promise((f, v) => {
      Ut.add([f, v]);
    });
  }
  function Vt(f) {
    return pt || (pt = !f, Or(), Ut.list().forEach(([v, g]) => f ? g(f) : v()), Ut.reset()), f;
  }
  function Gs(f, v, g, k) {
    const { scrollBehavior: W } = e;
    if (!Ie || !W)
      return Promise.resolve();
    const $ = !g && _a(Js(f.fullPath, 0)) || (k || !g) && history.state && history.state.scroll || null;
    return Pr().then(() => W(f, v, $)).then((O) => O && ya(O)).catch((O) => Ht(O, f, v));
  }
  const $t = (f) => r.go(f);
  let Gt;
  const yt = /* @__PURE__ */ new Set(), js = {
    currentRoute: o,
    listening: !0,
    addRoute: m,
    removeRoute: R,
    clearRoutes: t.clearRoutes,
    hasRoute: L,
    getRoutes: T,
    resolve: U,
    options: e,
    push: ee,
    replace: Re,
    go: $t,
    back: () => $t(-1),
    forward: () => $t(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: $s.add,
    isReady: Yr,
    install(f) {
      const v = this;
      f.component("RouterLink", Ha), f.component("RouterView", ja), f.config.globalProperties.$router = v, Object.defineProperty(f.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Xe(o)
      }), Ie && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Gt && o.value === Se && (Gt = !0, ee(r.location).catch((W) => {
      }));
      const g = {};
      for (const W in Se)
        Object.defineProperty(g, W, {
          get: () => o.value[W],
          enumerable: !0
        });
      f.provide(ps, v), f.provide(Nn, br(g)), f.provide(rs, o);
      const k = f.unmount;
      yt.add(f), f.unmount = function() {
        yt.delete(f), yt.size < 1 && (u = Se, Be && Be(), Be = null, o.value = Se, Gt = !1, pt = !1), k();
      };
    }
  };
  function Ce(f) {
    return f.reduce((v, g) => v.then(() => Lt(g)), Promise.resolve());
  }
  return js;
}
function Ba(e, t) {
  const s = [], n = [], r = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const l = t.matched[i];
    l && (e.matched.find((u) => Ve(u, l)) ? n.push(l) : s.push(l));
    const o = e.matched[i];
    o && (t.matched.find((u) => Ve(u, o)) || r.push(o));
  }
  return [s, n, r];
}
const qa = ct({
  name: "SearchForm",
  data() {
    return {
      dataResponse: { type: Array },
      prompt: { type: String, default: "" }
    };
  },
  mounted() {
    this.prompt = "";
  },
  methods: {
    async sendSearch() {
      var e = {
        Prompt: this.prompt
      };
      const t = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e)
      };
      console.log(prompt), this.dataResponse = await fetch("https://localhost:44354/Search", t).then((s) => s.json()).then((s) => s), localStorage.clear(), localStorage.setItem("searchResult", JSON.stringify(this.dataResponse)), console.log(this.dataResponse), this.$router.push({
        name: "SearchResults"
      });
    }
  }
}), ys = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, Za = { class: "container-fluid mt-5" }, Qa = { class: "input-group pt-5 mb-3" };
function Ja(e, t, s, n, r, a) {
  return Pe(), We("div", Za, [
    t[3] || (t[3] = H("div", { class: "pt-5 pb-5" }, null, -1)),
    t[4] || (t[4] = H("div", {
      class: "mt-5",
      id: "logo"
    }, [
      H("img", { src: "/img/lucene-net-color.png" })
    ], -1)),
    H("form", {
      onSubmit: t[1] || (t[1] = Cr((...i) => e.sendSearch && e.sendSearch(...i), ["prevent"]))
    }, [
      H("div", Qa, [
        Er(H("input", {
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
          [Wr, e.prompt]
        ])
      ]),
      t[2] || (t[2] = H("button", {
        type: "submit",
        class: "btn btn-lg btn-dark col-md-4"
      }, "Search", -1))
    ], 32)
  ]);
}
const Ka = /* @__PURE__ */ ys(qa, [["render", Ja]]);
class Xa {
}
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Cn;
function y() {
  return Cn.apply(null, arguments);
}
function ei(e) {
  Cn = e;
}
function ne(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function xe(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function b(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function gs(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (b(e, t))
      return !1;
  return !0;
}
function q(e) {
  return e === void 0;
}
function _e(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ft(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function En(e, t) {
  var s = [], n, r = e.length;
  for (n = 0; n < r; ++n)
    s.push(t(e[n], n));
  return s;
}
function De(e, t) {
  for (var s in t)
    b(t, s) && (e[s] = t[s]);
  return b(t, "toString") && (e.toString = t.toString), b(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function ue(e, t, s, n) {
  return nr(e, t, s, n, !0).utc();
}
function ti() {
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
function S(e) {
  return e._pf == null && (e._pf = ti()), e._pf;
}
var as;
Array.prototype.some ? as = Array.prototype.some : as = function(e) {
  var t = Object(this), s = t.length >>> 0, n;
  for (n = 0; n < s; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function _s(e) {
  var t = null, s = !1, n = e._d && !isNaN(e._d.getTime());
  if (n && (t = S(e), s = as.call(t.parsedDateParts, function(r) {
    return r != null;
  }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = n;
  else
    return n;
  return e._isValid;
}
function bt(e) {
  var t = ue(NaN);
  return e != null ? De(S(t), e) : S(t).userInvalidated = !0, t;
}
var hn = y.momentProperties = [], Qt = !1;
function vs(e, t) {
  var s, n, r, a = hn.length;
  if (q(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), q(t._i) || (e._i = t._i), q(t._f) || (e._f = t._f), q(t._l) || (e._l = t._l), q(t._strict) || (e._strict = t._strict), q(t._tzm) || (e._tzm = t._tzm), q(t._isUTC) || (e._isUTC = t._isUTC), q(t._offset) || (e._offset = t._offset), q(t._pf) || (e._pf = S(t)), q(t._locale) || (e._locale = t._locale), a > 0)
    for (s = 0; s < a; s++)
      n = hn[s], r = t[n], q(r) || (e[n] = r);
  return e;
}
function dt(e) {
  vs(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Qt === !1 && (Qt = !0, y.updateOffset(this), Qt = !1);
}
function re(e) {
  return e instanceof dt || e != null && e._isAMomentObject != null;
}
function Wn(e) {
  y.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function K(e, t) {
  var s = !0;
  return De(function() {
    if (y.deprecationHandler != null && y.deprecationHandler(null, e), s) {
      var n = [], r, a, i, l = arguments.length;
      for (a = 0; a < l; a++) {
        if (r = "", typeof arguments[a] == "object") {
          r += `
[` + a + "] ";
          for (i in arguments[0])
            b(arguments[0], i) && (r += i + ": " + arguments[0][i] + ", ");
          r = r.slice(0, -2);
        } else
          r = arguments[a];
        n.push(r);
      }
      Wn(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var mn = {};
function In(e, t) {
  y.deprecationHandler != null && y.deprecationHandler(e, t), mn[e] || (Wn(t), mn[e] = !0);
}
y.suppressDeprecationWarnings = !1;
y.deprecationHandler = null;
function ce(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function si(e) {
  var t, s;
  for (s in e)
    b(e, s) && (t = e[s], ce(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function is(e, t) {
  var s = De({}, e), n;
  for (n in t)
    b(t, n) && (xe(e[n]) && xe(t[n]) ? (s[n] = {}, De(s[n], e[n]), De(s[n], t[n])) : t[n] != null ? s[n] = t[n] : delete s[n]);
  for (n in e)
    b(e, n) && !b(t, n) && xe(e[n]) && (s[n] = De({}, s[n]));
  return s;
}
function ws(e) {
  e != null && this.set(e);
}
var os;
Object.keys ? os = Object.keys : os = function(e) {
  var t, s = [];
  for (t in e)
    b(e, t) && s.push(t);
  return s;
};
var ni = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function ri(e, t, s) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return ce(n) ? n.call(t, s) : n;
}
function le(e, t, s) {
  var n = "" + Math.abs(e), r = t - n.length, a = e >= 0;
  return (a ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n;
}
var ks = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, gt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Jt = {}, Le = {};
function w(e, t, s, n) {
  var r = n;
  typeof n == "string" && (r = function() {
    return this[n]();
  }), e && (Le[e] = r), t && (Le[t[0]] = function() {
    return le(r.apply(this, arguments), t[1], t[2]);
  }), s && (Le[s] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function ai(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ii(e) {
  var t = e.match(ks), s, n;
  for (s = 0, n = t.length; s < n; s++)
    Le[t[s]] ? t[s] = Le[t[s]] : t[s] = ai(t[s]);
  return function(r) {
    var a = "", i;
    for (i = 0; i < n; i++)
      a += ce(t[i]) ? t[i].call(r, e) : t[i];
    return a;
  };
}
function vt(e, t) {
  return e.isValid() ? (t = An(t, e.localeData()), Jt[t] = Jt[t] || ii(t), Jt[t](e)) : e.localeData().invalidDate();
}
function An(e, t) {
  var s = 5;
  function n(r) {
    return t.longDateFormat(r) || r;
  }
  for (gt.lastIndex = 0; s >= 0 && gt.test(e); )
    e = e.replace(
      gt,
      n
    ), gt.lastIndex = 0, s -= 1;
  return e;
}
var oi = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function li(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(ks).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var ui = "Invalid date";
function ci() {
  return this._invalidDate;
}
var fi = "%d", di = /\d{1,2}/;
function hi(e) {
  return this._ordinal.replace("%d", e);
}
var mi = {
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
function pi(e, t, s, n) {
  var r = this._relativeTime[s];
  return ce(r) ? r(e, t, s, n) : r.replace(/%d/i, e);
}
function yi(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return ce(s) ? s(t) : s.replace(/%s/i, t);
}
var pn = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function X(e) {
  return typeof e == "string" ? pn[e] || pn[e.toLowerCase()] : void 0;
}
function Ss(e) {
  var t = {}, s, n;
  for (n in e)
    b(e, n) && (s = X(n), s && (t[s] = e[n]));
  return t;
}
var gi = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function _i(e) {
  var t = [], s;
  for (s in e)
    b(e, s) && t.push({ unit: s, priority: gi[s] });
  return t.sort(function(n, r) {
    return n.priority - r.priority;
  }), t;
}
var Fn = /\d/, Z = /\d\d/, Ln = /\d{3}/, Ms = /\d{4}/, Pt = /[+-]?\d{6}/, A = /\d\d?/, Un = /\d\d\d\d?/, Hn = /\d\d\d\d\d\d?/, Tt = /\d{1,3}/, Ds = /\d{1,4}/, xt = /[+-]?\d{1,6}/, Ge = /\d+/, Nt = /[+-]?\d+/, vi = /Z|[+-]\d\d:?\d\d/gi, Ct = /Z|[+-]\d\d(?::?\d\d)?/gi, wi = /[+-]?\d+(\.\d{1,3})?/, ht = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, je = /^[1-9]\d?/, Os = /^([1-9]\d|\d)/, St;
St = {};
function _(e, t, s) {
  St[e] = ce(t) ? t : function(n, r) {
    return n && s ? s : t;
  };
}
function ki(e, t) {
  return b(St, e) ? St[e](t._strict, t._locale) : new RegExp(Si(e));
}
function Si(e) {
  return ye(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, n, r, a) {
        return s || n || r || a;
      }
    )
  );
}
function ye(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function J(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function D(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = J(t)), s;
}
var ls = {};
function C(e, t) {
  var s, n = t, r;
  for (typeof e == "string" && (e = [e]), _e(t) && (n = function(a, i) {
    i[t] = D(a);
  }), r = e.length, s = 0; s < r; s++)
    ls[e[s]] = n;
}
function mt(e, t) {
  C(e, function(s, n, r, a) {
    r._w = r._w || {}, t(s, r._w, r, a);
  });
}
function Mi(e, t, s) {
  t != null && b(ls, e) && ls[e](t, s._a, s, e);
}
function Et(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var z = 0, me = 1, oe = 2, j = 3, te = 4, pe = 5, Te = 6, Di = 7, Oi = 8;
w("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? le(e, 4) : "+" + e;
});
w(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
w(0, ["YYYY", 4], 0, "year");
w(0, ["YYYYY", 5], 0, "year");
w(0, ["YYYYYY", 6, !0], 0, "year");
_("Y", Nt);
_("YY", A, Z);
_("YYYY", Ds, Ms);
_("YYYYY", xt, Pt);
_("YYYYYY", xt, Pt);
C(["YYYYY", "YYYYYY"], z);
C("YYYY", function(e, t) {
  t[z] = e.length === 2 ? y.parseTwoDigitYear(e) : D(e);
});
C("YY", function(e, t) {
  t[z] = y.parseTwoDigitYear(e);
});
C("Y", function(e, t) {
  t[z] = parseInt(e, 10);
});
function st(e) {
  return Et(e) ? 366 : 365;
}
y.parseTwoDigitYear = function(e) {
  return D(e) + (D(e) > 68 ? 1900 : 2e3);
};
var Vn = ze("FullYear", !0);
function Yi() {
  return Et(this.year());
}
function ze(e, t) {
  return function(s) {
    return s != null ? ($n(this, e, s), y.updateOffset(this, t), this) : it(this, e);
  };
}
function it(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, n = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return n ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return n ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return n ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return n ? s.getUTCHours() : s.getHours();
    case "Date":
      return n ? s.getUTCDate() : s.getDate();
    case "Day":
      return n ? s.getUTCDay() : s.getDay();
    case "Month":
      return n ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return n ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function $n(e, t, s) {
  var n, r, a, i, l;
  if (!(!e.isValid() || isNaN(s))) {
    switch (n = e._d, r = e._isUTC, t) {
      case "Milliseconds":
        return void (r ? n.setUTCMilliseconds(s) : n.setMilliseconds(s));
      case "Seconds":
        return void (r ? n.setUTCSeconds(s) : n.setSeconds(s));
      case "Minutes":
        return void (r ? n.setUTCMinutes(s) : n.setMinutes(s));
      case "Hours":
        return void (r ? n.setUTCHours(s) : n.setHours(s));
      case "Date":
        return void (r ? n.setUTCDate(s) : n.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    a = s, i = e.month(), l = e.date(), l = l === 29 && i === 1 && !Et(a) ? 28 : l, r ? n.setUTCFullYear(a, i, l) : n.setFullYear(a, i, l);
  }
}
function Ri(e) {
  return e = X(e), ce(this[e]) ? this[e]() : this;
}
function bi(e, t) {
  if (typeof e == "object") {
    e = Ss(e);
    var s = _i(e), n, r = s.length;
    for (n = 0; n < r; n++)
      this[s[n].unit](e[s[n].unit]);
  } else if (e = X(e), ce(this[e]))
    return this[e](t);
  return this;
}
function Pi(e, t) {
  return (e % t + t) % t;
}
var V;
Array.prototype.indexOf ? V = Array.prototype.indexOf : V = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ys(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Pi(t, 12);
  return e += (t - s) / 12, s === 1 ? Et(e) ? 29 : 28 : 31 - s % 7 % 2;
}
w("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
w("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
w("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
_("M", A, je);
_("MM", A, Z);
_("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
_("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
C(["M", "MM"], function(e, t) {
  t[me] = D(e) - 1;
});
C(["MMM", "MMMM"], function(e, t, s, n) {
  var r = s._locale.monthsParse(e, n, s._strict);
  r != null ? t[me] = r : S(s).invalidMonth = e;
});
var Ti = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Gn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), jn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, xi = ht, Ni = ht;
function Ci(e, t) {
  return e ? ne(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || jn).test(t) ? "format" : "standalone"][e.month()] : ne(this._months) ? this._months : this._months.standalone;
}
function Ei(e, t) {
  return e ? ne(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[jn.test(t) ? "format" : "standalone"][e.month()] : ne(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Wi(e, t, s) {
  var n, r, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = ue([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (r = V.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = V.call(this._longMonthsParse, i), r !== -1 ? r : null) : t === "MMM" ? (r = V.call(this._shortMonthsParse, i), r !== -1 ? r : (r = V.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = V.call(this._longMonthsParse, i), r !== -1 ? r : (r = V.call(this._shortMonthsParse, i), r !== -1 ? r : null));
}
function Ii(e, t, s) {
  var n, r, a;
  if (this._monthsParseExact)
    return Wi.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (r = ue([2e3, n]), s && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
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
function zn(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = D(t);
    else if (t = e.localeData().monthsParse(t), !_e(t))
      return e;
  }
  var s = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, Ys(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, n) : e._d.setMonth(s, n), e;
}
function Bn(e) {
  return e != null ? (zn(this, e), y.updateOffset(this, !0), this) : it(this, "Month");
}
function Ai() {
  return Ys(this.year(), this.month());
}
function Fi(e) {
  return this._monthsParseExact ? (b(this, "_monthsRegex") || qn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (b(this, "_monthsShortRegex") || (this._monthsShortRegex = xi), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Li(e) {
  return this._monthsParseExact ? (b(this, "_monthsRegex") || qn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (b(this, "_monthsRegex") || (this._monthsRegex = Ni), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function qn() {
  function e(o, u) {
    return u.length - o.length;
  }
  var t = [], s = [], n = [], r, a, i, l;
  for (r = 0; r < 12; r++)
    a = ue([2e3, r]), i = ye(this.monthsShort(a, "")), l = ye(this.months(a, "")), t.push(i), s.push(l), n.push(l), n.push(i);
  t.sort(e), s.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Ui(e, t, s, n, r, a, i) {
  var l;
  return e < 100 && e >= 0 ? (l = new Date(e + 400, t, s, n, r, a, i), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, s, n, r, a, i), l;
}
function ot(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Mt(e, t, s) {
  var n = 7 + t - s, r = (7 + ot(e, 0, n).getUTCDay() - t) % 7;
  return -r + n - 1;
}
function Zn(e, t, s, n, r) {
  var a = (7 + s - n) % 7, i = Mt(e, n, r), l = 1 + 7 * (t - 1) + a + i, o, u;
  return l <= 0 ? (o = e - 1, u = st(o) + l) : l > st(e) ? (o = e + 1, u = l - st(e)) : (o = e, u = l), {
    year: o,
    dayOfYear: u
  };
}
function lt(e, t, s) {
  var n = Mt(e.year(), t, s), r = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, i;
  return r < 1 ? (i = e.year() - 1, a = r + ge(i, t, s)) : r > ge(e.year(), t, s) ? (a = r - ge(e.year(), t, s), i = e.year() + 1) : (i = e.year(), a = r), {
    week: a,
    year: i
  };
}
function ge(e, t, s) {
  var n = Mt(e, t, s), r = Mt(e + 1, t, s);
  return (st(e) - n + r) / 7;
}
w("w", ["ww", 2], "wo", "week");
w("W", ["WW", 2], "Wo", "isoWeek");
_("w", A, je);
_("ww", A, Z);
_("W", A, je);
_("WW", A, Z);
mt(
  ["w", "ww", "W", "WW"],
  function(e, t, s, n) {
    t[n.substr(0, 1)] = D(e);
  }
);
function Hi(e) {
  return lt(e, this._week.dow, this._week.doy).week;
}
var Vi = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function $i() {
  return this._week.dow;
}
function Gi() {
  return this._week.doy;
}
function ji(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function zi(e) {
  var t = lt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
w("d", 0, "do", "day");
w("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
w("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
w("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
w("e", 0, 0, "weekday");
w("E", 0, 0, "isoWeekday");
_("d", A);
_("e", A);
_("E", A);
_("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
_("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
_("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
mt(["dd", "ddd", "dddd"], function(e, t, s, n) {
  var r = s._locale.weekdaysParse(e, n, s._strict);
  r != null ? t.d = r : S(s).invalidWeekday = e;
});
mt(["d", "e", "E"], function(e, t, s, n) {
  t[n] = D(e);
});
function Bi(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function qi(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Rs(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Zi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Qn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Qi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ji = ht, Ki = ht, Xi = ht;
function eo(e, t) {
  var s = ne(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Rs(s, this._week.dow) : e ? s[e.day()] : s;
}
function to(e) {
  return e === !0 ? Rs(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function so(e) {
  return e === !0 ? Rs(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function no(e, t, s) {
  var n, r, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = ue([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (r = V.call(this._weekdaysParse, i), r !== -1 ? r : null) : t === "ddd" ? (r = V.call(this._shortWeekdaysParse, i), r !== -1 ? r : null) : (r = V.call(this._minWeekdaysParse, i), r !== -1 ? r : null) : t === "dddd" ? (r = V.call(this._weekdaysParse, i), r !== -1 || (r = V.call(this._shortWeekdaysParse, i), r !== -1) ? r : (r = V.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : t === "ddd" ? (r = V.call(this._shortWeekdaysParse, i), r !== -1 || (r = V.call(this._weekdaysParse, i), r !== -1) ? r : (r = V.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : (r = V.call(this._minWeekdaysParse, i), r !== -1 || (r = V.call(this._weekdaysParse, i), r !== -1) ? r : (r = V.call(this._shortWeekdaysParse, i), r !== -1 ? r : null));
}
function ro(e, t, s) {
  var n, r, a;
  if (this._weekdaysParseExact)
    return no.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (r = ue([2e3, 1]).day(n), s && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
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
function ao(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = it(this, "Day");
  return e != null ? (e = Bi(e, this.localeData()), this.add(e - t, "d")) : t;
}
function io(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function oo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = qi(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function lo(e) {
  return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || bs.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (b(this, "_weekdaysRegex") || (this._weekdaysRegex = Ji), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function uo(e) {
  return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || bs.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (b(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ki), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function co(e) {
  return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || bs.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (b(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xi), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function bs() {
  function e(h, c) {
    return c.length - h.length;
  }
  var t = [], s = [], n = [], r = [], a, i, l, o, u;
  for (a = 0; a < 7; a++)
    i = ue([2e3, 1]).day(a), l = ye(this.weekdaysMin(i, "")), o = ye(this.weekdaysShort(i, "")), u = ye(this.weekdays(i, "")), t.push(l), s.push(o), n.push(u), r.push(l), r.push(o), r.push(u);
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
function Ps() {
  return this.hours() % 12 || 12;
}
function fo() {
  return this.hours() || 24;
}
w("H", ["HH", 2], 0, "hour");
w("h", ["hh", 2], 0, Ps);
w("k", ["kk", 2], 0, fo);
w("hmm", 0, 0, function() {
  return "" + Ps.apply(this) + le(this.minutes(), 2);
});
w("hmmss", 0, 0, function() {
  return "" + Ps.apply(this) + le(this.minutes(), 2) + le(this.seconds(), 2);
});
w("Hmm", 0, 0, function() {
  return "" + this.hours() + le(this.minutes(), 2);
});
w("Hmmss", 0, 0, function() {
  return "" + this.hours() + le(this.minutes(), 2) + le(this.seconds(), 2);
});
function Jn(e, t) {
  w(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Jn("a", !0);
Jn("A", !1);
function Kn(e, t) {
  return t._meridiemParse;
}
_("a", Kn);
_("A", Kn);
_("H", A, Os);
_("h", A, je);
_("k", A, je);
_("HH", A, Z);
_("hh", A, Z);
_("kk", A, Z);
_("hmm", Un);
_("hmmss", Hn);
_("Hmm", Un);
_("Hmmss", Hn);
C(["H", "HH"], j);
C(["k", "kk"], function(e, t, s) {
  var n = D(e);
  t[j] = n === 24 ? 0 : n;
});
C(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
C(["h", "hh"], function(e, t, s) {
  t[j] = D(e), S(s).bigHour = !0;
});
C("hmm", function(e, t, s) {
  var n = e.length - 2;
  t[j] = D(e.substr(0, n)), t[te] = D(e.substr(n)), S(s).bigHour = !0;
});
C("hmmss", function(e, t, s) {
  var n = e.length - 4, r = e.length - 2;
  t[j] = D(e.substr(0, n)), t[te] = D(e.substr(n, 2)), t[pe] = D(e.substr(r)), S(s).bigHour = !0;
});
C("Hmm", function(e, t, s) {
  var n = e.length - 2;
  t[j] = D(e.substr(0, n)), t[te] = D(e.substr(n));
});
C("Hmmss", function(e, t, s) {
  var n = e.length - 4, r = e.length - 2;
  t[j] = D(e.substr(0, n)), t[te] = D(e.substr(n, 2)), t[pe] = D(e.substr(r));
});
function ho(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var mo = /[ap]\.?m?\.?/i, po = ze("Hours", !0);
function yo(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Xn = {
  calendar: ni,
  longDateFormat: oi,
  invalidDate: ui,
  ordinal: fi,
  dayOfMonthOrdinalParse: di,
  relativeTime: mi,
  months: Ti,
  monthsShort: Gn,
  week: Vi,
  weekdays: Zi,
  weekdaysMin: Qi,
  weekdaysShort: Qn,
  meridiemParse: mo
}, F = {}, Je = {}, ut;
function go(e, t) {
  var s, n = Math.min(e.length, t.length);
  for (s = 0; s < n; s += 1)
    if (e[s] !== t[s])
      return s;
  return n;
}
function yn(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function _o(e) {
  for (var t = 0, s, n, r, a; t < e.length; ) {
    for (a = yn(e[t]).split("-"), s = a.length, n = yn(e[t + 1]), n = n ? n.split("-") : null; s > 0; ) {
      if (r = Wt(a.slice(0, s).join("-")), r)
        return r;
      if (n && n.length >= s && go(a, n) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return ut;
}
function vo(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Wt(e) {
  var t = null, s;
  if (F[e] === void 0 && typeof module < "u" && module && module.exports && vo(e))
    try {
      t = ut._abbr, s = require, s("./locale/" + e), Ye(t);
    } catch {
      F[e] = null;
    }
  return F[e];
}
function Ye(e, t) {
  var s;
  return e && (q(t) ? s = ve(e) : s = Ts(e, t), s ? ut = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ut._abbr;
}
function Ts(e, t) {
  if (t !== null) {
    var s, n = Xn;
    if (t.abbr = e, F[e] != null)
      In(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = F[e]._config;
    else if (t.parentLocale != null)
      if (F[t.parentLocale] != null)
        n = F[t.parentLocale]._config;
      else if (s = Wt(t.parentLocale), s != null)
        n = s._config;
      else
        return Je[t.parentLocale] || (Je[t.parentLocale] = []), Je[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return F[e] = new ws(is(n, t)), Je[e] && Je[e].forEach(function(r) {
      Ts(r.name, r.config);
    }), Ye(e), F[e];
  } else
    return delete F[e], null;
}
function wo(e, t) {
  if (t != null) {
    var s, n, r = Xn;
    F[e] != null && F[e].parentLocale != null ? F[e].set(is(F[e]._config, t)) : (n = Wt(e), n != null && (r = n._config), t = is(r, t), n == null && (t.abbr = e), s = new ws(t), s.parentLocale = F[e], F[e] = s), Ye(e);
  } else
    F[e] != null && (F[e].parentLocale != null ? (F[e] = F[e].parentLocale, e === Ye() && Ye(e)) : F[e] != null && delete F[e]);
  return F[e];
}
function ve(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ut;
  if (!ne(e)) {
    if (t = Wt(e), t)
      return t;
    e = [e];
  }
  return _o(e);
}
function ko() {
  return os(F);
}
function xs(e) {
  var t, s = e._a;
  return s && S(e).overflow === -2 && (t = s[me] < 0 || s[me] > 11 ? me : s[oe] < 1 || s[oe] > Ys(s[z], s[me]) ? oe : s[j] < 0 || s[j] > 24 || s[j] === 24 && (s[te] !== 0 || s[pe] !== 0 || s[Te] !== 0) ? j : s[te] < 0 || s[te] > 59 ? te : s[pe] < 0 || s[pe] > 59 ? pe : s[Te] < 0 || s[Te] > 999 ? Te : -1, S(e)._overflowDayOfYear && (t < z || t > oe) && (t = oe), S(e)._overflowWeeks && t === -1 && (t = Di), S(e)._overflowWeekday && t === -1 && (t = Oi), S(e).overflow = t), e;
}
var So = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Mo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Do = /Z|[+-]\d\d(?::?\d\d)?/, _t = [
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
], Kt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Oo = /^\/?Date\((-?\d+)/i, Yo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Ro = {
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
function er(e) {
  var t, s, n = e._i, r = So.exec(n) || Mo.exec(n), a, i, l, o, u = _t.length, h = Kt.length;
  if (r) {
    for (S(e).iso = !0, t = 0, s = u; t < s; t++)
      if (_t[t][1].exec(r[1])) {
        i = _t[t][0], a = _t[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (r[3]) {
      for (t = 0, s = h; t < s; t++)
        if (Kt[t][1].exec(r[3])) {
          l = (r[2] || " ") + Kt[t][0];
          break;
        }
      if (l == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && l != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (Do.exec(r[4]))
        o = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (l || "") + (o || ""), Cs(e);
  } else
    e._isValid = !1;
}
function bo(e, t, s, n, r, a) {
  var i = [
    Po(e),
    Gn.indexOf(t),
    parseInt(s, 10),
    parseInt(n, 10),
    parseInt(r, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function Po(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function To(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function xo(e, t, s) {
  if (e) {
    var n = Qn.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== r)
      return S(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function No(e, t, s) {
  if (e)
    return Ro[e];
  if (t)
    return 0;
  var n = parseInt(s, 10), r = n % 100, a = (n - r) / 100;
  return a * 60 + r;
}
function tr(e) {
  var t = Yo.exec(To(e._i)), s;
  if (t) {
    if (s = bo(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !xo(t[1], s, e))
      return;
    e._a = s, e._tzm = No(t[8], t[9], t[10]), e._d = ot.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), S(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Co(e) {
  var t = Oo.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (er(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (tr(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : y.createFromInputFallback(e);
}
y.createFromInputFallback = K(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ae(e, t, s) {
  return e ?? t ?? s;
}
function Eo(e) {
  var t = new Date(y.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Ns(e) {
  var t, s, n = [], r, a, i;
  if (!e._d) {
    for (r = Eo(e), e._w && e._a[oe] == null && e._a[me] == null && Wo(e), e._dayOfYear != null && (i = Ae(e._a[z], r[z]), (e._dayOfYear > st(i) || e._dayOfYear === 0) && (S(e)._overflowDayOfYear = !0), s = ot(i, 0, e._dayOfYear), e._a[me] = s.getUTCMonth(), e._a[oe] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[j] === 24 && e._a[te] === 0 && e._a[pe] === 0 && e._a[Te] === 0 && (e._nextDay = !0, e._a[j] = 0), e._d = (e._useUTC ? ot : Ui).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[j] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (S(e).weekdayMismatch = !0);
  }
}
function Wo(e) {
  var t, s, n, r, a, i, l, o, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, s = Ae(
    t.GG,
    e._a[z],
    lt(I(), 1, 4).year
  ), n = Ae(t.W, 1), r = Ae(t.E, 1), (r < 1 || r > 7) && (o = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, u = lt(I(), a, i), s = Ae(t.gg, e._a[z], u.year), n = Ae(t.w, u.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (o = !0)) : t.e != null ? (r = t.e + a, (t.e < 0 || t.e > 6) && (o = !0)) : r = a), n < 1 || n > ge(s, a, i) ? S(e)._overflowWeeks = !0 : o != null ? S(e)._overflowWeekday = !0 : (l = Zn(s, n, r, a, i), e._a[z] = l.year, e._dayOfYear = l.dayOfYear);
}
y.ISO_8601 = function() {
};
y.RFC_2822 = function() {
};
function Cs(e) {
  if (e._f === y.ISO_8601) {
    er(e);
    return;
  }
  if (e._f === y.RFC_2822) {
    tr(e);
    return;
  }
  e._a = [], S(e).empty = !0;
  var t = "" + e._i, s, n, r, a, i, l = t.length, o = 0, u, h;
  for (r = An(e._f, e._locale).match(ks) || [], h = r.length, s = 0; s < h; s++)
    a = r[s], n = (t.match(ki(a, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && S(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), o += n.length), Le[a] ? (n ? S(e).empty = !1 : S(e).unusedTokens.push(a), Mi(a, n, e)) : e._strict && !n && S(e).unusedTokens.push(a);
  S(e).charsLeftOver = l - o, t.length > 0 && S(e).unusedInput.push(t), e._a[j] <= 12 && S(e).bigHour === !0 && e._a[j] > 0 && (S(e).bigHour = void 0), S(e).parsedDateParts = e._a.slice(0), S(e).meridiem = e._meridiem, e._a[j] = Io(
    e._locale,
    e._a[j],
    e._meridiem
  ), u = S(e).era, u !== null && (e._a[z] = e._locale.erasConvertYear(u, e._a[z])), Ns(e), xs(e);
}
function Io(e, t, s) {
  var n;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (n = e.isPM(s), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function Ao(e) {
  var t, s, n, r, a, i, l = !1, o = e._f.length;
  if (o === 0) {
    S(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (r = 0; r < o; r++)
    a = 0, i = !1, t = vs({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], Cs(t), _s(t) && (i = !0), a += S(t).charsLeftOver, a += S(t).unusedTokens.length * 10, S(t).score = a, l ? a < n && (n = a, s = t) : (n == null || a < n || i) && (n = a, s = t, i && (l = !0));
  De(e, s || t);
}
function Fo(e) {
  if (!e._d) {
    var t = Ss(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = En(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Ns(e);
  }
}
function Lo(e) {
  var t = new dt(xs(sr(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function sr(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || ve(e._l), t === null || s === void 0 && t === "" ? bt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), re(t) ? new dt(xs(t)) : (ft(t) ? e._d = t : ne(s) ? Ao(e) : s ? Cs(e) : Uo(e), _s(e) || (e._d = null), e));
}
function Uo(e) {
  var t = e._i;
  q(t) ? e._d = new Date(y.now()) : ft(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Co(e) : ne(t) ? (e._a = En(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Ns(e)) : xe(t) ? Fo(e) : _e(t) ? e._d = new Date(t) : y.createFromInputFallback(e);
}
function nr(e, t, s, n, r) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (s === !0 || s === !1) && (n = s, s = void 0), (xe(e) && gs(e) || ne(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = s, a._i = e, a._f = t, a._strict = n, Lo(a);
}
function I(e, t, s, n) {
  return nr(e, t, s, n, !1);
}
var Ho = K(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = I.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : bt();
  }
), Vo = K(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = I.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : bt();
  }
);
function rr(e, t) {
  var s, n;
  if (t.length === 1 && ne(t[0]) && (t = t[0]), !t.length)
    return I();
  for (s = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](s)) && (s = t[n]);
  return s;
}
function $o() {
  var e = [].slice.call(arguments, 0);
  return rr("isBefore", e);
}
function Go() {
  var e = [].slice.call(arguments, 0);
  return rr("isAfter", e);
}
var jo = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Ke = [
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
function zo(e) {
  var t, s = !1, n, r = Ke.length;
  for (t in e)
    if (b(e, t) && !(V.call(Ke, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < r; ++n)
    if (e[Ke[n]]) {
      if (s)
        return !1;
      parseFloat(e[Ke[n]]) !== D(e[Ke[n]]) && (s = !0);
    }
  return !0;
}
function Bo() {
  return this._isValid;
}
function qo() {
  return ae(NaN);
}
function It(e) {
  var t = Ss(e), s = t.year || 0, n = t.quarter || 0, r = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, l = t.hour || 0, o = t.minute || 0, u = t.second || 0, h = t.millisecond || 0;
  this._isValid = zo(t), this._milliseconds = +h + u * 1e3 + // 1000
  o * 6e4 + // 1000 * 60
  l * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +r + n * 3 + s * 12, this._data = {}, this._locale = ve(), this._bubble();
}
function wt(e) {
  return e instanceof It;
}
function us(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Zo(e, t, s) {
  var n = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < n; i++)
    D(e[i]) !== D(t[i]) && a++;
  return a + r;
}
function ar(e, t) {
  w(e, 0, 0, function() {
    var s = this.utcOffset(), n = "+";
    return s < 0 && (s = -s, n = "-"), n + le(~~(s / 60), 2) + t + le(~~s % 60, 2);
  });
}
ar("Z", ":");
ar("ZZ", "");
_("Z", Ct);
_("ZZ", Ct);
C(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Es(Ct, e);
});
var Qo = /([\+\-]|\d\d)/gi;
function Es(e, t) {
  var s = (t || "").match(e), n, r, a;
  return s === null ? null : (n = s[s.length - 1] || [], r = (n + "").match(Qo) || ["-", 0, 0], a = +(r[1] * 60) + D(r[2]), a === 0 ? 0 : r[0] === "+" ? a : -a);
}
function Ws(e, t) {
  var s, n;
  return t._isUTC ? (s = t.clone(), n = (re(e) || ft(e) ? e.valueOf() : I(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + n), y.updateOffset(s, !1), s) : I(e).local();
}
function cs(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
y.updateOffset = function() {
};
function Jo(e, t, s) {
  var n = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Es(Ct, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (r = cs(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), n !== e && (!t || this._changeInProgress ? lr(
      this,
      ae(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, y.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : cs(this);
}
function Ko(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Xo(e) {
  return this.utcOffset(0, e);
}
function el(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(cs(this), "m")), this;
}
function tl() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Es(vi, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function sl(e) {
  return this.isValid() ? (e = e ? I(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function nl() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function rl() {
  if (!q(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return vs(e, this), e = sr(e), e._a ? (t = e._isUTC ? ue(e._a) : I(e._a), this._isDSTShifted = this.isValid() && Zo(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function al() {
  return this.isValid() ? !this._isUTC : !1;
}
function il() {
  return this.isValid() ? this._isUTC : !1;
}
function ir() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var ol = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ll = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ae(e, t) {
  var s = e, n = null, r, a, i;
  return wt(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : _e(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (n = ol.exec(e)) ? (r = n[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: D(n[oe]) * r,
    h: D(n[j]) * r,
    m: D(n[te]) * r,
    s: D(n[pe]) * r,
    ms: D(us(n[Te] * 1e3)) * r
    // the millisecond decimal point is included in the match
  }) : (n = ll.exec(e)) ? (r = n[1] === "-" ? -1 : 1, s = {
    y: be(n[2], r),
    M: be(n[3], r),
    w: be(n[4], r),
    d: be(n[5], r),
    h: be(n[6], r),
    m: be(n[7], r),
    s: be(n[8], r)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = ul(
    I(s.from),
    I(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), a = new It(s), wt(e) && b(e, "_locale") && (a._locale = e._locale), wt(e) && b(e, "_isValid") && (a._isValid = e._isValid), a;
}
ae.fn = It.prototype;
ae.invalid = qo;
function be(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function gn(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function ul(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Ws(t, e), e.isBefore(t) ? s = gn(e, t) : (s = gn(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function or(e, t) {
  return function(s, n) {
    var r, a;
    return n !== null && !isNaN(+n) && (In(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = s, s = n, n = a), r = ae(s, n), lr(this, r, e), this;
  };
}
function lr(e, t, s, n) {
  var r = t._milliseconds, a = us(t._days), i = us(t._months);
  e.isValid() && (n = n ?? !0, i && zn(e, it(e, "Month") + i * s), a && $n(e, "Date", it(e, "Date") + a * s), r && e._d.setTime(e._d.valueOf() + r * s), n && y.updateOffset(e, a || i));
}
var cl = or(1, "add"), fl = or(-1, "subtract");
function ur(e) {
  return typeof e == "string" || e instanceof String;
}
function dl(e) {
  return re(e) || ft(e) || ur(e) || _e(e) || ml(e) || hl(e) || e === null || e === void 0;
}
function hl(e) {
  var t = xe(e) && !gs(e), s = !1, n = [
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
    a = n[r], s = s || b(e, a);
  return t && s;
}
function ml(e) {
  var t = ne(e), s = !1;
  return t && (s = e.filter(function(n) {
    return !_e(n) && ur(e);
  }).length === 0), t && s;
}
function pl(e) {
  var t = xe(e) && !gs(e), s = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], r, a;
  for (r = 0; r < n.length; r += 1)
    a = n[r], s = s || b(e, a);
  return t && s;
}
function yl(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function gl(e, t) {
  arguments.length === 1 && (arguments[0] ? dl(arguments[0]) ? (e = arguments[0], t = void 0) : pl(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || I(), n = Ws(s, this).startOf("day"), r = y.calendarFormat(this, n) || "sameElse", a = t && (ce(t[r]) ? t[r].call(this, s) : t[r]);
  return this.format(
    a || this.localeData().calendar(r, this, I(s))
  );
}
function _l() {
  return new dt(this);
}
function vl(e, t) {
  var s = re(e) ? e : I(e);
  return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function wl(e, t) {
  var s = re(e) ? e : I(e);
  return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function kl(e, t, s, n) {
  var r = re(e) ? e : I(e), a = re(t) ? t : I(t);
  return this.isValid() && r.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(r, s) : !this.isBefore(r, s)) && (n[1] === ")" ? this.isBefore(a, s) : !this.isAfter(a, s))) : !1;
}
function Sl(e, t) {
  var s = re(e) ? e : I(e), n;
  return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function Ml(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Dl(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Ol(e, t, s) {
  var n, r, a;
  if (!this.isValid())
    return NaN;
  if (n = Ws(e, this), !n.isValid())
    return NaN;
  switch (r = (n.utcOffset() - this.utcOffset()) * 6e4, t = X(t), t) {
    case "year":
      a = kt(this, n) / 12;
      break;
    case "month":
      a = kt(this, n);
      break;
    case "quarter":
      a = kt(this, n) / 3;
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
  return s ? a : J(a);
}
function kt(e, t) {
  if (e.date() < t.date())
    return -kt(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(s, "months"), r, a;
  return t - n < 0 ? (r = e.clone().add(s - 1, "months"), a = (t - n) / (n - r)) : (r = e.clone().add(s + 1, "months"), a = (t - n) / (r - n)), -(s + a) || 0;
}
y.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
y.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Yl() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Rl(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? vt(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ce(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", vt(s, "Z")) : vt(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function bl() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, n, r, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(s + n + r + a);
}
function Pl(e) {
  e || (e = this.isUtc() ? y.defaultFormatUtc : y.defaultFormat);
  var t = vt(this, e);
  return this.localeData().postformat(t);
}
function Tl(e, t) {
  return this.isValid() && (re(e) && e.isValid() || I(e).isValid()) ? ae({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function xl(e) {
  return this.from(I(), e);
}
function Nl(e, t) {
  return this.isValid() && (re(e) && e.isValid() || I(e).isValid()) ? ae({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Cl(e) {
  return this.to(I(), e);
}
function cr(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ve(e), t != null && (this._locale = t), this);
}
var fr = K(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function dr() {
  return this._locale;
}
var Dt = 1e3, Ue = 60 * Dt, Ot = 60 * Ue, hr = (365 * 400 + 97) * 24 * Ot;
function He(e, t) {
  return (e % t + t) % t;
}
function mr(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - hr : new Date(e, t, s).valueOf();
}
function pr(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - hr : Date.UTC(e, t, s);
}
function El(e) {
  var t, s;
  if (e = X(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? pr : mr, e) {
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
      t = this._d.valueOf(), t -= He(
        t + (this._isUTC ? 0 : this.utcOffset() * Ue),
        Ot
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= He(t, Ue);
      break;
    case "second":
      t = this._d.valueOf(), t -= He(t, Dt);
      break;
  }
  return this._d.setTime(t), y.updateOffset(this, !0), this;
}
function Wl(e) {
  var t, s;
  if (e = X(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? pr : mr, e) {
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
      t = this._d.valueOf(), t += Ot - He(
        t + (this._isUTC ? 0 : this.utcOffset() * Ue),
        Ot
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ue - He(t, Ue) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Dt - He(t, Dt) - 1;
      break;
  }
  return this._d.setTime(t), y.updateOffset(this, !0), this;
}
function Il() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Al() {
  return Math.floor(this.valueOf() / 1e3);
}
function Fl() {
  return new Date(this.valueOf());
}
function Ll() {
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
function Ul() {
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
function Hl() {
  return this.isValid() ? this.toISOString() : null;
}
function Vl() {
  return _s(this);
}
function $l() {
  return De({}, S(this));
}
function Gl() {
  return S(this).overflow;
}
function jl() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
w("N", 0, 0, "eraAbbr");
w("NN", 0, 0, "eraAbbr");
w("NNN", 0, 0, "eraAbbr");
w("NNNN", 0, 0, "eraName");
w("NNNNN", 0, 0, "eraNarrow");
w("y", ["y", 1], "yo", "eraYear");
w("y", ["yy", 2], 0, "eraYear");
w("y", ["yyy", 3], 0, "eraYear");
w("y", ["yyyy", 4], 0, "eraYear");
_("N", Is);
_("NN", Is);
_("NNN", Is);
_("NNNN", su);
_("NNNNN", nu);
C(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, n) {
    var r = s._locale.erasParse(e, n, s._strict);
    r ? S(s).era = r : S(s).invalidEra = e;
  }
);
_("y", Ge);
_("yy", Ge);
_("yyy", Ge);
_("yyyy", Ge);
_("yo", ru);
C(["y", "yy", "yyy", "yyyy"], z);
C(["yo"], function(e, t, s, n) {
  var r;
  s._locale._eraYearOrdinalRegex && (r = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[z] = s._locale.eraYearOrdinalParse(e, r) : t[z] = parseInt(e, 10);
});
function zl(e, t) {
  var s, n, r, a = this._eras || ve("en")._eras;
  for (s = 0, n = a.length; s < n; ++s) {
    switch (typeof a[s].since) {
      case "string":
        r = y(a[s].since).startOf("day"), a[s].since = r.valueOf();
        break;
    }
    switch (typeof a[s].until) {
      case "undefined":
        a[s].until = 1 / 0;
        break;
      case "string":
        r = y(a[s].until).startOf("day").valueOf(), a[s].until = r.valueOf();
        break;
    }
  }
  return a;
}
function Bl(e, t, s) {
  var n, r, a = this.eras(), i, l, o;
  for (e = e.toUpperCase(), n = 0, r = a.length; n < r; ++n)
    if (i = a[n].name.toUpperCase(), l = a[n].abbr.toUpperCase(), o = a[n].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (l === e)
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
    else if ([i, l, o].indexOf(e) >= 0)
      return a[n];
}
function ql(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? y(e.since).year() : y(e.since).year() + (t - e.offset) * s;
}
function Zl() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].name;
  return "";
}
function Ql() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].narrow;
  return "";
}
function Jl() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].abbr;
  return "";
}
function Kl() {
  var e, t, s, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = r[e].since <= r[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return (this.year() - y(r[e].since).year()) * s + r[e].offset;
  return this.year();
}
function Xl(e) {
  return b(this, "_erasNameRegex") || As.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function eu(e) {
  return b(this, "_erasAbbrRegex") || As.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function tu(e) {
  return b(this, "_erasNarrowRegex") || As.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Is(e, t) {
  return t.erasAbbrRegex(e);
}
function su(e, t) {
  return t.erasNameRegex(e);
}
function nu(e, t) {
  return t.erasNarrowRegex(e);
}
function ru(e, t) {
  return t._eraYearOrdinalRegex || Ge;
}
function As() {
  var e = [], t = [], s = [], n = [], r, a, i, l, o, u = this.eras();
  for (r = 0, a = u.length; r < a; ++r)
    i = ye(u[r].name), l = ye(u[r].abbr), o = ye(u[r].narrow), t.push(i), e.push(l), s.push(o), n.push(i), n.push(l), n.push(o);
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
w(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
w(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function At(e, t) {
  w(0, [e, e.length], 0, t);
}
At("gggg", "weekYear");
At("ggggg", "weekYear");
At("GGGG", "isoWeekYear");
At("GGGGG", "isoWeekYear");
_("G", Nt);
_("g", Nt);
_("GG", A, Z);
_("gg", A, Z);
_("GGGG", Ds, Ms);
_("gggg", Ds, Ms);
_("GGGGG", xt, Pt);
_("ggggg", xt, Pt);
mt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, n) {
    t[n.substr(0, 2)] = D(e);
  }
);
mt(["gg", "GG"], function(e, t, s, n) {
  t[n] = y.parseTwoDigitYear(e);
});
function au(e) {
  return yr.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function iu(e) {
  return yr.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function ou() {
  return ge(this.year(), 1, 4);
}
function lu() {
  return ge(this.isoWeekYear(), 1, 4);
}
function uu() {
  var e = this.localeData()._week;
  return ge(this.year(), e.dow, e.doy);
}
function cu() {
  var e = this.localeData()._week;
  return ge(this.weekYear(), e.dow, e.doy);
}
function yr(e, t, s, n, r) {
  var a;
  return e == null ? lt(this, n, r).year : (a = ge(e, n, r), t > a && (t = a), fu.call(this, e, t, s, n, r));
}
function fu(e, t, s, n, r) {
  var a = Zn(e, t, s, n, r), i = ot(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
w("Q", 0, "Qo", "quarter");
_("Q", Fn);
C("Q", function(e, t) {
  t[me] = (D(e) - 1) * 3;
});
function du(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
w("D", ["DD", 2], "Do", "date");
_("D", A, je);
_("DD", A, Z);
_("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
C(["D", "DD"], oe);
C("Do", function(e, t) {
  t[oe] = D(e.match(A)[0]);
});
var gr = ze("Date", !0);
w("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
_("DDD", Tt);
_("DDDD", Ln);
C(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = D(e);
});
function hu(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
w("m", ["mm", 2], 0, "minute");
_("m", A, Os);
_("mm", A, Z);
C(["m", "mm"], te);
var mu = ze("Minutes", !1);
w("s", ["ss", 2], 0, "second");
_("s", A, Os);
_("ss", A, Z);
C(["s", "ss"], pe);
var pu = ze("Seconds", !1);
w("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
w(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
w(0, ["SSS", 3], 0, "millisecond");
w(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
w(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
w(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
w(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
w(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
w(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
_("S", Tt, Fn);
_("SS", Tt, Z);
_("SSS", Tt, Ln);
var Oe, _r;
for (Oe = "SSSS"; Oe.length <= 9; Oe += "S")
  _(Oe, Ge);
function yu(e, t) {
  t[Te] = D(("0." + e) * 1e3);
}
for (Oe = "S"; Oe.length <= 9; Oe += "S")
  C(Oe, yu);
_r = ze("Milliseconds", !1);
w("z", 0, 0, "zoneAbbr");
w("zz", 0, 0, "zoneName");
function gu() {
  return this._isUTC ? "UTC" : "";
}
function _u() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var p = dt.prototype;
p.add = cl;
p.calendar = gl;
p.clone = _l;
p.diff = Ol;
p.endOf = Wl;
p.format = Pl;
p.from = Tl;
p.fromNow = xl;
p.to = Nl;
p.toNow = Cl;
p.get = Ri;
p.invalidAt = Gl;
p.isAfter = vl;
p.isBefore = wl;
p.isBetween = kl;
p.isSame = Sl;
p.isSameOrAfter = Ml;
p.isSameOrBefore = Dl;
p.isValid = Vl;
p.lang = fr;
p.locale = cr;
p.localeData = dr;
p.max = Vo;
p.min = Ho;
p.parsingFlags = $l;
p.set = bi;
p.startOf = El;
p.subtract = fl;
p.toArray = Ll;
p.toObject = Ul;
p.toDate = Fl;
p.toISOString = Rl;
p.inspect = bl;
typeof Symbol < "u" && Symbol.for != null && (p[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
p.toJSON = Hl;
p.toString = Yl;
p.unix = Al;
p.valueOf = Il;
p.creationData = jl;
p.eraName = Zl;
p.eraNarrow = Ql;
p.eraAbbr = Jl;
p.eraYear = Kl;
p.year = Vn;
p.isLeapYear = Yi;
p.weekYear = au;
p.isoWeekYear = iu;
p.quarter = p.quarters = du;
p.month = Bn;
p.daysInMonth = Ai;
p.week = p.weeks = ji;
p.isoWeek = p.isoWeeks = zi;
p.weeksInYear = uu;
p.weeksInWeekYear = cu;
p.isoWeeksInYear = ou;
p.isoWeeksInISOWeekYear = lu;
p.date = gr;
p.day = p.days = ao;
p.weekday = io;
p.isoWeekday = oo;
p.dayOfYear = hu;
p.hour = p.hours = po;
p.minute = p.minutes = mu;
p.second = p.seconds = pu;
p.millisecond = p.milliseconds = _r;
p.utcOffset = Jo;
p.utc = Xo;
p.local = el;
p.parseZone = tl;
p.hasAlignedHourOffset = sl;
p.isDST = nl;
p.isLocal = al;
p.isUtcOffset = il;
p.isUtc = ir;
p.isUTC = ir;
p.zoneAbbr = gu;
p.zoneName = _u;
p.dates = K(
  "dates accessor is deprecated. Use date instead.",
  gr
);
p.months = K(
  "months accessor is deprecated. Use month instead",
  Bn
);
p.years = K(
  "years accessor is deprecated. Use year instead",
  Vn
);
p.zone = K(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Ko
);
p.isDSTShifted = K(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  rl
);
function vu(e) {
  return I(e * 1e3);
}
function wu() {
  return I.apply(null, arguments).parseZone();
}
function vr(e) {
  return e;
}
var P = ws.prototype;
P.calendar = ri;
P.longDateFormat = li;
P.invalidDate = ci;
P.ordinal = hi;
P.preparse = vr;
P.postformat = vr;
P.relativeTime = pi;
P.pastFuture = yi;
P.set = si;
P.eras = zl;
P.erasParse = Bl;
P.erasConvertYear = ql;
P.erasAbbrRegex = eu;
P.erasNameRegex = Xl;
P.erasNarrowRegex = tu;
P.months = Ci;
P.monthsShort = Ei;
P.monthsParse = Ii;
P.monthsRegex = Li;
P.monthsShortRegex = Fi;
P.week = Hi;
P.firstDayOfYear = Gi;
P.firstDayOfWeek = $i;
P.weekdays = eo;
P.weekdaysMin = so;
P.weekdaysShort = to;
P.weekdaysParse = ro;
P.weekdaysRegex = lo;
P.weekdaysShortRegex = uo;
P.weekdaysMinRegex = co;
P.isPM = ho;
P.meridiem = yo;
function Yt(e, t, s, n) {
  var r = ve(), a = ue().set(n, t);
  return r[s](a, e);
}
function wr(e, t, s) {
  if (_e(e) && (t = e, e = void 0), e = e || "", t != null)
    return Yt(e, t, s, "month");
  var n, r = [];
  for (n = 0; n < 12; n++)
    r[n] = Yt(e, n, s, "month");
  return r;
}
function Fs(e, t, s, n) {
  typeof e == "boolean" ? (_e(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, _e(t) && (s = t, t = void 0), t = t || "");
  var r = ve(), a = e ? r._week.dow : 0, i, l = [];
  if (s != null)
    return Yt(t, (s + a) % 7, n, "day");
  for (i = 0; i < 7; i++)
    l[i] = Yt(t, (i + a) % 7, n, "day");
  return l;
}
function ku(e, t) {
  return wr(e, t, "months");
}
function Su(e, t) {
  return wr(e, t, "monthsShort");
}
function Mu(e, t, s) {
  return Fs(e, t, s, "weekdays");
}
function Du(e, t, s) {
  return Fs(e, t, s, "weekdaysShort");
}
function Ou(e, t, s) {
  return Fs(e, t, s, "weekdaysMin");
}
Ye("en", {
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
y.lang = K(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ye
);
y.langData = K(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ve
);
var de = Math.abs;
function Yu() {
  var e = this._data;
  return this._milliseconds = de(this._milliseconds), this._days = de(this._days), this._months = de(this._months), e.milliseconds = de(e.milliseconds), e.seconds = de(e.seconds), e.minutes = de(e.minutes), e.hours = de(e.hours), e.months = de(e.months), e.years = de(e.years), this;
}
function kr(e, t, s, n) {
  var r = ae(t, s);
  return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble();
}
function Ru(e, t) {
  return kr(this, e, t, 1);
}
function bu(e, t) {
  return kr(this, e, t, -1);
}
function _n(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Pu() {
  var e = this._milliseconds, t = this._days, s = this._months, n = this._data, r, a, i, l, o;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += _n(fs(s) + t) * 864e5, t = 0, s = 0), n.milliseconds = e % 1e3, r = J(e / 1e3), n.seconds = r % 60, a = J(r / 60), n.minutes = a % 60, i = J(a / 60), n.hours = i % 24, t += J(i / 24), o = J(Sr(t)), s += o, t -= _n(fs(o)), l = J(s / 12), s %= 12, n.days = t, n.months = s, n.years = l, this;
}
function Sr(e) {
  return e * 4800 / 146097;
}
function fs(e) {
  return e * 146097 / 4800;
}
function Tu(e) {
  if (!this.isValid())
    return NaN;
  var t, s, n = this._milliseconds;
  if (e = X(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, s = this._months + Sr(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(fs(this._months)), e) {
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
function we(e) {
  return function() {
    return this.as(e);
  };
}
var Mr = we("ms"), xu = we("s"), Nu = we("m"), Cu = we("h"), Eu = we("d"), Wu = we("w"), Iu = we("M"), Au = we("Q"), Fu = we("y"), Lu = Mr;
function Uu() {
  return ae(this);
}
function Hu(e) {
  return e = X(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ne(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Vu = Ne("milliseconds"), $u = Ne("seconds"), Gu = Ne("minutes"), ju = Ne("hours"), zu = Ne("days"), Bu = Ne("months"), qu = Ne("years");
function Zu() {
  return J(this.days() / 7);
}
var he = Math.round, Fe = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Qu(e, t, s, n, r) {
  return r.relativeTime(t || 1, !!s, e, n);
}
function Ju(e, t, s, n) {
  var r = ae(e).abs(), a = he(r.as("s")), i = he(r.as("m")), l = he(r.as("h")), o = he(r.as("d")), u = he(r.as("M")), h = he(r.as("w")), c = he(r.as("y")), d = a <= s.ss && ["s", a] || a < s.s && ["ss", a] || i <= 1 && ["m"] || i < s.m && ["mm", i] || l <= 1 && ["h"] || l < s.h && ["hh", l] || o <= 1 && ["d"] || o < s.d && ["dd", o];
  return s.w != null && (d = d || h <= 1 && ["w"] || h < s.w && ["ww", h]), d = d || u <= 1 && ["M"] || u < s.M && ["MM", u] || c <= 1 && ["y"] || ["yy", c], d[2] = t, d[3] = +e > 0, d[4] = n, Qu.apply(null, d);
}
function Ku(e) {
  return e === void 0 ? he : typeof e == "function" ? (he = e, !0) : !1;
}
function Xu(e, t) {
  return Fe[e] === void 0 ? !1 : t === void 0 ? Fe[e] : (Fe[e] = t, e === "s" && (Fe.ss = t - 1), !0);
}
function ec(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, n = Fe, r, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (n = Object.assign({}, Fe, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), r = this.localeData(), a = Ju(this, !s, n, r), s && (a = r.pastFuture(+this, a)), r.postformat(a);
}
var Xt = Math.abs;
function Ee(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ft() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Xt(this._milliseconds) / 1e3, t = Xt(this._days), s = Xt(this._months), n, r, a, i, l = this.asSeconds(), o, u, h, c;
  return l ? (n = J(e / 60), r = J(n / 60), e %= 60, n %= 60, a = J(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = l < 0 ? "-" : "", u = Ee(this._months) !== Ee(l) ? "-" : "", h = Ee(this._days) !== Ee(l) ? "-" : "", c = Ee(this._milliseconds) !== Ee(l) ? "-" : "", o + "P" + (a ? u + a + "Y" : "") + (s ? u + s + "M" : "") + (t ? h + t + "D" : "") + (r || n || e ? "T" : "") + (r ? c + r + "H" : "") + (n ? c + n + "M" : "") + (e ? c + i + "S" : "")) : "P0D";
}
var Y = It.prototype;
Y.isValid = Bo;
Y.abs = Yu;
Y.add = Ru;
Y.subtract = bu;
Y.as = Tu;
Y.asMilliseconds = Mr;
Y.asSeconds = xu;
Y.asMinutes = Nu;
Y.asHours = Cu;
Y.asDays = Eu;
Y.asWeeks = Wu;
Y.asMonths = Iu;
Y.asQuarters = Au;
Y.asYears = Fu;
Y.valueOf = Lu;
Y._bubble = Pu;
Y.clone = Uu;
Y.get = Hu;
Y.milliseconds = Vu;
Y.seconds = $u;
Y.minutes = Gu;
Y.hours = ju;
Y.days = zu;
Y.weeks = Zu;
Y.months = Bu;
Y.years = qu;
Y.humanize = ec;
Y.toISOString = Ft;
Y.toString = Ft;
Y.toJSON = Ft;
Y.locale = cr;
Y.localeData = dr;
Y.toIsoString = K(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ft
);
Y.lang = fr;
w("X", 0, 0, "unix");
w("x", 0, 0, "valueOf");
_("x", Nt);
_("X", wi);
C("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
C("x", function(e, t, s) {
  s._d = new Date(D(e));
});
//! moment.js
y.version = "2.30.1";
ei(I);
y.fn = p;
y.min = $o;
y.max = Go;
y.now = jo;
y.utc = ue;
y.unix = vu;
y.months = ku;
y.isDate = ft;
y.locale = Ye;
y.invalid = bt;
y.duration = ae;
y.isMoment = re;
y.weekdays = Mu;
y.parseZone = wu;
y.localeData = ve;
y.isDuration = wt;
y.monthsShort = Su;
y.weekdaysMin = Ou;
y.defineLocale = Ts;
y.updateLocale = wo;
y.locales = ko;
y.weekdaysShort = Du;
y.normalizeUnits = X;
y.relativeTimeRounding = Ku;
y.relativeTimeThreshold = Xu;
y.calendarFormat = yl;
y.prototype = p;
y.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const tc = ct({
  name: "SearchResults",
  data: function() {
    return {
      pageOfItems: Array,
      currentPage: Number,
      offset: Number,
      itemsPerPage: 5,
      pagesPagination: Array,
      isPreviousDisabled: !0,
      isNextDisabled: !1
    };
  },
  mounted() {
    try {
      console.log(JSON.parse(localStorage.getItem("searchResult"))), console.log(this.responseArray), this.pageOfItems = this.responseArray.slice(0, 5), this.currentPage = 1, this.mountPages();
    } catch (e) {
      console.log("Route Param responseArray", e);
    }
  },
  methods: {
    async onPageChange(e) {
      this.currentPage = e * 1, this.offset = (e - 1) * this.itemsPerPage + 1 - 1, this.pageOfItems = await this.responseArray.slice(
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
        let n = new Xa();
        n.pageNumber = s, n.isActive = this.currentPage == s, this.pagesPagination.push(n);
      }
      this.isPreviousDisabled = this.currentPage == 1, this.isNextDisabled = this.currentPage == this.pageQuantity;
    },
    redirect(e) {
      window.location.href = e;
    },
    formatDate(e) {
      return y(e).format("YYYY-MM-DD hh:mm:ss");
    }
  },
  computed: {
    responseArray() {
      return JSON.parse(localStorage.getItem("searchResult"));
    },
    searchOfItems() {
      return this.$route.params.SearchOfItems;
    },
    rows() {
      return this.responseArray.length;
    },
    pageQuantity() {
      return Math.ceil(this.responseArray.length / this.itemsPerPage);
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
}), sc = { class: "text-start" }, nc = { class: "d-flex text-body-secondary pt-3" }, rc = { class: "pb-3 mb-0 small lh-sm" }, ac = { class: "h6" }, ic = { class: "badge rounded-pill text-bg-secondary" }, oc = ["href"], lc = {
  class: "pt-5",
  "aria-label": "Search Page navigation"
}, uc = { class: "pagination justify-content-center" }, cc = { class: "page-item" }, fc = ["onClick"], dc = { class: "page-item" };
function hc(e, t, s, n, r, a) {
  return Pe(), We("div", null, [
    (Pe(!0), We(zs, null, Bs(e.pageOfItems, (i, l) => (Pe(), We("div", sc, [
      H("div", nc, [
        t[2] || (t[2] = H("span", { class: "me-1" }, [
          H("img", {
            src: " https://www.dinowilliam.com/lib/assets/logo.png",
            height: "16",
            width: "72",
            loading: "lazy"
          })
        ], -1)),
        H("p", rc, [
          H("p", ac, [
            qs(Ze(i.url) + " ", 1),
            H("span", ic, Ze(e.formatDate(i.date)), 1)
          ]),
          H("p", null, [
            H("a", {
              class: "h4",
              href: i.url
            }, Ze(i.title), 9, oc)
          ]),
          qs(" " + Ze(i.description), 1)
        ])
      ])
    ]))), 256)),
    H("nav", lc, [
      H("ul", uc, [
        H("li", cc, [
          H("a", {
            class: zt(["page-link", { disabled: e.isPreviousDisabled }]),
            onClick: t[0] || (t[0] = (i) => e.onPageChange(e.previousPage))
          }, "Previous", 2)
        ]),
        (Pe(!0), We(zs, null, Bs(e.pagesPagination, (i) => (Pe(), We("li", {
          class: zt(["page-item", { active: i.isActive }])
        }, [
          H("a", {
            class: "page-link",
            onClick: (l) => e.onPageChange(i.pageNumber)
          }, Ze(i.pageNumber), 9, fc)
        ], 2))), 256)),
        H("li", dc, [
          H("a", {
            class: zt(["page-link", { disabled: e.isNextDisabled }]),
            onClick: t[1] || (t[1] = (i) => e.onPageChange(e.nextPage))
          }, "Next", 2)
        ])
      ])
    ])
  ]);
}
const mc = /* @__PURE__ */ ys(tc, [["render", hc]]), pc = [
  {
    path: "/Search",
    name: "SearchForm",
    component: Ka
  },
  {
    path: "/SearchResults",
    name: "SearchResults",
    component: mc
  }
], yc = za({
  //history: createWebHistory(import.meta.env.BASE_URL), 
  history: Sa(),
  routes: pc
}), gc = ct({
  name: "App"
});
function _c(e, t, s, n, r, a) {
  const i = Ir("RouterView");
  return Pe(), Ar(i);
}
const vc = /* @__PURE__ */ ys(gc, [["render", _c]]), Ls = Fr(vc);
Ls.mixin(jr);
Ls.use(yc);
Ls.mount("#mainAppSearch");
//# sourceMappingURL=vueappsearch.js.mjs.map
