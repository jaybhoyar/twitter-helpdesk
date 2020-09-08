import { combineReducers } from "redux";
import currentUser from "./current_user";
import errorReducer from "./error_reducer";

var rootReducer = combineReducers({
	currentUser,
	errors: errorReducer,
});

export default rootReducer;
