import React, { Component } from "react";

export default class SelectComp extends Component {
	render() {
		const { key, cityName } = this.props.city;
		return <option key={key}>{cityName}</option>;
	}
}
