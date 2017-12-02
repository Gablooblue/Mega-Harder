import React from "react";
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
