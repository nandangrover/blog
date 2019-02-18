import React, { Component } from 'react';
import styles from "../css/Articles.module.css";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getSingleArticle, setItemsLoading } from "../actions/contentAction";
import TopNavigationBar from "./TopNavigationBar";
import MessageTime from "./MessageTime";
// import { getArticles } from "../actions/contentAction";

class Article extends Component {
 constructor () {
   super();
  this.state = {
  }
 }

 componentDidMount() {
  // let params = (new URL(window.location.href)).searchParams;
  // console.log(window.location.pathname.split('/')[2]);
  const id = window.location.pathname.split('/')[2];
  // this.props.setItemsLoading();
  this.props.getSingleArticle(id)
  
 }

  render() {
    const {individualArticle} = this.props.articles;
    const {loading} = this.props.articles;
    // console.log(this.props.articles.individualArticle,loading);
    
    
   return (
    <div>
    <TopNavigationBar />
    <Container>
    {loading ? (<div className={styles.loader}><img src={require('../assets/images/loader.gif')} alt="loader" className="loader"></img></div>) : ( 
    <div className={styles.ContentHolder}>
        <div className={styles.article} id={"article-wrapper"}>
         <div className={styles.title}>{individualArticle.title}</div>
        {/* User Profile */}
         <div className={styles.userProfile}>
         <img src={individualArticle.profilePic} alt={styles.profilePic} className={styles.profilePic}></img>
         <div className={styles.userInfoWrapper}>
         <div className={styles.userName} >{individualArticle.user[0][0]['name']}</div>
         <MessageTime date={individualArticle.date} />
         </div>
         </div>
        <div className={styles.imageWrapper}>
         <img src={individualArticle.titleImage} alt={styles.titleImage} className={styles.titleImage}></img>
         <div className={styles.articleDesc} >{individualArticle.articleDesc}</div>
        </div>

         <div className="content-wrapper">
          <div className="articleContent" dangerouslySetInnerHTML={{__html: individualArticle.articleContent}}></div>
         </div>
         </div>
      </div>)}
    </Container>
    </div>
   );
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(
  mapStateToProps,
  {getSingleArticle, setItemsLoading}
)(Article);