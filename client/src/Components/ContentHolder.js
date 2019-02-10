import React, { Component } from 'react';
import styles from "../css/ContentHolder.module.css";
import { Container } from "reactstrap";
// import logo from "../assets/images/logo_transparent.png";

// eslint-disable-next-line react/require-render-return
class ContentHolder extends Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <Container>
      <div className={styles.ContentHolder}>
      <div className={styles.article} id="1">
      {/* <div className={styles.titleImage}></div> */}
      <img src={require('../assets/images/test.jpeg')} alt={styles.titleImage} className={styles.titleImage}></img>
      <div className={styles.title}>DOM Selectors Explained</div>
      <div className={styles.articleDesc}>Understanding DOM selectors to write better code in JavaScript.</div>
      <div className={styles.userProfile}>
      {/* <div className={styles.profilePic}></div> */}
      <img src={require('../assets/images/logo_transparent.png')} alt={styles.profilePic} className={styles.profilePic}></img>
      <div className={styles.userInfoWrapper}>
      <div className={styles.userName}>Nandan Grover</div>
      <div className={styles.date}>Feb 4</div>
      </div>
      </div>
      </div>
      <div className={styles.article} id="2">
      <img src={require('../assets/images/test.jpeg')} alt={styles.titleImage} className={styles.titleImage}></img>
      <div className={styles.title}>DOM Selectors Explained</div>
      <div className={styles.articleDesc}>Understanding DOM selectors to write better code in JavaScript.</div>
      <div className={styles.userProfile}>
      <img src={require('../assets/images/logo_transparent.png')} alt={styles.profilePic} className={styles.profilePic}></img>
      <div className={styles.userInfoWrapper}>
      <div className={styles.userName}>Nandan Grover</div>
      <div className={styles.date}>Feb 4</div>
      </div>
      </div>
      </div>
      <div className={styles.article} id="3">
      <img src={require('../assets/images/test.jpeg')} alt={styles.titleImage} className={styles.titleImage}></img>
      <div className={styles.title}>DOM Selectors Explained</div>
      <div className={styles.articleDesc}>Understanding DOM selectors to write better code in JavaScript.</div>
      <div className={styles.userProfile}>
      <img src={require('../assets/images/logo_transparent.png')} alt={styles.profilePic} className={styles.profilePic}></img>
      <div className={styles.userInfoWrapper}>
      <div className={styles.userName}>Nandan Grover</div>
      <div className={styles.date}>Feb 4</div>
      </div>
      </div>
      </div>
      <div className={styles.horizontalLine}></div>



       <div className={styles.article} id="1">
      {/* <div className={styles.titleImage}></div> */}
      <img src={require('../assets/images/test.jpeg')} alt={styles.titleImage} className={styles.titleImage}></img>
      <div className={styles.title}>DOM Selectors Explained</div>
      <div className={styles.articleDesc}>Understanding DOM selectors to write better code in JavaScript.</div>
      <div className={styles.userProfile}>
      <div className={styles.profilePic}></div>
      <div className={styles.userName}>Nandan Grover</div>
      <div className={styles.date}>Feb 4</div>
      </div>
      </div>
      <div className={styles.article} id="2">
      <img src={require('../assets/images/test.jpeg')} alt={styles.titleImage} className={styles.titleImage}></img>
      <div className={styles.title}>DOM Selectors Explained</div>
      <div className={styles.articleDesc}>Understanding DOM selectors to write better code in JavaScript.</div>
      <div className={styles.userProfile}>
      <div className={styles.profilePic}></div>
      <div className={styles.userName}>Nandan Grover</div>
      <div className={styles.date}>Feb 4</div>
      </div>
      </div>
      <div className={styles.article} id="3">
      <img src={require('../assets/images/test.jpeg')} alt={styles.titleImage} className={styles.titleImage}></img>
      <div className={styles.title}>DOM Selectors Explained</div>
      <div className={styles.articleDesc}>Understanding DOM selectors to write better code in JavaScript.</div>
      <div className={styles.userProfile}>
      <div className={styles.profilePic}></div>
      <div className={styles.userName}>Nandan Grover</div>
      <div className={styles.date}>Feb 4</div>
      </div>
      </div>
      <div className={styles.horizontalLine}></div>
      </div>
      </Container>
    );
  }
}


export default ContentHolder;