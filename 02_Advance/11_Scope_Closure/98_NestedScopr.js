//1st
var m = 25;
function b() {
    var m = 100;
    console.log(m)
}
b()
console.log(m)

//2nd 
var n = 80;
function c() {
    //var n = 50;
    console.log(n)
}
c()
console.log(n)



//3rd
var x = 10;
function a() {
    console.log("Fun 1: " + x)
    var x = 15;
    console.log("Fun 2: " + x)

    function aa() {
        console.log("Fun 3: " + x)
        var x = 20;
        console.log("Fun 4: " + x)
    }
    aa()
}
console.log("Global X: " + x)
a()
console.log("Global X: " + x)

//4th
var l = 3;
function r() {
    var l = 2;
    console.log(l)

    function r2() {
        var l = 1
        console.log(l)

        var u = 0;
        console.log(u)
    }
    //console.log(u)
    r2()
    //console.log(u);
}
r()
console.log(l)


//New
var x = 100;
function a() {
    console.log(x)
}
a();

//Second
var y = 200;
function b() {
    var y = 300;
    console.log(y)
}
b()
function newFunction() {
    console.log(x)
}
newFunction()
function newScope() {
    function innerScope() {
        console.log("Inner scope Y: " + y)
        console.log("Inner scope X: " + x)
        function doubleInnerScope() {
            var y = 20;
            console.log("Double Inner Y:" + y)
        }
        doubleInnerScope()
    }
    innerScope()
}
newScope()

var n = 10
var newScope = function () {
    console.log(n) //10
    function newScope2() {
        console.log(n) //10

        function newScope3() {
            console.log(n) //10
        }

        function newScope4() {
            var n = 15
            console.log(n)//15

            function newScope5() {
                console.log(n)//15
            }
            newScope5()
        }
        newScope3()
        newScope4()

    }
    newScope2()
}
newScope()