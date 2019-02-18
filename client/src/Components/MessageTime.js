import React, { Component } from "react";
// import { Badge } from "reactstrap";
import moment from "moment";

class MessageTime extends Component {
  constructor(props) {
    super(props);
    this.state = { date: moment(this.props.date).fromNow() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: moment(this.props.date).fromNow()
    });
  }
  render() {
    return (
      <div
        title={moment(this.props.date).toString()}
        style={{
          "color": "gray",
          "fontSize": "13px"
        }}
      >
        {this.state.date}
      </div>
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}
export default MessageTime;