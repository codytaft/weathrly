import getAllWeatherData from './weather.js' 

import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      currentHour: '',
      currentDay: '',
      currentIcon: '',
      projectedTemp: '',
      projectedHi: '',
      projectedLo: ''
    }
  }

  setCurrentHour

  render() {
    return(
      <div>
        <section>
          <p className="hour-day"></p>
          <img className="hour-day-icon" />
          <p className="projected-temp"></p>
        </section>
      </div>
        
    )
  }
}

export default Card
