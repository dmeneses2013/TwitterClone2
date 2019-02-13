import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header';
import Layout from './components/Layout';
import Feed from './components/Feed';
import Search from './components/Search/Search';
import UserProfile from './components/UserProfile/UserProfile';
import LoginPage from './components/LoginPage';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/feed" component={ Feed } />
      <Route exact path="/login" component={ LoginPage } />
      <Route exact path="/search" component={ Search } />
      <Route exact path="/header" component={ Header } />
      <Route exact path="/layout" component={ Layout }>

      </Route>

      <Route exact path="/users/:id" component={ UserProfile } />
    </div>
  </Router>
);

export default Routes;
