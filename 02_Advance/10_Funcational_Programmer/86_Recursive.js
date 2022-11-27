//Recursive Summation
function sum(n) {
    if (n === 1) {
        return 1
    }
    return n + sum(n - 1)
}
console.log(sum(5))

function sum2(num) {
    if (num === 1) {
        return 1
    } else {
        return num + sum2(num - 1)
    }
}
console.log(sum2(10))

function sum3(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return n + sum3(n - 1)
    }
}
console.log()
console.log(sum3(4))
console.log(sum3(5))

//Print Message
function saySalam(msg) {
    if (msg === 0) {
        return
    } else {
        console.log("Assalamu Alaikum, How are you ?");
        return saySalam(msg - 1)
    }
}
saySalam(5)

//Factorial 
function factorial(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

function factorialNew(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return n * factorialNew(n - 1)
    }
}
console.log()
console.log(factorialNew(3))
console.log(factorialNew(4))
console.log(factorialNew(5))
console.log("======================")


function newFactorial(n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } else {
        return n * newFactorial(n - 1)
    }
}
console.log(newFactorial(5))
console.log(newFactorial(4))
console.log(newFactorial(3))
console.log(newFactorial(2))
console.log(newFactorial(1))

console.log("======================")