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
    var imgUrl = "../../../../assets/signs_ep.jpg";
    var divStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    }

    return (
      <Col sm={6} md={4} className="ListItem--cont">
        <Link to={'/article/' + this.props.article._id}>
          <div className="ListItem ListItem--FeaturedSquare">
            <div className="featuredImg" style={divStyle}></div>
            <div className="shape shape--bottomLeft">
              <p className=""></p>
              <div className="title title--readMore">
                <span className="title title--readMore">
                  {this.props.article.title}
                </span>
                <span>
                  Read more...
                </span>
              </div>

            </div>
            <div className="shape shape--bottomRight">
              <p className="subTitle">{this.props.article.subTitle}</p>
            </div>
          </div>
        </Link>
      </Col>
    );
  }
}

export default ListItem_FeaturedSquare;
