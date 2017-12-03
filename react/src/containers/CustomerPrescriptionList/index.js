import React from "react";
import {connect} from "react-redux";
import CustomerPrescriptionTable from "./CustomerPrescriptionTable";

class CustomerPrescriptionList extends React.Component {
	render() {
    return (
      <div className="main-content">
        <div className="tabular-list">
		      <h1>Customer prescription list</h1>
          <CustomerPrescriptionTable/>
        </div>
      </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	};
};


export default connect(mapStateToProps, {
})(CustomerPrescriptionList)
