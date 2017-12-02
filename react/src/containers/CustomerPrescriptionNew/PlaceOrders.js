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
    getInitialState: function(){
        return {
            prescriptionDrugs: data.prescriptionDrugs.map(function(drugData){
                return {
                    id: drugData.id,
                    amount: 0
                }
            }),
            overTheCounterDrugs: otcd.map(function(drugData){
                return {
                    id: drugData.id,
                    amount: 0
                }
            })
        }
    },

    onPrescriptionDrugsAmountChange: function(index, amount){
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

    render: function(){
        
        return (
            <div>
                <OrderTable items = {data.prescriptionDrugs} isPrescribed = {true} onQuantityChange = {this.onPrescriptionDrugsAmountChange} />
                <OrderTable items = {otcd} isPrescribed = {false} onQuantityChange = {this.onOverTheCounterAmountChange} />
            </div>
        );
    }
});


module.exports = PlaceOrder;