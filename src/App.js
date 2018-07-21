import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';
import Search from './Search.js';
import getAllWeatherData from './weather.js';
import apiKey from './apiKey.js';
// import data from './WeatherData.js';
import CurrentWeather from './CurrentWeather.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      locationData: {},
      searchedLocation: '',
      dataLoaded: false
    }
  }

  // New weather class to store fetched weather in state

  fetchAPI() {
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/CA/San_Francisco.json`)
      .then( response => response.json())
      .then( (data) => {
        this.setState({
          locationData: getAllWeatherData(data),
          dataLoaded: true
        })
      })
      
      // .then( (data) => {
      //   console.log(data)
      // })
      .catch(error => {
        throw new Error(error);
      });
  }

  setLocation = (location) => {
    this.setState({ searchedLocation: location });
    this.fetchAPI();
    // let locationWeather = getAllWeatherData(data);
    // this.setState({ locationData: locationWeather });
  }

  render() {
    if (this.state.searchedLocation && this.state.dataLoaded) {
      return(
        <div className="searchResultPage">
          <h1 className="App-title">WEATHERLY</h1>
          <h2>{this.state.searchedLocation}</h2>
          <Search setLocation={this.setLocation}/>
          <CurrentWeather locationData={this.state.locationData}/>
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

// Put in prop.types for all components