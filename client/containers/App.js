import React, { Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { identifyUser } from "../actions/auth";
import HomePage from "../components/common/HomePage";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import TwitterAuth from "../components/auth/TwitterAuth";

function ProtectedRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/oauth-twitter" component={TwitterAuth} />
			<Route path="*" component={HomePage} />
		</Switch>
	);
}
function PublicRoutes() {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route eact path="/register" component={Register} />
			<Route path="*" component={Login} />
		</Switch>
	);
}

class App extends Component {
	state = {};
	componentDidMount() {
		if (localStorage["auth-token"]) {
			this.props.dispatch(identifyUser());
		}
	}

	render() {
		const currentUser = this.props.currentUser;
		return (
			<>{currentUser.userInfo ? <ProtectedRoutes /> : <PublicRoutes />}</>
		);
	}
}

function mapStateToProps(state) {
	return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(App);
