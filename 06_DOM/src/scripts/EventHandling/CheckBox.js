// // 212 - Check Box

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
//         res += `(${i + 1}) ${e}            `
//         console.log(res)
//     })
//     parent.innerHTML = res
// }




// let getLang = document.getElementsByName('language')
// let showLang = document.getElementById('showLang')
// let list = []
//     ;[...getLang].forEach(l => {
//         l.addEventListener('change', function (e) {
//             if (e.target.checked) {
//                 list.push(e.target.value)
//                 console.log(list)
//                 outputLang(showLang, list)
//             } else {
//                 let update = list.indexOf(e.target.value)
//                 list.splice(update, 1)
//                 console.log(list)
//                 outputLang(showLang, list)
//             }
//         })
//     })

// function outputLang(parent, list) {
//     let result = ''
//     list.forEach((element, ind) => {
//         result += `(${ind + 1}) ${element}  `
//     })
//     parent.innerHTML = result
// }
