//Built in Find
var arr = [3, 4, 6, 8, 2, 554, 65, 35, 76, 87, 234, 65]
var f = arr.find(function (v) {
    return v == 6;
})
var f2 = arr.find(function (v) {
    return v == 1000;
})
console.log(f)
console.log(f2)
console.log()
//Built in Find Index
var f3 = arr.findIndex(function (v) {
    return v == 6
})
var f4 = arr.findIndex(function (v) {
    return v == 1000;
})
var f5 = arr.findIndex(function (v) {
    return v == 234;
})
console.log("Finf Index " + f3)
console.log("Finf Index " + f4)
console.log("Finf Index " + f5)
console.log()

//New
var number = [123, 45, 234, 25, 634, 243, 123, 5436, 547, 568]
var fn = number.find(function (v) {
    return v == 234
})
console.log()
console.log(fn)
console.log()

var fi = number.findIndex(function (v) {
    return v == 234;
})
console.log(fi)
console.log()

console.log("-------------------")

//Find
var newArr = [3, 4, 5, 6, 7, 8, 345, 6, 867, 9, 08]
var newArr2 = newArr.find(function (v) {
    return v == 8
})
console.log(newArr2)
//Find Index
var newArr3 = newArr.findIndex(function (v) {
    return v == 8
})
console.log(newArr3)

function customFind(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        if (cbf(arr[i])) {
            return arr[i]
        }
    }
}
function customFindIndex(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        if (cbf(arr[i])) {
            return i
        }
    }
}
var newArr4 = customFind(newArr, function (v) {
    return v == 8
})
var newArr5 = customFindIndex(newArr, function (v) {
    return v == 8
})
console.log(newArr4)
console.log(newArr5)

console.log("-------------------")
console.log("-------------------")


// Custom Find
var myArr = [3, 4, 6, 8, 2, 554, 65, 35, 76, 87, 234, 65]
function myFind(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        if (cbf(arr[i])) {
            return arr[i];
        }
    }
}
var res1 = myFind(myArr, function (v) {
    return v == 6;
})
console.log(res1)
var res2 = myFind(myArr, function (v) {
    return v == 1000;
})
console.log(res2)
console.log()

//Custom Find Index
var myArr = [3, 4, 6, 8, 2, 554, 65, 35, 76, 87, 234, 65]
function myFindIndex(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        if (cbf(arr[i])) {
            return i;
        }
    }
}
var res3 = myFindIndex(myArr, function (v) {
    return v == 6;
})
var res4 = myFindIndex(myArr, function (v) {
    return v == 1000;
})
var res5 = myFindIndex(myArr, function (v) {
    return v == 234;
})
console.log(res3)
console.log(res4)
console.log(res5)


function myFindF(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        if (cbf(arr[i])) {
            return arr[i]
        }
    }
}
function myFindIndexF(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        if (cbf(arr[i])) {
            return i
        }
    }
}
console.log()
console.log(myFindF(myArr, function (v) {
    return v == 554;
}))
console.log(myFindIndexF(myArr, function (v) {
    return v === 554
}))
console.log()