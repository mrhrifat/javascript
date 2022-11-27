// 160 Class

class Circle {
    print() {
        console.log("Hi This is a Class")
    }
}
let c1 = new Circle()
c1.print()


class Circle2 {
    constructor(r) {
        this.radius = r
    }
    calculate() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
    }
    area() {
        console.log("The area of Circle is: " + this.calculate())
    }
}
let c2 = new Circle2(2)
c2.area()
console.log(typeof Circle2)

class Circle11 {
    constructor(r) {
        this.radius = r
    }
    static area(ar) {
        let r = (Math.PI * Math.pow(ar, 2)).toFixed(2)
        console.log("*The area of Circle is: " + r)
    }
}
Circle11.area(2)


// 161 Class Property

class Circle3 {
    constructor(r) {
        this.radius = r
        this.diameterCalculate = () => {
            return 2 * r;
        }
    }
    author = "Mrh Rifat"

    areaCalculate() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
    }

    areaPrint() {
        console.log("The area of Circle is: " + this.areaCalculate())
    }
    diameterPrint() {
        console.log("The diameter of Circle is: " + this.diameterCalculate())
    }
}
let c3 = new Circle3(2)
c3.areaPrint()
c3.diameterPrint()
console.log(c3)

class Person {
    constructor(name, email) {
        this.n = name
        this.e = email
    }
    g = "Male"
    print() {
        console.log(this.n, this.e, this.g)
    }
}
let p1 = new Person("Ibn", "@gmail.com")
console.log(p1)
p1.print()

// Area of a circle when the radius is known.	πr2
// Area of a circle when the diameter is known.	πd2/4
// Area of a circle when the circumference is known.	C2/4π

// 162 - Static Method

class Circle4 {
    constructor(r) {
        this.radius = r
        this.diameterCalculate = () => {
            return 2 * r;
        }
    }
    author = "Mrh Rifat"

    areaCalculate() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
    }

    areaPrint() {
        console.log("The area of Circle is: " + this.areaCalculate())
    }
    diameterPrint() {
        console.log("The diameter of Circle is: " + this.diameterCalculate())
    }
    // static calAreaPrintDK() {
    //     return "Area when diameter know: "((Math.PI * diameterCalculate() * 2) / 4).toFixed(2)
    // }

    common() {
        console.log(this.diameterCalculate())
    }
}
let c4 = new Circle4(2)
c4.areaPrint()
c4.diameterPrint()
console.log(c4)

// let c5 = Circle4.calAreaPrintDK()
c4.common()

// Value passing through function

// class Circle6 {
//     constructor(r) {
//         this.radius = r
//         this.diameterCalculate = () => {
//             return 2 * r;
//         }
//     }
//     areaCalculate() {
//         return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
//     }

//     areaPrint() {
//         console.log("The area of Circle is: " + this.areaCalculate())
//     }
//     diameterPrint() {
//         console.log("The diameter of Circle is: " + this.diameterCalculate())
//     }


//     static calculateAreaPrintDK(f) {
//         return ((Math.PI * f * 2) / 4).toFixed(2)
//     }

//     getDiamter() {
//         console.log(this.diameterCalculate())
//     }
// }
// var outerDiameterCalculate = (r) => {
//     return 2 * r;
// }

// let c2 = new Circle6(4)
// c2.getDiamter()

// let od1 = outerDiameterCalculate(5)
// console.log(od1)

// let c = Circle6.calculateAreaPrintDK(outerDiameterCalculate())


// 3rd

class Circle5 {
    constructor(r) {
        this.radius = r
        this.diameterCalculate = () => {
            return 2 * r;
        }
    }
    author = "Mrh Rifat"

    areaCalculate() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
    }

    areaPrint() {
        console.log("The area of Circle is: " + this.areaCalculate())
    }
    diameterPrint() {
        console.log("The diameter of Circle is: " + this.diameterCalculate())
    }
    static getPerson(data) {
        let str = JSON.parse(data)
        return `The person name is: ${str.name} \nHis desgination is : ${str.designation}`
    }

    common() {
        console.log(this.diameterCalculate())
    }
}
let d1 = '{"name":"Ibn Taimiya","designation":"Imam"}'

let c6 = Circle5.getPerson(d1)
console.log(c6)

let str = '{"name":"Ibn","mail":"@gmail.com","gender":"male"}'

class Person2 {
    static print(s) {
        let value = JSON.parse(s)
        console.log(value.name, value.mail, value.gender)
    }
}
Person2.print(str)


// 163 - Use Strict

// It will return Window Object
function Shape() {
    this.print = function () {
        console.log(this)
    }
}
var s1 = new Shape()
var s2 = s1.print
s2()

