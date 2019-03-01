import React, { Component } from 'react';
import styles from "../css/TopNavigationBar.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal.js";
// import logo from "../assets/images/logo.png";

// eslint-disable-next-line react/require-render-return
class TopNavigationBar extends Component {
  state = {
    isOpen: false,
    searchModal: false,
    display: "inline-flex"
  }

  componentDidMount() {
    // console.log(this.props.hidesearch);
    if (this.props.hidesearch) {
      this.setState({ display: "none" })
    }

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

  searchModal = () => {
    this.setState({ searchModal: !this.state.searchModal }, () => {
      // console.log(this.state.searchModal);
      if (this.state.searchModal) {
        this.setState({ display: "none" });
      } else {
        this.setState({ display: "inline-flex" })
      }
    })
  }

  showSignUp = () => {
    this.props.history.push({
      pathname: '/signup'
    });
  }

  render() {
    return (
      <div>
        <div className={styles.navHead} id="topNav">
          <div className={styles.hiddenIcons}>
            <div className={styles.links} onClick={this.showSignUp}>Sign In</div>
            <svg className={styles.svgSearchIcon} id="searchIcon" style={{ display: this.state.display }} fill="#fff" width="25" height="25" onClick={this.searchModal}><path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path></svg>
          </div>
          {this.state.searchModal ? (<SearchModal toggleSearch={this.searchModal} />) : null}
          <div className={styles.leftNav}>
            <Link className={styles.links} id='home' to='/'>Home</Link>
            <div className={styles.links} id='about'>About</div>
            <div className={styles.links} id='archieve'>Archive</div>
            <div className={styles.links} id='contact'>Contact Me</div>
            <div className={styles.icon} onClick={this.showLink}><i className="fa fa-bars"></i></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(TopNavigationBar));