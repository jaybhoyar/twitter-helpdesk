import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import Register from "../components/auth/Login";
import Login from "../components/auth/Login";
import TwitterAuth from "../components/auth/TwitterAuth";

class App extends Component {
	state = {
		token: "",
	};

	render() {
		return (
			<div>
				<Route exact path="/home" component={HomePage} />
				{/* <Route exact path="/twitter-auth" component={TwitterAuth} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route path="*" component={Login} /> */}
			</div>
		);
	}
}

export default App;
