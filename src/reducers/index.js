import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import articleList from "./articleListReducer"
import article from "./articleReducer"

export default combineReducers({
    articleList,
    article,
    routing: routerReducer
});
