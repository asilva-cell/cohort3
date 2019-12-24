import React from "react";
import logo from "./logo.svg";
import MyIcon from "./components/icons";
import Game from "./components/ticTacToe";
import AccountControllerComp from "./components/accounts/accountsComp";
import CityComp from "./components/cities/cityComp";
import ListDisplay from "./components/linkedLists/linkedListComp";

import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.icon = "";
		this.pages = {
			mainPage: (
				<div>
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
					</header>
				</div>
			),
			gamePage: (
				<div>
					<Game />
				</div>
			),
			accountPage: (
				<div className="bigContainer">
					<AccountControllerComp />
				</div>
			),
			cityPage: (
				<div className="bigContainer">
					<CityComp />
				</div>
			),
			listPage: (
				<div className="bigContainer">
					<ListDisplay />
				</div>
			)
		};
		this.state = { page: this.pages.listPage };
	}
	pageController = e => {
		if (e.target.alt === "main") {
			this.setState({ page: this.pages.mainPage });
		}
		if (e.target.alt === "tic") {
			this.setState({ page: this.pages.gamePage });
		}
		if (e.target.alt === "accounts") {
			this.setState({ page: this.pages.accountPage });
		}
		if (e.target.alt === "cities") {
			this.setState({ page: this.pages.cityPage });
		}
		if (e.target.alt === "link") {
			this.setState({ page: this.pages.listPage });
		}
	};

	render() {
		return (
			<div className="App">
				<div className="All-Icons">
					<MyIcon onClick={this.pageController} />
				</div>
				<header className="App-header">{this.state.page}</header>
			</div>
		);
	}
}

export default App;
