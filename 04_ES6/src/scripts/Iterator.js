// 151 - Iterator

/*

01) Iterator is an object
02) Iterator can be done if the object is iterable
03) Array, String is iterable
04) Object is not iterable
05) Iterator hold data is closure
06) Iterator can start and stop anywhere when Iterator is running
07) Every has two method 
    01) Next
    02) Done

*/

let arr = [1, 2, 3, 4, 5]

for (let x of arr) {
    console.log(x)
}

// Create Iterator
let createIterator = collection => {
    let i = 0
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}
let r1 = createIterator(arr)
console.log(r1.next())
console.log(r1.next())
console.log(r1.next())
console.log(r1.next())
console.log(r1.next())
console.log(r1.next())
console.log(r1.next())


var str = "Assalamu Alaikum"
var createIterator2 = collection => {
    var i = 0;
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}
var r2 = createIterator2(str)
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())
console.log(r2.next())


console.log("-------------")


// 152 - Iterator with Symbol
let arr2 = [1, 2, 3, 4, 5]
var str2 = "Assalamu Alaikum"

var r3 = arr2[Symbol.iterator]()
var r4 = str2[Symbol.iterator]()
console.log(r3.next())
console.log(r3.next())
console.log(r3.next())
console.log(r3.next())
console.log(r3.next())
console.log(r3.next())
console.log(r3.next())

console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())
console.log(r4.next())

console.log("-------------")

// 145 - Custom Iterable Object
// var obj = {
//     start: 1,
//     end: 5
// } // This Object Can't Be Iteratble Now

var obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]() {
        var currentValue = this.start
        const self = this
        return {
            next() {
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefined : currentValue++
                }
            }
        }
    }
}
for (var i of obj) {
    console.log(i)
}

var r5 = obj[Symbol.iterator]()
console.log(r5.next())
console.log(r5.next())
console.log(r5.next())
console.log(r5.next())
console.log(r5.next())
console.log(r5.next())
console.log(r5.next())

console.log("-------------")

// 154 - Geneator
/*

01) Generator return us a iterator
02) A (*) sign after function make it generator

*/
var createIterator3 = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function* () {
        var currentValue = this.start
        while (currentValue <= this.end) {
            yield currentValue++
        }
    }
}
for (var i of createIterator3) {
    console.log(i)
}
var r5 = createIterator3[Symbol.iterator]()
console.log(r5.next())
console.log(r5.next())
console.log(r5.next())
console.log(r5.next())
console.log(r5.next())
console.log(r5.next())
console.log(r5.next())
console.log("-------------")

// 155 - Set

// var s1 = new Set()
var s1 = new Set([1, 2, 3, 4])
console.log(s1)

s1.add(3)
s1.add(4)
s1.add(5)
s1.add(6)
s1.add(7)
console.log(s1)

console.log(s1.delete(6))
console.log(s1.has(5))
console.log(s1.keys())
console.log(s1.values())
console.log(s1.entries())
console.log(s1.size)
// console.log(s1.clear())


// 156 - Map
// var m1 = new Map()

var m1 = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])
console.log(m1)
console.log(m1.size)
console.log(m1.set('d', 40))
console.log(m1.entries())
console.log(m1.keys())
console.log(m1.values())
console.log(m1.delete("d"))
// console.log(m1.clear())

m1.forEach((k, v) => {
    console.log(k, v)
})
for (var i of m1) {
    console.log(i)
}

// 157 - Weak Set

//Problem
var obj9 = { a: 10, b: 20 }
var obj10 = { x: 100, y: 200 }
var s2 = new Set([obj9, obj10])
console.log(s2)

obj9 = null
console.log(s2)

//Solution
var obj11 = { a: 10, b: 20 }
var obj12 = { x: 100, y: 200 }
var s3 = new WeakSet([obj11, obj12])
console.log(s3)
console.log(s3.has(obj11))
console.log(s3.has(obj12))

// obj11 = null
// console.log(s3)

// Set To Array
// var arr = [...s2]
// console.log(arr)

// var arr2 = [...s3]
// console.log(arr2)

// 159 - Weak Map
let a = ['m', 10]
let b = ['n', 20]
var m4 = new WeakMap()
m4.set(a)
m4.set(b)
console.log(m4)
// a = null
console.log(m4.get(a))
console.log(m4.has(a))
console.log(m4.has(b))