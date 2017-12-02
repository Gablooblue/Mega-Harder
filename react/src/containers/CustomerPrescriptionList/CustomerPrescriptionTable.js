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
    createButton: function(cell, row){
        var onClick = (function(){
            this.props.onClick(row.id);
        }).bind(this);

        return <input type = "button" value = "Place Order" onClick = {onClick}/>
    
    },

    render: function(){
        return (
            <div>
                <h2>Prescriptions</h2>
                <Table data={data} tableContainerClass="prescription-table">
                    <TableHeaderColumn isKey dataField="details">Prescription Details</TableHeaderColumn>
                    <TableHeaderColumn 
                        dataField="order"
                        dataFormat = {this.createButton}></TableHeaderColumn>
                </Table>
            </div>
        );
    }
});


module.exports = CustomerPrescriptionTable;