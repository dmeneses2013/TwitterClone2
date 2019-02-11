import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Tweets from "./Tweets"

 class TweetList extends React.Component {
    render() {
        let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);
        return (
            <div>
                <ul className="collection">
                    {tweets}
                </ul>
            </div>
        )
    }

}

export default TweetList;
