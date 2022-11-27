//Factory Pattern
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

var five=timesTable(5)
five.show()



//Times Table
var newTimesTable = function (num) {
    return {
        n: num,

        calculate: function () {
            if (this.n == 0) {
                console.log("This is zero")
            } else if (this.n < 0) {
                console.log("This is negative")
            } else {
                for (var i = 1; i <= 10; i++) {
                    console.log(i + " * " + this.n + " : " + i * this.n)
                }
            }
        },
        show: function () {
            console.log("----------")
            this.calculate()
            console.log("----------")
        }
    }
}

var r1 = newTimesTable(0)
var r2 = newTimesTable(3)
r1.show()
r2.show()











//Old--------------------------------------

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

