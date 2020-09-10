import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from "react-redux";
import { identifyUser } from "../../actions/auth";
class Token extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		try {
			var { token } = this.props.match.params;
			localStorage.setItem("auth-token", token);
			if (localStorage["auth-token"]) {
				this.props.dispatch(identifyUser());
				this.props.history.push("/");
			}
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		return <> token page</>;
	}
}
function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
	};
}
export default connect(mapStateToProps)(Token);
