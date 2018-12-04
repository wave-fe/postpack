cambrianChunkJsonp([0], [function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isSearchCraft = t.boxVersionCompare = t.boxVersion = t.isBox = t.isAndroid = t.isIos = void 0;
    var r = n(57),
    o = n(55),
    i = n(53),
    a = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (i),
    s = n(11);
    t.isIos = (0, a.
default)(function(e) {
        e.success({
            result:
            (0, r.isIOS)(),
            status: 0,
            msg: "isIos:ok"
        })
    },
    {
        name: "isIos"
    }),
    t.isAndroid = (0, a.
default)(function(e) {
        e.success({
            result:
            (0, r.isAndroid)(),
            status: 0,
            msg: "isAndroid:ok"
        })
    },
    {
        name: "isAndroid"
    }),
    t.isBox = (0, a.
default)(function(e) {
        e.success({
            result:
            (0, o.isBox)(),
            status: 0,
            msg: "isBox:ok"
        })
    },
    {
        name: "isBox"
    }),
    t.boxVersion = (0, a.
default)(function(e) {
        e.success({
            result:
            o.boxVersion,
            status: 0,
            msg: "boxVersion:ok"
        })
    },
    {
        name: "boxVersion"
    }),
    t.boxVersionCompare = (0, a.
default)(function(e) {
        var t = e.data,
        n = t.version1,
        r = t.version2;
        e.success({
            result: (0, s.versionCompare)(n, r),
            status: 0,
            msg: "boxVersionCompare:ok"
        })
    },
    {
        name: "boxVersionCompare"
    }),
    t.isSearchCraft = (0, a.
default)(function(e) {
        e.success({
            result:
            (0, o.isSearchCraft)(),
            status: 0,
            msg: "isSearchCraft:ok"
        })
    },
    {
        name: "isSearchCraft"
    })
},
function(e, t, n) {
    "use strict";
    function r() {}
    function o(e, t) {
        var n, o, i, a, s = L;
        for (a = arguments.length; a-->2;) T.push(arguments[a]);
        for (t && null != t.children && (T.length || T.push(t.children), delete t.children); T.length;) if ((o = T.pop()) && void 0 !== o.pop) for (a = o.length; a--;) T.push(o[a]);
        else "boolean" == typeof o && (o = null),
        (i = "function" != typeof e) && (null == o ? o = "": "number" == typeof o ? o = String(o) : "string" != typeof o && (i = !1)),
        i && n ? s[s.length - 1] += o: s === L ? s = [o] : s.push(o),
        n = i;
        var u = new r;
        return u.nodeName = e,
        u.children = s,
        u.attributes = null == t ? void 0 : t,
        u.key = null == t ? void 0 : t.key,
        void 0 !== M.vnode && M.vnode(u),
        u
    }
    function i(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    function a(e, t) {
        return o(e.nodeName, i(i({},
        e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
    }
    function s(e) { ! e._dirty && (e._dirty = !0) && 1 == D.push(e) && (M.debounceRendering || P)(u)
    }
    function u() {
        var e, t = D;
        for (D = []; e = t.pop();) e._dirty && I(e)
    }
    function c(e, t, n) {
        return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText: "string" == typeof t.nodeName ? !e._componentConstructor && l(e, t.nodeName) : n || e._componentConstructor === t.nodeName
    }
    function l(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function f(e) {
        var t = i({},
        e.attributes);
        t.children = e.children;
        var n = e.nodeName.defaultProps;
        if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r]);
        return t
    }
    function d(e, t) {
        var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
        return n.normalizedNodeName = e,
        n
    }
    function p(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    function h(e, t, n, r, o) {
        if ("className" === t && (t = "class"), "key" === t);
        else if ("ref" === t) n && n(null),
        r && r(e);
        else if ("class" !== t || o) if ("style" === t) {
            if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r && "object" == typeof r) {
                if ("string" != typeof n) for (var i in n) i in r || (e.style[i] = "");
                for (var i in r) e.style[i] = "number" == typeof r[i] && !1 === B.test(i) ? r[i] + "px": r[i]
            }
        } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
        else if ("o" == t[0] && "n" == t[1]) {
            var a = t !== (t = t.replace(/Capture$/, ""));
            t = t.toLowerCase().substring(2),
            r ? n || e.addEventListener(t, b, a) : e.removeEventListener(t, b, a),
            (e._listeners || (e._listeners = {}))[t] = r
        } else if ("list" !== t && "type" !== t && !o && t in e) m(e, t, null == r ? "": r),
        null != r && !1 !== r || e.removeAttribute(t);
        else {
            var s = o && t !== (t = t.replace(/^xlink\:?/, ""));
            null == r || !1 === r ? s ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (s ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
        } else e.className = r || ""
    }
    function m(e, t, n) {
        try {
            e[t] = n
        } catch(e) {}
    }
    function b(e) {
        return this._listeners[e.type](M.event && M.event(e) || e)
    }
    function _() {
        for (var e; e = U.pop();) M.afterMount && M.afterMount(e),
        e.componentDidMount && e.componentDidMount()
    }
    function v(e, t, n, r, o, i) {
        H++||(G = null != o && void 0 !== o.ownerSVGElement, F = null != e && !("__preactattr_" in e));
        var a = g(e, t, n, r, i);
        return o && a.parentNode !== o && o.appendChild(a),
        --H || (F = !1, i || _()),
        a
    }
    function g(e, t, n, r, o) {
        var i = e,
        a = G;
        if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), w(e, !0))),
        i.__preactattr_ = !0,
        i;
        var s = t.nodeName;
        if ("function" == typeof s) return C(e, t, n, r);
        if (G = "svg" === s || "foreignObject" !== s && G, s = String(s), (!e || !l(e, s)) && (i = d(s, G), e)) {
            for (; e.firstChild;) i.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(i, e),
            w(e, !0)
        }
        var u = i.firstChild,
        c = i.__preactattr_,
        f = t.children;
        if (null == c) {
            c = i.__preactattr_ = {};
            for (var p = i.attributes,
            h = p.length; h--;) c[p[h].name] = p[h].value
        }
        return ! F && f && 1 === f.length && "string" == typeof f[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != f[0] && (u.nodeValue = f[0]) : (f && f.length || null != u) && y(i, f, n, r, F || null != c.dangerouslySetInnerHTML),
        x(i, t.attributes, c),
        G = a,
        i
    }
    function y(e, t, n, r, o) {
        var i, a, s, u, l, f = e.childNodes,
        d = [],
        h = {},
        m = 0,
        b = 0,
        _ = f.length,
        v = 0,
        y = t ? t.length: 0;
        if (0 !== _) for (var O = 0; O < _; O++) {
            var x = f[O],
            R = x.__preactattr_,
            S = y && R ? x._component ? x._component.__key: R.key: null;
            null != S ? (m++, h[S] = x) : (R || (void 0 !== x.splitText ? !o || x.nodeValue.trim() : o)) && (d[v++] = x)
        }
        if (0 !== y) for (var O = 0; O < y; O++) {
            u = t[O],
            l = null;
            var S = u.key;
            if (null != S) m && void 0 !== h[S] && (l = h[S], h[S] = void 0, m--);
            else if (!l && b < v) for (i = b; i < v; i++) if (void 0 !== d[i] && c(a = d[i], u, o)) {
                l = a,
                d[i] = void 0,
                i === v - 1 && v--,
                i === b && b++;
                break
            }
            l = g(l, u, n, r),
            s = f[O],
            l && l !== e && l !== s && (null == s ? e.appendChild(l) : l === s.nextSibling ? p(s) : e.insertBefore(l, s))
        }
        if (m) for (var O in h) void 0 !== h[O] && w(h[O], !1);
        for (; b <= v;) void 0 !== (l = d[v--]) && w(l, !1)
    }
    function w(e, t) {
        var n = e._component;
        n ? j(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), O(e))
    }
    function O(e) {
        for (e = e.lastChild; e;) {
            var t = e.previousSibling;
            w(e, !0),
            e = t
        }
    }
    function x(e, t, n) {
        var r;
        for (r in n) t && null != t[r] || null == n[r] || h(e, r, n[r], n[r] = void 0, G);
        for (r in t)"children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || h(e, r, n[r], n[r] = t[r], G)
    }
    function R(e) {
        var t = e.constructor.name; (z[t] || (z[t] = [])).push(e)
    }
    function S(e, t, n) {
        var r, o = z[e.name];
        if (e.prototype && e.prototype.render ? (r = new e(t, n), A.call(r, t, n)) : (r = new A(t, n), r.constructor = e, r.render = E), o) for (var i = o.length; i--;) if (o[i].constructor === e) {
            r.nextBase = o[i].nextBase,
            o.splice(i, 1);
            break
        }
        return r
    }
    function E(e, t, n) {
        return this.constructor(e, n)
    }
    function k(e, t, n, r, o) {
        e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key, !e.base || o ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === M.syncComponentUpdates && e.base ? s(e) : I(e, 1, o)), e.__ref && e.__ref(e))
    }
    function I(e, t, n, r) {
        if (!e._disable) {
            var o, a, s, u = e.props,
            c = e.state,
            l = e.context,
            d = e.prevProps || u,
            p = e.prevState || c,
            h = e.prevContext || l,
            m = e.base,
            b = e.nextBase,
            g = m || b,
            y = e._component,
            O = !1;
            if (m && (e.props = d, e.state = p, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(u, c, l) ? O = !0 : e.componentWillUpdate && e.componentWillUpdate(u, c, l), e.props = u, e.state = c, e.context = l), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !O) {
                o = e.render(u, c, l),
                e.getChildContext && (l = i(i({},
                l), e.getChildContext()));
                var x, R, E = o && o.nodeName;
                if ("function" == typeof E) {
                    var C = f(o);
                    a = y,
                    a && a.constructor === E && C.key == a.__key ? k(a, C, 1, l, !1) : (x = a, e._component = a = S(E, C, l), a.nextBase = a.nextBase || b, a._parentComponent = e, k(a, C, 0, l, !1), I(a, 1, n, !0)),
                    R = a.base
                } else s = g,
                x = y,
                x && (s = e._component = null),
                (g || 1 === t) && (s && (s._component = null), R = v(s, o, l, n || !m, g && g.parentNode, !0));
                if (g && R !== g && a !== y) {
                    var A = g.parentNode;
                    A && R !== A && (A.replaceChild(R, g), x || (g._component = null, w(g, !1)))
                }
                if (x && j(x), e.base = R, R && !r) {
                    for (var N = e,
                    T = e; T = T._parentComponent;)(N = T).base = R;
                    R._component = N,
                    R._componentConstructor = N.constructor
                }
            }
            if (!m || n ? U.unshift(e) : O || (e.componentDidUpdate && e.componentDidUpdate(d, p, h), M.afterUpdate && M.afterUpdate(e)), null != e._renderCallbacks) for (; e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
            H || r || _()
        }
    }
    function C(e, t, n, r) {
        for (var o = e && e._component,
        i = o,
        a = e,
        s = o && e._componentConstructor === t.nodeName,
        u = s,
        c = f(t); o && !u && (o = o._parentComponent);) u = o.constructor === t.nodeName;
        return o && u && (!r || o._component) ? (k(o, c, 3, n, r), e = o.base) : (i && !s && (j(i), e = a = null), o = S(t.nodeName, c, n), e && !o.nextBase && (o.nextBase = e, a = null), k(o, c, 1, n, r), e = o.base, a && e !== a && (a._component = null, w(a, !1))),
        e
    }
    function j(e) {
        M.beforeUnmount && M.beforeUnmount(e);
        var t = e.base;
        e._disable = !0,
        e.componentWillUnmount && e.componentWillUnmount(),
        e.base = null;
        var n = e._component;
        n ? j(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, p(t), R(e), O(t)),
        e.__ref && e.__ref(null)
    }
    function A(e, t) {
        this._dirty = !0,
        this.context = t,
        this.props = e,
        this.state = this.state || {}
    }
    function N(e, t, n) {
        return v(n, e, {},
        !1, t, !1)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    n.d(t, "h",
    function() {
        return o
    }),
    n.d(t, "createElement",
    function() {
        return o
    }),
    n.d(t, "cloneElement",
    function() {
        return a
    }),
    n.d(t, "Component",
    function() {
        return A
    }),
    n.d(t, "render",
    function() {
        return N
    }),
    n.d(t, "rerender",
    function() {
        return u
    }),
    n.d(t, "options",
    function() {
        return M
    });
    var M = {},
    T = [],
    L = [],
    P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
    B = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
    D = [],
    U = [],
    H = 0,
    G = !1,
    F = !1,
    z = {};
    i(A.prototype, {
        setState: function(e, t) {
            var n = this.state;
            this.prevState || (this.prevState = i({},
            n)),
            i(n, "function" == typeof e ? e(n, this.props) : e),
            t && (this._renderCallbacks = this._renderCallbacks || []).push(t),
            s(this)
        },
        forceUpdate: function(e) {
            e && (this._renderCallbacks = this._renderCallbacks || []).push(e),
            I(this, 2)
        },
        render: function() {}
    });
    var J = {
        h: o,
        createElement: o,
        cloneElement: a,
        Component: A,
        render: N,
        rerender: u,
        options: M
    };
    t.
default = J
},
, , ,
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t, n, r) {
        var o = "add" === t ? 1 : 0,
        i = (0, m.getInsData)(n);
        String(e) === String(i.val.data.office_info.appid) && (i.val.data.subscribe = o, d.setByAttrKey(i.id, "data", i.val.data)),
        r({
            msg: "follow:ok",
            status: 0,
            result: o
        })
    }
    function i(e, t, n, r, i, a, s) {
        var u = {
            type: "dusite",
            op_type: e,
            sfrom: "dusite",
            source: i,
            third_id: t,
            store: s
        }; (0, l.
    default)({
            url:
            I,
            data: u,
            type: "jsonp"
        }).then(function(i) {
            i.errno ? r({
                msg: i.errmsg || h.
            default.ERROR_FOLLOW_FAILED_MSG,
                status: h.
            default.ERROR_FOLLOW_FAILED
            }):
            o(t, e, a, n)
        }).fail(function(e) {
            r({
                msg: e.errmsg || h.
            default.ERROR_FOLLOW_FAILED_MSG,
                status: h.
            default.ERROR_FOLLOW_FAILED
            })
        })
    }
    function a(e) {
        var t = e.opType,
        n = void 0 === t ? "": t,
        r = e.isSub2Box,
        a = void 0 === r || r,
        s = e.appid,
        u = void 0 === s ? "": s,
        c = e.success,
        f = void 0 === c ? C: c,
        d = e.fail,
        p = void 0 === d ? C: d,
        m = e.context,
        b = e.source,
        v = void 0 === b ? "dusite_subservice": b,
        x = e.store,
        S = void 0 === x ? "uid": x,
        E = (0, R.
    default)(),
        I = (0, y.canUseSCFollow)(),
        j = function() {
            "cancel" !== n && a ? a && ((0, l.
        default)({
                url:
                k,
                type: "jsonp"
            }).then(function(e) {
                e.errno ? p({
                    msg: e.errmsg || h.
                default.ERROR_FOLLOW_FAILED_MSG,
                    status: h.
                default.ERROR_FOLLOW_FAILED
                }):
                e.data.isLogin ? i(n, u, f, p, v, m, S) : (p({
                    msg: e.errmsg || h.
                default.ERROR_FOLLOW_LOGIN_MSG,
                    status: h.
                default.ERROR_FOLLOW_LOGIN
                }), (0, _.isBox)() && (0, w.login)({
                    fail: function() {}
                }))
            }).fail(function(e) {
                p({
                    msg: e.errmsg || h.
                default.ERROR_FOLLOW_FAILED_MSG,
                    status: h.
                default.ERROR_FOLLOW_FAILED
                })
            }), (0, _.isBox)() || (0, g.
        default)(E)):
            (0, l.
        default)({
                url:
                k,
                type: "jsonp"
            }).then(function(e) {
                e.errno ? p({
                    msg: e.errmsg || h.
                default.ERROR_FOLLOW_FAILED_MSG,
                    status: h.
                default.ERROR_FOLLOW_FAILED
                }):
                e.data.isLogin ? i(n, u, f, p, v, m, S) : (p({
                    msg: e.errmsg || h.
                default.ERROR_FOLLOW_LOGIN_MSG,
                    status: h.
                default.ERROR_FOLLOW_LOGIN
                }), (0, w.login)({
                    fail: function() {}
                }))
            }).fail(function(e) {
                p({
                    msg: e.errmsg || h.
                default.ERROR_FOLLOW_FAILED_MSG,
                    status: h.
                default.ERROR_FOLLOW_FAILED
                })
            })
        };
        if (I) return void(0, O.query)(function(e) {
            e.result ? (0, y.follow)(n, u,
            function() {
                return o(u, n, m, f)
            },
            p) : (0, w.login)({
                success: function() { (0, y.follow)(n, u,
                    function() {
                        return o(u, n, m, f)
                    },
                    p)
                },
                fail: p
            })
        },
        p, !0);
        S.indexOf("cuid") < 0 ? j() : (0, _.isBox)() ? i(n, u, f, p, v, m, S) : j()
    }
    function s(e, t) {
        var n = e.data,
        r = n.isSub2Box,
        o = void 0 === r || r,
        i = n.opType,
        s = void 0 === i ? "": i,
        c = n.appid,
        l = void 0 === c ? "": c,
        f = n.source,
        d = void 0 === f ? "dusite_subservice": f,
        p = n.store,
        h = void 0 === p ? "uid": p,
        b = e.context,
        _ = e.success,
        v = e.fail;
        l || (l = (0, m.getAppid)(b)),
        u(t, l, (0, m.getInsData)(b)),
        a({
            opType: s,
            isSub2Box: o,
            appid: l,
            success: _,
            fail: v,
            context: b,
            source: d,
            store: h
        })
    }
    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "follow",
        t = arguments[1];
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        (0, b.abLog)({
            au: 0,
            ab: e,
            s_id: t,
            clk_type: 0,
            sub_source: "",
            source: location.host
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.wysFollow = t.follow = void 0,
    t.doFollow = a;
    var c = n(14),
    l = r(c),
    f = n(4),
    d = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.
    default = e,
        t
    } (f),
    p = n(52),
    h = r(p),
    m = n(11),
    b = n(2),
    _ = n(55),
    v = n(110),
    g = r(v),
    y = n(118),
    w = n(23),
    O = n(21),
    x = n(108),
    R = r(x),
    S = n(53),
    E = r(S),
    k = "https://ext.baidu.com/api/subscribe/v1/relation/status",
    I = "https://ext.baidu.com/api/subscribe/v1/relation/receive",
    C = function() {};
    t.follow = (0, E.
default)(function(e) {
        s(e, "follow")
    },
    {
        name: "follow"
    }),
    t.wysFollow = (0, E.
default)(function(e) {
        s(e, "wysFollow")
    },
    {
        name: "wysFollow"
    }),
    (0, v.loadOpenBox)()
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t, n) {
        var r = (0, s.isBaiduDomain)() ? 0 : 1; (0, u.abLog)({
            ab: n,
            au: r,
            s_id: e.val.data.office_info.appid,
            clk_type: 1,
            sub_source: "",
            source: location.host,
            ext: JSON.stringify(t)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.toast = t.share = t.login = t.invokeIM = void 0;
    var i = n(62),
    a = r(i),
    s = n(11),
    u = n(2),
    c = n(60),
    l = n(52),
    f = r(l),
    d = n(53),
    p = r(d),
    h = n(109),
    m = r(h),
    b = n(55),
    _ = n(124),
    v = r(_),
    g = function(e) {
        var t = e.success,
        n = e.fail,
        r = e.data,
        i = void 0 === r ? {}: r,
        a = (0, s.getInsData)(e.context),
        u = i.source,
        l = void 0 === u ? "sf-bar": u,
        d = i.appid,
        p = void 0 === d ? a.val.data.office_info.appid: d,
        h = "https://m.baidu.com/xiongzhanghao/im/a/impage?office_id=" + encodeURIComponent(p) + "&source=" + encodeURIComponent(l);
        if (!p) return o(a, {
            status: 1
        },
        "invokeIM"),
        void n({
            msg: f.
        default.ERROR_NEED_APP_ID_MSG,
            status: f.
        default.ERROR_NEED_APP_ID
        });
        o(a, {},
        "invokeIM"),
        t({
            msg: "invokeIM:ok",
            status: 0
        });
        var m = (0, c.getMIPEnv)();
        "mip1-sf" === m ? window.top.location.href = h: "mip2-sf" === m ? window.MIP.viewer.open(h, {
            isMipLink: !1,
            replace: !1
        }) : window.location.href = h
    },
    y = (0, m.
default)(function(e) {
        var t = e.success,
        n = e.fail,
        r = e.data,
        i = void 0 === r ? {}: r,
        u = (0, s.getInsData)(e.context),
        c = i.paid || u.val.data.office_info.pa_uid;
        if (!c) return o(u, {
            status: 1
        },
        "invokeIM"),
        void n({
            msg: f.
        default.ERROR_LACK_PAID_MSG,
            status: f.
        default.ERROR_LACK_PAID
        });
        o(u, {},
        "invokeIM");
        var l = i.title || u.val.data.office_info.name;
        a.
    default.ui.open({
            name:
            "account-chat",
            data: {
                type: "1",
                uk: "",
                paid: c,
                title: l,
                from: 1
            }
        }).then(function() {
            t({
                msg: "invokeIM:ok",
                status: 0
            })
        }).
        catch(function(e) {
            n({
                status: e.errCode,
                msg: e.errMsg || f.
            default.ERROR_IM_INVOKE_MSG
            })
        })
    }),
    w = (0, m.
default)(function(e) {
        a.
    default.ui.open({
            name:
            "account-loginDialog",
            data: {
                tpl: "cambrian",
                third_login: "1"
            }
        }).then(function(t) {
            e.success({
                msg: "login:ok",
                status: 0
            })
        }).
        catch(function(t) {
            e.fail({
                status: t.errCode,
                msg: t.errMsg || "login:failed"
            })
        })
    }),
    O = (0, m.
default)(function(e) {
        var t = e.data,
        n = t.title,
        r = void 0 === n ? "": n,
        i = t.content,
        u = void 0 === i ? "": i,
        c = t.iconUrl,
        l = void 0 === c ? "": c,
        d = t.linkUrl,
        p = void 0 === d ? "": d;
        o((0, s.getInsData)(e.context), {
            status: 0
        },
        "share"),
        a.
    default.ui.open({
            name:
            "utils-shareBox",
            data: {
                mediaType: "all",
                title: r,
                content: u,
                iconUrl: l,
                linkUrl: p,
                pannel: ["weixin_friend", "weixin_timeline", "sinaweibo", "qqfriend", "qqdenglu", "baiduhi", "baidu_friend", "copylink"],
                type: "url",
                shareSuccessCB: "shareSuccessCB",
                shareErrorCB: "shareErrorCB"
            }
        }).then(function(t) {
            e.success({
                msg: "share:ok",
                status: 0
            })
        }).
        catch(function(t) {
            e.fail({
                status: t.errCode,
                msg: t.errMsg || f.
            default.ERROR_IM_INVOKE_MSG
            })
        })
    }),
    x = (0, m.
default)(function(e) {
        var t = e.data,
        n = void 0 === t ? {}: t,
        r = e.success,
        o = void 0 === r ?
        function() {}: r,
        i = e.fail,
        u = void 0 === i ?
        function() {}: i,
        c = n.msg;
        c ? (0, b.isBox)() && (0, s.isBaiduDomain)() ? a.
    default.ui.open({
            name:
            "toast",
            data: {
                type: "1",
                message: c
            }
        }).then(function(e) {
            o({
                msg: "toast:ok",
                status: 0
            })
        }).
        catch(function(e) {
            u({
                status: e.errCode,
                msg: e.errMsg || f.
            default.ERROR_IM_INVOKE_MSG
            })
        }):
        (0, v.
    default)(e):
        u({
            status:
            0,
            msg: "\u63d0\u793a\u6d88\u606f\u4e0d\u53ef\u4e3a\u7a7a"
        })
    });
    t.invokeIM = (0, p.
default)(function(e) {
        return (0, s.versionCompare)(b.boxVersion, "8.5") >= 0 ? y(e) : g(e)
    },
    {
        name: "invokeIM"
    }),
    t.login = (0, p.
default)(w, {
        name: "login"
    }),
    t.share = (0, p.
default)(O, {
        name: "share"
    }),
    t.toast = (0, p.
default)(x)
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.query = t.getInfo = void 0;
    var o = n(14),
    i = r(o),
    a = n(11),
    s = n(2),
    u = n(52),
    c = r(u),
    l = n(53),
    f = r(l);
    t.getInfo = (0, f.
default)(function(e) {
        var t = (0, a.getInsData)(e.context),
        n = t.val.data.office_info,
        r = n.appid,
        o = n.name,
        i = n.description,
        u = n.avatar; (0, s.abLog)({
            ab: "getInfo",
            au: 0,
            s_id: r,
            clk_type: 0,
            sub_source: "",
            source: location.host
        }),
        r ? e.success({
            result: {
                appid: r,
                name: o,
                description: i,
                avatar: u,
                homepage: t.val.data.homepage
            },
            msg: "getInfo:ok",
            status: 0
        }) : e.fail({
            msg: c.
        default.ERROR_WRONG_APPID_MSG,
            status: c.
        default.ERROR_WRONG_APPID
        })
    },
    {
        name: "getInfo"
    }),
    t.query = (0, f.
default)(function(e) {
        if ((0, s.abLog)({
            ab: "query",
            au: 0,
            s_id: (0, a.getAppid)(e.context),
            clk_type: 0,
            sub_source: "",
            source: location.host
        }), !(0, a.isBaiduDomain)()) return void e.fail({
            msg: c.
        default.ERROR_NO_PERMISSION_MSG,
            status: c.
        default.ERROR_NO_PERMISSION
        });
        var t = e.data || {
            ids: []
        },
        n = "";
        t.ids && (n = t.ids.join(","));
        var r = (0, a.getInsData)(e.context); (0, i.
    default)({
            url:
            "https://msite.baidu.com/sdk/query",
            data: {
                appids: n,
                url: location.href,
                bdstoken: r.val.data.bdstoken
            },
            type: "jsonp"
        }).then(function(t) {
            t.code ? e.fail({
                msg: t.msg || c.
            default.ERROR_FOLLOW_GET_ERROR_MSG,
                status: c.
            default.ERROR_FOLLOW_GET_ERROR
            }):
            e.success({
                msg:
                "follow:ok",
                status: 0,
                result: t.data.list || []
            })
        }).fail(function(t) {
            e.fail({
                msg: t.msg || c.
            default.ERROR_FOLLOW_GET_ERROR_MSG,
                status: c.
            default.ERROR_FOLLOW_GET_ERROR
            })
        })
    },
    {
        name: "query"
    })
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.destory = t.init = void 0;
    var o = n(126),
    i = r(o),
    a = n(53),
    s = r(a),
    u = n(4),
    c = n(2),
    l = (n(11), n(15)),
    f = [];
    t.init = (0, s.
default)(function(e) {
        if (e.data && e.data.simpleInit) return void(e.success && e.success({
            status: 0,
            msg: "init:ok"
        }));
        var t = {
            data: e.data || {
                appid: 0,
                timestamp: 0,
                nonce_str: "",
                url: location.href,
                signature: "",
                abilities: []
            },
            success: e.success,
            fail: e.fail
        }; (0, c.abLog)({
            ab: "init",
            au: 0,
            s_id: t.data.appid,
            clk_type: 0,
            sub_source: "",
            source: location.host
        });
        var n = new i.
    default(t);
        return l.globalPrivate.status = "init",
        f.push(n),
        n
    },
    {
        name: "init"
    }),
    t.destory = (0, s.
default)(function(e) {
        f.forEach(function(e) {
            e.destory()
        }),
        f = [],
        (0, u.clear)(),
        (0, l.destory)(),
        (0, c.clearCnt)(),
        e.success({
            status: 0,
            msg: "destory:ok"
        })
    },
    {
        name: "destory"
    })
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e) { (0, m.
    default)({
            url:
            P,
            type: "jsonp",
            data: e,
            success: function() {},
            error: function() {}
        })
    }
    function i(e, t, n, r) {
        var o = e === N.TEL ? "tel:": "sms:",
        i = e === N.TEL ? "": "\u4f60\u597d\uff0c\u6211\u5728\u767e\u5ea6\u670d\u52a1\u641c\u7d22-" + n + "\u63d0\u4f9b\u7684\u670d\u52a1\u4e2d\u770b\u5230\u4e86\u4f60\u7684" + r;
        if ((0, S.isIOS)()) e === N.SMS && (i = "&body=" + i),
        location.href = "" + o + t + i;
        else {
            e === N.SMS && (i = "?body=" + i);
            var a = document.createElement("iframe");
            a.src = "" + o + t + i,
            a.style.display = "none",
            document.body.appendChild(a),
            setTimeout(function() {
                document.body.removeChild(a)
            },
            1e4)
        }
    }
    function a(e, t, n, r) {
        n ? ((0, I.follow)({
            data: {
                appid: e,
                opType: "add",
                isSub2Box: !1
            },
            context: t
        }), r(M.SHOW, JSON.stringify({
            follow: 1
        }))) : r(M.SHOW, JSON.stringify({
            follow: 0
        }))
    }
    function s(e, t, n) {
        var r = e === N.TEL ? "tel": "sms";
        return function(e, o) { (0, v.abLog)(p({},
            n, {
                ab: r,
                au: 1,
                s_id: t,
                clk_type: e,
                ext: o
            }))
        }
    }
    function u(e, t, n, r, s, u, c, l) {
        return {
            okHandler: function(f) {
                o(e),
                (0, _.isBaiduDomain)() && a(t, n, f, u),
                u(M.CLICK, "btnClick"),
                setTimeout(function() {
                    i(r, s, c, l)
                },
                500)
            },
            cancelHandler: function() {}
        }
    }
    function c(e, t) {
        var n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments[3]),
        r = arguments[4],
        o = arguments[5],
        i = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        a = arguments[7];
        T || (T = document.createElement("div"), T.className = "cambrian-layer-container", document.body.appendChild(T));
        var s = e === N.TEL ? t: "\u60a8\u5c06\u7ed9\u5546\u5bb6\u53d1\u9001\u77ed\u4fe1",
        u = {
            content: s,
            subText: "\u540c\u65f6\u5173\u6ce8\u718a\u638c\u53f7\u83b7\u53d6\u540e\u7eed\u901a\u77e5",
            okHandler: n,
            cancelHandler: r,
            displayLayer: !0,
            isSub: !0,
            isShowSub: i,
            context: a
        };
        L = (0, b.render)((0, b.h)(A.
    default, u), T, L),
        o(M.SHOW, JSON.stringify("layerShow"))
    }
    function l(e) {
        var t = e.sendData,
        n = void 0 === t ? {}: t,
        r = e.appid,
        a = e.context,
        s = e.isSub,
        l = void 0 !== s && s,
        f = e.log,
        d = e.type,
        p = e.tel,
        h = e.name,
        m = void 0 === h ? "": h,
        b = e.title,
        _ = void 0 === b ? "": b;
        if (l) o(n),
        setTimeout(function() {
            i(d, p, m, _)
        },
        500);
        else {
            var v = u(n, r, a, d, p, f, m, _),
            g = v.okHandler,
            y = v.cancelHandler;
            c(d, p, m, g, y, f, a)
        }
    }
    function f(e) {
        var t = e.fail,
        n = e.context; (0, _.isBaiduDomain)() ? (0, E.login)({
            data: {
                state: (0, v.uuid)()
            },
            success: function() { (0, C.isSubscribe)({
                    context: n,
                    success: function(t) {
                        if (t.result) {
                            e.isSub = t.result;
                            var r = (0, _.getInsData)(n);
                            r.val.data.subscribe = 1,
                            R.setByAttrKey(r.id, "data", r.val.data)
                        }
                        l(e)
                    },
                    fail: function() {
                        l(e)
                    }
                })
            },
            fail: function() {
                t({
                    status: O.
                default.ERROR_INVOKE_LOGIN_FAIL,
                    msg: O.
                default.ERROR_INVOKE_LOGIN_FAIL_MSG
                })
            },
            context: n
        }) : l(e)
    }
    function d(e, t) {
        var n = t.data,
        r = void 0 === n ? {}: n,
        o = t.fail,
        i = t.context,
        a = (0, _.getInsData)(i).val.data,
        u = {};
        u.appid = a.office_info.appid,
        u.name = a.office_info.name,
        u.isSub = a.subscribe;
        var c = p(u, r),
        d = c.tel,
        h = c.appid,
        m = c.logData,
        b = void 0 === m ? {}: m;
        if (!d) return void o({
            msg: O.
        default.ERROR_TEL_NEED_TEL_MSG,
            status: O.
        default.ERROR_TEL_NEED_TEL
        });
        if (!h) return void o({
            msg: O.
        default.ERROR_NEED_APP_ID_MSG,
            status: O.
        default.ERROR_NEED_APP_ID
        });
        var v = s(e, h, b); (0, k.isLogin)({
            data: {
                force: !0
            },
            success: function(t) {
                t.result ? l(p({},
                c, {
                    context: i,
                    type: e,
                    log: v
                })) : f(p({},
                c, {
                    context: i,
                    type: e,
                    log: v,
                    fail: o
                }))
            },
            fail: function() {
                f(p({},
                c, {
                    context: i,
                    type: e,
                    log: v,
                    fail: o
                }))
            },
            context: i
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.sms = t.tel = void 0;
    var p = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    h = n(14),
    m = r(h),
    b = n(1),
    _ = n(11),
    v = n(2),
    g = n(53),
    y = r(g),
    w = n(52),
    O = r(w),
    x = n(4),
    R = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.
    default = e,
        t
    } (x),
    S = n(57),
    E = n(23),
    k = n(21),
    I = n(5),
    C = n(31),
    j = n(122),
    A = r(j),
    N = {
        TEL: 0,
        SMS: 1
    },
    M = {
        SHOW: 0,
        CLICK: 1
    },
    T = void 0,
    L = void 0,
    P = "https://xiongzhang.baidu.com/opensc/call/make";
    t.tel = (0, y.
default)(function(e) {
        d(N.TEL, e)
    },
    {
        name: "tel"
    }),
    t.sms = (0, y.
default)(function(e) {
        d(N.SMS, e)
    },
    {
        name: "sms"
    })
},
, ,
function(e, t) {
    function n(e, t) {
        var n = e[1] || "",
        o = e[3];
        if (!o) return n;
        if (t && "function" == typeof btoa) {
            var i = r(o);
            return [n].concat(o.sources.map(function(e) {
                return "/*# sourceURL=" + o.sourceRoot + e + " */"
            })).concat([i]).join("\n")
        }
        return [n].join("\n")
    }
    function r(e) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
    }
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var r = n(t, e);
                return t[2] ? "@media " + t[2] + "{" + r + "}": r
            }).join("")
        },
        t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {},
            o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < e.length; o++) {
                var a = e[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n: n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        },
        t
    }
},
function(e, t, n) {
    function r(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
            o = h[r.id];
            if (o) {
                o.refs++;
                for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) o.parts.push(l(r.parts[i], t))
            } else {
                for (var a = [], i = 0; i < r.parts.length; i++) a.push(l(r.parts[i], t));
                h[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function o(e) {
        for (var t = [], n = {},
        r = 0; r < e.length; r++) {
            var o = e[r],
            i = o[0],
            a = o[1],
            s = o[2],
            u = o[3],
            c = {
                css: a,
                media: s,
                sourceMap: u
            };
            n[i] ? n[i].parts.push(c) : t.push(n[i] = {
                id: i,
                parts: [c]
            })
        }
        return t
    }
    function i(e, t) {
        var n = b(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = g[g.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
        g.push(t);
        else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }
    function a(e) {
        e.parentNode.removeChild(e);
        var t = g.indexOf(e);
        t >= 0 && g.splice(t, 1)
    }
    function s(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css",
        c(t, e.attrs),
        i(e, t),
        t
    }
    function u(e) {
        var t = document.createElement("link");
        return e.attrs.type = "text/css",
        e.attrs.rel = "stylesheet",
        c(t, e.attrs),
        i(e, t),
        t
    }
    function c(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n])
        })
    }
    function l(e, t) {
        var n, r, o;
        if (t.singleton) {
            var i = v++;
            n = _ || (_ = s(t)),
            r = f.bind(null, n, i, !1),
            o = f.bind(null, n, i, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(t), r = p.bind(null, n, t), o = function() {
            a(n),
            n.href && URL.revokeObjectURL(n.href)
        }) : (n = s(t), r = d.bind(null, n), o = function() {
            a(n)
        });
        return r(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r(e = t)
            } else o()
        }
    }
    function f(e, t, n, r) {
        var o = n ? "": r.css;
        if (e.styleSheet) e.styleSheet.cssText = w(t, o);
        else {
            var i = document.createTextNode(o),
            a = e.childNodes;
            a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
        }
    }
    function d(e, t) {
        var n = t.css,
        r = t.media;
        if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    function p(e, t, n) {
        var r = n.css,
        o = n.sourceMap,
        i = void 0 === t.convertToAbsoluteUrls && o; (t.convertToAbsoluteUrls || i) && (r = y(r)),
        o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([r], {
            type: "text/css"
        }),
        s = e.href;
        e.href = URL.createObjectURL(a),
        s && URL.revokeObjectURL(s)
    }
    var h = {},
    m = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)),
            t
        }
    } (function() {
        return window && document && document.all && !window.atob
    }),
    b = function(e) {
        var t = {};
        return function(n) {
            return void 0 === t[n] && (t[n] = e.call(this, n)),
            t[n]
        }
    } (function(e) {
        return document.querySelector(e)
    }),
    _ = null,
    v = 0,
    g = [],
    y = n(27);
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        t = t || {},
        t.attrs = "object" == typeof t.attrs ? t.attrs: {},
        void 0 === t.singleton && (t.singleton = m()),
        void 0 === t.insertInto && (t.insertInto = "head"),
        void 0 === t.insertAt && (t.insertAt = "bottom");
        var n = o(e);
        return r(n, t),
        function(e) {
            for (var i = [], a = 0; a < n.length; a++) {
                var s = n[a],
                u = h[s.id];
                u.refs--,
                i.push(u)
            }
            e && r(o(e), t);
            for (var a = 0; a < i.length; a++) {
                var u = i[a];
                if (0 === u.refs) {
                    for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                    delete h[u.id]
                }
            }
        }
    };
    var w = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n,
            e.filter(Boolean).join("\n")
        }
    } ()
},
function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2015
  * https://github.com/ded/reqwest
  */
    !
    function(e, t, n) {
        void 0 !== module && module.exports ? module.exports = n() : (__WEBPACK_AMD_DEFINE_FACTORY__ = n, void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } (0, 0,
    function() {
        function succeed(e) {
            var t = protocolRe.exec(e.url);
            return t = t && t[1] || context.location.protocol,
            httpsRe.test(t) ? twoHundo.test(e.request.status) : !!e.request.response
        }
        function handleReadyState(e, t, n) {
            return function() {
                return e._aborted ? n(e.request) : e._timedOut ? n(e.request, "Request is aborted: timeout") : void(e.request && 4 == e.request[readyState] && (e.request.onreadystatechange = noop, succeed(e) ? t(e.request) : n(e.request)))
            }
        }
        function setHeaders(e, t) {
            var n, r = t.headers || {};
            r.Accept = r.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"];
            var o = "undefined" != typeof FormData && t.data instanceof FormData;
            t.crossOrigin || r[requestedWith] || (r[requestedWith] = defaultHeaders.requestedWith),
            r[contentType] || o || (r[contentType] = t.contentType || defaultHeaders.contentType);
            for (n in r) r.hasOwnProperty(n) && "setRequestHeader" in e && e.setRequestHeader(n, r[n])
        }
        function setCredentials(e, t) {
            void 0 !== t.withCredentials && void 0 !== e.withCredentials && (e.withCredentials = !!t.withCredentials)
        }
        function generalCallback(e) {
            lastValue = e
        }
        function urlappend(e, t) {
            return e + (/\?/.test(e) ? "&": "?") + t
        }
        function handleJsonp(e, t, n, r) {
            var o = uniqid++,
            i = e.jsonpCallback || "callback",
            a = e.jsonpCallbackName || reqwest.getcallbackPrefix(o),
            s = new RegExp("((^|\\?|&)" + i + ")=([^&]+)"),
            u = r.match(s),
            c = doc.createElement("script"),
            l = 0,
            f = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
            return u ? "?" === u[3] ? r = r.replace(s, "$1=" + a) : a = u[3] : r = urlappend(r, i + "=" + a),
            context[a] = generalCallback,
            c.type = "text/javascript",
            c.src = r,
            c.async = !0,
            void 0 === c.onreadystatechange || f || (c.htmlFor = c.id = "_reqwest_" + o),
            c.onload = c.onreadystatechange = function() {
                if (c[readyState] && "complete" !== c[readyState] && "loaded" !== c[readyState] || l) return ! 1;
                c.onload = c.onreadystatechange = null,
                c.onclick && c.onclick(),
                t(lastValue),
                lastValue = void 0,
                head.removeChild(c),
                l = 1
            },
            head.appendChild(c),
            {
                abort: function() {
                    c.onload = c.onreadystatechange = null,
                    n({},
                    "Request is aborted: timeout", {}),
                    lastValue = void 0,
                    head.removeChild(c),
                    l = 1
                }
            }
        }
        function getRequest(e, t) {
            var n, r = this.o,
            o = (r.method || "GET").toUpperCase(),
            i = "string" == typeof r ? r: r.url,
            a = !1 !== r.processData && r.data && "string" != typeof r.data ? reqwest.toQueryString(r.data) : r.data || null,
            s = !1;
            return "jsonp" != r.type && "GET" != o || !a || (i = urlappend(i, a), a = null),
            "jsonp" == r.type ? handleJsonp(r, e, t, i) : (n = r.xhr && r.xhr(r) || xhr(r), n.open(o, i, !1 !== r.async), setHeaders(n, r), setCredentials(n, r), context[xDomainRequest] && n instanceof context[xDomainRequest] ? (n.onload = e, n.onerror = t, n.onprogress = function() {},
            s = !0) : n.onreadystatechange = handleReadyState(this, e, t), r.before && r.before(n), s ? setTimeout(function() {
                n.send(a)
            },
            200) : n.send(a), n)
        }
        function Reqwest(e, t) {
            this.o = e,
            this.fn = t,
            init.apply(this, arguments)
        }
        function setType(e) {
            if (null !== e) return e.match("json") ? "json": e.match("javascript") ? "js": e.match("text") ? "html": e.match("xml") ? "xml": void 0
        }
        function init(o, fn) {
            function complete(e) {
                for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(e)
            }
            function success(resp) {
                var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
                resp = "jsonp" !== type ? self.request: resp;
                var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                r = filteredResponse;
                try {
                    resp.responseText = r
                } catch(e) {}
                if (r) switch (type) {
                case "json":
                    try {
                        resp = context.JSON ? context.JSON.parse(r) : eval("(" + r + ")")
                    } catch(e) {
                        return error(resp, "Could not parse JSON in response", e)
                    }
                    break;
                case "js":
                    resp = eval(r);
                    break;
                case "html":
                    resp = r;
                    break;
                case "xml":
                    resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null: resp.responseXML
                }
                for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
                complete(resp)
            }
            function timedOut() {
                self._timedOut = !0,
                self.request.abort()
            }
            function error(e, t, n) {
                for (e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = n, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(e, t, n);
                complete(e)
            }
            this.url = "string" == typeof o ? o: o.url,
            this.timeout = null,
            this._fulfilled = !1,
            this._successHandler = function() {},
            this._fulfillmentHandlers = [],
            this._errorHandlers = [],
            this._completeHandlers = [],
            this._erred = !1,
            this._responseArgs = {};
            var self = this;
            fn = fn ||
            function() {},
            o.timeout && (this.timeout = setTimeout(function() {
                timedOut()
            },
            o.timeout)),
            o.success && (this._successHandler = function() {
                o.success.apply(o, arguments)
            }),
            o.error && this._errorHandlers.push(function() {
                o.error.apply(o, arguments)
            }),
            o.complete && this._completeHandlers.push(function() {
                o.complete.apply(o, arguments)
            }),
            this.request = getRequest.call(this, success, error)
        }
        function reqwest(e, t) {
            return new Reqwest(e, t)
        }
        function normalize(e) {
            return e ? e.replace(/\r?\n/g, "\r\n") : ""
        }
        function serial(e, t) {
            var n, r, o, i, a = e.name,
            s = e.tagName.toLowerCase(),
            u = function(e) {
                e && !e.disabled && t(a, normalize(e.attributes.value && e.attributes.value.specified ? e.value: e.text))
            };
            if (!e.disabled && a) switch (s) {
            case "input":
                /reset|button|image|file/i.test(e.type) || (n = /checkbox/i.test(e.type), r = /radio/i.test(e.type), o = e.value, (!(n || r) || e.checked) && t(a, normalize(n && "" === o ? "on": o)));
                break;
            case "textarea":
                t(a, normalize(e.value));
                break;
            case "select":
                if ("select-one" === e.type.toLowerCase()) u(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
                else for (i = 0; e.length && i < e.length; i++) e.options[i].selected && u(e.options[i])
            }
        }
        function eachFormElement() {
            var e, t, n = this;
            for (t = 0; t < arguments.length; t++) e = arguments[t],
            /input|select|textarea/i.test(e.tagName) && serial(e, n),
            function(e, t) {
                var r, o, i;
                for (r = 0; r < t.length; r++) for (i = e[byTag](t[r]), o = 0; o < i.length; o++) serial(i[o], n)
            } (e, ["input", "select", "textarea"])
        }
        function serializeQueryString() {
            return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
        }
        function serializeHash() {
            var e = {};
            return eachFormElement.apply(function(t, n) {
                t in e ? (e[t] && !isArray(e[t]) && (e[t] = [e[t]]), e[t].push(n)) : e[t] = n
            },
            arguments),
            e
        }
        function buildParams(e, t, n, r) {
            var o, i, a, s = /\[\]$/;
            if (isArray(t)) for (i = 0; t && i < t.length; i++) a = t[i],
            n || s.test(e) ? r(e, a) : buildParams(e + "[" + ("object" == typeof a ? i: "") + "]", a, n, r);
            else if (t && "[object Object]" === t.toString()) for (o in t) buildParams(e + "[" + o + "]", t[o], n, r);
            else r(e, t)
        }
        var context = this;
        if ("window" in context) var doc = document,
        byTag = "getElementsByTagName",
        head = doc[byTag]("head")[0];
        else {
            var XHR2;
            try {
                XHR2 = __webpack_require__(30)
            } catch(e) {
                throw new Error("Peer dependency `xhr2` required! Please npm install xhr2")
            }
        }
        var httpsRe = /^http/,
        protocolRe = /(^\w+):\/\//,
        twoHundo = /^(20\d|1223)$/,
        readyState = "readyState",
        contentType = "Content-Type",
        requestedWith = "X-Requested-With",
        uniqid = 0,
        callbackPrefix = "reqwest_" + +new Date,
        lastValue, xmlHttpRequest = "XMLHttpRequest",
        xDomainRequest = "XDomainRequest",
        noop = function() {},
        isArray = "function" == typeof Array.isArray ? Array.isArray: function(e) {
            return e instanceof Array
        },
        defaultHeaders = {
            contentType: "application/x-www-form-urlencoded",
            requestedWith: xmlHttpRequest,
            accept: {
                "*": "text/javascript, text/html, application/xml, text/xml, */*",
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                js: "application/javascript, text/javascript"
            }
        },
        xhr = function(e) {
            if (!0 === e.crossOrigin) {
                var t = context[xmlHttpRequest] ? new XMLHttpRequest: null;
                if (t && "withCredentials" in t) return t;
                if (context[xDomainRequest]) return new XDomainRequest;
                throw new Error("Browser does not support cross-origin requests")
            }
            return context[xmlHttpRequest] ? new XMLHttpRequest: XHR2 ? new XHR2: new ActiveXObject("Microsoft.XMLHTTP")
        },
        globalSetupOptions = {
            dataFilter: function(e) {
                return e
            }
        };
        return Reqwest.prototype = {
            abort: function() {
                this._aborted = !0,
                this.request.abort()
            },
            retry: function() {
                init.call(this, this.o, this.fn)
            },
            then: function(e, t) {
                return e = e ||
                function() {},
                t = t ||
                function() {},
                this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)),
                this
            },
            always: function(e) {
                return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e),
                this
            },
            fail: function(e) {
                return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e),
                this
            },
            catch: function(e) {
                return this.fail(e)
            }
        },
        reqwest.serializeArray = function() {
            var e = [];
            return eachFormElement.apply(function(t, n) {
                e.push({
                    name: t,
                    value: n
                })
            },
            arguments),
            e
        },
        reqwest.serialize = function() {
            if (0 === arguments.length) return "";
            var e, t, n = Array.prototype.slice.call(arguments, 0);
            return e = n.pop(),
            e && e.nodeType && n.push(e) && (e = null),
            e && (e = e.type),
            t = "map" == e ? serializeHash: "array" == e ? reqwest.serializeArray: serializeQueryString,
            t.apply(null, n)
        },
        reqwest.toQueryString = function(e, t) {
            var n, r, o = t || !1,
            i = [],
            a = encodeURIComponent,
            s = function(e, t) {
                t = "function" == typeof t ? t() : null == t ? "": t,
                i[i.length] = a(e) + "=" + a(t)
            };
            if (isArray(e)) for (r = 0; e && r < e.length; r++) s(e[r].name, e[r].value);
            else for (n in e) e.hasOwnProperty(n) && buildParams(n, e[n], o, s);
            return i.join("&").replace(/%20/g, "+")
        },
        reqwest.getcallbackPrefix = function() {
            return callbackPrefix
        },
        reqwest.compat = function(e, t) {
            return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)),
            new Reqwest(e, t)
        },
        reqwest.ajaxSetup = function(e) {
            e = e || {};
            for (var t in e) globalSetupOptions[t] = e[t]
        },
        reqwest
    })
},
,
function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    s = n(1),
    u = n(28),
    c = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (u),
    l = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state.subChecked = !n.props.isSub,
            n
        }
        return i(t, e),
        a(t, [{
            key: "componentDidMount",
            value: function() {
                this.props.mounted && this.props.mounted()
            }
        },
        {
            key: "subChangeHandler",
            value: function(e) {
                this.setState({
                    subChecked: e.target.checked
                })
            }
        },
        {
            key: "btnClickHandler",
            value: function() {
                var e = this;
                this.state.subChecked && this.props.doFollow ? this.props.doFollow().then(function(t) {
                    e.props.btnClickHanlder(!t.code)
                }).fail(function(t) {
                    e.props.btnClickHanlder(!1)
                }) : this.props.btnClickHanlder( !! this.props.isSub || this.state.subChecked)
            }
        },
        {
            key: "render",
            value: function() {
                var e = this,
                t = this.state.subChecked,
                n = this.props,
                r = n.isSub,
                o = n.name,
                i = n.btnText,
                a = n.cusStyle,
                u = a.button,
                l = void 0 === u ? {}: u,
                f = r ? "\u5df2\u5173\u6ce8" + o: "\u5173\u6ce8" + o;
                return (0, s.h)("div", {
                    className: c.
                default.con
                },
                (0, s.h)("div", {
                    className: c.
                default.subscribe
                },
                (0, s.h)("input", {
                    id: "silent-subscribe-checkbox",
                    type: "checkbox",
                    checked: t,
                    onChange: function(t) {
                        e.subChangeHandler(t)
                    }
                }), (0, s.h)("label", {
                    className: r ? c.
                default.noCheckbox:
                    "",
                    for: "silent-subscribe-checkbox"
                },
                f)), (0, s.h)("button", {
                    style: l,
                    className: c.
                default.button,
                    onClick: function(t) {
                        e.btnClickHandler(t)
                    }
                },
                i))
            }
        }]),
        t
    } (s.Component);
    t.
