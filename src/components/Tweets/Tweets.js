import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import TweetList from "./TweetList";
class Tweets extends React.Component {
    render() {
        return (
            <li className="collection-item image">
                <img className="circle" src={this.props.image} />
                <span className="title">{this.props.firstname}</span>
                <time>{this.props.tweets}</time>
                <p>{this.props.container}</p>
            </li>
        )
    }
}
export default Tweets;
