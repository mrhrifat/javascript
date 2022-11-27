
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


var Rectangle = function (width, height) {
    this.w = width
    this.h = height

    this.calculation = function () {
        console.log("The area of rectangle is: " + this.w * this.h)
    }

    this.print = function () {
        this.calculation()
        console.log("You are success")
        console.log(this)
        console.log()
    }
}
var rect1 = new Rectangle(4, 5)
rect1.print()

//Custom new keyword
var myNew = function (invokeConstructor) {
    var obj = {}
    Object.setPrototypeOf(obj, invokeConstructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    invokeConstructor.apply(obj, argsArray.slice(1))
    return obj
}

var rect2 = myNew(Rectangle, 10, 5)
rect2.print()














//Constructor Pattern
var TimesTable = function (n) {
    this.num = n

    this.calculation = function () {
        if (this.num < 0) {
            console.log("This is a negative number")
        } else if (this.num == 0) {
            console.log("This is zero")
        } else {
            for (var i = 1; i <= 10; i++) {
                console.log(this.num + " * " + i + " = " + (this.num * i))
            }
        }
    }

    this.show = function () {
        this.calculation()
        console.log("You are success!")
        console.log()
    }
}
var six = new TimesTable(6)
var twelve = new TimesTable(12)
six.show()
twelve.show()




















var timesTable = function (num) {
    return {
        n: num,

        calculation: function () {
            if (this.n < 0) {
                return "The number is negative.\nEnter a valid number.";
            } else if (this.n == 0) {
                return "The number is zero.\nEnter a valid number."
            } else {
                for (var i = 1; i <= 10; i++) {
                    console.log(this.n + " * " + i + " = " + i * this.n)
                }
            }
        },

        show: function () {
            this.calculation();
            console.log("You are success!")
            console.log()
        }
    }
}
var two = timesTable(2)
//console.log(two.show())
two.show()

var five = timesTable(5)
five.show()














// //Old--------------------------------------

var obj = {
    width: 10,
    height: 20,

    print: function () {
        console.log("I am a function")
        console.log("My Height is: " + this.height)
        console.log("My Width is: " + this.width)
    }

}
obj.print()
obj.width


var obj2 = {
    width: 300,
    height: 100,
    show: obj.print
}
console.log(obj2.show)
obj2.show()

console.log()

var obj3 = {
    name: "Love",
    price: 40,
    print: function () {
        console.log("Book name: " + this.name)
        console.log("Book price: " + this.price)
    },
    action: function () {
        this.print()
        console.log(this)
    }
}
console.log()

function name() {
    console.log(this)
}
function name2() {
    console.log(this)
    obj3.action()
    obj3.print()
}
name()
name2()