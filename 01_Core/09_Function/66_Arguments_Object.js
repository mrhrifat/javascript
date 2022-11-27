function argOject(a, b, c) {
    return arguments;
}
argOject();

function argOject2(a, b, c) {
    console.log(arguments)
}
argOject2();

function argOject3(a, b, c) {
    console.log(arguments);
}
argOject3(10, 20, 30)

//Infinity Arguments without delcare parameters
function argOject4() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i] + " ");
    }
}
argOject4();
argOject4(1, 2, 3, 4, 5, 6, 7, 8, 9);
argOject4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);

//Add Infinity Arguments without declare parameters range
function addAction() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log("Total: " + sum);
}
addAction();
addAction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
addAction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);

//New
function args() {
    console.log(arguments)
}
args()
function args2(a, b, c) {
    console.log(arguments)
}
args2(10, 2, 3)
function args3() {
    return arguments;
}
args3()


function args4() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i] + " ")
    }
}
args4(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)

function sumArgs() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log("Total: " + sum)
}
sumArgs(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
console.log()

function name(a, b, c) {
    return a + " " + b + " " + c
}
console.log(name("HTML", "CSS", "JS"))

function nameUn() {
    return arguments;
}
console.log(nameUn("HTML", "CSS", "JS", "Boostrap"))

function sum() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))