default = l
},
function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    s = n(1),
    u = n(29),
    c = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (u),
    l = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state.isSub = n.props.isShowSub,
            n.state.displayLayer = !0,
            n
        }
        return i(t, e),
        a(t, [{
            key: "componentDidMount",
            value: function() {
                this.props.mounted && this.props.mounted()
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState({
                    isSub: e.isShowSub,
                    displayLayer: e.displayLayer
                })
            }
        },
        {
            key: "subChangeHandler",
            value: function(e) {
                this.setState({
                    isSub: e.target.checked
                })
            }
        },
        {
            key: "cancelHandler",
            value: function() {
                this.props.cancelHandler(),
                this.hide(),
                this.props.hide && this.props.hide()
            }
        },
        {
            key: "okHandler",
            value: function() {
                this.props.okHandler(this.state.isSub),
                this.hide(),
                this.state.isSub && this.props.doFollow && this.props.doFollow(),
                this.props.hide && this.props.hide()
            }
        },
        {
            key: "hide",
            value: function() {
                this.setState({
                    displayLayer: !1
                })
            }
        },
        {
            key: "preventScroll",
            value: function(e) {
                e.preventDefault()
            }
        },
        {
            key: "render",
            value: function() {
                var e = this,
                t = this.state,
                n = t.isSub,
                r = t.displayLayer,
                o = this.props,
                i = o.subText,
                a = o.content,
                u = o.isShowSub;
                return (0, s.h)("div", {
                    style: r ? {
                        display: ""
                    }: {
                        display: "none"
                    }
                },
                (0, s.h)("div", {
                    className: c.
                default.mask,
                    onTouchMove: function(t) {
                        e.preventScroll(t)
                    }
                }), (0, s.h)("div", {
                    className: c.
                default.layout
                },
                (0, s.h)("div", {
                    className: c.
                default.content
                },
                (0, s.h)("div", {
                    className: c.
                default.title
                },
                (0, s.h)("div", null, a)), (0, s.h)("div", {
                    style: u ? {
                        display: ""
                    }: {
                        display: "none"
                    },
                    className: c.
                default.sub
                },
                (0, s.h)("input", {
                    id: "cambrian-layer-checkbox",
                    type: "checkbox",
                    checked: n,
                    onChange: function(t) {
                        e.subChangeHandler(t)
                    }
                }), (0, s.h)("label", {
                    for: "cambrian-layer-checkbox"
                },
                i))), (0, s.h)("div", {
                    className: c.
                default.buttons
                },
                (0, s.h)("button", {
                    className: c.
                default.okbtn,
                    onClick: function(t) {
                        e.cancelHandler(t)
                    }
                },
                "\u53d6\u6d88"), (0, s.h)("button", {
                    className: c.
                default.btn,
                    onClick: function(t) {
                        e.okHandler(t)
                    }
                },
                "\u786e\u8ba4"))))
            }
        }]),
        t
    } (s.Component);
    t.
