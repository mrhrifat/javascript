var a = 10;
function A() {
    var b = 36;
    console.log(b)

    function B() {
        var c = 20
        console.log(c)
    }

    function C() {
        var d = 91
        console.log(d)
    }
    B()
    C()
    D()
}
function D(n) {
    console.log(n + a)
}
A()
