import React from "react";
import {connect} from "react-redux"
import {fetchArticle} from "../../actions/articleActions"
var classNames = require('classnames');
import GlobalHero from '../modules/GlobalHero.jsx';
import Helmet from 'react-helmet';

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

            let title = null;
            if (typeof this.props.article.body != 'undefined') {
                title = this.props.article.title;
            }
            let subTitle = null;
            if (typeof this.props.article.body != 'undefined') {
                subTitle = this.props.article.subTitle;
            }
            let section1 = null;
            if (typeof this.props.article.body != 'undefined') {
                if (this.props.article.body.section1.include) {
                    section1 = this.props.article.body.section1.text;
                }
            }
            let section2 = null;
            if (typeof this.props.article.body != 'undefined') {
                if (this.props.article.body.section2.include) {
                    section2 = this.props.article.body.section2.text;
                }
            }
            let section3 = null;
            if (typeof this.props.article.body != 'undefined') {
                if (this.props.article.body.section3.include) {
                    section3 = this.props.article.body.section3.text;
                }
            }

            return (
                <div>
                  <Helmet>
                <meta charSet="utf-8" />
                <title>Article X</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                    <h1>{title}</h1>
                    <h2>{subTitle}</h2>
                    <p>{section1}</p>
                    <p>{section2}</p>
                    <p>{section3}</p>
                </div>
            );
        }
    }
}
