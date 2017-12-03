var React = require("react"),
    createReactClass = require("create-react-class"),
    ReactTable = require("react-bootstrap-table"),
    MedicineSelection = require("./MedicineSelection.js"),
    Table = ReactTable.BootstrapTable,
    TableHeaderColumn = ReactTable.TableHeaderColumn;

var medicineTypes = [
    {
        value: "Paracetamolv",
        label: "Paracetamol"
    },
    {
        value: "Weeeeeed",
        label: "Weed"
    },
    {
        value: "Shabu",
        label: "Syabu (Methampethamine)"
    }
];


function NumberInput(props){
    return <input type = "number" value = {props.value} onChange = {props.onChange} />
}



var MedicineList = createReactClass({
    getInitialState: function(){
        return {
            medicines: [{
                medtype: "paracetamol",
                average: 12,
                quantity: 5
            }, {
                medtype: "weed",
                average: 500000,
                quantity: 5
            }],
            selectedMedicine: null
        };
    },

    onQuantityChange: function(rowId){
        return (function(e){
            var medicines = this.state.medicines.slice(),
                quantity = e.target.value || 0;

            medicines[rowId].quantity = quantity;

            this.setState({
                medicines: medicines
            });
        }).bind(this);
    },

    onAdd: function(medicine){
        console.log(medicine.value);
    },

    createNumberInput: function(cell, row, formatExtraData, rowId){
        return <NumberInput value = {this.state.medicines[rowId].quantity} onChange = {this.onQuantityChange(rowId)} />
    },

    render: function(){


        return (
            <div className = "main-content">
                <div className = "tabular-list">
                    <div className = "medicine-list">
                        <Table data={this.state.medicines}>
                            <TableHeaderColumn isKey dataField="medtype">Medicine</TableHeaderColumn>
                            <TableHeaderColumn dataField="average">Averge</TableHeaderColumn>
                            <TableHeaderColumn
                                dataField="quantity"
                                dataFormat = {this.createNumberInput}
                                editColumnClassName = {"editable-cell"}>Quantity</TableHeaderColumn>
                        </Table>
                        <MedicineSelection options = {medicineTypes} onAdd = {this.onAdd}/>
                        <Button>Submit</Button>
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = MedicineList;