default = l
},
, , ,
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""; v.length > 0;) {
            var r = v.shift(); (r = t ? r.fail: r.success)({
                result: e,
                status: t,
                msg: n
            })
        }
        _ = !1
    }
    function i(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (v.push({
            success: e,
            fail: t
        }), !_) {
            if (null !== m && !n && (new Date).getTime() - b < h) return void o(m, 0, "");
            _ = !0,
            (0, u.
        default)({
                url:
                p,
                type: "jsonp"
            }).then(function(e) {
                e.errno ? o(!1, e.errno, e.errmsg) : (m = e.data.isLogin, b = (new Date).getTime(), o(m, 0, ""))
            }).fail(function(e) {
                o(!1, e.errno, e.errmsg)
            })
        }
    }
    function a(e) {
        m = e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isLogin = void 0,
    t.query = i,
    t.refreshStatus = a;
    var s = n(14),
    u = r(s),
    c = n(53),
    l = r(c),
    f = n(2),
    d = n(11),
    p = "https://ext.baidu.com/api/subscribe/v1/relation/status",
    h = 12e4,
    m = null,
    b = 0,
    _ = !1,
    v = [];
    t.isLogin = (0, l.
default)(function(e) {
        var t = e.success,
        n = e.fail,
        r = e.data,
        o = void 0 === r ? {}: r,
        a = e.context; (0, f.abLog)({
            ab: "isLogin",
            au: 0,
            s_id: (0, d.getAppid)(a),
            clk_type: 0,
            sub_source: "",
            source: location.host
        }),
        i(t, n, o.force)
    },
    {
        name: "isLogin"
    })
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e) {
        return e.getBoundingClientRect().top + Math.max(document.documentElement.scrollTop || document.body.scrollTop, 0)
    }
    function i(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 60,
        i = function() {
            n("tail" !== e && ("head" === e ? I: !(o(t) > r) && I))
        };
        if (null !== I) i();
        else if (I = (0, _.versionCompare)((0, g.getSCVersion)(), k) >= 0) i();
        else {
            var a = (0, _.versionCompare)(g.boxVersion, E);
            I = a >= 0,
            I ? i() : n(I)
        }
    }
    function a(e) {
        for (var t = (0, _.getInsData)(e), n = t.val.data, r = n.office_info, o = n.subscribe, i = n.homepage, a = {},
        s = 6; s < 12; s++) a["cst" + s] = i + "&ct=57&cst=" + s;
        return {
            office_info: r,
            subscribe: o,
            homepage: a
        }
    }
    function s(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "bar",
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0; (0, v.abLog)({
            ab: n,
            au: r,
            s_id: e.appid || e.office_info.appid,
            clk_type: 0,
            sub_source: "",
            source: location.host,
            ext: JSON.stringify(t)
        })
    }
    function u(e, t) {
        var n = e.success,
        r = e.fail,
        o = e.data,
        a = o.dom,
        u = o.abName,
        c = o.auVal,
        f = a.barType;
        i(f, a,
        function(e) {
            if (e) return a.parentNode.removeChild(a),
            s(t, {
                show: !1,
                status: 2
            },
            u, c),
            void r({
                status: w.
            default.ERROR_BAR_SHIELD,
                msg: w.
            default.ERROR_BAR_SHIELD_MSG
            });
            var o = R[f];
            o && (s(t, {
                show: !0,
                status: 0
            },
            u, c), (0, l.render)((0, l.h)(o, t), a), n({
                msg: (u || "bar") + ":ok",
                status: 0
            }))
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.bar = void 0;
    var c = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    l = n(1);
    n(73);
    var f = n(105),
    d = r(f),
    p = n(103),
    h = r(p),
    m = n(106),
    b = r(m),
    _ = n(11),
    v = n(2),
    g = n(55),
    y = n(52),
    w = r(y),
    O = n(53),
    x = r(O),
    R = {
        head: d.
    default,
        body: h.
    default,
        tail: b.
    default
    },
    S = function() {},
    E = "10.3.0",
    k = "2.4.0",
    I = null;
    t.bar = (0, x.
default)(function(e) {
        if (e.data.success = e.followSuccess || S, e.data.fail = e.followFail || S, e.data.context = e.context, !e.data.dom) {
            var t = e.data,
            n = t.type,
            r = t.anchor,
            o = (0, v.createDom)(n, r);
            e.data.dom = o
        }
        var i = a(e.context),
        l = c({},
        i, e.data);
        if (!l.appid && !l.office_info) return s(l, {
            show: !1,
            status: 1
        },
        e.data.abName, e.data.auVal),
        void e.fail({
            msg: w.
        default.ERROR_WRONG_APPID_MSG,
            status: w.
        default.ERROR_WRONG_APPID
        });
        u(e, l)
    },
    {
        name: "bar"
    })
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e) {
        var t = e.success,
        n = e.fail,
        r = e.data,
        o = void 0 === r ? {}: r,
        l = o.state,
        f = o.url,
        d = void 0 === f ? "": f,
        p = o.title,
        _ = void 0 === p ? "": p,
        v = {
            status: h.
        default.ERROR_IM_LOGIN,
            msg: h.
        default.ERROR_IM_LOGIN_MSG
        },
        g = "?nocache=1&state=" + encodeURIComponent(l) + "&title=" + encodeURIComponent("\u767b\u5f55") + "&redirect_uri=" + encodeURIComponent(d) + "&redirect_title=" + encodeURIComponent(_);
        if ((0, i.isBox)() && (0, c.versionCompare)(i.boxVersion, b) >= 0)(0, a.login)({
            success: function() { (0, u.query)(function(e) {
                    e.result ? t({
                        status: 0,
                        msg: "login:ok"
                    }) : n(v)
                },
                function() {
                    n(v)
                },
                !0)
            },
            fail: function() {
                n({
                    status: h.
                default.ERROR_INVOKE_LOGIN_FAIL,
                    msg: h.
                default.ERROR_INVOKE_LOGIN_FAIL_MSG
                })
            },
            context: e.context
        });
        else if ((0, s.canUseSCLogin)())(0, s.login)(function(e) { (0, u.refreshStatus)(!0),
            t(e)
        },
        n);
        else if (window.fif) {
            if ((0, c.isSpecialIOS)()) return void(location.href = "https://m.baidu.com/paw/c/s/xiongzhang.baidu.com/opensc/wps/smsLogin" + g);
            window.fif.action.redirect("/paw/c/s/xiongzhang.baidu.com/opensc/wps/smsLogin" + g),
            m || (window.addEventListener("passport:loggedin",
            function(e) {
                var n = e._args[0].state;
                l === n && ((0, u.refreshStatus)(!0), t({
                    status: 0,
                    msg: "login:ok"
                }))
            }), m = !0)
        } else if (0 === window.name.indexOf("iframe-shell")) window.parent.postMessage({
            event: "loadiframe",
            data: {
                url: "https://xiongzhang.baidu.com/opensc/wps/smsLogin",
                query: {
                    state: l,
                    nocache: 1,
                    title: "\u767b\u5f55",
                    redirect_uri: d,
                    redirect_title: _
                }
            }
        },
        "*");
        else {
            var y = {
                tpl: "",
                third_login: 1,
                url: d || location.href,
                login_type: "sms"
            },
            w = "https://wappass.baidu.com/passport/login?adapter=1&regLink=1";
            "sms" === y.login_type && (w += "&sms=1"),
            y.subpro && (w += "&subpro=" + y.subpro),
            "" !== y.tpl && (w += "&tpl=" + y.tpl),
            window.location.href = w + "&u=" + encodeURIComponent(y.url)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.login = void 0;
    var i = n(55),
    a = n(6),
    s = n(119),
    u = n(21),
    c = n(11),
    l = n(2),
    f = n(53),
    d = r(f),
    p = n(52),
    h = r(p),
    m = !1,
    b = "5.5.0";
    t.login = (0, d.
default)(function(e) {
        return (0, l.abLog)({
            ab: "login",
            au: 0,
            s_id: (0, c.getAppid)(e.context),
            clk_type: 0,
            sub_source: "",
            source: location.host
        }),
        o(e)
    },
    {
        name: "login"
    })
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, '._1rir_j{font-family:PingFangSC-Regular,STHeitiSC-Light,Helvetica Neue,Helvetica,Arial;text-align:center}._3r4nHe{font-size:12px;line-height:1.16667;color:#999}._3r4nHe input[type=checkbox]{display:none}._3r4nHe input[type=checkbox]:checked+label:before{background:url(\'data:image/svg+xml;charset=utf-8,<svg width="42" height="42" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M21.034 42C9.435 42 0 32.579 0 21 0 9.42 9.435 0 21.034 0 32.63 0 42.068 9.42 42.068 21c0 11.579-9.437 21-21.034 21" fill="%23999"/><path d="M18.002 26.3l-5.423-5.62a1.483 1.483 0 0 0-2.113-.022 1.52 1.52 0 0 0-.018 2.139l6.152 6.315a3 3 0 0 0 4.256.041l12.754-12.59a1.493 1.493 0 0 0 .003-2.121 1.523 1.523 0 0 0-2.143-.004l-12.047 11.88a1 1 0 0 1-1.421-.017z" fill="%23FFF"/></g></svg>\') no-repeat 50%/100%}._3r4nHe label{display:inline-block}._3r4nHe label:before{content:"";display:inline-block;box-sizing:border-box;width:1.16667em;height:1.16667em;margin-right:.5em;vertical-align:bottom;background:url(\'data:image/svg+xml;charset=utf-8,<svg width="44" height="44" xmlns="http://www.w3.org/2000/svg"><path d="M22.034 43C10.435 43 1 33.579 1 22 1 10.42 10.435 1 22.034 1c11.597 0 21.034 9.42 21.034 21 0 11.579-9.437 21-21.034 21" stroke="%23999" fill="none"/></svg>\') no-repeat 50%/100%}._3r4nHe ._2Y4Iar:before{display:none}.RcwkhB{width:214px;height:44px;padding:0;border:none;outline:none;border-radius:6px;margin-top:15px;background:#3c76ff;line-height:44px;font-size:18px;color:#fff}', ""]),
    t.locals = {
        con: "_1rir_j",
        subscribe: "_3r4nHe",
        noCheckbox: "_2Y4Iar",
        button: "RcwkhB"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, '._1IMoHn{top:0;bottom:0;left:0;right:0;background-color:#000;opacity:.65}._1IMoHn,._3V9fzQ{position:fixed;z-index:2147483647}._3V9fzQ{top:30%;left:10%;right:10%;height:23%;min-height:167px;border-radius:4px;background-color:#fff;font-family:PingFangSC-Regular,STHeitiSC-Light,Helvetica Neue,Helvetica,Arial;font-size:100px;overflow:hidden;animation-name:_2JJvaA;-webkit-animation-name:_2JJvaA;animation-duration:.2s;-webkit-animation-duration:.2s;animation-timing-function:ease;-webkit-animation-timing-function:ease;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards}._24cLy_{height:72%}._24cLy_ ._2oe8j1{position:relative;height:65%;line-height:1;font-size:.24em;color:#333;text-align:center}._24cLy_ ._2oe8j1 div{position:relative;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%)}._24cLy_ .JaZIC_{height:35%;line-height:1;font-size:.16em;color:#999;text-align:center}._24cLy_ .JaZIC_ input[type=checkbox]{display:none}._24cLy_ .JaZIC_ input[type=checkbox]:checked+label:before{background:url(\'data:image/svg+xml;charset=utf-8,<svg width="42" height="42" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-3 -13)" fill="none" fill-rule="evenodd"><circle fill="%23555" cx="24" cy="34" r="21"/><path d="M20.903 39.276l-5.36-5.592a1.464 1.464 0 0 0-2.092-.022 1.52 1.52 0 0 0-.017 2.132l6.063 6.265a3 3 0 0 0 4.27.042l12.6-12.52a1.493 1.493 0 0 0 .003-2.114 1.503 1.503 0 0 0-2.122-.004L22.33 39.294a1 1 0 0 1-1.427-.018z" fill="%23FFF"/></g></svg>\') no-repeat 50%/.8em}._24cLy_ .JaZIC_ label{display:inline-block;vertical-align:middle}._24cLy_ .JaZIC_ label:before{content:"";display:inline-block;box-sizing:border-box;width:.8em;height:.8em;border:1px solid #555;border-radius:50%;margin:.1em 0;margin-right:.2em;vertical-align:top}.BGfIW9{height:28%;border-top:1px solid #e0e0e0;font-size:.18em}.BGfIW9 button{box-sizing:border-box;width:50%;height:100%;border:none;background:#fff;font-size:1em;color:#000;outline:none}.BGfIW9 ._2X9K4y{border-right:1px solid #e0e0e0}@keyframes _2JJvaA{0%{transform:scale(1.3);-webkit-transform:scale(1.3)}to{transform:scale(1);-webkit-transform:scale(1)}}@-webkit-keyframes _2JJvaA{0%{transform:scale(1.3);-webkit-transform:scale(1.3)}to{transform:scale(1);-webkit-transform:scale(1)}}', ""]),
    t.locals = {
        mask: "_1IMoHn",
        layout: "_3V9fzQ",
        "layout-fade-in": "_2JJvaA",
        content: "_24cLy_",
        title: "_2oe8j1",
        sub: "JaZIC_",
        buttons: "BGfIW9",
        okbtn: "_2X9K4y"
    }
},
,
function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
            var o = t.trim().replace(/^"(.*)"$/,
            function(e, t) {
                return t
            }).replace(/^'(.*)'$/,
            function(e, t) {
                return t
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return e;
            var i;
            return i = 0 === o.indexOf("//") ? o: 0 === o.indexOf("/") ? n + o: r + o.replace(/^\.\//, ""),
            "url(" + JSON.stringify(i) + ")"
        })
    }
},
function(e, t, n) {
    var r = n(24);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(25);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t) {},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        e = e || [];
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (String(r.third_id) === String(t)) return ! 0
        }
        return ! 1
    }
    function i(e) {
        var t = e.data = e.data || {
            appid: ""
        },
        n = t.appid;
        n || (n = (0, f.getAppid)(e.context)),
        (0, l.abLog)({
            ab: "isSubscribe",
            au: 0,
            s_id: n,
            clk_type: 0,
            sub_source: "",
            source: location.host
        }),
        (0, s.
    default)({
            url:
            h,
            type: "jsonp",
            data: {
                type: "dusite",
                sfrom: "dusite",
                third_id: n,
                store: t.store || "uid",
                _: (new Date).getTime()
            }
        }).then(function(t) {
            t.errno ? e.fail({
                result: !1,
                msg: t.errmsg || c.
            default.ERROR_FOLLOW_GET_ERROR_MSG,
                status: c.
            default.ERROR_FOLLOW_GET_ERROR
            }):
            o(t.data.items, n) ? e.success({
                result: !0,
                msg: "isSubscribe:ok",
                status: 0
            }) : e.success({
                result: !1,
                msg: "isSubscribe:ok",
                status: 0
            })
        }).fail(function(e) {
            fail({
                result: !1,
                msg: e.errmsg || c.
            default.ERROR_FOLLOW_GET_ERROR_MSG,
                status: c.
            default.ERROR_FOLLOW_GET_ERROR
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isSubscribe = void 0;
    var a = n(14),
    s = r(a),
    u = n(52),
    c = r(u),
    l = n(2),
    f = n(11),
    d = n(53),
    p = r(d),
    h = "https://ext.baidu.com/api/subscribe/v1/relation/get";
    t.isSubscribe = (0, p.
default)(function(e) {
        i(e)
    },
    {
        name: "isSubscribe"
    })
},
,
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) { (0, b.abLog)({
            ab: "authorize",
            au: 0,
            s_id: e,
            clk_type: 1,
            sub_source: "",
            source: location.host,
            ext: JSON.stringify(t)
        })
    }
    function i(e, t) { (0, x.
    default)(e, k),
        (0, b.abLog)({
            s_type: "action",
            ab: e.action,
            au: 0,
            s_id: t,
            sub_source: "",
            source: location.host,
            ext: JSON.stringify(e.ext || {})
        })
    }
    function a(e) {
        E = e
    }
    function s(e) {
        c(e)
    }
    function u(e) {
        return e.preventDefault(),
        e.stopPropagation(),
        document.body.removeEventListener("click", u, !1),
        !1
    }
    function c(e) {
        S || (S = document.createElement("div"), S.className = "cambrian-oauth-container", document.body.appendChild(S));
        var t = e.query,
        n = e.success,
        r = e.fail,
        o = e.complete,
        s = {
            copyLayer: a,
            serviceLog: i,
            query: t,
            success: n,
            fail: r,
            complete: o,
            currentBodyStyle: document.body.style.cssText,
            uuid: (0, b.uuid)()
        };
        E ? E.setState(f({},
        s, {
            clear: !1
        })) : (0, g.render)((0, g.h)(w.
    default, s), S),
        document.body.addEventListener("click", u, !1)
    }
    function l(e) {
        var t = e.data,
        n = void 0 === t ? {}: t,
        r = e.success,
        i = e.fail,
        a = e.context,
        u = e.complete,
        c = (0, h.getInsData)(a).val || {
            data: {}
        };
        n = f({},
        c.data, n);
        var l = n.office_info.appid;
        k = a;
        var d = n,
        p = d.ifSilent,
        b = void 0 === p || p,
        _ = d.redirect_uri,
        g = d.scope,
        y = void 0 === g ? 0 : g,
        w = d.pass_no_login,
        O = d.state,
        x = d.client_id,
        S = d.tp_client_id;
        if (b && !_) return o(l, {
            status: 1
        }),
        void i({
            status: v.
        default.ERROR_LOGIN_NEED_REDIRECT_URI,
            msg: v.
        default.ERROR_LOGIN_NEED_REDIRECT_URI_MSG
        });
        if (!x && !S) return o(l, {
            status: 1
        }),
        void i({
            status: v.
        default.ERROR_LOGIN_NEED_AUTH,
            msg: v.
        default.ERROR_LOGIN_NEED_AUTH_MSG
        });
        var E = {
            response_type: "code",
            redirect_uri: _,
            scope: R[y],
            pass_no_login: w,
            client_id: x,
            tp_client_id: S,
            state: O,
            ifSilent: b,
            appid: l
        },
        I = (0, m.getMIPEnv)(),
        C = {
            query: E,
            success: r,
            fail: i,
            complete: u
        };
        o(l, {
            status: 0
        }),
        s(C, I)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.authorize = void 0;
    var f = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    d = n(53),
    p = r(d),
    h = n(11),
    m = n(60),
    b = n(2),
    _ = n(52),
    v = r(_),
    g = n(1),
    y = n(102),
    w = r(y),
    O = n(125),
    x = r(O),
    R = ["snsapi_base", "snsapi_userinfo"],
    S = void 0,
    E = void 0,
    k = void 0;
    t.authorize = (0, p.
default)(function(e) {
        return l(e)
    },
    {
        name: "authorize"
    })
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e) {
        return (0, s.
    default)({
            url:
            b,
            type: "jsonp",
            data: i({},
            e, {
                rn: 3
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.comment = void 0;
    var i = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    a = n(14),
    s = r(a),
    u = n(1),
    c = n(53),
    l = r(c),
    f = n(11),
    d = n(52),
    p = r(d),
    h = n(112),
    m = r(h),
    b = "https://xiongzhang.baidu.com/opensc/comment/info";
    t.comment = (0, l.
default)(function(e) {
        var t = e.data,
        n = void 0 === t ? {}: t,
        r = (e.success, e.fail),
        a = e.context,
        s = (0, f.getAppid)(a),
        c = n.container,
        l = n.productId,
        d = n.sfUrl,
        h = void 0 === d ? "": d;
        if (!s) return void r({
            status: p.
        default.ERROR_NEED_APP_ID,
            msg: p.
        default.ERROR_NEED_APP_ID_MSG
        });
        if (!c) return void r({
            status: p.
        default.ERROR_NEED_CONTAINER,
            msg: p.
        default.ERROR_NEED_CONTAINER_MSG
        });
        var b = {};
        l && (b.product_id = l),
        s && !l && (b.xzh_id = s),
        o(b).then(function(e) {
            if (0 !== e.code) return void r({
                status: p.
            default.ERROR_SERVER_API,
                msg: e.msg
            }); (0, u.render)((0, u.h)(m.
        default, i({
                query: b,
                sfUrl: h,
                getData: o,
                fail: r
            },
            e.data)), c)
        }).fail(function() {
            r({
                status: p.
            default.ERROR_REQUEST_SERVER_API,
                msg: p.
            default.ERROR_REQUEST_SERVER_API_MSG
            })
        })
    },
    {
        name: "comment"
    })
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.invokeBcpIM = void 0;
    var r = n(53),
    o = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (r),
    i = n(11),
    a = n(55),
    s = n(6),
    u = function(e) {
        var t = Object.keys(e);
        t = t.filter(function(t) {
            return !! e[t]
        });
        var n = t.map(function(t) {
            return t + "=" + encodeURIComponent(e[t])
        });
        location.href = "https://ada.baidu.com/imlp/xzh?" + n.join("&")
    };
    t.invokeBcpIM = (0, o.
default)(function(e) {
        var t = e.data,
        n = void 0 === t ? {}: t,
        r = e.success,
        o = e.fail,
        c = e.context,
        l = n.paid,
        f = n.title,
        d = n.onlyWiseIM,
        p = void 0 !== d && d,
        h = n.sourceUrl,
        m = void 0 === h ? location.href: h,
        b = n.query,
        _ = n.area;
        if ((0, a.isBox)() && !p)(0, s.invokeIM)({
            data: {
                paid: l,
                title: f
            },
            success: r,
            fail: o,
            context: c
        });
        else {
            var v = (0, i.getInsData)(c).val.data,
            g = v.office_info.appid;
            u({
                xzhId: g,
                sourceUrl: m,
                query: b,
                area: _
            })
        }
    },
    {
        name: "invokeIM"
    })
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (0, c.isIOS)() && (0, u.isBox)() && window.navigator.userAgent.indexOf("light") < 0 ? "baiduboxapp://v1/easybrowse/open?url=" + encodeURIComponent(e) + "&style=%7b%22showtoolbar%22%3a%221%22%7d&newbrowser=1": e
    }
    function i(e) {
        var t = e.data,
        n = e.success,
        r = void 0 === n ?
        function() {}: n,
        i = e.fail,
        a = void 0 === i ?
        function() {}: i,
        u = t.url,
        c = t.payData,
        l = void 0 === c ? {}: c,
        f = t.isSlient,
        d = void 0 === f || f;
        if (!u) return void a({
            status: 104,
            msg: "\u7f3a\u5c11\u652f\u4ed8\u8bf7\u6c42\u5730\u5740"
        }); (0, s.
    default)({
            url:
            u,
            data: l,
            type: "jsonp"
        }).then(function(e) {
            if (e.code) a({
                status: e.code,
                msg: e.msg || "\u83b7\u53d6\u6536\u94f6\u53f0\u5730\u5740\u5f02\u5e38"
            });
            else if (r({
                msg: "payment:ok",
                status: 0,
                result: e.data.cashier_url || ""
            }), d) {
                var t = o(e.data.cashier_url);
                window.location.href = t
            }
        }).fail(function(e) {
            a({
                status: e.code,
                msg: e.msg || "\u83b7\u53d6\u6536\u94f6\u53f0\u5730\u5740\u5f02\u5e38"
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.payment = void 0;
    var a = n(14),
    s = r(a),
    u = n(55),
    c = n(57),
    l = n(53),
    f = r(l);
    t.payment = (0, f.
default)(function(e) {
        i(e)
    },
    {
        name: "payment"
    })
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.render = void 0;
    var r = n(22);
    t.render = function(e) {
        return e.data.abName = "render",
        (0, r.bar)(e)
    }
},
,
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.silentSubscribe = void 0;
    var o = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    i = n(1),
    a = n(53),
    s = r(a),
    u = n(52),
    c = r(u),
    l = n(11),
    f = n(5),
    d = n(120),
    p = r(d),
    h = null,
    m = {
        button: ["width", "color", "backgroundColor"]
    },
    b = function(e) {
        var t = {};
        for (var n in e) if (e.hasOwnProperty(n) && void 0 !== m[n]) {
            var r = e[n];
            t[n] = {};
            for (var o in r) r.hasOwnProperty(o) && -1 !== m[n].indexOf(o) && (t[n][o] = r[o])
        }
        return t
    };
    t.silentSubscribe = (0, s.
default)(function(e) {
        var t = e.data,
        n = void 0 === t ? {}: t,
        r = e.success,
        a = e.fail,
        s = e.context,
        u = n.container,
        d = n.style,
        m = void 0 === d ? {}: d,
        _ = n.btnText,
        v = void 0 === _ ? "\u8ba2\u5355\u5b8c\u6210": _;
        if (!u || !(0, l.isHTMLElement)(u)) return void a({
            status: c.
        default.ERROR_NEED_CONTAINER,
            msg: c.
        default.ERROR_NEED_CONTAINER_MSG
        });
        var g = (0, l.getInsData)(s).val.data;
        g.login || a({
            status: c.
        default.ERROR_NO_LOGIN,
            msg: c.
        default.ERROR_NO_LOGIN_MSG
        });
        var y = {};
        y.name = g.office_info.name,
        y.isSub = g.subscribe;
        var w = function(e) {
            r({
                status: 0,
                msg: "",
                data: {
                    isSub: e
                }
            })
        },
        O = function(e) { (0, l.isBaiduDomain)() && e ? (0, f.follow)({
                data: {
                    appid: g.office_info.appid,
                    opType: "add",
                    isSub2Box: !1
                },
                success: function() {
                    w(!0)
                },
                fail: function() {
                    w(!1)
                },
                context: s
            }) : (e && (g.subscribe = 1), w(e))
        },
        x = o(y, {
            cusStyle: b(m),
            btnText: v,
            btnClickHanlder: O,
            context: s
        });
        try {
            h = (0, i.render)((0, i.h)(p.
        default, x), u, h)
        } catch(e) {
            a({
                status: c.
            default.ERROR_PREACT_RENDER,
                msg: c.
            default.ERROR_PREACT_RENDER_MSG
            })
        }
    },
    {
        name: "silentSubscribe"
    })
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e) {
        var t = e.type,
        n = e.title,
        r = void 0 === n ? "": n,
        o = e.describe,
        i = void 0 === o ? "": o;
        if (r.length < 4 || r.length > 6) return ! 1;
        if ("force" === t) {
            if (i.length > 30 || i.length < 2) return ! 1
        } else if (i.length > 20) return ! 1;
        return ! 0
    }
    function i(e, t, n) { (0, d.abLog)({
            ab: "subscribe",
            au: 1,
            s_id: t,
            clk_type: 1,
            cst: "",
            ct: location.host,
            ext: JSON.stringify(n)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.subscribe = void 0;
    var a = n(1),
    s = n(121),
    u = r(s),
    c = n(4),
    l = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.
    default = e,
        t
    } (c),
    f = n(11),
    d = n(2),
    p = n(52),
    h = r(p),
    m = n(53),
    b = r(m);
    n(73);
    var _ = void 0;
    t.subscribe = (0, b.
default)(function(e) {
        var t = e.data,
        n = (0, f.getInsData)(e.context),
        r = n.val.data.office_info;
        if (!o(t)) return i(n, r.appid, {
            status: 1
        }),
        void e.fail({
            msg: h.
        default.ERROR_ILLEGAL_ARGS_MSG,
            status: h.
        default.ERROR_ILLEGAL_ARGS,
            result: 0
        });
        _ || (_ = document.createElement("div"), _.className = "cambrian-subcribe-container", document.body.appendChild(_));
        var s = t.type,
        c = void 0 === s ? "normal": s,
        d = t.title,
        p = void 0 === d ? "": d,
        m = t.describe,
        b = void 0 === m ? "": m,
        v = t.button,
        g = void 0 === v ? "\u5173\u6ce8": v,
        y = n.val.data,
        w = y.timestamp,
        O = y.login,
        x = y.url,
        R = y.signature,
        S = y.subscribe,
        E = y.nonce_str;
        if (y.auth_token, !R) return i(n, r.appid, {
            status: 2
        }),
        void e.fail({
            msg: h.
        default.ERROR_NO_OAUTH_DATA_MSG,
            status: h.
        default.ERROR_NO_OAUTH_DATA
        });
        var k = {
            appid: r.appid,
            timestamp: w,
            url: x,
            signature: R,
            type: c,
            title: p,
            describe: b,
            nonce_str: E,
            button: g,
            displayFrame: !0,
            onok: function(t) {
                var r = t.subscribe ? 1 : 0;
                n.val.data.subscribe = 1,
                l.setByAttrKey(n.id, "data", n.val.data),
                e.success({
                    msg: "subscribe:ok",
                    status: 0,
                    result: r
                })
            },
            onerror: function() {
                e.fail({
                    msg: h.
                default.ERROR_SUBSCRIBE_FAILED_MSG,
                    status: h.
                default.ERROR_SUBSCRIBE_FAILED,
                    result: 0
                })
            }
        };
        O && !S ? (i(n, r.appid, {
            status: 0
        }), (0, a.render)((0, a.h)(u.
    default, k), _)) : O ? S && (i(n, r.appid, {
            status: 4
        }), e.fail({
            msg: "\u5f53\u524d\u5df2\u662f\u5173\u6ce8\u72b6\u6001",
            status: 0,
            result: 2
        })) : (i(n, r.appid, {
            status: 3
        }), e.fail({
            msg: h.
        default.ERROR_NO_LOGIN_MSG,
            status: h.
        default.ERROR_NO_LOGIN,
            result: 0
        }))
    },
    {
        name: "subscribe",
        needAuth: !0
    })
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.subscribeBar = void 0;
    var o = n(22),
    i = n(11),
    a = n(53),
    s = r(a),
    u = n(52),
    c = r(u);
    t.subscribeBar = (0, s.
default)(function(e) {
        return e.data.btnType = "follow",
        e.data.abName = "subscribeBar",
        e.data.auVal = 1,
        (0, i.isBaiduDomain)() ? (0, o.bar)(e) : (0, i.getInsData)(e.context).val.data.signature ? void e.fail({
            msg: c.
        default.ERROR_ABILITY_NOT_READY_MSG,
            status: c.
        default.ERROR_ABILITY_NOT_READY
        }):
        void e.fail({
            msg:
            c.
        default.ERROR_NO_OAUTH_DATA_MSG,
            status: c.
        default.ERROR_NO_OAUTH_DATA
        })
    },
    {
        name: "subscribeBar"
    })
},
, , , , , , , , ,
function(e, t) {
    function n(e, t) {
        return a.cleanObj.toString.call(e).slice(8, -1) === t
    }
    var r = +new Date,
    o = (r + "").slice( - 3),
    i = navigator.userAgent,
    a = {
        isBoxApp: function(e) {
            return e = e || "",
            !1 !== / baiduboxapp\//i.test(i) && !(i.indexOf(e + " baiduboxapp") < 0)
        },
        isBox: / baiduboxapp\//i.test(i) && !/ (lite|info) baiduboxapp/.test(i),
        $isBox: function() {
            var e = window.navigator || {},
            t = e.userAgent;
            return / baiduboxapp\//i.test(t) && !/ (lite|info) baiduboxapp/.test(t)
        },
        isLiteBox: / (lite|info) baiduboxapp\//i.test(i),
        $isLiteBox: function() {
            return / (lite|info) baiduboxapp\//i.test((window.navigator || {}).userAgent)
        },
        isInfoBox: / info baiduboxapp\//i.test(i),
        $isInfoBox: function() {
            return / info baiduboxapp\//i.test((window.navigator || {}).userAgent)
        },
        isProBox: / pro baiduboxapp\//i.test(i),
        $isProBox: function() {
            return / pro baiduboxapp\//i.test((window.navigator || {}).userAgent)
        },
        isIOS: /(iPhone|iPod|iPad)/.test(i),
        $isIOS: function() {
            return /(iPhone|iPod|iPad)/.test((window.navigator || {}).userAgent)
        },
        isAndroid: /(Android);?[\s\/]+([\d.]+)?/.test(i),
        $isAndroid: function() {
            return /(Android);?[\s\/]+([\d.]+)?/.test((window.navigator || {}).userAgent)
        },
        getId: function() {
            return o++
        },
        emptyArr: [],
        emptyFn: function() {},
        cleanObj: {},
        byId: function(e) {
            return a.isString(e) ? document.getElementById(e) : e
        },
        toArray: function(e) {
            return a.emptyArr.slice.call(e)
        },
        $: function(e, t) {
            return t = t && 1 === t.nodeType ? t: document,
            a.toArray(t.querySelectorAll(e))
        }
    };
    "Function,String,Array,Number,RegExp".replace(/[^, ]+/g,
    function(e) {
        a["is" + e] = function(t) {
            return n(t, e)
        }
    }),
    a.isBoolean = function(e) {
        return ! 0 === e || !1 === e
    },
    a.isObject = function(e) {
        return "object" == typeof e
    },
    a.isUndefined = function(e) {
        return void 0 === e
    },
    a.isWindow = function(e) {
        return null != e && e == e.window
    },
    a.isPlainObject = function(e) {
        return a.isObject(e) && !a.isWindow(e) && Object.getPrototypeOf(e) == Object.prototype
    },
    a.cbWithoutCache = function(e, t) {
        var n = "_bdbox_js_" + a.getId();
        return window[n] = function(n) {
            try {
                n = a.isString(n) ? JSON.parse(n) : n
            } catch(e) {
                console.log("native callback params json parse error")
            }
            e(t && a.isFunction(t) ? t(n) : n)
        },
        n
    },
    a.sdkError = {
        COMMAND_NOT_EXIST: {
            errCode: 901,
            errMsg: "\u4e0d\u5b58\u5728\u6b64\u7aef\u80fd\u529b"
        },
        NOT_IN_BDBOX: {
            errCode: 902,
            errMsg: "\u624b\u767e\u5916\u65e0\u6cd5\u8c03\u7528\u7aef\u80fd\u529b"
        },
        COMMAND_FAIL: {
            errCode: 903,
            errMsg: "\u7aef\u80fd\u529b\u8c03\u7528\u5931\u8d25"
        },
        COMMAND_SUCCESS: {
            errCode: 0,
            errMsg: "\u8c03\u7528\u6210\u529f"
        }
    },
    e.exports = a
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = {
        ERROR_NO_LOGIN: 100,
        ERROR_NO_LOGIN_MSG: "\u7528\u6237\u672a\u767b\u5f55",
        ERROR_NO_PERMISSION: 101,
        ERROR_NO_PERMISSION_MSG: "\u65e0\u6743\u9650\u6216\u8005\u4e0d\u652f\u6301\u4f7f\u7528\u63a5\u53e3",
        ERROR_NO_EXISTENCE: 102,
        ERROR_NO_EXISTENCE_MSG: "\u63a5\u53e3\u4e0d\u5b58\u5728",
        ERROR_RUN_FAILED: 103,
        ERROR_RUN_FAILED_MSG: "\u63a5\u53e3\u8fd0\u884c\u51fa\u9519",
        ERROR_ILLEGAL_ARGS: 104,
        ERROR_ILLEGAL_ARGS_MSG: "\u53c2\u6570\u4e0d\u7b26\u5408\u8981\u6c42",
        ERROR_WRONG_APPID: 105,
        ERROR_WRONG_APPID_MSG: "\u718a\u638c\u53f7ID\u4e0d\u5b58\u5728",
        ERROR_LACK_PAID: 106,
        ERROR_LACK_PAID_MSG: "\u5fc5\u8981\u53c2\u6570\u7f3a\u5931: paid",
        ERROR_NO_OAUTH_DATA: 107,
        ERROR_NO_OAUTH_DATA_MSG: "\u7f3a\u5c11\u9274\u6743\u6570\u636e",
        ERROR_ABILITY_NOT_READY: 108,
        ERROR_ABILITY_NOT_READY_MSG: "\u80fd\u529b\u5c1a\u672a\u5f00\u653e",
        ERROR_INSTANCE: 109,
        ERROR_INSTANCE_MSG: "\u83b7\u53d6\u5b9e\u4f8b\u5931\u8d25",
        ERROR_NO_INIT: 110,
        ERROR_NO_INIT_MSG: "\u80fd\u529b\u5c1a\u672a\u8fdb\u884c\u521d\u59cb\u5316",
        ERROR_BAR_SHIELD: 111,
        ERROR_BAR_SHIELD_MSG: "\u718a\u638c\u53f7Bar\u5728\u624b\u767e\uff089.3+\uff09\u4e2d\u5c4f\u853d\u663e\u793a",
        ERROR_SUBSCRIBE_FAILED: 201,
        ERROR_SUBSCRIBE_FAILED_MSG: "\u5173\u6ce8\u529f\u80fd\u5f02\u5e38\uff0c\u8bf7\u68c0\u67e5\u6821\u9a8c\u6570\u636e",
        ERROR_IM_ENV: 301,
        ERROR_IM_ENV_MSG: "\u975e\u624b\u767e\u73af\u5883\u4e0d\u652f\u6301IM",
        ERROR_IM_LOGIN: 302,
        ERROR_IM_LOGIN_MSG: "\u767b\u5f55\u5931\u8d25",
        ERROR_IM_INVOKE: 303,
        ERROR_IM_INVOKE_MSG: "\u8c03\u8d77IM\u5931\u8d25",
        ERROR_INVOKE_LOGIN_FAIL: 304,
        ERROR_INVOKE_LOGIN_FAIL_MSG: "\u8c03\u8d77\u767b\u5f55\u5931\u8d25",
        ERROR_FOLLOW_FAILED: 400,
        ERROR_FOLLOW_FAILED_MSG: "\u5173\u6ce8\u5931\u8d25",
        ERROR_FOLLOW_LOGIN: 401,
        ERROR_FOLLOW_LOGIN_MSG: "\u672a\u767b\u5f55",
        ERROR_FOLLOW_GET_ERROR: 402,
        ERROR_FOLLOW_GET_ERROR_MSG: "\u83b7\u53d6\u72b6\u6001\u5f02\u5e38",
        ERROR_ABILITY_FORBIDDEN: 403,
        ERROR_ABILITY_FORBIDDEN_MSG: "\u65e0\u6743\u9650\u8c03\u7528\u6b64\u80fd\u529b",
        ERROR_OAUTH_API_EXCEPTION: 1,
        ERROR_OAUTH_API_EXCEPTION_MSG: "\u5f02\u6b65\u9274\u6743\u63a5\u53e3\u5f02\u5e38",
        ERROR_LOGIN_NEED_REDIRECT_URI: 10,
        ERROR_LOGIN_NEED_REDIRECT_URI_MSG: "redirect_uri\u53c2\u6570\u5fc5\u586b",
        ERROR_LOGIN_NEED_AUTH: 20,
        ERROR_LOGIN_NEED_AUTH_MSG: "client_id\u53c2\u6570\u5fc5\u586b",
        ERROR_TEL_NEED_TEL: 30,
        ERROR_TEL_NEED_TEL_MSG: "tel\u53c2\u6570\u5fc5\u586b",
        ERROR_NEED_APP_ID: 40,
        ERROR_NEED_APP_ID_MSG: "\u5fc5\u8981\u53c2\u6570\u7f3a\u5931: appid",
        ERROR_REQUEST_SERVER_API: 50,
        ERROR_REQUEST_SERVER_API_MSG: "\u8bf7\u6c42\u670d\u52a1\u7aef\u63a5\u53e3\u9519\u8bef",
        ERROR_SERVER_API: 60,
        ERROR_NEED_CONTAINER: 70,
        ERROR_NEED_CONTAINER_MSG: "container\u53c2\u6570\u5fc5\u586b",
        ERROR_NEED_PRODUCTID: 80,
        ERROR_NEED_PRODUCTID_MSG: "\u670d\u52a1skuID\u4e0e\u718a\u638c\u53f7ID\u5fc5\u586b\u5176\u4e00",
        ERROR_PREACT_RENDER: 90,
        ERROR_PREACT_RENDER_MSG: "\u7ec4\u4ef6\u6e32\u67d3\u9519\u8bef"
    }
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.status || d.globalPrivate.status
    }
    function o(e, t) {
        return "destory" === r(e) && "destory" !== t
    }
    function i(e, t) {
        return "init" !== t && "destory" !== t && "destory" === r(e)
    }
    function a(e, t) {
        return "init" === t || "destory" === t || "init" === r(e)
    }
    function s(e, t) {
        if ("online" === h) {
            var n = e.ct,
            r = e.st,
            o = e.cltype,
            i = e.name;
            "destory" !== i && (0, c.sendLog)({
                it: r - n,
                et: (new Date).getTime() - r,
                cltype: o,
                s_type: "pfm",
                ab: i
            },
            t)
        }
    }
    function u(e, t) {
        if ("init" === t || "destory" === t) return ! 0;
        var n = (0, c.getInsData)(e),
        r = n.val.data,
        o = r.schemes,
        i = void 0 === o ? [] : o,
        a = r.abilities,
        s = void 0 === a ? [] : a;
        return - 1 !== i.concat(s).indexOf(t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = null,
            l = p,
            d = p;
            if ((0, c.isObject)(n)) {
                if (!n.success && !n.fail) {
                    var h = m();
                    r = h.promise,
                    l = h.succ,
                    d = h.failure
                }
                var b = n.success,
                _ = void 0 === b ? l: b,
                v = n.fail,
                g = void 0 === v ? d: v,
                y = n.complete,
                w = void 0 === y ? p: y,
                O = n.context,
                x = void 0 === O ? {}: O,
                R = n.log,
                S = void 0 === R ? {}: R,
                E = t.name || "",
                k = {
                    status: f.
                default.ERROR_INSTANCE,
                    msg: f.
                default.ERROR_INSTANCE_MSG
                };
                if (n.success = function() {
                    if (s(S, x), o(x, E)) return void n.fail(k);
                    _.apply(void 0, arguments),
                    w.apply(void 0, arguments)
                },
                n.fail = function() {
                    if (s(S, x), o(x, E)) return g(k),
                    void w(k);
                    g.apply(void 0, arguments),
                    w.apply(void 0, arguments)
                },
                i(x, E)) return void n.fail(k);
                if (!a(x, E)) return void n.fail({
                    status: f.
                default.ERROR_NO_INIT,
                    msg: f.
                default.ERROR_NO_INIT_MSG
                });
                if (!u(x, E)) return void n.fail({
                    status: f.
                default.ERROR_ABILITY_FORBIDDEN,
                    msg: f.
                default.ERROR_ABILITY_FORBIDDEN_MSG
                })
            }
            var I = e(n);
            return null !== r ? r: I
        }
    };
    var c = n(11),
    l = n(52),
    f = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (l),
    d = n(15),
    p = function() {},
    h = "online",
    m = function() {
        var e = void 0,
        t = void 0;
        return {
            promise: new Promise(function(n, r) {
                e = n,
                t = r
            }),
            succ: function(t) {
                e(t)
            },
            failure: function(e) {
                t(e)
            }
        }
    }
},
function(e, t, n) {
    function r(e) {
        var t = "",
        n = "",
        r = {};
        if (i.isObject(e)) t = e.errCode >= 0 ? e.errCode: +e.status,
        n = e.errMsg || e.message,
        r = e.data;
        else {
            try {
                e = JSON.parse(e)
            } catch(e) {
                console.log(e)
            }
            t = +e.status || e,
            r = e.data || arguments[1]
        }
        return {
            errCode: t,
            errMsg: n,
            data: r || {}
        }
    }
    function o(e) {
        for (var t in e)"number" == typeof e[t] ? e[t] = "" + e[t] : "object" == typeof e[t] && (e[t] = o(e[t]));
        return e
    }
    var i = n(51),
    a = n(88),
    s = n(58),
    u = n(86),
    c = n(100),
    l = n(96),
    f = n(56),
    d = (f.versionCompare, f.boxVersion, n(26));
    e.exports = function(e, t) {
        var n = s[e];
        if ("swan" === window.searchboxBoxjsId && t && !t.cancelNumTostr && (t = o(t)), e.match("Sync")) {
            if (!e) return i.sdkError.COMMAND_NOT_EXIST;
            if (!i.isBoxApp()) return i.sdkError.NOT_IN_BDBOX;
            var f = "",
            p = function() {},
            h = c.getWhoCanHandle(e);
            f = "old" === h ? u(e, t || {},
            p) : "new" === h ? a(e, t || {},
            p, n) : i.sdkError.COMMAND_NOT_EXIST;
            var m = r(f);
            return m = n.thunk ? n.thunk(m) : m,
            0 === m.errCode ? m.data: (l(window.searchboxBoxjsId, "fail_" + e, m), m)
        }
        return new d(function(o, s) {
            if (!e) return void s(i.sdkError.COMMAND_NOT_EXIST);
            if (!i.isBoxApp()) return void s(i.sdkError.NOT_IN_BDBOX);
            var f = function(t) {
                var n = r(t);
                0 === n.errCode ? o(n.data) : (l(window.searchboxBoxjsId, "fail_" + e, n), s({
                    errCode: n.errCode,
                    errMsg: n.errMsg
                }))
            },
            d = c.getWhoCanHandle(e);
            "old" === d ? u(e, t || {},
            f) : "new" === d ? a(e, t || {},
            f, n) : s(i.sdkError.COMMAND_NOT_EXIST)
        })
    }
},
function(e, t, n) {
    "use strict";
    function r() {
        var e = /SearchCraft\/([\d+.]+)/.exec(h);
        return e ? e[1] : 0
    }
    function o() {
        return / searchcraft\//i.test(h)
    }
    function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return ! 1 !== / baiduboxapp\//i.test(h) && !(h.indexOf(e + " baiduboxapp") < 0)
    }
    function a() {
        return / baiduboxapp\//i.test(h) && !/ (lite|info) baiduboxapp/.test(h)
    }
    function s() {
        return / (lite|info) baiduboxapp\//i.test(h)
    }
    function u() {
        return / info baiduboxapp\//i.test(h)
    }
    function c() {
        return / pro baiduboxapp\//i.test(h)
    }
    function l() {
        if (null !== m) return m;
        m = 0;
        var e = void 0;
        if (a()) {
            var t = navigator.userAgent;
            if (e = /([\d+.]+)_(?:diordna|enohpi)_/.exec(t)) {
                e = e[1].split(".");
                for (var n = 0; n < e.length; n++) e[n] = e[n].split("").reverse().join("");
                m = e.reverse().join(".")
            } else(e = /baiduboxapp\/([\d+.]+)/.exec(t)) && (m = e[1])
        }
        return m
    }
    function f() {
        if (null !== b) return b;
        if (b = 0, u()) {
            var e = navigator.userAgent,
            t = /baiduboxapp\/([\d+.]+)/.exec(e);
            t && (b = t[1])
        }
        return b
    }
    function d() {
        if (null !== _) return _;
        if (_ = 0, s()) {
            var e = navigator.userAgent,
            t = /baiduboxapp\/([\d+.]+)/.exec(e);
            t && (_ = t[1])
        }
        return _
    }
    function p() {
        if (null !== v) return v;
        if (v = 0, c()) {
            var e = navigator.userAgent,
            t = /baiduboxapp\/([\d+.]+)/.exec(e);
            t && (v = t[1])
        }
        return v
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getSCVersion = r,
    t.isSearchCraft = o,
    t.isBoxApp = i,
    t.isBox = a,
    t.isLiteBox = s,
    t.isInfoBox = u,
    t.isProBox = c,
    t.getVersion = l,
    t.getInfoVersion = f,
    t.getLiteVersion = d,
    t.getProVersion = p;
    var h = navigator.userAgent,
    m = null,
    b = null,
    _ = null,
    v = null;
    t.boxVersion = f() || d() || l()
},
function(e, t, n) {
    var r = n(51),
    o = n(65),
    i = n(64),
    a = n(93),
    s = n(63),
    u = n(94),
    c = n(92).apply(r);
    e.exports = {
        versionCompare: o,
        isIOS: r.isIOS,
        isAndroid: r.isAndroid,
        os: r.isIOS ? "ios": r.isAndroid ? "android": "none",
        osVersion: c.version,
        isBox: r.isBoxApp(),
        boxType: r.isProBox ? "pro": r.isInfoBox ? "info": r.isLiteBox ? "lite": "main",
        boxVersion: u() || a() || s() || i()
    }
},
function(e, t, n) {
    "use strict";
    function r() {
        return /(iPhone|iPod|iPad)/.test((window.navigator || {}).userAgent)
    }
    function o() {
        return /(Android);?[\s\/]+([\d.]+)?/.test((window.navigator || {}).userAgent)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isIOS = r,
    t.isAndroid = o
},
function(e, t) {
    e.exports = {}
},
function(e, t, n) {
    function r(e, t, n) {
        for (var o in t) n && (i(t[o]) || a(t[o])) ? (i(t[o]) && !i(e[o]) && (e[o] = {}), a(t[o]) && !a(e[o]) && (e[o] = []), r(e[o], t[o], n)) : u(t[o]) || (e[o] = t[o])
    }
    var o = n(51),
    i = o.isPlainObject,
    a = o.isArray,
    s = o.isBoolean,
    u = o.isUndefined;
    e.exports = function(e) {
        var t, n = o.emptyArr.slice.call(arguments, 1);
        return s(e) && (t = e, e = n.shift()),
        n.forEach(function(n) {
            r(e, n, t)
        }),
        e
    }
},
function(e, t, n) {
    "use strict";
    function r() {
        var e = "normal";
        return window.fif ? e = "search": window.MIP && (e = void 0 !== window.MIP.standalone ? window.MIP.standalone ? "mip2-alone": "mip2-sf": 0 === window.name.indexOf("iframe-shell") ? "mip1-sf": "mip1-alone"),
        e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getMIPEnv = r
},
function(e, t) {
    e.exports = {}
},
function(e, t, n) {
    var r = {},
    o = n(75),
    i = n(59),
    a = n(99);
    r.platform = o.platform,
    r.init = function(e) {
        window.searchboxBoxjsId = e.id,
        i(r, o),
        function() {
            e.oauth && "object" == typeof e.oauth ? a(e).then(function(t) {
                e.success && e.success(t)
            }).
            catch(function(t) {
                e.success && e.success(t)
            }) : e.success && e.success({
                errCode: 0,
                errMsg: "success"
            })
        } ()
    },
    e.exports = r
},
function(e, t, n) {
    var r = n(51),
    o = function() {
        var e = 0;
        if (r.$isLiteBox()) {
            var t; (t = /baiduboxapp\/([\d+.]+)/.exec(navigator.userAgent)) && (e = t[1])
        }
        return o = function() {
            return e
        },
        e
    };
    e.exports = o
},
function(e, t, n) {
    var r = n(51),
    o = function() {
        var e = 0;
        if (window.baiduboxapp_version) e = window.baiduboxapp_version;
        else if (r.$isBox()) {
            var t, n = navigator.userAgent; (t = /([\d+.]+)_(?:diordna|enohpi)_/.exec(n)) ? (t = t[1].split("."), e = t.reverse().join(".")) : (t = /baiduboxapp\/([\d+.]+)/.exec(n)) && (e = t[1])
        }
        return o = function() {
            return e
        },
        e
    };
    e.exports = o
},
function(e, t, n) {
    var r = (n(51),
    function(e, t) {
        t += "",
        e += "";
        for (var n = e.split("."), r = t.split("."), o = 0, i = Math.max(n.length, r.length); o < i; o++) {
            if (n[o] && !r[o] && parseInt(n[o]) > 0 || parseInt(n[o]) > parseInt(r[o])) return 1;
            if (r[o] && !n[o] && parseInt(r[o]) > 0 || parseInt(n[o]) < parseInt(r[o])) return - 1
        }
        return 0
    });
    e.exports = r
},
function(e, t) {
    e.exports = ["swan"]
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    u = n(1),
    c = n(68),
    l = r(c),
    f = n(150),
    d = r(f),
    p = n(5),
    h = function(e) {
        function t() {
            var e, n, r, a;
            o(this, t);
            for (var s = arguments.length,
            u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
            return n = r = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))),
            r.state = {
                btnName: "",
                subFlag: !1,
                subscribe: 0,
                btnStatus: 0
            },
            r.btnHandler = function() {
                var e = r.props,
                t = e.homepage,
                n = e.subscribeType,
                o = e.isSub2Box,
                i = void 0 === o || o,
                a = e.success,
                s = e.fail,
                u = e.context,
                c = r.state,
                l = c.subFlag,
                f = c.subscribe,
                d = c.btnStatus;
                if (l) {
                    if (d) return;
                    if (r.setState({
                        btnStatus: 1
                    }), !f) return void(0, p.doFollow)({
                        opType: "add",
                        isSub2Box: i,
                        appid: r.props.appid || r.props.office_info.appid,
                        success: function(e) {
                            r.setState({
                                btnName: e.result ? "\u67e5\u770b": "\u5173\u6ce8",
                                subscribe: e.result ? 1 : 0,
                                btnStatus: 0,
                                subFlag: !e.result
                            }),
                            a({
                                result: e.result ? 1 : 0,
                                status: 0,
                                msg: "barFollow:ok"
                            })
                        },
                        fail: function(e) {
                            r.setState({
                                btnStatus: 0
                            }),
                            s({
                                status: e.status,
                                msg: e.msg
                            })
                        },
                        source: "dusite_sdk_subbar",
                        context: u
                    })
                }
                window.location.href = t[n]
            },
            r.jump = function() {
                var e = r.props,
                t = e.homepage,
                n = e.infoLinkType;
                window.location.href = t[n]
            },
            a = n,
            i(r, a)
        }
        return a(t, e),
        s(t, [{
            key: "componentWillMount",
            value: function() {
                var e = "\u67e5\u770b",
                t = !1,
                n = this.props,
                r = n.subscribe,
                o = n.btnType,
                i = void 0 === o ? "home": o,
                a = n.styleType,
                s = void 0 === a ? "normal": a;
                "follow" === i && (e = r ? "\u67e5\u770b": "\u5173\u6ce8", t = !r),
                this.setState({
                    btnName: e,
                    subFlag: t,
                    styleType: s,
                    subscribe: r ? 1 : 0
                })
            }
        },
        {
            key: "render",
            value: function() {
                var e = this.props.office_info,
                t = e.avatar,
                n = e.name,
                r = e.description,
                o = this.state,
                i = o.btnName,
                a = o.styleType;
                return (0, u.h)("div", {
                    class: d.
                default.bar
                },
                (0, u.h)("div", {
                    class: d.
                default.subscribe + " " + d.
                default[a],
                    onTouchStart: function() {}
                },
                (0, u.h)(l.
            default, {
                    text: i,
                    type: a,
                    click: this.btnHandler
                })), (0, u.h)("div", {
                    class: d.
                default.infowrapper,
                    onclick: this.jump
                },
                (0, u.h)("div", {
                    class: d.
                default.logowrapper
                },
                (0, u.h)("img", {
                    src: t,
                    class: d.
                default.logo
                })), (0, u.h)("div", {
                    class: d.
                default.info
                },
                (0, u.h)("div", {
                    class: d.
                default.nameWapper
                },
                (0, u.h)("div", {
                    class: d.
                default.name
                },
                n)), (0, u.h)("div", {
                    class: d.
                default.gfh
                },
                r))))
            }
        }]),
        t
    } (u.Component);
    t.
default = h
},
function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    s = n(1),
    u = n(152),
    c = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (u),
    l = function(e) {
        function t() {
            return r(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return i(t, e),
        a(t, [{
            key: "render",
            value: function() {
                var e = this.props.click,
                t = this.props.type || "";
                return (0, s.h)("div", {
                    class: c.
                default.button + " " + (c.
                default[t] || ""),
                    onClick: e
                },
                this.props.text)
            }
        }]),
        t
    } (s.Component);
    t.
default = l
},
function(e, t, n) {
    "use strict";
    function r(e) {
        var t = "XZH_SC_CALLBACK_" + (new Date).getTime() + a++;
        return window[t] = function() {
            for (var n = arguments.length,
            r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            e.apply(null, r),
            delete window[t]
        },
        t
    }
    function o(e) {
        try { (0, i.isIOS)() ? window.Viaduct.postMessage(e) : (0, i.isAndroid)() && window.Viaduct.postMessage(JSON.stringify(e))
        } catch(t) {
            console.error("\u9519\u8bef: \u5f53\u524d\u73af\u5883\u4e0d\u652f\u6301\u8be5\u65b9\u6cd5"),
            e.options.callback && window[e.options.callback]()
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.newCallback = r,
    t.invokeSC = o;
    var i = n(57),
    a = 0
},
function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    u = n(1),
    c = n(2),
    l = n(11),
    f = n(164),
    d = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (f),
    p = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.messageHandles = {
                ready: function() {
                    this.sendMessage("init", this.options)
                },
                mounted: function(e) {
                    this.props.needSelfAdapt && this.setState({
                        selfAdaptStyle: e
                    }),
                    this.show()
                },
                hide: function() {
                    this.hide()
                },
                fail: function(e) {
                    if (!this.props.fail) throw e;
                    this.props.fail(e)
                }
            },
            n.onMessage = function(e) {
                if (e && e.data && e.data.uuid === n.uuid) {
                    var t = e.data,
                    r = t.type,
                    o = t.data;
                    n.messageHandles[r] && n.messageHandles[r].call(n, o)
                }
            },
            n.state.displayShadow = !1,
            n.state.selfAdaptStyle = {},
            n.uuid = (0, c.uuid)(),
            n.ins = (0, l.getInsData)(n.props.context),
            n.options = n.handleOptions(n.props.options),
            n.options.renderType = n.props.type,
            n
        }
        return i(t, e),
        s(t, [{
            key: "componentDidMount",
            value: function() {
                window.addEventListener("message", this.onMessage, !1)
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                this.options = this.handleOptions(e.options),
                this.options.renderType = e.type,
                e.options.displayShadow && this.setState({
                    displayShadow: e.options.displayShadow
                }),
                this.sendMessage("update", this.options)
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("message", this.onMessage, !1)
            }
        },
        {
            key: "handleOptions",
            value: function(e) {
                var t = this,
                n = a({},
                e);
                for (var r in e) !
                function(r) {
                    e.hasOwnProperty(r) && (0, l.isFunction)(e[r]) && (t.messageHandles[r] = function(t) {
                        e[r](t && JSON.parse(t))
                    },
                    n[r] = {
                        type: "callByMsg"
                    })
                } (r);
                return n
            }
        },
        {
            key: "sendMessage",
            value: function(e, t) {
                window.frames[this.uuid].postMessage({
                    type: e,
                    data: t
                },
                "*")
            }
        },
        {
            key: "show",
            value: function() {
                this.setState({
                    displayShadow: !0
                })
            }
        },
        {
            key: "hide",
            value: function() {
                this.setState({
                    displayShadow: !1
                }),
                this.props.hide && this.props.hide()
            }
        },
        {
            key: "render",
            value: function() {
                var e = this.ins.val.data,
                t = e.office_info.appid,
                n = e.timestamp,
                r = e.url,
                o = e.signature,
                i = e.nonce_str,
                s = "https://msite.baidu.com/sdk/2.0/shadow?appid=" + t + "&timestamp=" + n + "&url=" + r + "&signature=" + o + "&nonce_str=" + i,
                c = this.uuid,
                l = this.props,
                f = l.style,
                p = void 0 === f ? {}: f,
                h = l.needSelfAdapt,
                m = void 0 !== h && h,
                b = a({},
                p),
                _ = this.state,
                v = _.displayShadow,
                g = _.selfAdaptStyle;
                return m ? (b.clip = v ? "auto": "rect(0 0 0 0)", b.position = v ? p.position || "static": "absolute", a(b, g)) : b.display = v ? "block": "none",
                (0, u.h)("div", {
                    style: a({},
                    b)
                },
                (0, u.h)("iframe", {
                    name: c,
                    className: d.
                default.iframe,
                    src: s
                }))
            }
        }]),
        t
    } (u.Component);
    t.
default = p
},
function(e, t, n) {
    "use strict";
    var r = String.prototype.replace,
    o = /%20/g;
    e.exports = {
    default:
        "RFC3986",
        formatters: {
            RFC1738: function(e) {
                return r.call(e, o, "+")
            },
            RFC3986: function(e) {
                return e
            }
        },
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    }
},
function(e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty,
    o = function() {
        for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0": "") + t.toString(16)).toUpperCase());
        return e
    } (),
    i = function(e) {
        for (var t; e.length;) {
            var n = e.pop();
            if (t = n.obj[n.prop], Array.isArray(t)) {
                for (var r = [], o = 0; o < t.length; ++o) void 0 !== t[o] && r.push(t[o]);
                n.obj[n.prop] = r
            }
        }
        return t
    };
    t.arrayToObject = function(e, t) {
        for (var n = t && t.plainObjects ? Object.create(null) : {},
        r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
        return n
    },
    t.merge = function(e, n, o) {
        if (!n) return e;
        if ("object" != typeof n) {
            if (Array.isArray(e)) e.push(n);
            else {
                if ("object" != typeof e) return [e, n]; (o.plainObjects || o.allowPrototypes || !r.call(Object.prototype, n)) && (e[n] = !0)
            }
            return e
        }
        if ("object" != typeof e) return [e].concat(n);
        var i = e;
        return Array.isArray(e) && !Array.isArray(n) && (i = t.arrayToObject(e, o)),
        Array.isArray(e) && Array.isArray(n) ? (n.forEach(function(n, i) {
            r.call(e, i) ? e[i] && "object" == typeof e[i] ? e[i] = t.merge(e[i], n, o) : e.push(n) : e[i] = n
        }), e) : Object.keys(n).reduce(function(e, i) {
            var a = n[i];
            return r.call(e, i) ? e[i] = t.merge(e[i], a, o) : e[i] = a,
            e
        },
        i)
    },
    t.assign = function(e, t) {
        return Object.keys(t).reduce(function(e, n) {
            return e[n] = t[n],
            e
        },
        e)
    },
    t.decode = function(e) {
        try {
            return decodeURIComponent(e.replace(/\+/g, " "))
        } catch(t) {
            return e
        }
    },
    t.encode = function(e) {
        if (0 === e.length) return e;
        for (var t = "string" == typeof e ? e: String(e), n = "", r = 0; r < t.length; ++r) {
            var i = t.charCodeAt(r);
            45 === i || 46 === i || 95 === i || 126 === i || i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 ? n += t.charAt(r) : i < 128 ? n += o[i] : i < 2048 ? n += o[192 | i >> 6] + o[128 | 63 & i] : i < 55296 || i >= 57344 ? n += o[224 | i >> 12] + o[128 | i >> 6 & 63] + o[128 | 63 & i] : (r += 1, i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(r)), n += o[240 | i >> 18] + o[128 | i >> 12 & 63] + o[128 | i >> 6 & 63] + o[128 | 63 & i])
        }
        return n
    },
    t.compact = function(e) {
        for (var t = [{
            obj: {
                o: e
            },
            prop: "o"
        }], n = [], r = 0; r < t.length; ++r) for (var o = t[r], a = o.obj[o.prop], s = Object.keys(a), u = 0; u < s.length; ++u) {
            var c = s[u],
            l = a[c];
            "object" == typeof l && null !== l && -1 === n.indexOf(l) && (t.push({
                obj: a,
                prop: c
            }), n.push(l))
        }
        return i(t)
    },
    t.isRegExp = function(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e)
    },
    t.isBuffer = function(e) {
        return null !== e && void 0 !== e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    }
},
function(e, t, n) {
    var r = n(145);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = (n(51), n(90), n(56));
    r.versionCompare,
    r.boxVersion,
    e.exports = {
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
                filter: function(e, t, n) {
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
                filter: function(e, t, n) {
                    var r = {
                        imageUrl: n.iconUrl,
                        title: n.title,
                        content: n.content,
                        linkUrl: n.linkUrl,
                        mediaType: n.mediaType,
                        channel: n.pannel,
                        shareSuccessCB: n.shareSuccessCB || "console.log",
                        shareErrorCB: n.shareErrorCB || "console.log"
                    };
                    return "audio" === n.type ? r.type = "2": "image" === n.type ? r.type = "3": "video" === n.type ? r.type = "4": r.type = "1",
                    {
                        module: "Bdbox_android_utils",
                        action: "callShare",
                        data: r
                    }
                }
            }
        },
        "toast/open": {
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
                versionRange: ["6.0"],
                hasCB: !1,
                filter: function(e, t, n) {
                    return {
                        module: "utils",
                        action: "toast",
                        extData: {
                            minver: "6.0.0.0"
                        },
                        data: n.message,
                        paramName: "string"
                    }
                }
            },
            android: {
                versionRange: ["4.0"],
                hasCB: !1,
                filter: function(e, t, n) {
                    return {
                        module: "Bdbox_android_utils",
                        action: "toast",
                        data: n.message,
                        paramName: "string"
                    }
                }
            }
        },
        "account/openLoginDialog": {
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
                versionRange: ["5.5"],
                filter: function() {
                    return {
                        module: "account",
                        action: "logindialog",
                        extData: {
                            minver: "5.5.0.0"
                        }
                    }
                },
                thunk: function(e) {
                    return {
                        status: e,
                        message: ""
                    }
                }
            },
            android: {
                versionRange: ["5.5"],
                filter: function() {
                    return {
                        module: "Bdbox_android_account",
                        action: "loginDialog"
                    }
                },
                thunk: function(e) {
                    return {
                        status: e,
                        message: ""
                    }
                }
            }
        }
    }
},
function(e, t, n) {
    var r = n(101),
    o = n(59),
    i = n(61),
    a = n(58),
    s = n(74),
    u = n(76);
    o(i, s),
    o(a, u),
    e.exports = r
},
function(e, t) {
    e.exports = {
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
        },
        "public/oauth": {
            v: 16,
            versionRange: ["10.0"],
            filter: function() {
                return {
                    module: "public/thirdPart",
                    action: "config"
                }
            }
        }
    }
},
function(e, t, n) {
    var r = n(54);
    e.exports = {
        delete: function(e, t) {
            var n = {
                key: e,
                data: encodeURIComponent(JSON.stringify(t))
            };
            return r("storage/delete", n)
        },
        get: function(e, t) {
            return r("storage/get", {
                key: e,
                domain: t
            })
        },
        set: function(e, t, n) {
            var o = {
                key: e,
                data: encodeURIComponent(JSON.stringify(t)),
                trustedDomains: n
            };
            return r("storage/set", o)
        }
    }
},
function(e, t, n) {
    function r(e, t) {
        var n = "",
        r = "";
        return "toggle" === t ? (n = e.name, r = e.type) : (n = e.name.split("-")[1], r = e.name.split("-")[0]),
        [r, t + n.substring(0, 1).toUpperCase() + n.substring(1)].join("/")
    }
    var o = n(54);
    e.exports = {
        get: function(e) {
            var t = r(e, "get");
            return o(t, e.data)
        },
        set: function(e) {
            var t = r(e, "set");
            return o(t, e.data)
        },
        toggle: function(e) {
            var t = r(e, "toggle"),
            n = 0;
            e.status && (n = (parseInt(e.status, 10) + 1) % 2);
            var i = e.data || {};
            return i.status = n + "",
            o(t, i)
        }
    }
},
function(e, t, n) {
    var r = n(54);
    e.exports = {
        cuid: function() {
            return r("utils/getCUID", {})
        },
        info: function(e) {
            var t = {},
            n = [],
            o = "",
            i = "";
            switch ("string" == typeof e ? (i = e, n.push(e)) : (i = e[0], n = e), i) {
            case "netInfo":
                o = "utils/getDeviceInfo",
                t = {
                    keys: n
                };
                break;
            case "screenInfo":
                o = "utils/getScreenInfo",
                t = {
                    keys: n
                };
                break;
            case "platformInfo":
                o = "utils/getPlatformInfo"
            }
            return r(o, t)
        },
        location: function(e) {
            return r("utils/location", {
                coor_type: e
            })
        }
    }
},
function(e, t, n) {
    function r(e, t) {
        var n = "datachannel/" + t,
        r = e.data || {};
        return r.name = e.name,
        o(n, r)
    }
    var o = n(54);
    e.exports = {
        fire: function(e) {
            return r(e, "sendbroadcast")
        },
        on: function(e) {
            return r(e, "register")
        },
        off: function(e) {
            return r(e, "unregister")
        }
    }
},
function(e, t, n) {
    var r = n(54),
    o = {
        durationDisappear: "ubc/duration/disappear",
        durationAppear: "ubc/duration/appear",
        reliableLog: "utils/onReliableLog",
        performanceFlowEvent: "utils/onPerformanceFlowEvent",
        ubcReport: "utils/ubcReport",
        feedReport: "feed/report",
        channelStatistics: "channelStatistics/action"
    };
    e.exports = function(e) {
        var t = o[e.name] || e.name;
        return r(t, e.data)
    }
},
function(e, t, n) {
    function r(e, t) {
        var n = [t, e.type].join("/");
        return o(n, e.data)
    }
    var o = n(54);
    e.exports = {
        video: function(e) {
            return r(e, "video")
        },
        tts: function(e) {
            return r(e, "tts")
        }
    }
},
function(e, t, n) {
    var r = n(54);
    e.exports = {
        download: function(e) {
            var t = e.name.split("-"),
            n = t[0],
            o = t[1] || "";
            return o = [n, o].join("/"),
            r(o, e.data)
        },
        prefetch: function(e) {
            var t = [e.name, "prefetch"].join("/");
            return r(t, e.data)
        },
        request: function(e) {
            return r("net/request", e)
        }
    }
},
function(e, t, n) {
    function r(e, t) {
        var n = e.name.split("-"),
        r = "";
        if (n[1]) {
            var o = n[1].substring(0, 1).toUpperCase(),
            i = n[1].substring(1),
            a = t + o + i;
            r = [n[0], a].join("/")
        } else r = [e.name, t].join("/");
        return r
    }
    var o = n(54);
    e.exports = {
        open: function(e) {
            var t = e.data || {},
            n = r(e, "open");
            return e.style && (t.style = e.style),
            o(n, t)
        },
        close: function(e) {
            var t = r(e, "close");
            return o(t, {})
        },
        update: function(e) {
            var t = r(e, "update");
            return o(t, e.data)
        }
    }
},
function(e, t, n) {
    var r = n(54);
    e.exports = {
        open: function(e) {
            var t = e.name,
            n = e.type || "",
            o = e.data,
            i = [t, "open"].join("/");
            return e.style && (o.style = e.style),
            "easybrowse" !== t && "browser" !== t || (o.newbrowser = e.newbrowser || e.data.newbrowser || "0", o.type = n),
            "hybrid" === n && (i = [t, n].join("/")),
            r(i, o)
        },
        close: function(e) {
            var t = [e.name, "close"].join("/");
            return r(t, {})
        },
        update: function(e) {
            var t = [e.name, "update"].join("/");
            return r(t, e.data)
        }
    }
},
function(e, t, n) {
    function r(e, t, n) {
        var r = [];
        for (var i in t) r.push(i + "=" + t[i]);
        if (n) {
            var a = "_bdbox_js_" + o.getId();
            window[a] = function() {
                n.apply(window, [].slice.call(arguments, 0))
            },
            r.push("func=" + a)
        }
        r = "baiduboxapp://" + e + "?" + r.join("&"),
        console.log(decodeURIComponent(r)),
        window.webkit.messageHandlers.BBAMNPJSBridge.postMessage(r)
    }
    var o = n(51),
    i = n(89),
    a = n(91),
    s = n(87),
    u = n(59),
    c = n(66);
    e.exports = function(e, t, n) {
        var l = "",
        f = e.split("/"),
        d = f[0],
        p = f[1],
        h = o.isIOS ? "ios": o.isAndroid ? "android": "",
        m = s(d, p, t, h),
        b = m ? m.thunk: void 0;
        if (o.isFunction(n) ? l = o.cbWithoutCache(n, b) : n && (l = n), m) {
            var _ = {};
            if (o.isObject(m.data) ? o.isArray(m.data) ? t = m.data || [] : (t = t || {},
            u(t, m.data)) : t = m.data, "ios" !== h || m.noParams) _ = t;
            else {
                m.action && (_ = {
                    action: m.action
                });
                var v = m.paramName || "params";
                t && o.isObject(t) && "{}" !== JSON.stringify(t) && (_[v] = encodeURIComponent(JSON.stringify(t))),
                t && o.isString(t) && t.length && (_[v] = encodeURIComponent(t)),
                m.next && (_.next = m.next)
            }
            switch (o.isObject(m.extData) && u(_, m.extData), h) {
            case "ios":
                m.data && m.data.shareSuccessCB && (_.successcallback = m.data.shareSuccessCB),
                m.data && m.data.shareErrorCB && (_.errorcallback = m.data.shareErrorCB),
                c.indexOf(window.searchboxBoxjsId) > -1 ? r(m.module, _, l) : !1 === m.hasCB ? a(m.module, _) : a(m.module, _, l);
                break;
            case "android":
                var g = [];
                if (o.isString(_) && _) g.push(_);
                else if (o.isObject(_) && !o.isArray(_) && "{}" !== JSON.stringify(_)) g.push(JSON.stringify(_));
                else if (o.isArray(_) && "[]" !== JSON.stringify(_)) for (var y = 0; y < _.length; y++) g.push(_[y]);
                if (!1 !== m.hasCB && !1 !== m.async && g.push(l), m.data && m.data.shareSuccessCB && g.push(m.data.shareSuccessCB), m.data && m.data.shareErrorCB && g.push(m.data.shareErrorCB), g.length <= 0) var w = i(m.module, m.action);
                else var w = i(m.module, m.action, g); ! 1 === m.async && window[l](w)
            } ! 1 === m.hasCB && window[l](JSON.stringify(o.sdkError.COMMAND_SUCCESS))
        } else window[l](JSON.stringify(o.sdkError.COMMAND_NOT_EXIST))
    }
},
function(e, t, n) {
    var r = n(51),
    o = n(59),
    i = n(61),
    a = n(56);
    e.exports = function(e, t, n, s) {
        var u = i[e + "/" + t],
        c = {},
        l = a.boxType,
        f = s;
        "main" !== l && (s = [s, l].join(""));
        var d = u[s];
        if (d) {
            var p = d.filter || u[f].filter,
            c = {
                module: e,
                action: t,
                data: n,
                extData: {},
                hasCB: d.hasCB || u[f].hasCB
            };
            return p && r.isFunction(p) && o(c, p(e, t, n)),
            d.thunk && r.isFunction(d.thunk) && (c.thunk = d.thunk || u[f].thunk),
            c
        }
    }
},
function(e, t, n) {
    function r(e) {
        var t = document.createElement("iframe"),
        n = document.body || document.getElementsByTagName("body")[0];
        t.style.display = "none",
        t.src = e,
        n.appendChild(t),
        setTimeout(function() {
            n.removeChild(t),
            t = null
        },
        0)
    }
    function o(e) {
        var t = window.Bdbox_android_jsbridge;
        if (!t || !t.dispatch) return window.prompt("BdboxApp:" + JSON.stringify({
            obj: "Bdbox_android_jsbridge",
            func: "dispatch",
            args: [e]
        }));
        t.dispatch(e)
    }
    function i(e) {
        window.webkit.messageHandlers.BBAMNPJSBridge.postMessage(e)
    }
    function a(e) {
        window.webkit.messageHandlers.BBAMNPJSBridgeWebViewComponent.postMessage(e)
    }
    function s(e) {
        return window.Bdbox_aiapps_jsbridge.dispatch(e)
    }
    function u(e) {
        return window.prompt("BdboxApp:" + JSON.stringify({
            obj: "mnp",
            func: "dispatch",
            args: [e]
        }))
    }
    var c = n(51),
    l = n(56),
    f = n(66),
    d = l.versionCompare,
    p = l.boxVersion;
    e.exports = function(e, t, n, l) {
        var h = [],
        m = "",
        b = "",
        _ = !1 !== l.hasCB,
        v = t.useCompontentBridge,
        g = {},
        y = "v" + l.v + "/" + e;
        if ("{}" !== JSON.stringify(t) && (g = {
            params: encodeURIComponent(JSON.stringify(t))
        }), l.filter) {
            var w = l.filter(t);
            t = w.data || g,
            w.action && (y = "v" + l.v + "/" + w.module + "/" + w.action),
            l.schemeNoV && (y = w.module + "/" + w.action)
        } else t = g;
        for (var O in t) h.push(O + "=" + t[O]);
        if (c.isFunction(n) ? b = c.cbWithoutCache(n, l.thunk) : n && (b = n), _ && h.push("callback=" + b), m = window.searchboxBoxjsId && "swan" !== window.searchboxBoxjsId ? "baiduboxapp://" + y + "?" + h.join("&") + "&upgrade=0&oauthType=" + window.searchboxBoxjsId: "baiduboxapp://" + y + "?" + h.join("&") + "&upgrade=0", y.match("Sync")) {
            var x = {};
            if (x = c.isAndroid ? s(m) : u(m)) try {
                return JSON.parse(x)
            } catch(e) {
                return c.sdkError.COMMAND_FAIL
            }
        } else if (c.isAndroid && d(p, "9.0") >= 0) {
            var x = o(m);
            if (x) try { (x = JSON.parse(x)) && "false" === x.result && window[b](c.sdkError.COMMAND_FAIL)
            } catch(e) {
                window[b](c.sdkError.COMMAND_FAIL)
            }
        } else v ? a(m) : f.indexOf(window.searchboxBoxjsId) > -1 ? i(m) : r(m);
        _ || n(c.sdkError.COMMAND_SUCCESS)
    }
},
function(e, t, n) {
    function r(e, t, n) {
        if (n && !i.isArray(n) && (n = Array.prototype.slice.call(arguments, 0).slice(2)), window[e] && window[e][t]) return {
            error: 0,
            result: window[e][t].apply(window[e], n),
            __from: "js"
        };
        var r = s();
        if (a(r, 4.8) >= 0 || i.$isLiteBox()) {
            var u = o(e, t, n);
            return u = u ? JSON.parse(u) : {},
            u.__from = "app",
            u
        }
        return "4.7.1" === r || "4.7" == r ? {
            error: 0,
            result: o(e, t, n),
            __from: "app4.7"
        }: {
            error: 200
        }
    }
    function o(e, t, n) {
        if (!i.$isBox() && !i.$isLiteBox()) return {
            error: 201
        };
        if (!i.$isAndroid()) return {
            error: 202
        };
        var r = {
            obj: e,
            func: t,
            args: n || []
        };
        try {
            return window.prompt("BdboxApp:" + JSON.stringify(r))
        } catch(e) {
            return {
                error: 201
            }
        }
    }
    var i = n(51),
    a = n(65),
    s = n(64);
    n(63),
    e.exports = r
},
function(e, t, n) {
    function r(e) {
        var t;
        return null == e ? t = String(e) : (t = Object.prototype.toString.call(e).toLowerCase(), t = t.substring(8, t.length - 1)),
        t
    }
    n(51),
    e.exports = function(e, t, n) {
        if ("object" == typeof e) {
            var o, i, a = r(e);
            if (n = n || e, "array" === a || "arguments" === a || "nodelist" === a) {
                for (o = 0, i = e.length; o < i; o++) if (!1 === t.call(n, e[o], o, e)) return
            } else for (o in e) if (e.hasOwnProperty(o) && !1 === t.call(n, e[o], o, e)) return
        }
    }
},
function(e, t, n) {
    var r = n(51);
    e.exports = function(e, t, n) {
        if (e && (r.$isBox() || r.$isLiteBox())) {
            var o = [];
            if (r.isFunction(t)) n = t;
            else for (var i in t) o.push(i + "=" + t[i]);
            if (r.isFunction(n)) {
                var a = "_bdbox_js_" + r.getId();
                window[a] = function() {
                    n.apply(window, [].slice.call(arguments, 0))
                },
                o.push("func=" + a)
            } else n && o.push("func=" + n);
            o = "baiduboxapp://" + e + "?" + o.join("&");
            var s = document.createElement("iframe");
            s.style.display = "none",
            s.src = o;
            var u = document.body || document.getElementsByTagName("body")[0];
            u.appendChild(s),
            setTimeout(function() {
                u.removeChild(s),
                s = null
            },
            0)
        }
    }
},
function(e, t, n) {
    function r(e) {
        var t = {
            name: "unknown",
            version: 0
        };
        this === window || this.os || (this.os = t),
        e = e || navigator.userAgent;
        var n = {
            Weibo: /weibo/i,
            Wechat: /micromessenger\//i,
            QQ: /QQ\//
        };
        for (var r in n) n.hasOwnProperty(r) && (t["is" + r] = n[r].test(e));
        t.isUC = e.match(/UC/) || window.ucweb || window.ucbrowser;
        var o = e.match(/Windows Phone ([\d.]+)/);
        if (o) return t.win10 = !0,
        t.version = o[1],
        t.name = "win10",
        t;
        var i = e.match(/(Android);?\s+([\d.]+)?/);
        if (i) return t.android = !0,
        t.version = i[2],
        t.name = "android",
        t;
        var a = e.match(/(iPad).*OS\s([\d_]+)/),
        s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        u = !a && e.match(/(iPhone\sOS)\s([\d_]+)/);
        return u && !s ? (t.ios = t.iphone = !0, t.version = u[2].replace(/_/g, "."), t.name = "ios", t) : a ? (t.ios = t.ipad = !0, t.name = "ios", t.version = a[2].replace(/_/g, "."), t) : s ? (t.name = "ios", t.ios = t.ipod = !0, t.version = s[3] ? s[3].replace(/_/g, ".") : null, t) : t
    }
    var o = n(51);
    r.apply(o),
    e.exports = r
},
function(e, t, n) {
    var r = n(51),
    o = function() {
        var e = 0;
        if (r.$isInfoBox()) {
            var t; (t = /baiduboxapp\/([\d+.]+)/.exec(navigator.userAgent)) && (e = t[1])
        }
        return o = function() {
            return e
        },
        e
    };
    e.exports = o
},
function(e, t, n) {
    var r = n(51),
    o = function() {
        var e = 0;
        if (r.$isProBox()) {
            var t; (t = /baiduboxapp\/([\d+.]+)/.exec(navigator.userAgent)) && (e = t[1])
        }
        return o = function() {
            return e
        },
        e
    };
    e.exports = o
},
function(e, t, n) {
    n(51),
    e.exports = function(e) {
        var t = e.split("?"),
        n = t[1] ? t[1] : t[0],
        r = n.split("&"),
        o = {};
        return r.forEach(function(e) {
            if (e = e.split("="), e[0].length > 0) {
                var t = "";
                try {
                    t = decodeURIComponent(e[1]) || ""
                } catch(e) {}
                o[e[0]] = t
            }
        }),
        o
    }
},
function(e, t) {
    function n() {
        var e = "";
        return /\biPhone\b|\biPad\b/.test(a) && !/android/i.test(a) ? e = "ios": /android/i.test(a) ? e = "android": /windows/i.test(a) && (e = "windows"),
        e
    }
    function r() {
        var e = "",
        t = "";
        if (t == /([\d+.]+)_(?:diordna|enohpi)_/.exec(a)) try {
            t = t[1].split("."),
            t = t.reverse(),
            e = t.join(".")
        } catch(e) {
            console.log("\u83b7\u53d6ios\u624b\u767e\u7248\u672c\u65e0\u5339\u914d\uff0c\u539f\u59cb\u5b57\u7b26\u4e3a\uff1a" + a)
        } else if (t == /baiduboxapp\/([\d]+([.][\d]+){1,3})/.exec(a)) try {
            e = t[1]
        } catch(e) {
            console.log("\u83b7\u53d6android\u624b\u767e\u7248\u672c\u65e0\u5339\u914d\uff0c\u539f\u59cb\u5b57\u7b26\u4e3a\uff1a" + a)
        }
        return e
    }
    function o() {
        var e = r();
        if (null == e || "string" != typeof e) return e;
        var t = /^\d+\.\d+/,
        n = "";
        return t.test(e) && (n = e.match(t), n.length) ? n[0] : e
    }
    function i(e) {
        if (e.common && e.cusData && e.type) {
            var t = (e.common, e.cusData),
            n = {
                pv: 1,
                jserr: 1,
                event: 2,
                custom_err: 1,
                perf: 2
            },
            r = function(e) {
                var t = {
                    pv: 0,
                    jserr: 0,
                    custom_err: 0,
                    perf: 1
                };
                return "event" === e.type ? e.cusData.evt && e.cusData.evt.match(/^c_\w*/) ? 0 : 1 : t[e.type]
            },
            o = window.location.protocol;
            "http:" !== o && (o = "https:");
            var i = o + "//m.baidu.com/tcbox?service=bdbox&action=pblog&",
            a = {
                type: r(e),
                timestamp: +Date.now(),
                id: 10092,
                content: {
                    from: "whole",
                    type: "0",
                    value: "0",
                    page: t.id,
                    source: t.name
                }
            };
            if (t.errCode && (a.content.type = "-1", a.content.value = t.errCode), r(e)) if ("event" === e.type) a.content.duration = parseInt(t.msg) / 1e3;
            else {
                var s = [],
                u = {
                    id: "",
                    d: "",
                    info: {}
                };
                for (var c in t) u.id = c,
                u.d = t[c],
                s.push(u),
                u = {
                    id: "",
                    d: "",
                    info: {}
                };
                a.content.part = s
            }
            var l = {
                appid: 1,
                dataid: 2,
                cateid: 99,
                actionid: n[e.type],
                actiontype: "0",
                actiondata: a
            };
            i += "data=" + encodeURIComponent(JSON.stringify(l)),
            setTimeout(function() {
                var e = document.createElement("img");
                e.onload = e.onerror = e.onabort = function() {
                    e = null
                },
                e.src = i
            })
        }
    }
    var a = navigator.userAgent;
    e.exports = window.log = function(e, t, a) {
        var s = {
            hybridVersion: window.hybridVersion || "0",
            platform: n() || "other",
            boxV: o() || "0",
            boxVersion: r() || "0",
            page_id: "301_" + e,
            network: "",
            cuid: ""
        },
        u = {
            evt: "c_" + t,
            msg: "jssdk_" + t,
            name: t,
            id: e
        };
        a && (u.errCode = a.errCode + ""),
        i({
            common: s,
            cusData: u,
            type: "event"
        })
    }
},
function(e, t, n) {
    function r(e) {
        return ["storage", e[1]].join("/")
    }
    function o(e) {
        if ("get" === e[1] || "set" === e[1]) var t = e[2] || "",
        n = t.split("-")[0],
        r = t.split("-")[1] && t.split("-")[1].substring(0, 1).toUpperCase(),
        o = t.split("-")[1] && t.split("-")[1].substring(1),
        i = e[1] + r + o;
        else if ("toggle" === e[1]) var n = e[3],
        r = e[2].substring(0, 1).toUpperCase(),
        o = e[2].substring(1),
        i = "toggle" + r + o;
        return [n, i].join("/")
    }
    function i(e) {
        var t = {
            durationDisappear: "ubc/duration/disappear",
            durationAppear: "ubc/duration/appear",
            channelStatistics: "channelStatistics/action"
        },
        n = e[1];
        return t[n] || n
    }
    function a(e) {
        var t = "";
        if ("download" === e[1]) {
            var n = e[2] || "",
            r = n.split("-");
            t = [r[0], r[1]].join("/")
        } else if ("prefetch" === e[1]) var t = [e[2], "prefetch"].join("/");
        return t
    }
    function s(e) {
        var t = "";
        if ("close" === e[1] || "open" === e[1]) {
            var n = e[2].split("-");
            if (n[1]) {
                var r = n[1].substring(0, 1).toUpperCase(),
                o = n[1].substring(1),
                i = e[1] + r + o;
                t = [n[0], i].join("/")
            } else t = [n[0], e[1]].join("/")
        } else "update" === e[1] && (t = [e[2], "update"].join("/"));
        return t
    }
    function u(e) {
        var t = "";
        if ("close" === e[1]) t = [e[2], e[1]].join("/");
        else if ("open" === e[1]) {
            var n = e[2],
            r = e[3];
            r && "hybrid" === r ? t = n + "/hybrid": r && (t = n + "/open")
        }
        return t
    }
    function c(e) {
        var t = "";
        if ("info" === e[1]) switch (e[2]) {
        case "netInfo":
            t = "utils/getDeviceInfo";
            break;
        case "platformInfo":
            t = "utils/getPlatformInfo"
        } else "vibrate" === e[1] && (t = "device/vibrate");
        return t
    }
    function l(e) {
        var t = "";
        return "tts" === e[1] && (t = [e[1], e[2]].join("/")),
        t
    }
    function f(e) {
        var t = "";
        switch (e[1]) {
        case "fire":
            t = "datachannel/sendbroadcast";
            break;
        case "on":
            t = "datachannel/register";
            break;
        case "off":
            t = "datachannel/unregister"
        }
        return t
    }
    function d(e) {
        var t = "";
        switch (e[1]) {
        case "getRoomInfo":
            t = "minigame/getRoomInfo";
            break;
        case "over":
            t = "minigame/over";
            break;
        case "setBackHandler":
            t = "immerseBrowser/backHandler";
            break;
        case "exit":
            t = "minigame/exit";
            break;
        case "start":
            t = "minigame/startGame";
            break;
        case "closeLoading":
            t = "minigame/closeLoading";
            break;
        case "getPerformanceData":
            t = "minigame/getPerformanceData"
        }
        return t
    }
    function p(e) {
        var t = "",
        n = e.split("/");
        if (n.length < 2) return "";
        switch (n[0]) {
        case "cache":
            t = r(n);
            break;
        case "data":
            t = o(n);
            break;
        case "log":
            t = i(n);
            break;
        case "net":
            t = a(n);
            break;
        case "ui":
            t = s(n);
            break;
        case "view":
            t = u(n);
            break;
        case "device":
            t = c(n);
            break;
        case "event":
            t = f(n);
            break;
        case "media":
            t = l(n);
            break;
        case "game":
            t = d(n)
        }
        return t
    }
    function h(e, t) {
        var n = t.filter,
        r = (e.split("/"), t.v);
        if (n) {
            var o = n({});
            o.action && (e = "v" + r + "/" + o.module + "/" + o.action)
        }
        return e
    }
    var m = n(58),
    b = function(e) {
        var t = p(e);
        if (t) {
            var n = m[t];
            return !! n && h(["v" + (n.v || ""), t].join("/"), n)
        }
        return ! 1
    };
    e.exports = b
},
function(e, t, n) {
    var r = n(54);
    e.exports = function(e) {
        var t = e.name.replace(/-/g, "/"),
        n = e.data;
        return r(t, n)
    }
},
function(e, t, n) {
    var r = n(97),
    o = n(98),
    i = n(26);
    e.exports = function(e) {
        return new i(function(t, n) {
            var i = {},
            a = [];
            if (e.oauth.schemeList.length) for (var s = e.oauth.schemeList,
            u = 0; u < s.length; u++) if (r(s[u])) {
                var c = r(s[u]);
                a.push(c),
                i[c] = {
                    name: s[u]
                }
            }
            o({
                name: "public-oauth",
                data: {
                    ext: e.oauth.ext || {},
                    type: e.id || "",
                    schemeList: a
                }
            }).then(function(e) {
                var n = [];
                if (e && e.schemeList) for (var r = 0; r < e.schemeList.length; r++) {
                    var o = e.schemeList[r];
                    "0" !== o.tag && i[o.name] && n.push(i[o.name].name)
                }
                t({
                    errCode: 0,
                    errMsg: "success",
                    data: {
                        schemeList: n,
                        expireTime: e.expireTime || ""
                    }
                })
            }).
            catch(function(e) {
                n(e)
            })
        })
    }
},
function(e, t, n) {
    var r = n(61),
    o = n(58),
    i = (n(51), n(56)),
    a = i.versionCompare,
    s = i.boxVersion,
    u = {};
    u.queryToJson = n(95),
    u.platform = i.os,
    u.canInvokeNew = function(e) {
        var t = o[e],
        n = t.versionRange,
        r = u.platform,
        c = i.boxType;
        if ("main" !== c) r = [r, c].join(""),
        n = t[r + "VersionRange"];
        else if (!n) {
            if (t.notSupport) return ! 0;
            n = t[r + "VersionRange"]
        }
        var l = n[0],
        f = n[1],
        d = a(s, l) >= 0,
        p = !!f && a(s, f) <= 0;
        return ! (!d || f && !p || t.notSupport && !(t.notSupport.indexOf(r) < 0))
    },
    u.canInvokeOld = function(e) {
        var t = u.platform,
        n = r[e],
        o = i.boxType;
        if (!n) return ! 1;
        "main" !== o && (t = [t, o].join(""));
        var c = n[t];
        if (!c) return ! 1;
        var l = c.versionRange,
        f = !1,
        d = "",
        p = "",
        h = !1,
        m = !1;
        return ! l || l && 0 === l.length ? f = !0 : (d = l[0], p = l[1], h = !!d && a(s, d) >= 0, m = !p || !!p && a(s, p) <= 0),
        !!(f || m && h)
    },
    u.getWhoCanHandle = function(e) {
        var t = o[e];
        return t && (t = t.v),
        !t && u.canInvokeOld(e) ? "old": t && u.canInvokeNew(e) ? "new": t && !u.canInvokeNew(e) && u.canInvokeOld(e) ? "old": void 0
    },
    e.exports = u
},
function(e, t, n) {
    var r = {};
    r.h5API = {},
    r.cache = n(77),
    r.data = n(78),
    r.device = n(79),
    r.event = n(80),
    r.log = n(81),
    r.media = n(82),
    r.net = n(83),
    r.ui = n(84),
    r.view = n(85),
    r.platform = function() {
        var e = {},
        t = n(56);
        return Object.keys(t).forEach(function(n) {
            var r = t[n];
            e[n] = function() {
                return "versionCompare" === n ? r(arguments[0], arguments[1]) : r
            }
        }),
        e
    } (),
    e.exports = r
},
function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function a(e) {
        var t = [];
        return Object.keys(e).forEach(function(n) {
            var r = e[n];
            r && t.push(n + "=" + encodeURIComponent(r))
        }),
        t.join("&")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    u = n(1),
    c = n(149),
    l = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (c),
    f = n(60),
    d = (0, f.getMIPEnv)(),
    p = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.props.copyLayer(n),
            n.state = e,
            n.state.displayFrame = !1,
            n.state.clear = !1,
            n.onmessage = n.onmessage.bind(n),
            n
        }
        return i(t, e),
        s(t, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState({
                    displayFrame: e.displayFrame
                })
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                window.addEventListener("message", this.onmessage, !1)
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("message", this.onmessage, !1)
            }
        },
        {
            key: "onmessage",
            value: function(e) {
                var t = e.data,
                n = t.type,
                r = t.value,
                o = void 0 === r ? {}: r,
                i = this.state,
                s = i.success,
                u = void 0 === s ?
                function() {}: s,
                c = i.fail,
                l = void 0 === c ?
                function() {}: c,
                f = i.complete,
                p = void 0 === f ?
                function() {}: f,
                h = i.query,
                m = i.uuid,
                b = h.state,
                _ = h.ifSilent,
                v = h.redirect_uri,
                g = h.appid;
                if (m === o.uuid) switch (n) {
                case "oauth-iframe-ready":
                    this.state.displayFrame || (document.body.style.overflow = "hidden", this.show(o.toggle), this.props.serviceLog({
                        action: "auth_iframe_pv"
                    },
                    g));
                    break;
                case "oauth-iframe-cancel":
                case "oauth-iframe-cancle":
                    this.hide(),
                    p({
                        msg: "oauth:cancel",
                        status: 11
                    });
                    break;
                case "oauth-iframe-success":
                case "oauth-iframe-granted":
                    this.hide(),
                    o.code = o.verifier,
                    o.state = b,
                    delete o.verifier,
                    _ ? (u({
                        msg: "oauth:ok",
                        status: 0
                    }), location.href = v + "?code=" + o.code + "&state=" + encodeURIComponent(b)) : u({
                        msg: "oauth:ok",
                        status: 0,
                        result: o
                    });
                    break;
                case "oauth-iframe-error":
                case "oauth-iframe-fail":
                    this.hide(),
                    l({
                        status: o.code,
                        msg: o.msg
                    });
                    break;
                case "oauth-iframe-change-account":
                    this.hide();
                    var y = "https://openapi.baidu.com/oauth/2.0/mip/authorize?confirm_login=2&" + a(h);
                    d.indexOf("mip2") >= 0 ? window.MIP.viewer.open("https://xiongzhang.baidu.com/opensc/wps/auth?" + a(h), {
                        isMipLink: "mip2-sf" === d
                    }) : location.href = y;
                    break;
                case "oauth-iframe-login":
                    this.hide(),
                    d.indexOf("mip2") >= 0 ? window.MIP.viewer.open("https://xiongzhang.baidu.com/opensc/wps/auth?" + a(h), {
                        isMipLink: "mip2-sf" === d
                    }) : window.location.href = "https://openapi.baidu.com/oauth/2.0/mip/authorize?confirm_login=2&" + a(h);
                    break;
                case "oauth-iframe-log":
                    this.props.serviceLog(o, g)
                }
            }
        },
        {
            key: "hide",
            value: function() {
                document.body.style.cssText = this.props.currentBodyStyle,
                this.setState({
                    displayFrame: !1,
                    clear: !0
                }),
                d.indexOf("mip2") >= 0 && window.MIP.viewer.page.togglePageMask(!1, {
                    skipTransition: !0
                })
            }
        },
        {
            key: "show",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.setState({
                    displayFrame: !0
                }),
                e && d.indexOf("mip2") >= 0 && window.MIP.viewer.page.togglePageMask(!0, {
                    skipTransition: !0
                })
            }
        },
        {
            key: "preventScroll",
            value: function(e) {
                e.preventDefault()
            }
        },
        {
            key: "render",
            value: function() {
                var e = this,
                t = this.state,
                n = t.query,
                r = t.displayFrame,
                o = t.uuid,
                i = t.clear,
                s = "https://openapi.baidu.com/oauth/2.0/mip/authorize?" + a(n) + "&uuid=" + o,
                c = i ? "": (0, u.h)("iframe", {
                    src: s,
                    className: l.
                default.iframe
                }),
                f = (0, u.h)("div", {
                    class: l.
                default.toastTip + " " + l.
                default.toastActive
                },
                (0, u.h)("div", {
                    class: l.
                default.toastContent
                },
                "\u767b\u5f55\u4e2d..."));
                return (0, u.h)("div", null, r || i ? "": f, (0, u.h)("div", {
                    style: r ? {
                        display: ""
                    }: {
                        display: "none"
                    }
                },
                (0, u.h)("div", {
                    className: l.
                default.mask,
                    onTouchMove: function(t) {
                        e.preventScroll(t)
                    }
                }), (0, u.h)("div", {
                    className: l.
                default.layout
                },
                c)))
            }
        }]),
        t
    } (u.Component);
    t.
default = p
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    c = n(1),
    l = n(67),
    f = r(l),
    d = n(151),
    p = r(d),
    h = function(e) {
        function t() {
            return o(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        u(t, [{
            key: "render",
            value: function() {
                return (0, c.h)("div", {
                    class: p.
                default.bodybar
                },
                (0, c.h)(f.
            default, s({
                    infoLinkType: "cst8",
                    subscribeType: "cst9"
                },
                this.props)))
            }
        }]),
        t
    } (c.Component);
    t.
default = h
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    c = n(1),
    l = n(67),
    f = r(l),
    d = n(153),
    p = r(d),
    h = n(107),
    m = r(h),
    b = {
        FIXED: 0,
        NORMAL: 1
    },
    _ = function(e) {
        function t() {
            return o(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        u(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this; (0, m.
            default)(this.bar, {
                    stateChange: function(t) {
                        0 === t ? e.setState({
                            fixState: b.FIXED
                        }) : e.setState({
                            fixState: b.NORMAL
                        })
                    }
                })
            }
        },
        {
            key: "render",
            value: function() {
                var e = this;
                return (0, c.h)("div", {
                    class: p.
                default.wrapper
                },
                (0, c.h)("div", {
                    class: p.
                default.fixedbar,
                    ref: function(t) {
                        e.bar = t
                    }
                },
                (0, c.h)("div", {
                    class: p.
                default.inner
                },
                (0, c.h)(f.
            default, s({
                    infoLinkType: "cst6",
                    subscribeType: "cst7"
                },
                this.props)))), (0, c.h)("div", {
                    class: p.
                default.normalbar,
                    style: {
                        opacity: this.state.fixState === b.FIXED ? 0 : 1
                    }
                },
                (0, c.h)(f.
            default, s({
                    infoLinkType: "cst6",
                    subscribeType: "cst7"
                },
                this.props))))
            }
        }]),
        t
    } (c.Component);
    t.
default = _
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    u = n(1),
    c = n(104),
    l = r(c),
    f = n(154),
    d = r(f),
    p = function(e) {
        function t() {
            return o(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e),
        s(t, [{
            key: "render",
            value: function() {
                return (0, u.h)("div", {
                    class: d.
                default.headbar
                },
                (0, u.h)(l.
            default, this.props))
            }
        }]),
        t
    } (u.Component);
    t.
default = p
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    u = n(1),
    c = n(68),
    l = r(c),
    f = n(155),
    d = r(f),
    p = n(5),
    h = function(e) {
        function t() {
            var e, n, r, a;
            o(this, t);
            for (var s = arguments.length,
            u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
            return n = r = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))),
            r.state = {
                btnName: "",
                subFlag: !1,
                subscribe: 0,
                btnStatus: 0
            },
            r.btnHandler = function() {
                var e = r.props,
                t = e.homepage,
                n = e.isSub2Box,
                o = void 0 === n || n,
                i = e.success,
                a = e.fail,
                s = e.context,
                u = r.state,
                c = u.subFlag,
                l = u.subscribe,
                f = u.btnStatus;
                if (c) {
                    if (f) return;
                    if (r.setState({
                        btnStatus: 1
                    }), !l) return void(0, p.doFollow)({
                        opType: l ? "cancel": "add",
                        isSub2Box: o,
                        appid: r.props.appid || r.props.office_info.appid,
                        success: function(e) {
                            r.setState({
                                btnName: e.result ? "\u67e5\u770b": "\u5173\u6ce8",
                                subscribe: e.result ? 1 : 0,
                                btnStatus: 0,
                                subFlag: !e.result
                            }),
                            i({
                                result: e.result ? 1 : 0,
                                status: 0,
                                msg: "barFollow:ok"
                            })
                        },
                        fail: function(e) {
                            r.setState({
                                btnStatus: 0
                            }),
                            a({
                                status: e.status,
                                msg: e.msg
                            })
                        },
                        source: "dusite_sdk_subbar",
                        context: s
                    })
                }
                window.location.href = t.cst11
            },
            r.jump = function() {
                window.location = r.props.homepage.cst10
            },
            a = n,
            i(r, a)
        }
        return a(t, e),
        s(t, [{
            key: "componentWillMount",
            value: function() {
                var e = "\u67e5\u770b",
                t = !1,
                n = this.props,
                r = n.subscribe,
                o = n.btnType;
                "follow" === (void 0 === o ? "home": o) && (e = r ? "\u67e5\u770b": "\u5173\u6ce8", t = !r),
                this.setState({
                    btnName: e,
                    subFlag: t,
                    subscribe: r ? 1 : 0
                })
            }
        },
        {
            key: "render",
            value: function() {
                var e = this.props.office_info,
                t = e.avatar,
                n = e.description,
                r = e.name,
                o = this.state,
                i = o.btnName,
                a = o.subscribe,
                s = "follow" !== this.props.btnType || !a;
                return (0, u.h)("div", {
                    class: d.
                default.tailbar
                },
                (0, u.h)("div", {
                    class: d.
                default.logowrapper
                },
                (0, u.h)("img", {
                    src: t,
                    class: d.
                default.logo,
                    onclick: this.jump
                })), (0, u.h)("div", {
                    class: d.
                default.name,
                    onclick: this.jump
                },
                r), (0, u.h)("div", {
                    class: d.
                default.describe
                },
                n), (0, u.h)("div", {
                    class: d.
                default.subscribe,
                    onTouchStart: function() {}
                },
                (0, u.h)(l.
            default, {
                    text: i,
                    click: this.btnHandler,
                    type: s ? "blue": "grey"
                })))
            }
        }]),
        t
    } (u.Component);
    t.
default = h
},
function(e, t, n) {
    "use strict";
    function r() {
        var e = window.navigator.userAgent,
        t = e.match(/(iPad|iPhone|iPod)\s+OS\s([\d_.]+)/);
        return t && t[2] && parseInt(t[2].replace(/_/g, "."), 10) >= 6
    }
    function o() {
        for (var e = ["", "-webkit-", "-ms-", "-moz-", "-o-"], t = "", n = 0; n < e.length; n++) t += "position:" + e[n] + "sticky";
        var r = document.createElement("div"),
        o = document.body;
        r.style.cssText = "display:none" + t,
        o.appendChild(r);
        var i = /sticky/i.test(window.getComputedStyle(r).position);
        return o.removeChild(r),
        r = null,
        i
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = function(e) {
        function t() {
            return s === window ? Math.max(document.documentElement.scrollTop || document.body.scrollTop, 0) : Math.max(s.scrollTop, 0)
        }
        function n() {
            t() >= d ? (e.style.top = u + "px", e.classList.add(a.
        default.sticky), 0 !== p && (p = 0, l(0))) : (e.classList.remove(a.
        default.sticky), 1 !== p && (p = 1, l(1)))
        }
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = i.scrollBox || window,
        u = i.offset || 0,
        c = !0 === i.checkStickySupport || !1,
        l = i.stateChange ||
        function() {};
        "string" == typeof s && (s = document.getElementById(s));
        var f = e.getBoundingClientRect(),
        d = f.top - u,
        p = null;
        c && (r() || o()) ? e.classList.add(a.
    default.sticky):
        (d = f.top - u, s.addEventListener("scroll", n), n())
    };
    var i = n(156),
    a = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (i)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = function() {
        var e = {
            from: "1020738b",
            channel: "1020738h"
        },
        t = JSON.stringify({
            toolids: ["3"]
        }),
        n = location.href,
        r = ["intent:#Intent", "S.bdsb_light_start_url=" + n, "S.menumode=2", "B.bdsb_append_param=true", "S.toolbaricons=" + t, "end"],
        i = {
            openurl: n,
            opentype: 1,
            newbrowser: 1,
            append: 1,
            isla: 0,
            forbidautorotate: 1,
            menumode: 2,
            toolbaricons: t,
            minver: "7.5.0.0"
        };
        return e.iosScheme = "baiduboxapp://easybrowse?" + o.
    default.stringify(i),
        e.androidCommand = {
            intent: r.join(";"),
            class: "com.baidu.searchbox.xsearch.UserSubscribeCenterActivity",
            min_v: "16787968",
            mode: "0"
        },
        e
    };
    var r = n(146),
    o = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (r)
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = function(e) {
        return function(t) {
            if ("guanfanghao" === i.get("BoxjsId")) e(t);
            else {
                var n = {
                    id: "guanfanghao",
                    success: function() {
                        i.set("BoxjsId", "guanfanghao"),
                        e(t)
                    }
                };
                if (! (0, r.isBaiduDomain)()) {
                    var o = (0, r.getInsData)(t.context),
                    a = o.val.data,
                    c = a.schemes,
                    l = a.timestamp,
                    f = a.signature,
                    d = a.nonce_str,
                    p = a.url,
                    h = a.office_info;
                    c.length && (n.oauth = {
                        ext: {
                            timestamp: l,
                            signature: f,
                            nonce_str: d,
                            url: encodeURIComponent(p),
                            appid: h.appid
                        },
                        schemeList: [u.im, u.share]
                    })
                }
                s.
            default.init(n)
            }
        }
    };
    var r = n(11),
    o = n(4),
    i = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.
    default = e,
        t
    } (o),
    a = n(62),
    s = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (a),
    u = {
        im: "ui/open/account-chat",
        login: "ui/open/account-loginDialog",
        share: "ui/open/utils-shareBox",
        toast: "ui/open/toast"
    }
},
function(e, t, n) {
    "use strict";
    function r() {
        var e = new Date,
        t = e.getMonth() + 1,
        n = e.getDate(),
        r = e.getHours();
        return e.getFullYear() + "-" + (t >= 10 ? t: "0" + t) + "-" + (n >= 10 ? n: "0" + n) + "-" + (r >= 10 ? r: "0" + r)
    }
    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.success,
        n = void 0 === t ? a: t,
        o = e.fail,
        i = void 0 === o ? a: o;
        if (window.OpenBox) return void n();
        var s = r(),
        u = document.createElement("script");
        u.onload = u.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState ? i() : (u.onload = u.onreadystatechange = null, u = null, n())
        },
        u.onerror = function() {
            u.onerror = null,
            u = null,
            i()
        },
        u.src = "https://s.bdstatic.com/common/openjs/openBox.js?_v=" + s,
        u.async = !0,
        document.getElementsByTagName("head")[0].appendChild(u)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.loadOpenBox = o,
    t.
