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
