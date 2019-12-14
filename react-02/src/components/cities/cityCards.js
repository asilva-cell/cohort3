import React, { Component } from "react";
import "./city.css";

class CityCardComp extends Component {
	render() {
		const { cityName, latitude, longitude, population } = this.props.city;
		return (
			<div className="cards">
				<div>
					<h3>{cityName}</h3>
				</div>
				<p>Latitude: {latitude}</p>
				<p>Longitude: {longitude}</p>
				<p>Population: {population}</p>
				<button
					onClick={this.props.delete.bind(this, this.props.index)}
				>
					Delete
				</button>
			</div>
		);
	}
}

export default CityCardComp;
