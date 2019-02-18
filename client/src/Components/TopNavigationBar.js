import React, { Component } from 'react';
import styles from "../css/TopNavigationBar.module.css";
import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png";

// eslint-disable-next-line react/require-render-return
class DashBoard extends Component {
  state = {
    isOpen: false
  }

 showLink = () => {
  //  console.log(styles.topNav);
   
  let x = document.getElementById("topNav");
  // let logo = document.getElementById({styles.logo});
  // console.log(x.className,styles.navHead);
  
  if (x.className === styles.navHead) {
    x.className += ` ${styles.responsive}`;
  } else {
    x.className = styles.navHead;
    // logo.style.display = 'inline-flex';
  }
 }

  render() {
    return (
      <div>
        <div className={styles.navHead} id="topNav">
        {/* <img src={logo} className={styles.logo} id={styles.logo} alt="logoImg"/> */}
        {/* <div className={styles.logo} id={styles.logo}>Logo</div> */}
        <div className={styles.logo} id={styles.logo}>Nandan Grover</div>
        <div className={styles.leftNav}>
         <Link className={styles.links} id='home' to = '/'>Home</Link>
         <div className={styles.links} id='about'>About</div>
         <div className={styles.links} id='archieve'>Archive</div>
         <div className={styles.links} id='contact'>Contact Me</div>
         <div className={styles.icon} onClick={this.showLink}><i className="fa fa-bars"></i></div>
        </div>
        </div>
        {/* <div className='rightNav'>
         <div className={styles.links} id='facebook'>Facebook</div>
         <div className={styles.links} id='insta'>Insta</div>
         <div className={styles.links} id='search'>Search</div>
        </div> */}
       
      </div>
    );
  }
}


export default DashBoard;