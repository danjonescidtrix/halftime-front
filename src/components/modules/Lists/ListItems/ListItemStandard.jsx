import React from "react";
import {IndexLink, Link} from "react-router";
var classNames = require('classnames');


//Import React Grid System
import {
	Container,
	Row,
	Col,
	Visible,
	Hidden,
	ScreenClassRender
} from 'react-grid-system';

class ListItemStandard extends React.Component {

	// BEFORE COMPONENT RENDER (For Everyhing else)
	constructor() {
		super();
		//sets initial state
		this.state = {};
	}

	// ON COMPONENT RENDER
	componentDidMount = () => {
		console.log("Rendered - " + this.constructor.name);
		//console.log(this.props);
	}
	// ====>>

	render() {
		return (
			<li>
				<Link to={'/articles/' + this.props.tweet.title}>{this.props.tweet.title}</Link>
			</li>
		);
	}
}

export default ListItemStandard;
