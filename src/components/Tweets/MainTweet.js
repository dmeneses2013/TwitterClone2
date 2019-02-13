import React, { Component } from 'react';
import axios from 'axios';

export default class MainTweet extends React.Component {
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
      let url = 'http://localhost:3001/tweets';
      axios.post(url, { content: tweetToAdd })
          .then( savedTweet => {
              let newTweetList = this.state.tweetList;
              newTweetList.unshift(savedTweet);
              this.setState(this.formattedTweets(newTweetList));
          })
          .error(error => console.log((error)));
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
             <TweetBox sendTweet={this.addTweet.bind(this)}/>
             <TweetList tweets={this.state.tweetList} />
\           </div>
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
    let tweets = props.tweets.map(tweet => <Tweets key={tweet.id} {...tweet} />);
    return (
       <div>
         <ul className="collection">
            {tweets}
         </ul>
       </div>
    )
}

const Tweets = (props) =>  {
  console.log()
    return (
        <li className="collection-item image">
            <img className="circle" src={props.image} alt="https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png" />
            <span className="title">{props.firstname}</span>
            <time>{props.tweets}</time>
            <p>{props.container}</p>
        </li>
    )
}
