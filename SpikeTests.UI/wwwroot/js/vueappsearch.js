var Hs = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
import { defineComponent as ht, openBlock as re, createElementBlock as le, createElementVNode as O, withModifiers as Es, withDirectives as Vs, vModelText as Gs, Fragment as Ht, renderList as Et, createTextVNode as Vt, toDisplayString as ge, normalizeClass as Je, resolveComponent as $s, createBlock as js, createApp as zs } from "vue";
import { createRouter as Zs, createWebHistory as qs } from "vue-router";
var Po = Hs((Wo, Ce) => {
  function Qs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var st = { exports: {} }, ft = {}, ct = {};
  Object.defineProperty(ct, "__esModule", {
    value: !0
  });
  ct.default = {
    /**
     * Property to check that cookie polyfill was used
     */
    type: "cookie",
    keysCache: null,
    getItem: function(t) {
      return t && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function(t, s, r) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "/", n = arguments[4], i = arguments[5];
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
      return document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(s) + l + (n ? "; domain=" + n : "") + (a ? "; path=" + a : "") + (i ? "; secure" : ""), this.keysCache = null, !0;
    },
    removeItem: function(t, s, r) {
      return this.hasItem(t) ? (document.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (r ? "; domain=" + r : "") + (s ? "; path=" + s : ""), this.keysCache = null, !0) : !1;
    },
    hasItem: function(t) {
      return !t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t) ? !1 : new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
    },
    keys: function() {
      for (var t = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), s = t.length, r = 0; r < s; r++)
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
  };
  Object.defineProperty(ft, "__esModule", {
    value: !0
  });
  var Bs = ct, Js = Xs(Bs);
  function Xs(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var rt = void 0, Ks = function() {
    try {
      var t = "testvuels";
      return window.localStorage.setItem(t, "1"), window.localStorage.removeItem(t), !0;
    } catch {
      return !1;
    }
  };
  Ks() ? rt = window.localStorage : rt = Js.default;
  ft.default = rt;
  (function(e, t) {
    var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
      return typeof h;
    } : function(h) {
      return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
    }, r = /* @__PURE__ */ function() {
      function h(w, k) {
        for (var D = 0; D < k.length; D++) {
          var x = k[D];
          x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(w, x.key, x);
        }
      }
      return function(w, k, D) {
        return k && h(w.prototype, k), D && h(w, D), w;
      };
    }(), a = ft, n = i(a);
    function i(h) {
      return h && h.__esModule ? h : { default: h };
    }
    function l(h, w) {
      if (!(h instanceof w))
        throw new TypeError("Cannot call a class as a function");
    }
    var c = function() {
      function h() {
        l(this, h), this.storage = n.default, this.clear();
      }
      return r(h, [{
        key: "install",
        value: function(k) {
          k.localStorage = k.prototype.$localStorage = this;
        }
      }, {
        key: "set",
        value: function(k, D) {
          var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, Lt = "vuels__" + k, At = JSON.stringify({ value: D, expire: x > 0 ? (/* @__PURE__ */ new Date()).getTime() + x : x });
          typeof this.storage.type < "u" && this.storage.type === "cookie" ? this.storage.setItem(Lt, At, x) : this.storage.setItem(Lt, At);
        }
      }, {
        key: "get",
        value: function(k) {
          var D = this.storage.getItem("vuels__" + k);
          return D !== null ? JSON.parse(D).value : null;
        }
      }, {
        key: "remove",
        value: function(k) {
          return this.storage.removeItem("vuels__" + k);
        }
      }, {
        key: "key",
        value: function(k) {
          return this.storage.key(k);
        }
        /**
         * Removes expired items
         */
      }, {
        key: "clear",
        value: function() {
          if (this.length !== 0)
            for (var k = 0; k < this.length; k++) {
              var D = this.storage.key(k);
              if (/vuels__/i.test(D) !== !1) {
                var x = JSON.parse(this.storage.getItem(D));
                x.expire > 0 && x.expire < (/* @__PURE__ */ new Date()).getTime() && this.storage.removeItem(D);
              }
            }
        }
      }, {
        key: "length",
        get: function() {
          return this.storage.length;
        }
      }]), h;
    }();
    s(t) === "object" ? e.exports = new c() : window && window.Vue && window.Vue.use(new c());
  })(st, st.exports);
  var er = st.exports;
  const tr = /* @__PURE__ */ Qs(er), sr = ht({
    name: "SearchForm"
    //data() {
    //    return {
    //        dataResponse: { type: Array },
    //        prompt: { type: String, default: '' }            
    //    }
    //},
    //mounted() {
    //    this.prompt = '';
    //},
    //methods: {
    //    async sendSearch() {
    //        //let search = {
    //        //    Prompt: this.prompt
    //        //};
    //        //const requestOptions = {
    //        //    method: "POST",
    //        //    headers: { "Content-Type": "application/json" },
    //        //    body: JSON.stringify(search)
    //        //};
    //        //console.log(prompt);
    //        //this.dataResponse = await fetch("https://localhost:44354/Search", requestOptions)
    //        //    .then(response => response.json())
    //        //    .then((data) => { return data });
    //        //localStorage.clear();
    //        //localStorage.setItem('searchResult', JSON.stringify(this.dataResponse));
    //        //console.log(this.dataResponse);
    //        //this.$router.push({
    //        //    name: 'SearchResults'
    //        //});
    //    }
    //}
  }), mt = (e, t) => {
    const s = e.__vccOpts || e;
    for (const [r, a] of t)
      s[r] = a;
    return s;
  }, rr = { class: "container-fluid mt-5" }, ar = { class: "input-group pt-5 mb-3" };
  function nr(e, t, s, r, a, n) {
    return re(), le("div", rr, [
      t[3] || (t[3] = O("div", { class: "pt-5 pb-5" }, null, -1)),
      t[4] || (t[4] = O("div", {
        class: "mt-5",
        id: "logo"
      }, [
        O("img", { src: "/img/lucene-net-color.png" })
      ], -1)),
      O("form", {
        onSubmit: t[1] || (t[1] = Es((...i) => e.sendSearch && e.sendSearch(...i), ["prevent"]))
      }, [
        O("div", ar, [
          Vs(O("input", {
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
            [Gs, e.prompt]
          ])
        ]),
        t[2] || (t[2] = O("button", {
          type: "submit",
          class: "btn btn-lg btn-dark col-md-4"
        }, "Search", -1))
      ], 32)
    ]);
  }
  const ir = /* @__PURE__ */ mt(sr, [["render", nr]]);
  class or {
  }
  //! moment.js
  //! version : 2.30.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var Qt;
  function u() {
    return Qt.apply(null, arguments);
  }
  function lr(e) {
    Qt = e;
  }
  function U(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
  }
  function ne(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function g(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function _t(e) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
      if (g(e, t))
        return !1;
    return !0;
  }
  function N(e) {
    return e === void 0;
  }
  function B(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
  }
  function Ye(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  }
  function Bt(e, t) {
    var s = [], r, a = e.length;
    for (r = 0; r < a; ++r)
      s.push(t(e[r], r));
    return s;
  }
  function K(e, t) {
    for (var s in t)
      g(t, s) && (e[s] = t[s]);
    return g(t, "toString") && (e.toString = t.toString), g(t, "valueOf") && (e.valueOf = t.valueOf), e;
  }
  function V(e, t, s, r) {
    return ws(e, t, s, r, !0).utc();
  }
  function ur() {
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
  function m(e) {
    return e._pf == null && (e._pf = ur()), e._pf;
  }
  var at;
  Array.prototype.some ? at = Array.prototype.some : at = function(e) {
    var t = Object(this), s = t.length >>> 0, r;
    for (r = 0; r < s; r++)
      if (r in t && e.call(this, t[r], r, t))
        return !0;
    return !1;
  };
  function yt(e) {
    var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
    if (r && (t = m(e), s = at.call(t.parsedDateParts, function(a) {
      return a != null;
    }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
    return e._isValid;
  }
  function He(e) {
    var t = V(NaN);
    return e != null ? K(m(t), e) : m(t).userInvalidated = !0, t;
  }
  var Gt = u.momentProperties = [], Xe = !1;
  function gt(e, t) {
    var s, r, a, n = Gt.length;
    if (N(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), N(t._i) || (e._i = t._i), N(t._f) || (e._f = t._f), N(t._l) || (e._l = t._l), N(t._strict) || (e._strict = t._strict), N(t._tzm) || (e._tzm = t._tzm), N(t._isUTC) || (e._isUTC = t._isUTC), N(t._offset) || (e._offset = t._offset), N(t._pf) || (e._pf = m(t)), N(t._locale) || (e._locale = t._locale), n > 0)
      for (s = 0; s < n; s++)
        r = Gt[s], a = t[r], N(a) || (e[r] = a);
    return e;
  }
  function Oe(e) {
    gt(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Xe === !1 && (Xe = !0, u.updateOffset(this), Xe = !1);
  }
  function L(e) {
    return e instanceof Oe || e != null && e._isAMomentObject != null;
  }
  function Jt(e) {
    u.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
  }
  function C(e, t) {
    var s = !0;
    return K(function() {
      if (u.deprecationHandler != null && u.deprecationHandler(null, e), s) {
        var r = [], a, n, i, l = arguments.length;
        for (n = 0; n < l; n++) {
          if (a = "", typeof arguments[n] == "object") {
            a += `
[` + n + "] ";
            for (i in arguments[0])
              g(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
            a = a.slice(0, -2);
          } else
            a = arguments[n];
          r.push(a);
        }
        Jt(
          e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
        ), s = !1;
      }
      return t.apply(this, arguments);
    }, t);
  }
  var $t = {};
  function Xt(e, t) {
    u.deprecationHandler != null && u.deprecationHandler(e, t), $t[e] || (Jt(t), $t[e] = !0);
  }
  u.suppressDeprecationWarnings = !1;
  u.deprecationHandler = null;
  function G(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
  }
  function dr(e) {
    var t, s;
    for (s in e)
      g(e, s) && (t = e[s], G(t) ? this[s] = t : this["_" + s] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function nt(e, t) {
    var s = K({}, e), r;
    for (r in t)
      g(t, r) && (ne(e[r]) && ne(t[r]) ? (s[r] = {}, K(s[r], e[r]), K(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
    for (r in e)
      g(e, r) && !g(t, r) && ne(e[r]) && (s[r] = K({}, s[r]));
    return s;
  }
  function pt(e) {
    e != null && this.set(e);
  }
  var it;
  Object.keys ? it = Object.keys : it = function(e) {
    var t, s = [];
    for (t in e)
      g(e, t) && s.push(t);
    return s;
  };
  var hr = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function fr(e, t, s) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return G(r) ? r.call(t, s) : r;
  }
  function E(e, t, s) {
    var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
    return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
  }
  var wt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Pe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ke = {}, he = {};
  function f(e, t, s, r) {
    var a = r;
    typeof r == "string" && (a = function() {
      return this[r]();
    }), e && (he[e] = a), t && (he[t[0]] = function() {
      return E(a.apply(this, arguments), t[1], t[2]);
    }), s && (he[s] = function() {
      return this.localeData().ordinal(
        a.apply(this, arguments),
        e
      );
    });
  }
  function cr(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
  }
  function mr(e) {
    var t = e.match(wt), s, r;
    for (s = 0, r = t.length; s < r; s++)
      he[t[s]] ? t[s] = he[t[s]] : t[s] = cr(t[s]);
    return function(a) {
      var n = "", i;
      for (i = 0; i < r; i++)
        n += G(t[i]) ? t[i].call(a, e) : t[i];
      return n;
    };
  }
  function Ne(e, t) {
    return e.isValid() ? (t = Kt(t, e.localeData()), Ke[t] = Ke[t] || mr(t), Ke[t](e)) : e.localeData().invalidDate();
  }
  function Kt(e, t) {
    var s = 5;
    function r(a) {
      return t.longDateFormat(a) || a;
    }
    for (Pe.lastIndex = 0; s >= 0 && Pe.test(e); )
      e = e.replace(
        Pe,
        r
      ), Pe.lastIndex = 0, s -= 1;
    return e;
  }
  var _r = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function yr(e) {
    var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
    return t || !s ? t : (this._longDateFormat[e] = s.match(wt).map(function(r) {
      return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
    }).join(""), this._longDateFormat[e]);
  }
  var gr = "Invalid date";
  function pr() {
    return this._invalidDate;
  }
  var wr = "%d", kr = /\d{1,2}/;
  function vr(e) {
    return this._ordinal.replace("%d", e);
  }
  var Sr = {
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
  function Mr(e, t, s, r) {
    var a = this._relativeTime[s];
    return G(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
  }
  function Dr(e, t) {
    var s = this._relativeTime[e > 0 ? "future" : "past"];
    return G(s) ? s(t) : s.replace(/%s/i, t);
  }
  var jt = {
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
  function F(e) {
    return typeof e == "string" ? jt[e] || jt[e.toLowerCase()] : void 0;
  }
  function kt(e) {
    var t = {}, s, r;
    for (r in e)
      g(e, r) && (s = F(r), s && (t[s] = e[r]));
    return t;
  }
  var Yr = {
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
  function Or(e) {
    var t = [], s;
    for (s in e)
      g(e, s) && t.push({ unit: s, priority: Yr[s] });
    return t.sort(function(r, a) {
      return r.priority - a.priority;
    }), t;
  }
  var es = /\d/, R = /\d\d/, ts = /\d{3}/, vt = /\d{4}/, Ee = /[+-]?\d{6}/, M = /\d\d?/, ss = /\d\d\d\d?/, rs = /\d\d\d\d\d\d?/, Ve = /\d{1,3}/, St = /\d{1,4}/, Ge = /[+-]?\d{1,6}/, me = /\d+/, $e = /[+-]?\d+/, br = /Z|[+-]\d\d:?\d\d/gi, je = /Z|[+-]\d\d(?::?\d\d)?/gi, Tr = /[+-]?\d+(\.\d{1,3})?/, be = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, _e = /^[1-9]\d?/, Mt = /^([1-9]\d|\d)/, Fe;
  Fe = {};
  function d(e, t, s) {
    Fe[e] = G(t) ? t : function(r, a) {
      return r && s ? s : t;
    };
  }
  function Pr(e, t) {
    return g(Fe, e) ? Fe[e](t._strict, t._locale) : new RegExp(xr(e));
  }
  function xr(e) {
    return q(
      e.replace("\\", "").replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(t, s, r, a, n) {
          return s || r || a || n;
        }
      )
    );
  }
  function q(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function W(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function _(e) {
    var t = +e, s = 0;
    return t !== 0 && isFinite(t) && (s = W(t)), s;
  }
  var ot = {};
  function v(e, t) {
    var s, r = t, a;
    for (typeof e == "string" && (e = [e]), B(t) && (r = function(n, i) {
      i[t] = _(n);
    }), a = e.length, s = 0; s < a; s++)
      ot[e[s]] = r;
  }
  function Te(e, t) {
    v(e, function(s, r, a, n) {
      a._w = a._w || {}, t(s, a._w, a, n);
    });
  }
  function Nr(e, t, s) {
    t != null && g(ot, e) && ot[e](t, s._a, s, e);
  }
  function ze(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
  }
  var P = 0, z = 1, H = 2, T = 3, I = 4, Z = 5, ae = 6, Rr = 7, Wr = 8;
  f("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? E(e, 4) : "+" + e;
  });
  f(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  f(0, ["YYYY", 4], 0, "year");
  f(0, ["YYYYY", 5], 0, "year");
  f(0, ["YYYYYY", 6, !0], 0, "year");
  d("Y", $e);
  d("YY", M, R);
  d("YYYY", St, vt);
  d("YYYYY", Ge, Ee);
  d("YYYYYY", Ge, Ee);
  v(["YYYYY", "YYYYYY"], P);
  v("YYYY", function(e, t) {
    t[P] = e.length === 2 ? u.parseTwoDigitYear(e) : _(e);
  });
  v("YY", function(e, t) {
    t[P] = u.parseTwoDigitYear(e);
  });
  v("Y", function(e, t) {
    t[P] = parseInt(e, 10);
  });
  function ke(e) {
    return ze(e) ? 366 : 365;
  }
  u.parseTwoDigitYear = function(e) {
    return _(e) + (_(e) > 68 ? 1900 : 2e3);
  };
  var as = ye("FullYear", !0);
  function Cr() {
    return ze(this.year());
  }
  function ye(e, t) {
    return function(s) {
      return s != null ? (ns(this, e, s), u.updateOffset(this, t), this) : ve(this, e);
    };
  }
  function ve(e, t) {
    if (!e.isValid())
      return NaN;
    var s = e._d, r = e._isUTC;
    switch (t) {
      case "Milliseconds":
        return r ? s.getUTCMilliseconds() : s.getMilliseconds();
      case "Seconds":
        return r ? s.getUTCSeconds() : s.getSeconds();
      case "Minutes":
        return r ? s.getUTCMinutes() : s.getMinutes();
      case "Hours":
        return r ? s.getUTCHours() : s.getHours();
      case "Date":
        return r ? s.getUTCDate() : s.getDate();
      case "Day":
        return r ? s.getUTCDay() : s.getDay();
      case "Month":
        return r ? s.getUTCMonth() : s.getMonth();
      case "FullYear":
        return r ? s.getUTCFullYear() : s.getFullYear();
      default:
        return NaN;
    }
  }
  function ns(e, t, s) {
    var r, a, n, i, l;
    if (!(!e.isValid() || isNaN(s))) {
      switch (r = e._d, a = e._isUTC, t) {
        case "Milliseconds":
          return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
        case "Seconds":
          return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
        case "Minutes":
          return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
        case "Hours":
          return void (a ? r.setUTCHours(s) : r.setHours(s));
        case "Date":
          return void (a ? r.setUTCDate(s) : r.setDate(s));
        case "FullYear":
          break;
        default:
          return;
      }
      n = s, i = e.month(), l = e.date(), l = l === 29 && i === 1 && !ze(n) ? 28 : l, a ? r.setUTCFullYear(n, i, l) : r.setFullYear(n, i, l);
    }
  }
  function Fr(e) {
    return e = F(e), G(this[e]) ? this[e]() : this;
  }
  function Ir(e, t) {
    if (typeof e == "object") {
      e = kt(e);
      var s = Or(e), r, a = s.length;
      for (r = 0; r < a; r++)
        this[s[r].unit](e[s[r].unit]);
    } else if (e = F(e), G(this[e]))
      return this[e](t);
    return this;
  }
  function Ur(e, t) {
    return (e % t + t) % t;
  }
  var b;
  Array.prototype.indexOf ? b = Array.prototype.indexOf : b = function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
      if (this[t] === e)
        return t;
    return -1;
  };
  function Dt(e, t) {
    if (isNaN(e) || isNaN(t))
      return NaN;
    var s = Ur(t, 12);
    return e += (t - s) / 12, s === 1 ? ze(e) ? 29 : 28 : 31 - s % 7 % 2;
  }
  f("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  f("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e);
  });
  f("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e);
  });
  d("M", M, _e);
  d("MM", M, R);
  d("MMM", function(e, t) {
    return t.monthsShortRegex(e);
  });
  d("MMMM", function(e, t) {
    return t.monthsRegex(e);
  });
  v(["M", "MM"], function(e, t) {
    t[z] = _(e) - 1;
  });
  v(["MMM", "MMMM"], function(e, t, s, r) {
    var a = s._locale.monthsParse(e, r, s._strict);
    a != null ? t[z] = a : m(s).invalidMonth = e;
  });
  var Lr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  ), is = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), os = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ar = be, Hr = be;
  function Er(e, t) {
    return e ? U(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || os).test(t) ? "format" : "standalone"][e.month()] : U(this._months) ? this._months : this._months.standalone;
  }
  function Vr(e, t) {
    return e ? U(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[os.test(t) ? "format" : "standalone"][e.month()] : U(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }
  function Gr(e, t, s) {
    var r, a, n, i = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
        n = V([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
          n,
          ""
        ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
    return s ? t === "MMM" ? (a = b.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = b.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = b.call(this._shortMonthsParse, i), a !== -1 ? a : (a = b.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = b.call(this._longMonthsParse, i), a !== -1 ? a : (a = b.call(this._shortMonthsParse, i), a !== -1 ? a : null));
  }
  function $r(e, t, s) {
    var r, a, n;
    if (this._monthsParseExact)
      return Gr.call(this, e, t, s);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
      if (a = V([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
        "^" + this.months(a, "").replace(".", "") + "$",
        "i"
      ), this._shortMonthsParse[r] = new RegExp(
        "^" + this.monthsShort(a, "").replace(".", "") + "$",
        "i"
      )), !s && !this._monthsParse[r] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
        return r;
      if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
        return r;
      if (!s && this._monthsParse[r].test(e))
        return r;
    }
  }
  function ls(e, t) {
    if (!e.isValid())
      return e;
    if (typeof t == "string") {
      if (/^\d+$/.test(t))
        t = _(t);
      else if (t = e.localeData().monthsParse(t), !B(t))
        return e;
    }
    var s = t, r = e.date();
    return r = r < 29 ? r : Math.min(r, Dt(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
  }
  function us(e) {
    return e != null ? (ls(this, e), u.updateOffset(this, !0), this) : ve(this, "Month");
  }
  function jr() {
    return Dt(this.year(), this.month());
  }
  function zr(e) {
    return this._monthsParseExact ? (g(this, "_monthsRegex") || ds.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (g(this, "_monthsShortRegex") || (this._monthsShortRegex = Ar), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }
  function Zr(e) {
    return this._monthsParseExact ? (g(this, "_monthsRegex") || ds.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (g(this, "_monthsRegex") || (this._monthsRegex = Hr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }
  function ds() {
    function e(c, h) {
      return h.length - c.length;
    }
    var t = [], s = [], r = [], a, n, i, l;
    for (a = 0; a < 12; a++)
      n = V([2e3, a]), i = q(this.monthsShort(n, "")), l = q(this.months(n, "")), t.push(i), s.push(l), r.push(l), r.push(i);
    t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
      "^(" + s.join("|") + ")",
      "i"
    ), this._monthsShortStrictRegex = new RegExp(
      "^(" + t.join("|") + ")",
      "i"
    );
  }
  function qr(e, t, s, r, a, n, i) {
    var l;
    return e < 100 && e >= 0 ? (l = new Date(e + 400, t, s, r, a, n, i), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, s, r, a, n, i), l;
  }
  function Se(e) {
    var t, s;
    return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
  }
  function Ie(e, t, s) {
    var r = 7 + t - s, a = (7 + Se(e, 0, r).getUTCDay() - t) % 7;
    return -a + r - 1;
  }
  function hs(e, t, s, r, a) {
    var n = (7 + s - r) % 7, i = Ie(e, r, a), l = 1 + 7 * (t - 1) + n + i, c, h;
    return l <= 0 ? (c = e - 1, h = ke(c) + l) : l > ke(e) ? (c = e + 1, h = l - ke(e)) : (c = e, h = l), {
      year: c,
      dayOfYear: h
    };
  }
  function Me(e, t, s) {
    var r = Ie(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
    return a < 1 ? (i = e.year() - 1, n = a + Q(i, t, s)) : a > Q(e.year(), t, s) ? (n = a - Q(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
      week: n,
      year: i
    };
  }
  function Q(e, t, s) {
    var r = Ie(e, t, s), a = Ie(e + 1, t, s);
    return (ke(e) - r + a) / 7;
  }
  f("w", ["ww", 2], "wo", "week");
  f("W", ["WW", 2], "Wo", "isoWeek");
  d("w", M, _e);
  d("ww", M, R);
  d("W", M, _e);
  d("WW", M, R);
  Te(
    ["w", "ww", "W", "WW"],
    function(e, t, s, r) {
      t[r.substr(0, 1)] = _(e);
    }
  );
  function Qr(e) {
    return Me(e, this._week.dow, this._week.doy).week;
  }
  var Br = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 6th is the first week of the year.
  };
  function Jr() {
    return this._week.dow;
  }
  function Xr() {
    return this._week.doy;
  }
  function Kr(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  function ea(e) {
    var t = Me(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  f("d", 0, "do", "day");
  f("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e);
  });
  f("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e);
  });
  f("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e);
  });
  f("e", 0, 0, "weekday");
  f("E", 0, 0, "isoWeekday");
  d("d", M);
  d("e", M);
  d("E", M);
  d("dd", function(e, t) {
    return t.weekdaysMinRegex(e);
  });
  d("ddd", function(e, t) {
    return t.weekdaysShortRegex(e);
  });
  d("dddd", function(e, t) {
    return t.weekdaysRegex(e);
  });
  Te(["dd", "ddd", "dddd"], function(e, t, s, r) {
    var a = s._locale.weekdaysParse(e, r, s._strict);
    a != null ? t.d = a : m(s).invalidWeekday = e;
  });
  Te(["d", "e", "E"], function(e, t, s, r) {
    t[r] = _(e);
  });
  function ta(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
  }
  function sa(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
  }
  function Yt(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  var ra = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), fs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), aa = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), na = be, ia = be, oa = be;
  function la(e, t) {
    var s = U(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? Yt(s, this._week.dow) : e ? s[e.day()] : s;
  }
  function ua(e) {
    return e === !0 ? Yt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }
  function da(e) {
    return e === !0 ? Yt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }
  function ha(e, t, s) {
    var r, a, n, i = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
        n = V([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
          n,
          ""
        ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
          n,
          ""
        ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase();
    return s ? t === "dddd" ? (a = b.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = b.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = b.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = b.call(this._weekdaysParse, i), a !== -1 || (a = b.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = b.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = b.call(this._shortWeekdaysParse, i), a !== -1 || (a = b.call(this._weekdaysParse, i), a !== -1) ? a : (a = b.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = b.call(this._minWeekdaysParse, i), a !== -1 || (a = b.call(this._weekdaysParse, i), a !== -1) ? a : (a = b.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
  }
  function fa(e, t, s) {
    var r, a, n;
    if (this._weekdaysParseExact)
      return ha.call(this, e, t, s);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
      if (a = V([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
        "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
        "i"
      ), this._shortWeekdaysParse[r] = new RegExp(
        "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
        "i"
      ), this._minWeekdaysParse[r] = new RegExp(
        "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
        "i"
      )), this._weekdaysParse[r] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
        return r;
      if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
        return r;
      if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
        return r;
      if (!s && this._weekdaysParse[r].test(e))
        return r;
    }
  }
  function ca(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = ve(this, "Day");
    return e != null ? (e = ta(e, this.localeData()), this.add(e - t, "d")) : t;
  }
  function ma(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d");
  }
  function _a(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      var t = sa(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    } else
      return this.day() || 7;
  }
  function ya(e) {
    return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Ot.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (g(this, "_weekdaysRegex") || (this._weekdaysRegex = na), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }
  function ga(e) {
    return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Ot.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (g(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ia), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }
  function pa(e) {
    return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Ot.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (g(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = oa), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }
  function Ot() {
    function e(w, k) {
      return k.length - w.length;
    }
    var t = [], s = [], r = [], a = [], n, i, l, c, h;
    for (n = 0; n < 7; n++)
      i = V([2e3, 1]).day(n), l = q(this.weekdaysMin(i, "")), c = q(this.weekdaysShort(i, "")), h = q(this.weekdays(i, "")), t.push(l), s.push(c), r.push(h), a.push(l), a.push(c), a.push(h);
    t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
      "^(" + r.join("|") + ")",
      "i"
    ), this._weekdaysShortStrictRegex = new RegExp(
      "^(" + s.join("|") + ")",
      "i"
    ), this._weekdaysMinStrictRegex = new RegExp(
      "^(" + t.join("|") + ")",
      "i"
    );
  }
  function bt() {
    return this.hours() % 12 || 12;
  }
  function wa() {
    return this.hours() || 24;
  }
  f("H", ["HH", 2], 0, "hour");
  f("h", ["hh", 2], 0, bt);
  f("k", ["kk", 2], 0, wa);
  f("hmm", 0, 0, function() {
    return "" + bt.apply(this) + E(this.minutes(), 2);
  });
  f("hmmss", 0, 0, function() {
    return "" + bt.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2);
  });
  f("Hmm", 0, 0, function() {
    return "" + this.hours() + E(this.minutes(), 2);
  });
  f("Hmmss", 0, 0, function() {
    return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2);
  });
  function cs(e, t) {
    f(e, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        t
      );
    });
  }
  cs("a", !0);
  cs("A", !1);
  function ms(e, t) {
    return t._meridiemParse;
  }
  d("a", ms);
  d("A", ms);
  d("H", M, Mt);
  d("h", M, _e);
  d("k", M, _e);
  d("HH", M, R);
  d("hh", M, R);
  d("kk", M, R);
  d("hmm", ss);
  d("hmmss", rs);
  d("Hmm", ss);
  d("Hmmss", rs);
  v(["H", "HH"], T);
  v(["k", "kk"], function(e, t, s) {
    var r = _(e);
    t[T] = r === 24 ? 0 : r;
  });
  v(["a", "A"], function(e, t, s) {
    s._isPm = s._locale.isPM(e), s._meridiem = e;
  });
  v(["h", "hh"], function(e, t, s) {
    t[T] = _(e), m(s).bigHour = !0;
  });
  v("hmm", function(e, t, s) {
    var r = e.length - 2;
    t[T] = _(e.substr(0, r)), t[I] = _(e.substr(r)), m(s).bigHour = !0;
  });
  v("hmmss", function(e, t, s) {
    var r = e.length - 4, a = e.length - 2;
    t[T] = _(e.substr(0, r)), t[I] = _(e.substr(r, 2)), t[Z] = _(e.substr(a)), m(s).bigHour = !0;
  });
  v("Hmm", function(e, t, s) {
    var r = e.length - 2;
    t[T] = _(e.substr(0, r)), t[I] = _(e.substr(r));
  });
  v("Hmmss", function(e, t, s) {
    var r = e.length - 4, a = e.length - 2;
    t[T] = _(e.substr(0, r)), t[I] = _(e.substr(r, 2)), t[Z] = _(e.substr(a));
  });
  function ka(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  var va = /[ap]\.?m?\.?/i, Sa = ye("Hours", !0);
  function Ma(e, t, s) {
    return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
  }
  var _s = {
    calendar: hr,
    longDateFormat: _r,
    invalidDate: gr,
    ordinal: wr,
    dayOfMonthOrdinalParse: kr,
    relativeTime: Sr,
    months: Lr,
    monthsShort: is,
    week: Br,
    weekdays: ra,
    weekdaysMin: aa,
    weekdaysShort: fs,
    meridiemParse: va
  }, Y = {}, pe = {}, De;
  function Da(e, t) {
    var s, r = Math.min(e.length, t.length);
    for (s = 0; s < r; s += 1)
      if (e[s] !== t[s])
        return s;
    return r;
  }
  function zt(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function Ya(e) {
    for (var t = 0, s, r, a, n; t < e.length; ) {
      for (n = zt(e[t]).split("-"), s = n.length, r = zt(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
        if (a = Ze(n.slice(0, s).join("-")), a)
          return a;
        if (r && r.length >= s && Da(n, r) >= s - 1)
          break;
        s--;
      }
      t++;
    }
    return De;
  }
  function Oa(e) {
    return !!(e && e.match("^[^/\\\\]*$"));
  }
  function Ze(e) {
    var t = null, s;
    if (Y[e] === void 0 && typeof Ce < "u" && Ce && Ce.exports && Oa(e))
      try {
        t = De._abbr, s = require, s("./locale/" + e), te(t);
      } catch {
        Y[e] = null;
      }
    return Y[e];
  }
  function te(e, t) {
    var s;
    return e && (N(t) ? s = J(e) : s = Tt(e, t), s ? De = s : typeof console < "u" && console.warn && console.warn(
      "Locale " + e + " not found. Did you forget to load it?"
    )), De._abbr;
  }
  function Tt(e, t) {
    if (t !== null) {
      var s, r = _s;
      if (t.abbr = e, Y[e] != null)
        Xt(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ), r = Y[e]._config;
      else if (t.parentLocale != null)
        if (Y[t.parentLocale] != null)
          r = Y[t.parentLocale]._config;
        else if (s = Ze(t.parentLocale), s != null)
          r = s._config;
        else
          return pe[t.parentLocale] || (pe[t.parentLocale] = []), pe[t.parentLocale].push({
            name: e,
            config: t
          }), null;
      return Y[e] = new pt(nt(r, t)), pe[e] && pe[e].forEach(function(a) {
        Tt(a.name, a.config);
      }), te(e), Y[e];
    } else
      return delete Y[e], null;
  }
  function ba(e, t) {
    if (t != null) {
      var s, r, a = _s;
      Y[e] != null && Y[e].parentLocale != null ? Y[e].set(nt(Y[e]._config, t)) : (r = Ze(e), r != null && (a = r._config), t = nt(a, t), r == null && (t.abbr = e), s = new pt(t), s.parentLocale = Y[e], Y[e] = s), te(e);
    } else
      Y[e] != null && (Y[e].parentLocale != null ? (Y[e] = Y[e].parentLocale, e === te() && te(e)) : Y[e] != null && delete Y[e]);
    return Y[e];
  }
  function J(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
      return De;
    if (!U(e)) {
      if (t = Ze(e), t)
        return t;
      e = [e];
    }
    return Ya(e);
  }
  function Ta() {
    return it(Y);
  }
  function Pt(e) {
    var t, s = e._a;
    return s && m(e).overflow === -2 && (t = s[z] < 0 || s[z] > 11 ? z : s[H] < 1 || s[H] > Dt(s[P], s[z]) ? H : s[T] < 0 || s[T] > 24 || s[T] === 24 && (s[I] !== 0 || s[Z] !== 0 || s[ae] !== 0) ? T : s[I] < 0 || s[I] > 59 ? I : s[Z] < 0 || s[Z] > 59 ? Z : s[ae] < 0 || s[ae] > 999 ? ae : -1, m(e)._overflowDayOfYear && (t < P || t > H) && (t = H), m(e)._overflowWeeks && t === -1 && (t = Rr), m(e)._overflowWeekday && t === -1 && (t = Wr), m(e).overflow = t), e;
  }
  var Pa = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, xa = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Na = /Z|[+-]\d\d(?::?\d\d)?/, xe = [
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
  ], et = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], Ra = /^\/?Date\((-?\d+)/i, Wa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Ca = {
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
  function ys(e) {
    var t, s, r = e._i, a = Pa.exec(r) || xa.exec(r), n, i, l, c, h = xe.length, w = et.length;
    if (a) {
      for (m(e).iso = !0, t = 0, s = h; t < s; t++)
        if (xe[t][1].exec(a[1])) {
          i = xe[t][0], n = xe[t][2] !== !1;
          break;
        }
      if (i == null) {
        e._isValid = !1;
        return;
      }
      if (a[3]) {
        for (t = 0, s = w; t < s; t++)
          if (et[t][1].exec(a[3])) {
            l = (a[2] || " ") + et[t][0];
            break;
          }
        if (l == null) {
          e._isValid = !1;
          return;
        }
      }
      if (!n && l != null) {
        e._isValid = !1;
        return;
      }
      if (a[4])
        if (Na.exec(a[4]))
          c = "Z";
        else {
          e._isValid = !1;
          return;
        }
      e._f = i + (l || "") + (c || ""), Nt(e);
    } else
      e._isValid = !1;
  }
  function Fa(e, t, s, r, a, n) {
    var i = [
      Ia(e),
      is.indexOf(t),
      parseInt(s, 10),
      parseInt(r, 10),
      parseInt(a, 10)
    ];
    return n && i.push(parseInt(n, 10)), i;
  }
  function Ia(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function Ua(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function La(e, t, s) {
    if (e) {
      var r = fs.indexOf(e), a = new Date(
        t[0],
        t[1],
        t[2]
      ).getDay();
      if (r !== a)
        return m(s).weekdayMismatch = !0, s._isValid = !1, !1;
    }
    return !0;
  }
  function Aa(e, t, s) {
    if (e)
      return Ca[e];
    if (t)
      return 0;
    var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
    return n * 60 + a;
  }
  function gs(e) {
    var t = Wa.exec(Ua(e._i)), s;
    if (t) {
      if (s = Fa(
        t[4],
        t[3],
        t[2],
        t[5],
        t[6],
        t[7]
      ), !La(t[1], s, e))
        return;
      e._a = s, e._tzm = Aa(t[8], t[9], t[10]), e._d = Se.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), m(e).rfc2822 = !0;
    } else
      e._isValid = !1;
  }
  function Ha(e) {
    var t = Ra.exec(e._i);
    if (t !== null) {
      e._d = /* @__PURE__ */ new Date(+t[1]);
      return;
    }
    if (ys(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    if (gs(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    e._strict ? e._isValid = !1 : u.createFromInputFallback(e);
  }
  u.createFromInputFallback = C(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(e) {
      e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  );
  function ue(e, t, s) {
    return e ?? t ?? s;
  }
  function Ea(e) {
    var t = new Date(u.now());
    return e._useUTC ? [
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate()
    ] : [t.getFullYear(), t.getMonth(), t.getDate()];
  }
  function xt(e) {
    var t, s, r = [], a, n, i;
    if (!e._d) {
      for (a = Ea(e), e._w && e._a[H] == null && e._a[z] == null && Va(e), e._dayOfYear != null && (i = ue(e._a[P], a[P]), (e._dayOfYear > ke(i) || e._dayOfYear === 0) && (m(e)._overflowDayOfYear = !0), s = Se(i, 0, e._dayOfYear), e._a[z] = s.getUTCMonth(), e._a[H] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
        e._a[t] = r[t] = a[t];
      for (; t < 7; t++)
        e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
      e._a[T] === 24 && e._a[I] === 0 && e._a[Z] === 0 && e._a[ae] === 0 && (e._nextDay = !0, e._a[T] = 0), e._d = (e._useUTC ? Se : qr).apply(
        null,
        r
      ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[T] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (m(e).weekdayMismatch = !0);
    }
  }
  function Va(e) {
    var t, s, r, a, n, i, l, c, h;
    t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = ue(
      t.GG,
      e._a[P],
      Me(S(), 1, 4).year
    ), r = ue(t.W, 1), a = ue(t.E, 1), (a < 1 || a > 7) && (c = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, h = Me(S(), n, i), s = ue(t.gg, e._a[P], h.year), r = ue(t.w, h.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (c = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (c = !0)) : a = n), r < 1 || r > Q(s, n, i) ? m(e)._overflowWeeks = !0 : c != null ? m(e)._overflowWeekday = !0 : (l = hs(s, r, a, n, i), e._a[P] = l.year, e._dayOfYear = l.dayOfYear);
  }
  u.ISO_8601 = function() {
  };
  u.RFC_2822 = function() {
  };
  function Nt(e) {
    if (e._f === u.ISO_8601) {
      ys(e);
      return;
    }
    if (e._f === u.RFC_2822) {
      gs(e);
      return;
    }
    e._a = [], m(e).empty = !0;
    var t = "" + e._i, s, r, a, n, i, l = t.length, c = 0, h, w;
    for (a = Kt(e._f, e._locale).match(wt) || [], w = a.length, s = 0; s < w; s++)
      n = a[s], r = (t.match(Pr(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && m(e).unusedInput.push(i), t = t.slice(
        t.indexOf(r) + r.length
      ), c += r.length), he[n] ? (r ? m(e).empty = !1 : m(e).unusedTokens.push(n), Nr(n, r, e)) : e._strict && !r && m(e).unusedTokens.push(n);
    m(e).charsLeftOver = l - c, t.length > 0 && m(e).unusedInput.push(t), e._a[T] <= 12 && m(e).bigHour === !0 && e._a[T] > 0 && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[T] = Ga(
      e._locale,
      e._a[T],
      e._meridiem
    ), h = m(e).era, h !== null && (e._a[P] = e._locale.erasConvertYear(h, e._a[P])), xt(e), Pt(e);
  }
  function Ga(e, t, s) {
    var r;
    return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
  }
  function $a(e) {
    var t, s, r, a, n, i, l = !1, c = e._f.length;
    if (c === 0) {
      m(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (a = 0; a < c; a++)
      n = 0, i = !1, t = gt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Nt(t), yt(t) && (i = !0), n += m(t).charsLeftOver, n += m(t).unusedTokens.length * 10, m(t).score = n, l ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (l = !0));
    K(e, s || t);
  }
  function ja(e) {
    if (!e._d) {
      var t = kt(e._i), s = t.day === void 0 ? t.date : t.day;
      e._a = Bt(
        [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
        function(r) {
          return r && parseInt(r, 10);
        }
      ), xt(e);
    }
  }
  function za(e) {
    var t = new Oe(Pt(ps(e)));
    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
  }
  function ps(e) {
    var t = e._i, s = e._f;
    return e._locale = e._locale || J(e._l), t === null || s === void 0 && t === "" ? He({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), L(t) ? new Oe(Pt(t)) : (Ye(t) ? e._d = t : U(s) ? $a(e) : s ? Nt(e) : Za(e), yt(e) || (e._d = null), e));
  }
  function Za(e) {
    var t = e._i;
    N(t) ? e._d = new Date(u.now()) : Ye(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Ha(e) : U(t) ? (e._a = Bt(t.slice(0), function(s) {
      return parseInt(s, 10);
    }), xt(e)) : ne(t) ? ja(e) : B(t) ? e._d = new Date(t) : u.createFromInputFallback(e);
  }
  function ws(e, t, s, r, a) {
    var n = {};
    return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (ne(e) && _t(e) || U(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, za(n);
  }
  function S(e, t, s, r) {
    return ws(e, t, s, r, !1);
  }
  var qa = C(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = S.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : He();
    }
  ), Qa = C(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = S.apply(null, arguments);
      return this.isValid() && e.isValid() ? e > this ? this : e : He();
    }
  );
  function ks(e, t) {
    var s, r;
    if (t.length === 1 && U(t[0]) && (t = t[0]), !t.length)
      return S();
    for (s = t[0], r = 1; r < t.length; ++r)
      (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
    return s;
  }
  function Ba() {
    var e = [].slice.call(arguments, 0);
    return ks("isBefore", e);
  }
  function Ja() {
    var e = [].slice.call(arguments, 0);
    return ks("isAfter", e);
  }
  var Xa = function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }, we = [
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
  function Ka(e) {
    var t, s = !1, r, a = we.length;
    for (t in e)
      if (g(e, t) && !(b.call(we, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
        return !1;
    for (r = 0; r < a; ++r)
      if (e[we[r]]) {
        if (s)
          return !1;
        parseFloat(e[we[r]]) !== _(e[we[r]]) && (s = !0);
      }
    return !0;
  }
  function en() {
    return this._isValid;
  }
  function tn() {
    return A(NaN);
  }
  function qe(e) {
    var t = kt(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, l = t.hour || 0, c = t.minute || 0, h = t.second || 0, w = t.millisecond || 0;
    this._isValid = Ka(t), this._milliseconds = +w + h * 1e3 + // 1000
    c * 6e4 + // 1000 * 60
    l * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = J(), this._bubble();
  }
  function Re(e) {
    return e instanceof qe;
  }
  function lt(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
  function sn(e, t, s) {
    var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
    for (i = 0; i < r; i++)
      _(e[i]) !== _(t[i]) && n++;
    return n + a;
  }
  function vs(e, t) {
    f(e, 0, 0, function() {
      var s = this.utcOffset(), r = "+";
      return s < 0 && (s = -s, r = "-"), r + E(~~(s / 60), 2) + t + E(~~s % 60, 2);
    });
  }
  vs("Z", ":");
  vs("ZZ", "");
  d("Z", je);
  d("ZZ", je);
  v(["Z", "ZZ"], function(e, t, s) {
    s._useUTC = !0, s._tzm = Rt(je, e);
  });
  var rn = /([\+\-]|\d\d)/gi;
  function Rt(e, t) {
    var s = (t || "").match(e), r, a, n;
    return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(rn) || ["-", 0, 0], n = +(a[1] * 60) + _(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
  }
  function Wt(e, t) {
    var s, r;
    return t._isUTC ? (s = t.clone(), r = (L(e) || Ye(e) ? e.valueOf() : S(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), u.updateOffset(s, !1), s) : S(e).local();
  }
  function ut(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  u.updateOffset = function() {
  };
  function an(e, t, s) {
    var r = this._offset || 0, a;
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      if (typeof e == "string") {
        if (e = Rt(je, e), e === null)
          return this;
      } else Math.abs(e) < 16 && !s && (e = e * 60);
      return !this._isUTC && t && (a = ut(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Ds(
        this,
        A(e - r, "m"),
        1,
        !1
      ) : this._changeInProgress || (this._changeInProgress = !0, u.updateOffset(this, !0), this._changeInProgress = null)), this;
    } else
      return this._isUTC ? r : ut(this);
  }
  function nn(e, t) {
    return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }
  function on(e) {
    return this.utcOffset(0, e);
  }
  function ln(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ut(this), "m")), this;
  }
  function un() {
    if (this._tzm != null)
      this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var e = Rt(br, this._i);
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }
  function dn(e) {
    return this.isValid() ? (e = e ? S(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
  }
  function hn() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function fn() {
    if (!N(this._isDSTShifted))
      return this._isDSTShifted;
    var e = {}, t;
    return gt(e, this), e = ps(e), e._a ? (t = e._isUTC ? V(e._a) : S(e._a), this._isDSTShifted = this.isValid() && sn(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
  }
  function cn() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function mn() {
    return this.isValid() ? this._isUTC : !1;
  }
  function Ss() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var _n = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, yn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function A(e, t) {
    var s = e, r = null, a, n, i;
    return Re(e) ? s = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : B(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = _n.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
      y: 0,
      d: _(r[H]) * a,
      h: _(r[T]) * a,
      m: _(r[I]) * a,
      s: _(r[Z]) * a,
      ms: _(lt(r[ae] * 1e3)) * a
      // the millisecond decimal point is included in the match
    }) : (r = yn.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
      y: se(r[2], a),
      M: se(r[3], a),
      w: se(r[4], a),
      d: se(r[5], a),
      h: se(r[6], a),
      m: se(r[7], a),
      s: se(r[8], a)
    }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = gn(
      S(s.from),
      S(s.to)
    ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new qe(s), Re(e) && g(e, "_locale") && (n._locale = e._locale), Re(e) && g(e, "_isValid") && (n._isValid = e._isValid), n;
  }
  A.fn = qe.prototype;
  A.invalid = tn;
  function se(e, t) {
    var s = e && parseFloat(e.replace(",", "."));
    return (isNaN(s) ? 0 : s) * t;
  }
  function Zt(e, t) {
    var s = {};
    return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
  }
  function gn(e, t) {
    var s;
    return e.isValid() && t.isValid() ? (t = Wt(t, e), e.isBefore(t) ? s = Zt(e, t) : (s = Zt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
  }
  function Ms(e, t) {
    return function(s, r) {
      var a, n;
      return r !== null && !isNaN(+r) && (Xt(
        t,
        "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
      ), n = s, s = r, r = n), a = A(s, r), Ds(this, a, e), this;
    };
  }
  function Ds(e, t, s, r) {
    var a = t._milliseconds, n = lt(t._days), i = lt(t._months);
    e.isValid() && (r = r ?? !0, i && ls(e, ve(e, "Month") + i * s), n && ns(e, "Date", ve(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && u.updateOffset(e, n || i));
  }
  var pn = Ms(1, "add"), wn = Ms(-1, "subtract");
  function Ys(e) {
    return typeof e == "string" || e instanceof String;
  }
  function kn(e) {
    return L(e) || Ye(e) || Ys(e) || B(e) || Sn(e) || vn(e) || e === null || e === void 0;
  }
  function vn(e) {
    var t = ne(e) && !_t(e), s = !1, r = [
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
    ], a, n, i = r.length;
    for (a = 0; a < i; a += 1)
      n = r[a], s = s || g(e, n);
    return t && s;
  }
  function Sn(e) {
    var t = U(e), s = !1;
    return t && (s = e.filter(function(r) {
      return !B(r) && Ys(e);
    }).length === 0), t && s;
  }
  function Mn(e) {
    var t = ne(e) && !_t(e), s = !1, r = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], a, n;
    for (a = 0; a < r.length; a += 1)
      n = r[a], s = s || g(e, n);
    return t && s;
  }
  function Dn(e, t) {
    var s = e.diff(t, "days", !0);
    return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
  }
  function Yn(e, t) {
    arguments.length === 1 && (arguments[0] ? kn(arguments[0]) ? (e = arguments[0], t = void 0) : Mn(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
    var s = e || S(), r = Wt(s, this).startOf("day"), a = u.calendarFormat(this, r) || "sameElse", n = t && (G(t[a]) ? t[a].call(this, s) : t[a]);
    return this.format(
      n || this.localeData().calendar(a, this, S(s))
    );
  }
  function On() {
    return new Oe(this);
  }
  function bn(e, t) {
    var s = L(e) ? e : S(e);
    return this.isValid() && s.isValid() ? (t = F(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
  }
  function Tn(e, t) {
    var s = L(e) ? e : S(e);
    return this.isValid() && s.isValid() ? (t = F(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
  }
  function Pn(e, t, s, r) {
    var a = L(e) ? e : S(e), n = L(t) ? t : S(t);
    return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
  }
  function xn(e, t) {
    var s = L(e) ? e : S(e), r;
    return this.isValid() && s.isValid() ? (t = F(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
  }
  function Nn(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function Rn(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function Wn(e, t, s) {
    var r, a, n;
    if (!this.isValid())
      return NaN;
    if (r = Wt(e, this), !r.isValid())
      return NaN;
    switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = F(t), t) {
      case "year":
        n = We(this, r) / 12;
        break;
      case "month":
        n = We(this, r);
        break;
      case "quarter":
        n = We(this, r) / 3;
        break;
      case "second":
        n = (this - r) / 1e3;
        break;
      case "minute":
        n = (this - r) / 6e4;
        break;
      case "hour":
        n = (this - r) / 36e5;
        break;
      case "day":
        n = (this - r - a) / 864e5;
        break;
      case "week":
        n = (this - r - a) / 6048e5;
        break;
      default:
        n = this - r;
    }
    return s ? n : W(n);
  }
  function We(e, t) {
    if (e.date() < t.date())
      return -We(t, e);
    var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
    return t - r < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), n = (t - r) / (a - r)), -(s + n) || 0;
  }
  u.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  u.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function Cn() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function Fn(e) {
    if (!this.isValid())
      return null;
    var t = e !== !0, s = t ? this.clone().utc() : this;
    return s.year() < 0 || s.year() > 9999 ? Ne(
      s,
      t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
    ) : G(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ne(s, "Z")) : Ne(
      s,
      t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  function In() {
    if (!this.isValid())
      return "moment.invalid(/* " + this._i + " */)";
    var e = "moment", t = "", s, r, a, n;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
  }
  function Un(e) {
    e || (e = this.isUtc() ? u.defaultFormatUtc : u.defaultFormat);
    var t = Ne(this, e);
    return this.localeData().postformat(t);
  }
  function Ln(e, t) {
    return this.isValid() && (L(e) && e.isValid() || S(e).isValid()) ? A({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function An(e) {
    return this.from(S(), e);
  }
  function Hn(e, t) {
    return this.isValid() && (L(e) && e.isValid() || S(e).isValid()) ? A({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function En(e) {
    return this.to(S(), e);
  }
  function Os(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = J(e), t != null && (this._locale = t), this);
  }
  var bs = C(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    }
  );
  function Ts() {
    return this._locale;
  }
  var Ue = 1e3, fe = 60 * Ue, Le = 60 * fe, Ps = (365 * 400 + 97) * 24 * Le;
  function ce(e, t) {
    return (e % t + t) % t;
  }
  function xs(e, t, s) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Ps : new Date(e, t, s).valueOf();
  }
  function Ns(e, t, s) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Ps : Date.UTC(e, t, s);
  }
  function Vn(e) {
    var t, s;
    if (e = F(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (s = this._isUTC ? Ns : xs, e) {
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
        t = this._d.valueOf(), t -= ce(
          t + (this._isUTC ? 0 : this.utcOffset() * fe),
          Le
        );
        break;
      case "minute":
        t = this._d.valueOf(), t -= ce(t, fe);
        break;
      case "second":
        t = this._d.valueOf(), t -= ce(t, Ue);
        break;
    }
    return this._d.setTime(t), u.updateOffset(this, !0), this;
  }
  function Gn(e) {
    var t, s;
    if (e = F(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (s = this._isUTC ? Ns : xs, e) {
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
        t = this._d.valueOf(), t += Le - ce(
          t + (this._isUTC ? 0 : this.utcOffset() * fe),
          Le
        ) - 1;
        break;
      case "minute":
        t = this._d.valueOf(), t += fe - ce(t, fe) - 1;
        break;
      case "second":
        t = this._d.valueOf(), t += Ue - ce(t, Ue) - 1;
        break;
    }
    return this._d.setTime(t), u.updateOffset(this, !0), this;
  }
  function $n() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function jn() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function zn() {
    return new Date(this.valueOf());
  }
  function Zn() {
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
  function qn() {
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
  function Qn() {
    return this.isValid() ? this.toISOString() : null;
  }
  function Bn() {
    return yt(this);
  }
  function Jn() {
    return K({}, m(this));
  }
  function Xn() {
    return m(this).overflow;
  }
  function Kn() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  f("N", 0, 0, "eraAbbr");
  f("NN", 0, 0, "eraAbbr");
  f("NNN", 0, 0, "eraAbbr");
  f("NNNN", 0, 0, "eraName");
  f("NNNNN", 0, 0, "eraNarrow");
  f("y", ["y", 1], "yo", "eraYear");
  f("y", ["yy", 2], 0, "eraYear");
  f("y", ["yyy", 3], 0, "eraYear");
  f("y", ["yyyy", 4], 0, "eraYear");
  d("N", Ct);
  d("NN", Ct);
  d("NNN", Ct);
  d("NNNN", di);
  d("NNNNN", hi);
  v(
    ["N", "NN", "NNN", "NNNN", "NNNNN"],
    function(e, t, s, r) {
      var a = s._locale.erasParse(e, r, s._strict);
      a ? m(s).era = a : m(s).invalidEra = e;
    }
  );
  d("y", me);
  d("yy", me);
  d("yyy", me);
  d("yyyy", me);
  d("yo", fi);
  v(["y", "yy", "yyy", "yyyy"], P);
  v(["yo"], function(e, t, s, r) {
    var a;
    s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[P] = s._locale.eraYearOrdinalParse(e, a) : t[P] = parseInt(e, 10);
  });
  function ei(e, t) {
    var s, r, a, n = this._eras || J("en")._eras;
    for (s = 0, r = n.length; s < r; ++s) {
      switch (typeof n[s].since) {
        case "string":
          a = u(n[s].since).startOf("day"), n[s].since = a.valueOf();
          break;
      }
      switch (typeof n[s].until) {
        case "undefined":
          n[s].until = 1 / 0;
          break;
        case "string":
          a = u(n[s].until).startOf("day").valueOf(), n[s].until = a.valueOf();
          break;
      }
    }
    return n;
  }
  function ti(e, t, s) {
    var r, a, n = this.eras(), i, l, c;
    for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
      if (i = n[r].name.toUpperCase(), l = n[r].abbr.toUpperCase(), c = n[r].narrow.toUpperCase(), s)
        switch (t) {
          case "N":
          case "NN":
          case "NNN":
            if (l === e)
              return n[r];
            break;
          case "NNNN":
            if (i === e)
              return n[r];
            break;
          case "NNNNN":
            if (c === e)
              return n[r];
            break;
        }
      else if ([i, l, c].indexOf(e) >= 0)
        return n[r];
  }
  function si(e, t) {
    var s = e.since <= e.until ? 1 : -1;
    return t === void 0 ? u(e.since).year() : u(e.since).year() + (t - e.offset) * s;
  }
  function ri() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
        return r[e].name;
    return "";
  }
  function ai() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
        return r[e].narrow;
    return "";
  }
  function ni() {
    var e, t, s, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
        return r[e].abbr;
    return "";
  }
  function ii() {
    var e, t, s, r, a = this.localeData().eras();
    for (e = 0, t = a.length; e < t; ++e)
      if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
        return (this.year() - u(a[e].since).year()) * s + a[e].offset;
    return this.year();
  }
  function oi(e) {
    return g(this, "_erasNameRegex") || Ft.call(this), e ? this._erasNameRegex : this._erasRegex;
  }
  function li(e) {
    return g(this, "_erasAbbrRegex") || Ft.call(this), e ? this._erasAbbrRegex : this._erasRegex;
  }
  function ui(e) {
    return g(this, "_erasNarrowRegex") || Ft.call(this), e ? this._erasNarrowRegex : this._erasRegex;
  }
  function Ct(e, t) {
    return t.erasAbbrRegex(e);
  }
  function di(e, t) {
    return t.erasNameRegex(e);
  }
  function hi(e, t) {
    return t.erasNarrowRegex(e);
  }
  function fi(e, t) {
    return t._eraYearOrdinalRegex || me;
  }
  function Ft() {
    var e = [], t = [], s = [], r = [], a, n, i, l, c, h = this.eras();
    for (a = 0, n = h.length; a < n; ++a)
      i = q(h[a].name), l = q(h[a].abbr), c = q(h[a].narrow), t.push(i), e.push(l), s.push(c), r.push(i), r.push(l), r.push(c);
    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
      "^(" + s.join("|") + ")",
      "i"
    );
  }
  f(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  f(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function Qe(e, t) {
    f(0, [e, e.length], 0, t);
  }
  Qe("gggg", "weekYear");
  Qe("ggggg", "weekYear");
  Qe("GGGG", "isoWeekYear");
  Qe("GGGGG", "isoWeekYear");
  d("G", $e);
  d("g", $e);
  d("GG", M, R);
  d("gg", M, R);
  d("GGGG", St, vt);
  d("gggg", St, vt);
  d("GGGGG", Ge, Ee);
  d("ggggg", Ge, Ee);
  Te(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(e, t, s, r) {
      t[r.substr(0, 2)] = _(e);
    }
  );
  Te(["gg", "GG"], function(e, t, s, r) {
    t[r] = u.parseTwoDigitYear(e);
  });
  function ci(e) {
    return Rs.call(
      this,
      e,
      this.week(),
      this.weekday() + this.localeData()._week.dow,
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function mi(e) {
    return Rs.call(
      this,
      e,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function _i() {
    return Q(this.year(), 1, 4);
  }
  function yi() {
    return Q(this.isoWeekYear(), 1, 4);
  }
  function gi() {
    var e = this.localeData()._week;
    return Q(this.year(), e.dow, e.doy);
  }
  function pi() {
    var e = this.localeData()._week;
    return Q(this.weekYear(), e.dow, e.doy);
  }
  function Rs(e, t, s, r, a) {
    var n;
    return e == null ? Me(this, r, a).year : (n = Q(e, r, a), t > n && (t = n), wi.call(this, e, t, s, r, a));
  }
  function wi(e, t, s, r, a) {
    var n = hs(e, t, s, r, a), i = Se(n.year, 0, n.dayOfYear);
    return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
  }
  f("Q", 0, "Qo", "quarter");
  d("Q", es);
  v("Q", function(e, t) {
    t[z] = (_(e) - 1) * 3;
  });
  function ki(e) {
    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
  }
  f("D", ["DD", 2], "Do", "date");
  d("D", M, _e);
  d("DD", M, R);
  d("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  });
  v(["D", "DD"], H);
  v("Do", function(e, t) {
    t[H] = _(e.match(M)[0]);
  });
  var Ws = ye("Date", !0);
  f("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  d("DDD", Ve);
  d("DDDD", ts);
  v(["DDD", "DDDD"], function(e, t, s) {
    s._dayOfYear = _(e);
  });
  function vi(e) {
    var t = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return e == null ? t : this.add(e - t, "d");
  }
  f("m", ["mm", 2], 0, "minute");
  d("m", M, Mt);
  d("mm", M, R);
  v(["m", "mm"], I);
  var Si = ye("Minutes", !1);
  f("s", ["ss", 2], 0, "second");
  d("s", M, Mt);
  d("ss", M, R);
  v(["s", "ss"], Z);
  var Mi = ye("Seconds", !1);
  f("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  f(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  f(0, ["SSS", 3], 0, "millisecond");
  f(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  f(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  f(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  f(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  f(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  f(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  d("S", Ve, es);
  d("SS", Ve, R);
  d("SSS", Ve, ts);
  var ee, Cs;
  for (ee = "SSSS"; ee.length <= 9; ee += "S")
    d(ee, me);
  function Di(e, t) {
    t[ae] = _(("0." + e) * 1e3);
  }
  for (ee = "S"; ee.length <= 9; ee += "S")
    v(ee, Di);
  Cs = ye("Milliseconds", !1);
  f("z", 0, 0, "zoneAbbr");
  f("zz", 0, 0, "zoneName");
  function Yi() {
    return this._isUTC ? "UTC" : "";
  }
  function Oi() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var o = Oe.prototype;
  o.add = pn;
  o.calendar = Yn;
  o.clone = On;
  o.diff = Wn;
  o.endOf = Gn;
  o.format = Un;
  o.from = Ln;
  o.fromNow = An;
  o.to = Hn;
  o.toNow = En;
  o.get = Fr;
  o.invalidAt = Xn;
  o.isAfter = bn;
  o.isBefore = Tn;
  o.isBetween = Pn;
  o.isSame = xn;
  o.isSameOrAfter = Nn;
  o.isSameOrBefore = Rn;
  o.isValid = Bn;
  o.lang = bs;
  o.locale = Os;
  o.localeData = Ts;
  o.max = Qa;
  o.min = qa;
  o.parsingFlags = Jn;
  o.set = Ir;
  o.startOf = Vn;
  o.subtract = wn;
  o.toArray = Zn;
  o.toObject = qn;
  o.toDate = zn;
  o.toISOString = Fn;
  o.inspect = In;
  typeof Symbol < "u" && Symbol.for != null && (o[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  });
  o.toJSON = Qn;
  o.toString = Cn;
  o.unix = jn;
  o.valueOf = $n;
  o.creationData = Kn;
  o.eraName = ri;
  o.eraNarrow = ai;
  o.eraAbbr = ni;
  o.eraYear = ii;
  o.year = as;
  o.isLeapYear = Cr;
  o.weekYear = ci;
  o.isoWeekYear = mi;
  o.quarter = o.quarters = ki;
  o.month = us;
  o.daysInMonth = jr;
  o.week = o.weeks = Kr;
  o.isoWeek = o.isoWeeks = ea;
  o.weeksInYear = gi;
  o.weeksInWeekYear = pi;
  o.isoWeeksInYear = _i;
  o.isoWeeksInISOWeekYear = yi;
  o.date = Ws;
  o.day = o.days = ca;
  o.weekday = ma;
  o.isoWeekday = _a;
  o.dayOfYear = vi;
  o.hour = o.hours = Sa;
  o.minute = o.minutes = Si;
  o.second = o.seconds = Mi;
  o.millisecond = o.milliseconds = Cs;
  o.utcOffset = an;
  o.utc = on;
  o.local = ln;
  o.parseZone = un;
  o.hasAlignedHourOffset = dn;
  o.isDST = hn;
  o.isLocal = cn;
  o.isUtcOffset = mn;
  o.isUtc = Ss;
  o.isUTC = Ss;
  o.zoneAbbr = Yi;
  o.zoneName = Oi;
  o.dates = C(
    "dates accessor is deprecated. Use date instead.",
    Ws
  );
  o.months = C(
    "months accessor is deprecated. Use month instead",
    us
  );
  o.years = C(
    "years accessor is deprecated. Use year instead",
    as
  );
  o.zone = C(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    nn
  );
  o.isDSTShifted = C(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    fn
  );
  function bi(e) {
    return S(e * 1e3);
  }
  function Ti() {
    return S.apply(null, arguments).parseZone();
  }
  function Fs(e) {
    return e;
  }
  var p = pt.prototype;
  p.calendar = fr;
  p.longDateFormat = yr;
  p.invalidDate = pr;
  p.ordinal = vr;
  p.preparse = Fs;
  p.postformat = Fs;
  p.relativeTime = Mr;
  p.pastFuture = Dr;
  p.set = dr;
  p.eras = ei;
  p.erasParse = ti;
  p.erasConvertYear = si;
  p.erasAbbrRegex = li;
  p.erasNameRegex = oi;
  p.erasNarrowRegex = ui;
  p.months = Er;
  p.monthsShort = Vr;
  p.monthsParse = $r;
  p.monthsRegex = Zr;
  p.monthsShortRegex = zr;
  p.week = Qr;
  p.firstDayOfYear = Xr;
  p.firstDayOfWeek = Jr;
  p.weekdays = la;
  p.weekdaysMin = da;
  p.weekdaysShort = ua;
  p.weekdaysParse = fa;
  p.weekdaysRegex = ya;
  p.weekdaysShortRegex = ga;
  p.weekdaysMinRegex = pa;
  p.isPM = ka;
  p.meridiem = Ma;
  function Ae(e, t, s, r) {
    var a = J(), n = V().set(r, t);
    return a[s](n, e);
  }
  function Is(e, t, s) {
    if (B(e) && (t = e, e = void 0), e = e || "", t != null)
      return Ae(e, t, s, "month");
    var r, a = [];
    for (r = 0; r < 12; r++)
      a[r] = Ae(e, r, s, "month");
    return a;
  }
  function It(e, t, s, r) {
    typeof e == "boolean" ? (B(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, B(t) && (s = t, t = void 0), t = t || "");
    var a = J(), n = e ? a._week.dow : 0, i, l = [];
    if (s != null)
      return Ae(t, (s + n) % 7, r, "day");
    for (i = 0; i < 7; i++)
      l[i] = Ae(t, (i + n) % 7, r, "day");
    return l;
  }
  function Pi(e, t) {
    return Is(e, t, "months");
  }
  function xi(e, t) {
    return Is(e, t, "monthsShort");
  }
  function Ni(e, t, s) {
    return It(e, t, s, "weekdays");
  }
  function Ri(e, t, s) {
    return It(e, t, s, "weekdaysShort");
  }
  function Wi(e, t, s) {
    return It(e, t, s, "weekdaysMin");
  }
  te("en", {
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
      var t = e % 10, s = _(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
      return e + s;
    }
  });
  u.lang = C(
    "moment.lang is deprecated. Use moment.locale instead.",
    te
  );
  u.langData = C(
    "moment.langData is deprecated. Use moment.localeData instead.",
    J
  );
  var $ = Math.abs;
  function Ci() {
    var e = this._data;
    return this._milliseconds = $(this._milliseconds), this._days = $(this._days), this._months = $(this._months), e.milliseconds = $(e.milliseconds), e.seconds = $(e.seconds), e.minutes = $(e.minutes), e.hours = $(e.hours), e.months = $(e.months), e.years = $(e.years), this;
  }
  function Us(e, t, s, r) {
    var a = A(t, s);
    return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
  }
  function Fi(e, t) {
    return Us(this, e, t, 1);
  }
  function Ii(e, t) {
    return Us(this, e, t, -1);
  }
  function qt(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function Ui() {
    var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, l, c;
    return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += qt(dt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = W(e / 1e3), r.seconds = a % 60, n = W(a / 60), r.minutes = n % 60, i = W(n / 60), r.hours = i % 24, t += W(i / 24), c = W(Ls(t)), s += c, t -= qt(dt(c)), l = W(s / 12), s %= 12, r.days = t, r.months = s, r.years = l, this;
  }
  function Ls(e) {
    return e * 4800 / 146097;
  }
  function dt(e) {
    return e * 146097 / 4800;
  }
  function Li(e) {
    if (!this.isValid())
      return NaN;
    var t, s, r = this._milliseconds;
    if (e = F(e), e === "month" || e === "quarter" || e === "year")
      switch (t = this._days + r / 864e5, s = this._months + Ls(t), e) {
        case "month":
          return s;
        case "quarter":
          return s / 3;
        case "year":
          return s / 12;
      }
    else
      switch (t = this._days + Math.round(dt(this._months)), e) {
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
        case "millisecond":
          return Math.floor(t * 864e5) + r;
        default:
          throw new Error("Unknown unit " + e);
      }
  }
  function X(e) {
    return function() {
      return this.as(e);
    };
  }
  var As = X("ms"), Ai = X("s"), Hi = X("m"), Ei = X("h"), Vi = X("d"), Gi = X("w"), $i = X("M"), ji = X("Q"), zi = X("y"), Zi = As;
  function qi() {
    return A(this);
  }
  function Qi(e) {
    return e = F(e), this.isValid() ? this[e + "s"]() : NaN;
  }
  function ie(e) {
    return function() {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var Bi = ie("milliseconds"), Ji = ie("seconds"), Xi = ie("minutes"), Ki = ie("hours"), eo = ie("days"), to = ie("months"), so = ie("years");
  function ro() {
    return W(this.days() / 7);
  }
  var j = Math.round, de = {
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
  function ao(e, t, s, r, a) {
    return a.relativeTime(t || 1, !!s, e, r);
  }
  function no(e, t, s, r) {
    var a = A(e).abs(), n = j(a.as("s")), i = j(a.as("m")), l = j(a.as("h")), c = j(a.as("d")), h = j(a.as("M")), w = j(a.as("w")), k = j(a.as("y")), D = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || l <= 1 && ["h"] || l < s.h && ["hh", l] || c <= 1 && ["d"] || c < s.d && ["dd", c];
    return s.w != null && (D = D || w <= 1 && ["w"] || w < s.w && ["ww", w]), D = D || h <= 1 && ["M"] || h < s.M && ["MM", h] || k <= 1 && ["y"] || ["yy", k], D[2] = t, D[3] = +e > 0, D[4] = r, ao.apply(null, D);
  }
  function io(e) {
    return e === void 0 ? j : typeof e == "function" ? (j = e, !0) : !1;
  }
  function oo(e, t) {
    return de[e] === void 0 ? !1 : t === void 0 ? de[e] : (de[e] = t, e === "s" && (de.ss = t - 1), !0);
  }
  function lo(e, t) {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var s = !1, r = de, a, n;
    return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, de, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = no(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
  }
  var tt = Math.abs;
  function oe(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function Be() {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var e = tt(this._milliseconds) / 1e3, t = tt(this._days), s = tt(this._months), r, a, n, i, l = this.asSeconds(), c, h, w, k;
    return l ? (r = W(e / 60), a = W(r / 60), e %= 60, r %= 60, n = W(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = l < 0 ? "-" : "", h = oe(this._months) !== oe(l) ? "-" : "", w = oe(this._days) !== oe(l) ? "-" : "", k = oe(this._milliseconds) !== oe(l) ? "-" : "", c + "P" + (n ? h + n + "Y" : "") + (s ? h + s + "M" : "") + (t ? w + t + "D" : "") + (a || r || e ? "T" : "") + (a ? k + a + "H" : "") + (r ? k + r + "M" : "") + (e ? k + i + "S" : "")) : "P0D";
  }
  var y = qe.prototype;
  y.isValid = en;
  y.abs = Ci;
  y.add = Fi;
  y.subtract = Ii;
  y.as = Li;
  y.asMilliseconds = As;
  y.asSeconds = Ai;
  y.asMinutes = Hi;
  y.asHours = Ei;
  y.asDays = Vi;
  y.asWeeks = Gi;
  y.asMonths = $i;
  y.asQuarters = ji;
  y.asYears = zi;
  y.valueOf = Zi;
  y._bubble = Ui;
  y.clone = qi;
  y.get = Qi;
  y.milliseconds = Bi;
  y.seconds = Ji;
  y.minutes = Xi;
  y.hours = Ki;
  y.days = eo;
  y.weeks = ro;
  y.months = to;
  y.years = so;
  y.humanize = lo;
  y.toISOString = Be;
  y.toString = Be;
  y.toJSON = Be;
  y.locale = Os;
  y.localeData = Ts;
  y.toIsoString = C(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    Be
  );
  y.lang = bs;
  f("X", 0, 0, "unix");
  f("x", 0, 0, "valueOf");
  d("x", $e);
  d("X", Tr);
  v("X", function(e, t, s) {
    s._d = new Date(parseFloat(e) * 1e3);
  });
  v("x", function(e, t, s) {
    s._d = new Date(_(e));
  });
  //! moment.js
  u.version = "2.30.1";
  lr(S);
  u.fn = o;
  u.min = Ba;
  u.max = Ja;
  u.now = Xa;
  u.utc = V;
  u.unix = bi;
  u.months = Pi;
  u.isDate = Ye;
  u.locale = te;
  u.invalid = He;
  u.duration = A;
  u.isMoment = L;
  u.weekdays = Ni;
  u.parseZone = Ti;
  u.localeData = J;
  u.isDuration = Re;
  u.monthsShort = xi;
  u.weekdaysMin = Wi;
  u.defineLocale = Tt;
  u.updateLocale = ba;
  u.locales = Ta;
  u.weekdaysShort = Ri;
  u.normalizeUnits = F;
  u.relativeTimeRounding = io;
  u.relativeTimeThreshold = oo;
  u.calendarFormat = Dn;
  u.prototype = o;
  u.HTML5_FMT = {
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
  const uo = ht({
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
          let r = new or();
          r.pageNumber = s, r.isActive = this.currentPage == s, this.pagesPagination.push(r);
        }
        this.isPreviousDisabled = this.currentPage == 1, this.isNextDisabled = this.currentPage == this.pageQuantity;
      },
      redirect(e) {
        window.location.href = e;
      },
      formatDate(e) {
        return u(e).format("YYYY-MM-DD hh:mm:ss");
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
  }), ho = { class: "text-start" }, fo = { class: "d-flex text-body-secondary pt-3" }, co = { class: "pb-3 mb-0 small lh-sm" }, mo = { class: "h6" }, _o = { class: "badge rounded-pill text-bg-secondary" }, yo = ["href"], go = {
    class: "pt-5",
    "aria-label": "Search Page navigation"
  }, po = { class: "pagination justify-content-center" }, wo = { class: "page-item" }, ko = ["onClick"], vo = { class: "page-item" };
  function So(e, t, s, r, a, n) {
    return re(), le("div", null, [
      (re(!0), le(Ht, null, Et(e.pageOfItems, (i, l) => (re(), le("div", ho, [
        O("div", fo, [
          t[2] || (t[2] = O("span", { class: "me-1" }, [
            O("img", {
              src: " https://www.dinowilliam.com/lib/assets/logo.png",
              height: "16",
              width: "72",
              loading: "lazy"
            })
          ], -1)),
          O("p", co, [
            O("p", mo, [
              Vt(ge(i.url) + " ", 1),
              O("span", _o, ge(e.formatDate(i.date)), 1)
            ]),
            O("p", null, [
              O("a", {
                class: "h4",
                href: i.url
              }, ge(i.title), 9, yo)
            ]),
            Vt(" " + ge(i.description), 1)
          ])
        ])
      ]))), 256)),
      O("nav", go, [
        O("ul", po, [
          O("li", wo, [
            O("a", {
              class: Je(["page-link", { disabled: e.isPreviousDisabled }]),
              onClick: t[0] || (t[0] = (i) => e.onPageChange(e.previousPage))
            }, "Previous", 2)
          ]),
          (re(!0), le(Ht, null, Et(e.pagesPagination, (i) => (re(), le("li", {
            class: Je(["page-item", { active: i.isActive }])
          }, [
            O("a", {
              class: "page-link",
              onClick: (l) => e.onPageChange(i.pageNumber)
            }, ge(i.pageNumber), 9, ko)
          ], 2))), 256)),
          O("li", vo, [
            O("a", {
              class: Je(["page-link", { disabled: e.isNextDisabled }]),
              onClick: t[1] || (t[1] = (i) => e.onPageChange(e.nextPage))
            }, "Next", 2)
          ])
        ])
      ])
    ]);
  }
  const Mo = /* @__PURE__ */ mt(uo, [["render", So]]), Do = [
    {
      path: "/Search",
      name: "SearchForm",
      component: ir
    },
    {
      path: "/SearchResults",
      name: "SearchResults",
      component: Mo
    }
  ], Yo = Zs({
    //history: createWebHistory(import.meta.env.BASE_URL), 
    history: qs(),
    routes: Do
  }), Oo = ht({
    name: "App"
  });
  function bo(e, t, s, r, a, n) {
    const i = $s("RouterView");
    return re(), js(i);
  }
  const To = /* @__PURE__ */ mt(Oo, [["render", bo]]), Ut = zs(To);
  Ut.mixin(tr);
  Ut.use(Yo);
  Ut.mount("#mainAppSearch");
});
export default Po();
//# sourceMappingURL=vueappsearch.js.map
