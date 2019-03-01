import React, { Component } from 'react';
import styles from "../css/SignUp.module.css";
import { Container } from "reactstrap";
import { connect } from "react-redux";
// import { getSingleArticle, setItemsLoading } from "../actions/contentAction";
// import TopNavigationBar from "./TopNavigationBar";
// import MessageTime from "./MessageTime";
// import { getArticles } from "../actions/contentAction";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
      client_id: "171734269421-ss6ln1muekfrrr4p6h5ireodur2q4udv.apps.googleusercontent.com"
  }).then(() => {
      window.gapi.signin2.render('g-signin2', {
        'scope': 'profile email',
        'width': 250,
        'height': 50,
        'longtitle': false,
        'theme': 'dark',
        'onsuccess': this.onSuccess,
      })
    }) 
  })    
  }


  onSuccess(googleUser) {
    console.log("hereeee");
    
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  render() {
    return (
      <Container>
        <div className={styles.logo}>Grovers Blog</div>
        <div className={styles.authenticateModal}>
        <div className={styles.title}>Join The Movemenet.</div>
        <div className={styles.info}>Create an account to write stories, and follow authors and topics that you love.</div>
        <div className="g-signin2"></div>
        <div className={styles.signIn}>
        <div className={styles.signInInfo}>Already have an account?</div>
        <button className={styles.signIn}>Sign In</button>
        </div>
        <div className={styles.serviceInfo}>We don't share your data with service providers. Rest be assure your data is safe with us.</div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {}
)(SignUp);