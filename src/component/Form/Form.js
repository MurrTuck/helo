import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    sendFormInfo = (e) => {
        axios.post(`/api/post/${this.props.id}`, this.state)
    }

    render() {
        return (
            <div>
                <input placeholder="title" type="text" name="title" onChange={this.handleInput.bind(this)}/>
                <img src="" width="500px" alt=""/>
                <input placeholder="img" type="text" name="img" onChange={this.handleInput.bind(this)}/>
                <input placeholder="content" type="text" name="content" onChange={this.handleInput.bind(this)} />
                <button onClick={this.sendFormInfo.bind(this)}>Post</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        id: state.id
    }
}
export default connect(mapStateToProps)(Form);