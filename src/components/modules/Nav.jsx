import React from "react";
import {IndexLink, Link} from "react-router";
if (process.env.WEBPACK)
  require('./Nav.scss');
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClassRender
} from 'react-grid-system';

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  render() {

    return (
      <ul className="nav">
        <li>
          <IndexLink to="/">Home</IndexLink>
        </li>
        <li>
          <Link to="ArticleList">ArticleList</Link>
        </li>
      </ul>
    );
  }
}
