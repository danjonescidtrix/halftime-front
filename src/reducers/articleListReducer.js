export default function reducer(state = {
	articleList: [],
	fetching: false,
	fetched: false,
	error: null,
}, action) {

	switch (action.type) {
			{
				return {
					...state,
					fetching: true
				}
			}
			{
				return {
					...state,
					fetching: false,
					error: action.payload
				}
			}
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
