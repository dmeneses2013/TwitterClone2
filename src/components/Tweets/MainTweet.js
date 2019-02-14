import React, { Component } from 'react';
import axios from 'axios';
import Likes from '../Likes/Likes';
import NewTweet from './NewTweet'

export default class MainTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tweetList: []};
    }

    componentDidMount(){
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer " + localStorage.getItem('auth-token'),
        }
      };
      let url = `http://localhost:3001/tweets`;
      axios.get(url,axiosConfig)
        .then(res => {
          const tweetList = res.data;
          this.setState({ tweetList });
          console.log(tweetList);
        })
    }

    render() {
        return (
           <div className="container">
             <NewTweet />
             <TweetList tweets={this.state.tweetList} />
          </div>
        )
    }
}

const TweetList = (props) => {
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
        <div>
        <li className="collection-item image">
            <a href={'#/users/' + props.user.id}>
              <img className="circle" src={props.user.image} alt="https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png" />
            </a>
            <span className="title">{props.user.firstname}</span>
            <time>{props.created_at}</time>
            <p>{props.content}</p>
            <Likes />
        </li>
      </div>
    )
}
