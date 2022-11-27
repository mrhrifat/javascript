// console.log(document.body)
// console.dir(document.body)

// /*

// 01) DOM can select an HTML object in 4 ways
//     01) Id
//     02) Class
//     03) Tag Name
//     04) Name (Attribue)

// */
// let head = document.getElementById('title')
// let para = document.getElementsByClassName('lead')
// let ol = document.getElementsByTagName('ol')
// let li = document.getElementsByName('list-item-one')
// console.log(head)
// console.log(para)
// console.log(ol)
// console.log(li)

// // Sectors 2
// let headQ = document.querySelector('#title')
// let paraQ = document.querySelector('.lead')
// let paraQAll = document.querySelectorAll('.lead')
// let olQ = document.querySelector('ol')
// let liQ = document.querySelectorAll('li')
// let liQ1 = document.querySelector('[name=list-item-one]')

// console.log(headQ)
// console.log(paraQ)
// console.log(paraQAll)
// console.log(olQ)
// console.log(liQ)
// console.log(liQ1)

// // 200 - Method vs Query
// let li1 = document.getElementsByTagName('li') //Element [Specific HTML Node]
// let li2 = document.querySelectorAll('li') //Node [It can be Documenet Node/Text Node/ Comment Node]
// console.log(li1)
// console.log(li2)
// console.log(li1.constructor.name)
// console.log(li2.constructor.name)

// let olC = document.querySelector('ol')
// console.log(olC.children)
// console.log(olC.childNodes)