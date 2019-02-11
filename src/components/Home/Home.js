import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      users: [{"name":'Daniel', "image": "https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg", "handle": 'Dmoney', "profile": 'This file should contain all the record creation needed to seed the database with its default values.'}]
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/test_users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
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
      </div>
    );
  }

}
