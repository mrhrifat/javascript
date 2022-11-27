/*

Here I will do
01) Select
02) Traverse
03) Create
04) Insert
05) Update
06) Delete

*/

// Select
let div = document.getElementById("all-div")
let paragrap = document.getElementsByClassName('lead')
let listGroup = document.getElementsByTagName("ul")
let listItem = document.querySelectorAll('ul>li')
console.log(div, paragrap, listGroup, listItem)

//Traverse
let spreadItem = [...listItem].forEach(li => {
    console.log(li)
})
let changeItemLooks = [...listItem].forEach((li, ind) => {
    let txt = li.innerHTML
    li.innerHTML = `(${ind + 1}) ${txt}`
})

let getParagrap = document.querySelectorAll('.lead')
console.log(getParagrap)
let changeParagraphLooks = [...getParagrap].forEach((p, ind) => {
    let txt = p.innerHTML
    // console.log(txt)
    p.innerHTML = `(${ind + 1}) ${txt}`
})

// Create
function createElement(tagName, className, innerHTML) {
    let nameOfTag = document.createElement(tagName)
    nameOfTag.className = className || ''
    nameOfTag.innerHTML = innerHTML || ''
    return nameOfTag
}
let createList = createElement('li', 'list-group-item', 'ReactJS')
console.log(createList)

//Insert
function appendElement(parent, child) {
    parent.appendChild(child)
}
let listParent = document.getElementById('lists')
let latestList = appendElement(listParent, createList)
// console.log(latestList)

