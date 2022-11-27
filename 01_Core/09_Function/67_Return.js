/*

Return statement return value from a function. If there is no return statement in function than It should do console.log on the body of function.
But If return statement is declared than you can get value without console.log but outside the function it should be on console. Otherwise where the result will be showen.

*/

//You can't get a value to variable from function
function problemShow() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}
var a = problemShow(4, 5, 6, 7, 8);
console.log(a);

console.log();

//But with return method it is possible

function problemSolve() {
    var mul = 1;
    for (var i = 0; i <= arguments.length - 1; i++) {
        mul *= arguments[i];
    }
    return mul;
}
var result = problemSolve(5, 6, 3, 2)
var result2 = problemSolve(5, 6)
console.log(result)
console.log(result2)

//Name & Email
function performAction(n, e) {
    return {
        name: n,
        email: e
    }
}
console.log(performAction("Taimiya", "ibntaimiya@slaf"));

function performAction(n, e) {
    return {
        n: n,
        e: e
    }
}
console.log(performAction("Taimiya", "ibntaimiya@slaf"));

function performAction(nm, em) {
    return {
        n: nm,
        e: em
    }
}
console.log(performAction("Taimiya", "ibntaimiya@slaf"));

//New
function performAction2(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var resS = performAction2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(resS)

function nameAction(n, e) {
    return {
        name: n,
        email: e
    }
}
var resN = nameAction("Jumua", "fd34@gmail.com")
console.log(resN)

function nameAct(n, d, l) {
    return {
        name: n,
        designantion: d,
        location: l
    }
}
var ex1 = nameAct("Appy", "Drinks", "India")
console.log(ex1)