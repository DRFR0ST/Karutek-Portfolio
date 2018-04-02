import React, {Component} from 'react';

class SocialBox extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			social: props.social
		}
	}

	render() {

		let content = [];

		for(var s in this.state.social) {
			content.push(<div className={`media ${s}`}><a href={this.state.social[s].url} target="_blank" className={`fa fa-${s}`}></a></div>);
		}

		return <div className="socialbox">
			{content}
		</div>;
	}
}

export default SocialBox;