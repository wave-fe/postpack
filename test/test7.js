function aa(arr) {
    return function (idx) {
        arr[idx]();
    };
}
aa([
    function () {
        b = 1;
    },
    function () {
        c = 2;
    },
    function () {
        d = 3;
    },
    function () {
        e = 4;
    }
])(2);
aa([
    function () {
        d = 3;
    },
    function () {
        e = 4;
    }
])(0);
