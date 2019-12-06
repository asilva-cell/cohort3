import React from "react";
import "./accounts.css";
import { AccountController } from "./accountsLogic";
import AccountCardComp from "./accountsCards";
import SelectComp from "./selectComp";

class AccountControllerComp extends React.Component {
	constructor(props) {
		super();
		this.accountController = new AccountController();
		this.state = {
			accountName: "",
			accountBal: 0,
			accountExists: "",
			counter: 0,
			transaction: "deposit",
			selectedAccount: "",
			balanceInp: 0
		};
		this.addAccount = this.addAccount.bind(this);
		this.onChange = this.onChange.bind(this);
		this.operationControl = this.operationControl.bind(this);
		this.updateDisplays = this.updateDisplays.bind(this);
	}

	async onChange(e) {
		await this.setState({
			[e.target.name]: e.target.value
		});
		console.log(this.state);
	}

	async addAccount(e) {
		await this.setState({
			accountExists: this.accountController.checkAccountExists(
				this.state.accountName
			)
		});
		if (this.state.accountExists === false) {
			this.accountController.addAccount(
				this.state.accountName,
				this.state.accountBal
			);
		}
		this.updateDisplays();
		this.setState({ accountName: "", accountBal: 0 });
		this.setState({ counter: this.accountController.userAccounts.length });
	}
	deleteAccount = key => {
		this.accountController.removeAccount(key);
		this.setState({ counter: this.accountController.userAccounts.length });
	};
	operationControl(e) {
		this.accountController.operationControl(
			this.state.transaction,
			Number(this.state.balanceInp),
			this.accountController.getAccountIndex(this.state.selectedAccount)
		);
		this.setState({ balanceInp: 0 });
		console.log(this.accountController.userAccounts);
	}
	async updateDisplays() {
		const totalBal = this.accountController.totalBalance();
		const maxBal = this.accountController.maxBalance();
		const minBal = this.accountController.minBalance();
		this.setState({ totalBal: totalBal, maxBal: maxBal, minBal: minBal });
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
		let selectOptions = allAccounts.map(account => {
			return <SelectComp key={account.key} account={account} />;
		});

		return (
			<div className="accountControllerComp">
				<div className="container" id="idHome">
					{/* RIGHT PANEL */}
					<div id="idRightPanel" className="panel">
						{/* <div id="idAccTable">Your Accounts</div> */}
						<h3>Your Accounts</h3>

						{/* {this.state.HTML} */}
						<form id="idCreateAccForm">
							Account Name:{" "}
							<input
								name="accountName"
								type="text"
								placeholder="Example: Checking"
								onChange={this.onChange}
								required
							/>
							<br />
							Opening Balance:{" "}
							<input
								name="accountBal"
								type="number"
								defaultValue="0"
								placeholder="0.00"
								onChange={this.onChange}
								required
							/>
							<br />
							<input
								id="idCreateBtn"
								type="button"
								value="Create Account"
								onClick={e => {
									this.addAccount(e);
								}}
							/>
							<p id="idRightInputError">
								{this.accountController.message}
							</p>
						</form>

						{allCards}
					</div>

					{/* LEFT PANEL */}
					<div id="idLeftPanel" className="panel">
						<h3>Quick Transactions</h3>
						<div>
							Select Account
							<select
								name="selectedAccount"
								onChange={this.onChange}
							>
								<option value="default">Select Account</option>
								{selectOptions}
							</select>
						</div>
						<div>
							Type of Transactions:
							<select
								required
								name="transaction"
								onChange={this.onChange}
							>
								<option>Deposit</option>
								<option>Withdraw</option>
							</select>
						</div>
						<div>
							$:
							<input
								name="balanceInp"
								type="number"
								placeholder="0.00"
								onChange={this.onChange}
							/>
						</div>
						<input
							name="submitBtn"
							type="button"
							value="Submit"
							onClick={this.operationControl}
						/>
						<p id="idLeftDisplay"></p>
						<p name="total">{this.state.totalBal}</p>
						<p name="maxBalance">{this.state.maxBal}</p>
						<p name="minBalance">{this.state.minBal}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default AccountControllerComp;
