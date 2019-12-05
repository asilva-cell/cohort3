//  this file contain the classes to create and manade the accounts
class Account {
	constructor(key, accountName, balance) {
		this.key = Number(key);
		this.accountName = accountName;
		this.balance = balance;
	}

	deposit(amount) {
		this.balance = this.balance + amount;
		return this.balance;
	}

	withdraw(amount) {
		let withdraw = this.balance - amount;
		if (withdraw >= 0) {
			this.balance = withdraw;
			return withdraw;
		} else {
			return false;
		}
	}
}

class AccountController {
	constructor() {
		this.message = "";
		this.userAccounts = [];
		this.key = 0;
	}

	addAccount(accountName, balance) {
		this.key++;
		const newAccount = new Account(this.key, accountName, balance);
		this.userAccounts.push(newAccount);
		this.message = `A ${accountName} account has been created.`;
	}

	checkAccountExists(accountNameToCheck) {
		for (let accountObj of this.userAccounts) {
			if (accountObj.accountName === accountNameToCheck) {
				this.message = `${accountNameToCheck} account already exists.`;
				return true;
			}
		}
		return false;
	}

	removeAccount(accountKey) {
		let accountToRemove;
		console.log(this.userAccounts);
		this.userAccounts.forEach(account => {
			if (account.key === accountKey) {
				accountToRemove = account;
			}
		});
		this.userAccounts.splice(this.userAccounts.indexOf(accountToRemove), 1);
		this.message = `The ${accountToRemove.accountName} account was deleted.`;
		console.log(this.userAccounts);
	}

	getAccountIndex(accountName) {
		let accounObject;
		this.userAccounts.forEach(key => {
			if (key.accountName === accountName) {
				accounObject = key;
			}
		});
		return this.userAccounts.indexOf(accounObject);
	}

	operationControl(transaction, amount, accountIndex) {
		let accountName = this.userAccounts[accountIndex].accountName;

		if (transaction === "deposit") {
			this.userAccounts[accountIndex].deposit(amount);

			this.message = `$${amount} have been deposited to your ${accountName} account.`;
			return this.userAccounts[accountIndex].balance;
		} else {
			let withdraw = this.userAccounts[accountIndex].withdraw(amount);
			if (withdraw === false) {
				this.message =
					"There is not enough fund in the selected account.";
				return;
			} else {
				this.balance = withdraw;
				this.message = `$${amount} have been withdrawed from your ${accountName} account.`;
				return this.userAccounts[accountIndex].balance;
			}
		}
	}

	totalBalance() {
		let totalBalance = this.userAccounts.reduce(
			(accumulator, user) => accumulator + user.balance,
			0
		);
		return totalBalance;
	}

	maxBalance() {
		this.userAccounts.sort(
			(account1, account2) => account2.balance - account1.balance
		);
		return this.userAccounts[0];
	}

	minBalance(arrayBalance) {
		this.userAccounts.sort(
			(account1, account2) => account2.balance - account1.balance
		);
		let lastItem = this.userAccounts.length - 1;
		return this.userAccounts[lastItem];
	}
}

export { Account, AccountController };
