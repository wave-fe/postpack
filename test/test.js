var a = 'hello world';
var b = 1;
var c = 'function sayHello';
if (b) {
    // 注释这句话，最后结果里var a将被删除
    console.log(a);
    // 注释这句话，最后结果里function sayHello将被删除
    // 同时，c的所有引用消失，c也会被删除
    // sayHello();
}
else {
    console.log('nonono');
}

function sayHello() {
    console.log('hello~~~');
    console.log(c);
}
