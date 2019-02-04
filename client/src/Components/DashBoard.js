import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TopNavigationBar from "./TopNavigationBar";

class DashBoard extends Component {
  render() {
    return (
      <div className="App">
          <TopNavigationBar />
      </div>
    );
  }
}

export default DashBoard;
