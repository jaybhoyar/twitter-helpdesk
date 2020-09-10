import React, { Component } from "react";
import { oauthLogin } from "../../actions/auth";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { SiTwitter } from "react-icons/si";

class TwitterAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			token: "",
			errorMsg: "",
		};
	}
	// handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	var token = localStorage["auth-token"];
	// 	try {
	// 		let res = await this.props.dispatch(oauthLogin(token));
	// 		if (!res) {
	// 			return this.setState({
	// 				errorMsg: <p>{"Something went wrong."}</p>,
	// 			});
	// 		}
	// 		// this.props.history.push("/oauth-twitter");
	// 	} catch (error) {
	// 		this.setState({
	// 			errorMsg: <p>{error.error || "Something went wrong."}</p>,
	// 		});
	// 	}
	// };

	render() {
		return (
			<div className="container-center">
				<div className="text-center form-parent">
					<form>
						<h1 className="auth-heading">
							Connect your Twitter Account
						</h1>
						<div className="form-content">
							<a
								className="button twitter-auth-button"
								href="/api/users/auth/twitter"
							>
								Login to Twitter
								<SiTwitter />
							</a>
							<br />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default connect()(TwitterAuth);
