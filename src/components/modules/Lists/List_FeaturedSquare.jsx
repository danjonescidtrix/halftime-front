import React from "react";
var classNames = require('classnames');
import ListItem_FeaturedSquare from './ListItems/ListItem_FeaturedSquare.jsx';
if (process.env.WEBPACK)
  require('./List.scss');
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClassRender
} from 'react-grid-system';

class List_FeaturedSquare extends React.Component {

  constructor() {
    super();
    //sets initial state
    this.state = {};
  }

  // ON COMPONENT RENDER
  componentDidMount = () => {
    //console.log("Rendered - " + this.constructor.name);
    //console.log(this.props.articleList);
    //console.log(this.props);
  }
  // ====>>

  render() {
    return (
      <Row>
        <Col sm={12} className="scrollUp--Container">
          <Row>
            <div className="List List--FeaturedSquare">
              {this.props.articleList.map((article, i) => <ListItem_FeaturedSquare key={i} article={article}/>)}
            </div>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default List_FeaturedSquare;
