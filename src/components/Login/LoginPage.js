import React, { Component } from 'react';
import  { Link } from 'react-router-dom'
import axios from 'axios';
import './LoginPage.scss';

export default class LoginPage extends Component {

  constructor() {
    super();
    this.state = {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleSubmit = (e) => {
    let token = localStorage.getItem('auth-token');
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "Authorization" : `Bearer ${token}`
      }
    };
    let url = 'http://localhost:3001/user_token';
      axios.post(url, {
        auth: {
          email : e.email,
          password: e.password
      }}, axiosConfig)
      .then(response => {
        localStorage.setItem("auth-token", response.data.jwt);
        this.saveUserToLocal(e);
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  saveUserToLocal = (e) => {
    let user = {}
    let token = localStorage.getItem('auth-token');
    let url = `http://localhost:3001/user`;
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "Authorization" : `Bearer ${token}`
      }
    };
    let params = {
      params: {
        "email": e.email
        }
    }
    axios.get(url,params,axiosConfig)
      .then(res => {
        let user = JSON.stringify(res.data)
        console.log(user)
        localStorage.setItem("current-user", user);
        window.location = '/';
      })
  }

  render() {
    let state = <LoginForm onSubmit={this.handleSubmit}/>;
    return(
        state
    );
  }
}

class LoginForm extends Component {

  constructor() {
    super();
    this.state = { email: '', password: '', isLoggedIn: false}
  }

  handleInput = (e) => {
    this.setState({ [e.target.name] : e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return(
      <div className="login-form">
        <form onSubmit={ this.handleSubmit }>
          <input placeholder="Email" name='email' required onInput={ this.handleInput }/>
          <input placeholder="Password" name='password' type="password" required onInput={ this.handleInput } protected="true"/>
          <input id="submit" type="submit" value="Submit" />
        </form>
        <Link to="/register">Or Register</Link>
      </div>
    );
  }
}
