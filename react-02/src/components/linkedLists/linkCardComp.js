import React from "react";

const CardComp = props => {
	return (
		<div className="card">
			<h3 className="card-header">{props.node.subject}</h3>
			<div className="card-body">
				<p className="card-text text-dark">
					Amount:{props.node.amount}
					<br />
					<input className="checkBox" type="checkbox" />
					{` Got it!`}
				</p>
			</div>
			<div className="card-footer">
				<button
					type="button"
					className="btn btn-primary btn-sm"
					alt="Delete"
					onClick={props.onClick}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default CardComp;
