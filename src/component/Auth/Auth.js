import React, { Component } from 'react';
import axios from "axios";

class Auth extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }

        this.usernameInput = this.usernameInput.bind(this)
        this.registerUser = this.registerUser.bind(this)

    }

    usernameInput(e){
        this.setState({username: e.target.value})
        console.log(this.state.username)
    }

    passwordInput(e){
        this.setState({password: e})
        console.log(this.state.password)
    }

    registerUser(){
        let {username, password} = this.state
        axios.post('/api/auth/register', {username, password})
        console.log("User has been registered!")
        this.props.history.push("/dashboard")
    }

    loginUser(){
        let {username, password} = this.state
        axios.post('/api/auth/login', {username, password})
        console.log("User has been logged in!")
        this.props.history.push("/dashboard")
    }

    render(){
        return (
            <div>
                <input onChange={this.usernameInput} value={this.state.username} placeholder='username'/>
                <input onChange={(e) => this.passwordInput(e.target.value)} placeholder='password'/>
                <button onClick={() => this.loginUser()}>Login</button>
                <button onClick={() => this.registerUser()}>Register</button>
            </div>
        )
    }
}

export default Auth;