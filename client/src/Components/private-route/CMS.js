import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import MarkdownIt from 'markdown-it';
// import TextareaMarkdown from 'textarea-markdown'
// import PropTypes from "prop-types";
import { Button, FormGroup, Label, Input, Container, ListGroup, ListGroupItem } from 'reactstrap';
import NavBar from "./NavBar";
import axios from "axios";
import isEmpty from 'is-empty';

let md = new MarkdownIt();
class CMS extends Component {
  constructor() {
    super();
    this.state = {
      generateUrl: "Empty",
      titleImage: "",
      title: "",
      articleDesc: "",
      profilePic: "",
      articleContent: "",
      isEmpty: false
    };
  }
  onChange = e => {
    // new TextareaMarkdown(e.target);
    // console.log(e.target.value);
    this.setState({ articleContent: md.render(e.target.value), isEmpty: false })
    // console.log(md.render(e.target.value));

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
          if (key !== undefined) {
            this.setState({ [key]: data.data.replace('http', 'https'), isEmpty: false })
          }

        })
    }
  }

  markdown = e => {
    this.setState({ articleContent: md.render(e.target.value) })
  }

  submit = e => {
    Object.keys(this.state).forEach((key) => {
      if (isEmpty(this.state[key])) {
        this.setState({ isEmpty: true })
      }
    })
    if (!this.state.isEmpty) {
      const article = {
        user: this.props.auth.user,
        profilePic: this.state.profilePic,
        title: this.state.title,
        titleImage: this.state.titleImage,
        articleDesc: this.state.articleDesc,
        articleContent: this.state.articleContent
      }
      axios
        .post("/api/CMS/article", article)
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
            <div style={{
              "margin": "auto",
              "width": "100%",
              "color": "red",
              "textAlign": "center",
              "fontSize": "20px"
            }}>{this.state.isEmpty ? "Fill out every field" : null}</div>
            <FormGroup>
              <Label for="File">Title Image</Label>
              <Input type="file" name="titleImage" id="titleImageInput" getref="attachments" onChange={this.getImages} />
            </FormGroup>
            <FormGroup>
              <Label for="Title">Title</Label>
              <Input type="email" name="title" id="title" placeholder="Write your article's title" onChange={(e) => { this.setState({ title: e.target.value, isEmpty: false }) }} />
            </FormGroup>
            <FormGroup>
              <Label for="articleDesc">Article Description</Label>
              <Input type="email" name="articleDesc" id="articleDesc" placeholder="Article Description" onChange={(e) => { this.setState({ articleDesc: e.target.value, isEmpty: false }) }} />
            </FormGroup>
            <FormGroup>
              <Label for="File">Profile Pic for Article</Label>
              <Input type="file" name="profilePic" id="profilePicInput" getref="attachments" onChange={this.getImages} />
            </FormGroup>
            {/* <FormGroup>
          <Label for="articleContent">Write your article here</Label>
          <Input type="textarea" name="textarea" id="articleContent" onChange={this.onChange}/>
          <div dangerouslySetInnerHTML={{__html: this.state.articleContent}}></div>
        </FormGroup> */}
            <FormGroup>
              <Label for="File">Generate URL to insert in article</Label>
              <Input type="file" name="generateUrl" id="profilePicInput" getref="attachments" onChange={this.getImages} />
              <ListGroup>
                <ListGroupItem>{this.state.generateUrl}</ListGroupItem>
              </ListGroup>
              {/* <BreadcrumbItem active>{this.state.generateUrl}</BreadcrumbItem> */}
              <Label for="articleContent">Write your article here</Label>
              <Input type="textarea" name="textarea" id="articleContent" onChange={this.markdown} />
              <div dangerouslySetInnerHTML={{ __html: this.state.articleContent }}></div>
            </FormGroup>
            <Button color="primary" size="lg" active onClick={this.submit}>Submit</Button>
          </div>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
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
