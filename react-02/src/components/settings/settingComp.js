import React, { useState } from "react";
import "../main.css";
import { ThemeContext } from "./themeContext";

const ThemeSetting = () => {
	let [backgroundColor, setBackgroundColor] = useState("dark");
	console.log(backgroundColor);

	return (
		<div>
			<h1>Settings</h1>
			<div className="container">
				<label>Background Color:</label>
				<select
					className="input"
					name="backgroundColor"
					onChange={e => setBackgroundColor(e.target.value)}
				>
					<option value="black">Black</option>
					<option value="blue">Blue </option>
				</select>
			</div>
		</div>
	);
};

export default ThemeSetting;
