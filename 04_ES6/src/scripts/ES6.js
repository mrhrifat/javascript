
/*==============Main===================*/
// 138 - What is ES6
/*

01) ES6 is a modern JavaScript Version.
02) ES6 stand for EcmaScript 6
03) It developed in 2015
04) It includes some new built in features to make JavaScript more advance
05) String Literals, Let, Const,  Arrow Function are some of freatues of ES6

*/

// 139 - Envireoment Setup
/*

01) ES6 is fully support on nodejs but in world there are many Computer, who don't have latest version of nodejs, browser, website so for that, we have to convert ES6 code to ES5 or previous version JavaScript code.
02) For convert our code we need some packeage.
03) Babel Webpack is a solution for this concept.
04) So do code in ES6 with Babel WebPack.

How to get it
01) You can make custom webpack, For this learn how to make it.
02) Download it from https://github.com/mrhrifat/webpack
03) You can clone or download it.

How to Install

01) Make a folder and move into it.
02) Open linux terminal
03) Go to the project directory with (cd) command
04) npm init
05) npm install
06) npm audit fix
07) npm start

*/

// 140 - Template String

var name = "Imam Ibnul Jawji (RA)"
var born = "510H"
var death = "597H"
console.log("The One of Imam of Ummah named " + name + " is born in " + born + ". He was death in " + death)

console.log(`The One of Imam of Ummah named ${name} is born in ${born}. He was death in ${death}`)

console.log(`The One of Imam of Ummah named ${name == "Imam Ibnul Jawji (RA)" ? name : "Not right"}  is born in ${born}. He was death in ${death}`)

console.log(`The One of Imam of Ummah named ${name == "Imam Ibnul Jawji" ? name : "Imam Ibn Taimiya"}  is born in ${born == "510" ? born : "661H"}. He was death in ${death == "597" ? death : "728H"}`)

console.log(`
    * ${name.padStart(30, "*")}
    * ${name.padEnd(30, "*")}
    * ${name.repeat(10)}
    `)

// 141 - Var vs Let vs Const

var a = 10
let b = 20
const c = 30 //Const have to define with Capital letters. Like C

console.log(a, b, c)

a = 100
b = 90
// c = 80

console.log(a)
console.log(b)
console.log(c) //You can't reassign const variable

var f1 = () => {
    var a = 50
    console.log(a)
}
f1()
console.log(a)


var d = 40

var f2 = (d) => {
    // var d = 88
    console.log(d)
}
f2()
// console.log(d)
// f2(66)

/*
01) Gernally a variable is not accessable from a function or any other block to global section
02) But
    01) var can do it
    02) let can't do
*/

if (true) {
    var f = 10
}
console.log(f)

for (var i = 10; i > 5; i--) {

}
console.log(i)

//With let we can fix it

if (true) {
    let l = 10
}
// console.log(l)

for (let j = 10; i > 5; i--) {

}
// console.log(j)

// 142 - Arrow Function

let add1 = (x, y) => {
    return x + y
}
let add2 = (x, y) => x + y
let pow1 = (s) => Math.pow(s, 2)
let pow2 = s => (Math.pow(s, 2)).toFixed(2)

console.log(add1(3, 4))
console.log(add2(5, 4))
console.log(pow1(4))
console.log(pow2(8))

// 143 - Arrow Function & This
var f1 = function () {
    console.log(this)
}
f1()
/*
01) It will show (undefined) cause of Strict Mode. But in normal it will print.
02) Solution is bind, call with Empty Object
*/
var f2 = function () {
    console.log(this)
}
f2.call({})

console.log("------")

var obj1 = {
    name: "Ibn Taimiya",
    print: function () {
        console.log(this)
    }
}
obj1.print()

/*
01) In Object with the general function (this) will refer this obj1 object. But Object with arrow function obj2 will refer window object. 
02) That's why general function in object will print this object and arrow funtion in object print undefined.
03) Arrow function doesn't have any power to set/assign (this)
04) Arrow function doesn;t support call(),bind(),apply() 
    01) We can fix this with 3 way
*/

//Problem
var obj2 = {
    name: "Ibn Kaiyyim",
    print: () => {
        console.log(this)
    }
}
obj2.print()

//Solution 1
var obj3 = {
    name: "Imam Ahmad",
    print: function () {
        setTimeout(function () {
            console.log(this.name)
        }.bind(this), 1000)
    }
}
obj3.print()

// Solution 2
var obj4 = {
    name: "Imam Ahmad Ibn",
    print: function () {
        var self = this;
        setTimeout(function () {
            console.log(self.name)
        }, 1000)
    }
}
obj4.print()

//Solution 3
var obj5 = {
    name: "Imam Ahmad Ibn Hamble (RA)",
    print: function () {
        console.log(this)
        setTimeout(() => {
            console.log(this.name)
        }, 1000)
    }
}
obj5.print()


// 144 - Default Parameters
let defaultFunction = (name, greet) => {
    // console.log(name.slice(0, 2))
    var firstName = () => {
        if (name.slice(0, 2) == "Mr") {
            return "Brother"
        } else {
            return "Sister"
        }
    }
    // console.log(firstName())
    print = () => {
        console.log(`${greet}... ${firstName()} ${name}. How are you?`)
    }
}
defaultFunction("Mr Ibn Taimiya", "Assalamu Alaikum")
print()
defaultFunction("Ms Ayesha", "Assalamu Alaikum")
print()

