import React, {Component} from 'react';
import { Icon } from 'react-materialize';

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icon: props.icon
		}
	}

	render() {
		return (
			<div class="about">
				{this.state.icon ? <Icon>{this.state.icon}</Icon> : ""}
				<p>{this.props.children}</p>
			</div>);
	}
}

export default About;