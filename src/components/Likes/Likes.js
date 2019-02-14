import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Likes extends Component {

  constructor(props){
    super(props);

//       likes: [],
//
//       updated: false
//     }
// this.state ={
// likes: false
// }
//     this.updateLikes = this.updateLikes.bind(this);
//   }
//
//   updateLikes() {
//
//     if(!this.state.updated) {
//       this.setState((prevState, props) => {
//         return {
//           likes: prevState.likes + 1,
//           updated: true
//         };
//       });
//     } else {
//
//       this.setState((prevState, props) => {
//         return {
//           likes: prevState.likes - 1,
//           updated: false
//         };
//       });
//     }
//
//
//   }
//
//   render(){
//
//     return(
//       <div>
//         <button onClick={this.updateLikes}>
//         Like {this.state.likes}
//         </button>
//
//       </div>
//     );
//
//   }
//
//
// }
this.state ={
likes: false
}

this.toggleLikes = this.toggleLikes.bind(this);
}
toggleLikes() {
  this.setState(prevState => ({
    likes: !prevState.likes
      }))
}

render() {
    const icon = this.state.likes? (<span key={this.state.likes} className="fas fa-heart"/>) : (<span key={this.state.likes} className="fas fa-heartbeat"/>);

    return (
      <div className="likesbut" onClick={this.toggleLikes}>
        {icon}
        <span className="likesbut-text">{this.props.icon}</span>
      </div>
    );
  }
}



export default Likes;
