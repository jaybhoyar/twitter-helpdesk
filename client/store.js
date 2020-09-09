<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
=======
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
>>>>>>> ff6009a4c7f47850f8c119fb038df1f519fc6b60
import thunk from "redux-thunk";

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

<<<<<<< HEAD
export default store;
=======
export default store;
>>>>>>> ff6009a4c7f47850f8c119fb038df1f519fc6b60
