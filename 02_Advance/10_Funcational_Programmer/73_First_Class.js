/*

First Class function 4 (6) rules

01) We can stored funtion in variable
02) We can store function in array
03) We can store function in object
04) We can create function as we need

*/

//Store function in a value

//1st method
var add = function /*Set function in a value*/(a, b) { // It can also define like -> var add = function summation (a,b)
    return a + b;
}
console.log(add(4, 5))

//2nd method
var sub = function substraction /*Set function in a value*/(c, d) { // It can also define like -> var sub = function (c,d)
    return substraction = c - d;
}
console.log(sub(10, 6))

//3rd method
function multiplication(e, f) { /* -> function  multiplication (e,f){
                                            ...
                                        }
                                        var mul = multiplication;                                     

    */
    multiplication = e * f;
    return multiplication;
}
var mul = multiplication; //Set function in a value
console.log(mul(10, 6))

console.log("---------------")

var newF1=function(r){
    return (Math.PI*Math.sqrt(r)).toFixed(3)
}
console.log(newF1(4))
function newF2(r){
    return (Math.PI*Math.sqrt(r)).toFixed(3)
}
console.log(newF2(3))
var newF3=function area(r){
    return (Math.PI*Math.sqrt(r)).toFixed(3)
}
console.log(newF3(3))

console.log("-------------------")





//New
//1st method
function method1(a, b) {
    return a + b;
}
console.log(method1(3, 4))
//2nd Method
var method2 = function (a, b) {
    return a - b;
}
console.log(method2(4, 6))
//3rd Method
var method3 = function action(a, b) {
    return a * b;
}
console.log(method3(8, 2))
//console.log(action(8,2))
//4th Method
function method4(a, b) {
    return a / b;
}
var rest = method4;
console.log(rest)
console.log(rest(8, 2))



//Store function in array
var arr = [];
function reminder(a, b) {
    reminder = a % b;
    return reminder;
}
arr.push(reminder) //Push function as value
console.log(arr) //Checking arr that it store a data which is function with name (reminder)
console.log(arr[0]) // Get the first element of arr
console.log(arr[0](28, 3)) //Decalre function

var arr2 = [];
function division2(a, b) {
    return a / b;
}
arr2.push(division2)
console.log(arr2)
console.log(arr2[0])
console.log(arr2[0](40, 2))

console.log()
//New
var newArr=[]
console.log(newArr)
function area(r){
    return (Math.PI*Math.sqrt(2)).toFixed(3)
}
newArr.push(area(3))
console.log(newArr)
console.log()

//Store function in object
console.log()
function division(a, b) {
    return division = a / b;
}
var obj = {
    div: division
}
console.log(obj) //Checking that object (obj) contain a property called div and the value of this property is a function called division
console.log(obj.div) //Get the property div with . notation
console.log(obj["div"]) //Get the property div with braket notation
console.log(obj.div(50, 4)) //Decalre function with . notation
console.log(obj["div"](100, 4)) //Decalre function with braket notation

console.log()
function area(r){
    return (Math.PI*Math.sqrt(2)).toFixed(3)
}
var newObj={
    f:area
}
console.log(newObj.f(3))
console.log()

//New
console.log()
function multiplication2(a, b) {
    return a * b;
}
var objNew = {
    o: multiplication2
}
console.log(objNew)
console.log(objNew.o)
console.log(objNew["o"])
console.log(objNew.o(30,5))
console.log(objNew["o"](30,5))


//We can create function as we need
setTimeout(function () {
    console.log("I am doing practice...");
}, 2000);

//New
setTimeout(function(){
    console.log("I am doing repractice....")
},4000)

setTimeout(function(){
    console.log("I am doing rerepractice")
},5000)