// Class won't print Window Object. It return undefined.
class Shape2 {
    print() {
        console.log(this)
    }
}
var s3 = new Shape2()
var s4 = s3.print
s4()

class Circle7 {
    constructor(r) {
        this.radius = r
        this.diameterCalculate = () => {
            return 2 * r;
        }
    }
    author = "Mrh Rifat"

    areaCalculate() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
    }

    areaPrint() {
        console.log("The area of Circle is: " + this.areaCalculate())
    }
    diameterPrint() {
        console.log("The diameter of Circle is: " + this.diameterCalculate())
    }
    static getPerson(data) {
        let str = JSON.parse(data)
        return `The person name is: ${str.name} \nHis desgination is : ${str.designation}`
    }

    test() {
        console.log(this)
    }

    common() {
        console.log(this.diameterCalculate())
    }
}
let d2 = '{"name":"Ibn Taimiya","designation":"Imam"}'

let c7 = Circle7.getPerson(d2)
console.log(c7)

//It will return undefined. Because we use babel/this strict mode plugin. Basically it's a window object. But Class won't return window object
let c8 = new Circle7(2)
var c9 = c8.test
c9()

function Area() {
    this.print = function () {
        console.log(this)
    }
}
let a = new Area()
a.print() // This Object
let b = a.print
b() //Window Object
//For USE STRICT it will show undefined


// 164 - Hide Private Data With Symbol

const _radius = Symbol()
const _diameterCalculate = Symbol()
const _areaCalculate = Symbol()
const _test = Symbol()
const _common = Symbol()
const _author = Symbol()

class Circle10 {
    constructor(r) {
        this[_radius] = r
        this[_diameterCalculate] = () => {
            return 2 * r;
        }
    }
    [_author] = "Mrh Rifat"

    areaCalculate() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
    }

    areaPrint() {
        console.log("The area of Circle is: " + this.areaCalculate())
    }
    diameterPrint() {
        console.log("The diameter of Circle is: " + this.diameterCalculate())
    }
    static getPerson(data) {
        let str = JSON.parse(data)
        return `The person name is: ${str.name} \nHis desgination is : ${str.designation}`
    }

    [_test]() {
        console.log(this)
    }

    [_common]() {
        console.log(this.diameterCalculate())
    }
}
let c10 = new Circle10(4)
c10.areaPrint()
c10.areaPrint()

const _n3 = Symbol()
const _g3 = Symbol()

class Person3 {
    constructor(name, gender) {
        this[_n3] = name
        this[_g3] = gender
    }
    draw() {
        console.log("Nothing")
    }
}
let p = new Person3("Ibn", "Male")
console.log(p)
let v = Object.getOwnPropertySymbols(p)[0]
console.log(v)
console.log(p[v])

// 165 - Private with WeakMap



function getCalculatedArea(circle) {
    return (Math.PI * Math.pow(_radius2.get(circle), 2)).toFixed(2);
}

const _radius2 = new WeakMap();

class Circle13 {
    constructor(r) {
        _radius2.set(this, r);
    }
    areaPrint() {
        console.log("The area of Circle is: " + getCalculatedArea(this))
    }
}
let c = new Circle13(4);

c.areaPrint();

const _n = new WeakMap()
const _g = new WeakMap()
const _f = new WeakMap()

class Person4 {
    constructor(name, gender) {
        this.size = 100
        _n.set(this, name)
        _g.set(this, gender)
        _f.set(this, () => {
            console.log(this.size)
        })
    }
    draw() {
        console.log("Nothing")
        console.log(_n.get(this))
        console.log(_g.get(this))
        _f.get(this)()
    }
}
let p2 = new Person4("Ibn", "Male")
p2.draw()





// 166 - Getter Setter


const _n2 = new WeakMap()
const _g2 = new WeakMap()
const _f2 = new WeakMap()


class Person6 {
    constructor(name, gender) {
        this.size = 100
        _n2.set(this, name)
        _g2.set(this, gender)
        _f2.set(this, () => {
            console.log(this.size)
        })
    }

    getName() { //1st Method
        return _n.get(this)
    }
    get gender() {//2nd Method
        return _g.get(this)
    }
    set name(v) {
        _n.set(this, v)
    }

    draw() {
        console.log("Nothing")
        console.log(_n.get(this))
        console.log(_g.get(this))
        _f2.get(this)()
    }
}
let p3 = new Person6("Ibn", "Male")
p3.draw()
console.log()
console.log(p3.getName())
console.log(p3.gender)
console.log()
p3.name = "Jawji"
console.log(p3.name)
p3.draw()