import {connect} from "react-redux";
import {Button} from "react-bootstrap";
import {getCustomerPrescriptions} from "../../reducers/customerPrescriptionList";
import {actions} from "../../actions/customerPrescriptionList";


var React = require("react"),
    createReactClass = require("create-react-class"),
    ReactTable = require("react-bootstrap-table"),
    Table = ReactTable.BootstrapTable,
    TableHeaderColumn = ReactTable.TableHeaderColumn;


var data = [
    {
        id: 0,
        details: "something"
    },
    {
        id: 1,
        details: "somewhere"
    }
];


function createButton(cell, row){
    return <input type = "button" value = "Place Order" />
}


var CustomerPrescriptionTable = createReactClass({
  componentWillMount: function () {
    console.log('componentWillMount');
    this.props.fetchPrescriptions();
  },

    createButton: function(cell, row){
        var onClick = (function(){
            this.props.onClick(row.id);
        }).bind(this);

      return <Button onClick = {onClick}>Place Order</Button>

    },

    render: function(){
        return (
            <div>
                <h2>Prescriptions</h2>
                <Table data={this.props.prescriptions} tableContainerClass="prescription-table">
                    <TableHeaderColumn isKey dataField="details">Prescription Details</TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="order"
                        dataFormat = {this.createButton}/>
                </Table>
            </div>
        );
    }
});



const mapStateToProps = (state) => {
  return {
    prescriptions: getCustomerPrescriptions(state)
  };
};

const {fetchPrescriptions} = actions;


export default connect(mapStateToProps, {
  fetchPrescriptions
})(CustomerPrescriptionTable)

