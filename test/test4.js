var a = 1 - 3;
var b = 1e7 + 3;
var c = 'a' + 1;
def = eslxDefine;
a = b;
con.log(a + b, c);
def(['hello'], function (hello) {
    console.log(hello);
});
