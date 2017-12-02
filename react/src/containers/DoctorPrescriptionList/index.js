import React from "react";
import {connect} from "react-redux";
import {Table, Row, Col, Button} from "react-bootstrap";

class DoctorPrescriptionListView extends React.Component {
	render() {
		return (
		  <h1>Doctor prescription list</h1>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	};
};


export default connect(mapStateToProps, {
})(DoctorPrescriptionListView)
