import React from "react";
import {connect} from "react-redux"
import {fetchArticleList} from "../../actions/articleListActions"
import List_Browse from './Lists/List_Browse.jsx';
import List_FeaturedSquare from './Lists/List_FeaturedSquare.jsx';
import {
  Container,
  Row,
  Col,
  Visible,
  Hidden,
  ScreenClassRender
} from 'react-grid-system';

@connect((store) => {
  return {articleList: store.articleList.articleList, fetching: store.articleList.fetching};
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
    this.props.dispatch(fetchArticleList(this.props.indexLimit))
  }

  // ON COMPONENT RENDER
  componentDidMount = () => {
    //console.log("Rendered - " + this.constructor.name);
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
        case "List_Browse":
          return (
            <div>
              <List_Browse {...this.props}/>
            </div>
          );
          break;
        case "List_FeaturedSquare":
          return (
            <div>
              <List_FeaturedSquare {...this.props}/>
            </div>
          );
          break;
      }
    }
  }
}

export default ListGlobal;
