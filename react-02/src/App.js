import React from "react";
import logo from "./logo.svg";
import MyIcon from "./components/icons";
import Game from "./components/ticTacToe";
import AccountControllerComp from "./components/accountsComp";

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
					<h1>Welcome to Your Bank!</h1>
					<AccountControllerComp />
				</div>
			)
		};
		this.state = { page: this.pages.accountPage };
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
