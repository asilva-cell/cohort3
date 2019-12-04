import React from "react";
import "./accounts.css";
import { Account, AccountController } from "./accountsLogic.js";

class AccountControllerComp extends React.Component {
	constructor(props) {
		super();
		this.accountController = new AccountController();
	}
	addAccount = props => {
		console.log("click");
	};
	render() {
		return (
			<div className="accountControllerComp">
				<div className="container" id="idHome">
					{/* LEFT PANEL */}
					<div id="idLeftPanel" className="panel">
						<h3>Quick Transactions</h3>
						<div>
							{console.log(this.accountController)}
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
						<input
							id="idCreateBtn"
							type="button"
							value="Create Account"
							onClick={this.addAccount}
						/>
						<form id="idCreateAccForm">
							Account Name:{" "}
							<input
								id="idNewAccName"
								type="text"
								placeholder="Example: Checking"
								required
							/>
							<br />
							Opening Balance:{" "}
							<input
								id="idNewAccBal"
								type="number"
								defaultValue="0"
								placeholder="0.00"
								required
							/>
							<br />
							<input
								id="idRightSubmit"
								type="button"
								value="Submit"
							/>
							<input
								id="idRightCancel"
								type="button"
								value="Cancel"
							/>
							<p id="idRightInputError"></p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default AccountControllerComp;
