// It will return Window Object
function Shape() {
    this.print = function () {
        console.log(this)
    }
}
var s1 = new Shape()
var s2 = s1.print
s2()

// Class won't print Window Object. It return undefined.
class Shape2 {
    print() {
        console.log(this)
    }
}
var s3 = new Shape2()
var s4 = s3.print
s4()