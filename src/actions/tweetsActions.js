import axios from "axios";
//var resourceUrl = "http://localhost:7777/api/schools";

export function fetchTweets(indexLimit) {
    return function(dispatch) {
        dispatch({
            type: "FETCH_TWEETS"
        })
        axios.get('/api/articles', {
                params: {
                    indexLimit: indexLimit
                }
            })
            .then((response) => {
                dispatch({
                    type: "FETCH_TWEETS_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_TWEETS_REJECTED",
                    payload: err
                })
            })
    }
}
