import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./Wrapper";
import App from "./containers/App";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./scss/main.scss";
import "./scss/index.scss";

ReactDOM.render(
	<Wrapper>
		<App />
	</Wrapper>,
	document.getElementById("root")
);
