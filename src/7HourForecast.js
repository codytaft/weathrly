import React, { Component } from 'react';

import Card from './Card.js';

const HourlyForecast = (props) => {
  return (
      props.locationData.hourlyWeather.map( (hour, i) => {
        return <Card currentData={hour} key={i} />;
      })
  )
}

export default HourlyForecast;