import React from "react";
var classNames = require('classnames');
import ListItem_Browse from './ListItems/ListItem_Browse.jsx';
import {
	Container,
	Row,
	Col,
	Visible,
	Hidden,
	ScreenClassRender
} from 'react-grid-system';

class List_Browse extends React.Component {

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
				<Col sm={12} className="g-padding--none">
					<div>
						{this.props.articleList.map((article, i) => <ListItem_Browse key={i} article={article}/>)}
					</div>
				</Col>
			</Row>
		);
	}
}

export default List_Browse;
