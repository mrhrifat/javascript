import Area from "./Area"

class Circle extends Area {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }
    calcualte() {
        return (2 * Math.PI * this.radius).toFixed(2)
    }
    ciclePrint() {
        console.log()
        console.log("The area is: " + this.calcualte())
        console.log(`Success
        ${this.color}, ${this.radius}`)
    }
}
export default Circle