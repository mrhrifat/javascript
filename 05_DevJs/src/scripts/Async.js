// 191 - Async Await Function

/*
Async keyword return a function to promise
*/

// // Promise 

// const URL = 'http://jsonplaceholder.typicode.com'

// let getPromise = url => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest()
//         xhr.open('get', url)
//         xhr.onreadystatechange = e => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     let response = JSON.parse(xhr.response)
//                     resolve(response)
//                 } else {
//                     reject(new Error("Error Occoured"))
//                 }
//             }
//         }
//         xhr.send()
//     })
// }
// let l = getPromise(`${URL}/users`)
// console.log(l)


// // Async 

// const URL = 'http://jsonplaceholder.typicode.com'

// let getPromise = url => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest()
//         xhr.open('get', url)
//         xhr.onreadystatechange = e => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     let response = JSON.parse(xhr.response)
//                     resolve(response)
//                 } else {
//                     reject(new Error("Error Occoured"))
//                 }
//             }
//         }
//         xhr.send()
//     })
// }
// // let l = getPromise(`${URL}/users`)
// // console.log(l) // Status Pending

// getPromise(`${URL}/users`)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })
// //Status Resolved


// // Async Function

// const URL = 'http://jsonplaceholder.typicode.com'

// async function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest()
//         xhr.open('get', url)
//         xhr.onreadystatechange = e => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     let response = JSON.parse(xhr.response)
//                     resolve(response)
//                 } else {
//                     reject(new Error("Error Occoured"))
//                 }
//             }
//         }
//         xhr.send()
//     })
// }

// // console.log(getPromise(`${URL}/users`)) //Pending
// async function resolve() {
//     let r = await getPromise(`${URL}/users`)
//     console.log(r)
//     // return  await getPromise(`${URL}/users`)
// }
// resolve()

// // Async Function Map

// const URL = 'http://jsonplaceholder.typicode.com'

// async function getPromise(url) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest()
//         xhr.open('get', url)
//         xhr.onreadystatechange = e => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     let response = JSON.parse(xhr.response)
//                     resolve(response)
//                 } else {
//                     reject(new Error("Error Occoured"))
//                 }
//             }
//         }
//         xhr.send()
//     })
// }

// // console.log(getPromise(`${URL}/users`)) //Pending
// async function resolve() {
//     let r = await getPromise(`${URL}/users`)
//     console.log(r)
//     let name = r.map(n => n.name)
//     let userName = r.map(un => un.username)
//     console.log(name)
//     console.log(userName)
//     // return  await getPromise(`${URL}/users`)
// }
// resolve()



// // Async Function Fetch

// const URL = 'http://jsonplaceholder.typicode.com'

// async function getPromise(url) {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(e => {
//             return new Error("Error Occoured")
//         })
// }

// // console.log(getPromise(`${URL}/users`)) //Pending

// getPromise(`${URL}/users`) //Pending


// // async function resolve() {
// //     let r = await getPromise(`${URL}/users`)
// //     console.log(r)
// //     // return  await getPromise(`${URL}/users`)
// // }
// // resolve()




// // Async Function Fetch

// const URL = 'http://jsonplaceholder.typicode.com'

// async function getPromise(url) {
//     // fetch(url)
//     let data = await fetch(url)
//     let response = await data.json()
//     console.log(response)
// }

// // console.log(getPromise(`${URL}/users`)) //Pending

// getPromise(`${URL}/users`) //Pending


// // async function resolve() {
// //     let r = await getPromise(`${URL}/users`)
// //     console.log(r)
// //     // return  await getPromise(`${URL}/users`)
// // }
// // resolve()


// // Async Await Function Fetch

// const URL = 'http://jsonplaceholder.typicode.com'

// async function getPromise(url) {
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data)
// }
// getPromise(`${URL}/users`)



// // Async Await Function Fetch Map

// const URL = 'http://jsonplaceholder.typicode.com'

// async function getPromise(url) {
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data)
//     let name = data.map(n => n.name)
//     console.log(name)
// }
// getPromise(`${URL}/users`)


// // Async Await Function Fetch Try Catch

// const URL = 'http://jsonplaceholder.typicode.com'

// async function getPromise(url) {
//     try {
//         let response = await fetch(url)
//         let data = await response.json()
//         console.log(data)
//     } catch (e) {
//         console.log(e)
//     }

// }
// getPromise(`${URL}/users`)
// // getPromise(`${URL}/user`)



// // Async Await Function Fetch Promise All

// const URL = 'http://jsonplaceholder.typicode.com'

// async function getPromise(url) {
//     try {
//         let response = await fetch(url)
//         let data = await response.json()
//         // console.log(data)
//         return data
//     } catch (e) {
//         // console.log(e)
//         return new Error("Error occour")
//     }
// }
// let p1 = getPromise(`${URL}/users`)
// let p2 = getPromise(`${URL}/comments`)
// let p3 = getPromise(`${URL}/posts`)

// let promises = [p1, p2, p3]

// async function promiseAll(p) {
//     let result = await Promise.all(p)
//     console.log(result)
// }
// promiseAll(promises)


// // 192 - Asyn Iterator
// const URL = "http://jsonplaceholder.typicode.com"

// async function getPromise(url) {
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data)
// }

// getPromise(`${URL}/users/1`)


// let asyncIteratorObject = {
//     [Symbol.asyncIterator]() {
//         let i = 0;
//         return {
//             next() {
//                 if (i < 5) {
//                     return Promise.resolve({
//                         value: i++,
//                         done: false
//                     })
//                 } else {
//                     return Promise.resolve({
//                         done: true
//                     })
//                 }
//             }
//         }
//     }
// }
// // let i = asyncIteratorFunction[Symbol.asyncIterator]()
// // console.log(i.next())

// // Put (;) after function otherwise IEFI will not call
// let i = asyncIteratorFunction[Symbol.asyncIterator]();
// (async function () {
//     // let data = await i.next()
//     // console.log(data)

//     console.log(await i.next())
//     console.log(await i.next())
//     console.log(await i.next())
//     console.log(await i.next())
//     console.log(await i.next())
//     console.log(await i.next())
//     console.log(await i.next())
// })()


// // 193 - Async Await Loop

// let asyncIteratorObject = {
//     [Symbol.asyncIterator]() {
//         let i = 0;
//         return {
//             next() {
//                 if (i < 5) {
//                     return Promise.resolve({
//                         value: i++,
//                         done: false
//                     })
//                 } else {
//                     return Promise.resolve({
//                         done: true
//                     })
//                 }
//             }
//         }
//     }
// }

// let i = asyncIteratorObject[Symbol.asyncIterator]();
// (async function () {
//     for await (let i of asyncIteratorObject) {
//         console.log(i)
//     }
// })()



// // 194 - Async Genrator

// async function* asyncGenerator() {
//     let i = 1
//     while (true) {
//         if (i > 5) return
//         yield await Promise.resolve(i++)
//     }
// }
// ; (async function () {
//     for await (let i of asyncGenerator()) {
//         console.log(i)
//     }
// })()