import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/common/Home";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";
import TwitterAuth from "./views/auth/TwitterAuth";
import "./index.css";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/twitter-auth" component={TwitterAuth} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route path="*" component={Login} />
			</Switch>
		);
	}
}

export default App;
