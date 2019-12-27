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
				<div className="card-deck">{allCards}</div>

				{/* REPORT PANEL */}
				<div className="report">
					<div className="panel-report">
						<h5 name="total">
							Total Population: {this.state.totalPop}
						</h5>
					</div>
					<div className="panel-report">
						<h5 name="maxBalance">
							Most Northern City: {this.state.mostNorth}
						</h5>
					</div>
					<div className="panel-report">
						<h5 name="minBalance">
							Most Sourthern City: {this.state.mostSouth}
						</h5>
					</div>
				</div>

				{/* CITY PANEL */}
				<div className="container">
					<div className="panel">
						<h2>Your Cities</h2>
						<div className="form">
							City Name:{""}
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
							Population:{""}
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
						<div className="form">
							Latitud:{""}
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
							Longitude:{""}
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
						</div>
						<br />
						<button
							type="button"
							className="btn btn-primary btn-sm"
							onClick={e => {
								this.createCity(e);
							}}
						>
							Create City
						</button>
						<h5>{this.state.community.message}</h5>
					</div>

					{/* TRASACTIONS PANEL */}

					<div className="panel">
						<h2>City Updates</h2>
						<div className="form">
							<div>
								Select City
								<select
									className="input"
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
									className="input"
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
									className="input"
									name="populationInp"
									type="number"
									placeholder="0.00"
									ref={input => {
										this.populationInp = input;
									}}
								/>
							</div>
							<button
								type="button"
								className="btn btn-primary btn-sm"
								onClick={this.populationControl}
							>
								Submit
							</button>

							<h5>{this.state.community.message}</h5>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CityComp;
