/*
Closure - Closure is when a function able to remember and access it's lexical scope even when that function executing outside it's lexical scope
*/


//Problem
function action() {
    var m = "Hi, I am learing Closure and Lexical Scope !"

    function msg() {
        console.log(m) // /function able to remember and access it's lexical scope
    }
    msg()
}
action()


//Solution

function performAction() {
    var msg = "Hi, I am learing Closure and Lexical Scope !"

    return function () {

        console.log(msg) // /function able to remember and access it's lexical scope

    }
}
var msg = performAction()
console.log(msg)
msg() //function executing outside it's lexical scope


function greet() {
    var m = "Assalamu Alaikum... "

    return function () {
        console.log(m + "Mr Geek")
    }
}
var new1 = greet()
console.log(new1)
new1()