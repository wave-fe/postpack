console.log(hello);
define('hello/world', function() {});
eslxDefine('hello/world', function () {});
require(['hello/world'], function (world) {
    var a = 1 + 2;
});
let world = require('hello/world');
