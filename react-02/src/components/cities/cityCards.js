import React, { Component } from "react";
import "./city.css";

class CityCardComp extends Component {
	render() {
		const {
			cityName,
			hemisphere,
			latitude,
			longitude,
			population,
			type
		} = this.props.city;
		return (
			<div class="card">
				<h3 class="card-header">{cityName}</h3>
				<div class="card-body">
					<p class="card-text text-dark">
						Latitude: {latitude} Longitude: {longitude}
					</p>

					<p class="card-text">
						{`${cityName} is located on the ${hemisphere}, has a population of ${population} people and is considered a ${type}`}
					</p>
					<button
						class="button"
						onClick={this.props.delete.bind(this, this.props.index)}
					>
						Delete
					</button>
				</div>
				{/* 
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
				</button> */}
			</div>
		);
	}
}

export default CityCardComp;
