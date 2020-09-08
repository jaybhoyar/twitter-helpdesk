import React, { Component } from "react";
import "../../styles/home.scss";

class Home extends Component {
	render() {
		return (
			<div className="home-container">
				<div className="header-container">
					<div className="colum-1">
						<h1 className="">Conversations</h1>
						<div></div>
					</div>
					<div className="colum-1">
						<button className="stadium-button">Online</button>
					</div>
				</div>
				<div className="ui grid">
					<div class="row">
						<div class="three wide column chats-list">1</div>
						<div class="eight wide column chats-list">2</div>
						<div class="four wide column chats-list">3</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
