import React, { Component } from 'react';

import getAllWeatherData from './weather.js'

class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      currentDay: '',
      currentTemp: '',
      currentTempIcon: '',
      currentDescription: '',
      currentHi: '',
      currentLo: ''
    }
  }

  setCurrentTemps = () => {
    let date = getAllWeatherData.dailyWeather[0].day;
    this.setState({ currentDay: date});

    let temp = getAllWeatherData.currentWeather.currentTemp;
    this.setState({ currentTemp: temp });

    let icon = getAllWeatherData.currentWeather.currentTempIcon;
    this.setState({ currentTempIcon: icon});

    let desciption = getAllWeatherData.currentWeather.currentDescription;
    this.setState({ currentDescription: desciption});

    let hi = getAllWeatherData.dailyWeather[0].high;
    this.setState({ currentDescription: hi});

    let lo = getAllWeatherData.dailyWeather[0].low;
    this.setState({ currentDescription: lo});
  }

  render() {
    return(
      <div className="current-weather-section">
        <header>
          <p></p>
        </header>
        <p className="current-weather">{this.state.currentTemp}</p>
        <div className="current-hi-lo">
          <p className="current-hi">{this.state.currentHi}</p>
          <p className="current-lo">{this.state.currentLo}</p>
        </div>
      </div>
    ) 
  }
}

export default CurrentWeather;



// Will have current conditions
// Need HTML for displaying the date
// Block for current temperature
// Blocks for hi-low temp
// HTML for summary/description
// Image representing the day
// Export