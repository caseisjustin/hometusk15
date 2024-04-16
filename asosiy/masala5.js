class Circle{
    constructor(radius){
        this.radius = radius
    }

    get areageter(){
        return 3.141599 * (this.radius**2)
    }

    get perimgeter(){
        return 2 * 3.141599 * this.radius
    }
}


let circle1 = new Circle(45)
let circle2 = new Circle(15)
let circle3 = new Circle(72)

console.log(circle1.areageter)
console.log(circle2.areageter)
console.log(circle3.areageter)


console.log(circle1.perimgeter)
console.log(circle2.perimgeter)
console.log(circle3.perimgeter)