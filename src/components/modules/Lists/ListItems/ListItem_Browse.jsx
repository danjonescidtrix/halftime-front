import React from "react";
import {IndexLink, Link} from "react-router";
var classNames = require('classnames');
if(process.env.WEBPACK) require('./ListItem.scss');
import {
    Container,
    Row,
    Col,
    Visible,
    Hidden,
    ScreenClassRender
} from 'react-grid-system';

class ListItem_Browse extends React.Component {

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
            <div className="ListItem ListItem--BrowseList">
                <Link to={'/article/' + this.props.article._id}>{this.props.article.title}</Link>
                <p>{this.props.article.subTitle}</p>
                <p>{this.props.article.dateAdded}</p>
                <p>{this.props.article._id}</p>
            </div>
        );
    }
}

export default ListItem_Browse;
