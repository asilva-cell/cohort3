import React, { Component } from "react";
import "../accounts.css";
import { Community } from "./citiesPojo";
import CityCardComp from "./cityCards";
import SelectComp from "./selectComp";

class CityComp extends Component {
	constructor(props) {
		super();
		this.Community = new Community();
		this.state = {
			// cityName: "",
			transaction: "moveIn",
			selectedCity: "",
			populationInp: 0,
			totalPop: 0
		};
		this.createCity = this.createCity.bind(this);
		this.onChange = this.onChange.bind(this);
		this.populationControl = this.populationControl.bind(this);
		this.updateDisplays = this.updateDisplays.bind(this);
	}

	onChange(e) {
		console.log("from on change", e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	createCity(e) {
		// if (this.state.cityName === "") {
		// 	this.Community.message = "Please enter a valid city name.";
		// 	this.setState({ cityName: "" });
		// 	return;
		// }
		// let checkCityExists = this.Community.checkCityExists(
		// 	this.state.cityName
		// );
		// if (checkCityExists === false) {
		this.Community.createCity(
			0,
			this.cityName.value,
			this.latitude.value,
			this.longitude.value,
			this.population.value
		);
		// }
		this.updateDisplays();
		this.setState({ cityName: "", population: 0 });
	}
	deleteCity = key => {
		this.Community.deleteCity(key);
		this.setState({ cityName: "" });
		if (this.Community.cities.length === 1) {
			this.setState({ totalPop: "", maxPop: "", minPop: "" });
			return;
		}
		this.updateDisplays();
	};
	populationControl(e) {
		this.Community.populationControl(
			this.state.transaction,
			Number(this.state.populationInp),
			this.Community.getAccountIndex(this.state.selectedCity)
		);
		this.updateDisplays();
	}
	updateDisplays() {
		if (this.Community.cities.length >= 1) {
			const totalPop = this.Community.getPopulation();
			const mostNorth = this.Community.getMostNorthern();
			const mostSouth = this.Community.getMostSouthern();
			this.setState({
				totalPop: totalPop,
				mostNorth: mostNorth,
				mostSouth: mostSouth
			});

			return;
		}
	}

	render() {
		let allCities = this.Community.cities;
		let allCards = allCities.map(city => {
			return (
				<CityCardComp
					key={city.key}
					city={city}
					delete={this.deleteCity}
				/>
			);
		});

		return (
			<div className="Community">
				<div className="container" id="idHome">
					{/* LEFT PANEL */}
					<div id="idRightPanel" className="panel">
						<h3>Your Cities</h3>
						<form id="idCreateAccForm">
							City Name:{" "}
							<input
								name="cityName"
								type="text"
								placeholder="Example: Calgary"
								value={this.state.cityName}
								ref={input => {
									this.cityName = input;
								}}
								required
							/>
							<br />
							Population:{" "}
							<input
								name="population"
								type="number"
								value={this.state.population}
								placeholder="0.00"
								ref={input => {
									this.population = input;
								}}
								required
							/>
							<br />
							Latitude:{" "}
							<input
								name="latitude"
								type="number"
								value={this.state.latitude}
								placeholder="0.00"
								ref={input => {
									this.latitude = input;
								}}
								required
							/>
							Longitude:{" "}
							<input
								name="longitude"
								type="number"
								value={this.state.longitude}
								placeholder="0.00"
								ref={input => {
									this.longitude = input;
								}}
								required
							/>
							<input
								id="idCreateBtn"
								type="button"
								value="Create City"
								onClick={e => {
									this.createCity(e);
								}}
							/>
							<p name="rightDisplay">{this.Community.message}</p>
						</form>
						{allCards}
					</div>

					{/* RIGHT PANEL */}
					{/* <div id="idLeftPanel" className="panel">
						<h3>Quick Transactions</h3>
						<div>
							Select City
							<select
								name="selectedCity"
								onChange={this.onChange}
							>
								<option value="default">Select City</option>
								{allCities.map(city => (
									<SelectComp key={city.key} city={city} />
								))}
							</select>
						</div>
						<div>
							Type of Move:
							<select
								required
								name="transaction"
								onChange={this.onChange}
							>
								<option value="moveIn">Moving In</option>
								<option value="moveOut">Moving Out</option>
							</select>
						</div>
						<div>
							$:
							<input
								name="populationInp"
								type="number"
								placeholder="0.00"
								onChange={this.onChange}
							/>
						</div>
						<input
							name="submitBtn"
							type="button"
							value="Submit"
							onClick={this.populationControl}
						/>
						<p id="idLeftDisplay"></p>
						<p name="total">{this.state.totalPop}</p>
						<p name="mostNorth">{this.state.mostNorth}</p>
						<p name="mostSouth">{this.state.mostSouth}</p>
					</div> */}
				</div>
			</div>
		);
	}
}

export default CityComp;
