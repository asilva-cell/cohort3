import React from "react";

const IconComp = props => {
	return (
		<img
			className="icon"
			id={`id${props.icon.name}`}
			src={props.icon.src}
			alt={props.icon.name}
			key={props.icon.key}
			onClick={props.onClick}
		/>
	);
};

export default IconComp;
