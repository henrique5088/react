import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	state = { lat: null, lon: null, errorMessage: "" };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude, lon: position.coords.longitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return (
				<div>
					<SeasonDisplay lat={this.state.lat} />
				</div>
			);
		}
		return <Spinner />;
	}

	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		)
	}
}

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
