function paskal(n){
    let res = ""
    let star = n
    for(let i = 0; i < star; i++){
        for(let j = 1; j <= star - i; j++){
            res += " "
        }
        let num = 1
        for(let j = 0; j <= i; j++){
            res += num + " "
            num = num * (i - j)/(j+1)
        }
        res += "\n"
    }
    console.log(res)
}

paskal(14)