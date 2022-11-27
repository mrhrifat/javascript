// var obj = {
//     firstName: "Ibn",
//     lastName: "Taimiya",
//     religion: "Islam",
//     print: function () {
//         return "Your name is: " + this.firstName + " " + this.lastName
//     }
// }
// console.log(obj)
// console.log(obj.firstName)
// console.log(obj["lastName"])
// console.log(obj.print())


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
