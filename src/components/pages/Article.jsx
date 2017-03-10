import React from "react";

var classNames = require('classnames');

import GlobalHero from '../modules/GlobalHero.jsx';

export default class Article extends React.Component {

	// BEFORE COMPONENT RENDER (For Everyhing else)
	constructor() {
		super();
		//sets initial state
		this.state = {
			page: "Article"
		};
	}

	// ON COMPONENT RENDER
	componentDidMount = () => {
		console.log("Rendered - " + this.constructor.name);
		console.log("----------------------------");
		//onsole.log(this.props.data);
	}
	// =========>>

	// CONTROLS THE STATE
	handleClass = (param) => {
		console.log(param);
	}
	// ====>>

	render() {
		return (<GlobalHero page={this.state.page} {...this.props.data}/>);
	}
}
