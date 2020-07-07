import React from "react";

interface Props {
	onSubmit: (term: string) => void;
}

class SearchBar extends React.Component<Props> {
	state = { term: '' };
	onInputChange(event: any) {
		this.setState({ typed: event.target.value });
	}

	onFormSubmit = (event: any) => {
		event.preventDefault();		
		this.props.onSubmit(this.state.term);
	};
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
