// // 170 - Asynchronus Programming

// /*

// Synchronous
// 01) Existing or Occouring at the same time
// 02) Basically you can execute one thing at a time

// Asynchronous
// 02) Not Existing or Occouring at the same time
// 02) Basically you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one

// */

// // 178 - Asynchronous Programming in Action 

// //Synchronous 
// console.log("I'm 1")
// console.log("I'm 2")
// console.log("I'm 3")
// console.log("I'm 4")
// console.log("I'm 5")

// console.log("-----")

// //Asynchronous
// console.log("I'm 1")

// setTimeout(() => {
//     console.log("I'm 2")
// }, 3000)

// setTimeout(() => {
//     console.log("I'm 3")
// }, 0)

// setTimeout(() => {
//     console.log("I'm 4")
// }, 1000)

// console.log("I'm 5")

// // 179 - How to store result 

// //Problem
// let storeResult = name => {
//     let result
//     setTimeout(() => {
//         console.log("I am on Set Time Out")
//         result = name
//     }, 3000);
//     return result
// }
// console.log(storeResult("Ibn"))

// let storeResult = name => {
//     setTimeout(() => {
//         // return name
//         console.log(name)
//     }, 3000)
// }
// storeResult("Ibn Taimiya")

// 180 - Why JavaScript act like asynchroous

/*

01) Because JavaScript is a single threaded language
02) JavaScript process one task at a time
03) JavaScript use two Data Structure to handle variables and function calls
    01) Heap to manage varibale
    02) Stack to manage function calls

04) JavaScriot has 4 way to handle asynchronous
    01) Call Stack
    02) Web API
    03) Event Loop
    04) Callback/Task Queue

*/

// 181 - How JS Handle Asynchronous


// 182 - V8 Engine in JavaScript

/*

Currently JS has mainly two platform.
01) NodeJS
02) Web Browser

JavaScript & NodeJS use same engine named V8

What is V8
- V8 is Google open source hign performance JS & and Web Assembly engine. Written in C++. V8 is a C++ programm, that recieve JS code, compile and execute it.

What V8 engine do
01) Compile and Execute JS code
02) Handling call stack
03) Handling Heap Memory to allocate memory for variables
04) Collect garbage
05) Provide data type object

What V8 engine not do
01) DOM (Document Object Model)
02) Multiple V8 engine never share variable on context

*/

// 183 - How to handle Asyncronous Task 

/*

Mainly JavaScript use 3 ways to handle asynchronous
01) Callback Function
02) Promise
03) Async or Await Function

Async or Await Function handle a collection of Asynchronous function in 3 ways
01) Async Iterator
02) For Await Of Loop
03) Async Generator

*/

// 184 - What is AJAX

/*

Asynchronous JavaScript and XML (JSON) is called AJAX
It handle asynchronous function or code and do multi-threaded.


*/

// 185  - AJAX with Callback

/*

Website: jsonplaceholder.typicode.com
Website: jsonplaceholder.typicode.com/user
Website: jsonplaceholder.typicode.com/post

*/

// // User
// let url = "http://jsonplaceholder.typicode.com/users"
// const xhr = new XMLHttpRequest()
// xhr.open('get', url)
// xhr.onreadystatechange = ((e) => {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(xhr.response)
//         } else {
//             console.log(xhr.status)
//         }
//     }
// })
// xhr.send()


// // Album
// let url2 = "http://jsonplaceholder.typicode.com/albums"
// const xhr2 = new XMLHttpRequest()
// xhr2.open('get', url2)
// xhr2.onreadystatechange = ((e) => {
//     if (xhr2.readyState === 4) {
//         if (xhr2.status === 200) {
//             let response = JSON.parse(xhr2.response)
//             console.log(response)
//         } else {
//             console.log(xhr2.status)
//         }
//     }
// })
// xhr2.send()

// //Post
// let url3 = "http://jsonplaceholder.typicode.com/posts"
// const xhr3 = new XMLHttpRequest()
// xhr3.open('get', url3)
// xhr3.onreadystatechange = (e) => {
//     if (xhr3.readyState === 4) {
//         if (xhr3.status === 200) {
//             let response = JSON.parse(xhr3.response)
//             console.log(response)
//         } else {
//             console.log(xhr3.status)
//         }
//     }
// }
// xhr3.send()

// //Comment
// let getRequest = (url, call) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)
//     xhr.onreadystatechange = (e) => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let response = JSON.parse(xhr.response)
//                 call(null, response)
//             } else {
//                 call(xhr.status, null)
//             }
//         }
//     }
//     xhr.send()
// }

// //Comments 500
// let url4 = 'http://jsonplaceholder.typicode.com/comments'
// let gr1 = getRequest(url4, (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)
//     }
// })

// //Todos 200
// let url5 = 'http://jsonplaceholder.typicode.com/todos'
// let gr2 = getRequest(url5, (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)
//     }
// })

// // Callback not always solution

// //General
// let arr = [1, 2, 3, 4]
// let sqr = arr.map(v => v * v)
// console.log(sqr)

// //Asynchronous
// let asyncFunction = (arr, call) => {
//     return arr.map(v => {
//         setTimeout(call, 0)
//     })
// }
// let qb = asyncFunction(arr, (v => v * v * v))
// console.log(qb)

// // Solution 1
// let asyncFunction2 = (arr, call) => {
//     return arr.map(v => {
//         setTimeout(call.bind(null, v), 0)
//     })
// }
// let qb2 = asyncFunction2(arr, (v => {
//     console.log(v)
// }))
// console.log(qb2)

// //Solution 2
// let asyncFunction3 = (arr, call) => {
//     return arr.map(v => {
//         setTimeout(() => call(v), 1000)
//     })
// }
// let qb3 = asyncFunction3(arr, (v => {
//     console.log(v)
// }))
// console.log(qb)

// 187 - Callback is not good solution

