import React from "react";
import {IndexLink, Link} from "react-router";
var classNames = require('classnames');
import {
    Container,
    Row,
    Col,
    Visible,
    Hidden,
    ScreenClassRender
} from 'react-grid-system';
if(process.env.WEBPACK) require('./index.scss');

class ListItemStandard extends React.Component {

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
            <li>
                <Link to={'/article/' + this.props.article._id}>{this.props.article.title}</Link>
                <h1>{this.props.article.subTitle}</h1>
                <p>{this.props.article.dateAdded}</p>
                <p>{this.props.article._id}</p>
            </li>
        );
    }
}

export default ListItemStandard;
