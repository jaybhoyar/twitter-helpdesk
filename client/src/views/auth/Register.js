import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
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
			name: this.state.name,
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
						<h1>Register</h1>
						<div className="form-content">
							<input
								name="name"
								placeholder="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
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
								Register
							</button>
							<br />
						</div>
						<div className="alter-auth-button">
							<Link to="/login">Login</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
