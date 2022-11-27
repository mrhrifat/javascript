/*           Parameter
function sum(a,b){
    return result = a+b;
}
sum(10,20);
    Arguments
*/

function sum(a, b) {
    return result = a + b;
}
function sub(a, b) {
    return result = a - b;
}
function mul(a, b) {
    return result = a * b;
}
function div(a, b) {
    return result = a / b;
}
console.log(sum(30, 5));
console.log(sub(70, 4));
console.log(mul(4, 5));
console.log(div(40, 3));

//Sum of array
function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    console.log("Total : " + sum);
}

arraySum([40, 4, 5, 3, 2, 5, 76, 86, 89, 34,])
arraySum([40, 4, 5, 3, 2, 5, 76, 86, 89, 34, 34, 54, 65, 76, 76])
arraySum([40, 4, 5, 3, 2, 5, 76, 86, 89, 34, 34, 54, 65, 76, 76, 6767, 68, 78, 345, 3])
function muliplicationArray(arr) {
    var mul = 1;
    for (var i = 0; i < arr.length; i++) {
        mul *= arr[i];
    }
    console.log("Total: " + mul)
}
muliplicationArray([3, 4, 5, 6, 2, 34, 4, 3, 3, 56])

console.log()
//New
function sumArr(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
console.log(sumArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))