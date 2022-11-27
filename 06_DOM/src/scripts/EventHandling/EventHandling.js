// // 209 - Event Handling

// // Metod 1

// // bookbtn.onclick = function (e) {
// //     console.log(e.target)
// // }

// // Method 2

// bookbtn.addEventListener('click', function (e) {
//     let parentBook = document.getElementById('books')
//     let clone = parentBook.lastElementChild.cloneNode(true)
//     clone.innerHTML = 'New item added'
//     parentBook.appendChild(clone)
//     // console.log(clone, parentBook)
// })

// // function createElementBook(tagName, className, innerText) {
// //     let tag = document.createElement(tagName)
// //     tag.className = className || ''
// //     tag.innerHTML = innerText || ''
// //     return tag
// // }

// // Canvas 

// // Make upto whole document

// // box.addEventListener('mousemove', function (e) {
// //     document.getElementById('x').innerHTML = e.clientX
// //     document.getElementById('y').innerHTML = e.clientY
// // })

// // Make upto box current document
// box.addEventListener('mousemove', function (e) {
//     document.getElementById('x').innerHTML = e.offsetX
//     document.getElementById('y').innerHTML = e.offsetY
// })

// // // Make upto box current document with Alert
// // box.addEventListener('mousemove', function (e) {
// //     document.getElementById('x').innerHTML = e.offsetX
// //     document.getElementById('y').innerHTML = e.offsetY
// //     if (e.offsetX == 50 && e.offsetY == 50) {
// //         console.log("50 50")
// //     }
// // })

