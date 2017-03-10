import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tweets from "./tweetsReducer"

export default combineReducers({
    tweets,
    routing: routerReducer
});