default = function(e) { (0, i.isBox)() || o({
            success: function() {
                window.OpenBox(e).open()
            },
            fail: function() {
                console.log("openbox\u52a0\u8f7d\u5931\u8d25")
            }
        })
    };
    var i = n(55),
    a = function() {}
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    u = n(1),
    c = n(157),
    l = r(c),
    f = n(114),
    d = r(f),
    p = function(e) {
        function t(e) {
            o(this, t);
            var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state.isThumb = !1,
            n.state.isShow = !1,
            n.state.isShowViewer = !1,
            n.state.index = 0,
            n.state.partContent = n.props.content,
            n.state.isCalculate = !0,
            n.calCulateContent = n.props.content,
            n
        }
        return a(t, e),
        s(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this.props.content;
                if (window.getComputedStyle) {
                    var t = window.getComputedStyle(this.content),
                    n = t.height,
                    r = t.lineHeight;
                    n = parseInt(n.replace("px", ""), 10),
                    r = parseInt(r.replace("px", ""), 10);
                    var o = Math.ceil(n / r);
                    if (o > 3) {
                        var i = this.content.getBoundingClientRect(),
                        a = this.contentAnchor.getBoundingClientRect(),
                        s = i.width,
                        u = i.left,
                        c = a.left,
                        l = 2.5 * s / (s * (o - 1) + (c - u)),
                        f = Math.floor(e.length * l);
                        this.calCulateContent = e.substr(0, f) + "...",
                        this.setState({
                            partContent: this.calCulateContent,
                            isThumb: !0
                        })
                    }
                }
                this.setState({
                    isCalculate: !1
                })
            }
        },
        {
            key: "handleShowIconClick",
            value: function(e, t) {
                this.setState({
                    isShow: t,
                    partContent: t ? this.props.content: this.calCulateContent
                })
            }
        },
        {
            key: "handleImgClick",
            value: function(e, t) {
                this.setState({
                    isShowViewer: !0,
                    index: t
                })
            }
        },
        {
            key: "hideImgViewer",
            value: function() {
                this.setState({
                    isShowViewer: !1
                })
            }
        },
        {
            key: "render",
            value: function() {
                var e = this,
                t = this.props,
                n = t.avator,
                r = t.name,
                o = t.rating,
                i = t.image_list,
                a = t.time,
                s = this.state,
                c = s.isThumb,
                f = s.isShow,
                p = s.isShowViewer,
                h = s.index,
                m = s.partContent,
                b = s.isCalculate,
                _ = "";
                c && (_ = f ? (0, u.h)("div", {
                    className: l.
                default.showImg,
                    onClick: function(t) {
                        e.handleShowIconClick(t, !1)
                    }
                },
                "\u6536\u8d77", (0, u.h)("span", {
                    className: l.
                default.hideImgIcon
                })):
                (0, u.h)("div", {
                    className: l.
                default.showImg,
                    onClick: function(t) {
                        e.handleShowIconClick(t, !0)
                    }
                },
                "\u5c55\u5f00", (0, u.h)("span", {
                    className: l.
                default.showImgIcon
                })));
                var v = "",
                g = i;
                return c && !f && i.length > 3 && (v = (0, u.h)("div", {
                    className: l.
                default.imgSumCon
                },
                (0, u.h)("span", {
                    className: l.
                default.imgIcon
                }), (0, u.h)("span", {
                    className: l.
                default.imgSum
                },
                i.length)), g = i.slice(0, 3)),
                (0, u.h)("div", {
                    className: l.
                default.container,
                    style: b ? {
                        visibility: "hidden"
                    }: {
                        visibility: ""
                    }
                },
                (0, u.h)("div", {
                    className: l.
                default.head
                },
                (0, u.h)("img", {
                    className: l.
                default.headImg,
                    src: n
                }), (0, u.h)("span", {
                    className: l.
                default.name
                },
                r), (0, u.h)("div", {
                    className: l.
                default.starCon
                },
                [1, 2, 3, 4, 5].map(function(e, t) {
                    return (0, u.h)("span", {
                        key: t,
                        className: l.
                    default.star,
                        active: e <= o ? "active": ""
                    })
                }))), (0, u.h)("div", {
                    ref: function(t) {
                        e.content = t
                    },
                    className: l.
                default.content
                },
                m, (0, u.h)("span", {
                    ref: function(t) {
                        e.contentAnchor = t
                    },
                    className: l.
                default.contentAnchor
                },
                "x"), _), (0, u.h)("div", {
                    className: l.
                default.imgList
                },
                g && g.map(function(t, n) {
                    var r = {
                        backgroundImage: "url(" + t.thumbnails + ")"
                    };
                    return (0, u.h)("div", {
                        className: l.
                    default.imgCon
                    },
                    (0, u.h)("div", {
                        className: l.
                    default.innerCon
                    },
                    (0, u.h)("div", {
                        className: l.
                    default.img,
                        key: n,
                        style: r,
                        onClick: function(t) {
                            e.handleImgClick(t, n)
                        }
                    }), 2 === n ? v: ""))
                })), (0, u.h)(d.
            default, {
                    isShow: p,
                    imgs: i,
                    index: h,
                    onClose: function() {
                        e.hideImgViewer()
                    }
                }), (0, u.h)("div", {
                    className: l.
                default.time
                },
                a))
            }
        }]),
        t
    } (u.Component);
    t.
