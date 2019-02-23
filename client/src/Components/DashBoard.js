import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import TopNavigationBar from "./TopNavigationBar";
import ContentHolder from "./ContentHolder";

class DashBoard extends Component {
  render() {
    return (
      <div className="App">
        <TopNavigationBar />
        <ContentHolder />
      </div>
    );
  }
}

export default DashBoard;
