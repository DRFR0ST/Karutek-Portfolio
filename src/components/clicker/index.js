import React, {Component} from 'react';

class Clicker extends Component {
	render() {
		return (
			<div className="clicker">
				{this.props.children}
			</div>);
	}
}

export default Clicker;