let defaultFunction2 = (name = "Mr/Ms", greet = "Greet is missing") => {
    // console.log(name.slice(0, 2))
    var firstName = () => {
        if (name != null) {
            if (name.slice(0, 2) == "Mr") {
                return "Brother"
            } else {
                return "Sister"
            }
        } else {
            name = "Mr/Ms"
        }
    }
    // console.log(firstName())
    print = () => {
        console.log(`${greet}... ${firstName()} ${name}. How are you?`)
    }
}
defaultFunction2("Mr Ibn Taimiya", "Assalamu Alaikum")
print()
defaultFunction2("Ms Ayesha", "Assalamu Alaikum")
print()
defaultFunction2(null, 'Assalamu Alaikum')
print()


let defaultFunction3 = (name = "Mr/Ms", greet = "Greet is missing") => {
    // console.log(name.slice(0, 2))
    // var firstName = () => {
    //     if (name != null) {
    //         if (name.slice(0, 2) == "Mr") {
    //             return "Brother"
    //         } else {
    //             return "Sister"
    //         }
    //     } else {
    //         name = "Mr/Ms"
    //     }
    // }
    // console.log(firstName())
    print = () => {
        console.log(`${greet}...  ${name}. How are you?`)
    }
}
defaultFunction3("Mr Ibn Taimiya", "Assalamu Alaikum")
print()
defaultFunction3("Ms Ayesha", "Assalamu Alaikum")
print()
defaultFunction3(null, 'Assalamu Alaikum')
print()
defaultFunction3("Abdul Fattah")
print()
defaultFunction3()
print()

// 145 - Custom Iterable Object


// 146 - Rest & Spread Operator

let sum1 = function (...rest) {
    return rest.reduce(function (a, b) {
        return a + b
    })
}

let sum2 = (...rest) => {
    return rest.reduce((a, b) => a + b)
}

var arr = [12, 14, 16]
console.log(arr)
console.log(...arr)

var obj = {
    a: 10,
    b: 20,
    c: 30
}
console.log(obj)

// ... operator works as Object.crate() method
var obj2 = {
    ...obj
}
console.log(obj2)

var obj3 = obj
console.log(`1st Obj & Obj2 ${obj2 == obj}`)
console.log(`2nd Obj & Obj3 ${obj3 == obj}`)

var r1 = sum1([1, 2, 3, 4, 5])
var r2 = sum1(1, 2, 3, 4, 5)
var r3 = sum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
var r4 = sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(`
${r1}
${r2}
${r3}
${r4}
`)
console.log(r1, r3)


var newArr = (...rest) => {
    return rest.reverse()
}

let r5 = newArr(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(r5)


function modifyArray(nums) {
    var something = function (n) {
        if (n % 2 == 0) {
            return n * 2
        } else {
            return n * 3
        }
    }
    var newArray = nums.map(something)
    return newArray
}
console.log(modifyArray([1, 2, 3, 4, 5]))

function modifyArray2(nums) {
    var something = function (n) {
        return n % 2 == 0 ? n * 2 : n * 3
    }
    var newArray = nums.map(something)
    return newArray
}
console.log(modifyArray2([1, 2, 3, 4, 5]))

var modifyArray3 = nums => {
    var something = n => {
        return n % 2 == 0 ? n * 2 : n * 3
    }
    var newArray = nums.map(something)
    return newArray
}
console.log(modifyArray3([1, 2, 3, 4, 5]))

var modifyArray4 = nums => {
    var newArray = nums.map(n => n % 2 == 0 ? n * 2 : n * 3)
    return newArray
}
console.log(modifyArray4([1, 2, 3, 4, 5]))


var modifyArray5 = nums => {
    return nums.map(n => n % 2 == 0 ? n * 2 : n * 3)
}
console.log(modifyArray5([1, 2, 3, 4, 5]))

var modifyArray6 = nums => nums.map(n => n % 2 == 0 ? n * 2 : n * 3)
console.log(modifyArray6([1, 2, 3, 4, 5]))

var modifyArray7 = nums => nums.map(n => n % 2 == 0 ? n * 2 : n * 3)
console.log(modifyArray7([6, 7, 8, 9, 10]))

// 147 - Enhance Object
let x = 10, y = 10
var obj6 = {
    x,
    y,
    print() {
        console.log(x, y)
    }
}
console.log(obj6)

// 148 - Destructing 
var obj7 = {
    firstName: "Ibn Abid",
    lastName: "Duniya",
    born: "208H",
    death: "281H",
    skill: {
        one: "fiqah",
        two: "tafsir",
        three: "hadith",
        four: "quran"
    }
}
console.log(obj7)
// let { firstName, lastName, born } = obj7
// console.log(firstName, lastName, born)
// console.log(firstName, lastName)

// let { firstName, lastName, born } = obj7
// console.log(born)

// let { firstName, skill, skill: { one, two, three, four } } = obj7
// console.log(skill)

let { firstName, skill: { one, two, three, four } } = obj7
console.log(one, two, three, four)

// let arr1 = [1, 2, 3, 4, 5]
// let { first, second } = arr1
// console.log(first, second)

// 149 - Object From Entrires

var obj8 = {
    a: 10,
    b: 20,
    c: 30
}
console.log(obj8)
console.log(Object.entries(obj8))
var arr2 = [
    ['a', 10],
    ['b', 20],
    ['c', 30]
]
console.log(arr2)
console.log(Object.fromEntries(arr2))

// Symbol
// It's a primitive data types

let a1 = Symbol()
let b1 = Symbol('Second')

console.log(a1, b1)
console.log(a1 == b1)

let head = Symbol("Head")
let tail = Symbol("Tail")
console.log(head, tail)
console.log(head == tail)

let toss = {
    head: Symbol("Head"),
    tail: Symbol("Tail")
}
console.log(toss)