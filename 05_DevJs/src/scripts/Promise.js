// // 188 - Introduction to promise

// /*

// 01) Promise is a constructor function, which create an object
// 02) To create promise we have to provide callback function
// 03) In promise there is two terms or two parameter callback function
//     01) resolved
//     02) reject
// 04) Promise has two state
//     01) pending - untill the process or work in done
//     02) resolved- when the promise is resolved

// */

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, 'One')
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'Two')
// })
// console.log(p1)
// console.log(p2)
// p1.then((res) => {
//     console.log(res)
// })

// p2.then((res) => {
//     console.log(res)
// })
//     .catch((e) => {
//         console.log(e)
//     })

// //Promise Function

// let getJob = isDone => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDone) {
//                 resolve("I will get Job")
//             } else {
//                 reject(new Error("Please make programming done!"))
//             }
//         }, 3000)
//     })
// }
// getJob(true)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((e) => {
//         console.log(e)
//     })

// getJob(false)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((e) => {
//         console.log(e)
//     })


// Implement Fecth API

// const URL = 'http://jsonplaceholder.typicode.com'

// fetch(`${URL}/users/1`)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((e) => {
//         console.log(e)
//     })

// //To get value

// fetch(`${URL}/users/1`)
//     .then((res) => {
//         // console.log(res.json())
//         res.json()
//             .then((res) => {
//                 console.log(res)
//             })
//             .catch((e) => {
//                 console.log(e)
//             })
//     })
//     .catch((e) => {
//         console.log(e)
//     })

// //Get Value in short with Fetch

// fetch(`${URL}/users/1`)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })

// // Multiple Return with Promise
// fetch(`${URL}/users/1`)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//         return Promise.resolve('2nd Promise')
//     })
//     .then(res2 => {
//         console.log(res2)
//         return Promise.resolve('3rd Promise')
//     })
//     .then(res3 => {
//         console.log(res3)
//     })
//     .catch(e => {
//         console.log(e)
//     })

// // AJAX with Promise

// const URL = 'http://jsonplaceholder.typicode.com'

// let getRequest = url => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest()
//         xhr.open('get', url)
//         xhr.onreadystatechange = (e => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     let response = JSON.parse(xhr.response)
//                     resolve(response)
//                 } else {
//                     reject(new Error("Error has been occoured"))
//                 }
//             }
//         })
//         xhr.send()
//     })
// }
// getRequest(`${URL}/users/1`)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })

// //Error
// // getRequest(`${URL}/users/12`)
// //     .then(res => {
// //         console.log(res)
// //     })
// //     .catch(e => {
// //         console.log(e)
// //     })


// // 190 - Promise API

// let delay = sec => new Promise(resolve => setTimeout(resolve, sec * 1000))
// delay(2).then(() => console.log("One After 2 second"))
// delay(1).then(() => console.log("Two After 1 second"))
// delay(4).then(() => console.log("Three After 4 second"))
// delay(3).then(() => console.log("Four After 3 second"))
// delay(5).then(() => console.log("Five After 5 second"))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// // Resolve
// let p1 = Promise.resolve("One")
// p1.then(res => console.log(res))

// // Reject
// let p2 = Promise.reject("Two")
// p2.catch(e => console.log(e))


// //All
// let promise1 = new Promise(resolve => {
//     setTimeout(resolve, 3000, "One in Three")
// })
// let promise2 = new Promise(resolve => {
//     setTimeout(resolve, 5000, "Two in Five")
// })
// let promise3 = new Promise(resolve => {
//     setTimeout(resolve, 4000, "Three in Four")
// })
// let promiseArr = [promise1, promise2, promise3]
// Promise.all(promiseArr)
//     .then(res => console.log(res))


// // Race
// Promise.race(promiseArr)
//     .then(res => console.log(res))


// // Promise with Map
// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then(response => response.json())
//   .then(json =>{
//     let e=json.map(v=>v.name)
//     console.log(e)
//   })