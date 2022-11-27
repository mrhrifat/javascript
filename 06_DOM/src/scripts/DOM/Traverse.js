// // 201 - Traverse DOM

// /*

// 01) Where you can use Element, then don't use node.
// 02) Like follow line 12 not 13.

// */

// let ol = document.getElementById('ol')
// console.log(ol.parentElement)
// console.log(ol.previousElementSibling)
// console.log(ol.previousSibling) //Not preferable
// console.log(ol.nextElementSibling)
// console.log(ol.firstElementChild)
// console.log(ol.lastElementChild)
// console.log(ol.hasChildNodes())

// // 202 - How to Loop through HTML

// let list = document.getElementsByTagName('li')
// console.log(list)
// /* 

// 01) It returns a Array like Data Structure not Array. 
// 02) To traverse this first we have to make it Array.
// 03) There are 3 ways to make it Array
//     01) Array From
//     02) Array Prototype Slice Apply
//     03) Spread Operator

// 04) The best method is Spread Operator

// */

// // 1st Method

// let arrayFrom = Array.from(list)
// console.log(arrayFrom)

// let traverse = arrayFrom.forEach(data => {
//     console.log(data)
// })


// // 2nd Method

// let arrayApply = Array.prototype.slice.apply(list)
// console.log(arrayApply)

// let traverse2 = arrayApply.forEach(data => {
//     console.log(data)
// })

// // 3rd Method

// // Use ; for not getting error
// let arraySpread = [...list]
// console.log(arraySpread)

// let traverse3 = arraySpread.forEach(data => {
//     console.log(data)
// })

// // Now Change it From Website from Here

// let olList = document.querySelectorAll('ol>li')
// // console.log(olList)
// let change = [...olList].forEach((value, index) => {
//     let txt = value.innerHTML
//     // console.log(txt)
//     value.innerHTML = `(${index + 1}) ${txt}`
// })

// let ulList = document.querySelectorAll('ul>li')
// console.log(ulList)
// let change2 = [...ulList].forEach((v, i) => {
//     // console.log(v)
//     let txt = v.innerHTML
//     // console.log(txt)
//     v.innerHTML = `(${i + 1}) ${txt}`
// })