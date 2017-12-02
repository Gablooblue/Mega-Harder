import React from "react";
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import "./stylesheets/main.scss";
import Header from "./components/Header"

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className="app">
        <Header/>
        <container>
          {this.props.children}
        </container>
      </div>
    );
  }
}