default = p
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function s(e, t) {
        var n = Object.keys(e).map(function(t) {
            return t + "=" + encodeURIComponent(e[t])
        }),
        r = n.join("&"),
        o = v + "?nocache=1&title=" + encodeURIComponent(g) + "&" + r;
        if (window.fif) {
            if ((0, p.isSpecialIOS)()) return void(location.href = o);
            r = "?" + r,
            window.fif.action.redirect("" + t + encodeURIComponent(r) + "?nocache=1&title=" + encodeURIComponent(g))
        } else 0 === window.name.indexOf("iframe-shell") ? window.parent.postMessage({
            event: "loadiframe",
            data: {
                url: o
            }
        },
        "*") : location.href = o
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    c = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    l = n(1),
    f = n(52),
    d = r(f),
    p = n(11),
    h = n(158),
    m = r(h),
    b = n(111),
    _ = r(b),
    v = "https://xiongzhang.baidu.com/opensc/wps/appraisedetail",
    g = "\u8bc4\u4ef7\u4e2d\u5fc3",
    y = function(e) {
        function t(e) {
            o(this, t);
            var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state.list = n.props.list,
            n.state.activeTag = "all",
            n
        }
        return a(t, e),
        c(t, [{
            key: "handleAllCommentClick",
            value: function(e, t) {
                if (t > 3) {
                    var n = this.props.query,
                    r = this.props.sfUrl || v;
                    s(u({
                        tag: "all"
                    },
                    n), r)
                }
            }
        },
        {
            key: "handleTagCommentClick",
            value: function(e, t) {
                var n = this,
                r = this.props.query,
                o = this.state.activeTag;
                t !== o && this.props.getData(u({},
                r, {
                    tag: t
                })).then(function(e) {
                    if (0 !== e.code) return void n.props.fail({
                        status: d.
                    default.ERROR_SERVER_API,
                        msg: e.msg
                    });
                    n.setState({
                        activeTag: t,
                        list: e.data.list
                    })
                }).fail(function() {
                    this.props.fail({
                        status: d.
                    default.ERROR_REQUEST_SERVER_API,
                        msg: d.
                    default.ERROR_REQUEST_SERVER_API_MSG
                    })
                })
            }
        },
        {
            key: "render",
            value: function() {
                var e = this,
                t = this.props,
                n = t.tags,
                r = t.rating,
                o = this.state,
                i = o.activeTag,
                a = o.list,
                s = n.all && n.all.count || 0;
                return 0 === s ? (0, l.h)("div", {
                    className: m.
                default.nocom
                },
                (0, l.h)("span", {
                    className: m.
                default.notitle
                },
                "\u670d\u52a1\u8bc4\u4ef7"), (0, l.h)("span", {
                    className: m.
                default.noremind
                },
                "\u6682\u65e0\u76f8\u5173\u8bc4\u4ef7\uff0c\u770b\u770b\u5176\u4ed6\u7684~")) : (0, l.h)("div", {
                    className: m.
                default.container
                },
                (0, l.h)("div", {
                    className: m.
                default.head
                },
                (0, l.h)("div", {
                    className: m.
                default.link,
                    onClick: function(t) {
                        e.handleAllCommentClick(t, s)
                    }
                },
                (0, l.h)("span", {
                    className: m.
                default.title
                },
                "\u670d\u52a1\u8bc4\u4ef7(", s, ")"), s > 3 ? (0, l.h)("span", {
                    className: m.
                default.icon
                }):
                "", (0, l.h)("span", {
                    className: m.
                default.rate
                },
                r, "\u5206"), (0, l.h)("span", {
                    className: m.
                default.rateDesc
                },
                "\u603b\u8bc4\u5206 ")), (0, l.h)("div", {
                    className: m.
                default.tags
                },
                n && Object.keys(n).map(function(t, r) {
                    var o = n[t];
                    return (0, l.h)("div", {
                        key: r,
                        className: m.
                    default.item,
                        onClick: function(n) {
                            e.handleTagCommentClick(n, t)
                        }
                    },
                    (0, l.h)("span", {
                        className: i === t ? m.
                    default.active:
                        ""
                    },
                    o.text, "(", o.count, ")"))
                }))), (0, l.h)("div", {
                    className: m.
                default.content
                },
                a && a.map(function(e) {
                    return (0, l.h)(_.
                default, u({
                        key: e.comment_id
                    },
                    e))
                })))
            }
        }]),
        t
    } (l.Component);
    t.
default = y
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    u = n(1),
    c = n(159),
    l = r(c),
    f = n(116),
    d = r(f),
    p = 1e3,
    h = 5,
    m = 300,
    b = function(e) {
        function t(e) {
            o(this, t);
            var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                width: 0,
                height: 0,
                scale: 1,
                left: 0,
                top: 0,
                isLoaded: !1
            },
            n.onLoad = function() {
                n.actualWith = n.img.width,
                n.actualHeight = n.img.height;
                var e = n.props,
                t = e.screenHeight,
                r = e.screenWidth,
                o = 0;
                n.originWidth = r,
                n.originHeight = n.actualHeight / n.actualWith * r,
                n.actualHeight / n.actualWith < t / r && (o = parseInt((t - n.originHeight) / 2, 10)),
                n.originTop = o,
                n.setState({
                    width: n.originWidth,
                    height: n.originHeight,
                    left: 0,
                    top: o,
                    isLoaded: !0
                })
            },
            n.onError = function() {
                n.setState({
                    isLoaded: !0
                })
            },
            n.loadImg = function(e) {
                n.img = new Image,
                n.img.src = e,
                n.img.onload = n.onLoad,
                n.img.onerror = n.onError,
                n.setState({
                    isLoaded: !1
                })
            },
            n.unloadImg = function() {
                delete n.img.onerror,
                delete n.img.onload,
                delete n.img.src,
                delete n.img
            },
            n.handleTouchStart = function(e) {
                switch (e.preventDefault(), e.touches.length) {
                case 1:
                    var t = e.touches[0];
                    n.startX = t.clientX,
                    n.startY = t.clientY,
                    n.diffX = 0,
                    n.diffY = 0,
                    n.startLeft = n.state.left,
                    n.startTop = n.state.top,
                    n.onTouchStartTime = (new Date).getTime(),
                    n.haveCallMoveFn = !1
                }
            },
            n.handleTouchMove = function(e) {
                switch (e.preventDefault(), e.touches.length) {
                case 1:
                    var t = e.touches[0],
                    r = t.clientX - n.startX,
                    o = t.clientY - n.startY;
                    if (n.diffX = r, n.diffY = o, Math.abs(r) < h && Math.abs(o) < h) return;
                    var i = n.state,
                    a = i.scale,
                    s = (i.left, a * n.originWidth);
                    if (n.state.scale === n.originScale && Math.abs(r) > h) return n.haveCallMoveFn = !0,
                    void n.callHandleMove(r);
                    if (r < 0 && n.startLeft <= n.originWidth - s) return n.haveCallMoveFn = !0,
                    void n.callHandleMove(r);
                    if (r > 0 && n.startLeft >= 0) return n.haveCallMoveFn = !0,
                    void n.callHandleMove(r);
                    var u = n.props.screenHeight,
                    c = a * n.originHeight,
                    l = n.startLeft + r; (c > u || n.state.scale === n.originScale) && n.startTop,
                    n.setState({
                        left: l
                    })
                }
            },
            n.handleTouchEnd = function(e) {
                e.preventDefault();
                var t = (new Date).getTime() - n.onTouchStartTime,
                r = n.diffX,
                o = n.diffY;
                return t < m && Math.abs(r) < h && Math.abs(o) < h ? void n.props.onClose() : n.haveCallMoveFn && n.callHandleEnd(o < 30) ? void setTimeout(function() {
                    n.setState({
                        scale: n.originScale,
                        left: 0,
                        top: n.originTop
                    })
                },
                p / 3) : void 0
            },
            n.callHandleMove = function(e) {
                n.isCalledHandleStart || (n.isCalledHandleStart = !0, n.props.handleStart && n.props.handleStart()),
                n.props.handleMove(e)
            },
            n.callHandleEnd = function(e) {
                if (n.isCalledHandleStart && (n.isCalledHandleStart = !1, n.props.handleEnd)) return n.props.handleEnd(e)
            },
            n.actualHeight = 0,
            n.actualWith = 0,
            n.originHeight = 0,
            n.originWidth = 0,
            n.originScale = 1,
            n.startLeft = 0,
            n.startTop = 0,
            n.startScale = 1,
            n.onTouchStartTime = 0,
            n.isTwoFingerMode = !1,
            n.oldPointLeft = 0,
            n.oldPointTop = 0,
            n._touchZoomDistanceStart = 0,
            n.haveCallMoveFn = !1,
            n.diffX = 0,
            n.diffY = 0,
            n.animationID = 0,
            n.animateStartTime = 0,
            n.animateStartValue = {
                x: 0,
                y: 0
            },
            n.animateFinalValue = {
                x: 0,
                y: 0
            },
            n
        }
        return a(t, e),
        s(t, [{
            key: "componentWillMount",
            value: function() {
                this.loadImg(this.props.src)
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.unloadImg()
            }
        },
        {
            key: "render",
            value: function() {
                var e = this.props,
                t = e.screenWidth,
                n = e.screenHeight,
                r = e.src,
                o = e.left,
                i = this.state,
                a = i.isLoaded,
                s = i.left,
                c = i.top,
                f = i.scale,
                p = i.width,
                h = i.height,
                m = {
                    width: p,
                    height: h
                },
                b = "translate3d(" + s + "px, " + c + "px, 0) scale(" + f + ")";
                m.WebkitTransform = b,
                m.transform = b;
                var _ = {
                    left: o,
                    width: t,
                    height: n
                };
                return (0, u.h)("div", {
                    className: l.
                default.imageContainer,
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd,
                    style: _
                },
                a ? (0, u.h)("img", {
                    src: r,
                    style: m,
                    alt: ""
                }) : (0, u.h)(d.
            default, null))
            }
        }]),
        t
    } (u.Component);
    t.
