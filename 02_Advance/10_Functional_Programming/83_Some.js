//Some
var arr = [2, 3, 0, -2, 54, 64, 63, 76, 3, 41, -9, -11, -40, 4, 23, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5, -4]
var test1 = arr.some(function (v) {
    return v > 0
})
console.log(test1)
var test2 = arr.some(function (v) {
    return v == 0
})
console.log(test2)
var test3 = arr.some(function (v) {
    return v < 0
})
console.log(test3)

var test4 = arr.every(function (v) {
    return v > 0
})
console.log(test4)

//New
var arr = [2, 3, 0, -2, 54, 64, 63, 76, 3, 41, -9, -11, -40, 4, 23, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5, -4]
var tests1 = arr.some(function (v) {
    return v == 41;
})
var tests2 = arr.some(function (v) {
    return v > 41;
})
var tests3 = arr.some(function (v) {
    return v < 41;
})
console.log()
console.log(tests1, tests2, tests3)
console.log()
console.log("=================")

var newArr = [2, 3, 0, -2, 54, 64, 63, 76, 3, 41, -9, -11, -40, 4, 46, 7, 8, 4, 9, 61, 12, 34, 56, 23, 5, -4]
var newArr2 = newArr.some(function (v) {
    return v > 56
})
var newArr3 = newArr.some(function (v) {
    return v < 56
})
var newArr4 = newArr.some(function (v) {
    return v == 56
})
console.log(newArr2, newArr3, newArr4)

console.log("=================")