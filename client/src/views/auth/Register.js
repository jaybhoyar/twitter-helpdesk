import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { userRegister } from "../../state/actions/auth";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			username: "",
			password: "",
			errors: "",
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
			var res = this.props.dispatch(userRegister({ user }));
			if (res.status === 200) {
				console.log(res);
			}
		} catch (error) {
			this.setState({
				errors: <p>{error.error || "Something went wrong."}</p>,
			});
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
const mapStateToProps = (state) => ({
	errors: state.errors,
});

export default connect(mapStateToProps)(withRouter(Register));
