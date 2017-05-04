import React from "react";
var classNames = require('classnames');
import ListItemFeatured from './ListItems/ListItemFeatured.jsx';
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

class ListFeatured extends React.Component {

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
        <Col sm={12}>
          <Row>
            <div className="List List--FeaturedSquare">
              {this.props.articleList.map((article, i) => <ListItemFeatured key={i} article={article}/>)}
            </div>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ListFeatured;
