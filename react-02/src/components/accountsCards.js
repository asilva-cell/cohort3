import React, { Component } from "react";
import "./accounts.css";

class AccountCardComp extends Component {
	render() {
		const { key, accountName, balance } = this.props.account;
		return (
			<div className="cards">
				<h4>{accountName}</h4>
				<p>${balance}</p>
				<button onClick={this.props.delete.bind(this, key)}>
					Delete
				</button>
			</div>
		);
	}
}

export default AccountCardComp;
