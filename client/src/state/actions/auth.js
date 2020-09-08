import axios from "axios";
import { GET_ERRORS } from "./types";
const url = "/api/users";

const setTokenToAxios = (token) => {
	axios.defaults.headers.common["authorization"] =
		token || localStorage["auth-token"] || "";
};

setTokenToAxios();

const userRegister = async (user, dispatch) => {
	try {
		var res = await axios.post(`${url}/`, user);
		return res.data;
	} catch (error) {
		return error;
	}
};

export { userRegister };
