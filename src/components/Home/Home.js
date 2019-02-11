import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      users: [{"name":'Daniel', "image": "https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg", "handle": 'Dmoney', "profile": 'This file should contain all the record creation needed to seed the database with its default values.'

      }]
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
        <VeritcleListItems users={this.state.users} />
      </div>
    );
  }

}

const VeritcleListItems = (props) => {
  return props.users.map( (result) =>
  <div class="profile-preview">
  <h3>{result.name}</h3>
  <h3>{result.handle}</h3>
  <img src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"></img>
  <h4> {result.profile}</h4>

  </div>


  )
}




const TweetObject = (props) => {
  let user = props.users;
  return (

      <div>
        <div>User Name</div>
        <div>User Pic</div>
      </div>
    


)
}
