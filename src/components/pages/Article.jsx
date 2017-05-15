import React from "react";
import {connect} from "react-redux"
import {fetchArticle} from "../../actions/articleActions"
var classNames = require('classnames');
import Helmet from 'react-helmet';
if (process.env.WEBPACK)
  require('./Article.scss');

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
      null);
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
          <div className="article__block g-padding--small">
          <h1 className="g-margin__top--large g-text-center g-text-width g-title g-title--large">{title}</h1>
          <h2 className="g-margin__top--small g-text-center g-text-width article__subTitle">{subTitle}</h2>
          <p className="g-margin__top--large g-text-center g-text-width article__section1">{section1}</p>
          <p className="g-margin__top--large g-text-center g-text-width article__section2">{section2}</p>
          <p className="g-margin__top--large g-margin__bottom--large  g-text-center g-text-width article__section3">{section3}</p>
          </div>
        </div>
      );
    }
  }
}
