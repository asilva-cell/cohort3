import React, { Component } from "react";

export default class SelectComp extends Component {
	render() {
		const { key, accountName } = this.props.account;
		return <option key={key}>{accountName}</option>;
	}
}
