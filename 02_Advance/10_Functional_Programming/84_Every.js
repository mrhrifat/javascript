//Every
var arr = [2, 3, 0, -2, 54, 64, 63, 76, 3, 41, -9, -11, -40, 4, 23, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5, -4]
var test1 = arr.every(function (v) {
    return v > 0
})
console.log(test1)
var test2 = arr.every(function (v) {
    return v == 0
})
console.log(test2)
var test3 = arr.every(function (v) {
    return v < 0
})
console.log(test3)

console.log()

//Others
var arr2 = [2, 3, 0, 54, 64, 63, 76, 3, 41, 4, 23, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5]
var test4 = arr2.every(function (v) {
    return v >= 0
})
console.log(test4)
var test5 = arr2.every(function (v) {
    return v == 0
})
console.log(test5)
var test6 = arr2.every(function (v) {
    return v < 0
})
console.log(test6)

//New
var arr01 = [2, 3, 0, -2, 54, 64, 63, 76, 3, 41, -9, -11, -40, 4, 23, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5, -4]
var tests1 = arr01.every(function (v) {
    return v == 41;
})
var tests2 = arr01.every(function (v) {
    return v > 41;
})
var tests3 = arr01.every(function (v) {
    return v < 41;
})
var tests4 = arr01.every(function (v) {
    return v > -100
})
console.log()
console.log(tests1, tests2, tests3, tests4)
console.log()

console.log("=================")

var newArr = [2, 3, 0, -2, 54, 64, 63, 76, 3, 41, -9, -11, -40, 4, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5, -4]
var newArr2 = newArr.every(function (v) {
    return v > 56
})
var newArr3 = newArr.every(function (v) {
    return v < 56
})
var newArr4 = newArr.every(function (v) {
    return v == 56
})
var newArr5 = newArr.every(function (v) {
    return v >= -100
})
console.log(newArr2, newArr3, newArr4,newArr5)

console.log("=================")