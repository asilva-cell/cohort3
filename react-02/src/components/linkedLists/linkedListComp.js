import React, { useState } from "react";
import "../main.css";
import { LinkedList } from "./linkedListLogic";
import CardComp from "./linkCardComp";
import IconComp from "./iconComp";
import arrowDouble from "../icons/arrowDouble.svg";
import arrowSingle from "../icons/arrowSingle.svg";

const list = new LinkedList();
const icons = [
	{ key: "leftDouble", src: arrowDouble, name: "First" },
	{ key: "leftSingle", src: arrowSingle, name: "Previous" },
	{ key: "rightSingle", src: arrowSingle, name: "Next" },
	{ key: "rightDouble", src: arrowDouble, name: "Last" }
];

const ListDisplay = () => {
	let [subject, setSubject] = useState("");
	let [amount, setAmount] = useState("");
	let [counter, setCounter] = useState(0);
	let [card, setCard] = useState("");

	const capName = () => {
		let firstCap = subject
			.toLowerCase()
			.split(" ")
			.map(words => words.charAt(0).toUpperCase() + words.substring(1))
			.join(" ");
		setSubject((subject = firstCap));
	};

	const createCard = e => {
		if (subject === "") {
			list.message = "Please enter a valid name";
			return;
		}
		capName();
		list.insert(subject, amount);
		setCounter(counter++);
		setCard(
			(card = (
				<CardComp
					key={counter}
					node={list.current}
					onClick={deleteCard}
				/>
			))
		);
		setSubject((subject = ""));
		setAmount((amount = ""));
	};
	const deleteCard = e => {
		list.delete();
		if (!list.current) {
			setCard((card = ""));
			return;
		}
		setCard(
			(card = (
				<CardComp
					key={counter}
					node={list.current}
					onClick={deleteCard}
				/>
			))
		);
	};
	const cardController = e => {
		list.message = "";
		if (!list.current) return;
		if (e.target.alt === "First") {
			list.first();
		}
		if (e.target.alt === "Previous") {
			list.previous();
		}
		if (e.target.alt === "Next") {
			list.next();
		}
		if (e.target.alt === "Last") {
			list.last();
		}
		setCard(
			(card = (
				<CardComp
					key={counter}
					node={list.current}
					onClick={deleteCard}
				/>
			))
		);
	};

	return (
		<div>
			<div className="container">{card}</div>
			<div className="container">
				<IconComp icon={icons[0]} onClick={cardController} />
				<IconComp icon={icons[1]} onClick={cardController} />
				<IconComp icon={icons[2]} onClick={cardController} />
				<IconComp icon={icons[3]} onClick={cardController} />
			</div>
			<h5>{list.message}</h5>
			<div className="container">
				<div className="panel">
					<div className="form">
						<div>
							To Buy:{" "}
							<input
								className="input"
								name="subject"
								type="text"
								placeholder="Example: Apples"
								value={subject}
								onChange={e => setSubject(e.target.value)}
								required
							/>
							Amount:{" "}
							<input
								className="input"
								name="amount"
								type="number"
								min="0"
								value={amount}
								placeholder="0.00"
								onChange={e => setAmount(e.target.value)}
								required
							/>
						</div>
						<button
							type="button"
							className="btn btn-primary btn-sm"
							onClick={createCard}
						>
							Add Item
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ListDisplay;
