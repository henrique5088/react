import React, { Component, FormEvent } from "react";

interface Props {
	onFormSubmit: (term: string) => void;
}
interface State {}

class SearchBar extends Component<Props, State> {
	state = { term: "" };

	onInputChange = (event: any) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="">Video Search</label>
						<input type="text" onChange={this.onInputChange} value={this.state.term} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
