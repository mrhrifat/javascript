/*

Higer Order function follow 2(6) rules
01) We can pass function as arguments
02) Can return function from another function

*/

function summation(a, b) {
    return a + b;
}

function multiplication(a, b, functionOfSum) { //Don't take summation because it will be more functional cause user can take any function
    var add = a + b;
    var sub = a - b;

    function multiply() {
        var result = functionOfSum(a, b);
        return add * sub * result;
    }
    return multiply;
}
var res = multiplication(7, 2, summation);
console.log(res())

//New 2
function perimeter(r) {
    return (2 * Math.PI * r).toFixed(3)
}
function area(r) {
    return (Math.PI * Math.pow(r, 2)).toFixed(3)
}
function print(r, areaFunction, perimeterFunction) {
    var circleArea = areaFunction(r)
    var circlePerimeter = perimeterFunction(r)
    return "Value of r: " + r + "\nArea: " + circleArea + "\nPerimeter: " + circlePerimeter
}
var r1 = print(3, area, perimeter)
console.log(r1)

//New 
function multiplication2(c, d) {
    return c * d;
}
function division1(c, d, mulAction) {
    var main1 = c + d;
    var main2 = c - d;
    function temporary() {
        var result = mulAction(c, d)
        return result / (main1 + main2)
    }
    return temporary();
}
var res11 = division1(10, 4, multiplication2)
console.log(res11)

console.log()

//Substaction
function sub(i, j) {
    return i - j; //-1
}
function performAction(e, f, func) {
    var add = e + f; //11
    var subs = e - f; //-1

    function manipulate() {
        var result = func(e, f); //-1
        return result - (add + subs) //-1 - (11+ (-1)) > -1 - 10 > -11
    }
    return manipulate(); // () that makes function call already in variable
}
var res2 = performAction(5, 6, sub);
console.log(res2) //Don't need () because we call it into perform action 
console.log(res2)




//Multiplication
function mul(k, l) {
    return k * l; //20
}
function performMultiplication(k, l, fun) {
    var add2 = k + l; //9
    var sub2 = k - l; //-1

    return function () {
        var mulResult = fun(k, l); //20
        return mulResult * (add2 + sub2); //20 * (9+(-1)) > 20 *9-1 > 20 *8 > 160
    }

}
var r = performMultiplication(4, 5, mul);
console.log(r) //We can see anonymous function cause we don't decalre any function and return function in a return statement
console.log(r())

console.log("HHH")

//New
function performMul(e, f, func) {
    var add1 = e + f;
    var add2 = e - f;
    return function () {
        var result = func(e, f);
        return result * add1 * add2;
    }
}
var res5 = performMul(3, 5, mul)
console.log(res5())
console.log()

//Division by call performMultipliation
var div = performMultiplication(4, 5, function (k, l) { //We can create as we need and it is calling function in arguments section
    return k / l; // 0.8
});
console.log(div) //We can see anonymous function cause we don't decalre any function and return function in a return statement //0.8 * (9+(-1)) > 0.8 * 8 > 6.4
console.log(div());

var division3 = performMul(6, 7, function (p, e) {
    return p + e;
})
console.log()
console.log(division3())

//New

function perimeter(r) {
    return (2 * Math.PI * r).toFixed(3)
}
function area(r) {
    return (Math.PI * Math.pow(r, 2)).toFixed(3)
}
function print(r, areaFunction, perimeterFunction) {
    var circleArea = areaFunction(r)
    var circlePerimeter = perimeterFunction(r)
    return function(){
        return "Value of r: " + r + "\nArea: " + circleArea + "\nPerimeter: " + circlePerimeter
    }
}
var r1 = print(3, area, perimeter)
console.log(r1())       