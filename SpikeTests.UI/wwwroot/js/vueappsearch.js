var br = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
import { shallowRef as Pr, unref as Xe, shallowReactive as Tr, nextTick as xr, defineComponent as ct, reactive as Nr, inject as nt, computed as ie, h as wn, provide as zt, ref as Cr, watch as Er, openBlock as Pe, createElementBlock as We, createElementVNode as H, withModifiers as Wr, withDirectives as Ir, vModelText as Ar, Fragment as Bs, renderList as qs, createTextVNode as Zs, toDisplayString as Ze, normalizeClass as Bt, resolveComponent as Fr, createBlock as Lr, createApp as Ur } from "vue";
var Sc = br((Oc, St) => {
  function Hr(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var ts = { exports: {} }, hs = {}, ms = {};
  Object.defineProperty(ms, "__esModule", {
    value: !0
  });
  ms.default = {
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
  Object.defineProperty(hs, "__esModule", {
    value: !0
  });
  var Vr = ms, $r = Gr(Vr);
  function Gr(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var ss = void 0, jr = function() {
    try {
      var t = "testvuels";
      return window.localStorage.setItem(t, "1"), window.localStorage.removeItem(t), !0;
    } catch {
      return !1;
    }
  };
  jr() ? ss = window.localStorage : ss = $r.default;
  hs.default = ss;
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
    }(), r = hs, a = i(r);
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
  })(ts, ts.exports);
  var zr = ts.exports;
  const Br = /* @__PURE__ */ Hr(zr), Ie = typeof document < "u";
  function kn(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function qr(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
    // add the Module string tag
    e.default && kn(e.default);
  }
  const N = Object.assign;
  function qt(e, t) {
    const s = {};
    for (const n in t) {
      const r = t[n];
      s[n] = se(r) ? r.map(e) : e(r);
    }
    return s;
  }
  const et = () => {
  }, se = Array.isArray, Sn = /#/g, Zr = /&/g, Qr = /\//g, Jr = /=/g, Kr = /\?/g, Mn = /\+/g, Xr = /%5B/g, ea = /%5D/g, Dn = /%5E/g, ta = /%60/g, On = /%7B/g, sa = /%7C/g, Yn = /%7D/g, na = /%20/g;
  function ps(e) {
    return encodeURI("" + e).replace(sa, "|").replace(Xr, "[").replace(ea, "]");
  }
  function ra(e) {
    return ps(e).replace(On, "{").replace(Yn, "}").replace(Dn, "^");
  }
  function ns(e) {
    return ps(e).replace(Mn, "%2B").replace(na, "+").replace(Sn, "%23").replace(Zr, "%26").replace(ta, "`").replace(On, "{").replace(Yn, "}").replace(Dn, "^");
  }
  function aa(e) {
    return ns(e).replace(Jr, "%3D");
  }
  function ia(e) {
    return ps(e).replace(Sn, "%23").replace(Kr, "%3F");
  }
  function oa(e) {
    return e == null ? "" : ia(e).replace(Qr, "%2F");
  }
  function rt(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const la = /\/$/, ua = (e) => e.replace(la, "");
  function Zt(e, t, s = "/") {
    let n, r = {}, a = "", i = "";
    const l = t.indexOf("#");
    let o = t.indexOf("?");
    return l < o && l >= 0 && (o = -1), o > -1 && (n = t.slice(0, o), a = t.slice(o + 1, l > -1 ? l : t.length), r = e(a)), l > -1 && (n = n || t.slice(0, l), i = t.slice(l, t.length)), n = ha(n ?? t, s), {
      fullPath: n + (a && "?") + a + i,
      path: n,
      query: r,
      hash: rt(i)
    };
  }
  function ca(e, t) {
    const s = t.query ? e(t.query) : "";
    return t.path + (s && "?") + s + (t.hash || "");
  }
  function Qs(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function fa(e, t, s) {
    const n = t.matched.length - 1, r = s.matched.length - 1;
    return n > -1 && n === r && Ve(t.matched[n], s.matched[r]) && Rn(t.params, s.params) && e(t.query) === e(s.query) && t.hash === s.hash;
  }
  function Ve(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function Rn(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const s in e)
      if (!da(e[s], t[s]))
        return !1;
    return !0;
  }
  function da(e, t) {
    return se(e) ? Js(e, t) : se(t) ? Js(t, e) : e === t;
  }
  function Js(e, t) {
    return se(t) ? e.length === t.length && e.every((s, n) => s === t[n]) : e.length === 1 && e[0] === t;
  }
  function ha(e, t) {
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
  function ma(e) {
    if (!e)
      if (Ie) {
        const t = document.querySelector("base");
        e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ua(e);
  }
  const pa = /^[^#]+#/;
  function ya(e, t) {
    return e.replace(pa, "#") + t;
  }
  function ga(e, t) {
    const s = document.documentElement.getBoundingClientRect(), n = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: n.left - s.left - (t.left || 0),
      top: n.top - s.top - (t.top || 0)
    };
  }
  const bt = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function _a(e) {
    let t;
    if ("el" in e) {
      const s = e.el, n = typeof s == "string" && s.startsWith("#"), r = typeof s == "string" ? n ? document.getElementById(s.slice(1)) : document.querySelector(s) : s;
      if (!r)
        return;
      t = ga(r, e);
    } else
      t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Ks(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const rs = /* @__PURE__ */ new Map();
  function va(e, t) {
    rs.set(e, t);
  }
  function wa(e) {
    const t = rs.get(e);
    return rs.delete(e), t;
  }
  let ka = () => location.protocol + "//" + location.host;
  function bn(e, t) {
    const { pathname: s, search: n, hash: r } = t, a = e.indexOf("#");
    if (a > -1) {
      let l = r.includes(e.slice(a)) ? e.slice(a).length : 1, o = r.slice(l);
      return o[0] !== "/" && (o = "/" + o), Qs(o, "");
    }
    return Qs(s, e) + n + r;
  }
  function Sa(e, t, s, n) {
    let r = [], a = [], i = null;
    const l = ({ state: d }) => {
      const m = bn(e, location), R = s.value, T = t.value;
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
      d.state && d.replaceState(N({}, d.state, { scroll: bt() }), "");
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
  function Xs(e, t, s, n = !1, r = !1) {
    return {
      back: e,
      current: t,
      forward: s,
      replaced: n,
      position: window.history.length,
      scroll: r ? bt() : null
    };
  }
  function Ma(e) {
    const { history: t, location: s } = window, n = {
      value: bn(e, s)
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
      const c = e.indexOf("#"), d = c > -1 ? (s.host && document.querySelector("base") ? e : e.slice(c)) + o : ka() + e + o;
      try {
        t[h ? "replaceState" : "pushState"](u, "", d), r.value = u;
      } catch (m) {
        console.error(m), s[h ? "replace" : "assign"](d);
      }
    }
    function i(o, u) {
      const h = N({}, t.state, Xs(
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
          scroll: bt()
        }
      );
      a(h.current, h, !0);
      const c = N({}, Xs(n.value, o, null), { position: h.position + 1 }, u);
      a(o, c, !1), n.value = o;
    }
    return {
      location: n,
      state: r,
      push: l,
      replace: i
    };
  }
  function Da(e) {
    e = ma(e);
    const t = Ma(e), s = Sa(e, t.state, t.location, t.replace);
    function n(a, i = !0) {
      i || s.pauseListeners(), history.go(a);
    }
    const r = N({
      // it's overridden right after
      location: "",
      base: e,
      go: n,
      createHref: ya.bind(null, e)
    }, t, s);
    return Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value
    }), Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value
    }), r;
  }
  function Oa(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function Pn(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  const Tn = Symbol("");
  var en;
  (function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
  })(en || (en = {}));
  function $e(e, t) {
    return N(new Error(), {
      type: e,
      [Tn]: !0
    }, t);
  }
  function fe(e, t) {
    return e instanceof Error && Tn in e && (t == null || !!(e.type & t));
  }
  const tn = "[^/]+?", Ya = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  }, Ra = /[.+*?^${}()[\]/\\]/g;
  function ba(e, t) {
    const s = N({}, Ya, t), n = [];
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
          c || (r += "/"), r += d.value.replace(Ra, "\\$&"), m += 40;
        else if (d.type === 1) {
          const { value: R, repeatable: T, optional: L, regexp: U } = d;
          a.push({
            name: R,
            repeatable: T,
            optional: L
          });
          const x = U || tn;
          if (x !== tn) {
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
  function Pa(e, t) {
    let s = 0;
    for (; s < e.length && s < t.length; ) {
      const n = t[s] - e[s];
      if (n)
        return n;
      s++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function xn(e, t) {
    let s = 0;
    const n = e.score, r = t.score;
    for (; s < n.length && s < r.length; ) {
      const a = Pa(n[s], r[s]);
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
  const Ta = {
    type: 0,
    value: ""
  }, xa = /[a-zA-Z0-9_]/;
  function Na(e) {
    if (!e)
      return [[]];
    if (e === "/")
      return [[Ta]];
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
          o === "(" ? s = 2 : xa.test(o) ? d() : (c(), s = 0, o !== "*" && o !== "?" && o !== "+" && l--);
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
  function Ca(e, t, s) {
    const n = ba(Na(e.path), s), r = N(n, {
      record: e,
      parent: t,
      // these needs to be populated by the parent
      children: [],
      alias: []
    });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
  }
  function Ea(e, t) {
    const s = [], n = /* @__PURE__ */ new Map();
    t = on({ strict: !1, end: !0, sensitive: !1 }, t);
    function r(c) {
      return n.get(c);
    }
    function a(c, d, m) {
      const R = !m, T = rn(c);
      T.aliasOf = m && m.record;
      const L = on(t, c), U = [T];
      if ("alias" in c) {
        const ee = typeof c.alias == "string" ? [c.alias] : c.alias;
        for (const Re of ee)
          U.push(
            // we need to normalize again to ensure the `mods` property
            // being non enumerable
            rn(N({}, T, {
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
        if (x = Ca(ee, d, L), m ? m.alias.push(x) : (E = E || x, E !== x && E.alias.push(x), R && c.name && !an(x) && i(c.name)), Nn(x) && o(x), T.children) {
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
      if (Pn(c)) {
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
      const d = Aa(c, s);
      s.splice(d, 0, c), c.record.name && !an(c) && n.set(c.record.name, c);
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
          nn(
            d.params,
            // only keep params that exist in the resolved location
            // only keep optional params coming from a parent record
            m.keys.filter((E) => !E.optional).concat(m.parent ? m.parent.keys.filter((E) => E.optional) : []).map((E) => E.name)
          ),
          // discard any existing params in the current location that do not exist here
          // #1497 this ensures better active/exact matching
          c.params && nn(c.params, m.keys.map((E) => E.name))
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
        meta: Ia(U)
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
  function nn(e, t) {
    const s = {};
    for (const n of t)
      n in e && (s[n] = e[n]);
    return s;
  }
  function rn(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: Wa(e),
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
  function Wa(e) {
    const t = {}, s = e.props || !1;
    if ("component" in e)
      t.default = s;
    else
      for (const n in e.components)
        t[n] = typeof s == "object" ? s[n] : s;
    return t;
  }
  function an(e) {
    for (; e; ) {
      if (e.record.aliasOf)
        return !0;
      e = e.parent;
    }
    return !1;
  }
  function Ia(e) {
    return e.reduce((t, s) => N(t, s.meta), {});
  }
  function on(e, t) {
    const s = {};
    for (const n in e)
      s[n] = n in t ? t[n] : e[n];
    return s;
  }
  function Aa(e, t) {
    let s = 0, n = t.length;
    for (; s !== n; ) {
      const a = s + n >> 1;
      xn(e, t[a]) < 0 ? n = a : s = a + 1;
    }
    const r = Fa(e);
    return r && (n = t.lastIndexOf(r, n - 1)), n;
  }
  function Fa(e) {
    let t = e;
    for (; t = t.parent; )
      if (Nn(t) && xn(e, t) === 0)
        return t;
  }
  function Nn({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
  }
  function La(e) {
    const t = {};
    if (e === "" || e === "?")
      return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < n.length; ++r) {
      const a = n[r].replace(Mn, " "), i = a.indexOf("="), l = rt(i < 0 ? a : a.slice(0, i)), o = i < 0 ? null : rt(a.slice(i + 1));
      if (l in t) {
        let u = t[l];
        se(u) || (u = t[l] = [u]), u.push(o);
      } else
        t[l] = o;
    }
    return t;
  }
  function ln(e) {
    let t = "";
    for (let s in e) {
      const n = e[s];
      if (s = aa(s), n == null) {
        n !== void 0 && (t += (t.length ? "&" : "") + s);
        continue;
      }
      (se(n) ? n.map((a) => a && ns(a)) : [n && ns(n)]).forEach((a) => {
        a !== void 0 && (t += (t.length ? "&" : "") + s, a != null && (t += "=" + a));
      });
    }
    return t;
  }
  function Ua(e) {
    const t = {};
    for (const s in e) {
      const n = e[s];
      n !== void 0 && (t[s] = se(n) ? n.map((r) => r == null ? null : "" + r) : n == null ? n : "" + n);
    }
    return t;
  }
  const Ha = Symbol(""), un = Symbol(""), ys = Symbol(""), Cn = Symbol(""), as = Symbol("");
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
        })) : d instanceof Error ? o(d) : Oa(d) ? o($e(2, {
          from: t,
          to: d
        })) : (i && // since enterCallbackArray is truthy, both record and name also are
        n.enterCallbacks[r] === i && typeof d == "function" && i.push(d), l());
      }, h = a(() => e.call(n && n.instances[r], t, s, u));
      let c = Promise.resolve(h);
      e.length < 3 && (c = c.then(u)), c.catch((d) => o(d));
    });
  }
  function Qt(e, t, s, n, r = (a) => a()) {
    const a = [];
    for (const i of e)
      for (const l in i.components) {
        let o = i.components[l];
        if (!(t !== "beforeRouteEnter" && !i.instances[l]))
          if (kn(o)) {
            const h = (o.__vccOpts || o)[t];
            h && a.push(Me(h, s, n, i, l, r));
          } else {
            let u = o();
            a.push(() => u.then((h) => {
              if (!h)
                throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
              const c = qr(h) ? h.default : h;
              i.mods[l] = h, i.components[l] = c;
              const m = (c.__vccOpts || c)[t];
              return m && Me(m, s, n, i, l, r)();
            }));
          }
      }
    return a;
  }
  function cn(e) {
    const t = nt(ys), s = nt(Cn), n = ie(() => {
      const o = Xe(e.to);
      return t.resolve(o);
    }), r = ie(() => {
      const { matched: o } = n.value, { length: u } = o, h = o[u - 1], c = s.matched;
      if (!h || !c.length)
        return -1;
      const d = c.findIndex(Ve.bind(null, h));
      if (d > -1)
        return d;
      const m = fn(o[u - 2]);
      return (
        // we are dealing with nested routes
        u > 1 && // if the parent and matched route have the same path, this link is
        // referring to the empty child. Or we currently are on a different
        // child of the same parent
        fn(h) === m && // avoid comparing the child with its parent
        c[c.length - 1].path !== m ? c.findIndex(Ve.bind(null, o[u - 2])) : d
      );
    }), a = ie(() => r.value > -1 && ja(s.params, n.value.params)), i = ie(() => r.value > -1 && r.value === s.matched.length - 1 && Rn(s.params, n.value.params));
    function l(o = {}) {
      return Ga(o) ? t[Xe(e.replace) ? "replace" : "push"](
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
  const Va = /* @__PURE__ */ ct({
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
    useLink: cn,
    setup(e, { slots: t }) {
      const s = Nr(cn(e)), { options: n } = nt(ys), r = ie(() => ({
        [dn(e.activeClass, n.linkActiveClass, "router-link-active")]: s.isActive,
        // [getLinkClass(
        //   props.inactiveClass,
        //   options.linkInactiveClass,
        //   'router-link-inactive'
        // )]: !link.isExactActive,
        [dn(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
      }));
      return () => {
        const a = t.default && t.default(s);
        return e.custom ? a : wn("a", {
          "aria-current": s.isExactActive ? e.ariaCurrentValue : null,
          href: s.href,
          // this would override user added attrs but Vue will still add
          // the listener, so we end up triggering both
          onClick: s.navigate,
          class: r.value
        }, a);
      };
    }
  }), $a = Va;
  function Ga(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t))
          return;
      }
      return e.preventDefault && e.preventDefault(), !0;
    }
  }
  function ja(e, t) {
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
  function fn(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const dn = (e, t, s) => e ?? t ?? s, za = /* @__PURE__ */ ct({
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
      const n = nt(as), r = ie(() => e.route || n.value), a = nt(un, 0), i = ie(() => {
        let u = Xe(a);
        const { matched: h } = r.value;
        let c;
        for (; (c = h[u]) && !c.components; )
          u++;
        return u;
      }), l = ie(() => r.value.matched[i.value]);
      zt(un, ie(() => i.value + 1)), zt(Ha, l), zt(as, r);
      const o = Cr();
      return Er(() => [o.value, l.value, e.name], ([u, h, c], [d, m, R]) => {
        h && (h.instances[c] = u, m && m !== h && u && u === d && (h.leaveGuards.size || (h.leaveGuards = m.leaveGuards), h.updateGuards.size || (h.updateGuards = m.updateGuards))), u && h && // if there is no instance but to and from are the same this might be
        // the first visit
        (!m || !Ve(h, m) || !d) && (h.enterCallbacks[c] || []).forEach((T) => T(u));
      }, { flush: "post" }), () => {
        const u = r.value, h = e.name, c = l.value, d = c && c.components[h];
        if (!d)
          return hn(s.default, { Component: d, route: u });
        const m = c.props[h], R = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null, L = wn(d, N({}, R, t, {
          onVnodeUnmounted: (U) => {
            U.component.isUnmounted && (c.instances[h] = null);
          },
          ref: o
        }));
        return (
          // pass the vnode to the slot as a prop.
          // h and <component :is="..."> both accept vnodes
          hn(s.default, { Component: L, route: u }) || L
        );
      };
    }
  });
  function hn(e, t) {
    if (!e)
      return null;
    const s = e(t);
    return s.length === 1 ? s[0] : s;
  }
  const Ba = za;
  function qa(e) {
    const t = Ea(e.routes, e), s = e.parseQuery || La, n = e.stringifyQuery || ln, r = e.history, a = Qe(), i = Qe(), l = Qe(), o = Pr(Se);
    let u = Se;
    Ie && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const h = qt.bind(null, (f) => "" + f), c = qt.bind(null, oa), d = (
      // @ts-expect-error: intentionally avoid the type check
      qt.bind(null, rt)
    );
    function m(f, v) {
      let g, k;
      return Pn(f) ? (g = t.getRecordMatcher(f), k = v) : k = f, t.addRoute(k, g);
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
        const M = Zt(s, f, v.path), G = t.resolve({ path: M.path }, v), qe = r.createHref(M.fullPath);
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
          path: Zt(s, f.path, v.path).path
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
      const $ = ca(n, N({}, f, {
        hash: ra(W),
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
          n === ln ? Ua(f.query) : f.query || {}
        )
      }, k, {
        redirectedFrom: void 0,
        href: O
      });
    }
    function x(f) {
      return typeof f == "string" ? Zt(s, f, o.value.path) : N({}, f);
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
      return !$ && fa(n, k, g) && (qe = $e(16, { to: G, from: k }), js(
        k,
        k,
        // this is a push, the only way for it to be triggered from a
        // history.listen is with a redirect, which makes it become a push
        !0,
        // This cannot be the first navigation because the initial location
        // cannot be manually navigated to
        !1
      )), (qe ? Promise.resolve(qe) : Hs(G, k)).catch((B) => fe(B) ? (
        // navigation redirects still mark the router as ready
        fe(
          B,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ) ? B : $t(B)
      ) : (
        // reject any unknown error
        Vt(B, G, k)
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
          B = $s(G, k, !0, O, W);
        return Vs(G, k, B), B;
      });
    }
    function Or(f, v) {
      const g = E(f, v);
      return g ? Promise.reject(g) : Promise.resolve();
    }
    function Ut(f) {
      const v = yt.values().next().value;
      return v && typeof v.runWithContext == "function" ? v.runWithContext(f) : f();
    }
    function Hs(f, v) {
      let g;
      const [k, W, $] = Za(f, v);
      g = Qt(k.reverse(), "beforeRouteLeave", f, v);
      for (const M of k)
        M.leaveGuards.forEach((G) => {
          g.push(Me(G, f, v));
        });
      const O = Or.bind(null, f, v);
      return g.push(O), Ce(g).then(() => {
        g = [];
        for (const M of a.list())
          g.push(Me(M, f, v));
        return g.push(O), Ce(g);
      }).then(() => {
        g = Qt(W, "beforeRouteUpdate", f, v);
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
      }).then(() => (f.matched.forEach((M) => M.enterCallbacks = {}), g = Qt($, "beforeRouteEnter", f, v, Ut), g.push(O), Ce(g))).then(() => {
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
    function Vs(f, v, g) {
      l.list().forEach((k) => Ut(() => k(f, v, g)));
    }
    function $s(f, v, g, k, W) {
      const $ = E(f, v);
      if ($)
        return $;
      const O = v === Se, M = Ie ? history.state : {};
      g && (k || O ? r.replace(f.fullPath, N({
        scroll: O && M && M.scroll
      }, W)) : r.push(f.fullPath, W)), o.value = f, js(f, v, g, O), $t();
    }
    let Be;
    function Yr() {
      Be || (Be = r.listen((f, v, g) => {
        if (!zs.listening)
          return;
        const k = U(f), W = ke(k);
        if (W) {
          Q(N(W, { replace: !0 }), k).catch(et);
          return;
        }
        u = k;
        const $ = o.value;
        Ie && va(Ks($.fullPath, g.delta), bt()), Hs(k, $).catch((O) => fe(
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
        }).catch(et), Promise.reject()) : (g.delta && r.go(-g.delta, !1), Vt(O, k, $))).then((O) => {
          O = O || $s(
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
          ) && r.go(-1, !1)), Vs(k, $, O);
        }).catch(et);
      }));
    }
    let Ht = Qe(), Gs = Qe(), pt;
    function Vt(f, v, g) {
      $t(f);
      const k = Gs.list();
      return k.length ? k.forEach((W) => W(f, v, g)) : console.error(f), Promise.reject(f);
    }
    function Rr() {
      return pt && o.value !== Se ? Promise.resolve() : new Promise((f, v) => {
        Ht.add([f, v]);
      });
    }
    function $t(f) {
      return pt || (pt = !f, Yr(), Ht.list().forEach(([v, g]) => f ? g(f) : v()), Ht.reset()), f;
    }
    function js(f, v, g, k) {
      const { scrollBehavior: W } = e;
      if (!Ie || !W)
        return Promise.resolve();
      const $ = !g && wa(Ks(f.fullPath, 0)) || (k || !g) && history.state && history.state.scroll || null;
      return xr().then(() => W(f, v, $)).then((O) => O && _a(O)).catch((O) => Vt(O, f, v));
    }
    const Gt = (f) => r.go(f);
    let jt;
    const yt = /* @__PURE__ */ new Set(), zs = {
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
      go: Gt,
      back: () => Gt(-1),
      forward: () => Gt(1),
      beforeEach: a.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: Gs.add,
      isReady: Rr,
      install(f) {
        const v = this;
        f.component("RouterLink", $a), f.component("RouterView", Ba), f.config.globalProperties.$router = v, Object.defineProperty(f.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => Xe(o)
        }), Ie && // used for the initial navigation client side to avoid pushing
        // multiple times when the router is used in multiple apps
        !jt && o.value === Se && (jt = !0, ee(r.location).catch((W) => {
        }));
        const g = {};
        for (const W in Se)
          Object.defineProperty(g, W, {
            get: () => o.value[W],
            enumerable: !0
          });
        f.provide(ys, v), f.provide(Cn, Tr(g)), f.provide(as, o);
        const k = f.unmount;
        yt.add(f), f.unmount = function() {
          yt.delete(f), yt.size < 1 && (u = Se, Be && Be(), Be = null, o.value = Se, jt = !1, pt = !1), k();
        };
      }
    };
    function Ce(f) {
      return f.reduce((v, g) => v.then(() => Ut(g)), Promise.resolve());
    }
    return zs;
  }
  function Za(e, t) {
    const s = [], n = [], r = [], a = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < a; i++) {
      const l = t.matched[i];
      l && (e.matched.find((u) => Ve(u, l)) ? n.push(l) : s.push(l));
      const o = e.matched[i];
      o && (t.matched.find((u) => Ve(u, o)) || r.push(o));
    }
    return [s, n, r];
  }
  const Qa = ct({
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
        let e = {
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
  }), gs = (e, t) => {
    const s = e.__vccOpts || e;
    for (const [n, r] of t)
      s[n] = r;
    return s;
  }, Ja = { class: "container-fluid mt-5" }, Ka = { class: "input-group pt-5 mb-3" };
  function Xa(e, t, s, n, r, a) {
    return Pe(), We("div", Ja, [
      t[3] || (t[3] = H("div", { class: "pt-5 pb-5" }, null, -1)),
      t[4] || (t[4] = H("div", {
        class: "mt-5",
        id: "logo"
      }, [
        H("img", { src: "/img/lucene-net-color.png" })
      ], -1)),
      H("form", {
        onSubmit: t[1] || (t[1] = Wr((...i) => e.sendSearch && e.sendSearch(...i), ["prevent"]))
      }, [
        H("div", Ka, [
          Ir(H("input", {
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
            [Ar, e.prompt]
          ])
        ]),
        t[2] || (t[2] = H("button", {
          type: "submit",
          class: "btn btn-lg btn-dark col-md-4"
        }, "Search", -1))
      ], 32)
    ]);
  }
  const ei = /* @__PURE__ */ gs(Qa, [["render", Xa]]);
  class ti {
  }
  //! moment.js
  //! version : 2.30.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var En;
  function y() {
    return En.apply(null, arguments);
  }
  function si(e) {
    En = e;
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
  function _s(e) {
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
  function Wn(e, t) {
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
    return rr(e, t, s, n, !0).utc();
  }
  function ni() {
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
    return e._pf == null && (e._pf = ni()), e._pf;
  }
  var is;
  Array.prototype.some ? is = Array.prototype.some : is = function(e) {
    var t = Object(this), s = t.length >>> 0, n;
    for (n = 0; n < s; n++)
      if (n in t && e.call(this, t[n], n, t))
        return !0;
    return !1;
  };
  function vs(e) {
    var t = null, s = !1, n = e._d && !isNaN(e._d.getTime());
    if (n && (t = S(e), s = is.call(t.parsedDateParts, function(r) {
      return r != null;
    }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = n;
    else
      return n;
    return e._isValid;
  }
  function Pt(e) {
    var t = ue(NaN);
    return e != null ? De(S(t), e) : S(t).userInvalidated = !0, t;
  }
  var mn = y.momentProperties = [], Jt = !1;
  function ws(e, t) {
    var s, n, r, a = mn.length;
    if (q(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), q(t._i) || (e._i = t._i), q(t._f) || (e._f = t._f), q(t._l) || (e._l = t._l), q(t._strict) || (e._strict = t._strict), q(t._tzm) || (e._tzm = t._tzm), q(t._isUTC) || (e._isUTC = t._isUTC), q(t._offset) || (e._offset = t._offset), q(t._pf) || (e._pf = S(t)), q(t._locale) || (e._locale = t._locale), a > 0)
      for (s = 0; s < a; s++)
        n = mn[s], r = t[n], q(r) || (e[n] = r);
    return e;
  }
  function dt(e) {
    ws(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Jt === !1 && (Jt = !0, y.updateOffset(this), Jt = !1);
  }
  function re(e) {
    return e instanceof dt || e != null && e._isAMomentObject != null;
  }
  function In(e) {
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
        In(
          e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
        ), s = !1;
      }
      return t.apply(this, arguments);
    }, t);
  }
  var pn = {};
  function An(e, t) {
    y.deprecationHandler != null && y.deprecationHandler(e, t), pn[e] || (In(t), pn[e] = !0);
  }
  y.suppressDeprecationWarnings = !1;
  y.deprecationHandler = null;
  function ce(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
  }
  function ri(e) {
    var t, s;
    for (s in e)
      b(e, s) && (t = e[s], ce(t) ? this[s] = t : this["_" + s] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function os(e, t) {
    var s = De({}, e), n;
    for (n in t)
      b(t, n) && (xe(e[n]) && xe(t[n]) ? (s[n] = {}, De(s[n], e[n]), De(s[n], t[n])) : t[n] != null ? s[n] = t[n] : delete s[n]);
    for (n in e)
      b(e, n) && !b(t, n) && xe(e[n]) && (s[n] = De({}, s[n]));
    return s;
  }
  function ks(e) {
    e != null && this.set(e);
  }
  var ls;
  Object.keys ? ls = Object.keys : ls = function(e) {
    var t, s = [];
    for (t in e)
      b(e, t) && s.push(t);
    return s;
  };
  var ai = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function ii(e, t, s) {
    var n = this._calendar[e] || this._calendar.sameElse;
    return ce(n) ? n.call(t, s) : n;
  }
  function le(e, t, s) {
    var n = "" + Math.abs(e), r = t - n.length, a = e >= 0;
    return (a ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n;
  }
  var Ss = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, gt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Kt = {}, Le = {};
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
  function oi(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
  }
  function li(e) {
    var t = e.match(Ss), s, n;
    for (s = 0, n = t.length; s < n; s++)
      Le[t[s]] ? t[s] = Le[t[s]] : t[s] = oi(t[s]);
    return function(r) {
      var a = "", i;
      for (i = 0; i < n; i++)
        a += ce(t[i]) ? t[i].call(r, e) : t[i];
      return a;
    };
  }
  function vt(e, t) {
    return e.isValid() ? (t = Fn(t, e.localeData()), Kt[t] = Kt[t] || li(t), Kt[t](e)) : e.localeData().invalidDate();
  }
  function Fn(e, t) {
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
  var ui = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function ci(e) {
    var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
    return t || !s ? t : (this._longDateFormat[e] = s.match(Ss).map(function(n) {
      return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
    }).join(""), this._longDateFormat[e]);
  }
  var fi = "Invalid date";
  function di() {
    return this._invalidDate;
  }
  var hi = "%d", mi = /\d{1,2}/;
  function pi(e) {
    return this._ordinal.replace("%d", e);
  }
  var yi = {
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
    return ce(r) ? r(e, t, s, n) : r.replace(/%d/i, e);
  }
  function _i(e, t) {
    var s = this._relativeTime[e > 0 ? "future" : "past"];
    return ce(s) ? s(t) : s.replace(/%s/i, t);
  }
  var yn = {
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
    return typeof e == "string" ? yn[e] || yn[e.toLowerCase()] : void 0;
  }
  function Ms(e) {
    var t = {}, s, n;
    for (n in e)
      b(e, n) && (s = X(n), s && (t[s] = e[n]));
    return t;
  }
  var vi = {
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
  function wi(e) {
    var t = [], s;
    for (s in e)
      b(e, s) && t.push({ unit: s, priority: vi[s] });
    return t.sort(function(n, r) {
      return n.priority - r.priority;
    }), t;
  }
  var Ln = /\d/, Z = /\d\d/, Un = /\d{3}/, Ds = /\d{4}/, Tt = /[+-]?\d{6}/, A = /\d\d?/, Hn = /\d\d\d\d?/, Vn = /\d\d\d\d\d\d?/, xt = /\d{1,3}/, Os = /\d{1,4}/, Nt = /[+-]?\d{1,6}/, Ge = /\d+/, Ct = /[+-]?\d+/, ki = /Z|[+-]\d\d:?\d\d/gi, Et = /Z|[+-]\d\d(?::?\d\d)?/gi, Si = /[+-]?\d+(\.\d{1,3})?/, ht = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, je = /^[1-9]\d?/, Ys = /^([1-9]\d|\d)/, Mt;
  Mt = {};
  function _(e, t, s) {
    Mt[e] = ce(t) ? t : function(n, r) {
      return n && s ? s : t;
    };
  }
  function Mi(e, t) {
    return b(Mt, e) ? Mt[e](t._strict, t._locale) : new RegExp(Di(e));
  }
  function Di(e) {
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
  var us = {};
  function C(e, t) {
    var s, n = t, r;
    for (typeof e == "string" && (e = [e]), _e(t) && (n = function(a, i) {
      i[t] = D(a);
    }), r = e.length, s = 0; s < r; s++)
      us[e[s]] = n;
  }
  function mt(e, t) {
    C(e, function(s, n, r, a) {
      r._w = r._w || {}, t(s, r._w, r, a);
    });
  }
  function Oi(e, t, s) {
    t != null && b(us, e) && us[e](t, s._a, s, e);
  }
  function Wt(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
  }
  var z = 0, me = 1, oe = 2, j = 3, te = 4, pe = 5, Te = 6, Yi = 7, Ri = 8;
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
  _("Y", Ct);
  _("YY", A, Z);
  _("YYYY", Os, Ds);
  _("YYYYY", Nt, Tt);
  _("YYYYYY", Nt, Tt);
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
    return Wt(e) ? 366 : 365;
  }
  y.parseTwoDigitYear = function(e) {
    return D(e) + (D(e) > 68 ? 1900 : 2e3);
  };
  var $n = ze("FullYear", !0);
  function bi() {
    return Wt(this.year());
  }
  function ze(e, t) {
    return function(s) {
      return s != null ? (Gn(this, e, s), y.updateOffset(this, t), this) : it(this, e);
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
  function Gn(e, t, s) {
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
      a = s, i = e.month(), l = e.date(), l = l === 29 && i === 1 && !Wt(a) ? 28 : l, r ? n.setUTCFullYear(a, i, l) : n.setFullYear(a, i, l);
    }
  }
  function Pi(e) {
    return e = X(e), ce(this[e]) ? this[e]() : this;
  }
  function Ti(e, t) {
    if (typeof e == "object") {
      e = Ms(e);
      var s = wi(e), n, r = s.length;
      for (n = 0; n < r; n++)
        this[s[n].unit](e[s[n].unit]);
    } else if (e = X(e), ce(this[e]))
      return this[e](t);
    return this;
  }
  function xi(e, t) {
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
  function Rs(e, t) {
    if (isNaN(e) || isNaN(t))
      return NaN;
    var s = xi(t, 12);
    return e += (t - s) / 12, s === 1 ? Wt(e) ? 29 : 28 : 31 - s % 7 % 2;
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
  var Ni = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  ), jn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), zn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ci = ht, Ei = ht;
  function Wi(e, t) {
    return e ? ne(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || zn).test(t) ? "format" : "standalone"][e.month()] : ne(this._months) ? this._months : this._months.standalone;
  }
  function Ii(e, t) {
    return e ? ne(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[zn.test(t) ? "format" : "standalone"][e.month()] : ne(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }
  function Ai(e, t, s) {
    var n, r, a, i = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
        a = ue([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
          a,
          ""
        ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
    return s ? t === "MMM" ? (r = V.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = V.call(this._longMonthsParse, i), r !== -1 ? r : null) : t === "MMM" ? (r = V.call(this._shortMonthsParse, i), r !== -1 ? r : (r = V.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = V.call(this._longMonthsParse, i), r !== -1 ? r : (r = V.call(this._shortMonthsParse, i), r !== -1 ? r : null));
  }
  function Fi(e, t, s) {
    var n, r, a;
    if (this._monthsParseExact)
      return Ai.call(this, e, t, s);
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
  function Bn(e, t) {
    if (!e.isValid())
      return e;
    if (typeof t == "string") {
      if (/^\d+$/.test(t))
        t = D(t);
      else if (t = e.localeData().monthsParse(t), !_e(t))
        return e;
    }
    var s = t, n = e.date();
    return n = n < 29 ? n : Math.min(n, Rs(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, n) : e._d.setMonth(s, n), e;
  }
  function qn(e) {
    return e != null ? (Bn(this, e), y.updateOffset(this, !0), this) : it(this, "Month");
  }
  function Li() {
    return Rs(this.year(), this.month());
  }
  function Ui(e) {
    return this._monthsParseExact ? (b(this, "_monthsRegex") || Zn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (b(this, "_monthsShortRegex") || (this._monthsShortRegex = Ci), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }
  function Hi(e) {
    return this._monthsParseExact ? (b(this, "_monthsRegex") || Zn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (b(this, "_monthsRegex") || (this._monthsRegex = Ei), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }
  function Zn() {
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
  function Vi(e, t, s, n, r, a, i) {
    var l;
    return e < 100 && e >= 0 ? (l = new Date(e + 400, t, s, n, r, a, i), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, s, n, r, a, i), l;
  }
  function ot(e) {
    var t, s;
    return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
  }
  function Dt(e, t, s) {
    var n = 7 + t - s, r = (7 + ot(e, 0, n).getUTCDay() - t) % 7;
    return -r + n - 1;
  }
  function Qn(e, t, s, n, r) {
    var a = (7 + s - n) % 7, i = Dt(e, n, r), l = 1 + 7 * (t - 1) + a + i, o, u;
    return l <= 0 ? (o = e - 1, u = st(o) + l) : l > st(e) ? (o = e + 1, u = l - st(e)) : (o = e, u = l), {
      year: o,
      dayOfYear: u
    };
  }
  function lt(e, t, s) {
    var n = Dt(e.year(), t, s), r = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, i;
    return r < 1 ? (i = e.year() - 1, a = r + ge(i, t, s)) : r > ge(e.year(), t, s) ? (a = r - ge(e.year(), t, s), i = e.year() + 1) : (i = e.year(), a = r), {
      week: a,
      year: i
    };
  }
  function ge(e, t, s) {
    var n = Dt(e, t, s), r = Dt(e + 1, t, s);
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
  function $i(e) {
    return lt(e, this._week.dow, this._week.doy).week;
  }
  var Gi = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 6th is the first week of the year.
  };
  function ji() {
    return this._week.dow;
  }
  function zi() {
    return this._week.doy;
  }
  function Bi(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  function qi(e) {
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
  function Zi(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
  }
  function Qi(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
  }
  function bs(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  var Ji = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Jn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ki = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Xi = ht, eo = ht, to = ht;
  function so(e, t) {
    var s = ne(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? bs(s, this._week.dow) : e ? s[e.day()] : s;
  }
  function no(e) {
    return e === !0 ? bs(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }
  function ro(e) {
    return e === !0 ? bs(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }
  function ao(e, t, s) {
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
  function io(e, t, s) {
    var n, r, a;
    if (this._weekdaysParseExact)
      return ao.call(this, e, t, s);
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
  function oo(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = it(this, "Day");
    return e != null ? (e = Zi(e, this.localeData()), this.add(e - t, "d")) : t;
  }
  function lo(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d");
  }
  function uo(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      var t = Qi(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    } else
      return this.day() || 7;
  }
  function co(e) {
    return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Ps.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (b(this, "_weekdaysRegex") || (this._weekdaysRegex = Xi), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }
  function fo(e) {
    return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Ps.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (b(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = eo), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }
  function ho(e) {
    return this._weekdaysParseExact ? (b(this, "_weekdaysRegex") || Ps.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (b(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = to), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }
  function Ps() {
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
  function Ts() {
    return this.hours() % 12 || 12;
  }
  function mo() {
    return this.hours() || 24;
  }
  w("H", ["HH", 2], 0, "hour");
  w("h", ["hh", 2], 0, Ts);
  w("k", ["kk", 2], 0, mo);
  w("hmm", 0, 0, function() {
    return "" + Ts.apply(this) + le(this.minutes(), 2);
  });
  w("hmmss", 0, 0, function() {
    return "" + Ts.apply(this) + le(this.minutes(), 2) + le(this.seconds(), 2);
  });
  w("Hmm", 0, 0, function() {
    return "" + this.hours() + le(this.minutes(), 2);
  });
  w("Hmmss", 0, 0, function() {
    return "" + this.hours() + le(this.minutes(), 2) + le(this.seconds(), 2);
  });
  function Kn(e, t) {
    w(e, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        t
      );
    });
  }
  Kn("a", !0);
  Kn("A", !1);
  function Xn(e, t) {
    return t._meridiemParse;
  }
  _("a", Xn);
  _("A", Xn);
  _("H", A, Ys);
  _("h", A, je);
  _("k", A, je);
  _("HH", A, Z);
  _("hh", A, Z);
  _("kk", A, Z);
  _("hmm", Hn);
  _("hmmss", Vn);
  _("Hmm", Hn);
  _("Hmmss", Vn);
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
  function po(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  var yo = /[ap]\.?m?\.?/i, go = ze("Hours", !0);
  function _o(e, t, s) {
    return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
  }
  var er = {
    calendar: ai,
    longDateFormat: ui,
    invalidDate: fi,
    ordinal: hi,
    dayOfMonthOrdinalParse: mi,
    relativeTime: yi,
    months: Ni,
    monthsShort: jn,
    week: Gi,
    weekdays: Ji,
    weekdaysMin: Ki,
    weekdaysShort: Jn,
    meridiemParse: yo
  }, F = {}, Je = {}, ut;
  function vo(e, t) {
    var s, n = Math.min(e.length, t.length);
    for (s = 0; s < n; s += 1)
      if (e[s] !== t[s])
        return s;
    return n;
  }
  function gn(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function wo(e) {
    for (var t = 0, s, n, r, a; t < e.length; ) {
      for (a = gn(e[t]).split("-"), s = a.length, n = gn(e[t + 1]), n = n ? n.split("-") : null; s > 0; ) {
        if (r = It(a.slice(0, s).join("-")), r)
          return r;
        if (n && n.length >= s && vo(a, n) >= s - 1)
          break;
        s--;
      }
      t++;
    }
    return ut;
  }
  function ko(e) {
    return !!(e && e.match("^[^/\\\\]*$"));
  }
  function It(e) {
    var t = null, s;
    if (F[e] === void 0 && typeof St < "u" && St && St.exports && ko(e))
      try {
        t = ut._abbr, s = require, s("./locale/" + e), Ye(t);
      } catch {
        F[e] = null;
      }
    return F[e];
  }
  function Ye(e, t) {
    var s;
    return e && (q(t) ? s = ve(e) : s = xs(e, t), s ? ut = s : typeof console < "u" && console.warn && console.warn(
      "Locale " + e + " not found. Did you forget to load it?"
    )), ut._abbr;
  }
  function xs(e, t) {
    if (t !== null) {
      var s, n = er;
      if (t.abbr = e, F[e] != null)
        An(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ), n = F[e]._config;
      else if (t.parentLocale != null)
        if (F[t.parentLocale] != null)
          n = F[t.parentLocale]._config;
        else if (s = It(t.parentLocale), s != null)
          n = s._config;
        else
          return Je[t.parentLocale] || (Je[t.parentLocale] = []), Je[t.parentLocale].push({
            name: e,
            config: t
          }), null;
      return F[e] = new ks(os(n, t)), Je[e] && Je[e].forEach(function(r) {
        xs(r.name, r.config);
      }), Ye(e), F[e];
    } else
      return delete F[e], null;
  }
  function So(e, t) {
    if (t != null) {
      var s, n, r = er;
      F[e] != null && F[e].parentLocale != null ? F[e].set(os(F[e]._config, t)) : (n = It(e), n != null && (r = n._config), t = os(r, t), n == null && (t.abbr = e), s = new ks(t), s.parentLocale = F[e], F[e] = s), Ye(e);
    } else
      F[e] != null && (F[e].parentLocale != null ? (F[e] = F[e].parentLocale, e === Ye() && Ye(e)) : F[e] != null && delete F[e]);
    return F[e];
  }
  function ve(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
      return ut;
    if (!ne(e)) {
      if (t = It(e), t)
        return t;
      e = [e];
    }
    return wo(e);
  }
  function Mo() {
    return ls(F);
  }
  function Ns(e) {
    var t, s = e._a;
    return s && S(e).overflow === -2 && (t = s[me] < 0 || s[me] > 11 ? me : s[oe] < 1 || s[oe] > Rs(s[z], s[me]) ? oe : s[j] < 0 || s[j] > 24 || s[j] === 24 && (s[te] !== 0 || s[pe] !== 0 || s[Te] !== 0) ? j : s[te] < 0 || s[te] > 59 ? te : s[pe] < 0 || s[pe] > 59 ? pe : s[Te] < 0 || s[Te] > 999 ? Te : -1, S(e)._overflowDayOfYear && (t < z || t > oe) && (t = oe), S(e)._overflowWeeks && t === -1 && (t = Yi), S(e)._overflowWeekday && t === -1 && (t = Ri), S(e).overflow = t), e;
  }
  var Do = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Oo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Yo = /Z|[+-]\d\d(?::?\d\d)?/, _t = [
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
  ], Xt = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], Ro = /^\/?Date\((-?\d+)/i, bo = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Po = {
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
  function tr(e) {
    var t, s, n = e._i, r = Do.exec(n) || Oo.exec(n), a, i, l, o, u = _t.length, h = Xt.length;
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
          if (Xt[t][1].exec(r[3])) {
            l = (r[2] || " ") + Xt[t][0];
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
        if (Yo.exec(r[4]))
          o = "Z";
        else {
          e._isValid = !1;
          return;
        }
      e._f = i + (l || "") + (o || ""), Es(e);
    } else
      e._isValid = !1;
  }
  function To(e, t, s, n, r, a) {
    var i = [
      xo(e),
      jn.indexOf(t),
      parseInt(s, 10),
      parseInt(n, 10),
      parseInt(r, 10)
    ];
    return a && i.push(parseInt(a, 10)), i;
  }
  function xo(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function No(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function Co(e, t, s) {
    if (e) {
      var n = Jn.indexOf(e), r = new Date(
        t[0],
        t[1],
        t[2]
      ).getDay();
      if (n !== r)
        return S(s).weekdayMismatch = !0, s._isValid = !1, !1;
    }
    return !0;
  }
  function Eo(e, t, s) {
    if (e)
      return Po[e];
    if (t)
      return 0;
    var n = parseInt(s, 10), r = n % 100, a = (n - r) / 100;
    return a * 60 + r;
  }
  function sr(e) {
    var t = bo.exec(No(e._i)), s;
    if (t) {
      if (s = To(
        t[4],
        t[3],
        t[2],
        t[5],
        t[6],
        t[7]
      ), !Co(t[1], s, e))
        return;
      e._a = s, e._tzm = Eo(t[8], t[9], t[10]), e._d = ot.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), S(e).rfc2822 = !0;
    } else
      e._isValid = !1;
  }
  function Wo(e) {
    var t = Ro.exec(e._i);
    if (t !== null) {
      e._d = /* @__PURE__ */ new Date(+t[1]);
      return;
    }
    if (tr(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    if (sr(e), e._isValid === !1)
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
  function Io(e) {
    var t = new Date(y.now());
    return e._useUTC ? [
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate()
    ] : [t.getFullYear(), t.getMonth(), t.getDate()];
  }
  function Cs(e) {
    var t, s, n = [], r, a, i;
    if (!e._d) {
      for (r = Io(e), e._w && e._a[oe] == null && e._a[me] == null && Ao(e), e._dayOfYear != null && (i = Ae(e._a[z], r[z]), (e._dayOfYear > st(i) || e._dayOfYear === 0) && (S(e)._overflowDayOfYear = !0), s = ot(i, 0, e._dayOfYear), e._a[me] = s.getUTCMonth(), e._a[oe] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
        e._a[t] = n[t] = r[t];
      for (; t < 7; t++)
        e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
      e._a[j] === 24 && e._a[te] === 0 && e._a[pe] === 0 && e._a[Te] === 0 && (e._nextDay = !0, e._a[j] = 0), e._d = (e._useUTC ? ot : Vi).apply(
        null,
        n
      ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[j] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (S(e).weekdayMismatch = !0);
    }
  }
  function Ao(e) {
    var t, s, n, r, a, i, l, o, u;
    t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, s = Ae(
      t.GG,
      e._a[z],
      lt(I(), 1, 4).year
    ), n = Ae(t.W, 1), r = Ae(t.E, 1), (r < 1 || r > 7) && (o = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, u = lt(I(), a, i), s = Ae(t.gg, e._a[z], u.year), n = Ae(t.w, u.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (o = !0)) : t.e != null ? (r = t.e + a, (t.e < 0 || t.e > 6) && (o = !0)) : r = a), n < 1 || n > ge(s, a, i) ? S(e)._overflowWeeks = !0 : o != null ? S(e)._overflowWeekday = !0 : (l = Qn(s, n, r, a, i), e._a[z] = l.year, e._dayOfYear = l.dayOfYear);
  }
  y.ISO_8601 = function() {
  };
  y.RFC_2822 = function() {
  };
  function Es(e) {
    if (e._f === y.ISO_8601) {
      tr(e);
      return;
    }
    if (e._f === y.RFC_2822) {
      sr(e);
      return;
    }
    e._a = [], S(e).empty = !0;
    var t = "" + e._i, s, n, r, a, i, l = t.length, o = 0, u, h;
    for (r = Fn(e._f, e._locale).match(Ss) || [], h = r.length, s = 0; s < h; s++)
      a = r[s], n = (t.match(Mi(a, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && S(e).unusedInput.push(i), t = t.slice(
        t.indexOf(n) + n.length
      ), o += n.length), Le[a] ? (n ? S(e).empty = !1 : S(e).unusedTokens.push(a), Oi(a, n, e)) : e._strict && !n && S(e).unusedTokens.push(a);
    S(e).charsLeftOver = l - o, t.length > 0 && S(e).unusedInput.push(t), e._a[j] <= 12 && S(e).bigHour === !0 && e._a[j] > 0 && (S(e).bigHour = void 0), S(e).parsedDateParts = e._a.slice(0), S(e).meridiem = e._meridiem, e._a[j] = Fo(
      e._locale,
      e._a[j],
      e._meridiem
    ), u = S(e).era, u !== null && (e._a[z] = e._locale.erasConvertYear(u, e._a[z])), Cs(e), Ns(e);
  }
  function Fo(e, t, s) {
    var n;
    return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (n = e.isPM(s), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
  }
  function Lo(e) {
    var t, s, n, r, a, i, l = !1, o = e._f.length;
    if (o === 0) {
      S(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (r = 0; r < o; r++)
      a = 0, i = !1, t = ws({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], Es(t), vs(t) && (i = !0), a += S(t).charsLeftOver, a += S(t).unusedTokens.length * 10, S(t).score = a, l ? a < n && (n = a, s = t) : (n == null || a < n || i) && (n = a, s = t, i && (l = !0));
    De(e, s || t);
  }
  function Uo(e) {
    if (!e._d) {
      var t = Ms(e._i), s = t.day === void 0 ? t.date : t.day;
      e._a = Wn(
        [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
        function(n) {
          return n && parseInt(n, 10);
        }
      ), Cs(e);
    }
  }
  function Ho(e) {
    var t = new dt(Ns(nr(e)));
    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
  }
  function nr(e) {
    var t = e._i, s = e._f;
    return e._locale = e._locale || ve(e._l), t === null || s === void 0 && t === "" ? Pt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), re(t) ? new dt(Ns(t)) : (ft(t) ? e._d = t : ne(s) ? Lo(e) : s ? Es(e) : Vo(e), vs(e) || (e._d = null), e));
  }
  function Vo(e) {
    var t = e._i;
    q(t) ? e._d = new Date(y.now()) : ft(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Wo(e) : ne(t) ? (e._a = Wn(t.slice(0), function(s) {
      return parseInt(s, 10);
    }), Cs(e)) : xe(t) ? Uo(e) : _e(t) ? e._d = new Date(t) : y.createFromInputFallback(e);
  }
  function rr(e, t, s, n, r) {
    var a = {};
    return (t === !0 || t === !1) && (n = t, t = void 0), (s === !0 || s === !1) && (n = s, s = void 0), (xe(e) && _s(e) || ne(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = r, a._l = s, a._i = e, a._f = t, a._strict = n, Ho(a);
  }
  function I(e, t, s, n) {
    return rr(e, t, s, n, !1);
  }
  var $o = K(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = I.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : Pt();
    }
  ), Go = K(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = I.apply(null, arguments);
      return this.isValid() && e.isValid() ? e > this ? this : e : Pt();
    }
  );
  function ar(e, t) {
    var s, n;
    if (t.length === 1 && ne(t[0]) && (t = t[0]), !t.length)
      return I();
    for (s = t[0], n = 1; n < t.length; ++n)
      (!t[n].isValid() || t[n][e](s)) && (s = t[n]);
    return s;
  }
  function jo() {
    var e = [].slice.call(arguments, 0);
    return ar("isBefore", e);
  }
  function zo() {
    var e = [].slice.call(arguments, 0);
    return ar("isAfter", e);
  }
  var Bo = function() {
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
  function qo(e) {
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
  function Zo() {
    return this._isValid;
  }
  function Qo() {
    return ae(NaN);
  }
  function At(e) {
    var t = Ms(e), s = t.year || 0, n = t.quarter || 0, r = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, l = t.hour || 0, o = t.minute || 0, u = t.second || 0, h = t.millisecond || 0;
    this._isValid = qo(t), this._milliseconds = +h + u * 1e3 + // 1000
    o * 6e4 + // 1000 * 60
    l * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +r + n * 3 + s * 12, this._data = {}, this._locale = ve(), this._bubble();
  }
  function wt(e) {
    return e instanceof At;
  }
  function cs(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
  function Jo(e, t, s) {
    var n = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0, i;
    for (i = 0; i < n; i++)
      D(e[i]) !== D(t[i]) && a++;
    return a + r;
  }
  function ir(e, t) {
    w(e, 0, 0, function() {
      var s = this.utcOffset(), n = "+";
      return s < 0 && (s = -s, n = "-"), n + le(~~(s / 60), 2) + t + le(~~s % 60, 2);
    });
  }
  ir("Z", ":");
  ir("ZZ", "");
  _("Z", Et);
  _("ZZ", Et);
  C(["Z", "ZZ"], function(e, t, s) {
    s._useUTC = !0, s._tzm = Ws(Et, e);
  });
  var Ko = /([\+\-]|\d\d)/gi;
  function Ws(e, t) {
    var s = (t || "").match(e), n, r, a;
    return s === null ? null : (n = s[s.length - 1] || [], r = (n + "").match(Ko) || ["-", 0, 0], a = +(r[1] * 60) + D(r[2]), a === 0 ? 0 : r[0] === "+" ? a : -a);
  }
  function Is(e, t) {
    var s, n;
    return t._isUTC ? (s = t.clone(), n = (re(e) || ft(e) ? e.valueOf() : I(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + n), y.updateOffset(s, !1), s) : I(e).local();
  }
  function fs(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  y.updateOffset = function() {
  };
  function Xo(e, t, s) {
    var n = this._offset || 0, r;
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      if (typeof e == "string") {
        if (e = Ws(Et, e), e === null)
          return this;
      } else Math.abs(e) < 16 && !s && (e = e * 60);
      return !this._isUTC && t && (r = fs(this)), this._offset = e, this._isUTC = !0, r != null && this.add(r, "m"), n !== e && (!t || this._changeInProgress ? ur(
        this,
        ae(e - n, "m"),
        1,
        !1
      ) : this._changeInProgress || (this._changeInProgress = !0, y.updateOffset(this, !0), this._changeInProgress = null)), this;
    } else
      return this._isUTC ? n : fs(this);
  }
  function el(e, t) {
    return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }
  function tl(e) {
    return this.utcOffset(0, e);
  }
  function sl(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(fs(this), "m")), this;
  }
  function nl() {
    if (this._tzm != null)
      this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var e = Ws(ki, this._i);
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }
  function rl(e) {
    return this.isValid() ? (e = e ? I(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
  }
  function al() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function il() {
    if (!q(this._isDSTShifted))
      return this._isDSTShifted;
    var e = {}, t;
    return ws(e, this), e = nr(e), e._a ? (t = e._isUTC ? ue(e._a) : I(e._a), this._isDSTShifted = this.isValid() && Jo(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
  }
  function ol() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function ll() {
    return this.isValid() ? this._isUTC : !1;
  }
  function or() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var ul = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, cl = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function ae(e, t) {
    var s = e, n = null, r, a, i;
    return wt(e) ? s = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : _e(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (n = ul.exec(e)) ? (r = n[1] === "-" ? -1 : 1, s = {
      y: 0,
      d: D(n[oe]) * r,
      h: D(n[j]) * r,
      m: D(n[te]) * r,
      s: D(n[pe]) * r,
      ms: D(cs(n[Te] * 1e3)) * r
      // the millisecond decimal point is included in the match
    }) : (n = cl.exec(e)) ? (r = n[1] === "-" ? -1 : 1, s = {
      y: be(n[2], r),
      M: be(n[3], r),
      w: be(n[4], r),
      d: be(n[5], r),
      h: be(n[6], r),
      m: be(n[7], r),
      s: be(n[8], r)
    }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = fl(
      I(s.from),
      I(s.to)
    ), s = {}, s.ms = i.milliseconds, s.M = i.months), a = new At(s), wt(e) && b(e, "_locale") && (a._locale = e._locale), wt(e) && b(e, "_isValid") && (a._isValid = e._isValid), a;
  }
  ae.fn = At.prototype;
  ae.invalid = Qo;
  function be(e, t) {
    var s = e && parseFloat(e.replace(",", "."));
    return (isNaN(s) ? 0 : s) * t;
  }
  function _n(e, t) {
    var s = {};
    return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
  }
  function fl(e, t) {
    var s;
    return e.isValid() && t.isValid() ? (t = Is(t, e), e.isBefore(t) ? s = _n(e, t) : (s = _n(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
  }
  function lr(e, t) {
    return function(s, n) {
      var r, a;
      return n !== null && !isNaN(+n) && (An(
        t,
        "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
      ), a = s, s = n, n = a), r = ae(s, n), ur(this, r, e), this;
    };
  }
  function ur(e, t, s, n) {
    var r = t._milliseconds, a = cs(t._days), i = cs(t._months);
    e.isValid() && (n = n ?? !0, i && Bn(e, it(e, "Month") + i * s), a && Gn(e, "Date", it(e, "Date") + a * s), r && e._d.setTime(e._d.valueOf() + r * s), n && y.updateOffset(e, a || i));
  }
  var dl = lr(1, "add"), hl = lr(-1, "subtract");
  function cr(e) {
    return typeof e == "string" || e instanceof String;
  }
  function ml(e) {
    return re(e) || ft(e) || cr(e) || _e(e) || yl(e) || pl(e) || e === null || e === void 0;
  }
  function pl(e) {
    var t = xe(e) && !_s(e), s = !1, n = [
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
  function yl(e) {
    var t = ne(e), s = !1;
    return t && (s = e.filter(function(n) {
      return !_e(n) && cr(e);
    }).length === 0), t && s;
  }
  function gl(e) {
    var t = xe(e) && !_s(e), s = !1, n = [
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
  function _l(e, t) {
    var s = e.diff(t, "days", !0);
    return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
  }
  function vl(e, t) {
    arguments.length === 1 && (arguments[0] ? ml(arguments[0]) ? (e = arguments[0], t = void 0) : gl(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
    var s = e || I(), n = Is(s, this).startOf("day"), r = y.calendarFormat(this, n) || "sameElse", a = t && (ce(t[r]) ? t[r].call(this, s) : t[r]);
    return this.format(
      a || this.localeData().calendar(r, this, I(s))
    );
  }
  function wl() {
    return new dt(this);
  }
  function kl(e, t) {
    var s = re(e) ? e : I(e);
    return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
  }
  function Sl(e, t) {
    var s = re(e) ? e : I(e);
    return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
  }
  function Ml(e, t, s, n) {
    var r = re(e) ? e : I(e), a = re(t) ? t : I(t);
    return this.isValid() && r.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(r, s) : !this.isBefore(r, s)) && (n[1] === ")" ? this.isBefore(a, s) : !this.isAfter(a, s))) : !1;
  }
  function Dl(e, t) {
    var s = re(e) ? e : I(e), n;
    return this.isValid() && s.isValid() ? (t = X(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
  }
  function Ol(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function Yl(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function Rl(e, t, s) {
    var n, r, a;
    if (!this.isValid())
      return NaN;
    if (n = Is(e, this), !n.isValid())
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
  function bl() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function Pl(e) {
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
  function Tl() {
    if (!this.isValid())
      return "moment.invalid(/* " + this._i + " */)";
    var e = "moment", t = "", s, n, r, a;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(s + n + r + a);
  }
  function xl(e) {
    e || (e = this.isUtc() ? y.defaultFormatUtc : y.defaultFormat);
    var t = vt(this, e);
    return this.localeData().postformat(t);
  }
  function Nl(e, t) {
    return this.isValid() && (re(e) && e.isValid() || I(e).isValid()) ? ae({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function Cl(e) {
    return this.from(I(), e);
  }
  function El(e, t) {
    return this.isValid() && (re(e) && e.isValid() || I(e).isValid()) ? ae({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function Wl(e) {
    return this.to(I(), e);
  }
  function fr(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = ve(e), t != null && (this._locale = t), this);
  }
  var dr = K(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    }
  );
  function hr() {
    return this._locale;
  }
  var Ot = 1e3, Ue = 60 * Ot, Yt = 60 * Ue, mr = (365 * 400 + 97) * 24 * Yt;
  function He(e, t) {
    return (e % t + t) % t;
  }
  function pr(e, t, s) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, s) - mr : new Date(e, t, s).valueOf();
  }
  function yr(e, t, s) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - mr : Date.UTC(e, t, s);
  }
  function Il(e) {
    var t, s;
    if (e = X(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (s = this._isUTC ? yr : pr, e) {
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
          Yt
        );
        break;
      case "minute":
        t = this._d.valueOf(), t -= He(t, Ue);
        break;
      case "second":
        t = this._d.valueOf(), t -= He(t, Ot);
        break;
    }
    return this._d.setTime(t), y.updateOffset(this, !0), this;
  }
  function Al(e) {
    var t, s;
    if (e = X(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (s = this._isUTC ? yr : pr, e) {
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
        t = this._d.valueOf(), t += Yt - He(
          t + (this._isUTC ? 0 : this.utcOffset() * Ue),
          Yt
        ) - 1;
        break;
      case "minute":
        t = this._d.valueOf(), t += Ue - He(t, Ue) - 1;
        break;
      case "second":
        t = this._d.valueOf(), t += Ot - He(t, Ot) - 1;
        break;
    }
    return this._d.setTime(t), y.updateOffset(this, !0), this;
  }
  function Fl() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function Ll() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function Ul() {
    return new Date(this.valueOf());
  }
  function Hl() {
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
  function Vl() {
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
  function $l() {
    return this.isValid() ? this.toISOString() : null;
  }
  function Gl() {
    return vs(this);
  }
  function jl() {
    return De({}, S(this));
  }
  function zl() {
    return S(this).overflow;
  }
  function Bl() {
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
  _("N", As);
  _("NN", As);
  _("NNN", As);
  _("NNNN", ru);
  _("NNNNN", au);
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
  _("yo", iu);
  C(["y", "yy", "yyy", "yyyy"], z);
  C(["yo"], function(e, t, s, n) {
    var r;
    s._locale._eraYearOrdinalRegex && (r = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[z] = s._locale.eraYearOrdinalParse(e, r) : t[z] = parseInt(e, 10);
  });
  function ql(e, t) {
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
  function Zl(e, t, s) {
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
  function Ql(e, t) {
    var s = e.since <= e.until ? 1 : -1;
    return t === void 0 ? y(e.since).year() : y(e.since).year() + (t - e.offset) * s;
  }
  function Jl() {
    var e, t, s, n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
      if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
        return n[e].name;
    return "";
  }
  function Kl() {
    var e, t, s, n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
      if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
        return n[e].narrow;
    return "";
  }
  function Xl() {
    var e, t, s, n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
      if (s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
        return n[e].abbr;
    return "";
  }
  function eu() {
    var e, t, s, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (s = r[e].since <= r[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return (this.year() - y(r[e].since).year()) * s + r[e].offset;
    return this.year();
  }
  function tu(e) {
    return b(this, "_erasNameRegex") || Fs.call(this), e ? this._erasNameRegex : this._erasRegex;
  }
  function su(e) {
    return b(this, "_erasAbbrRegex") || Fs.call(this), e ? this._erasAbbrRegex : this._erasRegex;
  }
  function nu(e) {
    return b(this, "_erasNarrowRegex") || Fs.call(this), e ? this._erasNarrowRegex : this._erasRegex;
  }
  function As(e, t) {
    return t.erasAbbrRegex(e);
  }
  function ru(e, t) {
    return t.erasNameRegex(e);
  }
  function au(e, t) {
    return t.erasNarrowRegex(e);
  }
  function iu(e, t) {
    return t._eraYearOrdinalRegex || Ge;
  }
  function Fs() {
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
  function Ft(e, t) {
    w(0, [e, e.length], 0, t);
  }
  Ft("gggg", "weekYear");
  Ft("ggggg", "weekYear");
  Ft("GGGG", "isoWeekYear");
  Ft("GGGGG", "isoWeekYear");
  _("G", Ct);
  _("g", Ct);
  _("GG", A, Z);
  _("gg", A, Z);
  _("GGGG", Os, Ds);
  _("gggg", Os, Ds);
  _("GGGGG", Nt, Tt);
  _("ggggg", Nt, Tt);
  mt(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(e, t, s, n) {
      t[n.substr(0, 2)] = D(e);
    }
  );
  mt(["gg", "GG"], function(e, t, s, n) {
    t[n] = y.parseTwoDigitYear(e);
  });
  function ou(e) {
    return gr.call(
      this,
      e,
      this.week(),
      this.weekday() + this.localeData()._week.dow,
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function lu(e) {
    return gr.call(
      this,
      e,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function uu() {
    return ge(this.year(), 1, 4);
  }
  function cu() {
    return ge(this.isoWeekYear(), 1, 4);
  }
  function fu() {
    var e = this.localeData()._week;
    return ge(this.year(), e.dow, e.doy);
  }
  function du() {
    var e = this.localeData()._week;
    return ge(this.weekYear(), e.dow, e.doy);
  }
  function gr(e, t, s, n, r) {
    var a;
    return e == null ? lt(this, n, r).year : (a = ge(e, n, r), t > a && (t = a), hu.call(this, e, t, s, n, r));
  }
  function hu(e, t, s, n, r) {
    var a = Qn(e, t, s, n, r), i = ot(a.year, 0, a.dayOfYear);
    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
  }
  w("Q", 0, "Qo", "quarter");
  _("Q", Ln);
  C("Q", function(e, t) {
    t[me] = (D(e) - 1) * 3;
  });
  function mu(e) {
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
  var _r = ze("Date", !0);
  w("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  _("DDD", xt);
  _("DDDD", Un);
  C(["DDD", "DDDD"], function(e, t, s) {
    s._dayOfYear = D(e);
  });
  function pu(e) {
    var t = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return e == null ? t : this.add(e - t, "d");
  }
  w("m", ["mm", 2], 0, "minute");
  _("m", A, Ys);
  _("mm", A, Z);
  C(["m", "mm"], te);
  var yu = ze("Minutes", !1);
  w("s", ["ss", 2], 0, "second");
  _("s", A, Ys);
  _("ss", A, Z);
  C(["s", "ss"], pe);
  var gu = ze("Seconds", !1);
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
  _("S", xt, Ln);
  _("SS", xt, Z);
  _("SSS", xt, Un);
  var Oe, vr;
  for (Oe = "SSSS"; Oe.length <= 9; Oe += "S")
    _(Oe, Ge);
  function _u(e, t) {
    t[Te] = D(("0." + e) * 1e3);
  }
  for (Oe = "S"; Oe.length <= 9; Oe += "S")
    C(Oe, _u);
  vr = ze("Milliseconds", !1);
  w("z", 0, 0, "zoneAbbr");
  w("zz", 0, 0, "zoneName");
  function vu() {
    return this._isUTC ? "UTC" : "";
  }
  function wu() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var p = dt.prototype;
  p.add = dl;
  p.calendar = vl;
  p.clone = wl;
  p.diff = Rl;
  p.endOf = Al;
  p.format = xl;
  p.from = Nl;
  p.fromNow = Cl;
  p.to = El;
  p.toNow = Wl;
  p.get = Pi;
  p.invalidAt = zl;
  p.isAfter = kl;
  p.isBefore = Sl;
  p.isBetween = Ml;
  p.isSame = Dl;
  p.isSameOrAfter = Ol;
  p.isSameOrBefore = Yl;
  p.isValid = Gl;
  p.lang = dr;
  p.locale = fr;
  p.localeData = hr;
  p.max = Go;
  p.min = $o;
  p.parsingFlags = jl;
  p.set = Ti;
  p.startOf = Il;
  p.subtract = hl;
  p.toArray = Hl;
  p.toObject = Vl;
  p.toDate = Ul;
  p.toISOString = Pl;
  p.inspect = Tl;
  typeof Symbol < "u" && Symbol.for != null && (p[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  });
  p.toJSON = $l;
  p.toString = bl;
  p.unix = Ll;
  p.valueOf = Fl;
  p.creationData = Bl;
  p.eraName = Jl;
  p.eraNarrow = Kl;
  p.eraAbbr = Xl;
  p.eraYear = eu;
  p.year = $n;
  p.isLeapYear = bi;
  p.weekYear = ou;
  p.isoWeekYear = lu;
  p.quarter = p.quarters = mu;
  p.month = qn;
  p.daysInMonth = Li;
  p.week = p.weeks = Bi;
  p.isoWeek = p.isoWeeks = qi;
  p.weeksInYear = fu;
  p.weeksInWeekYear = du;
  p.isoWeeksInYear = uu;
  p.isoWeeksInISOWeekYear = cu;
  p.date = _r;
  p.day = p.days = oo;
  p.weekday = lo;
  p.isoWeekday = uo;
  p.dayOfYear = pu;
  p.hour = p.hours = go;
  p.minute = p.minutes = yu;
  p.second = p.seconds = gu;
  p.millisecond = p.milliseconds = vr;
  p.utcOffset = Xo;
  p.utc = tl;
  p.local = sl;
  p.parseZone = nl;
  p.hasAlignedHourOffset = rl;
  p.isDST = al;
  p.isLocal = ol;
  p.isUtcOffset = ll;
  p.isUtc = or;
  p.isUTC = or;
  p.zoneAbbr = vu;
  p.zoneName = wu;
  p.dates = K(
    "dates accessor is deprecated. Use date instead.",
    _r
  );
  p.months = K(
    "months accessor is deprecated. Use month instead",
    qn
  );
  p.years = K(
    "years accessor is deprecated. Use year instead",
    $n
  );
  p.zone = K(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    el
  );
  p.isDSTShifted = K(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    il
  );
  function ku(e) {
    return I(e * 1e3);
  }
  function Su() {
    return I.apply(null, arguments).parseZone();
  }
  function wr(e) {
    return e;
  }
  var P = ks.prototype;
  P.calendar = ii;
  P.longDateFormat = ci;
  P.invalidDate = di;
  P.ordinal = pi;
  P.preparse = wr;
  P.postformat = wr;
  P.relativeTime = gi;
  P.pastFuture = _i;
  P.set = ri;
  P.eras = ql;
  P.erasParse = Zl;
  P.erasConvertYear = Ql;
  P.erasAbbrRegex = su;
  P.erasNameRegex = tu;
  P.erasNarrowRegex = nu;
  P.months = Wi;
  P.monthsShort = Ii;
  P.monthsParse = Fi;
  P.monthsRegex = Hi;
  P.monthsShortRegex = Ui;
  P.week = $i;
  P.firstDayOfYear = zi;
  P.firstDayOfWeek = ji;
  P.weekdays = so;
  P.weekdaysMin = ro;
  P.weekdaysShort = no;
  P.weekdaysParse = io;
  P.weekdaysRegex = co;
  P.weekdaysShortRegex = fo;
  P.weekdaysMinRegex = ho;
  P.isPM = po;
  P.meridiem = _o;
  function Rt(e, t, s, n) {
    var r = ve(), a = ue().set(n, t);
    return r[s](a, e);
  }
  function kr(e, t, s) {
    if (_e(e) && (t = e, e = void 0), e = e || "", t != null)
      return Rt(e, t, s, "month");
    var n, r = [];
    for (n = 0; n < 12; n++)
      r[n] = Rt(e, n, s, "month");
    return r;
  }
  function Ls(e, t, s, n) {
    typeof e == "boolean" ? (_e(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, _e(t) && (s = t, t = void 0), t = t || "");
    var r = ve(), a = e ? r._week.dow : 0, i, l = [];
    if (s != null)
      return Rt(t, (s + a) % 7, n, "day");
    for (i = 0; i < 7; i++)
      l[i] = Rt(t, (i + a) % 7, n, "day");
    return l;
  }
  function Mu(e, t) {
    return kr(e, t, "months");
  }
  function Du(e, t) {
    return kr(e, t, "monthsShort");
  }
  function Ou(e, t, s) {
    return Ls(e, t, s, "weekdays");
  }
  function Yu(e, t, s) {
    return Ls(e, t, s, "weekdaysShort");
  }
  function Ru(e, t, s) {
    return Ls(e, t, s, "weekdaysMin");
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
  function bu() {
    var e = this._data;
    return this._milliseconds = de(this._milliseconds), this._days = de(this._days), this._months = de(this._months), e.milliseconds = de(e.milliseconds), e.seconds = de(e.seconds), e.minutes = de(e.minutes), e.hours = de(e.hours), e.months = de(e.months), e.years = de(e.years), this;
  }
  function Sr(e, t, s, n) {
    var r = ae(t, s);
    return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble();
  }
  function Pu(e, t) {
    return Sr(this, e, t, 1);
  }
  function Tu(e, t) {
    return Sr(this, e, t, -1);
  }
  function vn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function xu() {
    var e = this._milliseconds, t = this._days, s = this._months, n = this._data, r, a, i, l, o;
    return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += vn(ds(s) + t) * 864e5, t = 0, s = 0), n.milliseconds = e % 1e3, r = J(e / 1e3), n.seconds = r % 60, a = J(r / 60), n.minutes = a % 60, i = J(a / 60), n.hours = i % 24, t += J(i / 24), o = J(Mr(t)), s += o, t -= vn(ds(o)), l = J(s / 12), s %= 12, n.days = t, n.months = s, n.years = l, this;
  }
  function Mr(e) {
    return e * 4800 / 146097;
  }
  function ds(e) {
    return e * 146097 / 4800;
  }
  function Nu(e) {
    if (!this.isValid())
      return NaN;
    var t, s, n = this._milliseconds;
    if (e = X(e), e === "month" || e === "quarter" || e === "year")
      switch (t = this._days + n / 864e5, s = this._months + Mr(t), e) {
        case "month":
          return s;
        case "quarter":
          return s / 3;
        case "year":
          return s / 12;
      }
    else
      switch (t = this._days + Math.round(ds(this._months)), e) {
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
  var Dr = we("ms"), Cu = we("s"), Eu = we("m"), Wu = we("h"), Iu = we("d"), Au = we("w"), Fu = we("M"), Lu = we("Q"), Uu = we("y"), Hu = Dr;
  function Vu() {
    return ae(this);
  }
  function $u(e) {
    return e = X(e), this.isValid() ? this[e + "s"]() : NaN;
  }
  function Ne(e) {
    return function() {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var Gu = Ne("milliseconds"), ju = Ne("seconds"), zu = Ne("minutes"), Bu = Ne("hours"), qu = Ne("days"), Zu = Ne("months"), Qu = Ne("years");
  function Ju() {
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
  function Ku(e, t, s, n, r) {
    return r.relativeTime(t || 1, !!s, e, n);
  }
  function Xu(e, t, s, n) {
    var r = ae(e).abs(), a = he(r.as("s")), i = he(r.as("m")), l = he(r.as("h")), o = he(r.as("d")), u = he(r.as("M")), h = he(r.as("w")), c = he(r.as("y")), d = a <= s.ss && ["s", a] || a < s.s && ["ss", a] || i <= 1 && ["m"] || i < s.m && ["mm", i] || l <= 1 && ["h"] || l < s.h && ["hh", l] || o <= 1 && ["d"] || o < s.d && ["dd", o];
    return s.w != null && (d = d || h <= 1 && ["w"] || h < s.w && ["ww", h]), d = d || u <= 1 && ["M"] || u < s.M && ["MM", u] || c <= 1 && ["y"] || ["yy", c], d[2] = t, d[3] = +e > 0, d[4] = n, Ku.apply(null, d);
  }
  function ec(e) {
    return e === void 0 ? he : typeof e == "function" ? (he = e, !0) : !1;
  }
  function tc(e, t) {
    return Fe[e] === void 0 ? !1 : t === void 0 ? Fe[e] : (Fe[e] = t, e === "s" && (Fe.ss = t - 1), !0);
  }
  function sc(e, t) {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var s = !1, n = Fe, r, a;
    return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (n = Object.assign({}, Fe, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), r = this.localeData(), a = Xu(this, !s, n, r), s && (a = r.pastFuture(+this, a)), r.postformat(a);
  }
  var es = Math.abs;
  function Ee(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function Lt() {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var e = es(this._milliseconds) / 1e3, t = es(this._days), s = es(this._months), n, r, a, i, l = this.asSeconds(), o, u, h, c;
    return l ? (n = J(e / 60), r = J(n / 60), e %= 60, n %= 60, a = J(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = l < 0 ? "-" : "", u = Ee(this._months) !== Ee(l) ? "-" : "", h = Ee(this._days) !== Ee(l) ? "-" : "", c = Ee(this._milliseconds) !== Ee(l) ? "-" : "", o + "P" + (a ? u + a + "Y" : "") + (s ? u + s + "M" : "") + (t ? h + t + "D" : "") + (r || n || e ? "T" : "") + (r ? c + r + "H" : "") + (n ? c + n + "M" : "") + (e ? c + i + "S" : "")) : "P0D";
  }
  var Y = At.prototype;
  Y.isValid = Zo;
  Y.abs = bu;
  Y.add = Pu;
  Y.subtract = Tu;
  Y.as = Nu;
  Y.asMilliseconds = Dr;
  Y.asSeconds = Cu;
  Y.asMinutes = Eu;
  Y.asHours = Wu;
  Y.asDays = Iu;
  Y.asWeeks = Au;
  Y.asMonths = Fu;
  Y.asQuarters = Lu;
  Y.asYears = Uu;
  Y.valueOf = Hu;
  Y._bubble = xu;
  Y.clone = Vu;
  Y.get = $u;
  Y.milliseconds = Gu;
  Y.seconds = ju;
  Y.minutes = zu;
  Y.hours = Bu;
  Y.days = qu;
  Y.weeks = Ju;
  Y.months = Zu;
  Y.years = Qu;
  Y.humanize = sc;
  Y.toISOString = Lt;
  Y.toString = Lt;
  Y.toJSON = Lt;
  Y.locale = fr;
  Y.localeData = hr;
  Y.toIsoString = K(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    Lt
  );
  Y.lang = dr;
  w("X", 0, 0, "unix");
  w("x", 0, 0, "valueOf");
  _("x", Ct);
  _("X", Si);
  C("X", function(e, t, s) {
    s._d = new Date(parseFloat(e) * 1e3);
  });
  C("x", function(e, t, s) {
    s._d = new Date(D(e));
  });
  //! moment.js
  y.version = "2.30.1";
  si(I);
  y.fn = p;
  y.min = jo;
  y.max = zo;
  y.now = Bo;
  y.utc = ue;
  y.unix = ku;
  y.months = Mu;
  y.isDate = ft;
  y.locale = Ye;
  y.invalid = Pt;
  y.duration = ae;
  y.isMoment = re;
  y.weekdays = Ou;
  y.parseZone = Su;
  y.localeData = ve;
  y.isDuration = wt;
  y.monthsShort = Du;
  y.weekdaysMin = Ru;
  y.defineLocale = xs;
  y.updateLocale = So;
  y.locales = Mo;
  y.weekdaysShort = Yu;
  y.normalizeUnits = X;
  y.relativeTimeRounding = ec;
  y.relativeTimeThreshold = tc;
  y.calendarFormat = _l;
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
  const nc = ct({
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
          let n = new ti();
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
  }), rc = { class: "text-start" }, ac = { class: "d-flex text-body-secondary pt-3" }, ic = { class: "pb-3 mb-0 small lh-sm" }, oc = { class: "h6" }, lc = { class: "badge rounded-pill text-bg-secondary" }, uc = ["href"], cc = {
    class: "pt-5",
    "aria-label": "Search Page navigation"
  }, fc = { class: "pagination justify-content-center" }, dc = { class: "page-item" }, hc = ["onClick"], mc = { class: "page-item" };
  function pc(e, t, s, n, r, a) {
    return Pe(), We("div", null, [
      (Pe(!0), We(Bs, null, qs(e.pageOfItems, (i, l) => (Pe(), We("div", rc, [
        H("div", ac, [
          t[2] || (t[2] = H("span", { class: "me-1" }, [
            H("img", {
              src: " https://www.dinowilliam.com/lib/assets/logo.png",
              height: "16",
              width: "72",
              loading: "lazy"
            })
          ], -1)),
          H("p", ic, [
            H("p", oc, [
              Zs(Ze(i.url) + " ", 1),
              H("span", lc, Ze(e.formatDate(i.date)), 1)
            ]),
            H("p", null, [
              H("a", {
                class: "h4",
                href: i.url
              }, Ze(i.title), 9, uc)
            ]),
            Zs(" " + Ze(i.description), 1)
          ])
        ])
      ]))), 256)),
      H("nav", cc, [
        H("ul", fc, [
          H("li", dc, [
            H("a", {
              class: Bt(["page-link", { disabled: e.isPreviousDisabled }]),
              onClick: t[0] || (t[0] = (i) => e.onPageChange(e.previousPage))
            }, "Previous", 2)
          ]),
          (Pe(!0), We(Bs, null, qs(e.pagesPagination, (i) => (Pe(), We("li", {
            class: Bt(["page-item", { active: i.isActive }])
          }, [
            H("a", {
              class: "page-link",
              onClick: (l) => e.onPageChange(i.pageNumber)
            }, Ze(i.pageNumber), 9, hc)
          ], 2))), 256)),
          H("li", mc, [
            H("a", {
              class: Bt(["page-link", { disabled: e.isNextDisabled }]),
              onClick: t[1] || (t[1] = (i) => e.onPageChange(e.nextPage))
            }, "Next", 2)
          ])
        ])
      ])
    ]);
  }
  const yc = /* @__PURE__ */ gs(nc, [["render", pc]]), gc = [
    {
      path: "/Search",
      name: "SearchForm",
      component: ei
    },
    {
      path: "/SearchResults",
      name: "SearchResults",
      component: yc
    }
  ], _c = qa({
    //history: createWebHistory(import.meta.env.BASE_URL), 
    history: Da(),
    routes: gc
  }), vc = ct({
    name: "App"
  });
  function wc(e, t, s, n, r, a) {
    const i = Fr("RouterView");
    return Pe(), Lr(i);
  }
  const kc = /* @__PURE__ */ gs(vc, [["render", wc]]), Us = Ur(kc);
  Us.mixin(Br);
  Us.use(_c);
  Us.mount("#mainAppSearch");
});
export default Sc();
//# sourceMappingURL=vueappsearch.js.map
