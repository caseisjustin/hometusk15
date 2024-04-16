class Square{
    constructor(num){
        this.num = num
    }

    get squaregetter(){
        this.num = ""+this.num
        this.num = this.num.split("")
        for(let i = 0; i<this.num.length; i++){
            this.num[i] = this.num[i]**2
        }
        this.num = this.num.join("")
        return this.num
    }

    set sqauresetter(num){
        this.num = num
    }
}


let n = new Square(3219)
console.log(n.squaregetter)
n.sqauresetter = 3221
console.log(n.squaregetter)