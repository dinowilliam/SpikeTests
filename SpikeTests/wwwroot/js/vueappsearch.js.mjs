var Or = Object.defineProperty;
var Yr = (e, t, s) => t in e ? Or(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var Gt = (e, t, s) => (Yr(e, typeof t != "symbol" ? t + "" : t, s), s);
import { shallowRef as Rr, unref as Xe, shallowReactive as br, nextTick as Pr, defineComponent as ut, reactive as Tr, inject as nt, computed as ae, h as vn, provide as jt, ref as xr, watch as Nr, openBlock as be, createElementBlock as Ee, createElementVNode as U, withModifiers as Cr, withDirectives as Er, vModelText as Wr, Fragment as Bs, renderList as qs, createTextVNode as Zs, toDisplayString as Ze, normalizeClass as zt, resolveComponent as Ar, createBlock as Ir, createApp as Fr } from "vue";
function Lr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var es = { exports: {} }, ds = {}, hs = {};
Object.defineProperty(hs, "__esModule", {
  value: !0
});
hs.default = {
  type: "cookie",
  keysCache: null,
  getItem: function(t) {
    return t && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function(t, s, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "/", a = arguments[4], i = arguments[5];
    if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t))
      return !1;
    var c = "";
    if (n)
      switch (n.constructor) {
        case Number:
          c = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
          break;
        case String:
          c = "; expires=" + n;
          break;
        case Date:
          c = "; expires=" + n.toUTCString();
          break;
      }
    return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(s) + c + (a ? "; domain=" + a : "") + (r ? "; path=" + r : "") + (i ? "; secure" : ""), this.keysCache = null, !0;
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
  }, n = function() {
    function u(o, f) {
      for (var h = 0; h < f.length; h++) {
        var y = f[h];
        y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(o, y.key, y);
      }
    }
    return function(o, f, h) {
      return f && u(o.prototype, f), h && u(o, h), o;
    };
  }(), r = ds, a = i(r);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function c(u, o) {
    if (!(u instanceof o))
      throw new TypeError("Cannot call a class as a function");
  }
  var l = function() {
    function u() {
      c(this, u), this.storage = a.default, this.clear();
    }
    return n(u, [{
      key: "install",
      value: function(f) {
        f.localStorage = f.prototype.$localStorage = this;
      }
    }, {
      key: "set",
      value: function(f, h) {
        var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, M = "vuels__" + f, F = JSON.stringify({ value: h, expire: y > 0 ? new Date().getTime() + y : y });
        typeof this.storage.type < "u" && this.storage.type === "cookie" ? this.storage.setItem(M, F, y) : this.storage.setItem(M, F);
      }
    }, {
      key: "get",
      value: function(f) {
        var h = this.storage.getItem("vuels__" + f);
        return h !== null ? JSON.parse(h).value : null;
      }
    }, {
      key: "remove",
      value: function(f) {
        return this.storage.removeItem("vuels__" + f);
      }
    }, {
      key: "key",
      value: function(f) {
        return this.storage.key(f);
      }
    }, {
      key: "clear",
      value: function() {
        if (this.length !== 0)
          for (var f = 0; f < this.length; f++) {
            var h = this.storage.key(f);
            if (/vuels__/i.test(h) !== !1) {
              var y = JSON.parse(this.storage.getItem(h));
              y.expire > 0 && y.expire < new Date().getTime() && this.storage.removeItem(h);
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
  s(t) === "object" ? e.exports = new l() : window && window.Vue && window.Vue.use(new l());
})(es, es.exports);
const Gr = /* @__PURE__ */ Lr(es.exports);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const We = typeof window < "u";
function jr(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const N = Object.assign;
function Bt(e, t) {
  const s = {};
  for (const n in t) {
    const r = t[n];
    s[n] = te(r) ? r.map(e) : e(r);
  }
  return s;
}
const et = () => {
}, te = Array.isArray, zr = /\/$/, Br = (e) => e.replace(zr, "");
function qt(e, t, s = "/") {
  let n, r = {}, a = "", i = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return c < l && c >= 0 && (l = -1), l > -1 && (n = t.slice(0, l), a = t.slice(l + 1, c > -1 ? c : t.length), r = e(a)), c > -1 && (n = n || t.slice(0, c), i = t.slice(c, t.length)), n = Jr(n != null ? n : t, s), {
    fullPath: n + (a && "?") + a + i,
    path: n,
    query: r,
    hash: i
  };
}
function qr(e, t) {
  const s = t.query ? e(t.query) : "";
  return t.path + (s && "?") + s + (t.hash || "");
}
function Qs(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Zr(e, t, s) {
  const n = t.matched.length - 1, r = s.matched.length - 1;
  return n > -1 && n === r && He(t.matched[n], s.matched[r]) && wn(t.params, s.params) && e(t.query) === e(s.query) && t.hash === s.hash;
}
function He(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function wn(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const s in e)
    if (!Qr(e[s], t[s]))
      return !1;
  return !0;
}
function Qr(e, t) {
  return te(e) ? Js(e, t) : te(t) ? Js(t, e) : e === t;
}
function Js(e, t) {
  return te(t) ? e.length === t.length && e.every((s, n) => s === t[n]) : e.length === 1 && e[0] === t;
}
function Jr(e, t) {
  if (e.startsWith("/"))
    return e;
  if (!e)
    return t;
  const s = t.split("/"), n = e.split("/"), r = n[n.length - 1];
  (r === ".." || r === ".") && n.push("");
  let a = s.length - 1, i, c;
  for (i = 0; i < n.length; i++)
    if (c = n[i], c !== ".")
      if (c === "..")
        a > 1 && a--;
      else
        break;
  return s.slice(0, a).join("/") + "/" + n.slice(i - (i === n.length ? 1 : 0)).join("/");
}
var rt;
(function(e) {
  e.pop = "pop", e.push = "push";
})(rt || (rt = {}));
var tt;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(tt || (tt = {}));
function Kr(e) {
  if (!e)
    if (We) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Br(e);
}
const Xr = /^[^#]+#/;
function ea(e, t) {
  return e.replace(Xr, "#") + t;
}
function ta(e, t) {
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
function sa(e) {
  let t;
  if ("el" in e) {
    const s = e.el, n = typeof s == "string" && s.startsWith("#"), r = typeof s == "string" ? n ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
    if (!r)
      return;
    t = ta(r, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function Ks(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ss = /* @__PURE__ */ new Map();
function na(e, t) {
  ss.set(e, t);
}
function ra(e) {
  const t = ss.get(e);
  return ss.delete(e), t;
}
let aa = () => location.protocol + "//" + location.host;
function kn(e, t) {
  const { pathname: s, search: n, hash: r } = t, a = e.indexOf("#");
  if (a > -1) {
    let c = r.includes(e.slice(a)) ? e.slice(a).length : 1, l = r.slice(c);
    return l[0] !== "/" && (l = "/" + l), Qs(l, "");
  }
  return Qs(s, e) + n + r;
}
function ia(e, t, s, n) {
  let r = [], a = [], i = null;
  const c = ({ state: h }) => {
    const y = kn(e, location), M = s.value, F = t.value;
    let L = 0;
    if (h) {
      if (s.value = y, t.value = h, i && i === M) {
        i = null;
        return;
      }
      L = F ? h.position - F.position : 0;
    } else
      n(y);
    r.forEach((Y) => {
      Y(s.value, M, {
        delta: L,
        type: rt.pop,
        direction: L ? L > 0 ? tt.forward : tt.back : tt.unknown
      });
    });
  };
  function l() {
    i = s.value;
  }
  function u(h) {
    r.push(h);
    const y = () => {
      const M = r.indexOf(h);
      M > -1 && r.splice(M, 1);
    };
    return a.push(y), y;
  }
  function o() {
    const { history: h } = window;
    !h.state || h.replaceState(N({}, h.state, { scroll: Rt() }), "");
  }
  function f() {
    for (const h of a)
      h();
    a = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", o);
  }
  return window.addEventListener("popstate", c), window.addEventListener("beforeunload", o, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: u,
    destroy: f
  };
}
function Xs(e, t, s, n = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: s,
    replaced: n,
    position: window.history.length,
    scroll: r ? Rt() : null
  };
}
function oa(e) {
  const { history: t, location: s } = window, n = {
    value: kn(e, s)
  }, r = { value: t.state };
  r.value || a(n.value, {
    back: null,
    current: n.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function a(l, u, o) {
    const f = e.indexOf("#"), h = f > -1 ? (s.host && document.querySelector("base") ? e : e.slice(f)) + l : aa() + e + l;
    try {
      t[o ? "replaceState" : "pushState"](u, "", h), r.value = u;
    } catch (y) {
      console.error(y), s[o ? "replace" : "assign"](h);
    }
  }
  function i(l, u) {
    const o = N({}, t.state, Xs(
      r.value.back,
      l,
      r.value.forward,
      !0
    ), u, { position: r.value.position });
    a(l, o, !0), n.value = l;
  }
  function c(l, u) {
    const o = N(
      {},
      r.value,
      t.state,
      {
        forward: l,
        scroll: Rt()
      }
    );
    a(o.current, o, !0);
    const f = N({}, Xs(n.value, l, null), { position: o.position + 1 }, u);
    a(l, f, !1), n.value = l;
  }
  return {
    location: n,
    state: r,
    push: c,
    replace: i
  };
}
function la(e) {
  e = Kr(e);
  const t = oa(e), s = ia(e, t.state, t.location, t.replace);
  function n(a, i = !0) {
    i || s.pauseListeners(), history.go(a);
  }
  const r = N({
    location: "",
    base: e,
    go: n,
    createHref: ea.bind(null, e)
  }, t, s);
  return Object.defineProperty(r, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(r, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), r;
}
function ua(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Sn(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ke = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, Mn = Symbol("");
var en;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(en || (en = {}));
function Ve(e, t) {
  return N(new Error(), {
    type: e,
    [Mn]: !0
  }, t);
}
function fe(e, t) {
  return e instanceof Error && Mn in e && (t == null || !!(e.type & t));
}
const tn = "[^/]+?", ca = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, fa = /[.+*?^${}()[\]/\\]/g;
function da(e, t) {
  const s = N({}, ca, t), n = [];
  let r = s.start ? "^" : "";
  const a = [];
  for (const u of e) {
    const o = u.length ? [] : [90];
    s.strict && !u.length && (r += "/");
    for (let f = 0; f < u.length; f++) {
      const h = u[f];
      let y = 40 + (s.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (r += "/"), r += h.value.replace(fa, "\\$&"), y += 40;
      else if (h.type === 1) {
        const { value: M, repeatable: F, optional: L, regexp: Y } = h;
        a.push({
          name: M,
          repeatable: F,
          optional: L
        });
        const P = Y || tn;
        if (P !== tn) {
          y += 10;
          try {
            new RegExp(`(${P})`);
          } catch (X) {
            throw new Error(`Invalid custom RegExp for param "${M}" (${P}): ` + X.message);
          }
        }
        let z = F ? `((?:${P})(?:/(?:${P}))*)` : `(${P})`;
        f || (z = L && u.length < 2 ? `(?:/${z})` : "/" + z), L && (z += "?"), r += z, y += 20, L && (y += -8), F && (y += -20), P === ".*" && (y += -50);
      }
      o.push(y);
    }
    n.push(o);
  }
  if (s.strict && s.end) {
    const u = n.length - 1;
    n[u][n[u].length - 1] += 0.7000000000000001;
  }
  s.strict || (r += "/?"), s.end ? r += "$" : s.strict && (r += "(?:/|$)");
  const i = new RegExp(r, s.sensitive ? "" : "i");
  function c(u) {
    const o = u.match(i), f = {};
    if (!o)
      return null;
    for (let h = 1; h < o.length; h++) {
      const y = o[h] || "", M = a[h - 1];
      f[M.name] = y && M.repeatable ? y.split("/") : y;
    }
    return f;
  }
  function l(u) {
    let o = "", f = !1;
    for (const h of e) {
      (!f || !o.endsWith("/")) && (o += "/"), f = !1;
      for (const y of h)
        if (y.type === 0)
          o += y.value;
        else if (y.type === 1) {
          const { value: M, repeatable: F, optional: L } = y, Y = M in u ? u[M] : "";
          if (te(Y) && !F)
            throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);
          const P = te(Y) ? Y.join("/") : Y;
          if (!P)
            if (L)
              h.length < 2 && (o.endsWith("/") ? o = o.slice(0, -1) : f = !0);
            else
              throw new Error(`Missing required param "${M}"`);
          o += P;
        }
    }
    return o || "/";
  }
  return {
    re: i,
    score: n,
    keys: a,
    parse: c,
    stringify: l
  };
}
function ha(e, t) {
  let s = 0;
  for (; s < e.length && s < t.length; ) {
    const n = t[s] - e[s];
    if (n)
      return n;
    s++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0;
}
function ma(e, t) {
  let s = 0;
  const n = e.score, r = t.score;
  for (; s < n.length && s < r.length; ) {
    const a = ha(n[s], r[s]);
    if (a)
      return a;
    s++;
  }
  if (Math.abs(r.length - n.length) === 1) {
    if (sn(n))
      return 1;
    if (sn(r))
      return -1;
  }
  return r.length - n.length;
}
function sn(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const pa = {
  type: 0,
  value: ""
}, ya = /[a-zA-Z0-9_]/;
function _a(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[pa]];
  if (!e.startsWith("/"))
    throw new Error(`Invalid path "${e}"`);
  function t(y) {
    throw new Error(`ERR (${s})/"${u}": ${y}`);
  }
  let s = 0, n = s;
  const r = [];
  let a;
  function i() {
    a && r.push(a), a = [];
  }
  let c = 0, l, u = "", o = "";
  function f() {
    !u || (s === 0 ? a.push({
      type: 0,
      value: u
    }) : s === 1 || s === 2 || s === 3 ? (a.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: u,
      regexp: o,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), u = "");
  }
  function h() {
    u += l;
  }
  for (; c < e.length; ) {
    if (l = e[c++], l === "\\" && s !== 2) {
      n = s, s = 4;
      continue;
    }
    switch (s) {
      case 0:
        l === "/" ? (u && f(), i()) : l === ":" ? (f(), s = 1) : h();
        break;
      case 4:
        h(), s = n;
        break;
      case 1:
        l === "(" ? s = 2 : ya.test(l) ? h() : (f(), s = 0, l !== "*" && l !== "?" && l !== "+" && c--);
        break;
      case 2:
        l === ")" ? o[o.length - 1] == "\\" ? o = o.slice(0, -1) + l : s = 3 : o += l;
        break;
      case 3:
        f(), s = 0, l !== "*" && l !== "?" && l !== "+" && c--, o = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return s === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), r;
}
function ga(e, t, s) {
  const n = da(_a(e.path), s), r = N(n, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function va(e, t) {
  const s = [], n = /* @__PURE__ */ new Map();
  t = an({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(o) {
    return n.get(o);
  }
  function a(o, f, h) {
    const y = !h, M = wa(o);
    M.aliasOf = h && h.record;
    const F = an(t, o), L = [
      M
    ];
    if ("alias" in o) {
      const z = typeof o.alias == "string" ? [o.alias] : o.alias;
      for (const X of z)
        L.push(N({}, M, {
          components: h ? h.record.components : M.components,
          path: X,
          aliasOf: h ? h.record : M
        }));
    }
    let Y, P;
    for (const z of L) {
      const { path: X } = z;
      if (f && X[0] !== "/") {
        const Ye = f.record.path, ce = Ye[Ye.length - 1] === "/" ? "" : "/";
        z.path = f.record.path + (X && ce + X);
      }
      if (Y = ga(z, f, F), h ? h.alias.push(Y) : (P = P || Y, P !== Y && P.alias.push(Y), y && o.name && !rn(Y) && i(o.name)), M.children) {
        const Ye = M.children;
        for (let ce = 0; ce < Ye.length; ce++)
          a(Ye[ce], Y, h && h.children[ce]);
      }
      h = h || Y, (Y.record.components && Object.keys(Y.record.components).length || Y.record.name || Y.record.redirect) && l(Y);
    }
    return P ? () => {
      i(P);
    } : et;
  }
  function i(o) {
    if (Sn(o)) {
      const f = n.get(o);
      f && (n.delete(o), s.splice(s.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
    } else {
      const f = s.indexOf(o);
      f > -1 && (s.splice(f, 1), o.record.name && n.delete(o.record.name), o.children.forEach(i), o.alias.forEach(i));
    }
  }
  function c() {
    return s;
  }
  function l(o) {
    let f = 0;
    for (; f < s.length && ma(o, s[f]) >= 0 && (o.record.path !== s[f].record.path || !Dn(o, s[f])); )
      f++;
    s.splice(f, 0, o), o.record.name && !rn(o) && n.set(o.record.name, o);
  }
  function u(o, f) {
    let h, y = {}, M, F;
    if ("name" in o && o.name) {
      if (h = n.get(o.name), !h)
        throw Ve(1, {
          location: o
        });
      F = h.record.name, y = N(
        nn(
          f.params,
          h.keys.filter((P) => !P.optional).map((P) => P.name)
        ),
        o.params && nn(o.params, h.keys.map((P) => P.name))
      ), M = h.stringify(y);
    } else if ("path" in o)
      M = o.path, h = s.find((P) => P.re.test(M)), h && (y = h.parse(M), F = h.record.name);
    else {
      if (h = f.name ? n.get(f.name) : s.find((P) => P.re.test(f.path)), !h)
        throw Ve(1, {
          location: o,
          currentLocation: f
        });
      F = h.record.name, y = N({}, f.params, o.params), M = h.stringify(y);
    }
    const L = [];
    let Y = h;
    for (; Y; )
      L.unshift(Y.record), Y = Y.parent;
    return {
      name: F,
      path: M,
      params: y,
      matched: L,
      meta: Sa(L)
    };
  }
  return e.forEach((o) => a(o)), { addRoute: a, resolve: u, removeRoute: i, getRoutes: c, getRecordMatcher: r };
}
function nn(e, t) {
  const s = {};
  for (const n of t)
    n in e && (s[n] = e[n]);
  return s;
}
function wa(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: ka(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function ka(e) {
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
function Sa(e) {
  return e.reduce((t, s) => N(t, s.meta), {});
}
function an(e, t) {
  const s = {};
  for (const n in e)
    s[n] = n in t ? t[n] : e[n];
  return s;
}
function Dn(e, t) {
  return t.children.some((s) => s === e || Dn(e, s));
}
const On = /#/g, Ma = /&/g, Da = /\//g, Oa = /=/g, Ya = /\?/g, Yn = /\+/g, Ra = /%5B/g, ba = /%5D/g, Rn = /%5E/g, Pa = /%60/g, bn = /%7B/g, Ta = /%7C/g, Pn = /%7D/g, xa = /%20/g;
function ms(e) {
  return encodeURI("" + e).replace(Ta, "|").replace(Ra, "[").replace(ba, "]");
}
function Na(e) {
  return ms(e).replace(bn, "{").replace(Pn, "}").replace(Rn, "^");
}
function ns(e) {
  return ms(e).replace(Yn, "%2B").replace(xa, "+").replace(On, "%23").replace(Ma, "%26").replace(Pa, "`").replace(bn, "{").replace(Pn, "}").replace(Rn, "^");
}
function Ca(e) {
  return ns(e).replace(Oa, "%3D");
}
function Ea(e) {
  return ms(e).replace(On, "%23").replace(Ya, "%3F");
}
function Wa(e) {
  return e == null ? "" : Ea(e).replace(Da, "%2F");
}
function kt(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
function Aa(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const a = n[r].replace(Yn, " "), i = a.indexOf("="), c = kt(i < 0 ? a : a.slice(0, i)), l = i < 0 ? null : kt(a.slice(i + 1));
    if (c in t) {
      let u = t[c];
      te(u) || (u = t[c] = [u]), u.push(l);
    } else
      t[c] = l;
  }
  return t;
}
function on(e) {
  let t = "";
  for (let s in e) {
    const n = e[s];
    if (s = Ca(s), n == null) {
      n !== void 0 && (t += (t.length ? "&" : "") + s);
      continue;
    }
    (te(n) ? n.map((a) => a && ns(a)) : [n && ns(n)]).forEach((a) => {
      a !== void 0 && (t += (t.length ? "&" : "") + s, a != null && (t += "=" + a));
    });
  }
  return t;
}
function Ia(e) {
  const t = {};
  for (const s in e) {
    const n = e[s];
    n !== void 0 && (t[s] = te(n) ? n.map((r) => r == null ? null : "" + r) : n == null ? n : "" + n);
  }
  return t;
}
const Fa = Symbol(""), ln = Symbol(""), ps = Symbol(""), Tn = Symbol(""), rs = Symbol("");
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
function Se(e, t, s, n, r) {
  const a = n && (n.enterCallbacks[r] = n.enterCallbacks[r] || []);
  return () => new Promise((i, c) => {
    const l = (f) => {
      f === !1 ? c(Ve(4, {
        from: s,
        to: t
      })) : f instanceof Error ? c(f) : ua(f) ? c(Ve(2, {
        from: t,
        to: f
      })) : (a && n.enterCallbacks[r] === a && typeof f == "function" && a.push(f), i());
    }, u = e.call(n && n.instances[r], t, s, l);
    let o = Promise.resolve(u);
    e.length < 3 && (o = o.then(l)), o.catch((f) => c(f));
  });
}
function Zt(e, t, s, n) {
  const r = [];
  for (const a of e)
    for (const i in a.components) {
      let c = a.components[i];
      if (!(t !== "beforeRouteEnter" && !a.instances[i]))
        if (La(c)) {
          const u = (c.__vccOpts || c)[t];
          u && r.push(Se(u, s, n, a, i));
        } else {
          let l = c();
          r.push(() => l.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
            const o = jr(u) ? u.default : u;
            a.components[i] = o;
            const h = (o.__vccOpts || o)[t];
            return h && Se(h, s, n, a, i)();
          }));
        }
    }
  return r;
}
function La(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function un(e) {
  const t = nt(ps), s = nt(Tn), n = ae(() => t.resolve(Xe(e.to))), r = ae(() => {
    const { matched: l } = n.value, { length: u } = l, o = l[u - 1], f = s.matched;
    if (!o || !f.length)
      return -1;
    const h = f.findIndex(He.bind(null, o));
    if (h > -1)
      return h;
    const y = cn(l[u - 2]);
    return u > 1 && cn(o) === y && f[f.length - 1].path !== y ? f.findIndex(He.bind(null, l[u - 2])) : h;
  }), a = ae(() => r.value > -1 && $a(s.params, n.value.params)), i = ae(() => r.value > -1 && r.value === s.matched.length - 1 && wn(s.params, n.value.params));
  function c(l = {}) {
    return Va(l) ? t[Xe(e.replace) ? "replace" : "push"](
      Xe(e.to)
    ).catch(et) : Promise.resolve();
  }
  return {
    route: n,
    href: ae(() => n.value.href),
    isActive: a,
    isExactActive: i,
    navigate: c
  };
}
const Ua = /* @__PURE__ */ ut({
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
  useLink: un,
  setup(e, { slots: t }) {
    const s = Tr(un(e)), { options: n } = nt(ps), r = ae(() => ({
      [fn(e.activeClass, n.linkActiveClass, "router-link-active")]: s.isActive,
      [fn(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
    }));
    return () => {
      const a = t.default && t.default(s);
      return e.custom ? a : vn("a", {
        "aria-current": s.isExactActive ? e.ariaCurrentValue : null,
        href: s.href,
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
    } else if (!te(r) || r.length !== n.length || n.some((a, i) => a !== r[i]))
      return !1;
  }
  return !0;
}
function cn(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const fn = (e, t, s) => e != null ? e : t != null ? t : s, Ga = /* @__PURE__ */ ut({
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
    const n = nt(rs), r = ae(() => e.route || n.value), a = nt(ln, 0), i = ae(() => {
      let u = Xe(a);
      const { matched: o } = r.value;
      let f;
      for (; (f = o[u]) && !f.components; )
        u++;
      return u;
    }), c = ae(() => r.value.matched[i.value]);
    jt(ln, ae(() => i.value + 1)), jt(Fa, c), jt(rs, r);
    const l = xr();
    return Nr(() => [l.value, c.value, e.name], ([u, o, f], [h, y, M]) => {
      o && (o.instances[f] = u, y && y !== o && u && u === h && (o.leaveGuards.size || (o.leaveGuards = y.leaveGuards), o.updateGuards.size || (o.updateGuards = y.updateGuards))), u && o && (!y || !He(o, y) || !h) && (o.enterCallbacks[f] || []).forEach((F) => F(u));
    }, { flush: "post" }), () => {
      const u = r.value, o = e.name, f = c.value, h = f && f.components[o];
      if (!h)
        return dn(s.default, { Component: h, route: u });
      const y = f.props[o], M = y ? y === !0 ? u.params : typeof y == "function" ? y(u) : y : null, L = vn(h, N({}, M, t, {
        onVnodeUnmounted: (Y) => {
          Y.component.isUnmounted && (f.instances[o] = null);
        },
        ref: l
      }));
      return dn(s.default, { Component: L, route: u }) || L;
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
  const t = va(e.routes, e), s = e.parseQuery || Aa, n = e.stringifyQuery || on, r = e.history, a = Qe(), i = Qe(), c = Qe(), l = Rr(ke);
  let u = ke;
  We && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const o = Bt.bind(null, (d) => "" + d), f = Bt.bind(null, Wa), h = Bt.bind(null, kt);
  function y(d, v) {
    let _, k;
    return Sn(d) ? (_ = t.getRecordMatcher(d), k = v) : k = d, t.addRoute(k, _);
  }
  function M(d) {
    const v = t.getRecordMatcher(d);
    v && t.removeRoute(v);
  }
  function F() {
    return t.getRoutes().map((d) => d.record);
  }
  function L(d) {
    return !!t.getRecordMatcher(d);
  }
  function Y(d, v) {
    if (v = N({}, v || l.value), typeof d == "string") {
      const D = qt(s, d, v.path), $ = t.resolve({ path: D.path }, v), qe = r.createHref(D.fullPath);
      return N(D, $, {
        params: h($.params),
        hash: kt(D.hash),
        redirectedFrom: void 0,
        href: qe
      });
    }
    let _;
    if ("path" in d)
      _ = N({}, d, {
        path: qt(s, d.path, v.path).path
      });
    else {
      const D = N({}, d.params);
      for (const $ in D)
        D[$] == null && delete D[$];
      _ = N({}, d, {
        params: f(D)
      }), v.params = f(v.params);
    }
    const k = t.resolve(_, v), E = d.hash || "";
    k.params = o(h(k.params));
    const V = qr(n, N({}, d, {
      hash: Na(E),
      path: k.path
    })), R = r.createHref(V);
    return N({
      fullPath: V,
      hash: E,
      query: n === on ? Ia(d.query) : d.query || {}
    }, k, {
      redirectedFrom: void 0,
      href: R
    });
  }
  function P(d) {
    return typeof d == "string" ? qt(s, d, l.value.path) : N({}, d);
  }
  function z(d, v) {
    if (u !== d)
      return Ve(8, {
        from: v,
        to: d
      });
  }
  function X(d) {
    return ze(d);
  }
  function Ye(d) {
    return X(N(P(d), { replace: !0 }));
  }
  function ce(d) {
    const v = d.matched[d.matched.length - 1];
    if (v && v.redirect) {
      const { redirect: _ } = v;
      let k = typeof _ == "function" ? _(d) : _;
      return typeof k == "string" && (k = k.includes("?") || k.includes("#") ? k = P(k) : { path: k }, k.params = {}), N({
        query: d.query,
        hash: d.hash,
        params: "path" in k ? {} : d.params
      }, k);
    }
  }
  function ze(d, v) {
    const _ = u = Y(d), k = l.value, E = d.state, V = d.force, R = d.replace === !0, D = ce(_);
    if (D)
      return ze(
        N(P(D), {
          state: typeof D == "object" ? N({}, E, D.state) : E,
          force: V,
          replace: R
        }),
        v || _
      );
    const $ = _;
    $.redirectedFrom = v;
    let qe;
    return !V && Zr(n, k, _) && (qe = Ve(16, { to: $, from: k }), js(
      k,
      k,
      !0,
      !1
    )), (qe ? Promise.resolve(qe) : Hs($, k)).catch((B) => fe(B) ? fe(B, 2) ? B : Ht(B) : Ut(B, $, k)).then((B) => {
      if (B) {
        if (fe(B, 2))
          return ze(
            N({
              replace: R
            }, P(B.to), {
              state: typeof B.to == "object" ? N({}, E, B.to.state) : E,
              force: V
            }),
            v || $
          );
      } else
        B = $s($, k, !0, R, E);
      return Vs($, k, B), B;
    });
  }
  function Sr(d, v) {
    const _ = z(d, v);
    return _ ? Promise.reject(_) : Promise.resolve();
  }
  function Us(d) {
    const v = pt.values().next().value;
    return v && typeof v.runWithContext == "function" ? v.runWithContext(d) : d();
  }
  function Hs(d, v) {
    let _;
    const [k, E, V] = Ba(d, v);
    _ = Zt(k.reverse(), "beforeRouteLeave", d, v);
    for (const D of k)
      D.leaveGuards.forEach(($) => {
        _.push(Se($, d, v));
      });
    const R = Sr.bind(null, d, v);
    return _.push(R), Ne(_).then(() => {
      _ = [];
      for (const D of a.list())
        _.push(Se(D, d, v));
      return _.push(R), Ne(_);
    }).then(() => {
      _ = Zt(E, "beforeRouteUpdate", d, v);
      for (const D of E)
        D.updateGuards.forEach(($) => {
          _.push(Se($, d, v));
        });
      return _.push(R), Ne(_);
    }).then(() => {
      _ = [];
      for (const D of V)
        if (D.beforeEnter)
          if (te(D.beforeEnter))
            for (const $ of D.beforeEnter)
              _.push(Se($, d, v));
          else
            _.push(Se(D.beforeEnter, d, v));
      return _.push(R), Ne(_);
    }).then(() => (d.matched.forEach((D) => D.enterCallbacks = {}), _ = Zt(V, "beforeRouteEnter", d, v), _.push(R), Ne(_))).then(() => {
      _ = [];
      for (const D of i.list())
        _.push(Se(D, d, v));
      return _.push(R), Ne(_);
    }).catch((D) => fe(D, 8) ? D : Promise.reject(D));
  }
  function Vs(d, v, _) {
    c.list().forEach((k) => Us(() => k(d, v, _)));
  }
  function $s(d, v, _, k, E) {
    const V = z(d, v);
    if (V)
      return V;
    const R = v === ke, D = We ? history.state : {};
    _ && (k || R ? r.replace(d.fullPath, N({
      scroll: R && D && D.scroll
    }, E)) : r.push(d.fullPath, E)), l.value = d, js(d, v, _, R), Ht();
  }
  let Be;
  function Mr() {
    Be || (Be = r.listen((d, v, _) => {
      if (!zs.listening)
        return;
      const k = Y(d), E = ce(k);
      if (E) {
        ze(N(E, { replace: !0 }), k).catch(et);
        return;
      }
      u = k;
      const V = l.value;
      We && na(Ks(V.fullPath, _.delta), Rt()), Hs(k, V).catch((R) => fe(R, 12) ? R : fe(R, 2) ? (ze(
        R.to,
        k
      ).then((D) => {
        fe(D, 20) && !_.delta && _.type === rt.pop && r.go(-1, !1);
      }).catch(et), Promise.reject()) : (_.delta && r.go(-_.delta, !1), Ut(R, k, V))).then((R) => {
        R = R || $s(
          k,
          V,
          !1
        ), R && (_.delta && !fe(R, 8) ? r.go(-_.delta, !1) : _.type === rt.pop && fe(R, 20) && r.go(-1, !1)), Vs(k, V, R);
      }).catch(et);
    }));
  }
  let Lt = Qe(), Gs = Qe(), mt;
  function Ut(d, v, _) {
    Ht(d);
    const k = Gs.list();
    return k.length ? k.forEach((E) => E(d, v, _)) : console.error(d), Promise.reject(d);
  }
  function Dr() {
    return mt && l.value !== ke ? Promise.resolve() : new Promise((d, v) => {
      Lt.add([d, v]);
    });
  }
  function Ht(d) {
    return mt || (mt = !d, Mr(), Lt.list().forEach(([v, _]) => d ? _(d) : v()), Lt.reset()), d;
  }
  function js(d, v, _, k) {
    const { scrollBehavior: E } = e;
    if (!We || !E)
      return Promise.resolve();
    const V = !_ && ra(Ks(d.fullPath, 0)) || (k || !_) && history.state && history.state.scroll || null;
    return Pr().then(() => E(d, v, V)).then((R) => R && sa(R)).catch((R) => Ut(R, d, v));
  }
  const Vt = (d) => r.go(d);
  let $t;
  const pt = /* @__PURE__ */ new Set(), zs = {
    currentRoute: l,
    listening: !0,
    addRoute: y,
    removeRoute: M,
    hasRoute: L,
    getRoutes: F,
    resolve: Y,
    options: e,
    push: X,
    replace: Ye,
    go: Vt,
    back: () => Vt(-1),
    forward: () => Vt(1),
    beforeEach: a.add,
    beforeResolve: i.add,
    afterEach: c.add,
    onError: Gs.add,
    isReady: Dr,
    install(d) {
      const v = this;
      d.component("RouterLink", Ha), d.component("RouterView", ja), d.config.globalProperties.$router = v, Object.defineProperty(d.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Xe(l)
      }), We && !$t && l.value === ke && ($t = !0, X(r.location).catch((E) => {
      }));
      const _ = {};
      for (const E in ke)
        Object.defineProperty(_, E, {
          get: () => l.value[E],
          enumerable: !0
        });
      d.provide(ps, v), d.provide(Tn, br(_)), d.provide(rs, l);
      const k = d.unmount;
      pt.add(d), d.unmount = function() {
        pt.delete(d), pt.size < 1 && (u = ke, Be && Be(), Be = null, l.value = ke, $t = !1, mt = !1), k();
      };
    }
  };
  function Ne(d) {
    return d.reduce((v, _) => v.then(() => Us(_)), Promise.resolve());
  }
  return zs;
}
function Ba(e, t) {
  const s = [], n = [], r = [], a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const c = t.matched[i];
    c && (e.matched.find((u) => He(u, c)) ? n.push(c) : s.push(c));
    const l = e.matched[i];
    l && (t.matched.find((u) => He(u, l)) || r.push(l));
  }
  return [s, n, r];
}
const qa = ut({
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
});
const ys = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, Za = { class: "container-fluid mt-5" }, Qa = /* @__PURE__ */ U("div", { class: "pt-5 pb-5" }, null, -1), Ja = /* @__PURE__ */ U("div", {
  class: "mt-5",
  id: "logo"
}, [
  /* @__PURE__ */ U("img", { src: "/img/lucene-net-color.png" })
], -1), Ka = { class: "input-group pt-5 mb-3" }, Xa = /* @__PURE__ */ U("button", {
  type: "submit",
  class: "btn btn-lg btn-dark col-md-4"
}, "Search", -1);
function ei(e, t, s, n, r, a) {
  return be(), Ee("div", Za, [
    Qa,
    Ja,
    U("form", {
      onSubmit: t[1] || (t[1] = Cr((...i) => e.sendSearch && e.sendSearch(...i), ["prevent"]))
    }, [
      U("div", Ka, [
        Er(U("input", {
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
      Xa
    ], 32)
  ]);
}
const ti = /* @__PURE__ */ ys(qa, [["render", ei]]);
class si {
  constructor() {
    Gt(this, "pageNumber");
    Gt(this, "isActive");
  }
}
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var xn;
function p() {
  return xn.apply(null, arguments);
}
function ni(e) {
  xn = e;
}
function se(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Te(e) {
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
function q(e) {
  return e === void 0;
}
function ge(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ct(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Nn(e, t) {
  var s = [], n, r = e.length;
  for (n = 0; n < r; ++n)
    s.push(t(e[n], n));
  return s;
}
function Me(e, t) {
  for (var s in t)
    T(t, s) && (e[s] = t[s]);
  return T(t, "toString") && (e.toString = t.toString), T(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function le(e, t, s, n) {
  return tr(e, t, s, n, !0).utc();
}
function ri() {
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
  return e._pf == null && (e._pf = ri()), e._pf;
}
var as;
Array.prototype.some ? as = Array.prototype.some : as = function(e) {
  var t = Object(this), s = t.length >>> 0, n;
  for (n = 0; n < s; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function gs(e) {
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
  var t = le(NaN);
  return e != null ? Me(S(t), e) : S(t).userInvalidated = !0, t;
}
var hn = p.momentProperties = [], Qt = !1;
function vs(e, t) {
  var s, n, r, a = hn.length;
  if (q(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), q(t._i) || (e._i = t._i), q(t._f) || (e._f = t._f), q(t._l) || (e._l = t._l), q(t._strict) || (e._strict = t._strict), q(t._tzm) || (e._tzm = t._tzm), q(t._isUTC) || (e._isUTC = t._isUTC), q(t._offset) || (e._offset = t._offset), q(t._pf) || (e._pf = S(t)), q(t._locale) || (e._locale = t._locale), a > 0)
    for (s = 0; s < a; s++)
      n = hn[s], r = t[n], q(r) || (e[n] = r);
  return e;
}
function ft(e) {
  vs(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Qt === !1 && (Qt = !0, p.updateOffset(this), Qt = !1);
}
function ne(e) {
  return e instanceof ft || e != null && e._isAMomentObject != null;
}
function Cn(e) {
  p.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function J(e, t) {
  var s = !0;
  return Me(function() {
    if (p.deprecationHandler != null && p.deprecationHandler(null, e), s) {
      var n = [], r, a, i, c = arguments.length;
      for (a = 0; a < c; a++) {
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
      Cn(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var mn = {};
function En(e, t) {
  p.deprecationHandler != null && p.deprecationHandler(e, t), mn[e] || (Cn(t), mn[e] = !0);
}
p.suppressDeprecationWarnings = !1;
p.deprecationHandler = null;
function ue(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function ai(e) {
  var t, s;
  for (s in e)
    T(e, s) && (t = e[s], ue(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function is(e, t) {
  var s = Me({}, e), n;
  for (n in t)
    T(t, n) && (Te(e[n]) && Te(t[n]) ? (s[n] = {}, Me(s[n], e[n]), Me(s[n], t[n])) : t[n] != null ? s[n] = t[n] : delete s[n]);
  for (n in e)
    T(e, n) && !T(t, n) && Te(e[n]) && (s[n] = Me({}, s[n]));
  return s;
}
function ws(e) {
  e != null && this.set(e);
}
var os;
Object.keys ? os = Object.keys : os = function(e) {
  var t, s = [];
  for (t in e)
    T(e, t) && s.push(t);
  return s;
};
var ii = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function oi(e, t, s) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return ue(n) ? n.call(t, s) : n;
}
function oe(e, t, s) {
  var n = "" + Math.abs(e), r = t - n.length, a = e >= 0;
  return (a ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n;
}
var ks = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, yt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Jt = {}, Fe = {};
function w(e, t, s, n) {
  var r = n;
  typeof n == "string" && (r = function() {
    return this[n]();
  }), e && (Fe[e] = r), t && (Fe[t[0]] = function() {
    return oe(r.apply(this, arguments), t[1], t[2]);
  }), s && (Fe[s] = function() {
    return this.localeData().ordinal(
      r.apply(this, arguments),
      e
    );
  });
}
function li(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ui(e) {
  var t = e.match(ks), s, n;
  for (s = 0, n = t.length; s < n; s++)
    Fe[t[s]] ? t[s] = Fe[t[s]] : t[s] = li(t[s]);
  return function(r) {
    var a = "", i;
    for (i = 0; i < n; i++)
      a += ue(t[i]) ? t[i].call(r, e) : t[i];
    return a;
  };
}
function gt(e, t) {
  return e.isValid() ? (t = Wn(t, e.localeData()), Jt[t] = Jt[t] || ui(t), Jt[t](e)) : e.localeData().invalidDate();
}
function Wn(e, t) {
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
var ci = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function fi(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(ks).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var di = "Invalid date";
function hi() {
  return this._invalidDate;
}
var mi = "%d", pi = /\d{1,2}/;
function yi(e) {
  return this._ordinal.replace("%d", e);
}
var _i = {
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
function gi(e, t, s, n) {
  var r = this._relativeTime[s];
  return ue(r) ? r(e, t, s, n) : r.replace(/%d/i, e);
}
function vi(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return ue(s) ? s(t) : s.replace(/%s/i, t);
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
function K(e) {
  return typeof e == "string" ? pn[e] || pn[e.toLowerCase()] : void 0;
}
function Ss(e) {
  var t = {}, s, n;
  for (n in e)
    T(e, n) && (s = K(n), s && (t[s] = e[n]));
  return t;
}
var wi = {
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
function ki(e) {
  var t = [], s;
  for (s in e)
    T(e, s) && t.push({ unit: s, priority: wi[s] });
  return t.sort(function(n, r) {
    return n.priority - r.priority;
  }), t;
}
var An = /\d/, Z = /\d\d/, In = /\d{3}/, Ms = /\d{4}/, Pt = /[+-]?\d{6}/, A = /\d\d?/, Fn = /\d\d\d\d?/, Ln = /\d\d\d\d\d\d?/, Tt = /\d{1,3}/, Ds = /\d{1,4}/, xt = /[+-]?\d{1,6}/, $e = /\d+/, Nt = /[+-]?\d+/, Si = /Z|[+-]\d\d:?\d\d/gi, Ct = /Z|[+-]\d\d(?::?\d\d)?/gi, Mi = /[+-]?\d+(\.\d{1,3})?/, dt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ge = /^[1-9]\d?/, Os = /^([1-9]\d|\d)/, St;
St = {};
function g(e, t, s) {
  St[e] = ue(t) ? t : function(n, r) {
    return n && s ? s : t;
  };
}
function Di(e, t) {
  return T(St, e) ? St[e](t._strict, t._locale) : new RegExp(Oi(e));
}
function Oi(e) {
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
function Q(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function O(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = Q(t)), s;
}
var ls = {};
function C(e, t) {
  var s, n = t, r;
  for (typeof e == "string" && (e = [e]), ge(t) && (n = function(a, i) {
    i[t] = O(a);
  }), r = e.length, s = 0; s < r; s++)
    ls[e[s]] = n;
}
function ht(e, t) {
  C(e, function(s, n, r, a) {
    r._w = r._w || {}, t(s, r._w, r, a);
  });
}
function Yi(e, t, s) {
  t != null && T(ls, e) && ls[e](t, s._a, s, e);
}
function Et(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var j = 0, me = 1, ie = 2, G = 3, ee = 4, pe = 5, Pe = 6, Ri = 7, bi = 8;
w("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? oe(e, 4) : "+" + e;
});
w(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
w(0, ["YYYY", 4], 0, "year");
w(0, ["YYYYY", 5], 0, "year");
w(0, ["YYYYYY", 6, !0], 0, "year");
g("Y", Nt);
g("YY", A, Z);
g("YYYY", Ds, Ms);
g("YYYYY", xt, Pt);
g("YYYYYY", xt, Pt);
C(["YYYYY", "YYYYYY"], j);
C("YYYY", function(e, t) {
  t[j] = e.length === 2 ? p.parseTwoDigitYear(e) : O(e);
});
C("YY", function(e, t) {
  t[j] = p.parseTwoDigitYear(e);
});
C("Y", function(e, t) {
  t[j] = parseInt(e, 10);
});
function st(e) {
  return Et(e) ? 366 : 365;
}
p.parseTwoDigitYear = function(e) {
  return O(e) + (O(e) > 68 ? 1900 : 2e3);
};
var Un = je("FullYear", !0);
function Pi() {
  return Et(this.year());
}
function je(e, t) {
  return function(s) {
    return s != null ? (Hn(this, e, s), p.updateOffset(this, t), this) : at(this, e);
  };
}
function at(e, t) {
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
function Hn(e, t, s) {
  var n, r, a, i, c;
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
    a = s, i = e.month(), c = e.date(), c = c === 29 && i === 1 && !Et(a) ? 28 : c, r ? n.setUTCFullYear(a, i, c) : n.setFullYear(a, i, c);
  }
}
function Ti(e) {
  return e = K(e), ue(this[e]) ? this[e]() : this;
}
function xi(e, t) {
  if (typeof e == "object") {
    e = Ss(e);
    var s = ki(e), n, r = s.length;
    for (n = 0; n < r; n++)
      this[s[n].unit](e[s[n].unit]);
  } else if (e = K(e), ue(this[e]))
    return this[e](t);
  return this;
}
function Ni(e, t) {
  return (e % t + t) % t;
}
var H;
Array.prototype.indexOf ? H = Array.prototype.indexOf : H = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ys(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Ni(t, 12);
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
g("M", A, Ge);
g("MM", A, Z);
g("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
g("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
C(["M", "MM"], function(e, t) {
  t[me] = O(e) - 1;
});
C(["MMM", "MMMM"], function(e, t, s, n) {
  var r = s._locale.monthsParse(e, n, s._strict);
  r != null ? t[me] = r : S(s).invalidMonth = e;
});
var Ci = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Vn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), $n = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ei = dt, Wi = dt;
function Ai(e, t) {
  return e ? se(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || $n).test(t) ? "format" : "standalone"][e.month()] : se(this._months) ? this._months : this._months.standalone;
}
function Ii(e, t) {
  return e ? se(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[$n.test(t) ? "format" : "standalone"][e.month()] : se(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Fi(e, t, s) {
  var n, r, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = le([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (r = H.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = H.call(this._longMonthsParse, i), r !== -1 ? r : null) : t === "MMM" ? (r = H.call(this._shortMonthsParse, i), r !== -1 ? r : (r = H.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = H.call(this._longMonthsParse, i), r !== -1 ? r : (r = H.call(this._shortMonthsParse, i), r !== -1 ? r : null));
}
function Li(e, t, s) {
  var n, r, a;
  if (this._monthsParseExact)
    return Fi.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (r = le([2e3, n]), s && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
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
function Gn(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = O(t);
    else if (t = e.localeData().monthsParse(t), !ge(t))
      return e;
  }
  var s = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, Ys(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, n) : e._d.setMonth(s, n), e;
}
function jn(e) {
  return e != null ? (Gn(this, e), p.updateOffset(this, !0), this) : at(this, "Month");
}
function Ui() {
  return Ys(this.year(), this.month());
}
function Hi(e) {
  return this._monthsParseExact ? (T(this, "_monthsRegex") || zn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (T(this, "_monthsShortRegex") || (this._monthsShortRegex = Ei), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Vi(e) {
  return this._monthsParseExact ? (T(this, "_monthsRegex") || zn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (T(this, "_monthsRegex") || (this._monthsRegex = Wi), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function zn() {
  function e(l, u) {
    return u.length - l.length;
  }
  var t = [], s = [], n = [], r, a, i, c;
  for (r = 0; r < 12; r++)
    a = le([2e3, r]), i = ye(this.monthsShort(a, "")), c = ye(this.months(a, "")), t.push(i), s.push(c), n.push(c), n.push(i);
  t.sort(e), s.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function $i(e, t, s, n, r, a, i) {
  var c;
  return e < 100 && e >= 0 ? (c = new Date(e + 400, t, s, n, r, a, i), isFinite(c.getFullYear()) && c.setFullYear(e)) : c = new Date(e, t, s, n, r, a, i), c;
}
function it(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Mt(e, t, s) {
  var n = 7 + t - s, r = (7 + it(e, 0, n).getUTCDay() - t) % 7;
  return -r + n - 1;
}
function Bn(e, t, s, n, r) {
  var a = (7 + s - n) % 7, i = Mt(e, n, r), c = 1 + 7 * (t - 1) + a + i, l, u;
  return c <= 0 ? (l = e - 1, u = st(l) + c) : c > st(e) ? (l = e + 1, u = c - st(e)) : (l = e, u = c), {
    year: l,
    dayOfYear: u
  };
}
function ot(e, t, s) {
  var n = Mt(e.year(), t, s), r = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, i;
  return r < 1 ? (i = e.year() - 1, a = r + _e(i, t, s)) : r > _e(e.year(), t, s) ? (a = r - _e(e.year(), t, s), i = e.year() + 1) : (i = e.year(), a = r), {
    week: a,
    year: i
  };
}
function _e(e, t, s) {
  var n = Mt(e, t, s), r = Mt(e + 1, t, s);
  return (st(e) - n + r) / 7;
}
w("w", ["ww", 2], "wo", "week");
w("W", ["WW", 2], "Wo", "isoWeek");
g("w", A, Ge);
g("ww", A, Z);
g("W", A, Ge);
g("WW", A, Z);
ht(
  ["w", "ww", "W", "WW"],
  function(e, t, s, n) {
    t[n.substr(0, 1)] = O(e);
  }
);
function Gi(e) {
  return ot(e, this._week.dow, this._week.doy).week;
}
var ji = {
  dow: 0,
  doy: 6
};
function zi() {
  return this._week.dow;
}
function Bi() {
  return this._week.doy;
}
function qi(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Zi(e) {
  var t = ot(this, 1, 4).week;
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
g("d", A);
g("e", A);
g("E", A);
g("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
g("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
g("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
ht(["dd", "ddd", "dddd"], function(e, t, s, n) {
  var r = s._locale.weekdaysParse(e, n, s._strict);
  r != null ? t.d = r : S(s).invalidWeekday = e;
});
ht(["d", "e", "E"], function(e, t, s, n) {
  t[n] = O(e);
});
function Qi(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Ji(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Rs(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Ki = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), qn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Xi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), eo = dt, to = dt, so = dt;
function no(e, t) {
  var s = se(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Rs(s, this._week.dow) : e ? s[e.day()] : s;
}
function ro(e) {
  return e === !0 ? Rs(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function ao(e) {
  return e === !0 ? Rs(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function io(e, t, s) {
  var n, r, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = le([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (r = H.call(this._weekdaysParse, i), r !== -1 ? r : null) : t === "ddd" ? (r = H.call(this._shortWeekdaysParse, i), r !== -1 ? r : null) : (r = H.call(this._minWeekdaysParse, i), r !== -1 ? r : null) : t === "dddd" ? (r = H.call(this._weekdaysParse, i), r !== -1 || (r = H.call(this._shortWeekdaysParse, i), r !== -1) ? r : (r = H.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : t === "ddd" ? (r = H.call(this._shortWeekdaysParse, i), r !== -1 || (r = H.call(this._weekdaysParse, i), r !== -1) ? r : (r = H.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : (r = H.call(this._minWeekdaysParse, i), r !== -1 || (r = H.call(this._weekdaysParse, i), r !== -1) ? r : (r = H.call(this._shortWeekdaysParse, i), r !== -1 ? r : null));
}
function oo(e, t, s) {
  var n, r, a;
  if (this._weekdaysParseExact)
    return io.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (r = le([2e3, 1]).day(n), s && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
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
function lo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = at(this, "Day");
  return e != null ? (e = Qi(e, this.localeData()), this.add(e - t, "d")) : t;
}
function uo(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function co(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Ji(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function fo(e) {
  return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || bs.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (T(this, "_weekdaysRegex") || (this._weekdaysRegex = eo), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function ho(e) {
  return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || bs.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (T(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = to), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function mo(e) {
  return this._weekdaysParseExact ? (T(this, "_weekdaysRegex") || bs.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (T(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = so), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function bs() {
  function e(o, f) {
    return f.length - o.length;
  }
  var t = [], s = [], n = [], r = [], a, i, c, l, u;
  for (a = 0; a < 7; a++)
    i = le([2e3, 1]).day(a), c = ye(this.weekdaysMin(i, "")), l = ye(this.weekdaysShort(i, "")), u = ye(this.weekdays(i, "")), t.push(c), s.push(l), n.push(u), r.push(c), r.push(l), r.push(u);
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
function po() {
  return this.hours() || 24;
}
w("H", ["HH", 2], 0, "hour");
w("h", ["hh", 2], 0, Ps);
w("k", ["kk", 2], 0, po);
w("hmm", 0, 0, function() {
  return "" + Ps.apply(this) + oe(this.minutes(), 2);
});
w("hmmss", 0, 0, function() {
  return "" + Ps.apply(this) + oe(this.minutes(), 2) + oe(this.seconds(), 2);
});
w("Hmm", 0, 0, function() {
  return "" + this.hours() + oe(this.minutes(), 2);
});
w("Hmmss", 0, 0, function() {
  return "" + this.hours() + oe(this.minutes(), 2) + oe(this.seconds(), 2);
});
function Zn(e, t) {
  w(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Zn("a", !0);
Zn("A", !1);
function Qn(e, t) {
  return t._meridiemParse;
}
g("a", Qn);
g("A", Qn);
g("H", A, Os);
g("h", A, Ge);
g("k", A, Ge);
g("HH", A, Z);
g("hh", A, Z);
g("kk", A, Z);
g("hmm", Fn);
g("hmmss", Ln);
g("Hmm", Fn);
g("Hmmss", Ln);
C(["H", "HH"], G);
C(["k", "kk"], function(e, t, s) {
  var n = O(e);
  t[G] = n === 24 ? 0 : n;
});
C(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
C(["h", "hh"], function(e, t, s) {
  t[G] = O(e), S(s).bigHour = !0;
});
C("hmm", function(e, t, s) {
  var n = e.length - 2;
  t[G] = O(e.substr(0, n)), t[ee] = O(e.substr(n)), S(s).bigHour = !0;
});
C("hmmss", function(e, t, s) {
  var n = e.length - 4, r = e.length - 2;
  t[G] = O(e.substr(0, n)), t[ee] = O(e.substr(n, 2)), t[pe] = O(e.substr(r)), S(s).bigHour = !0;
});
C("Hmm", function(e, t, s) {
  var n = e.length - 2;
  t[G] = O(e.substr(0, n)), t[ee] = O(e.substr(n));
});
C("Hmmss", function(e, t, s) {
  var n = e.length - 4, r = e.length - 2;
  t[G] = O(e.substr(0, n)), t[ee] = O(e.substr(n, 2)), t[pe] = O(e.substr(r));
});
function yo(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var _o = /[ap]\.?m?\.?/i, go = je("Hours", !0);
function vo(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Jn = {
  calendar: ii,
  longDateFormat: ci,
  invalidDate: di,
  ordinal: mi,
  dayOfMonthOrdinalParse: pi,
  relativeTime: _i,
  months: Ci,
  monthsShort: Vn,
  week: ji,
  weekdays: Ki,
  weekdaysMin: Xi,
  weekdaysShort: qn,
  meridiemParse: _o
}, I = {}, Je = {}, lt;
function wo(e, t) {
  var s, n = Math.min(e.length, t.length);
  for (s = 0; s < n; s += 1)
    if (e[s] !== t[s])
      return s;
  return n;
}
function yn(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ko(e) {
  for (var t = 0, s, n, r, a; t < e.length; ) {
    for (a = yn(e[t]).split("-"), s = a.length, n = yn(e[t + 1]), n = n ? n.split("-") : null; s > 0; ) {
      if (r = Wt(a.slice(0, s).join("-")), r)
        return r;
      if (n && n.length >= s && wo(a, n) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return lt;
}
function So(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Wt(e) {
  var t = null, s;
  if (I[e] === void 0 && typeof module < "u" && module && module.exports && So(e))
    try {
      t = lt._abbr, s = require, s("./locale/" + e), Oe(t);
    } catch {
      I[e] = null;
    }
  return I[e];
}
function Oe(e, t) {
  var s;
  return e && (q(t) ? s = ve(e) : s = Ts(e, t), s ? lt = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), lt._abbr;
}
function Ts(e, t) {
  if (t !== null) {
    var s, n = Jn;
    if (t.abbr = e, I[e] != null)
      En(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = I[e]._config;
    else if (t.parentLocale != null)
      if (I[t.parentLocale] != null)
        n = I[t.parentLocale]._config;
      else if (s = Wt(t.parentLocale), s != null)
        n = s._config;
      else
        return Je[t.parentLocale] || (Je[t.parentLocale] = []), Je[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return I[e] = new ws(is(n, t)), Je[e] && Je[e].forEach(function(r) {
      Ts(r.name, r.config);
    }), Oe(e), I[e];
  } else
    return delete I[e], null;
}
function Mo(e, t) {
  if (t != null) {
    var s, n, r = Jn;
    I[e] != null && I[e].parentLocale != null ? I[e].set(is(I[e]._config, t)) : (n = Wt(e), n != null && (r = n._config), t = is(r, t), n == null && (t.abbr = e), s = new ws(t), s.parentLocale = I[e], I[e] = s), Oe(e);
  } else
    I[e] != null && (I[e].parentLocale != null ? (I[e] = I[e].parentLocale, e === Oe() && Oe(e)) : I[e] != null && delete I[e]);
  return I[e];
}
function ve(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return lt;
  if (!se(e)) {
    if (t = Wt(e), t)
      return t;
    e = [e];
  }
  return ko(e);
}
function Do() {
  return os(I);
}
function xs(e) {
  var t, s = e._a;
  return s && S(e).overflow === -2 && (t = s[me] < 0 || s[me] > 11 ? me : s[ie] < 1 || s[ie] > Ys(s[j], s[me]) ? ie : s[G] < 0 || s[G] > 24 || s[G] === 24 && (s[ee] !== 0 || s[pe] !== 0 || s[Pe] !== 0) ? G : s[ee] < 0 || s[ee] > 59 ? ee : s[pe] < 0 || s[pe] > 59 ? pe : s[Pe] < 0 || s[Pe] > 999 ? Pe : -1, S(e)._overflowDayOfYear && (t < j || t > ie) && (t = ie), S(e)._overflowWeeks && t === -1 && (t = Ri), S(e)._overflowWeekday && t === -1 && (t = bi), S(e).overflow = t), e;
}
var Oo = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Yo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ro = /Z|[+-]\d\d(?::?\d\d)?/, _t = [
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
], bo = /^\/?Date\((-?\d+)/i, Po = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, To = {
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
function Kn(e) {
  var t, s, n = e._i, r = Oo.exec(n) || Yo.exec(n), a, i, c, l, u = _t.length, o = Kt.length;
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
      for (t = 0, s = o; t < s; t++)
        if (Kt[t][1].exec(r[3])) {
          c = (r[2] || " ") + Kt[t][0];
          break;
        }
      if (c == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && c != null) {
      e._isValid = !1;
      return;
    }
    if (r[4])
      if (Ro.exec(r[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (c || "") + (l || ""), Cs(e);
  } else
    e._isValid = !1;
}
function xo(e, t, s, n, r, a) {
  var i = [
    No(e),
    Vn.indexOf(t),
    parseInt(s, 10),
    parseInt(n, 10),
    parseInt(r, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function No(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Co(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Eo(e, t, s) {
  if (e) {
    var n = qn.indexOf(e), r = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== r)
      return S(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Wo(e, t, s) {
  if (e)
    return To[e];
  if (t)
    return 0;
  var n = parseInt(s, 10), r = n % 100, a = (n - r) / 100;
  return a * 60 + r;
}
function Xn(e) {
  var t = Po.exec(Co(e._i)), s;
  if (t) {
    if (s = xo(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Eo(t[1], s, e))
      return;
    e._a = s, e._tzm = Wo(t[8], t[9], t[10]), e._d = it.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), S(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Ao(e) {
  var t = bo.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (Kn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Xn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : p.createFromInputFallback(e);
}
p.createFromInputFallback = J(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ae(e, t, s) {
  return e != null ? e : t != null ? t : s;
}
function Io(e) {
  var t = new Date(p.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Ns(e) {
  var t, s, n = [], r, a, i;
  if (!e._d) {
    for (r = Io(e), e._w && e._a[ie] == null && e._a[me] == null && Fo(e), e._dayOfYear != null && (i = Ae(e._a[j], r[j]), (e._dayOfYear > st(i) || e._dayOfYear === 0) && (S(e)._overflowDayOfYear = !0), s = it(i, 0, e._dayOfYear), e._a[me] = s.getUTCMonth(), e._a[ie] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = r[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[G] === 24 && e._a[ee] === 0 && e._a[pe] === 0 && e._a[Pe] === 0 && (e._nextDay = !0, e._a[G] = 0), e._d = (e._useUTC ? it : $i).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[G] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (S(e).weekdayMismatch = !0);
  }
}
function Fo(e) {
  var t, s, n, r, a, i, c, l, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, s = Ae(
    t.GG,
    e._a[j],
    ot(W(), 1, 4).year
  ), n = Ae(t.W, 1), r = Ae(t.E, 1), (r < 1 || r > 7) && (l = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, u = ot(W(), a, i), s = Ae(t.gg, e._a[j], u.year), n = Ae(t.w, u.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (l = !0)) : t.e != null ? (r = t.e + a, (t.e < 0 || t.e > 6) && (l = !0)) : r = a), n < 1 || n > _e(s, a, i) ? S(e)._overflowWeeks = !0 : l != null ? S(e)._overflowWeekday = !0 : (c = Bn(s, n, r, a, i), e._a[j] = c.year, e._dayOfYear = c.dayOfYear);
}
p.ISO_8601 = function() {
};
p.RFC_2822 = function() {
};
function Cs(e) {
  if (e._f === p.ISO_8601) {
    Kn(e);
    return;
  }
  if (e._f === p.RFC_2822) {
    Xn(e);
    return;
  }
  e._a = [], S(e).empty = !0;
  var t = "" + e._i, s, n, r, a, i, c = t.length, l = 0, u, o;
  for (r = Wn(e._f, e._locale).match(ks) || [], o = r.length, s = 0; s < o; s++)
    a = r[s], n = (t.match(Di(a, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && S(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), l += n.length), Fe[a] ? (n ? S(e).empty = !1 : S(e).unusedTokens.push(a), Yi(a, n, e)) : e._strict && !n && S(e).unusedTokens.push(a);
  S(e).charsLeftOver = c - l, t.length > 0 && S(e).unusedInput.push(t), e._a[G] <= 12 && S(e).bigHour === !0 && e._a[G] > 0 && (S(e).bigHour = void 0), S(e).parsedDateParts = e._a.slice(0), S(e).meridiem = e._meridiem, e._a[G] = Lo(
    e._locale,
    e._a[G],
    e._meridiem
  ), u = S(e).era, u !== null && (e._a[j] = e._locale.erasConvertYear(u, e._a[j])), Ns(e), xs(e);
}
function Lo(e, t, s) {
  var n;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (n = e.isPM(s), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function Uo(e) {
  var t, s, n, r, a, i, c = !1, l = e._f.length;
  if (l === 0) {
    S(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (r = 0; r < l; r++)
    a = 0, i = !1, t = vs({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], Cs(t), gs(t) && (i = !0), a += S(t).charsLeftOver, a += S(t).unusedTokens.length * 10, S(t).score = a, c ? a < n && (n = a, s = t) : (n == null || a < n || i) && (n = a, s = t, i && (c = !0));
  Me(e, s || t);
}
function Ho(e) {
  if (!e._d) {
    var t = Ss(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Nn(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Ns(e);
  }
}
function Vo(e) {
  var t = new ft(xs(er(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function er(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || ve(e._l), t === null || s === void 0 && t === "" ? bt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ne(t) ? new ft(xs(t)) : (ct(t) ? e._d = t : se(s) ? Uo(e) : s ? Cs(e) : $o(e), gs(e) || (e._d = null), e));
}
function $o(e) {
  var t = e._i;
  q(t) ? e._d = new Date(p.now()) : ct(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Ao(e) : se(t) ? (e._a = Nn(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Ns(e)) : Te(t) ? Ho(e) : ge(t) ? e._d = new Date(t) : p.createFromInputFallback(e);
}
function tr(e, t, s, n, r) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (s === !0 || s === !1) && (n = s, s = void 0), (Te(e) && _s(e) || se(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = s, a._i = e, a._f = t, a._strict = n, Vo(a);
}
function W(e, t, s, n) {
  return tr(e, t, s, n, !1);
}
var Go = J(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = W.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : bt();
  }
), jo = J(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = W.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : bt();
  }
);
function sr(e, t) {
  var s, n;
  if (t.length === 1 && se(t[0]) && (t = t[0]), !t.length)
    return W();
  for (s = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](s)) && (s = t[n]);
  return s;
}
function zo() {
  var e = [].slice.call(arguments, 0);
  return sr("isBefore", e);
}
function Bo() {
  var e = [].slice.call(arguments, 0);
  return sr("isAfter", e);
}
var qo = function() {
  return Date.now ? Date.now() : +new Date();
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
function Zo(e) {
  var t, s = !1, n, r = Ke.length;
  for (t in e)
    if (T(e, t) && !(H.call(Ke, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < r; ++n)
    if (e[Ke[n]]) {
      if (s)
        return !1;
      parseFloat(e[Ke[n]]) !== O(e[Ke[n]]) && (s = !0);
    }
  return !0;
}
function Qo() {
  return this._isValid;
}
function Jo() {
  return re(NaN);
}
function At(e) {
  var t = Ss(e), s = t.year || 0, n = t.quarter || 0, r = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, c = t.hour || 0, l = t.minute || 0, u = t.second || 0, o = t.millisecond || 0;
  this._isValid = Zo(t), this._milliseconds = +o + u * 1e3 + l * 6e4 + c * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +r + n * 3 + s * 12, this._data = {}, this._locale = ve(), this._bubble();
}
function vt(e) {
  return e instanceof At;
}
function us(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Ko(e, t, s) {
  var n = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < n; i++)
    (s && e[i] !== t[i] || !s && O(e[i]) !== O(t[i])) && a++;
  return a + r;
}
function nr(e, t) {
  w(e, 0, 0, function() {
    var s = this.utcOffset(), n = "+";
    return s < 0 && (s = -s, n = "-"), n + oe(~~(s / 60), 2) + t + oe(~~s % 60, 2);
  });
}
nr("Z", ":");
nr("ZZ", "");
g("Z", Ct);
g("ZZ", Ct);
C(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Es(Ct, e);
});
var Xo = /([\+\-]|\d\d)/gi;
function Es(e, t) {
  var s = (t || "").match(e), n, r, a;
  return s === null ? null : (n = s[s.length - 1] || [], r = (n + "").match(Xo) || ["-", 0, 0], a = +(r[1] * 60) + O(r[2]), a === 0 ? 0 : r[0] === "+" ? a : -a);
}
function Ws(e, t) {
  var s, n;
  return t._isUTC ? (s = t.clone(), n = (ne(e) || ct(e) ? e.valueOf() : W(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + n), p.updateOffset(s, !1), s) : W(e).local();
}
function cs(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
p.updateOffset = function() {
};
function el(e, t, s) {
  var n = this._offset || 0, r;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Es(Ct, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (r = cs(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), n !== e && (!t || this._changeInProgress ? ir(
      this,
      re(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, p.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : cs(this);
}
function tl(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function sl(e) {
  return this.utcOffset(0, e);
}
function nl(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(cs(this), "m")), this;
}
function rl() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Es(Si, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function al(e) {
  return this.isValid() ? (e = e ? W(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function il() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function ol() {
  if (!q(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return vs(e, this), e = er(e), e._a ? (t = e._isUTC ? le(e._a) : W(e._a), this._isDSTShifted = this.isValid() && Ko(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function ll() {
  return this.isValid() ? !this._isUTC : !1;
}
function ul() {
  return this.isValid() ? this._isUTC : !1;
}
function rr() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var cl = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, fl = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function re(e, t) {
  var s = e, n = null, r, a, i;
  return vt(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ge(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (n = cl.exec(e)) ? (r = n[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: O(n[ie]) * r,
    h: O(n[G]) * r,
    m: O(n[ee]) * r,
    s: O(n[pe]) * r,
    ms: O(us(n[Pe] * 1e3)) * r
  }) : (n = fl.exec(e)) ? (r = n[1] === "-" ? -1 : 1, s = {
    y: Re(n[2], r),
    M: Re(n[3], r),
    w: Re(n[4], r),
    d: Re(n[5], r),
    h: Re(n[6], r),
    m: Re(n[7], r),
    s: Re(n[8], r)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = dl(
    W(s.from),
    W(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), a = new At(s), vt(e) && T(e, "_locale") && (a._locale = e._locale), vt(e) && T(e, "_isValid") && (a._isValid = e._isValid), a;
}
re.fn = At.prototype;
re.invalid = Jo;
function Re(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function _n(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function dl(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Ws(t, e), e.isBefore(t) ? s = _n(e, t) : (s = _n(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function ar(e, t) {
  return function(s, n) {
    var r, a;
    return n !== null && !isNaN(+n) && (En(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = s, s = n, n = a), r = re(s, n), ir(this, r, e), this;
  };
}
function ir(e, t, s, n) {
  var r = t._milliseconds, a = us(t._days), i = us(t._months);
  !e.isValid() || (n = n == null ? !0 : n, i && Gn(e, at(e, "Month") + i * s), a && Hn(e, "Date", at(e, "Date") + a * s), r && e._d.setTime(e._d.valueOf() + r * s), n && p.updateOffset(e, a || i));
}
var hl = ar(1, "add"), ml = ar(-1, "subtract");
function or(e) {
  return typeof e == "string" || e instanceof String;
}
function pl(e) {
  return ne(e) || ct(e) || or(e) || ge(e) || _l(e) || yl(e) || e === null || e === void 0;
}
function yl(e) {
  var t = Te(e) && !_s(e), s = !1, n = [
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
function _l(e) {
  var t = se(e), s = !1;
  return t && (s = e.filter(function(n) {
    return !ge(n) && or(e);
  }).length === 0), t && s;
}
function gl(e) {
  var t = Te(e) && !_s(e), s = !1, n = [
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
function vl(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function wl(e, t) {
  arguments.length === 1 && (arguments[0] ? pl(arguments[0]) ? (e = arguments[0], t = void 0) : gl(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || W(), n = Ws(s, this).startOf("day"), r = p.calendarFormat(this, n) || "sameElse", a = t && (ue(t[r]) ? t[r].call(this, s) : t[r]);
  return this.format(
    a || this.localeData().calendar(r, this, W(s))
  );
}
function kl() {
  return new ft(this);
}
function Sl(e, t) {
  var s = ne(e) ? e : W(e);
  return this.isValid() && s.isValid() ? (t = K(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Ml(e, t) {
  var s = ne(e) ? e : W(e);
  return this.isValid() && s.isValid() ? (t = K(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function Dl(e, t, s, n) {
  var r = ne(e) ? e : W(e), a = ne(t) ? t : W(t);
  return this.isValid() && r.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(r, s) : !this.isBefore(r, s)) && (n[1] === ")" ? this.isBefore(a, s) : !this.isAfter(a, s))) : !1;
}
function Ol(e, t) {
  var s = ne(e) ? e : W(e), n;
  return this.isValid() && s.isValid() ? (t = K(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function Yl(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Rl(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function bl(e, t, s) {
  var n, r, a;
  if (!this.isValid())
    return NaN;
  if (n = Ws(e, this), !n.isValid())
    return NaN;
  switch (r = (n.utcOffset() - this.utcOffset()) * 6e4, t = K(t), t) {
    case "year":
      a = wt(this, n) / 12;
      break;
    case "month":
      a = wt(this, n);
      break;
    case "quarter":
      a = wt(this, n) / 3;
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
  return s ? a : Q(a);
}
function wt(e, t) {
  if (e.date() < t.date())
    return -wt(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(s, "months"), r, a;
  return t - n < 0 ? (r = e.clone().add(s - 1, "months"), a = (t - n) / (n - r)) : (r = e.clone().add(s + 1, "months"), a = (t - n) / (r - n)), -(s + a) || 0;
}
p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Pl() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Tl(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? gt(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ue(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", gt(s, "Z")) : gt(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function xl() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, n, r, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(s + n + r + a);
}
function Nl(e) {
  e || (e = this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
  var t = gt(this, e);
  return this.localeData().postformat(t);
}
function Cl(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || W(e).isValid()) ? re({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function El(e) {
  return this.from(W(), e);
}
function Wl(e, t) {
  return this.isValid() && (ne(e) && e.isValid() || W(e).isValid()) ? re({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Al(e) {
  return this.to(W(), e);
}
function lr(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ve(e), t != null && (this._locale = t), this);
}
var ur = J(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function cr() {
  return this._locale;
}
var Dt = 1e3, Le = 60 * Dt, Ot = 60 * Le, fr = (365 * 400 + 97) * 24 * Ot;
function Ue(e, t) {
  return (e % t + t) % t;
}
function dr(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - fr : new Date(e, t, s).valueOf();
}
function hr(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - fr : Date.UTC(e, t, s);
}
function Il(e) {
  var t, s;
  if (e = K(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? hr : dr, e) {
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
      t = this._d.valueOf(), t -= Ue(
        t + (this._isUTC ? 0 : this.utcOffset() * Le),
        Ot
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ue(t, Le);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ue(t, Dt);
      break;
  }
  return this._d.setTime(t), p.updateOffset(this, !0), this;
}
function Fl(e) {
  var t, s;
  if (e = K(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? hr : dr, e) {
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
      t = this._d.valueOf(), t += Ot - Ue(
        t + (this._isUTC ? 0 : this.utcOffset() * Le),
        Ot
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Le - Ue(t, Le) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Dt - Ue(t, Dt) - 1;
      break;
  }
  return this._d.setTime(t), p.updateOffset(this, !0), this;
}
function Ll() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Ul() {
  return Math.floor(this.valueOf() / 1e3);
}
function Hl() {
  return new Date(this.valueOf());
}
function Vl() {
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
function $l() {
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
function Gl() {
  return this.isValid() ? this.toISOString() : null;
}
function jl() {
  return gs(this);
}
function zl() {
  return Me({}, S(this));
}
function Bl() {
  return S(this).overflow;
}
function ql() {
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
g("N", As);
g("NN", As);
g("NNN", As);
g("NNNN", au);
g("NNNNN", iu);
C(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, n) {
    var r = s._locale.erasParse(e, n, s._strict);
    r ? S(s).era = r : S(s).invalidEra = e;
  }
);
g("y", $e);
g("yy", $e);
g("yyy", $e);
g("yyyy", $e);
g("yo", ou);
C(["y", "yy", "yyy", "yyyy"], j);
C(["yo"], function(e, t, s, n) {
  var r;
  s._locale._eraYearOrdinalRegex && (r = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[j] = s._locale.eraYearOrdinalParse(e, r) : t[j] = parseInt(e, 10);
});
function Zl(e, t) {
  var s, n, r, a = this._eras || ve("en")._eras;
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
function Ql(e, t, s) {
  var n, r, a = this.eras(), i, c, l;
  for (e = e.toUpperCase(), n = 0, r = a.length; n < r; ++n)
    if (i = a[n].name.toUpperCase(), c = a[n].abbr.toUpperCase(), l = a[n].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (c === e)
            return a[n];
          break;
        case "NNNN":
          if (i === e)
            return a[n];
          break;
        case "NNNNN":
          if (l === e)
            return a[n];
          break;
      }
    else if ([i, c, l].indexOf(e) >= 0)
      return a[n];
}
function Jl(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? p(e.since).year() : p(e.since).year() + (t - e.offset) * s;
}
function Kl() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].name;
  return "";
}
function Xl() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].narrow;
  return "";
}
function eu() {
  var e, t, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return n[e].abbr;
  return "";
}
function tu() {
  var e, t, s, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = r[e].since <= r[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return (this.year() - p(r[e].since).year()) * s + r[e].offset;
  return this.year();
}
function su(e) {
  return T(this, "_erasNameRegex") || Is.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function nu(e) {
  return T(this, "_erasAbbrRegex") || Is.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function ru(e) {
  return T(this, "_erasNarrowRegex") || Is.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function As(e, t) {
  return t.erasAbbrRegex(e);
}
function au(e, t) {
  return t.erasNameRegex(e);
}
function iu(e, t) {
  return t.erasNarrowRegex(e);
}
function ou(e, t) {
  return t._eraYearOrdinalRegex || $e;
}
function Is() {
  var e = [], t = [], s = [], n = [], r, a, i, c, l, u = this.eras();
  for (r = 0, a = u.length; r < a; ++r)
    i = ye(u[r].name), c = ye(u[r].abbr), l = ye(u[r].narrow), t.push(i), e.push(c), s.push(l), n.push(i), n.push(c), n.push(l);
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
function It(e, t) {
  w(0, [e, e.length], 0, t);
}
It("gggg", "weekYear");
It("ggggg", "weekYear");
It("GGGG", "isoWeekYear");
It("GGGGG", "isoWeekYear");
g("G", Nt);
g("g", Nt);
g("GG", A, Z);
g("gg", A, Z);
g("GGGG", Ds, Ms);
g("gggg", Ds, Ms);
g("GGGGG", xt, Pt);
g("ggggg", xt, Pt);
ht(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, n) {
    t[n.substr(0, 2)] = O(e);
  }
);
ht(["gg", "GG"], function(e, t, s, n) {
  t[n] = p.parseTwoDigitYear(e);
});
function lu(e) {
  return mr.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function uu(e) {
  return mr.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function cu() {
  return _e(this.year(), 1, 4);
}
function fu() {
  return _e(this.isoWeekYear(), 1, 4);
}
function du() {
  var e = this.localeData()._week;
  return _e(this.year(), e.dow, e.doy);
}
function hu() {
  var e = this.localeData()._week;
  return _e(this.weekYear(), e.dow, e.doy);
}
function mr(e, t, s, n, r) {
  var a;
  return e == null ? ot(this, n, r).year : (a = _e(e, n, r), t > a && (t = a), mu.call(this, e, t, s, n, r));
}
function mu(e, t, s, n, r) {
  var a = Bn(e, t, s, n, r), i = it(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
w("Q", 0, "Qo", "quarter");
g("Q", An);
C("Q", function(e, t) {
  t[me] = (O(e) - 1) * 3;
});
function pu(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
w("D", ["DD", 2], "Do", "date");
g("D", A, Ge);
g("DD", A, Z);
g("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
C(["D", "DD"], ie);
C("Do", function(e, t) {
  t[ie] = O(e.match(A)[0]);
});
var pr = je("Date", !0);
w("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
g("DDD", Tt);
g("DDDD", In);
C(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = O(e);
});
function yu(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
w("m", ["mm", 2], 0, "minute");
g("m", A, Os);
g("mm", A, Z);
C(["m", "mm"], ee);
var _u = je("Minutes", !1);
w("s", ["ss", 2], 0, "second");
g("s", A, Os);
g("ss", A, Z);
C(["s", "ss"], pe);
var gu = je("Seconds", !1);
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
g("S", Tt, An);
g("SS", Tt, Z);
g("SSS", Tt, In);
var De, yr;
for (De = "SSSS"; De.length <= 9; De += "S")
  g(De, $e);
function vu(e, t) {
  t[Pe] = O(("0." + e) * 1e3);
}
for (De = "S"; De.length <= 9; De += "S")
  C(De, vu);
yr = je("Milliseconds", !1);
w("z", 0, 0, "zoneAbbr");
w("zz", 0, 0, "zoneName");
function wu() {
  return this._isUTC ? "UTC" : "";
}
function ku() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var m = ft.prototype;
m.add = hl;
m.calendar = wl;
m.clone = kl;
m.diff = bl;
m.endOf = Fl;
m.format = Nl;
m.from = Cl;
m.fromNow = El;
m.to = Wl;
m.toNow = Al;
m.get = Ti;
m.invalidAt = Bl;
m.isAfter = Sl;
m.isBefore = Ml;
m.isBetween = Dl;
m.isSame = Ol;
m.isSameOrAfter = Yl;
m.isSameOrBefore = Rl;
m.isValid = jl;
m.lang = ur;
m.locale = lr;
m.localeData = cr;
m.max = jo;
m.min = Go;
m.parsingFlags = zl;
m.set = xi;
m.startOf = Il;
m.subtract = ml;
m.toArray = Vl;
m.toObject = $l;
m.toDate = Hl;
m.toISOString = Tl;
m.inspect = xl;
typeof Symbol < "u" && Symbol.for != null && (m[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
m.toJSON = Gl;
m.toString = Pl;
m.unix = Ul;
m.valueOf = Ll;
m.creationData = ql;
m.eraName = Kl;
m.eraNarrow = Xl;
m.eraAbbr = eu;
m.eraYear = tu;
m.year = Un;
m.isLeapYear = Pi;
m.weekYear = lu;
m.isoWeekYear = uu;
m.quarter = m.quarters = pu;
m.month = jn;
m.daysInMonth = Ui;
m.week = m.weeks = qi;
m.isoWeek = m.isoWeeks = Zi;
m.weeksInYear = du;
m.weeksInWeekYear = hu;
m.isoWeeksInYear = cu;
m.isoWeeksInISOWeekYear = fu;
m.date = pr;
m.day = m.days = lo;
m.weekday = uo;
m.isoWeekday = co;
m.dayOfYear = yu;
m.hour = m.hours = go;
m.minute = m.minutes = _u;
m.second = m.seconds = gu;
m.millisecond = m.milliseconds = yr;
m.utcOffset = el;
m.utc = sl;
m.local = nl;
m.parseZone = rl;
m.hasAlignedHourOffset = al;
m.isDST = il;
m.isLocal = ll;
m.isUtcOffset = ul;
m.isUtc = rr;
m.isUTC = rr;
m.zoneAbbr = wu;
m.zoneName = ku;
m.dates = J(
  "dates accessor is deprecated. Use date instead.",
  pr
);
m.months = J(
  "months accessor is deprecated. Use month instead",
  jn
);
m.years = J(
  "years accessor is deprecated. Use year instead",
  Un
);
m.zone = J(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  tl
);
m.isDSTShifted = J(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  ol
);
function Su(e) {
  return W(e * 1e3);
}
function Mu() {
  return W.apply(null, arguments).parseZone();
}
function _r(e) {
  return e;
}
var x = ws.prototype;
x.calendar = oi;
x.longDateFormat = fi;
x.invalidDate = hi;
x.ordinal = yi;
x.preparse = _r;
x.postformat = _r;
x.relativeTime = gi;
x.pastFuture = vi;
x.set = ai;
x.eras = Zl;
x.erasParse = Ql;
x.erasConvertYear = Jl;
x.erasAbbrRegex = nu;
x.erasNameRegex = su;
x.erasNarrowRegex = ru;
x.months = Ai;
x.monthsShort = Ii;
x.monthsParse = Li;
x.monthsRegex = Vi;
x.monthsShortRegex = Hi;
x.week = Gi;
x.firstDayOfYear = Bi;
x.firstDayOfWeek = zi;
x.weekdays = no;
x.weekdaysMin = ao;
x.weekdaysShort = ro;
x.weekdaysParse = oo;
x.weekdaysRegex = fo;
x.weekdaysShortRegex = ho;
x.weekdaysMinRegex = mo;
x.isPM = yo;
x.meridiem = vo;
function Yt(e, t, s, n) {
  var r = ve(), a = le().set(n, t);
  return r[s](a, e);
}
function gr(e, t, s) {
  if (ge(e) && (t = e, e = void 0), e = e || "", t != null)
    return Yt(e, t, s, "month");
  var n, r = [];
  for (n = 0; n < 12; n++)
    r[n] = Yt(e, n, s, "month");
  return r;
}
function Fs(e, t, s, n) {
  typeof e == "boolean" ? (ge(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, ge(t) && (s = t, t = void 0), t = t || "");
  var r = ve(), a = e ? r._week.dow : 0, i, c = [];
  if (s != null)
    return Yt(t, (s + a) % 7, n, "day");
  for (i = 0; i < 7; i++)
    c[i] = Yt(t, (i + a) % 7, n, "day");
  return c;
}
function Du(e, t) {
  return gr(e, t, "months");
}
function Ou(e, t) {
  return gr(e, t, "monthsShort");
}
function Yu(e, t, s) {
  return Fs(e, t, s, "weekdays");
}
function Ru(e, t, s) {
  return Fs(e, t, s, "weekdaysShort");
}
function bu(e, t, s) {
  return Fs(e, t, s, "weekdaysMin");
}
Oe("en", {
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
    var t = e % 10, s = O(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
p.lang = J(
  "moment.lang is deprecated. Use moment.locale instead.",
  Oe
);
p.langData = J(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ve
);
var de = Math.abs;
function Pu() {
  var e = this._data;
  return this._milliseconds = de(this._milliseconds), this._days = de(this._days), this._months = de(this._months), e.milliseconds = de(e.milliseconds), e.seconds = de(e.seconds), e.minutes = de(e.minutes), e.hours = de(e.hours), e.months = de(e.months), e.years = de(e.years), this;
}
function vr(e, t, s, n) {
  var r = re(t, s);
  return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble();
}
function Tu(e, t) {
  return vr(this, e, t, 1);
}
function xu(e, t) {
  return vr(this, e, t, -1);
}
function gn(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Nu() {
  var e = this._milliseconds, t = this._days, s = this._months, n = this._data, r, a, i, c, l;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += gn(fs(s) + t) * 864e5, t = 0, s = 0), n.milliseconds = e % 1e3, r = Q(e / 1e3), n.seconds = r % 60, a = Q(r / 60), n.minutes = a % 60, i = Q(a / 60), n.hours = i % 24, t += Q(i / 24), l = Q(wr(t)), s += l, t -= gn(fs(l)), c = Q(s / 12), s %= 12, n.days = t, n.months = s, n.years = c, this;
}
function wr(e) {
  return e * 4800 / 146097;
}
function fs(e) {
  return e * 146097 / 4800;
}
function Cu(e) {
  if (!this.isValid())
    return NaN;
  var t, s, n = this._milliseconds;
  if (e = K(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, s = this._months + wr(t), e) {
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
var kr = we("ms"), Eu = we("s"), Wu = we("m"), Au = we("h"), Iu = we("d"), Fu = we("w"), Lu = we("M"), Uu = we("Q"), Hu = we("y"), Vu = kr;
function $u() {
  return re(this);
}
function Gu(e) {
  return e = K(e), this.isValid() ? this[e + "s"]() : NaN;
}
function xe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var ju = xe("milliseconds"), zu = xe("seconds"), Bu = xe("minutes"), qu = xe("hours"), Zu = xe("days"), Qu = xe("months"), Ju = xe("years");
function Ku() {
  return Q(this.days() / 7);
}
var he = Math.round, Ie = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function Xu(e, t, s, n, r) {
  return r.relativeTime(t || 1, !!s, e, n);
}
function ec(e, t, s, n) {
  var r = re(e).abs(), a = he(r.as("s")), i = he(r.as("m")), c = he(r.as("h")), l = he(r.as("d")), u = he(r.as("M")), o = he(r.as("w")), f = he(r.as("y")), h = a <= s.ss && ["s", a] || a < s.s && ["ss", a] || i <= 1 && ["m"] || i < s.m && ["mm", i] || c <= 1 && ["h"] || c < s.h && ["hh", c] || l <= 1 && ["d"] || l < s.d && ["dd", l];
  return s.w != null && (h = h || o <= 1 && ["w"] || o < s.w && ["ww", o]), h = h || u <= 1 && ["M"] || u < s.M && ["MM", u] || f <= 1 && ["y"] || ["yy", f], h[2] = t, h[3] = +e > 0, h[4] = n, Xu.apply(null, h);
}
function tc(e) {
  return e === void 0 ? he : typeof e == "function" ? (he = e, !0) : !1;
}
function sc(e, t) {
  return Ie[e] === void 0 ? !1 : t === void 0 ? Ie[e] : (Ie[e] = t, e === "s" && (Ie.ss = t - 1), !0);
}
function nc(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, n = Ie, r, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (n = Object.assign({}, Ie, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), r = this.localeData(), a = ec(this, !s, n, r), s && (a = r.pastFuture(+this, a)), r.postformat(a);
}
var Xt = Math.abs;
function Ce(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ft() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Xt(this._milliseconds) / 1e3, t = Xt(this._days), s = Xt(this._months), n, r, a, i, c = this.asSeconds(), l, u, o, f;
  return c ? (n = Q(e / 60), r = Q(n / 60), e %= 60, n %= 60, a = Q(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = c < 0 ? "-" : "", u = Ce(this._months) !== Ce(c) ? "-" : "", o = Ce(this._days) !== Ce(c) ? "-" : "", f = Ce(this._milliseconds) !== Ce(c) ? "-" : "", l + "P" + (a ? u + a + "Y" : "") + (s ? u + s + "M" : "") + (t ? o + t + "D" : "") + (r || n || e ? "T" : "") + (r ? f + r + "H" : "") + (n ? f + n + "M" : "") + (e ? f + i + "S" : "")) : "P0D";
}
var b = At.prototype;
b.isValid = Qo;
b.abs = Pu;
b.add = Tu;
b.subtract = xu;
b.as = Cu;
b.asMilliseconds = kr;
b.asSeconds = Eu;
b.asMinutes = Wu;
b.asHours = Au;
b.asDays = Iu;
b.asWeeks = Fu;
b.asMonths = Lu;
b.asQuarters = Uu;
b.asYears = Hu;
b.valueOf = Vu;
b._bubble = Nu;
b.clone = $u;
b.get = Gu;
b.milliseconds = ju;
b.seconds = zu;
b.minutes = Bu;
b.hours = qu;
b.days = Zu;
b.weeks = Ku;
b.months = Qu;
b.years = Ju;
b.humanize = nc;
b.toISOString = Ft;
b.toString = Ft;
b.toJSON = Ft;
b.locale = lr;
b.localeData = cr;
b.toIsoString = J(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ft
);
b.lang = ur;
w("X", 0, 0, "unix");
w("x", 0, 0, "valueOf");
g("x", Nt);
g("X", Mi);
C("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
C("x", function(e, t, s) {
  s._d = new Date(O(e));
});
//! moment.js
p.version = "2.30.1";
ni(W);
p.fn = m;
p.min = zo;
p.max = Bo;
p.now = qo;
p.utc = le;
p.unix = Su;
p.months = Du;
p.isDate = ct;
p.locale = Oe;
p.invalid = bt;
p.duration = re;
p.isMoment = ne;
p.weekdays = Yu;
p.parseZone = Mu;
p.localeData = ve;
p.isDuration = vt;
p.monthsShort = Ou;
p.weekdaysMin = bu;
p.defineLocale = Ts;
p.updateLocale = Mo;
p.locales = Do;
p.weekdaysShort = Ru;
p.normalizeUnits = K;
p.relativeTimeRounding = tc;
p.relativeTimeThreshold = sc;
p.calendarFormat = vl;
p.prototype = m;
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
const rc = ut({
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
        let n = new si();
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
});
const ac = { class: "text-start" }, ic = { class: "d-flex text-body-secondary pt-3" }, oc = /* @__PURE__ */ U("span", { class: "me-1" }, [
  /* @__PURE__ */ U("img", {
    src: " https://www.dinowilliam.com/lib/assets/logo.png",
    height: "16",
    width: "72",
    loading: "lazy"
  })
], -1), lc = { class: "pb-3 mb-0 small lh-sm" }, uc = { class: "h6" }, cc = { class: "badge rounded-pill text-bg-secondary" }, fc = ["href"], dc = {
  class: "pt-5",
  "aria-label": "Search Page navigation"
}, hc = { class: "pagination justify-content-center" }, mc = { class: "page-item" }, pc = ["onClick"], yc = { class: "page-item" };
function _c(e, t, s, n, r, a) {
  return be(), Ee("div", null, [
    (be(!0), Ee(Bs, null, qs(e.pageOfItems, (i, c) => (be(), Ee("div", ac, [
      U("div", ic, [
        oc,
        U("p", lc, [
          U("p", uc, [
            Zs(Ze(i.url) + " ", 1),
            U("span", cc, Ze(e.formatDate(i.date)), 1)
          ]),
          U("p", null, [
            U("a", {
              class: "h4",
              href: i.url
            }, Ze(i.title), 9, fc)
          ]),
          Zs(" " + Ze(i.description), 1)
        ])
      ])
    ]))), 256)),
    U("nav", dc, [
      U("ul", hc, [
        U("li", mc, [
          U("a", {
            class: zt(["page-link", { disabled: e.isPreviousDisabled }]),
            onClick: t[0] || (t[0] = (i) => e.onPageChange(e.previousPage))
          }, "Previous", 2)
        ]),
        (be(!0), Ee(Bs, null, qs(e.pagesPagination, (i) => (be(), Ee("li", {
          class: zt(["page-item", { active: i.isActive }])
        }, [
          U("a", {
            class: "page-link",
            onClick: (c) => e.onPageChange(i.pageNumber)
          }, Ze(i.pageNumber), 9, pc)
        ], 2))), 256)),
        U("li", yc, [
          U("a", {
            class: zt(["page-link", { disabled: e.isNextDisabled }]),
            onClick: t[1] || (t[1] = (i) => e.onPageChange(e.nextPage))
          }, "Next", 2)
        ])
      ])
    ])
  ]);
}
const gc = /* @__PURE__ */ ys(rc, [["render", _c]]), vc = [
  {
    path: "/Search",
    name: "SearchForm",
    component: ti
  },
  {
    path: "/SearchResults",
    name: "SearchResults",
    component: gc
  }
], wc = za({
  history: la(),
  routes: vc
}), kc = ut({
  name: "App"
});
function Sc(e, t, s, n, r, a) {
  const i = Ar("RouterView");
  return be(), Ir(i);
}
const Mc = /* @__PURE__ */ ys(kc, [["render", Sc]]), Ls = Fr(Mc);
Ls.mixin(Gr);
Ls.use(wc);
Ls.mount("#mainAppSearch");
//# sourceMappingURL=vueappsearch.js.mjs.map
