import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      checkbox: false,
      posts: []
    };
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.searchInput = this.searchInput.bind(this);
  }

  searchInput(e) {
    this.setState({ search: e });
  }

  resetSearch() {
    axios
      .get(
        `/api/posts/${this.props.id}?search=${this.state.search}&userposts=${
          this.state.checkbox
        }`
      )
      .then(res => {
        this.setState({ posts: res.data, search: "" });
      });
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios
      .get(
        `/api/posts/${this.props.id}?search=${this.state.search}&userposts=${
          this.state.checkbox
        }`
      )
      .then(res => {
        console.log(res);
        this.setState({ posts: res.data });
      });
  }

  toggleCheckbox() {
    this.setState({ checkbox: !this.state.checkbox });
    this.resetSearch();
  }

  //Had profile_pic as profilePic and it didn't work. Worked out the bug and now it's working with profile_pic.
  render() {
    let posts = this.state.posts.map((elem, index) => {
      console.log('elem', elem)
        return (
        <Link to={`/post/${elem.id}`} key={ elem.id }>
        <div >
          <p>Post Title: {elem.title}</p>
          <p>Authors Name: {elem.username}</p>
          <img src={elem.profile_pic} alt="" width='200px' />
        </div></Link>
      );
    });
    return (
      <div>
        Dashboard eh'
        <input
          type="text"
          onChange={e => this.searchInput(e.target.value)}
          placeholder="search"
        />
        <button>Search</button>
        <button onClick={this.resetSearch.bind(this)}>Reset</button>
        My Posts
        <input
          type="checkbox"
          onClick={() => this.toggleCheckbox()}
          value={this.state.search}
        />
        {posts}
      </div>
    );
  }
}


//pulling id off of Redux State
let mapPropsToState = (state) => {
    return{
        id: state.id
    }
}

export default connect(mapPropsToState) (Dashboard);