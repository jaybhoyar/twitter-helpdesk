import React from "react";
import "../../styles/home.scss";

export default function TweetItem(props) {
	return (
		<div className="tweet-item">
			<div className="user-avatar">
				<img
					src="https://randomuser.me/api/portraits/men/97.jpg"
					alt="test"
				/>
			</div>
			<div className="tweet-body">
				<h3 className="user-name">Ninety Seven</h3>
				<div className="tweet-text">
					Hello there! may I ask for favor
				</div>
			</div>
		</div>
	);
}
