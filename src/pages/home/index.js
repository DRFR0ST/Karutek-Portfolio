import React, { Component } from 'react';

import { Header, About } from '../../components/';

class Home extends Component {

	render() {
		return (
		<div>
			<Header />
			<div className="container">
				<h4 className='center grey-text text-darken-3'>Karolina Falkowska</h4>
				<p className="center" style={{opacity: ".7"}}>Graphic Designer</p>
				<br/><hr style={{width: "35%", opacity: ".25"}} /><br/><br/><br/>
				<About icon="face">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla ante, lobortis quis fermentum vel, tempus a leo. Mauris sagittis nunc ac odio tristique sagittis. In placerat, ligula sed pulvinar consectetur, leo purus tempus neque, posuere aliquam sem sapien ac ipsum. Nullam at lacinia dui. Integer at dui sapien. Aenean posuere ipsum sit amet arcu elementum consequat. Donec cursus gravida augue vel condimentum. Fusce id velit nec erat fermentum efficitur nec at nibh. Aenean augue dui, pharetra vitae dui quis, scelerisque fermentum mauris. Etiam vel consectetur dolor, ac bibendum erat. Cras tincidunt justo lacus, ut aliquet libero hendrerit nec. Ut placerat mollis dui vel elementum. Nam id elit sit amet nisi dignissim aliquet quis sit amet libero. Sed quam dolor, consectetur sed felis ac, volutpat tempus arcu. Aliquam pharetra neque in tellus bibendum fermentum. Curabitur eu laoreet nisi, non tempus leo.</About>
				<div style={{marginTop: '1000px'}} />
			</div>
		</div>);
	}
}

export default Home;