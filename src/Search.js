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
      inputVal: '',
      stateAbbrev: ''
    }
  }

  updateVal = (e) => {
    this.setState({ inputVal: e.target.value })
  }

  selectState = (e) => {
    this.setState({ stateAbbrev: e.target.value})
  }

  render() {
    return(
      <div>
        <input type="text" onChange={this.updateVal}/>
        <button onClick={() => this.props.setLocation(this.state.inputVal, this.state.stateAbbrev)}>SEARCH</button>
        <select name="states" id="state-list" onChange={this.selectState}>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Lousiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesotta</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregona</option>
          <option value="PA">Pennsylvnia</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisonsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
    )
  }
}

export default Search;