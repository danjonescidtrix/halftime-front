export default function reducer(state = {
	articleList: [],
	fetching: false,
	fetched: false,
	error: null,
}, action) {

	switch (action.type) {
		case "FETCH_ARTICLELIST":
			{
				return {
					...state,
					fetching: true
				}
			}
		case "FETCH_ARTICLELIST_REJECTED":
			{
				return {
					...state,
					fetching: false,
					error: action.payload
				}
			}
		case "FETCH_ARTICLELIST_FULFILLED":
			{
				return {
					...state,
					fetching: false,
					fetched: true,
					articleList: action.payload,
				}
			}
	}
	return state
}
