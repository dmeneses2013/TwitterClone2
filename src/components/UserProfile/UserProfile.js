import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../Navbar';
import {Media} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ReactTimeAgo from 'react-time-ago';
import Likes from '../Likes/Likes';

export default class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    let userid = this.props.match.params.id;
    let url = `http://localhost:3001/users/` + userid;
    let token = localStorage.getItem('auth-token');
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "Authorization" : `Bearer ${token}`
      }
    };
    axios.get(url, axiosConfig)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })
  }

  componentDidUpdate(prevState) {
    if (this.state.results !== prevState.results) {
      this.diplayResults();
    }
  }


  render() {
    return(
      <div>
        <NavBar />
      <div>
        <div>
          <h1>User Profile</h1>
          <h2>{this.state.user.firstname} {this.state.user.lastname}</h2>
          <img
            width={400}
            height={400}

            src={this.state.user.image} alt="https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png"></img>
        </div>
        <div>
          <TweetList tweets={this.state.user.tweets} user={this.state.user} />
        </div>
      </div>
    </div>
    );
  }
}

const TweetList = (props) => {
    if (props.tweets === undefined) {return <div> No tweets eh</div>}
    let user = props.user
    let tweets = props.tweets.slice(0).reverse().map(tweet => <Tweets key={tweet.id} user={user} {...tweet} />);
    return (
       <div>
         <ul className="collection">
            {tweets}
         </ul>
       </div>
    )
}
const Tweets = (props) =>  {
    console.log(props)
    return (

      <div>
            <Media>

              <Image
              width={64}
              height={64}
              className="mr-3" src={props.user.image} alt="https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png" roundedCircle />

              <Media.Body>
                <Card border="dark" style={{ width: '40rem' }}>
         <Card.Header>
           <h2>{props.user.firstname}</h2>
           <h6><ReactTimeAgo date={props.created_at}/></h6>
         </Card.Header>
         <Card.Body>
           <Card.Title></Card.Title>
           <Card.Text>
            {props.content}
            <Likes />
           </Card.Text>
         </Card.Body>
       </Card>
        </Media.Body>
        </Media>
        </div>


    )
 }
