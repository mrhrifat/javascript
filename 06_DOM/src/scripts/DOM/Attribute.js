// // Attribute

// let olListParent = document.getElementById('company')
// console.log(olListParent.attributes)
// console.log(`

// //Get Attribute
// ${olListParent.getAttributeNames()}
// ${olListParent.getAttributeNode('id')}
// ${olListParent.getAttribute('class')}

// `)

// let list1 = document.getElementById('google')

// console.log(`

// //Get Attribbute
// ${list1.id}
// ${list1.className}
// ${list1.classList}

// `)

// //Assign Attribute

// // list1.name = "google"
// // console.log(list1.name = "google") //Name doesn't work


// list1.id = "g"
// console.log(list1.id = "g") //ID assigned successful

// list1.setAttribute('name', 'Google')

// // Set Attribute with Node
// let anotherAttr = document.createAttribute('title')
// anotherAttr.value = 'Hey... Google'
// list1.setAttributeNode(anotherAttr)

// //Best way to create Attribute
// let list2 = document.getElementById('facebook')
// list2.setAttribute('title', 'Welcome to Facebook')