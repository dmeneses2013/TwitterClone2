import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';


import Search from './components/Search/Search';
import UserProfile from './components/UserProfile/UserProfile';
import LoginPage from './components/Login/LoginPage';
import Register from './components/Register/RegistrationPage'
import  { Redirect } from 'react-router-dom';
import Likes from './components/Likes/Likes';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';


JavascriptTimeAgo.locale(en);




class ProtectedRoute extends Component {

  constructor() {
    super();
    this.state = { authenticated: null}
  }

  componentDidMount() {
    let token = localStorage.getItem('auth-token');
    if (token !== null) {
      this.setState({ authenticated: true },
          ()=>{console.log("Is signed in with key: " + this.state.authenticated)}
      );
    } else {
      this.setState({ authenticated: false },
      ()=>{console.log("Is not signed in")})
    }
  }

  render() {
  const { component: Component, ...props } = this.props
    return (
      <Route
        {...props}
        render={props => (
          this.state.authenticated ?
            <Component {...props} /> :
            <Redirect to='/login' />
        )}
      />
    )
  }
}


class UsedRoute extends Component {

  constructor() {
    super();
    this.state = { authenticated: null}
  }

  componentDidMount() {
    let token = localStorage.getItem('auth-token');
    if (token !== null) {
      this.setState({ authenticated: true },
          ()=>{console.log("Is old and signed in with key: " + this.state.authenticated)}
      );
    } else {
      this.setState({ authenticated: false },
      ()=>{console.log("Is old and not signed in")})
    }
  }

  render() {
  const { component: Component, ...props } = this.props
    return (
      <Route
        {...props}
        render={props => (
          this.state.authenticated ?
            <Redirect to='/' /> :
            <Component {...props} />
        )}
      />
    )
  }
}


const Routes = (
  <Router>
    <div>
      <ProtectedRoute exact path="/" component={ Home } />
      <UsedRoute exact path="/login" component={ LoginPage } />
      <UsedRoute exact path="/register" component={ Register } />
      <ProtectedRoute exact path="/search" component={ Search } />
      <ProtectedRoute exact path="/users/:id" component={ UserProfile } />

    </div>
  </Router>
);

export default Routes;
