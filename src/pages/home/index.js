import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';

import { Header, About, Timeline, SocialBox } from '../../components/';

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
					<Col s={2} offset="s3"><Button flat>Home</Button></Col>
					<Col s={2}><Button flat>Shop</Button></Col>
					<Col s={2}><Button flat>Blog</Button></Col>
				</Row>
				<hr style={{width: "35%", opacity: ".25"}} /><br/><br/><br/>
				<About animated icon="face">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ante, lobortis quis fermentum vel, tempus a leo. Mauris sagittis nunc ac odio tristique sagittis. In placerat, ligula sed pulvinar consectetur, leo purus tempus neque, posuere aliquam sem sapien ac ipsum. Nullam at lacinia dui. Integer at dui sapien. Aenean posuere ipsum sit amet arcu elementum consequat. Donec cursus gravida augue vel condimentum. Fusce id velit nec erat fermentum efficitur nec at nibh. Aenean augue dui, pharetra vitae dui quis, scelerisque fermentum mauris. Etiam vel consectetur dolor, ac bibendum erat. Cras tincidunt justo lacus, ut aliquet libero hendrerit nec. Ut placerat mollis dui vel elementum. Nam id elit sit amet nisi dignissim aliquet quis sit amet libero. Sed quam dolor, consectetur sed felis ac, volutpat tempus arcu. Aliquam pharetra neque in tellus bibendum fermentum. Curabitur eu laoreet nisi, non tempus leo.</About>
				<br/><br/>
				<SocialBox social={social_media} />
			</div>
			<br/><br/>
			<div className="grey lighten-5 timeline-container">
				<div className="container">
					<Timeline.Container>
						<h4 className="center">What I've been working on..</h4>
						<hr style={{width: "35%", opacity: ".25"}} />
						<br/><br/>
						<Timeline.Card side="left" type="model" title="Super" image="https://www.gambody.com/image/243/ravager-groot-3d-model.jpg" date={{day: "31", month: "Sept"}} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ante, lobortis quis fermentum vel, tempus a leo. Mauris sagittis nunc ac odio tristique sagittis. In placerat, ligula sed pulvinar consectetur, leo purus tempus neque, posuere aliquam sem sapien ac ipsum. Nullam at lacinia dui. Integer at dui sapien. Aenean posuere ipsum sit amet arcu elementum consequat." />
						<Timeline.Card side="right" type="photo" title="Nice pic" image="https://images.unsplash.com/photo-1501021646207-ea9a55e30bea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c389ab135c76116868c589d42d7abe4&auto=format&fit=crop&w=1350&q=80" date={{day: "14", month: "Nov"}} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ante, lobortis quis fermentum vel, tempus a leo. Mauris sagittis nunc ac odio tristique sagittis. In placerat, ligula sed pulvinar consectetur, leo purus tempus neque, posuere aliquam sem sapien ac ipsum. Nullam at lacinia dui. Integer at dui sapien. Aenean posuere ipsum sit amet arcu elementum consequat." />
						<Timeline.Card side="left" type="default" title="So basic" image="https://images.unsplash.com/photo-1522202222206-b75023c48f4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9382691bc04f781d30f6c9cb3738e91b&auto=format&fit=crop&w=1350&q=80" date={{day: "03", month: "Jun"}} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ante, lobortis quis fermentum vel, tempus a leo. Mauris sagittis nunc ac odio tristique sagittis. In placerat, ligula sed pulvinar consectetur, leo purus tempus neque, posuere aliquam sem sapien ac ipsum. Nullam at lacinia dui. Integer at dui sapien. Aenean posuere ipsum sit amet arcu elementum consequat." />
						<Timeline.Card side="right" type="important" title="Very very crutial" image="https://images.unsplash.com/photo-1495249663117-4143f6ab09d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0a3e601a50ab1cf719b974b893b6af2&auto=format&fit=crop&w=1267&q=80" date={{day: "15", month: "Jul"}} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ante, lobortis quis fermentum vel, tempus a leo. Mauris sagittis nunc ac odio tristique sagittis. In placerat, ligula sed pulvinar consectetur, leo purus tempus neque, posuere aliquam sem sapien ac ipsum. Nullam at lacinia dui. Integer at dui sapien. Aenean posuere ipsum sit amet arcu elementum consequat." />
						<Timeline.Card side="left" type="extra" title="Thats some chit" image="https://images.unsplash.com/photo-1515111293107-b0cd6448f5f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e4f56141064dbe63db663bb7a2c73b71&auto=format&fit=crop&w=1350&q=80" date={{day: "23", month: "Dec"}} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ante, lobortis quis fermentum vel, tempus a leo. Mauris sagittis nunc ac odio tristique sagittis. In placerat, ligula sed pulvinar consectetur, leo purus tempus neque, posuere aliquam sem sapien ac ipsum. Nullam at lacinia dui. Integer at dui sapien. Aenean posuere ipsum sit amet arcu elementum consequat." />
					</Timeline.Container>
				</div>
			</div>
			<div style={{marginTop: '1000px'}} />
		</div>);
	}
}

export default Home;