//Create And Insert with Adjacent
let createParagrap = createElement('p', 'lead', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae mollitia quam non qui veritatis ea ipsam officiis reiciendis ? Nobis doloremque iure blanditiis numquam eos mollitia sunt esse tenetur ex corporis!')
console.log(createParagrap)

console.log(div)

// Before Begin
let bb = listParent.insertAdjacentElement('beforebegin', createParagrap)
// After Begin
let ab = listParent.insertAdjacentElement('afterbegin', createParagrap)
// Before End
let be = listParent.insertAdjacentElement('beforeend', createParagrap)
// After End
let ae = listParent.insertAdjacentElement('afterend', createParagrap)

//Update

console.log(listItem)
console.log(listParent) // With ID
let lastListChild = listParent.lastElementChild // Only work with ID
console.log(lastListChild)

setTimeout(function () {
    // console.log(lastListChild.innerHTML)
    // lastListChild.innerHTML = [...listGroup].forEach((li, ind) => {
    //     // console.log(lastListChild.innerHTML + ' Test')
    //     `(${ind + 1})`
    // })

    lastListChild.innerHTML = `(${4}) ` + lastListChild.innerHTML
}, 3000)

// Remove

let createListFive = createElement('li', 'list-group-item', 'GitHub')
console.log(createListFive)
let latestList2 = appendElement(listParent, createListFive)
console.log(listItem) // Why 3 ? Not 5

let lastListChild2 = listParent.lastElementChild
console.log(lastListChild2)


setTimeout(function () {
    lastListChild2.innerHTML = `(${5}) ${lastListChild2.innerHTML}`
    // lastListChild2.style.color = 'green'
    lastListChild2.classList.add('text-success')
}, 5000)

setTimeout(function () {
    lastListChild2.style.color = "red"
    lastListChild2.remove()
}, 7000)

// Clone Node

/*

There are 2 way to clone node
    01) With value
    02) Without value

*/

let firstChild = listParent.firstElementChild
console.log(firstChild)

// let makeCopy = firstChild.cloneNode() // It will just copy node not element
// console.log(makeCopy)
// // listParent.appendChild(makeCopy) // This will add on last
// listParent.insertAdjacentElement('beforebegin', makeCopy)
// console.log(listParent)

// let makeCopy = firstChild.cloneNode(true)
// console.log(makeCopy)
// listParent.insertAdjacentElement('beforebegin', makeCopy)
// console.log(listParent)

setTimeout(function () {
    let makeCopy = listParent.firstElementChild.cloneNode(true)
    console.log(makeCopy)
    console.log(makeCopy.innerHTML)
    let addToFirst = listParent.insertAdjacentElement('beforebegin', makeCopy)
    console.log(addToFirst)
    addToFirst.innerHTML = `(${0}) ` + 'Front End Development'
}, 9000)


// Attribute

let olListParent = document.getElementById('company')
console.log(olListParent.attributes)
console.log(`

//Get Attribute
${olListParent.getAttributeNames()}
${olListParent.getAttributeNode('id')}
${olListParent.getAttribute('class')}

`)

let list1 = document.getElementById('google')

console.log(`

//Get Attribbute
${list1.id}
${list1.className}
${list1.classList}

`)

//Assign Attribute

// list1.name = "google"
// console.log(list1.name = "google") //Name doesn't work


list1.id = "g"
console.log(list1.id = "g") //ID assigned successful

list1.setAttribute('name', 'Google')

// Set Attribute with Node
let anotherAttr = document.createAttribute('title')
anotherAttr.value = 'Hey... Google'
list1.setAttributeNode(anotherAttr)

//Best way to create Attribute
let list2 = document.getElementById('facebook')
list2.setAttribute('title', 'Welcome to Facebook')


// Style

/*

01) To use style in HTML element with DOM, we need to code
value.style.fontSize //Not font-size

02) To push a group of style, create a object of style and assign it
03) Object.assign(value.style.styleObject)

*/
let imamAhmad = document.getElementById('ahmad')
imamAhmad.style.color = 'seagreen'

let styleObject = {
    color: 'red',
    backgroundColor: '#111'
}
let imamTaimiya = document.getElementById('taimiya')
Object.assign(imamTaimiya.style, styleObject)

let parentImam = document.getElementById('imam')
// ;[...parentImam.children].forEach(e => Object.assign(e.style, styleObject)) //To style in every element



// 209 - Event Handling

// Metod 1

// bookbtn.onclick = function (e) {
//     console.log(e.target)
// }

// Method 2

bookbtn.addEventListener('click', function (e) {
    let parentBook = document.getElementById('books')
    let clone = parentBook.lastElementChild.cloneNode(true)
    clone.innerHTML = 'New item added'
    parentBook.appendChild(clone)
    // console.log(clone, parentBook)
})

// function createElementBook(tagName, className, innerText) {
//     let tag = document.createElement(tagName)
//     tag.className = className || ''
//     tag.innerHTML = innerText || ''
//     return tag
// }

// Canvas 

// Make upto whole document

// box.addEventListener('mousemove', function (e) {
//     document.getElementById('x').innerHTML = e.clientX
//     document.getElementById('y').innerHTML = e.clientY
// })

// Make upto box current document
box.addEventListener('mousemove', function (e) {
    document.getElementById('x').innerHTML = e.offsetX
    document.getElementById('y').innerHTML = e.offsetY
})

// // Make upto box current document with Alert
// box.addEventListener('mousemove', function (e) {
//     document.getElementById('x').innerHTML = e.offsetX
//     document.getElementById('y').innerHTML = e.offsetY
//     if (e.offsetX == 50 && e.offsetY == 50) {
//         console.log("50 50")
//     }
// })

// 210 - Event Deligation


carbtn.addEventListener('click', function (e) {
    let parentCar = document.getElementById('cars')
    let clone = parentCar.lastElementChild.cloneNode(true)
    clone.innerHTML = 'New car added'
    parentCar.appendChild(clone)

    // console.log(clone, parentBook)
})


// function createElementCar(tagName = 'li', className = 'list-group-item', innerText = 'Default Item Added') {
//     let tag = document.createElement(tagName)
//     tag.className = className || ''
//     tag.innerHTML = innerText || ''
//     return tag
// }

// carbtn.addEventListener('click', function (e) {
//     let parentCar = document.getElementById('cars')

//     if (parentCar.children != '') {
//         let clone = parentCar.lastElementChild.cloneNode(true)
//         clone.innerHTML = 'New car added'
//         parentCar.appendChild(clone)
//     } else {
//         parentCar.appendChild(createElementCar()) //This can't be Done
//     }
//     // console.log(clone, parentBook)
// })



//This function can remove only preset value not new added value. This is called Event Deligation.
// ;[...cars.children].forEach(e => {
//     e.addEventListener('click', function (event) {
//         event.target.remove()
//     })
// })

//Evenet Deligation Solve
cars.addEventListener('click', function (e) {
    if (this.contains(e.target)) {
        e.target.remove()
    }
})



// 211 - Input Box Event Handling

let getName = document.getElementById('formName')
getName.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        e.preventDefault()
        // console.log(e.target.value)
        document.getElementById('showName').innerHTML = `${e.target.value}`
        e.target.value = ''
    }
})


// 212 - Check Box

// let getLang = document.getElementsByName('language')
// // console.log(getLang)
// let showLang = document.getElementById('showLang')

// let list = []
//     ;[...getLang].forEach(el => {
//         el.addEventListener('change', function (e) {
//             // console.log(e.target)
//             console.log(e.target.checked)
//             if (e.target.checked) {
//                 // console.log(e.target.value)
//                 list.push(e.target.value)
//                 console.log(list)
//                 outputLang(showLang, list)
//             } else {
//                 let removeList = list.indexOf(e.target.value)
//                 // console.log(removeList)
//                 list.splice(removeList, 1)
//                 console.log(list)
//                 outputLang(showLang, list)
//             }
//         })
//     })

// function outputLang(parent, lang) {
//     let res = ''
//     lang.forEach((e, i) => {
//         res += `(${i + 1}) ${e} `
//         console.log(res)
//     })
//     parent.innerHTML = res
// }



