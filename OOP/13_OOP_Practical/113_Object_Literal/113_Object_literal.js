var obj = {
    width: 10,
    height: 20,

    print: function () {
        console.log("I am a function")
        console.log("My Height is: " + this.height)
        console.log("My Width is: " + this.width)
    }

}
obj.print()
obj.width


var obj2 = {
    width: 300,
    height: 100,
    show: obj.print
}
console.log(obj2.show)
obj2.show()


var newObj={
    r:3,
    draw: function(){
        console.log("The value of r: "+this.r)
        console.log("The value of PI: "+Math.PI.toFixed(2))
    }
}
newObj.draw()