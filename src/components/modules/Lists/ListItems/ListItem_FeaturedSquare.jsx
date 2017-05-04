import React from "react";
import {IndexLink, Link} from "react-router";
var classNames = require('classnames');
if (process.env.WEBPACK)
  require('./ListItem.scss');
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClassRender
} from 'react-grid-system';

class ListItem_FeaturedSquare extends React.Component {

  // BEFORE COMPONENT RENDER (For Everyhing else)
  constructor() {
    super();
    //sets initial state
    this.state = {};
  }

  // ON COMPONENT RENDER
  componentDidMount = () => {
    //console.log("Rendered - " + this.constructor.name);
    //console.log(this.props);
  }
  // ====>>

  render() {
    return (
      <Col xs={6} sm={4} className="fadeInSeq">
        <div className="ListItem ListItem--FeaturedSquare">
          <Link to={'/article/' + this.props.article._id}>
            <p>{this.props.article.title}</p>
            <p>{this.props.article.subTitle}</p>
          </Link>
        </div>
      </Col>
    );
  }
}

export default ListItem_FeaturedSquare;
