import axios from "axios";
//var resourceUrl = "http://localhost:7777/api/schools";

export function fetchArticle(id) {

    return function(dispatch) {
        dispatch({
            type: "FETCH_ARTICLE"
        })
        axios.get('/api/article', {
                params: {
                    id: id
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
