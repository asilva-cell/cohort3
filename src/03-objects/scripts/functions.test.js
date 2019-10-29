import {Account} from './functions.js';

const checkingAccount = new Account ('maria', 25000);
test('check starting balance', () => {
   expect(checkingAccount.balance).toBe(25000);
});

test('check added balance', () => {
    expect(checkingAccount.deposit(10000)).toBe(35000);
 });

 test('check substracted balance', () => {
    expect(checkingAccount.withdraw(5000)).toBe(30000);
 });

 test('check show balance', () => {
    expect(checkingAccount.show()).toBe(30000);
 });