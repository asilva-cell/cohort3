import React, { useState } from "react";
import "../main.css";
import { LinkedList } from "./linkedListLogic";
import CardComp from "./linkCardComp";
import IconComp from "./iconComp";
import arrowDouble from "../icons/arrowDouble.svg";
import arrowSingle from "../icons/arrowSingle.svg";

const newList = new LinkedList();
const icons = [
	{ key: "leftDouble", src: arrowDouble, name: "First" },
	{ key: "leftSingle", src: arrowSingle, name: "Previous" },
	{ key: "rightSingle", src: arrowSingle, name: "Next" },
	{ key: "rightDouble", src: arrowDouble, name: "Last" }
];

const ListDisplay = () => {
	let [subject, setSubject] = useState("");
	let [amount, setAmount] = useState(0);
	let [counter, setCounter] = useState(0);
	let [card, setCard] = useState("");

	const createCard = e => {
		if (subject === "") {
			return;
		}
		newList.insert(subject, amount);
		setCounter(counter++);
		setCard((card = <CardComp key={counter} node={newList.current} />));
		setSubject((subject = ""));
		setAmount((amount = ""));
	};
	const currentController = e => {
		if (e.target.alt === "First") {
			newList.first();
		}
		if (e.target.alt === "Previous") {
			newList.previous();
		}
		if (e.target.alt === "Next") {
			newList.next();
		}
		if (e.target.alt === "Last") {
			newList.last();
		}
		setCard((card = <CardComp key={counter} node={newList.current} />));
	};

	return (
		<div>
			<div className="container">
				<IconComp icon={icons[0]} onClick={currentController} />
				<IconComp icon={icons[1]} onClick={currentController} />
				{card}
				<IconComp icon={icons[2]} onClick={currentController} />
				<IconComp icon={icons[3]} onClick={currentController} />
			</div>
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
						<p>{newList.message}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ListDisplay;
