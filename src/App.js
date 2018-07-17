import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';
import Search from './Search.js';
import getWeatherData from './weather.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      currentTemp: 0,
      hiTemp: 0,
      loTemp: 0,
    }
  }

  setLocation = (location) => {
    this.setState({ location: location })
    let locationWeather = getWeatherData(location)
    this.setState(locationWeather)
  }

  render() {
    if (this.state.location) {
      return(
        <div>
          <h1 className="App-title">WEATHERLY</h1>
          <h2>{this.state.location}</h2>
          <Search setLocation={this.setLocation}/>
          <p>{this.state.currentTemp}</p>
        </div>
      )
    }
    return (
      <div className="App">
        <h1 className="App-title">WEATHERLY</h1>
        <Welcome />
        <Search setLocation={this.setLocation} />
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