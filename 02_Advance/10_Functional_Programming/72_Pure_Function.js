/*

Pure Functional follow 2 rules

01) It will returns same result if given same arguments in parameter although infinity times.
02) It doesn't cause any observeable side effect in whole coding.

* Without arguments in function has found but if it follow the above 2 rules than that also a pure function.

*/

//Circle
function circle(r) {
    return (Math.PI * Math.sqrt(r)).toFixed(2)
}
console.log(circle(5))

// Function Expression of Square
var square = function (a) {
    return Math.pow(a, 2)
}
console.log(square(3))



// // Pure Function
// function sqrt(a) {
//     return a * a;
// }
// console.log(sqrt(3));
// console.log(sqrt(3));
// console.log(sqrt(3));
// console.log(sqrt(3));

// //New
// function rect(w, h) {
//     return w * h;
// }
// console.log(rect(4, 5))
// console.log(rect(4, 6))
// console.log(rect(2, 6))

// // Pure Function without arguments
// function bornName() {
//     return "Ibn Taimiya";
// }
// console.log(bornName) //Function not declared
// console.log(bornName()) //Function declared
// console.log(bornName()) //Function declared
// console.log(bornName()) //Function declared
// console.log(bornName()) //Function declared

// function imamName() {
//     return "Ibn Kayyim"
// }
// console.log(imamName)
// console.log(imamName())
// console.log(imamName())


// // Not a pure function
// var number = 10;
// console.log(number) //Before make function
// function tester() {
//     return number = 200;
// }
// console.log(number) //After make function
// console.log(tester()) //Calling function
// console.log(number) //It change global value of number after function declaretion


// //New not a pure function
// var x = 10;
// function perform() {
//     return x = 600;
// }
// console.log(x)
// console.log(perform())
// console.log(x)

// // Not a pure function
// var point = {
//     x: 40,
//     y: 60
// }
// console.log(point) //Before make function

// function change(point) {
//     point.x = 20;
//     point.y = 80;
//     return point;

// }
// console.log(point)//After make function
// console.log(change(point)) //Calling function
// console.log(point) //It change global object property value after declaretion function