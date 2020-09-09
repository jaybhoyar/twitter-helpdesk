const initialState = {
<<<<<<< HEAD
	user: null,
	token: localStorage.getItem("authToken") || "",
	isAuthInProgress: true,
};

function currentUser(state = initialState, action) {
	switch (action.type) {
		case "USER_LOGIN_SUCCESS":
			return {
				...state,
				user: action.data.user,
				isAuthInProgress: false,
			};

		case "USER_LOGIN_FAILED":
			localStorage.clear();
			return {
				...state,
				isAuthInProgress: false,
				user: null,
			};

		case "LOG_OUT":
		case "NO_TOKEN":
			return {
				...state,
				user: null,
				isAuthInProgress: false,
				token: "",
			};
		default:
			return state;
	}
}

export default currentUser;
=======
  user: null,
  token: localStorage.getItem('authToken') || '',
  isAuthInProgress: true
}

function currentUser(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        user: action.data.user,
        isAuthInProgress: false
      }
    
    case 'USER_LOGIN_FAILED':
      localStorage.clear();
      return {
        ...state,
        isAuthInProgress: false,
        user: null
      }
    
    case 'LOG_OUT':
    case 'NO_TOKEN':
      return {
        ...state,
        user: null,
        isAuthInProgress: false,
        token: ''
      }
    default:
      return state;
  }
}

export default currentUser;
>>>>>>> ff6009a4c7f47850f8c119fb038df1f519fc6b60
