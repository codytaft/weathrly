import React, { Component } from 'react';

import getAllWeatherData from './weather.js'

class CurrentWeather extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section className="Results__current-weather">
        <img src={this.props.locationData.currentWeather.currentTempIcon}/>
        <p className="Results__current-weather--temp">{this.props.locationData.currentWeather.currentTemp}&#8457;</p>
        <p className="card__temp">{this.props.locationData.currentWeather.currentHi}<span className="card__temp--lo">{this.props.locationData.currentWeather.currentLo}</span></p>
        <p className="Results__current-weather--description">{this.props.locationData.currentWeather.currentDescription}</p>
        <p className="Results__current-weather--today" >TODAY</p>
        <p className="Results__current-weather--date">{this.props.locationData.currentWeather.currentDay} {this.props.locationData.currentWeather.currentHour}:00</p>
      </section>
    ) 
  }
}

export default CurrentWeather;