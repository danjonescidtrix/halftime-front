import axios from "axios";
//var resourceUrl = "http://localhost:7777/api/schools";

export function fetchArticleList(indexLimit) {
    return function(dispatch) {
        dispatch({
            type: "FETCH_ARTICLELIST"
        })
        axios.get('/api/articleList', {
                params: {
                    indexLimit: indexLimit
                }
            })
            .then((response) => {
                dispatch({
                    type: "FETCH_ARTICLELIST_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_ARTICLELIST_REJECTED",
                    payload: err
                })
            })
    }
}
