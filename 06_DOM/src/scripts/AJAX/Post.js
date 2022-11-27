// // 217 - AJAX Post

// const purl = 'https://jsonplaceholder.typicode.com/posts'
// let pform = document.getElementById('pform')

// // console.log(ajaxForm)

// pform.addEventListener('submit', function (e) {
//     e.preventDefault()

//     // console.log(e.target)

//     console.log(this.title)
//     console.log(this.body)

//     let title = this.title.value || undefined
//     let body = this.body.value || undefined

//     // console.log(title, body)

//     if (title && body) {
//         let object = {
//             userId: 420,
//             title,
//             body
//         }


//         fetch(purl, {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'Application/JSON'
//             },
//             body: JSON.stringify(object)
//         })
//             .then(response => response.json())
//             .then(data => {

//                 // console.log(data)

//                 let arr = makeArr(data)

//                 // console.log(arr)

//                 let body = document.getElementById('tbody')

//                 // console.log(table)


//                 let tr = document.createElement('tr')

//                 arr.forEach(col => {
//                     // console.log(col)
//                     let td = document.createElement('td')
//                     td.innerHTML = col
//                     tr.appendChild(td)
//                 })
//                 // console.log(tr)
//                 body.appendChild(tr)
//                 // console.log(body)


//             })
//             .catch(e => console.log(e))


//     } else {
//         alert("Provide information")
//     }
// })

// function makeArr(data) {
//     let arr = []
//     for (let i in data) {
//         arr.push(`${data[i]}`)
//         console.log(`${data[i]}`)
//     }
//     return arr
// }
