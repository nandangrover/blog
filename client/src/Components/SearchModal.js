import React, { Component } from 'react';
import styles from "../css/SearchModal.module.css";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { } from "../actions/contentAction";

class SearchModal extends Component {
 constructor () {
   super();
   this.searchArea = React.createRef();
   this.state = {
  }
 }

 componentDidMount() {
  document.addEventListener('mousedown', this.closeModal);
  this.searchArea.current.focus(); 
 }

 componentWillUnmount() {
  document.removeEventListener('mousedown', this.closeModal);
}

 closeModal = (e) => {
  //  console.log(e.currentTarget);
   
   if (e.target !== this.searchArea.current) {
     this.props.toggleSearch();
   }
 }

  render() {
   return (
    //  <Container >
    <div className={styles.popUp}>
      <div className={styles.modalHolder} >
        <div className={styles.searchIcon}>
        <svg className={styles.svgSearchIcon} fill="#fff" width="25" height="25"><path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path></svg>
        </div>
        <input className={styles.inputArea} ref={this.searchArea} placeholder="Search"></input>
      </div>
    </div>
    // </Container>
   );
  }
}

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(
  mapStateToProps,
  {}
)(SearchModal);