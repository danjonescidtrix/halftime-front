import React from "react";
var classNames = require('classnames');
import ListItemStandard from './ListItems/ListItemStandard.jsx';
import {
	Container,
	Row,
	Col,
	Visible,
	Hidden,
	ScreenClassRender
} from 'react-grid-system';

class ListStandard extends React.Component {

	// BEFORE COMPONENT RENDER (For Everyhing else)
	constructor() {
		super();
		//sets initial state
		this.state = {};
	}

	// ON COMPONENT RENDER
	componentDidMount = () => {
		//console.log("Rendered - " + this.constructor.name);
		//console.log(this.props);
	}
	// ====>>

	render() {
		return (
			<Row>
				<Col sm={12}>
					<div>
						{this.props.articleList.map((article, i) => <ListItemStandard key={i} article={article}/>)}
					</div>
				</Col>
			</Row>
		);
	}
}

export default ListStandard;
