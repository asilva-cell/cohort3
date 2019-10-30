
 
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
        return this.balance;
    }

};


class AccountController {

    constructor () {
        this.userName= [];
    }

    
    addAccount (userName, accountName, balance) {
        const newAccount = new Account (accountName, balance);
        console.log(newAccount);
        console.log(newAccount.accountName);
        

        // if (this.userName[0].accountName === newAccount.accountName){
        //     console.log('account exists');
        //     return;
        // }else{
            this.userName.push(newAccount);
            console.log(this.userName);
        //};
        return (newAccount);
        // if (objectUser.hasProperty === userName){
        //         console.log(objectUser.userName);
        // return accountName;
    }
        

    
        
    //     // this.balance = this.balance + amount;
    //     // return this.balance;
    // }

    // removeAccount (userName, accountName) {
    //     AccountController[0].remove();
    // }

    // totalBalance () {
        
    // }

    // compareBalance () {
        


};

export {Account, AccountController};