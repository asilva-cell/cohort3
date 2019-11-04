import {Account, AccountController} from './accounts.js';

const account1 = new Account ('checking', 5000);
const account2 = new Account ('savings', 25000);
test('check starting balance', () => {
   expect(account1.balance).toBe(5000);
   expect(account2.balance).toBe(25000)
});

test('check added balance', () => {
    expect(account1.deposit(10000)).toBe(15000);
    expect(account2.deposit(0)).toBe(25000);
 });

 test('check if withdraw is possible', () => {
    expect(account1.withdraw(5000)).toBe(10000);
    expect(account2.withdraw(5000)).toBe(20000);
    expect(account2.withdraw(20001)).toBe(false);
    expect(account2.balance).toBe(20000);
 });



//  EXERCISE 130.C
const controller1 = new AccountController();


test('check create account ', () => {
   controller1.addAccount('checking', 50);
   expect(controller1.userAccounts[0].accountName).toBe('checking');
   expect(controller1.userAccounts[0].balance).toBe(50);

   controller1.addAccount('saving', 100);
   expect(controller1.userAccounts[1].accountName).toBe('saving');
   expect(controller1.userAccounts[1].balance).toBe(100);
});

test('check if account exits does not create it', () => {
   
   expect(controller1.checkAccountExists('saving')).toBe(true);
   expect(controller1.checkAccountExists('line of credict')).toBe(false);

   controller1.addAccount('line of credict', 150);
   expect(controller1.checkAccountExists('line of credict')).toBe(true);
 
});

test('check remove account', () => {
   let userAccountsLength = controller1.userAccounts.length;
   controller1.removeAccount('checking');
   expect(userAccountsLength).toEqual(userAccountsLength--);
});

test('check getting account index with name', () => {
   // [ Account { accountName: 'saving', balance: 100 },
   // Account { accountName: 'line of credict', balance: 150 } ]
   
   expect(controller1.getAccountIndex('saving')).toEqual(0);
   expect(controller1.getAccountIndex('line of credict')).toEqual(1);
});

test('check control of deposit and withdraw', () => {
   controller1.operationControl('deposit', 50, 0)
   expect(controller1.userAccounts[0].balance).toEqual(150);

   controller1.operationControl('withdraw', 50, 1)
   expect(controller1.userAccounts[1].balance).toEqual(100);

   controller1.operationControl('withdraw', 101, 1);
   expect(controller1.userAccounts[1].balance).toEqual(100);
   expect(controller1.message).toBe('There is not enough fund in the selected account.')
   

});

test('check total balance', () => {
   controller1.addAccount('checking', 50);
   expect(controller1.totalBalance()).toEqual(300);
});

test('check max balance', () => {
   let maxBalanceObject = controller1.maxBalance()
   expect(maxBalanceObject.balance).toEqual(150);
});

test('check min balance', () => {
   let minBalanceObject = controller1.minBalance()
   expect(minBalanceObject.balance).toEqual(50);
});


