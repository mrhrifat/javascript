//Inbuilt Reduce
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var newArr = arr.reduce(function (p, n) {
    return p + n
}, 0)
console.log(newArr)
var newArr2 = arr.reduce(function (p, n, i, a) {
    return Math.max(p, n)
}, 0)
console.log(newArr2)
var newArr3 = arr.reduce(function (p, n) {
    return Math.min(p, n)
}, arr[0])
console.log(newArr3)

var customArr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var newArrMax = customArr.reduce(function (pv, cv) {
    return Math.max(pv, cv);
}, 0)
var newArrMin = customArr.reduce(function (pv, cv) {
    return Math.min(pv, cv)
}, customArr[0])
var newArrSum = customArr.reduce(function (pv, cv) {
    return pv + cv;
}, 0)
console.log()
console.log(newArrMax, newArrMin, newArrSum)
console.log()

console.log("====================")

var newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var newArr2 = newArr.reduce(function (pv, cv) {
    return Math.max(pv, cv)
}, 0)
console.log(newArr2)
function customReduce(arr, cbf, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = cbf(acc, arr[i])
    }
    return acc;
}
var newMax = customReduce(newArr, function (pv, cv) {
    return Math.max(pv, cv)
}, 0)
console.log(newMax)
var newMin = customReduce(newArr, function (pv, cv) {
    return Math.min(pv, cv)
}, arr[0])
console.log(newMin)

console.log("====================")



//Custom Reduce
var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function myReduce(arr, cbf, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = cbf(acc, arr[i])
    }
    return acc
}
var max = myReduce(myArr, function (pv, nv) {
    return Math.max(pv, nv)
}, 0)
console.log(max)

var sum = myReduce(myArr, function (p, n) {
    return p + n;
}, 0)
console.log(sum)

function minimum(p, n) {
    return Math.min(p, n)
}
var min = myReduce(myArr, minimum, myArr[0])
console.log(min)

//New
var myArray = [11, 22, 33, 44, 55, 66, 77, 88, 99]
function myReduceFunction(arr, cbf, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = cbf(acc, arr[i]);
    }
    return acc;
}
console.log()
console.log(myReduceFunction(myArray, function (pv, cv) {
    return Math.max(pv, cv)
}, 0))
console.log(myReduceFunction(myArray, function (pv, cv) {
    return Math.min(pv, cv)
}, myArray[0]))

function myMin(pv, cv) {
    return Math.min(pv, cv)
}
console.log(myReduceFunction(myArray, myMin, myArray[0]))
var mySum = myReduceFunction(myArray, function (pv, cv) {
    return pv + cv;
}, 0)
console.log(mySum)
console.log()

