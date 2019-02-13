import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';



class Feed extends Component {
  state = {
    tweet: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/tweets.json`)
      .then(resp => {
        // axios.get(`http://localhost:3001/users.json`)
        //   .then(res => {

            // const users = res.data;

            let tweet = resp.data;
            // for(let i=0;i< tweet.length;i++){
            //   console.log(tweet[i]);
            //   const t = tweet[i];
            //   const belongs = users.filter(f=>f.id ===t.user_id)[0];
            //   t.user = belongs;

            // }
            console.log(tweet);
            this.setState({ tweet });
          //
          // })


      })
  }

  render() {
    let dateFormat = moment(this.props.createdAt).fromNow().split(' ago')[0];

    return (
      <ul>

        { this.state.tweet.map(tweet => <div key={ tweet.id }>

              <img src={tweet.user.image}></img>
              <h2>{tweet.user.firstname} {tweet.user.lastname} {dateFormat}</h2>
              <p>{tweet.content}</p>
            </div>
        )}
      </ul>
    )
  }
}
export default Feed;
