import React, { Component } from 'react';
import axios from 'axios';
import './RegistrationPage.scss'

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
        <RegistrationForm onSubmit={this.handleSubmit}/>    
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
     <div>
       <div id="leftSide">
              <img src="https://thewritelife.com/wp-content/uploads/2013/11/Twitter_wink.png" alt=""></img>
        </div>

      <form className="RegForm" onSubmit={ this.handleSubmit }>
          <div>
          <h1>Sign Up</h1>
          <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" alt=""></img>
          </div>
          <table>
            <tr>
              <td><label for="handleInput">Username : </label></td>
              <td><input  id="handleInput" placeholder="Handle" name='handle' required onInput={ this.handleInput }/></td>
              </tr>

            <tr>
              <td><label for="firstnameInput">Firstname : </label></td>
              <td><input id="firstnameInput"  placeholder="Firstname" name='firstname' required onInput={ this.handleInput }/></td>
            </tr>

            <tr>
              <td><label for="lastnameInput">Lastname : </label></td>
              <td><input id="lastnameInput"  placeholder="Lastname" name='lastname' required onInput={ this.handleInput }/></td>
            </tr>

            <tr>
              <td><label for="emailInput">Email : </label></td>
              <td><input id="emailInput"  placeholder="Email" name='email' required onInput={ this.handleInput }/></td>
            </tr>

            <tr>
              <td><label for="passwordInput">Password : </label></td>
              <td><input id="passwordInput"  placeholder="Password" name='password' required onInput={ this.handleInput } protected="true"/></td>
            </tr>
          </table>
        <input  id="submitButton" type="submit" value="Search" />
      </form>

      </div>
    );
  }
}
