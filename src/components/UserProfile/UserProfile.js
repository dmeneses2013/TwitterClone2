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
    let token = localStorage.getItem('auth-token');
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "Authorization" : `Bearer ${token}`
      }
    };
    axios.get(url, axiosConfig)
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
        <div>
          <h1>User Profile</h1>
          <h2>{this.state.user.firstname} {this.state.user.lastname}</h2>
          <img src={this.state.user.image} alt="https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png"></img>
        </div>
        <div>
          <TweetList tweets={this.state.user.tweets} />
        </div>
      </div>
    );
  }
}

const TweetList = (props) => {
    if (props.tweets === undefined) {return <div> No tweets eh</div>}
    let tweets = props.tweets.slice(0).reverse().map(tweet => <Tweets key={tweet.id} {...tweet} />);
    return (
       <div>
         <ul className="collection">
            {tweets}
         </ul>
       </div>
    )
}

const Tweets = (props) =>  {
    console.log(props)
    return (
        <li className="collection-item image">
            <img className="circle" src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png" alt="https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png" />
              <span className="title">{props.firstname}</span>
            <time>{props.tweets}</time>
            <p>{props.content}</p>
        </li>
    )
}
