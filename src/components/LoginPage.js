import React, { Component } from 'react';
import axios from 'axios';

export default class LoginPage extends Component {

  constructor() {
    super();
    this.state = { query: ''}
  }


  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleSubmit = (e) => {
    console.log(e);
  }

  render() {
    return(
      <div>
        <LoginForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

class LoginForm extends Component {

  constructor() {
    super();
    this.state = { firstname: '', lastname: '', email: '', password: ''}
  }

  handleInput = (e) => {
    this.setState({state.firstname : e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input placeholder="Firstname" name='firstname' required onInput={ this.handleInput }/>
        <input placeholder="Lastname Twitter" name='lastname' required onInput={ this.handleInput }/>
        <input placeholder="Email" name='email' required onInput={ this.handleInput }/>
        <input placeholder="Password" name='password' required onInput={ this.handleInput } protected/>
        <input type="submit" value="Search" />
      </form>
    );
  }
}
