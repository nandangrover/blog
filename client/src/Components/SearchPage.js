import React, { Component } from 'react';
import styles from "../css/SearchPage.module.css";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TopNavigationBar from "./TopNavigationBar";
import { searchArticle } from "../actions/contentAction";
import MessageTime from "./MessageTime";

class SearchPage extends Component {
  constructor() {
    super();
    this.searchArea = React.createRef();
    this.state = {
      params: "",
      search : "",
    }
  }

  componentDidMount() {
    console.log("heree");
    
    let params = (new URL(document.location)).searchParams;
    let searchParams = atob(params.get("q"));
    this.setState({params: searchParams}, () => {
      this.searchArea.current.setAttribute('value', `${this.state.params}`);
    });
    this.props.searchArticle(searchParams);
  }

  onChange = (e) => {
    // console.log(e.target.value);
    this.setState({[e.target.name]: [e.target.value]});
  }

  submit = (e) => {
    console.log(e.keyCode);
    
    if (e.keyCode === 13 || !e.keyCode) {
      this.props.history.push({
        pathname: '/search',
        search: `?q=${btoa(this.state.search)}`
      });
      this.props.searchArticle(this.state.search);
    }
  }

  render() {
    const { searchedList } = this.props.articles;
    const { loading } = this.props.articles;
    
    return (
      <div>
        <TopNavigationBar hidesearch={true} />
        <Container >
        <div className={styles.modalHolder} >
          <input className={styles.inputArea} autoComplete="off" ref={this.searchArea} name="search" onChange={this.onChange} onKeyDown={this.submit} placeholder="Search"></input>
        <div className={styles.searchIcon} onClick={this.submit}>
          <svg className={styles.svgSearchIcon} width="25" height="25"><path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path></svg>
        </div>
        </div>

        {loading ? (<div className={styles.loader}><img src={require('../assets/images/loader.gif')} alt="loader" className="loader"></img></div>) : null}
        <div className={styles.ContentHolder}>

          {searchedList.map(({ _id, articleDesc, profilePic, title, date, titleImage, user }, index) => (
            <React.Fragment key={index}>
              <div className={styles.article} key={index + "article"} id={index + "-article-wrapper"}>
                <img src={titleImage} alt={styles.titleImage} key={index + "titleImage"} className={styles.titleImage} onClick={() => this.article(_id, title)}></img>
                <div className={styles.title} key={index + "title"} >{title}</div>
                <div className={styles.articleDesc} key={index + "articleDesc"} >{articleDesc}</div>
                <div className={styles.userProfile} key={index + "userProfile"}>
                  <img src={profilePic} key={index + "profilePic"} alt={styles.profilePic} className={styles.profilePic}></img>
                  <div className={styles.userInfoWrapper} key={index + "userInfoWrapper"}>
                    <div className={styles.userName} key={index + "userName"}>{user[0][0]['name']}</div>
                    <MessageTime key={index + "date"} date={date} />
                    {/* <div className={styles.date} key= {index + "date"} >{date}</div> */}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
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
  { searchArticle }
)(withRouter(SearchPage));