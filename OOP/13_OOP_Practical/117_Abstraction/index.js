// Abstraction

//Constructor Class

var Triangle = function (pBase, pHeight, pA, pB, pC, pSide) {
    this.base = pBase
    this.height = pHeight
    this.a = pA
    this.b = pB
    this.c = pC
    this.side = pSide

    this.areaOfTriangle = function () {
        return 0.5 * this.base * this.height
    }
    this.areaOfTriangleHerons = function () {
        var semiPrm = ((this.a + this.b + this.c) / 2)
        return Math.sqrt(semiPrm * (semiPrm - this.a) * (semiPrm - this.b) * (semiPrm - this.c)).toFixed(2)
    }
    this.areaOfEquilateral = function () {
        return ((Math.sqrt(3) / 4) * Math.pow(this.side, 2)).toFixed(2)
    }
    this.print = function () {
        console.log("Area of Triangle: " + this.areaOfTriangle())
        console.log("Area of Triangle By Hernos: " + this.areaOfTriangleHerons())
        console.log("Area of Triangle Equilateral: " + this.areaOfEquilateral())
        console.log()
    }
}
var r1 = new Triangle(3, 4, 4, 2, 3, 4)
r1.print()
var r2 = new Triangle(3, 4, 4, 2, 3, 4)
r2.print()


//Private Method

//Constructor Class

var Triangle = function (pBase, pHeight, pA, pB, pC, pSide) {
    this.base = pBase
    this.height = pHeight
    this.a = pA
    this.b = pB
    this.c = pC
    this.side = pSide

    var areaOfTriangle = function () {
        return 0.5 * this.base * this.height
    }.bind(this)

    var areaOfTriangleHerons = function () {
        var semiPrm = ((this.a + this.b + this.c) / 2)
        return Math.sqrt(semiPrm * (semiPrm - this.a) * (semiPrm - this.b) * (semiPrm - this.c)).toFixed(2)
    }.bind(this)

    var areaOfEquilateral = function () {
        return ((Math.sqrt(3) / 4) * Math.pow(this.side, 2)).toFixed(2)
    }.bind(this)

    this.print = function () {
        console.log("Area of Triangle: " + areaOfTriangle())
        console.log("Area of Triangle By Herons: " + areaOfTriangleHerons())
        console.log("Area of Triangle Equilateral: " + areaOfEquilateral())
        console.log()
    }
}
var r3 = new Triangle(7, 8, 4, 3, 2, 4)
r3.print()
var r4 = new Triangle(3, 8, 4, 3, 2, 2)
r4.print()


// Getter Setter 1st Method

//Constructor Class

var Triangle = function (pBase, pHeight, pA, pB, pC, pSide) {
    this.base = pBase
    this.height = pHeight
    this.a = pA
    this.b = pB
    this.c = pC
    this.side = pSide

    var areaOfTriangle = function () {
        return 0.5 * this.base * this.height
    }.bind(this)

    var areaOfTriangleHerons = function () {
        var semiPrm = ((this.a + this.b + this.c) / 2)
        return Math.sqrt(semiPrm * (semiPrm - this.a) * (semiPrm - this.b) * (semiPrm - this.c)).toFixed(2)
    }.bind(this)

    var areaOfEquilateral = function () {
        return ((Math.sqrt(3) / 4) * Math.pow(this.side, 2)).toFixed(2)
    }.bind(this)

    //Get
    this.areaOfEquilateral = function () {
        return areaOfEquilateral()
    }

    this.print = function () {
        console.log("Area of Triangle: " + areaOfTriangle())
        console.log("Area of Triangle By Herons: " + areaOfTriangleHerons())
        console.log("Area of Triangle Equilateral: " + areaOfEquilateral())
        console.log()
    }
}
var r5 = new Triangle(7, 8, 4, 3, 2, 4)
r5.print()
r5.areaOfEquilateral()
var r6 = new Triangle(3, 8, 4, 3, 2, 2)
r6.print()
r6.areaOfEquilateral()


//Getter Setter 2nd Method

    //Constructor Class

var Triangle = function (pBase, pHeight, pA, pB, pC, pSide) {
    this.base = pBase
    this.height = pHeight
    this.a = pA
    this.b = pB
    this.c = pC
    this.side = pSide

    var areaOfTriangle = function () {
        return 0.5 * this.base * this.height
    }.bind(this)

    var areaOfTriangleHerons = function () {
        var semiPrm = ((this.a + this.b + this.c) / 2)
        return Math.sqrt(semiPrm * (semiPrm - this.a) * (semiPrm - this.b) * (semiPrm - this.c)).toFixed(2)
    }.bind(this)

    //Getter Method
    Object.defineProperty(this, 'areaOfTriangleHerons', {
        get: function () {
            return areaOfTriangleHerons()
        }
    })

    Object.defineProperty(this, 'areaOfTriangle', {
        get: function () {
            return areaOfTriangle()
        }
    })

    var areaOfEquilateral = function () {
        return ((Math.sqrt(3) / 4) * Math.pow(this.side, 2)).toFixed(2)
    }.bind(this)

    this.print = function () {
        console.log("Area of Triangle: " + areaOfTriangle())
        console.log("Area of Triangle By Herons: " + areaOfTriangleHerons())
        console.log("Area of Triangle Equilateral: " + areaOfEquilateral())
        console.log()
    }
}
var r7 = new Triangle(7, 8, 4, 3, 2, 4)
r7.print()
var r8 = new Triangle(3, 8, 4, 3, 2, 2)
r8.print()
r7.areaOfTriangleHerons //Get

//Getter Setter 2nd Method

//Constructor Class

var Triangle = function (pBase, pHeight, pA, pB, pC, pSide, b) {
    this.base = pBase
    this.height = pHeight
    this.a = pA
    this.b = pB
    this.c = pC
    this.side = pSide
    var position = {
        x: this.base,
        y: this.height
    }
    var book = b;

    var areaOfTriangle = function () {
        return 0.5 * this.base * this.height
    }.bind(this)

    //Getter & Setter
    Object.defineProperty(this, 'areaOfTriangle', {
        get: function () {
            return areaOfTriangle()
        }
    })

    //Getter & Setter For Book
    Object.defineProperty(this, 'book', {
        get: function () {
            return book;
        },
        set: function (v) {
            book= v;
        }
    })

    var areaOfTriangleHerons = function () {
        var semiPrm = ((this.a + this.b + this.c) / 2)
        return Math.sqrt(semiPrm * (semiPrm - this.a) * (semiPrm - this.b) * (semiPrm - this.c)).toFixed(2)
    }.bind(this)


    var areaOfEquilateral = function () {
        return ((Math.sqrt(3) / 4) * Math.pow(this.side, 2)).toFixed(2)
    }.bind(this)

    var positionOfThem = function () {
        return position.x + position.y
    }.bind(this)

    this.print = function () {
        console.log("Area of Triangle: " + areaOfTriangle())
        console.log("Area of Triangle By Herons: " + areaOfTriangleHerons())
        console.log("Area of Triangle Equilateral: " + areaOfEquilateral())
        console.log("Position: " + positionOfThem())
        console.log("Number of books: " + book)
        console.log()
    }
}
var r7 = new Triangle(7, 8, 4, 3, 2, 4, 21)
r7.print()
var r8 = new Triangle(3, 8, 4, 3, 2, 2, 21)
r8.print()

var r9 = new Triangle(3, 8, 4, 3, 2, 2, 21)
r9.book=55;
r9.print()
