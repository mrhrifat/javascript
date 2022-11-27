/*
Inheritence - When in OOP Constructor Class have many method/function and some of them property are common, Than by making an another Class with the common property and Inherit them as need in different class That is called Inheritence

01) Child Class always inherit from Super Class or Parent Class
02) In JavaScript only Object has no Prototype/Parent Class


*/

//Prototype & Prototypical Inheritence
var str1 = new String()
var str2 = new String('Rifat')
console.log(str1.__proto__)
// console.log(str1.prototype)
console.log(str2.__proto__)
console.log(str2.prototype)
console.log(str1)
console.log(str2)

console.log()

var arr1 = new Array()
var arr2 = []
console.log(arr1)
console.log(arr2)

console.log()

var obj1 = {}
var obj2 = new Object()
console.log(obj1)
console.log(obj2)

var testObj1 = obj1.__proto__ === obj2.__proto__
var testObj2 = Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2)
console.log(testObj1)
console.log(testObj2)


//Multilevel Inheritence
var str = new String('Ibn')
console.log(str)

function Person(name) {
    this.n = name
}
var p1 = new Person("Ibn Taimiya")
console.log(p1)

function Student(name) {
    this.n = name;
}
var s1 = new Student("Ibn")
console.log(s1)

console.log()

//Property Descriptor
var Fruit = {
    name: "Mango"
}
console.log(Fruit.toString())
console.log(Fruit.name)

console.log(Fruit)

for (var i in Fruit) {
    console.log(i)
}

console.log(Object.keys(Fruit))

//Descriptor
var descriptor = Object.getOwnPropertyDescriptor(Fruit, 'name')
console.log(descriptor)


console.log()

//Default Descriptor
var Laptop = {
    name: "HP"
}
console.log(Laptop)
console.log(Laptop.name)
//Interate Object
for (i in Laptop) {
    console.log(i)
}
console.log(Object.keys(Laptop))

//Get Descriptor
var l1 = Object.getOwnPropertyDescriptor(Laptop, 'name')
console.log(l1)
console.log(Object.getOwnPropertyDescriptor(Laptop, 'name'))

//Change Descript Value
Object.defineProperty(Laptop, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Laptop)
console.log(Laptop.name)
//Now this is not findable, accessable and editable
for (var i in Laptop) {
    console.log(Laptop)
}//Can't Find
console.log(Object.keys(Laptop))
var l2 = Object.getOwnPropertyDescriptor(Laptop, 'name')
console.log(l2)
Laptop.name = "Apple"
console.log(Laptop.name) //Can't editable
delete Laptop.name //Can't Access
console.log(Laptop.name)

console.log()
//If the value is set in descriptor than it will not show the declared value
var Paper = {
    name: "Bashundhara"
}
console.log(Paper.name)
Object.defineProperty(Paper, 'name', {
    value: 'Matador',
    enumerable: false,
    configurable: false,
    writable: false
})
console.log(Paper.name)
Paper.name = 'Good Luck'
console.log(Paper.name)

console.log()

//Constructor Prototype
function Pro(n) {
    this.name = n
}
var p1 = new Pro('Geek')

console.log(Pro)
console.log(Pro.prototype)
console.log(Object.getPrototypeOf(p1))
console.log(Pro.prototype === Object.getPrototypeOf(p1))

console.log()

//Set Prototype
console.log(Pro.prototype)
Pro.prototype.PI = 3.1416
console.log(Pro.prototype)
var p2 = new Pro('J')
var p3 = new Pro('K')
console.log(Object.getPrototypeOf(p2))
console.log(Object.getPrototypeOf(p3))
Pro.prototype.HTML = 3;
console.log(Pro.prototype)
// console.log(Object.getPrototypeOf(p4))

console.log()
var arr1 = new Array()
var arr2 = []
console.log(arr1)
console.log(arr2)
console.log(Object.getPrototypeOf(arr1))
console.log(Object.getPrototypeOf(arr2))


//Instance vs Prototype Members

function Square1(b) {
    this.base = b

    this.print = function () {
        console.log(Math.pow(b, 2))
    }
}
var s1 = new Square1(3)
var s2 = new Square1(4)

s1.print()
s2.print()

console.log()
//Above Constructor can be more dynamic and shorter by Prototype concept

