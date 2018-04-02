import React, { Component } from 'react';

const Timeline = {
	Container: class Container extends Component {
		render() {
			return (<div className="container">
				      <div class="timeline">
				        <div class="timeline__group">
				        	<div class="timeline__year">2018</div>
				        	{this.props.children}
				        </div>
				      </div>
			</div>);
		}
	},
	Card: class Card extends Component {
		constructor(props) {
			super(props);

			this.state = {
				type: props.type.toLowerCase() || "default",
				title: props.title,
				description: props.description,
				image: props.image,
				date: props.date,
				side: props.side
			}
		}

		render() {
			const type = this.state.type;

			return <div className="timeline__box">
	            <div className="timeline__date">
	              <span className="timeline__day">{this.state.date.day}</span>
	              <span className="timeline__month">{this.state.date.month}</span>
	            </div>
	            <div className="timeline__post z-depth-1">
	              <div className="timeline__title">
	              	<h5>{this.state.title}</h5>
	              </div>
	              <div className="timeline__content">
	                <p>{this.state.description}</p>
	              </div>
	            </div>
	            {this.state.image ? <div className="timeline__image z-depth-1"><img src={this.state.image} /></div> : ""}
	          </div>;
		}
	}
}


export default Timeline;