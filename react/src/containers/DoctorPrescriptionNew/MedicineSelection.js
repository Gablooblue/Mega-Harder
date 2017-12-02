var React = require("react"),
    createReactClass = require("create-react-class"),
    ReactTable = require("react-bootstrap-table"),
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


var MedicineSelection = createReactClass({
    getInitialState: function(){
        return {
            selected: this.props.options[0]
        }
    },

    onClick: function(){
        this.props.onAdd(this.state.selected);
    },

    onChange: function(e){
        this.setState({
            selected: e.target.value
        });
    },

    render: function(){
        var options = this.props.options.map(function(option){
            return <option value = {option.value} key = {option.value}>{option.label}</option>  
        });

        return (
            <div>
                <select value = {this.state.selected || ""} onChange = {this.onChange}>
                    {options}
                </select>
                <input type = "button" value = "Add New Medication" onClick = {this.onClick} />
            </div>
        )
    }
});


module.exports = MedicineSelection;