let getLang = document.getElementsByName('language')
let showLang = document.getElementById('showLang')
let list = []
    ;[...getLang].forEach(l => {
        l.addEventListener('change', function (e) {
            if (e.target.checked) {
                list.push(e.target.value)
                console.log(list)
                outputLang(showLang, list)
            } else {
                let update = list.indexOf(e.target.value)
                list.splice(update, 1)
                console.log(list)
                outputLang(showLang, list)
            }
        })
    })

function outputLang(parent, list) {
    let result = ''
    list.forEach((element, ind) => {
        result += `(${ind + 1}) ${element}  `
    })
    parent.innerHTML = result
}


// 213 - List 

let listBooks = document.getElementById('listBooks')
listBooks.addEventListener('dblclick', function (e) {
    // console.log(e.target)
    if (this.contains(e.target)) {
        // let innerHTML = e.target.innerHTML
        let innerText = e.target.innerText
        // console.log(innerHTML)
        // console.log(innerText)
        e.target.innerText = ''

        let inputBox = createInputBox(innerText)
        e.target.appendChild(inputBox)
        console.log(inputBox)

        inputBox.addEventListener('keypress', function (ev) {
            if (ev.key == 'Enter') {
                e.target.innerText = ev.target.value
            }
        })
    }
})

function createInputBox(value) {
    let input = document.createElement('input')
    input.className = "form-control"
    input.type = 'text'
    input.value = value
    return input
}

// let listBooks = document.getElementById('listBooks')
// // console.log(listBooks)
// listBooks.addEventListener('dblclick', function (e) {
//     // console.log(e.target)
//     if (this.contains(e.target)) {
//         let innerText = e.target.innerText
//         console.log(innerText)
//         e.target.innerText = ''

//         let inputBox = createInputBox(innerText)
//         // console.log(inputBox)

//         e.target.appendChild(inputBox)

//         inputBox.addEventListener('keypress', function (ev) {
//             if (ev.key == 'Enter') {
//                 e.target.innerText = ev.target.value
//             }
//         })
//     }
// })

// function createInputBox(value) {
//     let input = document.createElement('input')
//     input.type = 'text'
//     input.className = 'form-control'
//     input.value = value
//     return input
// }



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

// 215 - Form Validation

let form = document.getElementById('form')
console.log(form)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    // console.log(e.target)

    let formObject = {}
    let valid = false

        ;[...form].forEach(s => {
            // console.log(s.type, s.name, s.value)
            if (s.type !== 'checkbox') {
                if (s.type !== 'submit') {
                    console.log(s.name)
                    valid = validator(s)
                    if (valid) {
                        formObject[s.name] = s.value
                    }
                }
            }
        })
    if (valid) {
        console.log(formObject)
    } else {
        alert("Plase provide information")
    }
    form.reset()
})

function validator(data) {
    if (!data.value) {
        return false
    }
    return true
}

// // function validator(data) {
// //     for (let e in data) {
// //         if (!e) {
// //             return false
// //         }
// //         return true
// //     }
// // }





// // Form Validation

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

//                         if (s.name == 'email') {
//                             let validEmail = new RegExp(/^([^\d])\w{2,}@(gmail|yahoo|outlook|admin).com$/g)
//                             let value = s.value
//                             let ok = value.match(validEmail)
//                             console.log(ok)
//                         }
//                         // } else {
//                         //     console.log(new Error("Email is not valid"))
//                         // }
//                         formObject[s.name] = s.value
//                     } else {
//                         s.classList.add('is-invalid')
//                         console.log(new Error(e.message))
//                     }
//                 }
//             }
//         })
//     if (valid) {
//         console.log(formObject)
//     }
//     form.reset()
// })

// function validator(data) {
//     if (!data.value) {
//         return false
//     }
//     return true
// }




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

// 217 - AJAX Post

const purl = 'https://jsonplaceholder.typicode.com/posts'
let pform = document.getElementById('pform')

// console.log(ajaxForm)

pform.addEventListener('submit', function (e) {
    e.preventDefault()

    // console.log(e.target)

    console.log(this.title)
    console.log(this.body)

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    // console.log(title, body)

    if (title && body) {
        let object = {
            userId: 420,
            title,
            body
        }


        fetch(purl, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(object)
        })
            .then(response => response.json())
            .then(data => {

                // console.log(data)

                let arr = makeArr(data)

                // console.log(arr)

                let body = document.getElementById('tbody')

                // console.log(table)


                let tr = document.createElement('tr')

                arr.forEach(col => {
                    // console.log(col)
                    let td = document.createElement('td')
                    td.innerHTML = col
                    tr.appendChild(td)
                })
                // console.log(tr)
                body.appendChild(tr)
                // console.log(body)


            })
            .catch(e => console.log(e))


    } else {
        alert("Provide information")
    }
})

function makeArr(data) {
    let arr = []
    for (let i in data) {
        arr.push(`${data[i]}`)
        console.log(`${data[i]}`)
    }
    return arr
}
