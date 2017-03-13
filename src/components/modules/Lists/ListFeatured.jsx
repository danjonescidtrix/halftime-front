import React from "react";
var classNames = require('classnames');

import ListItemFeatured from './ListItems/ListItemFeatured.jsx';

//Import React Grid System
import {
	Container,
	Row,
	Col,
	Visible,
	Hidden,
	ScreenClassRender
} from 'react-grid-system';

class ListFeatured extends React.Component {

	// BEFORE COMPONENT RENDER (For Everyhing else)
	constructor() {
		super();
		//sets initial state
		this.state = {};
	}

	// ON COMPONENT RENDER
	componentDidMount = () => {
		console.log("Rendered - " + this.constructor.name);
console.log(this.props.tweets);
		//console.log(this.props);
	}
	// ====>>

	render() {
		return (
			<Row>
				<Col sm={12}>
					<ul>
						{this.props.tweets.map((tweet, i) => <ListItemFeatured key={i} tweet={tweet}/>)}
					</ul>
				</Col>
			</Row>
		);
	}
}

export default ListFeatured;
