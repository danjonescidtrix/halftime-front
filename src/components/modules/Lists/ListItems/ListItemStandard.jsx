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
                <Link to={'/article/' + this.props.article.title}>{this.props.article.title}</Link>
                <p>{this.props.article.subTitle}</p>
                <p>{this.props.article.dateAdded}</p>
            </li>
        );
    }
}

export default ListItemStandard;
