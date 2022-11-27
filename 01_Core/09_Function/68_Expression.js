var add = function (a, b) {
    return a + b;
}
console.log(add(4, 5))

//add can be set another var
var result = add;
console.log(result(3, 5))

setTimeout(function () {
    console.log("I will print after 5 second");
},5000);


var variabelFucntion = function(a,b){
    return a+b;
}
var get = variabelFucntion(4,7)
console.log(get)
console.log(get)

//New
var newFunction = function (a, b) {
    return a * b
}
var r1 = newFunction(3, 4)
var r2 = newFunction(3, 5)
console.log(r1, r2)