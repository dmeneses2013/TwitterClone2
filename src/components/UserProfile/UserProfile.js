import React, { Component } from 'react';
import axios from 'axios';

export default class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    let userid = this.props.match.params.id;
    let url = `http://localhost:3001/users/` + userid;
    axios.get(url)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })
  }

  componentDidUpdate(prevState) {
    if (this.state.results !== prevState.results) {
      this.diplayResults();
    }
  }

  render() {
    return(
      <div>
        <h1>User Profile</h1>
        <h2>{this.state.user.firstname} {this.state.user.lastname}</h2>
        <img src={this.state.user.image}></img>
      </div>
    );
  }
}
