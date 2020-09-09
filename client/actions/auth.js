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

const identifyUser = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: "FETCH_CURRENT_USER_START" });
			let user = await axios.get(`${url}/`);
			dispatch({
				type: "FETCH_CURRENT_USER_SUCCESS",
				payload: user.data.user,
			});
		} catch (error) {
			return error;
		}
	};
};
const oauthLogin = (token) => {
	return async (dispatch) => {
		try {
			setTokenToAxios(token);
			// var token = localStorage["auth-token"] || "";
			console.log(token, "token here --------------------------------");

			let user = await axios.get(`${url}/auth/twitter`);
			dispatch({
				type: "FETCH_CURRENT_USER_SUCCESS",
				payload: user.data.user,
			});
			return true;
		} catch (error) {
			return error;
		}
	};
};

export { userRegister, userLogin, identifyUser, oauthLogin };
