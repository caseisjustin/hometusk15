class Magic{
    replace(a, b){
        return [a, b] = [b, a]
    }

    length(data){
        let count = 0
        for (const i in data) {
            count++
        }
        return count
    }

    toUpperCase(str){
        let res = ""
        for (const i in str) {
            if(str.charCodeAt(i) > 90){
                res += String.fromCharCode(str.charCodeAt(i)-32)
            }
            else{
                res += str[i]
            }
        }
        return res
    }

    repeat(data, n){
        let res = []
        for(let i = 0; i<n; i++){
            res.push(data)
        }
        return res.toString().split(",").join(" ")
    }

    count(str){
        str = str.split(" ")
        str = str.join("")
        let res = new Set(str)
        let r = {}
        for(let i = 0; i < this.length(str); i++)
            r[str[i]] = 0
        
        for(let i = 0; i < this.length(str); i++){
            res.forEach(j => {
                if(str[i] == j){
                    r[j] += 1
                }
            });
        }
        return r
    }
}


let magic = new Magic()

console.log(magic.replace(5, 4))

console.log(magic.length("abcd"))
console.log(magic.length([1, 3, 5, 7, 5, 8, 6, 9]))

console.log(magic.toUpperCase("hello"))


console.log(magic.repeat("SALOM", 3))

console.log(magic.count("hello world"))