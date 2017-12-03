import {Grid, Row, Col} from "react-bootstrap";

var React = require("react"),
    createReactClass = require("create-react-class"),
    ReactTable = require("react-bootstrap-table"),
    Table = ReactTable.BootstrapTable,
    TableHeaderColumn = ReactTable.TableHeaderColumn;


var data = [{
    name: "Renz Dela Cruz",
    date: "09-10-2015"
}, {
    name: "Ace Magtanggol",
    date: "12-10-2014"
}];


var PrescriptionTable = createReactClass({


    render: function(){
        return (
            <div className = "main-content">
                <div className = "tabular-list">
                    <h2>Prescriptions</h2>
                    <input type = "button" onClick = {null}/>
                    <Table data={data} tableContainerClass="prescription-table">
                        <TableHeaderColumn isKey dataField="name">Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="date">Date</TableHeaderColumn>
                    </Table>
                </div>
            </div>
        );
    }
});


module.exports = PrescriptionTable;
