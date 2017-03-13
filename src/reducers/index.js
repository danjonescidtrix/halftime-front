import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import articleList from "./articleListReducer"

export default combineReducers({
    articleList,
    routing: routerReducer
});
