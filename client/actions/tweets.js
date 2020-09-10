import axios from "axios";
const url = "http://localhost:3000/api/tweets";

const setTokenToAxios = (token) => {
	axios.defaults.headers.common["authorization"] =
		token || localStorage["auth-token"] || "";
};

setTokenToAxios();

const getTweets = (token) => {
	return async (dispatch) => {
		setTokenToAxios(token);
		try {
			let tweets = await axios.get(`${url}/`);
			dispatch({
				type: "FETCH_TWEETS",
				payload: tweets.data.tweets,
			});

			return tweets;
		} catch (error) {
			return error;
		}
	};
};

const getMentions = (token) => {
	return async (dispatch) => {
		setTokenToAxios(token);
		try {
			let mentions = await axios.get(`${url}/mentions`);
			dispatch({
				type: "FETCH_MENTIONS",
				payload: mentions.data,
			});
			console.log(mentions.data);
		} catch (error) {
			return error;
		}
	};
};

export { getMentions, getTweets };
