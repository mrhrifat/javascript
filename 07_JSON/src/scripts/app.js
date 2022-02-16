const data = require("../../JSON/Practical/data/Imam2/imam2.json");
console.log(data);

//Access
let ibnJawji = data.imam[2].knownName;
console.log(ibnJawji);

//Modify
data.imam[2].knownName = "Ibnul Jawji";
console.log(data);

//Delete
// delete data.imam[2].knownName
console.log(data);

// Convert to JS Object
let jsObj = JSON.stringify(data);
console.log(jsObj);

// Convert to JSON
let jsonData = JSON.parse(jsObj);
console.log(jsonData);

// For fetch we need server api

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(e => {
//         console.log(e)
//     })

// fetch("https://icanhazdadjoke.com/slack")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
