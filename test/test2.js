!
function(t) {
    function n(e) {
        if (r[e]) return r[e].exports;
        var i = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    var e = window.cambrianChunkJsonp;
    window.cambrianChunkJsonp = function(n, r, o) {
        for (var u, s, c = 0,
        a = []; c < n.length; c++) s = n[c],
        i[s] && a.push(i[s][0]),
        i[s] = 0;
        for (u in r) Object.prototype.hasOwnProperty.call(r, u) && (t[u] = r[u]);
        for (e && e(n, r, o); a.length;) a.shift()()
    };
    var r = {},
    i = {
        1 : 0
    };
    n.e = function(t) {
        function e() {
            s.onerror = s.onload = null,
            clearTimeout(c);
            var n = i[t];
            0 !== n && (n && n[1](new Error("Loading chunk " + t + " failed.")), i[t] = void 0)
        }
        var r = i[t];
        if (0 === r) return new Promise(function(t) {
            t()
        });
        if (r) return r[2];
        var o = new Promise(function(n, e) {
            r = i[t] = [n, e]
        });
        r[2] = o;
        var u = document.getElementsByTagName("head")[0],
        s = document.createElement("script");
        s.type = "text/javascript",
        s.charset = "utf-8",
        s.async = !0,
        s.timeout = 12e4,
        n.nc && s.setAttribute("nonce", n.nc),
        s.src = n.p + "" + ({
            0 : "ability"
        } [t] || t) + "." + {
            0 : "a5461b98"
        } [t] + ".js";
        var c = setTimeout(e, 12e4);
        return s.onerror = s.onload = e,
        u.appendChild(s),
        o
    },
    n.m = t,
    n.c = r,
    n.i = function(t) {
        return t
    },
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    },
    n.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return n.d(e, "a", e),
        e
    },
    n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    },
    n.p = "https://ae.bdstatic.com/xz/msite/static/sdk/",
    n.oe = function(t) {
        throw console.error(t),
        t
    },
    n(n.s = 44)
} ([, ,
function(t, n, e) {
    "use strict";
    function r() {
        return g
    }
    function i() {
        document.write('<div id="cambrian-document-write-test"></div>');
        var t = document.getElementById("cambrian-document-write-test");
        return !! t && (t.parentNode.removeChild(t), !0)
    }
    function o(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
        i() ? (window[w].logData.mlt = 1, s(t, n,
        function() {
            u(t, n, e)
        })) : (window[w].logData.mlt = 0, u(t, n, e))
    }
    function u(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b,
        r = document.createElement("script");
        r.onload = n,
        r.onerror = e,
        r.src = t,
        document.head.appendChild(r)
    }
    function s(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b,
        r = parseInt(1e3 * Math.random(), 10),
        i = "cambrian_sync_loader_success" + +new Date + r,
        o = "cambrian_sync_loader_fail_" + +new Date + r;
        window[i] = function() {
            delete window[i],
            delete window[o],
            n()
        },
        window[o] = function() {
            delete window[i],
            delete window[o],
            e()
        };
        var u = "<script onload=\"window['" + i + "']()\" onerror=\"window['" + o + '\']()" src="' + t + '"><\/script>';
        document.write(u)
    }
    function c() {
        var t = m[y]("head")[0],
        n = m[_]("style");
        n.innerHTML = "\n        #cambrian0,\n        #cambrian1,\n        #cambrian2,\n        #cambrian3,\n        #cambrian4 {\n            height: 58px;\n        }\n    ",
        t.appendChild(n)
    }
    function a(t, n) {
        var e = void 0,
        r = n;
        r || (e = m[y]("script"), r = e[e.length - 1]);
        var i = m[_]("div");
        return i.id = O + S++,
        i.barType = t,
        r.parentNode.insertBefore(i, r),
        i
    }
    function l(t) {
        var n = Object.keys(t),
        e = n.map(function(n) {
            return n + "=" + encodeURIComponent(t[n])
        }),
        r = e.join("&"),
        i = T + "?" + r; (new Image).src = i
    }
    function f(t) {
        l(v({
            s_type: "ab"
        },
        t, {
            pid: 66,
            sub_pid: 1,
            log_type: 1,
            ver: "1.0.18",
            pt: "online"
        }))
    }
    function p() {
        for (var t = [], n = "0123456789abcdef", e = 0; e < 36; e++) t[e] = n.substr(Math.floor(16 * Math.random()), 1);
        return t.join("")
    }
    function d(t, n, e) {
        t.style.height = n,
        t.style.margin = e
    }
    function h() {
        S = 0
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var v = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        }
        return t
    };
    n.getProtocol = r,
    n.detectDocWrite = i,
    n.loadJS = o,
    n.asyncLoader = u,
    n.syncLoader = s,
    n.createStyle = c,
    n.createDom = a,
    n.abLog = f,
    n.uuid = p,
    n.setPlaceHolder = d,
    n.clearCnt = h;
    var b = function() {},
    m = document,
    y = "getElementsByTagName",
    _ = "createElement",
    g = "https:",
    w = "cambrianb8f4b2d3",
    T = "https://xiongzhang.baidu.com/xzhstatistics/rp",
    S = 0,
    O = "cambrian"
},
function(t, n, e) {
    "use strict";
    function r(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.Invoker = function t(n) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        r(this, t),
        this.name = n,
        this.options = e;
        for (var i = arguments.length,
        o = Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++) o[u - 2] = arguments[u];
        this.ext = o
    }
},
function(t, n, e) {
    "use strict";
    function r(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }
    function i(t, n) {
        r(n) ? f[t] = l({},
        n) : f[t] = n
    }
    function o(t, n, e) {
        r(e) ? f[t][n] = l({},
        e) : f[t][n] = e
    }
    function u(t, n) {
        f[t].callback.push(n)
    }
    function s(t) {
        var n = f[t];
        return r(n) ? l({},
        n) : n
    }
    function c() {
        f = {}
    }
    function a(t) {
        f[t] = null
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var l = Object.assign ||
    function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
        }
        return t
    };
    n.set = i,
    n.setByAttrKey = o,
    n.setCallback = u,
    n.get = s,
    n.clear = c,
    n.clearById = a;
    var f = {}
},
, , , , ,
function(t, n, e) {
    "use strict";
    function r(t, n) {
        s.globalPublic[t] = function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments[1];
            if ("bar" === t || "subscribeBar" === t) {
                if (!n.data.dom) {
                    var r = n.data,
                    i = r.type,
                    s = r.anchor,
                    a = (0, c.createDom)(i, s);
                    n.data.dom = a
                }
            } else if ("render" === t) {
                var l = (0, c.createDom)(n, e);
                n = {
                    data: {
                        dom: l,
                        type: n
                    }
                }
            }
            if (n.log = {
                name: t,
                pt: "online",
                ct: (new Date).getTime()
            },
            "bar" === t || "subscribeBar" === t || "render" === t) {
                var f = n.data,
                p = f.type,
                d = f.dom;
                "head" === p ? (0, c.setPlaceHolder)(d, "65px") : "body" === p ? (0, c.setPlaceHolder)(d, "65px") : "tail" === p && (0, c.setPlaceHolder)(d, "218px", "20px 0")
            } (0, u.set)(new o.Invoker(t, n))
        },
        a[t] = n,
        (0, u.run)()
    }
    function i(t) {
        return a[t]
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.register = r,
    n.get = i;
    var o = e(3),
    u = e(43),
    s = e(15),
    c = e(2),
    a = {}
},
function(t, n, e) {
    "use strict";
    function r() {
        var t = window.navigator.userAgent,
        n = / baiduboxapp\//i.test(t),
        e = n && location.href.indexOf("file:") >= 0;
        return location.hostname.indexOf(".baidu.com") >= 0 || e
    }
    function i(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        e = document.createElement("img");
        t.s_id = s(n),
        t.pt = "online";
        var r = Object.keys(t),
        i = r.map(function(n) {
            return n + "=" + encodeURIComponent(t[n])
        });
        e.src = b + i.join("&") + "&_t=" + (new Date).getTime()
    }
    function o() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        n += "",
        t += "";
        for (var e = t.split("."), r = n.split("."), i = 0, o = Math.max(e.length, r.length); i < o; i++) {
            if (e[i] && !r[i] && parseInt(e[i], 10) > 0 || parseInt(e[i], 10) > parseInt(r[i], 10)) return 1;
            if (r[i] && !e[i] && parseInt(r[i], 10) > 0 || parseInt(e[i], 10) < parseInt(r[i], 10)) return - 1
        }
        return 0
    }
    function u() {
        if (null !== y) return y;
        y = !1;
        var t = window.navigator.userAgent,
        n = window.navigator.appVersion;
        if (/(iPhone|iPod|iPad)/.test(navigator.userAgent)) {
            var e = n.match(/cpu iphone os (.*?) like mac os/i);
            e = e[1].replace(/_/g, "."),
            o(e, m) >= 0 && /Safari/i.test(t) && (y = !0)
        }
        return y
    }
    function s() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (t.id) return v.get(t.id).data.office_info.appid;
        var n = a();
        return n && n.data.office_info.appid
    }
    function c(t) {
        return t && t.id ? {
            id: t.id,
            val: v.get(t.id)
        }: {
            id: v.get("defaultInsId"),
            val: a()
        }
    }
    function a() {
        var t = v.get("defaultInsId");
        return v.get(t)
    }
    function l(t) {
        var n = void 0 === t ? "undefined": d(t);
        return null != t && ("object" === n || "function" === n)
    }
    function f(t) {
        return "[object Function]" === Object.prototype.toString.call(t)
    }
    function p(t) {
        return t instanceof HTMLElement || f(t.appendChild)
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(t) {
        return typeof t
    }: function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
    };
    n.isBaiduDomain = r,
    n.sendLog = i,
    n.versionCompare = o,
    n.isSpecialIOS = u,
    n.getAppid = s,
    n.getInsData = c,
    n.getDefaultInsData = a,
    n.isObject = l,
    n.isFunction = f,
    n.isHTMLElement = p;
    var h = e(4),
    v = function(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n.
    default = t,
        n
    } (h),
    b = "https://xiongzhang.baidu.com/xzhstatistics/rp?pid=66&sub_pid=1&log_type=1&",
    m = "11.3.0",
    y = null
},
, , ,
function(t, n, e) {
    "use strict";
    function r() {
        n.globalPrivate = u = {
            status: "destory"
        },
        n.globalPublic = s = null
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.globalPublic = n.globalPrivate = void 0,
    n.destory = r;
    var i = e(32),
    o = new i.EventEmitter,
    u = n.globalPrivate = window["cambrianb8f4b2d3"] = window["cambrianb8f4b2d3"] || {},
    s = n.globalPublic = window.cambrian = window.cambrian || {};
    s.addListener = o.addListener.bind(o),
    s.emit = o.emit.bind(o)
},
, ,
function(t, n, e) {
    "use strict";
    function r(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    function i(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n)
    }
    var o = e(46),
    u = function(t) {
        function n(e, i, o) {
            r(this, n),
            t.call(this, e),
            this.listener = i,
            this.context = o
        }
        return i(n, t),
        n
    } (o);
    t.exports = u
},
function(t, n, e) {
    "use strict";
    function r(t, n, e, r, o, u, s, c) {
        if (i(n), !t) {
            var a;
            if (void 0 === n) a = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var l = [e, r, o, u, s, c],
                f = 0;
                a = new Error(n.replace(/%s/g,
                function() {
                    return l[f++]
                })),
                a.name = "Invariant Violation"
            }
            throw a.framesToPop = 1,
            a
        }
    }
    var i = function(t) {};
    t.exports = r
},
function(t, n, e) {
    "use strict";
    t.exports = e(26).polyfill()
},
, , , , ,
function(t, n, e) { (function(n, e) {
        /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
        !
        function(n, e) {
            t.exports = function() {
                "use strict";
                function t(t) {
                    var n = typeof t;
                    return null !== t && ("object" === n || "function" === n)
                }
                function r(t) {
                    return "function" == typeof t
                }
                function i(t) {
                    K = t
                }
                function o(t) {
                    J = t
                }
                function u() {
                    return void 0 !== H ?
                    function() {
                        H(c)
                    }: s()
                }
                function s() {
                    var t = setTimeout;
                    return function() {
                        return t(c, 1)
                    }
                }
                function c() {
                    for (var t = 0; t < N; t += 2)(0, G[t])(G[t + 1]),
                    G[t] = void 0,
                    G[t + 1] = void 0;
                    N = 0
                }
                function a(t, n) {
                    var e = this,
                    r = new this.constructor(f);
                    void 0 === r[X] && x(r);
                    var i = e._state;
                    if (i) {
                        var o = arguments[i - 1];
                        J(function() {
                            return j(i, r, o, e._result)
                        })
                    } else S(e, r, t, n);
                    return r
                }
                function l(t) {
                    var n = this;
                    if (t && "object" == typeof t && t.constructor === n) return t;
                    var e = new n(f);
                    return _(e, t),
                    e
                }
                function f() {}
                function p() {
                    return new TypeError("You cannot resolve a promise with itself")
                }
                function d() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }
                function h(t) {
                    try {
                        return t.then
                    } catch(t) {
                        return tt.error = t,
                        tt
                    }
                }
                function v(t, n, e, r) {
                    try {
                        t.call(n, e, r)
                    } catch(t) {
                        return t
                    }
                }
                function b(t, n, e) {
                    J(function(t) {
                        var r = !1,
                        i = v(e, n,
                        function(e) {
                            r || (r = !0, n !== e ? _(t, e) : w(t, e))
                        },
                        function(n) {
                            r || (r = !0, T(t, n))
                        },
                        "Settle: " + (t._label || " unknown promise")); ! r && i && (r = !0, T(t, i))
                    },
                    t)
                }
                function m(t, n) {
                    n._state === Q ? w(t, n._result) : n._state === $ ? T(t, n._result) : S(n, void 0,
                    function(n) {
                        return _(t, n)
                    },
                    function(n) {
                        return T(t, n)
                    })
                }
                function y(t, n, e) {
                    n.constructor === t.constructor && e === a && n.constructor.resolve === l ? m(t, n) : e === tt ? (T(t, tt.error), tt.error = null) : void 0 === e ? w(t, n) : r(e) ? b(t, n, e) : w(t, n)
                }
                function _(n, e) {
                    n === e ? T(n, p()) : t(e) ? y(n, e, h(e)) : w(n, e)
                }
                function g(t) {
                    t._onerror && t._onerror(t._result),
                    O(t)
                }
                function w(t, n) {
                    t._state === Z && (t._result = n, t._state = Q, 0 !== t._subscribers.length && J(O, t))
                }
                function T(t, n) {
                    t._state === Z && (t._state = $, t._result = n, J(g, t))
                }
                function S(t, n, e, r) {
                    var i = t._subscribers,
                    o = i.length;
                    t._onerror = null,
                    i[o] = n,
                    i[o + Q] = e,
                    i[o + $] = r,
                    0 === o && t._state && J(O, t)
                }
                function O(t) {
                    var n = t._subscribers,
                    e = t._state;
                    if (0 !== n.length) {
                        for (var r = void 0,
                        i = void 0,
                        o = t._result,
                        u = 0; u < n.length; u += 3) r = n[u],
                        i = n[u + e],
                        r ? j(e, r, i, o) : i(o);
                        t._subscribers.length = 0
                    }
                }
                function P(t, n) {
                    try {
                        return t(n)
                    } catch(t) {
                        return tt.error = t,
                        tt
                    }
                }
                function j(t, n, e, i) {
                    var o = r(e),
                    u = void 0,
                    s = void 0,
                    c = void 0,
                    a = void 0;
                    if (o) {
                        if (u = P(e, i), u === tt ? (a = !0, s = u.error, u.error = null) : c = !0, n === u) return void T(n, d())
                    } else u = i,
                    c = !0;
                    n._state !== Z || (o && c ? _(n, u) : a ? T(n, s) : t === Q ? w(n, u) : t === $ && T(n, u))
                }
                function A(t, n) {
                    try {
                        n(function(n) {
                            _(t, n)
                        },
                        function(n) {
                            T(t, n)
                        })
                    } catch(n) {
                        T(t, n)
                    }
                }
                function E() {
                    return nt++
                }
                function x(t) {
                    t[X] = nt++,
                    t._state = void 0,
                    t._result = void 0,
                    t._subscribers = []
                }
                function C() {
                    return new Error("Array Methods must be provided an Array")
                }
                function I(t) {
                    return new et(this, t).promise
                }
                function M(t) {
                    var n = this;
                    return new n(R(t) ?
                    function(e, r) {
                        for (var i = t.length,
                        o = 0; o < i; o++) n.resolve(t[o]).then(e, r)
                    }: function(t, n) {
                        return n(new TypeError("You must pass an array to race."))
                    })
                }
                function L(t) {
                    var n = this,
                    e = new n(f);
                    return T(e, t),
                    e
                }
                function k() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }
                function D() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }
                function F() {
                    var t = void 0;
                    if (void 0 !== e) t = e;
                    else if ("undefined" != typeof self) t = self;
                    else try {
                        t = Function("return this")()
                    } catch(t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var n = t.Promise;
                    if (n) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(n.resolve())
                        } catch(t) {}
                        if ("[object Promise]" === r && !n.cast) return
                    }
                    t.Promise = rt
                }
                var B = void 0;
                B = Array.isArray ? Array.isArray: function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var R = B,
                N = 0,
                H = void 0,
                K = void 0,
                J = function(t, n) {
                    G[N] = t,
                    G[N + 1] = n,
                    2 === (N += 2) && (K ? K(c) : W())
                },
                V = "undefined" != typeof window ? window: void 0,
                Y = V || {},
                U = Y.MutationObserver || Y.WebKitMutationObserver,
                q = "undefined" == typeof self && void 0 !== n && "[object process]" === {}.toString.call(n),
                z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                G = new Array(1e3),
                W = void 0;
                W = q ?
                function() {
                    return function() {
                        return n.nextTick(c)
                    }
                } () : U ?
                function() {
                    var t = 0,
                    n = new U(c),
                    e = document.createTextNode("");
                    return n.observe(e, {
                        characterData: !0
                    }),
                    function() {
                        e.data = t = ++t % 2
                    }
                } () : z ?
                function() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = c,
                    function() {
                        return t.port2.postMessage(0)
                    }
                } () : void 0 === V ?
                function() {
                    try {
                        var t = Function("return this")().require("vertx");
                        return H = t.runOnLoop || t.runOnContext,
                        u()
                    } catch(t) {
                        return s()
                    }
                } () : s();
                var X = Math.random().toString(36).substring(2),
                Z = void 0,
                Q = 1,
                $ = 2,
                tt = {
                    error: null
                },
                nt = 0,
                et = function() {
                    function t(t, n) {
                        this._instanceConstructor = t,
                        this.promise = new t(f),
                        this.promise[X] || x(this.promise),
                        R(n) ? (this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n), 0 === this._remaining && w(this.promise, this._result))) : T(this.promise, C())
                    }
                    return t.prototype._enumerate = function(t) {
                        for (var n = 0; this._state === Z && n < t.length; n++) this._eachEntry(t[n], n)
                    },
                    t.prototype._eachEntry = function(t, n) {
                        var e = this._instanceConstructor,
                        r = e.resolve;
                        if (r === l) {
                            var i = h(t);
                            if (i === a && t._state !== Z) this._settledAt(t._state, n, t._result);
                            else if ("function" != typeof i) this._remaining--,
                            this._result[n] = t;
                            else if (e === rt) {
                                var o = new e(f);
                                y(o, t, i),
                                this._willSettleAt(o, n)
                            } else this._willSettleAt(new e(function(n) {
                                return n(t)
                            }), n)
                        } else this._willSettleAt(r(t), n)
                    },
                    t.prototype._settledAt = function(t, n, e) {
                        var r = this.promise;
                        r._state === Z && (this._remaining--, t === $ ? T(r, e) : this._result[n] = e),
                        0 === this._remaining && w(r, this._result)
                    },
                    t.prototype._willSettleAt = function(t, n) {
                        var e = this;
                        S(t, void 0,
                        function(t) {
                            return e._settledAt(Q, n, t)
                        },
                        function(t) {
                            return e._settledAt($, n, t)
                        })
                    },
                    t
                } (),
                rt = function() {
                    function t(n) {
                        this[X] = E(),
                        this._result = this._state = void 0,
                        this._subscribers = [],
                        f !== n && ("function" != typeof n && k(), this instanceof t ? A(this, n) : D())
                    }
                    return t.prototype.
                    catch = function(t) {
                        return this.then(null, t)
                    },
                    t.prototype.
                    finally = function(t) {
                        var n = this,
                        e = n.constructor;
                        return n.then(function(n) {
                            return e.resolve(t()).then(function() {
                                return n
                            })
                        },
                        function(n) {
                            return e.resolve(t()).then(function() {
                                throw n
                            })
                        })
                    },
                    t
                } ();
                return rt.prototype.then = a,
                rt.all = I,
                rt.race = M,
                rt.resolve = l,
                rt.reject = L,
                rt._setScheduler = i,
                rt._setAsap = o,
                rt._asap = J,
                rt.polyfill = F,
                rt.Promise = rt,
                rt
            } ()
        } ()
    }).call(n, e(49), e(50))
},
, , , , ,
function(t, n, e) {
    var r = {
        EventEmitter: e(45),
        EmitterSubscription: e(18)
    };
    t.exports = r
},
, , , , , , , , , ,
function(t, n, e) {
    "use strict";
    function r() {
        var t = s.filter(function(t) {
            return !! (0, o.get)(t.name)
        });
        s = u.globalPrivate.invokerCache = s.filter(function(t) {
            return ! (0, o.get)(t.name)
        }),
        t.forEach(function(t) {
            t.options.log.cltype = c ? 1 : 0,
            (0, o.get)(t.name)().then(function(n) {
                c = !0,
                t.options.log.st = (new Date).getTime(),
                n[t.name](t.options, t.ext)
            })
        })
    }
    function i(t) {
        s.push(t),
        r()
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.run = r,
    n.set = i;
    var o = e(10),
    u = e(15),
    s = u.globalPrivate.invokerCache || [],
    c = !1
},
function(t, n, e) {
    "use strict";
    var r = e(10),
    i = e(11),
    o = e(4),
    u = function(t) {
        if (t && t.__esModule) return t;
        var n = {};
        if (null != t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n.
    default = t,
        n
    } (o);
    e(20);
    var s = window["cambrianb8f4b2d3"] || {};
    if (s.data && !(s.code - 0)) {
        var c = s.data,
        a = c.office_info,
        l = c.signature,
        f = (c.abilities, (0, i.isBaiduDomain)());
        if (!a.appid && !f) throw "\u9519\u8bef\uff1a\u7f3a\u5c11\u718a\u638c\u53f7id";
        var p = a.appid + "_" + l;
        u.set("defaultInsId", p),
        u.set(p, {
            data: s.data,
            status: "init",
            callback: []
        }),
        s.status = "init",
        s.logData.ms = (new Date).getTime(),
        (0, i.sendLog)({
            s_type: "pfm",
            mlt: s.logData.mlt,
            dt: s.logData.ms - s.logData.cs
        }),
        function(t) {
            var n = {};
            n.invokeIM = function() {
                return e.e(0).then(e.bind(null, 6))
            },
            n.share = function() {
                return e.e(0).then(e.bind(null, 6))
            },
            n.authorize = function() {
                return e.e(0).then(e.bind(null, 33))
            },
            n.bar = function() {
                return e.e(0).then(e.bind(null, 22))
            },
            n.render = function() {
                return e.e(0).then(e.bind(null, 37))
            },
            n.init = function() {
                return e.e(0).then(e.bind(null, 8))
            },
            n.destory = function() {
                return e.e(0).then(e.bind(null, 8))
            },
            n.subscribe = function() {
                return e.e(0).then(e.bind(null, 40))
            },
            n.follow = function() {
                return e.e(0).then(e.bind(null, 5))
            },
            n.wysFollow = function() {
                return e.e(0).then(e.bind(null, 5))
            },
            n.getInfo = function() {
                return e.e(0).then(e.bind(null, 7))
            },
            n.query = function() {
                return e.e(0).then(e.bind(null, 7))
            },
            n.isIos = function() {
                return e.e(0).then(e.bind(null, 0))
            },
            n.isAndroid = function() {
                return e.e(0).then(e.bind(null, 0))
            },
            n.boxVersionCompare = function() {
                return e.e(0).then(e.bind(null, 0))
            },
            n.isBox = function() {
                return e.e(0).then(e.bind(null, 0))
            },
            n.boxVersion = function() {
                return e.e(0).then(e.bind(null, 0))
            },
            n.isSubscribe = function() {
                return e.e(0).then(e.bind(null, 31))
            },
            n.payment = function() {
                return e.e(0).then(e.bind(null, 36))
            },
            n.subscribeBar = function() {
                return e.e(0).then(e.bind(null, 41))
            },
            n.comment = function() {
                return e.e(0).then(e.bind(null, 34))
            },
            n.login = function() {
                return e.e(0).then(e.bind(null, 23))
            },
            n.isLogin = function() {
                return e.e(0).then(e.bind(null, 21))
            },
            n.tel = function() {
                return e.e(0).then(e.bind(null, 9))
            },
            n.sms = function() {
                return e.e(0).then(e.bind(null, 9))
            },
            n.silentSubscribe = function() {
                return e.e(0).then(e.bind(null, 39))
            },
            n.invokeBcpIM = function() {
                return e.e(0).then(e.bind(null, 35))
            },
            Object.keys(n).forEach(function(t) { (0, r.register)(t, n[t])
            })
        } ()
    }
},
function(t, n, e) {
    "use strict";
    function r(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    var i = e(18),
    o = e(47),
    u = e(48),
    s = e(19),
    c = function() {
        function t() {
            r(this, t),
            this._subscriber = new o,
            this._currentSubscription = null
        }
        return t.prototype.addListener = function(t, n, e) {
            return this._subscriber.addSubscription(t, new i(this._subscriber, n, e))
        },
        t.prototype.once = function(t, n, e) {
            var r = this;
            return this.addListener(t,
            function() {
                r.removeCurrentListener(),
                n.apply(e, arguments)
            })
        },
        t.prototype.removeAllListeners = function(t) {
            this._subscriber.removeAllSubscriptions(t)
        },
        t.prototype.removeCurrentListener = function() {
            this._currentSubscription || s(!1),
            this._subscriber.removeSubscription(this._currentSubscription)
        },
        t.prototype.listeners = function(t) {
            var n = this._subscriber.getSubscriptionsForType(t);
            return n ? n.filter(u.thatReturnsTrue).map(function(t) {
                return t.listener
            }) : []
        },
        t.prototype.emit = function(t) {
            var n = this._subscriber.getSubscriptionsForType(t);
            if (n) {
                for (var e = Object.keys(n), r = 0; r < e.length; r++) {
                    var i = e[r],
                    o = n[i];
                    o && (this._currentSubscription = o, this.__emitToSubscription.apply(this, [o].concat(Array.prototype.slice.call(arguments))))
                }
                this._currentSubscription = null
            }
        },
        t.prototype.__emitToSubscription = function(t, n) {
            var e = Array.prototype.slice.call(arguments, 2);
            t.listener.apply(t.context, e)
        },
        t
    } ();
    t.exports = c
},
function(t, n, e) {
    "use strict";
    function r(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
        function t(n) {
            r(this, t),
            this.subscriber = n
        }
        return t.prototype.remove = function() {
            this.subscriber && (this.subscriber.removeSubscription(this), this.subscriber = null)
        },
        t
    } ();
    t.exports = i
},
function(t, n, e) {
    "use strict";
    function r(t, n) {
        if (! (t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    var i = e(19),
    o = function() {
        function t() {
            r(this, t),
            this._subscriptionsForType = {},
            this._currentSubscription = null
        }
        return t.prototype.addSubscription = function(t, n) {
            n.subscriber !== this && i(!1),
            this._subscriptionsForType[t] || (this._subscriptionsForType[t] = []);
            var e = this._subscriptionsForType[t].length;
            return this._subscriptionsForType[t].push(n),
            n.eventType = t,
            n.key = e,
            n
        },
        t.prototype.removeAllSubscriptions = function(t) {
            void 0 === t ? this._subscriptionsForType = {}: delete this._subscriptionsForType[t]
        },
        t.prototype.removeSubscription = function(t) {
            var n = t.eventType,
            e = t.key,
            r = this._subscriptionsForType[n];
            r && delete r[e]
        },
        t.prototype.getSubscriptionsForType = function(t) {
            return this._subscriptionsForType[t]
        },
        t
    } ();
    t.exports = o
},
function(t, n, e) {
    "use strict";
    function r(t) {
        return function() {
            return t
        }
    }
    var i = function() {};
    i.thatReturns = r,
    i.thatReturnsFalse = r(!1),
    i.thatReturnsTrue = r(!0),
    i.thatReturnsNull = r(null),
    i.thatReturnsThis = function() {
        return this
    },
    i.thatReturnsArgument = function(t) {
        return t
    },
    t.exports = i
},
function(t, n) {
    function e() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function i(t) {
        if (l === setTimeout) return setTimeout(t, 0);
        if ((l === e || !l) && setTimeout) return l = setTimeout,
        setTimeout(t, 0);
        try {
            return l(t, 0)
        } catch(n) {
            try {
                return l.call(null, t, 0)
            } catch(n) {
                return l.call(this, t, 0)
            }
        }
    }
    function o(t) {
        if (f === clearTimeout) return clearTimeout(t);
        if ((f === r || !f) && clearTimeout) return f = clearTimeout,
        clearTimeout(t);
        try {
            return f(t)
        } catch(n) {
            try {
                return f.call(null, t)
            } catch(n) {
                return f.call(this, t)
            }
        }
    }
    function u() {
        v && d && (v = !1, d.length ? h = d.concat(h) : b = -1, h.length && s())
    }
    function s() {
        if (!v) {
            var t = i(u);
            v = !0;
            for (var n = h.length; n;) {
                for (d = h, h = []; ++b < n;) d && d[b].run();
                b = -1,
                n = h.length
            }
            d = null,
            v = !1,
            o(t)
        }
    }
    function c(t, n) {
        this.fun = t,
        this.array = n
    }
    function a() {}
    var l, f, p = t.exports = {}; !
    function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout: e
        } catch(t) {
            l = e
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout: r
        } catch(t) {
            f = r
        }
    } ();
    var d, h = [],
    v = !1,
    b = -1;
    p.nextTick = function(t) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
        h.push(new c(t, n)),
        1 !== h.length || v || i(s)
    },
    c.prototype.run = function() {
        this.fun.apply(null, this.array)
    },
    p.title = "browser",
    p.browser = !0,
    p.env = {},
    p.argv = [],
    p.version = "",
    p.versions = {},
    p.on = a,
    p.addListener = a,
    p.once = a,
    p.off = a,
    p.removeListener = a,
    p.removeAllListeners = a,
    p.emit = a,
    p.prependListener = a,
    p.prependOnceListener = a,
    p.listeners = function(t) {
        return []
    },
    p.binding = function(t) {
        throw new Error("process.binding is not supported")
    },
    p.cwd = function() {
        return "/"
    },
    p.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    },
    p.umask = function() {
        return 0
    }
},
function(t, n) {
    var e;
    e = function() {
        return this
    } ();
    try {
        e = e || Function("return this")() || (0, eval)("this")
    } catch(t) {
        "object" == typeof window && (e = window)
    }
    t.exports = e
}]);
