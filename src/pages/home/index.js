import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'react-materialize';

import { Header, About, Timeline, SocialBox, Clicker, Loading, Error, Info } from '../../components/';

import testmodel from '../../models/testmodel.obj';

class Home extends Component {

	render() {
		const social_media = {
			instagram: {
				name: "Karuutek",
				url: "https://www.instagram.com/karuutek/"
			},
			facebook: {
				name: "Karutek",
				url: "https://www.facebook.com/Karutek-786736144683868/"
			},
			twitter: {
				name: "Karutek_",
				url: "https://twitter.com/Karutek_"
			}
		};

		return (
		<div>
			<Header />
			<div className="container">
				<h4 className='center grey-text text-darken-3'>Karolina Falkowska</h4>
				<p className="center" style={{opacity: ".7"}}>Graphic Designer</p>
				<br/>
				<Row className="center">
					<Col s={2} offset="s3"><Clicker>Home</Clicker></Col>
					<Col s={2}><Clicker>Shop</Clicker></Col>
					<Col s={2}><Clicker>Blog</Clicker></Col>
				</Row>
				<hr style={{width: "35%", opacity: ".25"}} /><br/><br/><br/>
				<Modal
				  header='About me'
				  trigger={<a style={{color: "rgb(21, 21, 21)"}}><About icon="face">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ante, lobortis quis fermentum vel, tempus a leo. Mauris sagittis nunc ac odio tristique sagittis. In placerat, ligula sed pulvinar consectetur, leo purus tempus neque, posuere aliquam sem sapien ac ipsum. Nullam at lacinia dui. Integer at dui sapien. Aenean posuere ipsum sit amet arcu elementum consequat. Donec cursus gravida augue vel condimentum. Fusce id velit nec erat fermentum efficitur nec at nibh. Aenean augue dui, pharetra vitae dui quis, scelerisque fermentum mauris. Etiam vel consectetur dolor, ac bibendum erat. Cras tincidunt justo lacus, ut aliquet libero hendrerit nec. Ut placerat mollis dui vel elementum. Nam id elit sit amet nisi dignissim aliquet quis sit amet libero. Sed quam dolor, consectetur sed felis ac, volutpat tempus arcu. Aliquam pharetra neque in tellus bibendum fermentum. Curabitur eu laoreet nisi, non tempus leo.</About></a>}>
				  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				</Modal>
				<br/><br/>
				<SocialBox social={social_media} />
			</div>
			<br/><br/>
			<Timeline className="grey lighten-5 timeline-container"/>
		</div>);
	}
}

export default Home;