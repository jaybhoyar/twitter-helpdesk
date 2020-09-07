import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/common/Home";
import Signup from "./views/auth/Signup";
import Signin from "./views/auth/Signin";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signin" component={Signin} />
					<Route exact path="/signup" component={Signup} />
					<Route path="*" component={Signin} />
				</Switch>
			</div>
		);
	}
}

export default App;
