import React, { Component } from 'react';


class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            search: '',
            checkbox: true,
            posts: [{
                title: 'Test Post',
                username: 'Murr',
                profilePic: 'Dilly Dilly'
            }, {
                    title: 'Test Post #2',
                    username: 'Richie',
                    profilePic: 'Pugs!'
            }, {
                title: 'More fake data',
                username: 'helo',
                profilePic: 'fake picture'
            }]
        }
    }

    searchInput(e){
        this.setState({search: e})
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
            <input type='checkbox' />
            {posts}
          </div>;
    }
}

export default Dashboard;