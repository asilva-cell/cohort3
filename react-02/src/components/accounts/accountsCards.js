import React, { Component } from "react";

class AccountCardComp extends Component {
	capName = nameToCap => {
		nameToCap = nameToCap
			.toLowerCase()
			.split(" ")
			.map(words => words.charAt(0).toUpperCase() + words.substring(1))
			.join(" ");
		return nameToCap;
	};
	render() {
		let { key, accountName, balance } = this.props.account;
		accountName = this.capName(accountName);

		return (
			<div className="card">
				<h3 className="card-header text-dark">{accountName}</h3>
				<div className="card-body">
					<p className="card-text text-dark">${balance}</p>
				</div>
				<div className="card-footer">
					<button
						className="btn btn-primary btn-sm"
						onClick={this.props.delete.bind(this, key)}
					>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

export default AccountCardComp;
