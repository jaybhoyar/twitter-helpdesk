import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link, withRouter } from "react-router-dom";
import { SiTwitter } from "react-icons/si";
import { userTwitterAuth } from "../../actions/auth.js";

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
	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res = await this.props.dispatch(userTwitterAuth());
			console.log(res, "inside submit");
			// if (!res) {
			// 	return this.setState({
			// 		errorMsg: <p>{"Something went wrong."}</p>,
			// 	});
			// }
			// this.props.history.push("/");
		} catch (error) {
			console.log(error);
			// this.setState({
			// 	errorMsg: <p>{error.error || "Something went wrong."}</p>,
			// });
		}
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
							<button
								type="submit"
								className="button twitter-auth-button"
							>
								Login to Twitter
								<SiTwitter />
							</button>
							<br />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default connect()(TwitterAuth);
