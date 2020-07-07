import React, { Component } from "react";

interface Props {
	image: any;
}
interface State {}

export default class ImageCard extends Component<Props, State> {
	state = { spans: 0 };
	private imageRef = React.createRef<HTMLImageElement>();

	componentDidMount() {
		this.imageRef.current?.addEventListener("load", this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current?.clientHeight;
		const spans = Math.ceil((height ? height : 0) / 10);
		this.setState({ spans });
	};

	render() {
		const { description, urls } = this.props.image;
		return (
			<div style={{gridRowEnd: `span ${this.state.spans}`}} >
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}
