import React, { Component } from 'react';
import axios from 'axios';
import Likes from '../Likes/Likes';
import NewTweet from './NewTweet';
import {Media} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'
import './MainTweet.scss';
import ReactTimeAgo from 'react-time-ago';

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
             <br></br>
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
      <Media>
        <a href={'#/users/' + props.user.id}>
        <Image
        width={64}
        height={64}
        className="mr-3" src={props.user.image} alt="https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png" roundedCircle />
    </a>
        <Media.Body>
          <Card border="dark" style={{ width: '40rem' }}>
   <Card.Header>
     <h2>{props.user.firstname}</h2>
     <h6><ReactTimeAgo dateTime={props.created_at}/></h6>
   </Card.Header>
   <Card.Body>
     <Card.Title></Card.Title>
     <Card.Text>
      {props.content}
      <Likes />
     </Card.Text>
   </Card.Body>
 </Card>
  </Media.Body>
  </Media>
  </div>
);
}
