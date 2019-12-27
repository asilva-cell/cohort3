import React, { Component } from "react";

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
			<div className="card">
				<h3 className="card-header">{cityName}</h3>
				<div className="card-body">
					<p className="card-text text-dark">
						Latitude: {latitude} Longitude: {longitude}
					</p>
					<p className="card-text">
						{`${cityName} is located on the ${hemisphere}, has a population of ${population} people and is considered a ${type}`}
					</p>
				</div>
				<div className="card-footer">
					<button
						type="button"
						className="btn btn-primary btn-sm"
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
