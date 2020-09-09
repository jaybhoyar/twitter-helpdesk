import React, { Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { userRegister } from "../../actions/auth";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: "",
			successMsg: "",
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
			email: this.state.email,
			password: this.state.password,
		};
		setTimeout(async () => {
			try {
				var res = await userRegister({ user });
				if (res.status === 200) {
					this.setState({
						successMsg: <p>Signed up successfully.</p>,
						errorMsg: "",
					});
					this.props.history.push("/login");
				}
			} catch (error) {
				this.setState({
					successMsg: "",
					errorMsg: <p>{error.error || "Something went wrong."}</p>,
				});
			}
		}, 3000);
	};

	render() {
		return (
			<div className="container-center">
				<div className="text-center form-parent">
					<form onSubmit={this.handleSubmit}>
						<div style={{ background: "green", color: "white" }}>
							{this.state.successMsg}
						</div>
						<div style={{ background: "red", color: "white" }}>
							{this.state.errorMsg}
						</div>
						<h1 className="auth-heading">Register</h1>
						<div className="form-content">
							<input
								type="text"
								name="name"
								placeholder="Name"
								value={this.state.name}
								onChange={this.handleChange}
								required
								autoFocus
							/>
							<input
								name="email"
								type="email"
								placeholder="Username"
								value={this.state.email}
								onChange={this.handleChange}
								required
							/>
							<input
								type="password"
								name="password"
								placeholder="Password"
								value={this.state.password}
								onChange={this.handleChange}
								required
							/>
							<button type="submit" className="button">
								Register
							</button>
							<br />
						</div>
						<div className="alter-auth-button">
							Already registered?
							<Link to="/login"> Login here</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
