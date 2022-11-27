//forEach built in function
//forEach traverse an array and by marging main array return value, index, full array 

var arr = [1, 2, 3, 4, 5]
arr.forEach(function a(value, index, arr) {
    console.log(value, index, arr)
})

console.log()

arr.forEach(function (val, i, a) {
    console.log(val, i, a)
})

console.log()

arr.forEach(function (val) {
    console.log(val)
})

console.log()

sum = 0;
arr.forEach(function (val) {
    sum += val
})
console.log(sum)


//New Inbuilt
var array = [1, 2, 3, 4, 5]
array.forEach(function a(v, i, a) {
    console.log(v, i, a)
})
var sum1 = 0;
array.forEach(function sumFun(v) {
    sum1 += v;
})
console.log(sum1)
array.forEach(function i(i, v) {
    console.log(v)
})


console.log("---------------------")

var newArr = [2, 3, 4, 5, 6]
newArr.forEach(function multiplication(value, index, arr) {
    console.log(index + " " + value + " * " + "2 " + value * 2 + " " + arr)
})

console.log()

function customNewForEach(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        cbf(arr[i], i, arr)
    }
}
var new1 = customNewForEach(newArr, function (value, index, arr) {
    console.log(index + " " + value + " * " + "2 " + value * 2 + " " + arr)
})



console.log("---------------------")

//Custom Callback implementation of foreach
var input = [6, 7, 8, 9, 10]
function customForEach(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        cbf(arr[i], i, arr);
    }
}
function f(val, ind, ar) {
    console.log(val, ind, ar);
}
var resA = customForEach(input, f)
console.log("Why " + resA)


var resB = customForEach(input, function (value, index, array) {
    console.log(value)
})

var resC = customForEach(input, function (value, index, array) {
    console.log(value, index, array)
})
sum2 = 0;
var resD = customForEach(input, function (value, index, array) {
    console.log(value)
    sum2 += value;
})
console.log(sum2)
// var resC = input.customForEach(function (v,i,a) {
//     console.log(v)
// })

//New foreach Implimentation
var newArr = [4, 5, 6, 7, 8, 9, 1, 2, 3]
function customForEachImplimentation(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        cbf(arr[i], i, arr)
    }
}
function test1(v, i, a) {
    console.log(v, i, a);
}
var result01 = customForEachImplimentation(newArr, test1)

var result02 = customForEachImplimentation(newArr, function (v) {
    console.log(v)
})
var result03 = customForEachImplimentation(newArr, function (v, ii, a) {
    var sum = 0;
    sum = a.reduce(function (a, b) {
        return a + b;
    }, 0)
    console.log(sum, ii)
})