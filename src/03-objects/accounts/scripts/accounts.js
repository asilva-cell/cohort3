//  this file contain the classes to create and manade the accounts
class Account {
	constructor(accountName, balance) {
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
	}

	addAccount(accountName, balance) {
		const newAccount = new Account(accountName, balance);
		this.userAccounts.push(newAccount);
		this.message = `A ${accountName} has been created.`;
	}

	checkAccountExists(accountToCheck) {
		for (let accountObj of this.userAccounts) {
			if (accountObj.accountName === accountToCheck) {
				return true;
			}
		}
		return false;
	}

	removeAccount(accountName) {
		let accountToRemove;
		this.userAccounts.forEach(key => {
			if (key.accountName === accountName) {
				accountToRemove = key;
			}
		});
		this.userAccounts.splice(this.userAccounts.indexOf(accountToRemove), 1);
		this.message = `The ${accountName} account was deleted.`;
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