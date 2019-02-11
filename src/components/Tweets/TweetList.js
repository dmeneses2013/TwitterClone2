import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Tweets from "./Tweets";

 export default class TweetList extends Component {
   console.log(this.props)
    render() {
      //  let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);
        return (
            <div>
                <ul className="collection">
                  //  {tweets}
                </ul>
            </div>
        )
    }

}
