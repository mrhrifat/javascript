//Closure with Loop Problem


// for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000 * i)
// }

//This problem can be solved by IIFE(Imediately Invoking Function Expression)

//Closure with Loop Solution
for (var i = 1; i <= 5; i++) {
    (function (n) {
        setTimeout(function () {
            console.log(n)
        }, 1000 * n)
    })(i)
}

//Closure with Loop
for (var i = 1; i <= 11; i++) {
    (function (number) {
        setTimeout(function () {
            console.log(number)
        }, 1000 * number)
    })(i)
}

for (var i = 10; i > 0; i--) {
    (function (n) {
        setTimeout(function () {
            console.log(n)
        }, 1000 * n)
    })(i)
}