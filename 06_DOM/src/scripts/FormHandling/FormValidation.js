
// // 215 - Form Validation

// let form = document.getElementById('form')
// console.log(form)

// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     // console.log(e.target)

//     let formObject = {}
//     let valid = false

//         ;[...form].forEach(s => {
//             // console.log(s.type, s.name, s.value)
//             if (s.type !== 'checkbox') {
//                 if (s.type !== 'submit') {
//                     console.log(s.name)
//                     valid = validator(s)
//                     if (valid) {
//                         formObject[s.name] = s.value
//                     }
//                 }
//             }
//         })
//     if (valid) {
//         console.log(formObject)
//     } else {
//         alert("Plase provide information")
//     }
//     form.reset()
// })

// function validator(data) {
//     if (!data.value) {
//         return false
//     }
//     return true
// }

// // function validator(data) {
// //     for (let e in data) {
// //         if (!e) {
// //             return false
// //         }
// //         return true
// //     }
// // }