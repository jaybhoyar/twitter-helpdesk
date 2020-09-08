import React from "react";

import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className="container-center">
			<div className="text-center form-parent">
				<form method="post">
					<h1>Login</h1>
					<div className="form-content">
						<input
							id="user-name"
							placeholder="email"
							type="email"
						/>
						<input
							id="password"
							placeholder="password"
							type="password"
						/>
						<br />
						<button className="button">Log in</button>
					</div>
					<div className="alter-auth-button">
						<Link to="/register">Register</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
