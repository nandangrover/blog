import React, { Component } from 'react';
import styles from "../css/ContentHolder.module.css";
import { Container } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getArticles } from "../actions/contentAction";
// import logo from "../assets/images/logo_transparent.png";

// eslint-disable-next-line react/require-render-return
class ContentHolder extends Component {
 constructor () {
   super();
  this.state = {
    isOpen: false
  }
 }


  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    // console.log(this.props.articles);
    const {articles} = this.props.articles;
    const {loading} = this.props.articles;
    console.log(this.props.articles.loading);
    
    
    return (
      <Container>
        {loading ? (<div className={styles.loader}><img src={require('../assets/images/loader.gif')} alt="loader" className="loader"></img></div>) : null}
      <div className={styles.ContentHolder}>

      {articles.map(({articleContent, _id,  articleDesc, profilePic, title, date, titleImage, user}, index) =>(
        <React.Fragment key={index}>
        <div className={styles.article} key= {index + "article"} id={index + "-article-wrapper"}>
         <img src={titleImage} alt={styles.titleImage} key= {index + "titleImage"} className={styles.titleImage}></img>
         <div className={styles.title} key= {index + "title"} >{title}</div>
         <div className={styles.articleDesc} key= {index + "articleDesc"} >{articleDesc}</div>
         <div className={styles.userProfile} key= {index + "userProfile"}>
         <img src={profilePic} key= {index + "profilePic"} alt={styles.profilePic} className={styles.profilePic}></img>
         <div className={styles.userInfoWrapper} key= {index + "userInfoWrapper"}>
         <div className={styles.userName} key= {index + "userName"}>{user[0][0]['name']}</div>
         <div className={styles.date} key= {index + "date"} >{date}</div>
         </div>
         </div>
         </div>
         {((index+1) % 3 === 0) && (index !== 0) ? (<div key= {index + "horizontalLine"} className={styles.horizontalLine}></div>) : null}
         </React.Fragment>
      ))}
      </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(
  mapStateToProps,
  { getArticles }
)(ContentHolder);