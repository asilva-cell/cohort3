import React, { useState } from "react";

const CardComp = props => {
	return (
		<div className="card">
			<h3 className="card-header">{props.node.subject}</h3>
			<div className="card-body">
				<p className="card-text text-dark">
					Amount:{props.node.amount}
				</p>
			</div>
		</div>
	);
};

export default CardComp;
