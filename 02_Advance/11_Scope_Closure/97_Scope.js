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

//New
function newFunction() {
    console.log(x)
}
newFunction()
function newScope() {
    function innerScope() {
        console.log("Inner scope Y: " + y)
        console.log("Inner scope X: " + x)
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