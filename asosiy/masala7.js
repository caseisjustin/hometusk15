class Box{
    constructor(len, width, height){
        this.len = len
        this.width = width
        this.heigth = height
    }
    
    get getVolume(){
        return this.len * this.width * this.heigth
    }
}

function boxes(arr){
    let res = 0
    for(let i = 0; i < arr.length; i++){
        res += arr[i].getVolume
    }
    return `Total result: ${res}`
}

let box1 = new Box(3, 3, 4)
let box2 = new Box(12, 12, 12)
let box3 = new Box(5, 15, 17)
let box4 = new Box(7, 2, 47)
let arrOfBooks = [box1, box2, box3, box4]

console.log(box1.getVolume)
console.log(box2.getVolume)
console.log(box3.getVolume)
console.log(box4.getVolume)

console.log(boxes(arrOfBooks))