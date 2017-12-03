import React from "react";
import {connect} from "react-redux";
import PlaceOrder from "./PlaceOrders"

class CustomerPrescriptionNew extends React.Component {
  render() {
    return (

      <div className="main-content">
        <div className="tabular-list">
          <h1>Customer prescription list</h1>
          <PlaceOrder/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};


export default connect(mapStateToProps, {})(CustomerPrescriptionNew)
