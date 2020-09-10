import React, { Component } from "react";
import { connect } from "react-redux";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { BiSlider } from "react-icons/bi";
import Chat from "./Chat";
import TweetItem from "./Tweet_item";
import { getTweets, getMentions } from "../../actions/tweets";

class Home extends Component {
	async componentDidMount() {
		if (!localStorage["auth-token"]) {
			this.props.history.push("/twitter-login");
		} else {
			this.props.dispatch(getMentions());
			// console.log(mentionsList);
		}
	}
	render() {
		console.log();
		return (
			<div className="home-container">
				<div className="header-container">
					<div className="column-1">
						<h1 className="main-topic-heading">Conversations</h1>
						<div className="search-bar">
							<IoIosSearch />
							<input type="text" placeholder="Quick Search" />
						</div>
						<div className="filter-button">
							<BiSlider style={{ color: "black" }} />
							<p>Filter</p>
						</div>
					</div>
					<div className="column-2">
						<button className="stadium-button">
							<div className="status-pointer"></div>
							<p>Online</p>
							<IoMdArrowDropdown
								style={{ width: "20px", height: "20px" }}
							/>
							<div className="dropdown-pointer"></div>
						</button>
					</div>
				</div>
				<div className="main-container">
					<div class="row">
						<div class="three-wide">
							<TweetItem />
							<TweetItem />
							<TweetItem />
							<TweetItem />
							<TweetItem />
							<TweetItem />
							<TweetItem />
						</div>
						<Chat />
						<div class="four-wide column"></div>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		mentionsList: state.mentionsList,
	};
}

export default connect(mapStateToProps)(Home);
