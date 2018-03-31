import React, {Component} from 'react';
import { Icon } from 'react-materialize';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icon: props.icon,
			animated: props.animated
		}
	}

	render() {
		return (
			<div class={`about ${this.state.animated ? "animated" : ""}`}>
				{this.state.icon ? <Icon>{this.state.icon}</Icon> : ""}
				<h5>About me</h5>
				<p>{this.props.children}</p>
			</div>);
	}
}

export default About;