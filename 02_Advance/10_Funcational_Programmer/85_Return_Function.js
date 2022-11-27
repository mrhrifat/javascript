function base(b) {
    return function (n) {
        var result = 1;
        for (var i = 0; i < b; i++) {
            result *= n;
        }
        return result;
    }
}
var base10 = base(10);
console.log(base10(2))
console.log(base(10))

var base2 = base(2)
var base3 = base(3)
var base5 = base(5)
console.log(base2(5))
console.log(base3(5))
console.log(base5(5))


function pow(p) {
    return function (n) {
        var result = 1;
        for (var i = 0; i < p; i++) {
            result *= n;
        }
        return result
    }
}
var pow2 = pow(2)
var pow3 = pow(3)
var pow4 = pow(4)
console.log()
console.log(pow2(5))
console.log(pow3(5))
console.log(pow4(5))

console.log("---------------")
function newPow(p) {
    return function (n) {
        var result = 1
        for (var i = 0; i < p; i++) {
            result *= n
        }
        return result
    }
}
var pow5 = newPow(2)
console.log(pow5(4))
console.log("---------------")