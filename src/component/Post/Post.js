import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: {
        title: "",
        image: "",
        content: "",
        username: "",
        profile_pic: ""
      }
    };
  }

  //React #18 using 'Match'
  componentDidMount() {
    axios.get(`/api/post/${this.props.match.params.postid}`).then(res => {
      this.setState({ post: res.data[0] });
    });
  }

  render() {
    return (
      <div>
        <p>Title: {this.state.post.title}</p>
        <img src={this.state.post.image} alt="" />
        <p>Content: {this.state.post.content}</p>
        <p>Username: {this.state.post.username}</p>
        <img src={this.state.post.profile_pic} alt="" width="500px" />
      </div>
    );
  }
}

export default Post;
