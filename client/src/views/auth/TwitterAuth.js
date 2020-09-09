import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class TwitterAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
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
						<h1 className="auth-heading">
							Connect to your Twitter Account
						</h1>
						<div className="form-content">
							<button type="submit" className="button">
								Login to Twitter
							</button>
							<br />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default TwitterAuth;
