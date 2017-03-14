import axios from "axios";
//var resourceUrl = "http://localhost:7777/api/schools";

export function fetchArticle(title) {
    return function(dispatch) {
        dispatch({
            type: "FETCH_ARTICLE"
        })
        axios.get('/api/article', {
                params: {
                    title: title
                }
            })
            .then((response) => {
                dispatch({
                    type: "FETCH_ARTICLE_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_ARTICLE_REJECTED",
                    payload: err
                })
            })
    }
}
