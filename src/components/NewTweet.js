import React, { Component } from 'react';
import axios from 'axios';


class NewTweet extends Component{
 constructor(props){
    super(props);
    this.state ={
        content: ''

    };

    handleChange = event => {
     this.setState({ [event.target.name]: event.target.value });
   }
   handleSubmit = event => {
   event.preventDefault();

   const tweet = { content: this.state.content}
   axios.post('http://localhost:3001/tweets.json').then(response => {
     console.log(response);
     console.log(response.data);

 }
 render() {

    return(
      <div>
      <form onSubmit={e => this.handleSubmit(e)}>
             <input
               name="title"
               onChange={this.handleChange}
               placeholder="title"
               type="text"
             />
             </form>
             </div>
}

export default NewTweet;
