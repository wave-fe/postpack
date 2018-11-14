function aa(arr) {
    return function (idx) {
        arr[idx]();
    };
}
let req = aa([
    function () {
        b = 1;
    },
    function () {
        c = 2;
        req(0);
    },
    function () {
        d = 3;
        req(1);
    },
    function () {
        e = 4;
        req(2);
    }
]);
req(3);
aa([
    function () {
        d = 3;
    },
    function () {
        e = 4;
    }
])(0);
