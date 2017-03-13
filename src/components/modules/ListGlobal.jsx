import React from "react";
import {connect} from "react-redux"
import {fetchTweets} from "../../actions/tweetsActions"
import ListStandard from './Lists/ListStandard.jsx';
import ListFeatured from './Lists/ListFeatured.jsx';
import {
    Container,
    Row,
    Col,
    Visible,
    Hidden,
    ScreenClassRender
} from 'react-grid-system';

@connect((store) => {
    return {tweets: store.tweets.tweets, fetching: store.tweets.fetching};
})

class ListGlobal extends React.Component {

    // BEFORE COMPONENT RENDER (For Everyhing else)
    constructor() {
        super();
        //sets initial state
        this.state = {};
    }

    // BEFORE COMPONENT RENDER (For Ajax / Dispatcher Events): get article Title / Thumbnail rows based on this.props.indexLimit
    componentWillMount = () => {
        this.props.dispatch(fetchTweets(this.props.indexLimit))
    }

    // ON COMPONENT RENDER
    componentDidMount = () => {
        console.log("Rendered - " + this.constructor.name);
        //console.log(this.props);
    }
    // ====>>

    render() {

        if (this.props.fetching) {
            return (
                <p>Loading...</p>
            );
        } else {
            switch (this.props.listType) {
                case "listStandard":
                    return (
                        <div>
                            <ListStandard {...this.props}/>
                        </div>
                    );
                    break;
                case "listFeatured":
                    return (
                        <div>
                            <ListFeatured{...this.props}/>
                        </div>
                    );
                    break;
            }
        }
    }
}

export default ListGlobal;