function Square(b) {
    this.base = b//Instance Member
}
//1st Method
Square.prototype = {
    print: function (base2) {//Prototype Members
        console.log(Math.pow(base2, 2))
    }
}
//2nd Method
Square.prototype.draw = function () {//Prototype Members
    console.log("This is a Square")
}
var s3 = new Square(2) //It will go on base1
var s4 = new Square(2) //It will go on base1
//3rd Method
Square.prototype = {
    //Override Inbuilt toString method with our own way
    toString: function () {
        console.log("First base: " + this.base)
    },
    ok: function () {
        console.log("Second " + this.base2 + "\nThird " + this.draw)
    }
}
console.log("--------")



s3.print(4) //It will go on base2
s4.print(5) //It will go on base2
console.log()

s3.draw()
s4.draw()
console.log()

var s5 = new Square(8)
var s6 = new Square(9)


s3.print(20)
s4.print(10)
console.log("----")

s5.toString()
s6.toString()

console.log()

s5.ok()
s6.ok()



console.log()

console.log("=====")

console.log(Square.prototype)
console.log(Square.prototype)
console.log(Square.prototype)
console.log(Square.prototype)
console.log(Square.prototype)
console.log(Square.prototype)

console.log()

console.log("=====")


console.log(Object.getPrototypeOf(s1))
console.log(Object.getPrototypeOf(s2))
console.log(Object.getPrototypeOf(s3))
console.log(Object.getPrototypeOf(s4))
console.log(Object.getPrototypeOf(s5))
console.log(Object.getPrototypeOf(s6))

console.log()

console.log("=====")

console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(s5)
console.log(s6)



console.log()
console.log("--------------")

//Using Instance & Prototype Members
function Square3(b) {
    this.base = b//Instance Member
    this.getProto = function () {
        console.log()
        console.log("This is in Instance")
        console.log("First base: " + this.base)
        // this.print()
        this.draw()
    }
}
Square3.prototype = {
    print: function (base2) {//Prototype Members
        console.log(Math.pow(base2, 2))
    },
    draw: function () {
        console.log()
        console.log("This is a in Prototype")
        console.log("First base: " + this.base)
        // console.log("Second base: " + this.base2)
        // this.getProto()
    }
}

var r1 = new Square3(4) //It will go on base1 
var r2 = new Square3(6) //It will go on base1

r1.print(5) //It will go on base2
r2.print(10) //It will go on base2

r1.getProto()
// r1.draw()
// r2.getProto()

// console.log()

// r1.draw()
// r2.draw()

// console.log()

// r1.getProto()
// r2.getProto()

//Clean Using Instance and Prototype Members

console.log()
console.log("--------------")

//Using Instance & Prototype Members

function Square4(b) {
    this.base = b//Instance Member
    this.getProto = function () {
        console.log()
        console.log("This is in Instance")
        console.log("First base: " + this.base)
        //this.draw()
    }
}
Square4.prototype = {
    print: function (base2) {//Prototype Members
        console.log(Math.pow(base2, 2))
    },
    draw: function () {
        console.log()
        console.log("This is a in Prototype")
        console.log("First base: " + this.base)
        this.getProto()
    }
}

var re1 = new Square4(4) //It will go on base1 

re1.print(5) //It will go on base2

re1.getProto()
console.log("******")
re1.draw()




//Iterate Object and hasOwnProperty

function Square5(b) {
    this.base = b//Instance Member
    this.getProto = function () {
        console.log()
        console.log("This is in Instance")
        console.log("First base: " + this.base)
        //this.draw()
    }
}
Square5.prototype = {
    print: function (base2) {//Prototype Members
        console.log(Math.pow(base2, 2))
    },
    draw: function () {
        console.log()
        console.log("This is a in Prototype")
        console.log("First base: " + this.base)
        this.getProto()
    }
}

var re1 = new Square5(4) //It will go on base1 

re1.print(5) //It will go on base2

re1.getProto()
console.log("******")
re1.draw()
console.log()

console.log(re1.hasOwnProperty('base'))
console.log(re1.hasOwnProperty('getProto'))
console.log(re1.hasOwnProperty('print'))
console.log(re1.hasOwnProperty('draw'))

console.log()

console.log(Object.keys(re1))

console.log()

for (var i in re1) {
    console.log(i)
}