import React, { Component } from "react";
import Cities from "./cities.js";
import Trie from "@laurakwhit/complete-me";

const citiesTrie = new Trie();
citiesTrie.populate(Cities.data);

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      suggestions: []
    };
  }

  updateVal = e => {
    this.setState({ inputVal: e.target.value });
    if (e.target.value.length > 1) {
      this.setState({
        suggestions: citiesTrie.suggest(e.target.value)
      });
    } else {
      this.setState({ suggestions: [] });
    }
  };

  render() {
    return(
        <form className="Search">
          <input 
            className="Search__input" 
            list="suggested-cities" 
            type="text" 
            placeholder="ENTER CITY, STATE OR ZIP CODE" 
            onChange={this.updateVal} 
            aria-label="input location"
          />
           <datalist id="suggested-cities">
            { this.state.suggestions.map( (suggestion, i) => {
                return (
                  <option key={i}
                          value={suggestion}
                          />
                );
              })
            }
          </datalist>
          <button 
            className="Search__button" 
            onClick={() => this.props.setLocation(this.state.inputVal)} 
            aria-label="search button"></button> 
        </form>
    )
  }
}

export default Search;
