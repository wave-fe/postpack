function aaa(arr) {
    var a = arr[0];
    var b = arr[1];
    a();
    b();
}
aaa([
    function () {
        console.log(1);
    },
    function () {
        console.log(2);
    },
    function () {
        console.log(3);
    }
]);
