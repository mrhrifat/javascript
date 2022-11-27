//Filter Inbuilt
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var newArr1 = arr.filter(function (v) {
    return v > 5;
})
console.log(arr)
console.log(newArr1)

var newArr2 = arr.filter(function (v) {
    return v % 2 == 0;
})
console.log(newArr2)
console.log()

//New
var arr01 = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10]
var newArr01 = arr01.filter(function (v) {
    return v > 07;
})
console.log(newArr01)

console.log()

console.log("----------------------")

var newArr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var newArr2 = newArr.filter(function f(i) {
    return i > 7
})
console.log(newArr2)
console.log()


function customNewFilter(arr, cbf) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cbf(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log()
var newArr4 = customNewFilter(newArr, function f(i) {
    return i > 5
})
console.log(newArr4)

console.log("----------------------")

//Fiter Custom
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function myFilter(arr, cbf) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cbf(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
var newArr3 = myFilter(arr2, function (v) {
    return v < 8;
})
console.log(newArr3)

var newArr4 = myFilter(arr2, function (v) {
    return v == 5
})
console.log(newArr4)
var newArr5 = myFilter(arr2, function (v) {
    return v % 2 == 1;
})
console.log(newArr5)
console.log()

//New Custom
var customArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function customFilter(arr, cbf) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cbf(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
function customFun01(v) {
    return v > 6;
}
console.log(customFilter(customArr, customFun01))
console.log(customFilter(customArr, function (v) {
    return v == 8
}))
console.log(customFilter(customArr, function (v) {
    if (v % 2 == 0) {
        return v;
    }
}))