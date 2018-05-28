import React, { Component } from 'react';

import { Loading, Error, Info } from '../../components/';

import {ApiClient, Posts} from '../../utils/api.js';

class Timeline extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			loading: false,
			error: ""
		}
	}

	componentWillMount() {
		this.fetchPosts();
	}

	fetchPosts() {
	    const ApiCli = new ApiClient(window.config['server_url']);

	    ApiCli.execute(
	      new Posts.PostList()
	    )
	      .then((response) => {
	      		console.log("timeline.js", response);
	      		const data = response[0].result.data;
	      		const status = response[0].result.status;

	      		switch(status) {
	      			case 200:
	      				console.log("Actual posts", data);
	      				this.setState({posts: data, loading: false});
	      				break;

	      			default: 
	      				this.setState({loading: false, error: "Someting went horribly wrong"});
	      				console.error(response.status + ' - Something went horribly wrong');
	      				break;
	      		}	
	      	})
	      .catch((error) => {
	      		console.error(error);
	      		this.setState({loading: false, error: error});
	      });
	}

	renderDisplay(data) {
		let output = [];

		let lastYear = null;
		for(var i = 0; i < data.length; i++) {
			const post = data[i];

			const date = new Date(Date.parse(post.created));

			if(lastYear !== date.getYear()) {
				lastYear = date.getYear();
				output.push(<div class="timeline__year">{date.getFullYear()}</div>);
			}

			output.push(<div className="timeline__box">
	            <div className="timeline__date">
	              <span className="timeline__day">{date.getDate()}</span>
	              <span className="timeline__month">{date.getMonth() > 9 ? date.getMonth() : "0" + date.getMonth()}</span>
	            </div>
	            <div className="timeline__post z-depth-1">
	              <div className="timeline__title">
	              	<h5>{post.title}</h5>
	              </div>
	              <div className="timeline__content">
	                <p>{post.description}</p>
	              </div>
	            </div>
	            {post.display ? <div className="timeline__image z-depth-1"><img src={post.display} /></div> : ""}
			</div>);
		}

		return output;
	}

	render() {
		const type = this.state.type;

		const timeline = <div className="timeline__container">
						<div className="container">
						    <div class="timeline">
								<div class="timeline__group">
									{this.renderDisplay(this.state.posts)}
						        </div>
					        </div>
				        </div>
					</div>;

		return this.state.posts.length > 0 ? timeline : this.state.error.lenght > 0 ? <Error message={this.state.error} /> : this.state.loading ? <Loading /> : <Info message="Nothing to show.." />;
	}
}

/*class Container extends Timeline {
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
}

class Card extends Timeline {
	constructor(props) {
		super(props);

		this.state = {
			type: props.type.toLowerCase() || "default",
			title: props.title,
			description: props.description,
			image: props.image,
			model: props.model,
			date: props.date,
			side: props.side
		}
	}
}*/

export default Timeline;