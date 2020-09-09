import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogin } from "../../state/actions/auth";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errorMsg: "",
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password,
		};
		try {
			let res = await this.props.dispatch(userLogin({ user }));
			console.log(res, "inside submit");
			if (!res) {
				return this.setState({
					errorMsg: <p>{"Something went wrong."}</p>,
				});
			}
			this.props.history.push("/twitter-auth");
		} catch (error) {
			this.setState({
				errorMsg: <p>{error.error || "Something went wrong."}</p>,
			});
		}
	};

	render() {
		return (
			<div className="container-center">
				<div className="text-center form-parent">
					<form onSubmit={this.handleSubmit}>
						<h1>{this.state.errorMsg}</h1>
						<h1 className="auth-heading">Login</h1>
						<div className="form-content">
							<input
								name="email"
								type="email"
								placeholder="Email"
								value={this.state.email}
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
							Not Register yet?
							<Link to="/register"> Register here</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default connect()(Login);
