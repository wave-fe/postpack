!function (t) {
    function n(e) {
        if (r[e])
            return r[e].exports;
        var i = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(), i.l = !0, i.exports;
    }
    var e = window.cambrianChunkJsonp;
    window.cambrianChunkJsonp = function (n, r, o) {
        for (var u, s, c = 0, a = []; c < n.length; c++)
            s = n[c], i[s] && a.push(i[s][0]), i[s] = 0;
        for (u in r)
            Object.prototype.hasOwnProperty.call(r, u) && (t[u] = r[u]);
        for (e && e(n, r, o); a.length;)
            a.shift()();
    };
    var r = {}, i = { 1: 0 };
    n.e = function (t) {
        var r = i[t];
        if (0 === r)
            return new Promise();
        if (r)
            return r[2];
        var o = new Promise();
        r[2] = o;
        var u = document.getElementsByTagName('head')[0], s = document.createElement('script');
        s.type = 'text/javascript', s.charset = 'utf-8', s.async = !0, s.timeout = 120000, n.nc && s.setAttribute('nonce', n.nc), s.src = n.p + '' + ({ 0: 'ability' }[t] || t) + '.' + { 0: 'a5461b98' }[t] + '.js';
        var c = setTimeout(e, 120000);
        return s.onerror = s.onload = e, u.appendChild(s), o;
    }, n.m = t, n.c = r, n.i = function (t) {
        return t;
    }, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        });
    }, n.n = function (t) {
        var e = t && t.__esModule ? undefined : undefined;
        return n.d(e, 'a', e), e;
    }, n.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
    }, n.p = 'https://ae.bdstatic.com/xz/msite/static/sdk/', n.oe = function (t) {
        throw console.error(t), t;
    }, n(n.s = 44);
}([
    ,
    ,
    ,
    ,
    function (t, n, e) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 });
        var l = Object.assign || function (t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n];
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            }
            return t;
        };
        n.set = i, n.setByAttrKey = o, n.setCallback = u, n.get = s, n.clear = c, n.clearById = a;
        var f = {};
    },
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 }), n.register = r, n.get = i;
        var o = e(3), u = e(43), s = e(15), c = e(2), a = {};
    },
    function (t, n, e) {
        'use strict';
        Object.defineProperty(n, '__esModule', { value: !0 });
        var d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? undefined : undefined;
        n.isBaiduDomain = r, n.sendLog = i, n.versionCompare = o, n.isSpecialIOS = u, n.getAppid = s, n.getInsData = c, n.getDefaultInsData = a, n.isObject = l, n.isFunction = f, n.isHTMLElement = p;
        var h = e(4), v = function (t) {
                if (t && t.__esModule)
                    return t;
                var n = {};
                if (null != t)
                    for (var e in t)
                        Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                return n.default = t, n;
            }(h), b = 'https://xiongzhang.baidu.com/xzhstatistics/rp?pid=66&sub_pid=1&log_type=1&', m = '11.3.0', y = null;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
        'use strict';
        t.exports = e(26).polyfill();
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
        'use strict';
        var r = e(10), i = e(11), o = e(4), u = function (t) {
                if (t && t.__esModule)
                    return t;
                var n = {};
                if (null != t)
                    for (var e in t)
                        Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                return n.default = t, n;
            }(o);
        e(20);
        var s = window['cambrianb8f4b2d3'] || {};
        if (s.data && !(s.code - 0)) {
            var c = s.data, a = c.office_info, l = c.signature, f = (c.abilities, (0, i.isBaiduDomain)());
            if (!a.appid && !f)
                throw '错误\uFF1A缺少熊掌号id';
            var p = a.appid + '_' + l;
            u.set('defaultInsId', p), u.set(p, {
                data: s.data,
                status: 'init',
                callback: []
            }), s.status = 'init', s.logData.ms = new Date().getTime(), (0, i.sendLog)({
                s_type: 'pfm',
                mlt: s.logData.mlt,
                dt: s.logData.ms - s.logData.cs
            }), function (t) {
                var n = {};
                n.invokeIM = function () {
                    return e.e(0).then(e.bind(null, 6));
                }, n.share = function () {
                    return e.e(0).then(e.bind(null, 6));
                }, n.authorize = function () {
                    return e.e(0).then(e.bind(null, 33));
                }, n.bar = function () {
                    return e.e(0).then(e.bind(null, 22));
                }, n.render = function () {
                    return e.e(0).then(e.bind(null, 37));
                }, n.init = function () {
                    return e.e(0).then(e.bind(null, 8));
                }, n.destory = function () {
                    return e.e(0).then(e.bind(null, 8));
                }, n.subscribe = function () {
                    return e.e(0).then(e.bind(null, 40));
                }, n.follow = function () {
                    return e.e(0).then(e.bind(null, 5));
                }, n.wysFollow = function () {
                    return e.e(0).then(e.bind(null, 5));
                }, n.getInfo = function () {
                    return e.e(0).then(e.bind(null, 7));
                }, n.query = function () {
                    return e.e(0).then(e.bind(null, 7));
                }, n.isIos = function () {
                    return e.e(0).then(e.bind(null, 0));
                }, n.isAndroid = function () {
                    return e.e(0).then(e.bind(null, 0));
                }, n.boxVersionCompare = function () {
                    return e.e(0).then(e.bind(null, 0));
                }, n.isBox = function () {
                    return e.e(0).then(e.bind(null, 0));
                }, n.boxVersion = function () {
                    return e.e(0).then(e.bind(null, 0));
                }, n.isSubscribe = function () {
                    return e.e(0).then(e.bind(null, 31));
                }, n.payment = function () {
                    return e.e(0).then(e.bind(null, 36));
                }, n.subscribeBar = function () {
                    return e.e(0).then(e.bind(null, 41));
                }, n.comment = function () {
                    return e.e(0).then(e.bind(null, 34));
                }, n.login = function () {
                    return e.e(0).then(e.bind(null, 23));
                }, n.isLogin = function () {
                    return e.e(0).then(e.bind(null, 21));
                }, n.tel = function () {
                    return e.e(0).then(e.bind(null, 9));
                }, n.sms = function () {
                    return e.e(0).then(e.bind(null, 9));
                }, n.silentSubscribe = function () {
                    return e.e(0).then(e.bind(null, 39));
                }, n.invokeBcpIM = function () {
                    return e.e(0).then(e.bind(null, 35));
                }, Object.keys(n).forEach();
            }();
        }
    },
    ,
    ,
    ,
    ,
    ,
    ,
]);