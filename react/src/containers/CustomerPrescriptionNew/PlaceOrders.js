import {connect} from "react-redux";
import {getCustomerPrescriptionMedicine, getMedicines, getState} from "../../reducers/customerPrescriptionNew";
import {actions} from "../../actions/customerPrescriptionNew";

var React = require("react"),
  createReactClass = require("create-react-class"),
  ReactTable = require("react-bootstrap-table"),
  OrderTable = require("./OrderTable.js"),
  Table = ReactTable.BootstrapTable,
  TableHeaderColumn = ReactTable.TableHeaderColumn;

var data = {
  prescriptionDrugs: [
    {
      id: 0,
      name: "drug-name",
      prescribedQuantity: 5
    },
    {
      id: 1,
      name: "drug-name-too",
      prescribedQuantity: 4
    },
  ]
};

var otcd = [
  {
    id: 0,
    name: "drug-name",
  },
  {
    id: 1,
    name: "drug-name-too",
  }
];


var PlaceOrder = createReactClass({
  componentWillMount: function () {
    console.log('componentWillMount');
    this.props.fetchPrescribedMedicines();
    this.props.fetchMedicines();
    console.log(this.props.sate);
    console.log(this.props.prescriptedMedicines);
  },

  getInitialState: function () {
    return {
      prescriptionDrugs: data.prescriptionDrugs.map(function (drugData) {
        return {
          id: drugData.id,
          amount: 0
        }
      }),
      overTheCounterDrugs: otcd.map(function (drugData) {
        return {
          id: drugData.id,
          amount: 0
        }
      })
    }
  },

  onPrescriptionDrugsAmountChange: function (index, amount) {
    var prescriptionDrugs = this.state.prescriptionDrugs.slice();
    prescriptionDrugs[index].amount = amount || 0;

    this.setState({
      prescriptionDrugs: prescriptionDrugs
    })


  },

  onOverTheCounterAmountChange: function (index, amount) {
    var overTheCounterDrugs = this.state.overTheCounterDrugs.slice();
    overTheCounterDrugs[index].amount = amount || 0;

    this.setState({
      overTheCounterDrugs: overTheCounterDrugs
    });
  },

  render: function () {

    return (
      <div>
        <OrderTable items={this.props.prescriptedMedicines} isPrescribed={true}
                    onQuantityChange={this.onPrescriptionDrugsAmountChange}/>
        <OrderTable items={this.props.medicines} isPrescribed={false} onQuantityChange={this.onOverTheCounterAmountChange}/>
      </div>
    );
  }
});


const mapStateToProps = (state) => {
  return {
    prescriptedMedicines: getCustomerPrescriptionMedicine(state),
    medicines: getMedicines(state),
    sate: getState(state)
  };
};

const {fetchPrescribedMedicines, fetchMedicines} = actions;


export default connect(mapStateToProps, {
  fetchPrescribedMedicines,
  fetchMedicines
})(PlaceOrder)

