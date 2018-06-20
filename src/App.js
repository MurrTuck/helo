import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form'
import Post from './component/Post/Post'
import Route from './../src/route'
import {withRouter} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Helo</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.location.pathname === '/' ? null : <Nav/>}
        {Route}
      </div>
    );
  }
}

export default withRouter(App);
