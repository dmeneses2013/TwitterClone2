import React, { Component } from 'react';

class Likes extends Component {

  constructor(props){

    super(props);
    this.state ={
      likes: [],
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }


  }

  render(){

    return(
      <div>
        <button onClick={this.updateLikes}>
        Like {this.state.likes}
        </button>

      </div>
    );

  }


}

export default Likes;
