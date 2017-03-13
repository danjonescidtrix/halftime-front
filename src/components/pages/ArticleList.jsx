import React from "react";
var classNames = require('classnames');


import GlobalHero from '../modules/GlobalHero.jsx';
import ListGlobal from '../modules/ListGlobal.jsx';

export default class ArticleList extends React.Component {

	// BEFORE COMPONENT RENDER (For Everyhing else)
	constructor() {
		super();
		//sets initial state
		this.state = {
			page: "ArticleList"
		};
	}

	// ON COMPONENT RENDER
	componentDidMount = () => {
		//console.log("Rendered - " + this.constructor.name);
		//console.log("----------------------------");
		//console.log(this.props.data);
	}
	// ====>>

	// CONTROLS THE STATE
	handleClass = (param) => {
		console.log(param);
	}
	// ====>>

	render() {
		return (
			<div>
				<ListGlobal {...this.props.data} listType={"listStandard"} indexLimit={50}/>
			</div>
		);
	}
}
