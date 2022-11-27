// 167 - Inheritence
class Area {
    constructor(c) {
        this.color = c
    }
    print() {
        console.log("Area Super Class")
    }
}

class Circle extends Area {
    constructor(c, h, w) {
        super(c)
        this.height = h
        this.width = w
    }
    clc() {
        return this.height * this.width
    }
}
let a = new Area()


let c = new Circle("Green", 4, 5)
c.print()
console.log(a)
console.log(c)

console.log("------------------")

// 168 - Method Overriding

class Area2 {
    constructor(c) {
        this.color = c
    }
    print() {
        console.log("Area Super Class")
    }
}

class Circle2 extends Area2 {
    constructor(c, h, w) {
        super(c)
        this.height = h
        this.width = w
    }
    clc() {
        return this.height * this.width
    }

    print() {
        console.log("Circle Super Class")
    }

}
let a2 = new Area2()


let c2 = new Circle2("Green", 4, 5)
c2.print()
a2.print()
console.log(a2)
console.log(c2)