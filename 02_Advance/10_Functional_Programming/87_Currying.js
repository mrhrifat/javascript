//Normal 
function curryingGn(a, b, c, d) {
    return a + b + c + d;
}
console.log(curryingGn(3, 4, 5, 6)) //This is not applicable in Currying 

//New Normal
function curryingNormal(x, y, z) {
    return x + y + z;
}
console.log(curryingNormal(4, 5, 6)) //This is not appliable in currying

//Currying
function currying(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d
            }
        }
    }
}
console.log(currying(3)(4)(5)(6)) //The correct way to pass argument in currying


//New Currying Argument Passing
function curryingNew(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(curryingNew(3)(4)(5))


function customCurrying(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a * b * c * d;
            }
        }
    }
}
console.log(customCurrying(1)(2)(3)(4))