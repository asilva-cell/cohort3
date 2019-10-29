
 
class Account {
    constructor (accountName, balance) {
        this.accountName = accountName;
        this.balance = balance;
    }

    deposit (amount) {
        this.balance = this.balance + amount;
        return this.balance;
    }

    withdraw (amount) {
        this.balance = this.balance - amount;
        return this.balance;
    }

    show () {
        console.log(this.balance);
        return this.balance;
    }

}



export {Account};