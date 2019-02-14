import React, { Component } from 'react';
import axios from 'axios';
import './Search.scss';
import queryString from 'query-string';
import NavBar from '../Navbar';

export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      results: []}
  }

  componentDidMount() {
    let query = queryString.parse(this.props.location.search)
    this.setState({query: query.firstname })
    this.performSearch(query.firstname)
  }


  performSearch = (props) => {
    let token = localStorage.getItem('auth-token');
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "Authorization" : `Bearer ${token}`
      }
    };
    axios.get('http://localhost:3001/users', {
      params: {
        "firstname": props
        }
      }, axiosConfig)
      .then(res => {
        const results = res.data;
        this.setState({ results });
      })
  }

  render() {
    return(
      <div>
        <NavBar />
        {this.state.results.map( (props) => <SearchResult key={props.id} results={props} onClick={this.handleSearchResultClick} />)}
      </div>
    );
  }

}


class SearchField extends Component {

  constructor() {
    super();
    this.state = { query: ''}
  }

  handleInput = (e) => {
    this.setState({query: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input type="search" placeholder="Search Twitter" required onInput={ this.handleInput }/>
        <input type="submit" value="Search" />
      </form>
    );
  }
}


const SearchResult = (props) => {
  return (
   <a href={'#/users/' + props.results.id}>
    <div className="search-results" onClick={props.onClick}>
      <h1>{props.results.handle}</h1>
      <h2>{props.results.firstname} {props.results.lastname}</h2>
      <img src={props.results.image} alt="https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png"></img>
      <h4> {props.results.profile}</h4>
      <h1>Hi</h1>
     </div>
    </a>
    )
  }
