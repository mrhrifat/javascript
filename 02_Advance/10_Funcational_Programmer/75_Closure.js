/*

01) In any scope any data come from any outer scope or other scope without any arguments that is called closure.
02) Data come without passing any arguments or parameter

*/

var b = 10;
function ibn() {
    var x = 5;
    return function () {
        console.log(x)
    }
}
var abc = ibn();
console.dir(abc);
console.log(abc)
// console.log(ibn())
// console.log(ibn().taimiya)
// console.dir(abc)

//New
var x = 30;
function e() {
    console.log(x)
    var d = 40;
    return function () {
        console.log(d)
    }
}
e()
