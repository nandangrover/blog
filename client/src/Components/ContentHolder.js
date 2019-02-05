import React, { Component } from 'react';
import "../css/ContentHolder.css";
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
      <div className="ContentHolder">
      <div className="article" id="1">
      {/* <div className="titleImage"></div> */}
      <img src={require('../assets/images/test.jpeg')} alt="titleImage" className="titleImage"></img>
      <div className="title">DOM Selectors Explained</div>
      <div className="articleDesc">Understanding DOM selectors to write better code in JavaScript.</div>
      <div className="userProfile">
      {/* <div className="profilePic"></div> */}
      <img src={require('../assets/images/logo_transparent.png')} alt="profilePic" className="profilePic"></img>
      <div className="userInfoWrapper">
      <div className="userName">Nandan Grover</div>
      <div className="date">Feb 4</div>
      </div>
      </div>
      </div>
      <div className="article" id="2">
      <img src={require('../assets/images/test.jpeg')} alt="titleImage" className="titleImage"></img>
      <div className="title">DOM Selectors Explained</div>
      <div className="articleDesc">Understanding DOM selectors to write better code in JavaScript.</div>
      <div className="userProfile">
      <img src={require('../assets/images/logo_transparent.png')} alt="profilePic" className="profilePic"></img>
      <div className="userInfoWrapper">
      <div className="userName">Nandan Grover</div>
      <div className="date">Feb 4</div>
      </div>
      </div>
      </div>
      <div className="article" id="3">
      <img src={require('../assets/images/test.jpeg')} alt="titleImage" className="titleImage"></img>
      <div className="title">DOM Selectors Explained</div>
      <div className="articleDesc">Understanding DOM selectors to write better code in JavaScript.</div>
      <div className="userProfile">
      <img src={require('../assets/images/logo_transparent.png')} alt="profilePic" className="profilePic"></img>
      <div className="userInfoWrapper">
      <div className="userName">Nandan Grover</div>
      <div className="date">Feb 4</div>
      </div>
      </div>
      </div>
      <div className="horizontalLine"></div>



       <div className="article" id="1">
      {/* <div className="titleImage"></div> */}
      <img src={require('../assets/images/test.jpeg')} alt="titleImage" className="titleImage"></img>
      <div className="title">DOM Selectors Explained</div>
      <div className="articleDesc">Understanding DOM selectors to write better code in JavaScript.</div>
      <div className="userProfile">
      <div className="profilePic"></div>
      <div className="userName">Nandan Grover</div>
      <div className="date">Feb 4</div>
      </div>
      </div>
      <div className="article" id="2">
      <img src={require('../assets/images/test.jpeg')} alt="titleImage" className="titleImage"></img>
      <div className="title">DOM Selectors Explained</div>
      <div className="articleDesc">Understanding DOM selectors to write better code in JavaScript.</div>
      <div className="userProfile">
      <div className="profilePic"></div>
      <div className="userName">Nandan Grover</div>
      <div className="date">Feb 4</div>
      </div>
      </div>
      <div className="article" id="3">
      <img src={require('../assets/images/test.jpeg')} alt="titleImage" className="titleImage"></img>
      <div className="title">DOM Selectors Explained</div>
      <div className="articleDesc">Understanding DOM selectors to write better code in JavaScript.</div>
      <div className="userProfile">
      <div className="profilePic"></div>
      <div className="userName">Nandan Grover</div>
      <div className="date">Feb 4</div>
      </div>
      </div>
      <div className="horizontalLine"></div>
      </div>
      </Container>
    );
  }
}


export default ContentHolder;