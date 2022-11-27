//One time Function
function sample(a, b) {
    var c = a + b; //7
    var d = a - b; //-1
    var result = sum(c, d);
    return result;
}
function sum(c, d) {
    return c + d;
}
var res = sample(3, 4);
console.log(res);


// Callback function
function dynamic(e, f, func) {
    var sum = e + f; //25
    var sub = e - f; // -5

    var result = func(sum, sub) // 
    return result;
}

function summation(sum, sub) { //25 , -5
    return sum + sub; //25 + (-5) > 25 -5 > 20
}
var res2 = dynamic(10, 15, summation);
console.log(res2)


var res3 = dynamic(10, 15, function (sum, sub) { //25, -5
    return sum - sub; //25 -(-5) > 25 + 5 > 30
});
console.log(res3)



function multiplication(sum, sub) { //25 , -5
    return sum * sub; //25 * (-5) > -125
}
var res4 = dynamic(10, 15, multiplication);
console.log(res4)

var res5 = dynamic(10, 15, function (sum, sub) { //25,-5
    return sum / sub; //25 /(-5) >-5
})
console.log(res5)



// New


function get(r1) {
    return r1 / 100;
}
function r1(m, g) {
    return m * g;
}
console.log(get(r1(3.68, 5)))


function cgpa(r1, r2, r3, r4, r5) {
    var s1 = r1 / 100;
    var s2 = r2 / 100;
    var s3 = r3 / 100;
    var s4 = r4 / 100;
    var s5 = r5 / 100;
    var result = s1 + s2 + s3 + s4 + s5
    return result.toFixed(2);
}
function f(point, per) {
    return point * per;
}
var print = cgpa(f(3.68, 5), f(3.33, 10), f(3.33, 25), f(3.45, 15), f(3.58, 10))
console.log(print)

console.log()

function cgpa2(fun) {
    var sum = 0;
    for (var i = 0; i < fun.length; i++) {
        console.log(fun[i])
    }
}
function fun(p, g) {
    return p * g;
}
var n = cgpa2(fun(3.68, 5), fun(3.33, 10), fun(3.33, 25), fun(3.45, 15), fun(3.58, 10))
console.log(n)


//ES6
const cgpa3 = (...rs) => (rs.reduce((a, b) => a + b) / 100).toFixed(2);
function f(point, per) {
    return point * per;
}
var print = cgpa3(f(3.68, 5), f(3.33, 10), f(3.33, 25), f(3.45, 15), f(3.58, 10))
console.log(print)


console.log()

function perimeter(r) {
    return (2 * Math.PI * r).toFixed(3)
}
function area(r) {
    return (Math.PI * Math.pow(r, 2)).toFixed(3)
}
function performCallBack(r, cbf1, cbf2) {
    var circleArea = cbf1(r)
    var circlePerimeter = cbf2(r)
    return function () {
        return "Value of r: " + r + "\nArea: " + circleArea + "\nPerimeter: " + circlePerimeter
    }
}
var r1 = performCallBack(3, area, perimeter)
console.log(r1())

console.log()


//Unsolved
function order(name, price) {
    var temp = [];
    for (var i = 0; i < name.length; i++) {
        for (var j = 0; j < name[i].length; j++) {
            temp.push(name[i])
        }
    }
    return temp;
}
console.log(order("cintaporad", 45))

// function fake(n, p, cbf) {

// }