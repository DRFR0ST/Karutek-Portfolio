import React, {Component} from 'react';
import { Navbar, NavItem, SideNav, Icon, SideNavItem, Button } from 'react-materialize';

import avatar from '../../images/avatar.jpg'

class Header extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<div className="background"></div>
					<div className="logo">
						<div className="avatar z-depth-1">
							<img src={avatar} />
						</div>
						<div className="badge z-depth-2">
							<Icon>bubble_chart</Icon>
						</div>
					</div>
				</div>
			</div>);
	}
}

export default Header;