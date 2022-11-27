// var obj = {
//     width: 10,
//     height: 20,

//     print: function () {
//         console.log("I am a function")
//         console.log("My Height is: " + this.height)
//         console.log("My Width is: " + this.width)
//     }

// }
// obj.print()
// obj.width


// var obj2 = {
//     width: 300,
//     height: 100,
//     show: obj.print
// }
// console.log(obj2.show)
// obj2.show()

// console.log()

// var obj3 = {
//     name: "Love",
//     price: 40,
//     print: function () {
//         console.log("Book name: " + this.name)
//         console.log("Book price: " + this.price)
//     },
//     action: function () {
//         this.print()
//         console.log(this)
//     }
// }
// console.log()

// function name() {
//     console.log(this)
// }
// function name2() {
//     console.log(this)
//     obj3.action()
//     obj3.print()
// }
// name()
// name2()

//Object
var newObj = {
    r: 3,
    draw: function () {
        console.log("The value of r: " + this.r)
        console.log("The value of PI: " + Math.PI.toFixed(2))
    },
    print: function () {
        console.log("The area of circle is: " + (this.r * Math.PI.toFixed(2)))
        console.log(this)
    }
}
newObj.print()

//Window Object
function windowObj() {
    console.log((this))
}
windowObj()

//Empty Object
function windowObjWithNew() {
    console.log(this)
}
new windowObjWithNew()

console.log("------------------")
//Print to Another Object
function windowObjWithNew2() {
    console.log("I am from another Function")
    console.log(this)
}

var anotherObj = {
    cal: function () {
        console.log()
    }
}

var newObj2 = {
    r: 3,
    draw: function () {
        console.log("The value of r: " + this.r)
        console.log("The value of PI: " + Math.PI.toFixed(2))
    },
    print: function () {
        console.log("The area of circle is: " + (this.r * Math.PI.toFixed(2)))
        console.log("The area of circle is: " + anotherObj.cal)
        console.log(this)
        // this.windowObjWithNew2
        // this.anotherObj
    }
}
newObj2.print()
