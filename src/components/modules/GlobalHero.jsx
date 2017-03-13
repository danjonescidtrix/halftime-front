import React from "react";
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

class GlobalHero extends React.Component {

	// BEFORE COMPONENT RENDER (For Everyhing else)
	constructor() {
		super();
		//sets initial state
		this.state = {
			fadeIn: true
		};
	}

	// ON COMPONENT RENDER
	componentDidMount = () => {
		//console.log("Rendered - " + this.constructor.name);
		//console.log(this.props);
	}

	// CONTROLS THE STATE
	handleClass = (param) => {
		if (param === "titleSelected" && this.state.titleSelected != true) {
			this.setState({titleSelected: true});
		}
		if (param === "subTitleSelected" && this.state.subTitleSelected != true) {
			this.setState({subTitleSelected: true});
		}
	}

	render() {


		// REMOVES CLASS IN REALTIME BASED ON STATE'S VALUE
		var GLobalHeroClass = classNames({
			//[s["fadeIn"]]: this.state.fadeIn === true
		});

		return (
			<Row>
				<Col sm={6}>
					<div className={GLobalHeroClass}>
						<h1 onClick={() => this.handleClass("titleSelected")}>{this.props.page}!</h1>
						<p onClick={() => this.handleClass("subTitleSelected")}>{this.props.name}, {this.props.age}, {this.props.city}</p>
					</div>
				</Col>
			</Row>
		);
	}
}

export default GlobalHero;