default = b
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    u = n(1),
    c = n(160),
    l = r(c),
    f = n(115),
    d = r(f),
    p = n(117),
    h = r(p),
    m = "undefined" != typeof document && document.documentElement.clientWidth,
    b = "undefined" != typeof document && document.documentElement.clientHeight,
    _ = function(e) {
        function t(e) {
            o(this, t);
            var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state.isShow = n.props.isShow,
            n.state.index = 0,
            n
        }
        return a(t, e),
        s(t, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState({
                    isShow: e.isShow,
                    index: e.index
                })
            }
        },
        {
            key: "preventScroll",
            value: function(e) {
                e.preventDefault()
            }
        },
        {
            key: "changeIndex",
            value: function(e) {
                this.setState({
                    index: e
                })
            }
        },
        {
            key: "render",
            value: function() {
                var e = this,
                t = this.state,
                n = t.isShow,
                r = t.index,
                o = this.props.imgs || [],
                i = o.map(function(e) {
                    return e.original
                });
                return (0, u.h)("div", {
                    className: l.
                default.imgViewer,
                    style: n ? {
                        display: ""
                    }: {
                        display: "none"
                    }
                },
                (0, u.h)("div", {
                    className: l.
                default.mask,
                    onTouchMove: function(t) {
                        e.preventScroll(t)
                    }
                }), (0, u.h)(h.
            default, {
                    length: o.length,
                    index: r
                }), (0, u.h)(d.
            default, {
                    screenWidth: m,
                    screenHeight: b,
                    changeIndex: function(t) {
                        e.changeIndex(t)
                    },
                    urls: i,
                    index: r,
                    gap: 10,
                    speed: 300,
                    onClose: function() {
                        e.props.onClose()
                    }
                }))
            }
        }]),
        t
    } (u.Component);
    t.
