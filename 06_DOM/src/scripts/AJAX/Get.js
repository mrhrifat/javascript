

// // 216 - AJAX Get

// const url = 'https://jsonplaceholder.typicode.com/users'
// let userbtn = document.getElementById('userbtn')

// // function getData() {
// //     fetch(url)
// //         .then(res => res.json())
// //         .then(data => data)
// // }
// userbtn.addEventListener('click', function (event) {
//     // fetch(url)
//     //     .then(res => res.json())
//     //     .then(data => console.log(data))
//     //     .catch(e => e.message)
//     // // console.log(event.data)

//     async function getData(url) {
//         try {
//             let response = await fetch(url)
//             let data = await response.json()
//             console.log(data)

//             data.map(user => {
//                 console.log(user.name)
//                 let name = [user.name]
//                 name.forEach(u => {
//                     let lists = createGetList(name)
//                     console.log(lists)
//                     let parent = document.getElementById('users')
//                     parent.appendChild(lists)
//                 })
//             })


//         } catch (e) {
//             console.log(new Error(e.message))
//         }
//     }
//     getData(url)


// })

// function createGetList(data) {
//     let list = createElement('li')
//     list.className = 'list-group-item'
//     list.innerHTML = data
//     return list
// }


// 216 - AJAX Get

const url = 'https://jsonplaceholder.typicode.com/users'
let userbtn = document.getElementById('userbtn')

userbtn.addEventListener('click', function (event) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.map(user => {
                console.log(user.name)
                let nameArr = [user.name]
                console.log(nameArr)
                nameArr.forEach(list => {
                    let parent = document.getElementById('users')
                    let value = createGetList(list)
                    console.log(value)
                    parent.appendChild(value)
                })
            })
        })
        .catch(e => e.message)

})

function createGetList(data) {
    let list = createElement('li')
    list.className = 'list-group-item'
    list.innerHTML = data
    return list
}