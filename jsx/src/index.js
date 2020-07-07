// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
	const buttonText = { text: "Click Me" };
	return (
		<div>
			<label className="label" htmlFor="name">
				Enter Name:
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: "blue", color: "white" }}>{buttonText.text}</button>
		</div>
	);
};

// Take the react component and show it on the screen
const element = document.querySelector("#root");
ReactDOM.render(<App />, element);
