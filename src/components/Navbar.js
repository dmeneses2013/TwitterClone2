import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, FormControl} from 'react-bootstrap';
import Search from './Search/Search';
import Logout from './Login/Logout';
import './NavBar.scss';

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {query: ''};
  }

  handleInput = (e) => {
    this.setState({query: e.target.value });
  }

  goToSearch = (e) => {
    e.preventDefault();
    window.location = "#/search?firstname=" + this.state.query;
  }

  render() {
      return (
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#/">Fake Twitter</Navbar.Brand>
          <Nav className="mr-auto">
          <Form onSubmit={this.goToSearch} inline className={"center"}>
            <FormControl type="text" name='query' placeholder="Search" className="mr-sm-2" onInput={ this.handleInput } required/>
            <Button variant="outline-light">Search</Button>
          </Form>

          </Nav>
          <Logout />
        </Navbar>
      )
    }
}
