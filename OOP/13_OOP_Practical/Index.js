
var NewTimesTable = function (num) {
    this.n = num

    this.calcualte = function () {
        if (this.n == 0) {
            console.log("Zero")
        } else if (this.n < 0) {
            console.log("Negative")
        } else {
            for (var i = 1; i <= 10; i++) {
                console.log(i + " * " + this.n + " : " + i * this.n)
            }
        }
    }

    this.show = function () {
        console.log("------------------")
        this.calcualte()
        console.log("------------------")
    }
}
var r1 = new NewTimesTable(4);
var r2 = new NewTimesTable(7);
r1.show()
r2.show()

function customNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))
    return obj
}
var r3 = customNew(NewTimesTable, 5)
r3.show()




var newObj = {
    r: 3,
    draw: function () {
        console.log("The value of r: " + this.r)
        console.log("The value of PI: " + Math.PI.toFixed(2))
    }
}
newObj.draw()


var str1 = String()
var str2 = new String()

console.log(NewTimesTable.constructor)
console.log(newObj.constructor)
console.log(str1.constructor)
console.log(str2.constructor)
console.log()

//Function Are Object

// Test 1
function test() {
    console.log("Something")
}
console.log(test.constructor)
console.log()

//Test 2
var Test = new Function('num', `this.n = num

    this.calcualte = function () {
        if (this.n == 0) {
            console.log("Zero")
        } else if (this.n < 0) {
            console.log("Negative")
        } else {
            for (var i = 1; i <= 10; i++) {
                console.log(i + " * " + this.n + " : " + i * this.n)
            }
        }
    }

    this.show = function () {
        console.log("------------------")
        this.calcualte()
        console.log("------------------")
    }`
)
var r1 = new Test(3)
console.log(r1)
console.log(r1.constructor)
console.log(r1.calcualte)
r1.show()

//3rd Test
function test() {
    console.log("Something")
}
console.log(test.constructor)
console.log(test.name, test.length)

console.log()
console.log("-----")

//Bind Call Apply

// Call Apply Bind
function a() {
    console.log(this)
    console.log(this.a + this.b)
}
function b(c, d) {
    console.log(this)
    console.log((this.a + this.b) * c / d)
}
// a()
// a(3, 4)
a.call({ a: 3, b: 4 })
b.call({ a: 3, b: 4 }, 4, 5)


a.apply({ a: 3, b: 4 })
// b.apply({ a: 3, b: 4 }, 4, 5)
b.apply({ a: 3, b: 4 }, [4, 5])



var r1 = a.bind({ a: 3, b: 4 })
r1()
// var r2 = b.bind({ a: 3, b: 4 }, [4, 5])
//r2()
var r3 = b.bind({ a: 3, b: 4 }, 4, 5)
r3()
var r4 = b.bind({ a: 3, b: 4 })
r4(4, 5)


//Pass By Value vs Pass By Reference
//Call By Value vs Call By Reference
console.log()

//Pass by value
/* 
This concept make a clone of variable or premitive data.
When the creational phase is running the data store in RAM with variable name.
That's why when it called by any function, the function work with clone variable or premitive data. 
That's why original data stay as it is
*/
var n = 10;
function temp(n) {
    n = n + 100
    console.log(n)
}
temp(n)
console.log(n)

//Pass by reference
/*
This concept don't make any clone of data beacuase it's an object. 
When the creational phase is running the object store in RAM with reference code.
That's why when any function called an object it works with original data.
And the all data of that object get changed
*/

var obj = {
    a: 20
}
function temp2(o) {
    o.a = o.a + 200
    console.log(o)
}
temp2(obj)
console.log(obj)