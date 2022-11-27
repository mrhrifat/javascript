/*
We can delcare function in 2 ways
    01) Function Declareation
    function name(){
        console.log("Function Declareation")
    }
    * We can call function declaretion any where in code block
    * It doesn't make any problem of hoisting

    02) Function Expresion
    var exp = function(){
        console.log("Function Expression")
    }
    * We have to call function expression after declaretion of function
    * If we call a function expression before declaretion it make problem of hoisting concept
*/

a()

function a() {
    console.log("A")
}

//newA() //That can't call or invoke here because of hoisting perpous

var newA = function () {
    console.log("New A")
}

newA() //Now it will be execute

//New
b()
function b() {
    console.log("I am B function")
}
b()

//Function Expression


//expression() // We can't declare function expression before declaretion

var expression = function () {
    console.log("I am function expression")
}
expression()


c()
function c() {
    console.log("I can be call anywhere. I dont make any problem to hoisting")
}
c()

//Expression

//newC()
var newC = function () {
    console.log("I am able only call after declartion. Otherwise I will make problem to hoisting")
}
newC()