// // 170 - Error in JavaScript

// console.log(Number.MAX_VALUE)

// let n = 2.7976931348623157e+308
// if (n > Number.MAX_VALUE) {
//     console.log(n)
// }

// // 171 - Error Handling with If Else

// /*

// 01) When JavaScript won't give any error, than use IfElse for error handling. (In case of undefined/NaN)
// 02) But when JavaScript runtime will give error than create error handling in another way.
// 03) If Else is the basic way to handling error.

// */

// console.log(undefined === undefined) //true
// console.log(NaN === NaN) //false

// var converInt = str => {
//     return parseInt(str)
// }
// console.log(converInt("45.06"))
// console.log(converInt("98.306"))
// console.log(converInt("Hi"))


// // 172 - Error handling with try catch

// let getIt = str => {
//     try {

//         return str.trim().split(" ")

//     } catch (e) {
//         return e
//     }
// }
// console.log(getIt("         This is Ibn   "))
// console.log(getIt("67"))
// // console.log(getIt(67))

// let getIt2 = str => {
//     try {

//         return str.trim().split(" ")

//     } catch (e) {
//         console.log(e)
//         console.log(e.message)
//         console.dir(e)
//         return e.message
//     }
// }
// console.log(getIt2("         This is Ibn   "))
// console.log(getIt2("67"))
// // console.log(getIt2(67))

// let getIt3 = str => {
//     try {

//         return str.trim().split(" ")

//     } catch (e) {
//         return "This is custom error"
//     }
// }
// console.log(getIt3("         This is Ibn   "))
// console.log(getIt3("67"))
// // console.log(getIt3(67))

// // Some way to get error
// // console.log(e)
// // console.log(e.message)
// // console.dir(e)
// // console.log("This is new Error")
// // throw new Error("This is constructor Error")


// // 173 - Throw an Error 

// try {
//     console.log("I am line 1")
//     console.log("I am line 2")
//     console.log("I am line 3")
// } catch (e) {
//     console.log("I am custom error")
// }

// try {
//     console.log("I am line 1")
//     // throw new Error ("I am constructor Error")
//     console.log("I am line 2")
//     console.log("I am line 3")
// } catch (e) {
//     console.log("I am custom error")
// }

// try {
//     console.log("I am line 1")
//     // throw new Error (e)
//     console.log("I am line 2")
//     console.log("I am line 3")
// } catch (e) {
//     console.log("I am custom error")
// }

// // 174 - Finally block

// /*

// 01) It execute which part have to must execute althoug the code have error or not

// */

// try {
//     console.log("I am in Try")
// } catch (e) {
//     console.log("I am in Catch")
// } finally {
//     console.log("I am in Finally")
// }

// console.log("----")

// try {
//     console.log("I am in Try")
//     // throw new Error("Constructor Error")
// } catch (e) {
//     console.log("I am in Catch")
// } finally {
//     console.log("I am in Finally")
// }

// console.log("----")

// // 175 - Optional Catch Binding 

// //Plugin - Optional catch binding that doesn't need (e) in catch block

// try {
//     console.log("I am in Try")
// } catch {
//     console.log("I am in Catch")
// } finally {
//     console.log("I am in Finally")
// }

// console.log("----")

// // 176 - Custom Error

// class customError extends Error {
//     constructor(msg) {
//         super(msg)
//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, customError)
//         }
//     }
// }
// try {
//     console.log("I am line 1")
//     console.log("I am line 2")
//     // throw new customError("I am create custom error")
//     console.log("I am line 3")
// } catch (e) {
//     console.log(e)
// } finally {
//     console.log("I am finally")
// }
