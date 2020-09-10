var intialState = {
	tweets: null,
	mentionsList: null,
	activeTweet: mentionsList[0],
};

function tweets(state = intialState, action) {
	switch (action.type) {
		case "FETCH_TWEETS":
			return {
				...state,
				tweets: action.payload,
			};
		case "ACTIVE_TWEET": {
			return {
				...state,
				activeTweet: action.payload,
			};
		}
		case "FETCH_MENTIONS": {
			return {
				...state,
				mentionsList: action.payload,
			};
		}
		default:
			return state;
	}
}

export default tweets;
