var a = 1 - 3;
var b = 1e7 + 3;
var c = 'a' + 1;
var def;
var req;
def = window.define || window.eslxDefine;
req = window.require || window.eslxRequire;
a = b;
con.log(a + b, c);
def('test', ["require","exports","module"], function (require, exports, module) {
    console.log(hello);
});
def('hello', ["require","exports","module"], function (require, exports, module) {
    console.log(hello);
});
req('hello');