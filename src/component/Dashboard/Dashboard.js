import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            search: '',
            checkbox: false,
            posts: []
        }
        this.toggleCheckbox = this.toggleCheckbox.bind(this)
    }

    searchInput(e){
        this.setState({search: e})
    }

    resetSearch(){
        axios.get(`/api/posts/${this.props.id}?search=${this.state.search}&userposts=${this.state.checkbox}`)
        .then(res => {
            this.setState({search: '', posts: res.data})
        });
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts(){
        axios.get(`/api/posts/${this.props.id}?search=${this.state.search}&userposts=${this.state.checkbox}`)
        .then(res => {
            console.log(res)
            this.setState({posts: res.data})
        })
    }

    toggleCheckbox(){
        this.setState({checkbox: !this.state.checkbox})
        this.resetSearch()
    }
    


    render() {
        let posts = this.state.posts.map((elem, index) => {
            return <div key={index}>{elem.title}{elem.username}{elem.profilePic}</div>
        })
        return <div>
            Dashboard
            <input onChange={e => this.searchInput(e.target.value)} placeholder="search" />
            <button>Search</button>
            <button>Reset</button>
            <span>My Posts</span>
            <input type='checkbox' onClick={() => this.toggleCheckbox()} value={this.state.search}/>
            {posts}
          </div>;
    }
}


//pulling id off of Redux State
let mapPropsToState = (state) => {
    return{
        id: state.id
    }
}

export default connect(mapPropsToState) (Dashboard);