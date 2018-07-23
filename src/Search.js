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
      <div className="Search">
        <input className="Search__input" type="text" placeholder="ENTER CITY/STATE OR ZIP CODE" onChange={this.updateVal}/>
        <button className="Search__button" onClick={() => this.props.setLocation(this.state.inputVal)}></button> 
      </div>
    )
  }
}

export default Search;