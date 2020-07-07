import React, { useState } from "react";

interface Props {
	onFormSubmit;
}
interface State { }

const SearchBar = ({ onFormSubmit }: Props) => {
	const [term, setTerm] = useState('');
	
	const onSubmit = (event) => {
		event.preventDefault();
		onFormSubmit(term);
	};

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label htmlFor="">Search for a video and press (enter)</label>
					<input type="text" onChange={event => setTerm(event.target.value)} value={term} />
				</div>
			</form>
		</div>
	);
};
export default SearchBar;
