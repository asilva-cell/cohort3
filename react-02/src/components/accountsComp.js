import React from "react";
import "./accounts.css";
import { Account, AccountController } from "./accountsLogic";
import AccountCardComp from "./accountsCards";

class AccountControllerComp extends React.Component {
	constructor(props) {
		super();
		this.accountController = new AccountController();
		this.state = {
			accountName: "",
			accountBal: 0,
			accountExists: ""
		};
		this.addAccount = this.addAccount.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state.accountName);
	};

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
		this.setState({ accountName: "", accountBal: 0 });
	}

	render() {
		let allAccounts = this.accountController.userAccounts;
		let allCards = allAccounts.map(account => {
			console.log(account);
			return <AccountCardComp account={account} key={account.key} />;
		});
		console.log(allAccounts);

		return (
			<div className="accountControllerComp">
				<div className="container" id="idHome">
					{/* LEFT PANEL */}
					<div id="idLeftPanel" className="panel">
						<h3>Quick Transactions</h3>
						<div>
							{/* {console.log(this.accountController)} */}
							Choose your account:
							<select id="idAccNameSelect">
								<option value="default">Select Account</option>
							</select>
							<br />
						</div>
						<div>
							Type of Transactions:
							<select required id="idTransactions">
								<option value="deposit">Deposit</option>
								<option value="withdraw">Withdraw</option>
							</select>
						</div>
						<div>
							$:
							<input
								id="idBalanceInp"
								type="number"
								placeholder="0.00"
							/>
						</div>
						<input id="idLeftSubmit" type="button" value="Submit" />
						<p id="idLeftDisplay"></p>
					</div>
					{/* RIGHT PANEL */}
					<div id="idRightPanel" className="panel">
						<div id="idAccTable">Your Accounts</div>
						<h4 id="idRightDisplay"></h4>
						<p id="idRightTotal"></p>
						<p id="idRightMaxBalance"></p>
						<p id="idRightMinBalance"></p>

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
								onClick={this.addAccount}
							/>
							<p id="idRightInputError">
								{this.accountController.message}
							</p>
						</form>

						{allCards}
					</div>
				</div>
			</div>
		);
	}
}

export default AccountControllerComp;
