import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Search from './Search/Search';


export default class Header extends Component {

  render() {
    return(
      <nav className="navbar navbar-default navbar-static-top header">
          <div className="container">
            <div className="navbar-header">
              <Link to="/Layout" className="navbar-brand" >
                Twitter
                </Link>
                <Search />
            </div>
          </div>
        </nav>
      );

  }
}
