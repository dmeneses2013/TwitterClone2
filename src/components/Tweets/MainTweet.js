import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import TweetBox from "./Tweetbox"
import TweetList from "./TweetList"

class MainTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tweetList: []};
    }

    formattedTweets(tweetList) {
        let formattedList = tweetList.map(tweet => {
            tweet = (tweet.created_at).newDate();
            return tweet;
        });
        return {
            tweetList: formattedList
        };
    }

    addTweet(tweetToAdd) {
        axios.post('./tweets', { content: tweetToAdd })
            .then( savedTweet => {
                let newTweetList = this.state.tweetList;
                newTweetList.unshift(savedTweet);
                this.setState(this.formattedTweets(newTweetList));
            })
            .error(error => console.log((error)));
    }

    componentDidMount(){
        axios.get("./tweets")
            .then(res => this.setState(this.formattedTweets()))
            .error(error => console.log(error));
    }

    render() {
        return (
           <div className="container">
               <TweetBox sendTweet={this.addTweet.bind(this)}/>
               <TweetList tweets={this.state.tweetList} />
           </div>
        )
    }
}
export default MainTweet;
