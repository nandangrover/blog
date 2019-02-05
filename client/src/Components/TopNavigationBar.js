import React, { Component } from 'react';
import "../css/TopNavigationBar.css";
// import logo from "../assets/images/logo.png";

// eslint-disable-next-line react/require-render-return
class DashBoard extends Component {
  state = {
    isOpen: false
  }

 showLink = () => {
  let x = document.getElementById("topNav");
  // let logo = document.getElementById("logo");
  if (x.className === "navHead") {
    x.className += " responsive";
  } else {
    x.className = "navHead";
    // logo.style.display = 'inline-flex';
  }
 }

  render() {
    return (
      <div>
        <div className='navHead' id='topNav'>
        {/* <img src={logo} className="logo" id="logo" alt="logoImg"/> */}
        {/* <div className="logo" id="logo">Logo</div> */}
        <div className="logo" id="logo">Nandan Grover</div>
        <div className='leftNav'>
         <div className='links' id='home'>Home</div>
         <div className='links' id='about'>About</div>
         <div className='links' id='archieve'>Archive</div>
         <div className='links' id='contact'>Contact Me</div>
         <div className='icon' onClick={this.showLink}><i className="fa fa-bars"></i></div>
        </div>
        </div>
        {/* <div className='rightNav'>
         <div className='links' id='facebook'>Facebook</div>
         <div className='links' id='insta'>Insta</div>
         <div className='links' id='search'>Search</div>
        </div> */}
       
      </div>
    );
  }
}


export default DashBoard;