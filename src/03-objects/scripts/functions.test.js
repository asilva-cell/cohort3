import {Account, AccountController} from './functions.js';

const checkingAccount = new Account ('checking', 25000);
const savingAccount = new Account ('savings', 25000);
test('check starting balance', () => {
   expect(checkingAccount.balance).toBe(25000);
   expect(savingAccount.balance).toBe(25000)
});

test('check added balance', () => {
    expect(checkingAccount.deposit(10000)).toBe(35000);
    expect(savingAccount.deposit(10000)).toBe(35000);
 });

 test('check substracted balance', () => {
    expect(checkingAccount.withdraw(5000)).toBe(30000);
    expect(savingAccount.withdraw(5000)).toBe(30000);
 });

 test('check show balance', () => {
    expect(checkingAccount.show()).toBe(30000);
    expect(savingAccount.show()).toBe(30000);
 });

//  EXERCISE 130.C
const controller1 = new AccountController();

test('check create account1', () => {
   console.log(controller1);
   let account1 = controller1.addAccount('maria', 'checking', 10);
   expect(account1.accountName).toBe('checking');
   console.log(account1);

   let account2 = controller1.addAccount('maria', 'saving', 5);
   expect(account2.accountName).toBe('saving');
   console.log(account2);

   let account3 = controller1.addAccount('maria', 'saving', 50);
   expect(account3.accountName).toBe('saving');
   console.log(account3);
});

