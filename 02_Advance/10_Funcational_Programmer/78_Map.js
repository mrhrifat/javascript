//Map traverse into an array and return new Array Value, Index, Array
//In bulit Map

//Random
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var arr2 = arr.map(function (val) {
    return Math.random(val) * 100;
});
console.log(arr2)

//Radom Number New
var arr01 = [1, 2, 3, 4, 5]
var arr02 = arr.map(function (v) {
    return Math.round(Math.random() * 10 + 1);
});
console.log(arr02)

//Sqrt
var arr3 = arr.map(function (val, i, a) {
    return val * val + " " + i + " " + a;
});
console.log(arr3)

var arr4 = arr.map(function (val) {
    return val * val;
});
console.log(arr4)


var arr03 = arr01.map(function (v) {
    return v * v * v
})
console.log(arr03)

console.log("----------------------")

var newArr = [3, 4, 5, 6, 7, 8, 9]
var newArr2 = newArr.map(function f(v, i, a) {
    return i + " " + v + " * " + "2 " + v * 2 + " " + a
})
console.log(newArr2)

function customNewMap(arr, cbf) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = cbf(arr[i], i, arr)
        newArr.push(temp)
    }
}
console.log()
var newArr3 = customNewMap(newArr, function f(v, i, a) {
    console.log(i + " " + v + " * " + "2 " + v * 2 + " " + a)
})

console.log("----------------------")

//Callback

var input = [1, 2, 3, 4, 5];
function myMap(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        cbf(arr[i])
    }
}
var res1 = myMap(input, function (v) {
    console.log(v);
});

console.log()

console.log()
console.log(arr01)
console.log()
//Custom New Map
function customMapFunction(arr, cbf) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = cbf(arr[i], i, arr)
        newArr.push(temp);
    }
    return newArr;
}
function getNewArr(v) {
    return v * v * v * v;
}
console.log(customMapFunction(arr01, getNewArr))
console.log()
console.log(customMapFunction(arr01, function (v, i) {
    if (v > 2) {
        return v * v;
    } else {
        return delete v;
    }
}))

// Declared Function
var input2 = [11, 12, 13, 14, 15];
function myMap(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        cbf(arr[i])
    }
}
function out(v) {
    console.log(v);
}
myMap(input2, out)

//Custom myMap

var myArr = [100, 200, 300, 400, 500];
var myArr2 = [5, 4, 3, 2, 1];

function customMyMap(arr, cbf) {
    for (var i = 0; i < arr.length; i++) {
        cbf(arr[i], i, arr)
    }
}
var sqr = customMyMap(myArr, function (v) {
    console.log(v * v)
});


customMyMap(myArr2, function (v, i, arr) {
    arr[i] = v * v * v;
});
console.log(myArr2)

customMyMap(myArr2, function (v, i, arr) {
    arr[i] = v * v;
})
console.log(myArr2)

//Custom Map
var arr1 = [3, 6, 9, 12, 15]
function customMap(arr, cbf) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var temp = cbf(arr[i], i, arr);
        newArr.push(temp);
    }
    return newArr;
}
var res01 = customMap(arr1, function (v) {
    console.log(v + v)
})
var res02 = customMap(arr1, function (v, i, a) {
    console.log(v * v * v + " " + i + " " + a)
})

// customMap(arr1, function (val, ind, arr) {
//     arr[ind] = val + val + val;
// })
// console.log(arr1)

function multiply(v) {
    return 10 * v;
}
var mulTen = customMap(arr1, multiply)
console.log(mulTen)
console.log(arr1)