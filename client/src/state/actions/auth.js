import axios from "axios";
const url = "http://localhost:3100/api/users";

const setTokenToAxios = (token) => {
	axios.defaults.headers.common["authorization"] =
		token || localStorage["auth-token"] || "";
};

setTokenToAxios();

const userRegister = async (data) => {
	console.log(data);
	try {
		let res = await axios.post(`${url}/`, data);
		console.log(res.data);
		return res;
	} catch (error) {
		return error;
	}
};

export { userRegister };
