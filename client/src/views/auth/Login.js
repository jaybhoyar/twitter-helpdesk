import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const user = {
			username: this.state.username,
			password: this.state.password,
		};
		console.log(user);
	};

	render() {
		return (
			<div className="container-center">
				<div className="text-center form-parent">
					<form onSubmit={this.handleSubmit}>
						<h1 className="auth-heading">Login</h1>
						<div className="form-content">
							<input
								name="username"
								placeholder="Username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<input
								type="password"
								name="password"
								placeholder="Password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
							<button type="submit" className="button">
								Login
							</button>
							<br />
						</div>
						<div className="alter-auth-button">
							<Link to="/register">Register</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
