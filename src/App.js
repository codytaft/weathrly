import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weatherly</h1>
        </header>
        <p className="App-intro">
          Search Bar Here
        </p>
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