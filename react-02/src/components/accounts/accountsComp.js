import React from "react";
import "../main.css";
import { AccountController } from "./accountsLogic";
import AccountCardComp from "./accountsCards";
import SelectComp from "../selectComp";

class AccountControllerComp extends React.Component {
	constructor(props) {
		super();
		this.accountController = new AccountController();
		this.state = {
			accountName: "",
			totalBal: 0,
			maxBal: "N/A",
			minBal: "N/A",
			accountBal: 0,
			transaction: "deposit",
			selectedAccount: "",
			balanceInp: 0
		};
		this.addAccount = this.addAccount.bind(this);
		this.onChange = this.onChange.bind(this);
		this.operationControl = this.operationControl.bind(this);
		this.updateDisplays = this.updateDisplays.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	addAccount(e) {
		if (this.state.accountName === "") {
			this.accountController.message =
				"Please enter a valid account name.";
			this.setState({ accountName: "" });
			return;
		}
		let checkAccount = this.accountController.checkAccountExists(
			this.state.accountName
		);
		if (checkAccount === false) {
			this.accountController.addAccount(
				this.state.accountName,
				this.state.accountBal
			);
		}
		this.updateDisplays();
		this.setState({ accountName: "", accountBal: 0 });
	}
	deleteAccount = key => {
		this.accountController.removeAccount(key);
		this.setState({ accountName: "" });
		if (this.accountController.userAccounts.length === 1) {
			this.setState({ totalBal: "", maxBal: "", minBal: "" });
			return;
		}
		this.updateDisplays();
	};
	operationControl(e) {
		this.accountController.operationControl(
			this.state.transaction,
			Number(this.state.balanceInp),
			this.accountController.getAccountIndex(this.state.selectedAccount)
		);
		this.updateDisplays();
	}
	updateDisplays() {
		const totalBal = this.accountController.totalBalance();
		const maxBal = this.accountController.maxBalance();
		const minBal = this.accountController.minBalance();
		this.setState({
			totalBal: totalBal,
			maxBal: maxBal,
			minBal: minBal
		});

		return;
	}

	render() {
		let allAccounts = this.accountController.userAccounts;
		let allCards = allAccounts.map(account => {
			return (
				<AccountCardComp
					key={account.key}
					account={account}
					delete={this.deleteAccount}
				/>
			);
		});

		return (
			<div className="accountControllerComp">
				<div className="card-deck">{allCards}</div>
				<div className="container">
					{/* REPORT PANEL */}
					<div className="panel report">
						<p name="total">
							Your Total Balance: {this.state.totalBal}
						</p>
						<p name="maxBalance">
							Your Maximum Balance: {this.state.maxBal}
						</p>
						<p name="minBalance">
							Your Minimum Balance: {this.state.minBal}
						</p>
					</div>
					{/* ACCOUNT PANEL */}
					<div className="panel">
						<h3>Your Accounts</h3>
						<div className="form">
							<div>
								Account Name:{" "}
								<input
									className="input"
									name="accountName"
									type="text"
									placeholder="Example: Checking"
									value={this.state.accountName}
									onChange={this.onChange}
									required
								/>
							</div>
							<div>
								Opening Balance:{" "}
								<input
									className="input"
									name="accountBal"
									type="number"
									min="0"
									value={this.state.accountBal}
									placeholder="0.00"
									onChange={this.onChange}
									required
								/>
							</div>
							<div>
								<input
									className="btn btn-primary btn-sm"
									type="button"
									value="Create Account"
									onClick={e => {
										this.addAccount(e);
									}}
								/>
							</div>

							<p>{this.accountController.message}</p>
						</div>
					</div>
					{/* TRANSACTION PANEL */}
					<div className="panel">
						<div>
							<h3>Quick Transactions</h3>
							Select Account
							<select
								name="selectedAccount"
								onChange={this.onChange}
							>
								<option value="default">Select Account</option>
								{allAccounts.map(account => (
									<SelectComp
										key={account.key}
										account={account}
									/>
								))}
							</select>
							<br />
							Type of Transactions:
							<select
								required
								name="transaction"
								onChange={this.onChange}
							>
								<option value="deposit">Deposit</option>
								<option value="withdraw">Withdraw</option>
							</select>
							<br />
							$:
							<input
								className="input"
								name="balanceInp"
								type="number"
								min="0"
								placeholder="0.00"
								onChange={this.onChange}
							/>
							<br />
							<input
								className="btn btn-primary btn-sm"
								type="button"
								value="Submit"
								onClick={this.operationControl}
							/>
							<p>{this.accountController.message}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AccountControllerComp;
