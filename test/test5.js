!
function(t, n) {
    "object" == typeof exports && "object" == typeof module ?
        module.exports = n() : "function" == typeof define
        && define.amd ?
            define("Boxjs", [], n) : "object" == typeof exports ? exports.Boxjs = n() : t.Boxjs = n()
} ("undefined" != typeof self ? self: this,
function() {
    return function(t) {
        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            //debug:[name='n']|ref[Identifier]
            return t[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        var e = {};
        return n.m = t,
        n.c = e,
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
        n.p = "",
        n(n.s = 10)
    } ([function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function e(t, n) {
                return a.cleanObj.toString.call(t).slice(8, -1) === n
            }
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            },
            o = +new Date,
            i = (o + "").slice( - 3),
            s = navigator.userAgent,
            a = {
                isBoxApp: function(t) {
                    return t = t || "",
                    !1 !== / baiduboxapp\//i.test(s) && !(s.indexOf(t + " baiduboxapp") < 0)
                },
                isBox: / baiduboxapp\//i.test(s) && !/ (lite|info) baiduboxapp/.test(s),
                $isBox: function() {
                    var t = window.navigator || {},
                    n = t.userAgent;
                    return / baiduboxapp\//i.test(n) && !/ (lite|info) baiduboxapp/.test(n)
                },
                isLiteBox: / (lite|info) baiduboxapp\//i.test(s),
                $isLiteBox: function() {
                    return / (lite|info) baiduboxapp\//i.test((window.navigator || {}).userAgent)
                },
                isInfoBox: / info baiduboxapp\//i.test(s),
                $isInfoBox: function() {
                    return / info baiduboxapp\//i.test((window.navigator || {}).userAgent)
                },
                isProBox: / pro baiduboxapp\//i.test(s),
                $isProBox: function() {
                    return / pro baiduboxapp\//i.test((window.navigator || {}).userAgent)
                },
                isIOS: /(iPhone|iPod|iPad)/.test(s),
                $isIOS: function() {
                    return /(iPhone|iPod|iPad)/.test((window.navigator || {}).userAgent)
                },
                isAndroid: /(Android);?[\s\/]+([\d.]+)?/.test(s),
                $isAndroid: function() {
                    return /(Android);?[\s\/]+([\d.]+)?/.test((window.navigator || {}).userAgent)
                },
                getId: function() {
                    return i++
                },
                emptyArr: [],
                emptyFn: function() {},
                cleanObj: {},
                byId: function(t) {
                    return a.isString(t) ? document.getElementById(t) : t
                },
                toArray: function(t) {
                    return a.emptyArr.slice.call(t)
                },
                $: function(t, n) {
                    return n = n && 1 === n.nodeType ? n: document,
                    a.toArray(n.querySelectorAll(t))
                }
            };
            "Function,String,Array,Number,RegExp".replace(/[^, ]+/g,
            function(t) {
                a["is" + t] = function(n) {
                    return e(n, t)
                }
            }),
            a.isBoolean = function(t) {
                return ! 0 === t || !1 === t
            },
            a.isObject = function(t) {
                return "object" === (void 0 === t ? "undefined": r(t))
            },
            a.isUndefined = function(t) {
                return void 0 === t
            },
            a.isWindow = function(t) {
                return null != t && t == t.window
            },
            a.isPlainObject = function(t) {
                return a.isObject(t) && !a.isWindow(t) && Object.getPrototypeOf(t) == Object.prototype
            },
            a.cbWithoutCache = function(t, n) {
                var e = "_bdbox_js_" + a.getId();
                return window[e] = function(e) {
                    try {
                        e = a.isString(e) ? JSON.parse(e) : e
                    } catch(t) {
                        console.log("native callback params json parse error")
                    }
                    t(n && a.isFunction(n) ? n(e) : e)
                },
                e
            },
            a.sdkError = {
                COMMAND_NOT_EXIST: {
                    errCode: 901,
                    errMsg: "不存在此端能力"
                },
                NOT_IN_BDBOX: {
                    errCode: 902,
                    errMsg: "手百外无法调用端能力"
                },
                COMMAND_FAIL: {
                    errCode: 903,
                    errMsg: "端能力调用失败"
                },
                COMMAND_SUCCESS: {
                    errCode: 0,
                    errMsg: "调用成功"
                }
            },
            t.exports = a
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t) {
                var n = "",
                e = "",
                r = {};
                if (s.isObject(t)) n = t.errCode >= 0 ? t.errCode: +t.status,
                e = t.errMsg || t.message,
                r = t.data;
                else {
                    try {
                        t = JSON.parse(t)
                    } catch(t) {
                        console.log(t)
                    }
                    n = +t.status || t,
                    r = t.data || arguments[1]
                }
                return {
                    errCode: n,
                    errMsg: e,
                    data: r || {}
                }
            }
            function o(t) {
                for (var n in t)"number" == typeof t[n] ? t[n] = "" + t[n] : "object" === i(t[n]) && (t[n] = o(t[n]));
                return t
            }
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            },
            s = e(0),
            a = e(14),
            u = e(4),
            c = e(18),
            f = e(22),
            l = e(24),
            d = e(2),
            p = (d.versionCompare, d.boxVersion, e(25));
            t.exports = function(t, n) {
                var e = u[t];
                if ("swan" === window.searchboxBoxjsId && n && !n.cancelNumTostr && (n = o(n)), t.match("Sync")) {
                    if (!t) return s.sdkError.COMMAND_NOT_EXIST;
                    if (!s.isBoxApp()) return s.sdkError.NOT_IN_BDBOX;
                    var i = "",
                    d = function() {},
                    v = f.getWhoCanHandle(t);
                    i = "old" === v ? c(t, n || {},
                    d) : "new" === v ? a(t, n || {},
                    d, e) : s.sdkError.COMMAND_NOT_EXIST;
                    var h = r(i);
                    return h = e.thunk ? e.thunk(h) : h,
                    0 === h.errCode ? h.data: (l(window.searchboxBoxjsId, "fail_" + t, h), h)
                }
                return new p(function(o, i) {
                    if (!t) return void i(s.sdkError.COMMAND_NOT_EXIST);
                    if (!s.isBoxApp()) return void i(s.sdkError.NOT_IN_BDBOX);
                    var u = function(n) {
                        var e = r(n);
                        0 === e.errCode ? o(e.data) : (l(window.searchboxBoxjsId, "fail_" + t, e), i({
                            errCode: e.errCode,
                            errMsg: e.errMsg
                        }))
                    },
                    d = f.getWhoCanHandle(t);
                    "old" === d ? c(t, n || {},
                    u) : "new" === d ? a(t, n || {},
                    u, e) : i(s.sdkError.COMMAND_NOT_EXIST)
                })
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(0),
            o = e(6),
            i = e(7),
            s = e(15),
            a = e(8),
            u = e(16),
            c = e(17).apply(r);
            t.exports = {
                versionCompare: o,
                isIOS: r.isIOS,
                isAndroid: r.isAndroid,
                os: r.isIOS ? "ios": r.isAndroid ? "android": "none",
                osVersion: c.version,
                isBox: r.isBoxApp(),
                boxType: r.isProBox ? "pro": r.isInfoBox ? "info": r.isLiteBox ? "lite": "main",
                boxVersion: u() || s() || a() || i()
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t, n, e) {
                for (var o in n) e && (i(n[o]) || s(n[o])) ? (i(n[o]) && !i(t[o]) && (t[o] = {}), s(n[o]) && !s(t[o]) && (t[o] = []), r(t[o], n[o], e)) : u(n[o]) || (t[o] = n[o])
            }
            var o = e(0),
            i = o.isPlainObject,
            s = o.isArray,
            a = o.isBoolean,
            u = o.isUndefined;
            t.exports = function(t) {
                var n, e = o.emptyArr.slice.call(arguments, 1);
                return a(t) && (n = t, t = e.shift()),
                e.forEach(function(e) {
                    r(t, e, n)
                }),
                t
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            t.exports = {}
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            t.exports = {}
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = (e(0),
            function(t, n) {
                n += "",
                t += "";
                for (var e = t.split("."), r = n.split("."), o = 0, i = Math.max(e.length, r.length); o < i; o++) {
                    if (e[o] && !r[o] && parseInt(e[o]) > 0 || parseInt(e[o]) > parseInt(r[o])) return 1;
                    if (r[o] && !e[o] && parseInt(r[o]) > 0 || parseInt(e[o]) < parseInt(r[o])) return - 1
                }
                return 0
            });
            t.exports = r
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(0),
            o = function() {
                var t = 0;
                if (window.baiduboxapp_version) t = window.baiduboxapp_version;
                else if (r.$isBox()) {
                    var n, e = navigator.userAgent; (n = /([\d+.]+)_(?:diordna|enohpi)_/.exec(e)) ? (n = n[1].split("."), t = n.reverse().join(".")) : (n = /baiduboxapp\/([\d+.]+)/.exec(e)) && (t = n[1])
                }
                return o = function() {
                    return t
                },
                t
            };
            t.exports = o
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(0),
            o = function() {
                var t = 0;
                if (r.$isLiteBox()) {
                    var n, e = navigator.userAgent; (n = /baiduboxapp\/([\d+.]+)/.exec(e)) && (t = n[1])
                }
                return o = function() {
                    return t
                },
                t
            };
            t.exports = o
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            t.exports = ["swan"]
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        "use strict";
        var r = {},
        //d1ebug:[name='e']
        o = e(11),
        i = e(3);
        r.platform = o.platform,
        r.init = function(t) {
            window.searchboxBoxjsId = t.id,
            i(r, o),
            t.success && t.success({
                errCode: 0,
                errMsg: "success"
            })
        },
        t.exports = r
    },
    function(t, n, e) {
        "use strict";
        var r = e(12),
        o = e(3),
        i = e(5),
        s = e(4),
        a = e(36),
        u = e(38);
        o(i, a),
        o(s, u),
        t.exports = r
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = {};
            r.h5API = {},
            r.cache = e(13),
            r.data = e(28),
            r.device = e(29),
            r.event = e(30),
            r.log = e(31),
            r.media = e(32),
            r.net = e(33),
            r.ui = e(34),
            r.view = e(35),
            r.platform = function() {
                var t = {},
                n = e(2);
                return Object.keys(n).forEach(function(e) {
                    var r = n[e];
                    t[e] = function() {
                        return "versionCompare" === e ? r(arguments[0], arguments[1]) : r
                    }
                }),
                t
            } (),
            t.exports = r
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(1);
            t.exports = {
                delete: function(t, n) {
                    var e = {
                        key: t,
                        data: encodeURIComponent(JSON.stringify(n))
                    };
                    return r("storage/delete", e)
                },
                get: function(t, n) {
                    return r("storage/get", {
                        key: t,
                        domain: n
                    })
                },
                set: function(t, n, e) {
                    var o = {
                        key: t,
                        data: encodeURIComponent(JSON.stringify(n)),
                        trustedDomains: e
                    };
                    return r("storage/set", o)
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t) {
                var n = document.createElement("iframe"),
                e = document.body || document.getElementsByTagName("body")[0];
                n.style.display = "none",
                n.src = t,
                e.appendChild(n),
                setTimeout(function() {
                    e.removeChild(n),
                    n = null
                },
                0)
            }
            function o(t) {
                var n = window.Bdbox_android_jsbridge;
                if (!n || !n.dispatch) {
                    return window.prompt("BdboxApp:" + JSON.stringify({
                        obj: "Bdbox_android_jsbridge",
                        func: "dispatch",
                        args: [t]
                    }))
                }
                n.dispatch(t)
            }
            function i(t) {
                window.webkit.messageHandlers.BBAMNPJSBridge.postMessage(t)
            }
            function s(t) {
                window.webkit.messageHandlers.BBAMNPJSBridgeWebViewComponent.postMessage(t)
            }
            function a(t) {
                return window.Bdbox_aiapps_jsbridge.dispatch(t)
            }
            function u(t) {
                return window.prompt("BdboxApp:" + JSON.stringify({
                    obj: "mnp",
                    func: "dispatch",
                    args: [t]
                }))
            }
            var c = e(0),
            f = e(2),
            l = e(9),
            d = f.versionCompare,
            p = f.boxVersion;
            t.exports = function(t, n, e, f) {
                var v = [],
                h = "",
                y = "",
                m = !1 !== f.hasCB,
                b = n.useCompontentBridge,
                g = {},
                w = "v" + f.v + "/" + t;
                if ("{}" !== JSON.stringify(n) && (g = {
                    params: encodeURIComponent(JSON.stringify(n))
                }), f.filter) {
                    var x = f.filter(n);
                    n = x.data || g,
                    x.action && (w = "v" + f.v + "/" + x.module + "/" + x.action),
                    f.schemeNoV && (w = x.module + "/" + x.action)
                } else n = g;
                for (var _ in n) v.push(_ + "=" + n[_]);
                if (c.isFunction(e) ? y = c.cbWithoutCache(e, f.thunk) : e && (y = e), m && v.push("callback=" + y), h = window.searchboxBoxjsId && "swan" !== window.searchboxBoxjsId ? "baiduboxapp://" + w + "?" + v.join("&") + "&upgrade=0&oauthType=" + window.searchboxBoxjsId: "baiduboxapp://" + w + "?" + v.join("&") + "&upgrade=0", w.match("Sync")) {
                    var S = {};
                    if (S = c.isAndroid ? a(h) : u(h)) try {
                        return JSON.parse(S)
                    } catch(t) {
                        return c.sdkError.COMMAND_FAIL
                    }
                } else if (c.isAndroid && d(p, "9.0") >= 0) {
                    var S = o(h);
                    if (S) try {
                        S = JSON.parse(S),
                        S && "false" === S.result && window[y](c.sdkError.COMMAND_FAIL)
                    } catch(t) {
                        window[y](c.sdkError.COMMAND_FAIL)
                    }
                } else b ? s(h) : l.indexOf(window.searchboxBoxjsId) > -1 ? i(h) : r(h);
                m || e(c.sdkError.COMMAND_SUCCESS)
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(0),
            o = function() {
                var t = 0;
                if (r.$isInfoBox()) {
                    var n, e = navigator.userAgent; (n = /baiduboxapp\/([\d+.]+)/.exec(e)) && (t = n[1])
                }
                return o = function() {
                    return t
                },
                t
            };
            t.exports = o
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(0),
            o = function() {
                var t = 0;
                if (r.$isProBox()) {
                    var n, e = navigator.userAgent; (n = /baiduboxapp\/([\d+.]+)/.exec(e)) && (t = n[1])
                }
                return o = function() {
                    return t
                },
                t
            };
            t.exports = o
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t) {
                var n = {
                    name: "unknown",
                    version: 0
                };
                this === window || this.os || (this.os = n),
                t = t || navigator.userAgent;
                var e = {
                    Weibo: /weibo/i,
                    Wechat: /micromessenger\//i,
                    QQ: /QQ\//
                };
                for (var r in e) e.hasOwnProperty(r) && (n["is" + r] = e[r].test(t));
                n.isUC = t.match(/UC/) || window.ucweb || window.ucbrowser;
                var o = t.match(/Windows Phone ([\d.]+)/);
                if (o) return n.win10 = !0,
                n.version = o[1],
                n.name = "win10",
                n;
                var i = t.match(/(Android);?\s+([\d.]+)?/);
                if (i) return n.android = !0,
                n.version = i[2],
                n.name = "android",
                n;
                var s = t.match(/(iPad).*OS\s([\d_]+)/),
                a = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !s && t.match(/(iPhone\sOS)\s([\d_]+)/);
                return u && !a ? (n.ios = n.iphone = !0, n.version = u[2].replace(/_/g, "."), n.name = "ios", n) : s ? (n.ios = n.ipad = !0, n.name = "ios", n.version = s[2].replace(/_/g, "."), n) : a ? (n.name = "ios", n.ios = n.ipod = !0, n.version = a[3] ? a[3].replace(/_/g, ".") : null, n) : n
            }
            var o = e(0);
            r.apply(o),
            t.exports = r
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t, n, e) {
                var r = [];
                for (var i in n) r.push(i + "=" + n[i]);
                if (e) {
                    var s = "_bdbox_js_" + o.getId();
                    window[s] = function() {
                        e.apply(window, [].slice.call(arguments, 0))
                    },
                    r.push("func=" + s)
                }
                r = "baiduboxapp://" + t + "?" + r.join("&"),
                console.log(decodeURIComponent(r)),
                window.webkit.messageHandlers.BBAMNPJSBridge.postMessage(r)
            }
            var o = e(0),
            i = e(19),
            s = e(20),
            a = e(21),
            u = e(3),
            c = e(9);
            t.exports = function(t, n, e) {
                var f = "",
                l = t.split("/"),
                d = l[0],
                p = l[1],
                v = o.isIOS ? "ios": o.isAndroid ? "android": "",
                h = a(d, p, n, v),
                y = h ? h.thunk: void 0;
                if (o.isFunction(e) ? f = o.cbWithoutCache(e, y) : e && (f = e), h) {
                    var m = {};
                    if (o.isObject(h.data) ? o.isArray(h.data) ? n = h.data || [] : (n = n || {},
                    u(n, h.data)) : n = h.data, "ios" !== v || h.noParams) m = n;
                    else {
                        h.action && (m = {
                            action: h.action
                        });
                        var b = h.paramName || "params";
                        n && o.isObject(n) && "{}" !== JSON.stringify(n) && (m[b] = encodeURIComponent(JSON.stringify(n))),
                        n && o.isString(n) && n.length && (m[b] = encodeURIComponent(n)),
                        h.next && (m.next = h.next)
                    }
                    switch (o.isObject(h.extData) && u(m, h.extData), v) {
                    case "ios":
                        h.data && h.data.shareSuccessCB && (m.successcallback = h.data.shareSuccessCB),
                        h.data && h.data.shareErrorCB && (m.errorcallback = h.data.shareErrorCB),
                        c.indexOf(window.searchboxBoxjsId) > -1 ? r(h.module, m, f) : !1 === h.hasCB ? s(h.module, m) : s(h.module, m, f);
                        break;
                    case "android":
                        var g = [];
                        if (o.isString(m) && m) g.push(m);
                        else if (o.isObject(m) && !o.isArray(m) && "{}" !== JSON.stringify(m)) g.push(JSON.stringify(m));
                        else if (o.isArray(m) && "[]" !== JSON.stringify(m)) for (var w = 0; w < m.length; w++) g.push(m[w]);
                        if (!1 !== h.hasCB && !1 !== h.async && g.push(f), h.data && h.data.shareSuccessCB && g.push(h.data.shareSuccessCB), h.data && h.data.shareErrorCB && g.push(h.data.shareErrorCB), g.length <= 0) var x = i(h.module, h.action);
                        else var x = i(h.module, h.action, g); ! 1 === h.async && window[f](x)
                    } ! 1 === h.hasCB && window[f](JSON.stringify(o.sdkError.COMMAND_SUCCESS))
                } else window[f](JSON.stringify(o.sdkError.COMMAND_NOT_EXIST))
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t, n, e) {
                if (e && !i.isArray(e) && (e = Array.prototype.slice.call(arguments, 0).slice(2)), window[t] && window[t][n]) {
                    return {
                        error: 0,
                        result: window[t][n].apply(window[t], e),
                        __from: "js"
                    }
                }
                var r = a();
                if (s(r, 4.8) >= 0 || i.$isLiteBox()) {
                    var u = o(t, n, e);
                    return u = u ? JSON.parse(u) : {},
                    u.__from = "app",
                    u
                }
                if ("4.7.1" === r || "4.7" == r) {
                    return {
                        error: 0,
                        result: o(t, n, e),
                        __from: "app4.7"
                    }
                }
                return {
                    error: 200
                }
            }
            function o(t, n, e) {
                if (!i.$isBox() && !i.$isLiteBox()) return {
                    error: 201
                };
                if (!i.$isAndroid()) return {
                    error: 202
                };
                var r = {
                    obj: t,
                    func: n,
                    args: e || []
                };
                try {
                    return window.prompt("BdboxApp:" + JSON.stringify(r))
                } catch(t) {
                    return {
                        error: 201
                    }
                }
            }
            var i = e(0),
            s = e(6),
            a = e(7);
            e(8);
            t.exports = r
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(0);
            t.exports = function(t, n, e) {
                if (t && (r.$isBox() || r.$isLiteBox())) {
                    var o = [];
                    if (r.isFunction(n)) e = n;
                    else for (var i in n) o.push(i + "=" + n[i]);
                    if (r.isFunction(e)) {
                        var s = "_bdbox_js_" + r.getId();
                        window[s] = function() {
                            e.apply(window, [].slice.call(arguments, 0))
                        },
                        o.push("func=" + s)
                    } else e && o.push("func=" + e);
                    o = "baiduboxapp://" + t + "?" + o.join("&");
                    var a = document.createElement("iframe");
                    a.style.display = "none",
                    a.src = o;
                    var u = document.body || document.getElementsByTagName("body")[0];
                    u.appendChild(a),
                    setTimeout(function() {
                        u.removeChild(a),
                        a = null
                    },
                    0)
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(0),
            o = e(3),
            i = e(5),
            s = e(2);
            t.exports = function(t, n, e, a) {
                var u = i[t + "/" + n],
                c = {},
                f = s.boxType,
                l = a;
                "main" !== f && (a = [a, f].join(""));
                var d = u[a];
                if (d) {
                    var p = d.filter || u[l].filter,
                    c = {
                        module: t,
                        action: n,
                        data: e,
                        extData: {},
                        hasCB: d.hasCB || u[l].hasCB
                    };
                    return p && r.isFunction(p) && o(c, p(t, n, e)),
                    d.thunk && r.isFunction(d.thunk) && (c.thunk = d.thunk || u[l].thunk),
                    c
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(5),
            o = e(4),
            i = (e(0), e(2)),
            s = i.versionCompare,
            a = i.boxVersion,
            u = {};
            u.queryToJson = e(23),
            u.platform = i.os,
            u.canInvokeNew = function(t) {
                var n = o[t],
                e = n.versionRange,
                r = u.platform,
                c = i.boxType;
                if ("main" !== c) r = [r, c].join(""),
                e = n[r + "VersionRange"];
                else if (!e) {
                    if (n.notSupport) return ! 0;
                    e = n[r + "VersionRange"]
                }
                var f = e[0],
                l = e[1],
                d = s(a, f) >= 0,
                p = !!l && s(a, l) <= 0;
                return ! (!d || l && !p || n.notSupport && !(n.notSupport.indexOf(r) < 0))
            },
            u.canInvokeOld = function(t) {
                var n = u.platform,
                e = r[t],
                o = i.boxType;
                if (!e) return ! 1;
                "main" !== o && (n = [n, o].join(""));
                var c = e[n];
                if (!c) return ! 1;
                var f = c.versionRange,
                l = !1,
                d = "",
                p = "",
                v = !1,
                h = !1;
                return ! f || f && 0 === f.length ? l = !0 : (d = f[0], p = f[1], v = !!d && s(a, d) >= 0, h = !p || !!p && s(a, p) <= 0),
                !!(l || h && v)
            },
            u.getWhoCanHandle = function(t) {
                var n = o[t];
                return n && (n = n.v),
                !n && u.canInvokeOld(t) ? "old": n && u.canInvokeNew(t) ? "new": n && !u.canInvokeNew(t) && u.canInvokeOld(t) ? "old": void 0
            },
            t.exports = u
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            e(0);
            t.exports = function(t) {
                var n = t.split("?"),
                e = n[1] ? n[1] : n[0],
                r = e.split("&"),
                o = {};
                return r.forEach(function(t) {
                    if (t = t.split("="), t[0].length > 0) {
                        var n = "";
                        try {
                            n = decodeURIComponent(t[1]) || ""
                        } catch(t) {}
                        o[t[0]] = n
                    }
                }),
                o
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function e() {
                var t = "";
                return /\biPhone\b|\biPad\b/.test(s) && !/android/i.test(s) ? t = "ios": /android/i.test(s) ? t = "android": /windows/i.test(s) && (t = "windows"),
                t
            }
            function r() {
                var t = "",
                n = "";
                if (n == /([\d+.]+)_(?:diordna|enohpi)_/.exec(s)) try {
                    n = n[1].split("."),
                    n = n.reverse(),
                    t = n.join(".")
                } catch(t) {
                    console.log("获取ios手百版本无匹配，原始字符为：" + s)
                } else if (n == /baiduboxapp\/([\d]+([.][\d]+){1,3})/.exec(s)) try {
                    t = n[1]
                } catch(t) {
                    console.log("获取android手百版本无匹配，原始字符为：" + s)
                }
                return t
            }
            function o() {
                var t = r();
                if (null == t || "string" != typeof t) return t;
                var n = /^\d+\.\d+/,
                e = "";
                return n.test(t) && (e = t.match(n), e.length) ? e[0] : t
            }
            function i(t) {
                if (t.common && t.cusData && t.type) {
                    var n = (t.common, t.cusData),
                    e = {
                        pv: 1,
                        jserr: 1,
                        event: 2,
                        custom_err: 1,
                        perf: 2
                    },
                    r = function(t) {
                        var n = {
                            pv: 0,
                            jserr: 0,
                            custom_err: 0,
                            perf: 1
                        };
                        return "event" === t.type ? t.cusData.evt && t.cusData.evt.match(/^c_\w*/) ? 0 : 1 : n[t.type]
                    },
                    o = window.location.protocol;
                    "http:" !== o && (o = "https:");
                    var i = o + "//m.baidu.com/tcbox?service=bdbox&action=pblog&",
                    s = {
                        type: r(t),
                        timestamp: +Date.now(),
                        id: 10092,
                        content: {
                            from: "whole",
                            type: "0",
                            value: "0",
                            page: n.id,
                            source: n.name
                        }
                    };
                    if (n.errCode && (s.content.type = "-1", s.content.value = n.errCode), r(t)) if ("event" === t.type) s.content.duration = parseInt(n.msg) / 1e3;
                    else {
                        var a = [],
                        u = {
                            id: "",
                            d: "",
                            info: {}
                        };
                        for (var c in n) u.id = c,
                        u.d = n[c],
                        a.push(u),
                        u = {
                            id: "",
                            d: "",
                            info: {}
                        };
                        s.content.part = a
                    }
                    var f = {
                        appid: 1,
                        dataid: 2,
                        cateid: 99,
                        actionid: e[t.type],
                        actiontype: "0",
                        actiondata: s
                    };
                    i += "data=" + encodeURIComponent(JSON.stringify(f)),
                    setTimeout(function() {
                        var t = document.createElement("img");
                        t.onload = t.onerror = t.onabort = function() {
                            t = null
                        },
                        t.src = i
                    })
                }
            }
            var s = navigator.userAgent;
            t.exports = window.log = function(t, n, s) {
                var a = {
                    hybridVersion: window.hybridVersion || "0",
                    platform: e() || "other",
                    boxV: o() || "0",
                    boxVersion: r() || "0",
                    page_id: "301_" + t,
                    network: "",
                    cuid: ""
                },
                u = {
                    evt: "c_" + n,
                    msg: "jssdk_" + n,
                    name: n,
                    id: t
                };
                s && (u.errCode = s.errCode + ""),
                i({
                    common: a,
                    cusData: u,
                    type: "event"
                })
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) { (function(r, o) {
            var i;
            void 0 !== (i = function(n) {
                /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0
 */
                "use strict";
                function e(t) {
                    return "function" == typeof t || "object" === (void 0 === t ? "undefined": $(t)) && null !== t
                }
                function i(t) {
                    return "function" == typeof t
                }
                function s(t) {
                    q = t
                }
                function a(t) {
                    Q = t
                }
                function u() {
                    return void 0 !== H ?
                    function() {
                        H(f)
                    }: c()
                }
                function c() {
                    var t = setTimeout;
                    return function() {
                        return t(f, 1)
                    }
                }
                function f() {
                    for (var t = 0; t < X; t += 2) { (0, tt[t])(tt[t + 1]),
                        tt[t] = void 0,
                        tt[t + 1] = void 0
                    }
                    X = 0
                }
                function l(t, n) {
                    var e = arguments,
                    r = this,
                    o = new this.constructor(p);
                    void 0 === o[et] && E(o);
                    var i = r._state;
                    return i ?
                    function() {
                        var t = e[i - 1];
                        Q(function() {
                            return I(i, o, t, r._result)
                        })
                    } () : O(r, o, t, n),
                    o
                }
                function d(t) {
                    var n = this;
                    if (t && "object" === (void 0 === t ? "undefined": $(t)) && t.constructor === n) return t;
                    var e = new n(p);
                    return x(e, t),
                    e
                }
                function p() {}
                function v() {
                    return new TypeError("You cannot resolve a promise with itself")
                }
                function h() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }
                function y(t) {
                    try {
                        return t.then
                    } catch(t) {
                        return st.error = t,
                        st
                    }
                }
                function m(t, n, e, r) {
                    try {
                        t.call(n, e, r)
                    } catch(t) {
                        return t
                    }
                }
                function b(t, n, e) {
                    Q(function(t) {
                        var r = !1,
                        o = m(e, n,
                        function(e) {
                            r || (r = !0, n !== e ? x(t, e) : S(t, e))
                        },
                        function(n) {
                            r || (r = !0, C(t, n))
                        },
                        "Settle: " + (t._label || " unknown promise")); ! r && o && (r = !0, C(t, o))
                    },
                    t)
                }
                function g(t, n) {
                    n._state === ot ? S(t, n._result) : n._state === it ? C(t, n._result) : O(n, void 0,
                    function(n) {
                        return x(t, n)
                    },
                    function(n) {
                        return C(t, n)
                    })
                }
                function w(t, n, e) {
                    n.constructor === t.constructor && e === l && n.constructor.resolve === d ? g(t, n) : e === st ? (C(t, st.error), st.error = null) : void 0 === e ? S(t, n) : i(e) ? b(t, n, e) : S(t, n)
                }
                function x(t, n) {
                    t === n ? C(t, v()) : e(n) ? w(t, n, y(n)) : S(t, n)
                }
                function _(t) {
                    t._onerror && t._onerror(t._result),
                    A(t)
                }
                function S(t, n) {
                    t._state === rt && (t._result = n, t._state = ot, 0 !== t._subscribers.length && Q(A, t))
                }
                function C(t, n) {
                    t._state === rt && (t._state = it, t._result = n, Q(_, t))
                }
                function O(t, n, e, r) {
                    var o = t._subscribers,
                    i = o.length;
                    t._onerror = null,
                    o[i] = n,
                    o[i + ot] = e,
                    o[i + it] = r,
                    0 === i && t._state && Q(A, t)
                }
                function A(t) {
                    var n = t._subscribers,
                    e = t._state;
                    if (0 !== n.length) {
                        for (var r = void 0,
                        o = void 0,
                        i = t._result,
                        s = 0; s < n.length; s += 3) r = n[s],
                        o = n[s + e],
                        r ? I(e, r, o, i) : o(i);
                        t._subscribers.length = 0
                    }
                }
                function B() {
                    this.error = null
                }
                function j(t, n) {
                    try {
                        return t(n)
                    } catch(t) {
                        return at.error = t,
                        at
                    }
                }
                function I(t, n, e, r) {
                    var o = i(e),
                    s = void 0,
                    a = void 0,
                    u = void 0,
                    c = void 0;
                    if (o) {
                        if (s = j(e, r), s === at ? (c = !0, a = s.error, s.error = null) : u = !0, n === s) return void C(n, h())
                    } else s = r,
                    u = !0;
                    n._state !== rt || (o && u ? x(n, s) : c ? C(n, a) : t === ot ? S(n, s) : t === it && C(n, s))
                }
                function T(t, n) {
                    try {
                        n(function(n) {
                            x(t, n)
                        },
                        function(n) {
                            C(t, n)
                        })
                    } catch(n) {
                        C(t, n)
                    }
                }
                function N() {
                    return ut++
                }
                function E(t) {
                    t[et] = ut++,
                    t._state = void 0,
                    t._result = void 0,
                    t._subscribers = []
                }
                function k(t, n) {
                    this._instanceConstructor = t,
                    this.promise = new t(p),
                    this.promise[et] || E(this.promise),
                    W(n) ? (this._input = n, this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : C(this.promise, M())
                }
                function M() {
                    return new Error("Array Methods must be provided an Array")
                }
                function P(t) {
                    return new k(this, t).promise
                }
                function D(t) {
                    var n = this;
                    return new n(W(t) ?
                    function(e, r) {
                        for (var o = t.length,
                        i = 0; i < o; i++) n.resolve(t[i]).then(e, r)
                    }: function(t, n) {
                        return n(new TypeError("You must pass an array to race."))
                    })
                }
                function J(t) {
                    var n = this,
                    e = new n(p);
                    return C(e, t),
                    e
                }
                function R() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }
                function U() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }
                function L(t) {
                    this[et] = N(),
                    this._result = this._state = void 0,
                    this._subscribers = [],
                    p !== t && ("function" != typeof t && R(), this instanceof L ? T(this, t) : U())
                }
                function F() {
                    var t = void 0;
                    if (void 0 !== o) t = o;
                    else if ("undefined" != typeof self) t = self;
                    else try {
                        t = Function("return this")()
                    } catch(t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var n = t.Promise;
                    if (n) {
                        var e = null;
                        try {
                            e = Object.prototype.toString.call(n.resolve())
                        } catch(t) {}
                        if ("[object Promise]" === e && !n.cast) return
                    }
                    t.Promise = L
                }
                var $ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(t) {
                    return typeof t
                }: function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
                },
                V = void 0;
                V = Array.isArray ? Array.isArray: function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var W = V,
                X = 0,
                H = void 0,
                q = void 0,
                Q = function(t, n) {
                    tt[X] = t,
                    tt[X + 1] = n,
                    2 === (X += 2) && (q ? q(f) : nt())
                },
                Y = "undefined" != typeof window ? window: void 0,
                K = Y || {},
                z = K.MutationObserver || K.WebKitMutationObserver,
                G = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
                Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                tt = new Array(1e3),
                nt = void 0;
                nt = G ?
                function() {
                    return function() {
                        return r.nextTick(f)
                    }
                } () : z ?
                function() {
                    var t = 0,
                    n = new z(f),
                    e = document.createTextNode("");
                    return n.observe(e, {
                        characterData: !0
                    }),
                    function() {
                        e.data = t = ++t % 2
                    }
                } () : Z ?
                function() {
                    var t = new MessageChannel;
                    return t.port1.onmessage = f,
                    function() {
                        return t.port2.postMessage(0)
                    }
                } () : void 0 === Y ?
                function() {
                    try {
                        return u()
                    } catch(t) {
                        return c()
                    }
                } () : c();
                var et = Math.random().toString(36).substring(16),
                rt = void 0,
                ot = 1,
                it = 2,
                st = new B,
                at = new B,
                ut = 0;
                if (k.prototype._enumerate = function() {
                    for (var t = this.length,
                    n = this._input,
                    e = 0; this._state === rt && e < t; e++) this._eachEntry(n[e], e)
                },
                k.prototype._eachEntry = function(t, n) {
                    var e = this._instanceConstructor,
                    r = e.resolve;
                    if (r === d) {
                        var o = y(t);
                        if (o === l && t._state !== rt) this._settledAt(t._state, n, t._result);
                        else if ("function" != typeof o) this._remaining--,
                        this._result[n] = t;
                        else if (e === L) {
                            var i = new e(p);
                            w(i, t, o),
                            this._willSettleAt(i, n)
                        } else this._willSettleAt(new e(function(n) {
                            return n(t)
                        }), n)
                    } else this._willSettleAt(r(t), n)
                },
                k.prototype._settledAt = function(t, n, e) {
                    var r = this.promise;
                    r._state === rt && (this._remaining--, t === it ? C(r, e) : this._result[n] = e),
                    0 === this._remaining && S(r, this._result)
                },
                k.prototype._willSettleAt = function(t, n) {
                    var e = this;
                    O(t, void 0,
                    function(t) {
                        return e._settledAt(ot, n, t)
                    },
                    function(t) {
                        return e._settledAt(it, n, t)
                    })
                },
                L.all = P, L.race = D, L.resolve = d, L.reject = J, L._setScheduler = s, L._setAsap = a, L._asap = Q, L.prototype = {
                    constructor: L,
                    then: l,
                    catch: function(t) {
                        return this.then(null, t)
                    }
                },
                "function" != typeof L.prototype.
                finally) {
                    var ct = "function" == typeof Symbol && "symbol" === $(Symbol.iterator) ?
                    function(t) {
                        return void 0 === t ? "undefined": $(t)
                    }: function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": void 0 === t ? "undefined": $(t)
                    },
                    ft = function(t, n) {
                        if (!t || "object" !== (void 0 === t ? "undefined": ct(t)) && "function" != typeof t) throw new TypeError("Assertion failed: Type(O) is not Object");
                        var e = t.constructor;
                        if (void 0 === e) return n;
                        if (!e || "object" !== (void 0 === e ? "undefined": ct(e)) && "function" != typeof e) throw new TypeError("O.constructor is not an Object");
                        var r = "function" == typeof Symbol && "symbol" === ct(Symbol.species) ? e[Symbol.species] : void 0;
                        if (null == r) return n;
                        if ("function" == typeof r && r.prototype) return r;
                        throw new TypeError("no constructor found")
                    },
                    lt = {
                        finally: function(t) {
                            var n, e = "function" == typeof t ? t: function() {},
                            r = L.prototype.then.call(this,
                            function(t) {
                                return new n(function(t) {
                                    return t(e())
                                }).then(function() {
                                    return t
                                })
                            },
                            function(t) {
                                return new n(function(t) {
                                    return t(e())
                                }).then(function() {
                                    throw t
                                })
                            });
                            return n = ft(this, L),
                            r
                        }
                    };
                    Object.defineProperty(L.prototype, "finally", {
                        configurable: !0,
                        writable: !0,
                        value: lt.
                        finally
                    })
                }
                L.polyfill = F,
                L.Promise = L,
                t.exports = L
            }.call(n, e, n, t)) && (t.exports = i)
        }).call(n, e(26), e(27))
    },
    function(t, n, e) {
        "use strict";
        function r() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(t) {
            if (l === setTimeout) return setTimeout(t, 0);
            if ((l === r || !l) && setTimeout) return l = setTimeout,
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
        function s(t) {
            if (d === clearTimeout) return clearTimeout(t);
            if ((d === o || !d) && clearTimeout) return d = clearTimeout,
            clearTimeout(t);
            try {
                return d(t)
            } catch(n) {
                try {
                    return d.call(null, t)
                } catch(n) {
                    return d.call(this, t)
                }
            }
        }
        function a() {
            y && v && (y = !1, v.length ? h = v.concat(h) : m = -1, h.length && u())
        }
        function u() {
            if (!y) {
                var t = i(a);
                y = !0;
                for (var n = h.length; n;) {
                    for (v = h, h = []; ++m < n;) v && v[m].run();
                    m = -1,
                    n = h.length
                }
                v = null,
                y = !1,
                s(t)
            }
        }
        function c(t, n) {
            this.fun = t,
            this.array = n
        }
        function f() {}
        var l, d, p = t.exports = {}; !
        function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout: r
            } catch(t) {
                l = r
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout: o
            } catch(t) {
                d = o
            }
        } ();
        var v, h = [],
        y = !1,
        m = -1;
        p.nextTick = function(t) {
            var n = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
            h.push(new c(t, n)),
            1 !== h.length || y || i(u)
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
        p.on = f,
        p.addListener = f,
        p.once = f,
        p.off = f,
        p.removeListener = f,
        p.removeAllListeners = f,
        p.emit = f,
        p.prependListener = f,
        p.prependOnceListener = f,
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
    function(t, n, e) {
        "use strict";
        var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(t) {
            return typeof t
        }: function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
        };
        r = function() {
            return this
        } ();
        try {
            r = r || Function("return this")() || (0, eval)("this")
        } catch(t) {
            "object" === ("undefined" == typeof window ? "undefined": o(window)) && (r = window)
        }
        t.exports = r
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t, n) {
                var e = "",
                r = "";
                return "toggle" === n ? (e = t.name, r = t.type) : (e = t.name.split("-")[1], r = t.name.split("-")[0]),
                [r, n + e.substring(0, 1).toUpperCase() + e.substring(1)].join("/")
            }
            var o = e(1);
            t.exports = {
                get: function(t) {
                    var n = r(t, "get");
                    return o(n, t.data)
                },
                set: function(t) {
                    var n = r(t, "set");
                    return o(n, t.data)
                },
                toggle: function(t) {
                    var n = r(t, "toggle"),
                    e = 0;
                    t.status && (e = (parseInt(t.status, 10) + 1) % 2);
                    var i = t.data || {};
                    return i.status = e + "",
                    o(n, i)
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(1);
            t.exports = {
                cuid: function() {
                    return r("utils/getCUID", {})
                },
                info: function(t) {
                    var n = {},
                    e = [],
                    o = "",
                    i = "";
                    switch ("string" == typeof t ? (i = t, e.push(t)) : (i = t[0], e = t), i) {
                    case "netInfo":
                        o = "utils/getDeviceInfo",
                        n = {
                            keys: e
                        };
                        break;
                    case "screenInfo":
                        o = "utils/getScreenInfo",
                        n = {
                            keys: e
                        };
                        break;
                    case "platformInfo":
                        o = "utils/getPlatformInfo"
                    }
                    return r(o, n)
                },
                location: function(t) {
                    return r("utils/location", {
                        coor_type: t
                    })
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t, n) {
                var e = "datachannel/" + n,
                r = t.data || {};
                return r.name = t.name,
                o(e, r)
            }
            var o = e(1);
            t.exports = {
                fire: function(t) {
                    return r(t, "sendbroadcast")
                },
                on: function(t) {
                    return r(t, "register")
                },
                off: function(t) {
                    return r(t, "unregister")
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(1),
            o = {
                durationDisappear: "ubc/duration/disappear",
                durationAppear: "ubc/duration/appear",
                reliableLog: "utils/onReliableLog",
                performanceFlowEvent: "utils/onPerformanceFlowEvent",
                ubcReport: "utils/ubcReport",
                feedReport: "feed/report",
                channelStatistics: "channelStatistics/action"
            };
            t.exports = function(t) {
                var n = o[t.name] || t.name;
                return r(n, t.data)
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t, n) {
                var e = [n, t.type].join("/");
                return o(e, t.data)
            }
            var o = e(1);
            t.exports = {
                video: function(t) {
                    return r(t, "video")
                },
                tts: function(t) {
                    return r(t, "tts")
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(1);
            t.exports = {
                download: function(t) {
                    var n = t.name.split("-"),
                    e = n[0],
                    o = n[1] || "";
                    return o = [e, o].join("/"),
                    r(o, t.data)
                },
                prefetch: function(t) {
                    var n = [t.name, "prefetch"].join("/");
                    return r(n, t.data)
                },
                request: function(t) {
                    return r("net/request", t)
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t, n) {
                var e = t.name.split("-"),
                r = "";
                if (e[1]) {
                    var o = e[1].substring(0, 1).toUpperCase(),
                    i = e[1].substring(1),
                    s = n + o + i;
                    r = [e[0], s].join("/")
                } else r = [t.name, n].join("/");
                return r
            }
            var o = e(1);
            t.exports = {
                open: function(t) {
                    var n = t.data || {},
                    e = r(t, "open");
                    return t.style && (n.style = t.style),
                    o(e, n)
                },
                close: function(t) {
                    var n = r(t, "close");
                    return o(n, {})
                },
                update: function(t) {
                    var n = r(t, "update");
                    return o(n, t.data)
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            var r = e(1);
            t.exports = {
                open: function(t) {
                    var n = t.name,
                    e = t.type || "",
                    o = t.data,
                    i = [n, "open"].join("/");
                    return t.style && (o.style = t.style),
                    "easybrowse" !== n && "browser" !== n || (o.newbrowser = t.newbrowser || t.data.newbrowser || "0", o.type = e),
                    "hybrid" === e && (i = [n, e].join("/")),
                    r(i, o)
                },
                close: function(t) {
                    var n = [t.name, "close"].join("/");
                    return r(n, {})
                },
                update: function(t) {
                    var n = [t.name, "update"].join("/");
                    return r(n, t.data)
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        "use strict";
        var r = (e(0), e(37), e(2));
        r.versionCompare,
        r.boxVersion;
        t.exports = {
            "utils/openShareBox": {
                androidlite: {
                    versionRange: ["2.2.2"]
                },
                androidinfo: {
                    versionRange: ["1.0"]
                },
                iosinfo: {
                    versionRange: ["1.1"]
                },
                ios: {
                    hasCB: !1,
                    versionRange: ["5.3.5"],
                    filter: function(t, n, e) {
                        return {
                            module: "callShare",
                            action: "",
                            paramName: "options",
                            extData: {
                                minver: "5.3.5.0"
                            }
                        }
                    }
                },
                android: {
                    versionRange: ["5.3.5"],
                    hasCB: !1,
                    filter: function(t, n, e) {
                        var r = {
                            imageUrl: e.iconUrl,
                            title: e.title,
                            content: e.content,
                            linkUrl: e.linkUrl,
                            mediaType: e.mediaType,
                            channel: e.pannel,
                            shareSuccessCB: e.shareSuccessCB || "console.log",
                            shareErrorCB: e.shareErrorCB || "console.log"
                        };
                        return "audio" === e.type ? r.type = "2": "image" === e.type ? r.type = "3": "video" === e.type ? r.type = "4": r.type = "1",
                        {
                            module: "Bdbox_android_utils",
                            action: "callShare",
                            data: r
                        }
                    }
                }
            }
        }
    },
    function(t, n, e) {
        var r;
        void 0 !== (r = function(n) {
            "use strict";
            function r(t) {
                var n;
                return null == t ? n = String(t) : (n = Object.prototype.toString.call(t).toLowerCase(), n = n.substring(8, n.length - 1)),
                n
            }
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            };
            e(0);
            t.exports = function(t, n, e) {
                if ("object" === (void 0 === t ? "undefined": o(t))) {
                    var i, s, a = r(t);
                    if (e = e || t, "array" === a || "arguments" === a || "nodelist" === a) {
                        for (i = 0, s = t.length; i < s; i++) if (!1 === n.call(e, t[i], i, t)) return
                    } else for (i in t) if (t.hasOwnProperty(i) && !1 === n.call(e, t[i], i, t)) return
                }
            }
        }.call(n, e, n, t)) && (t.exports = r)
    },
    function(t, n, e) {
        "use strict";
        t.exports = {
            "account/openLoginDialog": {
                v: 26,
                versionRange: ["10.7"],
                filter: function(t) {
                    return t.third_login && (t.showThirdLogin = t.third_login, delete t.third_login),
                    t.login_type && (t.loginType = t.login_type, delete t.login_type),
                    t.func && (t.loginCallback = t.func, delete t.func),
                    t.tpl && (t.loginSource = t.tpl, delete t.tpl),
                    {
                        module: "account",
                        action: "login",
                        data: {
                            params: encodeURIComponent(JSON.stringify(t))
                        }
                    }
                }
            },
            "account/openChat": {
                v: 9,
                hasCB: !0,
                versionRange: ["9.0"],
                filter: function() {
                    return {
                        action: "chat",
                        module: "account/profile"
                    }
                }
            }
        }
    }])
});