default = _
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    u = n(1),
    c = n(161),
    l = r(c),
    f = n(113),
    d = r(f),
    p = 200,
    h = function(e) {
        function t(e) {
            o(this, t);
            var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                left: 0
            },
            n.easing = function(e) {
                var t = e,
                r = n.props.screenWidth;
                return r / 2.5 * Math.sin(t / r * (Math.PI / 2)) + 0
            },
            n.handleStart = function() {
                n.startLeft = n.state.left,
                n.startTime = (new Date).getTime(),
                n.isNeedSpring = !1
            },
            n.handleMove = function(e) {
                var t = e;
                Math.abs(t) > n.props.screenWidth && (t < 0 && (t = -n.props.screenWidth), t > 0 && (t = n.props.screenWidth)),
                n.state.left >= 0 && t > 0 ? t = n.easing(t) : n.state.left <= -n.maxLeft && t < 0 && (t = -n.easing( - t)),
                n.setState({
                    left: n.startLeft + t
                })
            },
            n.handleEnd = function(e) {
                var t = void 0,
                r = (new Date).getTime() - n.startTime;
                return t = e && r < p ? n.state.left < n.startLeft ? n.props.index + 1 : n.props.index - 1 : Math.abs(Math.round(n.state.left / n.perDistance)),
                t < 0 ? t = 0 : t > n.length - 1 && (t = n.length - 1),
                n.setState({
                    left: -n.perDistance * t
                }),
                n.isNeedSpring = !0,
                t !== n.props.index && (n.props.changeIndex(t), !0)
            },
            n.isNeedSpring = !1,
            n
        }
        return a(t, e),
        s(t, [{
            key: "componentWillMount",
            value: function() {
                var e = this.props,
                t = e.screenWidth,
                n = e.urls,
                r = e.index,
                o = e.gap;
                this.length = n.length,
                this.perDistance = t + o,
                this.maxLeft = this.perDistance * (this.length - 1),
                this.isNeedSpring = !1,
                this.setState({
                    left: -this.perDistance * r
                })
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                this.props.index !== e.index && (this.isNeedSpring = !0, this.setState({
                    left: -this.perDistance * e.index
                }))
            }
        },
        {
            key: "render",
            value: function() {
                var e = this,
                t = this.props,
                n = t.screenWidth,
                r = t.screenHeight,
                o = t.urls,
                i = t.speed,
                a = this.state.left,
                s = {};
                if (this.isNeedSpring) {
                    var c = i + "ms";
                    s.WebkitTransitionDuration = c,
                    s.transitionDuration = c
                }
                var f = "translate3d(" + a + "px, 0, 0)";
                return s.WebkitTransform = f,
                s.transform = f,
                (0, u.h)("div", {
                    className: l.
                default.listContainer,
                    style: s
                },
                o.map(function(t, o) {
                    return (0, u.h)(d.
                default, {
                        key: o,
                        src: t,
                        handleStart: e.handleStart,
                        handleMove: e.handleMove,
                        handleEnd: e.handleEnd,
                        left: e.perDistance * o,
                        screenWidth: n,
                        screenHeight: r,
                        onClose: function(t) {
                            e.props.onClose(t)
                        }
                    })
                }))
            }
        }]),
        t
    } (u.Component);
    t.
