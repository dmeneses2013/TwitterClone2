import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class TweetBox extends Component {

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
