<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import '../scss/index.scss';
import { getCurrentUser, noToken } from '../actions'



import HomePage from '../components/HomePage';

class App extends Component {
  state = { 
    token: ""
  }

  componentDidMount() {
    var token = localStorage.getItem('authToken') || '';
    if(token) {
      this.setState({token: token})
      this.props.dispatch(getCurrentUser())
    } else {
      this.props.dispatch(noToken());
    }
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user
  }
}

export default connect(mapStateToProps)(App);





  
>>>>>>> ff6009a4c7f47850f8c119fb038df1f519fc6b60
