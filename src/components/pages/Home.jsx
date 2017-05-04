import React from "react";
var classNames = require('classnames');


import GlobalHero from '../modules/GlobalHero.jsx';
import ListGlobal from '../modules/ListGlobal.jsx';

export default class Home extends React.Component {

	// BEFORE COMPONENT RENDER (For Everyhing else)
	constructor() {
		super();
		//sets initial state
		this.state = {
			page: "Home"
		};
	}

	// ON COMPONENT RENDER
	componentDidMount = () => {
		//console.log("Rendered - " + this.constructor.name);
		//console.log("----------------------------");
		//console.log(this.props.data);
	}
	// =========>>

	// CONTROLS THE STATE
	handleClass = (param) => {
		console.log(param);
	}
	// ====>>

	render() {
		return (
			<div>
				<GlobalHero page={this.state.page} {...this.props.data}/>
				<ListGlobal numbers={this.state.numbers} listType={"List_FeaturedSquare"} indexLimit={6}/>
			</div>
		);
	}
}
