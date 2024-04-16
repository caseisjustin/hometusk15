class Person{
    constructor(fname, lname){
        this.fname = fname
        this.lname = lname
        this.fullName = this.fname + " " + this.lname
    }

    get fullName(){
        let fullName = this.fname + " " + this.lname
        return fullName
    }

    set fullName(fullName){
        this.fname = fullName.split(" ")[0]
        this.lname = fullName.split(" ")[1]
    }

    set firstName(firstName){
        this.fname = firstName
        this.fullname = this.fname + " " + this.lname
    }

    set lastName(lastName){
        this.lname = lastName
        this.fullName = this.fname + " " + this.lname
    }

    get firstName(){
        return this.fname
    }

    get lastName(){
        return this.lname
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName);
person.lastName = "Peterson";
console.log(person.fullName);
person.fullName = "Nikola Tesla";
console.log(person.firstName);
console.log(person.lastName)





// class Ok{
//     constructor(kosh){
//         this.kosh = kosh
//     }

//     set sosh(ozgar){
//         this.kosh = ozgar
//     }
// }

// let ok = new Ok("helo")
// console.log(ok.kosh)