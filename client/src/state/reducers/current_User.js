var intialState = {
	userInfo: null,
	isAuthReqInProgress: false,
};

function currentUser(state = intialState, action) {
	switch (action.type) {
		case "FETCH_CURRENT_USER_START":
			return {
				...state,
				isAuthReqInProgress: true,
			};
		case "FETCH_CURRENT_USER_SUCCESS":
			return {
				...state,
				userInfo: action.payload,
				isAuthReqInProgress: false,
			};
		case "FETCH_USER_TWITTER_ACCOUNT":
			return {
				...state,
				userInfo: action.payload,
			};
		default:
			return state;
	}
}

export default currentUser;
