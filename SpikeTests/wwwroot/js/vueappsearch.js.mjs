var Cs = Object.defineProperty;
var Ls = (e, t, s) => t in e ? Cs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var Xe = (e, t, s) => (Ls(e, typeof t != "symbol" ? t + "" : t, s), s);
import { defineComponent as ft, openBlock as Z, createElementBlock as ne, Fragment as at, renderList as Ft, createElementVNode as M, createTextVNode as Ct, toDisplayString as ge, normalizeClass as Ke, resolveComponent as Vt, withModifiers as Is, withDirectives as Us, vModelText as As, createCommentVNode as Lt, createBlock as Gt, createApp as Es } from "vue";
class Hs {
  constructor() {
    Xe(this, "pageNumber");
    Xe(this, "isActive");
  }
}
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var jt;
function l() {
  return jt.apply(null, arguments);
}
function Vs(e) {
  jt = e;
}
function I(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function oe(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function y(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ct(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (y(e, t))
      return !1;
  return !0;
}
function x(e) {
  return e === void 0;
}
function J(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Ye(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function $t(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function te(e, t) {
  for (var s in t)
    y(t, s) && (e[s] = t[s]);
  return y(t, "toString") && (e.toString = t.toString), y(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function V(e, t, s, r) {
  return _s(e, t, s, r, !0).utc();
}
function Gs() {
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
function f(e) {
  return e._pf == null && (e._pf = Gs()), e._pf;
}
var nt;
Array.prototype.some ? nt = Array.prototype.some : nt = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function mt(e) {
  if (e._isValid == null) {
    var t = f(e), s = nt.call(t.parsedDateParts, function(a) {
      return a != null;
    }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s);
    if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function Ee(e) {
  var t = V(NaN);
  return e != null ? te(f(t), e) : f(t).userInvalidated = !0, t;
}
var It = l.momentProperties = [], et = !1;
function _t(e, t) {
  var s, r, a, n = It.length;
  if (x(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), x(t._i) || (e._i = t._i), x(t._f) || (e._f = t._f), x(t._l) || (e._l = t._l), x(t._strict) || (e._strict = t._strict), x(t._tzm) || (e._tzm = t._tzm), x(t._isUTC) || (e._isUTC = t._isUTC), x(t._offset) || (e._offset = t._offset), x(t._pf) || (e._pf = f(t)), x(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      r = It[s], a = t[r], x(a) || (e[r] = a);
  return e;
}
function Oe(e) {
  _t(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), et === !1 && (et = !0, l.updateOffset(this), et = !1);
}
function U(e) {
  return e instanceof Oe || e != null && e._isAMomentObject != null;
}
function zt(e) {
  l.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function F(e, t) {
  var s = !0;
  return te(function() {
    if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
      var r = [], a, n, i, d = arguments.length;
      for (n = 0; n < d; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            y(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        r.push(a);
      }
      zt(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Ut = {};
function Zt(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t), Ut[e] || (zt(t), Ut[e] = !0);
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function G(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function js(e) {
  var t, s;
  for (s in e)
    y(e, s) && (t = e[s], G(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function it(e, t) {
  var s = te({}, e), r;
  for (r in t)
    y(t, r) && (oe(e[r]) && oe(t[r]) ? (s[r] = {}, te(s[r], e[r]), te(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    y(e, r) && !y(t, r) && oe(e[r]) && (s[r] = te({}, s[r]));
  return s;
}
function yt(e) {
  e != null && this.set(e);
}
var ot;
Object.keys ? ot = Object.keys : ot = function(e) {
  var t, s = [];
  for (t in e)
    y(e, t) && s.push(t);
  return s;
};
var $s = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function zs(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return G(r) ? r.call(t, s) : r;
}
function H(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var gt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Pe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, tt = {}, fe = {};
function h(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (fe[e] = a), t && (fe[t[0]] = function() {
    return H(a.apply(this, arguments), t[1], t[2]);
  }), s && (fe[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function Zs(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Qs(e) {
  var t = e.match(gt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    fe[t[s]] ? t[s] = fe[t[s]] : t[s] = Zs(t[s]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < r; i++)
      n += G(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function Ne(e, t) {
  return e.isValid() ? (t = Qt(t, e.localeData()), tt[t] = tt[t] || Qs(t), tt[t](e)) : e.localeData().invalidDate();
}
function Qt(e, t) {
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
var Bs = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function qs(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(gt).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Js = "Invalid date";
function Xs() {
  return this._invalidDate;
}
var Ks = "%d", er = /\d{1,2}/;
function tr(e) {
  return this._ordinal.replace("%d", e);
}
var sr = {
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
function rr(e, t, s, r) {
  var a = this._relativeTime[s];
  return G(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function ar(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return G(s) ? s(t) : s.replace(/%s/i, t);
}
var Se = {};
function b(e, t) {
  var s = e.toLowerCase();
  Se[s] = Se[s + "s"] = Se[t] = e;
}
function C(e) {
  return typeof e == "string" ? Se[e] || Se[e.toLowerCase()] : void 0;
}
function pt(e) {
  var t = {}, s, r;
  for (r in e)
    y(e, r) && (s = C(r), s && (t[s] = e[r]));
  return t;
}
var Bt = {};
function T(e, t) {
  Bt[e] = t;
}
function nr(e) {
  var t = [], s;
  for (s in e)
    y(e, s) && t.push({ unit: s, priority: Bt[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
function He(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function W(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function m(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = W(t)), s;
}
function _e(e, t) {
  return function(s) {
    return s != null ? (qt(this, e, s), l.updateOffset(this, t), this) : Fe(this, e);
  };
}
function Fe(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function qt(e, t, s) {
  e.isValid() && !isNaN(s) && (t === "FullYear" && He(e.year()) && e.month() === 1 && e.date() === 29 ? (s = m(s), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    s,
    e.month(),
    Ze(s, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](s));
}
function ir(e) {
  return e = C(e), G(this[e]) ? this[e]() : this;
}
function or(e, t) {
  if (typeof e == "object") {
    e = pt(e);
    var s = nr(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = C(e), G(this[e]))
    return this[e](t);
  return this;
}
var Jt = /\d/, R = /\d\d/, Xt = /\d{3}/, wt = /\d{4}/, Ve = /[+-]?\d{6}/, k = /\d\d?/, Kt = /\d\d\d\d?/, es = /\d\d\d\d\d\d?/, Ge = /\d{1,3}/, St = /\d{1,4}/, je = /[+-]?\d{1,6}/, ye = /\d+/, $e = /[+-]?\d+/, lr = /Z|[+-]\d\d:?\d\d/gi, ze = /Z|[+-]\d\d(?::?\d\d)?/gi, ur = /[+-]?\d+(\.\d{1,3})?/, be = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ce;
Ce = {};
function u(e, t, s) {
  Ce[e] = G(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function dr(e, t) {
  return y(Ce, e) ? Ce[e](t._strict, t._locale) : new RegExp(hr(e));
}
function hr(e) {
  return N(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, n) {
        return s || r || a || n;
      }
    )
  );
}
function N(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var lt = {};
function w(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), J(t) && (r = function(n, i) {
    i[t] = m(n);
  }), a = e.length, s = 0; s < a; s++)
    lt[e[s]] = r;
}
function Te(e, t) {
  w(e, function(s, r, a, n) {
    a._w = a._w || {}, t(s, a._w, a, n);
  });
}
function fr(e, t, s) {
  t != null && y(lt, e) && lt[e](t, s._a, s, e);
}
var O = 0, Q = 1, E = 2, Y = 3, L = 4, B = 5, ie = 6, cr = 7, mr = 8;
function _r(e, t) {
  return (e % t + t) % t;
}
var D;
Array.prototype.indexOf ? D = Array.prototype.indexOf : D = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ze(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = _r(t, 12);
  return e += (t - s) / 12, s === 1 ? He(e) ? 29 : 28 : 31 - s % 7 % 2;
}
h("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
h("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
h("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
b("month", "M");
T("month", 8);
u("M", k);
u("MM", k, R);
u("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
u("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
w(["M", "MM"], function(e, t) {
  t[Q] = m(e) - 1;
});
w(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[Q] = a : f(s).invalidMonth = e;
});
var yr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ts = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ss = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, gr = be, pr = be;
function wr(e, t) {
  return e ? I(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ss).test(t) ? "format" : "standalone"][e.month()] : I(this._months) ? this._months : this._months.standalone;
}
function Sr(e, t) {
  return e ? I(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ss.test(t) ? "format" : "standalone"][e.month()] : I(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function kr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = V([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = D.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = D.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = D.call(this._shortMonthsParse, i), a !== -1 ? a : (a = D.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = D.call(this._longMonthsParse, i), a !== -1 ? a : (a = D.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function vr(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact)
    return kr.call(this, e, t, s);
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
function rs(e, t) {
  var s;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = m(t);
    else if (t = e.localeData().monthsParse(t), !J(t))
      return e;
  }
  return s = Math.min(e.date(), Ze(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, s), e;
}
function as(e) {
  return e != null ? (rs(this, e), l.updateOffset(this, !0), this) : Fe(this, "Month");
}
function Mr() {
  return Ze(this.year(), this.month());
}
function Dr(e) {
  return this._monthsParseExact ? (y(this, "_monthsRegex") || ns.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (y(this, "_monthsShortRegex") || (this._monthsShortRegex = gr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Yr(e) {
  return this._monthsParseExact ? (y(this, "_monthsRegex") || ns.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (y(this, "_monthsRegex") || (this._monthsRegex = pr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function ns() {
  function e(i, d) {
    return d.length - i.length;
  }
  var t = [], s = [], r = [], a, n;
  for (a = 0; a < 12; a++)
    n = V([2e3, a]), t.push(this.monthsShort(n, "")), s.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
  for (t.sort(e), s.sort(e), r.sort(e), a = 0; a < 12; a++)
    t[a] = N(t[a]), s[a] = N(s[a]);
  for (a = 0; a < 24; a++)
    r[a] = N(r[a]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
h("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? H(e, 4) : "+" + e;
});
h(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
h(0, ["YYYY", 4], 0, "year");
h(0, ["YYYYY", 5], 0, "year");
h(0, ["YYYYYY", 6, !0], 0, "year");
b("year", "y");
T("year", 1);
u("Y", $e);
u("YY", k, R);
u("YYYY", St, wt);
u("YYYYY", je, Ve);
u("YYYYYY", je, Ve);
w(["YYYYY", "YYYYYY"], O);
w("YYYY", function(e, t) {
  t[O] = e.length === 2 ? l.parseTwoDigitYear(e) : m(e);
});
w("YY", function(e, t) {
  t[O] = l.parseTwoDigitYear(e);
});
w("Y", function(e, t) {
  t[O] = parseInt(e, 10);
});
function ke(e) {
  return He(e) ? 366 : 365;
}
l.parseTwoDigitYear = function(e) {
  return m(e) + (m(e) > 68 ? 1900 : 2e3);
};
var is = _e("FullYear", !0);
function Or() {
  return He(this.year());
}
function br(e, t, s, r, a, n, i) {
  var d;
  return e < 100 && e >= 0 ? (d = new Date(e + 400, t, s, r, a, n, i), isFinite(d.getFullYear()) && d.setFullYear(e)) : d = new Date(e, t, s, r, a, n, i), d;
}
function ve(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Le(e, t, s) {
  var r = 7 + t - s, a = (7 + ve(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function os(e, t, s, r, a) {
  var n = (7 + s - r) % 7, i = Le(e, r, a), d = 1 + 7 * (t - 1) + n + i, c, p;
  return d <= 0 ? (c = e - 1, p = ke(c) + d) : d > ke(e) ? (c = e + 1, p = d - ke(e)) : (c = e, p = d), {
    year: c,
    dayOfYear: p
  };
}
function Me(e, t, s) {
  var r = Le(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + q(i, t, s)) : a > q(e.year(), t, s) ? (n = a - q(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function q(e, t, s) {
  var r = Le(e, t, s), a = Le(e + 1, t, s);
  return (ke(e) - r + a) / 7;
}
h("w", ["ww", 2], "wo", "week");
h("W", ["WW", 2], "Wo", "isoWeek");
b("week", "w");
b("isoWeek", "W");
T("week", 5);
T("isoWeek", 5);
u("w", k);
u("ww", k, R);
u("W", k);
u("WW", k, R);
Te(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = m(e);
  }
);
function Tr(e) {
  return Me(e, this._week.dow, this._week.doy).week;
}
var Pr = {
  dow: 0,
  doy: 6
};
function xr() {
  return this._week.dow;
}
function Nr() {
  return this._week.doy;
}
function Rr(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Wr(e) {
  var t = Me(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
h("d", 0, "do", "day");
h("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
h("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
h("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
h("e", 0, 0, "weekday");
h("E", 0, 0, "isoWeekday");
b("day", "d");
b("weekday", "e");
b("isoWeekday", "E");
T("day", 11);
T("weekday", 11);
T("isoWeekday", 11);
u("d", k);
u("e", k);
u("E", k);
u("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
u("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
u("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Te(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : f(s).invalidWeekday = e;
});
Te(["d", "e", "E"], function(e, t, s, r) {
  t[r] = m(e);
});
function Fr(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Cr(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function kt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Lr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ls = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ir = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ur = be, Ar = be, Er = be;
function Hr(e, t) {
  var s = I(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? kt(s, this._week.dow) : e ? s[e.day()] : s;
}
function Vr(e) {
  return e === !0 ? kt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Gr(e) {
  return e === !0 ? kt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function jr(e, t, s) {
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
  return s ? t === "dddd" ? (a = D.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = D.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = D.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = D.call(this._weekdaysParse, i), a !== -1 || (a = D.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = D.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = D.call(this._shortWeekdaysParse, i), a !== -1 || (a = D.call(this._weekdaysParse, i), a !== -1) ? a : (a = D.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = D.call(this._minWeekdaysParse, i), a !== -1 || (a = D.call(this._weekdaysParse, i), a !== -1) ? a : (a = D.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function $r(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact)
    return jr.call(this, e, t, s);
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
function zr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Fr(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Zr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Qr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Cr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Br(e) {
  return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || vt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (y(this, "_weekdaysRegex") || (this._weekdaysRegex = Ur), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function qr(e) {
  return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || vt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (y(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ar), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Jr(e) {
  return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || vt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (y(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Er), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function vt() {
  function e(P, j) {
    return j.length - P.length;
  }
  var t = [], s = [], r = [], a = [], n, i, d, c, p;
  for (n = 0; n < 7; n++)
    i = V([2e3, 1]).day(n), d = N(this.weekdaysMin(i, "")), c = N(this.weekdaysShort(i, "")), p = N(this.weekdays(i, "")), t.push(d), s.push(c), r.push(p), a.push(d), a.push(c), a.push(p);
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
function Mt() {
  return this.hours() % 12 || 12;
}
function Xr() {
  return this.hours() || 24;
}
h("H", ["HH", 2], 0, "hour");
h("h", ["hh", 2], 0, Mt);
h("k", ["kk", 2], 0, Xr);
h("hmm", 0, 0, function() {
  return "" + Mt.apply(this) + H(this.minutes(), 2);
});
h("hmmss", 0, 0, function() {
  return "" + Mt.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2);
});
h("Hmm", 0, 0, function() {
  return "" + this.hours() + H(this.minutes(), 2);
});
h("Hmmss", 0, 0, function() {
  return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2);
});
function us(e, t) {
  h(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
us("a", !0);
us("A", !1);
b("hour", "h");
T("hour", 13);
function ds(e, t) {
  return t._meridiemParse;
}
u("a", ds);
u("A", ds);
u("H", k);
u("h", k);
u("k", k);
u("HH", k, R);
u("hh", k, R);
u("kk", k, R);
u("hmm", Kt);
u("hmmss", es);
u("Hmm", Kt);
u("Hmmss", es);
w(["H", "HH"], Y);
w(["k", "kk"], function(e, t, s) {
  var r = m(e);
  t[Y] = r === 24 ? 0 : r;
});
w(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
w(["h", "hh"], function(e, t, s) {
  t[Y] = m(e), f(s).bigHour = !0;
});
w("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[Y] = m(e.substr(0, r)), t[L] = m(e.substr(r)), f(s).bigHour = !0;
});
w("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[Y] = m(e.substr(0, r)), t[L] = m(e.substr(r, 2)), t[B] = m(e.substr(a)), f(s).bigHour = !0;
});
w("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[Y] = m(e.substr(0, r)), t[L] = m(e.substr(r));
});
w("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[Y] = m(e.substr(0, r)), t[L] = m(e.substr(r, 2)), t[B] = m(e.substr(a));
});
function Kr(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var ea = /[ap]\.?m?\.?/i, ta = _e("Hours", !0);
function sa(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var hs = {
  calendar: $s,
  longDateFormat: Bs,
  invalidDate: Js,
  ordinal: Ks,
  dayOfMonthOrdinalParse: er,
  relativeTime: sr,
  months: yr,
  monthsShort: ts,
  week: Pr,
  weekdays: Lr,
  weekdaysMin: Ir,
  weekdaysShort: ls,
  meridiemParse: ea
}, v = {}, pe = {}, De;
function ra(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function At(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function aa(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (n = At(e[t]).split("-"), s = n.length, r = At(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = Qe(n.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && ra(n, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return De;
}
function na(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Qe(e) {
  var t = null, s;
  if (v[e] === void 0 && typeof module < "u" && module && module.exports && na(e))
    try {
      t = De._abbr, s = require, s("./locale/" + e), re(t);
    } catch {
      v[e] = null;
    }
  return v[e];
}
function re(e, t) {
  var s;
  return e && (x(t) ? s = X(e) : s = Dt(e, t), s ? De = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), De._abbr;
}
function Dt(e, t) {
  if (t !== null) {
    var s, r = hs;
    if (t.abbr = e, v[e] != null)
      Zt(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = v[e]._config;
    else if (t.parentLocale != null)
      if (v[t.parentLocale] != null)
        r = v[t.parentLocale]._config;
      else if (s = Qe(t.parentLocale), s != null)
        r = s._config;
      else
        return pe[t.parentLocale] || (pe[t.parentLocale] = []), pe[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return v[e] = new yt(it(r, t)), pe[e] && pe[e].forEach(function(a) {
      Dt(a.name, a.config);
    }), re(e), v[e];
  } else
    return delete v[e], null;
}
function ia(e, t) {
  if (t != null) {
    var s, r, a = hs;
    v[e] != null && v[e].parentLocale != null ? v[e].set(it(v[e]._config, t)) : (r = Qe(e), r != null && (a = r._config), t = it(a, t), r == null && (t.abbr = e), s = new yt(t), s.parentLocale = v[e], v[e] = s), re(e);
  } else
    v[e] != null && (v[e].parentLocale != null ? (v[e] = v[e].parentLocale, e === re() && re(e)) : v[e] != null && delete v[e]);
  return v[e];
}
function X(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return De;
  if (!I(e)) {
    if (t = Qe(e), t)
      return t;
    e = [e];
  }
  return aa(e);
}
function oa() {
  return ot(v);
}
function Yt(e) {
  var t, s = e._a;
  return s && f(e).overflow === -2 && (t = s[Q] < 0 || s[Q] > 11 ? Q : s[E] < 1 || s[E] > Ze(s[O], s[Q]) ? E : s[Y] < 0 || s[Y] > 24 || s[Y] === 24 && (s[L] !== 0 || s[B] !== 0 || s[ie] !== 0) ? Y : s[L] < 0 || s[L] > 59 ? L : s[B] < 0 || s[B] > 59 ? B : s[ie] < 0 || s[ie] > 999 ? ie : -1, f(e)._overflowDayOfYear && (t < O || t > E) && (t = E), f(e)._overflowWeeks && t === -1 && (t = cr), f(e)._overflowWeekday && t === -1 && (t = mr), f(e).overflow = t), e;
}
var la = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ua = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, da = /Z|[+-]\d\d(?::?\d\d)?/, xe = [
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
], st = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], ha = /^\/?Date\((-?\d+)/i, fa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, ca = {
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
function fs(e) {
  var t, s, r = e._i, a = la.exec(r) || ua.exec(r), n, i, d, c, p = xe.length, P = st.length;
  if (a) {
    for (f(e).iso = !0, t = 0, s = p; t < s; t++)
      if (xe[t][1].exec(a[1])) {
        i = xe[t][0], n = xe[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = P; t < s; t++)
        if (st[t][1].exec(a[3])) {
          d = (a[2] || " ") + st[t][0];
          break;
        }
      if (d == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && d != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (da.exec(a[4]))
        c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (d || "") + (c || ""), bt(e);
  } else
    e._isValid = !1;
}
function ma(e, t, s, r, a, n) {
  var i = [
    _a(e),
    ts.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function _a(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function ya(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function ga(e, t, s) {
  if (e) {
    var r = ls.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return f(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function pa(e, t, s) {
  if (e)
    return ca[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
  return n * 60 + a;
}
function cs(e) {
  var t = fa.exec(ya(e._i)), s;
  if (t) {
    if (s = ma(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !ga(t[1], s, e))
      return;
    e._a = s, e._tzm = pa(t[8], t[9], t[10]), e._d = ve.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function wa(e) {
  var t = ha.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (fs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (cs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : l.createFromInputFallback(e);
}
l.createFromInputFallback = F(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function de(e, t, s) {
  return e != null ? e : t != null ? t : s;
}
function Sa(e) {
  var t = new Date(l.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Ot(e) {
  var t, s, r = [], a, n, i;
  if (!e._d) {
    for (a = Sa(e), e._w && e._a[E] == null && e._a[Q] == null && ka(e), e._dayOfYear != null && (i = de(e._a[O], a[O]), (e._dayOfYear > ke(i) || e._dayOfYear === 0) && (f(e)._overflowDayOfYear = !0), s = ve(i, 0, e._dayOfYear), e._a[Q] = s.getUTCMonth(), e._a[E] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Y] === 24 && e._a[L] === 0 && e._a[B] === 0 && e._a[ie] === 0 && (e._nextDay = !0, e._a[Y] = 0), e._d = (e._useUTC ? ve : br).apply(
      null,
      r
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Y] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (f(e).weekdayMismatch = !0);
  }
}
function ka(e) {
  var t, s, r, a, n, i, d, c, p;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = de(
    t.GG,
    e._a[O],
    Me(S(), 1, 4).year
  ), r = de(t.W, 1), a = de(t.E, 1), (a < 1 || a > 7) && (c = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, p = Me(S(), n, i), s = de(t.gg, e._a[O], p.year), r = de(t.w, p.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (c = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (c = !0)) : a = n), r < 1 || r > q(s, n, i) ? f(e)._overflowWeeks = !0 : c != null ? f(e)._overflowWeekday = !0 : (d = os(s, r, a, n, i), e._a[O] = d.year, e._dayOfYear = d.dayOfYear);
}
l.ISO_8601 = function() {
};
l.RFC_2822 = function() {
};
function bt(e) {
  if (e._f === l.ISO_8601) {
    fs(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    cs(e);
    return;
  }
  e._a = [], f(e).empty = !0;
  var t = "" + e._i, s, r, a, n, i, d = t.length, c = 0, p, P;
  for (a = Qt(e._f, e._locale).match(gt) || [], P = a.length, s = 0; s < P; s++)
    n = a[s], r = (t.match(dr(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && f(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), c += r.length), fe[n] ? (r ? f(e).empty = !1 : f(e).unusedTokens.push(n), fr(n, r, e)) : e._strict && !r && f(e).unusedTokens.push(n);
  f(e).charsLeftOver = d - c, t.length > 0 && f(e).unusedInput.push(t), e._a[Y] <= 12 && f(e).bigHour === !0 && e._a[Y] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[Y] = va(
    e._locale,
    e._a[Y],
    e._meridiem
  ), p = f(e).era, p !== null && (e._a[O] = e._locale.erasConvertYear(p, e._a[O])), Ot(e), Yt(e);
}
function va(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function Ma(e) {
  var t, s, r, a, n, i, d = !1, c = e._f.length;
  if (c === 0) {
    f(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (a = 0; a < c; a++)
    n = 0, i = !1, t = _t({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], bt(t), mt(t) && (i = !0), n += f(t).charsLeftOver, n += f(t).unusedTokens.length * 10, f(t).score = n, d ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (d = !0));
  te(e, s || t);
}
function Da(e) {
  if (!e._d) {
    var t = pt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = $t(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Ot(e);
  }
}
function Ya(e) {
  var t = new Oe(Yt(ms(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ms(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || X(e._l), t === null || s === void 0 && t === "" ? Ee({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), U(t) ? new Oe(Yt(t)) : (Ye(t) ? e._d = t : I(s) ? Ma(e) : s ? bt(e) : Oa(e), mt(e) || (e._d = null), e));
}
function Oa(e) {
  var t = e._i;
  x(t) ? e._d = new Date(l.now()) : Ye(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? wa(e) : I(t) ? (e._a = $t(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Ot(e)) : oe(t) ? Da(e) : J(t) ? e._d = new Date(t) : l.createFromInputFallback(e);
}
function _s(e, t, s, r, a) {
  var n = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (oe(e) && ct(e) || I(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, Ya(n);
}
function S(e, t, s, r) {
  return _s(e, t, s, r, !1);
}
var ba = F(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ee();
  }
), Ta = F(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ee();
  }
);
function ys(e, t) {
  var s, r;
  if (t.length === 1 && I(t[0]) && (t = t[0]), !t.length)
    return S();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function Pa() {
  var e = [].slice.call(arguments, 0);
  return ys("isBefore", e);
}
function xa() {
  var e = [].slice.call(arguments, 0);
  return ys("isAfter", e);
}
var Na = function() {
  return Date.now ? Date.now() : +new Date();
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
function Ra(e) {
  var t, s = !1, r, a = we.length;
  for (t in e)
    if (y(e, t) && !(D.call(we, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[we[r]]) {
      if (s)
        return !1;
      parseFloat(e[we[r]]) !== m(e[we[r]]) && (s = !0);
    }
  return !0;
}
function Wa() {
  return this._isValid;
}
function Fa() {
  return A(NaN);
}
function Be(e) {
  var t = pt(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, d = t.hour || 0, c = t.minute || 0, p = t.second || 0, P = t.millisecond || 0;
  this._isValid = Ra(t), this._milliseconds = +P + p * 1e3 + c * 6e4 + d * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = X(), this._bubble();
}
function Re(e) {
  return e instanceof Be;
}
function ut(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Ca(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < r; i++)
    (s && e[i] !== t[i] || !s && m(e[i]) !== m(t[i])) && n++;
  return n + a;
}
function gs(e, t) {
  h(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + H(~~(s / 60), 2) + t + H(~~s % 60, 2);
  });
}
gs("Z", ":");
gs("ZZ", "");
u("Z", ze);
u("ZZ", ze);
w(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Tt(ze, e);
});
var La = /([\+\-]|\d\d)/gi;
function Tt(e, t) {
  var s = (t || "").match(e), r, a, n;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(La) || ["-", 0, 0], n = +(a[1] * 60) + m(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function Pt(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (U(e) || Ye(e) ? e.valueOf() : S(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), l.updateOffset(s, !1), s) : S(e).local();
}
function dt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function() {
};
function Ia(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Tt(ze, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = dt(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Ss(
      this,
      A(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : dt(this);
}
function Ua(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Aa(e) {
  return this.utcOffset(0, e);
}
function Ea(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(dt(this), "m")), this;
}
function Ha() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Tt(lr, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Va(e) {
  return this.isValid() ? (e = e ? S(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Ga() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function ja() {
  if (!x(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return _t(e, this), e = ms(e), e._a ? (t = e._isUTC ? V(e._a) : S(e._a), this._isDSTShifted = this.isValid() && Ca(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function $a() {
  return this.isValid() ? !this._isUTC : !1;
}
function za() {
  return this.isValid() ? this._isUTC : !1;
}
function ps() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Za = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Qa = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function A(e, t) {
  var s = e, r = null, a, n, i;
  return Re(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : J(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = Za.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: m(r[E]) * a,
    h: m(r[Y]) * a,
    m: m(r[L]) * a,
    s: m(r[B]) * a,
    ms: m(ut(r[ie] * 1e3)) * a
  }) : (r = Qa.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: ae(r[2], a),
    M: ae(r[3], a),
    w: ae(r[4], a),
    d: ae(r[5], a),
    h: ae(r[6], a),
    m: ae(r[7], a),
    s: ae(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = Ba(
    S(s.from),
    S(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new Be(s), Re(e) && y(e, "_locale") && (n._locale = e._locale), Re(e) && y(e, "_isValid") && (n._isValid = e._isValid), n;
}
A.fn = Be.prototype;
A.invalid = Fa;
function ae(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Et(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function Ba(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Pt(t, e), e.isBefore(t) ? s = Et(e, t) : (s = Et(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function ws(e, t) {
  return function(s, r) {
    var a, n;
    return r !== null && !isNaN(+r) && (Zt(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), a = A(s, r), Ss(this, a, e), this;
  };
}
function Ss(e, t, s, r) {
  var a = t._milliseconds, n = ut(t._days), i = ut(t._months);
  !e.isValid() || (r = r == null ? !0 : r, i && rs(e, Fe(e, "Month") + i * s), n && qt(e, "Date", Fe(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && l.updateOffset(e, n || i));
}
var qa = ws(1, "add"), Ja = ws(-1, "subtract");
function ks(e) {
  return typeof e == "string" || e instanceof String;
}
function Xa(e) {
  return U(e) || Ye(e) || ks(e) || J(e) || en(e) || Ka(e) || e === null || e === void 0;
}
function Ka(e) {
  var t = oe(e) && !ct(e), s = !1, r = [
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
    n = r[a], s = s || y(e, n);
  return t && s;
}
function en(e) {
  var t = I(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !J(r) && ks(e);
  }).length === 0), t && s;
}
function tn(e) {
  var t = oe(e) && !ct(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < r.length; a += 1)
    n = r[a], s = s || y(e, n);
  return t && s;
}
function sn(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function rn(e, t) {
  arguments.length === 1 && (arguments[0] ? Xa(arguments[0]) ? (e = arguments[0], t = void 0) : tn(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || S(), r = Pt(s, this).startOf("day"), a = l.calendarFormat(this, r) || "sameElse", n = t && (G(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, S(s))
  );
}
function an() {
  return new Oe(this);
}
function nn(e, t) {
  var s = U(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = C(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function on(e, t) {
  var s = U(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = C(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function ln(e, t, s, r) {
  var a = U(e) ? e : S(e), n = U(t) ? t : S(t);
  return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function un(e, t) {
  var s = U(e) ? e : S(e), r;
  return this.isValid() && s.isValid() ? (t = C(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function dn(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function hn(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function fn(e, t, s) {
  var r, a, n;
  if (!this.isValid())
    return NaN;
  if (r = Pt(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = C(t), t) {
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
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function cn() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function mn(e) {
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
function _n() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
}
function yn(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = Ne(this, e);
  return this.localeData().postformat(t);
}
function gn(e, t) {
  return this.isValid() && (U(e) && e.isValid() || S(e).isValid()) ? A({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function pn(e) {
  return this.from(S(), e);
}
function wn(e, t) {
  return this.isValid() && (U(e) && e.isValid() || S(e).isValid()) ? A({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Sn(e) {
  return this.to(S(), e);
}
function vs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = X(e), t != null && (this._locale = t), this);
}
var Ms = F(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ds() {
  return this._locale;
}
var Ie = 1e3, ce = 60 * Ie, Ue = 60 * ce, Ys = (365 * 400 + 97) * 24 * Ue;
function me(e, t) {
  return (e % t + t) % t;
}
function Os(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Ys : new Date(e, t, s).valueOf();
}
function bs(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Ys : Date.UTC(e, t, s);
}
function kn(e) {
  var t, s;
  if (e = C(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? bs : Os, e) {
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
      t = this._d.valueOf(), t -= me(
        t + (this._isUTC ? 0 : this.utcOffset() * ce),
        Ue
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= me(t, ce);
      break;
    case "second":
      t = this._d.valueOf(), t -= me(t, Ie);
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function vn(e) {
  var t, s;
  if (e = C(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? bs : Os, e) {
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
      t = this._d.valueOf(), t += Ue - me(
        t + (this._isUTC ? 0 : this.utcOffset() * ce),
        Ue
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ce - me(t, ce) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ie - me(t, Ie) - 1;
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function Mn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Dn() {
  return Math.floor(this.valueOf() / 1e3);
}
function Yn() {
  return new Date(this.valueOf());
}
function On() {
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
function bn() {
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
function Tn() {
  return this.isValid() ? this.toISOString() : null;
}
function Pn() {
  return mt(this);
}
function xn() {
  return te({}, f(this));
}
function Nn() {
  return f(this).overflow;
}
function Rn() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
h("N", 0, 0, "eraAbbr");
h("NN", 0, 0, "eraAbbr");
h("NNN", 0, 0, "eraAbbr");
h("NNNN", 0, 0, "eraName");
h("NNNNN", 0, 0, "eraNarrow");
h("y", ["y", 1], "yo", "eraYear");
h("y", ["yy", 2], 0, "eraYear");
h("y", ["yyy", 3], 0, "eraYear");
h("y", ["yyyy", 4], 0, "eraYear");
u("N", xt);
u("NN", xt);
u("NNN", xt);
u("NNNN", Gn);
u("NNNNN", jn);
w(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? f(s).era = a : f(s).invalidEra = e;
  }
);
u("y", ye);
u("yy", ye);
u("yyy", ye);
u("yyyy", ye);
u("yo", $n);
w(["y", "yy", "yyy", "yyyy"], O);
w(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[O] = s._locale.eraYearOrdinalParse(e, a) : t[O] = parseInt(e, 10);
});
function Wn(e, t) {
  var s, r, a, n = this._eras || X("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        a = l(n[s].since).startOf("day"), n[s].since = a.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        a = l(n[s].until).startOf("day").valueOf(), n[s].until = a.valueOf();
        break;
    }
  }
  return n;
}
function Fn(e, t, s) {
  var r, a, n = this.eras(), i, d, c;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (i = n[r].name.toUpperCase(), d = n[r].abbr.toUpperCase(), c = n[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (d === e)
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
    else if ([i, d, c].indexOf(e) >= 0)
      return n[r];
}
function Cn(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s;
}
function Ln() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function In() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function Un() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function An() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - l(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function En(e) {
  return y(this, "_erasNameRegex") || Nt.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Hn(e) {
  return y(this, "_erasAbbrRegex") || Nt.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Vn(e) {
  return y(this, "_erasNarrowRegex") || Nt.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function xt(e, t) {
  return t.erasAbbrRegex(e);
}
function Gn(e, t) {
  return t.erasNameRegex(e);
}
function jn(e, t) {
  return t.erasNarrowRegex(e);
}
function $n(e, t) {
  return t._eraYearOrdinalRegex || ye;
}
function Nt() {
  var e = [], t = [], s = [], r = [], a, n, i = this.eras();
  for (a = 0, n = i.length; a < n; ++a)
    t.push(N(i[a].name)), e.push(N(i[a].abbr)), s.push(N(i[a].narrow)), r.push(N(i[a].name)), r.push(N(i[a].abbr)), r.push(N(i[a].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
h(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
h(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function qe(e, t) {
  h(0, [e, e.length], 0, t);
}
qe("gggg", "weekYear");
qe("ggggg", "weekYear");
qe("GGGG", "isoWeekYear");
qe("GGGGG", "isoWeekYear");
b("weekYear", "gg");
b("isoWeekYear", "GG");
T("weekYear", 1);
T("isoWeekYear", 1);
u("G", $e);
u("g", $e);
u("GG", k, R);
u("gg", k, R);
u("GGGG", St, wt);
u("gggg", St, wt);
u("GGGGG", je, Ve);
u("ggggg", je, Ve);
Te(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = m(e);
  }
);
Te(["gg", "GG"], function(e, t, s, r) {
  t[r] = l.parseTwoDigitYear(e);
});
function zn(e) {
  return Ts.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Zn(e) {
  return Ts.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Qn() {
  return q(this.year(), 1, 4);
}
function Bn() {
  return q(this.isoWeekYear(), 1, 4);
}
function qn() {
  var e = this.localeData()._week;
  return q(this.year(), e.dow, e.doy);
}
function Jn() {
  var e = this.localeData()._week;
  return q(this.weekYear(), e.dow, e.doy);
}
function Ts(e, t, s, r, a) {
  var n;
  return e == null ? Me(this, r, a).year : (n = q(e, r, a), t > n && (t = n), Xn.call(this, e, t, s, r, a));
}
function Xn(e, t, s, r, a) {
  var n = os(e, t, s, r, a), i = ve(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
h("Q", 0, "Qo", "quarter");
b("quarter", "Q");
T("quarter", 7);
u("Q", Jt);
w("Q", function(e, t) {
  t[Q] = (m(e) - 1) * 3;
});
function Kn(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
h("D", ["DD", 2], "Do", "date");
b("date", "D");
T("date", 9);
u("D", k);
u("DD", k, R);
u("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
w(["D", "DD"], E);
w("Do", function(e, t) {
  t[E] = m(e.match(k)[0]);
});
var Ps = _e("Date", !0);
h("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
b("dayOfYear", "DDD");
T("dayOfYear", 4);
u("DDD", Ge);
u("DDDD", Xt);
w(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = m(e);
});
function ei(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
h("m", ["mm", 2], 0, "minute");
b("minute", "m");
T("minute", 14);
u("m", k);
u("mm", k, R);
w(["m", "mm"], L);
var ti = _e("Minutes", !1);
h("s", ["ss", 2], 0, "second");
b("second", "s");
T("second", 15);
u("s", k);
u("ss", k, R);
w(["s", "ss"], B);
var si = _e("Seconds", !1);
h("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
h(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
h(0, ["SSS", 3], 0, "millisecond");
h(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
h(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
h(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
h(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
h(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
h(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
b("millisecond", "ms");
T("millisecond", 16);
u("S", Ge, Jt);
u("SS", Ge, R);
u("SSS", Ge, Xt);
var se, xs;
for (se = "SSSS"; se.length <= 9; se += "S")
  u(se, ye);
function ri(e, t) {
  t[ie] = m(("0." + e) * 1e3);
}
for (se = "S"; se.length <= 9; se += "S")
  w(se, ri);
xs = _e("Milliseconds", !1);
h("z", 0, 0, "zoneAbbr");
h("zz", 0, 0, "zoneName");
function ai() {
  return this._isUTC ? "UTC" : "";
}
function ni() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var o = Oe.prototype;
o.add = qa;
o.calendar = rn;
o.clone = an;
o.diff = fn;
o.endOf = vn;
o.format = yn;
o.from = gn;
o.fromNow = pn;
o.to = wn;
o.toNow = Sn;
o.get = ir;
o.invalidAt = Nn;
o.isAfter = nn;
o.isBefore = on;
o.isBetween = ln;
o.isSame = un;
o.isSameOrAfter = dn;
o.isSameOrBefore = hn;
o.isValid = Pn;
o.lang = Ms;
o.locale = vs;
o.localeData = Ds;
o.max = Ta;
o.min = ba;
o.parsingFlags = xn;
o.set = or;
o.startOf = kn;
o.subtract = Ja;
o.toArray = On;
o.toObject = bn;
o.toDate = Yn;
o.toISOString = mn;
o.inspect = _n;
typeof Symbol < "u" && Symbol.for != null && (o[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
o.toJSON = Tn;
o.toString = cn;
o.unix = Dn;
o.valueOf = Mn;
o.creationData = Rn;
o.eraName = Ln;
o.eraNarrow = In;
o.eraAbbr = Un;
o.eraYear = An;
o.year = is;
o.isLeapYear = Or;
o.weekYear = zn;
o.isoWeekYear = Zn;
o.quarter = o.quarters = Kn;
o.month = as;
o.daysInMonth = Mr;
o.week = o.weeks = Rr;
o.isoWeek = o.isoWeeks = Wr;
o.weeksInYear = qn;
o.weeksInWeekYear = Jn;
o.isoWeeksInYear = Qn;
o.isoWeeksInISOWeekYear = Bn;
o.date = Ps;
o.day = o.days = zr;
o.weekday = Zr;
o.isoWeekday = Qr;
o.dayOfYear = ei;
o.hour = o.hours = ta;
o.minute = o.minutes = ti;
o.second = o.seconds = si;
o.millisecond = o.milliseconds = xs;
o.utcOffset = Ia;
o.utc = Aa;
o.local = Ea;
o.parseZone = Ha;
o.hasAlignedHourOffset = Va;
o.isDST = Ga;
o.isLocal = $a;
o.isUtcOffset = za;
o.isUtc = ps;
o.isUTC = ps;
o.zoneAbbr = ai;
o.zoneName = ni;
o.dates = F(
  "dates accessor is deprecated. Use date instead.",
  Ps
);
o.months = F(
  "months accessor is deprecated. Use month instead",
  as
);
o.years = F(
  "years accessor is deprecated. Use year instead",
  is
);
o.zone = F(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Ua
);
o.isDSTShifted = F(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  ja
);
function ii(e) {
  return S(e * 1e3);
}
function oi() {
  return S.apply(null, arguments).parseZone();
}
function Ns(e) {
  return e;
}
var g = yt.prototype;
g.calendar = zs;
g.longDateFormat = qs;
g.invalidDate = Xs;
g.ordinal = tr;
g.preparse = Ns;
g.postformat = Ns;
g.relativeTime = rr;
g.pastFuture = ar;
g.set = js;
g.eras = Wn;
g.erasParse = Fn;
g.erasConvertYear = Cn;
g.erasAbbrRegex = Hn;
g.erasNameRegex = En;
g.erasNarrowRegex = Vn;
g.months = wr;
g.monthsShort = Sr;
g.monthsParse = vr;
g.monthsRegex = Yr;
g.monthsShortRegex = Dr;
g.week = Tr;
g.firstDayOfYear = Nr;
g.firstDayOfWeek = xr;
g.weekdays = Hr;
g.weekdaysMin = Gr;
g.weekdaysShort = Vr;
g.weekdaysParse = $r;
g.weekdaysRegex = Br;
g.weekdaysShortRegex = qr;
g.weekdaysMinRegex = Jr;
g.isPM = Kr;
g.meridiem = sa;
function Ae(e, t, s, r) {
  var a = X(), n = V().set(r, t);
  return a[s](n, e);
}
function Rs(e, t, s) {
  if (J(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ae(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = Ae(e, r, s, "month");
  return a;
}
function Rt(e, t, s, r) {
  typeof e == "boolean" ? (J(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, J(t) && (s = t, t = void 0), t = t || "");
  var a = X(), n = e ? a._week.dow : 0, i, d = [];
  if (s != null)
    return Ae(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++)
    d[i] = Ae(t, (i + n) % 7, r, "day");
  return d;
}
function li(e, t) {
  return Rs(e, t, "months");
}
function ui(e, t) {
  return Rs(e, t, "monthsShort");
}
function di(e, t, s) {
  return Rt(e, t, s, "weekdays");
}
function hi(e, t, s) {
  return Rt(e, t, s, "weekdaysShort");
}
function fi(e, t, s) {
  return Rt(e, t, s, "weekdaysMin");
}
re("en", {
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
    var t = e % 10, s = m(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
l.lang = F(
  "moment.lang is deprecated. Use moment.locale instead.",
  re
);
l.langData = F(
  "moment.langData is deprecated. Use moment.localeData instead.",
  X
);
var $ = Math.abs;
function ci() {
  var e = this._data;
  return this._milliseconds = $(this._milliseconds), this._days = $(this._days), this._months = $(this._months), e.milliseconds = $(e.milliseconds), e.seconds = $(e.seconds), e.minutes = $(e.minutes), e.hours = $(e.hours), e.months = $(e.months), e.years = $(e.years), this;
}
function Ws(e, t, s, r) {
  var a = A(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function mi(e, t) {
  return Ws(this, e, t, 1);
}
function _i(e, t) {
  return Ws(this, e, t, -1);
}
function Ht(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function yi() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, d, c;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Ht(ht(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = W(e / 1e3), r.seconds = a % 60, n = W(a / 60), r.minutes = n % 60, i = W(n / 60), r.hours = i % 24, t += W(i / 24), c = W(Fs(t)), s += c, t -= Ht(ht(c)), d = W(s / 12), s %= 12, r.days = t, r.months = s, r.years = d, this;
}
function Fs(e) {
  return e * 4800 / 146097;
}
function ht(e) {
  return e * 146097 / 4800;
}
function gi(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = C(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + Fs(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(ht(this._months)), e) {
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
function pi() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + m(this._months / 12) * 31536e6 : NaN;
}
function K(e) {
  return function() {
    return this.as(e);
  };
}
var wi = K("ms"), Si = K("s"), ki = K("m"), vi = K("h"), Mi = K("d"), Di = K("w"), Yi = K("M"), Oi = K("Q"), bi = K("y");
function Ti() {
  return A(this);
}
function Pi(e) {
  return e = C(e), this.isValid() ? this[e + "s"]() : NaN;
}
function le(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var xi = le("milliseconds"), Ni = le("seconds"), Ri = le("minutes"), Wi = le("hours"), Fi = le("days"), Ci = le("months"), Li = le("years");
function Ii() {
  return W(this.days() / 7);
}
var z = Math.round, he = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function Ui(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function Ai(e, t, s, r) {
  var a = A(e).abs(), n = z(a.as("s")), i = z(a.as("m")), d = z(a.as("h")), c = z(a.as("d")), p = z(a.as("M")), P = z(a.as("w")), j = z(a.as("y")), ee = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || d <= 1 && ["h"] || d < s.h && ["hh", d] || c <= 1 && ["d"] || c < s.d && ["dd", c];
  return s.w != null && (ee = ee || P <= 1 && ["w"] || P < s.w && ["ww", P]), ee = ee || p <= 1 && ["M"] || p < s.M && ["MM", p] || j <= 1 && ["y"] || ["yy", j], ee[2] = t, ee[3] = +e > 0, ee[4] = r, Ui.apply(null, ee);
}
function Ei(e) {
  return e === void 0 ? z : typeof e == "function" ? (z = e, !0) : !1;
}
function Hi(e, t) {
  return he[e] === void 0 ? !1 : t === void 0 ? he[e] : (he[e] = t, e === "s" && (he.ss = t - 1), !0);
}
function Vi(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = he, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, he, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = Ai(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var rt = Math.abs;
function ue(e) {
  return (e > 0) - (e < 0) || +e;
}
function Je() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = rt(this._milliseconds) / 1e3, t = rt(this._days), s = rt(this._months), r, a, n, i, d = this.asSeconds(), c, p, P, j;
  return d ? (r = W(e / 60), a = W(r / 60), e %= 60, r %= 60, n = W(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = d < 0 ? "-" : "", p = ue(this._months) !== ue(d) ? "-" : "", P = ue(this._days) !== ue(d) ? "-" : "", j = ue(this._milliseconds) !== ue(d) ? "-" : "", c + "P" + (n ? p + n + "Y" : "") + (s ? p + s + "M" : "") + (t ? P + t + "D" : "") + (a || r || e ? "T" : "") + (a ? j + a + "H" : "") + (r ? j + r + "M" : "") + (e ? j + i + "S" : "")) : "P0D";
}
var _ = Be.prototype;
_.isValid = Wa;
_.abs = ci;
_.add = mi;
_.subtract = _i;
_.as = gi;
_.asMilliseconds = wi;
_.asSeconds = Si;
_.asMinutes = ki;
_.asHours = vi;
_.asDays = Mi;
_.asWeeks = Di;
_.asMonths = Yi;
_.asQuarters = Oi;
_.asYears = bi;
_.valueOf = pi;
_._bubble = yi;
_.clone = Ti;
_.get = Pi;
_.milliseconds = xi;
_.seconds = Ni;
_.minutes = Ri;
_.hours = Wi;
_.days = Fi;
_.weeks = Ii;
_.months = Ci;
_.years = Li;
_.humanize = Vi;
_.toISOString = Je;
_.toString = Je;
_.toJSON = Je;
_.locale = vs;
_.localeData = Ds;
_.toIsoString = F(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Je
);
_.lang = Ms;
h("X", 0, 0, "unix");
h("x", 0, 0, "valueOf");
u("x", $e);
u("X", ur);
w("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
w("x", function(e, t, s) {
  s._d = new Date(m(e));
});
//! moment.js
l.version = "2.29.4";
Vs(S);
l.fn = o;
l.min = Pa;
l.max = xa;
l.now = Na;
l.utc = V;
l.unix = ii;
l.months = li;
l.isDate = Ye;
l.locale = re;
l.invalid = Ee;
l.duration = A;
l.isMoment = U;
l.weekdays = di;
l.parseZone = oi;
l.localeData = X;
l.isDuration = Re;
l.monthsShort = ui;
l.weekdaysMin = fi;
l.defineLocale = Dt;
l.updateLocale = ia;
l.locales = oa;
l.weekdaysShort = hi;
l.normalizeUnits = C;
l.relativeTimeRounding = Ei;
l.relativeTimeThreshold = Hi;
l.calendarFormat = sn;
l.prototype = o;
l.HTML5_FMT = {
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
const Gi = ft({
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
      itemsPerPage: 6,
      pagesPagination: Array,
      pageOfItems: this.response.slice(0, 6),
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
        let r = new Hs();
        r.pageNumber = s, r.isActive = this.currentPage == s, this.pagesPagination.push(r);
      }
      this.isPreviousDisabled = this.currentPage == 1, this.isNextDisabled = this.currentPage == this.pageQuantity;
    },
    formatDate(e) {
      return l(e).format("YYYY-MM-DD hh:mm:ss");
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
const Wt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, a] of t)
    s[r] = a;
  return s;
}, ji = { class: "text-start" }, $i = { class: "d-flex text-body-secondary pt-3" }, zi = /* @__PURE__ */ M("span", { class: "me-1" }, [
  /* @__PURE__ */ M("img", {
    src: " https://www.dinowilliam.com/lib/assets/logo.png",
    height: "16",
    width: "72",
    loading: "lazy"
  })
], -1), Zi = { class: "pb-3 mb-0 small lh-sm border-bottom" }, Qi = { class: "h6" }, Bi = { class: "badge rounded-pill text-bg-secondary" }, qi = ["href"], Ji = { "aria-label": "Page navigation example" }, Xi = { class: "pagination justify-content-center" }, Ki = { class: "page-item" }, eo = ["onClick"], to = { class: "page-item" };
function so(e, t, s, r, a, n) {
  return Z(), ne("div", null, [
    (Z(!0), ne(at, null, Ft(e.pageOfItems, (i, d) => (Z(), ne("div", ji, [
      M("div", $i, [
        zi,
        M("p", Zi, [
          M("p", Qi, [
            Ct(ge(i.url) + " ", 1),
            M("span", Bi, ge(e.formatDate(i.date)), 1)
          ]),
          M("p", null, [
            M("a", {
              class: "h5",
              href: i.url
            }, ge(i.title), 9, qi)
          ]),
          Ct(" " + ge(i.description), 1)
        ])
      ])
    ]))), 256)),
    M("nav", Ji, [
      M("ul", Xi, [
        M("li", Ki, [
          M("a", {
            class: Ke(["page-link", { disabled: e.isPreviousDisabled }]),
            onClick: t[0] || (t[0] = (i) => e.onPageChange(e.previousPage))
          }, "Previous", 2)
        ]),
        (Z(!0), ne(at, null, Ft(e.pagesPagination, (i) => (Z(), ne("li", {
          class: Ke(["page-item", { active: i.isActive }])
        }, [
          M("a", {
            class: "page-link",
            onClick: (d) => e.onPageChange(i.pageNumber)
          }, ge(i.pageNumber), 9, eo)
        ], 2))), 256)),
        M("li", to, [
          M("a", {
            class: Ke(["page-link", { disabled: e.isNextDisabled }]),
            onClick: t[1] || (t[1] = (i) => e.onPageChange(e.nextPage))
          }, "Next", 2)
        ])
      ])
    ])
  ]);
}
const ro = /* @__PURE__ */ Wt(Gi, [["render", so]]), ao = ft({
  name: "SearchForm",
  components: { SearchResults: ro },
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
      return console.log(prompt), fetch("https://localhost:44354/Search", t).then((s) => s.json()).then((s) => (this.dataResponse = s, this.showSearch = !1));
    }
  },
  computed: {
    showResults() {
      return !this.showSearch;
    }
  }
});
const no = {
  key: 0,
  class: "container-fluid mt-5"
}, io = /* @__PURE__ */ M("div", { class: "pt-5 pb-5" }, null, -1), oo = /* @__PURE__ */ M("div", {
  class: "mt-5",
  id: "logo"
}, [
  /* @__PURE__ */ M("img", { src: "/img/lucene-net-color.png" })
], -1), lo = { class: "input-group pt-5 mb-3" }, uo = /* @__PURE__ */ M("button", {
  type: "submit",
  class: "btn btn-lg btn-dark col-md-4"
}, "Search", -1);
function ho(e, t, s, r, a, n) {
  const i = Vt("SearchResults");
  return Z(), ne(at, null, [
    e.showSearch ? (Z(), ne("div", no, [
      io,
      oo,
      M("form", {
        onSubmit: t[1] || (t[1] = Is((...d) => e.sendSearch && e.sendSearch(...d), ["prevent"]))
      }, [
        M("div", lo, [
          Us(M("input", {
            type: "text",
            class: "form-control",
            id: "search",
            name: "search",
            placeholder: "",
            "aria-label": "",
            "aria-describedby": "",
            "onUpdate:modelValue": t[0] || (t[0] = (d) => e.prompt = d),
            required: ""
          }, null, 512), [
            [As, e.prompt]
          ])
        ]),
        uo
      ], 32)
    ])) : Lt("", !0),
    e.showResults ? (Z(), Gt(i, {
      key: 1,
      response: e.dataResponse
    }, null, 8, ["response"])) : Lt("", !0)
  ], 64);
}
const fo = /* @__PURE__ */ Wt(ao, [["render", ho]]), co = ft({
  name: "App",
  components: {
    SearchForm: fo
  }
});
function mo(e, t, s, r, a, n) {
  const i = Vt("SearchForm");
  return Z(), Gt(i);
}
const _o = /* @__PURE__ */ Wt(co, [["render", mo]]);
Es(_o).mount("#mainAppSearch");
//# sourceMappingURL=vueappsearch.js.mjs.map
