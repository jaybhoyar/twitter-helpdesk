import React from "react";
import { GrAttachment } from "react-icons/gr";
export default function Chat() {
	return (
		<div class="eight-wide column">
			<div className="chat-header">
				<div className="user-info">
					<div className="user-avatar">
						<img
							src="https://randomuser.me/api/portraits/men/97.jpg"
							alt="test"
						/>
					</div>
					<h3 className="user-name">Ninety Seven</h3>
				</div>
			</div>
			<div className="reponse-container">
				<div className="user-avatar">
					<img
						src="https://randomuser.me/api/portraits/men/97.jpg"
						alt="test"
					/>
				</div>
				<input type="text" placeholder="Reply..." />
				<GrAttachment />
			</div>
		</div>
	);
}
