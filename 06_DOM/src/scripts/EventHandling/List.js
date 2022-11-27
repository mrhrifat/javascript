
// // 213 - List 

// let listBooks = document.getElementById('listBooks')
// listBooks.addEventListener('dblclick', function (e) {
//     // console.log(e.target)
//     if (this.contains(e.target)) {
//         // let innerHTML = e.target.innerHTML
//         let innerText = e.target.innerText
//         // console.log(innerHTML)
//         // console.log(innerText)
//         e.target.innerText = ''

//         let inputBox = createInputBox(innerText)
//         e.target.appendChild(inputBox)
//         console.log(inputBox)

//         inputBox.addEventListener('keypress', function (ev) {
//             if (ev.key == 'Enter') {
//                 e.target.innerText = ev.target.value
//             }
//         })
//     }
// })

// function createInputBox(value) {
//     let input = document.createElement('input')
//     input.className = "form-control"
//     input.type = 'text'
//     input.value = value
//     return input
// }

// // let listBooks = document.getElementById('listBooks')
// // // console.log(listBooks)
// // listBooks.addEventListener('dblclick', function (e) {
// //     // console.log(e.target)
// //     if (this.contains(e.target)) {
// //         let innerText = e.target.innerText
// //         console.log(innerText)
// //         e.target.innerText = ''

// //         let inputBox = createInputBox(innerText)
// //         // console.log(inputBox)

// //         e.target.appendChild(inputBox)

// //         inputBox.addEventListener('keypress', function (ev) {
// //             if (ev.key == 'Enter') {
// //                 e.target.innerText = ev.target.value
// //             }
// //         })
// //     }
// // })

// // function createInputBox(value) {
// //     let input = document.createElement('input')
// //     input.type = 'text'
// //     input.className = 'form-control'
// //     input.value = value
// //     return input
// // }