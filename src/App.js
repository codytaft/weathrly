import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';
import Search from './Search.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    }
  }

  setLocation = (location) => {
    this.setState({ location: location })
  }

  render() {
    if (this.state.location) {
      return(
        <div>
          <h1 className="App-title">WEATHERLY</h1>
          <h2>{this.state.location}</h2>
          <Search setLocation={this.setLocation}/>
        </div>
      )
    }
    return (
      <div className="App">
        <h1 className="App-title">WEATHERLY</h1>
        <Welcome />
        <Search setLocation={this.setLocation}/>
      </div>
    );
  }
}

export default App;

// Import welcome.js
// Will display welcome page and search bar

// If city or location entered ->>

// Will display name of SEARCHED city
// Will display Home logo link
// Will display search bar
// Import Current conditions
// Import 7Hour
// Import 10Day
// Maybe something at the bottom...