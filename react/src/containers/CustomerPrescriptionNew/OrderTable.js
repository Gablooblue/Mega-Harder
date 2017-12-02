var React = require("react"),
    createReactClass = require("create-react-class"),
    ReactTable = require("react-bootstrap-table"),
    Table = ReactTable.BootstrapTable,
    TableHeaderColumn = ReactTable.TableHeaderColumn;


function NumberInput(props) {
    return <input type="number" value={props.value} onChange={props.onChange} />
}


var OrderTable = createReactClass({
    onAdd: function (medicine) {
        console.log(medicine.value);
    },

    createNumberInput: function (cell, row, formatExtraData, rowId) {
        var onChange = (function(e){
            this.props.onQuantityChange(rowId, e.target.value);
        }).bind(this);

        return <NumberInput value={this.props.items[rowId].amount} onChange={onChange} />
    },
    
    render: function() {
        return (
            <Table data={this.props.items} tableContainerClass="prescription-table">
                <TableHeaderColumn isKey dataField="name">Drug Name</TableHeaderColumn> 
                { this.props.isPrescribed && <TableHeaderColumn dataField="prescribedQuantity">Prescribed Quantity</TableHeaderColumn> }
                <TableHeaderColumn
                    dataField="order"
                    dataFormat={this.createNumberInput}></TableHeaderColumn>
            </Table>
        )
    }
});


module.exports = OrderTable;