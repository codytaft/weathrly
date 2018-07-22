import React, { Component } from 'react';

import getAllWeatherData from './weather.js'

class CurrentWeather extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section className="current-weather">
        <img src={this.props.locationData.currentWeather.currentTempIcon}/>
        <p className="card_temp"><span className="card_temp--lo"></span></p>
        <p className="current-weather">{this.props.locationData.currentWeather.currentTemp}&#8457;</p>
        <p>{this.props.locationData.currentWeather.currentDescription}</p>
        <p>TODAY</p>
        <p>{this.props.locationData.currentWeather.currentDay} {this.props.locationData.currentWeather.currentHour}:00</p>
      </section>
    ) 
  }
}

export default CurrentWeather;