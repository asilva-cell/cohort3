import React, { Component } from "react";

export default class SelectComp extends Component {
	render() {
		return (
			<div>
				Select Account
				<select id="idAccNameSelect">
					<option value="default">Select Account</option>
				</select>
			</div>
		);
	}
}
