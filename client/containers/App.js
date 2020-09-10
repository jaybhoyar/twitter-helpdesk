import React, { Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Token from "../components/auth/Token";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { identifyUser } from "../actions/auth";
import Home from "../components/common/HomePage";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import TwitterAuth from "../components/auth/TwitterAuth";

class App extends Component {
	state = {};
	componentDidMount() {
		if (localStorage["auth-token"]) {
			this.props.dispatch(identifyUser());
		}
	}

	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/oauth/:token" component={Token} />
				<Route exact path="/twitter-login" component={TwitterAuth} />
				<Route path="*" component={TwitterAuth} />
				{/* <Route path="/login" component={Login} />
      <Route path="/register" component={Register} /> */}
			</Switch>
		);
	}
}

function mapStateToProps(state) {
	return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(App);
