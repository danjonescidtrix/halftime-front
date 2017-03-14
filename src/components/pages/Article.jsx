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
        console.log(this.props)
        this.props.dispatch(fetchArticle(this.props.params.id))
    }

    // ON COMPONENT RENDER
    componentDidMount = () => {}

    render() {

        if (this.props.fetching) {
            return (
                <p>Loading...</p>
            );
        } else {
            return (
                <div>
                    <h1>{this.props.article.title}</h1>
                    <h2>{this.props.article.subTitle}</h2>
                </div>
            );
        }
    }
}
