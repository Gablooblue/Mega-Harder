import React from "react";
import {connect} from "react-redux";

class CustomerPrescriptionNew extends React.Component {
	render() {
		return (
		  <h1>Customer prescription list</h1>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	};
};


export default connect(mapStateToProps, {
})(CustomerPrescriptionNew)
