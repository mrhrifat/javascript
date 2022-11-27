
/*
Execution Context 

01) Context is like an object

02) Context is like an container

03) Every context has 2 phase
    01) Creation context
    02) Execution of that context (01)

04) Every execution context has 2 phase
    01) Creational phase
    02) Executional phase

05) Javascript Execution Context follow STACK rules
    * Last In First Out



*/
function a() {
    b()
    console.log("I am A function")
}
function b() {
    d()
    console.log("I am B function")
}
function c() {
    console.log("I am C function")
}
function d() {
    c()
    console.log("I am D Function")
}
var p = 100;
a()


console.log("I am Global Function")

function x() {
    y()
    console.log("I am X function")
}
function y() {
    m()
    console.log("I am Y function")
}
function z() {
    console.log("I am Z function")
}
function m() {
    z()
    console.log("I am M function")
}
var a = 10;
x()
console.log("I am Global function")

console.log("--------------------")

function new1(){
    new2()
    console.log("New 1")
}
function new2(){
    new3()
    console.log("New 2")
}
function new3(){
    console.log("New 3")
}
new1()
console.log("I am Global")


console.log("--------------------")