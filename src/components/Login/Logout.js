import React from 'react';
import { withRouter } from 'react-router-dom';

const logout = () => {
  localStorage.removeItem("auth-token");
  window.location = './';
  console.log(localStorage.getItem('auth-token'));
}

const setButtonText = () => {
  let token = localStorage.getItem('auth-token');
  if (token !== null) {
      return {__html: "Logout"};
  } else {
      return {__html: "Signin"};
  }
}

const LogoutButton = (props) => {
  console.log(localStorage.getItem('auth-token'));
  console.log(props.location.pathname);
  return <button onClick={logout} dangerouslySetInnerHTML={setButtonText()}></button>
}

export default withRouter(LogoutButton);
