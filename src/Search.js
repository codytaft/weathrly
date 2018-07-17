// Import from component
// create Search Class
// create state
// create input object
// create input method
// create submit button
// Export

import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ''
    }
  }

  updateVal = (e) => {
    this.setState({ inputVal: e.target.value })
  }

  render() {
    return(
      <div>
        <input type="text" onChange={this.updateVal}/>
        <button onClick={() => this.props.setLocation(this.state.inputVal)}>SEARCH</button>
      </div>
    )
  }
}

export default Search;