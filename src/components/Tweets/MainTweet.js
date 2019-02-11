import React, { Component } from 'react';
import axios from 'axios';

export default class MainTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tweetList: [{"id": "1", "content": "Heyyyy", "user_id": "12" }]};
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


class TweetBox extends Component {

    sendTweet(event) {
        event.preventDefault();
        this.props.sendTweet(this.refs.tweetTextArea.value);
        this.refs.tweetTextArea.value = '';
    }

    render(){
        return (
            <div className="row">
                <form onSubmit={this.sendTweet.bind(this)}>
                    <div className="input-field">
                        <textarea ref="tweetTextArea" className="textarea" />
                        <label>What's happening?</label>
                        <button type="submit"  className="btn right">Tweet</button>
                    </div>
                </form>
            </div>
        )
    }
}

const TweetList = (props) => {
    let tweets = this.props.tweetList.map(tweet => <Tweets key={tweet.id} {...tweet} />);
    return (
       <div>
         <ul className="collection">
          {tweets}
         </ul>
       </div>
    )
}

const Tweets = (props) =>  {
    return (
        <li className="collection-item image">
            <img className="circle" src={this.props.image} />
            <span className="title">{this.props.firstname}</span>
            <time>{this.props.tweets}</time>
            <p>{this.props.container}</p>
        </li>
    )
}
