import { combineReducers } from "redux";
import currentUser from "./current_User";

var rootReducer = combineReducers({
	currentUser,
});

export default rootReducer;
