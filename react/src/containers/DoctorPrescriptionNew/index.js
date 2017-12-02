import React from "react";
import {connect} from "react-redux";
import {Table, Row, Col, Button} from "react-bootstrap";


class DoctorPrescriptionNewView extends React.Component {
	render() {
		return (
		  <h1>New doctor prescription</h1>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	};
};


export default connect(mapStateToProps, {
})(DoctorPrescriptionNewView)
