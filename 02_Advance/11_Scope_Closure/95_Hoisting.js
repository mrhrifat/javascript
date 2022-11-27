var a = 100;

//newPrint(a)  //Error

print(10)

var newPrint = print

newPrint(45)

function print(a) {
    console.log(a)
}

print(a)

/*
Creational Phase
a=undefined
newPrint=undefined
print=refID

Executional Phase
print=10
newPrint=45
print=100
*/


/*
Creation Phase

a=undefined
newPrint=undefined
print=ref

Executional Phase
print =100
newPrint=45
print=100

*/
console.log()
var x = 100;
prints("Print: " + 10)
var getPrint = prints
getPrint("Get Print: " + 45)
function prints(x) {
    console.log(x)
}
prints("2nd Print: " + x)

console.log("------------")

/* 
Creational Phase
undefind
10
undefined
45
100

Executional Phase
10
45
100

*/

console.log()
var x = 100;
prints("Print: " + 10)
var getPrint = prints
getPrint("Get Print: " + 45)
function prints(x) {
    console.log(x)
}
prints("2nd Print: " + x)

console.log("------------")