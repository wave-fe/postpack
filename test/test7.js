function aa(arr, idx) {
    var a = arr[idx];
    a();
}
aa([
    function () {
        b = 1;
    },
    function () {
        c = 2;
    }
], 0);
aa([
    function () {
        d = 3;
    },
    function () {
        e = 4;
    }
], 1);
