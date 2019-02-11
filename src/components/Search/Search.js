import React, { Component } from 'react';
import axios from 'axios';
import './Search.scss';

export default class Search extends Component {

  constructor() {
    super();
    this.state = {results: []}
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
        "firstname": props
        }
      })
      .then(res => {
        const results = res.data;
        this.setState({ results });
      })
  }

  render() {
    return(
      <div>
        <SearchField onSubmit={this.performSearch} />
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
      <img src={props.results.image}></img>
      <h4> {props.results.profile}</h4>
     </div>
    </a>
    )
  }
