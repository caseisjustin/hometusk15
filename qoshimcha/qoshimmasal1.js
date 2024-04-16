class Employee{
    #email;
    constructor(firstname = "user", lastname = "user", age = 0, email = "example@gmail.com"){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.#email = email
    }

    tostring(){
        return `${this.firstname} ${this.lastname} ${this.age} ${this.#email}`
    }

    static getInfo(){
        return this
    }
}

let employee = new Employee(firstname = "Jomav", lastname = undefined, age = 19, email = "hello@gmail.com")

console.log(employee.tostring())

console.log(Employee.getInfo())