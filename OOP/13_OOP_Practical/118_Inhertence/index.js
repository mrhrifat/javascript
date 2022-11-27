//130- First Prototypical Inheritence

//Common
function Area(a) {
    this.area = a;
    this.areaPrint = function () {
        console.log("The area is: " + this.area)
    }
}
function Circle(r) {
    this.radius = r
    this.calculate = function () {
        return (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
    }
}
function Square(s) {
    this.side = s
    this.calculate = function () {
        return (Math.sqrt(this.side, 2)).toFixed(2)
    }
}
var a1 = new Area()
var c1 = new Circle(3)
var s1 = new Square(3)
console.log(a1, c1, s1)

//Create Prototype (Area > Circle)
Circle.prototype = Object.create(Area.prototype)
var c2 = new Circle(4)
// console.log(c2)

//Create Prototype (Area > Square)
Square.prototype = Object.create(Area.prototype)
var s2 = new Square(4)
console.log(c2, s2)


//131- Reset Constructor
/*
01) When any Super Class is Inherited to any Child Class, than the Child class lost his own constructor. Reset Constructor can solve it.
02) Also any Prototype Member is linked with Class, 
*/


//Common
function Area(a) {
    this.area = a;
    this.areaPrint = function () {
        console.log("The area is: " + this.area)
    }
}
function Circle(r) {
    this.radius = r
    this.calculate = function () {
        return (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
    }
}

function Square(s) {
    this.side = s
    this.calculate = function () {
        return (Math.sqrt(this.side, 2)).toFixed(2)
    }
}
// var a1 = new Area()
// var c1 = new Circle(3)
// var s1 = new Square(3)
// console.log(a1, c1, s1)

//Create Prototype(Area > Circle)
Circle.prototype = Object.create(Area.prototype)
Circle.prototype.constructor = Circle
// var c2 = new Circle(4)
// console.log(c2)

//Prototype Member
// Circle.prototype = {//It remove the Area Inheritence for not reseting. To solve this make Circle.prototype.perimeter
//     perimeter: function (D) {
//         return (Math.PI * D).toFixed(2)
//     }
// }

//Solved
Circle.prototype.perimeter = function (D) {
    return (Math.PI * D).toFixed(2)
}

//Create Prototype(Area > Square)
Square.prototype = Object.create(Area.prototype)
Square.prototype.constructor = Square //Solve missing Square Constructor by reset
var s2 = new Square(4)
// console.log(c2, s2)

var a3 = new Area(5)
var c3 = new Circle(5)
var s3 = new Square(5)

var anotherWayToCreateObj = new Circle.prototype.constructor(45)
console.log("A" + anotherWayToCreateObj)


console.log(a3, c3, s3)


//131- Reset Constructor Clean Code

function Area(a) {
    this.area = a;
    this.areaPrint = function () {
        console.log("The area is: " + this.area)
    }
}
function Circle(r) {
    this.radius = r
    this.calculate = function () {
        return (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
    }
}

function Square(s) {
    this.side = s
    this.calculate = function () {
        return (Math.sqrt(this.side, 2)).toFixed(2)
    }
}

//Create Prototype(Area > Circle)
Circle.prototype = Object.create(Area.prototype)
Circle.prototype.constructor = Circle

//Prototype Member
Circle.prototype.perimeter = function (D) {
    return (Math.PI * D).toFixed(2)
}

//Create Prototype(Area > Square)
Square.prototype = Object.create(Area.prototype)
Square.prototype.constructor = Square //Solve missing Square Constructor by reset

var a5 = new Area(5)
var c5 = new Circle(5)
var s5 = new Square(5)

console.log(a5, c5, s5)






// 132 - Calling with Super Method

function myExtend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Area(circleArea, squareArea) {
    this.areaPrint = function () {
        console.log("The Cricle area is: " + circleArea.calculate())
        console.log("The Square area is: " + squareArea.calculate())
    }
}
function Circle(r) {
    this.radius = r
    this.calculate = function () {
        var circleArea = (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
        return circleArea;
    }
}

function Square(s) {
    this.side = s
    this.calculate = function () {
        var squareArea = (Math.sqrt(this.side, 2)).toFixed(2)
        return squareArea;
    }
}

//Create Prototype(Area > Circle)
myExtend(Area, Circle)

//Prototype Member
Circle.prototype.perimeter = function (D) {
    return (Math.PI * D).toFixed(2)
}

//Create Prototype(Area > Square)
myExtend(Area, Square)


var c7 = new Circle(8)
var s7 = new Square(4)
var a7 = new Area(c7, s7)

console.log(a7, c7, s7)

console.log()

a7.areaPrint()



// 132 - Calling with Super Method

function myExtend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Area(circleArea, squareArea) {
    this.areaPrint = function () {
        console.log("The Cricle area is: " + circleArea.calculate())
        console.log("The Square area is: " + squareArea.calculate())
    }
}
function Circle(r) {
    this.radius = r
    this.calculate = function () {
        var circleArea = (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
        return circleArea;
    }
}

function Square(s) {
    this.side = s
    this.calculate = function () {
        var squareArea = (Math.sqrt(this.side, 2)).toFixed(2)
        return squareArea;
    }
}

//Create Prototype(Area > Circle)
myExtend(Area, Circle)

//Prototype Member
Circle.prototype.perimeter = function (D) {
    return (Math.PI * D).toFixed(2)
}

//Create Prototype(Area > Square)
myExtend(Area, Square)


var c7 = new Circle(8)
var s7 = new Square(4)
var a7 = new Area(c7, s7)

console.log(a7, c7, s7)

console.log()

a7.areaPrint()




//133 - Creating Extends Function

function myExtend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Area(circleArea, squareArea) {
    this.circleArea = this
    this.squareArea = this
    this.areaPrint = function () {
        console.log("The Cricle area is: " + circleArea.calculate())
        console.log("The Square area is: " + squareArea.calculate())
    }
}
function Circle(r, circleArea) {
    this.radius = r
    Area.call(this, circleArea)
    this.calculate = function () {
        var circleArea = (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
        return circleArea;
    }
}

function Square(s, squareArea) {
    this.side = s
    Area.call(this, squareArea)
    this.calculate = function () {
        var squareArea = (Math.sqrt(this.side, 2)).toFixed(2)
        return squareArea;
    }
}

//Create Prototype(Area > Circle)
myExtend(Area, Circle)

//Prototype Member
Circle.prototype.perimeter = function (D) {
    return (Math.PI * D).toFixed(2)
}

//Create Prototype(Area > Square)
myExtend(Area, Square)


var c7 = new Circle(8)
var s7 = new Square(4)
var a7 = new Area(c7, s7)

console.log(a7, c7, s7)

console.log()

a7.areaPrint()


// Calling Super Class
function myExtend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Area(value, circleArea, squareArea) {
    this.v = value
    this.areaPrint = function () {
        console.log("The Cricle area is: " + circleArea.calculate())
        console.log("The Square area is: " + squareArea.calculate())
    }
}
function Circle(r, v) {
    this.radius = r
    Area.call(this, v)
    this.calculate = function () {
        var circleArea = (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
        return circleArea;
    }
}

function Square(s) {
    this.side = s
    this.calculate = function () {
        var squareArea = (Math.sqrt(this.side, 2)).toFixed(2)
        return squareArea;
    }
}

//Create Prototype(Area > Circle)
myExtend(Area, Circle)

//Prototype Member
Circle.prototype.perimeter = function (D) {
    return (Math.PI * D).toFixed(2)
}

//Create Prototype(Area > Square)
myExtend(Area, Square)


var c8 = new Circle(8, 'Red')
var s8 = new Square(4)
// var a8 = new Area(c8, s8, 'u')

// console.log(a8, c8, s8)
console.log(c8, s8)

console.log()

// a8.areaPrint()



// 134 - Method Overriding

function myExtend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Area(value, circleArea, squareArea) {
    this.v = value
    this.areaPrint = function () {
        console.log("The Cricle area is: " + circleArea.calculate())
        console.log("The Square area is: " + squareArea.calculate())
    }

}
//Prototype Member
Area.prototype.common = function () {
    return "I am Parent Shape Class"
}

function Circle(r, v) {
    this.radius = r
    Area.call(this, v)
    this.calculate = function () {
        var circleArea = (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
        return circleArea;
    }
}

function Square(s, v) {
    this.side = s
    Area.call(this, v)
    this.calculate = function () {
        var squareArea = (Math.sqrt(this.side, 2)).toFixed(2)
        return squareArea;
    }
}

//Create Prototype(Area > Circle)
myExtend(Area, Circle)

//Prototype Member
Circle.prototype.perimeter = function (D) {
    return (Math.PI * D).toFixed(2)
}

//Create Prototype(Area > Square)
myExtend(Area, Square)


var c10 = new Circle(8, 'Red')
var s10 = new Square(4, 'Green')
var a10 = new Area('What', c10, s10)

// console.log(a9, c9, s9)


console.log()

a10.areaPrint()


//134- Method Overriding 1

function myExtend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

//Area - Parent
function Area(value, circleArea, squareArea) {
    this.v = value
    this.areaPrint = function () {
        console.log("The Cricle area is: " + circleArea.calculate())
        console.log("The Square area is: " + squareArea.calculate())
    }

}
//Prototype Member
Area.prototype.common = function () {
    return "I am Parent Shape Class"
}


//Circle - Child
function Circle(r, v) {
    this.radius = r
    Area.call(this, v)
    this.calculate = function () {
        var circleArea = (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
        return circleArea;
    }
}
//Prototype Member
Circle.prototype.perimeter = function (D) {
    return (Math.PI * D).toFixed(2)
}
//Create Prototype(Area > Circle)
myExtend(Area, Circle)

Circle.prototype.common = function () {
    return "I am Child Circle Class & I am Overriding"
}

//Square - Child
function Square(s, v) {
    this.side = s
    Area.call(this, v)
    this.calculate = function () {
        var squareArea = (Math.sqrt(this.side, 2)).toFixed(2)
        return squareArea;
    }
}
//Create Prototype(Area > Square)
myExtend(Area, Square)



var c10 = new Circle(8, 'Red')
var s10 = new Square(4, 'Green')
var a10 = new Area('What', c10, s10)

// console.log(a9, c9, s9)



a10.areaPrint()
console.log()
console.log(a10.common())
console.log(c10.common())



//134- Method Overriding 2

function myExtend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

//Area - Parent
function Area(value, circleArea, squareArea) {
    this.v = value
    this.areaPrint = function () {
        console.log("The Cricle area is: " + circleArea.calculate())
        console.log("The Square area is: " + squareArea.calculate())
    }

}
//Prototype Member
Area.prototype.common = function () {
    return "I am Parent Shape Class"
}


//Circle - Child
function Circle(r, v) {
    this.radius = r
    Area.call(this, v)
    this.calculate = function () {
        var circleArea = (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
        return circleArea;
    }
}
//Prototype Member
Circle.prototype.perimeter = function (D) {
    return (Math.PI * D).toFixed(2)
}
//Create Prototype(Area > Circle)
myExtend(Area, Circle)

Circle.prototype.common = function () {
    Area.prototype.common.call(this)
    return "I am Child Circle Class & I am Overriding"
}

//Square - Child
function Square(s, v) {
    this.side = s
    Area.call(this, v)
    this.calculate = function () {
        var squareArea = (Math.sqrt(this.side, 2)).toFixed(2)
        return squareArea;
    }
}
//Create Prototype(Area > Square)
myExtend(Area, Square)



var c10 = new Circle(8, 'Red')
var s10 = new Square(4, 'Green')
var a10 = new Area('What', c10, s10)

// console.log(a9, c9, s9)



a10.areaPrint()
console.log()
console.log(a10.common())
console.log()
console.log(c10.common())
console.log()
console.log(c10.common())


//134- Method Overriding 2

function myExtend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

//Area - Parent
function Area(value, circleArea, squareArea) {
    this.v = value
    this.areaPrint = function () {
        console.log("The Cricle area is: " + circleArea.calculate())
        console.log("The Square area is: " + squareArea.calculate())
    }

}
//Prototype Member
Area.prototype.common = function () {
    return "I am Parent Shape Class"
}


//Circle - Child
function Circle(r, v) {
    this.radius = r
    Area.call(this, v)
    this.calculate = function () {
        var circleArea = (Math.PI * Math.sqrt(this.radius, 2)).toFixed(2)
        return circleArea;
    }
}
//Prototype Member
Circle.prototype.perimeter = function (D) {
    return (Math.PI * D).toFixed(2)
}
//Create Prototype(Area > Circle)
myExtend(Area, Circle)

Circle.prototype.common = function () {
    // Area.prototype.common.call(this)
    return "I am Child Circle Class & I am Overriding"
}

//Square - Child
function Square(s, v) {
    this.side = s
    Area.call(this, v)
    this.calculate = function () {
        var squareArea = (Math.sqrt(this.side, 2)).toFixed(2)
        return squareArea;
    }
}
//Create Prototype(Area > Square)
myExtend(Area, Square)

Square.prototype.common = function () {
    return "I am Child Square Class & I am Overriding"
}


var c10 = new Circle(8, 'Red')
var s10 = new Square(4, 'Green')
var a10 = new Area('What', c10, s10)

// console.log(a9, c9, s9)



a10.areaPrint()
console.log()
console.log(a10.common())
console.log(c10.common())
console.log(s10.common())

console.log()

var tri = [a10, c10, s10]

for (var i of tri) {
    console.log(i.common())
}

console.log()

//Checking Instance Of
console.log(a10 instanceof Area) //True
console.log(a10 instanceof Circle) //False
console.log(a10 instanceof Square) //False
console.log()

console.log(c10 instanceof Area) //True
console.log(c10 instanceof Circle) //True
console.log(c10 instanceof Square) //False
console.log()

console.log(s10 instanceof Area) //True
console.log(s10 instanceof Circle) //False
console.log(s10 instanceof Square) //True


//137 Inheritence and Composition Mixin

// Object Literal

var canWalk = {
    walk: function () {
        console.log("Walking...")
    }
}
var canEat = {
    eat: function () {
        console.log("Eating")
    }
}
var person = Object.assign({}, canWalk, canEat)
console.log(person)

//Constructor

var canWalk = {
    walk: function () {
        console.log("Walking...")
    }
}
var canEat = {
    eat: function () {
        console.log("Eating")
    }
}
function Person(n) {
    this.name = n

}
Object.assign(Person.prototype, canEat, canWalk)
var p1 = new Person('Ibn')
console.log(p1)


// Composition

//Method
var canWalk = {
    walk: function () {
        console.log("Walking...")
    }
}
//Method
var canEat = {
    eat: function () {
        console.log("Eating")
    }
}

//Constructor
function Person(n) {
    this.name = n
}

//Assign
function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

//Mixin Compostion
mixin(Person.prototype, canWalk, canEat)

var p1 = new Person('Anis')
console.log(p1)

//Constructor
function Fish(n) {
    this.name = n
}

//Method
var canSwim = {
    swim: function () {
        console.log("Swimming...")
    }
}

//Mixin
mixin(Fish.prototype, canSwim, canEat)

var f1 = new Fish('Goldfish')
console.log(f1)