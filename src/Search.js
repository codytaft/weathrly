import React, { Component } from 'react';
import Cities from './cities.js';
import Trie from '@laurakwhit/complete-me';

const citiesTrie = new Trie();
citiesTrie.populate(Cities.data);


class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ''
    }
  }

  updateVal = (e) => {
    this.setState({ inputVal: e.target.value });
    this.getSuggestions(e.target.value);
  }

  getSuggestions = (prefix) => {
    console.log(prefix)
    const suggestions = citiesTrie.suggest(prefix);
    console.log(suggestions);
  }

  render() {
    return(
      <form className="Search">
        <input className="Search__input" type="text" placeholder="ENTER CITY/STATE OR ZIP CODE" onChange={this.updateVal}/>
        <button className="Search__button" onClick={() => this.props.setLocation(this.state.inputVal)}></button> 
      </form>
    )
  }
}

export default Search;