
// // 214 - Form Handling

// let form = document.getElementById('form')
// console.log(form)

// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     // console.log(e.target)

//     let formObject = {}
//         ;[...form].forEach(s => {
//             // console.log(s.type, s.name, s.value)
//             if (s.type !== 'checkbox') {
//                 if (s.type !== 'submit') {
//                     console.log(s.name)

//                     formObject[s.name] = s.value
//                 }
//             }
//         })
//     console.log(formObject)
//     form.reset()
// })