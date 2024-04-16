class BankAccount{
    constructor(ownerName, balance, accountNumber){
        this.ownerName = ownerName
        this.balance = balance
        this.accountNumber = accountNumber
    }
    
    deposit(amount){
        if((typeof amount) != "number")
            return `\n${this.ownerName} Iltimos son kiriting!!!`
        this.balance += amount
        return `\n${this.ownerName} ${this.balance} som pul solindi.\nJami ${this.balance} som`
    }

    withdraw(amount){
        if(this.balance < amount)
            return `\n${this.ownerName} Balancda harajat yetarli emas!`
        this.balance -= amount
        return `\n${this.ownerName} ${amount} som. Muvafaqiyatli yechib olindi! Jami ${this.balance}`
    }

    showBalance(){
        if(this.balance < 100000)
            return `\n${this.ownerName} ${this.balance} som pulingiz bor. Juda kamku? Toliqlaysizmi 😁`
        else
            return `\n${this.ownerName} brat ${this.balance} som pul mavjud.`
    }
}


let acc1 = new BankAccount("Sherali", 0, "9284718303")
let acc2 = new BankAccount("Jorabek", 0, "9845+18975")

console.log(acc1.deposit(200_000))
console.log(acc2.deposit(20_000))
console.log(acc2.deposit(100_000))
console.log(acc1.deposit(20_000))
console.log(acc2.deposit(10000))


console.log(acc1.withdraw(20000))
console.log(acc2.withdraw(20000))
console.log(acc2.withdraw(20000))
console.log(acc2.withdraw(20000))


console.log(acc1.showBalance())
console.log(acc2.showBalance())