import React from "react";
var classNames = require('classnames');
if (process.env.WEBPACK)
  require('./ArticleHero.scss');

//Import React Grid System
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClassRender
} from 'react-grid-system';

class ArticleHero extends React.Component {

  // BEFORE COMPONENT RENDER (For Everyhing else)
  constructor() {
    super();
    //sets initial state
    this.state = {
      fadeIn: true
    };
  }

  render() {

    // REMOVES CLASS IN REALTIME BASED ON STATE'S VALUE
    var GLobalHeroClass = classNames({
      //[s["fadeIn"]]: this.state.fadeIn === true
    });

    return (
      <Row>
        <Col xs={12}>
          <div className="demo__info">
            Pure CSS parallax scroll demo #2 by Keith Clark. Please read the
            <a href="http://keithclark.co.uk/articles/pure-css-parallax-websites/">blog post</a>
            for more information.
          </div>
          <div className="parallax">
            <div className="parallax__layer parallax__layer--back">
              <div className="title">This is the background</div>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <div className="title">This is the foreground</div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ArticleHero;
