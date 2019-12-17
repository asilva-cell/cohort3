import React, { Component } from "react";
import "../main.css";
import { Community } from "./citiesPojo";
import fetchFunctions from "./fetchFunc";
import CityCardComp from "./cityCards";
import SelectComp from "./selectComp";

let newCommunity = new Community();

class CityComp extends Component {
	constructor(props) {
		super();
		this.state = {
			community: newCommunity,
			changeMe: 0,
			transaction: "moveIn",
			selectedCity: "",
			populationInp: 0,
			totalPop: 0,
			mostNorth: "N/A",
			mostSouth: "N/A"
		};
	}
	componentDidMount = async () => {
		let onLoad = await fetchFunctions.getData();
		let a = this.state.community;
		a.loadCitiesServer(onLoad);
		this.lastKey = a.keyCount;
		this.setState({ community: a });
		this.updateDisplays();
	};

	createCity = e => {
		let a = this.state.community;
		let lastKey = a.keyCount;
		let newCity;
		if (this.cityName.value === "") {
			a.message = "Please enter a valid city name.";
			this.setState({ community: a });
			return;
		}
		let checkCityExists = this.state.community.checkCityExists(
			this.latitude.value,
			this.longitude.value
		);

		if (checkCityExists === false) {
			newCity = this.state.community.createCity(
				lastKey,
				this.cityName.value,
				this.latitude.value,
				this.longitude.value,
				this.population.value
			);
		}
		this.setState({ community: a });
		fetchFunctions.addData(newCity);
		this.updateDisplays();
	};
	deleteCity = index => {
		let cityId = this.state.community.cities[index].id;
		this.state.community.deleteCity(index);
		fetchFunctions.deleteData(cityId);
		this.updateDisplays();
	};
	populationControl = () => {
		let a = this.state.community;
		let cityId = Number(
			this.selectedCity.options[
				this.selectedCity.selectedIndex
			].getAttribute("id")
		);
		let updatedCity = a.populationControl(
			a.getCityById(cityId),
			this.typeOfMove.value,
			Number(this.populationInp.value)
		);
		if (updatedCity !== "not enough") {
			fetchFunctions.updateData(updatedCity);
		}
		this.setState({ community: a });
		this.updateDisplays();
	};
	updateDisplays = () => {
		const totalPop = this.state.community.totalPopulation();
		const mostNorth = this.state.community.getMostNorthern();
		const mostSouth = this.state.community.getMostSouthern();
		this.setState({
			totalPop: totalPop,
			mostNorth: mostNorth,
			mostSouth: mostSouth
		});
		return;
	};

	render() {
		let allCities = this.state.community.cities;
		let allCards = allCities.map((city, index) => {
			return (
				<CityCardComp
					key={city.key}
					index={index}
					city={city}
					delete={this.deleteCity}
				/>
			);
		});

		return (
			<div className="Community">
				<div className="container" id="idHome">
					{/* LEFT PANEL */}
					<div id="idLeftPanel" className="panel">
						<h3>Your Cities</h3>
						<form className="form" id="idLeftForm">
							<div>
								<div>
									City Name:{" "}
									<input
										className="input"
										name="cityName"
										type="text"
										placeholder="Example: Calgary"
										value={this.state.cityName}
										ref={input => {
											this.cityName = input;
										}}
										required
									/>
								</div>
								<div>
									Population:{" "}
									<input
										className="input"
										name="population"
										type="number"
										value={this.state.population}
										placeholder="0.00"
										ref={input => {
											this.population = input;
										}}
										required
									/>
								</div>
							</div>
							Latitude:{" "}
							<input
								className="input"
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
								className="input"
								name="longitude"
								type="number"
								value={this.state.longitude}
								placeholder="0.00"
								ref={input => {
									this.longitude = input;
								}}
								required
							/>
							<br />
							<input
								id="idCreateBtn"
								type="button"
								value="Create City"
								onClick={e => {
									this.createCity(e);
								}}
							/>
							<p id="idLeftDisplay">
								{this.state.community.message}
							</p>
						</form>
						<div className="cardsContainer">{allCards}</div>
					</div>

					{/* RIGHT PANEL */}
					<div id="idRightPanel" className="panel">
						<h3>City Updates</h3>
						<div className="form" id="idRightUpperPanel">
							<div>
								Select City
								<select
									name="selectedCity"
									ref={input => {
										this.selectedCity = input;
									}}
								>
									<option value="default">
										Select City{" "}
									</option>
									{allCities.map((city, index) => (
										<SelectComp
											key={city.key}
											index={index}
											city={city}
										/>
									))}
								</select>
							</div>
							<div>
								Type of Move:
								<select
									required
									name="transaction"
									ref={input => {
										this.typeOfMove = input;
									}}
								>
									<option value="moveIn">Moving In</option>
									<option value="moveOut">Moving Out</option>
								</select>
							</div>
							<div>
								People Moving:
								<input
									name="populationInp"
									type="number"
									placeholder="0.00"
									ref={input => {
										this.populationInp = input;
									}}
								/>
							</div>

							<input
								name="submitBtn"
								type="button"
								value="Submit"
								onClick={this.populationControl}
							/>
							<p id="idRightDisplay">
								{this.state.community.message}
							</p>
						</div>
						<div id="idRightLowerPanel" className="panel form">
							<p name="total">
								Total Population: {this.state.totalPop}
							</p>
							<p name="mostNorth">
								Most Northern City: {this.state.mostNorth}
							</p>
							<p name="mostSouth">
								Most Sourthern City: {this.state.mostSouth}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CityComp;
