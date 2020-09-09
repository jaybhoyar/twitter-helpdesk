import React, { Component } from "react";
import { oauthLogin } from "../../actions/auth";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { SiTwitter } from "react-icons/si";

class TwitterAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMsg: "",
		};
	}

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
								href="/api/users/auth/twitter"
								className="button twitter-auth-button"
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
