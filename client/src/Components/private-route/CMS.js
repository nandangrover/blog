import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import MarkdownIt from 'markdown-it';
// import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import NavBar from "./NavBar";
import axios from "axios";

let md= new MarkdownIt();
class CMS extends Component {
  constructor() {
    super();
    this.state = {
      articleContent:""
    };
  }
  onChange = e => { 
    // new TextareaMarkdown(e.target);
    // console.log(e.target.value);
    this.setState({articleContent:md.render(e.target.value)})
    console.log(md.render(e.target.value));
    
  }

  getTitle = e => {
    let file = e.target.files[0];
        // console.log(file);
        
        if (file) {
          let data = new FormData();
          data.append('file', file);
          const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
          axios
          .post("/api/CMS/titleImg", data, config)
          .then((data) => {
            console.log(data);
            
          })
       }
  }
  
  render() {
    return (
      <div>
        <NavBar />
      <Container>
      <div className="CMS">
      <FormGroup>
          <Label for="File">Title Image</Label>
          <Input type="file" name="file" id="titleImageInput" getref="attachments" onChange={this.getTitle}/>
        </FormGroup>
      <FormGroup>
          <Label for="Title">Title</Label>
          <Input type="email" name="title" id="title" placeholder="Write your article's title" />
      </FormGroup>
      <FormGroup>
          <Label for="articleDesc">Article Description</Label>
          <Input type="email" name="articleDesc" id="articleDesc" placeholder="Article Description" />
        </FormGroup>
        <FormGroup>
          <Label for="File">Profile Pic for Article</Label>
          <Input type="file" name="file" id="profilePicInput" />
        </FormGroup>
        <FormGroup>
          <Label for="articleContent">Write your article here</Label>
          <Input type="textarea" name="textarea" id="articleContent" onChange={this.onChange}/>
          {/* <div id="preview"></div> */}
          <div dangerouslySetInnerHTML={{__html: this.state.articleContent}}></div>
        </FormGroup>
      </div>
      </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
});

// CMS.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };
//withRouter is used so as to use history to redirect to other components in actions
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(CMS));
