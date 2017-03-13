import React from "react";
var classNames = require('classnames');
import {
	Container,
	Row,
	Col,
	Visible,
	Hidden,
	ScreenClassRender
} from 'react-grid-system';



export default class Footer extends React.Component {
	constructor() {
		super();
		//sets initial state
		this.state = {};
	}

	//CONTROLS THE STATE
	handleClass = (param) => {
		//console.log(param);
	}

	render() {

		return (
				<Row>
					<Col sm={12}>
						<footer>
							<p>Find this on GithUb</p>
						</footer>
					</Col>
				</Row>
		);
	}
}
