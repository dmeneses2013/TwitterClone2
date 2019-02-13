import React, { Component } from 'react';

import moment from 'moment';
import axios from 'axios';

export default class TweetList extends Component {

  render() {
    const { tweetlist, user } = this.props;
    const timestamp = moment(tweetlist.data.createdAt).fromNow().split(' ago')[0];

    return (
      <li className="list-group-item tweet">
        <div className="image-container">
          <img
            className="img-circle avatar"
            src={'https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png'} />
        </div>
        <div className="content-container">
          <h4 className="list-group-item-heading title">
            {user.data.Firstname}
          </h4>
          <h5 className="list-group-item-heading timestamp">
            {'-' + timestamp}
          </h5>
          <p className="list-group-item-text text">
            {tweetlist.data.tweet}
          </p>
        </div>
      </li>
    );
  }

}


TweetList.defaultProps = {
  user: {
    id: 1,
    data: {
      id: 1,
      Firstname: "lucca",
      avatar: "https://cloud.githubusercontent.com/assets/2637399/19027072/a36f0c7a-88e1-11e6-931e-7f67fe01367b.png"
    }
  }
};
