// // 210 - Event Deligation


// carbtn.addEventListener('click', function (e) {
//     let parentCar = document.getElementById('cars')
//     let clone = parentCar.lastElementChild.cloneNode(true)
//     clone.innerHTML = 'New car added'
//     parentCar.appendChild(clone)

//     // console.log(clone, parentBook)
// })


// // function createElementCar(tagName = 'li', className = 'list-group-item', innerText = 'Default Item Added') {
// //     let tag = document.createElement(tagName)
// //     tag.className = className || ''
// //     tag.innerHTML = innerText || ''
// //     return tag
// // }

// // carbtn.addEventListener('click', function (e) {
// //     let parentCar = document.getElementById('cars')

// //     if (parentCar.children != '') {
// //         let clone = parentCar.lastElementChild.cloneNode(true)
// //         clone.innerHTML = 'New car added'
// //         parentCar.appendChild(clone)
// //     } else {
// //         parentCar.appendChild(createElementCar()) //This can't be Done
// //     }
// //     // console.log(clone, parentBook)
// // })



// //This function can remove only preset value not new added value. This is called Event Deligation.
// // ;[...cars.children].forEach(e => {
// //     e.addEventListener('click', function (event) {
// //         event.target.remove()
// //     })
// // })

// //Evenet Deligation Solve
// cars.addEventListener('click', function (e) {
//     if (this.contains(e.target)) {
//         e.target.remove()
//     }
// })