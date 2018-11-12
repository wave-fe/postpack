function aa(arr) {
    var a = arr[1];
    a();
}
aa([
    function () {
        b = 1;
    },
    function () {
        c = 2;
    }
]);
aa([
    function () {
        d = 3;
    },
    function () {
        e = 4;
    }
]);
