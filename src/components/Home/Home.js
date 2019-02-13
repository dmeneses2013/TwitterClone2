import React, { Component } from 'react';
import axios from 'axios';
import LogoutButton from '../Login/Logout.js';
import MainTweet from '../Tweets/MainTweet';

export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      users: [{"name":'Daniel', "image": "https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg", "handle": 'Dmoney', "profile": 'This file should contain all the record creation needed to seed the database with its default values.'}]
    }
  }

  componentDidMount() {

    }

  componentDidUpdate(prevState) {
    if (this.state.results !== prevState.results) {
      this.diplayResults();
    }
  }

  render() {

    return(
      <div>
        <LogoutButton />
        <MainTweet />
      </div>
    );
  }

}
