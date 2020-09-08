import React, { Component } from "react";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { BiSlider } from "react-icons/bi";
import "../../styles/home.scss";

class Home extends Component {
	render() {
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
						<div class="three-wide column">1</div>
						<div class="eight-wide column">2</div>
						<div class="four-wide column">3</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
