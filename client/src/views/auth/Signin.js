import React from "react";
import "../../index.css";

export default function SignIn() {
	return (
		<div class="text-center form-parent">
			<form method="post">
				<h1>Sign in</h1>
				<div class="form-content">
					<input id="user-name" placeholder="email" type="email" />
					<input
						id="password"
						placeholder="password"
						type="password"
					/>
					<br />
					<button class="button">Log in</button>
					<br />
				</div>
			</form>
		</div>
	);
}
