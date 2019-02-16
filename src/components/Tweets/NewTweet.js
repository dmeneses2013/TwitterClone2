import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




export default class NewTweet extends Component {

    constructor(props) {
        super(props);
        this.state = {user: {}};
    }

    componentDidMount() {
      let user = localStorage.getItem('current-user');
      user = JSON.parse(user);
      this.setState({user})
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
        });
    }

    postTweet = (e) => {
      let user = this.state.user.id;
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer " + localStorage.getItem('auth-token'),
        }
      };
      console.log(localStorage.getItem('auth-token'));
      let url = `http://localhost:3001/tweets`;
      axios.post(url, {
          user_id : user,
          content: e,
      }, axiosConfig)
      .then(response => {
        console.log(response.data);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    render() {
        return (
           <div>
              <NewTweetForm onSubmit={this.postTweet} />
          </div>
        )
    }
}


class NewTweetForm extends Component {

  constructor(props) {
      super(props);
      this.state = {content: ''}
  }

  handleInput = (e) => {
    this.setState({content: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.content);
  }

  render() {
      return (
        <div>
<Form required onSubmit={this.handleSubmit}>
<Form.Control as="textarea" type="text"  rows="2" cols="40" placeholder="Write stuff.." onInput={this.handleInput}>
    </Form.Control><br></br>

  <Button type="submit" ClassName="tweetbut" variant="outline-primary">Tweet</Button>
</Form>
</div>
      )
    }
}
