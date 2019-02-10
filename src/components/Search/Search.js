import React, { Component } from 'react';
import axios from 'axios';
import './Search.scss';

export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      results: []
    }
  }

  componentDidMount() {
  }

  componentDidUpdate(prevState) {
    if (this.state.results !== prevState.results) {
      this.diplayResults();
    }
  }

  diplayResults = () => {
     this.state.results.map( (result) => <li>{result}</li> )
  }

  performSearch = (props) => {
    axios.get('http://localhost:3001/users', {
      params: {
        query: {props}
        }
      })
      .then(res => {
        const results = res.data;
        this.setState({ results });
      })
  }

  handleSearchResultClick = (props) => {
    // Save query and results to local cache
  }

  render() {
    return(
      <div>
        <SearchField onSubmit={this.performSearch} />
        {this.state.results.map( (props) => <SearchResults key={props.id} results={props} onClick={this.handleSearchResultClick} />)}
      </div>
    );
  }

}


class SearchField extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
    }
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

class SearchResults extends Component {

  constructor() {
    super();
    this.state = {
      userid: '',
    }
  }

  componentDidMount() {
    this.setState({userid: this.props.results.id});
  }

  handleClick = (e) => {
    this.props.onClick(this.state.userid);
  }

  render() {
    return (
        <a href={'#/users/' + this.props.results.id}>
        <div className="search-results" onClick={this.handleClick}>
          <h1>{this.props.results.handle}</h1>
          <h2>{this.props.results.firstname} {this.props.results.lastname}</h2>
          <img src={this.props.results.image}></img>
          <h4> {this.props.results.profile}</h4>
        </div>
        </a>
      );
  }


}
