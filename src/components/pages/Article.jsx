import React from "react";
import {connect} from "react-redux"
import {fetchArticle} from "../../actions/articleActions"
var classNames = require('classnames');
import GlobalHero from '../modules/GlobalHero.jsx';

@connect((store) => {
    return {article: store.article.article, fetching: store.article.fetching};
})

export default class Article extends React.Component {

	// BEFORE COMPONENT RENDER (For Everyhing else)
	constructor() {
		super();
		//sets initial state
		this.state = {
			page: "Article"
		};
	}

	// BEFORE COMPONENT RENDER (For Ajax / Dispatcher Events): get article Title / Thumbnail rows based on this.props.indexLimit
	componentWillMount = () => {
			this.props.dispatch(fetchArticle(this.props.params.title))
	}

	// ON COMPONENT RENDER
	componentDidMount = () => {
		//console.log("Rendered - " + this.constructor.name);
		//console.log("----------------------------");
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
