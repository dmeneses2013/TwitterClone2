import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Header from './Header';
import Feed from './Feed';
import '../index.css';


export default class Layout extends Component {
  constructor(props) {
    super(props);
}
render() {
  return (
    <div>
    <div className="headernav">
        <Header />
    </div>
        <div className="container">
          <div className="row">
            <div className="feed col-md-offset-3 col-md-6">
            <Feed />
            </div>
          </div>
        </div>
      </div>
    )
}

}
