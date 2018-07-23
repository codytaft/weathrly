import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Welcome from './Welcome.js';
import Search from './Search.js';
import getAllWeatherData from './weather.js';
import apiKey from './apiKey.js';
import CurrentWeather from './CurrentWeather.js';
import HourlyForecast from './7HourForecast.js';
import DailyForecast from './10DayForecast.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      locationData: {},
      searchedLocation: '',
      dataLoaded: false
    }
  }

  fetchAPI(city, state) {
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${state}/${city}.json`)
      .then( response => response.json())
      .then( (data) => {
        this.setState({
          locationData: getAllWeatherData(data),
          dataLoaded: true
        })
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  setLocation = (location) => {
    const [city, state] = location.split(', ');
    let noSpaceCity = city.replace(/ /, '_')
    this.setState({ searchedLocation: location });
    this.fetchAPI(noSpaceCity, state);
    localStorage.setItem('savedLocation', location);
  }

  returnToWelcomePage = () => {
    localStorage.removeItem('savedLocation');
    window.location.reload();
  }

  componentDidMount() {
    if (localStorage.getItem('savedLocation') !== null) {
      var retrievedLocation = localStorage.getItem('savedLocation');
      this.setLocation(retrievedLocation);
    }
  }

  render() {
    if (this.state.searchedLocation && this.state.dataLoaded) {
      return(
        <div className="Results-page">
          <button className="Home-button" onClick={this.returnToWelcomePage}></button>
          <h2>{this.state.locationData.currentWeather.currentLocation}</h2>
          <Search setLocation={this.setLocation}/>
          <CurrentWeather locationData={this.state.locationData}/>
          <HourlyForecast locationData={this.state.locationData}/>
          <DailyForecast locationData={this.state.locationData}/>
        </div>
      )
    }
    return (
      <div className="Welcome-page">
        <Welcome />
        <Search setLocation={this.setLocation} />
      </div>
    );
  }
}

export default App;