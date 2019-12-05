import React, { Component } from "react";
import "./accounts.css";

class AccountCardComp extends Component {
	render() {
		let account = this.props.account;
		console.log(account);
		return (
			<div className="cards">
				<h4>{account.accountName}</h4>
				<p>${account.balance}</p>
				<button>Delete</button>
			</div>
		);
	}
}

export default AccountCardComp;
