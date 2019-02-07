import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import MarkdownIt from 'markdown-it';
import TextareaMarkdown from 'textarea-markdown'
// import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, FormText, Container, ListGroup, ListGroupItem } from 'reactstrap';
import NavBar from "./NavBar";
import axios from "axios";

let md= new MarkdownIt();
class CMS extends Component {
  constructor() {
    super();
    this.state = {
      generateUrl: "Empty",
      titleImage: "",
      title: "",
      articleDesc: "",
      profilePic: "",
      articleContent:""
    };
  }
  onChange = e => { 
    // new TextareaMarkdown(e.target);
    // console.log(e.target.value);
    this.setState({articleContent:md.render(e.target.value)})
    console.log(md.render(e.target.value));
    
  }

  componentDidMount() {
    let data = new FormData();
    this.setState({data: data});

    //Textarea markdown
  // const token = document.querySelector("meta[name=\"csrf-token\"]").content;
  // const textarea = document.querySelector('#editor');
  // const token = document.querySelector("meta[name=\"csrf-token\"]").content;
 
  // new TextareaMarkdown(textarea, {
  //   endPoint: 'http://localhost:5000//api/CMS/images',
  //   paramName: 'file',
  //   responseKey: 'url',
  //   csrfToken: token,
  //   placeholder: 'uploading %filename ...'
  // })
  
  
  }
  componentDidUpdate() {
    console.log(this.state);
  }
 
  getImages = e => {
    let file = e.target.files[0];
        // console.log(file);
    const key = e.target.name;
        
        if (file) {
          let data = new FormData();
          data.append('file', file);
          const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
          axios
          .post("/api/CMS/images", data, config)
          .then((data) => {
            // console.log(data.data, key);
            if (key !== undefined) {
              this.setState({[key]:data.data})
            }
            
          })
       }
  }

  markdown = e => {
    this.setState({articleContent:md.render(e.target.value)})
  }
  
  render() {
    return (
      <div>
        <NavBar />
      <Container>
      <div className="CMS">
      <FormGroup>
          <Label for="File">Title Image</Label>
          <Input type="file" name="titleImage" id="titleImageInput" getref="attachments" onChange={this.getImages}/>
        </FormGroup>
      <FormGroup>
          <Label for="Title">Title</Label>
          <Input type="email" name="title" id="title" placeholder="Write your article's title" onChange={(e) => { this.setState({title: e.target.value})}}/>
      </FormGroup>
      <FormGroup>
          <Label for="articleDesc">Article Description</Label>
          <Input type="email" name="articleDesc" id="articleDesc" placeholder="Article Description" onChange={(e) => { this.setState({articleDesc: e.target.value})}}/>
        </FormGroup>
        <FormGroup>
          <Label for="File">Profile Pic for Article</Label>
          <Input type="file" name="profilePic" id="profilePicInput" getref="attachments" onChange={this.getImages}/>
        </FormGroup>
        {/* <FormGroup>
          <Label for="articleContent">Write your article here</Label>
          <Input type="textarea" name="textarea" id="articleContent" onChange={this.onChange}/>
          <div dangerouslySetInnerHTML={{__html: this.state.articleContent}}></div>
        </FormGroup> */}
        <FormGroup>
          <Label for="File">Generate URL to insert in article</Label>
          <Input type="file" name="generateUrl" id="profilePicInput" getref="attachments" onChange={this.getImages}/>
            <ListGroup>
             <ListGroupItem>{this.state.generateUrl}</ListGroupItem>
            </ListGroup>
              {/* <BreadcrumbItem active>{this.state.generateUrl}</BreadcrumbItem> */}
          <Label for="articleContent">Write your article here</Label>
          <Input type="textarea" name="textarea" id="articleContent" onChange={this.markdown}/>
          <div dangerouslySetInnerHTML={{__html: this.state.articleContent}}></div>
        </FormGroup>
        <Button color="primary" size="lg" active>Submit</Button>{' '}
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
