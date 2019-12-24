import React, { Component } from "react";
// import "./main.css";

class AccountCardComp extends Component {
	render() {
		const { key, accountName, balance } = this.props.account;
		return (
			<div className="card">
				<h3>{accountName}</h3>
				<p>${balance}</p>
				<button onClick={this.props.delete.bind(this, key)}>
					Delete
				</button>
			</div>
		);
	}
}

export default AccountCardComp;
