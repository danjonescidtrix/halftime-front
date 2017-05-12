import React from "react";
import {connect} from "react-redux"
import {fetchArticle} from "../../actions/articleActions"
var classNames = require('classnames');
import Helmet from 'react-helmet';

import ArticleHero from '../modules/Heros/ArticleHero.jsx';

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
        //<p>Loading...</p>
        null
      );
    } else {

      let title = typeof this.props.article.title != 'undefined'
        ? this.props.article.title
        : null;
      let subTitle = typeof this.props.article.subTitle != 'undefined'
        ? this.props.article.subTitle
        : null;
      let section1 = typeof this.props.article.body != 'undefined'
        ? this.props.article.body.section1.text
        : null;
      let section2 = typeof this.props.article.body != 'undefined'
        ? this.props.article.body.section2.text
        : null;
      let section3 = typeof this.props.article.body != 'undefined'
        ? this.props.article.body.section3.text
        : null;

      return (
        <div>
          <Helmet>
            <title>{title + " | Halftime Front"}</title>
          </Helmet>
          <ArticleHero/>
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
