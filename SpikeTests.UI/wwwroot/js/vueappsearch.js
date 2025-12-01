var xs = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
import { shallowRef as As, defineComponent as ht, unref as st, shallowReactive as Cs, reactive as Is, inject as ot, computed as ue, h as Or, provide as Kt, ref as Ws, watch as Ls, nextTick as Fs, createElementBlock as Fe, openBlock as Ee, createElementVNode as V, withModifiers as Us, withDirectives as Vs, vModelText as Hs, Fragment as Jn, renderList as Kn, createTextVNode as Xn, toDisplayString as et, normalizeClass as Xt, resolveComponent as Gs, createBlock as js, createApp as Bs } from "vue";
var Nc = xs((xc, Yt) => {
  function zs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var wt = { exports: {} }, St = {}, kt = {}, er;
  function qs() {
    return er || (er = 1, Object.defineProperty(kt, "__esModule", {
      value: !0
    }), kt.default = {
      /**
       * Property to check that cookie polyfill was used
       */
      type: "cookie",
      keysCache: null,
      getItem: function(t) {
        return t && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
      },
      setItem: function(t, n, r) {
        var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "/", a = arguments[4], i = arguments[5];
        if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t))
          return !1;
        var l = "";
        if (r)
          switch (r.constructor) {
            case Number:
              l = r === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + r;
              break;
            case String:
              l = "; expires=" + r;
              break;
            case Date:
              l = "; expires=" + r.toUTCString();
              break;
          }
        return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(n) + l + (a ? "; domain=" + a : "") + (s ? "; path=" + s : "") + (i ? "; secure" : ""), this.keysCache = null, !0;
      },
      removeItem: function(t, n, r) {
        return this.hasItem(t) ? (document.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (r ? "; domain=" + r : "") + (n ? "; path=" + n : ""), this.keysCache = null, !0) : !1;
      },
      hasItem: function(t) {
        return !t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t) ? !1 : new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
      },
      keys: function() {
        for (var t = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), n = t.length, r = 0; r < n; r++)
          t[r] = decodeURIComponent(t[r]);
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
    }), kt;
  }
  var tr;
  function Zs() {
    if (tr) return St;
    tr = 1, Object.defineProperty(St, "__esModule", {
      value: !0
    });
    var e = qs(), t = n(e);
    function n(a) {
      return a && a.__esModule ? a : { default: a };
    }
    var r = void 0, s = function() {
      try {
        var i = "testvuels";
        return window.localStorage.setItem(i, "1"), window.localStorage.removeItem(i), !0;
      } catch {
        return !1;
      }
    };
    return s() ? r = window.localStorage : r = t.default, St.default = r, St;
  }
  var nr;
  function $s() {
    return nr || (nr = 1, (function(e, t) {
      var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
        return typeof u;
      } : function(u) {
        return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
      }, r = /* @__PURE__ */ (function() {
        function u(h, c) {
          for (var f = 0; f < c.length; f++) {
            var m = c[f];
            m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(h, m.key, m);
          }
        }
        return function(h, c, f) {
          return c && u(h.prototype, c), f && u(h, f), h;
        };
      })(), s = Zs(), a = i(s);
      function i(u) {
        return u && u.__esModule ? u : { default: u };
      }
      function l(u, h) {
        if (!(u instanceof h))
          throw new TypeError("Cannot call a class as a function");
      }
      var o = (function() {
        function u() {
          l(this, u), this.storage = a.default, this.clear();
        }
        return r(u, [{
          key: "install",
          value: function(c) {
            c.localStorage = c.prototype.$localStorage = this;
          }
        }, {
          key: "set",
          value: function(c, f) {
            var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, P = "vuels__" + c, E = JSON.stringify({ value: f, expire: m > 0 ? (/* @__PURE__ */ new Date()).getTime() + m : m });
            typeof this.storage.type < "u" && this.storage.type === "cookie" ? this.storage.setItem(P, E, m) : this.storage.setItem(P, E);
          }
        }, {
          key: "get",
          value: function(c) {
            var f = this.storage.getItem("vuels__" + c);
            return f !== null ? JSON.parse(f).value : null;
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
                var f = this.storage.key(c);
                if (/vuels__/i.test(f) !== !1) {
                  var m = JSON.parse(this.storage.getItem(f));
                  m.expire > 0 && m.expire < (/* @__PURE__ */ new Date()).getTime() && this.storage.removeItem(f);
                }
              }
          }
        }, {
          key: "length",
          get: function() {
            return this.storage.length;
          }
        }]), u;
      })();
      n(t) === "object" ? e.exports = new o() : window && window.Vue && window.Vue.use(new o());
    })(wt, wt.exports)), wt.exports;
  }
  var Qs = $s();
  const Js = /* @__PURE__ */ zs(Qs), Ue = typeof document < "u";
  function Rr(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function Ks(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Rr(e.default);
  }
  const x = Object.assign;
  function en(e, t) {
    const n = {};
    for (const r in t) {
      const s = t[r];
      n[r] = ae(s) ? s.map(e) : e(s);
    }
    return n;
  }
  const at = () => {
  }, ae = Array.isArray;
  function rr(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
  }
  const Pr = /#/g, Xs = /&/g, ea = /\//g, ta = /=/g, na = /\?/g, Yr = /\+/g, ra = /%5B/g, sa = /%5D/g, br = /%5E/g, aa = /%60/g, Nr = /%7B/g, ia = /%7C/g, Tr = /%7D/g, oa = /%20/g;
  function wn(e) {
    return e == null ? "" : encodeURI("" + e).replace(ia, "|").replace(ra, "[").replace(sa, "]");
  }
  function la(e) {
    return wn(e).replace(Nr, "{").replace(Tr, "}").replace(br, "^");
  }
  function un(e) {
    return wn(e).replace(Yr, "%2B").replace(oa, "+").replace(Pr, "%23").replace(Xs, "%26").replace(aa, "`").replace(Nr, "{").replace(Tr, "}").replace(br, "^");
  }
  function ua(e) {
    return un(e).replace(ta, "%3D");
  }
  function ca(e) {
    return wn(e).replace(Pr, "%23").replace(na, "%3F");
  }
  function fa(e) {
    return ca(e).replace(ea, "%2F");
  }
  function lt(e) {
    if (e == null) return null;
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const da = /\/$/, ha = (e) => e.replace(da, "");
  function tn(e, t, n = "/") {
    let r, s = {}, a = "", i = "";
    const l = t.indexOf("#");
    let o = t.indexOf("?");
    return o = l >= 0 && o > l ? -1 : o, o >= 0 && (r = t.slice(0, o), a = t.slice(o, l > 0 ? l : t.length), s = e(a.slice(1))), l >= 0 && (r = r || t.slice(0, l), i = t.slice(l, t.length)), r = ga(r ?? t, n), {
      fullPath: r + a + i,
      path: r,
      query: s,
      hash: lt(i)
    };
  }
  function ma(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function sr(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function pa(e, t, n) {
    const r = t.matched.length - 1, s = n.matched.length - 1;
    return r > -1 && r === s && ze(t.matched[r], n.matched[s]) && Er(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function ze(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function Er(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!ya(e[n], t[n])) return !1;
    return !0;
  }
  function ya(e, t) {
    return ae(e) ? ar(e, t) : ae(t) ? ar(t, e) : e === t;
  }
  function ar(e, t) {
    return ae(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
  }
  function ga(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), r = e.split("/"), s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let a = n.length - 1, i, l;
    for (i = 0; i < r.length; i++)
      if (l = r[i], l !== ".")
        if (l === "..")
          a > 1 && a--;
        else break;
    return n.slice(0, a).join("/") + "/" + r.slice(i).join("/");
  }
  const Oe = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  let cn = /* @__PURE__ */ (function(e) {
    return e.pop = "pop", e.push = "push", e;
  })({}), nn = /* @__PURE__ */ (function(e) {
    return e.back = "back", e.forward = "forward", e.unknown = "", e;
  })({});
  function _a(e) {
    if (!e) if (Ue) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ha(e);
  }
  const va = /^[^#]+#/;
  function wa(e, t) {
    return e.replace(va, "#") + t;
  }
  function Sa(e, t) {
    const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - n.left - (t.left || 0),
      top: r.top - n.top - (t.top || 0)
    };
  }
  const At = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function ka(e) {
    let t;
    if ("el" in e) {
      const n = e.el, r = typeof n == "string" && n.startsWith("#"), s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!s)
        return;
      t = Sa(s, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function ir(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const fn = /* @__PURE__ */ new Map();
  function Da(e, t) {
    fn.set(e, t);
  }
  function Ma(e) {
    const t = fn.get(e);
    return fn.delete(e), t;
  }
  function Oa(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function xr(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  let H = /* @__PURE__ */ (function(e) {
    return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
  })({});
  const Ar = Symbol("");
  H.MATCHER_NOT_FOUND + "", H.NAVIGATION_GUARD_REDIRECT + "", H.NAVIGATION_ABORTED + "", H.NAVIGATION_CANCELLED + "", H.NAVIGATION_DUPLICATED + "";
  function qe(e, t) {
    return x(/* @__PURE__ */ new Error(), {
      type: e,
      [Ar]: !0
    }, t);
  }
  function me(e, t) {
    return e instanceof Error && Ar in e && (t == null || !!(e.type & t));
  }
  const Ra = [
    "params",
    "query",
    "hash"
  ];
  function Pa(e) {
    if (typeof e == "string") return e;
    if (e.path != null) return e.path;
    const t = {};
    for (const n of Ra) n in e && (t[n] = e[n]);
    return JSON.stringify(t, null, 2);
  }
  function Ya(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < n.length; ++r) {
      const s = n[r].replace(Yr, " "), a = s.indexOf("="), i = lt(a < 0 ? s : s.slice(0, a)), l = a < 0 ? null : lt(s.slice(a + 1));
      if (i in t) {
        let o = t[i];
        ae(o) || (o = t[i] = [o]), o.push(l);
      } else t[i] = l;
    }
    return t;
  }
  function or(e) {
    let t = "";
    for (let n in e) {
      const r = e[n];
      if (n = ua(n), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (ae(r) ? r.map((s) => s && un(s)) : [r && un(r)]).forEach((s) => {
        s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
      });
    }
    return t;
  }
  function ba(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 && (t[n] = ae(r) ? r.map((s) => s == null ? null : "" + s) : r == null ? r : "" + r);
    }
    return t;
  }
  const Na = Symbol(""), lr = Symbol(""), Sn = Symbol(""), Cr = Symbol(""), dn = Symbol("");
  function tt() {
    let e = [];
    function t(r) {
      return e.push(r), () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      };
    }
    function n() {
      e = [];
    }
    return {
      add: t,
      list: () => e.slice(),
      reset: n
    };
  }
  function Re(e, t, n, r, s, a = (i) => i()) {
    const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise((l, o) => {
      const u = (f) => {
        f === !1 ? o(qe(H.NAVIGATION_ABORTED, {
          from: n,
          to: t
        })) : f instanceof Error ? o(f) : Oa(f) ? o(qe(H.NAVIGATION_GUARD_REDIRECT, {
          from: t,
          to: f
        })) : (i && r.enterCallbacks[s] === i && typeof f == "function" && i.push(f), l());
      }, h = a(() => e.call(r && r.instances[s], t, n, u));
      let c = Promise.resolve(h);
      e.length < 3 && (c = c.then(u)), c.catch((f) => o(f));
    });
  }
  function rn(e, t, n, r, s = (a) => a()) {
    const a = [];
    for (const i of e)
      for (const l in i.components) {
        let o = i.components[l];
        if (!(t !== "beforeRouteEnter" && !i.instances[l]))
          if (Rr(o)) {
            const u = (o.__vccOpts || o)[t];
            u && a.push(Re(u, n, r, i, l, s));
          } else {
            let u = o();
            a.push(() => u.then((h) => {
              if (!h) throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
              const c = Ks(h) ? h.default : h;
              i.mods[l] = h, i.components[l] = c;
              const f = (c.__vccOpts || c)[t];
              return f && Re(f, n, r, i, l, s)();
            }));
          }
      }
    return a;
  }
  function Ta(e, t) {
    const n = [], r = [], s = [], a = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < a; i++) {
      const l = t.matched[i];
      l && (e.matched.find((u) => ze(u, l)) ? r.push(l) : n.push(l));
      const o = e.matched[i];
      o && (t.matched.find((u) => ze(u, o)) || s.push(o));
    }
    return [
      n,
      r,
      s
    ];
  }
  let Ea = () => location.protocol + "//" + location.host;
  function Ir(e, t) {
    const { pathname: n, search: r, hash: s } = t, a = e.indexOf("#");
    if (a > -1) {
      let i = s.includes(e.slice(a)) ? e.slice(a).length : 1, l = s.slice(i);
      return l[0] !== "/" && (l = "/" + l), sr(l, "");
    }
    return sr(n, e) + r + s;
  }
  function xa(e, t, n, r) {
    let s = [], a = [], i = null;
    const l = ({ state: f }) => {
      const m = Ir(e, location), P = n.value, E = t.value;
      let F = 0;
      if (f) {
        if (n.value = m, t.value = f, i && i === P) {
          i = null;
          return;
        }
        F = E ? f.position - E.position : 0;
      } else r(m);
      s.forEach((U) => {
        U(n.value, P, {
          delta: F,
          type: cn.pop,
          direction: F ? F > 0 ? nn.forward : nn.back : nn.unknown
        });
      });
    };
    function o() {
      i = n.value;
    }
    function u(f) {
      s.push(f);
      const m = () => {
        const P = s.indexOf(f);
        P > -1 && s.splice(P, 1);
      };
      return a.push(m), m;
    }
    function h() {
      if (document.visibilityState === "hidden") {
        const { history: f } = window;
        if (!f.state) return;
        f.replaceState(x({}, f.state, { scroll: At() }), "");
      }
    }
    function c() {
      for (const f of a) f();
      a = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", h), document.removeEventListener("visibilitychange", h);
    }
    return window.addEventListener("popstate", l), window.addEventListener("pagehide", h), document.addEventListener("visibilitychange", h), {
      pauseListeners: o,
      listen: u,
      destroy: c
    };
  }
  function ur(e, t, n, r = !1, s = !1) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: s ? At() : null
    };
  }
  function Aa(e) {
    const { history: t, location: n } = window, r = { value: Ir(e, n) }, s = { value: t.state };
    s.value || a(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: t.length - 1,
      replaced: !0,
      scroll: null
    }, !0);
    function a(o, u, h) {
      const c = e.indexOf("#"), f = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + o : Ea() + e + o;
      try {
        t[h ? "replaceState" : "pushState"](u, "", f), s.value = u;
      } catch (m) {
        console.error(m), n[h ? "replace" : "assign"](f);
      }
    }
    function i(o, u) {
      a(o, x({}, t.state, ur(s.value.back, o, s.value.forward, !0), u, { position: s.value.position }), !0), r.value = o;
    }
    function l(o, u) {
      const h = x({}, s.value, t.state, {
        forward: o,
        scroll: At()
      });
      a(h.current, h, !0), a(o, x({}, ur(r.value, o, null), { position: h.position + 1 }, u), !1), r.value = o;
    }
    return {
      location: r,
      state: s,
      push: l,
      replace: i
    };
  }
  function Ca(e) {
    e = _a(e);
    const t = Aa(e), n = xa(e, t.state, t.location, t.replace);
    function r(a, i = !0) {
      i || n.pauseListeners(), history.go(a);
    }
    const s = x({
      location: "",
      base: e,
      go: r,
      createHref: wa.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
      enumerable: !0,
      get: () => t.location.value
    }), Object.defineProperty(s, "state", {
      enumerable: !0,
      get: () => t.state.value
    }), s;
  }
  let xe = /* @__PURE__ */ (function(e) {
    return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
  })({});
  var z = /* @__PURE__ */ (function(e) {
    return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
  })(z || {});
  const Ia = {
    type: xe.Static,
    value: ""
  }, Wa = /[a-zA-Z0-9_]/;
  function La(e) {
    if (!e) return [[]];
    if (e === "/") return [[Ia]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(m) {
      throw new Error(`ERR (${n})/"${u}": ${m}`);
    }
    let n = z.Static, r = n;
    const s = [];
    let a;
    function i() {
      a && s.push(a), a = [];
    }
    let l = 0, o, u = "", h = "";
    function c() {
      u && (n === z.Static ? a.push({
        type: xe.Static,
        value: u
      }) : n === z.Param || n === z.ParamRegExp || n === z.ParamRegExpEnd ? (a.length > 1 && (o === "*" || o === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), a.push({
        type: xe.Param,
        value: u,
        regexp: h,
        repeatable: o === "*" || o === "+",
        optional: o === "*" || o === "?"
      })) : t("Invalid state to consume buffer"), u = "");
    }
    function f() {
      u += o;
    }
    for (; l < e.length; ) {
      if (o = e[l++], o === "\\" && n !== z.ParamRegExp) {
        r = n, n = z.EscapeNext;
        continue;
      }
      switch (n) {
        case z.Static:
          o === "/" ? (u && c(), i()) : o === ":" ? (c(), n = z.Param) : f();
          break;
        case z.EscapeNext:
          f(), n = r;
          break;
        case z.Param:
          o === "(" ? n = z.ParamRegExp : Wa.test(o) ? f() : (c(), n = z.Static, o !== "*" && o !== "?" && o !== "+" && l--);
          break;
        case z.ParamRegExp:
          o === ")" ? h[h.length - 1] == "\\" ? h = h.slice(0, -1) + o : n = z.ParamRegExpEnd : h += o;
          break;
        case z.ParamRegExpEnd:
          c(), n = z.Static, o !== "*" && o !== "?" && o !== "+" && l--, h = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return n === z.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), c(), i(), s;
  }
  const cr = "[^/]+?", Fa = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  };
  var $ = /* @__PURE__ */ (function(e) {
    return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
  })($ || {});
  const Ua = /[.+*?^${}()[\]/\\]/g;
  function Va(e, t) {
    const n = x({}, Fa, t), r = [];
    let s = n.start ? "^" : "";
    const a = [];
    for (const u of e) {
      const h = u.length ? [] : [$.Root];
      n.strict && !u.length && (s += "/");
      for (let c = 0; c < u.length; c++) {
        const f = u[c];
        let m = $.Segment + (n.sensitive ? $.BonusCaseSensitive : 0);
        if (f.type === xe.Static)
          c || (s += "/"), s += f.value.replace(Ua, "\\$&"), m += $.Static;
        else if (f.type === xe.Param) {
          const { value: P, repeatable: E, optional: F, regexp: U } = f;
          a.push({
            name: P,
            repeatable: E,
            optional: F
          });
          const b = U || cr;
          if (b !== cr) {
            m += $.BonusCustomRegExp;
            try {
              `${b}`;
            } catch (re) {
              throw new Error(`Invalid custom RegExp for param "${P}" (${b}): ` + re.message);
            }
          }
          let C = E ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
          c || (C = F && u.length < 2 ? `(?:/${C})` : "/" + C), F && (C += "?"), s += C, m += $.Dynamic, F && (m += $.BonusOptional), E && (m += $.BonusRepeatable), b === ".*" && (m += $.BonusWildcard);
        }
        h.push(m);
      }
      r.push(h);
    }
    if (n.strict && n.end) {
      const u = r.length - 1;
      r[u][r[u].length - 1] += $.BonusStrict;
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
    const i = new RegExp(s, n.sensitive ? "" : "i");
    function l(u) {
      const h = u.match(i), c = {};
      if (!h) return null;
      for (let f = 1; f < h.length; f++) {
        const m = h[f] || "", P = a[f - 1];
        c[P.name] = m && P.repeatable ? m.split("/") : m;
      }
      return c;
    }
    function o(u) {
      let h = "", c = !1;
      for (const f of e) {
        (!c || !h.endsWith("/")) && (h += "/"), c = !1;
        for (const m of f) if (m.type === xe.Static) h += m.value;
        else if (m.type === xe.Param) {
          const { value: P, repeatable: E, optional: F } = m, U = P in u ? u[P] : "";
          if (ae(U) && !E) throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);
          const b = ae(U) ? U.join("/") : U;
          if (!b) if (F)
            f.length < 2 && (h.endsWith("/") ? h = h.slice(0, -1) : c = !0);
          else throw new Error(`Missing required param "${P}"`);
          h += b;
        }
      }
      return h || "/";
    }
    return {
      re: i,
      score: r,
      keys: a,
      parse: l,
      stringify: o
    };
  }
  function Ha(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const r = t[n] - e[n];
      if (r) return r;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === $.Static + $.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === $.Static + $.Segment ? 1 : -1 : 0;
  }
  function Wr(e, t) {
    let n = 0;
    const r = e.score, s = t.score;
    for (; n < r.length && n < s.length; ) {
      const a = Ha(r[n], s[n]);
      if (a) return a;
      n++;
    }
    if (Math.abs(s.length - r.length) === 1) {
      if (fr(r)) return 1;
      if (fr(s)) return -1;
    }
    return s.length - r.length;
  }
  function fr(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const Ga = {
    strict: !1,
    end: !0,
    sensitive: !1
  };
  function ja(e, t, n) {
    const r = Va(La(e.path), n), s = x(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
  }
  function Ba(e, t) {
    const n = [], r = /* @__PURE__ */ new Map();
    t = rr(Ga, t);
    function s(c) {
      return r.get(c);
    }
    function a(c, f, m) {
      const P = !m, E = hr(c);
      E.aliasOf = m && m.record;
      const F = rr(t, c), U = [E];
      if ("alias" in c) {
        const re = typeof c.alias == "string" ? [c.alias] : c.alias;
        for (const Ne of re) U.push(hr(x({}, E, {
          components: m ? m.record.components : E.components,
          path: Ne,
          aliasOf: m ? m.record : E
        })));
      }
      let b, C;
      for (const re of U) {
        const { path: Ne } = re;
        if (f && Ne[0] !== "/") {
          const Me = f.record.path, X = Me[Me.length - 1] === "/" ? "" : "/";
          re.path = f.record.path + (Ne && X + Ne);
        }
        if (b = ja(re, f, F), m ? m.alias.push(b) : (C = C || b, C !== b && C.alias.push(b), P && c.name && !mr(b) && i(c.name)), Lr(b) && o(b), E.children) {
          const Me = E.children;
          for (let X = 0; X < Me.length; X++) a(Me[X], b, m && m.children[X]);
        }
        m = m || b;
      }
      return C ? () => {
        i(C);
      } : at;
    }
    function i(c) {
      if (xr(c)) {
        const f = r.get(c);
        f && (r.delete(c), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
      } else {
        const f = n.indexOf(c);
        f > -1 && (n.splice(f, 1), c.record.name && r.delete(c.record.name), c.children.forEach(i), c.alias.forEach(i));
      }
    }
    function l() {
      return n;
    }
    function o(c) {
      const f = Za(c, n);
      n.splice(f, 0, c), c.record.name && !mr(c) && r.set(c.record.name, c);
    }
    function u(c, f) {
      let m, P = {}, E, F;
      if ("name" in c && c.name) {
        if (m = r.get(c.name), !m) throw qe(H.MATCHER_NOT_FOUND, { location: c });
        F = m.record.name, P = x(dr(f.params, m.keys.filter((C) => !C.optional).concat(m.parent ? m.parent.keys.filter((C) => C.optional) : []).map((C) => C.name)), c.params && dr(c.params, m.keys.map((C) => C.name))), E = m.stringify(P);
      } else if (c.path != null)
        E = c.path, m = n.find((C) => C.re.test(E)), m && (P = m.parse(E), F = m.record.name);
      else {
        if (m = f.name ? r.get(f.name) : n.find((C) => C.re.test(f.path)), !m) throw qe(H.MATCHER_NOT_FOUND, {
          location: c,
          currentLocation: f
        });
        F = m.record.name, P = x({}, f.params, c.params), E = m.stringify(P);
      }
      const U = [];
      let b = m;
      for (; b; )
        U.unshift(b.record), b = b.parent;
      return {
        name: F,
        path: E,
        params: P,
        matched: U,
        meta: qa(U)
      };
    }
    e.forEach((c) => a(c));
    function h() {
      n.length = 0, r.clear();
    }
    return {
      addRoute: a,
      resolve: u,
      removeRoute: i,
      clearRoutes: h,
      getRoutes: l,
      getRecordMatcher: s
    };
  }
  function dr(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
  }
  function hr(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: za(e),
      children: e.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in e ? e.components || null : e.component && { default: e.component }
    };
    return Object.defineProperty(t, "mods", { value: {} }), t;
  }
  function za(e) {
    const t = {}, n = e.props || !1;
    if ("component" in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t;
  }
  function mr(e) {
    for (; e; ) {
      if (e.record.aliasOf) return !0;
      e = e.parent;
    }
    return !1;
  }
  function qa(e) {
    return e.reduce((t, n) => x(t, n.meta), {});
  }
  function Za(e, t) {
    let n = 0, r = t.length;
    for (; n !== r; ) {
      const a = n + r >> 1;
      Wr(e, t[a]) < 0 ? r = a : n = a + 1;
    }
    const s = $a(e);
    return s && (r = t.lastIndexOf(s, r - 1)), r;
  }
  function $a(e) {
    let t = e;
    for (; t = t.parent; ) if (Lr(t) && Wr(e, t) === 0) return t;
  }
  function Lr({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
  }
  function pr(e) {
    const t = ot(Sn), n = ot(Cr), r = ue(() => {
      const o = st(e.to);
      return t.resolve(o);
    }), s = ue(() => {
      const { matched: o } = r.value, { length: u } = o, h = o[u - 1], c = n.matched;
      if (!h || !c.length) return -1;
      const f = c.findIndex(ze.bind(null, h));
      if (f > -1) return f;
      const m = yr(o[u - 2]);
      return u > 1 && yr(h) === m && c[c.length - 1].path !== m ? c.findIndex(ze.bind(null, o[u - 2])) : f;
    }), a = ue(() => s.value > -1 && ei(n.params, r.value.params)), i = ue(() => s.value > -1 && s.value === n.matched.length - 1 && Er(n.params, r.value.params));
    function l(o = {}) {
      if (Xa(o)) {
        const u = t[st(e.replace) ? "replace" : "push"](st(e.to)).catch(at);
        return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: ue(() => r.value.href),
      isActive: a,
      isExactActive: i,
      navigate: l
    };
  }
  function Qa(e) {
    return e.length === 1 ? e[0] : e;
  }
  const Ja = /* @__PURE__ */ ht({
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
      },
      viewTransition: Boolean
    },
    useLink: pr,
    setup(e, { slots: t }) {
      const n = Is(pr(e)), { options: r } = ot(Sn), s = ue(() => ({
        [gr(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        [gr(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const a = t.default && Qa(t.default(n));
        return e.custom ? a : Or("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: s.value
        }, a);
      };
    }
  }), Ka = Ja;
  function Xa(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return e.preventDefault && e.preventDefault(), !0;
    }
  }
  function ei(e, t) {
    for (const n in t) {
      const r = t[n], s = e[n];
      if (typeof r == "string") {
        if (r !== s) return !1;
      } else if (!ae(s) || s.length !== r.length || r.some((a, i) => a !== s[i])) return !1;
    }
    return !0;
  }
  function yr(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const gr = (e, t, n) => e ?? t ?? n, ti = /* @__PURE__ */ ht({
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
    setup(e, { attrs: t, slots: n }) {
      const r = ot(dn), s = ue(() => e.route || r.value), a = ot(lr, 0), i = ue(() => {
        let u = st(a);
        const { matched: h } = s.value;
        let c;
        for (; (c = h[u]) && !c.components; ) u++;
        return u;
      }), l = ue(() => s.value.matched[i.value]);
      Kt(lr, ue(() => i.value + 1)), Kt(Na, l), Kt(dn, s);
      const o = Ws();
      return Ls(() => [
        o.value,
        l.value,
        e.name
      ], ([u, h, c], [f, m, P]) => {
        h && (h.instances[c] = u, m && m !== h && u && u === f && (h.leaveGuards.size || (h.leaveGuards = m.leaveGuards), h.updateGuards.size || (h.updateGuards = m.updateGuards))), u && h && (!m || !ze(h, m) || !f) && (h.enterCallbacks[c] || []).forEach((E) => E(u));
      }, { flush: "post" }), () => {
        const u = s.value, h = e.name, c = l.value, f = c && c.components[h];
        if (!f) return _r(n.default, {
          Component: f,
          route: u
        });
        const m = c.props[h], P = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null, F = Or(f, x({}, P, t, {
          onVnodeUnmounted: (U) => {
            U.component.isUnmounted && (c.instances[h] = null);
          },
          ref: o
        }));
        return _r(n.default, {
          Component: F,
          route: u
        }) || F;
      };
    }
  });
  function _r(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const ni = ti;
  function ri(e) {
    const t = Ba(e.routes, e), n = e.parseQuery || Ya, r = e.stringifyQuery || or, s = e.history, a = tt(), i = tt(), l = tt(), o = As(Oe);
    let u = Oe;
    Ue && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const h = en.bind(null, (d) => "" + d), c = en.bind(null, fa), f = en.bind(null, lt);
    function m(d, v) {
      let g, S;
      return xr(d) ? (g = t.getRecordMatcher(d), S = v) : S = d, t.addRoute(S, g);
    }
    function P(d) {
      const v = t.getRecordMatcher(d);
      v && t.removeRoute(v);
    }
    function E() {
      return t.getRoutes().map((d) => d.record);
    }
    function F(d) {
      return !!t.getRecordMatcher(d);
    }
    function U(d, v) {
      if (v = x({}, v || o.value), typeof d == "string") {
        const D = tn(n, d, v.path), B = t.resolve({ path: D.path }, v), Xe = s.createHref(D.fullPath);
        return x(D, B, {
          params: f(B.params),
          hash: lt(D.hash),
          redirectedFrom: void 0,
          href: Xe
        });
      }
      let g;
      if (d.path != null)
        g = x({}, d, { path: tn(n, d.path, v.path).path });
      else {
        const D = x({}, d.params);
        for (const B in D) D[B] == null && delete D[B];
        g = x({}, d, { params: c(D) }), v.params = c(v.params);
      }
      const S = t.resolve(g, v), Y = d.hash || "";
      S.params = h(f(S.params));
      const j = ma(r, x({}, d, {
        hash: la(Y),
        path: S.path
      })), O = s.createHref(j);
      return x({
        fullPath: j,
        hash: Y,
        query: r === or ? ba(d.query) : d.query || {}
      }, S, {
        redirectedFrom: void 0,
        href: O
      });
    }
    function b(d) {
      return typeof d == "string" ? tn(n, d, o.value.path) : x({}, d);
    }
    function C(d, v) {
      if (u !== d) return qe(H.NAVIGATION_CANCELLED, {
        from: v,
        to: d
      });
    }
    function re(d) {
      return X(d);
    }
    function Ne(d) {
      return re(x(b(d), { replace: !0 }));
    }
    function Me(d, v) {
      const g = d.matched[d.matched.length - 1];
      if (g && g.redirect) {
        const { redirect: S } = g;
        let Y = typeof S == "function" ? S(d, v) : S;
        return typeof Y == "string" && (Y = Y.includes("?") || Y.includes("#") ? Y = b(Y) : { path: Y }, Y.params = {}), x({
          query: d.query,
          hash: d.hash,
          params: Y.path != null ? {} : d.params
        }, Y);
      }
    }
    function X(d, v) {
      const g = u = U(d), S = o.value, Y = d.state, j = d.force, O = d.replace === !0, D = Me(g, S);
      if (D) return X(x(b(D), {
        state: typeof D == "object" ? x({}, Y, D.state) : Y,
        force: j,
        replace: O
      }), v || g);
      const B = g;
      B.redirectedFrom = v;
      let Xe;
      return !j && pa(r, S, g) && (Xe = qe(H.NAVIGATION_DUPLICATED, {
        to: B,
        from: S
      }), Qn(S, S, !0, !1)), (Xe ? Promise.resolve(Xe) : zn(B, S)).catch((Q) => me(Q) ? me(Q, H.NAVIGATION_GUARD_REDIRECT) ? Q : $t(Q) : Zt(Q, B, S)).then((Q) => {
        if (Q) {
          if (me(Q, H.NAVIGATION_GUARD_REDIRECT))
            return X(x({ replace: O }, b(Q.to), {
              state: typeof Q.to == "object" ? x({}, Y, Q.to.state) : Y,
              force: j
            }), v || B);
        } else Q = Zn(B, S, !0, O, Y);
        return qn(B, S, Q), Q;
      });
    }
    function Ns(d, v) {
      const g = C(d, v);
      return g ? Promise.reject(g) : Promise.resolve();
    }
    function zt(d) {
      const v = vt.values().next().value;
      return v && typeof v.runWithContext == "function" ? v.runWithContext(d) : d();
    }
    function zn(d, v) {
      let g;
      const [S, Y, j] = Ta(d, v);
      g = rn(S.reverse(), "beforeRouteLeave", d, v);
      for (const D of S) D.leaveGuards.forEach((B) => {
        g.push(Re(B, d, v));
      });
      const O = Ns.bind(null, d, v);
      return g.push(O), We(g).then(() => {
        g = [];
        for (const D of a.list()) g.push(Re(D, d, v));
        return g.push(O), We(g);
      }).then(() => {
        g = rn(Y, "beforeRouteUpdate", d, v);
        for (const D of Y) D.updateGuards.forEach((B) => {
          g.push(Re(B, d, v));
        });
        return g.push(O), We(g);
      }).then(() => {
        g = [];
        for (const D of j) if (D.beforeEnter) if (ae(D.beforeEnter)) for (const B of D.beforeEnter) g.push(Re(B, d, v));
        else g.push(Re(D.beforeEnter, d, v));
        return g.push(O), We(g);
      }).then(() => (d.matched.forEach((D) => D.enterCallbacks = {}), g = rn(j, "beforeRouteEnter", d, v, zt), g.push(O), We(g))).then(() => {
        g = [];
        for (const D of i.list()) g.push(Re(D, d, v));
        return g.push(O), We(g);
      }).catch((D) => me(D, H.NAVIGATION_CANCELLED) ? D : Promise.reject(D));
    }
    function qn(d, v, g) {
      l.list().forEach((S) => zt(() => S(d, v, g)));
    }
    function Zn(d, v, g, S, Y) {
      const j = C(d, v);
      if (j) return j;
      const O = v === Oe, D = Ue ? history.state : {};
      g && (S || O ? s.replace(d.fullPath, x({ scroll: O && D && D.scroll }, Y)) : s.push(d.fullPath, Y)), o.value = d, Qn(d, v, g, O), $t();
    }
    let Je;
    function Ts() {
      Je || (Je = s.listen((d, v, g) => {
        if (!Ke.listening) return;
        const S = U(d), Y = Me(S, Ke.currentRoute.value);
        if (Y) {
          X(x(Y, {
            replace: !0,
            force: !0
          }), S).catch(at);
          return;
        }
        u = S;
        const j = o.value;
        Ue && Da(ir(j.fullPath, g.delta), At()), zn(S, j).catch((O) => me(O, H.NAVIGATION_ABORTED | H.NAVIGATION_CANCELLED) ? O : me(O, H.NAVIGATION_GUARD_REDIRECT) ? (X(x(b(O.to), { force: !0 }), S).then((D) => {
          me(D, H.NAVIGATION_ABORTED | H.NAVIGATION_DUPLICATED) && !g.delta && g.type === cn.pop && s.go(-1, !1);
        }).catch(at), Promise.reject()) : (g.delta && s.go(-g.delta, !1), Zt(O, S, j))).then((O) => {
          O = O || Zn(S, j, !1), O && (g.delta && !me(O, H.NAVIGATION_CANCELLED) ? s.go(-g.delta, !1) : g.type === cn.pop && me(O, H.NAVIGATION_ABORTED | H.NAVIGATION_DUPLICATED) && s.go(-1, !1)), qn(S, j, O);
        }).catch(at);
      }));
    }
    let qt = tt(), $n = tt(), _t;
    function Zt(d, v, g) {
      $t(d);
      const S = $n.list();
      return S.length ? S.forEach((Y) => Y(d, v, g)) : console.error(d), Promise.reject(d);
    }
    function Es() {
      return _t && o.value !== Oe ? Promise.resolve() : new Promise((d, v) => {
        qt.add([d, v]);
      });
    }
    function $t(d) {
      return _t || (_t = !d, Ts(), qt.list().forEach(([v, g]) => d ? g(d) : v()), qt.reset()), d;
    }
    function Qn(d, v, g, S) {
      const { scrollBehavior: Y } = e;
      if (!Ue || !Y) return Promise.resolve();
      const j = !g && Ma(ir(d.fullPath, 0)) || (S || !g) && history.state && history.state.scroll || null;
      return Fs().then(() => Y(d, v, j)).then((O) => O && ka(O)).catch((O) => Zt(O, d, v));
    }
    const Qt = (d) => s.go(d);
    let Jt;
    const vt = /* @__PURE__ */ new Set(), Ke = {
      currentRoute: o,
      listening: !0,
      addRoute: m,
      removeRoute: P,
      clearRoutes: t.clearRoutes,
      hasRoute: F,
      getRoutes: E,
      resolve: U,
      options: e,
      push: re,
      replace: Ne,
      go: Qt,
      back: () => Qt(-1),
      forward: () => Qt(1),
      beforeEach: a.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: $n.add,
      isReady: Es,
      install(d) {
        d.component("RouterLink", Ka), d.component("RouterView", ni), d.config.globalProperties.$router = Ke, Object.defineProperty(d.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => st(o)
        }), Ue && !Jt && o.value === Oe && (Jt = !0, re(s.location).catch((S) => {
        }));
        const v = {};
        for (const S in Oe) Object.defineProperty(v, S, {
          get: () => o.value[S],
          enumerable: !0
        });
        d.provide(Sn, Ke), d.provide(Cr, Cs(v)), d.provide(dn, o);
        const g = d.unmount;
        vt.add(d), d.unmount = function() {
          vt.delete(d), vt.size < 1 && (u = Oe, Je && Je(), Je = null, o.value = Oe, Jt = !1, _t = !1), g();
        };
      }
    };
    function We(d) {
      return d.reduce((v, g) => v.then(() => zt(g)), Promise.resolve());
    }
    return Ke;
  }
  const si = ht({
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
        console.log(prompt), this.dataResponse = await fetch("https://localhost:44354/Search", t).then((n) => n.json()).then((n) => n), localStorage.clear(), localStorage.setItem("searchResult", JSON.stringify(this.dataResponse)), console.log(this.dataResponse), this.$router.push({
          name: "SearchResults"
        });
      }
    }
  }), kn = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t)
      n[r] = s;
    return n;
  }, ai = { class: "container-fluid mt-5" }, ii = { class: "input-group pt-5 mb-3" };
  function oi(e, t, n, r, s, a) {
    return Ee(), Fe("div", ai, [
      t[3] || (t[3] = V("div", { class: "pt-5 pb-5" }, null, -1)),
      t[4] || (t[4] = V("div", {
        class: "mt-5",
        id: "logo"
      }, [
        V("img", { src: "/img/lucene-net-color.png" })
      ], -1)),
      V("form", {
        onSubmit: t[1] || (t[1] = Us((...i) => e.sendSearch && e.sendSearch(...i), ["prevent"]))
      }, [
        V("div", ii, [
          Vs(V("input", {
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
            [Hs, e.prompt]
          ])
        ]),
        t[2] || (t[2] = V("button", {
          type: "submit",
          class: "btn btn-lg btn-dark col-md-4"
        }, "Search", -1))
      ], 32)
    ]);
  }
  const li = /* @__PURE__ */ kn(si, [["render", oi]]);
  class ui {
  }
  var Fr;
  function y() {
    return Fr.apply(null, arguments);
  }
  function ci(e) {
    Fr = e;
  }
  function ie(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
  }
  function Ce(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function N(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function Dn(e) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
      if (N(e, t))
        return !1;
    return !0;
  }
  function J(e) {
    return e === void 0;
  }
  function Se(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
  }
  function mt(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  }
  function Ur(e, t) {
    var n = [], r, s = e.length;
    for (r = 0; r < s; ++r)
      n.push(t(e[r], r));
    return n;
  }
  function Pe(e, t) {
    for (var n in t)
      N(t, n) && (e[n] = t[n]);
    return N(t, "toString") && (e.toString = t.toString), N(t, "valueOf") && (e.valueOf = t.valueOf), e;
  }
  function de(e, t, n, r) {
    return us(e, t, n, r, !0).utc();
  }
  function fi() {
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
    return e._pf == null && (e._pf = fi()), e._pf;
  }
  var hn;
  Array.prototype.some ? hn = Array.prototype.some : hn = function(e) {
    var t = Object(this), n = t.length >>> 0, r;
    for (r = 0; r < n; r++)
      if (r in t && e.call(this, t[r], r, t))
        return !0;
    return !1;
  };
  function Mn(e) {
    var t = null, n = !1, r = e._d && !isNaN(e._d.getTime());
    if (r && (t = k(e), n = hn.call(t.parsedDateParts, function(s) {
      return s != null;
    }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
    return e._isValid;
  }
  function Ct(e) {
    var t = de(NaN);
    return e != null ? Pe(k(t), e) : k(t).userInvalidated = !0, t;
  }
  var vr = y.momentProperties = [], sn = !1;
  function On(e, t) {
    var n, r, s, a = vr.length;
    if (J(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), J(t._i) || (e._i = t._i), J(t._f) || (e._f = t._f), J(t._l) || (e._l = t._l), J(t._strict) || (e._strict = t._strict), J(t._tzm) || (e._tzm = t._tzm), J(t._isUTC) || (e._isUTC = t._isUTC), J(t._offset) || (e._offset = t._offset), J(t._pf) || (e._pf = k(t)), J(t._locale) || (e._locale = t._locale), a > 0)
      for (n = 0; n < a; n++)
        r = vr[n], s = t[r], J(s) || (e[r] = s);
    return e;
  }
  function pt(e) {
    On(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), sn === !1 && (sn = !0, y.updateOffset(this), sn = !1);
  }
  function oe(e) {
    return e instanceof pt || e != null && e._isAMomentObject != null;
  }
  function Vr(e) {
    y.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
  }
  function te(e, t) {
    var n = !0;
    return Pe(function() {
      if (y.deprecationHandler != null && y.deprecationHandler(null, e), n) {
        var r = [], s, a, i, l = arguments.length;
        for (a = 0; a < l; a++) {
          if (s = "", typeof arguments[a] == "object") {
            s += `
[` + a + "] ";
            for (i in arguments[0])
              N(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
            s = s.slice(0, -2);
          } else
            s = arguments[a];
          r.push(s);
        }
        Vr(
          e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
        ), n = !1;
      }
      return t.apply(this, arguments);
    }, t);
  }
  var wr = {};
  function Hr(e, t) {
    y.deprecationHandler != null && y.deprecationHandler(e, t), wr[e] || (Vr(t), wr[e] = !0);
  }
  y.suppressDeprecationWarnings = !1;
  y.deprecationHandler = null;
  function he(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
  }
  function di(e) {
    var t, n;
    for (n in e)
      N(e, n) && (t = e[n], he(t) ? this[n] = t : this["_" + n] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function mn(e, t) {
    var n = Pe({}, e), r;
    for (r in t)
      N(t, r) && (Ce(e[r]) && Ce(t[r]) ? (n[r] = {}, Pe(n[r], e[r]), Pe(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
    for (r in e)
      N(e, r) && !N(t, r) && Ce(e[r]) && (n[r] = Pe({}, n[r]));
    return n;
  }
  function Rn(e) {
    e != null && this.set(e);
  }
  var pn;
  Object.keys ? pn = Object.keys : pn = function(e) {
    var t, n = [];
    for (t in e)
      N(e, t) && n.push(t);
    return n;
  };
  var hi = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function mi(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return he(r) ? r.call(t, n) : r;
  }
  function fe(e, t, n) {
    var r = "" + Math.abs(e), s = t - r.length, a = e >= 0;
    return (a ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + r;
  }
  var Pn = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Dt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, an = {}, Ge = {};
  function w(e, t, n, r) {
    var s = r;
    typeof r == "string" && (s = function() {
      return this[r]();
    }), e && (Ge[e] = s), t && (Ge[t[0]] = function() {
      return fe(s.apply(this, arguments), t[1], t[2]);
    }), n && (Ge[n] = function() {
      return this.localeData().ordinal(
        s.apply(this, arguments),
        e
      );
    });
  }
  function pi(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
  }
  function yi(e) {
    var t = e.match(Pn), n, r;
    for (n = 0, r = t.length; n < r; n++)
      Ge[t[n]] ? t[n] = Ge[t[n]] : t[n] = pi(t[n]);
    return function(s) {
      var a = "", i;
      for (i = 0; i < r; i++)
        a += he(t[i]) ? t[i].call(s, e) : t[i];
      return a;
    };
  }
  function Ot(e, t) {
    return e.isValid() ? (t = Gr(t, e.localeData()), an[t] = an[t] || yi(t), an[t](e)) : e.localeData().invalidDate();
  }
  function Gr(e, t) {
    var n = 5;
    function r(s) {
      return t.longDateFormat(s) || s;
    }
    for (Dt.lastIndex = 0; n >= 0 && Dt.test(e); )
      e = e.replace(
        Dt,
        r
      ), Dt.lastIndex = 0, n -= 1;
    return e;
  }
  var gi = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function _i(e) {
    var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
    return t || !n ? t : (this._longDateFormat[e] = n.match(Pn).map(function(r) {
      return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
    }).join(""), this._longDateFormat[e]);
  }
  var vi = "Invalid date";
  function wi() {
    return this._invalidDate;
  }
  var Si = "%d", ki = /\d{1,2}/;
  function Di(e) {
    return this._ordinal.replace("%d", e);
  }
  var Mi = {
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
  function Oi(e, t, n, r) {
    var s = this._relativeTime[n];
    return he(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
  }
  function Ri(e, t) {
    var n = this._relativeTime[e > 0 ? "future" : "past"];
    return he(n) ? n(t) : n.replace(/%s/i, t);
  }
  var Sr = {
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
  function ne(e) {
    return typeof e == "string" ? Sr[e] || Sr[e.toLowerCase()] : void 0;
  }
  function Yn(e) {
    var t = {}, n, r;
    for (r in e)
      N(e, r) && (n = ne(r), n && (t[n] = e[r]));
    return t;
  }
  var Pi = {
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
  function Yi(e) {
    var t = [], n;
    for (n in e)
      N(e, n) && t.push({ unit: n, priority: Pi[n] });
    return t.sort(function(r, s) {
      return r.priority - s.priority;
    }), t;
  }
  var jr = /\d/, K = /\d\d/, Br = /\d{3}/, bn = /\d{4}/, It = /[+-]?\d{6}/, W = /\d\d?/, zr = /\d\d\d\d?/, qr = /\d\d\d\d\d\d?/, Wt = /\d{1,3}/, Nn = /\d{1,4}/, Lt = /[+-]?\d{1,6}/, Ze = /\d+/, Ft = /[+-]?\d+/, bi = /Z|[+-]\d\d:?\d\d/gi, Ut = /Z|[+-]\d\d(?::?\d\d)?/gi, Ni = /[+-]?\d+(\.\d{1,3})?/, yt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, $e = /^[1-9]\d?/, Tn = /^([1-9]\d|\d)/, bt;
  bt = {};
  function _(e, t, n) {
    bt[e] = he(t) ? t : function(r, s) {
      return r && n ? n : t;
    };
  }
  function Ti(e, t) {
    return N(bt, e) ? bt[e](t._strict, t._locale) : new RegExp(Ei(e));
  }
  function Ei(e) {
    return ve(
      e.replace("\\", "").replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(t, n, r, s, a) {
          return n || r || s || a;
        }
      )
    );
  }
  function ve(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function ee(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function M(e) {
    var t = +e, n = 0;
    return t !== 0 && isFinite(t) && (n = ee(t)), n;
  }
  var yn = {};
  function A(e, t) {
    var n, r = t, s;
    for (typeof e == "string" && (e = [e]), Se(t) && (r = function(a, i) {
      i[t] = M(a);
    }), s = e.length, n = 0; n < s; n++)
      yn[e[n]] = r;
  }
  function gt(e, t) {
    A(e, function(n, r, s, a) {
      s._w = s._w || {}, t(n, s._w, s, a);
    });
  }
  function xi(e, t, n) {
    t != null && N(yn, e) && yn[e](t, n._a, n, e);
  }
  function Vt(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
  }
  var Z = 0, ge = 1, ce = 2, q = 3, se = 4, _e = 5, Ae = 6, Ai = 7, Ci = 8;
  w("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? fe(e, 4) : "+" + e;
  });
  w(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  w(0, ["YYYY", 4], 0, "year");
  w(0, ["YYYYY", 5], 0, "year");
  w(0, ["YYYYYY", 6, !0], 0, "year");
  _("Y", Ft);
  _("YY", W, K);
  _("YYYY", Nn, bn);
  _("YYYYY", Lt, It);
  _("YYYYYY", Lt, It);
  A(["YYYYY", "YYYYYY"], Z);
  A("YYYY", function(e, t) {
    t[Z] = e.length === 2 ? y.parseTwoDigitYear(e) : M(e);
  });
  A("YY", function(e, t) {
    t[Z] = y.parseTwoDigitYear(e);
  });
  A("Y", function(e, t) {
    t[Z] = parseInt(e, 10);
  });
  function it(e) {
    return Vt(e) ? 366 : 365;
  }
  y.parseTwoDigitYear = function(e) {
    return M(e) + (M(e) > 68 ? 1900 : 2e3);
  };
  var Zr = Qe("FullYear", !0);
  function Ii() {
    return Vt(this.year());
  }
  function Qe(e, t) {
    return function(n) {
      return n != null ? ($r(this, e, n), y.updateOffset(this, t), this) : ut(this, e);
    };
  }
  function ut(e, t) {
    if (!e.isValid())
      return NaN;
    var n = e._d, r = e._isUTC;
    switch (t) {
      case "Milliseconds":
        return r ? n.getUTCMilliseconds() : n.getMilliseconds();
      case "Seconds":
        return r ? n.getUTCSeconds() : n.getSeconds();
      case "Minutes":
        return r ? n.getUTCMinutes() : n.getMinutes();
      case "Hours":
        return r ? n.getUTCHours() : n.getHours();
      case "Date":
        return r ? n.getUTCDate() : n.getDate();
      case "Day":
        return r ? n.getUTCDay() : n.getDay();
      case "Month":
        return r ? n.getUTCMonth() : n.getMonth();
      case "FullYear":
        return r ? n.getUTCFullYear() : n.getFullYear();
      default:
        return NaN;
    }
  }
  function $r(e, t, n) {
    var r, s, a, i, l;
    if (!(!e.isValid() || isNaN(n))) {
      switch (r = e._d, s = e._isUTC, t) {
        case "Milliseconds":
          return void (s ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
        case "Seconds":
          return void (s ? r.setUTCSeconds(n) : r.setSeconds(n));
        case "Minutes":
          return void (s ? r.setUTCMinutes(n) : r.setMinutes(n));
        case "Hours":
          return void (s ? r.setUTCHours(n) : r.setHours(n));
        case "Date":
          return void (s ? r.setUTCDate(n) : r.setDate(n));
        // case 'Day': // Not real
        //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
        // case 'Month': // Not used because we need to pass two variables
        //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
        case "FullYear":
          break;
        // See below ...
        default:
          return;
      }
      a = n, i = e.month(), l = e.date(), l = l === 29 && i === 1 && !Vt(a) ? 28 : l, s ? r.setUTCFullYear(a, i, l) : r.setFullYear(a, i, l);
    }
  }
  function Wi(e) {
    return e = ne(e), he(this[e]) ? this[e]() : this;
  }
  function Li(e, t) {
    if (typeof e == "object") {
      e = Yn(e);
      var n = Yi(e), r, s = n.length;
      for (r = 0; r < s; r++)
        this[n[r].unit](e[n[r].unit]);
    } else if (e = ne(e), he(this[e]))
      return this[e](t);
    return this;
  }
  function Fi(e, t) {
    return (e % t + t) % t;
  }
  var G;
  Array.prototype.indexOf ? G = Array.prototype.indexOf : G = function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
      if (this[t] === e)
        return t;
    return -1;
  };
  function En(e, t) {
    if (isNaN(e) || isNaN(t))
      return NaN;
    var n = Fi(t, 12);
    return e += (t - n) / 12, n === 1 ? Vt(e) ? 29 : 28 : 31 - n % 7 % 2;
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
  _("M", W, $e);
  _("MM", W, K);
  _("MMM", function(e, t) {
    return t.monthsShortRegex(e);
  });
  _("MMMM", function(e, t) {
    return t.monthsRegex(e);
  });
  A(["M", "MM"], function(e, t) {
    t[ge] = M(e) - 1;
  });
  A(["MMM", "MMMM"], function(e, t, n, r) {
    var s = n._locale.monthsParse(e, r, n._strict);
    s != null ? t[ge] = s : k(n).invalidMonth = e;
  });
  var Ui = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  ), Qr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Jr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Vi = yt, Hi = yt;
  function Gi(e, t) {
    return e ? ie(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Jr).test(t) ? "format" : "standalone"][e.month()] : ie(this._months) ? this._months : this._months.standalone;
  }
  function ji(e, t) {
    return e ? ie(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Jr.test(t) ? "format" : "standalone"][e.month()] : ie(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }
  function Bi(e, t, n) {
    var r, s, a, i = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
        a = de([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
          a,
          ""
        ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
    return n ? t === "MMM" ? (s = G.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = G.call(this._longMonthsParse, i), s !== -1 ? s : null) : t === "MMM" ? (s = G.call(this._shortMonthsParse, i), s !== -1 ? s : (s = G.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = G.call(this._longMonthsParse, i), s !== -1 ? s : (s = G.call(this._shortMonthsParse, i), s !== -1 ? s : null));
  }
  function zi(e, t, n) {
    var r, s, a;
    if (this._monthsParseExact)
      return Bi.call(this, e, t, n);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
      if (s = de([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
        "^" + this.months(s, "").replace(".", "") + "$",
        "i"
      ), this._shortMonthsParse[r] = new RegExp(
        "^" + this.monthsShort(s, "").replace(".", "") + "$",
        "i"
      )), !n && !this._monthsParse[r] && (a = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
        return r;
      if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
        return r;
      if (!n && this._monthsParse[r].test(e))
        return r;
    }
  }
  function Kr(e, t) {
    if (!e.isValid())
      return e;
    if (typeof t == "string") {
      if (/^\d+$/.test(t))
        t = M(t);
      else if (t = e.localeData().monthsParse(t), !Se(t))
        return e;
    }
    var n = t, r = e.date();
    return r = r < 29 ? r : Math.min(r, En(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r), e;
  }
  function Xr(e) {
    return e != null ? (Kr(this, e), y.updateOffset(this, !0), this) : ut(this, "Month");
  }
  function qi() {
    return En(this.year(), this.month());
  }
  function Zi(e) {
    return this._monthsParseExact ? (N(this, "_monthsRegex") || es.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (N(this, "_monthsShortRegex") || (this._monthsShortRegex = Vi), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }
  function $i(e) {
    return this._monthsParseExact ? (N(this, "_monthsRegex") || es.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (N(this, "_monthsRegex") || (this._monthsRegex = Hi), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }
  function es() {
    function e(o, u) {
      return u.length - o.length;
    }
    var t = [], n = [], r = [], s, a, i, l;
    for (s = 0; s < 12; s++)
      a = de([2e3, s]), i = ve(this.monthsShort(a, "")), l = ve(this.months(a, "")), t.push(i), n.push(l), r.push(l), r.push(i);
    t.sort(e), n.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    ), this._monthsShortStrictRegex = new RegExp(
      "^(" + t.join("|") + ")",
      "i"
    );
  }
  function Qi(e, t, n, r, s, a, i) {
    var l;
    return e < 100 && e >= 0 ? (l = new Date(e + 400, t, n, r, s, a, i), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, n, r, s, a, i), l;
  }
  function ct(e) {
    var t, n;
    return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
  }
  function Nt(e, t, n) {
    var r = 7 + t - n, s = (7 + ct(e, 0, r).getUTCDay() - t) % 7;
    return -s + r - 1;
  }
  function ts(e, t, n, r, s) {
    var a = (7 + n - r) % 7, i = Nt(e, r, s), l = 1 + 7 * (t - 1) + a + i, o, u;
    return l <= 0 ? (o = e - 1, u = it(o) + l) : l > it(e) ? (o = e + 1, u = l - it(e)) : (o = e, u = l), {
      year: o,
      dayOfYear: u
    };
  }
  function ft(e, t, n) {
    var r = Nt(e.year(), t, n), s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, a, i;
    return s < 1 ? (i = e.year() - 1, a = s + we(i, t, n)) : s > we(e.year(), t, n) ? (a = s - we(e.year(), t, n), i = e.year() + 1) : (i = e.year(), a = s), {
      week: a,
      year: i
    };
  }
  function we(e, t, n) {
    var r = Nt(e, t, n), s = Nt(e + 1, t, n);
    return (it(e) - r + s) / 7;
  }
  w("w", ["ww", 2], "wo", "week");
  w("W", ["WW", 2], "Wo", "isoWeek");
  _("w", W, $e);
  _("ww", W, K);
  _("W", W, $e);
  _("WW", W, K);
  gt(
    ["w", "ww", "W", "WW"],
    function(e, t, n, r) {
      t[r.substr(0, 1)] = M(e);
    }
  );
  function Ji(e) {
    return ft(e, this._week.dow, this._week.doy).week;
  }
  var Ki = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 6th is the first week of the year.
  };
  function Xi() {
    return this._week.dow;
  }
  function eo() {
    return this._week.doy;
  }
  function to(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  function no(e) {
    var t = ft(this, 1, 4).week;
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
  _("d", W);
  _("e", W);
  _("E", W);
  _("dd", function(e, t) {
    return t.weekdaysMinRegex(e);
  });
  _("ddd", function(e, t) {
    return t.weekdaysShortRegex(e);
  });
  _("dddd", function(e, t) {
    return t.weekdaysRegex(e);
  });
  gt(["dd", "ddd", "dddd"], function(e, t, n, r) {
    var s = n._locale.weekdaysParse(e, r, n._strict);
    s != null ? t.d = s : k(n).invalidWeekday = e;
  });
  gt(["d", "e", "E"], function(e, t, n, r) {
    t[r] = M(e);
  });
  function ro(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
  }
  function so(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
  }
  function xn(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  var ao = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ns = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), io = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), oo = yt, lo = yt, uo = yt;
  function co(e, t) {
    var n = ie(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? xn(n, this._week.dow) : e ? n[e.day()] : n;
  }
  function fo(e) {
    return e === !0 ? xn(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }
  function ho(e) {
    return e === !0 ? xn(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }
  function mo(e, t, n) {
    var r, s, a, i = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
        a = de([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
          a,
          ""
        ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
          a,
          ""
        ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
    return n ? t === "dddd" ? (s = G.call(this._weekdaysParse, i), s !== -1 ? s : null) : t === "ddd" ? (s = G.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = G.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : t === "dddd" ? (s = G.call(this._weekdaysParse, i), s !== -1 || (s = G.call(this._shortWeekdaysParse, i), s !== -1) ? s : (s = G.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : t === "ddd" ? (s = G.call(this._shortWeekdaysParse, i), s !== -1 || (s = G.call(this._weekdaysParse, i), s !== -1) ? s : (s = G.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : (s = G.call(this._minWeekdaysParse, i), s !== -1 || (s = G.call(this._weekdaysParse, i), s !== -1) ? s : (s = G.call(this._shortWeekdaysParse, i), s !== -1 ? s : null));
  }
  function po(e, t, n) {
    var r, s, a;
    if (this._weekdaysParseExact)
      return mo.call(this, e, t, n);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
      if (s = de([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
        "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
        "i"
      ), this._shortWeekdaysParse[r] = new RegExp(
        "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
        "i"
      ), this._minWeekdaysParse[r] = new RegExp(
        "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
        "i"
      )), this._weekdaysParse[r] || (a = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
        return r;
      if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
        return r;
      if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
        return r;
      if (!n && this._weekdaysParse[r].test(e))
        return r;
    }
  }
  function yo(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = ut(this, "Day");
    return e != null ? (e = ro(e, this.localeData()), this.add(e - t, "d")) : t;
  }
  function go(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d");
  }
  function _o(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      var t = so(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    } else
      return this.day() || 7;
  }
  function vo(e) {
    return this._weekdaysParseExact ? (N(this, "_weekdaysRegex") || An.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (N(this, "_weekdaysRegex") || (this._weekdaysRegex = oo), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }
  function wo(e) {
    return this._weekdaysParseExact ? (N(this, "_weekdaysRegex") || An.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (N(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = lo), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }
  function So(e) {
    return this._weekdaysParseExact ? (N(this, "_weekdaysRegex") || An.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (N(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = uo), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }
  function An() {
    function e(h, c) {
      return c.length - h.length;
    }
    var t = [], n = [], r = [], s = [], a, i, l, o, u;
    for (a = 0; a < 7; a++)
      i = de([2e3, 1]).day(a), l = ve(this.weekdaysMin(i, "")), o = ve(this.weekdaysShort(i, "")), u = ve(this.weekdays(i, "")), t.push(l), n.push(o), r.push(u), s.push(l), s.push(o), s.push(u);
    t.sort(e), n.sort(e), r.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
      "^(" + r.join("|") + ")",
      "i"
    ), this._weekdaysShortStrictRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    ), this._weekdaysMinStrictRegex = new RegExp(
      "^(" + t.join("|") + ")",
      "i"
    );
  }
  function Cn() {
    return this.hours() % 12 || 12;
  }
  function ko() {
    return this.hours() || 24;
  }
  w("H", ["HH", 2], 0, "hour");
  w("h", ["hh", 2], 0, Cn);
  w("k", ["kk", 2], 0, ko);
  w("hmm", 0, 0, function() {
    return "" + Cn.apply(this) + fe(this.minutes(), 2);
  });
  w("hmmss", 0, 0, function() {
    return "" + Cn.apply(this) + fe(this.minutes(), 2) + fe(this.seconds(), 2);
  });
  w("Hmm", 0, 0, function() {
    return "" + this.hours() + fe(this.minutes(), 2);
  });
  w("Hmmss", 0, 0, function() {
    return "" + this.hours() + fe(this.minutes(), 2) + fe(this.seconds(), 2);
  });
  function rs(e, t) {
    w(e, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        t
      );
    });
  }
  rs("a", !0);
  rs("A", !1);
  function ss(e, t) {
    return t._meridiemParse;
  }
  _("a", ss);
  _("A", ss);
  _("H", W, Tn);
  _("h", W, $e);
  _("k", W, $e);
  _("HH", W, K);
  _("hh", W, K);
  _("kk", W, K);
  _("hmm", zr);
  _("hmmss", qr);
  _("Hmm", zr);
  _("Hmmss", qr);
  A(["H", "HH"], q);
  A(["k", "kk"], function(e, t, n) {
    var r = M(e);
    t[q] = r === 24 ? 0 : r;
  });
  A(["a", "A"], function(e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e;
  });
  A(["h", "hh"], function(e, t, n) {
    t[q] = M(e), k(n).bigHour = !0;
  });
  A("hmm", function(e, t, n) {
    var r = e.length - 2;
    t[q] = M(e.substr(0, r)), t[se] = M(e.substr(r)), k(n).bigHour = !0;
  });
  A("hmmss", function(e, t, n) {
    var r = e.length - 4, s = e.length - 2;
    t[q] = M(e.substr(0, r)), t[se] = M(e.substr(r, 2)), t[_e] = M(e.substr(s)), k(n).bigHour = !0;
  });
  A("Hmm", function(e, t, n) {
    var r = e.length - 2;
    t[q] = M(e.substr(0, r)), t[se] = M(e.substr(r));
  });
  A("Hmmss", function(e, t, n) {
    var r = e.length - 4, s = e.length - 2;
    t[q] = M(e.substr(0, r)), t[se] = M(e.substr(r, 2)), t[_e] = M(e.substr(s));
  });
  function Do(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  var Mo = /[ap]\.?m?\.?/i, Oo = Qe("Hours", !0);
  function Ro(e, t, n) {
    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
  }
  var as = {
    calendar: hi,
    longDateFormat: gi,
    invalidDate: vi,
    ordinal: Si,
    dayOfMonthOrdinalParse: ki,
    relativeTime: Mi,
    months: Ui,
    monthsShort: Qr,
    week: Ki,
    weekdays: ao,
    weekdaysMin: io,
    weekdaysShort: ns,
    meridiemParse: Mo
  }, L = {}, nt = {}, dt;
  function Po(e, t) {
    var n, r = Math.min(e.length, t.length);
    for (n = 0; n < r; n += 1)
      if (e[n] !== t[n])
        return n;
    return r;
  }
  function kr(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function Yo(e) {
    for (var t = 0, n, r, s, a; t < e.length; ) {
      for (a = kr(e[t]).split("-"), n = a.length, r = kr(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
        if (s = Ht(a.slice(0, n).join("-")), s)
          return s;
        if (r && r.length >= n && Po(a, r) >= n - 1)
          break;
        n--;
      }
      t++;
    }
    return dt;
  }
  function bo(e) {
    return !!(e && e.match("^[^/\\\\]*$"));
  }
  function Ht(e) {
    var t = null, n;
    if (L[e] === void 0 && typeof Yt < "u" && Yt && Yt.exports && bo(e))
      try {
        t = dt._abbr, n = require, n("./locale/" + e), be(t);
      } catch {
        L[e] = null;
      }
    return L[e];
  }
  function be(e, t) {
    var n;
    return e && (J(t) ? n = ke(e) : n = In(e, t), n ? dt = n : typeof console < "u" && console.warn && console.warn(
      "Locale " + e + " not found. Did you forget to load it?"
    )), dt._abbr;
  }
  function In(e, t) {
    if (t !== null) {
      var n, r = as;
      if (t.abbr = e, L[e] != null)
        Hr(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ), r = L[e]._config;
      else if (t.parentLocale != null)
        if (L[t.parentLocale] != null)
          r = L[t.parentLocale]._config;
        else if (n = Ht(t.parentLocale), n != null)
          r = n._config;
        else
          return nt[t.parentLocale] || (nt[t.parentLocale] = []), nt[t.parentLocale].push({
            name: e,
            config: t
          }), null;
      return L[e] = new Rn(mn(r, t)), nt[e] && nt[e].forEach(function(s) {
        In(s.name, s.config);
      }), be(e), L[e];
    } else
      return delete L[e], null;
  }
  function No(e, t) {
    if (t != null) {
      var n, r, s = as;
      L[e] != null && L[e].parentLocale != null ? L[e].set(mn(L[e]._config, t)) : (r = Ht(e), r != null && (s = r._config), t = mn(s, t), r == null && (t.abbr = e), n = new Rn(t), n.parentLocale = L[e], L[e] = n), be(e);
    } else
      L[e] != null && (L[e].parentLocale != null ? (L[e] = L[e].parentLocale, e === be() && be(e)) : L[e] != null && delete L[e]);
    return L[e];
  }
  function ke(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
      return dt;
    if (!ie(e)) {
      if (t = Ht(e), t)
        return t;
      e = [e];
    }
    return Yo(e);
  }
  function To() {
    return pn(L);
  }
  function Wn(e) {
    var t, n = e._a;
    return n && k(e).overflow === -2 && (t = n[ge] < 0 || n[ge] > 11 ? ge : n[ce] < 1 || n[ce] > En(n[Z], n[ge]) ? ce : n[q] < 0 || n[q] > 24 || n[q] === 24 && (n[se] !== 0 || n[_e] !== 0 || n[Ae] !== 0) ? q : n[se] < 0 || n[se] > 59 ? se : n[_e] < 0 || n[_e] > 59 ? _e : n[Ae] < 0 || n[Ae] > 999 ? Ae : -1, k(e)._overflowDayOfYear && (t < Z || t > ce) && (t = ce), k(e)._overflowWeeks && t === -1 && (t = Ai), k(e)._overflowWeekday && t === -1 && (t = Ci), k(e).overflow = t), e;
  }
  var Eo = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, xo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ao = /Z|[+-]\d\d(?::?\d\d)?/, Mt = [
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
  ], on = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], Co = /^\/?Date\((-?\d+)/i, Io = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Wo = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };
  function is(e) {
    var t, n, r = e._i, s = Eo.exec(r) || xo.exec(r), a, i, l, o, u = Mt.length, h = on.length;
    if (s) {
      for (k(e).iso = !0, t = 0, n = u; t < n; t++)
        if (Mt[t][1].exec(s[1])) {
          i = Mt[t][0], a = Mt[t][2] !== !1;
          break;
        }
      if (i == null) {
        e._isValid = !1;
        return;
      }
      if (s[3]) {
        for (t = 0, n = h; t < n; t++)
          if (on[t][1].exec(s[3])) {
            l = (s[2] || " ") + on[t][0];
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
      if (s[4])
        if (Ao.exec(s[4]))
          o = "Z";
        else {
          e._isValid = !1;
          return;
        }
      e._f = i + (l || "") + (o || ""), Fn(e);
    } else
      e._isValid = !1;
  }
  function Lo(e, t, n, r, s, a) {
    var i = [
      Fo(e),
      Qr.indexOf(t),
      parseInt(n, 10),
      parseInt(r, 10),
      parseInt(s, 10)
    ];
    return a && i.push(parseInt(a, 10)), i;
  }
  function Fo(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function Uo(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function Vo(e, t, n) {
    if (e) {
      var r = ns.indexOf(e), s = new Date(
        t[0],
        t[1],
        t[2]
      ).getDay();
      if (r !== s)
        return k(n).weekdayMismatch = !0, n._isValid = !1, !1;
    }
    return !0;
  }
  function Ho(e, t, n) {
    if (e)
      return Wo[e];
    if (t)
      return 0;
    var r = parseInt(n, 10), s = r % 100, a = (r - s) / 100;
    return a * 60 + s;
  }
  function os(e) {
    var t = Io.exec(Uo(e._i)), n;
    if (t) {
      if (n = Lo(
        t[4],
        t[3],
        t[2],
        t[5],
        t[6],
        t[7]
      ), !Vo(t[1], n, e))
        return;
      e._a = n, e._tzm = Ho(t[8], t[9], t[10]), e._d = ct.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), k(e).rfc2822 = !0;
    } else
      e._isValid = !1;
  }
  function Go(e) {
    var t = Co.exec(e._i);
    if (t !== null) {
      e._d = /* @__PURE__ */ new Date(+t[1]);
      return;
    }
    if (is(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    if (os(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    e._strict ? e._isValid = !1 : y.createFromInputFallback(e);
  }
  y.createFromInputFallback = te(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(e) {
      e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  );
  function Ve(e, t, n) {
    return e ?? t ?? n;
  }
  function jo(e) {
    var t = new Date(y.now());
    return e._useUTC ? [
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate()
    ] : [t.getFullYear(), t.getMonth(), t.getDate()];
  }
  function Ln(e) {
    var t, n, r = [], s, a, i;
    if (!e._d) {
      for (s = jo(e), e._w && e._a[ce] == null && e._a[ge] == null && Bo(e), e._dayOfYear != null && (i = Ve(e._a[Z], s[Z]), (e._dayOfYear > it(i) || e._dayOfYear === 0) && (k(e)._overflowDayOfYear = !0), n = ct(i, 0, e._dayOfYear), e._a[ge] = n.getUTCMonth(), e._a[ce] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
        e._a[t] = r[t] = s[t];
      for (; t < 7; t++)
        e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
      e._a[q] === 24 && e._a[se] === 0 && e._a[_e] === 0 && e._a[Ae] === 0 && (e._nextDay = !0, e._a[q] = 0), e._d = (e._useUTC ? ct : Qi).apply(
        null,
        r
      ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[q] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (k(e).weekdayMismatch = !0);
    }
  }
  function Bo(e) {
    var t, n, r, s, a, i, l, o, u;
    t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, n = Ve(
      t.GG,
      e._a[Z],
      ft(I(), 1, 4).year
    ), r = Ve(t.W, 1), s = Ve(t.E, 1), (s < 1 || s > 7) && (o = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, u = ft(I(), a, i), n = Ve(t.gg, e._a[Z], u.year), r = Ve(t.w, u.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (o = !0)) : t.e != null ? (s = t.e + a, (t.e < 0 || t.e > 6) && (o = !0)) : s = a), r < 1 || r > we(n, a, i) ? k(e)._overflowWeeks = !0 : o != null ? k(e)._overflowWeekday = !0 : (l = ts(n, r, s, a, i), e._a[Z] = l.year, e._dayOfYear = l.dayOfYear);
  }
  y.ISO_8601 = function() {
  };
  y.RFC_2822 = function() {
  };
  function Fn(e) {
    if (e._f === y.ISO_8601) {
      is(e);
      return;
    }
    if (e._f === y.RFC_2822) {
      os(e);
      return;
    }
    e._a = [], k(e).empty = !0;
    var t = "" + e._i, n, r, s, a, i, l = t.length, o = 0, u, h;
    for (s = Gr(e._f, e._locale).match(Pn) || [], h = s.length, n = 0; n < h; n++)
      a = s[n], r = (t.match(Ti(a, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && k(e).unusedInput.push(i), t = t.slice(
        t.indexOf(r) + r.length
      ), o += r.length), Ge[a] ? (r ? k(e).empty = !1 : k(e).unusedTokens.push(a), xi(a, r, e)) : e._strict && !r && k(e).unusedTokens.push(a);
    k(e).charsLeftOver = l - o, t.length > 0 && k(e).unusedInput.push(t), e._a[q] <= 12 && k(e).bigHour === !0 && e._a[q] > 0 && (k(e).bigHour = void 0), k(e).parsedDateParts = e._a.slice(0), k(e).meridiem = e._meridiem, e._a[q] = zo(
      e._locale,
      e._a[q],
      e._meridiem
    ), u = k(e).era, u !== null && (e._a[Z] = e._locale.erasConvertYear(u, e._a[Z])), Ln(e), Wn(e);
  }
  function zo(e, t, n) {
    var r;
    return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
  }
  function qo(e) {
    var t, n, r, s, a, i, l = !1, o = e._f.length;
    if (o === 0) {
      k(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (s = 0; s < o; s++)
      a = 0, i = !1, t = On({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Fn(t), Mn(t) && (i = !0), a += k(t).charsLeftOver, a += k(t).unusedTokens.length * 10, k(t).score = a, l ? a < r && (r = a, n = t) : (r == null || a < r || i) && (r = a, n = t, i && (l = !0));
    Pe(e, n || t);
  }
  function Zo(e) {
    if (!e._d) {
      var t = Yn(e._i), n = t.day === void 0 ? t.date : t.day;
      e._a = Ur(
        [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
        function(r) {
          return r && parseInt(r, 10);
        }
      ), Ln(e);
    }
  }
  function $o(e) {
    var t = new pt(Wn(ls(e)));
    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
  }
  function ls(e) {
    var t = e._i, n = e._f;
    return e._locale = e._locale || ke(e._l), t === null || n === void 0 && t === "" ? Ct({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), oe(t) ? new pt(Wn(t)) : (mt(t) ? e._d = t : ie(n) ? qo(e) : n ? Fn(e) : Qo(e), Mn(e) || (e._d = null), e));
  }
  function Qo(e) {
    var t = e._i;
    J(t) ? e._d = new Date(y.now()) : mt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Go(e) : ie(t) ? (e._a = Ur(t.slice(0), function(n) {
      return parseInt(n, 10);
    }), Ln(e)) : Ce(t) ? Zo(e) : Se(t) ? e._d = new Date(t) : y.createFromInputFallback(e);
  }
  function us(e, t, n, r, s) {
    var a = {};
    return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (Ce(e) && Dn(e) || ie(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = s, a._l = n, a._i = e, a._f = t, a._strict = r, $o(a);
  }
  function I(e, t, n, r) {
    return us(e, t, n, r, !1);
  }
  var Jo = te(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = I.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : Ct();
    }
  ), Ko = te(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = I.apply(null, arguments);
      return this.isValid() && e.isValid() ? e > this ? this : e : Ct();
    }
  );
  function cs(e, t) {
    var n, r;
    if (t.length === 1 && ie(t[0]) && (t = t[0]), !t.length)
      return I();
    for (n = t[0], r = 1; r < t.length; ++r)
      (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
    return n;
  }
  function Xo() {
    var e = [].slice.call(arguments, 0);
    return cs("isBefore", e);
  }
  function el() {
    var e = [].slice.call(arguments, 0);
    return cs("isAfter", e);
  }
  var tl = function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }, rt = [
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
  function nl(e) {
    var t, n = !1, r, s = rt.length;
    for (t in e)
      if (N(e, t) && !(G.call(rt, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
        return !1;
    for (r = 0; r < s; ++r)
      if (e[rt[r]]) {
        if (n)
          return !1;
        parseFloat(e[rt[r]]) !== M(e[rt[r]]) && (n = !0);
      }
    return !0;
  }
  function rl() {
    return this._isValid;
  }
  function sl() {
    return le(NaN);
  }
  function Gt(e) {
    var t = Yn(e), n = t.year || 0, r = t.quarter || 0, s = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, l = t.hour || 0, o = t.minute || 0, u = t.second || 0, h = t.millisecond || 0;
    this._isValid = nl(t), this._milliseconds = +h + u * 1e3 + // 1000
    o * 6e4 + // 1000 * 60
    l * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +s + r * 3 + n * 12, this._data = {}, this._locale = ke(), this._bubble();
  }
  function Rt(e) {
    return e instanceof Gt;
  }
  function gn(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
  function al(e, t, n) {
    var r = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), a = 0, i;
    for (i = 0; i < r; i++)
      M(e[i]) !== M(t[i]) && a++;
    return a + s;
  }
  function fs(e, t) {
    w(e, 0, 0, function() {
      var n = this.utcOffset(), r = "+";
      return n < 0 && (n = -n, r = "-"), r + fe(~~(n / 60), 2) + t + fe(~~n % 60, 2);
    });
  }
  fs("Z", ":");
  fs("ZZ", "");
  _("Z", Ut);
  _("ZZ", Ut);
  A(["Z", "ZZ"], function(e, t, n) {
    n._useUTC = !0, n._tzm = Un(Ut, e);
  });
  var il = /([\+\-]|\d\d)/gi;
  function Un(e, t) {
    var n = (t || "").match(e), r, s, a;
    return n === null ? null : (r = n[n.length - 1] || [], s = (r + "").match(il) || ["-", 0, 0], a = +(s[1] * 60) + M(s[2]), a === 0 ? 0 : s[0] === "+" ? a : -a);
  }
  function Vn(e, t) {
    var n, r;
    return t._isUTC ? (n = t.clone(), r = (oe(e) || mt(e) ? e.valueOf() : I(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), y.updateOffset(n, !1), n) : I(e).local();
  }
  function _n(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  y.updateOffset = function() {
  };
  function ol(e, t, n) {
    var r = this._offset || 0, s;
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      if (typeof e == "string") {
        if (e = Un(Ut, e), e === null)
          return this;
      } else Math.abs(e) < 16 && !n && (e = e * 60);
      return !this._isUTC && t && (s = _n(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), r !== e && (!t || this._changeInProgress ? ms(
        this,
        le(e - r, "m"),
        1,
        !1
      ) : this._changeInProgress || (this._changeInProgress = !0, y.updateOffset(this, !0), this._changeInProgress = null)), this;
    } else
      return this._isUTC ? r : _n(this);
  }
  function ll(e, t) {
    return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }
  function ul(e) {
    return this.utcOffset(0, e);
  }
  function cl(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(_n(this), "m")), this;
  }
  function fl() {
    if (this._tzm != null)
      this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var e = Un(bi, this._i);
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }
  function dl(e) {
    return this.isValid() ? (e = e ? I(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
  }
  function hl() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function ml() {
    if (!J(this._isDSTShifted))
      return this._isDSTShifted;
    var e = {}, t;
    return On(e, this), e = ls(e), e._a ? (t = e._isUTC ? de(e._a) : I(e._a), this._isDSTShifted = this.isValid() && al(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
  }
  function pl() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function yl() {
    return this.isValid() ? this._isUTC : !1;
  }
  function ds() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var gl = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, _l = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function le(e, t) {
    var n = e, r = null, s, a, i;
    return Rt(e) ? n = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : Se(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = gl.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: 0,
      d: M(r[ce]) * s,
      h: M(r[q]) * s,
      m: M(r[se]) * s,
      s: M(r[_e]) * s,
      ms: M(gn(r[Ae] * 1e3)) * s
      // the millisecond decimal point is included in the match
    }) : (r = _l.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: Te(r[2], s),
      M: Te(r[3], s),
      w: Te(r[4], s),
      d: Te(r[5], s),
      h: Te(r[6], s),
      m: Te(r[7], s),
      s: Te(r[8], s)
    }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (i = vl(
      I(n.from),
      I(n.to)
    ), n = {}, n.ms = i.milliseconds, n.M = i.months), a = new Gt(n), Rt(e) && N(e, "_locale") && (a._locale = e._locale), Rt(e) && N(e, "_isValid") && (a._isValid = e._isValid), a;
  }
  le.fn = Gt.prototype;
  le.invalid = sl;
  function Te(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }
  function Dr(e, t) {
    var n = {};
    return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
  }
  function vl(e, t) {
    var n;
    return e.isValid() && t.isValid() ? (t = Vn(t, e), e.isBefore(t) ? n = Dr(e, t) : (n = Dr(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
  }
  function hs(e, t) {
    return function(n, r) {
      var s, a;
      return r !== null && !isNaN(+r) && (Hr(
        t,
        "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
      ), a = n, n = r, r = a), s = le(n, r), ms(this, s, e), this;
    };
  }
  function ms(e, t, n, r) {
    var s = t._milliseconds, a = gn(t._days), i = gn(t._months);
    e.isValid() && (r = r ?? !0, i && Kr(e, ut(e, "Month") + i * n), a && $r(e, "Date", ut(e, "Date") + a * n), s && e._d.setTime(e._d.valueOf() + s * n), r && y.updateOffset(e, a || i));
  }
  var wl = hs(1, "add"), Sl = hs(-1, "subtract");
  function ps(e) {
    return typeof e == "string" || e instanceof String;
  }
  function kl(e) {
    return oe(e) || mt(e) || ps(e) || Se(e) || Ml(e) || Dl(e) || e === null || e === void 0;
  }
  function Dl(e) {
    var t = Ce(e) && !Dn(e), n = !1, r = [
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
    ], s, a, i = r.length;
    for (s = 0; s < i; s += 1)
      a = r[s], n = n || N(e, a);
    return t && n;
  }
  function Ml(e) {
    var t = ie(e), n = !1;
    return t && (n = e.filter(function(r) {
      return !Se(r) && ps(e);
    }).length === 0), t && n;
  }
  function Ol(e) {
    var t = Ce(e) && !Dn(e), n = !1, r = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], s, a;
    for (s = 0; s < r.length; s += 1)
      a = r[s], n = n || N(e, a);
    return t && n;
  }
  function Rl(e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }
  function Pl(e, t) {
    arguments.length === 1 && (arguments[0] ? kl(arguments[0]) ? (e = arguments[0], t = void 0) : Ol(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
    var n = e || I(), r = Vn(n, this).startOf("day"), s = y.calendarFormat(this, r) || "sameElse", a = t && (he(t[s]) ? t[s].call(this, n) : t[s]);
    return this.format(
      a || this.localeData().calendar(s, this, I(n))
    );
  }
  function Yl() {
    return new pt(this);
  }
  function bl(e, t) {
    var n = oe(e) ? e : I(e);
    return this.isValid() && n.isValid() ? (t = ne(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
  }
  function Nl(e, t) {
    var n = oe(e) ? e : I(e);
    return this.isValid() && n.isValid() ? (t = ne(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
  }
  function Tl(e, t, n, r) {
    var s = oe(e) ? e : I(e), a = oe(t) ? t : I(t);
    return this.isValid() && s.isValid() && a.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(s, n) : !this.isBefore(s, n)) && (r[1] === ")" ? this.isBefore(a, n) : !this.isAfter(a, n))) : !1;
  }
  function El(e, t) {
    var n = oe(e) ? e : I(e), r;
    return this.isValid() && n.isValid() ? (t = ne(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
  }
  function xl(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function Al(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function Cl(e, t, n) {
    var r, s, a;
    if (!this.isValid())
      return NaN;
    if (r = Vn(e, this), !r.isValid())
      return NaN;
    switch (s = (r.utcOffset() - this.utcOffset()) * 6e4, t = ne(t), t) {
      case "year":
        a = Pt(this, r) / 12;
        break;
      case "month":
        a = Pt(this, r);
        break;
      case "quarter":
        a = Pt(this, r) / 3;
        break;
      case "second":
        a = (this - r) / 1e3;
        break;
      // 1000
      case "minute":
        a = (this - r) / 6e4;
        break;
      // 1000 * 60
      case "hour":
        a = (this - r) / 36e5;
        break;
      // 1000 * 60 * 60
      case "day":
        a = (this - r - s) / 864e5;
        break;
      // 1000 * 60 * 60 * 24, negate dst
      case "week":
        a = (this - r - s) / 6048e5;
        break;
      // 1000 * 60 * 60 * 24 * 7, negate dst
      default:
        a = this - r;
    }
    return n ? a : ee(a);
  }
  function Pt(e, t) {
    if (e.date() < t.date())
      return -Pt(t, e);
    var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), s, a;
    return t - r < 0 ? (s = e.clone().add(n - 1, "months"), a = (t - r) / (r - s)) : (s = e.clone().add(n + 1, "months"), a = (t - r) / (s - r)), -(n + a) || 0;
  }
  y.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  y.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function Il() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function Wl(e) {
    if (!this.isValid())
      return null;
    var t = e !== !0, n = t ? this.clone().utc() : this;
    return n.year() < 0 || n.year() > 9999 ? Ot(
      n,
      t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
    ) : he(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ot(n, "Z")) : Ot(
      n,
      t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  function Ll() {
    if (!this.isValid())
      return "moment.invalid(/* " + this._i + " */)";
    var e = "moment", t = "", n, r, s, a;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(n + r + s + a);
  }
  function Fl(e) {
    e || (e = this.isUtc() ? y.defaultFormatUtc : y.defaultFormat);
    var t = Ot(this, e);
    return this.localeData().postformat(t);
  }
  function Ul(e, t) {
    return this.isValid() && (oe(e) && e.isValid() || I(e).isValid()) ? le({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function Vl(e) {
    return this.from(I(), e);
  }
  function Hl(e, t) {
    return this.isValid() && (oe(e) && e.isValid() || I(e).isValid()) ? le({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function Gl(e) {
    return this.to(I(), e);
  }
  function ys(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = ke(e), t != null && (this._locale = t), this);
  }
  var gs = te(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    }
  );
  function _s() {
    return this._locale;
  }
  var Tt = 1e3, je = 60 * Tt, Et = 60 * je, vs = (365 * 400 + 97) * 24 * Et;
  function Be(e, t) {
    return (e % t + t) % t;
  }
  function ws(e, t, n) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, n) - vs : new Date(e, t, n).valueOf();
  }
  function Ss(e, t, n) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - vs : Date.UTC(e, t, n);
  }
  function jl(e) {
    var t, n;
    if (e = ne(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (n = this._isUTC ? Ss : ws, e) {
      case "year":
        t = n(this.year(), 0, 1);
        break;
      case "quarter":
        t = n(
          this.year(),
          this.month() - this.month() % 3,
          1
        );
        break;
      case "month":
        t = n(this.year(), this.month(), 1);
        break;
      case "week":
        t = n(
          this.year(),
          this.month(),
          this.date() - this.weekday()
        );
        break;
      case "isoWeek":
        t = n(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1)
        );
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date());
        break;
      case "hour":
        t = this._d.valueOf(), t -= Be(
          t + (this._isUTC ? 0 : this.utcOffset() * je),
          Et
        );
        break;
      case "minute":
        t = this._d.valueOf(), t -= Be(t, je);
        break;
      case "second":
        t = this._d.valueOf(), t -= Be(t, Tt);
        break;
    }
    return this._d.setTime(t), y.updateOffset(this, !0), this;
  }
  function Bl(e) {
    var t, n;
    if (e = ne(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (n = this._isUTC ? Ss : ws, e) {
      case "year":
        t = n(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = n(
          this.year(),
          this.month() - this.month() % 3 + 3,
          1
        ) - 1;
        break;
      case "month":
        t = n(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = n(
          this.year(),
          this.month(),
          this.date() - this.weekday() + 7
        ) - 1;
        break;
      case "isoWeek":
        t = n(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        t = this._d.valueOf(), t += Et - Be(
          t + (this._isUTC ? 0 : this.utcOffset() * je),
          Et
        ) - 1;
        break;
      case "minute":
        t = this._d.valueOf(), t += je - Be(t, je) - 1;
        break;
      case "second":
        t = this._d.valueOf(), t += Tt - Be(t, Tt) - 1;
        break;
    }
    return this._d.setTime(t), y.updateOffset(this, !0), this;
  }
  function zl() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function ql() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function Zl() {
    return new Date(this.valueOf());
  }
  function $l() {
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
  function Ql() {
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
  function Jl() {
    return this.isValid() ? this.toISOString() : null;
  }
  function Kl() {
    return Mn(this);
  }
  function Xl() {
    return Pe({}, k(this));
  }
  function eu() {
    return k(this).overflow;
  }
  function tu() {
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
  _("N", Hn);
  _("NN", Hn);
  _("NNN", Hn);
  _("NNNN", du);
  _("NNNNN", hu);
  A(
    ["N", "NN", "NNN", "NNNN", "NNNNN"],
    function(e, t, n, r) {
      var s = n._locale.erasParse(e, r, n._strict);
      s ? k(n).era = s : k(n).invalidEra = e;
    }
  );
  _("y", Ze);
  _("yy", Ze);
  _("yyy", Ze);
  _("yyyy", Ze);
  _("yo", mu);
  A(["y", "yy", "yyy", "yyyy"], Z);
  A(["yo"], function(e, t, n, r) {
    var s;
    n._locale._eraYearOrdinalRegex && (s = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Z] = n._locale.eraYearOrdinalParse(e, s) : t[Z] = parseInt(e, 10);
  });
  function nu(e, t) {
    var n, r, s, a = this._eras || ke("en")._eras;
    for (n = 0, r = a.length; n < r; ++n) {
      switch (typeof a[n].since) {
        case "string":
          s = y(a[n].since).startOf("day"), a[n].since = s.valueOf();
          break;
      }
      switch (typeof a[n].until) {
        case "undefined":
          a[n].until = 1 / 0;
          break;
        case "string":
          s = y(a[n].until).startOf("day").valueOf(), a[n].until = s.valueOf();
          break;
      }
    }
    return a;
  }
  function ru(e, t, n) {
    var r, s, a = this.eras(), i, l, o;
    for (e = e.toUpperCase(), r = 0, s = a.length; r < s; ++r)
      if (i = a[r].name.toUpperCase(), l = a[r].abbr.toUpperCase(), o = a[r].narrow.toUpperCase(), n)
        switch (t) {
          case "N":
          case "NN":
          case "NNN":
            if (l === e)
              return a[r];
            break;
          case "NNNN":
            if (i === e)
              return a[r];
            break;
          case "NNNNN":
            if (o === e)
              return a[r];
            break;
        }
      else if ([i, l, o].indexOf(e) >= 0)
        return a[r];
  }
  function su(e, t) {
    var n = e.since <= e.until ? 1 : -1;
    return t === void 0 ? y(e.since).year() : y(e.since).year() + (t - e.offset) * n;
  }
  function au() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].name;
    return "";
  }
  function iu() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].narrow;
    return "";
  }
  function ou() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].abbr;
    return "";
  }
  function lu() {
    var e, t, n, r, s = this.localeData().eras();
    for (e = 0, t = s.length; e < t; ++e)
      if (n = s[e].since <= s[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
        return (this.year() - y(s[e].since).year()) * n + s[e].offset;
    return this.year();
  }
  function uu(e) {
    return N(this, "_erasNameRegex") || Gn.call(this), e ? this._erasNameRegex : this._erasRegex;
  }
  function cu(e) {
    return N(this, "_erasAbbrRegex") || Gn.call(this), e ? this._erasAbbrRegex : this._erasRegex;
  }
  function fu(e) {
    return N(this, "_erasNarrowRegex") || Gn.call(this), e ? this._erasNarrowRegex : this._erasRegex;
  }
  function Hn(e, t) {
    return t.erasAbbrRegex(e);
  }
  function du(e, t) {
    return t.erasNameRegex(e);
  }
  function hu(e, t) {
    return t.erasNarrowRegex(e);
  }
  function mu(e, t) {
    return t._eraYearOrdinalRegex || Ze;
  }
  function Gn() {
    var e = [], t = [], n = [], r = [], s, a, i, l, o, u = this.eras();
    for (s = 0, a = u.length; s < a; ++s)
      i = ve(u[s].name), l = ve(u[s].abbr), o = ve(u[s].narrow), t.push(i), e.push(l), n.push(o), r.push(i), r.push(l), r.push(o);
    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    );
  }
  w(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  w(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function jt(e, t) {
    w(0, [e, e.length], 0, t);
  }
  jt("gggg", "weekYear");
  jt("ggggg", "weekYear");
  jt("GGGG", "isoWeekYear");
  jt("GGGGG", "isoWeekYear");
  _("G", Ft);
  _("g", Ft);
  _("GG", W, K);
  _("gg", W, K);
  _("GGGG", Nn, bn);
  _("gggg", Nn, bn);
  _("GGGGG", Lt, It);
  _("ggggg", Lt, It);
  gt(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(e, t, n, r) {
      t[r.substr(0, 2)] = M(e);
    }
  );
  gt(["gg", "GG"], function(e, t, n, r) {
    t[r] = y.parseTwoDigitYear(e);
  });
  function pu(e) {
    return ks.call(
      this,
      e,
      this.week(),
      this.weekday() + this.localeData()._week.dow,
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function yu(e) {
    return ks.call(
      this,
      e,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function gu() {
    return we(this.year(), 1, 4);
  }
  function _u() {
    return we(this.isoWeekYear(), 1, 4);
  }
  function vu() {
    var e = this.localeData()._week;
    return we(this.year(), e.dow, e.doy);
  }
  function wu() {
    var e = this.localeData()._week;
    return we(this.weekYear(), e.dow, e.doy);
  }
  function ks(e, t, n, r, s) {
    var a;
    return e == null ? ft(this, r, s).year : (a = we(e, r, s), t > a && (t = a), Su.call(this, e, t, n, r, s));
  }
  function Su(e, t, n, r, s) {
    var a = ts(e, t, n, r, s), i = ct(a.year, 0, a.dayOfYear);
    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
  }
  w("Q", 0, "Qo", "quarter");
  _("Q", jr);
  A("Q", function(e, t) {
    t[ge] = (M(e) - 1) * 3;
  });
  function ku(e) {
    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
  }
  w("D", ["DD", 2], "Do", "date");
  _("D", W, $e);
  _("DD", W, K);
  _("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  });
  A(["D", "DD"], ce);
  A("Do", function(e, t) {
    t[ce] = M(e.match(W)[0]);
  });
  var Ds = Qe("Date", !0);
  w("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  _("DDD", Wt);
  _("DDDD", Br);
  A(["DDD", "DDDD"], function(e, t, n) {
    n._dayOfYear = M(e);
  });
  function Du(e) {
    var t = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return e == null ? t : this.add(e - t, "d");
  }
  w("m", ["mm", 2], 0, "minute");
  _("m", W, Tn);
  _("mm", W, K);
  A(["m", "mm"], se);
  var Mu = Qe("Minutes", !1);
  w("s", ["ss", 2], 0, "second");
  _("s", W, Tn);
  _("ss", W, K);
  A(["s", "ss"], _e);
  var Ou = Qe("Seconds", !1);
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
  _("S", Wt, jr);
  _("SS", Wt, K);
  _("SSS", Wt, Br);
  var Ye, Ms;
  for (Ye = "SSSS"; Ye.length <= 9; Ye += "S")
    _(Ye, Ze);
  function Ru(e, t) {
    t[Ae] = M(("0." + e) * 1e3);
  }
  for (Ye = "S"; Ye.length <= 9; Ye += "S")
    A(Ye, Ru);
  Ms = Qe("Milliseconds", !1);
  w("z", 0, 0, "zoneAbbr");
  w("zz", 0, 0, "zoneName");
  function Pu() {
    return this._isUTC ? "UTC" : "";
  }
  function Yu() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var p = pt.prototype;
  p.add = wl;
  p.calendar = Pl;
  p.clone = Yl;
  p.diff = Cl;
  p.endOf = Bl;
  p.format = Fl;
  p.from = Ul;
  p.fromNow = Vl;
  p.to = Hl;
  p.toNow = Gl;
  p.get = Wi;
  p.invalidAt = eu;
  p.isAfter = bl;
  p.isBefore = Nl;
  p.isBetween = Tl;
  p.isSame = El;
  p.isSameOrAfter = xl;
  p.isSameOrBefore = Al;
  p.isValid = Kl;
  p.lang = gs;
  p.locale = ys;
  p.localeData = _s;
  p.max = Ko;
  p.min = Jo;
  p.parsingFlags = Xl;
  p.set = Li;
  p.startOf = jl;
  p.subtract = Sl;
  p.toArray = $l;
  p.toObject = Ql;
  p.toDate = Zl;
  p.toISOString = Wl;
  p.inspect = Ll;
  typeof Symbol < "u" && Symbol.for != null && (p[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  });
  p.toJSON = Jl;
  p.toString = Il;
  p.unix = ql;
  p.valueOf = zl;
  p.creationData = tu;
  p.eraName = au;
  p.eraNarrow = iu;
  p.eraAbbr = ou;
  p.eraYear = lu;
  p.year = Zr;
  p.isLeapYear = Ii;
  p.weekYear = pu;
  p.isoWeekYear = yu;
  p.quarter = p.quarters = ku;
  p.month = Xr;
  p.daysInMonth = qi;
  p.week = p.weeks = to;
  p.isoWeek = p.isoWeeks = no;
  p.weeksInYear = vu;
  p.weeksInWeekYear = wu;
  p.isoWeeksInYear = gu;
  p.isoWeeksInISOWeekYear = _u;
  p.date = Ds;
  p.day = p.days = yo;
  p.weekday = go;
  p.isoWeekday = _o;
  p.dayOfYear = Du;
  p.hour = p.hours = Oo;
  p.minute = p.minutes = Mu;
  p.second = p.seconds = Ou;
  p.millisecond = p.milliseconds = Ms;
  p.utcOffset = ol;
  p.utc = ul;
  p.local = cl;
  p.parseZone = fl;
  p.hasAlignedHourOffset = dl;
  p.isDST = hl;
  p.isLocal = pl;
  p.isUtcOffset = yl;
  p.isUtc = ds;
  p.isUTC = ds;
  p.zoneAbbr = Pu;
  p.zoneName = Yu;
  p.dates = te(
    "dates accessor is deprecated. Use date instead.",
    Ds
  );
  p.months = te(
    "months accessor is deprecated. Use month instead",
    Xr
  );
  p.years = te(
    "years accessor is deprecated. Use year instead",
    Zr
  );
  p.zone = te(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    ll
  );
  p.isDSTShifted = te(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    ml
  );
  function bu(e) {
    return I(e * 1e3);
  }
  function Nu() {
    return I.apply(null, arguments).parseZone();
  }
  function Os(e) {
    return e;
  }
  var T = Rn.prototype;
  T.calendar = mi;
  T.longDateFormat = _i;
  T.invalidDate = wi;
  T.ordinal = Di;
  T.preparse = Os;
  T.postformat = Os;
  T.relativeTime = Oi;
  T.pastFuture = Ri;
  T.set = di;
  T.eras = nu;
  T.erasParse = ru;
  T.erasConvertYear = su;
  T.erasAbbrRegex = cu;
  T.erasNameRegex = uu;
  T.erasNarrowRegex = fu;
  T.months = Gi;
  T.monthsShort = ji;
  T.monthsParse = zi;
  T.monthsRegex = $i;
  T.monthsShortRegex = Zi;
  T.week = Ji;
  T.firstDayOfYear = eo;
  T.firstDayOfWeek = Xi;
  T.weekdays = co;
  T.weekdaysMin = ho;
  T.weekdaysShort = fo;
  T.weekdaysParse = po;
  T.weekdaysRegex = vo;
  T.weekdaysShortRegex = wo;
  T.weekdaysMinRegex = So;
  T.isPM = Do;
  T.meridiem = Ro;
  function xt(e, t, n, r) {
    var s = ke(), a = de().set(r, t);
    return s[n](a, e);
  }
  function Rs(e, t, n) {
    if (Se(e) && (t = e, e = void 0), e = e || "", t != null)
      return xt(e, t, n, "month");
    var r, s = [];
    for (r = 0; r < 12; r++)
      s[r] = xt(e, r, n, "month");
    return s;
  }
  function jn(e, t, n, r) {
    typeof e == "boolean" ? (Se(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Se(t) && (n = t, t = void 0), t = t || "");
    var s = ke(), a = e ? s._week.dow : 0, i, l = [];
    if (n != null)
      return xt(t, (n + a) % 7, r, "day");
    for (i = 0; i < 7; i++)
      l[i] = xt(t, (i + a) % 7, r, "day");
    return l;
  }
  function Tu(e, t) {
    return Rs(e, t, "months");
  }
  function Eu(e, t) {
    return Rs(e, t, "monthsShort");
  }
  function xu(e, t, n) {
    return jn(e, t, n, "weekdays");
  }
  function Au(e, t, n) {
    return jn(e, t, n, "weekdaysShort");
  }
  function Cu(e, t, n) {
    return jn(e, t, n, "weekdaysMin");
  }
  be("en", {
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
      var t = e % 10, n = M(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
      return e + n;
    }
  });
  y.lang = te(
    "moment.lang is deprecated. Use moment.locale instead.",
    be
  );
  y.langData = te(
    "moment.langData is deprecated. Use moment.localeData instead.",
    ke
  );
  var pe = Math.abs;
  function Iu() {
    var e = this._data;
    return this._milliseconds = pe(this._milliseconds), this._days = pe(this._days), this._months = pe(this._months), e.milliseconds = pe(e.milliseconds), e.seconds = pe(e.seconds), e.minutes = pe(e.minutes), e.hours = pe(e.hours), e.months = pe(e.months), e.years = pe(e.years), this;
  }
  function Ps(e, t, n, r) {
    var s = le(t, n);
    return e._milliseconds += r * s._milliseconds, e._days += r * s._days, e._months += r * s._months, e._bubble();
  }
  function Wu(e, t) {
    return Ps(this, e, t, 1);
  }
  function Lu(e, t) {
    return Ps(this, e, t, -1);
  }
  function Mr(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function Fu() {
    var e = this._milliseconds, t = this._days, n = this._months, r = this._data, s, a, i, l, o;
    return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Mr(vn(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, s = ee(e / 1e3), r.seconds = s % 60, a = ee(s / 60), r.minutes = a % 60, i = ee(a / 60), r.hours = i % 24, t += ee(i / 24), o = ee(Ys(t)), n += o, t -= Mr(vn(o)), l = ee(n / 12), n %= 12, r.days = t, r.months = n, r.years = l, this;
  }
  function Ys(e) {
    return e * 4800 / 146097;
  }
  function vn(e) {
    return e * 146097 / 4800;
  }
  function Uu(e) {
    if (!this.isValid())
      return NaN;
    var t, n, r = this._milliseconds;
    if (e = ne(e), e === "month" || e === "quarter" || e === "year")
      switch (t = this._days + r / 864e5, n = this._months + Ys(t), e) {
        case "month":
          return n;
        case "quarter":
          return n / 3;
        case "year":
          return n / 12;
      }
    else
      switch (t = this._days + Math.round(vn(this._months)), e) {
        case "week":
          return t / 7 + r / 6048e5;
        case "day":
          return t + r / 864e5;
        case "hour":
          return t * 24 + r / 36e5;
        case "minute":
          return t * 1440 + r / 6e4;
        case "second":
          return t * 86400 + r / 1e3;
        // Math.floor prevents floating point math errors here
        case "millisecond":
          return Math.floor(t * 864e5) + r;
        default:
          throw new Error("Unknown unit " + e);
      }
  }
  function De(e) {
    return function() {
      return this.as(e);
    };
  }
  var bs = De("ms"), Vu = De("s"), Hu = De("m"), Gu = De("h"), ju = De("d"), Bu = De("w"), zu = De("M"), qu = De("Q"), Zu = De("y"), $u = bs;
  function Qu() {
    return le(this);
  }
  function Ju(e) {
    return e = ne(e), this.isValid() ? this[e + "s"]() : NaN;
  }
  function Ie(e) {
    return function() {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var Ku = Ie("milliseconds"), Xu = Ie("seconds"), ec = Ie("minutes"), tc = Ie("hours"), nc = Ie("days"), rc = Ie("months"), sc = Ie("years");
  function ac() {
    return ee(this.days() / 7);
  }
  var ye = Math.round, He = {
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
  function ic(e, t, n, r, s) {
    return s.relativeTime(t || 1, !!n, e, r);
  }
  function oc(e, t, n, r) {
    var s = le(e).abs(), a = ye(s.as("s")), i = ye(s.as("m")), l = ye(s.as("h")), o = ye(s.as("d")), u = ye(s.as("M")), h = ye(s.as("w")), c = ye(s.as("y")), f = a <= n.ss && ["s", a] || a < n.s && ["ss", a] || i <= 1 && ["m"] || i < n.m && ["mm", i] || l <= 1 && ["h"] || l < n.h && ["hh", l] || o <= 1 && ["d"] || o < n.d && ["dd", o];
    return n.w != null && (f = f || h <= 1 && ["w"] || h < n.w && ["ww", h]), f = f || u <= 1 && ["M"] || u < n.M && ["MM", u] || c <= 1 && ["y"] || ["yy", c], f[2] = t, f[3] = +e > 0, f[4] = r, ic.apply(null, f);
  }
  function lc(e) {
    return e === void 0 ? ye : typeof e == "function" ? (ye = e, !0) : !1;
  }
  function uc(e, t) {
    return He[e] === void 0 ? !1 : t === void 0 ? He[e] : (He[e] = t, e === "s" && (He.ss = t - 1), !0);
  }
  function cc(e, t) {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var n = !1, r = He, s, a;
    return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, He, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), s = this.localeData(), a = oc(this, !n, r, s), n && (a = s.pastFuture(+this, a)), s.postformat(a);
  }
  var ln = Math.abs;
  function Le(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function Bt() {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var e = ln(this._milliseconds) / 1e3, t = ln(this._days), n = ln(this._months), r, s, a, i, l = this.asSeconds(), o, u, h, c;
    return l ? (r = ee(e / 60), s = ee(r / 60), e %= 60, r %= 60, a = ee(n / 12), n %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = l < 0 ? "-" : "", u = Le(this._months) !== Le(l) ? "-" : "", h = Le(this._days) !== Le(l) ? "-" : "", c = Le(this._milliseconds) !== Le(l) ? "-" : "", o + "P" + (a ? u + a + "Y" : "") + (n ? u + n + "M" : "") + (t ? h + t + "D" : "") + (s || r || e ? "T" : "") + (s ? c + s + "H" : "") + (r ? c + r + "M" : "") + (e ? c + i + "S" : "")) : "P0D";
  }
  var R = Gt.prototype;
  R.isValid = rl;
  R.abs = Iu;
  R.add = Wu;
  R.subtract = Lu;
  R.as = Uu;
  R.asMilliseconds = bs;
  R.asSeconds = Vu;
  R.asMinutes = Hu;
  R.asHours = Gu;
  R.asDays = ju;
  R.asWeeks = Bu;
  R.asMonths = zu;
  R.asQuarters = qu;
  R.asYears = Zu;
  R.valueOf = $u;
  R._bubble = Fu;
  R.clone = Qu;
  R.get = Ju;
  R.milliseconds = Ku;
  R.seconds = Xu;
  R.minutes = ec;
  R.hours = tc;
  R.days = nc;
  R.weeks = ac;
  R.months = rc;
  R.years = sc;
  R.humanize = cc;
  R.toISOString = Bt;
  R.toString = Bt;
  R.toJSON = Bt;
  R.locale = ys;
  R.localeData = _s;
  R.toIsoString = te(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    Bt
  );
  R.lang = gs;
  w("X", 0, 0, "unix");
  w("x", 0, 0, "valueOf");
  _("x", Ft);
  _("X", Ni);
  A("X", function(e, t, n) {
    n._d = new Date(parseFloat(e) * 1e3);
  });
  A("x", function(e, t, n) {
    n._d = new Date(M(e));
  });
  y.version = "2.30.1";
  ci(I);
  y.fn = p;
  y.min = Xo;
  y.max = el;
  y.now = tl;
  y.utc = de;
  y.unix = bu;
  y.months = Tu;
  y.isDate = mt;
  y.locale = be;
  y.invalid = Ct;
  y.duration = le;
  y.isMoment = oe;
  y.weekdays = xu;
  y.parseZone = Nu;
  y.localeData = ke;
  y.isDuration = Rt;
  y.monthsShort = Eu;
  y.weekdaysMin = Cu;
  y.defineLocale = In;
  y.updateLocale = No;
  y.locales = To;
  y.weekdaysShort = Au;
  y.normalizeUnits = ne;
  y.relativeTimeRounding = lc;
  y.relativeTimeThreshold = uc;
  y.calendarFormat = Rl;
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
  const fc = ht({
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
        for (let n = e; n <= t; n += 1) {
          let r = new ui();
          r.pageNumber = n, r.isActive = this.currentPage == n, this.pagesPagination.push(r);
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
  }), dc = { class: "text-start" }, hc = { class: "d-flex text-body-secondary pt-3" }, mc = { class: "pb-3 mb-0 small lh-sm" }, pc = { class: "h6" }, yc = { class: "badge rounded-pill text-bg-secondary" }, gc = ["href"], _c = {
    class: "pt-5",
    "aria-label": "Search Page navigation"
  }, vc = { class: "pagination justify-content-center" }, wc = { class: "page-item" }, Sc = ["onClick"], kc = { class: "page-item" };
  function Dc(e, t, n, r, s, a) {
    return Ee(), Fe("div", null, [
      (Ee(!0), Fe(Jn, null, Kn(e.pageOfItems, (i, l) => (Ee(), Fe("div", dc, [
        V("div", hc, [
          t[2] || (t[2] = V("span", { class: "me-1" }, [
            V("img", {
              src: " https://www.dinowilliam.com/lib/assets/logo.png",
              height: "16",
              width: "72",
              loading: "lazy"
            })
          ], -1)),
          V("p", mc, [
            V("p", pc, [
              Xn(et(i.url) + " ", 1),
              V("span", yc, et(e.formatDate(i.date)), 1)
            ]),
            V("p", null, [
              V("a", {
                class: "h4",
                href: i.url
              }, et(i.title), 9, gc)
            ]),
            Xn(" " + et(i.description), 1)
          ])
        ])
      ]))), 256)),
      V("nav", _c, [
        V("ul", vc, [
          V("li", wc, [
            V("a", {
              class: Xt(["page-link", { disabled: e.isPreviousDisabled }]),
              onClick: t[0] || (t[0] = (i) => e.onPageChange(e.previousPage))
            }, "Previous", 2)
          ]),
          (Ee(!0), Fe(Jn, null, Kn(e.pagesPagination, (i) => (Ee(), Fe("li", {
            class: Xt(["page-item", { active: i.isActive }])
          }, [
            V("a", {
              class: "page-link",
              onClick: (l) => e.onPageChange(i.pageNumber)
            }, et(i.pageNumber), 9, Sc)
          ], 2))), 256)),
          V("li", kc, [
            V("a", {
              class: Xt(["page-link", { disabled: e.isNextDisabled }]),
              onClick: t[1] || (t[1] = (i) => e.onPageChange(e.nextPage))
            }, "Next", 2)
          ])
        ])
      ])
    ]);
  }
  const Mc = /* @__PURE__ */ kn(fc, [["render", Dc]]), Oc = [
    {
      path: "/Search",
      name: "SearchForm",
      component: li
    },
    {
      path: "/SearchResults",
      name: "SearchResults",
      component: Mc
    }
  ], Rc = ri({
    //history: createWebHistory(import.meta.env.BASE_URL), 
    history: Ca(),
    routes: Oc
  }), Pc = ht({
    name: "App"
  });
  function Yc(e, t, n, r, s, a) {
    const i = Gs("RouterView");
    return Ee(), js(i);
  }
  const bc = /* @__PURE__ */ kn(Pc, [["render", Yc]]), Bn = Bs(bc);
  Bn.mixin(Js);
  Bn.use(Rc);
  Bn.mount("#mainAppSearch");
});
export default Nc();
//# sourceMappingURL=vueappsearch.js.map
