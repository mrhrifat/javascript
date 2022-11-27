// // 203 - Creat DOM Elements

// /*

// 01) Manipulation
//     01) Select
//     02) Search
//     03) Create
//     04) Update
//     05) Delete

// */

// //Create Element in Literal

// //Create Tag, Class, InnerHTML
// let liTag = document.createElement('li')
// liTag.className = "list-group-item"
// liTag.innerHTML = "Four"
// liTag.setAttribute("Title", "Create with DOM")

// //Append It
// let getOl = document.getElementById('ol')
// getOl.appendChild(liTag) //Use appendChild not append
// console.log(liTag)
// console.log(getOl)


// // // Create Element Faster with Function 
// // function createElement(tagName, clsName, innerText) {
// //     let tag = document.createElement(tagName)
// //     tag.className = clsName || ''
// //     tag.innerHTML = innerText || ''
// //     return tag
// // }

// // let newChild = createElement("li", "list-group-item", "Five")
// // console.log(newChild)

// // //Append Fuction 
// // function appendElement(parent, child) {
// //     parent.appendChild(child)
// // }

// // // Append can be done only with Id
// // let parent = document.getElementById("ol")
// // console.log(parent)
// // appendElement(parent, newChild)

// // // appendElement("ul", newElementForUl)

// //Create Element

// let parent = document.getElementById("second-ul")

// let newChild = createElement("li", "list-group-item", "ReactJS")
// appendElement(parent, newChild)

// function createElement(tagName, className, innerText) {
//     let tag = document.createElement(tagName)
//     tag.className = className || ''
//     tag.innerHTML = innerText || ''
//     return tag
// }
// function appendElement(parent, child) {
//     parent.appendChild(child)
// }


//From All
// Create
function createElement(tagName, className, innerHTML) {
    let nameOfTag = document.createElement(tagName)
    nameOfTag.className = className || ''
    nameOfTag.innerHTML = innerHTML || ''
    return nameOfTag
}
let createList = createElement('li', 'list-group-item', 'ReactJS')
console.log(createList)