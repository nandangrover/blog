import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
// import "../../css/material.min.css";
class Landing extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row" style={{ margin: "auto" }}>
            <div className="col s12 center-align">
              <h4>Admin Panel</h4>
              <br />
              <Link
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                to="/privateroute/avadakedavara/Register"
              >
              <button style={{cursor: "pointer"}}>Register</button>
              </Link>
              <Link
                style={{
                  marginLeft: "2rem",
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect white hoverable black-text"
                to="/privateroute/avadakedavara/Login"
              >
                {" "}
                <button style={{cursor: "pointer"}}>Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
