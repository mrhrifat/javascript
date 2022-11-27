/*
Scope
01) Global vabriable always get presidence if there in no new assignable variable in any blook.
02) Parent can't access child.
03) But Child can access parent.
04) Always in a block current variable get presidence although global variable are same.
05) In Javascript only function are a block.
*/

//Global Variable
var a = 10;
function block() {
    var a = 20;
    console.log(a);
}
console.log(a);

//Part 2
var b = 10;
function block2() {
    function block3() {
        var b = 20;
        console.log(b);
    }
    console.log(">" + b)
    block3();
    console.log(">>" + b)
}
block2()

var b = 10;
function block() {
    function block2() {
        var b = 20;
        console.log(b);
    }
    console.log(b)
    block2();
}
block()

var x = 10;
function f() {

    console.log(x)
    function d() {
        function g() {
            var x = 12;
            console.log(x)
        }
        g()
        console.log(x)

        console.log(x)
    }
    d()
}
f()

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