default = h
},
function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    s = n(1),
    u = n(162),
    c = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (u),
    l = function(e) {
        function t() {
            return r(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return i(t, e),
        a(t, [{
            key: "render",
            value: function() {
                return (0, s.h)("div", {
                    className: c.
                default.loading
                })
            }
        }]),
        t
    } (s.Component);
    t.
default = l
},
function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    s = n(1),
    u = n(163),
    c = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (u),
    l = function(e) {
        function t() {
            return r(this, t),
            o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return i(t, e),
        a(t, [{
            key: "render",
            value: function() {
                var e = this.props,
                t = e.length,
                n = e.index;
                return (0, s.h)("div", {
                    className: c.
                default.imgNumber
                },
                n + 1, "/", t)
            }
        }]),
        t
    } (s.Component);
    t.
default = l
},
function(e, t, n) {
    "use strict";
    function r() {
        var e = (0, i.getSCVersion)();
        return (0, a.isAndroid)() && (0, s.versionCompare)(e, "1.8.0") > -1 || (0, a.isIOS)() && (0, s.versionCompare)(e, "1.14.0") > -1
    }
    function o(e, t, n, r) {
        t = String(t);
        var o = (0, u.newCallback)(function(e) {
            e ? n() : r({
                msg: l.
            default.ERROR_FOLLOW_FAILED_MSG,
                status: l.
            default.ERROR_FOLLOW_FAILED
            })
        });
        "add" === e ? (0, u.invokeSC)({
            func: "subscriptXiongZhang",
            options: {
                id: t,
                callback: o
            }
        }) : (0, u.invokeSC)({
            func: "unSubscriptXiongZhang",
            options: {
                id: t,
                callback: o
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.canUseSCFollow = r,
    t.follow = o;
    var i = n(55),
    a = n(57),
    s = n(11),
    u = n(69),
    c = n(52),
    l = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (c)
},
function(e, t, n) {
    "use strict";
    function r() {
        if (null === f) {
            var e = (0, i.getSCVersion)();
            f = (0, a.versionCompare)(e, l) > -1
        }
        return f
    }
    function o(e, t) {
        var n = (0, s.newCallback)(function(n) {
            n && !n.status ? 1 === n.data.login_status ? e({
                msg: "login:ok",
                status: 0
            }) : 0 === n.data.login_status && t({
                msg: c.
            default.ERROR_FOLLOW_LOGIN_MSG,
                status: c.
            default.ERROR_FOLLOW_LOGIN
            }):
            t({
                msg:
                c.
            default.ERROR_IM_LOGIN_MSG,
                status: c.
            default.ERROR_IM_LOGIN
            })
        }); (0, s.invokeSC)({
            func: "invokeModule",
            moduleName: "BaiduPassport",
            options: {
                action: "login"
            },
            callback: n
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.canUseSCLogin = r,
    t.login = o;
    var i = n(55),
    a = n(11),
    s = n(69),
    u = n(52),
    c = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (u),
    l = "2.8.0",
    f = null
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    c = n(1),
    l = n(11),
    f = n(16),
    d = r(f),
    p = n(70),
    h = r(p),
    m = function(e) {
        function t(e) {
            return o(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return a(t, e),
        u(t, [{
            key: "render",
            value: function() {
                var e = this.props.context,
                t = s({},
                this.props);
                return delete t[e],
                (0, c.h)("div", null, (0, l.isBaiduDomain)() ? (0, c.h)(d.
            default, this.props) : (0, c.h)(h.
            default, {
                    type: "silentSubscribe",
                    options: t,
                    context: e,
                    needSelfAdapt: !0
                }))
            }
        }]),
        t
    } (c.Component);
    t.
default = m
},
function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    s = n(1),
    u = n(165),
    c = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (u),
    l = function(e) {
        function t() {
            r(this, t);
            var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.onmessage = e.onmessage.bind(e),
            e.state.displayFrame = !1,
            e
        }
        return i(t, e),
        a(t, [{
            key: "onmessage",
            value: function(e) {
                var t = e.data,
                n = this.props,
                r = n.onok,
                o = void 0 === r ?
                function() {}: r,
                i = n.onerror,
                a = void 0 === i ?
                function() {}: i;
                "subscribeIframeReady" === t.type ? this.setState({
                    displayFrame: !0
                }) : "subscribeIframeError" === t.type ? a() : "subscribe" === t.type && (o({
                    data: t
                }), this.setState({
                    displayFrame: !1
                }))
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState({
                    displayFrame: e.displayFrame
                })
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                window.addEventListener("message", this.onmessage, !1)
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("message", this.onmessage, !1)
            }
        },
        {
            key: "render",
            value: function() {
                function e(e) {
                    e.preventDefault()
                }
                var t = this.props,
                n = t.appid,
                r = t.timestamp,
                o = t.url,
                i = t.signature,
                a = t.type,
                u = t.title,
                l = t.describe,
                f = t.button,
                d = (t.onok, this.props.nonce_str),
                p = "https://msite.baidu.com/sdk/subscribe.html?appid=" + n + "&timestamp=" + r + "&nonce_str=" + d + "&url=" + encodeURIComponent(o) + "&signature=" + i + "&type=" + a + "&title=" + u + "&describe=" + l + "&button=" + f;
                return (0, s.h)("div", {
                    style: this.state.displayFrame ? {
                        display: ""
                    }: {
                        display: "none"
                    }
                },
                (0, s.h)("div", {
                    className: c.
                default.mask,
                    onTouchMove: e
                }), (0, s.h)("div", {
                    className: c.
                default.dialog
                },
                (0, s.h)("iframe", {
                    src: p,
                    className: c.
                default.iframe,
                    ref: function(e) {}
                })))
            }
        }]),
        t
    } (s.Component);
    t.
default = l
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    c = n(1),
    l = n(11),
    f = n(60),
    d = n(17),
    p = r(d),
    h = n(70),
    m = r(h),
    b = (0, f.getMIPEnv)(),
    _ = function(e) {
        function t(e) {
            return o(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return a(t, e),
        u(t, [{
            key: "hideCallback",
            value: function() {
                b.indexOf("mip2") >= 0 && window.MIP.viewer.page.togglePageMask(!1, {
                    skipTransition: !0
                })
            }
        },
        {
            key: "render",
            value: function() {
                var e = this.props.context,
                t = s({},
                this.props);
                delete t[e],
                t.displayShadow = !0;
                var n = {
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 99999
                };
                return b.indexOf("mip2") >= 0 && this.props.displayLayer && window.MIP.viewer.page.togglePageMask(!0, {
                    skipTransition: !0
                }),
                (0, c.h)("div", null, (0, l.isBaiduDomain)() ? (0, c.h)(p.
            default, t) : (0, c.h)(m.
            default, {
                    context: e,
                    type: "tel",
                    style: n,
                    options: t,
                    hide: this.hideCallback
                }))
            }
        }]),
        t
    } (c.Component);
    t.
default = _
},
function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    s = n(1),
    u = n(166),
    c = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (u),
    l = null,
    f = null,
    d = function(e) {
        function t() {
            var e, n, i, a;
            r(this, t);
            for (var s = arguments.length,
            u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
            return n = i = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))),
            i.state = {
                active: !1
            },
            a = n,
            o(i, a)
        }
        return i(t, e),
        a(t, [{
            key: "clearCloseTimer",
            value: function() {
                l && (clearTimeout(l), clearTimeout(f))
            }
        },
        {
            key: "removeAll",
            value: function() {
                var e = document.body.querySelectorAll(".cambrian-toast-container");
                if (e.length) for (var t, n = 0; t = e[n]; n++) t.parentNode.removeChild(t),
                t = null
            }
        },
        {
            key: "componentWillMount",
            value: function() {
                this.clearCloseTimer(),
                this.removeAll(),
                document.body.appendChild(this.props.dom)
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                var e = this,
                t = this.props.duration;
                f = setTimeout(function() {
                    e.setState({
                        active: !0
                    })
                },
                10),
                l = setTimeout(function() {
                    try {
                        var t = e.toast.parentNode;
                        t.parentNode.removeChild(t)
                    } catch(e) {
                        return
                    }
                },
                1e3 * t)
            }
        },
        {
            key: "render",
            value: function() {
                var e = this,
                t = this.props,
                n = t.id,
                r = t.msg,
                o = c.
            default.toastTip + (this.state.active ? " " + c.
            default.active:
                "");
                return (0, s.h)("div", {
                    class: o,
                    id: n,
                    ref: function(t) {
                        e.toast = t
                    }
                },
                (0, s.h)("div", {
                    class: c.
                default.content
                },
                r))
            }
        }]),
        t
    } (s.Component);
    t.
default = d
},
function(e, t, n) {
    "use strict";
    function r() {
        return "cambrianToast_" + u + "_" + s++
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = function(e) {
        var t = e.data,
        n = t.msg,
        i = t.duration,
        s = void 0 === i ? 3 : i,
        u = {
            msg: n,
            duration: s,
            id: r()
        };
        u.dom = document.createElement("div"),
        u.dom.className = "cambrian-toast-container",
        (0, o.render)((0, o.h)(a.
    default, u), u.dom),
        e.success({
            status: 0,
            msg: "toast:ok"
        })
    };
    var o = n(1),
    i = n(123),
    a = function(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    } (i),
    s = 0,
    u = Date.now()
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.
default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments[1];
        t ? t.emit("xzh-open-log", e) : r.globalPublic.emit("xzh-open-log", e)
    };
    var r = n(15)
},
function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e: {
        default:
            e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    u = n(4),
    c = n(52),
    l = r(c),
    f = n(14),
    d = r(f),
    p = n(32),
    h = {
        INIT: "init",
        DESTORY: "destory"
    },
    m = function(e) {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o(this, t);
            var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
            r = e.data,
            a = r.appid,
            s = void 0 === a ? 0 : a,
            c = r.signature,
            l = void 0 === c ? "": c;
            return n.id = s + "_" + l,
            n.status = h.INIT,
            (0, u.get)("defaultInsId") || (0, u.set)("defaultInsId", n.id),
            n.setUp(e),
            n
        }
        return a(t, e),
        s(t, [{
            key: "setUp",
            value: function(e) {
                var t = e.data,
                n = e.success,
                r = e.fail,
                o = (0, u.get)(this.id);
                if (o && "fail" !== o.status)"pending" === o.status ? (0, u.setCallback)(this.id, {
                    success: n,
                    fail: r
                }) : "ready" === o.status && n({
                    result: this,
                    status: 0,
                    msg: "init:ok",
                    extraMsg: o.data.auth_result.msg
                });
                else {
                    var i = this; (0, u.set)(this.id, {
                        status: "pending",
                        data: {},
                        callback: [{
                            success: n,
                            fail: r
                        }]
                    }),
                    (0, d.
                default)({
                        url:
                        "https://xiongzhang.baidu.com/sdk/2.0/auth",
                        data: t,
                        type: "jsonp"
                    }).then(function(e) {
                        if (i.status === h.DESTORY) return void r({
                            status: l.
                        default.ERROR_INSTANCE,
                            msg: l.
                        default.ERROR_INSTANCE_MSG
                        });
                        var t = e.data && e.data.auth_result ? e.data.auth_result.msg: "",
                        n = (0, u.get)(i.id).callback;
                        e.code ? ((0, u.setByAttrKey)(i.id, "status", "fail"), n.forEach(function(n) {
                            n.fail({
                                result: i,
                                status: e.code,
                                msg: e.msg,
                                extraMsg: t
                            })
                        })) : ((0, u.setByAttrKey)(i.id, "data", e.data), (0, u.setByAttrKey)(i.id, "status", "ready"), n.forEach(function(e) {
                            e.success({
                                result: i,
                                status: 0,
                                msg: "init:ok",
                                extraMsg: t
                            })
                        }))
                    })
                }
            }
        },
        {
            key: "destory",
            value: function() { (0, u.clearById)(this.id),
                this.id = null,
                this.status = h.DESTORY
            }
        }]),
        t
    } (p.EventEmitter);
    t.
default = m
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, ".F-tnOD{top:0;bottom:0;left:0;right:0;background-color:#000;opacity:.5}._3RBpSA,.F-tnOD{position:fixed;z-index:2147483647}._3RBpSA{top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);left:10%;right:10%;border-radius:4px;font-size:0;animation-name:_16E-UA;animation-duration:.2s;animation-timing-function:ease;animation-fill-mode:forwards;-webkit-animation-name:_16E-UA;-webkit-animation-duration:.2s;-webkit-animation-timing-function:ease;-webkit-animation-fill-mode:forwards}._1YER0K,._3RBpSA{background-color:#fff}._1YER0K{width:100%;height:100%;min-height:297px;border:none;outline:none;border-radius:4px;border:0}._2qNsio{box-sizing:border-box;display:block;position:fixed;z-index:20000;left:50%;top:50%;text-align:center;opacity:0;margin-top:-25px;height:50px;width:100%;transition:opacity .4s ease-in-out;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.a4CNqY{opacity:1}._3NQH_v{margin:0 auto;background:rgba(0,0,0,.7);border-radius:4px;color:#fff;display:inline-block;padding:10px 17px;line-height:24px;font-size:16px;max-width:65%;text-align:center;word-wrap:break-word;word-break:break-word}@keyframes _16E-UA{0%{transform:translateY(-50%) scale(1.3);-webkit-transform:translateY(-50%) scale(1.3)}to{transform:translateY(-50%) scale(1);-webkit-transform:translateY(-50%) scale(1)}}@-webkit-keyframes _16E-UA{0%{transform:translateY(-50%) scale(1.3);-webkit-transform:translateY(-50%) scale(1.3)}to{transform:translateY(-50%) scale(1);-webkit-transform:translateY(-50%) scale(1)}}", ""]),
    t.locals = {
        mask: "F-tnOD",
        layout: "_3RBpSA",
        "layout-fade-in": "_16E-UA",
        iframe: "_1YER0K",
        toastTip: "_2qNsio",
        toastActive: "a4CNqY",
        toastContent: "_3NQH_v"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "#cambrian0 ._1lAJB1,#cambrian1 ._1lAJB1,#cambrian2 ._1lAJB1,#cambrian3 ._1lAJB1,#cambrian4 ._1lAJB1{background-color:#fff;overflow:hidden;-webkit-tap-highlight-color:transparent}#cambrian0 ._1lAJB1 ._1ke4J-,#cambrian1 ._1lAJB1 ._1ke4J-,#cambrian2 ._1lAJB1 ._1ke4J-,#cambrian3 ._1lAJB1 ._1ke4J-,#cambrian4 ._1lAJB1 ._1ke4J-{padding-top:2px;float:right}#cambrian0 ._1lAJB1 ._2xCf_b,#cambrian1 ._1lAJB1 ._2xCf_b,#cambrian2 ._1lAJB1 ._2xCf_b,#cambrian3 ._1lAJB1 ._2xCf_b,#cambrian4 ._1lAJB1 ._2xCf_b{padding-top:3px}#cambrian0 ._1lAJB1 ._8zSUTn,#cambrian1 ._1lAJB1 ._8zSUTn,#cambrian2 ._1lAJB1 ._8zSUTn,#cambrian3 ._1lAJB1 ._8zSUTn,#cambrian4 ._1lAJB1 ._8zSUTn{margin-right:60px;overflow:hidden}#cambrian0 ._1lAJB1 ._8zSUTn ._14jbvD,#cambrian1 ._1lAJB1 ._8zSUTn ._14jbvD,#cambrian2 ._1lAJB1 ._8zSUTn ._14jbvD,#cambrian3 ._1lAJB1 ._8zSUTn ._14jbvD,#cambrian4 ._1lAJB1 ._8zSUTn ._14jbvD{float:left;font-size:0;position:relative}#cambrian0 ._1lAJB1 ._8zSUTn ._14jbvD ._1JSyq3,#cambrian1 ._1lAJB1 ._8zSUTn ._14jbvD ._1JSyq3,#cambrian2 ._1lAJB1 ._8zSUTn ._14jbvD ._1JSyq3,#cambrian3 ._1lAJB1 ._8zSUTn ._14jbvD ._1JSyq3,#cambrian4 ._1lAJB1 ._8zSUTn ._14jbvD ._1JSyq3{margin:0 8px 0 0;width:35px;height:35px;border-radius:50%;border:1px solid #eee;box-sizing:border-box}#cambrian0 ._1lAJB1 ._8zSUTn ._2UGABC ._1X-0oQ,#cambrian1 ._1lAJB1 ._8zSUTn ._2UGABC ._1X-0oQ,#cambrian2 ._1lAJB1 ._8zSUTn ._2UGABC ._1X-0oQ,#cambrian3 ._1lAJB1 ._8zSUTn ._2UGABC ._1X-0oQ,#cambrian4 ._1lAJB1 ._8zSUTn ._2UGABC ._1X-0oQ{white-space:nowrap;overflow:hidden;position:relative;font-size:0}#cambrian0 ._1lAJB1 ._8zSUTn ._2UGABC ._27t1FH,#cambrian1 ._1lAJB1 ._8zSUTn ._2UGABC ._27t1FH,#cambrian2 ._1lAJB1 ._8zSUTn ._2UGABC ._27t1FH,#cambrian3 ._1lAJB1 ._8zSUTn ._2UGABC ._27t1FH,#cambrian4 ._1lAJB1 ._8zSUTn ._2UGABC ._27t1FH{display:inline-block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:16px;color:#000;font-weight:300;line-height:16px;max-width:60%}#cambrian0 ._1lAJB1 ._8zSUTn ._2UGABC ._3AE6SS,#cambrian1 ._1lAJB1 ._8zSUTn ._2UGABC ._3AE6SS,#cambrian2 ._1lAJB1 ._8zSUTn ._2UGABC ._3AE6SS,#cambrian3 ._1lAJB1 ._8zSUTn ._2UGABC ._3AE6SS,#cambrian4 ._1lAJB1 ._8zSUTn ._2UGABC ._3AE6SS{font-size:12px;color:#999;margin-top:5px;font-weight:300;line-height:14px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}#cambrian0 ._1lAJB1 ._8zSUTn ._2UGABC ._3Gqr4B,#cambrian1 ._1lAJB1 ._8zSUTn ._2UGABC ._3Gqr4B,#cambrian2 ._1lAJB1 ._8zSUTn ._2UGABC ._3Gqr4B,#cambrian3 ._1lAJB1 ._8zSUTn ._2UGABC ._3Gqr4B,#cambrian4 ._1lAJB1 ._8zSUTn ._2UGABC ._3Gqr4B{display:inline-block;overflow:hidden;box-sizing:content-box;height:10px;padding:1px 2px;font-size:10px;font-weight:400;font-style:normal;line-height:11px;vertical-align:middle;text-decoration:none;border-radius:3px;border:1px solid #e3e3e3;color:#999;position:absolute;top:1px;margin-left:5px}", ""]),
    t.locals = {
        bar: "_1lAJB1",
        subscribe: "_1ke4J-",
        search: "_2xCf_b",
        infowrapper: "_8zSUTn",
        logowrapper: "_14jbvD",
        logo: "_1JSyq3",
        info: "_2UGABC",
        nameWapper: "_1X-0oQ",
        name: "_27t1FH",
        gfh: "_3AE6SS",
        sign: "_3Gqr4B"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "#cambrian0 ._7Brqef,#cambrian1 ._7Brqef,#cambrian2 ._7Brqef,#cambrian3 ._7Brqef,#cambrian4 ._7Brqef{padding:15px 0;background-color:#fff}", ""]),
    t.locals = {
        bodybar: "_7Brqef"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, '#cambrian0 ._25ZfXD,#cambrian1 ._25ZfXD,#cambrian2 ._25ZfXD,#cambrian3 ._25ZfXD,#cambrian4 ._25ZfXD{width:57px;padding:8px 0;text-align:center;font-weight:300;font-size:12px;line-height:12px;vertical-align:middle;display:inline-block;color:#fff;background:#3897f0;border-radius:3px;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}#cambrian0 ._25ZfXD:active,#cambrian1 ._25ZfXD:active,#cambrian2 ._25ZfXD:active,#cambrian3 ._25ZfXD:active,#cambrian4 ._25ZfXD:active{background-color:rgba(56,151,240,.8)}#cambrian0 .t2tRkr,#cambrian1 .t2tRkr,#cambrian2 .t2tRkr,#cambrian3 .t2tRkr,#cambrian4 .t2tRkr{color:#666;background-color:#fff;position:relative;z-index:0;border-radius:2px}#cambrian0 .t2tRkr:after,#cambrian1 .t2tRkr:after,#cambrian2 .t2tRkr:after,#cambrian3 .t2tRkr:after,#cambrian4 .t2tRkr:after{content:"";position:absolute;box-sizing:border-box;top:0;left:0;border:1px solid #ccc;border-radius:4px;width:200%;height:200%;z-index:-1;transform:scale(.5);-webkit-transform:scale(.5);transform-origin:left top;-webkit-transform-origin:left top}#cambrian0 .t2tRkr:active,#cambrian1 .t2tRkr:active,#cambrian2 .t2tRkr:active,#cambrian3 .t2tRkr:active,#cambrian4 .t2tRkr:active{background-color:#fff}#cambrian0 ._1glgS5,#cambrian1 ._1glgS5,#cambrian2 ._1glgS5,#cambrian3 ._1glgS5,#cambrian4 ._1glgS5{width:120px}#cambrian0 ._1glgS5:active,#cambrian1 ._1glgS5:active,#cambrian2 ._1glgS5:active,#cambrian3 ._1glgS5:active,#cambrian4 ._1glgS5:active{background-color:rgba(56,151,240,.8)}#cambrian0 .-ejjJx,#cambrian1 .-ejjJx,#cambrian2 .-ejjJx,#cambrian3 .-ejjJx,#cambrian4 .-ejjJx{padding:8px 0;width:120px;background-color:#fff;color:#666;position:relative;z-index:0;border-radius:3px}#cambrian0 .-ejjJx:after,#cambrian1 .-ejjJx:after,#cambrian2 .-ejjJx:after,#cambrian3 .-ejjJx:after,#cambrian4 .-ejjJx:after{content:"";position:absolute;box-sizing:border-box;top:0;left:0;border:1px solid #eee;border-radius:6px;width:200%;height:200%;z-index:-1;transform:scale(.5);-webkit-transform:scale(.5);transform-origin:left top;-webkit-transform-origin:left top}#cambrian0 .-ejjJx:active,#cambrian1 .-ejjJx:active,#cambrian2 .-ejjJx:active,#cambrian3 .-ejjJx:active,#cambrian4 .-ejjJx:active{background-color:rgba(0,0,0,.08)}#cambrian0 ._17L0fN,#cambrian1 ._17L0fN,#cambrian2 ._17L0fN,#cambrian3 ._17L0fN,#cambrian4 ._17L0fN{background-color:#fff;color:#000;border:1px solid #707379;border-radius:3px;padding:7px 0;width:55px}#cambrian0 ._17L0fN:active,#cambrian1 ._17L0fN:active,#cambrian2 ._17L0fN:active,#cambrian3 ._17L0fN:active,#cambrian4 ._17L0fN:active{background-color:rgba(0,0,0,.08)}', ""]),
    t.locals = {
        button: "_25ZfXD",
        buttonDisabled: "t2tRkr",
        blue: "_1glgS5",
        grey: "-ejjJx",
        search: "_17L0fN"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, '#cambrian0 ._15GsC0,#cambrian1 ._15GsC0,#cambrian2 ._15GsC0,#cambrian3 ._15GsC0,#cambrian4 ._15GsC0{position:relative;background-color:#fff}#cambrian0 ._2fGLIX,#cambrian1 ._2fGLIX,#cambrian2 ._2fGLIX,#cambrian3 ._2fGLIX,#cambrian4 ._2fGLIX{padding:15px 0;background-color:#fff}#cambrian0 ._3tOSKX,#cambrian1 ._3tOSKX,#cambrian2 ._3tOSKX,#cambrian3 ._3tOSKX,#cambrian4 ._3tOSKX{position:relative;z-index:0;position:absolute;top:0;left:0;right:0;z-index:-1}#cambrian0 ._3tOSKX:after,#cambrian1 ._3tOSKX:after,#cambrian2 ._3tOSKX:after,#cambrian3 ._3tOSKX:after,#cambrian4 ._3tOSKX:after{content:"";position:absolute;box-sizing:border-box;top:0;left:0;border-bottom:1px solid #ddd;width:200%;height:200%;z-index:-1;transform:scale(.5);-webkit-transform:scale(.5);transform-origin:left top;-webkit-transform-origin:left top}#cambrian0 ._3tOSKX ._1XQ-iI,#cambrian1 ._3tOSKX ._1XQ-iI,#cambrian2 ._3tOSKX ._1XQ-iI,#cambrian3 ._3tOSKX ._1XQ-iI,#cambrian4 ._3tOSKX ._1XQ-iI{padding:15px 17px;background-color:#fff}', ""]),
    t.locals = {
        wrapper: "_15GsC0",
        normalbar: "_2fGLIX",
        fixedbar: "_3tOSKX",
        inner: "_1XQ-iI"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "#cambrian0 ._2agQN7,#cambrian1 ._2agQN7,#cambrian2 ._2agQN7,#cambrian3 ._2agQN7,#cambrian4 ._2agQN7{margin:0}", ""]),
    t.locals = {
        headbar: "_2agQN7"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, '#cambrian0 ._1mpIIe,#cambrian1 ._1mpIIe,#cambrian2 ._1mpIIe,#cambrian3 ._1mpIIe,#cambrian4 ._1mpIIe{background-color:#fff;margin:20px 0;position:relative;z-index:0;border-radius:4px;overflow:hidden;-webkit-tap-highlight-color:transparent}#cambrian0 ._1mpIIe:after,#cambrian1 ._1mpIIe:after,#cambrian2 ._1mpIIe:after,#cambrian3 ._1mpIIe:after,#cambrian4 ._1mpIIe:after{content:"";position:absolute;box-sizing:border-box;top:0;left:0;border:1px solid #ddd;border-radius:8px;width:200%;height:200%;z-index:-1;transform:scale(.5);-webkit-transform:scale(.5);transform-origin:left top;-webkit-transform-origin:left top}#cambrian0 ._1mpIIe ._3YDNrK,#cambrian1 ._1mpIIe ._3YDNrK,#cambrian2 ._1mpIIe ._3YDNrK,#cambrian3 ._1mpIIe ._3YDNrK,#cambrian4 ._1mpIIe ._3YDNrK{text-align:center}#cambrian0 ._1mpIIe ._3YDNrK ._3Ur4mW,#cambrian1 ._1mpIIe ._3YDNrK ._3Ur4mW,#cambrian2 ._1mpIIe ._3YDNrK ._3Ur4mW,#cambrian3 ._1mpIIe ._3YDNrK ._3Ur4mW,#cambrian4 ._1mpIIe ._3YDNrK ._3Ur4mW{width:67px;height:67px;border:1px solid transparent;border-radius:50%;margin-top:26px}#cambrian0 ._1mpIIe .fsM37u,#cambrian1 ._1mpIIe .fsM37u,#cambrian2 ._1mpIIe .fsM37u,#cambrian3 ._1mpIIe .fsM37u,#cambrian4 ._1mpIIe .fsM37u{margin-top:10px;text-align:center;line-height:16px;font-size:16px;color:#333;font-weight:600}#cambrian0 ._1mpIIe ._2QGloY,#cambrian1 ._1mpIIe ._2QGloY,#cambrian2 ._1mpIIe ._2QGloY,#cambrian3 ._1mpIIe ._2QGloY,#cambrian4 ._1mpIIe ._2QGloY{width:78%;margin:auto;margin-top:10px;text-align:center;font-size:13px;color:#999;line-height:17px;font-weight:300}#cambrian0 ._1mpIIe .FiQpSl,#cambrian1 ._1mpIIe .FiQpSl,#cambrian2 ._1mpIIe .FiQpSl,#cambrian3 ._1mpIIe .FiQpSl,#cambrian4 ._1mpIIe .FiQpSl{text-align:center;margin:13px 0 25px}', ""]),
    t.locals = {
        tailbar: "_1mpIIe",
        logowrapper: "_3YDNrK",
        logo: "_3Ur4mW",
        name: "fsM37u",
        describe: "_2QGloY",
        subscribe: "FiQpSl"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "#cambrian0 ._3-matf,#cambrian1 ._3-matf,#cambrian2 ._3-matf,#cambrian3 ._3-matf,#cambrian4 ._3-matf{display:block;position:fixed;z-index:2147483646;top:0;left:0;right:0;background:#fff}", ""]),
    t.locals = {
        sticky: "_3-matf"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, '._14rUT-{padding:15px 0;border-bottom:1px solid #eee}._14rUT-:last-child{border:none}._14rUT- ._2Ngwtr .avGG1B{width:1.75em;margin-right:.45em;vertical-align:middle;border-radius:50%}._14rUT- ._2Ngwtr .EG7qCE{vertical-align:middle}._14rUT- ._2Ngwtr ._27oXl1{display:inline-block;padding:0 .74em}._14rUT- ._2Ngwtr ._27oXl1 ._2oYN2y{display:inline-block;width:9px;height:8.67px;margin-right:4.5px;background:url(\'data:image/svg+xml;charset=utf-8,<svg width="28" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M21.439 25.055l-1.588-8.68 6.331-6.086-8.653-1.154-3.752-7.962-3.753 7.962-8.653 1.154 6.33 6.085-1.587 8.681 7.663-4.21 7.662 4.21z" stroke="%23F60" fill="none"/></svg>\') no-repeat 50%/contain}._14rUT- ._2Ngwtr ._27oXl1 ._2oYN2y[active=active]{background:url(\'data:image/svg+xml;charset=utf-8,<svg width="27" height="27" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 21.915L5.157 26.5l1.728-9.451L0 10.43l9.412-1.256L13.5.5l4.088 8.675L27 10.43l-6.885 6.618 1.728 9.451z" fill="%23F60" fill-rule="evenodd"/></svg>\') no-repeat 50%/contain}._14rUT- .iEL3Wt{position:relative;padding:4.5px 0;line-height:1.7}._14rUT- .iEL3Wt .xhgJpt{display:inline-block;width:4em;color:transparent;text-indent:-1em}._14rUT- .iEL3Wt ._2jHI0U{position:absolute;right:0;bottom:0;height:1.7em;padding-bottom:.36em;line-height:1.7;color:#555}._14rUT- .iEL3Wt ._2jHI0U ._1hdgE_,._14rUT- .iEL3Wt ._2jHI0U ._3rWD0g{display:inline-block;width:.79em;height:100%;margin-left:.69em;vertical-align:middle;background:url(\'data:image/svg+xml;charset=utf-8,<svg width="37" height="21" xmlns="http://www.w3.org/2000/svg"><path d="M35 2L18.352 19 2 2" stroke="%23555" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>\') no-repeat 50%/contain;-webkit-transition:transform .3s,-webkit-transform .3s;transition:transform .3s,-webkit-transform .3s}._14rUT- .iEL3Wt ._2jHI0U ._3rWD0g{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._14rUT- ._1nie-p{margin:0 -1%;line-height:0}._14rUT- ._1nie-p ._2HlHf2{display:inline-block;box-sizing:border-box;width:33.33%;padding:1%}._14rUT- ._1nie-p ._2HlHf2 .-VIzDx{position:relative;padding-bottom:100%}._14rUT- ._1nie-p ._2HlHf2 .-VIzDx .dw7BXg{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:cover;background-position:50%}._14rUT- ._1nie-p ._2HlHf2 .-VIzDx ._3LZU2Y{position:absolute;right:1.3333px;bottom:1.3333px;width:38%;height:16.5%;border-radius:10px;background:rgba(0,0,0,.4)}._14rUT- ._1nie-p ._2HlHf2 .-VIzDx ._3LZU2Y .QLkuwY{display:inline-block;width:20%;height:100%;margin:0 12% 0 22%;background:url(\'data:image/svg+xml;charset=utf-8,<svg width="27" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 1c0-.552.446-1 .993-1h25.014c.548 0 .993.447.993 1v22c0 .552-.446 1-.993 1H.993A.996.996 0 0 1 0 23V1zm21 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 13v8h21v-5l-5-4-3 4-9-6-4 3z" fill="%23FFF" fill-rule="evenodd"/></svg>\') no-repeat 50%/contain}._14rUT- ._1nie-p ._2HlHf2 .-VIzDx ._3LZU2Y .v38xsP{position:absolute;top:50%;font-size:.74em;color:#fff}._14rUT- ._2QySNQ{padding-top:6.114px;font-size:.93em;line-height:1;color:#999}', ""]),
    t.locals = {
        container: "_14rUT-",
        head: "_2Ngwtr",
        headImg: "avGG1B",
        name: "EG7qCE",
        starCon: "_27oXl1",
        star: "_2oYN2y",
        content: "iEL3Wt",
        contentAnchor: "xhgJpt",
        showImg: "_2jHI0U",
        showImgIcon: "_1hdgE_",
        hideImgIcon: "_3rWD0g",
        imgList: "_1nie-p",
        imgCon: "_2HlHf2",
        innerCon: "-VIzDx",
        img: "dw7BXg",
        imgSumCon: "_3LZU2Y",
        imgIcon: "QLkuwY",
        imgSum: "v38xsP",
        time: "_2QySNQ"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, '.asf3rl{padding:17px 0;font-family:PingFangSC-Regular,STHeitiSC-Light,Arial;font-size:16px;line-height:1}.asf3rl .J1OYnj{display:inline-block;color:#000}.asf3rl ._2kiBZ4{float:right;font-size:14px;line-height:16px;color:#999}.M_mvQl{background:#fff;font-family:PingFangSC-Regular,STHeitiSC-Light,Arial;font-size:100px;color:#000}.M_mvQl .PS9gBZ{padding-top:.2em}.M_mvQl .PS9gBZ ._2iPOt_{height:1em;font-size:.19em;line-height:1}.M_mvQl .PS9gBZ ._2iPOt_ ._1z4Qsb,.M_mvQl .PS9gBZ ._2iPOt_ ._1ZV35G{height:100%;float:right;padding-right:5px;line-height:19px;font-size:15px;color:#999}.M_mvQl .PS9gBZ ._2iPOt_ ._1z4Qsb{padding-right:10px;color:#f60}.M_mvQl .PS9gBZ ._2iPOt_ ._3P0fPE{width:.35em;height:100%;float:right;background:url(\'data:image/svg+xml;charset=utf-8,<svg width="21" height="37" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l17 16.648L2 35" stroke="%23666" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>\') no-repeat 50%/contain}.M_mvQl .PS9gBZ ._2IAd9a{padding-top:15px;line-height:1;margin:0 -1%;font-size:.14em}.M_mvQl .PS9gBZ ._2IAd9a ._1ydlrj{display:inline-block;box-sizing:border-box;width:25%;padding:5px 1%;line-height:2;vertical-align:top}.M_mvQl .PS9gBZ ._2IAd9a ._1ydlrj span{display:inline-block;box-sizing:border-box;width:100%;height:100%;border:1px solid #eee;border-radius:3px;color:#999;text-align:center}.M_mvQl .PS9gBZ ._2IAd9a ._1ydlrj ._2Q7RN7{border-color:#555;color:#555}.M_mvQl .G43uzu{font-size:.14em}', ""]),
    t.locals = {
        nocom: "asf3rl",
        notitle: "J1OYnj",
        noremind: "_2kiBZ4",
        container: "M_mvQl",
        head: "PS9gBZ",
        link: "_2iPOt_",
        rateDesc: "_1ZV35G",
        rate: "_1z4Qsb",
        icon: "_3P0fPE",
        tags: "_2IAd9a",
        item: "_1ydlrj",
        active: "_2Q7RN7",
        content: "G43uzu"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "._1EYBfz{overflow-x:hidden;overflow-y:auto}._1EYBfz,._1EYBfz img{position:absolute;z-index:2147483647;top:0;left:0}._1EYBfz img{transform-origin:left top;-webkit-transform-origin:left top;-moz-transform-origin:left top;-o-transform-origin:left top;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}", ""]),
    t.locals = {
        imageContainer: "_1EYBfz"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "._2MiVyI{z-index:2147483647;overflow:hidden}._1m6Grw,._2MiVyI{position:fixed;top:0;bottom:0;left:0;right:0}._1m6Grw{z-index:2147483646;background-color:#000}", ""]),
    t.locals = {
        imgViewer: "_2MiVyI",
        mask: "_1m6Grw"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "._3NRDcV{position:absolute;z-index:2147483646;left:0;top:0;width:100%;height:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}", ""]),
    t.locals = {
        listContainer: "_3NRDcV"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, ".MR5Nrq{position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;width:32px;height:32px;box-sizing:border-box;border-radius:100%;border:4px solid #333;border-bottom-color:#fff;-webkit-animation:_3Ajh_S 1s linear infinite;animation:_3Ajh_S 1s linear infinite}@-webkit-keyframes _3Ajh_S{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes _3Ajh_S{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]),
    t.locals = {
        loading: "MR5Nrq",
        roll: "_3Ajh_S"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "._3wTO11{position:absolute;z-index:2147483647;top:10%;left:0;width:100%;text-align:center;color:#fff}", ""]),
    t.locals = {
        imgNumber: "_3wTO11"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "._3EPB0Y{width:100%;height:100%;padding:0;border:none;margin:0;overflow:hidden}", ""]),
    t.locals = {
        iframe: "_3EPB0Y"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "._2eL3kO{position:fixed;z-index:2147483647;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);left:10%;right:10%;border-radius:4px}._2-v2Uz,._2eL3kO{background-color:#fff}._2-v2Uz{width:100%;height:100%;min-height:260px;border:none;outline:none;border-radius:4px}._2l1yxM{position:fixed;z-index:2147483647;top:0;bottom:0;left:0;right:0;background-color:#000;opacity:.65}", ""]),
    t.locals = {
        dialog: "_2eL3kO",
        iframe: "_2-v2Uz",
        mask: "_2l1yxM"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, ".cambrian-toast-container{box-sizing:border-box}.cambrian-toast-container .Afq-WG{box-sizing:border-box;position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin-top:-25px;height:50px;width:100%;text-align:center;z-index:200;transition:opacity .3s;opacity:0}.cambrian-toast-container ._1YZEPN{box-sizing:border-box;display:inline-block;width:auto;margin:0 auto;height:45px;min-width:100px;padding:0 17px;font-size:18px;line-height:45px;color:#fff;font-size:14px;font-family:HanHei SC,PingHei,PingFang SC,STHeitiSC-Light,Helvetica Neue,Helvetica,Arial;background-color:rgba(0,0,0,.8);border-radius:4px}.cambrian-toast-container ._2K9sIl{opacity:1}@media screen and (max-width:320px){.cambrian-toast-container ._1YZEPN{font-size:16px}}", ""]),
    t.locals = {
        toastTip: "Afq-WG",
        content: "_1YZEPN",
        active: "_2K9sIl"
    }
},
function(e, t, n) {
    t = e.exports = n(12)(!1),
    t.push([e.i, "#cambrian0,#cambrian1,#cambrian2,#cambrian3,#cambrian4{color:#000;font-style:normal;font-weight:400;letter-spacing:normal;word-spacing:normal;white-space:normal}#cambrian0,#cambrian0 div,#cambrian0 img,#cambrian1,#cambrian1 div,#cambrian1 img,#cambrian2,#cambrian2 div,#cambrian2 img,#cambrian3,#cambrian3 div,#cambrian3 img,#cambrian4,#cambrian4 div,#cambrian4 img{width:auto;height:auto;margin:0;padding:0;background-color:transparent;background-position:0 0;background-size:auto;background-repeat:repeat;background-origin:padding-box;background-clip:border-box;background-attachment:scroll;background-image:none;border:none;outline:medium none invert;color:inherit;direction:ltr;letter-spacing:inherit;line-height:normal;text-align:left;text-decoration:none;text-indent:0;text-transform:none;white-space:inherit;word-spacing:normal;font-size:12px;font-family:HanHei SC,PingHei,PingFang SC,STHeitiSC-Light,Helvetica Neue,Helvetica,Arial,sans-serif;font-size-adjust:none;font-stretch:normal;font-style:inherit;font-variant:normal;font-weight:inherit;visibility:visible;overflow:visible;list-style:none;float:none;clear:none;display:block;position:static;top:auto;left:auto;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}#cambrian0 a,#cambrian0 b,#cambrian0 em,#cambrian0 img,#cambrian0 span,#cambrian0 strong,#cambrian1 a,#cambrian1 b,#cambrian1 em,#cambrian1 img,#cambrian1 span,#cambrian1 strong,#cambrian2 a,#cambrian2 b,#cambrian2 em,#cambrian2 img,#cambrian2 span,#cambrian2 strong,#cambrian3 a,#cambrian3 b,#cambrian3 em,#cambrian3 img,#cambrian3 span,#cambrian3 strong,#cambrian4 a,#cambrian4 b,#cambrian4 em,#cambrian4 img,#cambrian4 span,#cambrian4 strong{display:inline}", ""])
},
function(e, t, n) {
    "use strict";
    var r = n(148),
    o = n(147),
    i = n(71);
    e.exports = {
        formats: i,
        parse: o,
        stringify: r
    }
},
function(e, t, n) {
    "use strict";
    var r = n(72),
    o = Object.prototype.hasOwnProperty,
    i = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        decoder: r.decode,
        delimiter: "&",
        depth: 5,
        parameterLimit: 1e3,
        plainObjects: !1,
        strictNullHandling: !1
    },
    a = function(e, t) {
        for (var n = {},
        r = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, s = r.split(t.delimiter, a), u = 0; u < s.length; ++u) {
            var c, l, f = s[u],
            d = f.indexOf("]="),
            p = -1 === d ? f.indexOf("=") : d + 1; - 1 === p ? (c = t.decoder(f, i.decoder), l = t.strictNullHandling ? null: "") : (c = t.decoder(f.slice(0, p), i.decoder), l = t.decoder(f.slice(p + 1), i.decoder)),
            o.call(n, c) ? n[c] = [].concat(n[c]).concat(l) : n[c] = l
        }
        return n
    },
    s = function(e, t, n) {
        for (var r = t,
        o = e.length - 1; o >= 0; --o) {
            var i, a = e[o];
            if ("[]" === a) i = [],
            i = i.concat(r);
            else {
                i = n.plainObjects ? Object.create(null) : {};
                var s = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                u = parseInt(s, 10); ! isNaN(u) && a !== s && String(u) === s && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (i = [], i[u] = r) : i[s] = r
            }
            r = i
        }
        return r
    },
    u = function(e, t, n) {
        if (e) {
            var r = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
            i = /(\[[^[\]]*])/,
            a = /(\[[^[\]]*])/g,
            u = i.exec(r),
            c = u ? r.slice(0, u.index) : r,
            l = [];
            if (c) {
                if (!n.plainObjects && o.call(Object.prototype, c) && !n.allowPrototypes) return;
                l.push(c)
            }
            for (var f = 0; null !== (u = a.exec(r)) && f < n.depth;) {
                if (f += 1, !n.plainObjects && o.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes) return;
                l.push(u[1])
            }
            return u && l.push("[" + r.slice(u.index) + "]"),
            s(l, t, n)
        }
    };
    e.exports = function(e, t) {
        var n = t ? r.assign({},
        t) : {};
        if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder) throw new TypeError("Decoder has to be a function.");
        if (n.ignoreQueryPrefix = !0 === n.ignoreQueryPrefix, n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter: i.delimiter, n.depth = "number" == typeof n.depth ? n.depth: i.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit: i.arrayLimit, n.parseArrays = !1 !== n.parseArrays, n.decoder = "function" == typeof n.decoder ? n.decoder: i.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots: i.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects: i.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes: i.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit: i.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling: i.strictNullHandling, "" === e || null === e || void 0 === e) return n.plainObjects ? Object.create(null) : {};
        for (var o = "string" == typeof e ? a(e, n) : e, s = n.plainObjects ? Object.create(null) : {},
        c = Object.keys(o), l = 0; l < c.length; ++l) {
            var f = c[l],
            d = u(f, o[f], n);
            s = r.merge(s, d, n)
        }
        return r.compact(s)
    }
},
function(e, t, n) {
    "use strict";
    var r = n(72),
    o = n(71),
    i = {
        brackets: function(e) {
            return e + "[]"
        },
        indices: function(e, t) {
            return e + "[" + t + "]"
        },
        repeat: function(e) {
            return e
        }
    },
    a = Date.prototype.toISOString,
    s = {
        delimiter: "&",
        encode: !0,
        encoder: r.encode,
        encodeValuesOnly: !1,
        serializeDate: function(e) {
            return a.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    u = function e(t, n, o, i, a, u, c, l, f, d, p, h) {
        var m = t;
        if ("function" == typeof c) m = c(n, m);
        else if (m instanceof Date) m = d(m);
        else if (null === m) {
            if (i) return u && !h ? u(n, s.encoder) : n;
            m = ""
        }
        if ("string" == typeof m || "number" == typeof m || "boolean" == typeof m || r.isBuffer(m)) return u ? [p(h ? n: u(n, s.encoder)) + "=" + p(u(m, s.encoder))] : [p(n) + "=" + p(String(m))];
        var b = [];
        if (void 0 === m) return b;
        var _;
        if (Array.isArray(c)) _ = c;
        else {
            var v = Object.keys(m);
            _ = l ? v.sort(l) : v
        }
        for (var g = 0; g < _.length; ++g) {
            var y = _[g];
            a && null === m[y] || (b = Array.isArray(m) ? b.concat(e(m[y], o(n, y), o, i, a, u, c, l, f, d, p, h)) : b.concat(e(m[y], n + (f ? "." + y: "[" + y + "]"), o, i, a, u, c, l, f, d, p, h)))
        }
        return b
    };
    e.exports = function(e, t) {
        var n = e,
        a = t ? r.assign({},
        t) : {};
        if (null !== a.encoder && void 0 !== a.encoder && "function" != typeof a.encoder) throw new TypeError("Encoder has to be a function.");
        var c = void 0 === a.delimiter ? s.delimiter: a.delimiter,
        l = "boolean" == typeof a.strictNullHandling ? a.strictNullHandling: s.strictNullHandling,
        f = "boolean" == typeof a.skipNulls ? a.skipNulls: s.skipNulls,
        d = "boolean" == typeof a.encode ? a.encode: s.encode,
        p = "function" == typeof a.encoder ? a.encoder: s.encoder,
        h = "function" == typeof a.sort ? a.sort: null,
        m = void 0 !== a.allowDots && a.allowDots,
        b = "function" == typeof a.serializeDate ? a.serializeDate: s.serializeDate,
        _ = "boolean" == typeof a.encodeValuesOnly ? a.encodeValuesOnly: s.encodeValuesOnly;
        if (void 0 === a.format) a.format = o.
    default;
        else if (!Object.prototype.hasOwnProperty.call(o.formatters, a.format)) throw new TypeError("Unknown format option provided.");
        var v, g, y = o.formatters[a.format];
        "function" == typeof a.filter ? (g = a.filter, n = g("", n)) : Array.isArray(a.filter) && (g = a.filter, v = g);
        var w = [];
        if ("object" != typeof n || null === n) return "";
        var O;
        O = a.arrayFormat in i ? a.arrayFormat: "indices" in a ? a.indices ? "indices": "repeat": "indices";
        var x = i[O];
        v || (v = Object.keys(n)),
        h && v.sort(h);
        for (var R = 0; R < v.length; ++R) {
            var S = v[R];
            f && null === n[S] || (w = w.concat(u(n[S], S, x, l, f, d ? p: null, g, h, m, b, y, _)))
        }
        var E = w.join(c),
        k = !0 === a.addQueryPrefix ? "?": "";
        return E.length > 0 ? k + E: ""
    }
},
function(e, t, n) {
    var r = n(127);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(128);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(129);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(130);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(131);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(132);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(133);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(134);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(135);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(136);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(137);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(138);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(139);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(140);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(141);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(142);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(143);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
},
function(e, t, n) {
    var r = n(144);
    "string" == typeof r && (r = [[e.i, r, ""]]),
    n(13)(r, {}),
    r.locals && (e.exports = r.locals)
}]);