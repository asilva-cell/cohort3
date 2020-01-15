import React, { useState } from "react";
import "../main.css";
import functions from "./stackFunctions";
import CardComp from "./stackCardComp";

const StackDisplay = () => {
	let [counter, setCounter] = useState(1);
	let [users, setUsers] = useState([]);
	let [cards, setCards] = useState([]);
	let [message, setMessage] = useState("Please add a user");

	const createCard = e => {
		setCounter(counter + 1);
		users.push(counter);
		setUsers(users);
		updateCards();
	};
	const updateCards = () => {
		let allCards = users.map((user, index) => {
			return <CardComp key={index} name={user} />;
		});
		setCards(allCards);
	};
	const updateUsersArray = updatedUsers => {
		setUsers(updatedUsers);
		updateCards();
	};

	const fifo = e => {
		setMessage(`Users ${users[0]} has been removed`);
		let updatedUsers = functions.fifo(users);
		updateUsersArray(updatedUsers);
	};
	const lifo = e => {
		setMessage(`Users ${users[users.length - 1]} has been removed`);
		let updatedUsers = functions.lifo(users);
		updateUsersArray(updatedUsers);
	};

	return (
		<div>
			<div className="container">
				<button
					type="button"
					className="btn btn-primary btn-sm"
					onClick={createCard}
				>
					Add User
				</button>
				<button
					type="button"
					className="btn btn-primary btn-sm"
					onClick={fifo}
				>
					First In/First Out
				</button>
				<button
					type="button"
					className="btn btn-primary btn-sm"
					onClick={lifo}
				>
					Last In/First Out
				</button>
				<div className="container">
					<p>{message}</p>
				</div>
				<div className="container">{cards}</div>
			</div>
		</div>
	);
};
export default StackDisplay;
