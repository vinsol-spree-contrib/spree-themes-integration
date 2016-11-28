"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 jquery-param (c) 2015 KNOWLEDGECODE | MIT
*/
(function (f) {
  var c = function c(_c) {
    var g = [],
        f = /\[\]$/,
        h = function h(d, a) {
      a = "function" === typeof a ? a() : null === a ? "" : void 0 === a ? "" : a;g[g.length] = encodeURIComponent(d) + "=" + encodeURIComponent(a);
    },
        e = function e(d, a) {
      var b, c;if (d) {
        if ("[object Array]" === Object.prototype.toString.call(a)) for (b = 0, c = a.length; b < c; b++) {
          f.test(d) ? h(d, a[b]) : e(d + "[" + ("object" === _typeof(a[b]) ? b : "") + "]", a[b]);
        } else if (a && "[object Object]" === String(a)) for (b in a) {
          e(d + "[" + b + "]", a[b]);
        } else h(d, a);
      } else if ("[object Array]" === Object.prototype.toString.call(a)) for (b = 0, c = a.length; b < c; b++) {
        h(a[b].name, a[b].value);
      } else for (b in a) {
        e(b, a[b]);
      }return g;
    };return e("", _c).join("&").replace(/%20/g, "+");
  };"object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = c : "function" === typeof define && define.amd ? define([], function () {
    return c;
  }) : f.param = c;
})(undefined);