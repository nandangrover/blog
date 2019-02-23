import React, { Component } from 'react';
// import styles from "../css/SearchModal.module.css";
import { Container } from "reactstrap";
import { connect } from "react-redux";
// import ContentHolder from "./ContentHolder";/
import TopNavigationBar from "./TopNavigationBar";
// import { } from "../actions/contentAction";

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    let params = (new URL(document.location)).searchParams;
    let searchParams = params.get("q");
    console.log(atob(searchParams));

  }

  render() {
    return (
      <div>
        <TopNavigationBar hidesearch={true} />
        <Container >
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
  {}
)(SearchPage);