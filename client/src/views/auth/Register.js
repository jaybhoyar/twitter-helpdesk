import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userRegister } from "../../state/actions/auth";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			username: "",
			password: "",
			errorMsg: "",
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
		try {
			let res = this.props.dispatch(userRegister({ user }));
			console.log(res, "inside submit");
			// if (!res) {
			// 	return this.setState({
			// 		errorMsg: <p>{"Something went wrong."}</p>,
			// 	});
			// }
			// alert("Logged In Successfully");
			// this.props.history.push("/login");
		} catch (error) {
			console.log("inside catch");
		}
	};

	render() {
		return (
			<div className="container-center">
				<div className="text-center form-parent">
					<form onSubmit={this.handleSubmit}>
						<h1 className="auth-heading">Register</h1>
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
const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(Register);
