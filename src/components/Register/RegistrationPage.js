import React, { Component } from 'react';
import axios from 'axios';

export default class RegistrationPage extends Component {

  constructor() {
    super();
    this.state = { query: ''}
  }


  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleSubmit = (e) => {

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    console.log(e)
    let url = 'http://localhost:3001/users';
      axios.post(url, {
      firstname: e.firstname,
      lastname: e.lastname,
      handle: e.handle,
      email: e.email,
      password: e.password
    }, axiosConfig)
    .then(function (response) {
      localStorage.setItem("auth-token", response.jwt)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <RegistrationForm onSubmit={this.handleSubmit}/>
        <h1>Or sign in</h1>
      </div>
    );
  }
}

class RegistrationForm extends Component {

  constructor() {
    super();
    this.state = { firstname: '', lastname: '', handle: '', email: '', password: ''}
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
      <form onSubmit={ this.handleSubmit }>
        <input placeholder="Handle" name='handle' required onInput={ this.handleInput }/>
        <input placeholder="Firstname" name='firstname' required onInput={ this.handleInput }/>
        <input placeholder="Lastname" name='lastname' required onInput={ this.handleInput }/>
        <input placeholder="Email" name='email' required onInput={ this.handleInput }/>
        <input placeholder="Password" name='password' required onInput={ this.handleInput } protected="true"/>
        <input type="submit" value="Search" />
      </form>
    );
  }
}
