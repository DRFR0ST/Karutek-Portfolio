import React, {Component} from 'react';
import { Navbar } from 'react-materialize';

import avatar from '../../images/avatar.jpg'

class Header extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<Navbar className="z-depth-0" style={{background: 'transparent'}}></Navbar>
					<div className="avatar z-depth-1">
						<img src={avatar} />
					</div>
				</div>
			</div>);
	}
}

export default Header;