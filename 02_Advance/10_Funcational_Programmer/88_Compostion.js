/*
Function Compotion - If the output on second function becomes the input of first function is called function composition.
There are 2 types of composition
    01) Function composition
    02) OOP Composition
*/

function print(out) {
    console.log(out);
}
function mul(n) {
    return n * 5;
}
function add(a, b) {
    return a + b;
}
print(mul(add(4, 5))) // print n*5 4 +5  >> print 9*5 >> 45

//New

function printOut(out) {
    return out;
}
function factorial(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
function sumN(a, b) {
    return a + b;
}
console.log(printOut(factorial(sumN(2, 2))))
console.log(printOut(factorial(sumN(2, 8))))
console.log(printOut(factorial(sumN(2, 3))))

function newPrint(o) {
    return o;
}
function newFactorial(n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } else {
        return n * newFactorial(n - 1)
    }
}
function multiplication(a, b) {
    return a * b
}
console.log(newPrint(newFactorial(multiplication(3, 4))))
console.log(newPrint(newFactorial(multiplication(1, 4))))
