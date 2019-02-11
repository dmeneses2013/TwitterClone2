import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Search from './components/Search/Search';
import UserProfile from './components/UserProfile/UserProfile';
import LoginPage from './components/LoginPage';
import MainTweet from './components/Tweets/MainTweet';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ LoginPage } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/users/:id" component={ UserProfile } />
    </div>
  </Router>
);

export default Routes;
