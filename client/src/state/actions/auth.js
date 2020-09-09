import axios from "axios";
const url = "/api/users";

const setTokenToAxios = (token) => {
	axios.defaults.headers.common["authorization"] =
		token || localStorage["auth-token"] || "";
};

setTokenToAxios();

const userRegister = async (user) => {
	try {
		let res = await axios.post(`${url}/`, user);
		console.log(res.data);
		return res;
	} catch (error) {
		return error;
	}
};
const userLogin = (user) => {
	return async (dispatch) => {
		try {
			let res = await axios.post(`${url}/login`, user);
			localStorage.setItem("auth-token", res.data.token);
			setTokenToAxios(res.data.token);
			dispatch({
				type: "FETCH_CURRENT_USER_SUCCESS",
				payload: res.data.user,
			});

			return true;
		} catch (error) {
			return error;
		}
	};
};
const userTwitterAuth = () => {
	return async (dispatch) => {
		try {
			let res = await axios.get(`${url}/auth/twitter`);
			// localStorage.setItem("auth-token", res.data.token);
			// setTokenToAxios(res.data.token);
			console.log(res.data);
			dispatch({
				type: "FETCH_USER_TWITTER_ACCOUNT",
				payload: res.data,
			});
			return true;
		} catch (error) {
			return error;
		}
	};
};

export { userRegister, userLogin, userTwitterAuth };
