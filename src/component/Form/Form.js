import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            Title: '',
            Image: '',
            Content: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <div>
                <input placeholder="title" type="text" name="title" onChange={this.handleInput.bind(this)}/>
                <img src="" width="500px" alt=""/>
                <input placeholder="img" type="text" name="img" onChange={this.handleInput.bing(this)}/>
                
            </div>
        )
    }
}

export default Form;