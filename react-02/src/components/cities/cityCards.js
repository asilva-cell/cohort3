import React, { Component } from "react";
import "./city.css";

class CityCardComp extends Component {
	render() {
		const { key, cityName, population } = this.props.city;
		return (
			<div className="cards">
				<h4>{cityName}</h4>
				<p>${population}</p>
				<button onClick={this.props.delete.bind(this, key)}>
					Delete
				</button>
			</div>
		);
	}
}

export default CityCardComp;
