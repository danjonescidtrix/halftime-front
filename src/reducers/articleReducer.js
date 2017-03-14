export default function reducer(state = {
	article: [],
	fetching: false,
	fetched: false,
	error: null,
}, action) {

	switch (action.type) {
		case "FETCH_ARTICLE":
			{
				return {
					...state,
					fetching: true
				}
			}
		case "FETCH_ARTICLE_REJECTED":
			{
				return {
					...state,
					fetching: false,
					error: action.payload
				}
			}
		case "FETCH_ARTICLE_FULFILLED":
			{
				return {
					...state,
					fetching: false,
					fetched: true,
					article: action.payload,
				}
			}
	}
	return state
}
