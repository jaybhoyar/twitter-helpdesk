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

const identifyUser = (token) => {
	return async (dispatch) => {
		dispatch({ type: "FETCH_CURRENT_USER_START" });
		setTokenToAxios(token);
		try {
			let res = await axios.get(`${url}/`);
			dispatch({
				type: "FETCH_CURRENT_USER_SUCCESS",
				payload: res.data.user,
			});
			return user;
		} catch (error) {
			dispatch({ type: "FETCH_CURRENT_USER_FAILED" });
			return error;
		}
	};
};
const oauthLogin = (token) => {
	return async (dispatch) => {
		try {
			setTokenToAxios(token);
			let user = await axios.get(
				`https://cors-anywhere.herokuapp.com/http://localhost:3000/api/users/auth/twitter`
			);
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
