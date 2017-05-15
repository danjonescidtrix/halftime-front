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
    this.state = {};
  }

  render() {
    var imgUrl = "../../../assets/signs_ep.jpg";
    var divStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    }

    return (
      <Row>
        <Col xs={12} className="g-padding--none">
          <div>
            <div className="ArticleHero--img" style={divStyle}></div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ArticleHero;
